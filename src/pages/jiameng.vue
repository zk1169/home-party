<template>
    <div class="jiameng">
        <div class="section1 relative">
            <hp-image v-if="!isMobile" src="./static/images/j-s1.jpg" alt=""></hp-image>
            <hp-image v-else src="./static/images/j-s1-mobile.jpg" alt=""></hp-image>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title">谁抓住了年轻人的心，<br v-if="isMobile">谁就能掌握全新的机会！</div><br>
                <div class="title" v-if="!isMobile">加入我们吧！</div>
            </div>
        </div>
        <div class="section2 section text-center">
            <div class="title">品牌加盟权益</div>
            <div class="p1" layout="row" layout-wrap>
                <div class="p1-item text-center" flex="25">
                    <svg class="icon shouquan fs-46" aria-hidden="true">
                        <use xlink:href="#icon-shouquan"></use>
                    </svg><br><br>
                    <div class="fs-24 text-l3">品牌城市授权</div>
                </div>
                <div class="p1-item text-center" flex="25">
                    <svg class="icon education fs-55" aria-hidden="true">
                        <use xlink:href="#icon-education"></use>
                    </svg>
                    <div class="fs-24 text-l3" style="margin-top: 7px;">总部专业化培训</div>
                </div>
                <div class="p1-item text-center" flex="25">
                    <svg class="icon zhuangxiu fs-46" aria-hidden="true">
                        <use xlink:href="#icon-zhuangxiu"></use>
                    </svg><br><br>
                    <div class="fs-24 text-l3">共享专业化设计、装修</div>
                </div>
                <div class="p1-item text-center" flex="25">
                    <svg class="icon huoche fs-46" aria-hidden="true">
                        <use xlink:href="#icon-huoche"></use>
                    </svg><br><br>
                    <div class="fs-24 text-l3">共享总部产品供货渠道</div>
                </div>
                <div class="p1-item text-center" flex="25">
                    <svg class="icon gengzong fs-46" aria-hidden="true">
                        <use xlink:href="#icon-gengzong"></use>
                    </svg><br><br>
                    <div class="fs-24 text-l3">全程运营跟踪服务</div>
                </div>
                <div class="p1-item text-center" flex="25">
                    <svg class="icon huiyuan fs-46" aria-hidden="true">
                        <use xlink:href="#icon-huiyuan"></use>
                    </svg><br><br>
                    <div class="fs-24 text-l3">共享总部会员资源</div>
                </div>
                <div class="p1-item text-center" flex="25">
                    <svg class="icon fangyuan fs-46" aria-hidden="true">
                        <use xlink:href="#icon-fangyuan"></use>
                    </svg><br><br>
                    <div class="fs-24 text-l3">总部统一的品牌营销</div>
                </div>
                <div class="p1-item text-center" flex="25">
                    <svg class="icon tool fs-46" aria-hidden="true">
                        <use xlink:href="#icon-tool"></use>
                    </svg><br><br>
                    <div class="fs-24 text-l3">总部物品配送，维修管理</div>
                </div>
            </div>
        </div>
        <div class="section3">
            <img v-if="!isMobile" src="../../static/images/j-s2.jpg" alt="" class="width100"/>
            <img v-else src="../../static/images/j-s2-mobile.jpg" alt="" class="width100"/>
        </div>

        <div class="section4 text-center">
            <div class="title fs-36">加盟方式</div>
            <div class="body" layout="row" layout-align="center center" layout-wrap>
                <div flex="40" flex-xs="90" class="s5-item">
                    <div class="title">
                        <svg class="icon jiameng fs-28" aria-hidden="true">
                            <use xlink:href="#icon-jiameng"></use>
                        </svg>
                        <span class="title">常规加盟</span>
                    </div><br v-if="!isMobile">
                    <div>
                        <span class="sub-title">想自己做？</span>
                        <span class="fs-16">教会你如何开始你高回报率的轰趴事业！</span>
                    </div><br v-if="!isMobile"><br v-if="!isMobile">
                    <div>
                        <ul>
                            <li>5年品牌使用权</li>
                            <li>品牌加盟的8大权益</li>
                            <li>总部开业前、开业中、开业后持续的品牌支持</li>
                            <li>价值3万的别墅设计费用</li>
                            <li>价值5000元的人员培训费用</li>
                            <li>总部客户共享订单管理系统、会员管理系统，专业人员培训</li>
                            <li>总部全年客户回访，持续专业改进方案</li>
                        </ul>
                    </div><br v-if="!isMobile"><br v-if="!isMobile">
                    <div class="text-center" style="height: 50px;">
                        <a class="btn btn-primary bg" style="border-radius:0;cursor: default;">5万加盟费 +5万保证金+3%服务费</a>
                    </div>
                </div>
                <div flex="5" flex-xs="0"></div>
                <div flex="40" flex-xs="90" class="s5-item s5-item-2">
                    <div class="title">
                        <svg class="icon tuoguan fs-28" aria-hidden="true">
                            <use xlink:href="#icon-tuoguan"></use>
                        </svg>
                        <span class="title">托管加盟</span>
                    </div><br v-if="!isMobile">
                    <div>
                        <span class="sub-title">想投资正业两不误？</span>
                        <span class="fs-16">我们来帮你开，躺着也赚钱！</span>
                    </div><br v-if="!isMobile"><br v-if="!isMobile">
                    <div>
                        <ul>
                            <li>5年品牌使用权</li>
                            <li>品牌加盟的8大权益</li>
                            <li>总部开业前、开业中、开业后持续的品牌支持</li>
                            <li>价值3万的别墅设计费用</li>
                            <li>总部客户共享订单管理系统、会员管理系统，专业人员培训</li>
                            <li>总部全年客户回访，持续专业改进方案</li>
                            <li>总部代理经营，共享总部线上线下全部渠道，运营部门配合经营</li>
                            <li>全面负责店面人员管理，客服服务，营销推广</li>
                        </ul>
                    </div>
                    <div class="text-center">
                        <a class="btn btn-primary bg" style="border-radius:0;cursor: default;">5万保证金+20%服务费</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HpImage from '../components/hp-image';
    
    export default {
        name: 'jiameng',
        components: {
            HpImage
        },
        data() {
            return {
            };
        },
        mounted() {
        },
        methods: {
        },
    }
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .section2{
        svg{
            color:$primary-color;
        }
    }
    .section3{
        margin-top: 100px;
    }
    .section4{
        background-color: #F5F5F5;
        margin-top: -5px;
        .title{
            margin-bottom: 30px;
        }
        .body{
            text-align: left;
        }
        .s5-item{
            border-radius: 10px;
            background-color: #fff;
            box-shadow: 0 2px 8px #999999;
            padding: 50px 30px 30px 30px;
            .title{
                color: $primary-color;
                font-size: 2.4rem;
            }
            .sub-title{
                font-size: 2rem;
            }
            ul{
                color: #666D70;
                padding-left: 18px;
                line-height: 36px;
                font-size: 16px;
            }
            .btn{
                width: auto;
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
            .pi{
                width: 90%;
                margin-left: 5%;
            }
            .p1 .p1-item{
                margin-top: 100px;
            }
        }
        .section4{
            padding: 60px 0;
        }
    }
    .mobile-app{
        .section{margin-top:30px;}
        .s1-text-wrap{
            .title{
                font-size: 2.6rem;
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
            .p1 .p1-item{
                margin-top: 15px;
                .text-l3{
                    font-size: 1.2rem!important;
                    line-height: 20px;
                }
            }
        }
        .section3{
            margin-top: 30px;
        }
        .section4{
            padding: 30px 0;
            .s5-item{
                padding: 30px 20px 50px 20px;
            }
            .s5-item-2{
                margin-top: 20px;
            }
        }
        .s5-item{
            .title{
                font-size: 1.8rem;
            }
            .sub-title{
                font-size: 1.6rem;
            }
            ul{
                font-size: 1.4rem;
            }
        }
    }
</style>
