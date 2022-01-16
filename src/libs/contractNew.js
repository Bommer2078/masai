
import testJSON from './avax-testnet/BlindBox.json'
import { utils, providers, Contract } from 'ethers'
var myContract = null
var signer = null
var currentWallet = null
let connectWallet = async () => {
	if (window.ethereum) {
		try {
			let [ user ] = await window.ethereum.request({ method: 'eth_requestAccounts' })

			currentWallet = user
			sessionStorage.setItem('currentWallet', user)
			let provider = await new providers.Web3Provider(window.ethereum)

			signer = provider.getSigner()

			console.log('用户地址：' + user)
			// provider.getBlockNumber().then((number) => console.log('最新区块号：' + number))
			let str = user

			document.getElementById('connectButton').innerText = str.split('').slice(0, 5).join('') + '...' + str.split('').slice(-4).join('')

			let contractAddress = '0xCa07Cd5dF8dCBDc6A55305E80573F1CDB90aCaCd'
			let temp = JSON.parse(JSON.stringify(testJSON.abi))

			myContract = new (window._ethers.Contract || Contract)(contractAddress, temp, signer)
			return true
		} catch (error) {
			console.log(error)
			return false
		}

		// 从已知的transhash中拿到id
		// let data = await this.provider.getTransactionReceipt('0x6f4f5a41c8f0fc17696d5e6c66013beda2bb57aac30816a9b6339cd0f44ec4af')
		// let tokenId = (data.logs[0]).topics[3]

		// Contract.displayedBalanceOf(user).then((res) => {
		// 	console.log('balanceOf: ' + res)
		// })
	}
}

let getBalanceOf = async () => {
	let res = await myContract.balanceOf(currentWallet)

	if (res._hex) {
		return parseInt(res._hex, 16)
	}
}
let getNTFList = async () => {
	// let options = { chain: '0xa869', address: '0xDB193F3a78AaC74A77f2fEE96Db210C88a9c2438', token_address: '0xCa07Cd5dF8dCBDc6A55305E80573F1CDB90aCaCd' }
	// let polygonNFTs = await this.$moralis.Web3API.account.getNFTsForContract(options)

	// console.log('polygonNFTs', polygonNFTs)
}
let buyBlindBox = async (num) => {
	try {
		let res = await myContract.buy(num, {
			value: utils.parseEther('5').mul(num)
		})

		console.log(111, res)
		let tx = await res.wait()

		console.log(222, tx)
		return {done: true, ...tx}
	} catch (err) {
		console.log(333, err)
		return {done: false, ...err}
	}
}
let getCurrentTokenId = async () => {
	let res = await myContract.currentTokenId()

	console.log(res)
}
let getHistory = async () => {
}
let openBlindBox = async (tokenId = 2507) => {
	let res = await myContract.ownerOf(tokenId)

	if (res.toLowerCase() === currentWallet) {
		let val = await myContract.open(tokenId)

		console.log(val)
	}
}

export {connectWallet, buyBlindBox, getCurrentTokenId, getHistory, openBlindBox, getBalanceOf, getNTFList}
