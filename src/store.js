import Vue from 'vue'
import Vuex from 'vuex'
import track from './services/track'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    track: { }
  },

  mutations: {
    setTrack(state, track) {
      state.track = track
    }
  },

  getters:{
    trackTitle(state){
      if(!state) { return '' }
      return state.track.name
    }
  },

  actions: {
    getTrackById(context, payload) {
      return track.getById(payload.id)
        .then( res => {
          context.commit('setTrack', res)
          return res
        })
    }
  }
})

export default store