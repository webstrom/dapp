<template>
	<view class="p-3 home-background">
		<view style="height: var(--status-bar-height);width: 100%;"></view>
		<view v-if="bankData.length==0" class="text-align-center p-10 color-test">
			<i class="iconfont font-back font-italic color-test">&#xe835;</i>
			<view>You haven't added a bank card yet. Go and add it now</view>
		</view>
		<template v-for="(index,key) in bankData">
			<view class="background-white border-radius-2 p-3 pt-2 pb-2 mb-3">
				<view class="border-bottom font-md pb-2 flex justify-between align-center">
					<text v-if="index.cardNumber">Bank Details</text>
					<!-- <i class="iconfont font-lg font-weight-bolder" @click="DeleteHoled">&#xe7f8;</i> -->
				</view>
				<view class="flex justify-between align-center">
					<i class="iconfont font-card font-weight-bolder color-test" style="max-width: 100upx;">&#xe835;</i>
					<view class="font" style="width: 100%;">
						<view class="flex justify-start pt-1">
							<view style="width: 100upx;text-align: right;">A/C:</view>
							<view class="ml-2">{{index.cardNumber}}</view>
						</view>
						<view class="flex justify-start pt-1">
							<view style="width: 100upx;text-align: right;">IFSC:</view>
							<view class="ml-2">{{index.ifsc}}</view>
						</view>
						<view class="flex justify-start pt-1">
							<view style="width: 100upx;text-align: right;">Name:</view>
							<view class="ml-2">{{index.payeeName}}</view>
						</view>
					</view>
				</view>
			</view>
		</template>
		<view v-if="bankData.length==0" class="balens btn-login mt-3 p-3 mt-5 border-radius-2 font-lg"
			@click="NavigateToClick('/pages/my/Bank/add?type=add')">Add Bank Details</view>
		<view v-else class="balens btn-login mt-3 p-3 mt-5 border-radius-2 font-lg"
			@click="NavigateToClick('/pages/my/Bank/add?type=edit')">Edit Bank Details</view>
	</view>
</template>

<script>
	import {
		ServerMessageApiListUserBank
	} from '../../../server/server'
	export default {
		data() {
			return {
				bankData: []
			}
		},
		onLoad() {
			// this.$router.go(0)
			this.getBankeList()
		},
		methods: {

			getBankeList() {
				ServerMessageApiListUserBank().then((res) => {
					this.bankData = res.data
				})
			},
			NavigateToClick(url) {
				uni.navigateTo({
					url: url
				});
			},
			DeleteHoled() {
				uni.showModal({
					title: 'Warning',
					// 提示文字
					content: 'Are you sure to delete this bank card?',
					// 取消按钮的文字自定义
					cancelText: "NO",
					// 确认按钮的文字自定义
					confirmText: "YES",
					//删除字体的颜色
					confirmColor: '#e7750f',
					//取消字体的颜色
					cancelColor: '#000000',
					success: function(res) {
						if (res.confirm) {
							// 执行确认后的操作
						} else {
							// 执行取消后的操作
						}
					}
				})
			}
		},
		mounted() {
			
		}
	}
</script>

<style>
	.qr-box {
		width: 600rpx;
		height: 600rpx;
		margin: 0 auto;
		margin-top: 20rpx;
	}
</style>