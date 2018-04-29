<template>
    <div class="story-detail">
        <div class="section1">
            <img src="../../static/images/j-s2.jpg" alt="" class="width100"/>
        </div>
    </div>
</template>

<script>
    
    export default {
        name: 'story-detail',
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
    .pc-app{
        .section{margin-top:60px;}
    }
    .mobile-app{
        .section{margin-top:30px;}
    }
</style>
