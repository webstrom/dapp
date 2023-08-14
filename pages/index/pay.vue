<template>
	<view class="p-3 home-background">
		<view class="background-white width-100 border-radius-2">
			<view class="p-3" style="width: 540upx;margin: auto;">
				<view class="text-align-center font-lg text-align-center color-1 mb-2">USDT(TRC20) {{usdtNum}}</view>
				<view class="mb-3 text-align-center">Please scan the code for payment</view>
				<view class="qr-box">
					<canvas canvas-id="qrcode" v-show="qrShow" style="width: 500rpx;height: 500upx;;margin: auto;"/>
				</view>
				<view class="mt-2 text-align-center" style="word-wrap:break-word">{{address}}</view>
				<view class="text-align-center mt-3"><text class="balens p-1 pl-3 pr-3 color-3 border-radius-1" @click="orderCodeHoled(address)">Copy</text></view>
				<view class="font mt-2" style="color: red;">Tips:Please do not take screenshots to save this QR code for transfer, in order to avoid unnecessary financial losses for you. Our company will not bear any financial losses caused by saving this QR code for transfer</view>
				<view class="balens btn-login pt-3 pb-3 mt-5 border-radius-2 font-lg" @click="SuccessHoled">I have paid</view>
			</view>
		</view>
		<uni-popup ref="pop" type="center">
			<view class="background-white width-100 border-radius-1">
				<view class="font-lg border-bottom pb-3 pt-3 text-align-center">Tips</view>
				<view class="p-3 text-align-center">The system is currently undergoing review and may take a few minutes. Please be patient and wait!</view>
				<view class="text-align-center p-3 border-top" @click="ClosePop">Close</view>
			</view>
		</uni-popup>	
	</view>
</template>

<script>
	import wybNoticeBar from '@/components/wyb-noticeBar/wyb-noticeBar.vue'
	import uQRCode from '@/common/uqrcode.js';
	import { ServerMessageApiGetBalance,ServerOrderApiAddOrder,ServerMessageApiGetUsdtRate } from '../../server/server';
	export default {
		components: {
			wybNoticeBar
		},
		data() {
			return {
				qrShow: false,
				nowTime: '',
				balenc:{},
				type:1,
				showBelencAdhide:true,
				usdtNumber:0,
				usdtNum:0,
				address:''
			}
		},
		onLoad(option) {
			if (option && option.type) {
				this.type = option.type
			}
			this.RechargeHoled()
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
			random_No(j) {
				let random_no = ''
			    for (var i = 0; i < j; i++){
			        random_no += Math.floor(Math.random() * 10);
			    }
				let tims = new Date().getTime()
			    random_no = tims - random_no;
				return random_no
			},
			ClosePop(){
				this.$refs.pop.close()
			},
			SuccessHoled(){
				this.$refs.pop.open('center')
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
			RechargeHoled(){
				ServerOrderApiAddOrder({type:this.type,orderCode:this.random_No(10)}).then((res)=>{
					this.qrFun(res.data.address)
					this.usdtNum = res.data.usdtNum
					this.address = res.data.address
					// this.$refs.popup.open('center')
				})
				
			}
		}
	}
</script>

<style>
	/deep/.uni-popup .uni-popup__wrapper {
	    width: 80% !important;
	    padding: 40rpx;
	}
</style>