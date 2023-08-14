//注册
export const MguserApiUserRegister = '/api/outer/app/sys/mguser/userRegister'
export const SysSmsApiSend = '/api/outer/app/sys/sms/send'
//发送邮箱验证码
export const EmailApiSend = '/api/outer/app/email/send'

//登录
export const MguserApiAppLogin = '/api/outer/app/sys/mguser/appLogin'
export const MguserApiKaptcha = '/api/outer/app/sys/mguser/kaptcha'
export const MguserApiIsVerification = '/api/outer/manage/sys/mguser/isVerification'
export const MguserApiVerifySms = '/api/outer/app/sys/mguser/verifySms'

//修改密码 
export const MguserApiEditPasseord = '/api/inter/app/user/message/editPasseord'
export const SmsApiSend = '/api/inter/app/sms/send'

//忘记密码 
export const MguserApiEditPassword = '/api/outer/app/sys/mguser/editPassword'
export const SmsApiSendByEdit = '/api/outer/app/sys/sms/sendByEdit'

//退出登录 
export const MguserApiLoginout = '/api/inter/app/user/message/loginout'

//获取余额
export const MessageApiGetBalance = '/api/inter/app/user/message/getBalance'
export const MessageApiGetUsdtRate = '/api/inter/app/user/message/getUsdtRate'

//用户充值
export const OrderApiAddOrder = '/api/inter/app/usdt/order/addOrder'

//提现
export const WithdrawApiAddBalanceWithdraw = '/api/inter/app/user/withdraw/addBalanceWithdraw'
export const SmsApiSendByWithdraw = '/api/inter/app/sms/sendByWithdraw'
export const WithdrawApiAddBickbackWithdraw = '/api/inter/app/user/withdraw/addBickbackWithdraw'
export const WithdrawApiGetDetils = '/api/inter/app/user/withdraw/getDetils'

//充值订单列表 提现列表
export const OrderApiPage = '/api/inter/app/usdt/order/page'
export const WithdrawApiUserPage = '/api/inter/app/user/withdraw/userPage'
export const WithdrawApiVerify = '/api/inter/app/user/withdraw/verify'
export const WithdrawApiIsWithdrawPassword = '/api/inter/app/user/message/isWithdrawPassword'

//银行卡操作
export const MessageApiAddUserBank = '/api/inter/app/user/message/addUserBank'
export const MessageApiListUserBank = '/api/inter/app/user/message/listUserBank'
export const MessageApiEditUserBank = '/api/inter/app/user/message/editUserBank'

//佣金列表 
export const MessageApiPageShareMessage = '/api/inter/app/user/message/pageShareMessage'

//邀请人数量 
export const MessageApiGetNum = '/api/inter/app/user/message/getNum'
export const MessageApiListUser = '/api/inter/app/user/message/listUser'
export const MessageApiGetVersion = '/api/outer/app/sys/mguser/getVersion'
export const SmsApiSendByBank = '/api/inter/app/sms/sendByBank'
export const MessageApiEditWithdrawPassword = '/api/inter/app/user/message/editWithdrawPassword'
export const MessageApiIsByAddress = '/api/outer/app/sys/mguser/isByAddress'
export const OrderApiGetNumByAmount = '/api/inter/app/usdt/order/getNumByAmount'
export const MessageApiGetNoticeMessage = '/api/inter/app/user/message/getNoticeMessage'