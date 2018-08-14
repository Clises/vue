<template>
    <div id="mine">
      <Header></Header>
      创建的歌单
      我喜欢的音乐
      {{mylove}}首

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
              mylove:''
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
              // this.list=r
              console.log(res.playlist.length)

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
