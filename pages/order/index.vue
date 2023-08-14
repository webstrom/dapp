<template>
	<view class="home-background">
		<!-- <view style="height: var(--status-bar-height);width: 100%;"></view> -->
		<view class="flex justify-between font-md text-align-center background-white">
			<view :class="changeslect===1?'color-1 border-1 pt-2 pb-2':'border-1 pt-2 pb-2'"
				style="display: block;width: 50%;" @click="RechargeAndCashOutHoled(1)">Sold</view>
			<view :class="changeslect===2?'color-1 border-1 pt-2 pb-2':'border-1 pt-2 pb-2'"
				style="display: block;width: 50%;" @click="RechargeAndCashOutHoled(2)">Withdraw</view>
		</view>
		<view class="p-3 pb-2 home-background">
			<view class="flex justify-between font">
				<text v-if="changeslect===1" class="text-align-center"
					:style="changeslect===1?'display: block;width: 20%;':'display: block;width: 20%;'">Order No</text>
				<text class="text-align-center"
					:style="changeslect===1?'display: block;width: 20%;':'display: block;width: 20%;'">Amount</text>
				<text class="text-align-center"
					style="display: block;width: 15%;">{{changeslect===1?'USDT':'Type'}}</text>
				<text class="text-align-center"
					:style="changeslect===1?'display: block;width: 25%;':'display: block;width: 20%;'">Date</text>
				<text class="text-align-center"
					:style="changeslect===1?'display: block;width: 20%;':'display: block;width: 20%;'">Status</text>
				<text v-if="changeslect===2" class="text-align-center"
					:style="changeslect===1?'display: block;width: 20%;':'display: block;width: 20%;'">Operate</text>
			</view>
		</view>
		<view class="p-3 pt-1 border-radius-2">
			<scroll-view class="scroll-order" :refresher-threshold="100" :refresher-triggered="isRefresher" @refresherpulling="refresherpullingFun" refresher-enabled="true"
				@refresherrefresh="refresherrefreshFun" scroll-y="true" @scrolltolower="onLoadMore">
				<view class="all-order" v-if="changeslect === 1">
					<view v-if="dataList.length <= 0" class="text-align-center p-10 color-test">
						<i class="iconfont font-back font-italic color-test">&#xe7ed;</i>
						<view>You don't have an order yet. Go and place it now</view>
					</view>
					<template v-if="dataList.length > 0">
						<template v-for="(val,index) in dataList" :key="index">
							<view class="flex font-md justify-between p-2 background-white border-bottom align-center">
								<text class="text-align-center"
									style="display: block;width: 20%;white-space:normal;word-break:break-all;">{{val.orderCode}}</text>
								<text class="text-align-center color-1"
									style="display: block;width: 20%;"><text>₹</text>{{val.orderAmount}}</text>
								<text class="text-align-center color-1"
									style="display: block;width: 15%;">{{val.usdtNumber}}</text>
								<text class="text-align-center font"
									style="display: block;width: 25%;">{{val.yers}}<br />{{val.time}}</text>
								<text class="text-align-center"
									:style="val.status==1?'color:red;width: 20%;':'color:#529b2e;width: 20%;'">{{val.status==1?'pending':'success'}}</text>
							</view>
						</template>
					</template>
				</view>
				<view class="all-order" v-if="changeslect === 2">
					<view v-if="allCount_withdraw === 0" class="text-align-center p-10 color-test">
						<i class="iconfont font-back font-italic color-test">&#xe7ed;</i>
						<view>There is currently no withdrawal record</view>
					</view>
					<template v-if="allCount_withdraw > 0">
						<template v-for="(val,index) in dataList_withdraw" :key="index">
							<view class="flex font-md justify-between p-2 background-white border-bottom align-center">
								<!-- <text class="text-align-center" style="display: block;width: 20%;white-space:normal;word-break:break-all;">{{val.orderCode}}</text> -->
								<text class="text-align-center color-1"
									style="display: block;width: 20%;"><text>₹</text>{{val.amount}}</text>
								<text class="text-align-center color-1"
									style="display: block;width: 25%;">{{val.types==1?'balance':'bonus'}}</text>
								<text class="text-align-center font"
									style="display: block;width: 20%;">{{val.yers}}<br />{{val.time}}</text>
								<text class="text-align-center"
									:style="val.status==3?'color:red;width: 20%;':val.status==2?'color:#529b2e;width: 25%;':'width: 25%;'">{{val.status==1?'pending':val.status==2?'success':'failed'}}</text>
								
								<text v-if="val.status==2&&val.customerStatus==2" class="text-align-center font balens btn-login border-radius-1 p-1"
									style="display: block;width: 20%;position: relative;"
									@click="DispayNavigateToClick('/pages/order/details?id='+val.withdrawId)">details
									<!-- {{val.status==2&&val.customerStatus==2?"confirm":"details"}} -->
									<!-- <text v-if="val.status==2&&val.customerStatus==2"
										style="position: absolute;right: 0;top: -20upx;width: 30upx;height: 30upx;border-radius: 100upx;background: red;font-size: 10upx;color: #ffffff;">!</text> -->
								</text>
								<text v-else class="text-align-center font p-1"
									style="display: block;width: 20%;color: #1c55cc;position: relative;"
									@click="DispayNavigateToClick('/pages/order/details?id='+val.withdrawId)">details
									<!-- {{val.status==2&&val.customerStatus==2?"confirm":"details"}} -->
									<!-- <text v-if="val.status==2&&val.customerStatus==2"
										style="position: absolute;right: 0;top: -20upx;width: 30upx;height: 30upx;border-radius: 100upx;background: red;font-size: 10upx;color: #ffffff;">!</text> -->
								</text>
								
							</view>
						</template>
					</template>
				</view>
				<uni-load-more
					v-if="(changeslect === 1&&dataList.length>=pagelist.pageSize)||(changeslect===2&&dataList_withdraw.length>=pagelist_withdraw.pageSize)"
					:status="dataMore"
					:contentText="{contentdown:'Pull up to display more',contentrefresh:'Loading...',contentnomore:`There's no more data left`}"></uni-load-more>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		ServerOrderApiPage,
		ServerWithdrawApiUserPage
	} from '../../server/server'
	export default {
		data() {
			return {
				isRefresher: false,
				pagelist: {
					pageNum: 1,
					pageSize: 20
				},
				bankData:'',
				allCount: 0,
				allCount_withdraw: 0,
				dataList: [],
				rquestdata: false,
				dataMore: 'more',
				changeslect: 1,

				pagelist_withdraw: {
					pageNum: 1,
					pageSize: 20
				},
				rquestdata_withdraw: false,
				dataList_withdraw: []
			}
		},
		onLoad() {
			this.dataList_withdraw = []
			this.dataList = []
			this.pagelist = {
				pageNum: 1,
				pageSize: 20
			}
			this.pagelist_withdraw = {
				pageNum: 1,
				pageSize: 20
			}
			this.oderList()
			this.rechengenList()
		},
		onShow() {
			this.dataList_withdraw = []
			this.pagelist_withdraw = {
				pageNum: 1,
				pageSize: 20
			}
			this.rechengenList()
		},
		methods: {
			ConfirmHoled(val){
				if(val.status == 2 && val.customerStatus == 2){
					this.ConfirmReceipt()
				}else{
					this.detailsHoled(val.withdrawId)
				}
			},
			detailsHoled(withdrawId){
				this.DispayNavigateToClick('/pages/order/details?id='+withdrawId)
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
								this.oderList()
								uni.showToast({
									icon: 'success',
									duration: 3000,
									title: reslut.msg,
								});
								// setTimeout(() => {
									
								// 	//this.getDetils(this.bankData.withdrawId)
								// 	// this.btn = true
								// }, 3000)
			
							}).catch(() => {
								this.btn = true
							})
						} else {
							// 执行取消后的操作
						}
					}
				})
			
			},
			refresherrefreshFun() {
				this.dataList_withdraw = []
				this.dataList = []
				this.pagelist = {
					pageNum: 1,
					pageSize: 20
				}
				this.pagelist_withdraw = {
					pageNum: 1,
					pageSize: 20
				}
				this.isRefresher = true
				this.oderList()
				this.rechengenList()
			},
			refresherpullingFun() {
				// this.isRefresher = false
			},
			DispayNavigateToClick(url) {
				uni.navigateTo({
					url: url
				});
			},
			RechargeAndCashOutHoled(type) {
				this.changeslect = type
				if (type === 2) {
					this.pagelist_withdraw = {
						pageNum: 1,
						pageSize: 20
					}
					this.dataList_withdraw = []
					this.rechengenList()
				}
				if (type === 1) {
					this.pagelist = {
						pageNum: 1,
						pageSize: 20
					}
					this.dataList = []
					this.oderList()
				}
			},
			onLoadMore() {
				if (this.changeslect === 1) {
					if (this.rquestdata) {
						if (Math.ceil(this.allCount / this.pagelist.pageSize) > this.pagelist.pageNum) {
							this.pagelist.pageNum += 1
							this.dataMore = 'loading'
							this.oderList()
						} else {
							this.dataMore = 'noMore'
							// uni.showToast({
							// 	icon: 'fail',
							// 	duration: 3000,
							// 	title: `There's no more data left`,
							// });
						}
					}
				}
				if (this.changeslect === 2) {
					if (this.rquestdata_withdraw) {
						if (Math.ceil(this.allCount_withdraw / this.pagelist_withdraw.pageSize) > this.pagelist_withdraw
							.pageNum) {
							this.pagelist_withdraw.pageNum += 1
							this.dataMore = 'loading'
							this.rechengenList()
						} else {
							this.dataMore = 'noMore'
						}
					}
				}

			},
			randerTime(time) {
				let a = new Date(time).getTime();
				const date = new Date(a);
				const Y = date.getFullYear();
				const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '/';
				const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '/';
				const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
				const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
				// const s = date.getSeconds(); // 秒
				const dateString = D + M + Y;
				const times = h + m
				const timeData = {
					dateString: dateString,
					times: times
				}
				return timeData;
			},
			oderList() {
				this.rquestdata = false
				ServerOrderApiPage(this.pagelist).then((res) => {
					this.allCount = res.allCount
					if (res.allCount > this.dataList.length) {
						for (const key in res.data) {
							res.data[key].yers = this.randerTime(res.data[key].createTime).dateString
							res.data[key].time = this.randerTime(res.data[key].createTime).times
							this.dataList.push(res.data[key])
						}
						this.rquestdata = true
						this.dataMore = 'more'
					}
					this.isRefresher= false
				}).catch((err) => {
					this.dataMore = 'more'
					return false
				})
			},
			rechengenList() {
				this.rquestdata_withdraw = false
				ServerWithdrawApiUserPage(this.pagelist_withdraw).then((res) => {
					this.allCount_withdraw = res.allCount
					console.log(res)
					if (res.allCount > this.dataList_withdraw.length) {
						for (const key in res.data) {
							res.data[key].yers = this.randerTime(res.data[key].createTime).dateString
							res.data[key].time = this.randerTime(res.data[key].createTime).times
							this.dataList_withdraw.push(res.data[key])
						}
						this.rquestdata_withdraw = true
						this.dataMore = 'more'
						// console.log(this.dataList)
					}
					this.isRefresher= false
				}).catch((err) => {
					this.dataMore = 'more'
					return false
				})
			}
		}
	}
</script>

<style lang="scss">
	.header-fixd {
		position: fixed;
		z-index: 999;
		width: 100%;
		left: 50%;
		top: 100upx;
		transform: translate(-50%, 0);
	}

	.scroll-order {
		width: 100%;
		height: calc(100vh - 310rpx);
	}

	// .scroll {
	// 	width: 100%;
	// 	height: calc(100vh - 300rpx);
	// }
</style>