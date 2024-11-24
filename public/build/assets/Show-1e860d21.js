import{T as v,r as f,m as _,o as r,l as C,w as p,a as b,u as o,Z as k,b as e,t as u,h as B,i as T,c as d,g as x,j as S,n as D,F as M,d as N,e as V,v as j,p as E,q as F}from"./app-914d880b.js";import{_ as $}from"./AdminAuthenticatedLayout-0b05c9ac.js";import{S as m}from"./sweetalert2.esm.all-509645c6.js";import"./ApplicationLogo-bcb5eeac.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-54b7070c.js";const A={class:"py-12"},L={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},Y={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},q={class:"p-6"},z={class:"flex items-center justify-between mb-4"},H={class:"text-2xl font-semibold"},O={key:0,class:"text-center text-gray-500 py-4"},U={class:"whitespace-pre-wrap"},Z={class:"text-xs text-gray-500 block mt-1"},G=["onClick"],I=["disabled"],ee={__name:"Show",props:{user:Object,chats:Array},setup(a){const h=a,s=v({message:""}),n=f(null),i=f(!1),g=()=>{n.value&&(n.value.scrollTop=n.value.scrollHeight)},w=()=>{!s.message.trim()||i.value||(i.value=!0,s.post(route("admin.chat.store",h.user.id),{onSuccess:()=>{s.reset(),E(()=>{g()})},onFinish:()=>{i.value=!1}}))};_(()=>{g()});const y=c=>{m.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(l=>{l.isConfirmed&&F.delete(route("admin.chat.delete",{user:h.user.id,chatId:c})).then(()=>{m.fire("Deleted!","The message has been deleted.","success").then(()=>{window.location.reload()})}).catch(t=>{console.error("Error deleting message:",t),m.fire("Error!","There was a problem deleting the message.","error")})})};return(c,l)=>(r(),C($,null,{default:p(()=>[b(o(k),{title:`Chat with ${a.user.name}`},null,8,["title"]),e("div",A,[e("div",L,[e("div",Y,[e("div",q,[e("div",z,[e("h2",H,"Chat with "+u(a.user.name),1),b(o(T),{href:c.route("admin.chat.index"),class:"px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"},{default:p(()=>[B(" Back to Chats ")]),_:1},8,["href"])]),e("div",{ref_key:"chatContainer",ref:n,class:"space-y-4 mb-4 h-[calc(100vh-400px)] overflow-y-auto p-4 bg-gray-50 rounded-lg"},[a.chats.length===0?(r(),d("div",O," No messages yet ")):x("",!0),(r(!0),d(M,null,S(a.chats,t=>(r(),d("div",{key:t.id,class:D(["p-4 rounded-lg max-w-[50%]",t.is_admin?"ml-auto bg-blue-100":"bg-white border border-gray-200"])},[e("p",U,u(t.message),1),e("span",Z,u(new Date(t.created_at).toLocaleString()),1),t.is_admin?(r(),d("button",{key:0,onClick:J=>y(t.id),class:"text-red-500 text-sm mt-2"}," Delete ",8,G)):x("",!0)],2))),128))],512),e("form",{onSubmit:N(w,["prevent"]),class:"flex gap-2"},[V(e("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>o(s).message=t),type:"text",placeholder:"Type your message...",class:"flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"},null,512),[[j,o(s).message]]),e("button",{type:"submit",class:"px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50",disabled:o(s).processing||!o(s).message.trim()||i.value}," Send ",8,I)],32)])])])])]),_:1}))}};export{ee as default};