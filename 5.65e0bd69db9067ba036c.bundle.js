(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{245:function(e,t,a){"use strict";a.d(t,"b",(function(){return g})),a.d(t,"a",(function(){return O}));var n=a(235),r=a(1),o=a.n(r),i=a(221),l=a(238);var c=e=>Object(l.a)({underline:{position:"relative",width:"fit-content","&::after":{position:"absolute",content:'""',bottom:e=>e.bottom||-4,left:({centered:e,width:t})=>e?`calc(50% - ${(t||100)/2}px)`:0,right:"0",borderRadius:"3px",height:e=>e.height||6,width:e=>e.width||100,background:t=>t.color||e.palette.primary.main}}});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const d=Object(i.a)(c);var g=e=>{let{width:t,height:a,color:r,bottom:i,children:l,className:c,centered:g}=e,u=m(e,["width","height","color","bottom","children","className","centered"]);const{underline:p}=d({width:t,height:a,bottom:i,color:r,centered:g});return o.a.createElement(n.a,s({className:`${p} ${c}`},u),l)},u=a(224),p=a(255),b=a.n(p),M=a(41),E=a(45);var h=e=>Object(l.a)({root:{"& .slick-prev:before":{color:E.a.active,content:"url(data:image/svg+xml;base64,ICA8c3ZnIHdpZHRoPSIxNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE1IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTE1IDIuODNMMTIuMTM3NiAwTDAgMTJMMTIuMTM3NiAyNEwxNSAyMS4xN0w1LjcyNDg4IDEyTDE1IDIuODNaIiBmaWxsPSIjRkZDODAwIiAvPgogIDwvc3ZnPg==)"},"& .slick-next:before":{color:E.a.active,content:"url(data:image/svg+xml;base64,ICA8c3ZnIHdpZHRoPSIxNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDE1IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPHBhdGggZD0iTTIuNDc0MDZlLTA3IDIxLjE3TDIuODYyNDQgMjRMMTUgMTJMMi44NjI0NCAtMS4wNjExZS0wNkwxLjg1MDc0ZS0wNiAyLjgzTDkuMjc1MTIgMTJMMi40NzQwNmUtMDcgMjEuMTdaIiBmaWxsPSIjRkZDODAwIiAvPgogIDwvc3ZnPg==)"}},dots:{margin:e.spacing(0,1),height:7,width:100,backgroundColor:E.a.black1F,[e.breakpoints.down("sm")]:{width:40}},dotsContainer:{marginTop:"2em",marginRight:"2em",textAlign:"right",display:"flex",justifyContent:"flex-end",cursor:"pointer","& li":{listStyleType:"none"},"& .slick-active > div":{backgroundColor:E.a.active}}});function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){y(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const f=Object(i.a)(h);var O=({children:e,slidesToShow:t=4,slidesToScroll:a=4})=>{const r=Object(M.a)(),i=Object(u.a)(r.breakpoints.down("xs")),{root:l,dotsContainer:c,dots:s}=f({isMobile:i}),m=({className:e,style:t,onClick:a})=>o.a.createElement(n.a,{className:e,style:N(N({},t),{},{color:E.a.active}),onClick:a}),d=({className:e,style:t,onClick:a})=>o.a.createElement(n.a,{className:e,style:N(N({},t),{},{color:E.a.active}),onClick:a}),g={dots:!0,infinite:!0,speed:500,slidesToShow:t,slidesToScroll:a,prevArrow:o.a.createElement(m,null),nextArrow:o.a.createElement(d,null),appendDots:e=>o.a.createElement(n.a,{className:c},e),customPaging:()=>o.a.createElement(n.a,{className:s}),responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2,dots:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]};return o.a.createElement(n.a,{className:l},o.a.createElement(b.a,j({dotsClass:c},g),e))}},246:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));const n="https://us-central1-getmoving-5a566.cloudfunctions.net/app",r={name:"Vikár András",email:"vikarandras@gmail.com",phone:"(+36) 30 271 7990",address:"1056 Budapest, Váci utca 78-80"}},252:function(e,t,a){"use strict";var n=a(1),r=a.n(n);t.a=()=>r.a.createElement("svg",{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M6.0054e-07 10.5852L1.43122 12.0002L7.5 6.00018L1.43122 0.000183529L1.40221e-06 1.41518L4.63756 6.00018L6.0054e-07 10.5852Z",fill:"#0E0F11"}),r.a.createElement("path",{d:"M5.5 10.5852L6.93122 12.0002L13 6.00018L6.93122 0.000183529L5.5 1.41518L10.1376 6.00018L5.5 10.5852Z",fill:"#0E0F11"}))},254:function(e,t,a){"use strict";t.a=a.p+"5c07f082d3506bd703ec6c24b8dac831.png"},369:function(e,t,a){"use strict";a.r(t);var n=a(38),r=a(1),o=a.n(r),i=a(241),l=a(235),c=a(230),s=a(229),m=a(225),d=a(221),g=a(10),u=a(239),p=a(284),b=a.n(p),M=a(252),E=a(238),h=a(254);var j=e=>Object(E.a)({title:{color:e.palette.secondary.main,textAlign:"center",fontWeight:"bold",fontSize:96,textTransform:"uppercase",zIndex:400,[e.breakpoints.down("sm")]:{fontSize:60}},description:{color:e.palette.secondary.main,maxWidth:610,fontSize:20,margin:"auto",marginBottom:30,textAlign:"center",zIndex:400,padding:e.spacing(2)},hr:{backgroundColor:e.palette.secondary.main,width:100,height:6,margin:"auto",borderRadius:3,marginBottom:e.spacing(5),zIndex:400},imageContainer:{backgroundImage:`url(${h.a})`,backgroundPosition:"center",backgroundSize:"cover",height:"100vh",width:"100%"},dividerContainer:{height:"100%",overflow:"hidden"},zIndex400:{zIndex:400,textTransform:"uppercase"},leftMargin:{marginLeft:".7em"},welcomeTextContainer:{top:"33vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"98vw"},darkerOverlay:{background:"black",opacity:"0.4",height:"400%",transform:"rotate(30deg)",marginTop:"-71.5%",marginLeft:"-20.5%"},ligtherOverlay:{background:"black",opacity:"0.2",height:"400%",transform:"rotate(30deg)",marginTop:"-21.5%",marginLeft:"-20.5%"}});const C=Object(d.a)(j);var N=()=>{const{darkerOverlay:e,ligtherOverlay:t,dividerContainer:a,zIndex400:d,title:p,description:E,leftMargin:h,hr:j,imageContainer:N,welcomeTextContainer:y}=C(),f=Object(g.g)(),{t:O}=Object(u.a)(),{setVariant:I}=Object(r.useContext)(n.a);return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{position:"absolute"},o.a.createElement(l.a,{position:"relative",className:y},o.a.createElement(m.a,{className:p},O("landing.getmoving")),o.a.createElement(s.a,{className:j}),o.a.createElement(m.a,{className:E},O("landing.description")),o.a.createElement(c.a,{onClick:()=>f.push("auth/register"),color:"primary",variant:"contained",className:d},O("landing.register"),o.a.createElement("span",{className:h},o.a.createElement(M.a,null))))),o.a.createElement(b.a,{partialVisibility:!0,onChange:e=>{I(e?"transparent":"black")}},o.a.createElement(l.a,{className:N},o.a.createElement(i.a,{container:!0,className:a},o.a.createElement(i.a,{item:!0,xs:8,md:8,lg:8,className:e}),o.a.createElement(i.a,{item:!0,xs:5,md:5,lg:5,className:t}),o.a.createElement(i.a,{item:!0,xs:1,md:1,lg:1})))))},y=a(224),f=a(41),O=a(245),I=(a(37),a(359)),v=a(358),k=a(374),w=a(370),x=a(256),D=a.n(x),T=a(246);function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){z(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function z(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const A={name:"",email:"",message:"",accepted:!1},P=(e,t)=>S(S({},e),t);var F=a.p+"444e40fbcdf19cf67d9a2893d581dbdc.png",Q=a(45);var U=e=>Object(E.a)({imageContainer:{backgroundImage:`url(${F})`,backgroundPosition:"center",backgroundSize:"cover",minHeight:490,width:"100%",paddingLeft:100,paddingRight:100,boxSizing:"border-box",display:"flex",flexDirection:"column",justifyContent:"center",[e.breakpoints.down("sm")]:{padding:e.spacing(4,2)}},title:{fontSize:50,[e.breakpoints.down("sm")]:{fontSize:30},fontWeight:900,color:Q.a.secondary},form:{color:Q.a.secondary,display:"unset","& > div":{marginTop:e.spacing(2),marginBottom:e.spacing(2)}},inputProps:{color:Q.a.secondary,"&:before":{borderBottomColor:`${Q.a.secondary} !important`}},inputLabelProps:{color:Q.a.secondary},checkbox:{color:Q.a.secondary},table:{marginTop:50,"& td":{color:Q.a.secondary,border:"none",padding:e.spacing(1),"&:nth-child(2)":{color:Q.a.secondary,opacity:.7}}}});const Z=Object(d.a)(U);var B=()=>{const{t:e}=Object(u.a)(),{form:t,inputProps:a,inputLabelProps:n,checkbox:i}=Z(),[s,d]=Object(r.useReducer)(P,A),[g,p]=Object(r.useState)(!1),[b,M]=Object(r.useState)(!1);return b?o.a.createElement(m.a,{color:"secondary"},e("landing.contact.emailSent")):o.a.createElement("form",{className:t,onSubmit:async e=>{e.preventDefault();try{p(!0),await D.a.post(`${T.a}/api/send-contact-email`,s),M(!0),d(A)}catch(e){alert(e.message)}finally{p(!1)}}},o.a.createElement(w.a,{required:!0,fullWidth:!0,InputLabelProps:{className:n,required:!1},InputProps:{className:a},value:s.name,onChange:e=>d({name:e.target.value}),name:"name",label:e("landing.contact.name")}),o.a.createElement(w.a,{required:!0,fullWidth:!0,InputLabelProps:{className:n,required:!1},InputProps:{className:a},value:s.email,onChange:e=>d({email:e.target.value}),name:"email",type:"email",label:e("landing.contact.email")}),o.a.createElement(w.a,{required:!0,fullWidth:!0,InputLabelProps:{className:n,required:!1},InputProps:{className:a},value:s.message,onChange:e=>d({message:e.target.value}),name:"message",label:e("landing.contact.message")}),o.a.createElement(v.a,{label:e("landing.contact.checkbox"),control:o.a.createElement(k.a,{required:!0,classes:{root:i},color:"secondary",checked:s.accepted,onChange:e=>d({accepted:e.target.checked})})}),o.a.createElement(l.a,{textAlign:"right",mt:5},o.a.createElement(c.a,{disabled:g,endIcon:g&&o.a.createElement(I.a,{size:16}),type:"submit",variant:"contained",color:"primary"},e("landing.contact.send"))))},H=a(360),Y=a(361),V=a(362),R=a(363);const W=Object(d.a)(U);var G=()=>{const{t:e}=Object(u.a)(),{table:t}=W();return o.a.createElement(H.a,{className:t},o.a.createElement(Y.a,null,o.a.createElement(V.a,null,o.a.createElement(R.a,null,e("common.email")),o.a.createElement(R.a,null,T.b.email)),o.a.createElement(V.a,null,o.a.createElement(R.a,null,e("landing.contact.phone")),o.a.createElement(R.a,null,T.b.phone)),o.a.createElement(V.a,null,o.a.createElement(R.a,null,e("landing.contact.address")),o.a.createElement(R.a,null,T.b.address))))};const q=Object(d.a)(U);var $=()=>{const{imageContainer:e,title:t}=q(),{t:a}=Object(u.a)(),n=Object(f.a)(),r=Object(y.a)(n.breakpoints.down("sm"));return o.a.createElement(l.a,{className:e},o.a.createElement(i.a,{container:!0,spacing:r?0:10},o.a.createElement(i.a,{item:!0,xs:12,sm:6},o.a.createElement(O.b,{color:"white",bottom:-16},o.a.createElement(m.a,{className:t,variant:"h2"},a("landing.contact.title"))),o.a.createElement(G,null)),o.a.createElement(i.a,{item:!0,xs:12,sm:6},o.a.createElement(B,null))))};var J=[{title:"landing.offers.videos.title",description:"landing.offers.videos.description",Logo:()=>o.a.createElement("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M29.1667 9.05322H5.8217C5.17736 9.05322 4.65503 9.57556 4.65503 10.2199V24.7916C4.65503 25.4359 5.17736 25.9582 5.8217 25.9582H29.1667C29.811 25.9582 30.3334 25.4359 30.3334 24.7916V10.2199C30.3334 9.57556 29.811 9.05322 29.1667 9.05322Z",stroke:"#FFC800",strokeMiterlimit:"10"}),o.a.createElement("path",{d:"M17.4999 22.5167C20.2706 22.5167 22.5166 20.2707 22.5166 17.5001C22.5166 14.7294 20.2706 12.4834 17.4999 12.4834C14.7293 12.4834 12.4833 14.7294 12.4833 17.5001C12.4833 20.2707 14.7293 22.5167 17.4999 22.5167Z",stroke:"#FFC800",strokeMiterlimit:"10"}),o.a.createElement("path",{d:"M16.8234 15.5398L19.2034 17.7215L16.8234 19.9031V15.5398Z",stroke:"#FFC800",strokeLinecap:"round",strokeLinejoin:"round"})),path:"/about/videos"},{title:"landing.offers.recipes.title",description:"landing.offers.recipes.description",Logo:()=>o.a.createElement("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M29.9717 21.7118V21.8284C29.9717 25.8534 27.1017 29.1085 23.5783 29.1085C22.7525 29.109 21.9364 28.9298 21.1867 28.5835L20.79 28.3851C19.9499 28.8594 19.0014 29.1085 18.0367 29.1085C14.5367 29.1085 11.6433 25.8534 11.6433 21.8284C11.6179 20.3231 12.0227 18.8417 12.81 17.5584C13.5397 16.3908 14.6168 15.481 15.89 14.9568C16.1383 14.8508 16.3961 14.7687 16.66 14.7118C17.0992 14.6044 17.5496 14.5495 18.0017 14.5484C18.6551 14.5519 19.3027 14.6704 19.915 14.8984C20.12 14.9576 20.3162 15.0439 20.4983 15.1551C20.5913 15.1812 20.6784 15.2247 20.755 15.2834C20.8948 15.2008 21.0435 15.1342 21.1983 15.0851C21.9252 14.7313 22.7232 14.5477 23.5317 14.5484C23.7143 14.5379 23.8974 14.5379 24.08 14.5484C25.3884 14.6733 26.6189 15.227 27.58 16.1234C27.2237 16.4413 26.9426 16.8344 26.757 17.2743C26.5713 17.7141 26.4858 18.1898 26.5067 18.6668C26.4586 19.4535 26.7236 20.2274 27.2437 20.8196C27.7638 21.4119 28.497 21.7745 29.2833 21.8284C29.518 21.8316 29.7512 21.792 29.9717 21.7118Z",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M18.2933 10.675C19.03 10.6841 19.734 10.9808 20.2549 11.5018C20.7759 12.0227 21.0726 12.7267 21.0817 13.4634C21.0825 14.0477 20.8942 14.6166 20.545 15.085",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M21.0817 12.67C21.337 12.3505 21.6623 12.0939 22.0324 11.92C22.4026 11.746 22.8077 11.6594 23.2167 11.6667",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M29.9483 8.55182C28.5978 7.94779 27.0697 7.87284 25.6666 8.34182C24.3899 9.07798 23.4332 10.2634 22.9833 11.6668C24.3413 12.2735 25.8776 12.3484 27.2883 11.8768C28.5555 11.1354 29.5031 9.95087 29.9483 8.55182Z",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M14.7001 21.1516C14.676 20.3623 14.8917 19.5842 15.3186 18.9198C15.7456 18.2555 16.3637 17.736 17.0917 17.4299",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M9.52002 8.92505H13.7667",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M6.83667 8.92505H7.61834",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M6.83667 11.7249H7.61834",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M6.83667 14.5366H7.61834",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M9.52002 11.8066H14.8984",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M9.52002 14.5366H13.7667",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M16.695 7.05827V14.7116C16.4311 14.7685 16.1733 14.8506 15.925 14.9566C14.6475 15.4788 13.5661 16.3888 12.8333 17.5583H6.19499C5.88557 17.5583 5.58882 17.4353 5.37003 17.2166C5.15124 16.9978 5.02832 16.701 5.02832 16.3916V7.05827C5.02832 6.74885 5.15124 6.4521 5.37003 6.23331C5.58882 6.01452 5.88557 5.8916 6.19499 5.8916H15.5283C15.8377 5.8916 16.1345 6.01452 16.3533 6.23331C16.5721 6.4521 16.695 6.74885 16.695 7.05827V7.05827Z",stroke:"#FFC800",strokeLinejoin:"bevel"})),path:"/about/recipes"},{title:"landing.offers.generator.title",description:"landing.offers.generator.description",Logo:()=>o.a.createElement("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M22.8316 22.1667C22.8428 23.0575 22.5301 23.9221 21.9516 24.5996C21.373 25.2771 20.5681 25.7213 19.6865 25.8497C18.8049 25.9781 17.9067 25.7819 17.159 25.2975C16.4113 24.8132 15.8649 24.0738 15.6216 23.2167H11.3166C11.0656 24.0668 10.5167 24.798 9.77044 25.2763C9.02422 25.7547 8.13064 25.9481 7.25339 25.8213C6.37614 25.6945 5.57395 25.2558 4.99377 24.5857C4.41358 23.9156 4.09424 23.0589 4.09424 22.1726C4.09424 21.2862 4.41358 20.4295 4.99377 19.7594C5.57395 19.0893 6.37614 18.6507 7.25339 18.5238C8.13064 18.397 9.02422 18.5905 9.77044 19.0688C10.5167 19.5472 11.0656 20.2783 11.3166 21.1284H15.6216C15.8647 20.2725 16.4101 19.5338 17.1566 19.0495C17.9031 18.5652 18.7999 18.3682 19.6806 18.4951C20.5613 18.6219 21.3661 19.064 21.9456 19.7392C22.5251 20.4144 22.8399 21.277 22.8316 22.1667Z",stroke:"#FFC800",strokeMiterlimit:"10"}),o.a.createElement("path",{d:"M30.8933 12.8335C30.9016 13.7232 30.5868 14.5858 30.0073 15.261C29.4278 15.9363 28.623 16.3783 27.7423 16.5052C26.8616 16.632 25.9648 16.435 25.2183 15.9507C24.4718 15.4664 23.9264 14.7278 23.6833 13.8718H19.39C19.1403 14.7196 18.5934 15.449 17.8496 15.9263C17.1058 16.4037 16.2149 16.597 15.3402 16.4709C14.4654 16.3447 13.6654 15.9076 13.0868 15.2395C12.5082 14.5715 12.1897 13.7173 12.1897 12.8335C12.1897 11.9497 12.5082 11.0955 13.0868 10.4275C13.6654 9.75941 14.4654 9.32225 15.3402 9.19611C16.2149 9.06996 17.1058 9.26328 17.8496 9.74062C18.5934 10.218 19.1403 10.9474 19.39 11.7951H23.6833C23.9264 10.9392 24.4718 10.2005 25.2183 9.71626C25.9648 9.23198 26.8616 9.03497 27.7423 9.1618C28.623 9.28864 29.4278 9.7307 30.0073 10.4059C30.5868 11.0812 30.9016 11.9437 30.8933 12.8335V12.8335Z",stroke:"#FFC800",strokeMiterlimit:"10"})),path:"/about/workout-generator"},{title:"landing.offers.blog.title",description:"landing.offers.blog.description",Logo:()=>o.a.createElement("svg",{width:"35",height:"35",viewBox:"0 0 35 35",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M25.34 28H9.65997C9.53311 28 9.41145 27.9496 9.32174 27.8599C9.23204 27.7702 9.18164 27.6485 9.18164 27.5217V10.1733L12.3666 7H25.34C25.4028 7 25.465 7.01237 25.523 7.03641C25.5811 7.06045 25.6338 7.09568 25.6782 7.1401C25.7226 7.18452 25.7579 7.23725 25.7819 7.29528C25.8059 7.35332 25.8183 7.41552 25.8183 7.47833V27.5333C25.8153 27.6582 25.7635 27.7769 25.6741 27.864C25.5848 27.9512 25.4648 28 25.34 28V28Z",stroke:"#FFC800",strokeMiterlimit:"10"}),o.a.createElement("path",{d:"M11.4683 15.4001H17.6166",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M11.4683 17.8616H22.0733",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M11.4683 20.1833H17.6166",stroke:"#FFC800",strokeMiterlimit:"10",strokeLinecap:"round"}),o.a.createElement("path",{d:"M12.3666 7V9.695C12.3666 9.82186 12.3162 9.94353 12.2265 10.0332C12.1368 10.1229 12.0152 10.1733 11.8883 10.1733H9.18164L12.3666 7Z",stroke:"#FFC800",strokeLinejoin:"bevel"})),path:"/about/blog"}],K=a(364),_=a(367),X=a(366),ee=a(365),te=a(377),ae=a(17);var ne=e=>Object(E.a)({avatar:{width:50,height:50,backgroundColor:"#333"},buttonStyle:{fontSize:"18px",fontWeight:500},container:{backgroundColor:"unset",boxShadow:"unset"},content:{paddingTop:"unset",minHeight:"100px"},descriptionStyle:{fontSize:".9em",lineHeight:"20px"},falseButtonStyle:{color:"black",textDecoration:"unset",paddingLeft:e.spacing(1),fontSize:"1em"},noBottomPadding:{paddingBottom:"unset"},titleStyle:{fontSize:"20px"}});const re=Object(d.a)(ne);var oe=({title:e,description:t,Logo:a,path:n})=>{const{t:r}=Object(u.a)(),{avatar:i,buttonStyle:l,container:c,content:s,descriptionStyle:d,falseButtonStyle:g,noBottomPadding:p,titleStyle:b}=re();return o.a.createElement(K.a,{className:c},o.a.createElement(ee.a,{avatar:o.a.createElement(te.a,{"aria-label":"recipe",className:i},o.a.createElement(a,null)),title:o.a.createElement(m.a,{variant:"h6",className:b},r(e))}),o.a.createElement(X.a,{className:`${p} ${s}`},o.a.createElement(m.a,{className:d},r(t))),o.a.createElement(_.a,null,o.a.createElement(ae.b,{to:n,className:g},o.a.createElement(m.a,{className:l},"Tovább ",o.a.createElement(M.a,null)))))};var ie=e=>Object(E.a)({boxContainer:{backgroundColor:Q.a.primary,minHeight:360,padding:e.spacing(3)},gridContainer:{padding:e.spacing(2,7),[e.breakpoints.down("sm")]:{padding:e.spacing(0)}},underlined:{marginBottom:e.spacing(3),textTransform:"uppercase"}});const le=Object(d.a)(ie);var ce=()=>{const{boxContainer:e,gridContainer:t,underlined:a}=le(),{t:n}=Object(u.a)();return o.a.createElement(l.a,{className:e},o.a.createElement(O.b,{color:"black",margin:"auto",centered:!0},o.a.createElement(m.a,{className:a,variant:"subtitle1"},n("landing.offers.title"))),o.a.createElement(i.a,{container:!0,className:t},J.map(e=>o.a.createElement(i.a,{item:!0,xs:12,sm:6,lg:3,key:e.path},o.a.createElement(oe,e)))))},se=a(272),me=a.n(se);var de="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA5OCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm11bHRpcGx5Ij4KPHBhdGggZD0iTTQyLjQ4OCA0OS40NTQ1QzQyLjQ4OCA1NC43MTI2IDQwLjQ5NTMgNTkuMTE4MSAzNi41MDk4IDYyLjY3MDhDMzIuNTI0MyA2Ni4yMjM2IDI3LjU0MjUgNjggMjEuNTY0MyA2OEMxNS43Mjg0IDY4IDEwLjY3NTQgNjYuMDEwNSA2LjQwNTIzIDYyLjAzMTNDMi4xMzUwOCA1Ny45MTAxIDAgNTIuMDEyNSAwIDQ0LjMzODZDMCAzOS43OTEgMC45MjUyIDM1LjI0MzUgMi43NzU2IDMwLjY5NTlDNC42MjYgMjYuMTQ4NCA2Ljk3NDU4IDIxLjg4NTEgOS44MjEzNSAxNy45MDZDMTIuODEwNSAxMy45MjY5IDE2LjAxMzEgMTAuMzc0MSAxOS40MjkyIDcuMjQ3NjVDMjIuODQ1MyA0LjEyMTIxIDI2LjExOTEgMS43MDUzMyAyOS4yNTA1IDBMMzkuOTI1OSAxMC40NDUxQzM4LjIxNzkgMTEuMTU1NyAzNi40Mzg2IDEyLjIyMTUgMzQuNTg4MiAxMy42NDI2QzMyLjczNzggMTUuMDYzNyAzMS4wMjk4IDE2LjY5OCAyOS40NjQxIDE4LjU0NTVDMjcuODk4MyAyMC4yNTA4IDI2LjYxNzMgMjIuMjQwMyAyNS42MjA5IDI0LjUxNDFDMjQuNjI0NSAyNi42NDU4IDI0LjEyNjQgMjguNzc3NCAyNC4xMjY0IDMwLjkwOTFDMjkuMzkyOSAzMS42MTk2IDMzLjczNDIgMzMuNjA5MiAzNy4xNTAzIDM2Ljg3NzdDNDAuNzA4OCA0MC4wMDQyIDQyLjQ4OCA0NC4xOTY0IDQyLjQ4OCA0OS40NTQ1Wk05OCA0OS40NTQ1Qzk4IDU0LjcxMjYgOTYuMDA3MyA1OS4xMTgxIDkyLjAyMTggNjIuNjcwOEM4OC4wMzYzIDY2LjIyMzYgODMuMDU0NSA2OCA3Ny4wNzYyIDY4QzcxLjI0MDQgNjggNjYuMTg3NCA2Ni4wMTA1IDYxLjkxNzIgNjIuMDMxM0M1Ny42NDcxIDU3LjkxMDEgNTUuNTEyIDUyLjAxMjUgNTUuNTEyIDQ0LjMzODZDNTUuNTEyIDM5Ljc5MSA1Ni40MzcyIDM1LjI0MzUgNTguMjg3NiAzMC42OTU5QzYwLjEzOCAyNi4xNDg0IDYyLjQ4NjYgMjEuODg1MSA2NS4zMzMzIDE3LjkwNkM2OC4zMjI0IDEzLjkyNjkgNzEuNTI1IDEwLjM3NDEgNzQuOTQxMiA3LjI0NzY1Qzc4LjM1NzMgNC4xMjEyMSA4MS42MzExIDEuNzA1MzMgODQuNzYyNSAwTDk1LjQzNzkgMTAuNDQ1MUM5My43Mjk4IDExLjE1NTcgOTEuOTUwNiAxMi4yMjE1IDkwLjEwMDIgMTMuNjQyNkM4OC4yNDk4IDE1LjA2MzcgODYuNTQxOCAxNi42OTggODQuOTc2IDE4LjU0NTVDODMuNDEwMyAyMC4yNTA4IDgyLjEyOTMgMjIuMjQwMyA4MS4xMzI5IDI0LjUxNDFDODAuMTM2NSAyNi42NDU4IDc5LjYzODMgMjguNzc3NCA3OS42MzgzIDMwLjkwOTFDODQuOTA0OSAzMS42MTk2IDg5LjI0NjIgMzMuNjA5MiA5Mi42NjIzIDM2Ljg3NzdDOTYuMjIwOCA0MC4wMDQyIDk4IDQ0LjE5NjQgOTggNDkuNDU0NVoiIGZpbGw9IiNGRkM4MDAiLz4KPC9nPgo8L3N2Zz4K";var ge=e=>Object(E.a)({root:{backgroundColor:Q.a.greyF6,display:"flex",padding:e.spacing(8,12),[e.breakpoints.down("sm")]:{flexDirection:"column",padding:e.spacing(4,2)}},videoContainer:{width:"60%",height:400,backgroundColor:"white",textAlign:"center",[e.breakpoints.down("sm")]:{width:"100%"}},img:{marginTop:e.spacing(6),[e.breakpoints.down("sm")]:{marginTop:e.spacing(3),height:50}},rotatedImg:{transform:"rotate(180deg)",float:"right",[e.breakpoints.down("sm")]:{height:50}},underlined:{textTransform:"uppercase",[e.breakpoints.down("sm")]:{marginBottom:e.spacing(4)}},introduction:{fontSize:20,fontStyle:"italic"},name:{fontSize:16,marginLeft:e.spacing(3),marginTop:e.spacing(4),[e.breakpoints.down("sm")]:{marginLeft:0}}});const ue=Object(d.a)(ge);var pe=()=>{const{name:e,underlined:t,rotatedImg:a,introduction:n,root:r,videoContainer:i,img:c}=ue(),{t:s}=Object(u.a)(),d=Object(f.a)(),g=Object(y.a)(d.breakpoints.down("sm")),p=o.a.createElement(O.b,{className:t},o.a.createElement(m.a,{variant:"subtitle1"},s("landing.introduction.title")));return o.a.createElement(l.a,{className:r},g&&p,o.a.createElement(l.a,{className:i},o.a.createElement(me.a,{url:"https://www.youtube.com/watch?v=qRS6U3glL2U",width:"100%",height:"100%"})),o.a.createElement(l.a,{width:g?"100%":"40%"},o.a.createElement(l.a,{ml:3},!g&&p,o.a.createElement("img",{className:c,alt:"quote",src:de}),o.a.createElement(l.a,{my:2,mx:g?0:3},o.a.createElement(m.a,{className:n},s("landing.introduction.description"))),o.a.createElement("img",{className:a,alt:"quote",src:de}),o.a.createElement(m.a,{className:e},T.b.name))))};var be=e=>Object(E.a)({container:{[e.breakpoints.only("xs")]:{padding:e.spacing(4,2)},padding:e.spacing(8,2),backgroundColor:Q.a.greyF6,textAlign:"center"},title:{textTransform:"uppercase",[e.breakpoints.only("xs")]:{fontSize:20}},details:{margin:"30px auto",maxWidth:800}});const Me=Object(d.a)(be);var Ee=()=>{const{container:e,title:t,details:a}=Me(),{t:n}=Object(u.a)(),r=Object(g.g)();return o.a.createElement(l.a,{className:e},o.a.createElement(O.b,{margin:"auto",centered:!0},o.a.createElement(m.a,{className:t,variant:"subtitle1"},n("landing.trial.title"))),o.a.createElement(m.a,{className:a},n("landing.trial.details")),o.a.createElement(c.a,{color:"primary",variant:"contained",onClick:()=>r.push("/auth/register")},n("landing.trial.button")))};const he=()=>Math.random().toString(36).slice(2);var je=e=>Object(E.a)({box:{padding:e.spacing(3),margin:e.spacing(1),backgroundColor:"white",maxWidth:360,textAlign:"center",position:"relative",borderRadius:6},cardTitle:{fontWeight:700,fontSize:17,marginTop:20,marginBottom:20,textTransform:"uppercase"},image:{height:120,width:120,margin:"auto",objectFit:"cover",borderRadius:"50%"},quote:{width:"100px !important"}});const Ce=Object(d.a)(je);var Ne=({name:e,description:t,src:a})=>{const{cardTitle:n,image:r,box:i}=Ce();return o.a.createElement(l.a,{className:i},o.a.createElement("img",{className:r,alt:"profile",src:a}),o.a.createElement(m.a,{className:n},e),o.a.createElement(m.a,null,t))};var ye=({cardProps:e})=>o.a.createElement(Ne,e);var fe=e=>{const[t,a]=Object(r.useState)(),[n,o]=Object(r.useState)(!1),[i,l]=Object(r.useState)("");return Object(r.useEffect)(()=>{let t=!1;return(async()=>{o(!0);try{l("");const n=await D()(e);t||a(n.data)}catch(e){l(e.message)}o(!1)})(),()=>{t=!0}},[e]),{data:t,loading:n,error:i}};var Oe=e=>Object(E.a)({rootContainer:{padding:({isMobile:e})=>e?"2em":"2em 100px"},quotes:{paddingTop:"4em",position:"relative","&:before":{zIndex:5,content:`url(${de})`,position:"absolute",left:0,top:36,opacity:.8,[e.breakpoints.down("sm")]:{transform:"scale(0.7)"}},"&:after":{zIndex:5,content:`url(${de})`,position:"absolute",right:0,bottom:36,opacity:.8,[e.breakpoints.down("sm")]:{height:50},transform:"rotate(180deg)",[e.breakpoints.down("sm")]:{transform:"scale(0.7) rotate(180deg)"}}}});const Ie=Object(d.a)(Oe);var ve=a(368);var ke=()=>Object(E.a)({cardContainer:{padding:"1em 2em 2em 2em"},circle:{margin:"auto"},text:{margin:"1em auto 0 auto"}});const we=Object(d.a)(ke);var xe=()=>{const{cardContainer:e,circle:t,text:a}=we();return o.a.createElement(K.a,{className:e},o.a.createElement(ve.a,{variant:"circle",width:80,height:80,className:t}),o.a.createElement(ve.a,{variant:"text",width:"30%",className:a}),o.a.createElement(ve.a,{variant:"rect",width:"100%",height:80,className:a}))};var De=()=>{const{t:e,error:t,loading:a,cards:n,quotes:r,rootContainer:i}=function(){const{t:e}=Object(u.a)(),t=Object(f.a)(),a=Object(y.a)(t.breakpoints.down("sm")),{quotes:n,rootContainer:r}=Ie({isMobile:a}),{data:o,loading:i,error:l}=fe(`${T.a}/api/get-about`);return{t:e,error:l,isMobile:a,loading:i,cards:o,quotes:n,rootContainer:r}}();return t?o.a.createElement(m.a,{color:"error"},t):o.a.createElement(l.a,{py:6,bgcolor:Q.a.greyF6,className:i},o.a.createElement(O.b,null,o.a.createElement(m.a,{style:{textTransform:"uppercase"},variant:"subtitle1"},e("landing.about.title"))),o.a.createElement(l.a,{className:r},o.a.createElement(O.a,{slidesToShow:4,slidesToScroll:4},a||!n?Array(8).fill("").map(()=>o.a.createElement(xe,{key:he()})):n.map(e=>o.a.createElement(ye,{key:e.name,cardProps:e})))))};const Te=Object(r.createContext)({isOpen:!1,setIsOpen:()=>{},url:"",setUrl:()=>{}});var Le=Te,Se=a(236),ze=a(336),Ae=a(335),Pe=a(226),Fe=a(334);var Qe=()=>Object(E.a)({rootContainer:{padding:({isMobile:e})=>e?"2em":"2em 100px"},title:{textTransform:"uppercase"},container:{padding:"0px 40px 50px 0px"},carouselContentContainer:{padding:"50px 60px"},videoBox:{width:"50%",height:"50%",margin:"auto",marginTop:"10%",position:"relative"},closeIcon:{position:"absolute",right:-100,top:-14},leftIcon:{position:"absolute",left:-100,top:"calc(50% - 30px)"},rightIcon:{position:"absolute",right:-100,top:"calc(50% - 30px)"},playIcon:{position:"absolute",cursor:"pointer",top:"calc(50% - 27px)",left:"calc(50% - 27px)"}});const Ue=Object(d.a)(Qe);var Ze=()=>{var e,t;const{url:a,setUrl:n,isOpen:o,setIsOpen:i}=Object(r.useContext)(Le),l=Object(f.a)(),c=Object(y.a)(l.breakpoints.down("sm")),{title:s,container:m,playIcon:d,rootContainer:g}=Ue({isMobile:c}),{t:p}=Object(u.a)(),[b,M]=Object(r.useState)(!1),[E,h]=Object(r.useState)(!1),{data:j,loading:C,error:N}=fe(`${T.a}/api/get-landing-videos`),O=j,I=(null==O?void 0:O.findIndex(e=>e.video===a))||0,v=O&&I?null===(e=O[I-1])||void 0===e?void 0:e.video:"",k=O&&(null===(t=O[I+1])||void 0===t?void 0:t.video)||"";Object(r.useEffect)(()=>{h(!!v),M(!!k)},[a]);return{rootContainer:g,url:a,setUrl:n,isOpen:o,setIsOpen:i,error:N,isMobile:c,playIcon:d,onPlayIconClick:e=>{n(e),i(!0)},title:s,container:m,loading:C,videos:O,prevUrl:v,nextUrl:k,hasNext:b,hasPrev:E,t:p}};const Be=Object(d.a)(Qe);var He=()=>{const{isMobile:e,hasPrev:t,prevUrl:a,hasNext:n,nextUrl:r,isOpen:i,setIsOpen:c,setUrl:s,url:m}=Ze(),{videoBox:d,closeIcon:g,leftIcon:u,rightIcon:p}=Be({isMobile:e});return o.a.createElement(Se.a,{open:i},o.a.createElement(l.a,{className:d},o.a.createElement(Pe.a,{className:g,color:"primary",onClick:()=>c(!1)},o.a.createElement(Fe.a,{fontSize:"large"})),t&&o.a.createElement(Pe.a,{className:u,color:"primary",onClick:()=>s(a)},o.a.createElement(Ae.a,{fontSize:"large"})),o.a.createElement(me.a,{height:"100%",width:"100%",url:m,controls:!0}),n&&o.a.createElement(Pe.a,{className:p,color:"primary",onClick:()=>s(r)},o.a.createElement(ze.a,{fontSize:"large"}))))};var Ye=()=>{const{isMobile:e}=Ze();return o.a.createElement(l.a,{my:8,key:he()},o.a.createElement(l.a,{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexDirection:e?"column":"row"},Array(4).fill("").map(()=>o.a.createElement(ve.a,{key:he(),variant:"rect",width:288,height:164}))))};const Ve=()=>o.a.createElement("svg",{width:"54",height:"54",viewBox:"0 0 54 54",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",{filter:"url(#filter0_d)"},o.a.createElement("circle",{cx:"27",cy:"23",r:"20",fill:"#FFC800"}),o.a.createElement("path",{d:"M32.5125 24.2046L24.7172 28.7518C24.0506 29.1407 23.2134 28.6598 23.2134 27.888V18.7935C23.2134 18.0217 24.0506 17.5409 24.7173 17.9297L32.5125 22.477C33.174 22.8629 33.174 23.8187 32.5125 24.2046Z",fill:"white"})),o.a.createElement("defs",null,o.a.createElement("filter",{id:"filter0_d",x:"0",y:"0",width:"54",height:"54",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},o.a.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),o.a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),o.a.createElement("feOffset",{dy:"4"}),o.a.createElement("feGaussianBlur",{stdDeviation:"3.5"}),o.a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}),o.a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),o.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}))));var Re=({videoProps:e})=>{const{playIcon:t,onPlayIconClick:a}=Ze();return o.a.createElement(l.a,{position:"relative"},o.a.createElement(l.a,{className:t,onClick:()=>a(e.video)},o.a.createElement(Ve,null)),o.a.createElement("img",{style:{height:170,width:300,margin:"0 auto"},alt:"thumbnail",src:e.thumbnail}))};var We,Ge=(We=()=>{const{t:e,error:t,title:a,loading:n,videos:r,rootContainer:i}=Ze();return t?o.a.createElement(m.a,{color:"error"},t):o.a.createElement(l.a,{mt:3,className:i},o.a.createElement(O.b,{margin:"auto",centered:!0},o.a.createElement(m.a,{variant:"subtitle1",className:a},e("landing.videos"))),o.a.createElement(l.a,{pt:5,pb:5},o.a.createElement(O.a,null,n||!r?o.a.createElement(Ye,null):r.map(e=>o.a.createElement(Re,{key:he(),videoProps:e})))),o.a.createElement(He,null))},()=>{const[e,t]=Object(r.useState)(""),[a,n]=Object(r.useState)(!1);return o.a.createElement(Te.Provider,{value:{url:e,isOpen:a,setIsOpen:n,setUrl:t}},o.a.createElement(We,null))});t.default=()=>{const{setComponentType:e}=Object(r.useContext)(n.a);return Object(r.useEffect)(()=>{e("public")},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(N,null),o.a.createElement(pe,null),o.a.createElement(ce,null),o.a.createElement(De,null),o.a.createElement(Ge,null),o.a.createElement(Ee,null),o.a.createElement($,null))}}}]);