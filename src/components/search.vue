<template>
  <div id="search">
    <form action="/">
      <van-search v-model="value" placeholder="请输入搜索关键词" show-action @search="onSearch"/>
    </form>
    <ul>
      <li v-for="(item,index) in searchList":key="item.id">
        {{index+1}}{{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
  import Header from './header'
  import api from '../api/api'
  export default {
    data() {
      return {
        value:'',
        searchList:[]
      }
    },
    created(){

    },
    methods: {
      onSearch(){
        api.songSearch({
          keywords:this.value
        }).then((res)=>{
          this.searchList=res.result.songs
        })
      }
    },
    components: {
      Header
    },
    mounted() {

    }
  }
</script>
<style lang="scss">

</style>
