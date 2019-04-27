<template>
  <div class="content" v-if="track && track.album">
    <p><img  :src="track.album.images[0].url" alt=""></p>
    <p>
      <strong>{{ track.name }}</strong>
      <small>{{ track.artists[0].name }}</small>
    </p>
    <p>
      <audio :src="track.preview_url" controls />
    </p>
  </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      // track: {}
    }
  },

  computed: {
    ...mapState(['track'])
  }
}
</script>


<style lang="scss" scoped>
  img{
    width: 124px;
    border-radius: 50%;
  }
</style>
