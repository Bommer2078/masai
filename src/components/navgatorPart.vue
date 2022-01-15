<template>
	<div class="navgator-part flex-col">
		<div class="section1 flex-row">
			<div class="box1 flex-col" style="cursor: pointer;"  @click="gotoRout('/')"></div>
			<span class="txt1" style="cursor: pointer;" :class="{'active-nav': currentRote === '/box_list' || currentRote === '/box_detail'}" @click="gotoRout('/box_list')">Blind box</span>
			<span class="word1" :class="{'active-nav': currentRote === '/my_market'}">Market</span>
			<img
				class="label1"
				referrerpolicy="no-referrer"
				src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng612ba46beecdabb8b5376113999a865681954869a7f0f15fc9bda34e8a7d54bb"
			/>
			<span class="txt2" :class="{'active-nav': currentRote === '/my_package' || currentRote === '/my_box_detail'}" @click="gotoRout('/my_package')">My backpack</span>
			<img
				class="label2"
				referrerpolicy="no-referrer"
				src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4daef83faf38ece40b3562a5334283675583acf4ce02e8d77fb7206ee91b4a73"
			/>
			<span class="word2" id="connectButton" @click="connectWallet">Connect Wallet</span>
		</div>
		<wallent-connect-box :showLinkWallentBox.sync="showLinkWallentBox"></wallent-connect-box>
	</div>
</template>

<script>
export default {
	data () {
		return {
			currentRote       : '',
			showLinkWallentBox: false
		}
	},
	mounted () {
		this.currentRote = this.$route.path
		if (sessionStorage.getItem('currentWallet')) {
			this.connectWallet()
		}
	},
	methods: {
		async connectWallet () {
			if (!sessionStorage.getItem('currentWallet')) {
				this.showLinkWallentBox = true
			} else {
				this.$connectWallet()
			}
		},
		gotoRout (rou) {
			if (this.currentRote === rou) return
			if (rou === '/my_package') {
				let val = sessionStorage.getItem('currentWallet') || null

				if (val) {
					this.$router.replace(rou)
				} else {
					alert('link you wallet first!')
				}
			} else {
				this.$router.replace(rou)
			}
		}
	}
}
</script>

<style scoped lang="less">
.navgator-part {
      height: 74px;
      background-color: rgba(2, 2, 2, 1);
      width: 1920px;
      padding: 17px 0 0 240px;
      .section1 {
        width: 1420px;
        height: 42px;
        .box1 {
          width: 188px;
          height: 42px;
          background: url(../../static/img/demo/SketchPngf56cecf6a3dde1390dc1bf066aec3ef691bb2722b3db7138a133ce2ead0ac379.png) -1px -1px
            no-repeat;
        }
        .txt1 {
          width: 64px;
          height: 14px;
          display: block;
          overflow-wrap: break-word;
          color: rgba(204, 204, 204, 1);
          font-size: 14px;
          font-family: ArialMT;
          white-space: nowrap;
          line-height: 14px;
          text-align: left;
          margin: 14px 0 0 336px;
        }
        .word1 {
          width: 43px;
          height: 14px;
          display: block;
          overflow-wrap: break-word;
          color: rgba(204, 204, 204, 1);
          font-size: 14px;
          font-family: ArialMT;
          white-space: nowrap;
          line-height: 14px;
          text-align: left;
          margin: 14px 0 0 100px;
        }
        .label1 {
          width: 12px;
          height: 7px;
          margin: 18px 0 0 8px;
        }
        .txt2 {
			cursor: pointer;
          width: 88px;
          height: 14px;
          display: block;
          overflow-wrap: break-word;
          font-size: 14px;
          font-family: Arial-BoldMT;
          white-space: nowrap;
          line-height: 14px;
          text-align: left;
          margin: 14px 0 0 80px;color: #ccc;
        }
		.active-nav {
          color: rgba(212, 179, 93, 1);
		}
        .label2 {
          width: 14px;
          height: 13px;
          margin: 14px 0 0 395px;
        }
        .word2 {
		cursor: pointer;
          width: 82px;
          height: 14px;
          display: block;
          overflow-wrap: break-word;
          color: rgba(204, 204, 204, 1);
          font-size: 14px;
          font-family: ArialMT;
          white-space: nowrap;
          line-height: 14px;
          text-align: left;
          margin: 14px 0 0 10px;
        }
      }
    }
</style>
