(this.webpackJsonpsim=this.webpackJsonpsim||[]).push([[22],{1e3:function(e,t,n){"use strict";var a=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(74)),o=n(0),i=(0,r.default)((0,o.jsx)("path",{d:"M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"}),"Assignment");t.default=i},1011:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"h",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"g",(function(){return u})),n.d(t,"i",(function(){return s})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return h}));var a=n(40),r=n(43);function o(){var e={method:"GET",headers:new Headers({Authorization:Object(r.c)()}),mode:"cors",cache:"default"};return fetch(a.i+"/api/forms/advanced-search",e).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function i(e){var t={method:"GET",headers:new Headers({Authorization:Object(r.c)()}),mode:"cors",cache:"default"},n=a.i+"/api/forms/options/"+e;return fetch(n,t).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function c(e,t){var n={method:"GET",headers:new Headers({Authorization:Object(r.c)()}),mode:"cors",cache:"default"},o=a.i+e.schema.url+t;return fetch(o,n).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function l(){var e={method:"GET",headers:new Headers({Authorization:Object(r.c)()}),mode:"cors",cache:"default"};return fetch(a.i+"/forms",e).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new Headers({Authorization:Object(r.c)(),"Content-Type":"application/json"}),o="/forms/"+e,i={method:"POST",headers:n,mode:"cors",cache:"default",body:JSON.stringify(t)};return fetch(a.i+o,i).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function s(e,t){var n="/forms/"+e,o={method:"PUT",headers:new Headers({Authorization:Object(r.c)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch(a.i+n,o).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function d(e){var t={method:"POST",headers:new Headers({Authorization:Object(r.c)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:e};return fetch(a.i+"/forms",t).then((function(e){return 201!==e.status?Promise.reject(e):e.json()}))}function f(e){var t="/forms/"+e,n={method:"DELETE",headers:new Headers({Authorization:Object(r.c)()}),mode:"cors",cache:"default"};return fetch(a.i+t,n).then((function(e){if(204!==e.status)return Promise.reject(e)}))}function h(e){var t="/forms/duplicate/"+e,n={method:"POST",headers:new Headers({Authorization:Object(r.c)(),"Content-Type":"application/json"}),mode:"cors",cache:"default"};return fetch(a.i+t,n).then((function(e){if(201!==e.status)return Promise.reject(e)}))}},1065:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(2),i=n(10),c=n(884),l=n(17),u=o.forwardRef((function(e,t){var n=e.classes,l=e.className,u=e.raised,s=void 0!==u&&u,d=Object(r.a)(e,["classes","className","raised"]);return o.createElement(c.a,Object(a.a)({className:Object(i.a)(n.root,l),elevation:s?8:1,ref:t},d))}));t.a=Object(l.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)},1072:function(e,t,n){"use strict";var a=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(74)),o=n(0),i=(0,r.default)((0,o.jsx)("path",{d:"M4 7v2c0 .55-.45 1-1 1H2v4h1c.55 0 1 .45 1 1v2c0 1.65 1.35 3 3 3h3v-2H7c-.55 0-1-.45-1-1v-2c0-1.3-.84-2.42-2-2.83v-.34C5.16 11.42 6 10.3 6 9V7c0-.55.45-1 1-1h3V4H7C5.35 4 4 5.35 4 7zm17 3c-.55 0-1-.45-1-1V7c0-1.65-1.35-3-3-3h-3v2h3c.55 0 1 .45 1 1v2c0 1.3.84 2.42 2 2.83v.34c-1.16.41-2 1.52-2 2.83v2c0 .55-.45 1-1 1h-3v2h3c1.65 0 3-1.35 3-3v-2c0-.55.45-1 1-1h1v-4h-1z"}),"DataObject");t.default=i},1078:function(e,t,n){"use strict";var a=n(3),r=n(9),o=n(2),i=n(10),c=n(17),l=n(176),u=o.forwardRef((function(e,t){var n=e.action,c=e.avatar,u=e.classes,s=e.className,d=e.component,f=void 0===d?"div":d,h=e.disableTypography,m=void 0!==h&&h,p=e.subheader,v=e.subheaderTypographyProps,b=e.title,g=e.titleTypographyProps,E=Object(r.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),y=b;null==y||y.type===l.a||m||(y=o.createElement(l.a,Object(a.a)({variant:c?"body2":"h5",className:u.title,component:"span",display:"block"},g),y));var j=p;return null==j||j.type===l.a||m||(j=o.createElement(l.a,Object(a.a)({variant:c?"body2":"body1",className:u.subheader,color:"textSecondary",component:"span",display:"block"},v),j)),o.createElement(f,Object(a.a)({className:Object(i.a)(u.root,s),ref:t},E),c&&o.createElement("div",{className:u.avatar},c),o.createElement("div",{className:u.content},y,j),n&&o.createElement("div",{className:u.action},n))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(u)},1081:function(e,t,n){"use strict";var a=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(74)),o=n(0),i=(0,r.default)((0,o.jsx)("path",{d:"M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z"}),"FormatShapes");t.default=i},1112:function(e,t,n){"use strict";var a=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(74)),o=n(0),i=(0,r.default)((0,o.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=i},1113:function(e,t,n){"use strict";var a=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(74)),o=n(0),i=(0,r.default)((0,o.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=i},1191:function(e,t,n){"use strict";var a=n(2),r=n(218);t.a=Object(r.a)(a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")},1577:function(e,t,n){"use strict";n.r(t),n.d(t,"BloqueContenido",(function(){return J}));var a=n(35),r=n(2),o=n.n(r),i=n(38),c=n(971),l=n(56),u=n(151),s=n(972),d=n.n(s),f=n(979),h=n.n(f),m=n(1081),p=n.n(m),v=n(1072),b=n.n(v),g=n(966),E=n(965),y=n(1065),j=n(1078),x=n(950),w=n(335),O=n(882),T=n(1436),C=n(516),B=n(512),k=n(1113),z=n.n(k),R=n(1112),S=n.n(R),H=n(57),M=n(1191),P=n(211),A=n.n(P),N=n(995),V=n.n(N),q=n(1e3),_=n.n(q),L=n(964),F=Object(B.a)((function(e){return{bloque:{padding:"10px",backgroundColor:"rgba(255,255,255,.9)",margin:5,width:"100%",height:"100%",overflow:"auto",position:"relative",borderRadius:10,border:"3px solid #fff","&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:"#56749a",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:"#56749a"},"&::-webkit-scrollbar-thumb:active":{background:"#56749a"},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}},tituloBloque:{top:0,fontSize:15,fontWeight:"bold",padding:"10px 15px",position:"sticky",zIndex:10,width:"100%",left:0,background:"#e6e6e6",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#56749a",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},breadcrumbs:{padding:"5px 15px",background:"#56749a",position:"sticky",color:"#fff",borderBottomLeftRadius:10,borderBottomRightRadius:10,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},linkBreadcrumb:{color:"#fff",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:200,display:"inline-block","&:hover":{color:"#fff"}},selectedBread:{color:"#fff !important",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:150,backgroundColor:"rgba(255,255,255,.2)",display:"inline-block",padding:"0 5px",borderRadius:2},columnas:{display:"flex",height:"calc(100vh - 150px)"},card:{marginTop:5,marginBottom:5,"& .MuiCardHeader-root":{padding:"5px 10px",borderBottom:"1px solid #ececec","& .MuiCardHeader-content":{"& .MuiTypography-root":{fontSize:"14px",fontWeight:"bold",fontFamily:"Montserrat",color:"rgb(86, 116, 154)"}}}},btn_color:{color:"#869bb7",padding:5,width:30,height:30,margin:"0 2px",border:"1px solid #c6d0dd","&:hover":{color:"#fff",backgroundColor:"#56749a"},"& .MuiSvgIcon-root":{width:14}}}})),D=function(e){var t=F(),n=Object(r.useState)(!1),i=Object(a.a)(n,2),c=i[0],l=i[1];return o.a.createElement(y.a,{className:t.card},o.a.createElement(j.a,{title:e.title,action:o.a.createElement(x.a,{disableGutters:!0,variant:"dense"},o.a.createElement(H.Link,{to:"/types/".concat(e.slug)},o.a.createElement(w.a,{className:t.btn_color,size:"small","aria-label":"settings"},o.a.createElement(d.a,null))),o.a.createElement(w.a,{className:t.btn_color,size:"small","aria-label":"settings",onClick:function(){e.onDeleted(e.slug)}},o.a.createElement(M.a,null)),o.a.createElement(w.a,{size:"small","aria-label":"settings",onClick:function(){return l(!c)}},c?o.a.createElement(S.a,null):o.a.createElement(z.a,null)))}),o.a.createElement(O.a,{in:c,timeout:"auto",unmountOnExit:!0},o.a.createElement(T.a,null,e.description)))},J=function(e){var t=F();return o.a.createElement(C.a,{className:t.bloque,style:e.style},e.title&&o.a.createElement(C.a,{className:t.tituloBloque},e.title),e.topBar&&o.a.createElement(o.a.Fragment,null,e.topBar),e.children)};t.default=Object(l.b)((function(e){return{user:e.auth.user}}),u.a)((function(e){Object(i.m)().id;var t=F(),n=Object(r.useState)(null),l=Object(a.a)(n,2),u=(l[0],l[1],Object(r.useState)([])),s=Object(a.a)(u,2),d=s[0],f=s[1];Object(r.useEffect)((function(){c.b().then((function(e){f(e)}),(function(e){console.log(e)}))}),[]);var m=function(e){A.a.fire({title:"\xbfEst\xe1s seguro?",text:"Tambi\xe9n se eliminar\xe1n todos los recursos asociados a este tipo de contenido",icon:"warning",showCancelButton:!0,confirmButtonText:"Eliminar",cancelButtonText:"Cancelar"}).then((function(t){t.isConfirmed&&c.a(e).then((function(t){f(d.filter((function(t){return t.slug!==e})))}),(function(e){console.log(e)}))}))},v=function(t){e.history.push("".concat(t))};return o.a.createElement(E.a,null,o.a.createElement(g.a,{userRoles:e.user.roles,list:function(){var t=[];return(e.user.roles.includes("admin")||e.user.roles.includes("editor"))&&t.push({name:"Agregar tipo de contenido",icon:o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,null),o.a.createElement(h.a,null)),action:"new",callback:function(){return v("/types/new")}}),(e.user.roles.includes("admin")||e.user.roles.includes("editor"))&&t.push({name:"Est\xe1ndares de metadatos",icon:o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,null)),callback:function(){return v("/forms")}}),(e.user.roles.includes("admin")||e.user.roles.includes("editor"))&&t.push({name:"Descargar tipo de contenido",icon:o.a.createElement(o.a.Fragment,null,o.a.createElement(V.a,null),o.a.createElement(_.a,null)),callback:function(){A.a.fire({title:"\xbfEst\xe1s seguro?",text:"Se generar\xe1 un archivo para el tipo de contenido seleccionado",icon:"warning",showCancelButton:!0}).then((function(e){e.isConfirmed&&L.p("inventoryMaker",JSON.stringify({}),"bulk-types").then((function(e){A.a.fire({title:"Procesamiento iniciado",text:e.msg,icon:"success",confirmButtonText:"Aceptar"})})).catch((function(e){e.json().then((function(e){A.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"})}))}))}))}}),t}()}),o.a.createElement(C.a,{className:t.columnas},o.a.createElement(J,{style:{width:"70%",maxWidth:500},title:"Tipos de contenido"},d.map((function(e,t){return o.a.createElement(D,{key:t,title:e.name,description:e.description,slug:e.slug,onDeleted:m})})))))}))},2105:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n(92),o=n(35),i=n(2),c=n.n(i),l=n(56),u=n(151),s=n(971),d=n(1011),f=n(964),h=n(512),m=n(516),p=n(889),v=n(965),b=n(966),g=n(982),E=n.n(g),y=n(1081),j=n.n(y),x=n(1577),w=n(978),O=n(40),T=n(211),C=n.n(T),B=n(967),k=Object(h.a)((function(e){return{columna:{display:"flex",height:"calc(100vh - 150px)"},error:{color:"white",backgroundColor:"#f97b7b",padding:10,borderRadius:5,marginBottom:10,"&:first-child":{marginTop:10}}}}));t.default=Object(l.b)((function(e){return{user:e.auth.user}}),u.a)((function(e){var t=k(),n=Object(i.useState)([]),l=Object(o.a)(n,2),u=l[0],h=l[1],g=Object(i.useState)([]),y=Object(o.a)(g,2),T=y[0],z=y[1],R=Object(i.useState)(!1),S=Object(o.a)(R,2),H=S[0],M=S[1],P=Object(i.useState)(null),A=Object(o.a)(P,2),N=A[0],V=A[1],q=Object(i.useState)([]),_=Object(o.a)(q,2),L=_[0],F=_[1];Object(i.useEffect)((function(){var t=[];s.b().then((function(n){if(t=n,n&&h(Object(r.a)(n)),e.match.params.slug)s.c(e.match.params.slug).then((function(e){e&&(e.msg?C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"}).then((function(){D("/types")})):(M(!0),e.metadata=e.metadata.slug,"string"===typeof e.parentType&&""!==e.parentType?e.parentType=t.find((function(t){return t.slug===e.parentType})):""===e.parentType&&(e.parentType=[]),f.h().then((function(t){F(t.options);var n=Object(a.a)({},e),r=[];n.editRoles&&(n.editRoles.forEach((function(e){var n=t.options.find((function(t){return t.id===e}));r.push(n)})),n.editRoles=r),n.viewRoles&&(r=[],n.viewRoles.forEach((function(e){var n=t.options.find((function(t){return t.id===e}));r.push(n)})),n.viewRoles=r),V(n)})).catch((function(e){e.json().then((function(e){C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"})}))}))))})).catch((function(e){e.json().then((function(e){C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"}).then((function(){D("/types")}))}))}));else{M(!1);var o={name:"",description:"",slug:"",icon:"etiqueta",hierarchical:!1,parentType:[],metadata:[],editRoles:[],viewRoles:[]};f.h().then((function(e){F(e.options);var t=Object(a.a)({},o),n=[];t.editRoles&&(t.editRoles.forEach((function(t){var a=e.options.find((function(e){return e.id===t}));n.push(a)})),t.editRoles=n),t.viewRoles&&(n=[],t.viewRoles.forEach((function(t){var a=e.options.find((function(e){return e.id===t}));n.push(a)})),t.viewRoles=n),V(t)})).catch((function(e){e.json().then((function(e){C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"})}))}))}})).catch((function(e){e.json().then((function(e){C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"})}))})),d.e().then((function(e){e&&z(e)})).catch((function(e){e.json().then((function(e){C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"})}))}))}),[]);var D=function(t){e.history.push("".concat(t))};return c.a.createElement(v.a,null,c.a.createElement(b.a,{userRoles:e.user.roles,list:function(){var t=[];return(e.user.roles.includes("admin")||e.user.roles.includes("editor"))&&t.push({name:"Volver",icon:c.a.createElement(c.a.Fragment,null,c.a.createElement(j.a,null),c.a.createElement(E.a,null)),callback:function(){return D("/types")}}),t}()}),c.a.createElement(m.a,{className:t.columna},c.a.createElement(x.BloqueContenido,{style:{width:"100%",maxWidth:700},title:"Agregar tipo de contenido"},N&&L.length>0&&c.a.createElement(w.c,{initialValues:N,onSubmit:function(t,n){var a=n.setSubmitting;H?H&&C.a.fire({title:"\xbfEst\xe1s seguro?",text:"\xbfEst\xe1s seguro que desea actualizar este tipo de contenido?",icon:"question",showCancelButton:!0,confirmButtonText:"S\xed, actualizar",cancelButtonText:"Cancelar"}).then((function(n){"sin-padre"===t.parentType&&(t.parentType=""),s.f(e.match.params.slug,JSON.stringify(t,null,2)).then((function(e){e&&D("/types")})).catch((function(e){e.json().then((function(e){C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"})}))}))})):C.a.fire({title:"\xbfEst\xe1s seguro?",text:"\xbfEst\xe1s seguro de agregar este tipo de contenido?",icon:"question",showCancelButton:!0,confirmButtonText:"S\xed, agregar",cancelButtonText:"Cancelar"}).then((function(e){"sin-padre"===t.parentType&&(t.parentType=""),s.e(JSON.stringify(t,null,2)).then((function(e){e&&D("/types")})).catch((function(e){e.json().then((function(e){C.a.fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"})}))}))})),a(!1)},validate:function(e){var t={};return e.name||(t.name="El nombre es requerido"),e.description||(t.description="La descripci\xf3n es requerida"),e.metadata&&0!==e.metadata.length||(t.metadata="El est\xe1ndar de metadatos es requerido"),t}},(function(e){var t=e.values,n=e.errors,a=(e.touched,e.handleChange),r=e.handleBlur,o=e.handleSubmit,i=e.isSubmitting,l=e.setFieldValue;return c.a.createElement("form",{onSubmit:o},c.a.createElement(m.a,{style:{display:"flex",flexDirection:"column"}},c.a.createElement(B.o,{name:"Nombre",id:"name",handleChange:a,handleBlur:r,value:t.name,errors:n.name,required:!0}),c.a.createElement(B.n,{name:"Descripci\xf3n",id:"description",handleChange:a,handleBlur:r,value:t.description,errors:n.description,required:!0}),c.a.createElement(B.o,{name:"Slug",id:"slug",handleChange:a,handleBlur:r,value:t.slug}),c.a.createElement(B.l,{name:"Icono",id:"icon",handleChange:a,handleBlur:r,value:t.icon,options:O.h}),c.a.createElement(B.f,{name:"Roles de edici\xf3n",id:"editRoles",handleBlur:r,value:t.editRoles,options:L,handleChange:function(e){l("editRoles",e)}}),c.a.createElement(B.f,{name:"Roles de visualizaci\xf3n",id:"viewRoles",handleBlur:r,value:t.viewRoles,options:L,handleChange:function(e){l("viewRoles",e)}}),!H&&c.a.createElement(c.a.Fragment,null,u.length>0&&c.a.createElement(B.f,{name:"Tipo padre",id:"parentType",handleBlur:r,value:t.parentType,options:u.map((function(e){return{id:e.slug,term:e.name}})),handleChange:function(e){l("parentType",e)}}),T.length>0&&c.a.createElement(B.l,{name:"Est\xe1ndar de metadatos",id:"metadata",handleChange:a,handleBlur:r,value:t.metadata,required:!0,options:T.map((function(e){return{value:e.slug,label:e.name}}))}),c.a.createElement(B.g,{name:"Jer\xe1rquico",id:"hierarchical",handleChange:a,handleBlur:r,value:t.hierarchical}),c.a.createElement(m.a,{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:10}},c.a.createElement(p.a,{type:"button",variant:"outlined",onClick:function(){return D("/types")}},"Cancelar"),c.a.createElement(p.a,{type:"submit",variant:"outlined",disabled:i},"Guardar"))),H&&c.a.createElement(c.a.Fragment,null,u.length>0&&c.a.createElement(B.f,{name:"Tipo padre",id:"parentType",handleBlur:r,value:t.parentType,options:u.map((function(e){return{id:e.slug,term:e.name}})),handleChange:function(e){l("parentType",e)}}),T.length>0&&c.a.createElement(B.l,{name:"Est\xe1ndar de metadatos",id:"metadata",handleChange:a,handleBlur:r,value:t.metadata,required:!0,options:T.map((function(e){return{value:e.slug,label:e.name}}))}),c.a.createElement(B.g,{name:"Jer\xe1rquico",id:"hierarchical",handleChange:a,handleBlur:r,value:t.hierarchical}),c.a.createElement(m.a,{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:10}},c.a.createElement(p.a,{type:"button",variant:"outlined",onClick:function(){return D("/types")}},"Cancelar"),c.a.createElement(p.a,{type:"submit",variant:"outlined",disabled:i},"Actualizar")))))})))))}))},972:function(e,t,n){"use strict";var a=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(74)),o=n(0),i=(0,r.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=i},979:function(e,t,n){"use strict";var a=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(74)),o=n(0),i=(0,r.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=i},995:function(e,t,n){"use strict";var a=n(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(74)),o=n(0),i=(0,r.default)((0,o.jsx)("path",{d:"M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"}),"Download");t.default=i}}]);
//# sourceMappingURL=22.d854997e.chunk.js.map