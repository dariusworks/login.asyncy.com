import Vue from 'vue'
import Asyncy from '@asyncy/vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRocket, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faRocket, faHeart)

Vue.use(Asyncy)
Vue.component('font-awesome-icon', FontAwesomeIcon)
