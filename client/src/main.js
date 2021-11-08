import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
sync(store, route)

createApp(App).use(store).use(route).mount('#app')
