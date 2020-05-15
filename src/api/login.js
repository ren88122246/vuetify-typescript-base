import request from '@/util/request'

// 登录
export const getLogin = (params) => {return request({ method: 'get', url: '/auth/v1/login', params: params })}

// 刷新token
export const postRefreshtoken = (params) => {return request({ method: 'post', url: '/auth/v1/token', data: params })}

//退出登录
export const postLogout = (params) => {return request({ method: 'post', url: '/auth/v1/logout', params: params })}