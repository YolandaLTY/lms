<template>
  <div class="jz-navbar" :class="{ 'is-fixed': fixed ,'is-fullBg':full}">
    <slot></slot>
  </div>
</template>

<script>
  /**
   * jz-navbar
   * @module components/navbar
   * @desc 顶部 tab，依赖 tab-item
   *
   * @param {boolean} [fixed=false] - 固定底部
   * @param {*} selected - 返回 item component 传入的 value
   *
   * @example
   * <jz-navbar :selected.sync="selected">
   *   <mt-tab-item value="订单">
   *     <span slot="label">订单</span>
   *   </mt-tab-item>
   * </jz-navbar>
   *
   * <jz-navbar :selected.sync="selected" fixed>
   *   <jz-tab-item :value="['传入数组', '也是可以的']">
   *     <span slot="label">订单</span>
   *   </jz-tab-item>
   * </jz-navbar>
   *
   */
  export default {
    name: 'jz-navbar',

    props: {
      fixed: Boolean,
      full: Boolean,
      value: {}
    }
  };
</script>

<style>
  .jz-navbar {
    background-color: #ffffff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
  }

  .jz-navbar.is-fullBg {
    background-color: #407DF6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
  }

  .jz-navbar .jz-tab-item {
    padding: 12px 0;
    font-size: 15px;
    color: #9B9B9B;
  }

  .jz-navbar.is-fullBg .jz-tab-item {
    padding: 12px 0;
    font-size: 15px;
    color: #CFDEFD;
  }

  .jz-navbar .jz-tab-item span{
    padding: 10px 14px;
  }
  .jz-navbar .jz-tab-item.is-selected span{
    border-bottom: 1px solid #407DF6;
    color: #407DF6;
  }

  .jz-navbar.is-fullBg .jz-tab-item span{
    padding: 6px 8px;
  }

  .jz-navbar.is-fullBg .jz-tab-item.is-selected span{
    border-bottom: 2px solid #ffffff;
    color: #ffffff;
    margin-bottom: -3px;
  }

</style>
