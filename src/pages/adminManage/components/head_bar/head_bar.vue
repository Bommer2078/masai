<template>
	<div class="head-bar">
		<!-- <el-breadcrumb class="crumb" separator="/" >
			<template v-for="(item,index) in currentPath">
				<el-breadcrumb-item :to="item.route ? { path: item.route} : {}" :key="index" :replace="true">{{item.tip}}</el-breadcrumb-item>
			</template>
		</el-breadcrumb> -->
		<div></div>
		<div>
			<div class="admin-group">
				<div class="admin-info">
					<img src="../../assets/images/user_header.svg" class="user-head">
					<span>{{userName}}</span>
				</div>
				<el-select v-model="adminOption" class="admin-option">
					<!-- <el-option value="changePassWord" @click="changePassWord">
						修改密码
					</el-option> -->
					<el-option value="loginOut" @click="loginOut">
						退出登出
					</el-option>
				</el-select>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			crumbList  : [],
			adminOption: '', // 用来给select占位
			userName   : ''
		}
	},
	mounted () {
		this.userName = localStorage.getItem('userName')
	},
	computed: {
		currentPath () {
			let temp = this.crumbList.find((i) => {
				return this.$route.path.search(i.path) !== -1
			})

			return temp ? temp.crumbName : ''
		}
	},
	watch: {
		adminOption (val) {
			if (val) {
				this.handleOption(val)
			}
		}
	},
	methods: {
		handleOption (val) {
			this[ val ]()
			this.adminOption = ''
		},
		changePassWord () {
			this.$emit('showPasswordBox')
		},
		loginOut () {
			localStorage.removeItem('Authorization')
			setTimeout(() => {
				this.$router.replace('/admin_management')
			}, 500)
			this.$message.info('退出登录')
		}
	}
}
</script>

<style scoped lang="less">
.head-bar {
	user-select: none;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 160px;
    width: calc(100vw - 160px);
    height: 60px;
    background: #fff;
    padding-left: 20px;
    padding-right: 20px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    .crumb {
        line-height: 60px;
        color: #353535;
        font-size: 16px;
    }
    .login-out-btn {
		margin-right: 20px;
        line-height: 60px;
        color: #2A75ED;
        cursor: pointer;
	}
	& /deep/ .route-crumb {
		cursor: pointer;
	}
	.admin-group {
			position: relative;
		.admin-info {
			height: 60px;
			display: flex;
			align-items: center;
			flex-direction: row;
			position: absolute;
			z-index: 0;
			right: 0px;
			img {
				width: 30px;
				margin-right: 10px;
				border: 1px solid #eee;
				border-radius: 15px;
			}
		}
		.admin-option {
			width: 100px;
			position: absolute;
			right: 0;
			z-index: 1;
			& /deep/ input {
				visibility: hidden;
				opacity: 0;
			}
			& /deep/ .el-input__suffix {
				visibility: hidden;
				opacity: 0;
			}
		}
	}
}
</style>
