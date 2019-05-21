<template>
  <label class="lm-switch">
    <input
      type="checkbox"
      class="lm-switch-input"
      :disabled="disabled"
      v-model="selected"
      @change="$emit('change', !selected)"
    />
    <span class="lm-switch-core"></span>
  </label>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class Switch extends Vue {
  name: string = 'lm-switch'

  @Prop({ default: false }) value!: boolean
  @Prop({ default: false }) disabled!: boolean

  get selected(): boolean {
    return this.value
  }

  set selected(val) {
    this.$emit('input', val)
  }
}
</script>

<style lang="scss" scoped>
$switch-width: 50px;
$switch-height: 30px;

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
    width: $switch-width;
    height: $switch-height;
    border: 1px solid;
    border-color: $gray-light;
    border-radius: $switch-height;
    background: $gray-light;

    &::before,
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      border-radius: $switch-height;
      background: $white;
      transition: transform 0.3s;
      content: '';
    }

    &::before {
      width: 100%;
      height: 100%;
    }

    &::after {
      width: $switch-height;
      height: $switch-height;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
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
          transform: translateX($switch-width - $switch-height);
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
        border-color: $blue-light;
        background: $blue-light;
        opacity: 0.3;
      }
    }
  }
}
</style>
