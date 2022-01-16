<template>
	<div class="loading-box" v-show="showLoadingBox">
		<div class="wallent-header">
			<span>{{loadingText}}</span>
		</div>
		<div class="wallent-box" v-if="errorInfo">
			<img style="margin-top: 20px;margin-bottom: 30px;" src="../../static/img/reminder.png">
			<span>{{errorInfo}}</span>
		</div>
		<div class="wallent-box" v-else>
			<img style="margin-top: 40px;margin-bottom: 30px;" src="../../static/img/loading.gif">
			<span>Waiting for wallet confirm</span>
		</div>
		<div class="close" @click="closeBox">
			<img src="../../static/img/close@2x.png">
		</div>
	</div>
</template>

<script>
export default {
	props: {
		showLoadingBox: {
			type   : Boolean,
			default: false
		},
		loadingText: {
			type   : String,
			default: ''
		},
		errorInfo: {
			type   : String,
			default: ''
		}
	},
	data () {
		return {
		}
	},
	methods: {
		closeBox () {
			this.$emit('update:showLoadingBox', false)
			this.$emit('update:errorInfo', '')
		}
	}
}
</script>

<style lang="less" scoped>
.loading-box {
	position: fixed;
	top: 30vh;
	z-index: 1001;width: 558px;
	top: 250px;
	left: 50%;
	transform: translateX(-279px);
	height: 317px;
	background: #1B1109;
	border-radius: 7px;
	border: 1px solid #4D3608;
	display: flex;
	align-items: center;
	flex-direction: column;
	.wallent-box {
		display: flex;
		align-items: center;
		flex-direction: column;
		color: #fff;
	}
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
		width: 558px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		background: #2D1D11;
		border-radius: 7px 7px 0px 0px;
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
