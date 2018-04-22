<template>
    <div>
        <div class="text-center" :class="{'first-screen-pc':!isMobile,'first-screen-mobile':isMobile}" :style="{top:`${firstScreenTop}px`}" ref="firstScreen">
            <el-carousel class="carousel" arrow="never" :interval="5000">
                <el-carousel-item v-for="item in carouselList" :key="item">
                    <hp-image class="carousel-img" :src="item" alt=""></hp-image>
                </el-carousel-item>
            </el-carousel>
            <div class="image-content text-center center">
                <img class="logo" src="../assets/images/logo.png" alt="">
                <span class="block fs-34" style="margin-top: 20px;">让聚会变得更简单</span>
                <span class="block fs-16" style="margin-top: 10px;">打造中国最懂年轻人的派对连锁品牌</span>
                <a class="btn btn-primary block" style="margin-top: 60px;">了解品质策略 >></a>
            </div>
            <svg class="icon caret-down" aria-hidden="true" @click="downClick">
                <use xlink:href="#icon-caret-down"></use>
            </svg>
        </div>
        <div class="relative" style="background-color:#fff;">
            <div class="relative text-center" :class="{'second-screen-pc':!isMobile}">
                <hp-image src="/static/images/index-carousel-2.jpg" alt=""></hp-image>
                <div class="image-content text-center center" style="width:80%;">
                    <span class="block fs-36" style="margin-top: 20px;">轰趴，消费升级时代中的必然产物</span>
                    <div style="margin-top: 100px;">
                    <span class="inline-block section2-svg text-center one-third" style="padding:0 6%">
                        <div class="circle-primary inline-block">
                            <svg class="icon house fs-40" aria-hidden="true">
                                <use xlink:href="#icon-house"></use>
                            </svg>
                        </div>
                        <div class="fs-24 title">轰趴</div>
                        <span class="fs-16">将单一娱乐场地或活动进行集中，让人在一个空间能体验多个空间的娱乐</span>
                    </span>
                    <span class="inline-block section2-svg text-center one-third" style="padding:0 6%">
                        <div class="circle-primary inline-block">
                            <svg class="icon chance fs-40" aria-hidden="true">
                                <use xlink:href="#icon-chance"></use>
                            </svg>
                        </div>
                        <div class="fs-24 title">行业机遇</div>
                        <span class="fs-16">聚会需求大，市场聚会方式单一，已有的轰趴服务质量不一，极待升级</span>
                    </span>
                    <span class="inline-block section2-svg text-center one-third" style="padding:0 6%">
                        <div class="circle-primary inline-block">
                            <svg class="icon conect fs-40" aria-hidden="true">
                                <use xlink:href="#icon-conect"></use>
                            </svg>
                        </div>
                        <div class="fs-24 title">市场环境</div>
                        <span class="fs-16">消费主力年轻化，消费需求的多样化，消费能力水平日渐提高</span>
                    </span>
                    </div>
                    <a class="btn btn-white block" style="margin-top: 100px;">了解更多 >></a>
                </div>
            </div>
            <div class="section-3 text-center" style="margin-top: 60px;">
                <span class="inline-block fs-36 section-3-title">用我们的专业，保障每一个加盟者的收益</span>
                <div style="margin-top: 60px;">
                <span class="inline-block section2-svg text-center one-fourth">
                    <svg class="icon lingdai fs-40" aria-hidden="true">
                        <use xlink:href="#icon-lingdai"></use>
                    </svg>
                    <div class="fs-24 title">品牌宗旨</div>
                    <span class="fs-16">一站式服务</span><br>
                    <span class="fs-16">标准化管理</span><br>
                    <span class="fs-16">管家式服务</span>
                </span>
                <span class="inline-block section2-svg text-center one-fourth">
                    <svg class="icon tianping fs-40" aria-hidden="true">
                        <use xlink:href="#icon-tianping"></use>
                    </svg>
                    <div class="fs-24 title">竞争优势</div>
                    <span class="fs-16">强大而健全的团队</span><br>
                    <span class="fs-16">强大的品牌影响力</span><br>
                    <span class="fs-16">前沿的服务理念</span>
                </span>
                <span class="inline-block section2-svg text-center one-fourth">
                    <svg class="icon duoyuanhua fs-40" aria-hidden="true">
                        <use xlink:href="#icon-duoyuanhua"></use>
                    </svg>
                    <div class="fs-24 title">多元化盈利</div>
                    <span class="fs-16">拓展轰趴周边的盈利模式</span><br>
                    <span class="fs-16">挖掘更新鲜的玩法</span><br>
                    <span class="fs-16">最大化盈利</span>
                </span>
                <span class="inline-block section2-svg text-center one-fourth">
                    <svg class="icon zhanlue fs-40" aria-hidden="true">
                        <use xlink:href="#icon-zhanlue"></use>
                    </svg>
                    <div class="fs-24 title">战略优势</div>
                    <span class="fs-16">2个基本点：装修+定制</span><br>
                    <span class="fs-16">3大核心：服务+SEO+地推</span>
                </span>
                </div>
                <a class="btn btn-primary block" style="margin-top: 60px;">了解品质策略 >></a>
            </div>

            <div class="section-4 text-center" style="margin-top:60px;">
                <div class="title fs-36" style="padding-top:60px;">品牌现况</div>
                <div class="inline-block" style="margin-top: 60px;width:80%;margin-left: 12.5%;">
                    <span class="inline-block text-left one-fourth">
                        <span class="fs-18" style="line-height: 25px;">已有加盟店</span><br>
                        <span class="fs-36" style="line-height: 50px;">18个</span>
                    </span>
                    <span class="inline-block text-left one-fourth">
                        <span class="fs-18" style="line-height: 25px;">已入驻</span><br>
                        <span class="fs-36" style="line-height: 50px;">3个城市</span>
                    </span>
                    <span class="inline-block text-left one-fourth">
                        <span class="fs-18" style="line-height: 25px;">已有加盟商</span><br>
                        <span class="fs-36" style="line-height: 50px;">99人</span>
                    </span>
                    <span class="inline-block text-left one-fourth">
                        <span class="fs-18" style="line-height: 25px;">品牌团队</span><br>
                        <span class="fs-36" style="line-height: 50px;">30人</span>
                    </span>
                </div>
            </div>

            <div class="section-5 text-center" style="margin-top: 60px;">
                <span class="inline-block fs-36 section-3-title">加盟店案例</span>
                <span class="inline-block view-all fs-20">查看所有 >></span>
                <div style="margin-top: 30px;">
                    <div class="inline-block two-fifth" style="padding-right: 3px;">
                        <img src="../../static/images/anli1.jpg" alt="">
                    </div>
                    <div class="inline-block two-fifth" style="padding: 0 3px;">
                        <div class="one-half" style="padding-right: 3px;padding-bottom: 3px;">
                            <img src="../../static/images/anli2.jpg" alt="">
                        </div>
                        <div class="one-half" style="padding-left: 3px;padding-bottom: 3px;">
                            <img src="../../static/images/anli3.jpg" alt="">
                        </div>
                        <div>
                            <img src="../../static/images/anli4.jpg" alt="">
                        </div>
                    </div>
                    <div class="inline-block one-fifth" style="padding-left: 3px;">
                        <img src="../../static/images/anli5.jpg" alt="">
                    </div>
                    <div class="clearboth"></div>
                </div>
            </div>

            <div class="section-6 text-center" style="margin-top: 60px;">
                <span class="inline-block fs-36 section-3-title">听听加盟人怎么说</span>
                <div style="margin-top: 30px;">
                    <div class="inline-block" style="overflow: hidden;width:551px;height:580px;">
                        <img src="../../static/images/ceo.jpg" style="height:580px;" alt="">
                    </div><!--
                    --><div class="inline-block text-left ceo-says">
                        <div class="fs-24">武汉第一个加盟商的经历</div><br>
                        <div class="fs-24 color-grey">&nbsp;“不去尝试，跟咸鱼有什么分别”</div><br>
                        <div class="fs-16 color-grey" style="line-height: 32px;">武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的经历武汉第一个加盟商的武汉第一个加盟商的经历武汉第一个加盟商…</div>
                        <a class="btn btn-primary block" style="margin-top: 60px;">查看详情 >></a>
                    </div>
                    <div class="clearboth"></div>
                </div>
            </div>

            <div class="section-7 text-center">
                <div class="title fs-36" style="padding-top:60px;">顾客评价</div>
                <div class="inline-block" style="margin-top: 60px;">
                    <span class="inline-block one-fourth" style="vertical-align: top;padding:0 3%">
                        <img src="../../static/images/customer1.png" alt=""><br>
                        <span class="fs-24" style="line-height: 33px;">周子周</span><br>
                        <span class="fs-16" style="line-height: 33px;">我是用来接亲的，朋友晚上过去的都说这套别墅太棒了，好多朋友都吹捧，感觉背有面😄😄婚礼配上欧式风格高大上，我的眼光真不错，感谢慢姑娘别墅提供给我这么优秀的地方，我会向朋友大力推进哦</span>
                    </span>
                    <span class="inline-block one-fourth" style="vertical-align: top;padding:0 3%">
                        <img src="../../static/images/customer2.png" alt=""><br>
                        <span class="fs-24" style="line-height: 33px;">鲜森张</span><br>
                        <span class="fs-16" style="line-height: 33px;">很开心的一次轰趴，整套别墅很大，在东湖边上，店长小哥很热情，我们下午到的，院子里有游泳池，小哥为我们泳池换新水！！户外院子BBQ也很嗨皮，慢姑娘别墅轰趴都有直接对接配送的，不需要我们大热天跑去超市各种买还要自提过去！！最后提一下小哥服务真的贴心，据说还是今年才大学毕业的哦！！力荐！！</span>
                    </span>
                    <span class="inline-block one-fourth" style="vertical-align: top;padding:0 3%">
                        <img src="../../static/images/customer3.png" alt=""><br>
                        <span class="fs-24" style="line-height: 33px;">萧萧萧</span><br>
                        <span class="fs-16" style="line-height: 33px;">真的是从未有过的体验，可以用享受来形容，以后不再愁没有地方聚会了，早点知道还有这样的地方就好了，大家玩的都很开心，店面很干净，服务态度也是特亲切，以后我还要来😉</span>
                    </span>
                    <span class="inline-block one-fourth" style="vertical-align: top;padding:0 3%">
                        <img src="../../static/images/customer4.png" alt=""><br>
                        <span class="fs-24" style="line-height: 33px;">兔萌</span><br>
                        <span class="fs-16" style="line-height: 33px;">第二次预订了，刚进来的时候感觉进错店，因为这个店已经重新装修，特别棒，很有情调，是欧式风格，很大气高端，卫生也很干净整洁，设施配套很齐全，很幽静。最喜欢4楼的阳台，静静的看着东湖，静静的享受自然，很清新，舒适。。</span>
                    </span>
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

    export default {
        name: 'home',
        components: {
            'el-carousel': Carousel, 
            'el-carousel-item': CarouselItem,
            HpImage
        },
        data() {
            return {
                isMobile: false,
                cIndex: 0,
                firstScreenTop: 60,
                carouselList: [
                    '/static/images/index-carousel-1.jpg',
                    '/static/images/index-carousel-2.jpg',
                    '/static/images/index-carousel-1.jpg'
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
            var u = navigator.userAgent, app = navigator.appVersion;  
            // return {  
            //     trident: u.indexOf('Trident') > -1, //IE内核  
            //     presto: u.indexOf('Presto') > -1, //opera内核  
            //     webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
            //     gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
            //     mobile: !!u.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/), //是否为移动终端  
            //     ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
            //     android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
            //     iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器  
            //     iPad: u.indexOf('iPad') > -1, //是否iPad  
            //     webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
            // };
            if (!!u.match(/AppleWebKit.*Mobile.*/)) {
                // console.log('mobile');
                // this.$refs.firstScreen.style.position = 'relative';
                this.isMobile = true;
            } else {
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
                this.firstScreenTop -= ev.deltaY * 0.5;
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
                this.$nextTick(()=>{
                    this.firstScreenTop = 60 - this.$refs.firstScreen.clientHeight;
                });
                setTimeout(()=>{
                    this.$refs.firstScreen.style.transition = 'none';
                    window.scrollTo(0,this.$refs.firstScreen.clientHeight+60);
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

<style lang="scss" scoped>
    @import '../styles/var';
    .carousel{
        .carousel-img{
            width: 100%;
        }
    }
    .image-content{
        width: 100%;
        z-index: 2;
        color: #fff;
    }
    .color-grey{
        color:#999;
    }
    .first-screen-pc{
        position: fixed;
        left: 0px;
        width: 100%;
    }
    .first-screen-mobile{
        position: relative;
    }
    .second-screen-pc{
        // transform:translateY(-200vh);
        margin-top: 100vh;
    }
    .section2-svg{
        // width: 350px;
        // padding-left: 50px;
        // padding-right: 50px;
        vertical-align: top;
        .title{
            margin-top: 20px;
            line-height: 32px;
        }
        span{
            line-height: 32px;
        }
    }
    .section-3-title{
        padding: 0 30px;
        border-left: solid 4px $primary-color;
        border-right: solid 4px $primary-color;
    }
    .section-3{
        .title{
            margin-top: 30px;
        }
        svg{
            color: $primary-color;
        }
    }
    .section-4{
        background-color: $primary-color;
        color: #fff;
        padding-bottom: 150px;
    }
    .view-all{
        cursor: pointer;
        position: absolute;
        right: 60px;
        top: 20px;
    }
    .section-5,.section-6{
        position: relative;
        img{
            width: 100%;
        }
        .ceo-says{
            width:calc(100% - 551px);
            padding:5%;
            background-color:#F5F5F5;
            height: 580px;
            vertical-align: top;
        }
    }
    .section-7{
        margin-top: -5px;
        background-color: $primary-color;
        color: #fff;
        padding-bottom: 60px;
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
    
    .caret-down{
        position: absolute;
        bottom: 10px;
        font-size: 20px;
        z-index: 2;
        color: #fff;
        cursor: pointer;
    }
    .carouse-container{
        height: 300px;
        width: 100%;
        .carouse-item{
            width: 20%;
            display: inline-block;
            transition: .4s ease-in-out;
            overflow: hidden;
            z-index: 0;
            position: absolute;
            left: 0;
            top: 0;
            width: 250px;
            height: 350px;
        }
    }
</style>

<style lang="scss">
    @import '../styles/var';
    .el-carousel__container, .carousel-img{
        height: calc(100vh - 60px)!important;
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
