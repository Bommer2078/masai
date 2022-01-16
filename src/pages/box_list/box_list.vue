<template>
	<div class="page flex-col" id="zoomDom2">
		<div class="wrap1 flex-col justify-between">
			<navgator-part></navgator-part>
			<div class="outer3 flex-col">
				<!-- <div class="bd1 flex-row">
					<div class="group1 flex-row">
						<div class="section1 flex-col align-center" v-for="(item, index) in loopData0" :key="index">
							<div class="wrap2 flex-col">
								<div class="bd2 flex-col">
									<div class="section2 flex-row">
										<div class="section3 flex-col justify-center align-center">
											<span class="txt1" v-html="item.lanhutext0"></span>
										</div>
									</div>
									<div class="section4 flex-row"><span class="txt2" v-html="item.lanhutext1"></span></div>
									<div class="section5 flex-col" :style="{ background: item.lanhuBg6 }">
										<div class="group2 flex-col" :style="{ background: item.lanhuBg7 }">
											<img class="img1" referrerpolicy="no-referrer" :src="item.lanhuimage0" />
										</div>
									</div>
								</div>
								<span class="word3" v-html="item.lanhutext2"></span>
								<div class="bd3 flex-row justify-between">
									<img class="icon1" referrerpolicy="no-referrer" :src="item.lanhuimage2" />
									<span class="info3" v-html="item.lanhutext3"></span>
								</div>
							</div>
						</div>
					</div>
				</div> -->
				<div class="bd4 flex-row justify-between">
					<!-- <div class="outer4 flex-col justify-center">
						<img
							class="icon2"
							referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngaee22e8f2efb0e928f754fab87a52452a2d3661bf2e585443959d9bd4c32d60e"
						/>
					</div> -->
					<!-- <div class="outer5 flex-col justify-center"><span class="word4">1</span></div>
					<div class="outer6 flex-col justify-center"><span class="word5">2</span></div>
					<div class="outer7 flex-col justify-center"><span class="info4">3</span></div> -->
				</div>
			</div>
		</div>
		<div class="wrap3 flex-col">
			<img
				class="img3"
				referrerpolicy="no-referrer"
				src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5465557037d0ff8bcc998df71a848da98dd862539f421ddb1e01e10641c45cd0"
			/>
			<div class="bd5 flex-col"></div>
		</div>
		<div class="wrap4">
			<div class="align-center blind-box" v-for="(item,index) in RoundList" :key="index">
				<div class="box1 flex-col" >
					<div class="box2 flex-col">
						<div class="wrap5 flex-row">
							<div class="main1 flex-col justify-center align-center" v-if="isWait(item)"><span class="txt3">coming</span></div>
						</div>
						<div class="wrap6 flex-row"><span class="txt4">×{{item.amount}}</span></div>
						<div class="wrap7 flex-col" @click="gotoRoutItem(item)">
							<div class="group3 flex-col">
								<img
									class="pic1"
									referrerpolicy="no-referrer"
									src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0199babb2e86a4f8752a8699472fd51e6cac175bc49062a8987149fb9748d9aa"
								/>
							</div>
						</div>
					</div>
					<span class="word6">{{item.name}}</span>
					<div class="box3 flex-row justify-between">
						<img
							class="icon3"
							referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfee5239298b371cc41b1e270e9954b5334197e05eebca9cb336d9138890b9e54"
						/>
						<span class="info5">{{item.price}} AVAX</span>
					</div>
				</div>
			</div>
		</div>
		<!-- <div class="wrap8 flex-col align-center">
			<div class="outer8 flex-col">
				<div class="mod2 flex-col">
					<div class="block1 flex-row">
						<div class="wrap9 flex-col justify-center align-center"><span class="word7">Sale</span></div>
					</div>
					<div class="block2 flex-row"><span class="word8">×100</span></div>
					<div class="block3 flex-col">
						<div class="main2 flex-col">
							<img
								class="pic3"
								referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0199babb2e86a4f8752a8699472fd51e6cac175bc49062a8987149fb9748d9aa"
							/>
						</div>
					</div>
				</div>
				<span class="word9">Fifth&nbsp;round&nbsp;of&nbsp;sales</span>
				<div class="mod3 flex-row justify-between">
					<img
						class="icon4"
						referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfee5239298b371cc41b1e270e9954b5334197e05eebca9cb336d9138890b9e54"
					/>
					<span class="info6">0.124&nbsp;HRW</span>
				</div>
			</div>
		</div>
		<img
			class="pic4"
			referrerpolicy="no-referrer"
			src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng56c1d730550538cbcc786029c27bd7b78158dfa2eacf328c4d89390c13ca7703"
		/>
		<div class="wrap10 flex-col align-center">
			<div class="box4 flex-col">
				<div class="section6 flex-col">
					<div class="wrap11 flex-row">
						<div class="bd6 flex-col justify-center align-center"><span class="txt5">Over</span></div>
					</div>
					<div class="wrap12 flex-row"><span class="word10">×100</span></div>
					<div class="wrap13 flex-col">
						<div class="section7 flex-col">
							<img
								class="pic5"
								referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0199babb2e86a4f8752a8699472fd51e6cac175bc49062a8987149fb9748d9aa"
							/>
						</div>
					</div>
				</div>
				<span class="word11">Fourth&nbsp;round&nbsp;of&nbsp;sales</span>
				<div class="section8 flex-row justify-between">
					<img
						class="icon5"
						referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfee5239298b371cc41b1e270e9954b5334197e05eebca9cb336d9138890b9e54"
					/>
					<span class="word12">0.124&nbsp;HRW</span>
				</div>
			</div>
		</div> -->
		<!-- <div class="wrap14 flex-col align-center">
			<div class="outer9 flex-col">
				<div class="outer10 flex-col">
					<div class="section9 flex-row">
						<div class="bd7 flex-col justify-center align-center"><span class="info7">Over</span></div>
					</div>
					<div class="section10 flex-row"><span class="word13">×100</span></div>
					<div class="section11 flex-col">
						<div class="wrap15 flex-col">
							<img
								class="img6"
								referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0199babb2e86a4f8752a8699472fd51e6cac175bc49062a8987149fb9748d9aa"
							/>
						</div>
					</div>
				</div>
				<span class="info8">First&nbsp;round&nbsp;of&nbsp;sales</span>
				<div class="outer11 flex-row justify-between">
					<img
						class="label2"
						referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfee5239298b371cc41b1e270e9954b5334197e05eebca9cb336d9138890b9e54"
					/>
					<span class="word14">0.124&nbsp;HRW</span>
				</div>
			</div>
		</div> -->
		<div class="wrap16 flex-col">
			<div class="layer1 flex-row">
				<!-- <div class="wrap17 flex-col justify-center"><span class="word15">5</span></div> -->
				<!-- <img
					class="label3"
					referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng9e6223679d9e1ddcc155d1cd7de57041cd34fdd280fe6838191d3b8f6b70fe19"
				/> -->
				<!-- <div class="wrap18 flex-col justify-center align-center"><span class="info9">100</span></div>
				<div class="wrap19 flex-col justify-center">
					<img
						class="label4"
						referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4ab8e3036fd8047de64fd9264aebf52a98d4c4109e91a9f8c56d224dd865e649"
					/>
				</div> -->
			</div>
		</div>
		<!-- <div class="wrap20 flex-col justify-center"><span class="word16">4</span></div> -->
		<div class="wrap21 flex-col">
			<div class="bd8 flex-row">
				<img
					class="pic7"
					referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfef6c2d93590f12b663636bd3d6d42c5bb53751b5906e6d9d18971b1605e987d"
				/>
				<img
					@click="openLink('twitter')"
					class="icon6"
					referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng741f592d4ac3f5572ea63a8d67b93a1530deff482fc99d844317194be7075ac7"
				/>
				<img
					@click="openLink('telegram')"
					class="label5"
					referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6ec6b6b1ff53d71dd17abc9019ae1f6e23040a16830de24cd5350e28f4a64677"
				/>
				<img
					@click="openLink('discord')"
					class="icon7"
					referrerpolicy="no-referrer"
					src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng12f683a97c9076f7f0f73d7858d75d0f0ff7bb79fe4a095a6745695556cd9f6a"
				/>
			</div>
			<div class="bd9 flex-row"><span class="info10">&#64;2022&nbsp;Horsefi.games</span></div>
		</div>
	</div>
</template>
<script>
// import getWeb3 from '../../libs/linkMetaMask.js'
export default {
	data () {
		return {
			loopData0: [
				{
					lanhutext0: 'Sale',
					lanhutext1: '×100',
					lanhuBg6  :
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng70b3a3ba6d2738ef198cf4dbc12991e1b6750f239a8516b5660930de16072798) 100% no-repeat',
					lanhuBg7:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng63beb03cb8dcba43a09ce9a531d1d1a422945c9c6645adad5f840907d4094d50) 100% no-repeat',
					lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0199babb2e86a4f8752a8699472fd51e6cac175bc49062a8987149fb9748d9aa',
					lanhuimage1: '',
					lanhutext2 : 'Seventh&nbsp;round&nbsp;of&nbsp;sales',
					lanhuimage2:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfee5239298b371cc41b1e270e9954b5334197e05eebca9cb336d9138890b9e54',
					lanhutext3: '0.124&nbsp;HRW'
				},
				{
					lanhutext0: 'Sale',
					lanhutext1: '×100',
					lanhuBg6  :
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng03c5435c38a776336d73b55d05f0eefd72f6a592835af547a5d396b7412372ba) 100% no-repeat',
					lanhuBg7:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngea9675ac2c900caa78a5d40ab7ecabe6dd507a2a6f950f2678c8866907b67e41) 100% no-repeat',
					lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0199babb2e86a4f8752a8699472fd51e6cac175bc49062a8987149fb9748d9aa',
					lanhuimage1: '',
					lanhutext2 : 'The&nbsp;sixth&nbsp;round&nbsp;of&nbsp;sales',
					lanhuimage2:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfee5239298b371cc41b1e270e9954b5334197e05eebca9cb336d9138890b9e54',
					lanhutext3: '0.124&nbsp;HRW'
				},
				{
					lanhutext0: 'Over',
					lanhutext1: '×100',
					lanhuBg6  :
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng70b3a3ba6d2738ef198cf4dbc12991e1b6750f239a8516b5660930de16072798) 100% no-repeat',
					lanhuBg7:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng63beb03cb8dcba43a09ce9a531d1d1a422945c9c6645adad5f840907d4094d50) 100% no-repeat',
					lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0199babb2e86a4f8752a8699472fd51e6cac175bc49062a8987149fb9748d9aa',
					lanhuimage1: '',
					lanhutext2 : 'The&nbsp;third&nbsp;round&nbsp;of&nbsp;sales',
					lanhuimage2:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfee5239298b371cc41b1e270e9954b5334197e05eebca9cb336d9138890b9e54',
					lanhutext3: '0.124&nbsp;HRW'
				},
				{
					lanhutext0: 'Over',
					lanhutext1: '×100',
					lanhuBg6  :
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng70b3a3ba6d2738ef198cf4dbc12991e1b6750f239a8516b5660930de16072798) 100% no-repeat',
					lanhuBg7:
            'url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng63beb03cb8dcba43a09ce9a531d1d1a422945c9c6645adad5f840907d4094d50) 100% no-repeat',
					lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0199babb2e86a4f8752a8699472fd51e6cac175bc49062a8987149fb9748d9aa',
					lanhuimage1: '',
					lanhutext2 : 'Second&nbsp;round&nbsp;of&nbsp;sales',
					lanhuimage2:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfee5239298b371cc41b1e270e9954b5334197e05eebca9cb336d9138890b9e54',
					lanhutext3: '0.124&nbsp;HRW'
				}
			],
			RoundList: [],
			constants: {}
		}
	},
	mounted () {
		let dom = document.getElementById('connectButton')

		dom.innerText = localStorage.getItem('showAdress') || 'connect'
		this.zoomDom()
		this.getList()
		// this.$initializ()
	},
	methods: {
		getList () {
			this.$http.get(this.$api.getRound).then(({data}) => {
				if (data.status === 0) {
					this.RoundList = data.result
				} else {
					this.$message.error(data.message)
				}
			})
		},
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
			this.$router.replace(rou)
		},
		isWait (obj) {
			for (const key in obj) {
				if (Object.hasOwnProperty.call(obj, key)) {
					const element = obj[key]

					if (element === '') {
						return true
					}
				}
			}
			return false
		},
		gotoRoutItem (obj) {
			if (this.isWait(obj)) return
			this.$router.replace(`box_detail?id=${obj.id}`)
		},
		zoomDom () {
			this.devicewidth = document.documentElement.clientWidth
			let zoomDom = document.getElementById('zoomDom2')

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
  height: 2070px;
  overflow: hidden;
  .wrap1 {
    width: 1920px;
    height: 1924px;
    .outer1 {
      height: 74px;
      background-color: rgba(2, 2, 2, 1);
      padding-top: 17px;
      width: 1920px;
      .outer2 {
        width: 1440px;
        height: 42px;
        .mod1 {
          width: 188px;
          height: 42px;
          background: url(../../../static/img/demo/SketchPngf56cecf6a3dde1390dc1bf066aec3ef691bb2722b3db7138a133ce2ead0ac379.png) -1px -1px
            no-repeat;
        }
        .info1 {
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
        .info2 {
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
        .word1 {
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
    .outer3 {
      height: 1250px;
      background: url(../../../static/img/demo/SketchPnga3955fb746d8d1a83a9bdbf522920375858338d8db0f5b90a5b9cf46d89a14ba.png)
        100% no-repeat;
      margin-top: 600px;
      width: 1920px;
      .bd1 {
        width: 669px;
        height: 860px;
        margin: 100px 0 0 625px;
        .group1 {
          width: 669px;
          height: 860px;
          flex-wrap: wrap;
          .section1 {
            height: 400px;
            border: 2px solid rgba(77, 54, 8, 1);
            padding-top: -1px;
            width: 284px;
            margin: 0 101px 60px 0;
            &:nth-child(2n) {
              margin-right: 0;
            }
            &:nth-last-child(-n + 2) {
              margin-bottom: 0;
            }
            .wrap2 {
              width: 282px;
              height: 373px;
              .bd2 {
                z-index: 204;
                height: 282px;
                overflow: hidden;
                background: url(../../../static/img/demo/SketchPng5f9bb55e58d50e5e63a6ed7888ae68e87fb9ca45d37875c68cad0851eb69e91b.png)
                  100% no-repeat;
                width: 282px;
                position: relative;
                .section2 {
                  width: 46px;
                  height: 20px;
                  margin: 9px 0 0 9px;
                  .section3 {
                    height: 20px;
                    border-radius: 4px;
                    border: 1px solid rgba(212, 179, 93, 1);
                    width: 46px;
                    .txt1 {
                      width: 30px;
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
                .section4 {
                  width: 40px;
                  height: 16px;
                  margin: 218px 0 19px 223px;
                  .txt2 {
                    width: 40px;
                    height: 16px;
                    display: block;
                    overflow-wrap: break-word;
                    color: rgba(255, 255, 255, 1);
                    font-size: 16px;
                    font-family: Arial-BoldMT;
                    white-space: nowrap;
                    line-height: 16px;
                    text-align: left;
                  }
                }
                .section5 {
                  z-index: 205;
                  height: 282px;
                  width: 282px;
                  position: absolute;
                  left: 0;
                  top: 0;
                  .group2 {
                    z-index: 206;
                    height: 282px;
                    width: 282px;
                    position: relative;
                    padding: 67px 0 0 62px;
                    .img1 {
                      width: 160px;
                      height: 150px;
                    }
                    .img2 {
                      z-index: 208;
                      position: absolute;
                      left: 0;
                      top: 59px;
                      width: 244px;
                      height: 223px;
                    }
                  }
                }
              }
              .word3 {
                width: 248px;
                height: 24px;
                display: block;
                overflow-wrap: break-word;
                color: rgba(212, 179, 93, 1);
                font-size: 20px;
                font-family: Arial-BoldMT;
                white-space: nowrap;
                line-height: 24px;
                text-align: left;
                margin: 20px 0 0 15px;
              }
              .bd3 {
                width: 104px;
                height: 20px;
                margin: 27px 0 0 17px;
                .icon1 {
                  width: 20px;
                  height: 20px;
                }
                .info3 {
                  width: 74px;
                  height: 14px;
                  display: block;
                  overflow-wrap: break-word;
                  color: rgba(255, 255, 255, 1);
                  font-size: 14px;
                  font-family: ArialMT;
                  white-space: nowrap;
                  line-height: 14px;
                  text-align: left;
                  margin-top: 3px;
                }
              }
            }
          }
        }
      }
      .bd4 {
        width: 150px;
        height: 30px;
        margin: 60px 0 200px 1314px;
        .outer4 {
          height: 30px;
          border-radius: 2px;
          border: 1px solid rgba(195, 198, 204, 1);
          padding-left: 11px;
          width: 30px;
          .icon2 {
            width: 7px;
            height: 12px;
          }
        }
        .outer5 {
          height: 30px;
          border-radius: 2px;
          border: 1px solid rgba(191, 143, 16, 1);
          background-color: rgba(212, 179, 93, 1);
          padding-left: 11px;
          width: 30px;
          .word4 {
            width: 8px;
            height: 14px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(40, 40, 40, 1);
            font-size: 14px;
            font-family: ArialMT;
            white-space: nowrap;
            line-height: 14px;
            text-align: left;
          }
        }
        .outer6 {
          height: 30px;
          border-radius: 2px;
          border: 1px solid rgba(195, 198, 204, 1);
          padding-left: 11px;
          width: 30px;
          .word5 {
            width: 8px;
            height: 14px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(195, 198, 204, 1);
            font-size: 14px;
            font-family: ArialMT;
            white-space: nowrap;
            line-height: 14px;
            text-align: left;
          }
        }
        .outer7 {
          height: 30px;
          border-radius: 2px;
          border: 1px solid rgba(195, 198, 204, 1);
          padding-left: 11px;
          width: 30px;
          .info4 {
            width: 8px;
            height: 14px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(195, 198, 204, 1);
            font-size: 14px;
            font-family: ArialMT;
            white-space: nowrap;
            line-height: 14px;
            text-align: left;
          }
        }
      }
    }
  }
  .wrap3 {
    z-index: 6;
    position: absolute;
    left: 0;
    top: 74px;
    width: 1920px;
    height: 600px;
    overflow: hidden;
    background: url(../../../static/img/demo/SketchPng4b2e76007ceedfe02680506d44805d3d2c6126b49a3cbf1f4d23dfe64b0a139e.png)
      100% no-repeat;
    .img3 {
      z-index: 7;
      position: absolute;
      left: 0;
      top: 0;
      width: 1920px;
      height: 600px;
    }
    .bd5 {
      z-index: 8;
      position: absolute;
      left: 664px;
      top: 73px;
      width: 505px;
      height: 600px;
      background: url(../../../static/img/demo/SketchPng0c88cfba4efe8c21ecedadf5068d05c737bbf17e6b98e1e0d4e05add22ca34e8.png)
        100% no-repeat;
    }
  }
  .wrap4 {
    z-index: 179;
    height: 400px;
    padding-top: -1px;
    width: 284px;
    position: absolute;
	display: flex;
    left: 240px;
    top: 774px;
	flex-direction: row;
	.blind-box {
border: 2px solid rgba(212, 179, 93, 1);
	margin-right: 40px;
	}
    .box1 {
      width: 282px;
      height: 373px;
      .box2 {
        z-index: 181;
        height: 282px;
        overflow: hidden;
        background: url(../../../static/img/demo/SketchPng5f9bb55e58d50e5e63a6ed7888ae68e87fb9ca45d37875c68cad0851eb69e91b.png)
          100% no-repeat;
        width: 282px;
        position: relative;
        .wrap5 {
          width: 46px;
          height: 20px;
          margin: 9px 0 0 9px;
          .main1 {
            height: 20px;
            border-radius: 4px;
            border: 1px solid rgba(212, 179, 93, 1);
            width: 46px;
            .txt3 {
              width: 30px;
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
        .wrap6 {
          width: 40px;
          height: 16px;
          margin: 218px 0 19px 223px;
          .txt4 {
            width: 40px;
            height: 16px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 16px;
            font-family: Arial-BoldMT;
            white-space: nowrap;
            line-height: 16px;
            text-align: left;
          }
        }
        .wrap7 {
          z-index: 182;
          height: 282px;
          background: url(../../../static/img/demo/SketchPng70b3a3ba6d2738ef198cf4dbc12991e1b6750f239a8516b5660930de16072798.png)
            100% no-repeat;
          width: 282px;
          position: absolute;
          left: 0;
          top: 0;
          .group3 {
            z-index: 183;
            height: 282px;
            background: url(../../../static/img/demo/SketchPng63beb03cb8dcba43a09ce9a531d1d1a422945c9c6645adad5f840907d4094d50.png)
              100% no-repeat;
            width: 282px;
            position: relative;
            padding: 67px 0 0 62px;
            .pic1 {
              width: 160px;
              height: 150px;
            }
            .pic2 {
              z-index: 185;
              position: absolute;
              left: 0;
              top: 59px;
              width: 244px;
              height: 223px;
            }
          }
        }
      }
      .word6 {
        width: 248px;
        height: 24px;
        display: block;
        overflow-wrap: break-word;
        color: rgba(212, 179, 93, 1);
        font-size: 20px;
        font-family: Arial-BoldMT;
        white-space: nowrap;
        line-height: 24px;
        text-align: left;
        margin: 20px 0 0 15px;
      }
      .box3 {
        width: 104px;
        height: 20px;
        margin: 27px 0 0 15px;
        .icon3 {
          width: 20px;
          height: 20px;
        }
        .info5 {
          width: 74px;
          height: 14px;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          font-family: ArialMT;
          white-space: nowrap;
          line-height: 14px;
          text-align: left;
          margin-top: 3px;
        }
      }
    }
  }
  .wrap8 {
    z-index: 248;
    height: 400px;
    border: 2px solid rgba(77, 54, 8, 1);
    padding-top: -1px;
    width: 284px;
    position: absolute;
    left: 1395px;
    top: 774px;
    .outer8 {
      width: 282px;
      height: 373px;
      .mod2 {
        z-index: 250;
        height: 282px;
        overflow: hidden;
        background: url(../../../static/img/demo/SketchPng5f9bb55e58d50e5e63a6ed7888ae68e87fb9ca45d37875c68cad0851eb69e91b.png)
          100% no-repeat;
        width: 282px;
        position: relative;
        .block1 {
          width: 46px;
          height: 20px;
          margin: 9px 0 0 9px;
          .wrap9 {
            height: 20px;
            border-radius: 4px;
            border: 1px solid rgba(212, 179, 93, 1);
            width: 46px;
            .word7 {
              width: 30px;
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
        .block2 {
          width: 40px;
          height: 16px;
          margin: 218px 0 19px 223px;
          .word8 {
            width: 40px;
            height: 16px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 16px;
            font-family: Arial-BoldMT;
            white-space: nowrap;
            line-height: 16px;
            text-align: left;
          }
        }
        .block3 {
          z-index: 251;
          height: 282px;
          background: url(../../../static/img/demo/SketchPng70b3a3ba6d2738ef198cf4dbc12991e1b6750f239a8516b5660930de16072798.png)
            100% no-repeat;
          width: 282px;
          position: absolute;
          left: 0;
          top: 0;
          .main2 {
            z-index: 252;
            height: 282px;
            background: url(../../../static/img/demo/SketchPng63beb03cb8dcba43a09ce9a531d1d1a422945c9c6645adad5f840907d4094d50.png)
              100% no-repeat;
            width: 282px;
            position: relative;
            padding: 67px 0 0 62px;
            .pic3 {
              width: 160px;
              height: 150px;
            }
            .img4 {
              z-index: 254;
              position: absolute;
              left: 0;
              top: 59px;
              width: 244px;
              height: 223px;
            }
          }
        }
      }
      .word9 {
        width: 248px;
        height: 24px;
        display: block;
        overflow-wrap: break-word;
        color: rgba(212, 179, 93, 1);
        font-size: 20px;
        font-family: Arial-BoldMT;
        white-space: nowrap;
        line-height: 24px;
        text-align: left;
        margin: 20px 0 0 15px;
      }
      .mod3 {
        width: 104px;
        height: 20px;
        margin: 27px 0 0 15px;
        .icon4 {
          width: 20px;
          height: 20px;
        }
        .info6 {
          width: 74px;
          height: 14px;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          font-family: ArialMT;
          white-space: nowrap;
          line-height: 14px;
          text-align: left;
          margin-top: 3px;
        }
      }
    }
  }
  .pic4 {
    z-index: 3;
    position: absolute;
    left: 0;
    top: 624px;
    width: 460px;
    height: 854px;
  }
  .wrap10 {
    z-index: 271;
    height: 400px;
    border: 2px solid rgba(77, 54, 8, 1);
    padding-top: -1px;
    width: 284px;
    position: absolute;
    left: 240px;
    top: 1234px;
    .box4 {
      width: 282px;
      height: 373px;
      .section6 {
        z-index: 273;
        height: 282px;
        overflow: hidden;
        background: url(../../../static/img/demo/SketchPng5f9bb55e58d50e5e63a6ed7888ae68e87fb9ca45d37875c68cad0851eb69e91b.png)
          100% no-repeat;
        width: 282px;
        position: relative;
        .wrap11 {
          width: 46px;
          height: 20px;
          margin: 9px 0 0 9px;
          .bd6 {
            height: 20px;
            border-radius: 4px;
            border: 1px solid rgba(212, 179, 93, 1);
            width: 46px;
            .txt5 {
              width: 30px;
              height: 14px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(212, 179, 93, 1);
              font-size: 14px;
              letter-spacing: -0.10000000149011612px;
              font-family: ArialMT;
              white-space: nowrap;
              line-height: 14px;
              text-align: left;
            }
          }
        }
        .wrap12 {
          width: 40px;
          height: 16px;
          margin: 218px 0 19px 223px;
          .word10 {
            width: 40px;
            height: 16px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 16px;
            font-family: Arial-BoldMT;
            white-space: nowrap;
            line-height: 16px;
            text-align: left;
          }
        }
        .wrap13 {
          z-index: 274;
          height: 282px;
          background: url(../../../static/img/demo/SketchPng70b3a3ba6d2738ef198cf4dbc12991e1b6750f239a8516b5660930de16072798.png)
            100% no-repeat;
          width: 282px;
          position: absolute;
          left: 0;
          top: 0;
          .section7 {
            z-index: 275;
            height: 282px;
            background: url(../../../static/img/demo/SketchPng63beb03cb8dcba43a09ce9a531d1d1a422945c9c6645adad5f840907d4094d50.png)
              100% no-repeat;
            width: 282px;
            position: relative;
            padding: 67px 0 0 62px;
            .pic5 {
              width: 160px;
              height: 150px;
            }
            .img5 {
              z-index: 277;
              position: absolute;
              left: 0;
              top: 59px;
              width: 244px;
              height: 223px;
            }
          }
        }
      }
      .word11 {
        width: 248px;
        height: 24px;
        display: block;
        overflow-wrap: break-word;
        color: rgba(212, 179, 93, 1);
        font-size: 20px;
        font-family: Arial-BoldMT;
        white-space: nowrap;
        line-height: 24px;
        text-align: left;
        margin: 20px 0 0 15px;
      }
      .section8 {
        width: 104px;
        height: 20px;
        margin: 27px 0 0 15px;
        .icon5 {
          width: 20px;
          height: 20px;
        }
        .word12 {
          width: 74px;
          height: 14px;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          font-family: ArialMT;
          white-space: nowrap;
          line-height: 14px;
          text-align: left;
          margin-top: 3px;
        }
      }
    }
  }
  .wrap14 {
    z-index: 340;
    height: 400px;
    border: 2px solid rgba(77, 54, 8, 1);
    padding-top: -1px;
    width: 284px;
    position: absolute;
    left: 1395px;
    top: 1234px;
    .outer9 {
      width: 282px;
      height: 373px;
      .outer10 {
        z-index: 342;
        height: 282px;
        overflow: hidden;
        background: url(../../../static/img/demo/SketchPng5f9bb55e58d50e5e63a6ed7888ae68e87fb9ca45d37875c68cad0851eb69e91b.png)
          100% no-repeat;
        width: 282px;
        position: relative;
        .section9 {
          width: 46px;
          height: 20px;
          margin: 9px 0 0 9px;
          .bd7 {
            height: 20px;
            border-radius: 4px;
            border: 1px solid rgba(212, 179, 93, 1);
            width: 46px;
            .info7 {
              width: 30px;
              height: 14px;
              display: block;
              overflow-wrap: break-word;
              color: rgba(212, 179, 93, 1);
              font-size: 14px;
              letter-spacing: -0.10000000149011612px;
              font-family: ArialMT;
              white-space: nowrap;
              line-height: 14px;
              text-align: left;
            }
          }
        }
        .section10 {
          width: 40px;
          height: 16px;
          margin: 218px 0 19px 223px;
          .word13 {
            width: 40px;
            height: 16px;
            display: block;
            overflow-wrap: break-word;
            color: rgba(255, 255, 255, 1);
            font-size: 16px;
            font-family: Arial-BoldMT;
            white-space: nowrap;
            line-height: 16px;
            text-align: left;
          }
        }
        .section11 {
          z-index: 343;
          height: 282px;
          background: url(../../../static/img/demo/SketchPng70b3a3ba6d2738ef198cf4dbc12991e1b6750f239a8516b5660930de16072798.png)
            100% no-repeat;
          width: 282px;
          position: absolute;
          left: 0;
          top: 0;
          .wrap15 {
            z-index: 344;
            height: 282px;
            background: url(../../../static/img/demo/SketchPng63beb03cb8dcba43a09ce9a531d1d1a422945c9c6645adad5f840907d4094d50.png)
              100% no-repeat;
            width: 282px;
            position: relative;
            padding: 67px 0 0 62px;
            .img6 {
              width: 160px;
              height: 150px;
            }
            .pic6 {
              z-index: 346;
              position: absolute;
              left: 0;
              top: 59px;
              width: 244px;
              height: 223px;
            }
          }
        }
      }
      .info8 {
        width: 248px;
        height: 24px;
        display: block;
        overflow-wrap: break-word;
        color: rgba(212, 179, 93, 1);
        font-size: 20px;
        font-family: Arial-BoldMT;
        white-space: nowrap;
        line-height: 24px;
        text-align: left;
        margin: 20px 0 0 15px;
      }
      .outer11 {
        width: 104px;
        height: 20px;
        margin: 27px 0 0 15px;
        .label2 {
          width: 20px;
          height: 20px;
        }
        .word14 {
          width: 74px;
          height: 14px;
          display: block;
          overflow-wrap: break-word;
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          font-family: ArialMT;
          white-space: nowrap;
          line-height: 14px;
          text-align: left;
          margin-top: 3px;
        }
      }
    }
  }
  .wrap16 {
    z-index: 4;
    height: 951px;
    background: url(../../../static/img/demo/SketchPng9f9862157c2d8d79fe2d33f3830bf2931c52919b707b39ce45b260d2a87af06f.png)
      100% no-repeat;
    width: 418px;
    position: absolute;
    left: 1501px;
    top: 1119px;
    padding: 575px 0 0 13px;
    .layer1 {
      width: 166px;
      height: 30px;
      .wrap17 {
        height: 30px;
        border-radius: 2px;
        border: 1px solid rgba(195, 198, 204, 1);
        padding-left: 11px;
        width: 30px;
        .word15 {
          width: 8px;
          height: 14px;
          display: block;
          overflow-wrap: break-word;
          color: rgba(195, 198, 204, 1);
          font-size: 14px;
          font-family: ArialMT;
          white-space: nowrap;
          line-height: 14px;
          text-align: left;
        }
      }
      .label3 {
        width: 16px;
        height: 4px;
        margin: 14px 0 0 16px;
      }
      .wrap18 {
        height: 30px;
        border-radius: 2px;
        border: 1px solid rgba(195, 198, 204, 1);
        margin-left: 16px;
        width: 48px;
        .info9 {
          width: 24px;
          height: 14px;
          display: block;
          overflow-wrap: break-word;
          color: rgba(195, 198, 204, 1);
          font-size: 14px;
          font-family: ArialMT;
          white-space: nowrap;
          line-height: 14px;
          text-align: left;
        }
      }
      .wrap19 {
        height: 30px;
        border-radius: 2px;
        border: 1px solid rgba(195, 198, 204, 1);
        margin-left: 10px;
        padding-left: 11px;
        width: 30px;
        .label4 {
          width: 7px;
          height: 12px;
        }
      }
    }
  }
  .wrap20 {
    z-index: 73;
    height: 30px;
    border-radius: 2px;
    border: 1px solid rgba(195, 198, 204, 1);
    padding-left: 11px;
    width: 30px;
    position: absolute;
    left: 1474px;
    top: 1694px;
    .word16 {
      width: 8px;
      height: 14px;
      display: block;
      overflow-wrap: break-word;
      color: rgba(195, 198, 204, 1);
      font-size: 14px;
      font-family: ArialMT;
      white-space: nowrap;
      line-height: 14px;
      text-align: left;
    }
  }
  .wrap21 {
    z-index: 10;
    height: 146px;
    background-color: rgba(2, 2, 2, 1);
    width: 1920px;
    position: absolute;
    left: 0;
    top: 1924px;
    .bd8 {
      width: 785px;
      height: 30px;
      margin: 41px 0 0 240px;
      .pic7 {
        width: 52px;
        height: 30px;
      }
      .icon6 {
        width: 30px;
        height: 30px;
        margin-left: 603px;
      }
      .label5 {
        width: 30px;
        height: 30px;
        margin-left: 20px;
      }
      .icon7 {
        width: 30px;
        height: 30px;
        margin-left: 20px;
      }
    }
    .bd9 {
      width: 152px;
      height: 14px;
      margin: 30px 0 31px 884px;
      .info10 {
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

</style>

<style>
@import '../../libs/common.css';
</style>
