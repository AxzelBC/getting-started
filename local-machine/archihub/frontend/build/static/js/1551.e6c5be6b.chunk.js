"use strict";(self.webpackChunkarchihub=self.webpackChunkarchihub||[]).push([[1551],{72378:function(e,t,o){o.d(t,{EL:function(){return l},WB:function(){return c}});var a=o(89379),n=(o(65043),o(26240)),r=o(81551),i=o(70579),l=function(e){var t=(0,n.A)(),o=(0,r.A)((function(e){return{bloque:{"&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:t.palette.primary.main,border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.primary.main},"&::-webkit-scrollbar-thumb:active":{background:t.palette.primary.main},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}}}}))();return(0,i.jsx)("div",{id:e.id,style:(0,a.A)({width:"100%",height:"calc(100% - 40px)",display:"flex",margin:"10px",borderRadius:"10px",padding:"10px",background:"rgba(255, 255, 255, 1)",boxShadow:"0px 0px 1px rgba(0,0,0,0.1)",justifyContent:"center",alignItems:"center",alignContent:"center",flexWrap:"wrap"},e.style),className:o.bloque,onScroll:e.onScroll,children:e.children})},c=function(e){var t=(0,n.A)(),o=(0,r.A)((function(e){return{bloque:{"&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:t.palette.grey[500],border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:t.palette.grey[500]},"&::-webkit-scrollbar-thumb:active":{background:t.palette.grey[500]},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}}}}))();return(0,i.jsx)("div",{id:e.id,style:(0,a.A)({padding:10,backgroundColor:t.palette.grey[100],borderRadius:5,color:t.palette.grey[600],height:100,overflow:"auto",width:"100%"},e.style),className:o.bloque,children:e.children})};t.Ay=function(e){var t=e.children,o=e.style;e.onScroll;return(0,i.jsx)("section",{style:(0,a.A)({display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh"},o),children:t})}},93440:function(e,t,o){o(65043);var a=o(70579);t.A=function(e){var t=e.className;return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"".concat(t," ").concat(e.labelPos?e.labelPos:""),onClick:function(){return e.onClick(e.title)},children:[(0,a.jsx)("div",{className:"icon",children:e.children}),(0,a.jsx)("div",{className:"tooltipUi",children:e.title})]},e.index)})}},65454:function(e,t,o){o.d(t,{I:function(){return n}});o(65043);var a=o(81551),n=(o(70579),o(93440),(0,a.A)((function(e){return{root:{position:"fixed",width:"54px",background:"rgba(42, 80, 130, 0.8)",borderRadius:"10px",top:"50%",transform:"translateY(-50%)",left:"10px",zIndex:15},item:{cursor:"pointer",position:"relative",margin:2,"& .tooltipUi":{position:"absolute",top:"50%",transform:"translate(calc(50px + 5px), -50%)",background:"rgba(20, 20, 20, 0.9)",padding:"1em",color:"white",borderRadius:"10px",opacity:0,zIndex:-1,visibility:"hidden",transition:"all 0.25s ease"},"& .icon":{width:"50px",height:"50px",position:"relative",borderRadius:"10px",background:"rgba(42, 80, 130, 1)",display:"flex",justifyContent:"center",alignItems:"center","&::before":{content:'""',position:"absolute",top:"5%",left:"5%",width:"90%",height:"90%",background:"rgba(255, 255, 255, 0.2)",borderRadius:"10px",transform:"scale(0.8)",opacity:0,transition:"all 0.25s ease"},"& svg":{position:"relative",width:"20px","& path, & circle, & rect":{fill:"rgba(255, 255, 255, 0.8)"}}},"&.light .icon":{background:"rgba(42, 80, 130, 0.1)","& svg":{"& path, & circle, & rect":{fill:"rgba(100,100,100, 1)"}}},"&.top .tooltipUi":{transform:"translate(calc(-50% + 25px), -90px)"},"&:hover":{"& .icon":{"&::before":{transform:"scale(1)",opacity:1}},"& .tooltipUi":{transform:"translate(calc(50px + 10px), -50%)",opacity:1,zIndex:20,visibility:"visible"}},"&.top:hover .tooltipUi":{transform:"translate(calc(-50% + 25px), -90px)"},"&.edit .icon":{background:"#ed9f31"},"&.new .icon":{background:"#59b359"},"&.delete .icon":{background:"#d34a46"}}}})))},91551:function(e,t,o){o.r(t);var a=o(89379),n=o(5544),r=o(65043),i=o(72378),l=o(73216),c=(o(65454),o(19853)),s=o(85865),d=o(11906),u=o(15316),p=o(81551),b=o(43288),h=o(30064),v=o.n(h),f=o(10765),g=o(63516),m=o(11238),x=o(26240),y=o(70579),S=(0,p.A)((function(e){return{bloque:{backgroundColor:"#999",display:"flex",borderRadius:5,transition:"all .3s","&:hover":{backgroundColor:"rgba(42, 80, 130, 1)"},"& h3":{margin:0,marginBottom:5,color:"#56749a",fontSize:18}},instructions:{fontSize:14,marginBottom:10,padding:10,backgroundColor:"white"}}}));t.default=function(e){S();var t=(0,r.useState)(null),o=(0,n.A)(t,2),p=o[0],h=o[1],k=(0,r.useState)(null),w=(0,n.A)(k,2),A=w[0],z=w[1],C=(0,r.useState)(!0),I=(0,n.A)(C,2),R=I[0],j=I[1],B=(0,l.g)().slug,E=((0,l.Zp)(),(0,x.A)());(0,r.useEffect)((function(){B&&c.DJ(B,"lunch").then((function(e){h(e),j(!1);var t={};e.map((function(e){"instructions"!==e.type&&"file"!==e.type&&((t=(0,a.A)({},t))[e.name]=e.default)})),t.files=[],z(t)}))}),[]);return(0,y.jsx)(i.Ay,{style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:R?"center":"flex-start"},children:(0,y.jsxs)(i.EL,{style:{padding:10,height:"calc(100vh - 20px)",width:"600px",display:"block",overflow:"auto",placeContent:"flex-start"},children:[R&&(0,y.jsx)(b.A,{}),p&&A&&(0,y.jsx)(g.l1,{initialValues:A,onSubmit:function(t,o){var a=o.setSubmitting;a(!0),v().fire({title:"Procesando",html:"Espere un momento",allowOutsideClick:!1,showConfirmButton:!1});var n=new FormData;n.append("data",JSON.stringify(t)),t.files.forEach((function(e){n.append("files",e.file)})),c.o1(B,n,"lunch").then((function(t){a(!1),v().close(),v().fire({title:"Procesamiento iniciado",text:t.msg,icon:"success",confirmButtonText:"Aceptar"}).then((function(){e.history.push("/profile")}))})).catch((function(e){a(!1),v().close(),e.json().then((function(e){v().fire({title:"Error",text:e.msg,icon:"error",confirmButtonText:"Aceptar"})}))}))},children:function(e){var t=e.values,o=e.errors,a=(e.touched,e.handleChange),n=e.handleBlur,r=e.handleSubmit,i=e.isSubmitting,l=e.setFieldValue;return(0,y.jsxs)("form",{onSubmit:r,children:[p.map((function(e,r){return(0,y.jsxs)(y.Fragment,{children:["file"===e.type&&(0,y.jsx)(f.U0,{name:e.label,id:e.name,values:t,required:e.required,change:l,limit:e.limit,acceptedFiles:e.acceptedFiles},r),"instructions"===e.type&&(0,y.jsx)(s.A,{variant:"body1",sx:{padding:"10px",marginBottom:"10px",borderRadius:"5px",background:E.palette.primary.light,color:E.palette.primary.main},children:e.text},r),"checkbox"===e.type&&(0,y.jsx)(f.FO,{id:e.name,name:e.label,instructions:e.instructions,value:t[e.name],handleChange:a,handleBlur:n,error:o[e.name],required:e.required},r),"select"===e.type&&(0,y.jsx)(f.Q5,{id:e.name,name:e.label,value:t[e.name],handleChange:a,handleBlur:n,error:o[e.name],options:e.options,required:e.required},r),"button"===e.type&&(0,y.jsx)(d.A,{variant:"contained",onClick:function(){e.callback},sx:{margin:"10px"},children:e.label})]})})),(0,y.jsx)(u.A,{style:{display:"flex",justifyContent:"center",marginTop:25},children:(0,y.jsx)(m.nA,{variant:"outlined",type:"submit",disabled:i,style:{margin:5,width:"auto"},label:"Iniciar procesamiento"})})]})}})]})})}},11906:function(e,t,o){o.d(t,{A:function(){return R}});var a=o(64467),n=o(98587),r=o(58168),i=o(65043),l=o(69292),c=o(13030),s=o(98610),d=o(67266),u=o(34535),p=o(61475),b=o(98206),h=o(41538),v=o(6803),f=o(92532),g=o(72372);function m(e){return(0,g.Ay)("MuiButton",e)}var x=(0,f.A)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var y=i.createContext({});var S=i.createContext(void 0),k=o(70579),w=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],A=function(e){return(0,r.A)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},z=(0,u.Ay)(h.A,{shouldForwardProp:function(e){return(0,p.A)(e)||"classes"===e},name:"MuiButton",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["".concat(o.variant).concat((0,v.A)(o.color))],t["size".concat((0,v.A)(o.size))],t["".concat(o.variant,"Size").concat((0,v.A)(o.size))],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((function(e){var t,o,n=e.theme,i=e.ownerState,l="light"===n.palette.mode?n.palette.grey[300]:n.palette.grey[800],c="light"===n.palette.mode?n.palette.grey.A100:n.palette.grey[700];return(0,r.A)({},n.typography.button,(0,a.A)((0,a.A)({minWidth:64,padding:"6px 16px",borderRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":(0,r.A)({textDecoration:"none",backgroundColor:n.vars?"rgba(".concat(n.vars.palette.text.primaryChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,d.X4)(n.palette.text.primary,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===i.variant&&"inherit"!==i.color&&{backgroundColor:n.vars?"rgba(".concat(n.vars.palette[i.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,d.X4)(n.palette[i.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===i.variant&&"inherit"!==i.color&&{border:"1px solid ".concat((n.vars||n).palette[i.color].main),backgroundColor:n.vars?"rgba(".concat(n.vars.palette[i.color].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,d.X4)(n.palette[i.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===i.variant&&{backgroundColor:n.vars?n.vars.palette.Button.inheritContainedHoverBg:c,boxShadow:(n.vars||n).shadows[4],"@media (hover: none)":{boxShadow:(n.vars||n).shadows[2],backgroundColor:(n.vars||n).palette.grey[300]}},"contained"===i.variant&&"inherit"!==i.color&&{backgroundColor:(n.vars||n).palette[i.color].dark,"@media (hover: none)":{backgroundColor:(n.vars||n).palette[i.color].main}}),"&:active":(0,r.A)({},"contained"===i.variant&&{boxShadow:(n.vars||n).shadows[8]})},"&.".concat(x.focusVisible),(0,r.A)({},"contained"===i.variant&&{boxShadow:(n.vars||n).shadows[6]})),"&.".concat(x.disabled),(0,r.A)({color:(n.vars||n).palette.action.disabled},"outlined"===i.variant&&{border:"1px solid ".concat((n.vars||n).palette.action.disabledBackground)},"contained"===i.variant&&{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground})),"text"===i.variant&&{padding:"6px 8px"},"text"===i.variant&&"inherit"!==i.color&&{color:(n.vars||n).palette[i.color].main},"outlined"===i.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===i.variant&&"inherit"!==i.color&&{color:(n.vars||n).palette[i.color].main,border:n.vars?"1px solid rgba(".concat(n.vars.palette[i.color].mainChannel," / 0.5)"):"1px solid ".concat((0,d.X4)(n.palette[i.color].main,.5))},"contained"===i.variant&&{color:n.vars?n.vars.palette.text.primary:null==(t=(o=n.palette).getContrastText)?void 0:t.call(o,n.palette.grey[300]),backgroundColor:n.vars?n.vars.palette.Button.inheritContainedBg:l,boxShadow:(n.vars||n).shadows[2]},"contained"===i.variant&&"inherit"!==i.color&&{color:(n.vars||n).palette[i.color].contrastText,backgroundColor:(n.vars||n).palette[i.color].main},"inherit"===i.color&&{color:"inherit",borderColor:"currentColor"},"small"===i.size&&"text"===i.variant&&{padding:"4px 5px",fontSize:n.typography.pxToRem(13)},"large"===i.size&&"text"===i.variant&&{padding:"8px 11px",fontSize:n.typography.pxToRem(15)},"small"===i.size&&"outlined"===i.variant&&{padding:"3px 9px",fontSize:n.typography.pxToRem(13)},"large"===i.size&&"outlined"===i.variant&&{padding:"7px 21px",fontSize:n.typography.pxToRem(15)},"small"===i.size&&"contained"===i.variant&&{padding:"4px 10px",fontSize:n.typography.pxToRem(13)},"large"===i.size&&"contained"===i.variant&&{padding:"8px 22px",fontSize:n.typography.pxToRem(15)},i.fullWidth&&{width:"100%"})}),(function(e){return e.ownerState.disableElevation&&(0,a.A)((0,a.A)((0,a.A)({boxShadow:"none","&:hover":{boxShadow:"none"}},"&.".concat(x.focusVisible),{boxShadow:"none"}),"&:active",{boxShadow:"none"}),"&.".concat(x.disabled),{boxShadow:"none"})})),C=(0,u.Ay)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.startIcon,t["iconSize".concat((0,v.A)(o.size))]]}})((function(e){var t=e.ownerState;return(0,r.A)({display:"inherit",marginRight:8,marginLeft:-4},"small"===t.size&&{marginLeft:-2},A(t))})),I=(0,u.Ay)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(e,t){var o=e.ownerState;return[t.endIcon,t["iconSize".concat((0,v.A)(o.size))]]}})((function(e){var t=e.ownerState;return(0,r.A)({display:"inherit",marginRight:-4,marginLeft:8},"small"===t.size&&{marginRight:-2},A(t))})),R=i.forwardRef((function(e,t){var o=i.useContext(y),a=i.useContext(S),d=(0,c.A)(o,e),u=(0,b.b)({props:d,name:"MuiButton"}),p=u.children,h=u.color,f=void 0===h?"primary":h,g=u.component,x=void 0===g?"button":g,A=u.className,R=u.disabled,j=void 0!==R&&R,B=u.disableElevation,E=void 0!==B&&B,N=u.disableFocusRipple,W=void 0!==N&&N,q=u.endIcon,F=u.focusVisibleClassName,M=u.fullWidth,T=void 0!==M&&M,L=u.size,O=void 0===L?"medium":L,P=u.startIcon,V=u.type,U=u.variant,D=void 0===U?"text":U,X=(0,n.A)(u,w),J=(0,r.A)({},u,{color:f,component:x,disabled:j,disableElevation:E,disableFocusRipple:W,fullWidth:T,size:O,type:V,variant:D}),H=function(e){var t=e.color,o=e.disableElevation,a=e.fullWidth,n=e.size,i=e.variant,l=e.classes,c={root:["root",i,"".concat(i).concat((0,v.A)(t)),"size".concat((0,v.A)(n)),"".concat(i,"Size").concat((0,v.A)(n)),"color".concat((0,v.A)(t)),o&&"disableElevation",a&&"fullWidth"],label:["label"],startIcon:["icon","startIcon","iconSize".concat((0,v.A)(n))],endIcon:["icon","endIcon","iconSize".concat((0,v.A)(n))]},d=(0,s.A)(c,m,l);return(0,r.A)({},l,d)}(J),Q=P&&(0,k.jsx)(C,{className:H.startIcon,ownerState:J,children:P}),Y=q&&(0,k.jsx)(I,{className:H.endIcon,ownerState:J,children:q}),Z=a||"";return(0,k.jsxs)(z,(0,r.A)({ownerState:J,className:(0,l.A)(o.className,H.root,A,Z),component:x,disabled:j,focusRipple:!W,focusVisibleClassName:(0,l.A)(H.focusVisible,F),ref:t,type:V},X,{classes:H,children:[Q,p,Y]}))}))}}]);
//# sourceMappingURL=1551.e6c5be6b.chunk.js.map