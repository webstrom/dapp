import {signData} from "./idctionary.js";
let server_url = 'https://www.uubb.in';  //请求根路径（服务器地址）
let token = uni.getStorageSync('useer_date').token;//token令牌
// process.env.NODE_ENV === 'development' ? 'http://192.168.3.31:8444' : 'http://***/api'; //环境配置，一般这个地址是需要创建一个单独的配置文件向外暴露变量的，因为有时上传文件也需要用到
//向外暴露一个方法，传入一个默认值（空对象）
let ajaxTimes=0;
// export function service(options = {}) {
export function service(url,pramis,type) {
	const DataAll = signData(pramis)
	const options = {
		method:type,
		data:{
			...pramis,
			...DataAll
		}
	}
	console.log(token)
	ajaxTimes++;
	// 显示加载中 效果
	uni.showLoading({
		title: "Loading...",
		mask: true,
	});
	uni.getStorageSync('useer_date') && (token = uni.getStorageSync('useer_date').token);//从本地缓存中获取token
	// options.url = `${server_url}${url}`;//前面为你的服务器地址，后面为具体接口地址
	options.url = `${url}`;//前面为你的服务器地址，后面为具体接口地址
	//配置请求头
	options.header = {
		// 'content-type': 'application/json',//默认请求头，可不写
		'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
		'token': `${token}` //Bearer ，你请求数据需要的自定义请求头（令牌）
	};
// 创建promise，因为接口请求无非就两种情况，成功或失败，成功就.then处理，失败就可以统一处理（弹框提示等等）
	return new Promise((resolved, rejected) => {
		//成功
		options.success = (res) => {
			// uni.hideLoading();
			if (Number(res.data.code) == 200) { //请求成功
				resolved(res.data);//请求成功时返回接口数据
			} else {
				uni.showToast({
					icon: 'none',
					duration: 3000,
					title: `${res.data.msg}`
				});//弹窗提示接口调用失败的信息
				// if((res.data.code == 401 && res.data.msg == 'sign is error')||(res.data.code == 403 && res.data.msg == 'The token is expired or invalid')){
				// 	uni.navigateTo({
				// 		url: '/pages/login/index'
				// 	});
				// }else{
					
				// }
				rejected(res.data.msg); //这里调用promise的rejected方法传入错误信息，这样就可以在调用的接口地方直接.catch拿到错误信息了
			}
		}
		//错误（一般没有网络的情况下会走这里）
		options.fail = (err) => {
			uni.showToast({
				icon: 'none',
				duration: 3000,
				title: `request failure,please check your network`
			});
			rejected(err); //请求失败时返回错误信息
			return false
		}
		options.complete = ()=>{
			ajaxTimes--;
			if(ajaxTimes===0){
				uni.hideLoading();
			}
		}
		uni.request(options);//调用uni的api，传入配置我们的外部配置参数
	});
}