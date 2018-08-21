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


//获取用户歌单列表
export const mySongList=(params)=>get('/user/playlist',params)

//获得歌单详情
export const mySong=(params)=>get('/playlist/detail',params)

//获取音乐链接
export const musicUrl=(params)=>get('/music/url',params)

//获取音乐详情
export const songDetail=(params)=>get('/song/detail',params)

//获取专辑内容
export const songAlbum=(params)=>get('/album',params)

//search
export const songSearch=(params)=>get('/search',params)



export default {
  getNewSong,
  Login,
  Swipe,
  mySongList,
  mySong,
  musicUrl,
  songDetail,
  songAlbum,
  songSearch
}
