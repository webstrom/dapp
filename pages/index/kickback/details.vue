<template>
	<view class="p-3 home-background">
		
		<!-- <view style="height: var(--status-bar-height);width: 100%;"></view> -->
		
		<!-- <view class="border-radius-1 balens p-3 border-radius-2">
			<view class="color-3 font-lg flex justify-between"> 
				<text>kickback</text>
				<i class="iconfont font-lg font-weight-bolder color-icon color-3" @click="showBelenc">&#xe7a4;</i>
			</view>
			<view class="color-3 font-lg font-weight-bolder mt-3"><text>₹</text> {{showBelencAdhide?balenc.kickback:'***'}}</view>
			<view class="text-align-r mt-3"><text class="color-3" @click="ToNavigateToClick('/pages/my/withdraw/index?type=2')">withdraw</text></view>
		</view> -->
		<!-- <view class="flex justify-between font-md text-align-center pt-3 pb-3">
			<text class="color-1" style="display: block;width: 50%;">Kickback List</text>
			<text style="display: block;width: 50%;">invited</text>
		</view> -->
		<view class="border-radius-1 p-3 background-white border-bottom">
			<view class="flex justify-between font-md ">
				<text class="text-align-center" style="display: block;width: 50%;">UserName</text>
				<!-- <text class="text-align-center" style="display: block;width: 30%;">Kickback</text> -->
				<text class="text-align-center" style="display: block;width: 50%;">Date</text>
			</view>
		</view>
		<view class="pt-0">
			<scroll-view class="scroll-kickback_list" scroll-y="true" @scrolltolower="onLoadMore">
				<view class="all-order">
					<view v-if="allCount===0" class="text-align-center p-10 color-test">
						<i class="iconfont font-back font-italic color-test">&#xe7ed;</i>
						<view>There are currently no available invitation users available</view>
					</view>
					<template v-for="(val,index) in dataList">
						<view class="flex font-md justify-between align-center p-3 background-white border-bottom">
							<text class="text-align-center" style="display: block;width: 50%;">{{val.userName}}</text>
							<!-- <text class="text-align-center color-1" style="display: block;width: 30%;"><text>₹</text> {{val.shareAmount}}</text> -->
							<!-- <text class="text-align-center color-1" style="display: block;width: 25%;">190.23</text> -->
							<text class="text-align-center font" style="display: block;width: 50%;">{{val.yers}} {{val.time}}</text>
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
import { ServerMessageApiListUser } from '../../../server/server';
	export default {
		data() {
			return {
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
		},
		methods: {
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
						uni.showToast({
							icon: 'fail',
							duration: 3000,
							title: `There's no more data left`,
						});
					}
				}
			},
			
			listData(){
				this.rquestdata = false
				ServerMessageApiListUser(this.pagedata).then((res)=>{
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
				})
			}
		}
	}
</script>

<style>
	.scroll-kickback_list{
		width: 100%;
		height: calc(100vh - 150rpx);
	}
</style>