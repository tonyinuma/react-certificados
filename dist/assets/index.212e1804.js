import{j as e,T as f,a as l,b as h,c as i,B as s,d as m,e as g,f as p,r as b,C as y,g as R,h as v,P as x,i as T,k as C,R as B,l as L}from"./vendor.b9b54c30.js";const O=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&u(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}};O();function c(t,o,a){return{name:t,course:{name:o},certificate_date:a}}const _=[c("Frozen yoghurt","Religion","2021-11-26"),c("Ice cream sandwich","Religion","2021-11-26"),c("Eclair","Religion","2021-11-26"),c("Cupcake","Religion","2021-11-26"),c("Gingerbread","Religion","2021-11-26")],j=({})=>e(f,{children:_.map((t,o)=>{var a;return l(h,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(i,{component:"th",scope:"row",children:o+1}),e(i,{children:t.name}),e(i,{children:(a=t.course)==null?void 0:a.name}),e(i,{align:"center",children:t.certificate_date}),l(i,{align:"center",children:[e(s,{variant:"outlined",color:"info",sx:{marginRight:2},children:e(m,{color:"info"})}),e(s,{variant:"outlined",color:"secondary",sx:{marginRight:2},children:e(g,{color:"secondary"})}),e(s,{variant:"outlined",color:"error",children:e(p,{sx:{color:b[500]}})})]})]},t.name)})});function A(){return l(y,{children:[e(s,{variant:"contained",color:"success",children:e(R,{})}),e(v,{component:x,children:l(T,{sx:{minWidth:650},"aria-label":"simple table",children:[e(C,{children:l(h,{children:[e(i,{children:"#"}),e(i,{children:"Name"}),e(i,{children:"Course"}),e(i,{align:"center",children:"Date"}),e(i,{align:"center",children:"Action"})]})}),e(j,{})]})})]})}B.render(e(L.StrictMode,{children:e(A,{})}),document.getElementById("root"));
