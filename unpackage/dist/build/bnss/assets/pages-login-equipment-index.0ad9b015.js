import{s as e,H as a,o,e as s,w as t,i as l,f as r,j as n,k as i,q as d,I as u,r as c}from"./index-ec5cfb06.js";import{_ as f,a as m}from"./uni-forms.b8ce2cda.js";import{r as p}from"./uni-app.es.e9a932bd.js";import{u as h}from"./server.c89461b6.js";import{_ as g}from"./_plugin-vue_export-helper.1b428a4d.js";const _=g({data:()=>({title:"My USD Name",UserData:{},isEmailCode:0,Images:{value:""},account:"",rules:{phoneCode:{rules:[{required:!0,errorMessage:"Please enter your email verification phone code"}]}}}),onLoad(e){e&&e.account&&(this.account=e.account)},methods:{DetermineHoled(){this.$refs.formsall.validate().then((o=>{o.account=this.account,h(o).then((o=>{e("useer_date",o.data),a({url:"/pages/index/index"})}))})).catch((e=>{}))}}},[["render",function(e,a,h,g,_,b){const v=l,D=d,x=u,C=p(c("uni-forms-item"),f),j=p(c("uni-forms"),m);return o(),s(v,{class:"p-6 home-background"},{default:t((()=>[r(v,{class:"scroll-login"},{default:t((()=>[r(v,{class:"background-white border-radius-2 p-4"},{default:t((()=>[r(v,null,{default:t((()=>[n("We have detected that you are logging in on a new device. Please enter a verification code to verify if the device is trustworthy!")])),_:1}),r(v,{class:"usersLogin mt-3"},{default:t((()=>[r(j,{ref:"formsall",modelValue:_.UserData,rules:_.rules},{default:t((()=>[r(C,{label:"",name:"phoneCode"},{default:t((()=>[r(v,{class:"flex fle align-center border-1 p-1 font-md"},{default:t((()=>[r(D,{class:"pl-1"}),i("i",{class:"iconfont font-lg font-weight-bolder color-test"},""),r(x,{modelValue:_.UserData.phoneCode,"onUpdate:modelValue":a[0]||(a[0]=e=>_.UserData.phoneCode=e),class:"p-1 bl-1 ml-2 pl-2 width-100",type:"text",placeholder:"Enter the verification code"},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue","rules"])])),_:1}),r(v,{class:"btn-login font-lg mt-5 p-3 border-radius-2 balens",onClick:b.DetermineHoled},{default:t((()=>[n("Determine")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})}],["__scopeId","data-v-b3ebbe8a"]]);export{_ as default};
