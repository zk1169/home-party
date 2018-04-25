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
        <div class="store-menu" :class="{'fixed':storeMenuFixed}" layout="row" layout-align="center center" id="fixed_menu">
            <!-- <div class="menu-item">大厅</div>
            <div class="menu-item">房间</div>
            <div class="menu-item">娱乐</div>
            <div class="menu-item">厨房</div>
            <div class="menu-item">周边</div>
            <div class="menu-item">活动</div> -->
            <div v-for="(item, index) in store.images" 
                :key="item.section" 
                class="menu-item" 
                :class="{'active':scrollIndex===index}">
                {{item.section}}
            </div>
            <div class="menu-line" :style="{transform:`translateX(${-300+scrollIndex*100}%)`}"></div>
        </div>
        <div class="store-detail">
            <div v-for="(image, index) in store.images" :key="index" :id="`section_id_${index}`">
                <div class="section-title">{{image.section}}</div>
                <div layout="row" layout-wrap>
                    <div flex="50" flex-xs="100" v-for="item in image.items" :key="item" class="image-item">
                        <img :src="item" alt="">
                    </div>
                </div>
            </div>
        </div>
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
    import $ from 'jquery';
    
    export default {
        name: 'store-detail',
        components: {
            HpImage
        },
        data() {
            return {
                store: CityList[0].storeList[0],
                scrollIndex: 0,
                storeMenuFixed: false
            };
        },
        mounted() {
            $(document).scroll(this.onScroll);
            setTimeout(()=>{
                this.menuTop = document.getElementById('fixed_menu').offsetTop;
                for(let i=0;i<this.storeSectionLength;i++){
                    this[`section_${i}`] = document.getElementById(`section_id_${i}`).offsetTop;
                }
            },2000);
        },
        computed: {
            storeSectionLength() {
                if (this.store && this.store.images) {
                    return this.store.images.length;
                }
                return 0;
            }
        },
        methods: {
            onScroll(ev) {
                let scrollTop = $('body,html').scrollTop(); 
                if (scrollTop >= this.menuTop - 73) {
                    this.storeMenuFixed = true;
                    for(let i=this.storeSectionLength;i>-1;i--){
                        if (scrollTop > this[`section_${i}`]-100-73){
                            this.scrollIndex = i;
                            break;
                        }
                    }
                } else {
                    this.storeMenuFixed = false;
                }
                
                // document.getElementById('section_id_0');
            }
        },
        destroyed() {
            $(document).off('scroll', this.onScroll);
        }
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
    .section1{
        .title{
            margin-bottom: 60px;
        }
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
        padding: 10px 0px;
        top: 0;
        background-color: #fff;
        z-index: 999;
        position: relative;
        .menu-item{
            font-size: 2.4rem;
            padding: 10px 30px;
        }
        .menu-item.active{
            color: $primary-color;
        }
        .menu-line{
            display: inline-block;
            width: 108px;
            border-bottom: solid 2px $primary-color;
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-300%);
            transition: .4s ease-in-out;
            -ms-transition: .4s ease-in-out;
        }
        .menu-item+.menu-item{
            border-left: solid 2px #d2d2d2;
        }
    }
    .store-menu.fixed{
        position: fixed;
        width: calc(100% - 25px);
        box-shadow: 0px 2px 2px #d2d2d2;
        top: $header-height;
    }
    .store-detail{
        padding-left: 10px;
        padding-right: 20px;
        border-top: solid 2px #d2d2d2;
        .section-title{
            margin-top: 30px;
            margin-bottom: 10px;
            font-size: 3.6rem;
            text-align: center;
            margin-left: 20px;
        }
        .image-item{
            position: relative;
            padding-left: 20px;
            margin-top: 20px;
            img{
                width: 100%;
            }
        }
    }
    // .pc-app{
    // }
    // .mobile-app{
    // }
</style>
