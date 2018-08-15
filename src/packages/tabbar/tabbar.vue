<template>
    <div class="jz-tabbar" :class="{'is-fixed': fixed}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'jz-tabbar',
    props: {
        fixed: Boolean
    },
    computed: {
        value() {
            return this.$route.matched[1].name
        }
    }
}
</script>
<style>
.jz-tabbar {
    background-color: #fff;
    border-top: 1px solid #E8E8E8;
    display: flex;
    text-align: center;
}
.jz-tabbar.is-fixed {
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
}
</style>


