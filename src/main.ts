import { createSSRApp } from 'vue'
import App from './App.vue'
import { setupStore } from '@/store'

// 创建实例
export function createApp() {
  const app = createSSRApp(App)
  // Configure store
  setupStore(app)
  return {
    app
  }
}
