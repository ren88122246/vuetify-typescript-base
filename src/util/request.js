import axios from 'axios';
// import { Message } from 'element-ui';
import md5 from 'md5';
import store from '@/store/index';
import router from '../router'

import { baseUrl } from '@/util/urlConfig'
import refreshToken from '@/util/refreshToken'
import * as foundation from '@/util/foundation'

// 创建axios实例
const service = axios.create({
  timeout: 8000,     // 请求超时时间
  baseURL: `${baseUrl}` // http://140.143.68.3:8084/api/   
})
//http request 拦截器
service.interceptors.request.use(config => {
  config.headers = {
    'Content-Type': 'application/json;charset=utf-8'
  }
  const accessToken = store.state.user.accessToken
  let needToken = false;
  if (config.params) {
    needToken = config.params.needToken
    delete config.params.needToken
  }

  if (accessToken && needToken) {
    if (process.env.NODE_ENV === 'development') {
      config.headers['Authorization'] = accessToken
    } else {
      const uid = store.state.user.uid
      const nonce = foundation.randomString(6)
      const timestamp = parseInt(new Date().getTime() / 1000)
      const sign = md5(uid + nonce + timestamp + accessToken)
      const _params = { uid, nonce, timestamp, sign }
      let params = config.params || {}
      params = { ...params, ..._params }
      config.params = params
      const uuid = store.state.user.uuid
      config.headers['uuid'] = uuid
    }
  }

  if (config.url.indexOf('/auth/v1/login') !== -1 || config.url.indexOf('/auth/v1/token') !== -1 || config.url.indexOf('/auth/v1/logout') !== -1) {
    const uuid = store.state.user.uuid
    config.headers['uuid'] = uuid
  }

  return config;
},
  error => {
    return Promise.reject(error);
  }
);


//http response 拦截器

service.interceptors.response.use(
  response => {
    if (response.data.code === 0) {
      return response.data
    }
    //9:token失效      10：退出登录     11：用户名不存在
    if (response.data.code == 403 || response.data.code == 9 || response.data.code == 10 || response.data.code == 11) {
      console.log(`--------${response.data.code}--------`)
      store.commit('user/removeAccessToken')
      store.commit('user/removeRefreshToken')
      store.commit('user/removeUid')
      store.commit('user/removeUserName')
      router.push(`/login`)
      // switch (response.data.code.toString()) {
      //   case "403":
      //     Message.error({
      //       duration: 3000,
      //       message: '登录过期，请重新登录！'
      //     })
      //     break;
      //   case "9":
      //     Message.error({
      //       duration: 3000,
      //       message: '登录过期，请重新登录！'
      //     })
      //     break;
      //   case "10":
      //     Message.error({
      //       duration: 3000,
      //       message: '当前账号已退出！'
      //     })
      //     break;
      //   default:
      //     Message.error({
      //       duration: 3000,
      //       message: '登录过期，请重新登录！'
      //     })
      // }
      return Promise.reject()
    }
    else {
      // Message.error(response.data.message)
      return Promise.reject()
    }
  },
  error => {
    // Message.error("请求超时")
    router.push(`/login`)
    return Promise.reject(error)
  }
)

export default function request (options) {
  if (options.needToken && options.method.toUpperCase() == "GET") {
    options.params['needToken'] = options.needToken;
  }
  if (options.needToken && options.method.toUpperCase() !== "GET") {
    options.params = {};
    options.params['needToken'] = options.needToken;
  }
  // 如果是服务端或者是请求的刷新token，不需要检查token直接请求。
  if (process.server || !options.needToken) {
    return service(options)
  }
  return new Promise((resolve, reject) => {
    refreshToken(options).then(() => {
      service(options).then(resolve).catch(reject)
    })
  })
}
