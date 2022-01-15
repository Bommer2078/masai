<template>
	<div class="table-header">
		<t-button @clickBtn="createGoods">新建盲盒</t-button>
		<!-- <div class="left-part">
			<search-group ref="searchGroup" placeholder="请输入编号、盲盒名称搜索"></search-group>
		</div> -->
	</div>
</template>

<script>
export default {
	methods: {
		createGoods () {
			this.$EventBus.$emit('createGoods')
		}
	}
}
</script>

<style lang="less" scoped>
.table-header {
	padding: 20px;
	font-size: 0;
	.left-part {
		display: flex;
		float: right;
		.search-group {
			margin-left: 10px;
		}
		& /deep/ .el-select .el-input__inner{
			height: 36px;
		}
		.el-select + .el-select {
			margin-left: 10px;
		}
	}
}
</style>
