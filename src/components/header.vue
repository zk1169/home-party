<template>
    <div class="hp-header">
        <img class="logo" src="../assets/images/logo.png" alt="">
        <span class="menu" style="vertical-align: top;">让聚会变得更简单</span>
        <div class="menu-container inline-block pull-right" :class="{'hide':isMobile}">
            <span :class="['menu', {'active':$route.name==='home'}]" @click="menuClick('home')">首页</span>
            <span :class="['menu', {'active':$route.name==='introduce'}]" @click="menuClick('introduce')">行业介绍</span>
            <span :class="['menu', {'active':$route.name==='brand'}]" @click="menuClick('brand')">品牌介绍</span>
            <span :class="['menu', {'active':$route.name==='store-list'||$route.name==='store-detail'}]" @click="menuClick('store-list')">门店展示</span>
            <span :class="['menu', {'active':$route.name==='story'}]" @click="menuClick('story')">故事</span>
            <span :class="['menu', {'active':$route.name==='cooperation'}]" @click="menuClick('cooperation')">加盟合作</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hp-header',
        data() {
            return {};
        },
        created() {
        },
        methods: {
            menuClick(rName) {
                this.$router.push(`/${rName}`);
            }
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .hp-header{
        height: $header-height;
        background-color: #333;
        color: #fff;
        font-size: 16px;
    }
    .logo{
        height: 50px;
        margin: 5px 10px 5px 30px;
    }
    .menu {
        height: $header-height;
        line-height: $header-height;
        display: inline-block;
        box-sizing: border-box;
        vertical-align: middle;
        user-select: none;
        cursor: pointer;
        padding: 0px 15px;
    }
    .menu.active{
        color: $primary-color;
        border-bottom: solid 5px $primary-color;
    }
    .menu-container{
        margin-right: 60px;
    }
</style>
