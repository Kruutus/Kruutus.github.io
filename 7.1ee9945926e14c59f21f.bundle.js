(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{292:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return C})),a.d(t,"c",(function(){return $}));var n=a(286),r=a(0),l=a.n(r),o=a(274),c=a(288);var i=e=>Object(c.a)({underline:{position:"relative",width:"fit-content","&::after":{position:"absolute",content:'""',bottom:e=>e.bottom||-4,left:({centered:e,width:t})=>e?`calc(50% - ${(t||100)/2}px)`:0,right:"0",borderRadius:"3px",height:e=>e.height||6,width:e=>e.width||100,background:t=>t.color||e.palette.primary.main}}});function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const m=Object(o.a)(i);var d=e=>{let{width:t,height:a,color:r,bottom:o,children:c,className:i,centered:d}=e,p=u(e,["width","height","color","bottom","children","className","centered"]);const{underline:b}=m({width:t,height:a,bottom:o,color:r,centered:d});return l.a.createElement(n.a,s({className:`${b} ${i}`},p),c)},p=a(285),b=a(318),f=a.n(b),g=a(39),v=a(31),h=a(83);var y=e=>Object(c.a)({root:{"& .slick-prev:before":{color:v.a.active,content:`url(${h.e})`},"& .slick-next:before":{color:v.a.active,content:`url(${h.g})`}},dots:{margin:e.spacing(0,1),height:7,width:100,backgroundColor:v.a.black1F,[e.breakpoints.down("sm")]:{width:40}},dotsContainer:{marginTop:"2em",marginRight:"2em",textAlign:"right",display:"flex",justifyContent:"flex-end",cursor:"pointer","& li":{listStyleType:"none"},"& .slick-active > div":{backgroundColor:v.a.active}}});function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){x(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function x(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const w=Object(o.a)(y);var C=({children:e,slidesToShow:t=4,slidesToScroll:a=4})=>{const r=Object(g.a)(),o=Object(p.a)(r.breakpoints.down("xs")),{root:c,dotsContainer:i,dots:s}=w({isMobile:o}),u=({className:e,style:t,onClick:a})=>l.a.createElement(n.a,{className:e,style:j(j({},t),{},{color:v.a.active}),onClick:a}),m=({className:e,style:t,onClick:a})=>l.a.createElement(n.a,{className:e,style:j(j({},t),{},{color:v.a.active}),onClick:a}),d={dots:!0,infinite:!0,speed:500,slidesToShow:t,slidesToScroll:a,prevArrow:l.a.createElement(u,null),nextArrow:l.a.createElement(m,null),appendDots:e=>l.a.createElement(n.a,{className:i},e),customPaging:()=>l.a.createElement(n.a,{className:s}),responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2,dots:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!1}}]};return l.a.createElement(n.a,{className:c},l.a.createElement(f.a,O({dotsClass:i},d),e))},k=a(287),N=a(283),P=a(305),S=a(298),D=a.n(S),R=a(296),I=a(293);const z=Object(o.a)(R.a);var $=()=>{const{url:e,setUrl:t}=l.a.useContext(I.a),{videoBox:a,closeIcon:r}=z({isMobile:!1});return l.a.createElement(k.a,{open:!!e},l.a.createElement(n.a,{className:a},l.a.createElement(N.a,{className:r,color:"primary",onClick:()=>t("")},l.a.createElement(P.a,{fontSize:"large"})),l.a.createElement(D.a,{height:"100%",width:"100%",url:e,controls:!0})))}},293:function(e,t,a){"use strict";a.d(t,"b",(function(){return c}));a(43);var n=a(0),r=a.n(n),l=a(292);const o=Object(n.createContext)({url:"",setUrl:()=>null}),c=e=>()=>{const[t,a]=r.a.useState("");return r.a.createElement(o.Provider,{value:{url:t,setUrl:a}},r.a.createElement(e,null),r.a.createElement(l.c,null))};t.a=o},296:function(e,t,a){"use strict";var n=a(288);t.a=()=>Object(n.a)({rootContainer:{padding:({isMobile:e})=>e?"2em":"2em 100px"},title:{textTransform:"uppercase"},container:{padding:"0px 40px 50px 0px"},carouselContentContainer:{padding:"50px 60px"},videoBox:{width:"50%",height:"50%",margin:"auto",marginTop:"10%",position:"relative"},closeIcon:{position:"absolute",right:-100,top:-14},leftIcon:{position:"absolute",left:-100,top:"calc(50% - 30px)"},rightIcon:{position:"absolute",right:-100,top:"calc(50% - 30px)"},playIcon:{position:"absolute",cursor:"pointer",top:"calc(50% - 27px)",left:"calc(50% - 27px)"}})},312:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return d}));a(43);var n=a(0),r=a.n(n);function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}let i;!function(e){e.OTHER="other",e.MALE="male",e.FEMALE="female"}(i||(i={}));const s={firstName:"",lastName:"",email:"",subbed:!1,accepted:!1,password:"",passwordRepeat:"",gender:i.OTHER},u=Object(n.createContext)({state:s,dispatch:()=>null}),m=(e,t)=>o(o({},e),t),d=e=>()=>{const[t,a]=Object(n.useReducer)(m,s);return r.a.createElement(u.Provider,{value:{state:t,dispatch:a}},r.a.createElement(e,null))};t.b=u},322:function(e,t,a){"use strict";var n=a(0),r=n.createContext();r.displayName="RadioGroupContext",t.a=r},341:function(e,t,a){"use strict";a.d(t,"a",(function(){return Ce}));var n=a(286),r=a(411),l=a(0),o=a.n(l),c=a(36),i=a(35),s=a(293),u=a(275),m=a(290),d=a(281),p=a(416),b=a(418),f=a(417),g=a(429),v=a(274),h=a(289),y=a(288),O=a(31);var E=()=>Object(y.a)({cardRoot:{boxShadow:"-4px -4px 20px rgba(0, 0, 0, 0.05), 4px 4px 20px rgba(0, 0, 0, 0.05)"},avatar:{backgroundColor:O.a.primary,fontWeight:600},cardHeaderRoot:{padding:"2em"},cardHeaderTitle:{fontSize:"1.3em",fontWeight:600},cardContentRoot:{padding:"0em 6.5em"}}),j=a(410),x=a(426);var w=({options:e,value:t,dispatch:a,title:n,disabled:r})=>o.a.createElement(m.a,{container:!0,spacing:1},e.map(e=>o.a.createElement(m.a,{item:!0,xs:12,md:6,lg:6,key:e.label},o.a.createElement(j.a,{disabled:r,style:{border:"1px solid rgba(234, 234, 234, 1)",width:"100%",borderRadius:3},control:o.a.createElement(x.a,{checked:t===e.value,color:"primary",value:String(e.value),onChange:e=>a({type:n,data:e.target.value})}),label:e.label}))));var C=()=>Object(y.a)({formControlLabelRoot:{border:"1px solid rgba(234, 234, 234, 1)",width:"100%",borderRadius:3},label:{width:"100%"},labelImg:{float:"right",padding:"0.5em 2em"}});const k=Object(v.a)(C);var N=({options:e,value:t,dispatch:a,title:n,disabled:r})=>{const{formControlLabelRoot:l,label:c,labelImg:i}=k();return o.a.createElement(m.a,{container:!0,spacing:1},e.map(e=>o.a.createElement(m.a,{item:!0,xs:12,md:6,lg:6,key:e.label},o.a.createElement(j.a,{disabled:r,classes:{root:l,label:c},control:o.a.createElement(x.a,{checked:t.includes(e.value),color:"primary",value:String(e.value),onChange:e=>a({type:n,data:e.target.value})}),label:o.a.createElement(m.a,{container:!0,spacing:1,alignContent:"center",justify:"space-between"},o.a.createElement(m.a,{item:!0,style:{margin:"auto 0"},xs:6,md:6,lg:6},e.label),o.a.createElement(m.a,{item:!0,xs:6,md:6,lg:6},o.a.createElement("img",{className:i,src:e.icon,alt:e.label})))}))))};const P=Object(v.a)(E),S=({title:e,index:t,value:a,options:n,dispatch:r,multi:l,disabled:c,additionalComponent:i})=>{const{cardRoot:s,cardHeaderRoot:u,cardHeaderTitle:m,cardContentRoot:d,avatar:v}=P(),{t:y}=Object(h.a)();return o.a.createElement(p.a,{className:s},o.a.createElement(f.a,{title:y(String(`generator.${e}`)),classes:{root:u,title:m},avatar:o.a.createElement(g.a,{"aria-label":"recipe",className:v},t+1)}),o.a.createElement(b.a,{className:d},i&&i(),l?o.a.createElement(N,{title:e,value:a,options:n,dispatch:r,disabled:c}):o.a.createElement(w,{title:e,value:a,options:n,dispatch:r,disabled:c})))};var D=o.a.memo(S);var R=()=>Object(y.a)({gridContainer:{marginLeft:-11,padding:"2em"},buttonLeft:{width:"100%",borderRadius:"5px 0px 0px 5px",boxShadow:"unset"},buttonRight:{width:"100%",borderRadius:"0px 5px 5px 0px",boxShadow:"unset"}});const I=Object(v.a)(R);var z=({atGym:e,setAtGym:t})=>{const{gridContainer:a,buttonLeft:n,buttonRight:r}=I();return o.a.createElement(m.a,{container:!0,justify:"center",className:a},o.a.createElement(m.a,{item:!0,xs:12,md:5,lg:5},o.a.createElement(u.a,{className:n,color:e?"primary":"secondary",variant:"contained",onClick:()=>t(!0)},"Konditermi edzés")),o.a.createElement(m.a,{item:!0,xs:12,md:5,lg:5},o.a.createElement(u.a,{className:r,color:e?"secondary":"primary",variant:"contained",onClick:()=>t(!1)},"Otthoni edzés")))},$=(a(43),a(72)),B=a.n($),T=a(101);var L=()=>Object(y.a)({title:{fontSize:"1.3em",fontWeight:600,textAlign:"center",maxWidth:"60%",margin:"50px auto",color:"#333333"},borderedBoxContainer:{border:"1px solid #E0E0E0",boxSizing:"border-box",borderRadius:"5px"},givePlanButton:{width:"100%",textTransform:"uppercase"}});function q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function A(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?q(Object(a),!0).forEach((function(t){M(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):q(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function M(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const W={exerciseNumber:"2",exerciseLength:"45",fitness:"1",equipment:[],weekNumber:"0"},H=(e,t)=>{switch(t.type){case"exerciseNumber":return A(A({},e),{},{exerciseNumber:t.data});case"exerciseLength":return A(A({},e),{},{exerciseLength:t.data});case"fitness":return A(A({},e),{},{fitness:t.data});case"weekNumber":return A(A({},e),{},{weekNumber:t.data});case"equipment":{const a=[...e.equipment];return a.includes(t.data)?a.splice(a.findIndex(e=>e===t.data),1):a.push(t.data),A(A({},e),{},{equipment:a})}default:throw new Error}},G=Array(10).fill("").map((e,t)=>({label:String(t+1),value:String(t+1)}));function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach((function(t){V(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function V(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const J=Object(v.a)(L);function K(){const{title:e,borderedBoxContainer:t,givePlanButton:a}=J(),[n,r]=Object(l.useState)([]),[i,s]=Object(l.useState)(!1),[u,m]=Object(l.useState)(!1),[d,p]=Object(l.useReducer)(H,W),{user:b,refetch:f}=Object(l.useContext)(c.a),{t:g}=Object(h.a)();Object(l.useEffect)(()=>((async()=>{const e=(await B.a.get(`${T.a}/api/get-equipments`)).data.map(({id:e,name:t,imageUrl:a})=>({label:t,value:e,icon:a}));r(e)})(),()=>r([])),[]);return{borderedBoxContainer:t,title:e,givePlanButton:a,t:g,questionArray:Object(l.useMemo)(()=>[{title:"exerciseNumber",value:d.exerciseNumber,options:[{label:"2",value:"2"},{label:"3",value:"3"},{label:"4",value:"4"},{label:"5",value:"5"}]},{title:"exerciseLength",value:d.exerciseLength,options:[{label:"45",value:"45"},{label:"60",value:"60"},{label:"75",value:"75"}]},{title:"fitness",value:d.fitness,options:G},{title:"equipment",value:d.equipment,multi:!0,options:n,disabled:u,additionalComponent:()=>o.a.createElement(z,{atGym:u,setAtGym:m})}],[d,n,u,m]),dispatch:p,onSubmit:async()=>{try{s(!0),await B.a.post(`${T.a}/api/add-generator-node`,F(F({},d),{},{uid:null==b?void 0:b.uid,atGym:u,equipment:u?[]:d.equipment,weekNumber:Number(d.weekNumber)})),await B.a.post(`${T.a}/api/generate-week`,{uid:null==b?void 0:b.uid}),await f()}catch(e){alert(e.message)}},isLoading:i}}function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var Q=()=>{const{borderedBoxContainer:e,title:t,givePlanButton:a,t:l,questionArray:c,dispatch:i,onSubmit:s,isLoading:p}=K();return o.a.createElement(n.a,{pt:14,pb:3,ml:"auto",mr:"auto",maxWidth:"1240px"},o.a.createElement(n.a,{className:e},o.a.createElement(d.a,{className:t},l("generator.title")),o.a.createElement(n.a,{mt:"2em",mb:"2em"},o.a.createElement(m.a,{container:!0,spacing:5,justify:"center"},c.map((e,t)=>o.a.createElement(m.a,{item:!0,xs:12,md:9,lg:9,key:e.title},o.a.createElement(D,Z({},e,{index:t,dispatch:i})))),o.a.createElement(m.a,{item:!0,xs:12,md:9,lg:9},o.a.createElement(u.a,{disabled:p,endIcon:p&&o.a.createElement(r.a,{size:16}),color:"primary",variant:"contained",className:a,onClick:s},l("generator.givePlanButton")))))))},X=a(353);var Y=()=>Object(y.a)({container:{margin:"2em",boxShadow:"-4px -4px 10px rgba(0, 0, 0, 0.05), 4px 4px 10px rgba(0, 0, 0, 0.05)"},doneButton:{width:"calc(100% - 2em)",boxShadow:"unset",textTransform:"uppercase",margin:"1em"}}),_=a(412),ee=a(413),te=a(420),ae=a(414),ne=a(283),re=a(326),le=a(415);var oe=()=>Object(y.a)({tableRoot:{borderBottom:"1px solid rgba(224, 224, 224, 1)"},blankCell:{padding:"16px"},contentCell:{borderBottom:"unset"},actionButton:{borderRadius:"unset",border:"1px solid #CCC",margin:"0px 1px"},playButton:{backgroundColor:O.a.primary,"&:hover":{backgroundColor:"rgb(178, 140, 0)"}},playIcon:{fontSize:"1rem",fill:"white"}}),ce=a(352),ie=a(351),se=a(419),ue=a(350);const me=Object(v.a)(oe);var de=({code:e,block:t,dayId:a,refetch:r,isDone:l})=>{const{user:i}=o.a.useContext(c.a),[u,m]=o.a.useState(!1),{blankCell:d,contentCell:p,playButton:b,playIcon:f,actionButton:g}=me(),{setUrl:v}=o.a.useContext(s.a),h=async t=>{try{m(!0),await B.a.post(`${T.a}/api/regenerate`,{uid:null==i?void 0:i.uid,block:e.toLowerCase(),level:t.toString(),dayId:a}),await r()}catch(e){alert(e.message)}finally{m(!1)}};return o.a.createElement(ae.a,{key:e},o.a.createElement(le.a,{className:p},e),o.a.createElement(le.a,{className:p},t.exercise.name),o.a.createElement(le.a,{className:`${d} ${p}`},o.a.createElement(ne.a,{className:b,size:"small",onClick:()=>v(t.exercise.video.url)},o.a.createElement(re.a,{className:f}))),o.a.createElement(le.a,{className:p},t.exercise.equipments.map(e=>e.name).join(", ")||"-"),o.a.createElement(le.a,{className:p,align:"center"}," ",`${t.sets} x ${t.reps}`," "),o.a.createElement(le.a,{className:p,align:"center"},o.a.createElement(n.a,{style:{margin:"auto",display:"flex"}},o.a.createElement(se.a,{title:"Nehezítés"},o.a.createElement("div",null,o.a.createElement(ne.a,{className:g,disabled:u||"9"===t.level||l,size:"small",onClick:async()=>h(Number(t.level)+1)},o.a.createElement(ue.a,null)))),o.a.createElement(se.a,{title:"Újragenerálás"},o.a.createElement("div",null,o.a.createElement(ne.a,{className:g,disabled:u||l,size:"small",onClick:async()=>h(Number(t.level))},o.a.createElement(ie.a,null)))),o.a.createElement(se.a,{title:"Könnyítés"},o.a.createElement("div",null,o.a.createElement(ne.a,{className:g,disabled:u||"0"===t.level||l,size:"small",onClick:async()=>h(Number(t.level)-1)},o.a.createElement(ce.a,null)))))),o.a.createElement(le.a,{className:p,align:"center"},Number(t.level)+1," "))};const pe=["A1","A2","A3","B1","B2","B3","C1","C2","C3"],be=Object(v.a)(oe);var fe=({day:e,dayId:t,refetch:a})=>{const{blankCell:n,tableRoot:r,contentCell:l,playButton:c,playIcon:i}=be(),{setUrl:u}=o.a.useContext(s.a);return o.a.createElement(_.a,{size:"small",className:r},o.a.createElement(te.a,null,o.a.createElement(ae.a,null,o.a.createElement(le.a,null),o.a.createElement(le.a,null,"Gyakorlat neve"),o.a.createElement(le.a,null),o.a.createElement(le.a,null,"Eszköz"),o.a.createElement(le.a,{align:"center"},"Ismétlésszám"),o.a.createElement(le.a,{align:"center"}))),o.a.createElement(ee.a,null,e.exercises.warmUp&&(m=e.exercises.warmUp.video,o.a.createElement(ae.a,null,o.a.createElement(le.a,{className:l},"A0"),o.a.createElement(le.a,{className:l},"Bemelegítés"),o.a.createElement(le.a,{className:`${n} ${l}`},o.a.createElement(ne.a,{className:c,size:"small",onClick:()=>u(m.url)},o.a.createElement(re.a,{className:i}))),o.a.createElement(le.a,{className:l},"-"),o.a.createElement(le.a,{className:l,align:"center"},"-"),o.a.createElement(le.a,{className:l,align:"center"},"-"),o.a.createElement(le.a,{className:l,align:"center"},"Szint"))),pe.map(n=>{const r=e.exercises[n.toLocaleLowerCase()];return r?o.a.createElement(de,{key:n,code:n,block:r,dayId:t,refetch:a,isDone:e.isDone}):null})));var m},ge=a(422);var ve=({note:e,setNote:t,date:a,setDate:r,isDone:l})=>o.a.createElement(n.a,{p:"1em"},o.a.createElement(m.a,{container:!0,spacing:1},o.a.createElement(m.a,{item:!0,xs:12,md:5,lg:5},o.a.createElement(ge.a,{disabled:l,style:{width:"80%"},type:"date",value:a,onChange:e=>r(e.target.value),label:"Edzés dátuma",InputLabelProps:{shrink:!0}})),o.a.createElement(m.a,{item:!0,xs:12,md:7,lg:7},o.a.createElement(ge.a,{style:{width:"100%"},label:"Megjegyzés",placeholder:"Rövid megjegyzés hozzáadása...",value:e,disabled:l,onChange:e=>t(e.target.value),InputLabelProps:{shrink:!0}}))));const he=Object(v.a)(Y),ye=X.DateTime.fromMillis(Date.now()).toISODate();var Oe=({title:e,dayId:t,day:a,refetch:n})=>{const{t:i}=Object(h.a)(),{container:s,doneButton:m}=he(),[d,g]=Object(l.useState)(!1),[v,y]=Object(l.useState)(a.isDone?a.dateOfCompletion:ye),[O,E]=Object(l.useState)(a.note),{user:j}=Object(l.useContext)(c.a);o.a.useEffect(()=>{a.dateOfCompletion&&a.isDone&&y(a.dateOfCompletion),a.note&&E(a.note)},[a]);return o.a.createElement(p.a,{className:s},o.a.createElement(f.a,{title:e,titleTypographyProps:{align:"center"}}),o.a.createElement(b.a,null,o.a.createElement(fe,{refetch:n,dayId:t,day:a}),o.a.createElement(ve,{date:v,setDate:y,note:O,setNote:E,isDone:a.isDone}),o.a.createElement(u.a,{disabled:d||a.isDone,endIcon:d&&o.a.createElement(r.a,{size:16}),onClick:async e=>{e.preventDefault();try{g(!0),await B.a.post(`${T.a}/api/day-complete`,{userId:null==j?void 0:j.uid,dayId:t,note:O,date:v}),await n()}catch(e){alert(e.message)}finally{g(!1)}},variant:"contained",color:"primary",className:m},i("generator.exerciseFinished"))))},Ee=a(103);var je=()=>{const{userNode:e,user:t}=Object(l.useContext)(c.a),[{data:a,loading:n},r]=Object(Ee.a)(`${T.a}/api/get-current-week/${null==t?void 0:t.uid}/${null==e?void 0:e.planId}`);return{currentWeek:a,loading:n,refetch:r}};const xe=["A","B","C","D","E"];var we=()=>{const{currentWeek:e,refetch:t}=je(),{user:a}=Object(l.useContext)(c.a);return Object(l.useEffect)(()=>{(null==e?void 0:e.isDone)&&(e=>{const t=new Date;t.setHours(0,0,0,0);const a=t.getTime()-e;return Math.round(a/864e5)})(null==e?void 0:e.startDate)>=7&&(async()=>{await B.a.post(`${T.a}/api/generate-week`,{uid:null==a?void 0:a.uid}),t()})()},[null==e?void 0:e.isDone]),e?o.a.createElement(n.a,{pt:14,pb:3,mx:"auto",maxWidth:"1240px"},xe.map((a,n)=>{const r=e[`day${n}`];return r?o.a.createElement(Oe,{key:a,dayId:`day${n}`,title:`"${a}" nap`,day:r,refetch:t}):null})):o.a.createElement(r.a,null)};var Ce=Object(s.b)(()=>{const{userNode:e,isLoading:t}=o.a.useContext(c.a),{setVariant:a,setComponentType:l}=o.a.useContext(i.a);return o.a.useEffect(()=>{a("black"),l("public")},[]),t?o.a.createElement(n.a,{minHeight:"100vh",paddingTop:"5em"},o.a.createElement(r.a,null)):(null==e?void 0:e.generator)?o.a.createElement(we,null):o.a.createElement(Q,null)})},396:function(e,t,a){"use strict";var n=a(2),r=a(3),l=a(0),o=a(1),c=a.n(o),i=a(5),s=a(249),u=a(338),m=a(301),d=Object(m.a)(l.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),p=Object(m.a)(l.createElement("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),b=a(6);function f(e){var t=e.checked,a=e.classes,n=e.fontSize;return l.createElement("div",{className:Object(i.a)(a.root,t&&a.checked)},l.createElement(d,{fontSize:n}),l.createElement(p,{fontSize:n,className:a.layer}))}f.propTypes={checked:c.a.bool,classes:c.a.object.isRequired,fontSize:c.a.oneOf(["small","default"])};var g=Object(b.a)((function(e){return{root:{position:"relative",display:"flex","&$checked $layer":{transform:"scale(1)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.shortest})}},layer:{left:0,position:"absolute",transform:"scale(0)",transition:e.transitions.create("transform",{easing:e.transitions.easing.easeIn,duration:e.transitions.duration.shortest})},checked:{}}}),{name:"PrivateRadioButtonIcon"})(f),v=a(13),h=a(8),y=a(58),O=a(322);var E=l.createElement(g,{checked:!0}),j=l.createElement(g,null),x=l.forwardRef((function(e,t){var a=e.checked,o=e.classes,c=e.color,s=void 0===c?"secondary":c,m=e.name,d=e.onChange,p=e.size,b=void 0===p?"medium":p,f=Object(r.a)(e,["checked","classes","color","name","onChange","size"]),g=l.useContext(O.a),v=a,x=Object(y.a)(d,g&&g.onChange),w=m;return g&&(void 0===v&&(v=g.value===e.value),void 0===w&&(w=g.name)),l.createElement(u.a,Object(n.a)({color:s,type:"radio",icon:l.cloneElement(j,{fontSize:"small"===b?"small":"default"}),checkedIcon:l.cloneElement(E,{fontSize:"small"===b?"small":"default"}),classes:{root:Object(i.a)(o.root,o["color".concat(Object(h.a)(s))]),checked:o.checked,disabled:o.disabled},name:w,checked:v,onChange:x,ref:t},f))}));x.propTypes={checked:c.a.bool,checkedIcon:c.a.node,classes:c.a.object,color:c.a.oneOf(["default","primary","secondary"]),disabled:c.a.bool,disableRipple:c.a.bool,icon:c.a.node,id:c.a.string,inputProps:c.a.object,inputRef:s.a,name:c.a.string,onChange:c.a.func,required:c.a.bool,size:c.a.oneOf(["medium","small"]),value:c.a.any};t.a=Object(b.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(v.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(v.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiRadio"})(x)},397:function(e,t,a){"use strict";var n=a(2),r=a(57),l=a(3),o=a(0),c=a(1),i=a.n(c),s=a(5),u=a(6),m=o.forwardRef((function(e,t){var a=e.classes,r=e.className,c=e.row,i=void 0!==c&&c,u=Object(l.a)(e,["classes","className","row"]);return o.createElement("div",Object(n.a)({className:Object(s.a)(a.root,r,i&&a.row),ref:t},u))}));m.propTypes={children:i.a.node,classes:i.a.object,className:i.a.string,row:i.a.bool};var d=Object(u.a)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(m),p=a(7),b=a(320),f=a(322),g=a(327),v=o.forwardRef((function(e,t){var a=e.actions,c=e.children,i=e.name,s=e.value,u=e.onChange,m=Object(l.a)(e,["actions","children","name","value","onChange"]),v=o.useRef(null),h=Object(b.a)({controlled:s,default:e.defaultValue,name:"RadioGroup"}),y=Object(r.a)(h,2),O=y[0],E=y[1];o.useImperativeHandle(a,(function(){return{focus:function(){var e=v.current.querySelector("input:not(:disabled):checked");e||(e=v.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var j=Object(p.a)(t,v),x=Object(g.a)(i);return o.createElement(f.a.Provider,{value:{name:x,onChange:function(e){E(e.target.value),u&&u(e,e.target.value)},value:O}},o.createElement(d,Object(n.a)({role:"radiogroup",ref:j},m),c))}));v.propTypes={children:i.a.node,defaultValue:i.a.oneOfType([i.a.arrayOf(i.a.string),i.a.number,i.a.string]),name:i.a.string,onChange:i.a.func,value:i.a.any};t.a=v},424:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return T}));var n=a(0),r=a.n(n),l=a(10),o=a(156),c=a(275),i=a(408),s=a(397),u=a(410),m=a(396),d=a(409),p=a(286),b=a(422),f=a(281),g=a(411),v=a(312),h=(a(43),a(274)),y=a(289),O=a(103),E=a(72),j=a.n(E),x=a(36),w=a(101);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(Object(a),!0).forEach((function(t){N(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function N(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const P={email:"",firstName:"",lastName:"",isLoading:!1,gender:v.a.OTHER},S=(e,t)=>k(k({},e),t);var D=a(288);var R=()=>Object(D.a)({form:{maxWidth:600},cancelButton:{color:"black",borderColor:"black"}});const I=Object(h.a)(R);var z=()=>{const{cancelButton:e,form:t}=I(),{t:a}=Object(y.a)(),{user:r}=Object(n.useContext)(x.a),[{data:l,loading:o},c]=Object(O.a)(`${w.a}/api/get-user-by-id/${null==r?void 0:r.uid}`),[i,s]=Object(n.useReducer)(S,P),u=()=>{s({email:l.email,firstName:l.firstName,lastName:l.lastName,gender:l.gender})};Object(n.useEffect)(()=>{r&&c()},[r]),Object(n.useEffect)(()=>{l&&u()},[l]);return{data:l,cancelButton:e,form:t,onSubmit:async e=>{if(e.preventDefault(),r)try{s({isLoading:!0}),await j.a.put(`${w.a}/api/update-user/${r.uid}`,i),c()}catch(e){alert(e.message)}finally{s({isLoading:!1})}},loading:o||i.isLoading,state:i,dispatch:s,setInitialState:u,t:a}};var $=()=>{const{data:e,onSubmit:t,form:a,t:n,state:l,dispatch:o,cancelButton:h,setInitialState:y,loading:O}=z();return e?r.a.createElement(p.a,{pt:14,ml:10,minHeight:"100vh"},r.a.createElement(f.a,{style:{fontSize:20}},n("profile.personalData")),r.a.createElement("form",{className:a,onSubmit:t},r.a.createElement(p.a,{my:4,display:"flex",justifyContent:"space-between"},r.a.createElement(b.a,{style:{marginRight:16},fullWidth:!0,required:!0,InputLabelProps:{required:!1},value:l.lastName,onChange:e=>o({lastName:e.target.value}),name:"lastName",label:n("auth.lastName")}),r.a.createElement(b.a,{style:{marginLeft:16},fullWidth:!0,required:!0,InputLabelProps:{required:!1},value:l.firstName,onChange:e=>o({firstName:e.target.value}),name:"firstName",label:n("auth.firstName")})),r.a.createElement(b.a,{fullWidth:!0,required:!0,InputLabelProps:{required:!1},value:l.email,onChange:e=>o({email:e.target.value}),name:"email",type:"email",label:n("common.email")}),r.a.createElement(p.a,{m:4}),r.a.createElement(i.a,{component:"fieldset"},r.a.createElement(d.a,{component:"legend"},n("auth.gender")),r.a.createElement(s.a,{value:l.gender,onChange:e=>o({gender:e.target.value})},r.a.createElement(u.a,{value:v.a.OTHER,control:r.a.createElement(m.a,{color:"primary"}),label:n("auth.other")}),r.a.createElement(u.a,{value:v.a.FEMALE,control:r.a.createElement(m.a,{color:"primary"}),label:n("auth.female")}),r.a.createElement(u.a,{value:v.a.MALE,control:r.a.createElement(m.a,{color:"primary"}),label:n("auth.male")}))),r.a.createElement(p.a,{mt:4,display:"flex",justifyContent:"space-between"},r.a.createElement(c.a,{className:h,onClick:y,type:"button",color:"primary",variant:"outlined"},n("common.cancel")),r.a.createElement(c.a,{endIcon:O&&r.a.createElement(g.a,{size:16}),disabled:O,type:"submit",color:"primary",variant:"contained"},n("common.save"))))):r.a.createElement(g.a,null)},B=a(341);var T=({match:e})=>r.a.createElement(r.a.Fragment,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:`${e.path}/personal-data`,component:$}),r.a.createElement(l.b,{path:`${e.path}/workout-plan`,component:B.a}),r.a.createElement(l.a,{to:"/"})),r.a.createElement(o.a,null))}}]);