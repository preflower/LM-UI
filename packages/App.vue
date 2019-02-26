<template>
  <div id="app">
    Welcome to use LM-UI
    <p><br></p>
    <h3>Color</h3>
    <lm-button type="primary">Primary</lm-button>
    <lm-button type="warn">Warn</lm-button>
    <lm-button type="danger">Danger</lm-button>
    <lm-button type="dark">Dark</lm-button>
    <h3>Icon</h3>
    <lm-button type="primary" icon="icon-like">Button</lm-button>
    <lm-button type="primary">Button <i class="iconfont icon-like"></i></lm-button>
    <h3>Outline</h3>
    <lm-button type="primary" outline>Primary</lm-button>
    <lm-button type="warn" outline>Warn</lm-button>
    <lm-button type="danger" outline>Danger</lm-button>
    <lm-button type="dark" outline>Dark</lm-button>
    <h3>Outline-Icon</h3>
    <lm-button type="primary" icon="icon-like" outline>Button</lm-button>
    <lm-button type="primary" outline>Button <i class="iconfont icon-like"></i></lm-button>
    <h3>Inline</h3>
    <lm-button type="primary" inline>Normal</lm-button>
    <lm-button type="primary" inline outline>Outline</lm-button>
    <h3>Disabled</h3>
    <lm-button disabled>Button</lm-button>
    <lm-button outline disabled>Button</lm-button>
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

.switch {
  vertical-align: middle;
  margin-right: 5px;
}
</style>
