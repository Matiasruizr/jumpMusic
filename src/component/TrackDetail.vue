<template>
  <div>
    <h1>{{ trackTitle }}</h1>
    <PmTrack :track="track" class="container" />
  </div> 
</template>

<script>
import PmTrack from './Track.vue'
import { mapState, mapActions, mapGetters } from 'vuex' 

export default {
  components: { PmTrack },

  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },

  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id != id ){
      this.getTrackById({ id })
        .then(() => {
          console.log("Track loaded")
        })
    }
  },

  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>
