import{c as t,n as e,O as o,o as i,e as r,w as s,y as l,f as h,m as a,j as n,t as u,z as c,A as p,F as d,i as g,q as f,P as x,Q as y}from"./index-ec5cfb06.js";import{_ as w}from"./_plugin-vue_export-helper.1b428a4d.js";const C=w({data(){return{show:!0,animDur:"5s",autoBoxWidth:0,autoBoxHeight:0,textPercent:.77,noticePercent:.075,morePercent:.09,closePercent:.065,swp:this.text.slice(),textIdx:0}},computed:{rpxWidth(){return parseFloat(this.width)/t().screenWidth*750},autoMarQueeWidth(){let t=this.textPercent;return this.showClose||(t+=this.closePercent),this.showIcon||(t+=this.noticePercent),this.showMore||(t+=this.morePercent),parseFloat(this.width)*t},autoNoticeWidth(){return parseFloat(this.width)*this.noticePercent},autoMoreWidth(){return parseFloat(this.width)*this.morePercent},autoCloseWidth(){return parseFloat(this.width)*this.closePercent},blockWidth(){let t=0,e=0;return this.getRect("#text").then((t=>{e=t.width})),t=parseFloat(this.autoMarQueeWidth)-parseFloat(e)-this.spaceConst,t},autoBgColor(){return this.RGBChange(this.color,.85,"light")},autoNoticeSize(){return.087*parseFloat(this.width)+"rpx"},autoMoreSize(){return.087*parseFloat(this.width)+"rpx"},autoCloseSize(){return.087*parseFloat(this.width)+"rpx"}},props:{type:{type:String,default:"hori-connect"},width:{type:[String,Number],default:t().screenWidth},height:{type:[String,Number],default:70},color:{type:String,default:"#f5a300"},bgColor:{type:String,default:""},text:{type:Array,default:()=>[]},fontWeight:{type:String,default:"normal"},fontSize:{type:[String,Number],default:"27"},hasBorder:{type:Boolean,default:!1},scroll:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},showMore:{type:Boolean,default:!0},showClose:{type:Boolean,default:!1},url:{type:String,default:""},extendMoreArea:{type:Boolean,default:!1},join:{type:String,default:"    "},spaceConst:{type:Number,default:0},speed:{type:Number,default:40},time:{type:Number,default:3e3},duration:{type:Number,default:1e3}},mounted(){this.getRect("#text").then((t=>{this.autoBoxWidth=2*(t.width+this.blockWidth),this.animDur=parseFloat(t.width+this.blockWidth)/this.speed+"s"}))},methods:{showMoreTap(){this.url?e({url:this.url,fail(t){console.log(t)}}):this.$emit("showMore")},showMoreExtendTap(){this.extendMoreArea&&this.showMoreTap()},swpChange(t){if(this.text.length>2){let e=t.detail.current;1===e?(this.swp.splice(0,1,this.swp[2]),this.swp.splice(2,1)):0===e&&(this.swp.splice(1,1,this.swp[2]),this.swp.splice(2,1)),this.swp.push(this.text[this.textIdx]),this.textIdx++,this.textIdx===this.text.length-1&&(this.textIdx=0)}},getRect(t){return new Promise((e=>{o().in(this).select(t).boundingClientRect((t=>{t&&e(t)})).exec()}))},RGBChange(t,e,o){if(4===t.length){let e=t.split("");t="#"+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]}let i=[t.substring(1,3),t.substring(3,5),t.substring(5,7)],r=[parseInt(i[0],16),parseInt(i[1],16),parseInt(i[2],16)];for(var s=0;s<3;s++)r[s]="light"===o?Math.floor((255-r[s])*e+r[s]):Math.floor(r[s]*(1-e));let l=r[0].toString(16),h=r[1].toString(16),a=r[2].toString(16);return 1===l.length&&(l="0"+l),1===h.length&&(h="0"+h),1===a.length&&(a="0"+a),"#"+l+h+a}}},[["render",function(t,e,o,w,C,S){const m=g,b=f,W=x,k=y;return C.show?(i(),r(m,{key:0,class:"container",style:l({height:o.height+"rpx",backgroundColor:o.bgColor||S.autoBgColor,border:o.hasBorder?"1px solid"+o.color:"none"})},{default:s((()=>[o.showClose?(i(),r(m,{key:0,class:"close-box",onClick:e[0]||(e[0]=t=>C.show=!1),style:l({width:S.autoCloseWidth+"px",height:o.height+"rpx",paddingLeft:o.showIcon?"10rpx":"0",backgroundColor:o.bgColor||S.autoBgColor})},{default:s((()=>[h(m,{class:"iconfont icon-close",style:l({fontSize:S.autoCloseSize,color:o.color,lineHeight:o.height+"rpx"})},null,8,["style"])])),_:1},8,["style"])):a("",!0),o.showIcon?(i(),r(m,{key:1,class:"notice-box",style:l({width:S.autoNoticeWidth+"px",height:o.height+"rpx",backgroundColor:o.bgColor||S.autoBgColor})},{default:s((()=>[h(m,{class:"iconfont icon-tongzhi",style:l({fontSize:S.autoNoticeSize,color:o.color,lineHeight:o.height+"rpx"})},null,8,["style"])])),_:1},8,["style"])):a("",!0),"hori-connect"===o.type?(i(),r(m,{key:2,class:"marquee-hori",onClick:S.showMoreExtendTap,style:l({width:S.autoMarQueeWidth+"px",height:"105%",backgroundColor:o.bgColor||S.autoBgColor})},{default:s((()=>[h(m,{class:"box-hori",style:l({width:C.autoBoxWidth+"px",animationName:o.scroll?"":"none",animationDuration:C.animDur})},{default:s((()=>[h(b,{id:"text",style:l({whiteSpace:"pre",color:o.color,fontWeight:o.fontWeight,fontSize:o.fontSize+"rpx",lineHeight:o.height+"rpx"})},{default:s((()=>[n(u(o.text.length<=1?o.text[0]:o.text.join(o.join)),1)])),_:1},8,["style"]),h(m,{style:"width: 100%; height: 100%"}),h(b,{style:l({whiteSpace:"pre",color:o.color,fontWeight:o.fontWeight,fontSize:o.fontSize+"rpx",lineHeight:o.height+"rpx"})},{default:s((()=>[n(u(o.text.length<=1?o.text[0]:o.text.join(o.join)),1)])),_:1},8,["style"]),h(m,{style:"width: 100%; height: 100%"})])),_:1},8,["style"])])),_:1},8,["onClick","style"])):a("",!0),"vert"===o.type||"hori-break"===o.type?(i(),r(m,{key:3,class:"marquee-vert",onClick:S.showMoreExtendTap,style:l({width:S.autoMarQueeWidth+"px",height:"100%",backgroundColor:o.bgColor||S.autoBgColor})},{default:s((()=>[h(m,{class:"box-vert"},{default:s((()=>[h(k,{class:"swiper",style:l({height:1.3*o.fontSize+"rpx"}),autoplay:o.scroll,interval:o.time,duration:o.duration,vertical:"vert"===o.type,circular:!0,touchable:!1,"disable-touch":!0,onAnimationfinish:S.swpChange},{default:s((()=>[o.text.length<=2?(i(!0),c(d,{key:0},p(o.text,((t,e)=>(i(),r(W,{class:"swiper-item",key:e},{default:s((()=>[h(b,{style:l({whiteSpace:"pre",color:o.color,fontWeight:o.fontWeight,fontSize:o.fontSize+"rpx"})},{default:s((()=>[n(u(t),1)])),_:2},1032,["style"])])),_:2},1024)))),128)):a("",!0),o.text.length>2?(i(),r(W,{key:1,class:"swiper-item"},{default:s((()=>[h(b,{style:l({whiteSpace:"pre",color:o.color,fontWeight:o.fontWeight,fontSize:o.fontSize+"rpx"})},{default:s((()=>[n(u(C.swp[0]),1)])),_:1},8,["style"])])),_:1})):a("",!0),o.text.length>2?(i(),r(W,{key:2,class:"swiper-item"},{default:s((()=>[h(b,{style:l({whiteSpace:"pre",color:o.color,fontWeight:o.fontWeight,fontSize:o.fontSize+"rpx"})},{default:s((()=>[n(u(C.swp[1]),1)])),_:1},8,["style"])])),_:1})):a("",!0)])),_:1},8,["style","autoplay","interval","duration","vertical","onAnimationfinish"])])),_:1})])),_:1},8,["onClick","style"])):a("",!0),o.showMore?(i(),r(m,{key:4,class:"look-more-box",onClick:S.showMoreTap,style:l({width:S.autoMoreWidth+"px",height:o.height+"rpx",backgroundColor:o.bgColor||S.autoBgColor})},{default:s((()=>[h(m,{class:"iconfont icon-right",style:l({fontSize:S.autoMoreSize,color:o.color,lineHeight:o.height+"rpx"})},null,8,["style"])])),_:1},8,["onClick","style"])):a("",!0)])),_:1},8,["style"])):a("",!0)}],["__scopeId","data-v-88d63ae7"]]);export{C as w};
