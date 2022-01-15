<template>
	<div class="table-container">
		<el-table
			:data="tableDateArr"
			style="width: 100%">
			<el-table-column
				prop="itemName"
				label="盲盒ID"
				min-width="15%">
			</el-table-column>
			<el-table-column
				prop="itemName"
				label="马匹ID"
				min-width="15%">
			</el-table-column>
			<el-table-column
				prop="itemName"
				label="稀有度"
				min-width="15%">
			</el-table-column>
			<el-table-column
				prop="buyer"
				label="用户地址"
				min-width="15%">
			</el-table-column>
			<el-table-column
				prop="sell_round"
				label="盲盒名称"
				min-width="15%">
			</el-table-column>
			<el-table-column
				prop="price"
				label="单价"
				min-width="15%">
			</el-table-column>
			<el-table-column
				prop="itemName"
				label="购买时间"
				min-width="15%">
				<template slot-scope="scope">
					<span>{{$utils.dateText(scope.row.transaction_time) }}</span>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination
			v-show="total > pageSize"
			align="center"
			style="margin-top:20px;"
			background
			@current-change="changePage"
			layout="prev, pager, next"
			:current-page="pageIndex"
			:page-size="pageSize"
			:total="total">
		</el-pagination>
	</div>
</template>

<script>
export default {
	data () {
		return {
			tableDateArr : [],
			total        : 0,
			pageIndex    : 1,
			pageSize     : 10,
			forbidClick  : false,
			searchContent: ''
		}
	},
	created () {
		this.$nextTick(() => {
			this.$EventBus.$on('reflashBlindBox', this.getList)
		})
	},
	mounted () {
		this.getList()
	},
	destroyed () {
		this.$EventBus.$off('reflashBlindBox')
	},
	computed: {
		dictionaryId () {
			return this.$route.query.dictionaryId
		}
	},
	watch: {
		dictionaryId (newVal) {
			if (newVal) {
				this.getList()
			}
		}
	},
	methods: {
		changePage (val) {
			this.pageIndex = val
			this.getList()
		},
		handleDictionaryChange (val) {
			this.dictionaryId = val
			this.pageIndex = 1
			this.getList()
		},
		getList () {
			this.$http.get(this.$api.getTransaction).then(({data}) => {
				if (data.status === 0) {
					this.tableDateArr = data.result
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
		width: 240px;
		height: 130px;
	}
}
</style>
