import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
// state在vuex中用于存储数据
export const store=new Vuex.Store({
  state:{
    fontSize:0,
    reloads:false,
    userData: JSON.parse(window.sessionStorage.getItem('userData'))||{
      profile:{
        avatarUrl:'../../static/img/user.png',
        nickname:'',
        userId:''
      },
      account:{
        createTime:'',
      },
      first:true
    },
    //侧滑
    isShow:false,
    //歌曲信息
    url:'',
    songsInfo:{
      id:'',
      name:'歌曲名称',
      // ar:[
      //   {name:'专辑'}
      // ],
      // al:{
        // name:'歌手',
        // picUrl:'../../static/img/music.png'
      // }
    },
    list:{
      playlist:{
        name:'',
        coverImgUrl:'',
        first:true
      }
    }

  },
  getters:{
    //用户数据
    userData:state=>state.userData,
    //页面刷新
    reloads:state=>state.reloads,
    url:state=>state.url,
    //侧滑
    isShowMethod:state=>state.isShow,
    //歌曲详情信息
    songsInfo:state=>state.songsInfo,
    //歌单列表信息
    list:state=>state.list,
    //url

  },
  mutations:{
    setUserData:(state,data)=>{state.userData=data},
    setReload:(state,data)=>{state.reloads=data},
    //存储音乐地址
    setUrl:(state,data)=>{state.url=data},
    showBar:state=>{state.isShow=true},
    hideBar:state=>{state.isShow=false},
    setList:(state,data)=>{state.list=data},
    setSongsInfo:(state,data)=>{
      state.songsInfo=data;
      var check=false;
      state.playList.forEach(function(e,i){
        if(data.id==e.id){
          check=true;
        }
      })
      if(!check){
        state.currentIndex = state.playList.length;
        state.playList.push(state.songsInfo);
      }

    },


  },
  actions:{
    showSideBar({commit}){
      commit('showBar')
    },
    hideSideBar({commit}){
      commit('hideBar')
    }

  },
  });


/**
 此处状态为 方法
* */
