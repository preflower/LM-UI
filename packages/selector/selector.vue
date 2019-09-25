<template>
  <div ref="selector" class="selector" @touchstart="touchStart" @touchmove="touchMove" @touchend="touch_end">
    <ul class="list" :style="styles">
      <li class="list__item"></li>
      <li class="list__item"></li>
      <li class="list__item" v-for="(item, index) in list" :key="index">
        {{ defaults.key ? item[defaults.key] : item }}
      </li>
    </ul>
    <i class="selector__mask selector__mask-top" @click="change_item_before"></i>
    <i class="selector__mask selector__mask-bottom" @click="change_item_after"></i>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Watch, Mixins, Emit } from 'vue-property-decorator'
import TouchMixin from '@common/helpers/touch'

interface Config {
  key?: string
  value?: string
}

@Component
export default class Selector extends Mixins(TouchMixin) {
  @Model('change', { default: 0 }) readonly selected!: any
  @Prop({ default: 42, type: Number }) itemHeight!: number
  @Prop({ default: () => [], type: Array }) list!: Array<any>
  @Prop({ default: () => {}, type: Object }) options!: Config
  current_Y: number = 0
  current_item: number = 0
  defaults: Config = Object.assign(
    {
      key: undefined, // Choose show label, Default: undefined
      value: undefined, // Choose return value, Default: undefined
    },
    this.options,
  )
  get styles(): String {
    return `transform: translateY(${this.position_Y}px)`
  }

  get position_Y(): number {
    return this.current_Y + this.deltaY
  }

  mounted() {
    const return_index = this.list.findIndex(item => {
      if (this.defaults.value) return item[this.defaults.value] === this.selected
      return item === this.selected
    })
    if (~return_index) this.current_item = return_index
    this.current_Y = 0 - this.current_item * this.itemHeight
  }

  touch_end(event: any) {
    this.current_Y += this.deltaY
    this.resetTouchStatus()
    this.reposition()
  }

  change_item_before(event: any) {
    let offset_number = 2 - Math.floor(event.offsetY / this.itemHeight)
    if (this.current_item > offset_number - 1) {
      this.current_Y += offset_number * this.itemHeight
      this.reposition()
    }
  }

  change_item_after(event: any) {
    let offset_number = Math.ceil(event.offsetY / this.itemHeight)
    if (this.current_item + offset_number < this.list.length) {
      this.current_Y -= offset_number * this.itemHeight
      this.reposition()
    }
  }

  get_current_item(): number {
    let current_item = Math.floor(Math.round(this.position_Y) / this.itemHeight)
    if (current_item > 0) current_item = 0
    else current_item = Math.abs(current_item)
    if (current_item > this.list.length - 1) current_item = this.list.length - 1
    return current_item
  }

  @Emit('change')
  reposition(): any {
    this.current_item = this.get_current_item()
    this.current_Y = 0 - this.current_item * this.itemHeight
    return this.defaults.value ? this.list[this.current_item][this.defaults.value] : this.list[this.current_item]
  }
}
</script>

<style lang="scss">
.list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  transition: transform .4s ease-out;

  &__item {
    height: 42px;
    line-height: 42px;
  }
}

.selector {
  position: relative;
  height: 210px;
  overflow: hidden;

  &__mask {
    position: absolute;
    left: 0;
    width: 100%;
    height: 84px;

    &::before {
      position: absolute;
      right: 0;
      left: 0;
      content: '';
    }

    &-top {
      top: -1px;
      background: linear-gradient(0deg, rgba(255, 255, 255, .5), rgba(255, 255, 255, .9));

      &::before {
        bottom: 0;
        border-bottom: 1px solid #ebebeb;
      }
    }

    &-bottom {
      bottom: -1px;
      background: linear-gradient(180deg, rgba(255, 255, 255, .5), rgba(255, 255, 255, .9));

      &::before {
        top: 0;
        border-top: 1px solid #ebebeb;
      }
    }
  }
}
</style>
