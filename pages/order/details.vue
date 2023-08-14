<template>
	<view class="p-3 color-2">
		<!-- <view>Received bank information</view> -->
		<view class="background-white border-radius-2 p-3 pt-2 pb-2 mb-3">
			<view class="border-bottom font-md pb-2 flex justify-between align-center">
				<text>{{bankData.bankName}}</text>
				<!-- <i class="iconfont font-lg font-weight-bolder color-2">&#xe915;</i> -->
			</view>
			<view class="flex justify-between align-center">
				<i class="iconfont font-card font-weight-bolder color-test" style="max-width: 100upx;">&#xe835;</i>
				<view class="font-md" style="width: 100%;">
					<view class="flex justify-start pt-1">
						<view style="width: 100upx;text-align: right;">A/C:</view>
						<view class="ml-2">{{bankData.cardNumber}}</view>
					</view>
					<view class="flex justify-start pt-1">
						<view style="width: 100upx;text-align: right;">ifsc:</view>
						<view class="ml-2">{{bankData.ifsc}}</view>
					</view>
					<view class="flex justify-start pt-1">
						<view style="width: 100upx;text-align: right;">name:</view>
						<view class="ml-2">{{bankData.payeeName}}</view>
					</view>
				</view>
			</view>
		</view>
		<!-- <view class="mt-3">Order details</view> -->
		<view class="background-white border-radius-2 p-3 mt-3">
			<view class="font flex justify-between ">
				<text>Withdrawal amount</text>
				<text class="color-1 font-md font-weight-bold">₹ {{bankData.amount}}</text>
			</view>
			<view class="font flex justify-between mt-2">
				<text>orderCode</text>
				<text @click="orderCodeHoled(bankData.orderCode)">{{bankData.orderCode}}</text>
			</view>
			<view class="font flex justify-between mt-2">
				<text>Application Time</text>
				<text class="color-test">{{bankData.createTime}}</text>
			</view>
			<view class="font flex justify-between mt-2">
				<text>Reply Time</text>
				<text class="color-test">{{bankData.arrivalTime}}</text>
			</view>
			<view class="font flex justify-between mt-2">
				<text>utrNo</text>
				<text @click="orderCodeHoled(bankData.utrNumber)">{{bankData.utrNumber}}</text>
			</view>
			<view class="font flex justify-between mt-2">
				<text>Status</text>
				<text
					:style="bankData.status==2?'color:#529b2e;':bankData.status==3?'color:red;':''">{{bankData.status==2?'Success':bankData.status==3?'fail':'Pending'}}</text>
			</view>
			
			<view v-if="bankData.status==2" class="font flex justify-between mt-2">
				<text>Confirm Status</text>
				<text
					:style="bankData.customerStatus==2?'color:red;':'color:#529b2e;'">{{bankData.customerStatus==2?'To be confirmed':'Confirm receipt'}}</text>
			</view>
			<view class="font flex justify-between mt-2">
				<text>Remark</text>
				<text class="color-test">{{bankData.providerData}}</text>
			</view>
			<view v-if="bankData.customerStatus==2&&bankData.status==2" class="mt-3" style="color: red;">Tips: If you
				have received the payment, please click the button below to confirm. If you have multiple unconfirmed
				orders, we will disable your account</view>
		</view>
		<view v-if="bankData.customerStatus==2&&bankData.status==2"
			class="btn-login font-lg mt-2 p-3 mt-6 border-radius-2 balens" @click="ConfirmReceipt">Confirm receipt
		</view>
	</view>
</template>

<script>
	import {
		ServerWithdrawApiGetDetils,
		ServerMessageApiListUserBank,
		ServerWithdrawApiVerify
	} from '../../server/server'
	export default {
		data() {
			return {
				withdrawId: '',
				withdrawDate: '',
				bankData: {},
				btn: true
			}
		},
		onLoad(option) {
			if (option && option.id) {
				this.withdrawId = option.id
				this.getDetils(option.id)
			}
			// this.getBankeList()
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
			randerTime(time) {
				let a = new Date(time).getTime();
				const date = new Date(a);
				const Y = date.getFullYear() + '/';
				const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
				const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
				const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
				const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
				// const s = date.getSeconds(); // 秒
				const dateString = Y.substr(2, 3) + M + D;
				const times = h + m
				const timeData = {
					dateString: dateString,
					times: times
				}
				return dateString + ' ' + times;
			},
			getDetils(id) {
				ServerWithdrawApiGetDetils({
					withdrawId: id
				}).then((res) => {
					if(res.data.arrivalTime!=null && res.data.arrivalTime!=''){
						res.data.arrivalTime = this.randerTime(res.data.arrivalTime)
						console.log(res.data.arrivalTime)
					}
					if(res.data.createTime!=null&&res.data.createTime!=''){
						res.data.createTime = this.randerTime(res.data.createTime)
					}
					this.bankData = res.data
				})
			},
			ConfirmReceipt() {
				if (!this.btn) return false
				uni.showModal({
					title: 'Tips',
					// 提示文字
					content: 'Have you received the payment？',
					// 取消按钮的文字自定义
					cancelText: "NO",
					// 确认按钮的文字自定义
					confirmText: "YES",
					//删除字体的颜色
					confirmColor: '',
					//取消字体的颜色
					cancelColor: '',
					success: (res) => {
						if (res.confirm) {
							// 执行确认后的操作
							console.log(this.bankData.withdrawId)
							this.btn = false
							ServerWithdrawApiVerify({
								withdrawId: this.bankData.withdrawId
							}).then((reslut) => {
								uni.showToast({
									icon: 'success',
									duration: 3000,
									title: reslut.msg,
								});
								setTimeout(() => {
									this.getDetils(this.bankData.withdrawId)
									this.btn = true
								}, 3000)

							}).catch(() => {
								this.btn = true
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

<style>
</style>