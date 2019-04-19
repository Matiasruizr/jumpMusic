<template>
  <PmTrack :track="track" class="container"/>
</template>

<script>
import trackService from '../services/track'
import PmTrack from './Track.vue'

export default {
  components: { PmTrack },

  data () {
    return {
      track: {}
    }
  },

  created () {
    const id = this.$route.params.id
    const self = this
    trackService.getById(id)
      .then(res => {
        console.log(res)
        self.track = res
      })
  }
}
</script>
