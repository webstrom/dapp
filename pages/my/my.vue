<template>
	<view class="home-background">
		<!-- <view style="height: var(--status-bar-height);width: 100%;"></view> -->

		<view class="p-3 border-radius-1 pb-1 pt-2">
			<view class="text-area text-align-center p-3 background-white border-radius-2">
				<view class="" style="width: 28%;max-width: 280upx;max-height: 280upx;overflow: hidden;margin: auto;">
					<image class="border-radius-10 width-100" style="max-width: 280upx;max-height: 280upx;" mode="widthFix"
						src="/static/touxiang.png"></image>
				</view>
				<view class="text-align-center flex justify-center">
					<text>My Wallet Address</text>
				</view>
				<view class="title font mt-2" @click="orderCodeHoled(walletAddress)">{{walletAddress}}</view>
			</view>
			<!-- <view class="p-3 flex align-center background-white border-radius-2 mt-1">
				<view class="ml-2 width-100 font-md color-2">
					<view class="border-bottom pb-2 flex justify-between" style="text-align: left;"><text>E-mail:</text>
						<text>{{userData.email}}</text>
					</view>
					<view class="border-bottom pb-2 pt-2 flex justify-between" style="text-align: left;">
						<text>User:</text> <text>{{userData.username}}</text>
					</view>
					<view class="border-bottom pb-2 pt-2 flex justify-between" style="text-align: left;">
						<text>Phone:</text> <text>{{userData.account}}</text>
					</view>
					<view class="pt-2 flex justify-between" style="text-align: left;"><text>Invitation Code:</text> <text class="color-1" @click="orderCodeHoled(userData.invitationCode)">{{userData.invitationCode}}</text></view>
				</view>
			</view> -->
		</view>

		<view class="p-3 pt-0">
			<view class="background-white border-radius-1 border-bottom ">
				<view class="flex justify-between align-center p-3"
					@click="navigateToClick('/pages/index/kickback/index')">
					<view class="flex align-center">
						<i class="iconfont font-lg font-weight-bolder color-2">&#xe603;</i>
						<text class="ml-1 color-icon">Bonus</text>
					</view>
					<view>
						<!-- <text class="mr-3 color-1">980.00</text> -->
						<i class="iconfont font-lg color-test color-icon">&#xe856;</i>
					</view>
				</view>
			</view>
			<view class="background-white border-radius-1 border-bottom mt-1">
				<view class="flex justify-between align-center p-3"
					@click="navigateToClick('/pages/my/withdraw/index?type=1')">
					<view class="flex align-center">
						<i class="iconfont font-lg font-weight-bolder color-2">&#xe91c;</i>
						<text class="ml-1 color-icon">Withdraw</text>
					</view>
					<view>
						<text class="mr-3 color-1"></text>
						<i class="iconfont font-lg color-test color-icon">&#xe856;</i>
					</view>
				</view>
			</view>
			<view class="flex justify-between background-white align-center border-radius-1 border-bottom p-3 mt-1"
				@click="navigateToClick('/pages/my/Bank/index')">
				<view class="flex align-center">
					<i class="iconfont font-lg font-weight-bolder color-icon">&#xe835;</i>
					<text class="ml-1 color-icon">Bank Details</text>
				</view>
				<view>
					<!-- <text class="mr-3">013***980</text> -->
					<i class="iconfont font-lg color-test color-icon">&#xe856;</i>
				</view>
			</view>

			<view class="flex justify-between align-center p-3 border-bottom background-white  border-radius-1 mt-1"
				@click="navigateToClick('/pages/my/Invite/index')">
				<view class="flex align-center">
					<i class="iconfont font-lg font-weight-bolder color-2">&#xe7cd;</i>
					<text class="ml-1 color-icon">Invite Friends</text>
				</view>
				<i class="iconfont font-lg color-test color-icon">&#xe856;</i>
			</view>

			<!-- <view class="flex justify-between align-center p-3 background-white border-radius-1 mt-1"
				@click="navigateToClick('/pages/my/modify/password?type=1')">
				<view class="flex align-center">
					<i class="iconfont font-lg font-weight-bolder color-2">&#xe60f;</i>
					<text class="ml-1 color-icon">Change Login Password</text>
				</view>
				<view>
					<i class="iconfont font-lg color-test color-icon">&#xe856;</i>
				</view>
			</view>
			
			<view class="flex justify-between align-center p-3 background-white border-radius-1 mt-1"
				@click="navigateToClick('/pages/my/modify/password?type=3')">
				<view class="flex align-center">
					<i class="iconfont font-lg font-weight-bolder color-2">&#xe60f;</i>
					<text class="ml-1 color-icon">Change Withdraw Password</text>
				</view>
				<view>
					<i class="iconfont font-lg color-test color-icon">&#xe856;</i>
				</view>
			</view> -->

			<view class="flex justify-between align-center p-3 background-white border-radius-1 mt-1"
				@click="navigateToClick('/pages/my/customer/index')">
				<view class="flex align-center">
					<i class="iconfont font-lg font-weight-bolder color-2">&#xe959;</i>
					<text class="ml-1 color-icon">Online Service</text>
				</view>
				<view>
					<i class="iconfont font-lg color-test color-icon">&#xe856;</i>
				</view>
			</view>

			<!-- <view class="flex justify-between align-center p-3 background-white border-radius-1 mt-1"
				@click="getVerification">
				<view class="flex align-center">
					<i class="iconfont font-lg font-weight-bolder color-2">&#xe868;</i>
					<text class="ml-1 color-icon">Updates</text>
				</view>
			</view> -->

			<!-- <view class="btn-login font-lg mt-2 p-3 mt-6 border-radius-2 background-loginout" @click="loginOutHoled">
				Logout</view> -->
		</view>
	</view>
</template>

<script>
	import {
		ServerMguserApiLoginout,
		ServerMessageApiGetVersion
	} from '../../server/server';
	export default {
		data() {
			return {
				userData: {},
				version: '',
				url: '',
				progress: 0,
				tronWeb:'',
				walletAddress:''
			}
		},
		onLoad() {
			this.userData = uni.getStorageSync('useer_date');
			const address = setInterval(()=>{
				if (window.okxwallet) {
					window.okxwallet.tronLink.request({
						method: "tron_requestAccounts"
					});
					if (window.okxwallet.tronLink.ready) {
						this.tronWeb = window.okxwallet.tronLink.tronWeb;
						this.walletAddress = tronWeb.defaultAddress.base58;
					}
					clearInterval(address)
				}else if (window.tronWeb) {
					this.tronWeb = window.tronWeb;
					this.walletAddress = this.tronWeb.defaultAddress.base58;
					clearInterval(address)
				}
			},200)
		},
		methods: {
			orderCodeHoled(date) {
				uni.setClipboardData({
					data: date,
					success: () => {
						uni.showToast({
							icon: 'success',
							title: 'Copy Success'
						});
					}
				});
			},
			//检测更新
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
						if (resultVersion == version) {
							uni.showModal({
								title: 'Tips',
								content: `It's already the latest version`,
								showCancel: false,
								confirmText: 'close'
							});
							return false
						} else {
							uni.showLoading({
								title: "Downloading... "+'\n'+ JSON.stringify(this.progress)+'%',
								mask: true,
							});
							const downloadTask = uni.downloadFile({
								url: url,
								success: (downloadResult) => {
									if (downloadResult.statusCode === 200) {
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
													plus.runtime.restart();
												}, 3000)
											},
											(e) => {
												// console.error('install fail...');
												uni.hideLoading()
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
									uni.hideLoading()
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
					})
				});
			},
			navigateToClick(url) {
				uni.navigateTo({
					url: url
				});
			},
			loginOutHoled() {
				uni.showModal({
					title: 'Tips',
					// 提示文字
					content: 'Are you sure to log out？',
					// 取消按钮的文字自定义
					cancelText: "NO",
					// 确认按钮的文字自定义
					confirmText: "YES",
					//删除字体的颜色
					confirmColor: '',
					//取消字体的颜色
					cancelColor: '',
					success: function(res) {
						if (res.confirm) {
							// 执行确认后的操作
							ServerMguserApiLoginout().then((res) => {
								uni.showToast({
									icon: 'none',
									duration: 3000,
									title: `${res.msg}`,
								});
								setTimeout(() => {
									uni.navigateTo({
										url: '/pages/login/index'
									});
								}, 3000)
								// uni.clearStorageSync();
							})
						} else {
							// 执行取消后的操作
						}
					}
				})

			}
		}
	}
</script>