<template>
  <div :class="range_wrap">
    <div class="range__box" :style="'width:' + range_percent + '%'"></div>
    <div
      ref="range_button"
      class="range__button"
      :style="'left: ' + range_percent + '%'"
      :disabled="disabled"
      @click.stop.prevent
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Mixins, Emit } from 'vue-property-decorator'
import TouchMixin from '@common/helpers/touch'

@Component
export default class Range extends Mixins(TouchMixin) {
  @Prop({ default: 0, type: Number }) min!: number
  @Prop({ default: 100, type: Number }) max!: number
  @Prop({ default: 1, type: Number }) step!: number
  @Prop({ default: false, type: Boolean }) disabled!: boolean
  @Prop(Number) value!: number

  inhernal_value: number = this.value
  range_percent: number = 0
  startValue!: number

  mounted() {
    const button = this.$refs.range_button
    let curr_position!: number
    ;(button as HTMLElement).addEventListener('touchstart', this.touch_start)
    ;(button as HTMLElement).addEventListener('touchmove', this.touch_move)
    ;(button as HTMLElement).addEventListener('touchend', this.update)
  }

  @Watch('inhernal_value', { immediate: true })
  inhernal_value_changed(val: number, old: number) {
    this.range_percent = Math.floor(((val - this.min) / (this.max - this.min)) * 100)
  }

  get range_wrap(): Array<string | Object> {
    return [
      'range__wrap',
      {
        'range__wrap--disabled': this.disabled,
      },
    ]
  }

  touch_start(event: any) {
    if (this.disabled) return

    this.touchStart(event)
    this.startValue = this.value
  }

  touch_move(event: any) {
    event.preventDefault()
    event.stopPropagation()

    if (this.disabled) return

    this.touchMove(event)
    const rect = this.$el.getBoundingClientRect()
    const diff = (this.deltaX / rect.width) * 100
    this.update_value(this.startValue + diff)
  }

  @Emit('input')
  update() {
    return this.inhernal_value
  }

  update_value(val: number) {
    this.inhernal_value = Math.round(Math.min(this.max, Math.max(this.min, val)) / this.step) * this.step
  }
}
</script>

<style lang="scss">
@import 'common/style/variable.scss', 'common/style/init.scss';

.range {
  &__wrap {
    position: relative;
    height: 2px;
    padding: 15px 0;
    border-radius: 12px;
    margin: 0 15px;
    background: $gray content-box;

    &--disabled {
      opacity: .3;
    }
  }

  &__box {
    position: absolute;
    left: 0;
    display: inline-block;
    height: 2px;
    background: $blue;
  }

  &__button {
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: $white;
    box-shadow: 0 1px 4px 2px $gray;
    transform: translate3d(-50%, -50%, 0);

    &::before {
      position: absolute;
      top: -25%;
      left: -25%;
      width: 150%;
      height: 150%;
      content: '';
    }
  }
}
</style>
