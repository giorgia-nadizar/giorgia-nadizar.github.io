import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue  } from 'bootstrap-vue'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fontsource/roboto'

import titleMixin from './mixins/titleMixin'

Vue.mixin(titleMixin)

Vue.component('v-icon', Icon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
