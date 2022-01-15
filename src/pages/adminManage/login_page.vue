<template>
	<div class="login-page">
		<div class="login-box">
			<img style="width:3840px;height:3320px;position:fixed;top:100px;" src="../../../static/img/horse02.png">
			<input type="text" v-model.trim="accountNum" placeholder="账号">
			<input type="password" v-model.trim="password" @keydown.enter="loginTest" placeholder="密码">
			<button class="login-btn" @click="loginTest">登录</button>
		</div>
		<footer class="footer-tip">—— copyright©2021 Horse ricing winner ——</footer>
	</div>
</template>

<script>
// import md5 from 'js-md5'
export default {
	data () {
		return {
			accountNum : '',
			password   : '',
			forbidClick: false
		}
	},
	methods: {
		loginTest () {
			if (this.forbidClick) {
				return
			}
			if (!this.checkInput()) {
				return
			}
			this.forbidClick = true
			setTimeout(() => {
				if (this.accountNum === 'admin' && this.password === '123456') {
					this.$message('登录成功')
					let now = new Date().getTime()

					localStorage.setItem('Authorization', 'dfdsgbczcibibfnzoxnobdooccasasfaghh')
					localStorage.setItem('loginTime', now)
					localStorage.setItem('userName', this.accountNum)
					sessionStorage.setItem('currentTreeKey', '')
					this.$router.push('/admin_page')
				} else {
					this.$message('账号或密码错误')
				}

				this.forbidClick = false
			}, 1500)
		},
		handleLogin () {
			if (this.forbidClick) {
				return
			}
			if (!this.checkInput()) {
				return
			}
			this.forbidClick = true
			const params = {
				username: this.accountNum,
				// password: md5(this.password)
				password: this.password
			}

			this.$http.post(this.$api.loginTo, params).then(
				(res) => {
					if (res.data.code === 200) {
						let now = new Date().getTime()

						localStorage.setItem('Authorization', res.data.data)
						localStorage.setItem('loginTime', now)
						localStorage.setItem('userName', this.accountNum)
						sessionStorage.setItem('currentTreeKey', '')
						this.$message('登录成功')
						this.$router.push('/')
					} else {
						this.$message.error(res.data.message)
					}
				}
			).finally(() => {
				setTimeout(() => {
					this.forbidClick = false
				}, 3000)
			})
		},
		checkInput () {
			if (this.accountNum === '') {
				this.$message.error('账号不能为空')
				return false
			}
			if (this.password === '') {
				this.$message.error('密码不能为空')
				return false
			}
			return true
		}
	}
}
</script>

<style lang="less" scoped>
.login-page{
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100vh;
	color: #353535;
	background:rgba(127,127,127,1);
	.title {
		display: flex;
		flex-direction: row;
		margin-bottom: 15px;
		h3 {
			font-size: 24px;
			font-weight: 700;
			margin: 0;
		}
	}
	.tip {
		font-size: 16px;
		color: #666666;
		margin-bottom: 40px;
	}
	.login-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		width:100vw;
		padding-top: 300px;
		background:rgba(127,127,127,1);
		.box-title {
			font-size: 16px;
			margin-bottom: 30px;
		}
		input {
			width: 260px;
			border: none;
            font-size: 14px;
			line-height: 30px;
			padding-left: 20px;
			padding-right: 20px;
			margin-bottom: 20px;
			border-radius: 6px;
			border-bottom: 1px solid #eee;
			z-index: 1001;
		}
		.login-btn {
			z-index: 1001;
			width: 300px;
			height: 36px;
			line-height: 36px;
			font-size: 16px;
			text-align: center;
			border-radius: 6px;
			cursor: pointer;
			color: #fff;
			margin-top: 20px;
			background-color: rgba(24,144,255,1);
			outline: none;
			transition: all 100ms ease;
			&:hover {
				background-color: #136ffe;
			}
		}
	}
	.footer-tip {
		position: fixed;
		bottom: 10px;
		font-size: 14px;
		color: #fff;
		background:rgba(127,127,127,1);
	}
}
</style>
