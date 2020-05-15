import request from '@/util/request'
import store from '@/store/index';

export default function refreshToken(options) {
  return new Promise((resolve, reject) => {
    if (!store.state.user.refreshToken) {
      reject()
    }
    //默认 window.__refreshTokenLock__ ： undefined   走if,被赋值 promise 如果第一个还没执行完则，将会被挂起，执行checkLock()直到上一个请求执行完毕
    if (!window.__refreshTokenLock__) {
      window.__refreshTokenLock__ = request({
        url: `/auth/v1/token`,
        method: 'post',
        headers: { 'uuid': store.state.user.uuid },
        params: { refreshToken: store.state.user.refreshToken }
      }).then(response => {
        store.commit('user/setAccessToken', response.data.accessToken)
        store.commit('user/setRefreshToken', response.data.refreshToken)
        localStorage.setItem("state", '');
        localStorage.setItem("state", JSON.stringify(store.state.user));
        window.__refreshTokenLock__ = null
        resolve()
      }).catch(error => {
        window.__refreshTokenLock__ = undefined
        store.commit('user/removeAccessToken')
        store.commit('user/removeRefreshToken')
      })
    } else {
      checkLock()
      function checkLock() {
        setTimeout(() => {
          const __RTK__ = window.__refreshTokenLock__
          if (__RTK__ === undefined) {
            store.dispatch('user/removeAccessToken')
            store.dispatch('user/removeRefreshToken')
            location.reload()
            return
          }
          __RTK__ === null ? resolve() : checkLock()
        }, 500)
      }
    }
  })
}
