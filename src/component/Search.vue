<template>
  <main>
    <transition name="move">
      <PmNotification v-show="showNotification">
        <p slot="body">
          No se encontraron resultados
        </p>
      </PmNotification>
    </transition>
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <input type="text" 
            v-model="searchQuery" 
            class="input" 
            placeholder="Buscar canciones">
          <br/>
          <a href="" class="button is-info" @click.prevent="search">
            Buscar
          </a>
          <a href="" class="button is-danger" @click.prevent="cleanTracks">
            &times;
          </a>
          <p><small> {{ searchMessage }} </small></p>
        </div>
      </nav>
      <br/>
      <div class="container">
        <div class="columns is-multiline">
          <PmLoader v-show="isLoading" />
          <PmTrack v-show="!isLoading" 
            v-for="(track, index) in tracks" 
            :key="index" :track="track" 
            v-blur="track.preview_url"
            :class="{ 'is-active' : track.id === selectedTrack}"
            class="column is-one-quarter"
            @select="setSelectedTrack"/>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

import trackService from '../services/track'

import PmTrack from './Track.vue'

import PmNotification from './shared/Notification.vue'
import PmLoader from './shared/Loader.vue'

const tracks = [ ]

export default {
  name: 'Search',
  data () {
    return {
     searchQuery: '',
     tracks: [],
     isLoading: false,
     showNotification: false,
     selectedTrack: ''
    }
  },
  components: {
    PmTrack,
    PmLoader,
    PmNotification
  },
  methods: {
    searchTracks () {
      this.tracks = tracks
    },

    cleanTracks () {
      this.tracks = []
    },

    search () {
      if (!this.searchQuery) { return }
      
      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
         this.showNotification = res.tracks.total === 0
         this.tracks = res.tracks.items
         this.isLoading = false
        })
    },

    setSelectedTrack(id) {
      this.selectedTrack = id
    }
  
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}` 
    }
  },

  watch: {
    showNotification () {
      if (this.showNotification){
        setTimeout(() => {
          this.showNotification = false
        }, 2000 )
      } 
    }
  }

}
</script>

<style lang="scss">
  .results{
    margin-top: 15px;
  }

  .is-active{
    border: 2px solid #23d160;
  }
</style>
