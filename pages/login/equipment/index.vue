<template>
	<view class="p-6 home-background">
		<view class="scroll-login">
			<view class="background-white border-radius-2 p-4">
				<view>We have detected that you are logging in on a new device. Please enter a verification code to verify if the device is trustworthy!</view>
				<view class="usersLogin mt-3">
					<uni-forms ref="formsall" :modelValue="UserData" :rules="rules">
						<uni-forms-item label="" name="phoneCode">
							<view class="flex fle align-center border-1 p-1 font-md">
								<text class="pl-1"></text>
								<i class="iconfont font-lg font-weight-bolder color-test">&#xe83e;</i>
								<input v-model="UserData.phoneCode" class="p-1 bl-1 ml-2 pl-2 width-100" type="text" placeholder="Enter the verification code" />
							</view>
						</uni-forms-item>
					</uni-forms>
				</view>
				<view class="btn-login font-lg mt-5 p-3 border-radius-2 balens" @click="DetermineHoled">Determine</view>
			</view>
		</view>


	</view>
</template>

<script>
	import md5 from 'js-md5'
	import {
		ServerMguserApiVerifySms
	} from '@/server/server'
	export default {
		data() {
			return {
				title: 'My USD Name',
				UserData:{},
				isEmailCode: 0,
				Images:{
					value:''
				},
				account:'',
				rules:{
					phoneCode:{
						rules:[
							{
								required: true,
								errorMessage: 'Please enter your email verification phone code',
							}
						]
					}
				}
			}
		},
		onLoad(option) {
			if (option && option.account) {
				this.account = option.account
			}
			
		},
		methods: {
			DetermineHoled() {
				this.$refs.formsall.validate().then(res=>{
					// const {deviceId} = uni.getSystemInfoSync();
					// res.deviceId = deviceId
					res.account = this.account
					// res.password = md5(res.password).toUpperCase()
					ServerMguserApiVerifySms(res).then((reslut)=>{
						uni.setStorageSync('useer_date', reslut.data);
						uni.switchTab({
							url: '/pages/index/index'
						});
					})
				}).catch(err =>{
					//console.log('表单错误信息：', err);
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