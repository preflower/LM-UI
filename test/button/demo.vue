<template>
<div>
  <h2>Button</h2>
  <lm-button class="normal" @click="test_click('normal')">Primary</lm-button>
  <lm-button type="warn">Warn</lm-button>
  <lm-button type="danger">Danger</lm-button>
  <lm-button type="dark">Dark</lm-button>
  <h3>Icon</h3>
  <lm-button class="icon" @click="test_click('icon')" icon="icon-like">Button</lm-button>
  <lm-button>Button <i class="iconfont icon-like"></i></lm-button>
  <h3>Outline</h3>
  <lm-button class="outline" @click="test_click('outline')" outline>Primary</lm-button>
  <lm-button type="warn" outline>Warn</lm-button>
  <lm-button type="danger" outline>Danger</lm-button>
  <lm-button type="dark" outline>Dark</lm-button>
  <h3>Outline-Icon</h3>
  <lm-button icon="icon-like" outline>Button</lm-button>
  <lm-button outline>Button <i class="iconfont icon-like"></i></lm-button>
  <h3>Inline</h3>
  <lm-button class="inline" @click="test_click('inline')" inline>Normal</lm-button>
  <lm-button inline outline>Outline</lm-button>
  <h3>Disabled</h3>
  <lm-button class="disabled" @click="test_click('disabled')" disabled>Button</lm-button>
  <lm-button outline disabled>Button</lm-button>
</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import LmButton from '@/button/button.vue';

@Component({
  components: {
    LmButton,
  },
})
export default class ButtonDemo extends Vue {
  @Prop(Function) button_click!: Function;

  test_click(value: string) {
    this.button_click(value);
  }
}
</script>

<style lang="scss">
h1 {
  text-align: center;
}
h2 {
  margin: 30px 0 10px;
}
</style>