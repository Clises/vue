//axios统一配置 暴露 axios 方法
import axios from 'axios'
import Cookie from 'js-cookie'
import qs from 'qs' // 引入qs模块，用来序列化post类型的数据
import Toast from 'muse-ui-toast'
let CancelToken = axios.CancelToken
let source = CancelToken.source()

const service = axios.create({
  baseURL: '',
  withCredentials: true,//允许携带 cookie
  timeout: 5000//请求超时时间

})

//request拦截器
service.interceptors.request.use(config => {
  //发送请求之前，要做的业务
  const ticket = Cookie.get('ticket')  //获取 cookie
  if (!ticket) {
    if (typeof config.requireToken === 'undefined' || config.requireToken === true) {
      config.cancelToken = source.token // 阻止请求
    }
  }
  if (config.method === 'post') {
    //使用对提交从参数对象进行序列化操作,如果没有序列化操作后台拿不到数据    ?   什么是序列化操作

    config.data = qs.stringify(config.data)
  }
  return config
}, error => {
  Promise.reject(error)
})


//响应拦截器
service.interceptors.response.use(response => {
  //返回200,说明接口成功
  if (response.status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
  // return Promise.resolve(response)
}, error => {
  /**
   根据状态码返回信息
   **/
  //抛出错误
  // Toast.message({message: '错误', position: 'top'})
  // if (error.response.status) {
  //   switch (error.response.status) {
  //     // 401: 未登录
  //     // 未登录则跳转登录页面，并携带当前页面的路径
  //     // 在登录成功后返回当前页面，这一步需要在登录页操作。
  //     case 401:
  //       router.replace({
  //         path: '/login',
  //         query: {redirect: router.currentRoute.fullPath}
  //       });
  //       break;
  //     // 403 token过期
  //     // 登录过期对用户进行提示
  //     // 清除本地token和清空vuex中token对象
  //     // 跳转登录页面
  //     case 403:
  //       Toast({
  //         message: '登录过期，请重新登录',
  //         duration: 1000,
  //         forbidClick: true
  //       });
  //       // 清除token
  //       localStorage.removeItem('token');
  //       store.commit('loginSuccess', null);
  //       // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
  //       setTimeout(() => {
  //         router.replace({
  //           path: '/login',
  //           query: {
  //             redirect: router.currentRoute.fullPath
  //           }
  //         });
  //       }, 1000);
  //       break;
  //     // 404请求不存在
  //     case 404:
  //       Toast({
  //         message: '网络请求不存在',
  //         duration: 1500,
  //         forbidClick: true
  //       });
  //       break;
  //     // 其他错误，直接抛出错误提示
  //     default:
  //       Toast({
  //         message: error.response.data.message,
  //         duration: 1500,
  //         forbidClick: true
  //       });
  //   }
  // }
  return Promise.reject(error)
});



// post get 请求
const fetch = (method, url, data = {}, config) => {
  //添加 config 对返回信息集中处理
  config = config || {};
  config.method = method
  config.url = url;

  // toLocaleLowerCase将字符串转换成小写
  //根据接口请求方式判断连接方式,
  method.toLocaleLowerCase() === 'get' ? config['params'] = data : config['data'] = data
  return service(config).then(function (res) {

    /*判断是否成功,音乐接口无 success 项暂不处理*/
    // if (!data.success) {
    //   return Promise.reject(data)
    // }

    return res.data
  })
}


//url 请求地址 data 请求携带参数
const get = (url, data, config) => {
  return fetch('get', url, data, config)
}

const post = (url, data, config) => {
  return fetch('post', url, data, config)
}

export {get, post}
