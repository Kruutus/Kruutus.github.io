(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{256:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));const n="https://us-central1-getmoving-5a566.cloudfunctions.net/app",r={name:"Vikár András",email:"vikarandras@gmail.com",phone:"(+36) 30 271 7990",address:"1056 Budapest, Váci utca 78-80"}},387:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var n=a(0),r=a.n(n),l=a(13),i=a(234),c=a(246),o=a(384),s=a(241),u=a(328),m=(a(42),a(233)),p=a(249),d=a(355),f=a(262),b=a.n(f),g=a(38),y=a(256);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){h(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const j={email:"",firstName:"",lastName:"",isLoading:!1},E=(e,t)=>v(v({},e),t);var w=a(248);var N=()=>Object(w.a)({form:{maxWidth:600},cancelButton:{color:"black",borderColor:"black"}});const P=Object(m.a)(N);var k=()=>{const{cancelButton:e,form:t}=P(),{t:a}=Object(p.a)(),{user:r}=Object(n.useContext)(g.a),[{data:l,loading:i},c]=Object(d.a)(`${y.a}/api/get-user-by-id/${null==r?void 0:r.uid}`),[o,s]=Object(n.useReducer)(E,j),u=()=>{s({email:l.email,firstName:l.firstName,lastName:l.lastName})};Object(n.useEffect)(()=>{r&&c()},[r]),Object(n.useEffect)(()=>{l&&u()},[l]);return{data:l,cancelButton:e,form:t,onSubmit:async e=>{if(e.preventDefault(),r)try{s({isLoading:!0}),await b.a.put(`${y.a}/api/update-user/${r.uid}`,o),c()}catch(e){alert(e.message)}finally{s({isLoading:!1})}},loading:i||o.isLoading,state:o,dispatch:s,setInitialState:u,t:a}};var C=()=>{const{data:e,onSubmit:t,form:a,t:n,state:l,dispatch:m,cancelButton:p,setInitialState:d,loading:f}=k();return e?r.a.createElement(c.a,{pt:14,ml:10},r.a.createElement(s.a,{style:{fontSize:20}},n("profile.personalData")),r.a.createElement("form",{className:a,onSubmit:t},r.a.createElement(c.a,{my:4,display:"flex",justifyContent:"space-between"},r.a.createElement(o.a,{style:{marginRight:16},fullWidth:!0,required:!0,InputLabelProps:{required:!1},value:l.lastName,onChange:e=>m({lastName:e.target.value}),name:"lastName",label:n("auth.lastName")}),r.a.createElement(o.a,{style:{marginLeft:16},fullWidth:!0,required:!0,InputLabelProps:{required:!1},value:l.firstName,onChange:e=>m({firstName:e.target.value}),name:"firstName",label:n("auth.firstName")})),r.a.createElement(o.a,{fullWidth:!0,required:!0,InputLabelProps:{required:!1},value:l.email,onChange:e=>m({email:e.target.value}),name:"email",type:"email",label:n("common.email")}),r.a.createElement(c.a,{mt:4,display:"flex",justifyContent:"space-between"},r.a.createElement(i.a,{className:p,onClick:d,type:"button",color:"primary",variant:"outlined"},n("common.cancel")),r.a.createElement(i.a,{endIcon:f&&r.a.createElement(u.a,{size:16}),disabled:f,type:"submit",color:"primary",variant:"contained"},n("common.save"))))):r.a.createElement(u.a,null)};var L=({match:e})=>r.a.createElement(l.d,null,r.a.createElement(l.b,{path:`${e.path}/personal-data`,component:C}),r.a.createElement(l.a,{to:"/"}))}}]);