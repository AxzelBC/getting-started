"use strict";(self.webpackChunkarchihub=self.webpackChunkarchihub||[]).push([[2826],{19541:function(e,t,n){n.d(t,{AI:function(){return g},Xm:function(){return f}});var r=n(5544),o=n(65043),i=n(34535),a=n(19227),l=n(749),s=n(16702),c=n(31445),u=n(98344),d=n(65892),p=n(70579),f=(0,i.Ay)(a.A)((function(e){var t=e.theme;return{backgroundColor:"white",height:t.spacing(3),color:t.palette.secondary.dark,border:"none",whiteSpace:"nowrap",textOverflow:"ellipsis",maxWidth:200,"& svg":{width:15,marginLeft:10,marginRight:0},"& path":{fill:t.palette.secondary.main},"&:hover":{backgroundColor:t.palette.secondary.light,color:t.palette.secondary.dark,"& path":{fill:t.palette.secondary.main}}}})),g=(0,i.Ay)(a.A)((function(e){var t=e.theme;return{backgroundColor:t.palette.primary.light,height:t.spacing(3),color:t.palette.primary.main,border:"none",whiteSpace:"nowrap",textOverflow:"ellipsis",maxWidth:200,"& svg":{width:15,marginLeft:10,marginRight:0},"& path":{fill:t.palette.primary.main}}})),h=function(e){var t=(0,o.useState)([]),n=(0,r.A)(t,2),i=n[0],a=n[1];return(0,o.useEffect)((function(){e.type&&e.slug&&c.sF(e.slug,e.type).then((function(e){var t=d.UMr(d.t55);a(e.map((function(e,n){return e.color=t(e._id),e})))})).catch((function(e){console.log(e)}))}),[]),(0,p.jsxs)(l.A,{style:{margin:"5px",maxWidth:"600px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:["timeCreated"===e.type&&i.length>0&&(0,p.jsx)(u.bl,{data:i,legend:!0,scaleType:"time"}),"statusCount"===e.type&&i.length>0&&(0,p.jsx)(u.RJ,{data:i,legend:!0}),"authorCount"===e.type&&i.length>0&&(0,p.jsx)(u._8,{data:i,legend:!0})]})};t.Ay=function(e){return(0,p.jsxs)(s.A,{style:{display:"flex",width:"100%"},children:[(0,p.jsx)(h,{type:"timeCreated",slug:e.selectedType.slug}),(0,p.jsx)(h,{type:"statusCount",slug:e.selectedType.slug}),(0,p.jsx)(h,{type:"authorCount",slug:e.selectedType.slug})]})}},60083:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(5544),o=n(65043),i=n(15089),a=n(46068),l=n(73216),s=n(83003),c=n(85211),u=n(78717),d=n(46020),p=n(58140),f=n(53480),g=n(60436),h=n(64467),m=n(58168),v=n(98587),y=(n(30805),n(69292)),x=n(98610),A=n(58123),b=n(34535),j=n(98206),w=n(85865),C=n(67266),S=n(59662),_=n(70579),k=(0,S.A)((0,_.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),M=n(41538),P=["slots","slotProps"],R=(0,b.Ay)(M.A)((function(e){var t=e.theme;return(0,m.A)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,m.A)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,m.A)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,C.tL)(t.palette.grey[200],.12)}:{backgroundColor:(0,C.tL)(t.palette.grey[600],.12)})})})),T=(0,b.Ay)(k)({width:24,height:16});var I=function(e){var t=e.slots,n=void 0===t?{}:t,r=e.slotProps,o=void 0===r?{}:r,i=(0,v.A)(e,P),a=e;return(0,_.jsx)("li",{children:(0,_.jsx)(R,(0,m.A)({focusRipple:!0},i,{ownerState:a,children:(0,_.jsx)(T,(0,m.A)({as:n.CollapsedIcon,ownerState:a},o.collapsedIcon))}))})},N=n(92532),z=n(72372);function E(e){return(0,z.Ay)("MuiBreadcrumbs",e)}var B=(0,N.A)("MuiBreadcrumbs",["root","ol","li","separator"]),L=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],F=(0,b.Ay)(w.A,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,h.A)({},"& .".concat(B.li),t.li),t.root]}})({}),H=(0,b.Ay)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),O=(0,b.Ay)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function D(e,t,n,r){return e.reduce((function(o,i,a){return a<e.length-1?o=o.concat(i,(0,_.jsx)(O,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(a))):o.push(i),o}),[])}var U=o.forwardRef((function(e,t){var n=(0,j.b)({props:e,name:"MuiBreadcrumbs"}),i=n.children,a=n.className,l=n.component,s=void 0===l?"nav":l,c=n.slots,u=void 0===c?{}:c,d=n.slotProps,p=void 0===d?{}:d,f=n.expandText,h=void 0===f?"Show path":f,b=n.itemsAfterCollapse,w=void 0===b?1:b,C=n.itemsBeforeCollapse,S=void 0===C?1:C,k=n.maxItems,M=void 0===k?8:k,P=n.separator,R=void 0===P?"/":P,T=(0,v.A)(n,L),N=o.useState(!1),z=(0,r.A)(N,2),B=z[0],O=z[1],U=(0,m.A)({},n,{component:s,expanded:B,expandText:h,itemsAfterCollapse:w,itemsBeforeCollapse:S,maxItems:M,separator:R}),W=function(e){var t=e.classes;return(0,x.A)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},E,t)}(U),G=(0,A.A)({elementType:u.CollapsedIcon,externalSlotProps:p.collapsedIcon,ownerState:U}),X=o.useRef(null),q=o.Children.toArray(i).filter((function(e){return o.isValidElement(e)})).map((function(e,t){return(0,_.jsx)("li",{className:W.li,children:e},"child-".concat(t))}));return(0,_.jsx)(F,(0,m.A)({ref:t,component:s,color:"text.secondary",className:(0,y.A)(W.root,a),ownerState:U},T,{children:(0,_.jsx)(H,{className:W.ol,ref:X,ownerState:U,children:D(B||M&&q.length<=M?q:function(e){return S+w>=e.length?e:[].concat((0,g.A)(e.slice(0,S)),[(0,_.jsx)(I,{"aria-label":h,slots:{CollapsedIcon:u.CollapsedIcon},slotProps:{collapsedIcon:G},onClick:function(){O(!0);var e=X.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,g.A)(e.slice(e.length-w,e.length)))}(q),W.separator,R,U)})}))})),W=n(19541),G=n(88120),X=n(34305),q=n(29464),J=(n(76445),function(){var e,t,n,g=(0,o.useState)("metadata"),h=(0,r.A)(g,2),m=h[0],v=h[1],y=(0,o.useState)(null),x=(0,r.A)(y,2),A=x[0],b=x[1],j=(0,o.useState)(null),w=(0,r.A)(j,2),C=w[0],S=w[1],k=(0,o.useState)(null),M=(0,r.A)(k,2),P=M[0],R=M[1],T=(0,o.useState)([]),I=(0,r.A)(T,2),N=I[0],z=I[1],E=(0,o.useState)(!0),B=(0,r.A)(E,2),L=(B[0],B[1]),F=(0,l.g)(),H=F.id,O=F.slug,D=(0,l.Zp)(),J=(0,s.wA)(),K=(0,s.d4)((function(e){return e.app.filters})),Z=(0,p.M)().showAlert,V=(0,o.useState)(null),Q=(0,r.A)(V,2),Y=Q[0],$=Q[1],ee=(0,o.useState)(0),te=(0,r.A)(ee,2);te[0],te[1];(0,o.useEffect)((function(){ne()}),[H,O]);var ne=function(){H&&!O?(v("metadata"),b(null),u.HD(H).then((function(e){var t,n;if(console.log(null===(t=e.children)||void 0===t?void 0:t.filter((function(e){return"files"!==e.slug})).map((function(e){return e.slug}))[0]),L(!1),e.parents&&(e.parents=e.parents.reverse()),z([]),b(e),null!==(n=K.cataloging)&&void 0!==n&&n.single_id){if(K.cataloging.single_id!==H){var r,o=(0,c.e)(K,"cataloging","single_id",H);o=(0,c.e)(o,"cataloging","post_type_single",{slug:null===(r=e.children)||void 0===r?void 0:r.filter((function(e){return"files"!==e.slug})).map((function(e){return e.slug}))[0]}),J((0,c.vm)(o))}}else{var i,a=(0,c.e)(K,"cataloging","single_id",H);a=(0,c.e)(a,"cataloging","post_type_single",{slug:null===(i=e.children)||void 0===i?void 0:i.filter((function(e){return"files"!==e.slug})).map((function(e){return e.slug}))[0]}),J((0,c.vm)(a))}})).catch((function(e){Z("error","No se pudo obtener el recurso").then((function(){D("/")}))}))):H&&O&&($(O),v("metadata"),b(null),u.HD(H).then((function(e){var t;if(L(!1),e.parents&&(e.parents=e.parents.reverse()),null!==(t=K[O])&&void 0!==t&&t.single_id){if(K[O].single_id!==H){var n,r=(0,c.e)(K,O,"single_id",H);r=(0,c.e)(r,O,"post_type_single",null===(n=e.children)||void 0===n?void 0:n.filter((function(e){return"files"!==e.slug})).map((function(e){return e.slug}))),r=(0,c.e)(r,O,"page_single",0),r=(0,c.e)(r,O,"root_single",{id:H}),J((0,c.vm)(r))}}else{var o,i=(0,c.e)(K,O,"single_id",H);i=(0,c.e)(i,O,"post_type_single",null===(o=e.children)||void 0===o?void 0:o.filter((function(e){return"files"!==e.slug})).map((function(e){return e.slug}))),i=(0,c.e)(i,O,"page_single",0),i=(0,c.e)(i,O,"root_single",{id:H}),J((0,c.vm)(i))}b(e),d.hE(O).then((function(e){R(e.forms),S(e),z(e.types)})).catch((function(e){console.log(e)}))})).catch((function(e){Z("error","No se pudo obtener el recurso").then((function(){D("/")}))})))};return(0,_.jsx)(_.Fragment,{children:A&&(0,_.jsxs)(_.Fragment,{children:[null!==A&&void 0!==A&&A.parents?(0,_.jsx)("div",{style:{width:"100vw",overflowX:"auto",paddingTop:"10px",paddingBottom:"10px"},children:(0,_.jsxs)(U,{"aria-label":"breadcrumb",separator:(0,_.jsx)(X.A,{fontSize:"small",style:{margin:0}}),sx:{width:"1500px"},children:[A.parents.map((function(e,t){return(0,_.jsx)(W.Xm,{label:e.name,icon:G.dR.find((function(t){return t.value===e.icon})).icon,clickable:!0,onClick:function(){Y?e.id===C.parent?D("/explore/".concat(Y)):D("/explore/".concat(Y,"/detail/").concat(e.id)):D("/detail/".concat(e.id))}},t)})),(0,_.jsx)(W.AI,{label:A.metadata.firstLevel.title,icon:null===(e=G.dR.find((function(e){return e.value===(null===A||void 0===A?void 0:A.icon)})))||void 0===e?void 0:e.icon},A.id)]})}):(0,_.jsx)(W.AI,{label:null===A||void 0===A||null===(t=A.metadata)||void 0===t||null===(n=t.firstLevel)||void 0===n?void 0:n.title,icon:G.dR.find((function(e){return e.value===A.icon})).icon},A.id),(0,_.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px",borderBottom:"1px solid #e0e0e0"},children:(0,_.jsx)(i.A,{value:m,list:function(){var e=[{value:"metadata",label:"Metadatos"}];return A.children.find((function(e){return"files"===e.slug}))&&e.push({value:"files",label:"Archivos"}),A.children.find((function(e){return"files"!==e.slug}))&&e.push({value:"search",label:"Recursos"}),e}(),onChange:function(e){v(e.value)}})}),"metadata"===m&&(0,_.jsx)(a.A,{data:A,redirect:function(e){D(e)}}),"files"===m&&(0,_.jsx)(f.A,{selectedType:m.slug,resourceId:A._id,records:A._id,parents:{parents:{id:A._id}},handleClick:function(e){var t,n,r,o,i,a;null!==e&&void 0!==e&&null!==(t=e.processing)&&void 0!==t&&null!==(n=t.fileProcessing)&&void 0!==n&&n.type&&"image gallery"!==(null===e||void 0===e||null===(r=e.processing)||void 0===r||null===(o=r.fileProcessing)||void 0===o?void 0:o.type)?D("/file/".concat(e.id)):"image gallery"===(null===e||void 0===e||null===(i=e.processing)||void 0===i||null===(a=i.fileProcessing)||void 0===a?void 0:a.type)&&D("/gallery/".concat(A._id))}}),"search"===m&&(0,_.jsx)(q.M,{type:N,types:N,selectedType:m,selectedResource:A,detail:!Y,view:O||"cataloging",single:!0,forms:P,mobile:!0},m)]})})})},46020:function(e,t,n){n.d(t,{Jt:function(){return i},O8:function(){return u},UK:function(){return c},hE:function(){return a},lD:function(){return s},yo:function(){return l}});var r=n(88120),o=n(91280);function i(e){var t="/views/"+e,n={method:"GET",headers:new Headers({Authorization:(0,o.g)()}),mode:"cors",cache:"default"};return fetch(r.FM+t,n).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function a(e){var t="/views/info/"+e,n={method:"GET",headers:new Headers({Authorization:(0,o.g)()}),mode:"cors",cache:"default"};return fetch(r.FM+t,n).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function l(e,t){var n="/views/"+e,i={method:"PUT",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:t};return fetch(r.FM+n,i).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function s(e){var t="/views/"+e,n={method:"DELETE",headers:new Headers({Authorization:(0,o.g)()}),mode:"cors",cache:"default"};return fetch(r.FM+t,n).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function c(){var e={method:"GET",headers:new Headers({Authorization:(0,o.g)()}),mode:"cors",cache:"default"};return fetch(r.FM+"/views",e).then((function(e){return 200!==e.status?Promise.reject(e):e.json()}))}function u(e){var t={method:"POST",headers:new Headers({Authorization:(0,o.g)(),"Content-Type":"application/json"}),mode:"cors",cache:"default",body:e};return fetch(r.FM+"/views",t).then((function(e){return 201!==e.status?Promise.reject(e):e.json()}))}},53480:function(e,t,n){var r=n(5544),o=n(65043),i=n(65240),a=n(8168),l=n(43845),s=n(78717),c=n(65892),u=n(88120),d=n(70579),p=c.UMr(c.Ks0),f=(0,i.A)((function(e){return{btn_color:{color:"#869bb7 !important",padding:"5px !important",width:"30px !important",height:"30px !important",margin:"0 2px !important",borderRadius:"50%",border:"1px solid #c6d0dd !important","&:hover":{color:"#fff !important",backgroundColor:"#56749a !important"},"& .MuiSvgIcon-root":{width:"14px !important"}}}}));t.A=function(e){f();var t=(0,o.useState)([]),n=(0,r.A)(t,2),i=n[0],c=n[1],g=(0,o.useState)(0),h=(0,r.A)(g,2),m=h[0],v=h[1],y=(0,o.useState)(0),x=(0,r.A)(y,2),A=x[0],b=x[1];(0,o.useEffect)((function(){}),[]),(0,o.useEffect)((function(){s.tB(e.records,m,!0).then((function(e){c(e.data),b(e.total)})).catch((function(e){console.log(e)}))}),[e.records,m]);return(0,d.jsx)(a.A,{pagination:!0,resources:i,page:m,setPage:v,total:A,perpage:10,handleClick:e.handleClick,columns:[{destiny:"displayName",label:"Nombre"},{destiny:"type",label:"Tipo"},{destiny:"tag",label:"Etiqueta"}],columnSolver:function(e,t){var n,r,o,i;return(0,d.jsxs)(d.Fragment,{children:["displayName"===t.destiny&&(0,d.jsx)("span",{children:e.displayName}),"type"===t.destiny&&(null===e||void 0===e||null===(n=e.processing)||void 0===n||null===(r=n.fileProcessing)||void 0===r?void 0:r.type)&&(0,d.jsx)(l.A,{size:"small",label:u.ZC.find((function(t){return t.value===e.processing.fileProcessing.type})).label}),"tag"===t.destiny&&(0,d.jsx)(l.A,{size:"small",label:e.tag,style:{backgroundColor:p(e.tag),color:"#fff"}}),"type"===t.destiny&&!(null!==e&&void 0!==e&&null!==(o=e.processing)&&void 0!==o&&null!==(i=o.fileProcessing)&&void 0!==i&&i.type)&&(0,d.jsx)(l.A,{size:"small",label:"Sin procesar"})]})}})}},749:function(e,t,n){var r=n(58168),o=n(80045),i=n(65043),a=n(43024),l=n(20495),s=n(47573),c=i.forwardRef((function(e,t){var n=e.classes,s=e.className,c=e.raised,u=void 0!==c&&c,d=(0,o.A)(e,["classes","className","raised"]);return i.createElement(l.A,(0,r.A)({className:(0,a.default)(n.root,s),elevation:u?8:1,ref:t},d))}));t.A=(0,s.A)({root:{overflow:"hidden"}},{name:"MuiCard"})(c)},34305:function(e,t,n){var r=n(24994),o=n(6305);t.A=void 0;var i=o(n(65043)),a=(0,r(n(59846)).default)(i.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.A=a},79484:function(e,t,n){var r=n(59662),o=n(70579);t.A=(0,r.A)((0,o.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search")}}]);
//# sourceMappingURL=2826.9e96c60d.chunk.js.map