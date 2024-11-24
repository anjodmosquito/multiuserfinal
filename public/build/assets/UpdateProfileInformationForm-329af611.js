import{Q as x,T as v,o as l,c as n,b as s,a,u as e,h as m,w as d,e as h,A as k,g as f,z as V,d as b,i as w}from"./app-b78d6429.js";import{a as p,b as g,_ as y}from"./TextInput-9d2e7e65.js";import{_ as S}from"./PrimaryButton-fda91f6f.js";const N=s("header",null,[s("h2",{class:"text-lg font-medium text-gray-900 dark:text-gray-100"},"Profile Information"),s("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"}," Update your account's profile information and email address. ")],-1),$={key:0},B={class:"text-sm mt-2 text-gray-800 dark:text-gray-200"},E={class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},U={class:"flex items-center gap-4"},C={key:0,class:"text-sm text-gray-600 dark:text-gray-400"},I={__name:"UpdateProfileInformationForm",props:{mustVerifyEmail:Boolean,status:String},setup(_){const u=_,i=x().props.auth.user,t=v({name:i.name,email:i.email});return(c,o)=>(l(),n("section",null,[N,s("form",{onSubmit:o[2]||(o[2]=b(r=>e(t).patch(c.route("profile.update")),["prevent"])),class:"mt-6 space-y-6"},[s("div",null,[a(y,{for:"name",value:"Name"}),a(p,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e(t).name,"onUpdate:modelValue":o[0]||(o[0]=r=>e(t).name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(g,{class:"mt-2",message:e(t).errors.name},null,8,["message"])]),s("div",null,[a(y,{for:"email",value:"Email"}),a(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(t).email,"onUpdate:modelValue":o[1]||(o[1]=r=>e(t).email=r),required:"",autocomplete:"username"},null,8,["modelValue"]),a(g,{class:"mt-2",message:e(t).errors.email},null,8,["message"])]),u.mustVerifyEmail&&e(i).email_verified_at===null?(l(),n("div",$,[s("p",B,[m(" Your email address is unverified. "),a(e(w),{href:c.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:d(()=>[m(" Click here to re-send the verification email. ")]),_:1},8,["href"])]),h(s("div",E," A new verification link has been sent to your email address. ",512),[[k,u.status==="verification-link-sent"]])])):f("",!0),s("div",U,[a(S,{disabled:e(t).processing},{default:d(()=>[m("Save")]),_:1},8,["disabled"]),a(V,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:d(()=>[e(t).recentlySuccessful?(l(),n("p",C,"Saved.")):f("",!0)]),_:1})])],32)]))}};export{I as default};
