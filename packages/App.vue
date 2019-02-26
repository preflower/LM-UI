<template>
  <div id="app">
    Welcome to use LM-UI
    <p><br></p>
    <lm-button type="primary">Primary</lm-button>
    <lm-switch></lm-switch>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LmButton from '@/button/button.vue';
import LmSwitch from '@/switch/switch.vue';

@Component({
  components: {
    LmButton,
    LmSwitch
  }
})
export default class App extends Vue {}
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
