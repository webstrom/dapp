<template>
	<view class="p-3 home-background">
		<view class="background-white width-100 border-radius-2">
			<view class="p-3" style="width: 540upx;margin: auto;">
				<view class="text-align-center font-lg text-align-center color-1 mb-2">Success</view>
				<view class="mb-3 text-align-center">The withdrawal application has been submitted, please pay attention to the message arrival reminder.</view>
				<view class="qr-box text-align-center">
					<i class="iconfont font-mac color-test">&#xe81e;</i>
					<!-- <canvas canvas-id="qrcode" v-show="qrShow" style="width: 500rpx;height: 500upx;;margin: auto;"/> -->
				</view>
				<view class="font mt-2" style="color: red;">The system is currently processing, please wait...</view>
			</view>
		</view>
	</view>
</template>

<script>
	import wybNoticeBar from '@/components/wyb-noticeBar/wyb-noticeBar.vue'
	import uQRCode from '@/common/uqrcode.js';
	import { ServerMessageApiGetBalance,ServerOrderApiAddOrder,ServerMessageApiGetUsdtRate } from '@/server/server.js';
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
				usdtNum:0
			}
		},
		onLoad(option) {
			if (option && option.type) {
				this.type = option.type
			}
			// this.RechargeHoled()
		},
		methods: {
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
					// this.$refs.popup.open('center')
				})
				
			}
		}
	}
</script>

<style>

</style>