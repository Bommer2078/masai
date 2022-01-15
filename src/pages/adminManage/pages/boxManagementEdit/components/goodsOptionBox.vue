<template>
	<el-dialog
		title="新增盲盒"
		:visible.sync="dialogVisible"
		:show-close="false"
		width="700px">
		<el-form :model="ruleForm" :rules="rules" ref="elForm" label-width="140px" size="mini">
			<!-- <el-form-item label="*banner：" prop="photos">
				<img-group :img-list.sync="ruleForm.photos"></img-group>
			</el-form-item>
			<el-form-item label="*盲盒图片：" prop="photos">
				<img-group :img-list.sync="ruleForm.photos"></img-group>
			</el-form-item> -->
			<el-form-item label="*盲盒名称：" prop="name">
				<el-input v-model="ruleForm.name" placeholder="请输入盲盒名称"  style="width: 300px;" ></el-input>
			</el-form-item>
			<el-form-item label="*盲盒数量：" prop="amount">
				<el-input v-model="ruleForm.amount" placeholder="请输入盲盒数量"  style="width: 300px;"  type="number"></el-input>
			</el-form-item>
			<el-form-item label="*限购数量：" prop="limit_per_user">
				<el-input v-model="ruleForm.limit_per_user" placeholder="请输入限购数量"  style="width: 300px;"  type="number"></el-input>
			</el-form-item>
			<el-form-item label="*单价：" prop="price">
				<el-input v-model="ruleForm.price" placeholder="请输入单价"   style="width: 300px;" type="number"></el-input>
			</el-form-item>
			<el-form-item label="*认购币种：" prop="currency">
				<el-select v-model="ruleForm.currency" placeholder="请选择">
					<el-option
						v-for="item in coinList"
						:key="item.id"
						:label="item.name"
						:value="item.id">
					</el-option>
			</el-select></el-form-item>
			<el-form-item label="*时间范围" prop="start_time">
				<el-date-picker
					v-model="timer"
					@change="handleTimeChange"
					type="datetimerange"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="*传说马比例：" prop="legendary_rate">
				<el-input v-model="ruleForm.legendary_rate" placeholder="请输入传说马比例" style="width: 300px;" type="number"></el-input><span> %</span>
			</el-form-item>
			<el-form-item label="*史诗马比例：" prop="epic_rate">
				<el-input v-model="ruleForm.epic_rate" placeholder="请输入史诗马比例" style="width: 300px;" type="number"></el-input><span> %</span>
			</el-form-item>
			<el-form-item label="*罕见马比例：" prop="rare_rate">
				<el-input v-model="ruleForm.rare_rate" placeholder="请输入罕见马比例" style="width: 300px;" type="number"></el-input><span> %</span>
			</el-form-item>
			<el-form-item label="*普通马比例：" prop="normal_rate">
				<el-input v-model="ruleForm.normal_rate" placeholder="请输入普通马比例" style="width: 300px;" type="number"></el-input><span> %</span>
			</el-form-item>
		</el-form>
		<!-- <rich-text-editor></rich-text-editor> -->
		<span slot="footer" class="dialog-footer">
			<el-button type="primary" @click="saveOption">确 定</el-button>
			<el-button @click="dialogVisible = false">关 闭</el-button>
		</span>
	</el-dialog>
</template>

<script>
import imgGroup from '../../../components/common/imgGroup.vue'
// import E from 'wangeditor'
// import uploadImg from '../../../libs/upload.js'
export default {
	props: {
		editObj: {
			type: Object,
			default () {
				return null
			}
		},
		showGoodsOptionBox: {
			type   : Boolean,
			default: false
		}
	},
	components: {
		imgGroup
		// richTextEditor
	},
	data () {
		return {
			userInfo     : null,
			value1       : '',
			editor       : null,
			dialogVisible: false,
			initEditFlag : false,
			selected     : 1,
			startTime    : 0,
			endTime      : 0,
			timer        : null,
			coinList     : [ {
				id  : 1,
				name: 'HRW'
			}, {
				id  : 2,
				name: 'AVAX'
			}, {
				id  : 3,
				name: 'USDT'
			} ],
			ruleForm: {
				name          : '',
				amount        : '',
				limit_per_user: '',
				price         : '',
				currency      : '',
				timer         : '',
				legendary_rate: '',
				epic_rate     : '',
				rare_rate     : '',
				normal_rate   : ''
			},
			rules: {}
		}
	},
	watch: {
		showGoodsOptionBox (newVal) {
			this.dialogVisible = newVal
			if (newVal && !this.initEditFlag) {
				this.initEditFlag = true
				// this.initEditor()
			}
		},
		dialogVisible (newVal) {
			if (!newVal) {
				this.initForm()
				this.$emit('update:showGoodsOptionBox', newVal)
			}
		},
		editObj (newVal) {
			if (newVal) {
				this.ruleForm = {
					name          : newVal.name,
					amount        : newVal.amount,
					currency      : Number(newVal.currency),
					limit_per_user: newVal.limit_per_user,
					price         : newVal.price,
					legendary_rate: newVal.legendary_rate,
					epic_rate     : newVal.epic_rate,
					rare_rate     : newVal.rare_rate,
					normal_rate   : newVal.normal_rate
				}
			}
		}
	},
	methods: {
		handleTimeChange (timeArr) {
			this.startTime = new Date(timeArr[0]).getTime()
			this.endTime = new Date(timeArr[1]).getTime()
		},
		initForm () {
			this.ruleForm = {
				name          : '',
				amount        : '',
				limit_per_user: '',
				price         : '',
				currency      : '',
				timer         : '',
				legendary_rate: '',
				epic_rate     : '',
				rare_rate     : '',
				normal_rate   : ''
			}

			this.$emit('closeBox')
		},
		getNewHtml (val) {
			this.ruleForm.content = val
		},
		saveOption () {
			let params = {
				name          : this.ruleForm.name,
				amount        : this.ruleForm.amount,
				limit_per_user: this.ruleForm.limit_per_user,
				currency      : String(this.ruleForm.currency),
				price         : this.ruleForm.price,
				legendary_rate: this.ruleForm.legendary_rate,
				epic_rate     : this.ruleForm.epic_rate,
				rare_rate     : this.ruleForm.rare_rate,
				normal_rate   : this.ruleForm.normal_rate,
				start_time    : this.startTime,
				end_time      : this.endTime
			}
			let url = ''
			let text = ''

			if (this.editObj) {
				url = this.$api.createRound
				text = '修改成功'
				params.id = this.editObj.id
			} else {
				url = this.$api.createRound
				text = '创建成功'
			}

			this.$http.post(url, params)
				.then((res) => {
					if (res.data.status === 0) {
						this.$message.info(text)
						this.dialogVisible = false
						this.$emit('createSuccess')
					} else {
						this.$message.error(res.data.message)
					}
				})
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
	p {
		margin: 0;
	}
</style>
