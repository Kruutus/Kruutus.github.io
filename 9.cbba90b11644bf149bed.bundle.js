(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{292:function(e,t,a){"use strict";a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return S})),a.d(t,"c",(function(){return R}));var r=a(286),n=a(0),l=a.n(n),o=a(274),c=a(288);var i=e=>Object(c.a)({underline:{position:"relative",width:"fit-content","&::after":{position:"absolute",content:'""',bottom:e=>e.bottom||-4,left:({centered:e,width:t})=>e?`calc(50% - ${(t||100)/2}px)`:0,right:"0",borderRadius:"3px",height:e=>e.height||6,width:e=>e.width||100,background:t=>t.color||e.palette.primary.main}}});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const u=Object(o.a)(i);var p=e=>{let{width:t,height:a,color:n,bottom:o,children:c,className:i,centered:p}=e,b=m(e,["width","height","color","bottom","children","className","centered"]);const{underline:d}=u({width:t,height:a,bottom:o,color:n,centered:p});return l.a.createElement(r.a,s({className:`${d} ${i}`},b),c)},b=a(285),d=a(318),g=a.n(d),f=a(39),h=a(31),E=a(83);var O=e=>Object(c.a)({root:{"& .slick-prev:before":{color:h.a.active,content:`url(${E.e})`},"& .slick-next:before":{color:h.a.active,content:`url(${E.g})`}},dots:{margin:e.spacing(0,1),height:7,width:100,backgroundColor:h.a.black1F,[e.breakpoints.down("sm")]:{width:40}},dotsContainer:{marginTop:"2em",marginRight:"2em",textAlign:"right",display:"flex",justifyContent:"flex-end",cursor:"pointer","& li":{listStyleType:"none"},"& .slick-active > div":{backgroundColor:h.a.active}}});function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){w(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const x=Object(o.a)(O);var S=({children:e,slidesToShow:t=4,slidesToScroll:a=4})=>{const n=Object(f.a)(),o=Object(b.a)(n.breakpoints.down("xs")),{root:c,dotsContainer:i,dots:s}=x({isMobile:o}),m=({className:e,style:t,onClick:a})=>l.a.createElement(r.a,{className:e,style:j(j({},t),{},{color:h.a.active}),onClick:a}),u=({className:e,style:t,onClick:a})=>l.a.createElement(r.a,{className:e,style:j(j({},t),{},{color:h.a.active}),onClick:a}),p={dots:!0,infinite:!0,speed:500,slidesToShow:t,slidesToScroll:a,prevArrow:l.a.createElement(m,null),nextArrow:l.a.createElement(u,null),appendDots:e=>l.a.createElement(r.a,{className:i},e),customPaging:()=>l.a.createElement(r.a,{className:s}),responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2,dots:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]};return l.a.createElement(r.a,{className:c},l.a.createElement(g.a,v({dotsClass:i},p),e))},k=a(287),C=a(283),P=a(305),N=a(298),T=a.n(N),D=a(296),I=a(293);const q=Object(o.a)(D.a);var R=()=>{const{url:e,setUrl:t}=l.a.useContext(I.a),{videoBox:a,closeIcon:n}=q({isMobile:!1});return l.a.createElement(k.a,{open:!!e},l.a.createElement(r.a,{className:a},l.a.createElement(C.a,{className:n,color:"primary",onClick:()=>t("")},l.a.createElement(P.a,{fontSize:"large"})),l.a.createElement(T.a,{height:"100%",width:"100%",url:e,controls:!0})))}},293:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));a(43);var r=a(0),n=a.n(r),l=a(292);const o=Object(r.createContext)({url:"",setUrl:()=>null}),c=e=>()=>{const[t,a]=n.a.useState("");return n.a.createElement(o.Provider,{value:{url:t,setUrl:a}},n.a.createElement(e,null),n.a.createElement(l.c,null))};t.a=o},296:function(e,t,a){"use strict";var r=a(288);t.a=()=>Object(r.a)({rootContainer:{padding:({isMobile:e})=>e?"2em":"2em 100px"},title:{textTransform:"uppercase"},container:{padding:"0px 40px 50px 0px"},carouselContentContainer:{padding:"50px 60px"},videoBox:{width:"50%",height:"50%",margin:"auto",marginTop:"10%",position:"relative"},closeIcon:{position:"absolute",right:-100,top:-14},leftIcon:{position:"absolute",left:-100,top:"calc(50% - 30px)"},rightIcon:{position:"absolute",right:-100,top:"calc(50% - 30px)"},playIcon:{position:"absolute",cursor:"pointer",top:"calc(50% - 27px)",left:"calc(50% - 27px)"}})},312:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return p}));a(43);var r=a(0),n=a.n(r);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let i;!function(e){e.OTHER="other",e.MALE="male",e.FEMALE="female"}(i||(i={}));const s={firstName:"",lastName:"",email:"",subbed:!1,accepted:!1,password:"",passwordRepeat:"",gender:i.OTHER},m=Object(r.createContext)({state:s,dispatch:()=>null}),u=(e,t)=>o(o({},e),t),p=e=>()=>{const[t,a]=Object(r.useReducer)(u,s);return n.a.createElement(m.Provider,{value:{state:t,dispatch:a}},n.a.createElement(e,null))};t.b=m},317:function(e,t,a){"use strict";t.a=a.p+"5c07f082d3506bd703ec6c24b8dac831.png"},423:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Z}));var r=a(0),n=a.n(r),l=a(10),o=(a(104),a(105),a(106),a(107),a(108),a(109),a(110),a(111),a(112),a(113),a(114),a(115),a(116),a(43),a(290)),c=a(275),i=a(286),s=a(281),m=a(72),u=a.n(m),p=a(274),b=a(289),d=a(312),g=a(292),f=a(101),h=a(35),E=a(288);var O=e=>Object(E.a)({title:{fontSize:50,fontWeight:900},form:{marginTop:e.spacing(5),display:"flex",flexDirection:"column"}}),v=a(426),y=a(408),j=a(397),w=a(410),x=a(396),S=a(409),k=a(422);var C=()=>{const{t:e}=Object(b.a)(),{state:{lastName:t,firstName:a,accepted:l,subbed:c,email:s,gender:m},dispatch:u}=Object(r.useContext)(d.b);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{container:!0,spacing:5},n.a.createElement(o.a,{item:!0,xs:12,sm:6},n.a.createElement(k.a,{fullWidth:!0,value:t,onChange:e=>u({lastName:e.target.value}),required:!0,InputLabelProps:{required:!1},name:"lastName",autoFocus:!0,label:e("auth.lastName")})),n.a.createElement(o.a,{item:!0,xs:12,sm:6},n.a.createElement(k.a,{fullWidth:!0,value:a,onChange:e=>u({firstName:e.target.value}),required:!0,InputLabelProps:{required:!1},name:"firstName",label:e("auth.firstName")})),n.a.createElement(o.a,{item:!0,xs:12},n.a.createElement(k.a,{fullWidth:!0,required:!0,InputLabelProps:{required:!1},value:s,onChange:e=>u({email:e.target.value}),name:"email",type:"email",label:e("common.email")})),n.a.createElement(o.a,{item:!0,xs:12},n.a.createElement(y.a,{component:"fieldset"},n.a.createElement(S.a,{component:"legend"},e("auth.gender")),n.a.createElement(j.a,{value:m,onChange:e=>u({gender:e.target.value})},n.a.createElement(w.a,{value:d.a.OTHER,control:n.a.createElement(x.a,{color:"primary"}),label:e("auth.other")}),n.a.createElement(w.a,{value:d.a.FEMALE,control:n.a.createElement(x.a,{color:"primary"}),label:e("auth.female")}),n.a.createElement(w.a,{value:d.a.MALE,control:n.a.createElement(x.a,{color:"primary"}),label:e("auth.male")}))))),n.a.createElement(i.a,{mb:5}),n.a.createElement(w.a,{control:n.a.createElement(v.a,{required:!0,color:"primary",checked:l,onChange:e=>u({accepted:e.target.checked})}),label:e("auth.accept")}),n.a.createElement(w.a,{control:n.a.createElement(v.a,{color:"primary",checked:c,onChange:e=>u({subbed:e.target.checked})}),label:e("auth.sub")}))};var P=()=>{const{t:e}=Object(b.a)(),{state:{password:t,passwordRepeat:a},dispatch:l}=Object(r.useContext)(d.b);return n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,{required:!0,InputLabelProps:{required:!1},value:t,onChange:e=>l({password:e.target.value}),name:"password",type:"password",label:e("auth.password")}),n.a.createElement(i.a,{mb:5}),n.a.createElement(k.a,{required:!0,InputLabelProps:{required:!1},value:a,onChange:e=>l({passwordRepeat:e.target.value}),name:"passwordRepeat",type:"password",label:e("auth.passwordRepeat")}))};const N=new Map;N.set(0,()=>n.a.createElement(C,null)),N.set(1,()=>n.a.createElement(P,null));const T=Object(p.a)(O);var D=Object(d.c)(()=>{const{setComponentType:e,setVariant:t}=Object(r.useContext)(h.a),{title:a,form:m}=T(),{t:p}=Object(b.a)(),{state:{firstName:E,lastName:O,email:v,password:y,passwordRepeat:j,accepted:w,gender:x}}=Object(r.useContext)(d.b),[S,k]=Object(r.useState)(0),C=S===N.size-1,P=Object(l.g)();Object(r.useEffect)(()=>{e("register"),t("black")},[]);return n.a.createElement(i.a,{my:4,mx:8},n.a.createElement(i.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},n.a.createElement(g.b,null,n.a.createElement(s.a,{className:a},p("auth.register"))),n.a.createElement(s.a,{variant:"h4"},`${S+1}/${N.size}`)),n.a.createElement("form",{className:m,onSubmit:e=>{if(e.preventDefault(),C||k(S+1),C){const e={email:v,password:y,firstName:E,lastName:O,gender:x};u.a.post(`${f.a}/api/register-user`,e).then(()=>{P.push("/auth/confirm")}).catch(e=>{alert(e.message)})}}},n.a.createElement(i.a,null,N.get(S)),n.a.createElement(i.a,{mb:5}),n.a.createElement(o.a,{container:!0,justify:S?"space-between":"center"},S?n.a.createElement(o.a,{item:!0},n.a.createElement(c.a,{onClick:()=>k(S-1),type:"button",variant:"outlined",color:"inherit"},p("auth.back"))):null,n.a.createElement(o.a,{item:!0},n.a.createElement(c.a,{disabled:!(()=>{switch(S){case 0:return!!(E&&O&&v&&w);case 1:return!(!y||!j||y!==j);default:return!0}})(),type:"submit",variant:"contained",color:"primary"},p(`auth.${C?"register":"next"}`))))))}),I=a(317);var q=e=>Object(E.a)({extraSpacingTop:{paddingTop:e.mixins.toolbar.height},img:{backgroundImage:`url(${I.a})`,backgroundPosition:"80%",backgroundSize:"cover",height:"100vh"}});const R=Object(p.a)(q);var L=({children:e})=>{const{extraSpacingTop:t,img:a}=R();return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{className:t}),n.a.createElement(o.a,{container:!0},n.a.createElement(o.a,{item:!0,xs:"auto",md:4,lg:5},n.a.createElement(i.a,{className:a})),n.a.createElement(o.a,{item:!0,xs:12,md:8,lg:7},e)))},$=a(15),F=a(83),z=a(53),A=a(31);var M=e=>Object(E.a)({title:{fontSize:50,fontWeight:900},link:{color:A.a.linkBlue,fontFamily:"'Open Sans', sans-serif",textDecoration:"unset",letterSpacing:"1px"},form:{marginTop:e.spacing(5),display:"flex",flexDirection:"column"}});const W=Object(p.a)(M);var H=()=>{const{title:e,form:t,link:a}=W(),{t:o}=Object(b.a)(),m=Object(l.g)(),[u,p]=Object(r.useState)(""),[d,f]=Object(r.useState)(""),{setVariant:E,setComponentType:O}=Object(r.useContext)(h.a);Object(r.useEffect)(()=>{E("black"),O("login")},[]);return n.a.createElement(i.a,{my:4,mx:8},n.a.createElement(g.b,{style:{margin:"auto"},centered:!0},n.a.createElement(s.a,{className:e},o("auth.login"))),n.a.createElement("form",{className:t,onSubmit:async e=>{e.preventDefault();const{user:t}=await z.a.auth().signInWithEmailAndPassword(u,d);t?m.push("/profile/personal-data"):alert("sikertelen belépés!")}},n.a.createElement(k.a,{required:!0,autoFocus:!0,InputLabelProps:{required:!1},value:u,onChange:e=>p(e.target.value),name:"email",type:"email",label:o("common.email")}),n.a.createElement(i.a,{mb:5}),n.a.createElement(k.a,{required:!0,InputLabelProps:{required:!1},value:d,onChange:e=>f(e.target.value),name:"password",type:"password",label:o("auth.password")}),n.a.createElement(i.a,{mt:5},n.a.createElement($.b,{to:"/auth/reset-password",className:a},o("auth.forgotPasswordLink"))),n.a.createElement(i.a,{textAlign:"center",mt:5},n.a.createElement(c.a,{type:"submit",variant:"contained",color:"primary",endIcon:n.a.createElement(F.a,null)},o("auth.login")))))},B=a(428),U=a(285),J=a(39),V=a(425);var G=e=>Object(E.a)({title:{fontSize:50,fontWeight:900},mobileTitle:{fontSize:30,fontWeight:900},textStyle:{fontSize:20},mobileTextStyle:{fontSize:16},form:{marginTop:e.spacing(5),padding:e.spacing(10),display:"flex",flexDirection:"column"},mobileForm:{marginTop:e.spacing(5),padding:"unset",display:"flex",flexDirection:"column"}});function K(){return(K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function Q(e){return n.a.createElement(V.a,K({elevation:6,variant:"filled"},e))}const X=Object(p.a)(G);var Y=()=>{const{title:e,mobileTitle:t,form:a,mobileForm:l,mobileTextStyle:o,textStyle:m}=X(),{t:u}=Object(b.a)(),p=Object(J.a)(),[d,f]=Object(r.useState)(""),[h,E]=Object(r.useState)(),[O,v]=Object(r.useState)(""),[y,j]=Object(r.useState)(!1),w=Object(U.a)("(min-width:1440px)"),x=Object(U.a)(p.breakpoints.down("sm"));return n.a.createElement(i.a,{my:4,mx:x?1:8},n.a.createElement(g.b,{style:{margin:"auto"},centered:!0},n.a.createElement(s.a,{className:x?t:e},u("auth.forgotPasswordTitle"))),n.a.createElement("form",{className:x?l:a,onSubmit:async e=>{e.preventDefault();try{await z.a.auth().sendPasswordResetEmail(d),v(u("auth.pwResetEmailSent")),E("success")}catch{v(u("auth.pwResetEmailError")),E("error")}finally{j(!0)}}},n.a.createElement(i.a,{mb:x?2:5},n.a.createElement(s.a,{variant:"h6",className:x?o:m},u("auth.pwResetEmailHelperText"))),n.a.createElement(k.a,{required:!0,InputLabelProps:{required:!1},value:d,onChange:e=>f(e.target.value),name:"email",type:"email",label:u("common.email")}),n.a.createElement(i.a,{textAlign:"center",mt:5},n.a.createElement(c.a,{type:"submit",variant:"contained",color:"primary"},u("auth.send")))),n.a.createElement(B.a,{open:y,autoHideDuration:6e3,onClose:()=>j(!1)},n.a.createElement(Q,{onClose:()=>j(!1),severity:h},n.a.createElement(s.a,{variant:w?"h6":"body1"},O))))};var Z=({match:e})=>n.a.createElement(L,null,n.a.createElement(l.d,null,n.a.createElement(l.b,{path:`${e.path}/register`,component:D}),n.a.createElement(l.b,{path:`${e.path}/login`,component:H}),n.a.createElement(l.b,{path:`${e.path}/reset-password`,component:Y}),n.a.createElement(l.a,{to:"/"})))}}]);