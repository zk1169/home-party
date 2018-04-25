<template>
    <div class="brand">
        <div class="section1 relative">
            <!-- <hp-image src="./static/images/index-carousel-2.jpg" alt=""></hp-image> -->
            <el-carousel arrow="never" :interval="5000">
                <el-carousel-item v-for="item in carouselList" :key="item">
                    <hp-image :src="item" alt=""></hp-image>
                </el-carousel-item>
            </el-carousel>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title">因为更懂年轻人，所以我们受欢迎</div><br>
                <div class="sub-tilte fs-18">目前华中最大互联网+连锁轰趴品牌</div>
                <a class="btn btn-white block">了解加盟合作</a>
            </div>
        </div>
        <div class="section2 section text-center">
            <div class="title fs-36">我们的愿景</div>
            <div class="p1" layout="row">
                <div class="p1-item text-center" flex="1">
                    <div class="circle-primary big inline-block">
                        <svg class="icon zuanshi fs-60" aria-hidden="true">
                            <use xlink:href="#icon-zuanshi"></use>
                        </svg>
                    </div><br><br>
                    <div class="fs-24 text-l3">打造中国最专业的派对文化<br>连锁品牌</div>
                </div>
                <div class="p1-item text-center" flex="1">
                    <div class="circle-primary big inline-block">
                        <svg class="icon location-web fs-60" aria-hidden="true">
                            <use xlink:href="#icon-location-web"></use>
                        </svg>
                    </div><br><br>
                    <div class="fs-24 text-l3">打造中国最大本地化互联网<br>+轰趴创业联盟</div>
                </div>
                <div class="p1-item text-center" flex="1">
                    <div class="circle-primary big inline-block">
                        <svg class="icon lianjie fs-60" aria-hidden="true">
                            <use xlink:href="#icon-lianjie"></use>
                        </svg>
                    </div><br><br>
                    <div class="fs-24 text-l3">打造中国最大的综合性聚会<br>娱乐平台</div>
                </div>
            </div>
        </div>

        <div class="section4 section text-center relative">
            <hp-image src="./static/images/b-s3.jpg" alt=""></hp-image>
            <div class="s4-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title fs-36">我们的品牌宗旨</div><br><br>
                <div class="p1" layout="row">
                    <div class="p1-item text-center" flex="1">
                        <svg class="icon yizhanshi fs-60" aria-hidden="true">
                            <use xlink:href="#icon-yizhanshi"></use>
                        </svg><br><br>
                        <div class="fs-24 text-l2">一站式服务</div><br>
                        <div class="fs-16 text-l1">为客户提供吃、喝、玩、住一站式服务，打造多种娱乐场景的集合，最适合年轻人聚会的轰趴品牌</div>
                    </div>
                    <div class="p1-item text-center" flex="1">
                        <svg class="icon dunpai fs-60" aria-hidden="true">
                            <use xlink:href="#icon-dunpai"></use>
                        </svg><br><br>
                        <div class="fs-24 text-l2">标准化管理</div><br>
                        <div class="fs-16 text-l1">打造轰趴行业标准化管理的行业准则，让客户享受到轰趴行业的五星级服务。</div>
                    </div>
                    <div class="p1-item text-center" flex="1">
                        <svg class="icon guanjia fs-60" aria-hidden="true">
                            <use xlink:href="#icon-guanjia"></use>
                        </svg><br><br>
                        <div class="fs-24 text-l2">管家式服务</div><br>
                        <div class="fs-16 text-l1">通过专业化培训，让每位管家=初级厨师+活动策划师+布场达人+轰趴运营专员。</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section5 section text-center">
            <div class="title fs-36">多元化盈利模式</div>
            <div class="inline-block">
                <div class="image-wrap" layout="column">
                    <div layout="row" layout-wrap>
                        <div flex="50" flex-xs="100"><img src="../../static/images/b-s4-1.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" style="padding-left:6px;"><img src="../../static/images/b-s4-2.jpg" alt=""></div>
                        <div flex="25" flex-xs="50" style="padding-left:6px;">
                            <div class="s5-text" layout="row" layout-align="center center">
                                <span>场地出租<br><br>餐饮服务</span>
                            </div>
                        </div>
                    </div>
                    <div layout="row" layout-wrap>
                        <div flex="25" flex-xs="50" class="s5-text" layout="row" layout-align="center center">
                            <span>产品销售<br><br>主题活动</span>
                        </div>
                        <div flex="25" flex-xs="50" style="padding-left:6px;"><img src="../../static/images/b-s4-3.jpg" alt=""></div>
                        <div flex="50" flex-xs="100" style="padding-left:6px;"><img src="../../static/images/b-s4-4.jpg" alt=""></div>
                    </div>
                    <div layout="row" layout-wrap>
                        <div flex="50" flex-xs="100"><img src="../../static/images/b-s4-5.jpg" alt=""></div>
                        <div flex="25" flex-xs="100" style="padding-left:6px;">
                            <div class="s5-text" layout="row" layout-align="center center">
                                <span>内容电商<br><br>广告收入</span>
                            </div>
                        </div>
                        <div flex="25" flex-xs="50" style="padding-left:6px;"><img src="../../static/images/b-s4-6.jpg" alt=""></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section6 section text-center">
            <div class="title fs-36">竞争优势</div>
            <img class="width100" src="../../static/images/b-s6.jpg" alt="">
        </div>

        <div class="section7 section text-center">
            <div class="title fs-36">战略优势</div>
            <div class="body" layout="row" layout-wrap>
                <div flex="60" flex-xs="100" class="text-wrap" layout="column" layout-align="center center">
                    <div class="text-left">
                        <div class="fs-24">2个基本点：装修+定制</div>
                        <div class="fs-18">装修：专业的装修团队，优质的材料与设备供应渠道，打造主题鲜明性价比一流的轰趴馆<br>定制：每月主题活动派对，专业布场，打造特色活动IP，创造粉丝效益，建立行业壁垒</div>
                    </div>
                </div>
                <div flex>
                    <img class="width100" src="../../static/images/b-s7-1.jpg" alt="">
                </div>
            </div>
            <div class="body" layout="row" layout-wrap>
                <div flex="40" flex-xs="100">
                    <img class="width100" src="../../static/images/b-s7-2.jpg" alt="">
                </div>
                <div flex class="text-wrap" layout="column" layout-align="center center">
                    <div class="text-left">
                        <div class="fs-24">3大核心：服务+SEO+地推</div>
                        <div class="fs-18">服务：一流的管理团队及培训体系，标准化的服务流程，完善的售后回访机制，以服务打动客户<br>SEO：强大的SEO推广团队，全渠道推广，海量曝光和优质口碑集群，强大的业务壁垒<br>地推：狼性的地推团队，强大的地推网络，完善的校园以及地域合伙人制度</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section3 text-center">
            <div class="title fs-36">我们有牛掰的团队</div>
            <div class="team-container relative">
                <div v-for="(item, index) in teamList" :key="item" class="team-item" ref="teams" @click="teamMemberClick(index)">
                    <img :src="item" alt="">
                </div>
            </div>
            <div class="team-indicator">
                <span v-for="item in teamList" :key="item" class="team-indicator-item"></span>
            </div>
            <svg class="icon caret-left fs-28" aria-hidden="true" @click="teamMemberClick(activeIndex+1)">
                <use xlink:href="#icon-caret-left"></use>
            </svg>
            <svg class="icon caret-right fs-28" aria-hidden="true" @click="teamMemberClick(activeIndex-1)">
                <use xlink:href="#icon-caret-right"></use>
            </svg>
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
        name: 'brand',
        components: {
            'el-carousel': Carousel, 
            'el-carousel-item': CarouselItem,
            HpImage
        },
        data() {
            return {
                cIndex: 0,
                activeIndex: 2,
                carouselList: [
                    './static/images/b-s1.jpg',
                    './static/images/b-s1.jpg'
                ],
                teamList: [
                    './static/images/team-m1.png',
                    './static/images/team-m2.png',
                    './static/images/team-m3.png',
                    './static/images/team-m4.png',
                    './static/images/team-m5.png',
                ],
                positionList: [
                    'translateX(-190%) scale(0.83)',
                    'translateX(-130%) scale(0.9)',
                    'translateX(-50%) scale(1)',
                    'translateX(30%) scale(0.9)',
                    'translateX(90%) scale(0.83)'
                    // 'translateX(200px) scale(0.83)',
                    // 'translateX(300px) scale(0.9)',
                    // 'translateX(500px) scale(1)',
                    // 'translateX(700px) scale(0.9)',
                    // 'translateX(800px) scale(0.83)'
                ]
            };
        },
        mounted() {
            this.setPos();
            this.timer = setInterval(this.setPos, 3000);
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
                this.activeIndex = index;
                if (this.timer) {
                    clearInterval(this.timer);
                }
                this.cIndex = 2-index+5;
                this.setPos(true);
                this.timer = setInterval(this.setPos, 3000);
            }
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
        position: relative;
        // background-color: #D2D2D2;
        background-color: $primary-color;
        color: #fff;
        padding: 50px;
        padding-bottom: 110px;
        .title{
            padding-bottom: 50px;
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
        .p1-item{
            padding: 0 6%;
        }
    }
    .section5{
        .image-wrap{
            margin-top: 30px;
            .s5-text{
                height:270px;
                width:353px;
                background-color: $primary-color;
                color: #fff;
                font-size: 2.4rem;
            }
        }
    }
    .section6{
        .title{
            margin-bottom: 30px;
        }
    }
    .section7{
        .body{
            margin-top: 30px;
        }
        .text-wrap{
            background-color: #f5f5f5;
            line-height: 36px;
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
            .paragrah{padding: 60px 10%};
            .p1{
                margin-top: 30px;
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
            .paragrah{padding: 30px 10%};
            .p1{
                margin-top: 15px;
            }
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
</style>
