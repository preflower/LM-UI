<template>
  <transition name="fade">
    <div v-show="value">
      <div class="mask" @touchmove.prevent v-if="mask"></div>
      <div class="toast-container" :class="[position]">
        <div class="toast-container__mask"></div>
        <div class="spinner-container" v-if="type === 'loading'">
          <lm-loading></lm-loading>
          <p class="spinner-container__text" v-if="message">{{ message }}</p>
        </div>
        <p class="text-container" v-else>{{ message }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
import LmLoading from '@/loading/loading'

export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: false,
    },
    message: String,
    type: {
      type: String,
      default: 'text',
    },
    position: {
      type: String,
      default: 'middle',
    },
  },
  components: {
    LmLoading,
  },
}
</script>

<style lang="scss" scoped>
@import 'common/style/init.scss';
@import 'common/style/variable.scss';

.mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: $dark-light;
  opacity: 0.3;
  z-index: 98;
}

.toast-container {
  position: fixed;
  left: 50%;
  color: $white;
  font-weight: 100;
  font-size: 16px;
  transform: translateX(-50%);
  z-index: 99;

  &__mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 4px;
    background-color: $dark;
    opacity: 0.8;
    z-index: -1;
  }

  .spinner-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    &__spinner {
      width: 24px;
      animation: loading 1.5s linear infinite;
    }

    &__text {
      margin-top: 8px;
      font-weight: 200;
      font-size: 14px;
      text-align: center;
    }
  }

  .text-container {
    padding: 14px 16px;
    text-align: center;
  }

  &.bottom {
    bottom: 50px;
  }

  &.middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &.top {
    top: 50px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
