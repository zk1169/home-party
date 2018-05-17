<template>
    <div class="introduce">
        <div class="section1 relative">
            <!-- <hp-image src="./static/images/index-carousel-2.jpg" alt=""></hp-image> -->
            <el-carousel arrow="never" :interval="5000">
                <el-carousel-item v-for="item in carouselList" :key="item">
                    <hp-image :src="item" alt=""></hp-image>
                </el-carousel-item>
            </el-carousel>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title">一个空间，N种娱乐体验</div>
                <a class="btn btn-white block" href="#/cooperation">了解加盟合作</a>
            </div>
        </div>
        <div class="section2 text-center">
            <div class="paragrah">
                <div class="title fs-36">一栋别墅，花样百出</div>
                <div class="p1 text-l3 fs-18 color-grey">随着消费水平的提高，人们对娱乐的需求越大，对娱乐方式的要求也越高。别墅轰趴顺应时代的潮流悄然探头！从各种分析中我们能预见，它将以越来越流行和被普及的姿态，取代传统单一的娱乐方式。前期的市场已验证它的潜力，而此时，正是进入这个领域的最佳时期！</div>
            </div>
            <div v-if="!isMobile" class="inline-block" style="max-width: 1440px;width:100%;">
                <div class="image-wrap" layout="column">
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="50" flex-xs="100" class="image-c"><img src="../../static/images/s2-1.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" class="image-item-padding"><img src="../../static/images/s2-2.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" class="image-item-padding"><img src="../../static/images/s2-3.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="25" flex-xs="50" class="overflow-hidden">
                            <div class="s5-text" layout="row" layout-align="center center">
                                <span>住宿<br><br>健身房<br><br>高尔夫<br><br>桌游房<br><br>桌球室<br><br>KTV</span>
                            </div>
                        </div>
                        <div flex="25" flex-xs="50" class="image-item-padding"><img src="../../static/images/s2-4.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" class="image-item-padding"><img src="../../static/images/s2-5.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" class="image-item-padding"><img src="../../static/images/s2-6.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="25" flex-xs="50"><img src="../../static/images/s2-7.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" class="image-item-padding"><img src="../../static/images/s2-8.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" class="image-item-padding"><img src="../../static/images/s2-9.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" class="overflow-hidden image-item-padding">
                            <div class="s5-text" layout="row" layout-align="center center">
                                <span>户外BBQ<br><br>厨房<br><br>XBOX游戏<br><br>麻将房<br><br>私人影院<br><br>VR体验馆</span>
                            </div>
                        </div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="25" flex-xs="50" class="overflow-hidden"><img src="../../static/images/s2-10.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" class="overflow-hidden image-item-padding">
                            <div class="s5-text" layout="row" layout-align="center center">
                                <span>酒吧<br><br>泳池派对<br><br>私人花园，运动场<br><br>会议服务，餐饮服务<br><br>私人主题活动<br><br>团建定制<br>...</span>
                            </div>
                        </div>
                        <div flex="50" flex-xs="100" class="image-item-padding"><img src="../../static/images/s2-11.jpg" alt=""></div>
                    </div>
                </div>
            </div>
            <div v-else class="inline-block" style="max-width: 1440px;width:100%;">
                <div class="image-wrap" layout="column">
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="50" flex-xs="100" class="image-c image-item-padding"><img src="../../static/images/s2-1.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="25" flex-xs="50" class="image-item-padding image-item-padding-right"><img src="../../static/images/s2-2.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" class="image-item-padding image-item-padding-left"><img src="../../static/images/s2-3.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="25" flex-xs="50" class="overflow-hidden image-item-padding-right">
                            <div class="s5-text" layout="row" layout-align="center center">
                                <span>住宿<br>健身房<br>高尔夫<br>桌游房<br>桌球室<br>KTV</span>
                            </div>
                        </div>
                        <div flex="25" flex-xs="50" class="image-item-padding image-item-padding-left"><img src="../../static/images/s2-4.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="25" flex-xs="50" class="image-item-padding image-item-padding-right"><img src="../../static/images/s2-5.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" class="image-item-padding image-item-padding-left"><img src="../../static/images/s2-6.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="25" flex-xs="50" class="image-item-padding-right"><img src="../../static/images/s2-7.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" class="overflow-hidden image-item-padding image-item-padding-left">
                            <div class="s5-text" layout="row" layout-align="center center">
                                <span>户外BBQ<br>厨房<br>XBOX游戏<br>麻将房<br>私人影院<br>VR体验馆</span>
                            </div>
                        </div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="25" flex-xs="50" class="image-item-padding image-item-padding-right"><img src="../../static/images/s2-9.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" class="image-item-padding image-item-padding-left"><img src="../../static/images/s2-8.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="25" flex-xs="50" class="overflow-hidden image-item-padding image-item-padding-right">
                            <div class="s5-text" layout="row" layout-align="center center">
                                <span>酒吧<br>泳池派对<br>私人花园，运动场<br>会议服务，餐饮服务<br>私人主题活动<br>团建定制<br>...</span>
                            </div>
                        </div>
                        <div flex="25" flex-xs="50" class="overflow-hidden image-item-padding-left"><img src="../../static/images/s2-10.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="50" flex-xs="100" class="image-item-padding"><img src="../../static/images/s2-11.jpg" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section3 section text-center">
            <!-- <div class="title fs-36">为什么人们需要新的聚会形式？</div> -->
            <img v-if="!isMobile" class="s3-image" src="../../static/images/s3-1.jpg" alt="">
            <img v-else class="s3-image" src="../../static/images/s3-1-mobile.jpg" alt="">
            <!-- <div layout="row" class="text-left paragrap">
                <div flex="50" style="padding-right: 10%;">
                    <div class="fs-24 text-l2">消费主力年轻化</div>
                    <div class="fs-16 text-l2">这批主力更热爱交际活动，愿意在玩和聚会上投入消费，每个人都希望被满足、玩的嗨</div>
                </div>
                <div flex="50">
                    <div class="fs-24 text-l2">消费主力年轻化</div>
                    <div class="fs-16 text-l2">这批主力更热爱交际活动，愿意在玩和聚会上投入消费，每个人都希望被满足、玩的嗨</div>
                </div>
            </div> -->
        </div>
        <div v-if="!isMobile" class="section4 section text-center">
            <!-- <div class="fs-36">国内聚会存在的问题是什么？</div> -->
            <div class="body" layout="row" layout-wrap>
                <div flex="40" flex-xs="100" class="overflow-hidden">
                    <img src="../../static/images/s4-1.jpg" alt="" class="width100">
                </div>
                <div flex class="text-right margin-left-10">
                    <div class="fs-36" style="margin-bottom: 60px;">国内聚会存在的问题是什么？</div>
                    <div class="fs-24 text-l2">服务单一，转场难</div><br>
                    <div class="fs-16 text-l1 color-grey">“每次跟朋友聚会都太单调了，但想玩的丰富点，那就要集体打车换场子，奔波过后，都没心思玩了，而且人多的话更众口难调！”</div><br><br><br><br>
                    <div class="fs-24 text-l2">费用高，体验差</div><br>
                    <div class="fs-16 text-l1 color-grey">越想玩的好越贵，比如唱K加吃饭，再去玩玩桌游，这么多人还真不便宜，而且不能保证服务和环境的质量。</div>
                </div>
            </div>
        </div>
        <div v-else class="section4 section text-center">
            <img class="width100" src="../../static/images/s4-mobile.jpg" alt="">
        </div>
        <div v-if="!isMobile" class="section4 section text-center">
            <!-- <div class="fs-36">市场潜力分析</div><br> -->
            <img class="width100" src="../../static/images/s5-1.jpg" alt="">
        </div>
        <div v-else class="section5 relative">
            <hp-image src="./static/images/s5-bg.jpg" :has-cover="false" alt=""></hp-image>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title fs-20">市场潜力分析</div>
                <div class="icon-wrap" layout="row" layout-align="space-around center">
                    <div class="icon-circle" :class="{'checked':s5CheckedIndex===1}" @click="s5CheckedIndex=1">
                        <!-- <img src="../../static/images/s5-icon1.png" alt=""> -->
                        <svg class="icon school" aria-hidden="true">
                            <use xlink:href="#icon-school"></use>
                        </svg>
                    </div>
                    <div class="icon-circle" :class="{'checked':s5CheckedIndex===2}" @click="s5CheckedIndex=2">
                        <svg class="icon loupan" aria-hidden="true">
                            <use xlink:href="#icon-loupan"></use>
                        </svg>
                    </div>
                    <div class="icon-circle" :class="{'checked':s5CheckedIndex===3}" @click="s5CheckedIndex=3">
                        <svg class="icon house1" aria-hidden="true">
                            <use xlink:href="#icon-house1"></use>
                        </svg>
                    </div>
                </div>
                <div class="section-image">
                    <img v-show="s5CheckedIndex===1" src="../../static/images/s5-section1.png" alt="">
                    <img v-show="s5CheckedIndex===2" src="../../static/images/s5-section2.png" alt="">
                    <img v-show="s5CheckedIndex===3" src="../../static/images/s5-section3.png" alt="">
                </div>
                <div style="position:absolute;bottom:15px;left: 45%;">
                    <span class="team-indicator-item" :class="{'checked': s5CheckedIndex===1}"></span>
                    <span class="team-indicator-item" :class="{'checked': s5CheckedIndex===2}"></span>
                    <span class="team-indicator-item" :class="{'checked': s5CheckedIndex===3}"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'element-ui/lib/theme-default/carousel.css';
    import 'element-ui/lib/theme-default/carousel-item.css';
    import Carousel from 'element-ui/lib/carousel';
    import CarouselItem from 'element-ui/lib/carousel-item';
    import HpImage from '../components/hp-image';
    
    export default {
        name: 'introduce',
        components: {
            'el-carousel': Carousel, 
            'el-carousel-item': CarouselItem,
            HpImage
        },
        data() {
            return {
                s5CheckedIndex: 1,
                carouselList: [
                    './static/images/i-s1.jpg',
                    './static/images/i-s2.jpg'
                ],
            };
        },
        mounted() {
            this.timer = setInterval(() => {
                this.s5CheckedIndex ++;
                if (this.s5CheckedIndex > 3) {
                    this.s5CheckedIndex = 1;
                }
            }, 3000);
        },
        methods: {
            touchStart(ev) {
                ev.preventDefault();
                const touch = ev.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
　　            this.startX = touch.pageX;
            },
            touchMove(ev) {
                ev.preventDefault();
                const touch = ev.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
　　            if (this.startX > touch.pageX) {
                    this.s5CheckedIndex --;
                    if (this.s5CheckedIndex < 1) {
                        this.s5CheckedIndex = 1;
                    }
                } else {
                    this.s5CheckedIndex ++;
                    if (this.s5CheckedIndex > 3) {
                        this.s5CheckedIndex = 1;
                    }
                }
            }
        },
        destroyed() {
            if (this.timer) {
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .s5-text{
        height:270px;
        // width:353px;
        background-color: $primary-color;
        color: #fff;
        font-size: 1.6rem;
    }
    .section2{
        .image-wrap div{
            overflow: hidden;
        }
        .image-c{
            background-color: #D8D8D8;
        }
        .image-wrap .image-item{
            margin-top: 10px;
            img{
                display: block;
            }
        }
    }
    .section3{
        .s3-image{
            width: 100%;
            margin: 30px 0;
        }
        .paragrap{
            width: 70%;
            margin-left: 15%;
            div{
                line-height: 36px;
            }
        }
    }
    .section4{
        .body{
            margin-top: 30px;
        }
        .text-right{
            text-align: left;
            background-color:#F5F5F5;
            padding:5%;
        }
    }
    .pc-app{
        .s1-text-wrap{
            .title{
                font-size: 4.7rem;
            }
            .btn{
                margin-top: 100px;
            }
        }
        .section2{
            .paragrah{padding: 60px 10%};
            .p1{
                margin-top: 30px;
            }
            .image-item-padding{
                padding-left:10px;
            }
        }
    }
    .mobile-app{
        .s1-text-wrap{
            .title{
                font-size: 3rem;
            }
            .btn{
                margin-top: 50px;
            }
        }
        .section2{
            .paragrah{padding: 30px 10%};
            .p1{
                margin-top: 15px;
            }
            .image-item-padding{
                padding-left:0;
            }
            .image-wrap .image-item img{
                width: 100%;
            }
            .s5-text{
                height: 100%;
            }
        }
        .section3{
            .s3-image{
                width: 80%;
            }
        }
        .section4{
            .body{
                margin-top: 15px;
            }
        }
        .section5{
            .title{
                margin-bottom: 10px;
            }
            .icon-wrap{
                width: 70%;
                margin-bottom: 10px;
                .icon-circle{
                    border-radius: 50%;
                    background-color: #fff;
                    height: 50px;
                    width: 50px;
                    line-height: 50px;
                    text-align: center;
                    .icon{
                        font-size: 30px;
                        margin-top: 9px;
                        color: $primary-color;
                    }
                }
                .icon-circle.checked{
                    background-color: $primary-color;
                    .icon{
                        color: #fff;
                    }
                }
            }
            .section-image{
                img{
                    width: 90%;
                    margin-left: 5%;
                }
            }
            .team-indicator-item{
                border-radius: 50%;
                height: 10px;
                width: 10px;
                display: inline-block;
                background-color: #666;
            }
            .team-indicator-item.checked{
                background-color: #fff;
            }
            .team-indicator-item+.team-indicator-item{
                margin-left: 10px;
            }
        }
    }
</style>
