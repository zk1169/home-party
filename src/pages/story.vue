<template>
    <div class="story">
        <div class="section1 relative">
            <hp-image src="./static/images/j-s1.jpg" alt=""></hp-image>
            <div class="s1-text-wrap image-text-wrap" layout="column" layout-align="center center">
                <div class="title fs-48">正在建设中。。。 </div><br>
            </div>
        </div>
    </div>
</template>

<script>
    import HpImage from '../components/hp-image';
    
    export default {
        name: 'story',
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
    .pc-app{
        .section{margin-top:60px;}
    }
    .mobile-app{
        .section{margin-top:30px;}
    }
</style>
