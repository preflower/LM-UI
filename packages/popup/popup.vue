<template>
  <transition name="fade">
    <div class="popup" v-show="visible">
      <div class="popup__mask" v-show="mask" @click="mask_click" @touchmove.prevent></div>
      <div class="popup-container" :class="classes">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model, Watch, Emit } from 'vue-property-decorator'

@Component
export default class Popup extends Vue {
  @Prop({ default: 'middle', type: String }) position!: string
  @Prop({ default: true, type: Boolean }) mask!: boolean
  @Prop({ default: true, type: Boolean }) closeOnClickMask!: boolean
  @Prop({ default: false, type: Boolean }) full!: boolean
  @Prop({ default: false, type: Boolean }) visible!: boolean

  get classes(): Array<any> {
    return [
      `popup-container-${this.position}`,
      {
        'popup-container-full': this.full,
      },
    ]
  }

  @Emit('update:visible')
  show() {
    return true
  }

  @Emit('update:visible')
  hide() {
    return false
  }

  @Emit('mask-click')
  mask_click() {
    if (this.closeOnClickMask) {
      this.hide()
      return false
    }
  }
}
</script>

<style lang="scss">
@import 'common/style/variable.scss';

.popup {
  &-container {
    position: fixed;
    z-index: 99; // todo: 层级逐渐提升，考虑多组件问题
    &-top {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    &-middle {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &-bottom {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    &-left {
      top: 0;
      bottom: 0;
      left: 0;
      transform: translateY(-50%);
    }

    &-right {
      top: 0;
      right: 0;
      bottom: 0;
      transform: translateY(-50%);
    }

    &-full {
      width: 100%;
    }
  }

  &__mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 98;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
