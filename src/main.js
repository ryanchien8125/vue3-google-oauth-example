import { createApp } from 'vue'
import vue3GoogleLogin from 'vue3-google-login'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '這邊放上你的 Google Client ID'
})

app.mount('#app')
