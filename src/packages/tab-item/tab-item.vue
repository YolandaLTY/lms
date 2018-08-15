<template>
    <a class="jz-tab-item" @click="goToRouter"
       :class="{'is-selected': isActive}">
        <div class="jz-tab-item-icon" v-show="!isActive">
            <slot name="icon-normal"></slot>
        </div>
        <div class="jz-tab-item-icon" v-show="isActive">
        
            <slot name="icon-active"></slot>
        </div>
        <div class="jz-tab-item-label">
            <span>
                <slot></slot>
            </span>
        </div>
    </a>
</template>
<script>
  /**
   * jz-tab-item
   * @param {*} id - 选中后的返回值，任意类型
   * @param {slot} [icon] - icon 图标
   * @param {slot} - 文字
   */
export default {
    name: 'jz-tab-item',
    props: {
        id: {
            type: String
        },
        isRouter: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        isActive() {
            if (this.$parent.value === this.id) {
                return true
            }
        }
    },
    methods: {
        goToRouter() {
            this.$parent.$emit('input', this.id)
            if (this.isRouter) {
                this.$router.push(this.id)
            }
        }
    }
    
}
</script>
<style>
.jz-tab-item {
    display: block;
    padding: 7px 0;
    flex: 1;
    text-decoration: none;
    color: #A8AFB9;
}
.jz-tab-item-icon:empty {
    display: none;
}
.jz-tabbar > .jz-tab-item.is-selected {
    color: #407DF6;
}
.jz-tab-item-icon {
    width: 24px;
    height: 24px;
    margin: 0 auto 5px;
}
.jz-tab-item-icon > * {
    display: block;
    width: 100%;
    height: 100%;
}
.jz-tab-item-label {
    color: inherit;
    font-size: 12px;
    line-height: 1;
}

</style>

