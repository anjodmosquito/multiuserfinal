import{T as x,o as n,l as c,w as l,a as t,u as e,Z as w,c as h,t as k,g as u,b as a,i as f,h as i,n as y,d as v}from"./app-b78d6429.js";import{_ as V}from"./Checkbox-9e7a2385.js";import{_ as B}from"./GuestLayout-58931ef6.js";import{_ as p,a as g,b as _}from"./TextInput-9d2e7e65.js";import{_ as E}from"./PrimaryButton-fda91f6f.js";import"./ApplicationLogo-0aef615f.js";import"./_plugin-vue_export-helper-c27b6911.js";const N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=a("div",{class:"text-center text-2xl font-bold mb-4 text-black rounded"}," ADMIN LOGIN ",-1),C={class:"mt-4"},L={class:"block mt-4"},D={class:"flex items-center"},U=a("span",{class:"ml-2 text-sm text-gray-600 dark:text-gray-400"},"Remember me",-1),q={class:"flex justify-center mt-4"},A={class:"flex items-center justify-between mt-4 space-x-4"},T={__name:"Login",props:{canResetPassword:Boolean,status:String},setup(m){const s=x({email:"",password:"",remember:!1}),b=()=>{s.post(route("admin.login"),{onFinish:()=>s.reset("password")})};return(d,o)=>(n(),c(B,null,{default:l(()=>[t(e(w),{title:"Log in as admin"}),m.status?(n(),h("div",N,k(m.status),1)):u("",!0),a("form",{onSubmit:v(b,["prevent"])},[a("div",null,[$,t(p,{for:"email",value:"Email"}),t(g,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":o[0]||(o[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(_,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),a("div",C,[t(p,{for:"password",value:"Password"}),t(g,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":o[1]||(o[1]=r=>e(s).password=r),required:"",autocomplete:"current-password"},null,8,["modelValue"]),t(_,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),a("div",L,[a("label",D,[t(V,{name:"remember",checked:e(s).remember,"onUpdate:checked":o[2]||(o[2]=r=>e(s).remember=r)},null,8,["checked"]),U])]),a("div",q,[m.canResetPassword?(n(),c(e(f),{key:0,href:d.route("password.request"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:l(()=>[i(" Forgot your password? ")]),_:1},8,["href"])):u("",!0)]),a("div",A,[t(e(f),{href:d.route("login"),class:"px-4 py-2 bg-[#B5C99A] hover:bg-[#D2E0BE] text-black rounded small-font"},{default:l(()=>[i(" Log in as User ")]),_:1},8,["href"]),t(E,{class:y(["px-4 py-2 ml-4 bg-[#B5C99A] hover:bg-[#D2E0BE] text-black rounded",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:l(()=>[i(" Log in ")]),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{T as default};
