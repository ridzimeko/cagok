import 'bulma/css/bulma.css'
import 'animate.css'
import '@/assets/main.css'

import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)

app.mount('#app')
