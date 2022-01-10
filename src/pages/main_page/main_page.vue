<template>
	<div id="zoomDom">
		<div class="page flex-col">
			<div class="section1 flex-col justify-between">
				<div class="nav-warp">
					<div class="main1 flex-col">
						<div class="nav1 flex-row">
							<div class="box1 flex-col"></div>
							<div class="menu" :class="{'menu-item-cover':showMenuItemVal}">
								<div class="menu-button" @click="showMenuItem">Menu</div>
								<span class="word1">Home</span>
								<span class="info1" style="cursor: pointer;" @click="gotoRout('/')">Announcement
									<img
										class="icon1"
										referrerpolicy="no-referrer"
										src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng612ba46beecdabb8b5376113999a865681954869a7f0f15fc9bda34e8a7d54bb"
									/>
								</span>
								<span class="info2">Game</span>
								<span class="txt1"  style="cursor: pointer;" @click="gotoRout('/box_list')">Market</span>
								<span class="word2">White&nbsp;Paper</span>

							</div>
						</div>
					</div>
				</div>
				<div class="bd2 flex-col">
					<div class="mod2 flex-col"><div class="layer1 flex-col"></div></div>
					<img
						class="pic1"
						referrerpolicy="no-referrer"
						src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngaa2386f7df2ef2257fa2d6202c64a1e6b94f0cc8ca682aaf0ca75f9c969fe08e"
					/>
					<div class="mod3 flex-col"></div>
					<div class="mod4 flex-col"></div>
				</div>
				<div class="bd3 flex-col">
					<div class="main1 flex-col">
						<div class="bd4 flex-row justify-between">
							<img
								class="img1"
								referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng0ff2ca78d1db2fd143a51f2745a13e4e29dd3b1e4211a9b57dec4d4a8dba846a"
							/>
							<div class="wrap1 flex-col justify-between">
								<img
									class="img2"
									referrerpolicy="no-referrer"
									src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng87859a4ebeec460da9d3b210fd230b63834175df8996d7ed49a04828b7834ca7"
								/>
							</div>
						</div>
						<div class="bd5 flex-row justify-between">
							<img
								class="pic4"
								referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng290c3d7cb05fc9a4418e1aaac932737a1ae971fc837140aafa4c347c35c08bc9"
							/>
							<div class="group1 flex-col justify-center align-center">
								<span class="txt5">Token&nbsp;distribution</span>
							</div>
							<img
								class="img4"
								referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2679dfbf9d11886434009ccddff65ca01fa25f174b0f27e2cece76e35cde0f4f"
							/>
						</div>
						<div class="bd6 flex-row justify-between">
							<div class="box1 flex-col"></div>
							<span class="word1">The&nbsp;team&nbsp;reserves&nbsp;2%</span>
						</div>
						<div class="bd7 flex-col">
							<div class="section3 flex-col">
								<div class="box2 flex-row justify-between">
									<div class="mod5 flex-col"></div>
									<span class="word2">Private&nbsp;equity&nbsp;4%</span>
								</div>
								<div class="box3 flex-row justify-between">
									<img
										class="pic5"
										referrerpolicy="no-referrer"
										src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng290c3d7cb05fc9a4418e1aaac932737a1ae971fc837140aafa4c347c35c08bc9"
									/>
									<div class="box4 flex-col justify-center align-center"><span class="word3">Road&nbsp;Map</span></div>
									<img
										class="img5"
										referrerpolicy="no-referrer"
										src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2679dfbf9d11886434009ccddff65ca01fa25f174b0f27e2cece76e35cde0f4f"
									/>
								</div>

								<template v-if="devicewidth > 716">
									<div class="box5 flex-row">
										<span class="word4">2022&nbsp;Q1</span>
										<span class="word5">2022&nbsp;Q1</span>
										<span class="txt6">2022&nbsp;Q2</span>
										<span class="word6">2022&nbsp;Q2</span>
									</div>
									<div class="box6 flex-col"></div>
									<div class="box7 flex-row">
										<span class="infoBox1">
											Start&nbsp;blind&nbsp;box
											<br />
											<br />
											Online NFT market
											<br />
											<br />
											Private&nbsp;sale
											<br />
											<br />
											Public&nbsp;sale
											<br />
											<br />
											Online&nbsp;swap
										</span>
										<span class="paragraph1">
											The&nbsp;game&nbsp;is&nbsp;online
											<br />
											<br />
											Open&nbsp;the&nbsp;game&nbsp;system
											<br />
											<br />
											Open the breeding system
										</span>
										<span class="paragraph2">
											Open a large-scale event
											<br />
											<br />
											Listed on Binance Exchange
											<br />
										</span>
										<span class="infoBox2">
											Open a large-scale event
											<br />
											<br />
											Launch&nbsp;CMC,&nbsp;etc.
										</span>
									</div>
								</template>
								<img v-else style="width: 100vw;margin-top:20px;" src="../../../static/img/demo/map.png" alt="">
								<div class="box8 flex-row justify-between">
									<img
										class="pic6"
										referrerpolicy="no-referrer"
										src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng290c3d7cb05fc9a4418e1aaac932737a1ae971fc837140aafa4c347c35c08bc9"
									/>
									<div class="box9 flex-col justify-center"><span class="info3">Partner</span></div>
									<img
										class="pic7"
										referrerpolicy="no-referrer"
										src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2679dfbf9d11886434009ccddff65ca01fa25f174b0f27e2cece76e35cde0f4f"
									/>
								</div>
								<div class="box10 flex-col" v-if="devicewidth > 716"></div>
								<div class="box101 flex-row justify-between">
									<div class="bd101 flex-col justify-center align-center">
										<div class="section101 flex-col justify-between">
											<img
												class="pic101"
												referrerpolicy="no-referrer"
												src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng76d161028bb7c9673387ad46175844fd70185e2adcbc36af9267775103e23cb3"
											/>
											<span class="info101">AVALANCHE</span>
										</div>
									</div>
									<div class="bd102 flex-col">
										<div class="box102 flex-col justify-between">
											<img
												class="pic102"
												referrerpolicy="no-referrer"
												src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng4f7b1523692150699da6f8f8d07bf7d4c0ed8773105bf03c48f9fb2d90e28ae3"
											/>
											<span class="word102">WalletConnect</span>
										</div>
									</div>
									<div class="bd103 flex-col">
										<div class="main103 flex-col justify-between">
											<img
												class="pic103"
												referrerpolicy="no-referrer"
												src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngd638cb4d9e96a395c93887d282fc71d6658677af545ae3530ebd30103320296b"
											/>
											<span class="info103">METAMASK</span>
										</div>
									</div>
									<div class="bd104 flex-col">
										<div class="box104 flex-col justify-between">
											<img
												class="pic104"
												referrerpolicy="no-referrer"
												src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng77cc0efc88965b0b76adf4b2af428730b7ecf85a81417c913633d90c2be51be5"
											/>
											<div class="layer104">
												<span class="info104">YETI</span>
												<span class="word104">SWAP</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="section4 flex-col" v-if="devicewidth > 716"></div>
							<div class="section5 flex-col"></div>
							<div class="section6 flex-col"></div>
							<div class="section7 flex-col"></div>
						</div>
					</div>
					<div class="main2 flex-col">
						<div class="group2 flex-col">
							<img
								class="img7"
								referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPnga6c7186171a13f265c0bd3458f687f03245f1584a63720f42c992ab777405eea"
							/>
							<div class="section8 flex-col"></div>
						</div>
					</div>
					<div class="block1 flex-col">
						<img
							class="img3"
							referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8e9bb4803bc260237c8fbb4862cdd5ae203a7a2a70f237d76536cd888098ed2a"
						/>
						<img
							class="pic2"
							referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngcdc15ec89287d9bcb351bfad9d436fd4afa25c5314cb14be5400de0e5679fa59"
						/>
						<img
							class="pic3"
							referrerpolicy="no-referrer"
							src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngfe1731ae1f57ed261f5dc0855919aac6256a55c5794d589e27da2c38e0007100"
						/>
					</div>
					<template v-if="devicewidth > 716">
						<span class="word9">Public&nbsp;offering&nbsp;1%</span>
						<span class="info4">Operational&nbsp;cooperation&nbsp;6%</span>
						<span class="txt9">Game&nbsp;output&nbsp;87%</span>
						<div class="main3 flex-col"></div>
						<div class="main4 flex-col">
							<div class="layer2 flex-row"><div class="box13 flex-col"></div></div>
							<div class="layer3 flex-row"><div class="section9 flex-col"></div></div>
						</div>
					</template>
					<img v-else class="dis" src="../../../static/img/demo/dis.jpg" alt="">
				</div>
				<div class="bd8 flex-col">
				</div>
			</div>
			<div class="section10 flex-col">
				<div class="section11 flex-col">
					<!-- <div class="outer3 flex-col justify-center align-center">
						<span class="word10">
							0xd0d**A346&nbsp;Participate&nbsp;in&nbsp;the&nbsp;competition&nbsp;and&nbsp;get&nbsp;1000HRW
						</span>
					</div> -->
					<span class="txt10">
						This will be your meta universe horse farm

					</span>
					<span class="word11">
						Horse racing Winner will be the best horse racing game on avalanche.
					</span>
					<div class="outer4 flex-row justify-between">
						<img
							@click="openLink('twitter')"
							class="label5"
							referrerpolicy="no-referrer"
							src="../../../static/copyright/twitter-circle-fill@2x.png"
						/>
						<img
							@click="openLink('telegram')"
							class="icon3"
							referrerpolicy="no-referrer"
							src="../../../static/copyright/telegram@2x.png"
						/>
						<div class="layer5 flex-col">
							<img
								@click="openLink('discord')"
								class="label6"
								referrerpolicy="no-referrer"
								src="../../../static/copyright/discord@2x.png"
							/>
						</div>
					</div>
					<div class="outer5 flex-col justify-center align-center">
						<div class="wrap2 flex-col">
							<div class="mod7 flex-col"></div>
							<video class="img8" controls poster="../../../static/img/SketchPng2300b16bdded7041b44e0f6885a4a3ae4e834971c8ec8c7d2cbbaef2cc1c5f94.png">
								<source src="https://masai.s3.amazonaws.com/e7171fb0922c24fe6c68b28a89784093.mp4" type="video/mp4">
								<source src="movie.ogg" type="video/ogg">
								Your browser does not support the video tag.
							</video>
						</div>
					</div>
				</div>
			</div>
			<div class="section12 flex-col justify-center align-center">
				<div class="bd9 flex-col align-center">
					<div class="group3 flex-col justify-between">
						<div class="wrap3 flex-col">
							<img
								class="pic9"
								referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8a5c68131bb6e575d9678583e36db8263887f5eece7e5b9335770352ffababe4"
							/>
						</div>
						<span class="infoBox3">
							All&nbsp;players&nbsp;with&nbsp;horses&nbsp;can&nbsp;get&nbsp;rich&nbsp;token&nbsp;rewards&nbsp;by&nbsp;participating&nbsp;in&nbsp;the&nbsp;competition.
							<br />
						</span>
					</div>
				</div>
			</div>
			<div class="section13 flex-col justify-center align-center">
				<div class="section14 flex-col">
					<div class="layer6 flex-col justify-between">
						<div class="layer7 flex-col">
							<img
								class="img9"
								referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPngf618d770e581f742fcfcdefffd122079c4f25502c65eb7b5c0a27fc7abcb95c0"
							/>
						</div>
						<div class="layer8">
							<span class="word12">
								Players&nbsp;can&nbsp;use&nbsp;shrw&nbsp;to&nbsp;trade&nbsp;horses&nbsp;and&nbsp;blind&nbsp;boxes&nbsp;in&nbsp;the&nbsp;market.
							</span>
							<span class="txt11">
								The&nbsp;price&nbsp;of&nbsp;horses&nbsp;will&nbsp;be&nbsp;determined&nbsp;by&nbsp;the&nbsp;buyer&nbsp;and&nbsp;the&nbsp;seller.
							</span>
						</div>
					</div>
				</div>
			</div>
			<div class="section15 flex-col align-center">
				<div class="block2 flex-col align-center">
					<div class="outer6 flex-col justify-between">
						<div class="bd10 flex-col">
							<img
								class="pic10"
								referrerpolicy="no-referrer"
								src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng8216b59c7270e171bae168857d3c4227e3d8782aac63c6c5a2497e1d30822064"
							/>
						</div>
						<span class="info7">
							Each&nbsp;player&nbsp;can&nbsp;use&nbsp;two&nbsp;horses&nbsp;to&nbsp;breed&nbsp;pups.&nbsp;The&nbsp;higher&nbsp;the&nbsp;pedigree&nbsp;of&nbsp;the&nbsp;stallion,&nbsp;the&nbsp;higher&nbsp;the&nbsp;pedigree&nbsp;of&nbsp;the&nbsp;young&nbsp;horse.
						</span>
					</div>
				</div>
			</div>
		</div>

		<div class="copy-right-cover">

			<div class="outer1 flex-row">
				<div class="icon-cover">
					<img
						referrerpolicy="no-referrer"
						src="../../../static/img/demo/SketchPngf56cecf6a3dde1390dc1bf066aec3ef691bb2722b3db7138a133ce2ead0ac379.png"
					/>
				</div>
				<div class="copy-right">
					<img
						@click="openLink('twitter')"
						class="icon1"
						referrerpolicy="no-referrer"
						src="../../../static/copyright/twitter-circle-fill@2x.png"
					/>
					<img
						@click="openLink('telegram')"
						class="label4"
						referrerpolicy="no-referrer"
						src="../../../static/copyright/telegram@2x.png"
					/>
					<img
						@click="openLink('discord')"
						class="icon2"
						referrerpolicy="no-referrer"
						src="../../../static/copyright/discord@2x.png"
					/>
				</div>
			</div>
			<div class="outer2 flex-row"><span class="info6">©2022&nbsp; Hoursefi.games</span></div>
		</div>
	</div>
</template>
<script>
// import connectMetaMask from '../../libs/pokect.js'
export default {
	data () {
		return {
			loopData0: [
				{
					lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng5bae63856a347b16ced9ed452df764faca68099b6a86f8fe57365cae6e385f62'
				},
				{
					lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng87ce483dbb871d165df0ddc3b7d0d57d12a34e907d4977dac41c28746f87ac99'
				},
				{
					lanhuimage0:
            'https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng648d95ad4cc7862d91004e523ca6cda57f8ac27de786dfb0f7d77abc9b1f0f91'
				}
			],
			constants      : {},
			devicewidth    : 0,
			showMenuItemVal: false,
			testn          : 0
		}
	},
	mounted () {
		// this.test()
		this.zoomDom()
	},
	methods: {
		test () {
			let arr = []

			setInterval(() => {
				window.open(arr[this.testn])
				this.testn += 1
			}, 2000)
		},
		gotoRout (rou) {
			if (rou === '/my_package') {
				let val = localStorage.getItem('showAdress') || null

				if (val) {
					this.$router.replace(rou)
				}
			} else {
				this.$router.replace(rou)
			}
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
		showMenuItem () {
			if (this.devicewidth < 716) {
				this.showMenuItemVal = !this.showMenuItemVal
			} else {
				this.showMenuItemVal = true
			}
		},
		isIos () {
			var u = navigator.userAgent
			var ua = u.toLowerCase()

			if (/iphone|ipad|ipod/.test(ua)) { // iOS 系统 ->  跳AppStore下载地址
				return true
			}
			return false
		},
		zoomDom () {
			this.devicewidth = document.documentElement.clientWidth
			let zoomDom = document.getElementById('zoomDom')

			if (this.devicewidth > 716) {
				let num = Number(this.devicewidth / 1920).toFixed(2)

				zoomDom.style.zoom = num
			} else {
				let dom1 = document.getElementsByClassName('outer5')[0]

				dom1.style.zoom = (this.devicewidth / 1200).toFixed(2)
			}
			if (this.devicewidth < 716 && this.devicewidth > 400) {
				let dom2 = document.getElementsByClassName('box8')[0]
				let dom3 = document.getElementsByClassName('box3')[0]
				let dom4 = document.getElementsByClassName('bd5')[0]
				let dom5 = document.getElementsByClassName('block1')[0]
				let dom6 = document.getElementsByClassName('main2')[0]
				let dom7 = document.getElementsByClassName('section12')[0]
				let dom8 = document.getElementsByClassName('section13')[0]
				let dom9 = document.getElementsByClassName('section15')[0]
				let dom10 = document.getElementsByClassName('bd2')[0]

				dom2.style.marginLeft = '-80px'
				dom3.style.marginLeft = '-80px'
				dom4.style.marginLeft = '445px'
				dom5.style.left = '780px'
				dom6.style.left = '780px'
				dom7.style.left = '350px'
				dom8.style.left = '350px'
				dom9.style.left = '350px'
				dom10.style.transform = 'translate(140px, -130px)'
			}
			if (this.isIos()) {
				let dom2 = document.getElementsByClassName('word3')[0]
				let dom3 = document.getElementsByClassName('txt5')[0]
				let dom4 = document.getElementsByClassName('info3')[0]

				dom2.style.zoom = 0.8
				dom3.style.zoom = 0.8
				dom4.style.zoom = 0.8
			}
		}
	}
}
</script>

<style lang="less" scoped>
@import '../../libs/common.css';
@import '../../libs/index.less';
@media screen and (max-width: 716px) {
	#zoomDom {
		width: 100vw;
		position: relative;
		height: 4250px;
		overflow: hidden;
		.page {
			background: #000;
			transform: translateX(-235px);
			.menu {
				width: 100vw;
				position: absolute;
				z-index: 100;top:80px;
				flex-direction: column;
				background: #000;
				.menu-button {
					display: block !important;
				}
				span {
					display: none;
					width: 100vw;
					text-align: left;
					margin-bottom: 20px;
					margin-left: 5px !important;
					margin-top: 0 !important;
					margin-right: 0 !important;
				}
			}
			.menu-item-cover {
				span {
					display: block;
				}
			}
			.bd2 {
				zoom: 0.6;
				transform: translate(120px, -130px);
			}
			.section10 {
				top: 300px;
				padding-left: 240px;
				span {
					width: 80%;
					margin-left: 20px;
				}
				.txt10 {
					width: 90vw;
					height: unset;
					line-height: 30px;
					font-size: 24px !important;
				}
				.word11 {
					width: 90vw;
					font-size: 14px;
					margin-top: 10px;
					line-height: 20px;
				}
				.outer4 {
					margin: 0;
					margin-left: 20px;
					margin-bottom: 10px;
				}
				.outer5 {
					margin-top: 60px;
				}
			}
			.section15,.section12,.section13 {
				zoom: 0.8;
				left: 325px;
			}
			.section12 {
				top: 1080px;
			}
			.section13 {
				top: 1595px;
			}
			.section15 {
				top: 2110px;
			}
			.main2 {
				zoom: 0.4;
				top: 3750px;
				left: 720px;
			}
			.block1 {
				zoom: 0.4;
				top: 4250px;
				left: 720px;
			}
			.bd5 {
				zoom: 0.45;
				margin-top: -280px;
			}
			.dis {
				width: 100vw;
				position: absolute;
				top: 2000px;
				left: 240px;
			}
			.box3 {
				margin-top:0 !important ;
				zoom: 0.45;
				margin-left: -120px;
			}
			.box8 {
				zoom: 0.45;
				margin-left: -120px;
			}
			.box101 {
				width: 100vw;
				flex-direction: column;
				align-items: center;
				& > div {
					margin-bottom: 20px;
				}
			}
		}
		.copy-right-cover {
			position: absolute;
			bottom: 130px;
			width: 100vw;
			display: flex;
			flex-direction: column;
			align-items: center;
			.outer1 {
				margin: 0;
				width: unset;
				display: flex;
				align-items: center;
				flex-direction: column;
			}
			.copy-right {
				margin: 0;
				margin-top: 10px;
			}
			.outer2 {
				margin: 0;
				margin-top: 60px;
				margin-bottom: 36px;
			}
		}
	}
}
</style>
