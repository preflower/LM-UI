<template>
  <lm-popup :visible="value" @click-mask="value_change" :close-on-click-mask="false" :mask="mask" :position="position">
    <div class="toast-container">
      <div class="spinner-container" v-if="type === 'loading'">
        <lm-loading></lm-loading>
        <p class="spinner-container__text" v-if="message">{{ message }}</p>
      </div>
      <p class="text-container" v-else>{{ message }}</p>
    </div>
  </lm-popup>
</template>

<script>
import LmLoading from '@/loading/loading'
import LmPopup from '@/popup/popup'

export default {
  model: {
    event: 'change',
    prop: 'value',
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: false,
    },
    message: String,
    type: {
      type: String,
      default: 'text',
    },
    position: {
      type: String,
      default: 'middle',
    },
  },
  methods: {
    value_change(val) {
      this.$emit('change', val)
    },
  },
  components: {
    LmLoading,
    LmPopup,
  },
}
</script>

<style lang="scss" scoped>
@import 'common/style/init.scss';
@import 'common/style/variable.scss';

.toast-container {
  border-radius: 4px;
  color: $white;
  background: rgba(0, 0, 0, .7);
  font-weight: 100;
  font-size: 16px;

  .spinner-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;

    &__spinner {
      width: 24px;
      animation: loading 1.5s linear infinite;
    }

    &__text {
      margin-top: 8px;
      font-weight: 200;
      font-size: 14px;
      text-align: center;
    }
  }

  .text-container {
    padding: 14px 16px;
    text-align: center;
  }
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
