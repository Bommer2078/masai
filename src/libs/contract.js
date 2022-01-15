
import MetaMaskOnboarding from '@metamask/onboarding'
import testJSON from './avax-testnet/BlindBox.json'
const Web3 = require('Web3')
const initialize = () => {
	// Have to check the ethereum binding on the window object to see if it's installed
	const ethereum = window.ethereum
	// You will start here
	const onboardButton = document.getElementById('connectButton')
	// const getAccountsButton = document.getElementById('getAccounts')
	// const getAccountsResult = document.getElementById('getAccountsResult')
	const isMetaMaskInstalled = () => {
		return Boolean(ethereum && ethereum.isMetaMask)
	}
	// We create a new MetaMask onboarding object to use in our app
	const forwarderOrigin = window.location.origin
	const onboarding = new MetaMaskOnboarding({
		forwarderOrigin
	})

	// This will start the onboarding proccess
	const onClickInstall = () => {
		onboardButton.innerText = 'Onboarding in progress'
		onboardButton.disabled = true
		// On this object we have startOnboarding which will start the onboarding process for our end user
		onboarding.startOnboarding()
	}
	const MetaMaskClientCheck = () => {
		// Now we check to see if MetaMask is installed
		if (!isMetaMaskInstalled()) {
			// If it isn't installed we ask the user to click to install it
			onboardButton.innerText = 'Click here to install MetaMask!'
			onboardButton.onclick = onClickInstall
			onboardButton.disabled = false
		} else {
			// If it is installed we change our button text
			onboardButton.onclick = onClickConnect
			onboardButton.disabled = false
		}
		// getAccountsButton.addEventListener('click', async () => {
		// 	// we use eth_accounts because it returns a list of addresses owned by us.
		// 	const accounts = await ethereum.request({ method: 'eth_accounts' })
		// 	// We take the first address in the array of addresses and display it

		// 	getAccountsResult.innerHTML = accounts[0] || 'Not able to get accounts'
		// })
	}
	const onClickConnect = async () => {
		try {
			console.log(123456)
			// Will open the MetaMask UI
			// You should disable this button while the request is pending!
			let res = await ethereum.request({ method: 'eth_requestAccounts' })
			let arr = res[0].split('')
			let l = arr.length
			let str = `${arr[0]}${arr[1]}${arr[2]}${arr[3]}${arr[4]}...${arr[l - 4]}${arr[l - 3]}${arr[l - 2]}${arr[l - 1]}`

			onboardButton.innerText = str
			localStorage.setItem('showAdress', str)
			localStorage.setItem('walletAdress', res[0])
			const web3 = new Web3(new Web3.providers.HttpProvider('https://api.avax-test.network/ext/bc/C/rpc'))
			const nftAddress = '0xCa07Cd5dF8dCBDc6A55305E80573F1CDB90aCaCd'

			const walletAddress = res[0]
			const contract = new web3.eth.Contract(testJSON.abi, nftAddress)

			contract.methods.balanceOf(walletAddress).call().then((res) => {
				localStorage.setItem('balanceOf', res)
				console.log(55555555555555, res)
			})
			console.log('contract.methods', contract.methods)
			contract.methods.buy(1).then((res) => {
				console.log(res)
			})
		} catch (error) {
			// console.error(error)
		}
	}

	MetaMaskClientCheck()
}

export default initialize
