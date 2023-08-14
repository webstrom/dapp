<script>
	import {
		ServerMessageApiIsByAddress,
		ServerMguserApiAppLogin
	} from '@/server/server.js'
	// import TronWeb from 'tronweb'
	// import web3 from 'web3'
	// import {
	// 	ServerMguserApiKaptcha,
	// 	ServerMguserApiAppLogin,
	// 	ServerMessageApiIsByAddress
	// } from '../../server/server';
	export default {
		data() {
			return {
				defaultAddress: '',
				walletAddress: '',
				Inval: 0,
				chainId: '0x38',
				sellCode: ''
			}
		},
		onLaunch: function() {
			
			
			
			// const tronWebAddress = setInterval(() => {
			// 	if (window.tronWeb) {
			// 		clearInterval(tronWebAddress)
			// 		ServerMessageApiIsByAddress({
			// 			usdtAddress: window.tronWeb.defaultAddress.base58
			// 			// usdtAddress: 'TPYfSEp4qnRNQoiPe2wcG6BduT96NuJpv5'
			// 		}).then((res) => {
			// 			// ServerMessageApiIsByAddress({usdtAddress:'TC6YJqjhb3RBfCNPQ15R7JWomXAPXfQpsq'}).then((res)=>{
			// 			if (!res.data.flag) {
			// 				const token = uni.getStorageSync('useer_date');
			// 				if (token) {
			// 					if (!token.token) {
			// 						uni.reLaunch({
			// 							url: "/pages/login/index",
			// 							success: () => {
			// 								//plus.navigator.closeSplashscreen();
			// 							}
			// 						})
			// 						return false
			// 					}
			// 				} else {
			// 					uni.reLaunch({
			// 						url: "/pages/login/index",
			// 						success: () => {
			// 							//plus.navigator.closeSplashscreen();
			// 						}
			// 					})
			// 					return false
			// 				}
			// 			} else {
			// 				uni.reLaunch({
			// 					url: "/pages/register/index?type=register",
			// 					success: () => {}
			// 				})
			// 				return false
			// 			}
			// 		})
			// 	} else if (window.okxwallet) {
			// 		window.okxwallet.tronLink.request({
			// 			method: "tron_requestAccounts"
			// 		});
			// 		clearInterval(tronWebAddress)

			// 		ServerMessageApiIsByAddress({
			// 			usdtAddress: window.okxwallet.tronLink.tronWeb.defaultAddress.base58
			// 		}).then((res) => {
			// 			// ServerMessageApiIsByAddress({usdtAddress:'TC6YJqjhb3RBfCNPQ15R7JWomXAPXfQpsq'}).then((res)=>{
			// 			if (!res.data.flag) {
			// 				const token = uni.getStorageSync('useer_date');
			// 				if (token) {
			// 					if (!token.token) {
			// 						uni.reLaunch({
			// 							url: "/pages/login/index",
			// 							success: () => {
			// 								//plus.navigator.closeSplashscreen();
			// 							}
			// 						})
			// 						return false
			// 					}
			// 				} else {
			// 					uni.reLaunch({
			// 						url: "/pages/login/index",
			// 						success: () => {
			// 							//plus.navigator.closeSplashscreen();
			// 						}
			// 					})
			// 					return false
			// 				}
			// 			} else {
			// 				uni.reLaunch({
			// 					url: "/pages/register/index?type=register",
			// 					success: () => {}
			// 				})
			// 				return false
			// 			}
			// 		})
			// 	}
			// 	// else{
				
				// uni.reLaunch({
				// 	url: "/pages/index/index",
				// 	success: () => {
				// 		//plus.navigator.closeSplashscreen();
				// 	}
				// })
			
				// }
			// })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/styles/index.scss';
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	// /* #ifndef APP-NVUE */
	// @import '@/static/customicons.css';
</style>
<style>
	@import '@/styles/font/iconfont.css';

	.uni-mask {
		background-color: rgba(0, 0, 0, 0.4) !important
	}
</style>