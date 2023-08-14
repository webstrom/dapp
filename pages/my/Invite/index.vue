<template>
	<view class="p-3 home-background">
		<view style="height: var(--status-bar-height);width: 100%;"></view>
		<view class="p-3 background-white border-radius-2 font-lg mt-1">
			<view class="text-align-center">
				<view>My referral code</view>
				<view class="color-1 mt-2" @click="orderCodeHoled(userData.invitationCode)">{{userData.invitationCode}}</view>
			</view>
			<view class="font-md text-align-center mt-2">Access by scanning the wallet browser code</view>
			<view class="qr-box">
				<canvas canvas-id="qrcode" v-show="qrShow" style="width: 600rpx;height: 600upx;;margin: 0 auto;"/>
			</view>
			<view class="text-align-center mt-3 font-lg">{{nowTime}}</view>
		</view>
		<view class="flex mt-3 justify-between align-center p-3 border-bottom background-white  border-radius-1" @click="navigateToClick('/pages/my/Invite/list')">
			<view class="flex align-center">
				<i class="iconfont font-lg font-weight-bolder color-2">&#xe7cd;</i>
				<text class="ml-1 color-icon">My invitation</text>
			</view>
			<view class="flex align-center">
				<text class="mr-2 color-1">{{userNum}} people</text>
				<i class="iconfont font-lg color-test color-icon">&#xe856;</i>
			</view>
		</view>
		<view class="p-3 font-lg background-white border-radius-2 mt-3">Invite to earn commission. Friends can register an account to purchase through the invitation code below, and you can earn a lot of commission. Go and invite friends now</view>
	</view>
</template>

<script>
	import getDateTime from '@/common/getdateTime.js';
	import uQRCode from '@/common/uqrcode.js';
import { ServerMessageApiGetNum } from '../../../server/server';
	export default {
		data() {
			return {
				qrShow: false,				
				text1:'https://www.uubb.in',//下载连接
				nowTime: '',
				userData:{},
				userNum:0,
				delta:''
			}
		},
		onUnload(){
			uni.navigateBack({
				delta:this.delta
			})
		},
		onLoad() {
			this.userData = uni.getStorageSync('useer_date');
			this.text1 =  'https://www.uubb.in'
			let platform = uni.getSystemInfoSync().platform;
			setInterval(()=>{
				var timeStr = getDateTime('y-m-d h:i:s'); // y:年 m:月 d:日 h:时 i:分 s:秒 中间的分割符号可更改
				this.nowTime = timeStr
			},1000)
			this.GetNum()
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
			navigateToClick(url){
				uni.navigateTo({
				    url:url
				});
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
			GetNum(){
				ServerMessageApiGetNum().then((res)=>{
					this.userNum = res.data.userNum
				})
			}
		},
		mounted(){
			this.qrFun(this.text1)
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