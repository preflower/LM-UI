<template>
  <div id="app">
    Welcome to use LM-UI
    <p><br></p>
    <lm-switch class="switch" v-model="v" @change="log" :disabled="disabled"></lm-switch>Hi Guys
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LmSwitch from './switch/switch.vue'

@Component({
  components: {
    LmSwitch
  }
})
export default class App extends Vue {
  disabled: boolean = false
  v: boolean = false

  log (val: boolean): void {
    console.log(val)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.switch {
  vertical-align: middle;
  margin-right: 5px;
}
</style>
