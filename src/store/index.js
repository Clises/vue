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
      },
      account:{
        createTime:'',
      },
      first:true
    },
    //侧滑
    isShow:false
  },
  getters:{
    userData:state=>state.userData,
    //侧滑
    isShowMethod:state=>state.isShow
  },
  actions:{
    showSideBar({commit}){
      commit('showBar')
    },
    hideSideBar({commit}){
      commit('hideBar')
    }
  },
  mutations:{
    setUserData:(state,data)=>{state.userData=data},
    showBar:state=>{state.isShow=true},
    hideBar:state=>{state.isShow=false},

  },
  });


/**
 此处状态为 方法
* */
