<template>
    <div class="story">
        <div class="section1 relative">
            <hp-image src="./static/images/store-s1.jpg" alt=""></hp-image>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title fs-48">我们从来都是有故事的年轻人 </div><br>
            </div>
        </div>
        <div class="section2 text-center">
            <div v-for="(item, index) in storyList" :key="index">
                <div class="story-item" layout="row" layout-wrap v-if="index%2===0">
                    <div flex="60" flex-xs="100" class="text-wrap" layout="column">
                        <div class="label"><span>{{item.label}}</span></div>
                        <div class="title">{{item.title}}</div><br>
                        <div class="content color-grey" v-html="item.content"></div>
                        <a class="btn btn-primary inline-block btn-story" target="_blank" :href="`#/story-detail/1/${item.id}`">查看详情 >></a>
                    </div>
                    <div flex style="margin-left: 10px;">
                        <img class="width100" :src="item.cover" alt="">
                    </div>
                </div>
                <div class="story-item" layout="row" layout-wrap v-else>
                    <div flex="40" flex-xs="100">
                        <img class="width100" :src="item.cover" alt="">
                    </div>
                    <div flex class="text-wrap" style="margin-left: 10px;">
                        <div class="label label2"><span>{{item.label}}</span></div>
                        <div class="title">{{item.title}}</div><br>
                        <div class="content color-grey" v-html="item.content"></div>
                        <a class="btn btn-primary inline-block btn-story" target="_blank" :href="`#/story-detail/1/${item.id}`">查看详情 >></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="section3 relative">
            <hp-image src="./static/images/sd-s1.jpg" :has-cover="false" alt=""></hp-image>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title fs-47">初夏5月，苏州太湖高大上新店开业</div><br>
                <a class="btn btn-white block" target="_blank" href="#/store-detail/1/1">查看店铺</a>
            </div>
        </div>

        <div class="section2 text-center">
            <div v-for="(item, index) in newsList" :key="index">
                <div class="story-item" layout="row" layout-wrap v-if="index%2===0">
                    <div flex="60" flex-xs="100" class="text-wrap" layout="column">
                        <div class="label label2"><span>{{item.label}}</span></div>
                        <div class="title">{{item.title}}</div><br>
                        <div class="content color-grey" v-html="item.content"></div>
                        <a class="btn btn-primary inline-block btn-story" target="_blank" :href="`#/story-detail/2/${item.id}`">查看详情 >></a>
                    </div>
                    <div flex style="margin-left: 10px;">
                        <img class="width100" :src="item.cover" alt="">
                    </div>
                </div>
                <div class="story-item" layout="row" layout-wrap v-else>
                    <div flex="40" flex-xs="100">
                        <img class="width100" :src="item.cover" alt="">
                    </div>
                    <div flex class="text-wrap" style="margin-left: 10px;">
                        <div class="label label2"><span>{{item.label}}</span></div>
                        <div class="title">{{item.title}}</div><br>
                        <div class="content color-grey" v-html="item.content"></div>
                        <a class="btn btn-primary inline-block btn-story" target="_blank" :href="`#/story-detail/2/${item.id}`">查看详情 >></a>
                    </div>
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
    }
    .mobile-app{
        .section{margin-top:30px;}
    }
</style>
