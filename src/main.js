import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/app.css'
import {store} from './store/store'

const app = createApp(App)

app.use(router)
app.use(store)

store.dispatch('initStore')

app.mount('#app')