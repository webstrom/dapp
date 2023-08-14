<template>
	<view class="p-3 color-2">
		<view class="usersLogin">
			<view class="background-white border-radius-2 p-3">
			
				<uni-forms v-if="type==1||type==3" ref="forms" :modelValue="UserData" :rules="rules">
					<uni-forms-item label="" name="password">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe60f;</i>
							<input v-model="UserData.password" class="p-1 bl-1 ml-2 pl-2 width-100" type="password" placeholder="Please enter a new password"/>
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="passwordqd">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe60f;</i>
							<input v-model="UserData.passwordqd" class="p-1 bl-1 ml-2 pl-2 width-100" type="password" placeholder="Confirm Password"/>
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="phoneCode">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe83e;</i>
							<input v-model="UserData.phoneCode" class="p-1 bl-1 ml-2 pl-2 width-100" type="text" placeholder="Your phone sms verification code"/>
						</view>
					</uni-forms-item>
				</uni-forms>
				<uni-forms v-if="type==2" ref="form" :modelValue="UserData1" :rules="rules1">
					<uni-forms-item label="" name="password">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe60f;</i>
							<input v-model="UserData1.password" class="p-1 bl-1 ml-2 pl-2 width-100" type="password" placeholder="Please enter a new password"/>
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="passwordqd">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe60f;</i>
							<input v-model="UserData1.passwordqd" class="p-1 bl-1 ml-2 pl-2 width-100" type="password" placeholder="Confirm Password"/>
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="account">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe914;</i>
							<input v-model="UserData1.account" class="p-1 bl-1 ml-2 pl-2 width-100" type="text" placeholder="Enter your mobile phone number"/>
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="phoneCode">
						<view class="flex fle align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe83e;</i>
							<input v-model="UserData1.phoneCode" class="p-1 bl-1 ml-2 pl-2 width-100" type="text" placeholder="Your phone sms verification code"/>
						</view>
					</uni-forms-item>
				</uni-forms>
				<view class="font-small mt-3 flex justify-between">
					<text>Click send verification code </text>
					<text v-if="seconds === 0" class="color-1" @click="SendVerification">Send Verification</text>
					<text v-else>After {{seconds}} seconds Resend</text>
				</view>
			</view>
		</view>
		<view class="btn-login font-lg mt-6 p-3 border-radius-2 balens" @click="ModifyHoled">Modify</view>
	</view>
</template>

<script>
import { ServerMguserApiEditPasseord,ServerSmsApiSend,ServerSmsApiSendByEdit,ServerMguserApiEditPassword,ServerMessageApiEditWithdrawPassword } from '../../../server/server'
import md5 from 'js-md5'
	export default {
		data() {
			return {
				UserData:{},
				UserData1:{},
				seconds:0,
				type:1,
				rules:{
					password:{
						rules:[
							{
								required: true,
								errorMessage: 'Please enter a new password',
							}
						]
					},
					passwordqd:{
						rules:[
							{
								required: true,
								errorMessage: 'Please confirm the password',
							}
						]
					},
					phoneCode:{
						rules:[
							{
								required: true,
								errorMessage: 'Please enter your phone verification code',
							}
						]
					}
				},
				rules1:{
					password:{
						rules:[
							{
								required: true,
								errorMessage: 'Please enter a new password',
							}
						]
					},
					passwordqd:{
						rules:[
							{
								required: true,
								errorMessage: 'Please confirm the password',
							}
						]
					},
					account:{
						rules:[
							{
								required: true,
								errorMessage: 'Please enter the registered phone number',
							}
						]
					},
					phoneCode:{
						rules:[
							{
								required: true,
								errorMessage: 'Please enter your phone verification code',
							}
						]
					}
				}
			}
		},
		onLoad(option) {
			if (option && option.type) {
				this.type = option.type
			}
		},
		methods: {
			SendVerification(){
				if(this.type == 1||this.type == 3){
					ServerSmsApiSend().then((reslut)=>{
						uni.showToast({
							icon: 'success',
							duration: 3000,
							title: `${reslut.msg}`
						});
						this.seconds = 60
						const man = setInterval(()=>{
							if(this.seconds > 0){
								this.seconds --
							}else{
								this.seconds = 0
								clearInterval(man)
							}
						},1000)
					})
				}
				if(this.type == 2){
					if(this.UserData1.account==undefined||this.UserData1.account==''){
						uni.showToast({
							icon: 'none',
							duration: 3000,
							title: `Please enter your phone number`,
						});
						return false
					}
					ServerSmsApiSendByEdit({account:'91'+this.UserData1.account}).then((reslut)=>{
						uni.showToast({
							icon: 'success',
							duration: 3000,
							title: `${reslut.msg}`
						});
						this.seconds = 60
						man = setInterval(()=>{
							if(this.seconds > 0){
								this.seconds --
							}else{
								this.seconds = 0
								clearInterval(man)
							}
						},1000)
					})
				}
			},
			ModifyHoled(){
				if(this.type == 1){
					this.$refs.forms.validate().then((res)=>{
						if(res.password != res.passwordqd){
							uni.showToast({
								icon: 'none',
								duration: 3000,
								title: `The two password inputs are inconsistent！`,
							});
							return false
						}
						ServerMguserApiEditPasseord({password:md5(res.password).toUpperCase(),phoneCode:res.phoneCode}).then((ruselut)=>{
							uni.showToast({
								icon: 'none',
								duration: 3000,
								title: `${ruselut.msg}`,
							});
							setTimeout(()=>{
								uni.clearStorageSync();
								uni.navigateTo({
									url: "/pages/login/index"
								});
							},3000)
						})
					
					}).catch(err =>{
						console.log('表单错误信息：', err);
					})
				}
				if(this.type == 3){
					this.$refs.forms.validate().then((res)=>{
						if(res.password != res.passwordqd){
							uni.showToast({
								icon: 'none',
								duration: 3000,
								title: `The two password inputs are inconsistent！`,
							});
							return false
						}
						ServerMessageApiEditWithdrawPassword({withdrawPassword:md5(res.password).toUpperCase(),phoneCode:res.phoneCode}).then((ruselut)=>{
							uni.showToast({
								icon: 'success',
								duration: 3000,
								title: `${ruselut.msg}`,
							});
							setTimeout(()=>{
								uni.navigateBack({
									delta: 1
								})
							},3000)
						})
					
					}).catch(err =>{
						console.log('表单错误信息：', err);
					})
				}
				if(this.type == 2){
					console.log(this.type)
					this.$refs.form.validate().then((res)=>{
						ServerMguserApiEditPassword({
							account:res.account,
							password:md5(res.password).toUpperCase(),
							phoneCode:res.phoneCode
						}).then((reslut)=>{
							uni.showToast({
								icon: 'success',
								duration: 3000,
								title: `${reslut.msg}`,
							});
							setTimeout(()=>{
								uni.navigateBack({
									delta: 1
								})
							},3000)
						})
					}).catch(err =>{
						uni.showToast({
							icon: 'none',
							duration: 3000,
							title: `error`,
						});
						console.log('表单错误信息：', err);
					})
					
				}
			}
		}
	}
</script>

<style>
	.logo-center{
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
	.phonecode{
		position: relative;
	}
</style>
