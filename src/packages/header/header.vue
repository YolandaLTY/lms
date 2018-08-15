<template>
  <header
    class="mint-header"
    :class="{ 'is-fixed': fixed }">
    <div class="mint-header-button is-left">
      <slot name="left"></slot>
    </div>
    <h1 class="mint-header-title" v-text="title"></h1>
    <div class="mint-header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
/**
 * mt-header
 * @module components/header
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <mt-header title="我是标题" fixed>
 *   <mt-button slot="left" icon="back" @click="handleBack">返回</mt-button>
 *   <mt-button slot="right" icon="more"></mt-button>
 * </mt-header>
 */
export default {
  name: 'mt-header',
  props: {
    fixed: Boolean,
    title: String
  }
};
</script>

<style>
.mint-header {
    align-items: center;
    background-color: #fff;
    box-sizing: border-box;
    color: red;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
}
.mint-header-button {
    background-color: transparent;
    border: 0;
    box-shadow: none;
    color: inherit;
    display: inline-block;
    padding: 0;
    font-size: inherit;
    flex: .5;
}
.mint-header-button::after {
    content: none;
}
.mint-header.is-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
}
.mint-header-button .is-left {
    text-align: left;
}
.mint-header-button .is-right {
    text-align: right;
}
</style>
