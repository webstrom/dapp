<template>
	<view class="p-3 color-2">
		<view class="usersLogin">
			<!-- <view class="logo-center mb-6">
					<image class="logo" src="/static/logo.jpeg"></image>
					<view class="text-area">
						<text class="title">{{title}}</text>
					</view>
				</view> -->
			<uni-forms ref="form" :modelValue="UserData" :rules="rules">
				<view class="background-white border-radius-2 p-3">
					<uni-forms-item label="" name="account">
						<view class="phonecode flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe914;</i>
							<input v-model="UserData.account" maxlength="10" class="p-1 bl-1 ml-2 pl-2 width-100" type="text"
								placeholder="Enter your mobile phone number" />
							<!-- <view class="verification flex align-center pl-3 pr-3">verify</view> -->
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="phoneCode">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe83e;</i>
							<input v-model="UserData.phoneCode" class="p-1 bl-1 ml-2 pl-2 width-100" type="text"
								placeholder="Your phone verification code" />
						</view>
					</uni-forms-item>
					<view class="font-small flex justify-between">
						<text>Click send verification code </text>
						<text v-if="seconds === 0" class="color-1" @click="SendPhoneVerification">Send
							Verification</text>
						<text v-else>After {{seconds}} seconds Resend</text>
					</view>
				</view>
				<view class="background-white border-radius-2 p-3 mt-2">
					<uni-forms-item label="" name="email">
						<view class="phonecode flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe920;</i>
							<input v-model="UserData.email" class="p-1 bl-1 ml-2 pl-2 width-100" type="text"
								placeholder="Enter your email address" />
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="emailCode">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe83e;</i>
							<input v-model="UserData.emailCode" class="p-1 bl-1 ml-2 pl-2 width-100" type="text"
								placeholder="Your email verification code" />
						</view>
					</uni-forms-item>
					<view class="font-small flex justify-between">
						<text>Click send verification code </text>
						<text v-if="isEmailCode === 0" class="color-1" @click="SendEmailCode">Send Verification</text>
						<text v-else>After {{isEmailCode}} seconds Resend</text>
					</view>
				</view>
				<view class="background-white border-radius-2 p-3 mt-2">
					<uni-forms-item label="" name="userName">
						<view class="phonecode flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe7ce;</i>
							<input v-model="UserData.userName" class="p-1 bl-1 ml-2 pl-2 width-100" type="text"
								placeholder="Please enter your name" />
							<!-- <view class="verification flex align-center pl-3 pr-3">verify</view> -->
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="usdtAddress">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe944;</i>
							<input v-model="walletAddress" class="p-1 bl-1 ml-2 pl-2 width-100" disabled="true" type="text"
								placeholder="Enter your USDT wallet address" />
						</view>
					</uni-forms-item>
					<!-- <view class="font mt-1" style="color: red;">Tips: Please enter the correct U address you are using</view> -->
					<uni-forms-item label="" name="invitationCode">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe83e;</i>
							<input v-model="UserData.invitationCode" class="p-1 bl-1 ml-2 pl-2 width-100" type="text"
								placeholder="Please enter the invitation code" />
						</view>
					</uni-forms-item>
					
					<uni-forms-item label="" name="password">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe60f;</i>
							<input v-model="UserData.password" class="p-1 bl-1 ml-2 pl-2 width-100" type="text"
								placeholder="Create password" />
						</view>
					</uni-forms-item>
					<view class="flex fle align-center border-1 p-1 font-md">
						<text class="pl-1"></text>
						<i class="iconfont font-lg font-weight-bolder color-test">&#xe60f;</i>
						<input v-model="withdrawPassword" class="p-1 bl-1 ml-2 pl-2 width-100" type="text"
							placeholder="Confirm Password" />
					</view>
				</view>
			</uni-forms>
			<!-- <view class="mt-3">
				<radio class="color-1" :checked="agreementChecked" style="transform: scale(0.6)"></radio>
				<text class="font-small">User Agreement <text class="color-1">agreement</text></text>
			</view> -->
			<view class="btn-login font-lg mt-5 p-3 border-radius-2 balens" @click="RegisterHoled">Register</view>
			<view class="flex justify-between font width-100 mt-5">
				<text class="color-1"></text>
				<text class="color-1" @click="LoginIn">Existing account to log in</text>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		ServerMguserApiUserRegister,
		ServerEmailApiSend,
		ServerSysSmsApiSend
	} from '../../server/server'
	import md5 from 'js-md5'
	export default {
		data() {
			return {
				agreementChecked: true,
				UserData: {

				},
				confirmpassword: '',
				walletAddress: '',
				tronWeb: '',
				withdrawPassword:'',
				seconds: 0,
				isEmailCode: 0,
				rules: {
					account: {
						rules: [{
							required: true,
							errorMessage: 'Please enter your mobile phone number',
						}]
					},
					phoneCode: {
						rules: [{
							required: true,
							errorMessage: 'Please enter your phone verification code',
						}]
					},
					email: {
						rules: [{
							required: true,
							errorMessage: 'Please enter your email address',
						}]
					},
					emailCode: {
						rules: [{
							required: true,
							errorMessage: 'Please enter your email verification code',
						}]
					},
					userName: {
						rules: [{
							required: true,
							errorMessage: 'Please enter your name',
						}]
					},
					// usdtAddress:{
					// 	rules:[
					// 		{
					// 			required: true,
					// 			errorMessage: 'Please enter your usdt wallet address',
					// 		}
					// 	]
					// },
					// invitationCode: {
					// 	rules: [{
					// 		required: true,
					// 		errorMessage: 'Please enter the invitation code',
					// 	}]
					// },
					password: {
						rules: [{
							required: true,
							errorMessage: 'Please enter an password',
						}]
					},
					withdrawPassword: {
						rules: [{
							required: true,
							errorMessage: 'Please enter an withdrawal password',
						}]
					}
				}
			}
		},
		mounted() {
			const address = setInterval(()=>{
				if (window.okxwallet) {
					window.okxwallet.tronLink.request({
						method: "tron_requestAccounts"
					});
					uni.hideToast()
					if (window.okxwallet.tronLink.ready) {
						this.tronWeb = window.okxwallet.tronLink.tronWeb;
						this.walletAddress = tronWeb.defaultAddress.base58;
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
		methods: {
			SendEmailCode() {
				if (this.UserData.email == undefined || this.UserData.email == '') {
					uni.showToast({
						icon: 'none',
						duration: 3000,
						title: `Please enter your email address`,
					});
					return false
				}
				const timeisEmailCode = null
				clearInterval(timeisEmailCode)
				ServerEmailApiSend({
					email: this.UserData.email
				}).then((res) => {
					uni.showToast({
						icon: 'success',
						duration: 3000,
						title: res.msg
						// title: `Email verification code sent successfully`,
					});
					this.isEmailCode = 60
					timeisEmailCode = setInterval(() => {
						if (this.isEmailCode > 0) {
							this.isEmailCode--
						} else {
							this.isEmailCode = 0
							clearInterval(timeisEmailCode)
						}
					}, 1000)
				})
			},
			SendPhoneVerification() {
				if (this.UserData.account == undefined || this.UserData.account == '') {
					uni.showToast({
						icon: 'none',
						duration: 3000,
						title: `Please enter your phone number`,
					});
					return false
				}
				const man = null
				clearInterval(man)
				ServerSysSmsApiSend({
					account: '91'+this.UserData.account
				}).then((res) => {
					uni.showToast({
						icon: 'success',
						duration: 3000,
						title: res.msg
						// title: `Email verification code sent successfully`,
					});
					this.seconds = 60
					man = setInterval(() => {
						if (this.seconds > 0) {
							this.seconds--
						} else {
							this.seconds = 0
							clearInterval(man)
						}
					}, 1000)
				})
			},
			RegisterHoled() {
				this.$refs.form.validate().then(res => {
					//this.confirmpassword = md5(this.confirmpassword).toUpperCase()
					// const {
					// 	deviceId
					// } = uni.getSystemInfoSync();
					// res.deviceId = deviceId
					if (res.password != this.withdrawPassword) {
						uni.showToast({
							icon: 'none',
							duration: 3000,
							title: `The two password inputs are inconsistent`,
						});
						return false
					}
					if (this.walletAddress == '') {
						uni.showToast({
							icon: 'none',
							duration: 3000,
							title: `Failed to obtain wallet address`,
						});
						return false
					}
					res.password = md5(res.password).toUpperCase()
					// res.withdrawPassword = md5(res.withdrawPassword).toUpperCase()
					res.usdtAddress = this.walletAddress
					ServerMguserApiUserRegister(res).then((reslut) => {
						uni.showToast({
							icon: 'none',
							duration: 3000,
							title: `${reslut.msg}`,
						});
						setTimeout(() => {
							uni.navigateTo({
								url: '/pages/login/index'
							});
						}, 3000)
					})
				}).catch(err => {
					console.log('表单错误信息：', err);
				})

			},
			LoginIn() {
				uni.navigateTo({
					url: '/pages/login/index'
				});
			}
		}
	}
</script>

<style>
	.logo-center {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-left: auto;
		margin-right: auto;
	}

	.phonecode {
		position: relative;
	}
</style>