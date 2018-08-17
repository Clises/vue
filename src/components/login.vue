<template>
  <div id="Login">
    <div class="backs" @click="back">
    </div>
    <div class="login-content">
      <input class="login-input" type="tel" autofocus="autofocus" v-model="msg.phone" placeholder="请输入手机号">
    </div>
    <div class="login-content">
      <input class="login-input" type="password" v-model="msg.password" placeholder="请输入密码">
    </div>
    <div class="login-btn">
      <button class="btn" @click="login">登录</button>
    </div>
  </div>
</template>
<script>
  import api from '../api/api'
  import { isPhone } from "../utils/validate";
  import cookie from "js-cookie";
  import { Toast } from "vant";
  export default {
    data() {
      return {
        msg:{
          phone:'',
          password:''
        }
      }
    },
    methods: {
      login(){
        if (!isPhone(this.msg.phone)) {
          Toast("手机号码格式错误");
          return;
        }
        api.Login({
          phone:this.msg.phone,
          password:this.msg.password
        }).then((res)=>{
          if (res.code==200) {
            //改变commit 中的数据
            this.$store.commit('setUserData',res);
            this.$router.push("/home");
           window.sessionStorage.setItem('userData',JSON.stringify(res));
          }else if (res.code==502){
            Toast("res.msg");
          }
          else if (res.code==501){
            Toast(res.msg)
          }
        }).catch(function (error) {
        });
      },
      back(){
        history.go(-1)
      }
    },
    components: {},
    mounted() {

    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  @import "../../src/assets/css/login.css";
</style>
