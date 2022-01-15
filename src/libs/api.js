const val = process.env.API_ROOT
const api = {
	// admin
	loginTo        : `${val}/user/admin/login`,
	createRound    : `${val}/horse_main/api/v1/create_round`,
	saveTransaction: `${val}/horse_main/api/v1/save_transaction`,
	getTransaction : `${val}/horse_main/api/v1/get_transaction`,
	getRound       : `${val}/horse_main/api/v1/get_round`
}

export default api
