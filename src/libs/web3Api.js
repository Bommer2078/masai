
// import testJSON from './avax-testnet/BlindBox.json'
let Web3 = require('web3')

console.log('Web3', Web3)
// const nodeUrl = 'https://speedy-nodes-nyc.moralis.io/82484e370985adc55a98a91b/avalanche/mainnet'
// const provider = new Web3.providers.HttpProvider(nodeUrl)
// const web3 = new Web3(provider)
// let nftAddress = '0x5c98461B6f528d8d42F6BeAcd67A3F286346B2Eb'
// let walletAddress = '0x74b7f4731818a003caB390c2A3D396B5A24dE9FD'
// // let testABI = testJSON.abi
// let minABI = [ {
// 	'constant': true,
// 	'inputs'  : [ {'name': '_owner', 'type': 'address'} ],
// 	'name'    : 'balanceOf',
// 	'outputs' : [ {'name': 'balance', 'type': 'uint256'} ],
// 	'type'    : 'function'
// }, {
// 	'constant': true,
// 	'inputs'  : [],
// 	'name'    : 'decimals',
// 	'outputs' : [ {'name': 'balance', 'type': 'uint256'} ],
// 	'type'    : 'function'
// }
// ]

// const contract = new web3.eth.Contract(minABI, nftAddress)

async function getBalance (val) {
	// let balance = await contract.methods.balanceOf(walletAddress).call()

	// return balance
}

export {getBalance}
