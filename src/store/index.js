import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// state在vuex中用于存储数据
export const store = new Vuex.Store({
  state: {
    fontSize: 0,
    reloads: false,
    userData: JSON.parse(window.sessionStorage.getItem('userData')) || {
      profile: {
        avatarUrl: '../../static/img/user.png',
        nickname: '',
        userId: ''
      },
      account: {
        createTime: '',
      },
      first: true
    },
    //侧滑
    isShow: false,
    activeId: 0,
    list: {
      playlist: {
        name: '',
        coverImgUrl: '',
        first: true,
      }
    },
    songsInfo: {
      id: '',
      name: '歌曲名称',
      ar: [
        {
          id: '',
          name: '歌手'
        }
      ],
    },
    songsUrl:'',
    //歌曲信息
    play: {
      url: '',
      id:''
    },
    //是否正在播放
    playing:false

  },
  getters: {
    //用户数据
    userData: state => state.userData,
    //页面刷新
    reloads: state => state.reloads,
    play: state => state.play,
    //侧滑
    isShowMethod: state => state.isShow,
    activeId: state => state.activeId,

    list: state => state.list,
    songsInfo: state => state.songsInfo,
    songsUrl:state => state.songsUrl,

    isPlaying:state=>state.playing
  },
  mutations: {
    //用户数据
    setUserData: (state, data) => {
      state.userData = data
    },
    //是否重新加载
    setReload: (state, data) => {
      state.reloads = data
    },
    //开启侧滑
    showBar: state => {
      state.isShow = true
    },
    //隐藏侧滑
    hideBar: state => {
      state.isShow = false
    },
    //歌单列表
    setList: (state, data) => {
      state.list = data
    },
    //音乐地址
    setUrl: (state, data) => {
      state.play = data
    },
    //活跃id
    setActiveId: (state, data) => {
      state.activeId = data
    },
    //单曲信息
    setSongsInfo: (state, data) => {
      state.songsInfo = data;
    },
    //音乐背景图
    setPicUrl: (state, data) => {
      state.songsUrl = data;
    },
    //播放
    play:(state,data)=>{
      state.playing = data

    },
    // 暂停
    // pause (state) {
    //   state.playing = false
    //   state.audioelement.pause()
    // },



    // state.playList.push(state.songsInfo);

    // var check=false;
    // state.playList.forEach(function(e,i){
    //   if(data.id==e.id){
    //     check=true;
    //   }
    // })
    // if(!check){
    //   state.currentIndex = state.playList.length;
    //   state.playList.push(state.songsInfo);
    // }


  },
  actions: {
    showSideBar({commit}) {
      commit('showBar')
    },
    hideSideBar({commit}) {
      commit('hideBar')
    }

  },
});


/**
 此处状态为 方法
 * */
