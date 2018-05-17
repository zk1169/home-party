<template>
    <div class="story" style="overflow-x:hidden;">
        <div class="section1 relative">
            <hp-image src="./static/images/store-s1.jpg" alt=""></hp-image>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title">我们从来都是有故事的年轻人 </div><br>
            </div>
        </div>
        <div class="section2 text-center">
            <div v-if="isMobile" class="title">故事和新闻</div>
            <div v-for="(item, index) in storyList" :key="index">
                <div v-if="!isMobile">
                    <div class="story-item" layout="row" layout-wrap v-if="index%2===0">
                        <div flex="60" flex-xs="100">
                            <div class="text-wrap" layout="column">
                                <div class="label"><span>{{item.label}}</span></div>
                                <div class="title">{{item.title}}</div><br>
                                <div class="content color-grey" v-html="item.content"></div>
                                <a class="btn btn-primary inline-block btn-story" target="_blank" :href="`#/story-detail/1/${item.id}`">查看详情 >></a>
                            </div>
                        </div>
                        <div flex="40" flex-xs="100">
                            <img class="width100 margin-left-10" :src="item.cover" alt="">
                        </div>
                    </div>
                    <div class="story-item" layout="row" layout-wrap v-else>
                        <div flex="40" flex-xs="100">
                            <img class="width100" :src="item.cover" alt="">
                        </div>
                        <div flex="60" flex-xs="100">
                            <div class="margin-left-10 text-wrap">
                                <div class="label label2"><span>{{item.label}}</span></div>
                                <div class="title">{{item.title}}</div><br>
                                <div class="content color-grey" v-html="item.content"></div>
                                <a class="btn btn-primary inline-block btn-story" target="_blank" :href="`#/story-detail/1/${item.id}`">查看详情 >></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div v-else class="story-item-mobile">
                    <a class="body" :href="`#/story-detail/1/${item.id}`">
                        <img :src="item.cover" alt="" class="width100">
                        <div class="label"><span>{{item.label}}</span></div>
                        <div class="text">
                            <span class="fs-20">{{item.title}}</span><br>
                            <!-- <span>毕业于浙江科技大学的阿豪，从小学开始就一个人在老</span><br>
                            <span>家，成长环境相对自由，所以性格相对大胆喜欢尝试新…</span> -->
                            <div class="content" v-html="item.content.substr(0, 50)+'...'"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>

        <div class="section3 relative">
            <hp-image src="./static/images/sd-s1.jpg" :has-cover="false" alt=""></hp-image>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title">初夏5月，苏州太湖高大上新店开业</div><br>
                <a class="btn btn-white block" target="_blank" href="#/store-detail/1/1">查看店铺</a>
            </div>
        </div>

        <div class="section2 text-center">
            <div v-for="(item, index) in newsList" :key="index">
                <div v-if="!isMobile">
                    <div class="story-item" layout="row" layout-wrap v-if="index%2===0">
                        <div flex="60" flex-xs="100">
                            <div class="text-wrap" layout="column">
                                <div class="label label2"><span>{{item.label}}</span></div>
                                <div class="title">{{item.title}}</div><br>
                                <div class="content color-grey" v-html="item.content"></div>
                                <a class="btn btn-primary inline-block btn-story" target="_blank" :href="`#/story-detail/2/${item.id}`">查看详情 >></a>
                            </div>
                        </div>
                        <div flex="40" flex-xs="100">
                            <img class="width100 margin-left-10" :src="item.cover" alt="">
                        </div>
                    </div>
                    <div class="story-item" layout="row" layout-wrap v-else>
                        <div flex="40" flex-xs="100">
                            <img class="width100" :src="item.cover" alt="">
                        </div>
                        <div flex="60" flex-xs="100">
                            <div class="margin-left-10 text-wrap">
                                <div class="label label2"><span>{{item.label}}</span></div>
                                <div class="title">{{item.title}}</div><br>
                                <div class="content color-grey" v-html="item.content"></div>
                                <a class="btn btn-primary inline-block btn-story" target="_blank" :href="`#/story-detail/2/${item.id}`">查看详情 >></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="story-item-mobile">
                    <a class="body" :href="`#/story-detail/2/${item.id}`">
                        <img :src="item.cover" alt="" class="width100">
                        <div class="label"><span>{{item.label}}</span></div>
                        <div class="text">
                            <span class="fs-20">{{item.title}}</span><br>
                            <!-- <span>毕业于浙江科技大学的阿豪，从小学开始就一个人在老</span><br>
                            <span>家，成长环境相对自由，所以性格相对大胆喜欢尝试新…</span> -->
                            <div class="content" v-html="item.content.substr(0, 50)+'...'"></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HpImage from '../components/hp-image';
    import StoryAndNews from '../data/story-list';
    
    export default {
        name: 'story',
        components: {
            HpImage
        },
        data() {
            return {
                storyList: StoryAndNews.storyList,
                newsList: StoryAndNews.newsList
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
        .story-item{
            margin-top: 10px;
        }
        .text-wrap{
            background-color: #f5f5f5;
            line-height: 36px;
            text-align: left;
            padding: 60px 100px 30px 100px;
            height: 100%;
            .label span{
                display: inline-block;
                padding: 0px 20px; 
                height: 36px;
                background-color: $primary-color;
                color: #fff;
            }
            .label2 span{
                background-color: #FE8989;
            }
            .title{
                margin-top: 20px;
                font-size: 2.4rem;
                line-height: 36px;
            }
            .content{
                font-size: 1.8rem;
                line-height: 36px;
            }
            .btn{
                margin-top: 40px;
            }
        }
    }
    // .btn{
    //     border-color: #999999!important;
    //     color: #777777!important;
    // }
    .btn-story{
        border-color: #999999;
        color: #777777;
    }
    // .btn:hover{
    //   background-color: $primary-color;
    //   border-color: $primary-color;
    //   color: #fff;
    // }
    .pc-app{
        .section{margin-top:60px;}
        .section1 .title{
            font-size: 4.8rem;
        }
        .section3 .title{
            font-size: 4.6rem;
        }
    }
    .mobile-app{
        .section{margin-top:30px;}
        .section1 .title{
            font-size: 2.4rem;
        }
        .section2 .title{
            font-size: 2rem;
            margin-top: 30px;
            margin-bottom: 10px;
        }
        .section2 .text-wrap{
            padding: 20px 30px 10px 30px;
        }
        .section3{
            margin-top: 10px;
            .title{
                font-size: 2.4rem;
            }
        }
        .story-item-mobile{
            margin-top: 10px;
            .body{
                display: block;
                height: 300px;
                overflow: hidden;
                position: relative;
                // img{
                //     margin-top: -85px;
                // }
                .label{
                    position: absolute;
                    top:0;
                    left:0;
                }
                .label span{
                    display: inline-block;
                    padding: 0px 20px; 
                    height: 36px;
                    line-height: 36px;
                    background-color: $primary-color;
                    color: #fff;
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
                    // background-color: rgba(0,0,0,0.2);
                    background:-webkit-gradient(linear, 0 0, 0 bottom, from(rgba(0,0,0,0)), to(rgba(27,27,27, 0.69)));
                }
            }
        }
    }
</style>
