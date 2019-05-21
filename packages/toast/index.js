import Vue from 'vue'
import ToastComponent from './Toast'

const defaultOptions = {
  type: 'text',
  mask: false,
  message: '',
  value: true,
  duration: 3000,
  position: 'middle',
}

const parseOptions = message => {
  if (Object.prototype.toString.call(message) === '[object Object]') return message
  return { message }
}

let queue = []

function createInstance(create) {
  const has_no_create_id = queue.findIndex(toast => {
    return !toast.create
  })
  if (!queue.length || create || has_no_create_id === -1) {
    const toast = new (Vue.extend(ToastComponent))({
      el: document.createElement('div'),
    })
    toast.create = !!create
    document.body.appendChild(toast.$el)
    queue.push(toast)
    return queue[queue.length - 1]
  }
  return queue[has_no_create_id]
}

function Toast(options = {}) {
  const toast = createInstance(options.create)

  options = Object.assign({}, defaultOptions, parseOptions(options), {
    clear() {
      toast.value = false
      if (this.create) {
        this.$el.addEventListener('transitionend', event => {
          queue.splice(queue.indexOf(toast), 1)
          if (event.target.parentNode) event.target.parentNode.removeChild(event.target)
        })
      }
    },
  })
  Object.assign(toast, options)
  clearTimeout(toast.timer)

  if (options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear()
    }, options.duration)
  }

  return toast
}

Toast.loading = function(options) {
  const option = Object.assign({}, { type: 'loading' }, parseOptions(options))
  Toast(option)
}

Toast.clear = all => {
  if (queue.length) {
    if (all) {
      queue.forEach(toast => {
        toast.clear()
      })
      queue = []
    } else {
      queue.shift().clear()
    }
  }
}

Toast.install = () => {
  Vue.use(ToastComponent)
}

Vue.prototype.$toast = Toast

export default Toast
