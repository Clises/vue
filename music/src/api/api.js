import {get, post} from '@/utils/fetch'
//最新音乐
export const getNewSong = () => get('/personalized/newsong')
//登录
export const Login = (params) => get('/login/cellphone',params)
export const Swipe=()=>get('/banner')
export default {
  getNewSong,
  Login,
  Swipe
}
