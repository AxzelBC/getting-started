(this.webpackJsonpsim=this.webpackJsonpsim||[]).push([[16],{1005:function(e,t,a){"use strict";a.r(t),a.d(t,"useStyles",(function(){return B})),a.d(t,"TarjetaItem",(function(){return M})),a.d(t,"BloqueContenido",(function(){return R}));var n=a(37),r=a(2),l=a.n(r),o=a(38),i=a(970),c=a(51),u=a(139),s=a(956),d=a.n(s),m=a(957),f=a.n(m),b=a(976),h=a.n(b),p=a(962),v=a.n(p),g=a(952),E=a(953),w=a(1030),k=a(1031),y=a(935),x=a(506),O=a(941),j=a(857),S=a(62),C=a(984),B=Object(j.a)((function(e){return{bloque:{padding:"10px",backgroundColor:"rgba(255,255,255,.9)",margin:5,width:"100%",height:"100%",overflow:"auto",position:"relative",borderRadius:10,border:"3px solid #fff","&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:"#56749a",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:"#56749a"},"&::-webkit-scrollbar-thumb:active":{background:"#56749a"},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}},tituloBloque:{top:0,fontSize:15,fontWeight:"bold",padding:"10px 15px",position:"sticky",zIndex:10,width:"100%",left:0,background:"#e6e6e6",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#56749a",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},breadcrumbs:{padding:"5px 15px",background:"#56749a",position:"sticky",color:"#fff",borderBottomLeftRadius:10,borderBottomRightRadius:10,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},linkBreadcrumb:{color:"#fff",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:200,display:"inline-block","&:hover":{color:"#fff"}},selectedBread:{color:"#fff !important",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:150,backgroundColor:"rgba(255,255,255,.2)",display:"inline-block",padding:"0 5px",borderRadius:2},columnas:{display:"flex",height:"calc(100vh - 150px)"},card:{marginTop:5,marginBottom:5,"& .MuiCardHeader-root":{padding:"5px 10px",borderBottom:"1px solid #ececec","& .MuiCardHeader-content":{"& .MuiTypography-root":{fontSize:"14px",fontWeight:"bold",fontFamily:"Montserrat",color:"rgb(86, 116, 154)"}}}},btn_color:{color:"#869bb7",padding:5,width:30,height:30,margin:"0 2px",border:"1px solid #c6d0dd","&:hover":{color:"#fff",backgroundColor:"#56749a"},"& .MuiSvgIcon-root":{width:14}},cardTitle:{fontSize:"14px",fontWeight:"500 !important",color:"rgb(86, 116, 154)"}}})),M=function(e){var t=B(),a=Object(r.useState)(!1),o=Object(n.a)(a,2);o[0],o[1];return l.a.createElement(w.a,{className:t.card},l.a.createElement(k.a,{title:e.title,classes:{title:t.cardTitle},action:l.a.createElement(y.a,{disableGutters:!0,variant:"dense"},l.a.createElement(S.Link,{to:"/".concat(e.link?e.link:"lists","/").concat(e.id)},l.a.createElement(x.a,{className:t.btn_color,size:"small","aria-label":"settings"},l.a.createElement(d.a,null))),l.a.createElement(x.a,{className:t.btn_color,size:"small","aria-label":"delete",onClick:function(){e.onDeleted(e.id)}},l.a.createElement(C.a,null)))}))},R=function(e){var t=B();return l.a.createElement(O.a,{className:t.bloque,style:e.style},e.title&&l.a.createElement(O.a,{className:t.tituloBloque},e.title),e.topBar&&l.a.createElement(l.a.Fragment,null,e.topBar),e.children)};t.default=Object(c.b)((function(e){return{user:e.auth.user}}),u.a)((function(e){Object(o.m)().id;var t=B(),a=Object(r.useState)(null),c=Object(n.a)(a,2),u=(c[0],c[1],Object(r.useState)([])),s=Object(n.a)(u,2),d=s[0],m=s[1];Object(r.useEffect)((function(){i.c().then((function(e){m(e)})).catch((function(e){console.log(e)}))}),[]);var b=function(t){e.history.push("".concat(t))};return l.a.createElement(E.a,null,l.a.createElement(g.a,{userRoles:e.user.roles,list:function(){var t=[];return e.user.roles.includes("admin")&&t.push({name:"Agregar listado",icon:l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,null),l.a.createElement(f.a,null)),action:"new",callback:function(){return b("/lists/new")}}),e.user.roles.includes("admin")&&t.push({name:"Est\xe1ndares de metadatos",icon:l.a.createElement(l.a.Fragment,null,l.a.createElement(v.a,null)),callback:function(){return b("/forms")}}),t}()}),l.a.createElement(O.a,{className:t.columnas},l.a.createElement(R,{style:{width:"70%",maxWidth:500},title:"Listados"},d.map((function(e,t){return l.a.createElement(M,{key:t,title:e.name,description:e.description,id:e.id,onDeleted:function(e){i.b(e).then((function(e){i.c().then((function(e){m(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}})})))))}))},1061:function(e,t,a){"use strict";var n=a(23);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(32)),l=a(0);t.default=(0,r.default)((0,l.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.89-2-2-2m0 16H5V7h14zm-5.5-6c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M12 9c-2.73 0-5.06 1.66-6 4 .94 2.34 3.27 4 6 4s5.06-1.66 6-4c-.94-2.34-3.27-4-6-4m0 6.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Preview")},1405:function(e,t,a){"use strict";a.r(t);var n=a(18),r=a(37),l=a(2),o=a.n(l),i=a(51),c=a(139),u=a(953),s=a(952),d=a(958),m=a.n(d),f=a(1061),b=a.n(f),h=a(1005),p=a(941),v=a(960),g=a(1421),E=a(954),w=a(1057),k=a(1e3),y=a(961);t.default=Object(i.b)((function(e){return{user:e.auth.user}}),c.a)((function(e){var t=Object(h.useStyles)(),a=Object(l.useState)(!1),i=Object(r.a)(a,2),c=i[0],d=i[1],f=Object(l.useState)(null),x=Object(r.a)(f,2),O=x[0],j=x[1],S=Object(l.useState)([]),C=Object(r.a)(S,2),B=C[0],M=C[1];Object(l.useEffect)((function(){e.match.params.slug?(d(!0),k.c(e.match.params.slug).then((function(e){var t=Object(n.a)({},e);console.log(e),t.parent=[{id:e.parent}],j(t)})).catch((function(e){console.log(e)}))):(d(!1),j({name:"",slug:"",description:"",root:null,parent:null,visible:[]})),y.b().then((function(e){M(e)})).catch((function(e){console.log(e)}))}),[]);return o.a.createElement(u.a,null,o.a.createElement(s.a,{userRoles:e.user.roles,list:function(){var t=[];return e.user.roles.includes("admin")&&t.push({name:"Volver",icon:o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,null),o.a.createElement(m.a,null)),callback:function(){return e.history.push("/views")}}),t}()}),o.a.createElement(p.a,{className:t.columna},o.a.createElement(h.BloqueContenido,{style:{width:"100%",maxWidth:700},title:"Agregar vista de consulta"},O&&o.a.createElement(v.c,{initialValues:O,onSubmit:function(t,a){var r=a.setSubmitting;if(r(!0),c){var l=Object(n.a)({},t);l.parent?l.parent=l.parent[0].id:l.parent="",k.f(e.match.params.slug,JSON.stringify(l)).then((function(){r(!1),e.history.push("/views")})).catch((function(e){console.log(e),r(!1)}))}else{var o=Object(n.a)({},t);o.parent?o.parent=o.parent[0].id:o.parent="",k.a(JSON.stringify(o)).then((function(){r(!1),e.history.push("/views")})).catch((function(e){console.log(e),r(!1)}))}r(!1)},validate:function(e){var t={};return e.name||(t.name="El nombre es requerido"),e.root||(t.root="El tipo de archivo inicial es requerido"),t}},(function(t){var a=t.values,n=t.errors,r=(t.touched,t.handleChange),l=t.handleBlur,i=t.handleSubmit,u=t.isSubmitting,s=t.setFieldValue;return o.a.createElement("form",{onSubmit:i},o.a.createElement(p.a,{style:{display:"flex",flexDirection:"column"}},o.a.createElement(E.o,{name:"Nombre",id:"name",handleChange:r,handleBlur:l,value:a.name,errors:n.name,required:!0}),o.a.createElement(E.o,{name:"Slug",id:"slug",handleChange:r,handleBlur:l,value:a.slug,errors:n.slug,required:!0}),o.a.createElement(E.n,{name:"Descripci\xf3n",id:"description",handleChange:r,handleBlur:l,value:a.description}),o.a.createElement(E.l,{name:"Inicio de la consulta",id:"root",value:a.root,options:B.map((function(e){return{value:e.slug,label:e.name}})),handleChange:function(e){s("root",e.target.value)},handleBlur:function(){},instructions:"Seleccione el tipo de contenido desde donde se iniciar\xe1 la consulta.",required:!0,error:n.root}),a.root&&o.a.createElement(w.a,{postType:a.root,view:"list",checkboxTypes:[a.root],multiple:!1,setSelected:function(e){s("parent",e)},key:a.root,selected:a.parent}),B&&o.a.createElement(E.r,{id:"visible",label:"Tipos de contenido visibles",options:B.map((function(e){return{value:e.slug,label:e.name}})),value:a.visible,handleChange:function(e){s("visible",e)}}),!c&&o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:10}},o.a.createElement(g.a,{type:"button",variant:"outlined",onClick:function(){return e.history.push("/views")}},"Cancelar"),o.a.createElement(g.a,{type:"submit",variant:"outlined",disabled:u},"Guardar"))),c&&o.a.createElement(p.a,{style:{display:"flex",justifyContent:"flex-end",gap:10,marginTop:10}},o.a.createElement(g.a,{type:"button",variant:"outlined",onClick:function(){return e.history.push("/views")}},"Cancelar"),o.a.createElement(g.a,{type:"submit",variant:"outlined",disabled:u},"Actualizar"))))})))))}))},962:function(e,t,a){"use strict";var n=a(23);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(32)),l=a(0);t.default=(0,r.default)((0,l.jsx)("path",{d:"M4 7v2c0 .55-.45 1-1 1H2v4h1c.55 0 1 .45 1 1v2c0 1.65 1.35 3 3 3h3v-2H7c-.55 0-1-.45-1-1v-2c0-1.3-.84-2.42-2-2.83v-.34C5.16 11.42 6 10.3 6 9V7c0-.55.45-1 1-1h3V4H7C5.35 4 4 5.35 4 7m17 3c-.55 0-1-.45-1-1V7c0-1.65-1.35-3-3-3h-3v2h3c.55 0 1 .45 1 1v2c0 1.3.84 2.42 2 2.83v.34c-1.16.41-2 1.52-2 2.83v2c0 .55-.45 1-1 1h-3v2h3c1.65 0 3-1.35 3-3v-2c0-.55.45-1 1-1h1v-4z"}),"DataObject")},984:function(e,t,a){"use strict";var n=a(2),r=a(211);t.a=Object(r.a)(n.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete")}}]);
//# sourceMappingURL=16.215e5576.chunk.js.map