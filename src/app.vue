<template>
    <div id="app">
        <hp-header class="hp-header"></hp-header>
        <div class="app-body">
            <router-view></router-view>
        </div>
        <hp-footer></hp-footer>
        <!-- <transition name="fade">
            <div class="message-wrap" v-show="alertShow">
                <el-alert :title="alertMsg" :type="alertType" center></el-alert>
            </div>
        </transition> -->
        <div class="message-wrap" v-show="alertShow">
            <el-alert :title="alertMsg" :type="alertType" center></el-alert>
        </div>
    </div>
</template>

<script>
    import 'element-ui/lib/theme-default/alert.css';
    import Alert from 'element-ui/lib/alert';
    import HpHeader from './components/header';
    import HpFooter from './components/footer';
    export default {
        name: 'app',
        components: {
            HpHeader, HpFooter,
            'el-alert': Alert
        },
        data() {
            return {
                alertShow: false,
                alertType: null,
                alertMsg: null
            };
        },
        created() {
            this.$eventHub.$on('ALERT', (options) => {
                this.alertShow = true;
                this.alertType = options.type || 'info';//warning,success,error
                this.alertMsg = options.message;
                this.delayHideAlert();
            });
        },
        methods: {
            delayHideAlert() {
                setTimeout(() => {
                    this.alertShow = false;
                }, 3000);
            }
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
    .hp-header{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        z-index: 999;
    }
    .app-body{
        margin-top: 60px;
    }
    .message-wrap{
        position: fixed;
        left: 0;
        top: 60px;
        width: 100vh;
        z-index: 999;
        display: inline-block;
        width: 50%;
        margin-left: 25%;
    }
    .mobile-app{
        .message-wrap{
            width: 60%;
            margin-left: 20%;
        }
    }
    // .fade-enter-active, .fade-leave-active {
    //     transition: all .5s;
    // }
    // .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    //     margin-left: -40%;
    // }
</style>
