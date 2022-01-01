import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/pages/main_page/main_page.vue'
Vue.use(Router)
export default new Router({
	routes: [
		{
			path     : '/',
			name     : 'mainPage',
			component: mainPage
		}
	]
})
