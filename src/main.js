import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ScrollAnimationPlugin } from './composables/useScrollAnimation'

const app = createApp(App)
app.use(ScrollAnimationPlugin)
app.mount('#app')
