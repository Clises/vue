<template>
    <div id="mine">
      <Header></Header>
      我创建的歌单{{myEstablish.length}}个<br/>
      我喜欢的音乐 {{mylove}}首<br/>
      我收藏的歌单{{myCollected.length}}个

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
              mylove:'',
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
            this.mylove=res.playlist[0].trackCount

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

<style lang="scss" type="text/scss" scoped>
#mine{
  padding-top: 100px;
}
</style>
