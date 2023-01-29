import { createSSRApp } from 'vue'
import App from './App.vue'
import { setupStore } from '@/store'
import { setupI18n } from '@/plugins/vueI18n'

// 创建实例
export function createApp() {
  const app = createSSRApp(App)
  // pinia
  setupStore(app)
  // 国际化
  setupI18n(app)

  return {
    app
  }
}
