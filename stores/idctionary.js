import md5 from 'js-md5'
const random = (min,max) => {return Math.floor(Math.random() * (max-min+1)+min)}
const generateRandomString = (length) => {
    return Math.random()
        .toString(36)
        .replace(/[^a-zA-Z0-9]+/g, 'RF')
        .substr(0, length);
}
export const signData = (params)=>{
    const times = Date.parse(new Date().toString())
    const DataAllSign = [['time',times]]
    const token = uni.getStorageSync('useer_date')
	
    const n = 'mKdj'+generateRandomString(30)+random(0,Date.parse(new Date().toString())+1000)
    const e = random(0,Date.parse(new Date().toString())+2000)+generateRandomString(20)
    const v = 'qR^G$yd'+generateRandomString(40)+random(0,Date.parse(new Date().toString())+3000)
    const k = random(0,Date.parse(new Date().toString())+4000)+generateRandomString(60)
    const DataAllSignJoin = []
    for (const key in params){
        if (params[key] !== '') {
            DataAllSign.push([key,params[key]])
        }
    }
    for (const key in DataAllSign.sort()){
        DataAllSignJoin.push(DataAllSign[key].join('='))
    }
    return {
        sign:md5(DataAllSignJoin.join('&')+'&n='+n+'&e='+e+'&v='+v+'&k='+k+'&token='+token.token+'&salt=^as0#shajsa67^&*^&%tsze#hjh2ha%$$312jklasHA21a89$$33SAJKLS#**kqsak~~ks1001hs\'z9q').toUpperCase(),
        n:n,
        e:e,
        v:v,
        k:k,
        time:times
    }
}