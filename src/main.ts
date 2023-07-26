import { createApp } from 'vue'
import App from './App.vue'
import RunUI from './components'

const app = createApp(App)
app.use(RunUI)
app.mount('#app')
