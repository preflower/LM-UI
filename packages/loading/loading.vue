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

<style lang="scss">
@import 'common/style/variable.scss';

.lm-loading {
  position: relative;
  display: inline-block;
  width: 38px;
  height: 38px;

  &__ring {
    position: absolute;
    border: 3px solid transparent;
    border-radius: 50%;
    animation: semipolar-spinner-animation 2s infinite;

    &:nth-child(1) {
      width: 32px;
      height: 32px;
      animation-delay: 600ms;
      z-index: 3;
    }

    &:nth-child(2) {
      top: 5px;
      left: 5px;
      width: 22px;
      height: 22px;
      animation-delay: 200ms;
      z-index: 2;
    }

    &:nth-child(3) {
      top: 10px;
      left: 10px;
      width: 12px;
      height: 12px;
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
