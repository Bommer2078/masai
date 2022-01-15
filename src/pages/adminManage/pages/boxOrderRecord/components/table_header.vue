<template>
	<div class="table-header">
		<div class="left-part">
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	methods: {
	}
}
</script>

<style lang="less" scoped>
.table-header {
	padding: 20px;
	font-size: 0;
	.t-button + .t-button{
		margin-left: 10px;
	}
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
.setting-input {
	width: 240px;
	height: 36px;
	font-size: 14px;
	padding-left: 10px;
	background: rgba(255, 255, 255, 1);
	border-radius: 2px;
	border: 1px solid rgba(238, 238, 238, 1);
	box-sizing: border-box;
	margin-right: 10px;
	margin-left: 10px;
}
</style>
