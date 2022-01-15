const uploadImg = {
	getSuffix (name) {
		let suffixIndex = name.lastIndexOf('.')

		if (suffixIndex === -1) {
			return ''
		}
		return name.substring(++suffixIndex)
	},
	isImg (file) {
		let suffix = this.getSuffix(file.name)

		return [ 'jpg', 'png', 'jpeg', 'gif', 'JPG', 'PNG', 'JPEG', 'GIF' ].indexOf(suffix) !== -1
	}
}

export default uploadImg
