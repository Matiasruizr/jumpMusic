import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routes'
// Filtros
import msToMm from './filters/ms-to-mm'
// Directivas
import blur from './directives/blur'
// Plugins
import EventBus from './plugins/event-bus.js'
// Vuex
import store from './store'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(msToMm)
Vue.use(blur)

const router = new VueRouter({ 
  routes,
  mode: 'history'
 })

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
