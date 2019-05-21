import Vue, { VNode } from 'vue'

export type ToastPosition = 'top' | 'middle' | 'bottom'
export type MessageType = 'text' | 'loading'

/** Notification Component */
export declare class LMToastComponent extends Vue {
  clear(): void
}

export interface LMToastOptions {
  message?: string | VNode
  type?: MessageType
  duration?: number
  position?: ToastPosition
  mask?: boolean
  create?: boolean
}

export interface LMToast {
  (options: LMToastOptions | string): LMToastComponent

  loading(options: LMToastOptions): LMToastComponent

  install(vue: typeof Vue): void
}

declare module 'vue/types/vue' {
  interface Vue {
    $toast: LMToast
  }
}

declare const Toast: LMToast
export default Toast
