// @ts-ignore
import App from './App.vue'
import { createApp } from 'vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import router from './router'
import bootstrap from 'bootstrap'
import jquery from 'jquery'
import popper from 'popper.js'
import videobackground from 'vue-responsive-video-background-player'

const root = createApp(App)
root.component('VideoBackground', videobackground)
registerGlobalComponents(root)

root
  .use(router, bootstrap, jquery, popper)
  .mount('#app')
