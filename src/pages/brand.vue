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
                <a class="btn btn-white block">了解加盟详情</a>
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
                        <svg class="icon zuanshi fs-60" aria-hidden="true">
                            <use xlink:href="#icon-zuanshi"></use>
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
                        </svg>
                        <div class="fs-24 text-l2">一站式服务</div><br>
                        <div class="fs-16 text-l1">为客户提供吃、喝、玩、住一站式服务，打造多种娱乐场景的集合，最适合年轻人聚会的轰趴品牌</div>
                    </div>
                    <div class="p1-item text-center" flex="1">
                        <svg class="icon yizhanshi fs-60" aria-hidden="true">
                            <use xlink:href="#icon-yizhanshi"></use>
                        </svg>
                        <div class="fs-24 text-l2">标准化管理</div><br>
                        <div class="fs-16 text-l1">打造轰趴行业标准化管理的行业准则，让客户享受到轰趴行业的五星级服务。</div>
                    </div>
                    <div class="p1-item text-center" flex="1">
                        <svg class="icon yizhanshi fs-60" aria-hidden="true">
                            <use xlink:href="#icon-yizhanshi"></use>
                        </svg>
                        <div class="fs-24 text-l2">管家式服务</div><br>
                        <div class="fs-16 text-l1">通过专业化培训，让每位管家=初级厨师+活动策划师+布场达人+轰趴运营专员。</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="section3 text-center">
            <div class="title fs-36">我们有牛掰的团队</div>
            <div class="team-container relative">
                <div v-for="(item, index) in teamList" :key="item" class="team-item" ref="teams" @click="teamMemberClick(index)">
                    <img style="width: 250px;height:350px;" :src="item" alt="">
                </div>
            </div>
            <div class="team-indicator">
                <span v-for="item in teamList" :key="item" class="team-indicator-item"></span>
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
        name: 'brand',
        components: {
            'el-carousel': Carousel, 
            'el-carousel-item': CarouselItem,
            HpImage
        },
        data() {
            return {
                cIndex: 0,
                carouselList: [
                    './static/images/b-s1.jpg',
                    './static/images/b-s1.jpg'
                ],
                teamList: [
                    './static/images/s2-1.jpg',
                    './static/images/s2-2.jpg',
                    './static/images/s2-3.jpg',
                    './static/images/s2-4.jpg',
                    './static/images/s2-5.jpg',
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
                    this.$refs.teams[i].style.transform = this.positionList[index];
                    this.$refs.teams[i].style.zIndex = zIndex;
                }
                this.cIndex++;
            },
            teamMemberClick(index) {
                if (this.timer) {
                    clearInterval(this.timer);
                }
                this.cIndex = 2-index+5;
                this.setPos();
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
        background-color: #D2D2D2;
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
    }
    .section4{
        .p1-item{
            padding: 0 6%;
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
        height: 300px;
        width: 100%;
        .team-item{
            width: 20%;
            display: inline-block;
            transition: .4s ease-in-out;
            overflow: hidden;
            z-index: 0;
            position: absolute;
            left: 50%;
            top: 0;
            width: 250px;
            height: 350px;
            cursor: pointer;
        }
    }
</style>
