<template>
  <div id="app">
    Welcome to use LM-UI
    <lm-button type="primary">Primary</lm-button>
    <p><br></p>
    <lm-switch></lm-switch>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LmButton from '@/button/button.vue';
import LmSwitch from '@/switch/switch.vue';

@Component({
  components: {
    LmButton, LmSwitch
  }
})
export default class App extends Vue {
  handle_click (event: object) {
    console.log(event);
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

.switch {
  vertical-align: middle;
  margin-right: 5px;
}
</style>
