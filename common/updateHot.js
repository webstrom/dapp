// 下载最新的APP
const downloadApp = (appUrl, isHint) => {
	//下载最新版本APP
	if (isHint) {
		uni.showLoading({
			title: '下载中...',
			mask: true
		})
	}
	uni.downloadFile({
		url: appUrl,
		success: fileResult => {
			uni.hideLoading();
			if (isHint) {
				uni.showModal({
					content: '下载成功，是否现在重启APP并安装吗？',
					confirmText: '重启',
					success: function(modalResult) {
						if (modalResult.confirm) {
							plus.runtime.install(
								fileResult.tempFilePath, {
									force: true
								},
								function() {
									uni.showLoading({
										title: '更新成功，重启中...',
										mask: true
									})
									plus.runtime.restart();
								}
							)
						}
					}
				})
			} else {
				plus.runtime.install(fileResult.tempFilePath, {
					force: true
				})
			}
		},
		fail: err => {
			if (isHint) {
				uni.hideLoading();
				uni.showToast({
					title: '下载失败，请检查你的网络情况！',
					icon: 'none'
				})
			}
		}
	})
}
// #ifdef APP-PLUS
// 获取版本号对比是否需要更新
export const getAppVersion = (isHint = true, serveAppVersion = null, serveAppUrl = null) => {
	// 当前本地的PP版本号

	let currentAppVersion = null
	plus.runtime.getProperty(plus.runtime.appid, function(e) {
		currentAppVersion = Number(e.versionCode)
		if (serveAppVersion > currentAppVersion) {
			if (isHint) {
				uni.showModal({
					content: '当前有最新版本，是否要下载更新？',
					success: (res) => {
						if (res.confirm) {
							downloadApp(serveAppUrl, isHint)
						}
					}
				})
			} else {
				downloadApp(serveAppUrl, isHint)
			}
		}
	});
}

// 首先先进行引入这个方法
// import { getAppVersion } from "./updataApp.js"

// 接下来我们需要自己去请求接口拿到服务器上app的版本号和下载地址，在调用这个方法的时候传入进去
// 第一个参数可选值为true和false，true就是会有弹框提醒用户更新，false就是没有，可以用在热更新
// 第二个参数是通过请求接口拿到服务器上app的版本号
// 第三个是通过请求接口拿到服务器上app的下载地址
// getAppVersion(isHint, serveAppVersion, serveAppUrl)
// #endif