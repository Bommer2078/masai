const sideClomunDate = {
	data () {
		return {
			clomunArr: [
				{
					label   : '盲盒管理',
					nodeKey : 'boxManagement',
					children: [ {
						label     : '盲盒管理',
						nodeKey   : 'boxManagementEdit',
						routerLink: '/boxManagement/boxManagementEdit'
					}, {
						label     : '盲盒购买记录',
						nodeKey   : 'boxOrderRecord',
						routerLink: '/boxManagement/boxOrderRecord'
					} ]
				}
			],
			defaultProps: {
				children: 'children',
				label   : 'label'
			}
		}
	}
}

export default sideClomunDate
