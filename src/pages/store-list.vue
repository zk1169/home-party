<template>
    <div class="store-list" style="overflow-x:hidden;">
        <div class="section1 relative">
            <hp-image :src="headerImage" :has-cover="false" alt=""></hp-image>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title fs-47">初夏5月，苏州太湖高大上新店开业</div><br>
                <a class="btn btn-white block" href="#/store-detail/1/1">查看店铺</a>
            </div>
        </div>
        <div class="store-wrap">
            <div v-for="city in cityList" :key="city.cityName">
                <div class="city-name">{{city.cityName}}</div>
                <div class="store-list" layout="row" layout-wrap>
                    <div v-for="store in city.storeList" :key="store.storeName" class="store-item" @click="storeClick(city.id, store.id)">
                        <img class="cover" :src="`http://1a27.top${store.cover}`" alt="">
                        <div class="store-name">{{store.storeName}}</div>
                        <div class="store-address">{{store.address}}</div>
                        <div class="store-price">¥ {{store.price}}</div>
                    </div>
                </div>
            </div>
            <div class="clearboth"></div>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import HpImage from '../components/hp-image';
    // import CityList from '../data/city-list';
    
    export default {
        name: 'store-list',
        components: {
            HpImage
        },
        data() {
            return {
                cityList: null,
                headerImage: './static/images/sd-s1.jpg'
            };
        },
        mounted() {
            const url = '/api/store/status?ts='+new Date().getTime();
            $.ajax({
                // dataType: 'application/json;charset=utf-8',
                type: "GET",
                url,
                success: (res) => {
                    this.cityList = [];
                    if (res && res.data) {
                        for(let i=0;i<res.data.length;i++){
                            const item = res.data[i];
                            item.storeName = item.name;
                            let cityIndex = -1;
                            if (this.cityList.length>0) {
                                for(let c=0;c<this.cityList.length;c++){
                                    if(item.cityId===this.cityList[c].id){
                                        cityIndex = c;
                                        break;
                                    }
                                }
                            }
                            if (cityIndex>-1) {
                                this.cityList[cityIndex].storeList.push(item);
                            } else {
                                this.cityList.push({
                                    id: item.cityId,
                                    cityName: item.cityName,
                                    storeList: [item]
                                });
                            }
                        }
                    }
                },
                error: (res) => {
                    this.$eventHub.$emit('ALERT', {type: 'warning', message: '服务器忙，请稍后重试。'});
                    // console.log('error');
                    // debugger;
                }
            });
            $.ajax({
                // dataType: 'application/json;charset=utf-8',
                type: "GET",
                url: `/api/banner/name/store-list?ts=${new Date().getTime()}`,
                success: (res) => {
                    this.headerImage = res.data.images;
                },
                error: (res) => {
                    this.$eventHub.$emit('ALERT', {type: 'warning', message: '服务器忙，请稍后重试。'});
                }
            });
        },
        methods: {
            storeClick(cityId , storeId){
                // this.$router.push(`/store-detail/${cityId}/${storeId}`);
                window.open(`#/store-detail/${cityId}/${storeId}`, '_blank');
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .store-wrap{
        padding: 0 30px;
        padding-bottom: 50px;
        .city-name{
            margin-top: 50px;
            font-size: 3.6rem;
        }
        .store-list{
            .store-item{
                width:330px;
                position: relative;
                overflow: hidden;
                float: left;
                // width: 21%;
                margin-top: 50px;
                // margin-left: 2%;
                margin-right: 20px;
                box-shadow: 0px 2px 2px #d2d2d2;
                cursor: pointer;
                .cover{
                    width: 100%;
                }
                .store-name{
                    font-size: 1.6rem;
                    padding: 0 8px;
                    padding-top: 8px;
                }
                .store-address{
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    font-size: 1.2rem;
                    color: #999;
                    padding: 8px;
                }
                .store-price{
                    font-size: 1.8rem;
                    color: $primary-color;
                    padding: 0 10px;
                    padding-bottom: 10px;
                }
            }
        }
    }
    .line{
        display:inline-block;
        width: 96%;
        border-top: solid 1px #d2d2d2;
        margin-left: 2%;
    }
    .pc-app{
        .section1 .title{
            margin-bottom: 60px;
        }
    }
    .mobile-app{
        .section1 .title{
            font-size: 22px!important;
            margin-bottom: 10px;
        }
        .city-name{
            font-size: 2rem;
            margin-top: 30px;
        }
        .store-item{
            margin-top: 20px!important;
        }
    }
</style>
