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
                <a class="btn btn-white block">了解加盟详情</a>
            </div>
        </div>
        <div class="section2 text-center">
            <div class="paragrah">
                <div class="title fs-36">一栋别墅，花样百出</div>
                <div class="p1 text-l3 fs-18">轰趴，是将单一娱乐场地或活动进行集中，在一个空间能体验到不同空间的娱乐项目。消费升级时代的来临，别墅轰趴行业是刚兴起的一个朝阳行业，市场潜力巨大，可成为取代KTV一类的新型娱乐消费场所。现在行业还处于萌芽阶段，红利期将保持很长一段时间，正式进入的最佳时期</div>
            </div>
            <div class="image-wrap" layout="column">
                <div layout="row" layout-wrap>
                    <div flex="50" flex-xs="100"><img src="../../static/images/s2-1.jpg" alt=""></div>
                    <div flex="25" flex-xs="50" style="padding-left:6px;"><img src="../../static/images/s2-2.jpg" alt=""></div>
                    <div flex="25" flex-xs="50" style="padding-left:6px;"><img src="../../static/images/s2-3.jpg" alt=""></div>
                </div>
                <div layout="row" layout-wrap>
                    <div flex="25" flex-xs="50"><img src="../../static/images/s2-4.jpg" alt=""></div>
                    <div flex="25" flex-xs="50" style="padding-left:6px;"><img src="../../static/images/s2-5.jpg" alt=""></div>
                    <div flex="50" flex-xs="100" style="padding-left:6px;"><img src="../../static/images/s2-6.jpg" alt=""></div>
                </div>
                <div layout="row" layout-wrap>
                    <div flex="25" flex-xs="50"><img src="../../static/images/s2-7.jpg" alt=""></div>
                    <div flex="25" flex-xs="50" style="padding-left:6px;"><img src="../../static/images/s2-8.jpg" alt=""></div>
                    <div flex="25" flex-xs="50" style="padding-left:6px;"><img src="../../static/images/s2-9.jpg" alt=""></div>
                    <div flex="25" flex-xs="50" style="padding-left:6px;"><img src="../../static/images/s2-10.jpg" alt=""></div>
                </div>
            </div>
        </div>
        <div class="section3 section text-center">
            <div class="title fs-36">为什么轰人们需要新的聚会形式？</div>
            <img class="s3-image" src="../../static/images/s3-1.jpg" alt="">
            <div layout="row" class="text-left paragrap">
                <div flex="50" style="padding-right: 10%;">
                    <div class="fs-24 text-l2">消费主力年轻化</div>
                    <div class="fs-16 text-l2">这批主力更热爱交际活动，愿意在玩和聚会上投入消费，每个人都希望被满足、玩的嗨</div>
                </div>
                <div flex="50">
                    <div class="fs-24 text-l2">消费主力年轻化</div>
                    <div class="fs-16 text-l2">这批主力更热爱交际活动，愿意在玩和聚会上投入消费，每个人都希望被满足、玩的嗨</div>
                </div>
            </div>
        </div>
        <div class="section4 section text-center">
            <div class="fs-36">国内聚会存在的问题是什么？</div>
            <div class="body" layout="row" layout-wrap>
                <div flex="40" flex-xs="100" class="overflow-hidden">
                    <img src="../../static/images/s4-1.jpg" alt="" class="width100">
                </div>
                <div flex class="text-right">
                    <div class="fs-36 text-l3">服务单一，转场难</div><br>
                    <div class="fs-24 text-l2">“每次跟朋友聚会都太单调了，但想玩的丰富点，那就要集体打车换场子，奔波过后，都没心思玩了，而且人多的话更众口难调！”</div><br>
                    <div class="fs-36 text-l3">费用高，体验差</div><br>
                    <div class="fs-24 text-l2">越想玩的好越贵，比如唱K加吃饭，再去玩玩桌游，这么多人还真不便宜，而且不能保证服务和环境的质量。</div>
                </div>
            </div>
        </div>
        <div class="section4 section text-center">
            <div class="fs-36">市场潜力分析</div><br>
            <img class="width100" src="../../static/images/s5-1.jpg" alt="">
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
                carouselList: [
                    './static/images/i-s1.jpg',
                    './static/images/i-s1.jpg'
                ],
            };
        },
        created() {
        },
        methods: {

        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .section2{
        .image-wrap div{
            overflow: hidden;
        }
    }
    .section3{
        .s3-image{
            width: 70%;
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
        }
        .section4{
            .body{
                margin-top: 15px;
            }
        }
    }
</style>
