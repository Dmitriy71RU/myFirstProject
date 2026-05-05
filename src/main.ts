import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import router from './router'      // <-- импорт созданного роутера

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)                    // <-- регистрация роутера
app.mount('#app')