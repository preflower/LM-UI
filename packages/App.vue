<template>
  <div id="app">
    Welcome to use LM-UI
    <p><br></p>
    <lm-button @click="handle_click">Toast</lm-button>
    <lm-button @click="create_new_toast">Loading</lm-button>
    <p><br></p>
    <lm-switch></lm-switch>
    <p><br></p>
    <lm-range v-model="range" :min="-20" :max='100' :step="10"></lm-range>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import LmButton from '@/button/button.vue';
import LmSwitch from '@/switch/switch.vue';
import LmLoading from '@/loading/loading.vue';
import LmRange from '@/range/range.vue';

@Component({
  components: {
    LmButton, 
    LmSwitch, 
    LmLoading, 
    LmRange
  }
})
export default class App extends Vue {
  range: Number = 0;

  @Watch('range') 
  range_change(val: number) {
    this.$toast(`当前值： ${val}`);
  }
  
  handle_click (event: Event) {
    console.log(this.range);
    console.log(this.$toast({ message: 'ceshi', duration: 0 }));
  }

  create_new_toast (event: Event) {
    this.$toast.loading({ duration: 0, mask: true });
  }
}
</script>

<style>
#app {
  font-family: 14px 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
