<template>
  <div id="list">
    <div class="back" @click="back">
      返回
    </div>
    <div v-for="item in list.playlist.tracks" class="list" @click="setUrl(item.id)">
      {{item.name}}
    </div>
  </div>
</template>
<script>
  import api from '../api/api'
  import {mapMutations, mapGetters} from 'vuex'
  import {store} from "../store";

  export default {
    created() {
      this.mySong();
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'list',
        'url'
      ]),
    },
    methods: {
      mySong() {
        var query = this.$route.query;
        api.mySong({
          id: query.id
        }).then((res) => {
          this.$store.commit('setList', res);

        })
      },
      setUrl(id){
        api.musicUrl({
          id:id,
          br:'320000'
        }).then((res)=>{
          if (res.code==200){
            this.$store.commit('setUrl',res.data[0].url)
            console.log(this.url)
          }
        })
      },
      back(){
        history.go(-1)
      }
    },
    components: {},
    mounted() {
      console.log(this.url)
    }
  }
</script>

<style lang="scss" type="text/scss" scoped>
  #list{


  }
.list{
  border: 1px solid red;
  height: 100px;
  line-height: 100px;
}
.back
{
  font-size: 60px;
}
</style>
