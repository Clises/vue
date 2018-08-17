<template>
    <div id="mine">
      我创建的歌单{{myEstablish.length}}个<br/>
      <div v-for="item in myEstablish" class="list">
        <router-link :to="{path:'/list',query:{id:item.id}}">
        <span>{{item.name}}</span>
        <span>{{item.trackCount}}</span>
        </router-link>
      </div>
      <br/>
      我收藏的歌单{{myCollected.length}}个
      <div v-for="item in myCollected" class="list">
        <router-link :to="{path:'/list',query:{id:item.id}}">
        <span>{{item.name}}</span>
        <span>{{item.trackCount}}</span>
        </router-link>
      </div>
    </div>
</template>
<script>
  import Header from './header'
  import api from '../api/api'
  import { mapMutations, mapGetters } from 'vuex'
  export default {
        created() {
          this.mySongList();
        },
        data() {
            return {
              list:'',
              myEstablish:[],
              myCollected:[]
            }
        },
        computed: {
          ...mapGetters([
            'userData'
          ]),
        },
        methods: {
          mySongList(){
            api.mySongList({
              uid:this.userData.profile.userId
            }).then((res) => {
              for(var key in res.playlist){
                var creatorName=res.playlist[key].creator.nickname;
                var bossName=this.userData.profile.nickname;
                if (creatorName==bossName){
                  this.myEstablish.push(res.playlist[key])
                }
                else{
                  this.myCollected.push(res.playlist[key])
                }
              }
            })
          }
        },
        components: {
          Header
        },
        mounted() {
          //如果没有用户数据返回
          if(this.userData.first){
            this.$router.replace('/')
          }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
  .list{
    width: 100%;
    height: 50px;
    border: 1px solid red;
    line-height: 50px;
  }
</style>
