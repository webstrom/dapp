import{x as e,G as s,N as o,n as a,M as l,o as t,e as r,w as n,i as d,f as i,k as c,m as p,j as u,t as f,q as m,I as h,r as w}from"./index-ec5cfb06.js";import{_ as g,a as b}from"./uni-forms.b8ce2cda.js";import{r as y}from"./uni-app.es.e9a932bd.js";import{o as U,p as _,q as V,r as C,s as D}from"./server.c89461b6.js";import{_ as q}from"./_plugin-vue_export-helper.1b428a4d.js";const x=q({data:()=>({UserData:{},UserData1:{},seconds:0,type:1,rules:{password:{rules:[{required:!0,errorMessage:"Please enter a new password"}]},passwordqd:{rules:[{required:!0,errorMessage:"Please confirm the password"}]},phoneCode:{rules:[{required:!0,errorMessage:"Please enter your phone verification code"}]}},rules1:{password:{rules:[{required:!0,errorMessage:"Please enter a new password"}]},passwordqd:{rules:[{required:!0,errorMessage:"Please confirm the password"}]},account:{rules:[{required:!0,errorMessage:"Please enter the registered phone number"}]},phoneCode:{rules:[{required:!0,errorMessage:"Please enter your phone verification code"}]}}}),onLoad(e){e&&e.type&&(this.type=e.type)},methods:{SendVerification(){if(1!=this.type&&3!=this.type||U().then((s=>{e({icon:"success",duration:3e3,title:`${s.msg}`}),this.seconds=60;const o=setInterval((()=>{this.seconds>0?this.seconds--:(this.seconds=0,clearInterval(o))}),1e3)})),2==this.type){if(null==this.UserData1.account||""==this.UserData1.account)return e({icon:"none",duration:3e3,title:"Please enter your phone number"}),!1;_({account:"91"+this.UserData1.account}).then((s=>{e({icon:"success",duration:3e3,title:`${s.msg}`}),this.seconds=60,man=setInterval((()=>{this.seconds>0?this.seconds--:(this.seconds=0,clearInterval(man))}),1e3)}))}},ModifyHoled(){1==this.type&&this.$refs.forms.validate().then((l=>{if(l.password!=l.passwordqd)return e({icon:"none",duration:3e3,title:"The two password inputs are inconsistent！"}),!1;V({password:s(l.password).toUpperCase(),phoneCode:l.phoneCode}).then((s=>{e({icon:"none",duration:3e3,title:`${s.msg}`}),setTimeout((()=>{o(),a({url:"/pages/login/index"})}),3e3)}))})).catch((e=>{console.log("表单错误信息：",e)})),3==this.type&&this.$refs.forms.validate().then((o=>{if(o.password!=o.passwordqd)return e({icon:"none",duration:3e3,title:"The two password inputs are inconsistent！"}),!1;C({withdrawPassword:s(o.password).toUpperCase(),phoneCode:o.phoneCode}).then((s=>{e({icon:"success",duration:3e3,title:`${s.msg}`}),setTimeout((()=>{l({delta:1})}),3e3)}))})).catch((e=>{console.log("表单错误信息：",e)})),2==this.type&&(console.log(this.type),this.$refs.form.validate().then((o=>{D({account:o.account,password:s(o.password).toUpperCase(),phoneCode:o.phoneCode}).then((s=>{e({icon:"success",duration:3e3,title:`${s.msg}`}),setTimeout((()=>{l({delta:1})}),3e3)}))})).catch((s=>{e({icon:"none",duration:3e3,title:"error"}),console.log("表单错误信息：",s)})))}}},[["render",function(e,s,o,a,l,U){const _=m,V=h,C=d,D=y(w("uni-forms-item"),g),q=y(w("uni-forms"),b);return t(),r(C,{class:"p-3 color-2"},{default:n((()=>[i(C,{class:"usersLogin"},{default:n((()=>[i(C,{class:"background-white border-radius-2 p-3"},{default:n((()=>[1==l.type||3==l.type?(t(),r(q,{key:0,ref:"forms",modelValue:l.UserData,rules:l.rules},{default:n((()=>[i(D,{label:"",name:"password"},{default:n((()=>[i(C,{class:"flex fle align-center border-1 p-1 font-md"},{default:n((()=>[i(_,{class:"pl-1"}),c("i",{class:"iconfont font-lg font-weight-bolder color-test"},""),i(V,{modelValue:l.UserData.password,"onUpdate:modelValue":s[0]||(s[0]=e=>l.UserData.password=e),class:"p-1 bl-1 ml-2 pl-2 width-100",type:"password",placeholder:"Please enter a new password"},null,8,["modelValue"])])),_:1})])),_:1}),i(D,{label:"",name:"passwordqd"},{default:n((()=>[i(C,{class:"flex fle align-center border-1 p-1 font-md"},{default:n((()=>[i(_,{class:"pl-1"}),c("i",{class:"iconfont font-lg font-weight-bolder color-test"},""),i(V,{modelValue:l.UserData.passwordqd,"onUpdate:modelValue":s[1]||(s[1]=e=>l.UserData.passwordqd=e),class:"p-1 bl-1 ml-2 pl-2 width-100",type:"password",placeholder:"Confirm Password"},null,8,["modelValue"])])),_:1})])),_:1}),i(D,{label:"",name:"phoneCode"},{default:n((()=>[i(C,{class:"flex fle align-center border-1 p-1 font-md"},{default:n((()=>[i(_,{class:"pl-1"}),c("i",{class:"iconfont font-lg font-weight-bolder color-test"},""),i(V,{modelValue:l.UserData.phoneCode,"onUpdate:modelValue":s[2]||(s[2]=e=>l.UserData.phoneCode=e),class:"p-1 bl-1 ml-2 pl-2 width-100",type:"text",placeholder:"Your phone sms verification code"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","rules"])):p("",!0),2==l.type?(t(),r(q,{key:1,ref:"form",modelValue:l.UserData1,rules:l.rules1},{default:n((()=>[i(D,{label:"",name:"password"},{default:n((()=>[i(C,{class:"flex fle align-center border-1 p-1 font-md"},{default:n((()=>[i(_,{class:"pl-1"}),c("i",{class:"iconfont font-lg font-weight-bolder color-test"},""),i(V,{modelValue:l.UserData1.password,"onUpdate:modelValue":s[3]||(s[3]=e=>l.UserData1.password=e),class:"p-1 bl-1 ml-2 pl-2 width-100",type:"password",placeholder:"Please enter a new password"},null,8,["modelValue"])])),_:1})])),_:1}),i(D,{label:"",name:"passwordqd"},{default:n((()=>[i(C,{class:"flex fle align-center border-1 p-1 font-md"},{default:n((()=>[i(_,{class:"pl-1"}),c("i",{class:"iconfont font-lg font-weight-bolder color-test"},""),i(V,{modelValue:l.UserData1.passwordqd,"onUpdate:modelValue":s[4]||(s[4]=e=>l.UserData1.passwordqd=e),class:"p-1 bl-1 ml-2 pl-2 width-100",type:"password",placeholder:"Confirm Password"},null,8,["modelValue"])])),_:1})])),_:1}),i(D,{label:"",name:"account"},{default:n((()=>[i(C,{class:"flex fle align-center border-1 p-1 font-md"},{default:n((()=>[i(_,{class:"pl-1"}),c("i",{class:"iconfont font-lg font-weight-bolder color-test"},""),i(V,{modelValue:l.UserData1.account,"onUpdate:modelValue":s[5]||(s[5]=e=>l.UserData1.account=e),class:"p-1 bl-1 ml-2 pl-2 width-100",type:"text",placeholder:"Enter your mobile phone number"},null,8,["modelValue"])])),_:1})])),_:1}),i(D,{label:"",name:"phoneCode"},{default:n((()=>[i(C,{class:"flex fle align-center border-1 p-1 font-md"},{default:n((()=>[i(_,{class:"pl-1"}),c("i",{class:"iconfont font-lg font-weight-bolder color-test"},""),i(V,{modelValue:l.UserData1.phoneCode,"onUpdate:modelValue":s[6]||(s[6]=e=>l.UserData1.phoneCode=e),class:"p-1 bl-1 ml-2 pl-2 width-100",type:"text",placeholder:"Your phone sms verification code"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","rules"])):p("",!0),i(C,{class:"font-small mt-3 flex justify-between"},{default:n((()=>[i(_,null,{default:n((()=>[u("Click send verification code ")])),_:1}),0===l.seconds?(t(),r(_,{key:0,class:"color-1",onClick:U.SendVerification},{default:n((()=>[u("Send Verification")])),_:1},8,["onClick"])):(t(),r(_,{key:1},{default:n((()=>[u("After "+f(l.seconds)+" seconds Resend",1)])),_:1}))])),_:1})])),_:1})])),_:1}),i(C,{class:"btn-login font-lg mt-6 p-3 border-radius-2 balens",onClick:U.ModifyHoled},{default:n((()=>[u("Modify")])),_:1},8,["onClick"])])),_:1})}],["__scopeId","data-v-43f5cbf6"]]);export{x as default};
