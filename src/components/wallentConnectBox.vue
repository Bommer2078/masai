<template>
	<div class="status-box" v-show="showLinkWallentBox">
		<div class="wallent-header">
			<span>Connect wallet</span>
		</div>
		<div class="wallent-box">
			<div class="wallent-content">Connecting to the wallet means that you agree and confirm that you have read and understood the terms of service of the Horse richin winner agreement</div>
			<div class="select-status" :class="{'loading-status': wallentLoading}" v-if="currentSelectWallent">
				<template  v-if="wallentLoading">
					<span>initializing…</span>
				</template>
				<template v-else>
					<span>connection error</span>
					<div class="try-button">Try again</div>
				</template>
			</div>
			<div class="wallen-type" v-show="currentSelectWallent !== 'WalletConnect'" :class="{'uninstall-style': !hasMetaWallent}" @click="choseWallent('METAMASK')">
				<span>METAMASK</span>
				<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd638cb4d9e96a395c93887d282fc71d6658677af545ae3530ebd30103320296b">
			</div>
			<!-- <div class="wallen-type" v-show="currentSelectWallent !== 'METAMASK'" :class="{'uninstall-style': !hasWalletConnect}" @click="choseWallent('WalletConnect')">
				<span>WalletConnect</span>
				<img src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4f7b1523692150699da6f8f8d07bf7d4c0ed8773105bf03c48f9fb2d90e28ae3">
			</div> -->
		</div>
		<div class="close" @click="closeWallentBox">
			<img src="../../static/img/close@2x.png">
		</div>
	</div>
</template>

<script>
export default {
	props: {
		showLinkWallentBox: {
			type   : Boolean,
			default: false
		}
	},
	data () {
		return {
			hasMetaWallent      : true,
			hasWalletConnect    : false,
			wallentLoading      : true,
			currentSelectWallent: ''
		}
	},
	methods: {
		closeWallentBox () {
			this.$emit('update:showLinkWallentBox', false)
		},
		choseWallent (type) {
			this.currentSelectWallent = type
		}
	}
}
</script>

<style lang="less" scoped>
.status-box {
	position: fixed;
	top: 30vh;
	z-index: 1001;width: 478px;
	top: 80px;
	right: 220px;
	height: 400px;
	background: #1B1109;
	border-radius: 7px;
	border: 1px solid #4D3608;
	display: flex;
	align-items: center;
	flex-direction: column;
	.uninstall-style {
		color: rgba(212, 179, 93, 1) !important;
	}
	.select-status {
		width: 378px;
		height: 64px;
		border-radius: 10px;
		border: 1px solid #FC3535;
		margin-bottom: 30px;
		display: flex;
		align-items: center;
		color: #FC3535;
		justify-content: space-between;
		padding-left: 20px;
		padding-right: 20px;
		font-size: 18px;
		.try-button {
			width: 90px;
			height: 32px;
			line-height: 32px;
			text-align: center;
			border-radius: 4px;
			border: 1px solid #D4B35D;
			font-size: 14px;
			font-family: ArialMT;
			color: #D4B35D;
			cursor: pointer;
		}
	}
	.loading-status {
		color: #fff !important;
		border: 1px solid #FFFFFF !important;
	}
	.wallent-header {
		width: 477px;
		height: 60px;
		line-height: 60px;
		background: #2D1D11;
		border-radius: 7px 7px 0px 0px;
		padding-left: 20px;
		font-size: 18px;
		color:#fff;
		margin-bottom: 25px;
	}
	.wallent-content {
		width: 375px;
		color: #fff;
		font-size: 15px;
		line-height: 22px;
		margin-bottom: 30px;
	}
	.wallen-type + .wallen-type {
		margin-top: 30px;
	}
	.wallen-type {
		width: 378px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 21px;
		padding-right: 21px;
		font-size: 16px;
		color: #fff;
		background: #322922;
		border-radius: 10px;
		cursor: pointer;
		&:hover {
			border: 1px solid #FFFFFF;
		}
		img {
			width: 45px;
		}
	}
	.close {
		position: absolute;
		right: 20px;
		top: 20px;
		width: 16px;
		height: 16px;
		font-size: 0;
		cursor: pointer;
		img {
			width: 16px;
			height: 16px;
		}
	}
}
</style>
