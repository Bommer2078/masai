<template>
	<el-dialog
		title="修改密码"
		:visible.sync="dialogVisible"
		:show-close="false"
		width="30%">
		<el-form :model="ruleForm" :rules="rules" ref="elForm" label-width="100px" size="mini">
			<el-form-item label="旧密码：" prop="oldPassword">
				<el-input v-model="ruleForm.oldPassword" type="password" placeholder="请输入旧密码"></el-input>
			</el-form-item>
			<el-form-item label="新密码：" prop="newPassword">
				<el-input v-model="ruleForm.newPassword" type="password" placeholder="请输入新密码"></el-input>
			</el-form-item>
			<el-form-item label="再次输入：" prop="rePassword">
				<el-input v-model="ruleForm.rePassword" type="password" placeholder="请再次输入新密码"></el-input>
			</el-form-item>
		</el-form>
		<span slot="footer" class="dialog-footer">
			<el-button type="primary" @click="changePassWord">保 存</el-button>
			<el-button @click="dialogVisible = false">关 闭</el-button>
		</span>
	</el-dialog>
</template>

<script>
export default {
	props: {
		showBox: {
			type   : Boolean,
			default: false
		}
	},
	data () {
		return {
			dialogVisible: false,
			ruleForm     : {
				oldPassword: '',
				newPassword: '',
				rePassword : ''
			},
			rules: {
				oldPassword: [
					{ required: true, message: '请填写旧密码', trigger: 'blur' }
				],
				newPassword: [
					{ required: true, validator: this.validatePass, trigger: 'blur' }
				],
				rePassword: [
					{ required: true, validator: this.validatePass2, trigger: 'blur' }
				]
			}
		}
	},
	watch: {
		showBox (newVal) {
			this.dialogVisible = newVal
		},
		dialogVisible (newVal) {
			if (!newVal) {
				this.$emit('update:showBox', newVal)
				this.initRuleForm()
			}
		}
	},
	methods: {
		changePassWordXHR () {
			let params = {
				oldPassword: this.ruleForm.oldPassword,
				newPassword: this.ruleForm.newPassword
			}

			this.$http.post(this.$api.changeAdminPassWord, params)
				.then((res) => {
					if (res.data.code === 200) {
						this.$message.info('修改成功')
						this.dialogVisible = false
					} else {
						this.$message.error(res.data.message)
					}
				})
		},
		changePassWord () {
			this.$refs.elForm.validate((valid) => {
				if (valid) {
					this.changePassWordXHR()
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		initRuleForm () {
			this.ruleForm = {
				oldPassword: '',
				newPassword: '',
				rePassword : ''
			}
		},
		validatePass (rule, value, callback) {
			if (value === '') {
				callback(new Error('请输入密码'))
			} else {
				if (this.ruleForm.rePassword !== '') {
					this.$refs.elForm.validateField('rePassword')
				}
				callback()
			}
		},
		validatePass2  (rule, value, callback) {
			if (value === '') {
				callback(new Error('请再次输入密码'))
			} else if (value !== this.ruleForm.rePassword) {
				callback(new Error('两次输入密码不一致!'))
			} else {
				callback()
			}
		}
	}
}
</script>

<style lang="less" scoped>
    .user-info {
		padding-top: 10px;
		margin-bottom: 10px;
		.user-content,.no-data {
			width: 100%;
			height: 100px;
		}
		.user-content {
			display: flex;
			align-items: center;
			.user-header {
				width: 60px;
				height: 60px;
				border:1px solid #eee;
				border-radius: 50%;
				margin-left: 10px;
				margin-right: 10px;
			}
		}
		.no-data {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			background: #eee;
		}
	}
	.dialog-footer{
		display: flex;
		align-items: center;
		justify-content: center;
		.el-button + .el-button {
			margin-left: 30px;
		}
	}
    /deep/ .el-dialog__body {
		padding-top:0;
		padding-bottom:0;
	}
	.cover-img-info {
		float: right;
		p {margin: 0;}
	}
	.cover-img-box {
		height:112px;
		background:rgba(247,248,249,1);
		img {
			height:112px;
		}
	}
	.cover-img-box,
	.cover-img-option {
		display: inline-block;
		vertical-align: top;
		position: relative;
	}
</style>
