<template>
  <transition name="actionsheet-float">
    <div v-show="currentValue" class="jz-actionsheet">
      <ul class="jz-actionsheet-list" :style="{ 'margin-bottom': cancelText ? '8px' : '0' }">
        <li class="jz-actionsheet-listitem jz-actionsheet-title" v-if="title!=''">{{title}}</li>
        <li v-for="( item, index ) in actions" class="jz-actionsheet-listitem" @click.stop="itemClick(item, index)">{{
          item.name }}
        </li>
      </ul>
      <a class="jz-actionsheet-button" @click.stop="currentValue = false" v-if="cancelText">{{ cancelText }}</a>
    </div>
  </transition>
</template>

<style lang="less">
  .jz-actionsheet {
    position: fixed;
    width: 100%;
    padding: 10px 14px;
    text-align: center;
    bottom: 0;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    backface-visibility: hidden;
    transition: transform .3s ease-out;
    transition: transform .3s ease-out, -webkit-transform .3s ease-out;
  }

  .jz-actionsheet-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .jz-actionsheet-listitem {
    border-bottom: solid 1px #EAEAEA;
    &:first-child {
      border-top-left-radius: 6px;
      border-top-right-radius: 6px;
    }
    &:last-child {
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  .jz-actionsheet-button {
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
  }

  .jz-actionsheet-listitem, .jz-actionsheet-button {
    display: block;
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size: 16px;
    color: #407DF6;
    background-color: #fff;
    &:active {
      background-color: #f0f0f0;
    }
  }

  .jz-actionsheet-listitem.jz-actionsheet-title {
    font-size: 12px;
    color: #9B9B9B;
  }

  .actionsheet-float-enter,
  .actionsheet-float-leave-active {
    transform: translate3d(-50%, 100%, 0);
  }
</style>

<script type="text/babel">
  import Popup from '@/assets/utils/popup';
  import '@/assets/css/popup.css';

  export default {
    name: 'jz-actionsheet',

    mixins: [Popup],

    props: {
      modal: {
        default: true
      },

      modalFade: {
        default: false
      },

      lockScroll: {
        default: false
      },

      closeOnClickModal: {
        default: true
      },
      title: '',
      cancelText: {
        type: String,
        default: '取消'
      },

      actions: {
        type: Array,
        default: () => []
      }
    },

    data() {
      return {
        currentValue: false
      };
    },

    watch: {
      currentValue(val) {
        this.$emit('input', val);
      },

      value(val) {
        this.currentValue = val;
      }
    },

    methods: {
      itemClick(item, index) {
        if (item.method && typeof item.method === 'function') {
          item.method(item, index);
        }
        this.currentValue = false;
      }
    },

    mounted() {
      if (this.value) {
        this.rendered = true;
        this.currentValue = true;
        this.open();
      }
    }
  };
</script>
