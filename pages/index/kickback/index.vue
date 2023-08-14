<template>
	<view class="p-3 home-background">
		
		<!-- <view style="height: var(--status-bar-height);width: 100%;"></view> -->
		
		<view class="border-radius-1 balens p-3 border-radius-2">
			<view class="color-3 font-lg flex justify-between"> 
				<text>Bonus</text>
				<i class="iconfont font-lg font-weight-bolder color-icon color-3" @click="showBelenc">&#xe7a4;</i>
			</view>
			<view class="color-3 font-lg font-weight-bolder mt-3"><text>₹</text> {{showBelencAdhide?balenc.kickback:'***'}}</view>
			<view class="text-align-r mt-3"><text class="color-3" @click="ToNavigateToClick('/pages/my/withdraw/index?type=2')">withdraw</text></view>
		</view>
		<!-- <view class="flex justify-between font-md text-align-center pt-3 pb-3">
			<text class="color-1" style="display: block;width: 50%;">Kickback List</text>
			<text style="display: block;width: 50%;">invited</text>
		</view> -->
		<view class="border-radius-1 p-3 background-white border-bottom mt-3">
			<view class="flex justify-between font-md ">
				<text class="text-align-center" style="display: block;width: 30%;">User name</text>
				<text class="text-align-center" style="display: block;width: 30%;">Bonus</text>
				<text class="text-align-center" style="display: block;width: 30%;">Date</text>
			</view>
		</view>
		<view class="pt-0">
			<scroll-view class="scroll-kickback" :refresher-threshold="100" :refresher-triggered="isRefresher" refresher-enabled="true"
				@refresherrefresh="refresherrefreshFun" scroll-y="true" @scrolltolower="onLoadMore">
				
				<view class="all-order">
					<view v-if="allCount===0" class="text-align-center p-10 color-test">
						<i class="iconfont font-back font-italic color-test">&#xe7ed;</i>
						<view>There is currently no record of congestion</view>
					</view>
					<template v-for="(val,index) in dataList">
						<view class="flex font-md justify-between align-center p-3 background-white border-bottom">
							<text class="text-align-center" style="display: block;width: 30%;">{{val.subordinateUserName}}</text>
							<text class="text-align-center color-1" style="display: block;width: 30%;"><text>₹</text> {{val.shareAmount}}</text>
							<!-- <text class="text-align-center color-1" style="display: block;width: 25%;">190.23</text> -->
							<text class="text-align-center font" style="display: block;width: 30%;">{{val.yers}}<br/>{{val.time}}</text>
						</view>
					</template>
				</view>
				<uni-load-more v-if="dataList.length>=pagedata.pageSize" :status="dataMore"
					:contentText="{contentdown:'Pull up to display more',contentrefresh:'Loading...',contentnomore:`There's no more data left`}"></uni-load-more>
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
import { ServerMessageApiPageShareMessage,ServerMessageApiGetBalance } from '../../../server/server';
	export default {
		data() {
			return {
				isRefresher: false,
				pagedata:{
					pageNum:1,
					pageSize:20
				},
				balenc:{},
				allCount:0,
				dataList:[],
				rquestdata:false,
				dataMore:'more',
				showBelencAdhide:true
			}
		},
		onLoad() {
			this.listData()
			this.GetBalanceHoled()
		},
		onShow(){
			this.refresherrefreshFun()
		},
		methods: {
			refresherrefreshFun() {
				this.pagedata = {
					pageNum:1,
					pageSize:20
				}
				this.dataList = []
				this.isRefresher = true
				this.listData()
				this.GetBalanceHoled()
			},
			GetBalanceHoled(){
				ServerMessageApiGetBalance().then((res)=>{
					this.balenc = res.data
				})
			},
			showBelenc(){
				if(this.showBelencAdhide){
					this.showBelencAdhide = false
				}else{
					this.showBelencAdhide = true
				}
			},
			ToNavigateToClick(url){
				uni.navigateTo({
				    url:url
				});
			},
			onLoadMore(){
				if(this.rquestdata){
					if(Math.ceil(this.allCount/this.pagedata.pageSize)>this.pagedata.pageNum){
						this.pagedata.pageNum += 1
						this.dataMore = 'loading'
						this.listData()
					}else{
						this.dataMore = 'noMore'
						// uni.showToast({
						// 	icon: 'fail',
						// 	duration: 3000,
						// 	title: `There's no more data left`,
						// });
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
				const dateString = D + M + Y ;
				const times = h + m
				const timeData = {
					dateString:dateString,
					times:times
				}
				return timeData;
			},
			listData(){
				this.rquestdata = false
				// this.isRefresher= true
				ServerMessageApiPageShareMessage(this.pagedata).then((res)=>{
					this.allCount = res.allCount
					if(res.allCount>0){
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
					this.isRefresher= false
					return false
				})
			}
		}
	}
</script>

<style>
	.scroll-kickback{
		width: 100%;
		height: calc(100vh - 450rpx);
	}
</style>