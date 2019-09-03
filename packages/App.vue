<template>
  <div id="app">
    Welcome to use LM-UI
    <p><br /></p>
    <lm-button @click="handle_click">Toast</lm-button>
    <lm-button @click="create_new_toast">Loading</lm-button>
    <lm-button @click="open_select">Select</lm-button>
    <p><br /></p>
    <lm-switch></lm-switch>
    <p><br /></p>
    <lm-range v-model="range" :min="-20" :max="100" :step="10"></lm-range>
    <lm-picker
      :visible.sync="show"
      v-model="selected"
      :lists="[[{ key: 'w', value: 1 }, { key: 'e', value: 2 }], [{ key: 'hh', value: 4 }, { key: 'vv', value: 5 }]]"
      :options="{ key: 'key', value: 'value' }"
    >
    </lm-picker>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

import LmButton from '@/button/button.vue'
import LmSwitch from '@/switch/switch.vue'
import LmLoading from '@/loading/loading.vue'
import LmRange from '@/range/range.vue'
import LmSelector from '@/selector/selector.vue'
import LmPicker from '@/picker/picker.vue'

@Component({
  components: {
    LmButton,
    LmSwitch,
    LmLoading,
    LmRange,
    LmSelector,
    LmPicker,
  },
})
export default class App extends Vue {
  range: number = 0
  t: number = 0
  f: number = 5
  show: boolean = false
  selected: Array<any> = []
  @Watch('selected')
  @Watch('range')
  range_change(val: any) {
    this.$toast(`当前值： ${val}`)
  }

  handle_click(event: Event) {
    this.$toast({ message: 'Test', duration: 0 })
  }

  create_new_toast(event: Event) {
    this.$toast.loading({ duration: 0, mask: true })
  }

  open_select() {
    this.show = true
  }
}
</script>

<style>
#app {
  margin-top: 60px;
  color: #2c3e50;
  font-family: 14px 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
