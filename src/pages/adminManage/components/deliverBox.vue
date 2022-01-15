<template>
	<el-dialog
		title="修改密码"
		:visible.sync="dialogVisible"
		:show-close="false"
		width="30%">
		<el-form :model="ruleForm" :rules="rules" ref="elForm" label-width="100px" size="mini">
			<el-form-item label="快递公司：" prop="courierCompany">
				<div v-if="isEdit">{{editObj.courierCompany}}</div>
				<el-input v-else v-model="ruleForm.courierCompany" type="text" placeholder="请输入快递公司"></el-input>
			</el-form-item>
			<el-form-item label="快递单号：" prop="trackingNum">
				<div v-if="isEdit">{{editObj.trackingNum}}</div>
				<el-input v-else v-model="ruleForm.trackingNum" type="text" placeholder="请输入快递单号"></el-input>
			</el-form-item>
		</el-form>
		<span slot="footer" class="dialog-footer">
			<el-button type="primary" @click="deliverOrder">{{isEdit ? '修 改' : '保 存'}}</el-button>
			<el-button @click="handleCancel">{{canBack ? '返 回' : '关 闭'}}</el-button>
		</span>
	</el-dialog>
</template>

<script>
export default {
	props: {
		showBox: {
			type   : Boolean,
			default: false
		},
		editObj: {
			type: Object,
			default () {
				return null
			}
		}

	},
	data () {
		return {
			dialogVisible: false,
			isEdit       : false,
			canBack      : false,
			ruleForm     : {
				courierCompany: '',
				trackingNum   : ''
			},
			rules: {
				courierCompany: [
					{ required: true, message: '请填写快递公司', trigger: 'blur' }
				],
				trackingNum: [
					{ required: true, message: '请填写快递单号', trigger: 'blur' }
				]
			}
		}
	},
	watch: {
		showBox (newVal) {
			this.dialogVisible = newVal
		},
		editObj (newVal) {
			if (newVal) {
				this.isEdit = newVal.status === 'delivered'
			} else {
				this.isEdit = false
			}
		},
		dialogVisible (newVal) {
			if (!newVal) {
				this.$emit('update:showBox', newVal)
				this.initRuleForm()
			}
		}
	},
	methods: {
		deliverOrderXHR () {
			let params = {
				courierCompany: this.ruleForm.courierCompany,
				trackingNum   : this.ruleForm.trackingNum,
				orderId       : this.editObj.orderId
			}

			this.$http.post(this.$api.deliverOrder, params)
				.then((res) => {
					if (res.data.code === 200) {
						this.$message.info('发货成功')
						this.dialogVisible = false
						this.$emit('deliverOk')
					} else {
						this.$message.error(res.data.message)
					}
				})
		},
		deliverOrder () {
			if (this.isEdit) {
				this.isEdit = false
				this.canBack = true
				this.ruleForm.courierCompany = this.editObj.courierCompany
				this.ruleForm.trackingNum = this.editObj.trackingNum
				return
			}
			this.$refs.elForm.validate((valid) => {
				if (valid) {
					this.deliverOrderXHR()
				} else {
					console.log('error submit!!')
					return false
				}
			})
		},
		initRuleForm () {
			this.ruleForm = {
				trackingNum   : '',
				courierCompany: ''
			}
			this.canBack = false
			this.isEdit = false
		},
		handleCancel () {
			if (this.canBack) {
				this.canBack = false
				this.isEdit = true
			} else {
				this.dialogVisible = false
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
