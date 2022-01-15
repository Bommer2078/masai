import Vue from 'vue'
import HorseRicing from './App'
import router from './router'
import { Table, TableColumn, Pagination, Tree, Message, MessageBox, TimeSelect,
	Select, Option, Dialog, Switch, Button, Avatar, Radio, Checkbox, RadioGroup,
	RadioButton, DatePicker, Loading, Breadcrumb, BreadcrumbItem, Row, Col, Form, FormItem, Input} from 'element-ui'
import tButton from '@/pages/adminManage/components/common/t_button.vue'
import searchGroup from '@/pages/adminManage/components/common/search_group.vue'
import navgatorPart from '@/components/navgatorPart.vue'
import wallentConnectBox from '@/components/wallentConnectBox.vue'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import axios from './http'
import api from './libs/api.js'
import utils from './libs/utils.js'
// import moralis from './libs/moralis.js'
import {connectWallet, buyBlindBox, getCurrentTokenId, getHistory, openBlindBox, getBalanceOf, getNTFList} from './libs/contractNew'
Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.prototype.$EventBus = new Vue()
Vue.prototype.$connectWallet = connectWallet
Vue.prototype.$buyBlindBox = buyBlindBox
Vue.prototype.$getCurrentTokenId = getCurrentTokenId
Vue.prototype.$getHistory = getHistory
Vue.prototype.$openBlindBox = openBlindBox
Vue.prototype.$getBalanceOf = getBalanceOf
Vue.prototype.$getNTFList = getNTFList
// Vue.prototype.$moralis = moralis
Vue.prototype.$utils = utils
Vue.prototype.$api = api
Vue.component('t-button', tButton)
Vue.component('navgator-part', navgatorPart)
Vue.component('search-group', searchGroup)
Vue.component('wallent-connect-box', wallentConnectBox)
Vue.use(Table)
Vue.use(Row)
Vue.use(Col)
Vue.use(TableColumn)
Vue.use(Tree)
Vue.use(Pagination)
Vue.use(Select)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Switch)
Vue.use(Button)
Vue.use(Avatar)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(Loading)
Vue.use(TimeSelect)
Vue.use(DatePicker)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
/* eslint-disable no-new */
const $vue = new Vue({
	router,
	el        : '#HorseRicing',
	components: { HorseRicing },
	template  : '<HorseRicing/>'
})

export default $vue
