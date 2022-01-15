<template>
	<div class="t-button" :class="buttonType" :style="{'back-ground': bColor}" @click="clickBtn">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		buttonType: {
			type   : String,
			default: 'blue'
		},
		bColor: {
			type   : String,
			default: ''
		}
	},
	methods: {
		clickBtn () {
			this.$emit('clickBtn')
		}
	}
}
</script>

<style scoped lang="less">
.t-button {
    display: inline-block;
    min-width: 90px;
    height:36px;
    line-height:36px;
    padding-left:15px;
    padding-right:15px;
    text-align: center;
    font-size:14px;
    border-radius:2px;
    user-select:none;
    cursor: pointer;
    box-sizing: border-box;
}
.blue {
    color: #fff;
    background:#2A75ED;
    &:hover {
        background: #2e63dc;
    }
    &:active {
        background: #2e5ecb;
    }
}
.gray {
    color: #666;
    background:#FAFBFC;
    border:1px solid #eee;
    &:hover {
        background: #edeeef;
    }
    &:active {
        background: #e5e7eb;
    }
}
</style>
