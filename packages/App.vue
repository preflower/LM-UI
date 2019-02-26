<template>
  <div id="app">
    Welcome to use LM-UI
    <p><br></p>
    <lm-button @click="handle_click" inline>Button</lm-button>
    <lm-button @click="handle_click" inline outline>Button</lm-button>
    <lm-button @click="handle_click" type="warn" inline outline>Button</lm-button>
    <p><br></p>
    <lm-button @click="handle_click">Button</lm-button>
    <lm-button @click="handle_click" type="danger">Button</lm-button>
    <lm-button @click="handle_click" type="warn">Button</lm-button>
    <lm-button @click="handle_click" type="dark">Button</lm-button>
    <lm-button @click="handle_click" outline>Button</lm-button>
    <lm-button @click="handle_click" type="danger" outline>Button</lm-button>
    <lm-button @click="handle_click" type="warn" outline>Button</lm-button>
    <lm-button @click="handle_click" type="dark" outline>Button</lm-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LmButton from '@/button/main.vue';

@Component({
  components: {
    LmButton
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
</style>
