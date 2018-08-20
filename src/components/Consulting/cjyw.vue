<template>
    <div class="jz">
        <jz-swipe :auto="0">
            <jz-swipe-item class="slide1">1</jz-swipe-item>
            <jz-swipe-item class="slide2">2</jz-swipe-item>
            <jz-swipe-item class="slide3">3</jz-swipe-item>
        </jz-swipe>

    </div>
</template>
<script>
export default {
    name: 'cjyw',
    mounted() {
    }
}
</script>
<style scoped>

.jz-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
    position: relative;
    overflow: hidden;
}
.jz-swipe-item {
    line-height: 200px;
}
.jz-swipe-item.slide1 {
    background-color: #0089dc;
    color: #fff;
}
.jz-swipe-item.slide2 {
    background-color: #ffd705;
    color: #000;
}

.jz-swipe-item.slide3 {
    background-color: #ff2d4b;
    color: #fff;
}
</style>
