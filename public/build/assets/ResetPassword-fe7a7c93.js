import{T as c,o as f,l as w,w as n,a as o,u as e,Z as _,b as l,h as V,n as g,d as b}from"./app-b78d6429.js";import{_ as k}from"./GuestLayout-58931ef6.js";import{_ as t,a as i,b as m}from"./TextInput-9d2e7e65.js";import{_ as v}from"./PrimaryButton-fda91f6f.js";import"./ApplicationLogo-0aef615f.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={class:"mt-4"},y={class:"mt-4"},P={class:"flex items-center justify-end mt-4"},U={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return($,a)=>(f(),w(k,null,{default:n(()=>[o(e(_),{title:"Reset Password"}),l("form",{onSubmit:b(u,["prevent"])},[l("div",null,[o(t,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),l("div",x,[o(t,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),l("div",y,[o(t,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),l("div",P,[o(v,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{U as default};
