import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import router from './router'
import store from '@/store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { faSpinner, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
// library.add(faSpinner, faAlignLeft)
// library.add(faUserSecret)



// It's hard to figure it out, some infomation can find here!
// https://vuetifyjs.com/en/framework/icons#component-icons
import '@fortawesome/fontawesome-free/css/all.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

// Vue.use(Vuetify)
Vue.use(Vuetify, {
  iconfont: 'fa'
})
sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
