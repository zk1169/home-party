<template>
    <div class="store-detail">
        <div class="store-wrap text-center">
            <div class="store-name fs-36">{{store.storeName}}</div><br>
            <div class="fs-16">
                {{store.address}}&nbsp;&nbsp;&nbsp;&nbsp;
                预定电话：{{store.telphone}}
            </div><br>
            <div layout="row" layout-align="center center" class="text-left">
                <div class="place">
                    <span class="fs-20">场地</span><br><br>
                    <span class="fs-16">面积：{{store.square}}</span><br>
                    <span class="fs-16">可容纳：{{store.totalPeople}}</span>
                </div>
                <div class="price">
                    <span class="fs-20">价格</span><br><br>
                    <span class="fs-16">工作日：{{store.priceWorkday}}</span><br>
                    <span class="fs-16">周末，假期：{{store.priceWeekend}}</span>
                </div>
                <div class="open-time">
                    <span class="fs-20">开业时间</span><br><br>
                    <span class="fs-16">开业日：{{store.priceOpen}}</span><br>
                    <span class="fs-16">&nbsp;</span>
                </div>
            </div>
        </div><br>
        <div class="section1 relative">
            <hp-image src="./static/images/index-carousel-2.jpg" alt=""></hp-image>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title fs-47">初夏5月，苏州太湖高大上新店开业</div><br>
                <a class="btn btn-white block">查看店铺</a>
            </div>
        </div>
        <div class="store-menu" layout="row" layout-align="center center">
            <div class="menu-item">大厅</div>
            <div class="menu-item">房间</div>
            <div class="menu-item">娱乐</div>
            <div class="menu-item">厨房</div>
            <div class="menu-item">周边</div>
            <div class="menu-item">活动</div>
        </div>
        <div class="store-detail"></div>
        <!-- <div class="store-wrap">
            <div v-for="city in cityList" :key="city.cityName">
                <div class="city-name">{{city.cityName}}</div>
                <div class="store-list" layout="row" layout-wrap>
                    <div v-for="store in city.storeList" :key="store.storeName" class="store-item">
                        <img class="cover" :src="store.cover" alt="">
                        <div class="store-name">{{store.storeName}}</div>
                        <div class="store-address">{{store.address}}</div>
                        <div class="store-price">{{store.price}}</div>
                    </div>
                </div>
            </div>
            <div class="clearboth"></div>
        </div> -->
        <div class="line"></div>
    </div>
</template>

<script>
    import HpImage from '../components/hp-image';
    import CityList from '../data/city-list';
    
    export default {
        name: 'store-detail',
        components: {
            HpImage
        },
        data() {
            return {
                store: CityList[0].storeList[0]
            };
        },
        mounted() {
        },
        methods: {
        },
    }
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .line{
        display:inline-block;
        width: 96%;
        border-top: solid 1px #d2d2d2;
        margin-left: 2%;
    }
    .store-wrap{
        .store-name{
            margin-top: 40px;
        }
        .place,.price,.open-time{
            padding: 20px 50px;
        }
        .price,.open-time{
            border-left: solid 2px #d2d2d2;
        }
    }
    .store-menu{
        margin: 20px auto;
        .menu-item{
            font-size: 2.4rem;
            padding: 10px 30px;
        }
        .menu-item+.menu-item{
            border-left: solid 2px #d2d2d2;
        }
    }
    .store-detail{
        border-top: solid 2px #d2d2d2;
    }
    // .pc-app{
    // }
    // .mobile-app{
    // }
</style>
