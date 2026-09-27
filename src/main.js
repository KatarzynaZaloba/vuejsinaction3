import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/app.css'
import {store} from './store/store'
import { app as firebaseApp } from './firebase'
import { VueFire } from 'vuefire'

const vueApp = createApp(App)

vueApp.use(router)
vueApp.use(store)
vueApp.use(VueFire, {
	firebaseApp
})

// Prevents a blocked/unavailable browser storage (IndexedDB/localStorage) from crashing the whole SPA
window.addEventListener('unhandledrejection', (event) => {
	console.error('Unhandled promise rejection:', event.reason);
	event.preventDefault();
});

store.dispatch('initStore')

vueApp.mount('#app')