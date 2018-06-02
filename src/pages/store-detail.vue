<template>
    <div class="store-detail-component" style="overflow-x:hidden;">
        <div class="store-wrap text-center">
            <div class="store-name fs-36">{{store.storeName}}</div>
            <div class="fs-16" style="margin-top: 10px;">{{store.address}}</div>
            <div layout="row" layout-align="center space-around" class="text-left" style="margin-top: 30px;" layout-wrap>
                <div flex="10" flex-xs="0"></div>
                <div class="place" flex="30" flex-xs="100">
                    <span class="fs-20 font-bold">配备</span><br>
                    <span class="fs-16">{{store.playItems}}</span>
                </div>
                <div class="price" flex="25" flex-xs="100">
                    <span class="fs-20 font-bold">价格</span><br>
                    <span class="fs-16">周一至周四：{{store.priceWorkday==='未知'?'? ':store.priceWorkday}}元/场</span><br>
                    <span class="fs-16">周五至周日：{{store.priceWeekend}}元/场</span><br>
                    <span class="fs-16">整包价格：{{store.allPrice}}元/场</span>
                </div>
                <div class="open-time" flex="25" flex-xs="100">
                    <span class="fs-20 font-bold">预定</span><br>
                    <span class="fs-16">预定电话：{{store.orderNumber}}&nbsp;<a class="call-phone" :href="`tel:${store.orderNumber}`">拨打</a></span><br>
                    <span class="fs-16">营业时间：{{store.openTime}}</span><br>
                    <span class="fs-16">&nbsp;</span>
                </div>
            </div>
        </div><br>
        <div class="section1 relative">
            <img :src="store.coverBig" alt="" class="width100">
            <!-- <hp-image :src="store.cover" alt=""></hp-image> -->
            <!-- <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title fs-47">初夏5月，苏州太湖高大上新店开业</div><br>
                <a class="btn btn-white block">查看店铺</a>
            </div> -->
        </div>
        <!-- <div class="store-menu" :class="{'fixed':storeMenuFixed}" layout="row" layout-align="center center" id="fixed_menu">
            <div v-for="item in store.images"
                :key="item.section" 
                class="menu-item">
                {{item.section}}
            </div>
        </div> -->
        <div class="store-detail">
            <div v-for="(image, index) in store.images" :key="index" :id="`section_id_${index}`">
                <div class="section-title">{{image.section}}</div>
                <div layout="row" layout-wrap class="section-images">
                    <div flex="50" flex-xs="100" v-for="item in image.items" :key="item" class="image-item">
                        <img :src="item" alt="">
                    </div>
                </div>
            </div>
        </div>
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
            const storeId = this.$route.params.storeId - 1;
            const cityId = this.$route.params.cityId - 1;
            
            return {
                store: CityList[cityId].storeList[storeId],
                // scrollIndex: -1,
                storeMenuFixed: false
            };
        },
        mounted() {
            // $(document).scroll(this.onScroll);
            // setTimeout(()=>{
            //     this.menuTop = document.getElementById('fixed_menu').offsetTop;
            //     for(let i=0;i<this.storeSectionLength;i++){
            //         this[`section_${i}`] = document.getElementById(`section_id_${i}`).offsetTop;
            //     }
            // },2000);
        },
        computed: {
            storeSectionLength() {
                if (this.store && this.store.images) {
                    return this.store.images.length;
                }
                return 0;
            }
        },
        // methods: {
        //     onScroll(ev) {
        //         let scrollTop = $('body,html').scrollTop(); 
        //         if (scrollTop >= this.menuTop - 73) {
        //             this.storeMenuFixed = true;
        //             for(let i=this.storeSectionLength;i>-1;i--){
        //                 if (scrollTop > this[`section_${i}`]-100-73){
        //                     this.scrollIndex = i;
        //                     break;
        //                 }
        //             }
        //         } else {
        //             this.storeMenuFixed = false;
        //         }
                
        //         // document.getElementById('section_id_0');
        //     }
        // },
        destroyed() {
            // $(document).off('scroll', this.onScroll);
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .line{
        margin-top: 100px;
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
            padding-top: 60px;
        }
        .place,.price,.open-time{
            padding: 20px 50px;
            background-color: #F5F5F5;
            line-height: 32px;
        }
        .price,.open-time{
            border-left: solid 2px #fff;
        }
    }
    .store-menu{
        padding: 10px 0px;
        top: 0;
        background-color: #fff;
        // z-index: 999;
        position: relative;
        box-shadow: 0px 2px 2px #d2d2d2;
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
        top: $header-height;
    }
    .store-detail{
        padding-left: 10px;
        padding-right: 60px;
        // border-top: solid 2px #d2d2d2;
        .section-title{
            margin-top: 60px;
            // margin-bottom: 10px;
            font-size: 2.4rem;
            text-align: center;
            margin-left: 60px;
            text-align: left;
        }
        .image-item{
            position: relative;
            padding-left: 60px;
            margin-top: 60px;
            img{
                width: 100%;
            }
        }
        .section-images{
            margin-top: -30px;
        }
    }
    // .pc-app{
    // }
    .mobile-app{
        .store-detail{
            padding: 0;
            .image-item{
                padding-left: 0;
                margin-top: 20px;
            }
            .section-images{
                margin-top: 0;
            }
            .section-title{
                margin-top: 30px;
                margin-left: 20px;
            }
        }
    }
</style>
