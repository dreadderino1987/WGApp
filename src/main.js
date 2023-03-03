import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'boxicons/css/boxicons.min.css'

const app = createApp(App)

app.config.productionTip = false

app.use(createPinia())
app.use(router)

app.mount('#app')
