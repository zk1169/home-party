<template>
    <div class="hp-header">
        <img class="logo" src="../assets/images/logo.png" alt="">
        <span class="menu fs-14" style="vertical-align: top;padding:0;">让聚会变得更简单</span>
        <div v-if="!isMobile" class="menu-container inline-block pull-right">
            <span :class="['menu', {'active':$route.name==='home'}]" @click="menuClick('home')">首页</span>
            <span :class="['menu', {'active':$route.name==='introduce'}]" @click="menuClick('introduce')">行业介绍</span>
            <span :class="['menu', {'active':$route.name==='brand'}]" @click="menuClick('brand')">品牌介绍</span>
            <span :class="['menu', {'active':$route.name==='store-list'||$route.name==='store-detail'}]" @click="menuClick('store-list')">门店展示</span>
            <span :class="['menu', {'active':$route.name==='story'||$route.name==='story-detail'}]" @click="menuClick('story')">故事</span>
            <span :class="['menu', {'active':$route.name==='cooperation'}]" @click="menuClick('cooperation')">加盟合作</span>
        </div>
        <div v-else class="mobile-menu-container inline-block pull-right" @click="mobileMenuClick">
            <svg class="icon bars" aria-hidden="true">
                <use xlink:href="#icon-bars"></use>
            </svg>
        </div>
        <transition name="fade">
            <div class="mobile-menu" v-show="showMobileMenu">
                <div class="text-center" @click="menuClick('home')">
                    <span :class="['menu', {'active':$route.name==='home'}]">首页</span>
                </div>
                <div class="text-center" @click="menuClick('introduce')">
                    <span :class="['menu', {'active':$route.name==='introduce'}]">行业介绍</span>
                </div>
                <div class="text-center" @click="menuClick('brand')">
                    <span :class="['menu', {'active':$route.name==='brand'}]">品牌介绍</span>
                </div>
                <div class="text-center" @click="menuClick('store-list')">
                    <span :class="['menu', {'active':$route.name==='store-list'||$route.name==='store-detail'}]">门店展示</span>
                </div>
                <div class="text-center" @click="menuClick('story')">
                    <span :class="['menu', {'active':$route.name==='story'||$route.name==='story-detail'}]">故事</span>
                </div>
                <div class="text-center" @click="menuClick('cooperation')">
                    <span :class="['menu', {'active':$route.name==='cooperation'}]">加盟合作</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'hp-header',
        data() {
            return {
                showMobileMenu: false,
            };
        },
        created() {
        },
        methods: {
            menuClick(rName) {
                this.showMobileMenu = false;
                this.$router.push(`/${rName}`);
            },
            mobileMenuClick() {
                this.showMobileMenu = !this.showMobileMenu;
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
        height: 40px;
        margin: 10px 10px 10px 30px;
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
    .mobile-menu-container {
        margin-right: 30px;
        height: 60px;
        line-height: 60px;
        .bars{
            color:#fff;
            font-size: 2.8rem;
        }
    }
    .mobile-menu{
        position: fixed;
        left:0;
        top:$header-height;
        width: 100vw;
        height: calc(100vh - 60px);
        background-color: #333;
        text-align: center;
        div{
            margin-top: 20px;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: top .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        top: -100vh;
    }
</style>
