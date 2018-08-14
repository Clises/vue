import {get, post} from '@/utils/fetch'
//推荐歌单
export const getSongList = () => get('/personalized')
//最新音乐
export const getNewSong = () => get('/personalized/newsong')
//登录
export const Login = (params) => get('/login/cellphone',params)
//banner
export const Swipe=()=>get('/banner')
//登录之后推荐音乐


//mine
export const mySongList=(params)=>get('/user/playlist',params)

export default {
  getNewSong,
  Login,
  Swipe,
  mySongList
}
