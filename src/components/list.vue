<template>
  <div id="list">
    <div class="back" @click="back">
      返回
    </div>
    <div v-for="item in list.playlist.tracks" class="list">
      {{item.name}}
    </div>
  </div>
</template>
<script>
  import api, {mySong} from '../api/api'
  import {mapMutations, mapGetters} from 'vuex'

  export default {
    created() {
      this.mySong();

    },
    data() {
      return {
        mysong: []
      }
    },
    computed: {
      ...mapGetters([
        'list'
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
.list{
  border: 1px solid red;
  height: 50px;
  line-height: 50px;
}
.back
{
  font-size: 60px;
}
</style>
