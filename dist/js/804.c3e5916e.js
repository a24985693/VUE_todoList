"use strict";(self["webpackChunkto_do_list"]=self["webpackChunkto_do_list"]||[]).push([[804],{4804:function(e,s,l){l.r(s),l.d(s,{default:function(){return F}});var a=l(6768),o=l(4232),t=l(3914);const i={class:"bg-primary"},r={class:"container"},n={class:"vh-100 row flex-column flex-md-row align-items-center justify-content-center gx-4"},c=(0,a.Fv)('<div class="col-5 d-none d-md-flex flex-column text-center"><h2 class="fw-bold mb-5 text-info"><i class="fa-regular fa-circle-check"></i> TODO LIST </h2><img src="'+t+'" alt="logo圖" class="w-100"></div><div class="col-12 d-md-none"><h2 class="fw-bold mb-5 text-info"><i class="fa-regular fa-circle-check"></i> TODO LIST </h2></div>',2),d={class:"col-12 col-md-5"},m=(0,a.Lk)("h4",{class:"fw-bold mb-4"},"登入",-1),u={class:"mb-3"},f=(0,a.Lk)("label",{for:"email",class:"form-label fw-bold"},"Email",-1),b={class:"mb-4"},h=(0,a.Lk)("label",{for:"password",class:"form-label fw-bold"},"密碼",-1),p={key:0,class:"text-danger mb-3 fw-bold"},k=(0,a.Lk)("div",{class:"mb-4 text-center"},[(0,a.Lk)("button",{class:"btn btn-secondary py-2 px-4 fw-semibold"}," 登入 ")],-1),g={class:"text-center"};function v(e,s,l,t,v,w){const x=(0,a.g2)("Field"),L=(0,a.g2)("error-message"),F=(0,a.g2)("router-link"),_=(0,a.g2)("Form");return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.Lk)("div",r,[(0,a.Lk)("div",n,[c,(0,a.Lk)("div",d,[m,(0,a.bF)(_,{onSubmit:w.signIn},{default:(0,a.k6)((({errors:e})=>[(0,a.Lk)("div",u,[f,(0,a.bF)(x,{id:"email",name:"email",type:"email",class:(0,o.C4)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:v.user.email,"onUpdate:modelValue":s[0]||(s[0]=e=>v.user.email=e)},null,8,["class","modelValue"]),(0,a.bF)(L,{name:"email",class:"invalid-feedback"})]),(0,a.Lk)("div",b,[h,(0,a.bF)(x,{id:"password",name:"密碼",type:"password",class:(0,o.C4)(["form-control",{"is-invalid":e["密碼"]}]),placeholder:"請輸入密碼",rules:"required",modelValue:v.user.password,"onUpdate:modelValue":s[1]||(s[1]=e=>v.user.password=e)},null,8,["class","modelValue"]),(0,a.bF)(L,{name:"密碼",class:"invalid-feedback"})]),v.warning?((0,a.uX)(),(0,a.CE)("p",p,(0,o.v_)(v.warning),1)):(0,a.Q3)("",!0),k,(0,a.Lk)("div",g,[(0,a.bF)(F,{to:"/register",class:"text-decoration-none text-dark fw-bold"},{default:(0,a.k6)((()=>[(0,a.eW)(" 註冊帳號 ")])),_:1})])])),_:1},8,["onSubmit"])])])])])}l(4114);var w={data(){return{user:{email:"",password:""},warning:""}},methods:{signIn(){this.$http.defaults.headers.common.Authorization="";const e="https://todoo.5xcamp.us/users/sign_in";this.$http.post(e,{user:this.user}).then((e=>{const s=e.headers.authorization;document.cookie=`todoToken=${s};`,this.$http.defaults.headers.common.Authorization=s,this.$router.push("/todolist")})).catch((()=>{this.warning="信箱或密碼有誤，請重新輸入"}))}},created(){this.$store.commit("clearMessages")}},x=l(1241);const L=(0,x.A)(w,[["render",v]]);var F=L},3914:function(e,s,l){e.exports=l.p+"img/logo.696ff69d.svg"}}]);
//# sourceMappingURL=804.c3e5916e.js.map