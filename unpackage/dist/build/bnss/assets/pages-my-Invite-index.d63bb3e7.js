import{M as e,g as t,c as a,B as s,x as o,n as r,o as n,e as i,w as l,i as c,f as d,j as u,t as f,p as m,v as g,k as h,u as p,q as w}from"./index-ec5cfb06.js";import{u as x}from"./uqrcode.5e915e83.js";import{m as b}from"./server.c89461b6.js";import{_ as v}from"./_plugin-vue_export-helper.1b428a4d.js";const _=v({data:()=>({qrShow:!1,text1:"https://www.uubb.in",nowTime:"",userData:{},userNum:0,delta:""}),onUnload(){e({delta:this.delta})},onLoad(){this.userData=t("useer_date"),this.text1="https://www.uubb.in",a().platform,setInterval((()=>{var e,t,a,s,o,r,n,i,l=(e="y-m-d h:i:s",a=(t=new Date).getFullYear(),s=t.getMonth()+1,o=t.getDate(),r=t.getHours()<10?"0"+t.getHours():t.getHours(),t.getMinutes(),n=t.getMinutes(),t.getSeconds(),i=t.getSeconds(),s>=1&&s<=9&&(s="0"+s),o>=0&&o<=9&&(o="0"+o),n>=0&&n<=9&&(n="0"+n),i>=0&&i<=9&&(i="0"+i),-1!=e.indexOf("y")&&(e=e.replace("y",a)),-1!=e.indexOf("m")&&(e=e.replace("m",s)),-1!=e.indexOf("d")&&(e=e.replace("d",o)),-1!=e.indexOf("h")&&(e=e.replace("h",r)),-1!=e.indexOf("i")&&(e=e.replace("i",n)),-1!=e.indexOf("s")&&(e=e.replace("s",i)),e);this.nowTime=l}),1e3),this.GetNum()},methods:{orderCodeHoled(e){s({data:e,success:()=>{o({icon:"success",title:"Copy Success"})}})},navigateToClick(e){r({url:e})},qrFun:function(e){this.qrShow=!0,x.make({canvasId:"qrcode",componentInstance:this,text:e,size:300,margin:0,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",errorCorrectLevel:x.errorCorrectLevel.H,success:e=>{}})},GetNum(){b().then((e=>{this.userNum=e.data.userNum}))}},mounted(){this.qrFun(this.text1)}},[["render",function(e,t,a,s,o,r){const x=c,b=p,v=w;return n(),i(x,{class:"p-3 home-background"},{default:l((()=>[d(x,{style:{height:"var(--status-bar-height)",width:"100%"}}),d(x,{class:"p-3 background-white border-radius-2 font-lg mt-1"},{default:l((()=>[d(x,{class:"text-align-center"},{default:l((()=>[d(x,null,{default:l((()=>[u("My referral code")])),_:1}),d(x,{class:"color-1 mt-2",onClick:t[0]||(t[0]=e=>r.orderCodeHoled(o.userData.invitationCode))},{default:l((()=>[u(f(o.userData.invitationCode),1)])),_:1})])),_:1}),d(x,{class:"font-md text-align-center mt-2"},{default:l((()=>[u("Access by scanning the wallet browser code")])),_:1}),d(x,{class:"qr-box"},{default:l((()=>[m(d(b,{"canvas-id":"qrcode",style:{width:"600rpx",height:"600upx",margin:"0 auto"}},null,512),[[g,o.qrShow]])])),_:1}),d(x,{class:"text-align-center mt-3 font-lg"},{default:l((()=>[u(f(o.nowTime),1)])),_:1})])),_:1}),d(x,{class:"flex mt-3 justify-between align-center p-3 border-bottom background-white border-radius-1",onClick:t[1]||(t[1]=e=>r.navigateToClick("/pages/my/Invite/list"))},{default:l((()=>[d(x,{class:"flex align-center"},{default:l((()=>[h("i",{class:"iconfont font-lg font-weight-bolder color-2"},""),d(v,{class:"ml-1 color-icon"},{default:l((()=>[u("My invitation")])),_:1})])),_:1}),d(x,{class:"flex align-center"},{default:l((()=>[d(v,{class:"mr-2 color-1"},{default:l((()=>[u(f(o.userNum)+" people",1)])),_:1}),h("i",{class:"iconfont font-lg color-test color-icon"},"")])),_:1})])),_:1}),d(x,{class:"p-3 font-lg background-white border-radius-2 mt-3"},{default:l((()=>[u("Invite to earn commission. Friends can register an account to purchase through the invitation code below, and you can earn a lot of commission. Go and invite friends now")])),_:1})])),_:1})}],["__scopeId","data-v-856254d4"]]);export{_ as default};