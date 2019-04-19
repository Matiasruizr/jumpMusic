<template>
    <section class="hero is-success">
      <div class="hero-head">
        <header class="nav">
          <div class="container">
            <div class="nav-left nav-item">
              <strong>
               📻 Jump Music
              </strong>
            </div>
            <div class="nav-right nav-menu">

            </div>
          </div>
        </header>
      </div>

      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">Jump Music</h1>
          <h2 class="subtitle">Puro Jevi metal</h2>
          <PmPlayer />
        </div>
      </div>
    </section>
</template>


<script>
import PmPlayer from '../../component/Player.vue'
export default {
  components: { PmPlayer }
}
</script>
