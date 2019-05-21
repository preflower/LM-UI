<template>
  <div class="lm-loading">
    <div class="lm-loading__ring lm-loading__blue"></div>
    <div class="lm-loading__ring lm-loading__orange"></div>
    <div class="lm-loading__ring lm-loading__red"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Loading extends Vue {}
</script>

<style lang="scss" scoped>
@import 'common/style/variable.scss';

.lm-loading {
  height: 38px;
  width: 38px;
  position: relative;
  display: inline-block;
  &__ring {
    border-radius: 50%;
    position: absolute;
    border: 3px solid transparent;
    animation: semipolar-spinner-animation 2s infinite;

    &:nth-child(1) {
      height: 32px;
      width: 32px;
      animation-delay: 600ms;
      z-index: 3;
    }
    &:nth-child(2) {
      height: 22px;
      width: 22px;
      left: 5px;
      top: 5px;
      animation-delay: 200ms;
      z-index: 2;
    }
    &:nth-child(3) {
      height: 12px;
      width: 12px;
      left: 10px;
      top: 10px;
      z-index: 1;
    }
  }

  &__blue {
    border-top-color: $blue-light;
    border-left-color: $blue-light;
  }
  &__red {
    border-top-color: $red-dark;
    border-left-color: $red-dark;
  }
  &__orange {
    border-top-color: $orange;
    border-left-color: $orange;
  }
}

@keyframes semipolar-spinner-animation {
  50% {
    transform: rotate(360deg);
  }
}
</style>
