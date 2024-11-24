import{r as D,o as d,c as n,a as h,u as S,w as x,F as r,Z as A,b as t,e as c,v as g,f as V,j as N,t as s,n as b,h as v,g as f,O as w}from"./app-b78d6429.js";import{_ as R}from"./AdminAuthenticatedLayout-aea9e875.js";import"./ApplicationLogo-0aef615f.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./ResponsiveNavLink-c2d65a8c.js";const U=t("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"},"Inventory Report",-1),q={class:"py-12"},j={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},B={class:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-6"},F={class:"mb-6 grid grid-cols-1 md:grid-cols-3 gap-4"},M=t("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},"Start Date",-1),O=t("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},"End Date",-1),T=t("label",{class:"block text-sm font-medium text-gray-700 dark:text-gray-300"},"Action Type",-1),E=t("option",{value:""},"All Actions",-1),I=t("option",{value:"add"},"Add",-1),L=t("option",{value:"update"},"Update",-1),z=t("option",{value:"delete"},"Delete",-1),P=[E,I,L,z],Q={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},Z={class:"w-full text-sm text-left text-gray-500 dark:text-gray-400"},$=t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"},"Date"),t("th",{scope:"col",class:"px-6 py-3"},"Medicine"),t("th",{scope:"col",class:"px-6 py-3"},"Action"),t("th",{scope:"col",class:"px-6 py-3"},"Quantity Change"),t("th",{scope:"col",class:"px-6 py-3"},"Price Change"),t("th",{scope:"col",class:"px-6 py-3"},"Status Change"),t("th",{scope:"col",class:"px-6 py-3"},"Admin"),t("th",{scope:"col",class:"px-6 py-3"},"Notes")])],-1),G={class:"px-6 py-4"},H={class:"px-6 py-4"},J={class:"px-6 py-4"},K={class:"px-6 py-4"},W={class:"px-6 py-4"},X={class:"px-6 py-4"},Y={class:"px-6 py-4"},tt={class:"px-6 py-4"},nt={__name:"Report",props:{logs:Array,filters:Object},setup(p){var u,_,y;const l=p,a=D({start_date:((u=l.filters)==null?void 0:u.start_date)||"",end_date:((_=l.filters)==null?void 0:_.end_date)||"",action_type:((y=l.filters)==null?void 0:y.action_type)||""}),k=m=>new Date(m).toLocaleString(),i=()=>{w.get(route("admin.inventory.report"),a.value,{preserveState:!0,preserveScroll:!0})},C=()=>{w.post(route("admin.inventory.report.download"),a.value,{preserveState:!0})};return(m,o)=>(d(),n(r,null,[h(S(A),{title:"Inventory Report"}),h(R,null,{header:x(()=>[t("div",{class:"flex justify-between items-center"},[U,t("button",{onClick:C,class:"px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"}," Download Report ")])]),default:x(()=>[t("div",q,[t("div",j,[t("div",B,[t("div",F,[t("div",null,[M,c(t("input",{type:"date","onUpdate:modelValue":o[0]||(o[0]=e=>a.value.start_date=e),onChange:i,class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,544),[[g,a.value.start_date]])]),t("div",null,[O,c(t("input",{type:"date","onUpdate:modelValue":o[1]||(o[1]=e=>a.value.end_date=e),onChange:i,class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},null,544),[[g,a.value.end_date]])]),t("div",null,[T,c(t("select",{"onUpdate:modelValue":o[2]||(o[2]=e=>a.value.action_type=e),onChange:i,class:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"},P,544),[[V,a.value.action_type]])])]),t("div",Q,[t("table",Z,[$,t("tbody",null,[(d(!0),n(r,null,N(p.logs,e=>(d(),n("tr",{key:e.id,class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700"},[t("td",G,s(k(e.created_at)),1),t("td",H,s(e.medicine?e.medicine.name:"Unknown"),1),t("td",J,[t("span",{class:b({"px-2 py-1 rounded text-white":!0,"bg-green-500":e.action_type==="add","bg-blue-500":e.action_type==="update","bg-red-500":e.action_type==="delete"})},s(e.action_type),3)]),t("td",K,[t("span",{class:b({"text-green-500":e.quantity_change>0,"text-red-500":e.quantity_change<0})},s(e.quantity_change>0?"+":"")+s(e.quantity_change),3)]),t("td",W,[e.old_price&&e.new_price?(d(),n(r,{key:0},[v(" ₱"+s(e.old_price)+" → ₱"+s(e.new_price),1)],64)):f("",!0)]),t("td",X,[e.old_status||e.new_status?(d(),n(r,{key:0},[v(s(e.old_status||"-")+" → "+s(e.new_status||"-"),1)],64)):f("",!0)]),t("td",Y,s(e.admin.name),1),t("td",tt,s(e.notes),1)]))),128))])])])])])])]),_:1})],64))}};export{nt as default};
