import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 150000 // 请求超时时间
});
// request拦截器
service.interceptors.request.use(config => {
  config.headers['Authorization']='Basic eGllaGUtYXV0aDp4aWVoZS1hdXRoLXNlY3JldA==';
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
