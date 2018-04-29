<template>
    <div class="hp-image relative">
        <img :src="src" alt="">
        <div class="image-cover"></div>
    </div>
</template>

<script>
    export default {
        name: 'hp-image',
        props: ['src']
    }
</script>

<style lang="scss" scoped>
    @import '../styles/var';
    .image-cover{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(53,53,53, 0.6);
    }
    img{
        width: 100%;
        display: block;
    }
</style>
