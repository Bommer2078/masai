<template>
	<div class="table-container">
		<el-table
			:data="tableDateArr"
			style="width: 100%">
			<el-table-column
				align="center"
				prop="goodsId"
				label="图片">
			</el-table-column>
			<el-table-column
				align="center"
				prop="name"
				label="盲盒名称">
			</el-table-column>
			<el-table-column
				align="center"
				prop="amount"
				label="数量">
			</el-table-column>
			<el-table-column
				align="center"
				prop="limit_per_user"
				label="限购数量">
			</el-table-column>
			<el-table-column
				align="center"
				prop="price"
				label="单价">
			</el-table-column>
			<el-table-column
				align="center"
				prop="language"
				label="认购币种">
				<template slot-scope="scope">
					<span type="text">{{scope.row.currency | currencyText}}</span>
				</template>
			</el-table-column>
			<el-table-column
				align="center"
				prop="language"
				label="开始时间">
				<template slot-scope="scope">
					<span type="text">{{$utils.dateText(scope.row.start_time)}}</span>
				</template>
			</el-table-column>
			<el-table-column
				align="center"
				prop="language"
				label="结束时间">
				<template slot-scope="scope">
					<span type="text">{{$utils.dateText(scope.row.end_time)}}</span>
				</template>
			</el-table-column>
			<el-table-column
				align="center"
				prop="language"
				label="添加时间">
				<template slot-scope="scope">
					<span type="text">{{$utils.dateText(scope.row.create_time)}}</span>
				</template>
			</el-table-column>
			<el-table-column
				align="center"
				prop="language"
				label="盲盒奖励">
				<template slot-scope="scope">
					<span type="text">传说马{{scope.row.legendary_rate}}%</span>
					<span type="text">史诗马{{scope.row.epic_rate}}%</span>
					<span type="text">罕见马{{scope.row.rare_rate}}%</span>
					<span type="text">普通马{{scope.row.normal_rate}}%</span>
				</template>
			</el-table-column>
			<el-table-column
				class="option"
				align="right"
				label="操作"
				width="150">
				<template slot-scope="scope">
					<span type="text" class="setting-btn" @click="createOrEditGoods(scope.row)">修改</span>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			v-show="total > pageSize"
			align="center"
			style="margin-top:20px;"
			background
			@current-change="changePage"
			layout="prev, pager, next, jumper"
			:current-page="pageIndex"
			:page-size="pageSize"
			:total="total">
		</el-pagination>
		<goods-option-box
			:edit-obj="currentItem"
			:show-goods-option-box.sync="showGoodsOptionBox"
			@closeBox="closeBox"
			@createSuccess="getList"></goods-option-box>
	</div>
</template>

<script>
import goodsOptionBox from './goodsOptionBox.vue'
export default {
	components: {
		goodsOptionBox
	},
	data () {
		return {
			tableDateArr      : [],
			total             : 0,
			pageIndex         : 1,
			pageSize          : 10,
			searchContent     : '',
			showGoodsOptionBox: false,
			showContentBox    : false,
			currentItem       : null
		}
	},
	filters: {
		currencyText (val) {
			let text = ''

			switch (val) {
				case '1':
					text = 'HRW'
					break
				case '2':
					text = 'AVAX'
					break
				case '3':
					text = 'USDT'
					break

				default:
					text = 'USDT'
					break
			}
			return text
		},
		languageText (val) {
			return val === 'cn' ? '中文' : '英文'
		},
		showText (val) {
			return val === 'not_shown' ? '上架' : '下架'
		}
	},
	created () {
		this.getList()
		this.$nextTick(() => {
			this.$EventBus.$on('search', this.handleSearch)
			this.$EventBus.$on('createGoods', this.createOrEditGoods)
		})
	},
	destroyed () {
		this.$EventBus.$off('search')
		this.$EventBus.$off('createGoods')
	},
	methods: {
		closeBox () {
			this.currentItem = null
		},
		handleSearch (val) {
			this.searchContent = val
			this.pageIndex = 1
			this.getList()
		},
		changePage (val) {
			this.pageIndex = val
			this.getList()
		},
		getList () {
			this.$http.get(this.$api.getRound).then(({data}) => {
				if (data.status === 0) {
					this.tableDateArr = data.result
				} else {
					this.$message.error(data.message)
				}
			})
		},
		createOrEditGoods (obj) {
			if (obj) {
				this.currentItem = obj
			}
			this.showGoodsOptionBox = true
		},
		checkContent (obj) {
			this.currentItem = obj
			this.showContentBox = true
		},
		changeState (val) {
			const params = {
				goodsId: val.goodsId
			}
			let url = val.status === 'not_shown' ? this.$api.putGoods : this.$api.offGoods

			this.$http.post(url, params).then(({data}) => {
				if (data.code === 200) {
					this.$message.info('操作成功')
					this.getList()
				} else {
					this.$message.error(data.message)
				}
			})
		},
		preDelet (val) {
			this.$confirm('此操作将永久删除该项, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText : '取消',
				type             : 'warning'
			}).then(() => {
				this.deleteGoods(val)
			})
		},
		deleteGoods (val) {
			const params = {
				goodsId: val.goodsId
			}

			this.$http.post(this.$api.deleteGoods, params).then(({data}) => {
				if (data.code === 200) {
					this.$message.info('删除成功')
					this.getList()
				} else {
					this.$message.error(data.message)
				}
			})
		}
	}
}
</script>

<style lang="less" scoped>
.table-container {
    padding: 20px;
	.split {
		color: #409eff;
		margin-left: 10px;
		margin-right: 10px;
		user-select: none;
	}
	.setting-btn {
		color: #409eff;
		cursor: pointer;
		user-select: none;
	}
	.option {
		font-size: 0;
	}
	.img-compressed {
		max-width: 240px;
		width: 100%;
		height: 130px;
	}
	.dialog-footer {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
}
</style>
