<template>
    <div>
        <div class="section1 text-center" :style="{top:`${firstScreenTop}px`}" ref="firstScreen">
            <el-carousel arrow="never" :interval="5000">
                <el-carousel-item v-for="item in carouselList" :key="item">
                    <hp-image class="s1-image" :src="item" alt=""></hp-image>
                </el-carousel-item>
            </el-carousel>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <img class="logo" src="../assets/images/logo.png" alt="">
                <span class="s1-text-1 block fs-34">让聚会变得更简单</span>
                <span class="s1-text-2 block fs-16">打造中国最懂年轻人的派对连锁品牌</span>
                <a class="s1-btn btn btn-primary bg block">了解品质策略 >></a>
            </div>
            <svg class="icon double-caret-down" aria-hidden="true" @click="downClick">
                <use xlink:href="#icon-double-caret-down"></use>
            </svg>
        </div>
        <div class="section2 relative">
            <div class="section2-1 relative text-center">
                <hp-image src="./static/images/index-carousel-2.jpg" alt=""></hp-image>
                <div class="s21-text-wrap image-text-wrap" layout="column" layout-align="center center">
                    <div class="title">轰趴，消费升级时代中的必然产物</div>
                    <div class="p1" layout="row">
                        <div class="p1-item text-center" flex="1">
                            <div class="circle-primary inline-block">
                                <svg class="icon house fs-40" aria-hidden="true">
                                    <use xlink:href="#icon-house"></use>
                                </svg>
                            </div>
                            <div class="title2 text-l2">轰趴</div>
                            <span class="p2 text-l1">将单一娱乐场地或活动进行集中，让人在一个空间能体验多个空间的娱乐</span>
                        </div>
                        <div class="p1-item text-center" flex="1">
                            <div class="circle-primary inline-block">
                                <svg class="icon chance fs-40" aria-hidden="true">
                                    <use xlink:href="#icon-chance"></use>
                                </svg>
                            </div>
                            <div class="title2 text-l2">行业机遇</div>
                            <span class="p2 text-l1">聚会需求大，市场聚会方式单一，已有的轰趴服务质量不一，极待升级</span>
                        </div>
                        <div class="p1-item text-center" flex="1">
                            <div class="circle-primary inline-block">
                                <svg class="icon conect fs-40" aria-hidden="true">
                                    <use xlink:href="#icon-conect"></use>
                                </svg>
                            </div>
                            <div class="title2 text-l2">市场环境</div>
                            <span class="p2 text-l1">消费主力年轻化，消费需求的多样化，消费能力水平日渐提高</span>
                        </div>
                    </div>
                    <a class="btn btn-white block">了解更多 >></a>
                </div>
            </div>

            <div class="section2-2 text-center">
                <div class="fs-36 section-border-title">用我们的专业，保障每一个加盟者的收益</div>
                <div class="section2-2-p" layout="row" layout-wrap>
                    <div flex="1" flex-xs="50" class="section2-2-p-item">
                        <svg class="icon lingdai fs-40" aria-hidden="true">
                            <use xlink:href="#icon-lingdai"></use>
                        </svg>
                        <div class="fs-24 title text-l2">品牌宗旨</div>
                        <span class="fs-16 text-l2">一站式服务</span><br>
                        <span class="fs-16 text-l2">标准化管理</span><br>
                        <span class="fs-16 text-l2">管家式服务</span>
                    </div>
                    <div flex="1" flex-xs="50" class="section2-2-p-item">
                        <svg class="icon tianping fs-40" aria-hidden="true">
                            <use xlink:href="#icon-tianping"></use>
                        </svg>
                        <div class="fs-24 title text-l2">竞争优势</div>
                        <span class="fs-16 text-l2">强大而健全的团队</span><br>
                        <span class="fs-16 text-l2">强大的品牌影响力</span><br>
                        <span class="fs-16 text-l2">前沿的服务理念</span>
                    </div>
                    <div flex="1" flex-xs="50" class="section2-2-p-item">
                        <svg class="icon duoyuanhua fs-40" aria-hidden="true">
                            <use xlink:href="#icon-duoyuanhua"></use>
                        </svg>
                        <div class="fs-24 title text-l2">多元化盈利</div>
                        <span class="fs-16 text-l2">拓展轰趴周边的盈利模式</span><br>
                        <span class="fs-16 text-l2">挖掘更新鲜的玩法</span><br>
                        <span class="fs-16 text-l2">最大化盈利</span>
                    </div>
                    <div flex="1" flex-xs="50" class="section2-2-p-item">
                        <svg class="icon zhanlue fs-40" aria-hidden="true">
                            <use xlink:href="#icon-zhanlue"></use>
                        </svg>
                        <div class="fs-24 title text-l2">战略优势</div>
                        <span class="fs-16 text-l2">2个基本点：装修+定制</span><br>
                        <span class="fs-16 text-l2">3大核心：服务+SEO+地推</span>
                    </div>
                </div>
                <a class="btn btn-primary block" style="margin-top: 60px;">了解品质策略 >></a>
            </div>

            <div class="section2-3">
                <div class="title fs-36 text-center">品牌现况</div>
                <div class="body" layout="row" layout-wrap>
                    <div flex="1" flex-xs="50">
                        <div layout="column" layout-align="start center">
                            <div class="text-left">
                                <span class="fs-18" style="line-height: 25px;">已有加盟店</span><br>
                                <span class="fs-36" style="line-height: 50px;">18个</span>
                            </div>
                        </div>
                    </div>
                    <div flex="1" flex-xs="50">
                        <div layout="column" layout-align="start center">
                            <div class="text-left">
                                <span class="fs-18" style="line-height: 25px;">已入驻</span><br>
                                <span class="fs-36" style="line-height: 50px;">3个城市</span>
                            </div>
                        </div>
                    </div>
                    <div flex="1" flex-xs="50">
                        <div layout="column" layout-align="start center">
                            <div class="text-left">
                                <span class="fs-18" style="line-height: 25px;">已有加盟商</span><br>
                                <span class="fs-36" style="line-height: 50px;">99人</span>
                            </div>
                        </div>
                    </div>
                    <div flex="1" flex-xs="50">
                        <div layout="column" layout-align="start center">
                            <div class="text-left">
                                <span class="fs-18" style="line-height: 25px;">品牌团队</span><br>
                                <span class="fs-36" style="line-height: 50px;">30人</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section2-4 text-center">
                <div class="fs-36 section-border-title">加盟店案例</div>
                <a class="inline-block view-all fs-20">查看所有 >></a>
                <div class="body" layout="row" layout-wrap>
                    <div flex="40" flex-xs="100" flex-md="100" style="padding-right: 3px;">
                        <img src="../../static/images/anli1.jpg" alt="">
                    </div>
                    <div flex="40" flex-xs="100" flex-md="100" style="padding: 0 3px;" layout="column">
                        <div flex="50" layout="row">
                            <div flex="50" class="one-half" style="padding-right: 3px;padding-bottom: 3px;">
                                <img src="../../static/images/anli2.jpg" alt="">
                            </div>
                            <div flex="50" class="one-half" style="padding-left: 3px;padding-bottom: 3px;">
                                <img src="../../static/images/anli3.jpg" alt="">
                            </div>
                        </div>
                        <div flex="50">
                            <img src="../../static/images/anli4.jpg" alt="">
                        </div>
                    </div>
                    <div flex="20" style="padding-left: 3px;">
                        <img src="../../static/images/anli5.jpg" alt="">
                    </div>
                    <div class="clearboth"></div>
                </div>
            </div>

            <div class="section2-5 text-center">
                <div class="fs-36 section-border-title">听听加盟人怎么说</div>
                <div class="body" layout="row" layout-wrap>
                    <div flex="40" flex-xs="100">
                        <img src="../../static/images/ceo.jpg" alt="">
                    </div>
                    <div flex class="text-left ceo-says">
                        <div class="fs-24">武汉第一个加盟商的经历</div><br>
                        <div class="fs-24 color-grey">&nbsp;“不去尝试，跟咸鱼有什么分别”</div><br>
                        <div class="fs-16 color-grey text-l2">武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的武汉第一个加盟商的经历武汉第一个加盟商…</div>
                        <a class="btn btn-primary block" style="margin-top: 60px;">查看详情 >></a>
                    </div>
                </div>
            </div>

            <div class="section-2-6 text-center">
                <div class="title fs-36">顾客评价</div>
                <div layout="row" layout-wrap class="body">
                    <div flex="1" flex-xs="100" class="comment-item">
                        <img src="../../static/images/customer1.png" alt=""><br><br>
                        <span class="fs-24 text-l2">周子周</span><br>
                        <span class="fs-16 text-l2">我是用来接亲的，朋友晚上过去的都说这套别墅太棒了，好多朋友都吹捧，感觉背有面😄😄婚礼配上欧式风格高大上，我的眼光真不错，感谢慢姑娘别墅提供给我这么优秀的地方，我会向朋友大力推进哦</span>
                    </div>
                    <div flex="1" flex-xs="100" class="comment-item">
                        <img src="../../static/images/customer2.png" alt=""><br><br>
                        <span class="fs-24 text-l2">鲜森张</span><br>
                        <span class="fs-16 text-l2">很开心的一次轰趴，整套别墅很大，在东湖边上，店长小哥很热情，我们下午到的，院子里有游泳池，小哥为我们泳池换新水！！户外院子BBQ也很嗨皮，慢姑娘别墅轰趴都有直接对接配送的，不需要我们大热天跑去超市各种买还要自提过去！！最后提一下小哥服务真的贴心，据说还是今年才大学毕业的哦！！力荐！！</span>
                    </div>
                    <div flex="1" flex-xs="100" class="comment-item">
                        <img src="../../static/images/customer3.png" alt=""><br><br>
                        <span class="fs-24 text-l2">萧萧萧</span><br>
                        <span class="fs-16 text-l2">真的是从未有过的体验，可以用享受来形容，以后不再愁没有地方聚会了，早点知道还有这样的地方就好了，大家玩的都很开心，店面很干净，服务态度也是特亲切，以后我还要来😉</span>
                    </div>
                    <div flex="1" flex-xs="100" class="comment-item">
                        <img src="../../static/images/customer4.png" alt=""><br><br>
                        <span class="fs-24 text-l2">兔萌</span><br>
                        <span class="fs-16 text-l2">第二次预订了，刚进来的时候感觉进错店，因为这个店已经重新装修，特别棒，很有情调，是欧式风格，很大气高端，卫生也很干净整洁，设施配套很齐全，很幽静。最喜欢4楼的阳台，静静的看着东湖，静静的享受自然，很清新，舒适。。</span>
                    </div>
                </div>
            </div>

            <!-- <div class="carouse-container relative">
                <div v-for="item in carouselList" :key="item" class="carouse-item" ref="carousel">
                    <img style="width: 250px;height:350px;" :src="item" alt="">
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
    import 'element-ui/lib/theme-default/carousel.css';
    import 'element-ui/lib/theme-default/carousel-item.css';
    import Carousel from 'element-ui/lib/carousel';
    import CarouselItem from 'element-ui/lib/carousel-item';
    import HpImage from '../components/hp-image';
    import $ from 'jquery';

    export default {
        name: 'home',
        components: {
            'el-carousel': Carousel, 
            'el-carousel-item': CarouselItem,
            HpImage
        },
        data() {
            return {
                cIndex: 0,
                firstScreenTop: this.isMobile?0:60,
                carouselList: [
                    './static/images/index-carousel-1.jpg',
                    './static/images/index-carousel-1.jpg'
                ],
                positionList: [
                    'translateX(200px) scale(0.83)',
                    'translateX(300px) scale(0.9)',
                    'translateX(500px) scale(1)',
                    'translateX(700px) scale(0.9)',
                    'translateX(800px) scale(0.83)'
                ]
            };
        },
        mounted() {
            // document.body.style.overflowY = 'scroll';
            // /*IE注册事件*/
            // if(document.attachEvent){
            //     document.attachEvent('onmousewheel',scrollFunc);
            // }
            // /*Firefox注册事件*/
            // if(document.addEventListener){
            //     document.addEventListener('DOMMouseScroll',scrollFunc,false);
            // }
            if (this.browser === 'pc') {
                document.onmousewheel = this.onScroll;
            }
            // document.onmousewheel = this.onScroll;
        },
        methods: {
            onScroll(ev) {
                var top = parseInt(this.$refs.firstScreen.style.top);
                var minTop = 60 - this.$refs.firstScreen.clientHeight;
                if (top < minTop) {
                    this.firstScreenTop = minTop
                    return false;
                }
                if (top > 60) {
                    this.firstScreenTop = 60;
                    return;
                }
                // console.log(`this.firstScreenTop=${this.firstScreenTop},deltaY=${ev.deltaY}`);
                var _deltaY = ev.deltaY * 0.3;
                // if (ev.deltaY > 0) {
                //     _deltaY = ev.deltaY * 0.3;
                // } else if (ev.deltaY < 0) {
                //     _deltaY = ev.deltaY * 1.1;
                // }
                this.firstScreenTop -= _deltaY;
                if (this.firstScreenTop > 60) {
                    this.firstScreenTop = 60;
                }
                if (this.firstScreenTop < minTop) {
                    this.firstScreenTop = minTop;
                }
            },
            setPos() {
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
                    this.$refs.carousel[i].style.transform = this.positionList[index];
                    this.$refs.carousel[i].style.zIndex = zIndex;
                }
                this.cIndex++;
            },
            downClick() {
                this.$refs.firstScreen.style.transition = 'all 1s ease';
                $('body,html').animate({ scrollTop: this.$refs.firstScreen.clientHeight+60 }, 800);
                setTimeout(()=>{
                    this.firstScreenTop = 60 - this.$refs.firstScreen.clientHeight / 4;
                },100);
                setTimeout(()=>{
                    this.$refs.firstScreen.style.transition = 'none';
                    // window.scrollTo(0,this.$refs.firstScreen.clientHeight+60);
                },1000);
            }
        },
        computed: {},
        // destroyed() {
        //     document.body.style.overflow = 'auto';
        //     this.$el.removeEventListener('scroll', this.onScroll);
        // }
    }
</script>

<style lang="scss">
    @import '../styles/var';
    .image-text-wrap{
        position: absolute;
        z-index: 2;
        left: 0;
        top: 0;
        color: #fff;
        width: 100%;
        height: 100%;
    }
    .circle-primary{
        background-color: $primary-color;
        border-radius: 50%;
        height: 60px;
        width: 60px;
        line-height: 58px;
        svg{
            vertical-align: middle;
        }
    }
    .section-border-title{
        padding: 0 3rem;
        border-left: solid 4px $primary-color;
        border-right: solid 4px $primary-color;
        display: inline-block;
    }
    .section1{
        .double-caret-down{
            position: absolute;
            bottom: 10px;
            font-size: 20px;
            z-index: 2;
            color: #fff;
            cursor: pointer;
        }
    }
    .section2{
        background-color:#fff;
        .section2-1{
            color: #fff;
            .s21-text-wrap{
                .p1{
                    width: 100%;
                    .p1-item{
                        padding: 0 6%;
                    }
                }
            }
        }
        .section2-2{
            margin-top: 60px;
            svg{
                color: $primary-color;
            }
            .section2-2-p{
                .title{
                    margin-top: 30px;
                }
                .section2-2-p-item{
                    margin-top: 60px;
                }
            }
        }
        .section2-3{
            margin-top: 60px;
            background-color: $primary-color;
            color: #fff;
            padding-bottom: 150px;
            .title{
                padding-top:60px;
            }
            .body{
                margin-top: 60px;
            }
        }
        .section2-4{
            margin-top: 60px;
            position: relative;
            .body{
                margin-top: 30px;
            }
            .view-all{
                cursor: pointer;
                position: absolute;
                right: 60px;
                top: 20px;
            }
        }
        .section2-5{
            margin-top: 60px;
            .body{
                margin-top: 30px;
            }
            .ceo-says{
                padding:5%;
                background-color:#F5F5F5;
                vertical-align: top;
            }
        }
        .section-2-6{
            padding-top:60px;
            background-color: $primary-color;
            color: #fff;
            padding-bottom: 60px;
            .body{
                .comment-item{
                    vertical-align: top;
                    padding:0 3%;
                    margin-top: 60px;
                }
            }
        }
    }
    .pc-app{
        .section1{
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            .s1-text-wrap{
                .s1-text-1{
                    margin-top: 20px;
                }
                .s1-text-2{
                    margin-top: 10px;
                }
                .s1-btn{
                    margin-top: 60px;
                }
            }
        }
        .section2{
            margin-top: 100vh;
            .section2-1{
                .s21-text-wrap{
                    .title{
                        font-size: 3.6rem;
                    }
                    .p1{
                        margin-top: 100px;
                        .p1-item{
                            .title2{
                                font-size: 2.4rem;
                                margin-top: 20px;
                            }
                            .p2{
                                font-size: 1.6rem;
                            }
                        }
                    }
                    .btn{
                        margin-top: 100px;
                    }
                }
            }
        }
    }
    .mobile-app{
        .section1{
            position: relative;
            .s1-text-wrap{
                .s1-text-1{
                    margin-top: 10px;
                }
                .s1-text-2{
                    margin-top: 5px;
                }
                .s1-btn{
                    margin-top: 20px;
                }
            }
        }
        .section2{
            .section2-1{
                .s21-text-wrap{
                    .title{
                        font-size: 2.4rem;
                    }
                    .p1{
                        margin-top: 20px;
                        .p1-item{
                            .title2{
                                margin-top: 1rem;
                                font-size: 2rem;
                            }
                            .p2{
                                font-size: 1.4rem;
                                display: none;
                            }
                        }
                    }
                    .btn{
                        margin-top: 20px;
                    }
                }
            }
        }
        .section2-3{
            padding-bottom: 60px;
        }
        .section2-4{
            .body{
                margin-top: 50px;
            }
            .view-all{
                top: 50px;
                right: 20px;
            }
        }
        .section2-6{
            .body{
                .comment-item{
                    margin-top: 20px;
                }
            }
        }
    }
</style>

<style lang="scss">
    @import '../styles/var';
    .pc-app{
        .el-carousel__container, .s1-image{
            height: calc(100vh - 60px)!important;
        }
    }
    .mobile-app{
        .el-carousel__container, .s1-image img{
            height: 300px!important;
            width: auto;
        }
    }
    
    .el-carousel__indicators{
        top: 50%;
        right: 10px;
        -ms-transform: translateY(-50%) translateX(0)!important;
        transform: translateY(-50%) translateX(0)!important;
        left: auto!important;
        bottom: auto!important;
        .el-carousel__indicator{
            display: block;
            .el-carousel__button{
                width: 10px;
                height: 10px;
                border-radius: 50%;
            }
        }
    }
</style>
