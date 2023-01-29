// 引入 uni-ajax 模块
import ajax from 'uni-ajax'
import qs from 'qs'
import type { AjaxInstance, AjaxRequestConfig, AjaxResponse } from 'uni-ajax'

// 创建请求实例
const request: AjaxInstance<AjaxRequestConfig> = ajax.create({
  // 初始配置
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
  dataType: 'json'
})

// 添加请求拦截器
request.interceptors.request.use(
  (config: AjaxRequestConfig) => {
    // 在发送请求前做些什么
    const params = config.params || {}
    const data = config.data || false
    if (config.method?.toUpperCase() === 'POST') {
      config.data = qs.stringify(data)
    }
    // get参数编码
    if (config.method?.toUpperCase() === 'GET' && params) {
      let url = config.url + '?'
      for (const propName of Object.keys(params)) {
        const value = params[propName]
        if (value !== void 0 && value !== null && typeof value !== 'undefined') {
          if (typeof value === 'object') {
            for (const val of Object.keys(value)) {
              const params = propName + '[' + val + ']'
              const subPart = encodeURIComponent(params) + '='
              url += subPart + encodeURIComponent(value[val]) + '&'
            }
          } else {
            url += `${propName}=${encodeURIComponent(value)}&`
          }
        }
      }
      // 给 get 请求加上时间戳参数，避免从缓存中拿数据
      // const now = new Date().getTime()
      // params = params.substring(0, url.length - 1) + `?_t=${now}`
      url = url.slice(0, -1)
      config.params = {}
      config.url = url
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  (response: AjaxResponse<any>) => {
    const { data } = response
    // 对响应数据做些什么
    return data
  },
  (error) => {
    // 对响应错误做些什么
    console.log(error)
    return Promise.reject(error)
  }
)

// 导出 create 创建后的实例
export default request
