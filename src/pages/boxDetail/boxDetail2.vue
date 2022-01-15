<template>
	<div class="page flex-col" id="zoomDom1">
		<div class="layer1 flex-col justify-between">
			<navgator-part></navgator-part>
			<div class="section3 flex-col">
				<div class="outer2 flex-row">
					<div class="box1 flex-col">
						<div class="bd1 flex-row justify-between">
							<img
								class="icon1"
								referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf66eb6e7b76953797e9995e4d428a018c3ee9abe3b17123bd85bee1e20854148"
							/>
							<span class="txt2" @click="gotoRout('/my_package')">return</span>
						</div>
					</div>
					<div class="box2 flex-col justify-between">
						<span class="info3">auction&nbsp;Information</span>
						<span class="txt3">basic&nbsp;information:</span>
					</div>
					<img
						class="img1"
						referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnge672dc8641bf5424ef3a6dc4cc8ff8b3177ef7b7f6e2664b18adc7ca77cee7bb"
					/>
				</div>
				<div class="outer3 flex-col">
					<div class="bd2 flex-col justify-between">
						<div class="layer2 flex-row justify-between">
							<span class="txt4">price:</span>
							<span class="word2">5 AVAX</span>
						</div>
						<div class="layer3 flex-col justify-center"><span class="word3">Soon</span></div>
					</div>
				</div>
				<div class="outer4 flex-col justify-center align-center">
					<div class="group1 flex-col">
						<div class="layer4 flex-col">
							<div class="section4 flex-col justify-center align-center">
								<img
									class="img2"
									referrerpolicy="no-referrer"
									src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng3907172c4447cb0f09997a8c8fe0b5345dc6906b95ed7091292db903e15b7886"
								/>
							</div>
						</div>
					</div>
				</div>
				<div class="outer5 flex-col">
					<div class="section5 flex-col">
						<!-- <span class="word4">#09754541221</span> -->
						<div class="bd3 flex-row justify-between">
							<span class="word5">Owner:</span>
							<span class="info4">{{Owner}}</span>
						</div>
						<span class="word6">Describe:</span>
						<span class="word7">
							Probability&nbsp;of&nbsp;the&nbsp;following&nbsp;horses&nbsp;drawn&nbsp;in&nbsp;this&nbsp;blind&nbsp;box
						</span>
						<div class="bd4 flex-row justify-between">
							<span class="word8">Legendary&nbsp;horse:</span>
							<span class="word9">2%</span>
						</div>
						<div class="bd5 flex-row justify-between">
							<span class="info5">Epic&nbsp;Horse:</span>
							<span class="info6">10%</span>
						</div>
						<div class="bd6 flex-row justify-between">
							<span class="word10">Rare&nbsp;horse:</span>
							<span class="txt5">25%</span>
						</div>
						<div class="bd7 flex-row justify-between">
							<span class="word11">Normal&nbsp;horse:</span>
							<span class="txt6">63%</span>
						</div>
					</div>
				</div>
				<div class="outer6 flex-col">
					<div class="layer5 flex-row">
						<img
							class="pic2"
							referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfef6c2d93590f12b663636bd3d6d42c5bb53751b5906e6d9d18971b1605e987d"
						/>
						<img
							@click="openLink('twitter')"
							class="icon2"
							referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng741f592d4ac3f5572ea63a8d67b93a1530deff482fc99d844317194be7075ac7"
						/>
						<img
							@click="openLink('telegram')"
							class="label2"
							referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6ec6b6b1ff53d71dd17abc9019ae1f6e23040a16830de24cd5350e28f4a64677"
						/>
						<img
							@click="openLink('discord')"
							class="icon3"
							referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng12f683a97c9076f7f0f73d7858d75d0f0ff7bb79fe4a095a6745695556cd9f6a"
						/>
					</div>
					<div class="layer6 flex-row"><span class="word12">&#64;2022&nbsp;Horsefi.games</span></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	data () {
		return {
			constants: {},
			Owner    : ''
		}
	},
	mounted () {
		let dom = document.getElementById('connectButton')

		dom.innerText = localStorage.getItem('showAdress') || 'connect'
		this.Owner = localStorage.getItem('walletAdress') || ''
		this.zoomDom()
	},
	methods: {
		openLink (type) {
			switch (type) {
				case 'twitter':
					window.open('https://twitter.com/horse_gamefi')
					break
				case 'telegram':
					window.open('https://t.me/Horse_gamefi')
					break
				case 'discord':
					window.open('https://discord.gg/n8YmNEvmdQ')
					break

				default:
					break
			}
		},
		gotoRout (rou) {
			if (rou === '/my_package') {
				let val = localStorage.getItem('showAdress') || null

				if (val) {
					this.$router.replace(rou)
				} else {
					alert('connect wallet first')
				}
			} else {
				this.$router.replace(rou)
			}
		},
		zoomDom () {
			this.devicewidth = document.documentElement.clientWidth
			let zoomDom = document.getElementById('zoomDom1')

			if (this.devicewidth > 716) {
				let num = Number(this.devicewidth / 1920).toFixed(2)

				zoomDom.style.zoom = num
			}
		}
	}
}
</script>
<style lang="less" scoped>
.page {
  position: relative;
  width: 1920px;
  height: 1314px;
  overflow: hidden;
  .layer1 {
    width: 1920px;
    height: 1314px;
    .section1 {
      height: 74px;
      background-color: rgba(2, 2, 2, 1);
      padding-top: 17px;
      width: 1920px;
      .outer1 {
        width: 1440px;
        height: 42px;
        .section2 {
          width: 188px;
          height: 42px;
          background: url(../../../static/img/demo/SketchPngf56cecf6a3dde1390dc1bf066aec3ef691bb2722b3db7138a133ce2ead0ac379.png) -1px -1px
            no-repeat;
        }
        .word1 {
          width: 64px;
          height: 14px;
          display: block;
          overflow-wrap: break-word;
          color: rgba(212, 179, 93, 1);
          font-size: 14px;
          font-family: Arial-BoldMT;
          white-space: nowrap;
          line-height: 14px;
          text-align: left;
          margin: 14px 0 0 338px;
        }
        .txt1 {
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
        .info1 {
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
          margin: 14px 0 0 100px;
        }
        .label1 {
          width: 14px;
          height: 13px;
          margin: 14px 0 0 419px;
        }
        .info2 {
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
    .section3 {
      z-index: 2;
      height: 1240px;
      background: url(../../../static/img/demo/SketchPngdd30f4721253f36c34b96c2f1317f31676b596b888d764104d63860486732e80.png)
        100% no-repeat;
      width: 1920px;
      position: relative;
      .outer2 {
        width: 1919px;
        height: 1240px;
        .box1 {
          height: 854px;
          background: url(../../../static/img/demo/SketchPng0ff2ca78d1db2fd143a51f2745a13e4e29dd3b1e4211a9b57dec4d4a8dba846a.png)
            100% no-repeat;
          width: 457px;
          padding: 40px 0 0 240px;
          .bd1 {
            width: 91px;
            height: 14px;
            .icon1 {
              width: 7px;
              height: 12px;
              margin-top: 1px;
            }
            .txt2 {
              width: 74px;
              height: 14px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(212, 179, 93, 1);
              font-size: 14px;
              font-family: ArialMT;
              white-space: nowrap;
              line-height: 14px;
              text-align: left;
            }
          }
        }
        .box2 {
          width: 248px;
          height: 273px;
          margin: 151px 0 0 503px;
          .info3 {
            width: 248px;
            height: 20px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 20px;
            font-family: Arial-BoldMT;
            white-space: nowrap;
            line-height: 20px;
            text-align: left;
          }
          .txt3 {
            width: 208px;
            height: 20px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 20px;
            font-family: Arial-BoldMT;
            white-space: nowrap;
            line-height: 20px;
            text-align: left;
            margin-top: 233px;
          }
        }
        .img1 {
          width: 418px;
          height: 923px;
          margin: 317px 0 0 293px;
        }
      }
      .outer3 {
        z-index: 159;
        height: 183px;
        border-radius: 10px;
        border: 1px solid rgba(77, 54, 8, 1);
        background-color: rgba(27, 15, 5, 1);
        width: 720px;
        position: absolute;
        left: 960px;
        top: 191px;
        padding: 30px 0 0 29px;
        .bd2 {
          width: 265px;
          height: 102px;
          .layer2 {
            width: 265px;
            height: 20px;
            .txt4 {
              width: 55px;
              height: 20px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(212, 179, 93, 1);
              font-size: 18px;
              font-family: Arial-BoldMT;
              white-space: nowrap;
              line-height: 20px;
              text-align: left;
            }
            .word2 {
              width: 200px;
              height: 14px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 14px;
              font-family: Arial-BoldMT;
              white-space: nowrap;
              line-height: 14px;
              text-align: left;
              margin-top: 5px;
            }
          }
          .layer3 {
            height: 32px;
            border-radius: 4px;
            background-color: rgba(212, 179, 93, 1);
            margin-top: 50px;
            padding-left: 98px;
            width: 220px;
            .word3 {
				cursor: not-allowed;
              width: 25px;
              height: 16px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(40, 40, 40, 1);
              font-size: 14px;
              font-family: ArialMT;
              white-space: nowrap;
              line-height: 16px;
              text-align: left;
            }
          }
        }
      }
      .outer4 {
        z-index: 151;
        height: 600px;
        border-radius: 10px;
        border: 2px solid rgba(77, 54, 8, 1);
        width: 600px;
        position: absolute;
        left: 240px;
        top: 153px;
        .group1 {
          z-index: 153;
          position: relative;
          width: 598px;
          height: 598px;
          border-radius: 10px;
          overflow: hidden;
          background: url(../../../static/img/demo/SketchPngc63b2a7b4d9f1902134a81af2379704a6173465cceb011876483fb03c3250c29.png)
            100% no-repeat;
          .layer4 {
            z-index: 154;
            height: 598px;
            background: url(../../../static/img/demo/SketchPng2142c8b56c3639238d0064f008ee212db7bdf2bed22d3da138240220be2378aa.png)
              100% no-repeat;
            width: 598px;
            position: absolute;
            left: 0;
            top: 0;
            .section4 {
              z-index: 155;
              height: 598px;
              background: url(../../../static/img/demo/SketchPng525e39058ea529a06e0f82c11c785b1d9a47c780a83ce092007d87be64ae8941.png)
                100% no-repeat;
              width: 598px;
              position: relative;
              .img2 {
                width: 300px;
                height: 280px;
              }
              .pic1 {
                z-index: 157;
                position: absolute;
                left: 0;
                top: 106px;
                width: 516px;
                height: 492px;
              }
            }
          }
        }
      }
      .outer5 {
        z-index: 168;
        height: 450px;
        border-radius: 10px;
        border: 1px solid rgba(77, 54, 8, 1);
        background-color: rgba(27, 15, 5, 1);
        width: 720px;
        position: absolute;
        left: 960px;
        top: 444px;
        padding: 29px 0 0 29px;
        .section5 {
          width: 579px;
          height: 370px;
          .word4 {
            width: 507px;
            height: 20px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 20px;
            font-family: Arial-BoldMT;
            white-space: nowrap;
            line-height: 20px;
            text-align: left;
          }
          .bd3 {
            width: 233px;
            height: 20px;
            margin-top: 30px;
            .word5 {
              width: 63px;
              height: 20px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(212, 179, 93, 1);
              font-size: 18px;
              font-family: Arial-BoldMT;
              white-space: nowrap;
              line-height: 20px;
              text-align: left;
            }
            .info4 {
              width: 150px;
              height: 14px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 14px;
              font-family: Arial-BoldMT;
              white-space: nowrap;
              line-height: 14px;
              text-align: left;
              margin-top: 5px;
            }
          }
          .word6 {
            width: 107px;
            height: 20px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(212, 179, 93, 1);
            font-size: 18px;
            font-family: Arial-BoldMT;
            white-space: nowrap;
            line-height: 20px;
            text-align: left;
            margin-top: 40px;
          }
          .word7 {
            width: 579px;
            height: 20px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 18px;
            font-family: Arial-BoldMT;
            white-space: nowrap;
            line-height: 20px;
            text-align: left;
            margin-top: 20px;
          }
          .bd4 {
            width: 228px;
            height: 20px;
            margin-top: 30px;
            .word8 {
              width: 168px;
              height: 20px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(212, 179, 93, 1);
              font-size: 18px;
              font-family: Arial-BoldMT;
              white-space: nowrap;
              line-height: 20px;
              text-align: left;
            }
            .word9 {
              width: 50px;
              height: 14px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 14px;
              font-family: Arial-BoldMT;
              white-space: nowrap;
              line-height: 14px;
              text-align: left;
              margin-top: 5px;
            }
          }
          .bd5 {
            width: 172px;
            height: 20px;
            margin-top: 30px;
            .info5 {
              width: 112px;
              height: 20px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(212, 179, 93, 1);
              font-size: 18px;
              font-family: Arial-BoldMT;
              white-space: nowrap;
              line-height: 20px;
              text-align: left;
            }
            .info6 {
              width: 50px;
              height: 14px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 14px;
              font-family: Arial-BoldMT;
              white-space: nowrap;
              line-height: 14px;
              text-align: left;
              margin-top: 5px;
            }
          }
          .bd6 {
            width: 172px;
            height: 20px;
            margin-top: 30px;
            .word10 {
              width: 112px;
              height: 20px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(212, 179, 93, 1);
              font-size: 18px;
              font-family: Arial-BoldMT;
              white-space: nowrap;
              line-height: 20px;
              text-align: left;
            }
            .txt5 {
              width: 50px;
              height: 14px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 14px;
              font-family: Arial-BoldMT;
              white-space: nowrap;
              line-height: 14px;
              text-align: left;
              margin-top: 5px;
            }
          }
          .bd7 {
            width: 196px;
            height: 20px;
            margin-top: 30px;
            .word11 {
              width: 136px;
              height: 20px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(212, 179, 93, 1);
              font-size: 18px;
              font-family: Arial-BoldMT;
              white-space: nowrap;
              line-height: 20px;
              text-align: left;
            }
            .txt6 {
              width: 50px;
              height: 14px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(255, 255, 255, 1);
              font-size: 14px;
              font-family: Arial-BoldMT;
              white-space: nowrap;
              line-height: 14px;
              text-align: left;
              margin-top: 5px;
            }
          }
        }
      }
      .outer6 {
        z-index: 6;
        height: 146px;
        background-color: rgba(2, 2, 2, 1);
        width: 1920px;
        position: absolute;
        left: 0;
        top: 1094px;
        .layer5 {
          width: 785px;
          height: 30px;
          margin: 41px 0 0 240px;
          .pic2 {
            width: 52px;
            height: 30px;
          }
          .icon2 {
            width: 30px;
            height: 30px;
            margin-left: 603px;
          }
          .label2 {
            width: 30px;
            height: 30px;
            margin-left: 20px;
          }
          .icon3 {
            width: 30px;
            height: 30px;
            margin-left: 20px;
          }
        }
        .layer6 {
          width: 152px;
          height: 14px;
          margin: 30px 0 31px 884px;
          .word12 {
            width: 152px;
            height: 14px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(204, 204, 204, 1);
            font-size: 14px;
            font-family: MicrosoftYaHei;
            white-space: nowrap;
            line-height: 14px;
            text-align: center;
          }
        }
      }
    }
  }
}

</style>
<style>
@import '../../libs/common.css';
</style>
