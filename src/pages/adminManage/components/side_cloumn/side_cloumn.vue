<template>
	<div class="side-clomun">
		<div class="title-box">
			<!-- <img src="../../../static/logo.png"> -->
		</div>
		<template>
			<el-tree
				ref="sideTree"
				:data="clomunArr"
				node-key="nodeKey"
				:default-expanded-keys="[currentTreeKey]"
				:props="defaultProps"
				:highlight-current="true"
				@node-click="handleNodeClick"
				accordion></el-tree>
		</template>
	</div>
</template>
<script>
import sideClomunDate from '../../mixin/side_clomun_arr.js'
export default {
	mixins: [ sideClomunDate ],
	data () {
		return {
			currentTreeKey : '',
			configClomunArr: [],
			roleScope      : []
		}
	},
	created () {
		this.initCurrentTree()
	},
	mounted () {
		this.getAdminInfoByToken()
	},
	methods: {
		getAdminInfoByToken () {
			// this.$http.post(this.$api.getAdminInfoByToken).then(
			// 	(res) => {
			// 		if (res.data.code === 200) {
			// 			localStorage.setItem('userName', res.data.data.username)
			// 			this.roleScope = res.data.data.roleScope
			// 			this.changeRoleScope(this.roleScope)
			// 		} else {
			// 			this.$message.error(res.data.message)
			// 		}
			// 	}
			// )
		},
		/**
         * 单页应用在刷新后仍然保留侧边栏的选中状态
         */
		changeRoleScope (arr) {
			let tempArr = this.clomunArr.map((node) => {
				console.log(node.children)
				if (node.children) {
					let children = node.children.filter((el) => {
						return arr.indexOf(el.nodeKey) >= 0
					})

					if (children.length > 0) {
						node.children = children
						return node
					}
					return null
				}
				if (arr.indexOf(node.nodeKey) >= 0) {
					return node
				}
				return null
			})

			this.configClomunArr = tempArr.filter((el) => {
				return !!el
			})
		},
		initCurrentTree () {
			const temp = sessionStorage.getItem('currentTreeKey')

			this.$nextTick(() => {
				this.$refs.sideTree.setCurrentKey(temp)
				this.currentTreeKey = temp
			})
		},
		handleNodeClick (res) {
			sessionStorage.setItem('currentTreeKey', res.nodeKey)
			this.currentTreeKey = res.nodeKey
			if (res.routerLink) {
				this.$router.push(res.routerLink, () => {})
			}
		}
	}
}
</script>

<style lang="less" scoped>
.side-clomun {
	position: fixed;
	left: 0;
	width: 160px;
	height: 100vh;
	background: #38384A;
	.title-box {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 73px;
		color: #fff;
		font-size: 16px;
		font-weight: 700;
		img {
			width: 100%;
		}
	}
	.el-tree {
		background: #38384A;
		& /deep/ .el-tree-node__content {
			height: 40px;
			color: #fff;
		}
		& /deep/ .el-tree-node__content:hover {
			background-color: rgb(116, 172, 231);
			color: #eee;
		}
		& /deep/ .el-tree-node:focus>.el-tree-node__content {
			background-color: #2A75ED;
        }
        & /deep/ .is-current>.el-tree-node__content {
            background-color: #2A75ED;
        }
	}
}
</style>
