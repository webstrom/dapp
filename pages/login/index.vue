<template>
	<view class="p-6 home-background">
		<view style="height: var(--status-bar-height);width: 100%;"></view>

		<view class="logo-center">
			<image class="logo" src="/static/logo.png"></image>
			<view class="text-area mt-3">
				<text class="title">{{title}}</text>
			</view>
		</view>
		<view class="background-white border-radius-2 p-4 mt-3">

			<view class="usersLogin ">
				<uni-forms ref="forms" :modelValue="UserData" :rules="rules">
					<uni-forms-item label="" name="account">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe60e;</i>
							<input v-model="UserData.account" class="p-1 bl-1 ml-2 pl-2 width-100" type="text"
								placeholder="Enter the phone number" />
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="password">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe60f;</i>
							<input v-model="UserData.password" class="p-1 bl-1 ml-2 pl-2 width-100" type="password"
								placeholder="Create password" />
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="code">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe83e;</i>
							<input v-model="UserData.code" class="p-1 bl-1 ml-2 pl-2 width-100" type="text"
								placeholder="Enter the verification code" />
						</view>
						<view class="flex justify-between align-center mt-3">
							<image :src="'data:image/jpg;base64,'+Images.value"
								:style="Images.value==''?'width: 300upx;max-height: 100upx;':'width: 300upx;'"
								mode="widthFix"></image>
							<text class="color-1" @click="KaptchaHoled">Change one</text>
						</view>
					</uni-forms-item>
					<!-- <uni-forms-item label="" name="account">
						<view class="phonecode flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe914;</i>
							<input v-model="UserData.account" class="p-1 bl-1 ml-2 pl-2 width-100" type="text"
								placeholder="Enter your mobile phone number" />
						</view>
					</uni-forms-item> -->
				</uni-forms>
			</view>
			<!-- <view class="mt-3">
				<radio style="transform: scale(0.6)" :checked="true"></radio>
				<text class="font-small">User Agreement <text class="color-1">agreement</text></text>
			</view> -->
			<view class="btn-login font-lg mt-5 p-3 border-radius-2 balens" @click="SignInHoled">Sign In</view>
			<!-- <view class="btn-login font-lg mt-2 p-3">register</view> -->
			<view class="flex justify-between font width-100 mt-5">
				<text class="color-1" @click="Register">Sign up</text>
				<text class="color-1" @click="ForgotPassword">Forgot password</text>
			</view>
		</view>

	</view>
</template>

<script>
	import md5 from 'js-md5'
	import {
		ServerMguserApiKaptcha,
		ServerMguserApiAppLogin,
		ServerMessageApiIsByAddress
	} from '../../server/server';
	export default {
		data() {
			return {
				title: 'UUBB',
				UserData: {},
				isEmailCode: 0,
				tronWeb: '',
				walletAddress: '',
				Images: {
					value: ''
				},
				rules: {
					account: {
						rules: [{
							required: true,
							errorMessage: 'Please enter your mobile phone number',
						}]
					},
					password: {
						rules: [{
							required: true,
							errorMessage: 'Create password',
						}]
					},
					code: {
						rules: [{
							required: true,
							errorMessage: 'Please enter your email verification code',
						}]
					}
				}
			}
		},
		onLoad(option) {
			this.KaptchaHoled()
			const address = setInterval(()=>{
				if (window.okxwallet) {
					uni.hideToast()
					window.okxwallet.tronLink.request({
						method: "tron_requestAccounts"
					});
					if (window.okxwallet.tronLink.ready) {
						this.tronWeb = window.okxwallet.tronLink.tronWeb;
						this.walletAddress = tronWeb.defaultAddress.base58;
						if(option&&option.type != 'register'){
							this.IsByAddress()
						}
					}
					clearInterval(address)
				}else if (window.tronWeb) {
					// window.tronLink.request({
					// 	method: "tron_requestAccounts"
					// });
					uni.hideToast()
					this.tronWeb = window.tronWeb;
					this.walletAddress = this.tronWeb.defaultAddress.base58;
					clearInterval(address)
					if(option&&option.type != 'register'){
						this.IsByAddress()
					}
				} else {
					uni.showToast({
						title: 'the dapp only support tron...',
						icon:'none',
						duration: 100000,
						mask: true
					});
				}
			},200)
		},
		onBackPress() {
			if (options.from == 'backbutton') {
				return false;
			} else if (options.from == 'navigateBack') {
				return false;
			}
		},
		mounted(){
			const token = uni.getStorageSync('useer_date');
			if(token && token.account){
				this.UserData.account = token.account.substr(2,10)
			}
		},
		methods: {
			IsByAddress(){
				ServerMessageApiIsByAddress({
					usdtAddress: this.walletAddress
				}).then((res) => {
					console.log(this.sellCode)
					if (!(!res.data.flag)) {
						uni.reLaunch({
							url: "/pages/register/index?type=register",
							success: () => {}
						})
					}
				})
			},
			KaptchaHoled() {
				ServerMguserApiKaptcha().then((res) => {
					this.Images = res.data
				})
			},
			Register() {
				uni.navigateTo({
					url: '/pages/register/index?type=register'
				});
			},
			ForgotPassword() {
				uni.navigateTo({
					url: '/pages/my/modify/password?type=2'
				});
			},
			SignInHoled() {
				this.$refs.forms.validate().then(res => {
					res.password = md5(res.password).toUpperCase()
					res.codeId = this.Images.id
					res.usdtAddress = this.walletAddress
					ServerMguserApiAppLogin(res).then((reslut) => {
						if (!reslut.data.flag) {
							uni.setStorageSync('useer_date', reslut.data);
							uni.switchTab({
								url: '/pages/index/index'
							});
						} else {
							uni.navigateTo({
								url: '/pages/login/equipment/index?account=' + res.account
							});
						}
					})
				}).catch(err => {
				})
			}
		}
	}
</script>

<style>
	.scroll-login {
		width: 100%;
		height: calc(100vh - 130rpx);
	}
</style>