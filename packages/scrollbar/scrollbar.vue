<template>
  <div ref="scrollbar" class="scrollbar">
    <div ref="wrap" class="scrollbar__wrap scrollbar__wrap--hidden-default" @scroll="scroll">
      <slot></slot>
    </div>
    <div class="scrollbar__bar is-horizontal">
      <div ref="horizontal_thumb" class="scrollbar__thumb" :class="{ 'scrollbar__thumb--hidden': !is_hover }"></div>
    </div>
    <div class="scrollbar__bar is-vertical">
      <div
        ref="vertical_thumb"
        class="scrollbar__thumb"
        :class="[scrollbarStyle, { 'scrollbar__thumb--hidden': !is_hover }]"
      ></div>
    </div>
  </div>
</template>

<script>
import { is_mobile } from 'common/helpers/check'
import { debounce } from 'common/helpers/util'

export default {
  name: 'l-scrollbar',
  props: {
    'scrollbar-style': String,
  },
  data() {
    return {
      is_hover: false,
      is_mobile: false,
    }
  },
  mounted() {
    if (!is_mobile()) {
      this.is_mobile = false
      ;['mouseenter', 'mouseleave'].forEach(value => {
        this.$refs['scrollbar'].addEventListener(value, this[value])
      })
    } else {
      this.is_mobile = true
    }
    const vertical_thumb_height = Math.floor((this.$refs['wrap'].clientHeight / this.$refs['wrap'].scrollHeight) * 100),
      horizontal_thumb_width = Math.floor((this.$refs['wrap'].clientWidth / this.$refs['wrap'].scrollWidth) * 100)
    if (vertical_thumb_height !== 100) this.$refs['vertical_thumb'].style.height = `${vertical_thumb_height}%`
    if (horizontal_thumb_width !== 100) this.$refs['horizontal_thumb'].style.width = `${horizontal_thumb_width}%`
  },
  beforeDestroy() {
    ;['mouseenter', 'mouseleave'].forEach(value => {
      this.$refs['scrollbar'].removeEventListener(value, this[value])
    })
  },
  methods: {
    mouseenter() {
      this.is_hover || (this.is_hover = true)
    },
    mouseleave() {
      this.is_hover && (this.is_hover = false)
    },
    scroll(e) {
      if (this.is_mobile) {
        this.is_hover || (this.is_hover = true)
        this.scroll_end()
      }
      const element = e.target
      let ele_offsetY_percent = element.scrollTop / (element.scrollHeight - element.clientHeight),
        ele_offsetX_percent = element.scrollLeft / (element.scrollWidth - element.clientWidth),
        offset_Y = (element.clientHeight - this.$refs['vertical_thumb'].clientHeight - 2) * ele_offsetY_percent,
        offset_X = (element.clientWidth - this.$refs['horizontal_thumb'].clientWidth - 2) * ele_offsetX_percent
      this.$refs['vertical_thumb'].style.transform = `translateY(${offset_Y}px)`
      this.$refs['horizontal_thumb'].style.transform = `translateX(${offset_X}px)`
    },
    scroll_end: debounce(300, function() {
      this.is_hover = false
    }),
  },
}
</script>

<style lang="scss">
.scrollbar {
  position: relative;
  overflow: hidden;

  &__wrap {
    height: 100%;
    overflow: scroll;

    &--hidden-default::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  &__bar {
    position: absolute;

    &.is-horizontal {
      right: 0;
      bottom: 0;
      left: 0;
      height: 6px;

      .scrollbar__thumb {
        height: 100%;
      }
    }

    &.is-vertical {
      top: 0;
      right: 2px;
      bottom: 0;
      width: 6px;

      .scrollbar__thumb {
        width: 100%;
      }
    }
  }

  &__thumb {
    position: relative;
    display: block;
    border-radius: 6px;
    background-color: #cacaca;
    transition: opacity .4s;

    &--hidden {
      opacity: 0;
    }
  }
}
</style>
