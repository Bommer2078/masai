import Vue from './main'
import axios from 'axios'
import router from './router'
import {Message} from 'element-ui'
import querystring from 'querystring'
// const val = process.env.API_ROOT
const formdataArr = []
let loading = null
const blobArr = []

axios.default.timeout = 8000
// axios.default.baseUrl = ''

// http request 拦截器
axios.interceptors.request.use(
	(config) => {
		loading = Vue.$loading({
			lock      : true,
			text      : 'Loading',
			spinner   : 'el-icon-loading',
			background: 'rgba(0, 0, 0, 0.7)'
		})
		const key = localStorage.getItem('Authorization')

		if (formdataArr.indexOf(config.url) >= 0) {
			config.data = querystring.stringify(config.data)
			config.headers['content-type'] = 'application/x-www-form-urlencoded'
		}
		if (blobArr.indexOf(config.url) >= 0) {
			config.responseType = 'blob'
		}
		config.headers.isAdmin = true
		if (key) { // 判断token是否存在
			config.headers.token = key // 将token设置成请求头
		}
		return config
	},
	(err) => {
		return Promise.reject(err)
	}
)

// http response 拦截器
axios.interceptors.response.use(
	(response) => {
		loading.close()
		const arr = [ 401 ]

		if (arr.indexOf(response.data.code) >= 0) {
			localStorage.removeItem('Authorization')
			Message.error('登录已过期，请重新登录')
			router.replace('/login')
		}
		return response
	},
	(error) => {
		loading.close()
		if (error.message === 'Request failed with status code 401') {
			localStorage.removeItem('Authorization')
			Message.error('登录已过期，请重新登录')
			router.replace('/login')
		} else {
			Message.error('接口报错，请重试')
		}
		return Promise.reject(error)
	}
)
export default axios
