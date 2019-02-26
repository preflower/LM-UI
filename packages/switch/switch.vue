<template>
  <label class="lm-switch">
    <input type="checkbox" class="lm-switch-input" :disabled="disabled" v-model="selected" @change="$emit('change', !selected)">
    <span class="lm-switch-core"></span>
  </label> 
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';

@Component
export default class LmSwitch extends Vue {

  name: string = 'lm-switch'

  @Prop({ default: false }) value!: boolean
  @Prop({ default: false }) disabled!: boolean

  get selected (): boolean {
    return this.value
  }

  set selected (val) {
    this.$emit('input', val)
  }

}
</script>

<style lang="scss" scoped>
@import 'common/style/variable.scss';

.lm-switch {
  display: inline-block;
  overflow: hidden;
  line-height: 0;

  * {
    pointer-events: none;
  }
  &-core {
    position: relative;
    display: inline-block;
    width: 52px;
    height: 32px;
    border-radius: 16px;
    box-sizing: border-box;
    border: 1px solid;
    border-color: $gray-light;
    background: $gray-light;
    &::before, &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      transition: transform .3s;
      background: $white;
    }
    &::before {
      width: 50px;
      height: 30px;
      border-radius: 15px;
    }
    &::after {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
    }
  }
  &-input {
    display: none;
    &:checked {
      + .lm-switch-core {
        border-color: $blue;
        background-color: $blue;
        &::before {
          background: $white;
          transform: scale(0);
        }
        &::after {
          transform: translateX(20px);
        }
      }
    }
    &:disabled {
      + .lm-switch-core {
        &::before {
          background: $gray-light;
        }
      }
    }
    &:checked:disabled {
      + .lm-switch-core {
        background: $blue-light;
        border-color: $blue-light;
        opacity: .3;
      }
    }
  }
}
</style>
