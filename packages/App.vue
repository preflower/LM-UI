<template>
  <div id="app">
    Welcome to use LM-UI
    <lm-button @click="handle_click">Primary</lm-button>
    <lm-button @click="create_new_toast">Create New Toast</lm-button>
    <p><br></p>
    <lm-switch></lm-switch>
    <p><br></p>
    <!-- <lm-loading></lm-loading> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import LmButton from '@/button/button.vue';
import LmSwitch from '@/switch/switch.vue';
import LmLoading from '@/loading/loading.vue';

@Component({
  components: {
    LmButton, LmSwitch, LmLoading
  }
})
export default class App extends Vue {
  handle_click (event: Event) {
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

.switch {
  vertical-align: middle;
  margin-right: 5px;
}
</style>
