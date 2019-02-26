<template>
<button
  :type="type"
  :class="btn_classes"
  :disabled="disabled"
  @click="handle_click">
  <i class="iconfont" :class="icon" v-if="icon"></i>
  <slot></slot>
</button>
</template>

<script lang='ts'>
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ default: false, type: Boolean }) inline!: Boolean;
  @Prop({ default: false, type: Boolean }) disabled!: Boolean;
  @Prop({ default: false, type: Boolean }) outline!: Boolean;
  @Prop({ default: 'primary' }) type!: String;
  @Prop({ default: 'button' }) nativeType!: String;
  @Prop(String) icon?: String;

  get btn_classes() {
    return [
      `lm-btn`,
      `lm-btn--${this.type}`,
      {
        'lm-btn-block': !this.inline,
        'lm-btn-disabled': this.disabled,
        'lm-btn-outline': this.outline,
      }
    ]
  };

  @Emit('click')
  handle_click (event: object) {
    return event;
  }
}
</script>

<style lang="scss" scoped>
@import '~@/common/style/init.scss';
@import '~@/common/style/variable.scss';
@mixin btn-color($color, $second_color: #ffffff) {
  color: $second_color;
  background: $color;
  &.lm-btn-outline {
    color: $color;
    background: $second_color;
    border: 1px solid $color;
  }
}

.lm-btn {
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  &-disabled {
    color: $gray-light;
    opacity: .6;
  }
  &-block {
    display: block;
    width: 100%;
    padding: 12px 16px;
  }
  + .lm-btn {
    margin-top: 10px;
  }
}
.lm-btn--primary {
  @include btn-color($blue);
}
.lm-btn--danger {
  @include btn-color($red);
}
.lm-btn--warn {
  @include btn-color($orange);
}
.lm-btn--dark {
  @include btn-color($dark);
}
</style>