import {
	MguserApiUserRegister,
	MguserApiVerifySms,
	EmailApiSend,
	MguserApiKaptcha,
	MguserApiAppLogin,
	MessageApiGetBalance,
	OrderApiAddOrder,
	OrderApiPage,
	MessageApiGetUsdtRate,
	MessageApiAddUserBank,
	MessageApiListUserBank,
	MessageApiEditUserBank,
	WithdrawApiAddBalanceWithdraw,
	SmsApiSendByWithdraw,
	WithdrawApiAddBickbackWithdraw,
	WithdrawApiUserPage,
	MessageApiPageShareMessage,
	MessageApiGetNum,
	SmsApiSendByBank,
	MessageApiListUser,
	MguserApiLoginout,
	MguserApiEditPasseord,
	SmsApiSend,
	MguserApiEditPassword,
	SmsApiSendByEdit,
	MessageApiGetVersion,
	WithdrawApiGetDetils,
	WithdrawApiVerify,
	MessageApiEditWithdrawPassword,
	MessageApiIsByAddress,
	SysSmsApiSend,
	WithdrawApiIsWithdrawPassword,
	OrderApiGetNumByAmount,
	MessageApiGetNoticeMessage
} from '@/stores/api.js'
import {service} from "@/stores/request.js"

export function ServerMguserApiUserRegister(pramis) {
    return service(MguserApiUserRegister,pramis,'POST')
}
export function ServerMguserApiVerifySms(pramis) {
    return service(MguserApiVerifySms,pramis,'GET')
}
export function ServerSysSmsApiSend(pramis) {
    return service(SysSmsApiSend,pramis,'POST')
}
export function ServerEmailApiSend(pramis) {
    return service(EmailApiSend,pramis,'POST')
}
export function ServerMguserApiKaptcha(pramis) {
    return service(MguserApiKaptcha,pramis,'GET')
}
export function ServerMguserApiAppLogin(pramis) {
    return service(MguserApiAppLogin,pramis,'POST')
}
export function ServerOrderApiAddOrder(pramis) {
    return service(OrderApiAddOrder,pramis,'POST')
}
export function ServerMessageApiGetBalance(pramis) {
    return service(MessageApiGetBalance,pramis,'GET')
}
export function ServerOrderApiPage(pramis) {
    return service(OrderApiPage,pramis,'GET')
}
export function ServerMessageApiGetUsdtRate(pramis) {
    return service(MessageApiGetUsdtRate,pramis,'GET')
}
export function ServerWithdrawApiUserPage(pramis) {
    return service(WithdrawApiUserPage,pramis,'GET')
}
export function ServerMessageApiAddUserBank(pramis) {
    return service(MessageApiAddUserBank,pramis,'POST')
}
export function ServerMessageApiListUserBank(pramis) {
    return service(MessageApiListUserBank,pramis,'GET')
}
export function ServerWithdrawApiIsWithdrawPassword(pramis) {
    return service(WithdrawApiIsWithdrawPassword,pramis,'GET')
}
export function ServerSmsApiSendByWithdraw(pramis) {
    return service(SmsApiSendByWithdraw,pramis,'POST')
}
export function ServerWithdrawApiAddBickbackWithdraw(pramis) {
    return service(WithdrawApiAddBickbackWithdraw,pramis,'POST')
}
export function ServerMessageApiEditUserBank(pramis) {
    return service(MessageApiEditUserBank,pramis,'POST')
}
export function ServerWithdrawApiAddBalanceWithdraw(pramis) {
    return service(WithdrawApiAddBalanceWithdraw,pramis,'POST')
}
export function ServerMessageApiPageShareMessage(pramis) {
    return service(MessageApiPageShareMessage,pramis,'GET')
}
export function ServerMessageApiGetNum(pramis) {
    return service(MessageApiGetNum,pramis,'GET')
}
export function ServerMessageApiListUser(pramis) {
    return service(MessageApiListUser,pramis,'GET')
}
export function ServerMguserApiLoginout(pramis) {
    return service(MguserApiLoginout,pramis,'POST')
}
export function ServerMguserApiEditPasseord(pramis) {
    return service(MguserApiEditPasseord,pramis,'POST')
}
export function ServerSmsApiSend(pramis) {
    return service(SmsApiSend,pramis,'POST')
}
export function ServerMguserApiEditPassword(pramis) {
    return service(MguserApiEditPassword,pramis,'POST')
}
export function ServerSmsApiSendByEdit(pramis) {
    return service(SmsApiSendByEdit,pramis,'POST')
}
export function ServerMessageApiGetVersion(pramis) {
    return service(MessageApiGetVersion,pramis,'GET')
}
export function ServerWithdrawApiGetDetils(pramis) {
    return service(WithdrawApiGetDetils,pramis,'GET')
}
export function ServerWithdrawApiVerify(pramis) {
    return service(WithdrawApiVerify,pramis,'POST')
}
export function ServerSmsApiSendByBank(pramis) {
    return service(SmsApiSendByBank,pramis,'POST')
}
export function ServerMessageApiEditWithdrawPassword(pramis) {
    return service(MessageApiEditWithdrawPassword,pramis,'POST')
}
export function ServerMessageApiIsByAddress(pramis) {
    return service(MessageApiIsByAddress,pramis,'GET')
}
export function ServerOrderApiGetNumByAmount(pramis) {
    return service(OrderApiGetNumByAmount,pramis,'GET')
}
export function ServerMessageApiGetNoticeMessage(pramis) {
    return service(MessageApiGetNoticeMessage,pramis,'GET')
}
