<template>
    <div class="home">
        <div class="section1 section1-fixed text-center" :style="{top:`${firstScreenTop}px`}" ref="firstScreen">
            <el-carousel class="vertical-indicator" v-if="!isMobile" arrow="never" :interval="5000">
                <el-carousel-item v-for="(item, index) in carouselList" :key="index">
                    <hp-image class="s1-image" :src="item" :has-cover="false" alt=""></hp-image>
                </el-carousel-item>
            </el-carousel>
            <hp-image v-else class="mobile-s1" src="./static/images/index-carousel-1.jpg" :has-cover="false" alt=""></hp-image>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <img class="logo" src="../../static/images/logo-big.png" alt="">
                <span class="s1-text-1 block">让聚会变得更简单</span>
                <!-- <span class="s1-text-2 block fs-16">打造中国最懂年轻人的派对连锁品牌</span> -->
                <a class="s1-btn btn btn-primary bg block" href="#/cooperation">了解加盟合作 >></a>
            </div>
            <svg class="icon double-caret-down" aria-hidden="true" @click="downClick">
                <use xlink:href="#icon-double-caret-down"></use>
            </svg>
        </div>
        <div class="section2 section2-fixed relative">
            <div class="section2-1 relative text-center">
                <hp-image src="./static/images/h-s2.jpg" :has-cover="false" alt=""></hp-image>
                <div class="s21-text-wrap image-text-wrap" layout="column" layout-align="center center">
                    <div class="title">轰趴，消费升级时代中的必然产物</div>
                    <div class="p1" :layout="isMobile?'column':'row'" style="width:80%;">
                        <div class="p1-item text-center" flex="1">
                            <img src="../../static/images/h-s2-1.png" alt="">
                            <div class="title2 text-l2 font-bold">什么是轰趴</div>
                            <span class="p2 text-l1">将单一娱乐场地或活动进行集中，让人在一个空间能体验多个空间的娱乐</span>
                        </div>
                        <div class="p1-item text-center" flex="1">
                            <img src="../../static/images/h-s2-2.png" alt="">
                            <div class="title2 text-l2 font-bold">行业机遇</div>
                            <span class="p2 text-l1">聚会需求大，市场聚会方式单一，已有的轰趴服务质量不一，极待升级</span>
                        </div>
                        <div class="p1-item text-center" flex="1">
                            <img src="../../static/images/h-s2-3.png" alt="">
                            <div class="title2 text-l2 font-bold">市场环境</div>
                            <span class="p2 text-l1">消费主力年轻化，消费需求的多样化，消费能力水平日渐提高</span>
                        </div>
                    </div>
                    <a class="btn btn-white block" href="#/introduce">了解更多 >></a>
                </div>
            </div>

            <div class="section2-2 text-center">
                <div class="title">用我们的专业，保障每一个加盟者的收益</div>
                <div class="section2-2-p" layout="row" layout-wrap>
                    <div flex="1" flex-xs="50" class="section2-2-p-item">
                        <svg class="icon lingdai" aria-hidden="true">
                            <use xlink:href="#icon-lingdai"></use>
                        </svg>
                        <div class="title text-l2 font-bold">品牌宗旨</div>
                        <span class="text-l2">多样化服务</span><br>
                        <span class="text-l2">标准化管理</span><br>
                        <span class="text-l2">管家式服务</span>
                    </div>
                    <div flex="1" flex-xs="50" class="section2-2-p-item">
                        <svg class="icon tianping" aria-hidden="true">
                            <use xlink:href="#icon-tianping"></use>
                        </svg>
                        <div class="title text-l2 font-bold">竞争优势</div>
                        <span class="text-l2">成熟健全的团队</span><br>
                        <span class="text-l2">连锁品牌影响力</span><br>
                        <span class="text-l2">完善的服务理念</span>
                    </div>
                    <div flex="1" flex-xs="50" class="section2-2-p-item">
                        <svg class="icon duoyuanhua" aria-hidden="true">
                            <use xlink:href="#icon-duoyuanhua"></use>
                        </svg>
                        <div class="title text-l2 font-bold">多元化盈利</div>
                        <span class="text-l2">拓展轰趴周边的盈利模式</span><br>
                        <span class="text-l2">挖掘多样化的玩法</span><br>
                        <span class="text-l2">多元化盈利</span>
                    </div>
                    <div flex="1" flex-xs="50" class="section2-2-p-item">
                        <svg class="icon zhanlue" aria-hidden="true">
                            <use xlink:href="#icon-zhanlue"></use>
                        </svg>
                        <div class="title text-l2 font-bold">战略优势</div>
                        <span class="text-l2">2个基本点：装修+定制</span><br>
                        <span class="text-l2">3大要点：服务+SEO+地推</span>
                    </div>
                </div>
                <a class="btn btn-primary block" href="#/brand">了解品牌 >></a>
            </div>

            <div class="section2-3">
                <div class="title fs-36 text-center">品牌现况</div>
                <div class="body" layout="row" layout-wrap>
                    <div flex="1" flex-xs="50">
                        <div layout="column" layout-align="start center">
                            <div class="text-left">
                                <span class="fs-18" style="line-height: 25px;">已有加盟店</span><br>
                                <span class="fs-36 font-bold" style="line-height: 50px;">{{config1.storeNumber}}个</span>
                            </div>
                        </div>
                    </div>
                    <div flex="1" flex-xs="50">
                        <div layout="column" layout-align="start center">
                            <div class="text-left">
                                <span class="fs-18" style="line-height: 25px;">已入驻</span><br>
                                <span class="fs-36 font-bold" style="line-height: 50px;">{{config1.cityNumber}}个城市</span>
                            </div>
                        </div>
                    </div>
                    <div flex="1" flex-xs="50">
                        <div layout="column" layout-align="start center">
                            <div class="text-left">
                                <span class="fs-18" style="line-height: 25px;">已有加盟商</span><br>
                                <span class="fs-36 font-bold" style="line-height: 50px;">{{config1.partnerNumber}}人</span>
                            </div>
                        </div>
                    </div>
                    <div flex="1" flex-xs="50">
                        <div layout="column" layout-align="start center">
                            <div class="text-left">
                                <span class="fs-18" style="line-height: 25px;">品牌团队</span><br>
                                <span class="fs-36 font-bold" style="line-height: 50px;">{{config1.teamNumber}}人</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section2-4 text-center">
                <div class="fs-36">加盟店案例<a v-if="isMobile" class="inline-block view-all fs-14" style="top: 5px;" href="#/store-list">查看所有 >></a><br></div>
                <a v-if="!isMobile" class="inline-block view-all fs-20" href="#/store-list">查看所有 >></a><br>
                <div class="inline-block" style="width: 100%;max-width: 1440px;">
                    <!-- <div class="body" layout="row" layout-wrap>
                        <div flex="40" flex-xs="100" style="padding-right: 10px;" class="overflow-hidden">
                            <img src="../../static/images/anli1.jpg" alt="" class="width100">
                        </div>
                        <div flex="40" flex-xs="100" style="padding: 0 10px;" class="overflow-hidden" layout="column">
                            <div flex="50" layout="row">
                                <div flex="50" style="padding-right: 10px;padding-bottom: 10px;" class="overflow-hidden">
                                    <img src="../../static/images/anli2.jpg" alt="" class="width100">
                                </div>
                                <div flex="50" style="padding-left: 10px;padding-bottom: 10px;" class="overflow-hidden">
                                    <img src="../../static/images/anli3.jpg" alt="" class="width100">
                                </div>
                            </div>
                            <div flex="50" class="overflow-hidden">
                                <img src="../../static/images/anli4.jpg" alt="" class="width100">
                            </div>
                        </div>
                        <div flex="20" flex-xs="100" class="overflow-hidden" style="height: 449px;">
                            <img src="../../static/images/anli5.jpg" alt="" class="width100">
                        </div>
                    </div> -->
                    <div layout="row" layout-wrap class="image-item">
                        <div flex="40" flex-xs="100" class="image-item-padding-right"><img src="../../static/images/anli1.jpg" alt="" class="width100"></div>
                        <div flex="40" flex-xs="100">
                            <div layout="row">
                                <div flex="50" class="image-item-padding-right"><img src="../../static/images/anli2.jpg" alt="" class="width100"></div>
                                <div flex="50" class="image-item-padding-right"><img src="../../static/images/anli3.jpg" alt="" class="width100"></div>
                            </div>
                            <div class="image-item-padding-right image-top"><img src="../../static/images/anli4.jpg" alt="" class="width100"></div>
                        </div>
                        <div flex="20" flex-xs="100" class="image-last"><img src="../../static/images/anli5.jpg" alt="" class="width100"></div>
                    </div>
                </div>
            </div>

            <div v-if="!isMobile" class="section2-5 text-center relative">
                <div class="fs-36">听听加盟人怎么说</div>
                <a v-if="!isMobile" class="inline-block view-all fs-20" style="top: 15px;" href="#/story">查看更多 >></a><br>
                <div class="body" layout="row" layout-wrap>
                    <div flex="60" flex-xs="100" class="text-left ceo-says">
                        <div class="label"><span>加盟人故事</span></div>
                        <!-- <div class="fs-24">武汉第一个加盟商的经历</div><br> -->
                        <div class="fs-24">因为不甘平庸，所以一直在路上</div><br>
                        <div class="fs-16 color-grey text-l2">毕业于浙江科技大学的阿豪，从小学开始就一个人在老家，成长环境相对自由，所以性格相对大胆喜欢尝试新鲜事物，大三时机缘巧合接触到了轰趴这个行业，凭着年轻人对新鲜事物敏锐的洞察力，阿豪认为轰趴行业拥有势不可挡的商业前景，当下便决定与朋友合作开一家自己的轰趴店。经过考察，阿豪发现，别墅轰趴是消费升级的一种体现，多样化的娱乐方式更好的迎合了当下年轻的主力消费群体，在多方调查后，属于他的第一栋别墅轰趴馆在一个月之后立马开业了…</div>
                        <a class="btn btn-primary block" style="margin-top: 60px;" target="_blank" href="#/story-detail/1/1">查看详情 >></a>
                    </div>
                    <div flex flex-xs="100" class="overflow-hidden" style="margin-left: 10px;">
                        <img src="../../static/images/story-1-cover.jpg" alt="" class="width100">
                    </div>
                </div>
            </div>

            <div v-else class="section2-5 mobile-section2-5 text-center">
                <div class="fs-24 relative">听听加盟人怎么说<a v-if="isMobile" class="inline-block view-all fs-14" style="top: 3px;right: 10px;" href="#/story">查看更多 >></a></div>
                <a class="body block" href="#/story-detail/1/1">
                    <img src="../../static/images/story-1-cover.jpg" alt="" class="width100">
                    <div class="label"><span>加盟人故事</span></div>
                    <div class="text">
                        <span class="sub-title font-bold">因为不甘平庸，所以一直在路上</span><br>
                        <span>毕业于浙江科技大学的阿豪，从小学开始就一个人在老</span><br>
                        <span>家，成长环境相对自由，所以性格相对大胆喜欢尝试新…</span>
                    </div>
                </a>
            </div>

            <div v-if="!isMobile" class="section-2-6 text-center">
                <div class="title fs-36">我们广受顾客好评</div>
                <div layout="row" layout-wrap class="body">
                    <div flex="1" flex-xs="100" class="comment-item">
                        <img src="../../static/images/customer1.png" alt=""><br><br>
                        <span class="fs-24 text-l2 font-bold">周子周</span><br>
                        <span class="fs-16 text-l2">我是用来接亲的，朋友晚上过去的都说这套别墅太棒了，好多朋友都吹捧，倍儿有感觉😄😄婚礼配上欧式风格高大上，我的眼光真不错，感谢慢姑娘别墅提供给我这么优秀的地方，我会向朋友大力推荐哦</span>
                    </div>
                    <div flex="1" flex-xs="100" class="comment-item">
                        <img src="../../static/images/customer2.png" alt=""><br><br>
                        <span class="fs-24 text-l2 font-bold">鲜森张</span><br>
                        <span class="fs-16 text-l2">很开心的一次轰趴，整套别墅很大，在东湖边上，店长小哥很热情，我们下午到的，院子里有游泳池，小哥为我们泳池换新水！！户外院子BBQ也很嗨皮，慢姑娘别墅轰趴都有直接对接配送的，不需要我们大热天跑去超市各种买还要自提过去！！最后提一下小哥服务真的贴心，据说还是今年才大学毕业的哦！！力荐！！</span>
                    </div>
                    <div flex="1" flex-xs="100" class="comment-item">
                        <img src="../../static/images/customer3.png" alt=""><br><br>
                        <span class="fs-24 text-l2 font-bold">萧萧萧</span><br>
                        <span class="fs-16 text-l2">真的是从未有过的体验，可以用享受来形容，以后不再愁没有地方聚会了，早点知道还有这样的地方就好了，大家玩的都很开心，店面很干净，服务态度也是特亲切，以后我还要来😉</span>
                    </div>
                    <div flex="1" flex-xs="100" class="comment-item">
                        <img src="../../static/images/customer4.png" alt=""><br><br>
                        <span class="fs-24 text-l2 font-bold">兔萌</span><br>
                        <span class="fs-16 text-l2">第二次预订了，刚进来的时候感觉进错店，因为这个店已经重新装修，特别棒，很有情调，是欧式风格，很大气高端，卫生也很干净整洁，设施配套很齐全，很幽静。最喜欢4楼的阳台，静静的看着东湖，静静的享受自然，很清新，舒适。。</span>
                    </div>
                </div>
            </div>

            <div v-else class="section-2-6-mobile text-center">
                <div class="title fs-36">我们广受顾客好评</div>
                <div class="body">
                    <el-carousel ref="commentCarousel" arrow="never" :interval="5000">
                        <el-carousel-item>
                            <div class="comment-item">
                                <img src="../../static/images/customer1.png" style="width: 100px!important;height:100px!important;" alt=""><br><br>
                                <span class="fs-24 text-l2 font-bold">周子周</span><br>
                                <span class="fs-16 text-l2">我是用来接亲的，朋友晚上过去的都说这套别墅太棒了，好多朋友都吹捧，倍儿有感觉😄😄婚礼配上欧式风格高大上，我的眼光真不错，感谢慢姑娘别墅提供给我这么优秀的地方，我会向朋友大力推荐哦</span>
                            </div>
                        </el-carousel-item>
                        <el-carousel-item>
                            <div class="comment-item">
                                <img src="../../static/images/customer2.png" style="width: 100px!important;height:100px!important;" alt=""><br><br>
                                <span class="fs-24 text-l2 font-bold">鲜森张</span><br>
                                <span class="fs-16 text-l2">很开心的一次轰趴，整套别墅很大，在东湖边上，店长小哥很热情，我们下午到的，院子里有游泳池，小哥为我们泳池换新水！！户外院子BBQ也很嗨皮，慢姑娘别墅轰趴都有直接对接配送的，不需要我们大热天跑去超市各种买还要自提过去！！最后提一下小哥服务真的贴心，据说还是今年才大学毕业的哦！！力荐！！</span>
                            </div>
                        </el-carousel-item>
                        <el-carousel-item>
                            <div class="comment-item">
                                <img src="../../static/images/customer3.png" style="width: 100px!important;height:100px!important;" alt=""><br><br>
                                <span class="fs-24 text-l2 font-bold">萧萧萧</span><br>
                                <span class="fs-16 text-l2">真的是从未有过的体验，可以用享受来形容，以后不再愁没有地方聚会了，早点知道还有这样的地方就好了，大家玩的都很开心，店面很干净，服务态度也是特亲切，以后我还要来😉</span>
                            </div>
                        </el-carousel-item>
                        <el-carousel-item>
                            <div class="comment-item">
                                <img src="../../static/images/customer4.png" style="width: 100px!important;height:100px!important;" alt=""><br><br>
                                <span class="fs-24 text-l2 font-bold">兔萌</span><br>
                                <span class="fs-16 text-l2">第二次预订了，刚进来的时候感觉进错店，因为这个店已经重新装修，特别棒，很有情调，是欧式风格，很大气高端，卫生也很干净整洁，设施配套很齐全，很幽静。最喜欢4楼的阳台，静静的看着东湖，静静的享受自然，很清新，舒适。。</span>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <svg class="icon caret-left fs-28" aria-hidden="true" @click="commentPrevClick()">
                    <use xlink:href="#icon-caret-left"></use>
                </svg>
                <svg class="icon caret-right fs-28" aria-hidden="true" @click="commentNextClick()">
                    <use xlink:href="#icon-caret-right"></use>
                </svg>
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
                firstScreenTop: this.isMobile?0:60,
                lastScrollTop: 0,
                config1: {},
                carouselList: [
                    './static/images/index-carousel-1.jpg',
                    './static/images/index-carousel-2.jpg'
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
            if (this.browser === 'pc' && this.isChrome) {
                /*IE注册事件*/ 
                if(document.attachEvent){ 
                    document.attachEvent('onmousewheel',this.onScroll); 
                } else if (document.addEventListener) {
                    document.addEventListener('DOMMouseScroll',this.onScroll,false); 
                } else {
                    document.onmousewheel = this.onScroll;
                }
                // document.body.addEventListener('onscroll', this.onScroll);
                $(document).scroll(this.onScroll);
                // window.onscroll = this.onScroll;
            }
            // document.onmousewheel = this.onScroll;

            const url = `/api/config/1?ts=${new Date().getTime()}`;
            $.ajax({
                // dataType: 'application/json;charset=utf-8',
                type: "GET",
                url,
                success: (res) => {
                    this.config1 = res.data;
                },
                error: (res) => {
                    this.$eventHub.$emit('ALERT', {type: 'warning', message: '服务器忙，请稍后重试。'});
                }
            });
            $.ajax({
                // dataType: 'application/json;charset=utf-8',
                type: "GET",
                url: `/api/banner/name/home?ts=${new Date().getTime()}`,
                success: (res) => {
                    this.carouselList = res.data.images.split(',');
                },
                error: (res) => {
                    this.$eventHub.$emit('ALERT', {type: 'warning', message: '服务器忙，请稍后重试。'});
                }
            });
        },
        methods: {
            onScroll(ev) {
                if (ev.deltaY === undefined) {
                    ev.preventDefault();
                    ev.stopPropagation();
                  let scrollTop = $('body').scrollTop() || $('body,html').scrollTop();
                  let deltaTop = scrollTop - this.lastScrollTop;
                  this.lastScrollTop = scrollTop;
                  this.firstScreenTop -= deltaTop * 0.3;
                } else {
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
                    // var _deltaY = ev.deltaY * 0.3;
                    // var _deltaY = 0;
                    // if (ev.deltaY > 0) {
                    //     _deltaY = ev.deltaY * 0.3;
                    // } else if (ev.deltaY < 0) {
                    //     _deltaY = ev.deltaY * 3;
                    // }
                    this.firstScreenTop -= _deltaY;
                }
                if (this.firstScreenTop > 60) {
                    this.firstScreenTop = 60;
                }
                if (this.firstScreenTop < minTop) {
                    this.firstScreenTop = minTop;
                }
            },
            downClick() {
                this.$refs.firstScreen.style.transition = 'all 1s ease';
                if (this.isMobile) {
                    $('body,html').animate({ scrollTop: this.$refs.firstScreen.clientHeight }, 1000);
                    setTimeout(()=>{
                        // this.firstScreenTop = 60 - this.$refs.firstScreen.clientHeight / 2;
                        // this.firstScreenTop = 60;
                        this.firstScreenTop = 0;
                    },0);
                    setTimeout(()=>{
                        this.$refs.firstScreen.style.transition = 'none';
                        // this.firstScreenTop = 0;
                        // window.scrollTo(0,this.$refs.firstScreen.clientHeight+60);
                    },1000);
                } else {
                    $('body,html').animate({ scrollTop: this.$refs.firstScreen.clientHeight+60 }, 800);
                    setTimeout(()=>{
                        this.firstScreenTop = 60 - this.$refs.firstScreen.clientHeight / 2;
                        // this.firstScreenTop = 60;
                    },100);
                    setTimeout(()=>{
                        this.$refs.firstScreen.style.transition = 'none';
                        this.firstScreenTop = 60;
                        // window.scrollTo(0,this.$refs.firstScreen.clientHeight+60);
                    },1000);
                }
            },
            commentPrevClick() {
                this.$refs.commentCarousel.prev();
            },
            commentNextClick() {
                this.$refs.commentCarousel.next();
            }
        },
        computed: {},
        destroyed() {
            document.onmousewheel = null;
            $(document).off('scroll', this.onScroll);
        }
    }
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .home{
        overflow-x: hidden; 
    }
    .image-c{
        background-color: #D8D8D8;
    }
    .last-image{
        background: url(../../static/images/anli5.jpg);
        background-repeat:no-repeat; 
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        height: 460px;
    }
    .section-border-title{
        padding: 0 3rem;
        border-left: solid 4px $primary-color;
        border-right: solid 4px $primary-color;
        display: inline-block;
    }
    .section1{
        // transition: all .3s ease;
        // -ms-transition: all 1s ease;
        .double-caret-down{
            position: absolute;
            bottom: 10px;
            font-size: 20px;
            z-index: 2;
            color: #fff;
            cursor: pointer;
        }
        .mobile-s1 {
            position: relative;
            overflow: hidden;
            width: 100%;
            height: calc(100vh - 60px);
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
                        img{
                            width: 100px;
                            height: 100px;
                        }
                    }
                }
            }
        }
        .section2-2{
            margin-top: 60px;
            .btn{
                margin-top: 60px;
            }
            svg{
                color: $primary-color;
            }
            .title{
                font-size: 3.6rem;
            }
            .section2-2-p{
                .title{
                    margin-top: 30px;
                }
                .section2-2-p-item{
                    margin-top: 60px;
                    .title{
                        font-size: 2.4rem;
                    }
                    span{
                        font-size: 1.6rem;
                    }
                    svg{
                        font-size: 8rem;
                    }
                    span{
                        color: #777;
                    }
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
        }
        .view-all{
            cursor: pointer;
            position: absolute;
            right: 60px;
            top: 20px;
            text-decoration: none;
            color: #555;
        }
        .view-all:hover,.view-all:focus,.view-all:active{
            color: #4a90e2;
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
            .label{
                margin-bottom: 20px;
            }
            .label span{
                display: inline-block;
                padding: 0px 20px; 
                height: 36px;
                line-height: 36px;
                background-color: $primary-color;
                color: #fff;
            }
        }
        .section-2-6{
            margin-top: 10px;
            padding-top:60px;
            background-color: $primary-color;
            color: #fff;
            padding-bottom: 60px;
            .body{
                .comment-item{
                    vertical-align: top;
                    padding:0 3%;
                    margin-top: 30px;
                }
            }
        }
    }
    .pc-app{
        .section1-fixed{
            position: fixed;
            left: 0;
            top: 0;
        }
        .section1{
            width: 100%;
            .s1-text-wrap{
                .s1-text-1{
                    margin-top: 60px;
                    font-size: 3.4rem;
                }
                .s1-text-2{
                    margin-top: 10px;
                }
                .s1-btn{
                    margin-top: 30px;
                }
            }
            .logo{
                width:220px;
            }
        }
        .section2-fixed{
            margin-top: 100vh;
        }
        .section2{
            
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
            .section2-4{
                .image-top{
                    margin-top: 6px;
                }
                .image-last{
                    height: 449px;
                    overflow: hidden;
                }
            }
            .section-2-6{
                margin-top: 10px;
                padding-top:60px;
                background-color: $primary-color;
                color: #fff;
                padding-bottom: 60px;
                .body{
                    .comment-item{
                        margin-top: 60px;
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
                    margin-top: 30px;
                    font-size: 3rem;
                }
                .s1-text-2{
                    margin-top: 10px;
                }
                .s1-btn{
                    margin-top: 30px;
                }
            }
            .logo{
                width:100px;
            }
        }
        .section2{
            .section2-1{
                .s21-text-wrap{
                    .title{
                        font-size: 2.4rem;
                    }
                    .p1{
                        margin-top: 0px;
                        .p1-item{
                            display: block;
                            padding: 0 3%;
                            margin-top: 20px;
                            .title2{
                                margin-top: 10px;
                                font-size: 1.6rem;
                            }
                            .p2{
                                font-size: 1.4rem;
                                // display: none;
                            }
                            img{
                                width: 50px;
                                height: 50px;
                            }
                        }
                    }
                    .btn{
                        margin-top: 20px;
                    }
                }
            }
        }
        .section2-2{
            margin-top: 30px;
            .btn{
                margin-top: 30px;
            }
            .title{
                font-size: 2rem;
            }
            .section2-2-p{
                .title{
                    margin-top: 20px;
                }
                .section2-2-p-item{
                    margin-top: 30px;
                    .title{
                        font-size: 1.6rem;
                    }
                    span{
                        font-size: 1.4rem;
                    }
                }
            }
        }
        .section2-3{
            margin-top: 30px;
            padding-bottom: 40px;
            .title{
                padding-top:30px;
            }
            .body{
                margin-top: 30px;
            }
        }
        .section2-4{
            margin-top: 30px;
            .body{
                margin-top: 0px;
                img{
                    width: 100%;
                }
                .overflow-hidden{
                    padding: 0!important;
                }
            }
            .view-all{
                top: 50px;
                right: 20px;
            }
            .image-top{
                margin-top: 0px;
            }
        }
        .mobile-section2-5{
            .body{
                height: 300px;
                overflow: hidden;
                position: relative;
                img{
                    margin-top: -85px;
                }
                .label{
                    position: absolute;
                    top:0;
                    left:0;
                }
                .label span{
                    padding: 0px 10px; 
                    height: 20px;
                    line-height: 20px;
                }
                .text{
                    position: absolute;
                    bottom:0;
                    left:0;
                    padding: 10px;
                    color: #fff;
                    text-align: left;
                    font-size: 1.6rem;
                    line-height: 26px;
                    background-color: rgba(0,0,0,0.2);
                    width:100%;
                    .sub-title{
                        font-weight: bold;
                        font-size: 1.6rem;
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
    @import '../styles/var';
    .section-2-6-mobile{
        position: relative;
        .el-carousel__button{
            width: 10px;
            height: 10px;
            border-radius: 50%;
        }
        .el-carousel__item{
            background-color: #F17E01;
        }
        // .el-carousel__indicators{
        //     left: 50%;
        //     bottom: 10px;
        //     -ms-transform: translateX(-50%) translateX(0)!important;
        //     transform: translateX(-50%) translateX(0)!important;
        //     left: auto!important;
        //     bottom: auto!important;
        //     .el-carousel__indicator{
        //         display: inline-block;
        //         .el-carousel__button{
        //             width: 10px;
        //             height: 10px;
        //             border-radius: 50%;
        //         }
        //     }
        // }
        margin-top: 20px;
        padding-top:30px;
        background-color: $primary-color;
        color: #fff;
        padding-bottom: 20px;
        .body{
            margin-top:20px;
        }
        .comment-item{
            vertical-align: top;
            margin-top: 10px!important;
            padding: 0 15%!important;
        }
        svg.icon{
            position: absolute;
            top: 50%;
            cursor: pointer;
            z-index: 999;
        }
        svg.caret-left{left: 15px;}
        svg.caret-right{right: 15px;}
    }
</style>