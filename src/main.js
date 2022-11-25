import { createApp } from 'vue'
import App from './App.vue'
import { userStore } from './store/users_store'
const app = createApp(App)
app.use(userStore)
app.mount('#app')