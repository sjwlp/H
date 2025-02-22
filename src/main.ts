import { createSSRApp } from 'vue'
import pinia from './stores'
import persist from 'pinia-plugin-persistedstate'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(pinia)
  return {
    app,
  }
}
