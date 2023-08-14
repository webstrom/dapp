<template>
	<view class="p-3 color-2">
		<view style="height: var(--status-bar-height);width: 100%;"></view>
		<view class="usersLogin">
			<view class="background-white border-radius-2 p-3">
				<uni-forms ref="form" :modelValue="bankData" :rules="rules">
					<uni-forms-item label="" name="payeeName">
						<view class="phonecode flex align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe7ce;</i>
							<input v-model="bankData.payeeName" class="p-1 bl-1 ml-2 pl-2 width-100" type="text" placeholder="Bank holder name"/>
						</view>
					</uni-forms-item>
					<!-- <uni-forms-item label="" name="bankName">
						<view class="phonecode flex align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe835;</i>
							<input v-model="bankData.bankName" class="p-1 bl-1 ml-2 pl-2 width-100" type="text" placeholder="Bank name"/>
						</view>
					</uni-forms-item> -->
					<uni-forms-item label="" name="cardNumber">
						<view class="phonecode flex align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe835;</i>
							<input v-model="bankData.cardNumber" class="p-1 bl-1 ml-2 pl-2 width-100" type="text" placeholder="Enter your account number"/>
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="ifsc">
						<view class="flex align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe83e;</i>
							<input v-model="bankData.ifsc" class="p-1 bl-1 ml-2 pl-2 width-100" type="text" placeholder="Enter IFSC"/>
						</view>
					</uni-forms-item>
					<view class="font-small flex justify-between">
						<text class="color-1 font">Please confirm the bank card information again</text>
					</view>
					<uni-forms-item label="" name="cardNumberan">
						<view class="phonecode flex align-center border-1 p-1 font-md mt-3">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe835;</i>
							<input v-model="bankData.cardNumberan" class="p-1 bl-1 ml-2 pl-2 width-100" type="text" placeholder="Enter your account number"/>
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="ifscan">
						<view class="flex align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe83e;</i>
							<input v-model="bankData.ifscan" class="p-1 bl-1 ml-2 pl-2 width-100" type="text" placeholder="Enter IFSC"/>
						</view>
					</uni-forms-item>
					<uni-forms-item label="" name="phoneCode">
						<view class="flex align-center border-1 p-1 font-md">
							<text class="pl-1"></text>
							<i class="iconfont font-lg font-weight-bolder color-test">&#xe83e;</i>
							<input v-model="bankData.phoneCode" class="p-1 bl-1 ml-2 pl-2 width-100" type="text" placeholder="Your phone verification code"/>
						</view>
					</uni-forms-item>
					<view class="font-small flex justify-between mt-2">
						<text>Click send verification code </text>
						<text v-if="isEmailCode === 0" class="color-1" @click="SendEmailCode">Send Verification</text>
						<text v-else>After {{isEmailCode}} seconds Resend</text>
					</view>
				</uni-forms>
			</view>
		</view>
		<view class="btn-login font-lg mt-6 p-3 border-radius-2 balens" @click="addBanke">{{type=='add'?'Add Save':'Edit Save'}}</view>
	</view>
</template>

<script>
import { ServerMessageApiAddUserBank,ServerMessageApiListUserBank,ServerMessageApiEditUserBank,ServerSmsApiSendByBank } from '../../../server/server'
	export default {
		data() {
			return {
				bankData:{},
				type:'',
				urltext:'',//tixian
				isEmailCode:0,
				rules:{
					payeeName:{
						rules:[
							{
								required: true,
								errorMessage: 'Please enter your payee name',
							}
						]
					},
					bankName:{
						rules:[
							{
								required: true,
								errorMessage: 'Please Enter Bank Name',
							}
						]
					},
					cardNumber:{
						rules:[
							{
								required: true,
								errorMessage: 'Please enter your bank card',
							}
						]
					},
					ifsc:{
						rules:[
							{
								required: true,
								errorMessage: 'Please enter ifsc',
							}
						]
					},
					cardNumberan:{
						rules:[
							{
								required: true,
								errorMessage: 'Please confirm your bank card',
							}
						]
					},
					ifscan:{
						rules:[
							{
								required: true,
								errorMessage: 'Please confirm your bank ifsc',
							}
						]
					},
					phoneCode:{
						rules:[
							{
								required: true,
								errorMessage: 'Your phone verification code',
							}
						]
					}
				}
			}
		},
		onLoad(option) {
			if (option && option.type === 'add') {
				this.type = option.type
				this.bankData = {}
			}
			if (option && option.type === 'edit') {
				this.type = option.type
				this.getBankeList()
			}
			if(option && option.url){
				this.urltext = option.url
			}
		},
		methods: {
			SendEmailCode(){
				const timeisEmailCode = null
				clearInterval(timeisEmailCode)
				ServerSmsApiSendByBank().then((res)=>{
					uni.showToast({
						icon: 'success',
						duration: 3000,
						title: res.msg
					});
					this.isEmailCode = 60
					timeisEmailCode = setInterval(()=>{
						if(this.isEmailCode > 0){
							this.isEmailCode --
						}else{
							this.isEmailCode = 0
							clearInterval(timeisEmailCode)
						}
					},1000)
				})
			},
			getBankeList(){
				ServerMessageApiListUserBank().then((res)=>{
					this.bankData = res.data[0]
					this.bankData.cardNumberan = res.data[0].cardNumber
					this.bankData.ifscan = res.data[0].ifsc
				})
			},
			addBanke(){
				// ServerMessageApiAddUserBank()
				if(this.type === 'add'){
					this.$refs.form.validate().then((ref)=>{
						console.log(ref)
						if(ref.cardNumber !== ref.cardNumberan){
							uni.showToast({
								icon: 'fail',
								duration: 3000,
								title: `The card numbers entered twice are inconsistent！`,
							});
							return false
						}
						if(ref.ifsc !== ref.ifscan){
							uni.showToast({
								icon: 'fail',
								duration: 3000,
								title: `The card ifsc entered twice are inconsistent！`,
							});
							return false
						}
						ServerMessageApiAddUserBank({
							cardNumber:ref.cardNumber,
							ifsc:ref.ifsc,
							payeeName:ref.payeeName,
							phoneCode:ref.phoneCode
						}).then((res)=>{
							uni.showToast({
								icon: 'success',
								duration: 3000,
								title: `${res.msg}`,
							});///pages/my/Bank/index
							setTimeout(()=>{
								if(this.urltext === 'tixian'){
									uni.navigateTo({
										url: '/pages/my/withdraw/index'
									});
								}else{
									uni.navigateTo({
										url: '/pages/my/Bank/index'
									});
								}
							},3000)
						})
					}).catch(err =>{
						console.log('表单错误信息：', err);
					})
				}
				
				if(this.type === 'edit'){
					this.$refs.form.validate().then((ref)=>{
						console.log(ref)
						if(ref.cardNumber !== ref.cardNumberan){
							uni.showToast({
								icon: 'fail',
								duration: 3000,
								title: `The card numbers entered twice are inconsistent！`,
							});
							return false
						}
						if(ref.ifsc !== ref.ifscan){
							uni.showToast({
								icon: 'fail',
								duration: 3000,
								title: `The card ifsc entered twice are inconsistent！`,
							});
							return false
						}
						ServerMessageApiEditUserBank({
							cardNumber:ref.cardNumber,
							ifsc:ref.ifsc,
							payeeName:ref.payeeName,
							id:this.bankData.id,
							phoneCode:ref.phoneCode
						}).then((res)=>{
							uni.showToast({
								icon: 'success',
								duration: 3000,
								title: `${res.msg}`,
							});///pages/my/Bank/index
							setTimeout(()=>{
								if(this.urltext === 'tixian'){
									uni.navigateTo({
										url: '/pages/my/withdraw/index'
									});
								}else{
									uni.navigateTo({
										url: '/pages/my/Bank/index'
									});
								}
							},3000)
						})
					}).catch(err =>{
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
