<template>
    <div id="app">
        <hp-header class="hp-header"></hp-header>
        <div class="app-body">
            <router-view></router-view>
        </div>
        <hp-footer></hp-footer>
    </div>
</template>

<script>
    import HpHeader from './components/header';
    import HpFooter from './components/footer';
    export default {
        name: 'app',
        components: {
            HpHeader, HpFooter
        },
        data() {
            return {};
        },
        created() {
        },
        methods: {

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
</style>
