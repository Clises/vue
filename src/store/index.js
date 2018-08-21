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
    //歌曲信息
    play: {
      url: '',
      id:''
    },

    songsInfo: {
      id: '',
      name: '歌曲名称',
      ar: [
        {
          id: '',
          name: '专辑'
        }
      ],
      al: {
        name: '歌手',
        picUrl: '../../static/img/music.png'
      }
    },
    list: {
      playlist: {
        name: '',
        coverImgUrl: '',
        first: true,
      }
    },
    songsUrl:''

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
  },
  mutations: {
    setUserData: (state, data) => {
      state.userData = data
    },
    setReload: (state, data) => {
      state.reloads = data
    },
    //存储音乐地址
    setUrl: (state, data) => {
      state.play = data
    },
    showBar: state => {
      state.isShow = true
    },
    hideBar: state => {
      state.isShow = false
    },
    setList: (state, data) => {
      state.list = data
    },
    setActiveId: (state, data) => {
      state.activeId = data
    },
    setSongsInfo: (state, data) => {
      state.songsInfo = data;
    },
    setPicUrl: (state, data) => {
      state.songsUrl = data;
    },
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
