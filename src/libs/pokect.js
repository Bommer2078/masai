
import {
	ethers
} from 'ethers'
import MetaMaskOnboarding from '@metamask/onboarding'
import {
	Message
} from 'element-ui'

async function connectMetaMask () {
	if (!isMetaMaskInstalled()) {
		// 判断是否安装MetaMask扩展工具
		const forwarderOrigin = window.location.origin
		const onboarding = new MetaMaskOnboarding({
			forwarderOrigin
		})

		onboarding.startOnboarding()
		return
	}

	const provider = new ethers.providers.Web3Provider(window.ethereum)

	try {
		const accounts = await window.ethereum.request({
			method: 'eth_requestAccounts'
		})
		const { chainId } = await provider.getNetwork()
		const account = accounts[0]

		window.ethereum.on('networkChanged', () => {
			window.location.reload()
		})
		window.ethereum.on('accountsChanged', () => {
			window.location.reload()
		})
		window.ethereum.on('message', (message) => {
			console.log('message', message)
		})
		window.ethereum.on('disconnect', () => {
			localStorage.removeItem('walletType')
			localStorage.removeItem('walletTypeVerify')
			window.location.reload()
		})
		return {
			account,
			provider,
			chainId
		}
	} catch (error) {
		console.log(error)
		Message.error(error)
		return false
	}

	function isMetaMaskInstalled () {
		const { ethereum } = window

		return Boolean(ethereum && ethereum.isMetaMask)
	}
}

export default connectMetaMask
