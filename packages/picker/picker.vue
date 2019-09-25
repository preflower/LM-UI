<template>
  <lm-popup :visible="visible" @mask-click="visible_change" position="bottom" full>
    <transition name="picker">
      <div class="picker" v-show="visible">
        <div class="picker-header">
          <span class="picker-header__btn btn-cancel" @click="visible_change(false)">取消</span>
          {{ title }}
          <span class="picker-header__btn btn-ok" @click="click_ok">确定</span>
        </div>
        <div class="picker-content">
          <template v-if="lists.length">
            <lm-selector
              class="picker-content__list"
              v-for="(list, index) of lists"
              :list="list"
              :key="index"
              :options="options"
              v-model="lists_select[index]"
            >
            </lm-selector>
          </template>
        </div>
      </div>
    </transition>
  </lm-popup>
</template>

<script lang="ts">
import { Component, Vue, Prop, Model, Watch, Emit } from 'vue-property-decorator'
import LmPopup from '@/popup/popup.vue'
import LmSelector from '@/selector/selector.vue'

@Component({
  components: {
    LmPopup,
    LmSelector,
  },
})
export default class Popup extends Vue {
  @Model('change', { default: () => [], type: Array }) readonly value!: Array<any>
  @Prop({ default: false, type: Boolean }) visible!: boolean
  @Prop({ default: () => [], type: Array }) lists!: Array<Array<any>>
  @Prop({ default: 'Picker', type: String }) title!: string
  @Prop({ type: Object }) options!: Object
  lists_select: Array<any> = []

  @Emit('update:visible')
  visible_change(val: boolean) {
    return val
  }

  @Emit('change')
  click_ok() {
    this.visible_change(false)
    return this.lists_select
  }
}
</script>

<style lang="scss">
@import 'common/style/variable.scss';

.picker {
  height: 270px;
  background: $white;
}

.picker-header {
  height: 59px;
  padding: 0 60px;
  border-bottom: 1px solid $gray;
  line-height: 59px;

  &__btn {
    position: absolute;
    box-sizing: content-box;
    padding: 0 16px;
    font-size: 14px;
    cursor: pointer;

    &.btn-cancel {
      left: 0;
      color: $gray;
    }

    &.btn-ok {
      right: 0;
      color: $orange;
    }
  }
}

.picker-content {
  display: flex;
  width: 100%;

  &__list {
    flex-grow: 1;
  }
}

.picker-enter-active,
.picker-leave-active {
  transition: height .3s ease-in-out;
}

.picker-enter,
.picker-leave-to {
  height: 0;
}
</style>
