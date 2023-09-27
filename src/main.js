import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './views/Home.vue'
import IuriCode from './views/IuriCode.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/iuricode',
      name: 'IuriCode',
      component: IuriCode
    }
  ]
})

createApp(App).use(router).mount('#app')
