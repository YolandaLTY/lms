<template>
    <div>
        <jz-navbar full v-model="selected1">
            <jz-tab-item id="sskx" isRouter>
                实时快讯
            </jz-tab-item>
            <jz-tab-item id="zbzt" isRouter>
                重磅专题
            </jz-tab-item>
            <jz-tab-item id="cjyw" isRouter>
                财经要闻
            </jz-tab-item>
            <jz-tab-item id="cjrl" isRouter>
                财经日历
            </jz-tab-item>
            <jz-tab-item id="sjzx" isRouter>
                数据中心
            </jz-tab-item>
        </jz-navbar>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'consulting',
    data() {
      return {
        selected1: 'sskx'
      }
    },
}
</script>


