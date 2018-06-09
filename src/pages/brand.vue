<template>
    <div class="brand" style="overflow-x:hidden;">
        <div class="section1 relative">
            <hp-image :src="headerImage" alt=""></hp-image>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title">因为更懂年轻人，所以我们受欢迎</div><br>
                <!-- <div class="sub-tilte fs-18">目前华中最大互联网+连锁轰趴品牌</div> -->
                <a class="btn btn-white block" href="#/cooperation">了解加盟合作</a>
            </div>
        </div>
        <div class="section2 section text-center">
            <div class="title">我们的愿景</div>
            <div class="p1" layout="row" layout-wrap>
                <div class="p1-item text-center" flex="1">
                    <div class="circle-primary inline-block" :class="{'big':!isMobile}">
                        <svg class="icon zuanshi" aria-hidden="true">
                            <use xlink:href="#icon-zuanshi"></use>
                        </svg>
                    </div><br><br>
                    <div class="text text-l3">打造中国领先的<br v-if="isMobile">专业派对文化<br>连锁品牌</div>
                </div>
                <div class="p1-item text-center" flex="1">
                    <div class="circle-primary inline-block" :class="{'big':!isMobile}">
                        <svg class="icon location-web" aria-hidden="true">
                            <use xlink:href="#icon-location-web"></use>
                        </svg>
                    </div><br><br>
                    <div class="text text-l3">打造中国优秀的<br v-if="isMobile">本地化互联网<br>+轰趴创业联盟</div>
                </div>
                <div class="p1-item text-center" flex="1">
                    <div class="circle-primary inline-block" :class="{'big':!isMobile}">
                        <svg class="icon lianjie" aria-hidden="true">
                            <use xlink:href="#icon-lianjie"></use>
                        </svg>
                    </div><br><br>
                    <div class="text text-l3">打造中国领先的<br v-if="isMobile">综合性聚会<br>娱乐平台</div>
                </div>
            </div>
        </div>

        <div class="section4 section text-center relative">
            <hp-image src="./static/images/b-s3.jpg" alt=""></hp-image>
            <div class="s4-text-wrap image-text-wrap" layout="column" layout-align="start center">
                <div class="title">我们的品牌宗旨</div>
                <div class="p1" layout="row" layout-wrap>
                    <div class="p1-item text-center" flex="1">
                        <svg class="icon yizhanshi fs-60" aria-hidden="true">
                            <use xlink:href="#icon-yizhanshi"></use>
                        </svg><br><br>
                        <div class="text-l2 font-bold">一站式服务</div><br>
                        <div class="text-l1">为客户提供吃、喝、玩、住一站式服务，打造多种娱乐场景的集合，更适合年轻人聚会的轰趴品牌</div>
                    </div>
                    <div class="p1-item text-center" flex="1">
                        <svg class="icon dunpai fs-60" aria-hidden="true">
                            <use xlink:href="#icon-dunpai"></use>
                        </svg><br><br>
                        <div class="text-l2 font-bold">标准化管理</div><br>
                        <div class="text-l1">打造轰趴行业标准化管理的行业准则，让客户享受到轰趴行业的五星级服务</div>
                    </div>
                    <div class="p1-item text-center" flex="1">
                        <svg class="icon guanjia fs-60" aria-hidden="true">
                            <use xlink:href="#icon-guanjia"></use>
                        </svg><br><br>
                        <div class="text-l2 font-bold">管家式服务</div><br>
                        <div class="text-l1">通过专业化培训，让每位管家=初级厨师+活动策划师+布场达人+轰趴运营专员</div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!isMobile" class="section5 section text-center">
            <div class="title">多元化盈利模式</div>
            <div class="inline-block" style="max-width: 1440px;width:100%;">
                <div class="image-wrap" layout="column">
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="50" flex-xs="100" class="overflow-hidden image-c"><img src="../../static/images/b-s4-1.jpg" alt=""></div>
                        <div flex="25" flex-xs="100" class="overflow-hidden image-item-padding"><img src="../../static/images/b-s4-2.jpg" alt=""></div>
                        <div flex="25" flex-xs="100" class="overflow-hidden image-item-padding">
                            <div class="s5-text" layout="row" layout-align="center center">
                                <span>场地出租<br><br>餐饮服务</span>
                            </div>
                        </div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="25" flex-xs="100" class="s5-text overflow-hidden" layout="row" layout-align="center center">
                            <span>产品销售<br><br>主题活动</span>
                        </div>
                        <div flex="25" flex-xs="100" class="overflow-hidden image-item-padding"><img src="../../static/images/b-s4-3.jpg" alt=""></div>
                        <div flex="50" flex-xs="100" class="overflow-hidden image-item-padding"><img src="../../static/images/b-s4-4.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="50" flex-xs="100" class="overflow-hidden image-c"><img src="../../static/images/b-s4-5.jpg" alt=""></div>
                        <div flex="25" flex-xs="100" class="overflow-hidden image-item-padding">
                            <div class="s5-text overflow-hidden" layout="row" layout-align="center center">
                                <span>内容电商<br><br>广告收入</span>
                            </div>
                        </div>
                        <div flex="25" flex-xs="100" class="image-item-padding"><img src="../../static/images/b-s4-6.jpg" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="section5 section text-center">
            <div class="title">多元化盈利模式</div>
            <div class="inline-block" style="max-width: 1440px;width:100%;">
                <div class="image-wrap" layout="column">
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="100" class="overflow-hidden image-c"><img src="../../static/images/b-s4-1.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="50" class="overflow-hidden image-item-padding image-item-padding-right">
                            <div class="s5-text" layout="row" layout-align="center center">
                                <span>场地出租<br><br>餐饮服务</span>
                            </div>
                        </div>
                        <div flex="50" class="overflow-hidden image-item-padding image-item-padding-left"><img src="../../static/images/b-s4-2.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="100" class="overflow-hidden image-item-padding"><img src="../../static/images/b-s4-4.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="50" class="overflow-hidden image-item-padding image-item-padding-right">
                            <div class="s5-text" layout="row" layout-align="center center">
                                <span>产品销售<br><br>主题活动</span>
                            </div>
                        </div>
                        <div flex="50" class="overflow-hidden image-item-padding image-item-padding-left"><img src="../../static/images/b-s4-3.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="100" class="overflow-hidden image-c"><img src="../../static/images/b-s4-5.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="50" class="overflow-hidden image-item-padding image-item-padding-right">
                            <div class="s5-text overflow-hidden" layout="row" layout-align="center center">
                                <span>内容电商<br><br>广告收入</span>
                            </div>
                        </div>
                        <div flex="50" class="image-item-padding image-item-padding-left"><img src="../../static/images/b-s4-6.jpg" alt=""></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section6 section text-center">
            <div class="title">竞争优势</div>
            <img v-if="!isMobile" class="width100" src="../../static/images/b-s6.jpg" alt="">
            <img v-else style="width:90%;" src="../../static/images/b-s6-mobile.jpg" alt="">
        </div>

        <div v-if="!isMobile" class="section7 section text-center">
            <div class="title">战略优势</div>
            <div class="body" layout="row" layout-wrap>
                <div flex="60" flex-xs="100" class="text-wrap" layout="column" layout-align="center center">
                    <div class="text-left">
                        <div class="fs-24">2个基本点：装修+定制</div><br>
                        <div class="fs-18 color-grey">装修：专业的装修团队，优质的材料与设备供应渠道，打造主题鲜明性价比一流的轰趴馆<br>定制：每月主题活动派对，专业布场，打造特色活动IP，创造粉丝效益，建立行业壁垒</div>
                    </div>
                </div>
                <div flex class="margin-left-10">
                    <img class="width100" src="../../static/images/b-s7-1.jpg" alt="">
                </div>
            </div>
            <div class="body" layout="row" layout-wrap style="margin-top: 10px;">
                <div flex="40" flex-xs="100">
                    <img class="width100" src="../../static/images/b-s7-2.jpg" alt="">
                </div>
                <div flex class="text-wrap margin-left-10" layout="column" layout-align="center center">
                    <div class="text-left">
                        <div class="fs-24">3大核心：服务+SEO+地推</div><br>
                        <div class="fs-18 color-grey">服务：一流的管理团队及培训体系，标准化的服务流程，完善的售后回访机制，以服务打动客户<br>SEO：强大的SEO推广团队，全渠道推广，海量曝光和优质口碑集群，强大的业务壁垒<br>地推：狼性的地推团队，强大的地推网络，完善的校园以及地域合伙人制度</div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="section7 section text-center">
            <!-- <div class="title">战略优势</div><br> -->
            <img style="width:100%;" src="../../static/images/b-s7-1-mobile.jpg" alt="">
            <img style="width:100%;margin-top:10px;" src="../../static/images/b-s7-2-mobile.jpg" alt="">
        </div>

        <div class="section8 text-center" style="margin-top: 10px;">
            <img v-if="!isMobile" src="../../static/images/b-s8.jpg" alt="" class="width100">
            <img v-else src="../../static/images/b-s8-mobile.jpg" alt="" class="width100">
        </div>

        <div class="section3 text-center">
            <div class="title">我们有牛掰的团队</div>
            <div v-if="!isMobile" class="team-container relative">
                <div v-for="(item, index) in teamList" :key="item" class="team-item" ref="teams" @click="teamMemberClick(index)">
                    <img :src="item" alt="">
                </div>
            </div>
            <div v-else class="team-container relative">
                <div v-for="item in teamList" :key="item" class="team-item" ref="teams" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
                    <img :src="item" alt="">
                </div>
            </div>
            <!-- <div class="team-indicator">
                <span v-for="item in teamList" :key="item" class="team-indicator-item"></span>
            </div> -->
            <svg v-if="!isMobile" class="icon caret-left fs-28" aria-hidden="true" @click="teamMemberClick(activeIndex+1)">
                <use xlink:href="#icon-caret-left"></use>
            </svg>
            <svg v-if="!isMobile" class="icon caret-right fs-28" aria-hidden="true" @click="teamMemberClick(activeIndex-1)">
                <use xlink:href="#icon-caret-right"></use>
            </svg>
        </div>
        
    </div>
</template>

<script>
    // import 'element-ui/lib/theme-default/carousel.css';
    // import 'element-ui/lib/theme-default/carousel-item.css';
    // import Carousel from 'element-ui/lib/carousel';
    // import CarouselItem from 'element-ui/lib/carousel-item';
    import HpImage from '../components/hp-image';
    import $ from 'jquery';
    
    export default {
        name: 'brand',
        components: {
            // 'el-carousel': Carousel, 
            // 'el-carousel-item': CarouselItem,
            HpImage
        },
        data() {
            let positionList = null;
            if (this.isMobile) {
                positionList = [
                    'translateX(-70%) scale(0.83)',
                    'translateX(-60%) scale(0.9)',
                    'translateX(-50%) scale(1)',
                    'translateX(-40%) scale(0.9)',
                    'translateX(-30%) scale(0.83)'
                ];
            } else {
                positionList = [
                    'translateX(-190%) scale(0.83)',
                    'translateX(-130%) scale(0.9)',
                    'translateX(-50%) scale(1)',
                    'translateX(30%) scale(0.9)',
                    'translateX(90%) scale(0.83)'
                ];
            }
            return {
                touchFlag: false,
                cIndex: 0,
                activeIndex: 2,
                // carouselList: [
                //     './static/images/b-s1.jpg',
                //     './static/images/b-s1.jpg'
                // ],
                headerImage: './static/images/b-s1.jpg',
                teamList: [
                    './static/images/team-m1.png',
                    './static/images/team-m2.png',
                    './static/images/team-m3.png',
                    './static/images/team-m4.png',
                    './static/images/team-m5.png',
                ],
                positionList,
            };
        },
        mounted() {
            this.setPos();
            this.timer = setInterval(this.setPos, 3000);
            $.ajax({
                // dataType: 'application/json;charset=utf-8',
                type: "GET",
                url: `/api/banner/name/brand?ts=${new Date().getTime()}`,
                success: (res) => {
                    this.headerImage = res.data.images;
                },
                error: (res) => {
                    this.$eventHub.$emit('ALERT', {type: 'warning', message: '服务器忙，请稍后重试。'});
                }
            });
        },
        methods: {
            setPos(isClick) {
                // -827.16,-76.84, 452,980.84,1731.16
                // if (this.$refs.carousel) {
                //     this.$refs.carousel[0].style.transform = this.positionList[0];
                //     this.$refs.carousel[1].style.transform = this.positionList[1];
                //     this.$refs.carousel[2].style.transform = this.positionList[2];
                //     this.$refs.carousel[3].style.transform = this.positionList[3];
                //     this.$refs.carousel[4].style.transform = this.positionList[4];
                // }
                for(var i=0;i<5;i++) {
                    var index = (i + this.cIndex) % 5;
                    var zIndex = index % 3;
                    if (index === 3) {
                        zIndex = 1;
                    } else if (index === 4) {
                        zIndex = 0;
                    }
                    this.$refs.teams[i].style.transform = this.positionList[index];
                    this.$refs.teams[i].style.zIndex = zIndex;
                }
                this.cIndex++;
                if(!isClick) {
                    this.activeIndex--;
                    if (this.activeIndex<0){
                        this.activeIndex += 5;
                    }
                }
            },
            teamMemberClick(index) {
                if (index<0){
                    index += 5;
                } else if (index > 5) {
                    index -= 5;
                }
                this.activeIndex = index;
                if (this.timer) {
                    clearInterval(this.timer);
                }
                this.cIndex = 2-index+5;
                console.log(this.cIndex+','+index);
                this.setPos(true);
                this.timer = setInterval(this.setPos, 3000);
            },
            touchStart(ev) {
                // ev.preventDefault();
                const touch = ev.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
　　            this.startX = touch.pageX;
                this.touchFlag = true;
                // this.clearTimer();
            },
            touchMove(ev) {
                if (!this.touchFlag) {
                    return;
                }
                // ev.preventDefault();
                const touch = ev.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
　　            if (this.startX > touch.pageX + 80) {
                    this.touchFlag = false;
                    // this.activeIndex--;
                    // this.cIndex = 2-index+5;
                    // this.setPos(true);
                    this.teamMemberClick(this.activeIndex+1);
                    console.log('--');
                } else if (touch.pageX > this.startX + 80) {
                    this.touchFlag = false;
                    // this.activeIndex++;
                    // this.setPos(true);
                    this.teamMemberClick(this.activeIndex-1);
                    console.log('++');
                }
            },
            touchEnd(ev) {
                this.touchFlag = false;
                // this.startTimer();
            },
            startTimer() {
                this.timer = setInterval(this.setPos, 3000);
            },
            clearTimer() {
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
            },
        },
        destroyed() {
            if (this.timer){
                clearInterval(this.timer);
                this.timer = null;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .section2{
        svg{
            color:#fff;
        }
    }
    .section3{
        margin-top: -5px;
        position: relative;
        // background-color: #D2D2D2;
        background-color: $primary-color;
        color: #fff;
        padding: 50px;
        padding-bottom: 110px;
        .title{
            padding-bottom: 50px;
            font-size: 3.6rem;
        }
        .team-indicator{
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            .team-indicator-item{
                border-radius: 50%;
                height: 10px;
                width: 10px;
                display: inline-block;
                background-color: #fff;
            }
            .team-indicator-item+.team-indicator-item{
                margin-left: 10px;
            }
        }
        svg.icon{
            position: absolute;
            top: 55%;
            cursor: pointer;
        }
        svg.caret-left{left: 20px;}
        svg.caret-right{right: 20px;}
    }
    .section4{
        .s4-text-wrap{
            margin-top: 60px;
            .title{
                margin-bottom:100px;
                font-size:3.6rem;
            }
        }
        .p1-item{
            padding: 0 6%;
            .text-l2{
                font-size: 2.4rem;
            }
            .text-l1{
                font-size: 1.6rem;
            }
        }
    }
    .section5{
        .title{
            font-size: 3.6rem;
        }
        .image-wrap{
            margin-top: 30px;
            .image-c{
                background-color: #D8D8D8;
            }
            .s5-text{
                height:270px;
                // width:353px;
                background-color: $primary-color;
                color: #fff;
                font-size: 2.4rem;
            }
            .image-item{
                margin-top: 10px;
                img{
                    display: block;
                }
            }
        }
        .image-item-padding{
            padding-left:10px;
        }
    }
    .section6{
        .title{
            margin-bottom: 30px;
            font-size: 3.6rem;
        }
    }
    .section7{
        .title{
            font-size: 3.6rem;
        }
        .body{
            margin-top: 20px;
        }
        .text-wrap{
            background-color: #f5f5f5;
            line-height: 36px;
        }
    }
    .team-container{
        height: 500px;
        width: 100%;
        .team-item{
            width: 20%;
            display: inline-block;
            transition: .4s ease-in-out;
            -ms-transition: .4s ease-in-out;
            overflow: hidden;
            z-index: 0;
            position: absolute;
            left: 50%;
            top: 0;
            width: 323px;
            height: 566px;
            cursor: pointer;
            img{
                width: 323px;
                height: 566px;
            }
        }
    }
    .pc-app{
        .section{margin-top:60px;}
        .s1-text-wrap{
            .title{
                font-size: 4.7rem;
            }
            .btn{
                margin-top: 60px;
            }
        }
        .section2{
            .title{
                font-size: 3.6rem;
            }
            .paragrah{padding: 60px 10%};
            .p1{
                margin-top: 60px;
                .p1-item{
                    .icon{
                        font-size: 6rem;
                    }
                    .text{
                        font-size: 2.4rem;
                    }
                }
            }
        }
    }
    .mobile-app{
        .section{margin-top:30px;}
        .s1-text-wrap{
            .title{
                font-size: 3rem;
            }
            .btn{
                margin-top: 30px;
            }
        }
        .section2{
            .title{
                font-size: 2rem;
            }
            .paragrah{padding: 30px 10%};
            .p1{
                margin-top: 15px;
                .p1-item{
                    .icon{
                        font-size: 4rem;
                    }
                    .text{
                        font-size: 1.4rem;
                    }
                }
            }
        }
        .section3{
            padding: 20px;
            padding-bottom: 110px;
            .title{
                padding-bottom: 20px;
                font-size: 2rem;
            }
        }
        .section4{
            .s4-text-wrap{
                margin-top: 20px;
                .title{
                    margin-bottom:20px;
                    font-size:2rem;
                }
            }
            .p1{
                width: 100%;
            }
            .p1-item{
                padding: 0 3%;
                svg{
                    font-size: 40px!important;
                }
                .text-l2{
                    font-size: 1.6rem;
                }
                .text-l1{
                    font-size: 1.2rem;
                }
            }
        }
        .section5{
            .title{
                font-size: 2rem;
            }
            .image-item img{
                width: 100%;
            }
            .image-item-padding{
                padding-left:0;
            }
            .s5-text{
                height: 100%;
                font-size: 1.8rem;
            }
        }
        .section6 .title{font-size: 2rem;}
        .section7 .title{font-size: 2rem;}

    }
    
</style>
