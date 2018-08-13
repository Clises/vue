/**
 * 配置编译环境和线上环境之间的切换
 *
 * routerMode: 路由模式
 *
 */

let payUrl = 'http://localhost:8080'// 本地

// let routerMode = '' // router 模式

if (process.env.NODE_ENV === 'development') {

} else if (process.env.NODE_ENV === 'production') {
  payUrl = 'http://' + window.location.host
  // routerMode = 'history';
}

export {
  payUrl,
  // routerMode
}
