import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/app.css'
import {store} from './store/store'
import firebase from './firebase'
import './firebase'
import VueFire from 'vuefire'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueFire)

store.dispatch('initStore')

app.mount('#app')