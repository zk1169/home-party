<template>
    <div class="introduce">
        <div class="section1 relative">
            <!-- <hp-image src="./static/images/index-carousel-2.jpg" alt=""></hp-image> -->
            <el-carousel arrow="never" :interval="5000">
                <el-carousel-item v-for="item in carouselList" :key="item">
                    <hp-image class="s1-image" :src="item" alt=""></hp-image>
                </el-carousel-item>
            </el-carousel>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title">因为更懂年轻人，所以我们受欢迎</div><br>
                <div class="sub-tilte fs-18">目前华中最大互联网+连锁轰趴品牌</div>
                <a class="btn btn-white block">了解加盟详情</a>
            </div>
        </div>
        <div class="section2 text-center">
            <div class="paragrah">
                <div class="title fs-36">我们的愿景</div>
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
                    'translateX(200px) scale(0.83)',
                    'translateX(300px) scale(0.9)',
                    'translateX(500px) scale(1)',
                    'translateX(700px) scale(0.9)',
                    'translateX(800px) scale(0.83)'
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
        .image-wrap div{
            overflow: hidden;
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
            left: 0;
            top: 0;
            width: 250px;
            height: 350px;
            cursor: pointer;
        }
    }
</style>
