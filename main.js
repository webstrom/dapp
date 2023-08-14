import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import { RouterMount } from 'uni-simple-router'
import './uni.promisify.adaptor'

// Vue.prototype.$web3 = TronWeb
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
RouterMount(app,'#app')
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif