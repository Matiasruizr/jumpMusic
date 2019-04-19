// Acá creamos nuestras rutas y las asociamos a componentes
import Search from './component/Search.vue'
import About from './component/About.vue'
import TrackDetail from './component/TrackDetail.vue'

const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/about', component: About, name: 'about' },
  { path: '/track/:id', component: TrackDetail, name: 'track'}
]

export default routes