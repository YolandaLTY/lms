<template>
    <div>
        <router-view/>
        <jz-tabbar fixed v-model="selected">
          <jz-tab-item id="Home" isRouter>
            <img slot="icon-normal" src="./assets/img/home.png">
            <img slot="icon-active" src="./assets/img/home1.png">
            首页
        </jz-tab-item>
        <jz-tab-item id="consulting" isRouter>
            <img slot="icon-normal" src="./assets/img/zx.png">
            <img slot="icon-active" src="./assets/img/zx1.png">
            资讯
        </jz-tab-item>
        <jz-tab-item id="Quotes" isRouter>
            <img slot="icon-normal" src="./assets/img/hq.png">
            <img slot="icon-active" src="./assets/img/hq1.png">
            行情
        </jz-tab-item>
        <jz-tab-item id="transaction" isRouter>
            <img slot="icon-normal" src="./assets/img/jy.png">
            <img slot="icon-active" src="./assets/img/jy1.png">
            交易
        </jz-tab-item>
        <jz-tab-item id="Assets" isRouter>
            <img slot="icon-normal" src="./assets/img/zc.png">
            <img slot="icon-active" src="./assets/img/zc1.png">
            资产
        </jz-tab-item>
        </jz-tabbar>
    </div>
</template>
<script>
export default {
    name: 'Main',
    data() {
        return{
            selected: 'home',
            top: ''
        }
    }
}
</script>
<style>

</style>


