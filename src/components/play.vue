<template>
  <div id="play">
    <audio :src="list.url" controls="controls"></audio>

  </div>
</template>
<script>
    import api from '@/api/api'
    export default {
    data(){
      return{
        list:[]
      }
    },
    mounted(){
      console.log(this.$route.params);  /*获取动态路由传值*/
      var aid=this.$route.params.aid;
      //调用请求数据的方法
      this.requestData(aid);
    },
    methods:{
      requestData(aid){
        this.$http.get(api.playApi+aid).then((response)=>{
          console.log(response.data[0]);
          this.list=response.data[0];
        },(err)=>{
          console.log(err)
        })
      }
    }
  }
</script>

<style scoped>
</style>
