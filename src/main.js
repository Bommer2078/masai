import Vue from 'vue'
import HorseRicing from './App'
import router from './router'
import 'normalize.css/normalize.css'
import axios from './http'
import initializ from './libs/contract'
Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$EventBus = new Vue()
Vue.prototype.$initializ = initializ
/* eslint-disable no-new */
const $vue = new Vue({
	router,
	el        : '#HorseRicing',
	components: { HorseRicing },
	template  : '<HorseRicing/>'
})

export default $vue
