<template>
  <div id="app">
    <!-- Layout Header -->
    <PmHeader />
      <RouterView />
    <!-- Layout Footer -->
    <PmFooter/>
  </div>
</template>

<script>
import PmHeader from './component/layout/Header.vue'
import PmFooter from './component/layout/Footer.vue'

const tracks = [ ]

export default {
  name: 'app',
  components: {
    PmFooter,
    PmHeader,
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results{
    margin-top: 15px;
  }

  .is-active{
    border: 2px solid #23d160;
  }

</style>
