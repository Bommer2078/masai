<template>
	<div>
		<sidside-cloumn></sidside-cloumn>
		<div class="main-container">
			<router-view class="main-view"/>
		</div>
		<head-bar></head-bar>
	</div>
</template>

<script>
import sidsideCloumn from './components/side_cloumn/side_cloumn.vue'
import headBar from './components/head_bar/head_bar.vue'
export default {
	components: {
		sidsideCloumn,
		headBar
	},
	created () {
		this.checkLoginStatus()
	},
	methods: {
		checkLoginStatus () {
			let now = new Date().getTime() / 1000
			let oldTime = parseInt(localStorage.getItem('loginTime') || 0) / 1000
			let token = localStorage.getItem('Authorization')

			if (((now - oldTime) > 7200) || !token) {
				this.$router.replace('/admin_management')
			}
		}
	}
}
</script>

<style lang="less" scoped>
.main-container {
    width: calc(100% - 160px);
    min-height: 100vh;
    margin-left: 160px;
    padding: 20px;
    padding-top: 80px;
    background: #f5f7fa;
    box-sizing: border-box;
	overflow: auto;
    .main-view {
        background: #fff;
        min-height: calc(100vh - 100px);
		min-width: 1020px;
    }
}
</style>
