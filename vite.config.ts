import { resolve } from 'path'
import { loadEnv } from 'vite'
import type { ConfigEnv, UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Uni from '@dcloudio/vite-plugin-uni'
import EslintPlugin from 'vite-plugin-eslint'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

// 路径查找
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.cn/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    base: './',
    resolve: {
      alias: [
        {
          find: /\@\//,
          replacement: `${pathResolve('src')}/`
        }
      ]
    },
    define: {
      'process.env': {}
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          // 发布时删除 console
          // drop_console: true,
        }
      }
    },
    server: {
      host: true,
      proxy: {
        '/api': {
          target: env.VITE_PROXY_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
        '/upload': {
          target: env.VITE_PROXY_UPLOAD_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/upload/, '')
        },
      },
    },
    plugins: [
      Vue(),
      Uni(),
      EslintPlugin({
        cache: false,
        include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
        exclude: ['./node_modules/**']
      }),
      VueI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [resolve(__dirname, 'src/locales/**')]
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@import "@/assets/style/main.scss";',
        }
      }
    }
  }
}
