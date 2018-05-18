<template>
    <div class="story-detail" style="overflow-x:hidden;">
        <div class="section1">
            <img :src="storyModel.coverBig" alt="" class="width100"/>
        </div>
        <div class="section2" layout="row" layout-wrap>
            <div flex="20" flex-xs="100" layout="column" layout-align="start center">
                <img :src="storyModel.headerImg" alt="" style="width: 130px;"><br>
                <span class="label fs-16">{{storyModel.label}}</span><br>
                <span class="fs-16">人物：{{storyModel.storyName}}</span>
            </div>
            <div flex="80" flex-xs="100" class="right-content">
                <div class="title fs-24 font-bold">{{storyModel.title}}</div>
                <!-- <div class="content fs-16">{{storyModel.content}}</div> -->
                <div class="content fs-16 color-grey" v-for="(item, index) in storyModel.paragraph" :key="index" v-html="item">
                </div>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
    import StoryAndNews from '../data/story-list';

    export default {
        name: 'story-detail',
        data() {
            const storyId = this.$route.params.id - 1;
            const storeOrNews = this.$route.params.type === '1' ? 'storyList' : 'newsList';
            return {
                storyModel: StoryAndNews[storeOrNews][storyId]
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
        margin-top: 60px;
        .label{
            display: inline-block;
            padding: 0px 20px; 
            height: 36px;
            background-color: $primary-color;
            color: #fff;
            line-height: 36px;
        }
        .content{
            margin-top: 30px;
            color: #666D70;
            line-height: 36px;
        }
        .right-content{
            padding-right: 20%;
        }
    }
    .line{
        margin-top: 100px;
        display:inline-block;
        width: 96%;
        border-top: solid 1px #d2d2d2;
        margin-left: 2%;
    }
    .pc-app{
        .section{margin-top:60px;}
    }
    .mobile-app{
        .section{margin-top:30px;}
        .section2 .right-content{
            padding: 20px!important;
        }
    }
</style>
