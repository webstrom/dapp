<template>
	<view class="p-3 home-background">
		
		<view class="border-radius-1 balens p-3 border-radius-2" style="border-bottom-left-radius: 0;border-bottom-right-radius: 0;">
			<view class="color-3 font-lg flex justify-between"> 
				<text>Balance</text>
				<i class="iconfont font-lg font-weight-bolder color-icon color-3" @click="showBelenc">&#xe7a4;</i>
			</view>
			<view class="color-3 font-lg font-weight-bold mt-3"><text>₹</text> {{showBelencAdhide?balenc.balance:'***'}}</view>
			<!-- <view class="text-align-r mt-1"><text class="color-3">withdraw</text></view> -->
		</view>
		<view class="border-radius-1 balens p-3 border-radius-2 flex justify-between" style="border-top-left-radius:0;border-top-right-radius: 0;">
			<view class="color-3 font-lg">Bonus</view>
			<view class="color-3 font-lg"><text>₹</text> {{showBelencAdhide?balenc.kickback:'***'}}</view>
		</view>
		<view class="pt-2 pb-2 border-bottom ">Receiving bank account</view>
		<view class="background-white border-radius-2 p-3 pt-2 pb-2 mb-3 ">
			<view class="border-bottom font-md pb-2 flex justify-between align-center">
				<text>Bank Details</text>
				<i v-if="bankData.cardNumber==''" class="iconfont font-lg font-weight-bolder color-2" @click="NavigateToClick('/pages/my/Bank/add?type=add&url=tixian')">&#xe915;</i>
				<i v-if="bankData.cardNumber!=''" class="iconfont font-lg font-weight-bolder color-2" @click="NavigateToClick('/pages/my/Bank/add?type=edit&url=tixian')">&#xe915;</i>
			</view>
			<view class="flex justify-between align-center">
				<i class="iconfont font-card font-weight-bolder color-test" style="max-width: 100upx;">&#xe835;</i>
				<view class="font-md" style="width: 100%;">
					<view class="flex justify-start pt-1">
						<view style="width: 100upx;text-align: right;">A/C:</view>
						<view class="ml-2">{{bankData.cardNumber}}</view>
					</view>
					<view class="flex justify-start pt-1">
						<view style="width: 100upx;text-align: right;">IFSC:</view>
						<view class="ml-2">{{bankData.ifsc}}</view>
					</view>
					<view class="flex justify-start pt-1">
						<view style="width: 100upx;text-align: right;">Name:</view>
						<view class="ml-2">{{bankData.payeeName}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="background-white border-radius-2 p-3">
			<view class="flex justify-between text-align-center">
				<view :class="withdrawal_Type == 1?'color-1':''" style="width: 50%;border-right: 1upx solid #ccc;" @click="WithdrawalType(1)">Balance withdraw</view>
				<view :class="withdrawal_Type == 2?'color-1':''" style="width: 50%;border-left: 1upx solid #ccc;" @click="WithdrawalType(2)">Bonus withdraw</view>
			</view>
			<view class="font mt-3 border-top pt-3" style="color: red;">Tips: Please make sure your bank details is correct before withdraw, to ensure the balance can be credited</view>
			<view class="mt-3" v-if="withdrawal_Type===1">Withdrawable balance <text class="color-1">₹ {{balenc.balance}}</text></view>
			<view class="mt-3" v-if="withdrawal_Type===2">Withdrawable balance <text class="color-1">₹ {{balenc.kickback}}</text></view>
			<view class="mt-3">
				<view v-if="withdrawal_Type===1" class="flex justify-content mt-2">
					<text :class="type==4?'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 balens color-3 font-lg':'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 font-lg'" @click="SelecteAccount(4)">5000</text>
					<text :class="type==1?'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 balens color-3 font-lg':'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 font-lg'" @click="SelecteAccount(1)">100000</text>
					<text :class="type==2?'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 balens color-3 font-lg':'font mt-2 p-2 pl-3 pr-3 border-radius-1 border-1 font-lg'" @click="SelecteAccount(2)">200000</text>
				</view>
				<view v-else class="mt-2">
					<view class="font mt-2 p-2 pl-0 pr-0 font-md">Do you want to withdraw all bonus?</view>
				</view>
			</view>
			<view class="flex fle align-center border-1 p-1 mt-3 font-md">
				<text class="pl-1"></text>
				<i class="iconfont font-lg font-weight-bolder color-test">&#xe60f;</i>
				<input v-model="withdrawPassword" type="password" class="p-1 bl-1 ml-2 pl-2 width-100"
					placeholder="Your withdraw password" />
			</view>
			<view class="flex fle align-center border-1 p-1 mt-3 font-md">
				<text class="pl-1"></text>
				<i class="iconfont font-lg font-weight-bolder color-test">&#xe83e;</i>
				<input v-model="phoneCode" class="p-1 bl-1 ml-2 pl-2 width-100" type="text"
					placeholder="Your phone verification code" />
			</view>
			<view class="font-small flex justify-between mt-2">
				<text><!-- Click send verification code --> </text>
				<text v-if="isEmailCode === 0" class="color-1" @click="SendEmailCode">Send Verification Code</text>
				<text v-else>After {{isEmailCode}} seconds Resend</text>
			</view>
			<view class="balens btn-login mt-3 p-3 mt-5 border-radius-2 font-lg" @click="ddBalanceWithdraw">Withdraw</view>
		</view>
		
		<!-- <uni-popup ref="popup" type="bottom" :mask-click="false">
			<view class="background-loginout width-100">
				<view class="background-white font-lg p-3 flex justify-between border-bottom">
					<view @click="close">close</view>
					<view>define</view>
				</view>
				<view class="background-white p-3 pt-2 pb-2 color-1 border-bottom">
					<view class="flex justify-between align-center">
						<i class="iconfont font-card font-weight-bolder" style="max-width: 100upx;">&#xe835;</i>
						<view class="font-md" style="width: 100%;">
							<view class="flex justify-start pt-1">
								<view style="width: 100upx;text-align: right;">A/C:</view>
								<view class="ml-2">909098331300012</view>
							</view>
							<view class="flex justify-start pt-1">
								<view style="width: 100upx;text-align: right;">ifsc:</view>
								<view class="ml-2">ICICI0000001</view>
							</view>
							<view class="flex justify-start pt-1">
								<view style="width: 100upx;text-align: right;">name:</view>
								<view class="ml-2">DWCWWA WDASDA DDWQFFS</view>
							</view>
						</view>
					</view>
				</view>
				<template v-for="(index,key) in 3">
					<view class="background-white p-3 pt-2 pb-2 border-bottom">
						<view class="flex justify-between align-center">
							<i class="iconfont font-card font-weight-bolder color-test" style="max-width: 100upx;">&#xe835;</i>
							<view class="font-md" style="width: 100%;">
								<view class="flex justify-start pt-1">
									<view style="width: 100upx;text-align: right;">A/C:</view>
									<view class="ml-2">909098331300012</view>
								</view>
								<view class="flex justify-start pt-1">
									<view style="width: 100upx;text-align: right;">ifsc:</view>
									<view class="ml-2">ICICI0000001</view>
								</view>
								<view class="flex justify-start pt-1">
									<view style="width: 100upx;text-align: right;">name:</view>
									<view class="ml-2">DWCWWA WDASDA DDWQFFS</view>
								</view>
							</view>
						</view>
					</view>
				</template>
				
				
			</view>
		</uni-popup> -->
		
	</view>
</template>

<script>
	import md5 from 'js-md5';
	import { ServerWithdrawApiIsWithdrawPassword,ServerMessageApiListUserBank,ServerMessageApiGetBalance,ServerWithdrawApiAddBalanceWithdraw,ServerSmsApiSendByWithdraw,ServerWithdrawApiAddBickbackWithdraw } from '../../../server/server'
	export default {
		data() {
			return {
				bankData:{
					cardNumber:''
				},
				balenc:{},
				phoneCode:'',
				withdrawPassword:'',
				orderCode:'',
				random_no:'',
				isEmailCode:0,
				type:1,
				withdrawal_Type:1,
				showBelencAdhide:true
			}
		},
		onLoad(option) {
			if (option && option.type == 1) {
				this.withdrawal_Type = 1
			}else{
				this.withdrawal_Type = 2
			}
			this.getBankeList()
			this.GetBalanceHoled()
			// ServerWithdrawApiIsWithdrawPassword().then((res)=>{
			// 	if(!res.data.flag){
			// 		uni.showModal({
			// 			title: 'Tips',
			// 			content: "You haven't set the withdrawal password yet. Would you like to go and set it",
			// 			cancelText: "Close",
			// 			confirmText: "Go immediately",
			// 			success:()=>{
			// 				uni.navigateTo({
			// 				    url:'/pages/my/modify/password?type=3'
			// 				});
			// 			}
			// 		});
			// 	}
			// })
		},
		onShow(){
			
		},
		methods: {
			showBelenc(){
				if(this.showBelencAdhide){
					this.showBelencAdhide = false
				}else{
					this.showBelencAdhide = true
				}
			},
			WithdrawalType(lab){
				this.withdrawal_Type = lab
			},
			SelecteAccount(type){
				this.type = type
			},
			getBankeList(){
				ServerMessageApiListUserBank().then((res)=>{
					if(res.data[0]){
						this.bankData = res.data[0]
					}
				})
			},
			GetBalanceHoled(){
				ServerMessageApiGetBalance().then((res)=>{
					this.balenc = res.data
				})
			},
			NavigateToClick(url){
				uni.navigateTo({
				    url:url
				});
			},
			ddBalanceWithdraw(){
				if(this.phoneCode == ''){
					uni.showToast({
						icon: 'none',
						duration: 3000,
						title: 'Please enter your phone verification code in the input box below'
					});
					return false
				}
				if(this.withdrawPassword == ''){
					uni.showToast({
						icon: 'none',
						duration: 3000,
						title: 'Please enter the withdrawal password'
					});
					return false
				}
				if(this.withdrawal_Type === 1){
					ServerWithdrawApiAddBalanceWithdraw({
						type:this.type,
						orderCode:this.random_No(10),
						id:this.bankData.id,
						phoneCode:this.phoneCode,
						withdrawPassword:md5(this.withdrawPassword).toUpperCase()
					}).then((reslut)=>{
						this.withdrawPassword = ''
						this.phoneCode = ''
						uni.showToast({
							icon: 'success',
							duration: 3000,
							title: `${reslut.msg}`,
						});
						this.NavigateToClick('/pages/my/withdraw/success')
						///pages/my/withdraw/success
						this.GetBalanceHoled()
					})
				}
				if(this.withdrawal_Type === 2){
					ServerWithdrawApiAddBickbackWithdraw({
						orderCode:this.random_No(8),
						id:this.bankData.id,
						phoneCode:this.phoneCode,
						withdrawPassword:md5(this.withdrawPassword).toUpperCase()
					}).then((reslut)=>{
						uni.showToast({
							icon: 'success',
							duration: 3000,
							title: `${reslut.msg}`,
						});
						this.NavigateToClick('/pages/my/withdraw/success')
						this.GetBalanceHoled()
					})
				}
			},
			random_No(j) {
				let random_no = 0
			    for (var i = 0; i < j; i++){
			        random_no += Math.floor(Math.random() * 10);
			    }
				let tims = new Date().getTime()
			    random_no = tims - random_no;
				return random_no
			},
			SendEmailCode(){
				const timeisEmailCode = 0
				clearInterval(timeisEmailCode)
				ServerSmsApiSendByWithdraw().then((res)=>{
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
			}
		}
	}
</script>

<style>
	
</style>