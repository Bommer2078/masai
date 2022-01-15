import Vue from 'vue'
import Router from 'vue-router'
import mainPage from '@/pages/main_page/main_page.vue'
import boxList from '@/pages/box_list/box_list.vue'
import myPackage from '@/pages/my_package/my_package.vue'
import boxDetail from '@/pages/boxDetail/boxDetail.vue'
import boxDetail2 from '@/pages/boxDetail/boxDetail2.vue'
import loginPage from '@/pages/adminManage/login_page.vue'
import adminPage from '@/pages/adminManage/admin_page.vue'
import boxManagementEdit from '@/pages/adminManage/pages/boxManagementEdit/boxManagementEdit.vue'
import boxOrderRecord from '@/pages/adminManage/pages/boxOrderRecord/boxOrderRecord.vue'
Vue.use(Router)
export default new Router({
	routes: [
		{
			path     : '/',
			name     : 'mainPage',
			component: mainPage
		},
		{
			path     : '/admin_management',
			name     : 'loginPage',
			component: loginPage
		},
		{
			path     : '/admin_page',
			name     : 'adminPage',
			component: adminPage,
			children : [ {
				path     : '/boxManagement/boxOrderRecord',
				name     : 'boxOrderRecord',
				component: boxOrderRecord
			}, {
				path     : '/boxManagement/boxManagementEdit',
				name     : 'boxManagementEdit',
				component: boxManagementEdit
			} ]
		},
		{
			path     : '/box_list',
			name     : 'boxList',
			component: boxList
		},
		{
			path     : '/my_package',
			name     : 'myPackage',
			component: myPackage
		},
		{
			path     : '/box_detail',
			name     : 'boxDetail',
			component: boxDetail
		},
		{
			path     : '/my_box_detail',
			name     : 'boxDetail2',
			component: boxDetail2
		}
	]
})
