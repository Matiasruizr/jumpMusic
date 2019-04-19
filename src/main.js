import Vue from 'vue'
import App from './App.vue'

// Plugins
import EventBus from './plugins/event-bus.js'
Vue.use(EventBus)

new Vue({
  el: '#app',
  render: h => h(App)
})
