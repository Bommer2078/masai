<template>
	<div class="img-group">
		<div class="img-cover" v-for="(item,index) in imgListCopy" :key="index">
			<img :src="item" class="img-item" >
			<img src="/static/img/close.svg" class="del-img" @click="delImg(index)">
		</div>
		<div class="img-cover"  v-show="imgListCopy.length < limitNum"  v-loading="loadingImg">
			<img src="/static/img/plus_icon.png" class="img-item">
			<input
				v-if="!loadingImg"
				class="file-img"
				type="file"
				accept="image/png, image/jpeg, image/jpg"
				@change="changeCover($event)">
		</div>

	</div>
</template>

<script>
import uploadImg from '../../libs/upload.js'
export default {
	props: {
		limitNum: {
			type   : Number,
			default: 9
		},
		imgList: {
			type: Array,
			default () {
				return []
			}
		}
	},
	data () {
		return {
			loadingImg: false
		}
	},
	computed: {
		imgListCopy: {
			get () {
				return this.imgList
			},
			set (val) {
				this.$emit('update:imgList', val)
			}
		}
	},
	methods: {
		changeCover (event) {
			let file = event.target.files[0]
			var formData = new FormData()

			formData.append('file', file) // 添加图片信息的参数
			// formData.append('need_thumb', 1) // 添加其他参数
			/* 检测是否是图片类型 */
			console.log(file)
			if (!uploadImg.isImg(file)) {
				this.$message.error('请选择正确图片类型')
				return
			}
			/* 图片大小，单位：字节，按 1024 转换 */
			let size = (file.size / 1024 / 1024).toFixed(2)

			if (size > 3) {
				this.$message.error('图片大小不能超过3M~')
				return
			}
			this.imgLoading = true
			this.$http.post(this.$api.uploadImg, formData)
				.then((res) => {
					if (res.data.code === 200) {
						this.imgListCopy.push(res.data.data)
						this.$message('上传成功')
					}
				})
				.finally(() => {
					this.imgLoading = false
				})
		},
		delImg (index) {
			this.imgListCopy.splice(index, 1)
		}
	}
}
</script>

<style lang="less">
	.img-group {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-start;
		width: 510px;
		.img-cover {
			margin-bottom: 20px;
			margin-right: 20px;
			position: relative;
		}
		.img-item {
			width: 120px;
			height: 120px;
			background: #ccc;
		}
		.del-img {
			position: absolute;
			top: -10%;
			right: -8%;
			cursor: pointer;
		}
		.file-img {
			display: block;
			width: 150px;
			height: 100px;
			font-size: 0;
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			opacity: 0;
		}
	}
</style>
