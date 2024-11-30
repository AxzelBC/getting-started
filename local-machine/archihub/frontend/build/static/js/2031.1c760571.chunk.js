"use strict";(self.webpackChunkarchihub=self.webpackChunkarchihub||[]).push([[2031],{71806:function(e,t,o){o.d(t,{A:function(){return m}});var n=o(98587),a=o(58168),r=o(65043),i=o(69292),s=o(98610),l=o(41009),c=o(98206),d=o(34535),u=o(92532),p=o(72372);function v(e){return(0,p.Ay)("MuiTable",e)}(0,u.A)("MuiTable",["root","stickyHeader"]);var A=o(70579),g=["className","component","padding","size","stickyHeader"],f=(0,d.Ay)("table",{name:"MuiTable",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,o=e.ownerState;return(0,a.A)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,a.A)({},t.typography.body2,{padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},o.stickyHeader&&{borderCollapse:"separate"})})),h="table",m=r.forwardRef((function(e,t){var o=(0,c.b)({props:e,name:"MuiTable"}),d=o.className,u=o.component,p=void 0===u?h:u,m=o.padding,b=void 0===m?"normal":m,y=o.size,x=void 0===y?"medium":y,w=o.stickyHeader,P=void 0!==w&&w,R=(0,n.A)(o,g),B=(0,a.A)({},o,{component:p,padding:b,size:x,stickyHeader:P}),M=function(e){var t=e.classes,o={root:["root",e.stickyHeader&&"stickyHeader"]};return(0,s.A)(o,v,t)}(B),k=r.useMemo((function(){return{padding:b,size:x,stickyHeader:P}}),[b,x,P]);return(0,A.jsx)(l.A.Provider,{value:k,children:(0,A.jsx)(f,(0,a.A)({as:p,role:p===h?null:"table",ref:t,className:(0,i.A)(M.root,d),ownerState:B},R))})}))},41009:function(e,t,o){var n=o(65043).createContext();t.A=n},21573:function(e,t,o){var n=o(65043).createContext();t.A=n},73460:function(e,t,o){o.d(t,{A:function(){return b}});var n=o(58168),a=o(98587),r=o(65043),i=o(69292),s=o(98610),l=o(21573),c=o(98206),d=o(34535),u=o(92532),p=o(72372);function v(e){return(0,p.Ay)("MuiTableBody",e)}(0,u.A)("MuiTableBody",["root"]);var A=o(70579),g=["className","component"],f=(0,d.Ay)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-row-group"}),h={variant:"body"},m="tbody",b=r.forwardRef((function(e,t){var o=(0,c.b)({props:e,name:"MuiTableBody"}),r=o.className,d=o.component,u=void 0===d?m:d,p=(0,a.A)(o,g),b=(0,n.A)({},o,{component:u}),y=function(e){var t=e.classes;return(0,s.A)({root:["root"]},v,t)}(b);return(0,A.jsx)(l.A.Provider,{value:h,children:(0,A.jsx)(f,(0,n.A)({className:(0,i.A)(y.root,r),as:u,ref:t,role:u===m?null:"rowgroup",ownerState:b},p))})}))},10039:function(e,t,o){o.d(t,{A:function(){return w}});var n=o(64467),a=o(98587),r=o(58168),i=o(65043),s=o(69292),l=o(98610),c=o(67266),d=o(6803),u=o(41009),p=o(21573),v=o(98206),A=o(34535),g=o(92532),f=o(72372);function h(e){return(0,f.Ay)("MuiTableCell",e)}var m=(0,g.A)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),b=o(70579),y=["align","className","component","padding","scope","size","sortDirection","variant"],x=(0,A.Ay)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,t[o.variant],t["size".concat((0,d.A)(o.size))],"normal"!==o.padding&&t["padding".concat((0,d.A)(o.padding))],"inherit"!==o.align&&t["align".concat((0,d.A)(o.align))],o.stickyHeader&&t.stickyHeader]}})((function(e){var t=e.theme,o=e.ownerState;return(0,r.A)({},t.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?"1px solid ".concat(t.vars.palette.TableCell.border):"1px solid\n    ".concat("light"===t.palette.mode?(0,c.a)((0,c.X4)(t.palette.divider,1),.88):(0,c.e$)((0,c.X4)(t.palette.divider,1),.68)),textAlign:"left",padding:16},"head"===o.variant&&{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium},"body"===o.variant&&{color:(t.vars||t).palette.text.primary},"footer"===o.variant&&{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)},"small"===o.size&&(0,n.A)({padding:"6px 16px"},"&.".concat(m.paddingCheckbox),{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}),"checkbox"===o.padding&&{width:48,padding:"0 0 0 4px"},"none"===o.padding&&{padding:0},"left"===o.align&&{textAlign:"left"},"center"===o.align&&{textAlign:"center"},"right"===o.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===o.align&&{textAlign:"justify"},o.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default})})),w=i.forwardRef((function(e,t){var o,n=(0,v.b)({props:e,name:"MuiTableCell"}),c=n.align,A=void 0===c?"inherit":c,g=n.className,f=n.component,m=n.padding,w=n.scope,P=n.size,R=n.sortDirection,B=n.variant,M=(0,a.A)(n,y),k=i.useContext(u.A),I=i.useContext(p.A),C=I&&"head"===I.variant,T=w;"td"===(o=f||(C?"th":"td"))?T=void 0:!T&&C&&(T="col");var j=B||I&&I.variant,S=(0,r.A)({},n,{align:A,component:o,padding:m||(k&&k.padding?k.padding:"normal"),size:P||(k&&k.size?k.size:"medium"),sortDirection:R,stickyHeader:"head"===j&&k&&k.stickyHeader,variant:j}),L=function(e){var t=e.classes,o=e.variant,n=e.align,a=e.padding,r=e.size,i={root:["root",o,e.stickyHeader&&"stickyHeader","inherit"!==n&&"align".concat((0,d.A)(n)),"normal"!==a&&"padding".concat((0,d.A)(a)),"size".concat((0,d.A)(r))]};return(0,l.A)(i,h,t)}(S),H=null;return R&&(H="asc"===R?"ascending":"descending"),(0,b.jsx)(x,(0,r.A)({as:o,ref:t,className:(0,s.A)(L.root,g),"aria-sort":H,scope:T,ownerState:S},M))}))},79650:function(e,t,o){o.d(t,{A:function(){return f}});var n=o(58168),a=o(98587),r=o(65043),i=o(69292),s=o(98610),l=o(98206),c=o(34535),d=o(92532),u=o(72372);function p(e){return(0,u.Ay)("MuiTableContainer",e)}(0,d.A)("MuiTableContainer",["root"]);var v=o(70579),A=["className","component"],g=(0,c.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:function(e,t){return t.root}})({width:"100%",overflowX:"auto"}),f=r.forwardRef((function(e,t){var o=(0,l.b)({props:e,name:"MuiTableContainer"}),r=o.className,c=o.component,d=void 0===c?"div":c,u=(0,a.A)(o,A),f=(0,n.A)({},o,{component:d}),h=function(e){var t=e.classes;return(0,s.A)({root:["root"]},p,t)}(f);return(0,v.jsx)(g,(0,n.A)({ref:t,as:d,className:(0,i.A)(h.root,r),ownerState:f},u))}))},84882:function(e,t,o){o.d(t,{A:function(){return b}});var n=o(58168),a=o(98587),r=o(65043),i=o(69292),s=o(98610),l=o(21573),c=o(98206),d=o(34535),u=o(92532),p=o(72372);function v(e){return(0,p.Ay)("MuiTableHead",e)}(0,u.A)("MuiTableHead",["root"]);var A=o(70579),g=["className","component"],f=(0,d.Ay)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:function(e,t){return t.root}})({display:"table-header-group"}),h={variant:"head"},m="thead",b=r.forwardRef((function(e,t){var o=(0,c.b)({props:e,name:"MuiTableHead"}),r=o.className,d=o.component,u=void 0===d?m:d,p=(0,a.A)(o,g),b=(0,n.A)({},o,{component:u}),y=function(e){var t=e.classes;return(0,s.A)({root:["root"]},v,t)}(b);return(0,A.jsx)(l.A.Provider,{value:h,children:(0,A.jsx)(f,(0,n.A)({as:u,className:(0,i.A)(y.root,r),ref:t,role:u===m?null:"rowgroup",ownerState:b},p))})}))},19090:function(e,t,o){o.d(t,{A:function(){return E}});var n=o(64467),a=o(98587),r=o(58168),i=o(65043),s=o(69292),l=o(98610),c=o(94340),d=o(34535),u=o(98206),p=o(76611),v=o(10673),A=o(89044),g=o(10039),f=o(55263),h=o(10875),m=o(3900),b=o(51639),y=o(17392),x=o(59662),w=o(70579),P=(0,x.A)((0,w.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),R=(0,x.A)((0,w.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),B=["backIconButtonProps","count","disabled","getItemAriaLabel","nextIconButtonProps","onPageChange","page","rowsPerPage","showFirstButton","showLastButton","slots","slotProps"],M=i.forwardRef((function(e,t){var o,n,i,s,l,c,d,u,p=e.backIconButtonProps,v=e.count,A=e.disabled,g=void 0!==A&&A,f=e.getItemAriaLabel,x=e.nextIconButtonProps,M=e.onPageChange,k=e.page,I=e.rowsPerPage,C=e.showFirstButton,T=e.showLastButton,j=e.slots,S=void 0===j?{}:j,L=e.slotProps,H=void 0===L?{}:L,N=(0,a.A)(e,B),z=(0,h.I)(),O=null!=(o=S.firstButton)?o:y.A,D=null!=(n=S.lastButton)?n:y.A,F=null!=(i=S.nextButton)?i:y.A,X=null!=(s=S.previousButton)?s:y.A,K=null!=(l=S.firstButtonIcon)?l:R,W=null!=(c=S.lastButtonIcon)?c:P,E=null!=(d=S.nextButtonIcon)?d:b.A,G=null!=(u=S.previousButtonIcon)?u:m.A,J=z?D:O,$=z?F:X,q=z?X:F,Q=z?O:D,U=z?H.lastButton:H.firstButton,V=z?H.nextButton:H.previousButton,Y=z?H.previousButton:H.nextButton,Z=z?H.firstButton:H.lastButton;return(0,w.jsxs)("div",(0,r.A)({ref:t},N,{children:[C&&(0,w.jsx)(J,(0,r.A)({onClick:function(e){M(e,0)},disabled:g||0===k,"aria-label":f("first",k),title:f("first",k)},U,{children:z?(0,w.jsx)(W,(0,r.A)({},H.lastButtonIcon)):(0,w.jsx)(K,(0,r.A)({},H.firstButtonIcon))})),(0,w.jsx)($,(0,r.A)({onClick:function(e){M(e,k-1)},disabled:g||0===k,color:"inherit","aria-label":f("previous",k),title:f("previous",k)},null!=V?V:p,{children:z?(0,w.jsx)(E,(0,r.A)({},H.nextButtonIcon)):(0,w.jsx)(G,(0,r.A)({},H.previousButtonIcon))})),(0,w.jsx)(q,(0,r.A)({onClick:function(e){M(e,k+1)},disabled:g||-1!==v&&k>=Math.ceil(v/I)-1,color:"inherit","aria-label":f("next",k),title:f("next",k)},null!=Y?Y:x,{children:z?(0,w.jsx)(G,(0,r.A)({},H.previousButtonIcon)):(0,w.jsx)(E,(0,r.A)({},H.nextButtonIcon))})),T&&(0,w.jsx)(Q,(0,r.A)({onClick:function(e){M(e,Math.max(0,Math.ceil(v/I)-1))},disabled:g||k>=Math.ceil(v/I)-1,"aria-label":f("last",k),title:f("last",k)},Z,{children:z?(0,w.jsx)(K,(0,r.A)({},H.firstButtonIcon)):(0,w.jsx)(W,(0,r.A)({},H.lastButtonIcon))}))]}))})),k=o(45879),I=o(92532),C=o(72372);function T(e){return(0,C.Ay)("MuiTablePagination",e)}var j,S=(0,I.A)("MuiTablePagination",["root","toolbar","spacer","selectLabel","selectRoot","select","selectIcon","input","menuItem","displayedRows","actions"]),L=["ActionsComponent","backIconButtonProps","className","colSpan","component","count","disabled","getItemAriaLabel","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","onPageChange","onRowsPerPageChange","page","rowsPerPage","rowsPerPageOptions","SelectProps","showFirstButton","showLastButton","slotProps","slots"],H=(0,d.Ay)(g.A,{name:"MuiTablePagination",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t=e.theme;return{overflow:"auto",color:(t.vars||t).palette.text.primary,fontSize:t.typography.pxToRem(14),"&:last-child":{padding:0}}})),N=(0,d.Ay)(f.A,{name:"MuiTablePagination",slot:"Toolbar",overridesResolver:function(e,t){return(0,r.A)((0,n.A)({},"& .".concat(S.actions),t.actions),t.toolbar)}})((function(e){var t=e.theme;return(0,n.A)((0,n.A)((0,n.A)({minHeight:52,paddingRight:2},"".concat(t.breakpoints.up("xs")," and (orientation: landscape)"),{minHeight:52}),t.breakpoints.up("sm"),{minHeight:52,paddingRight:2}),"& .".concat(S.actions),{flexShrink:0,marginLeft:20})})),z=(0,d.Ay)("div",{name:"MuiTablePagination",slot:"Spacer",overridesResolver:function(e,t){return t.spacer}})({flex:"1 1 100%"}),O=(0,d.Ay)("p",{name:"MuiTablePagination",slot:"SelectLabel",overridesResolver:function(e,t){return t.selectLabel}})((function(e){var t=e.theme;return(0,r.A)({},t.typography.body2,{flexShrink:0})})),D=(0,d.Ay)(A.A,{name:"MuiTablePagination",slot:"Select",overridesResolver:function(e,t){return(0,r.A)((0,n.A)((0,n.A)({},"& .".concat(S.selectIcon),t.selectIcon),"& .".concat(S.select),t.select),t.input,t.selectRoot)}})((0,n.A)({color:"inherit",fontSize:"inherit",flexShrink:0,marginRight:32,marginLeft:8},"& .".concat(S.select),{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"})),F=(0,d.Ay)(v.A,{name:"MuiTablePagination",slot:"MenuItem",overridesResolver:function(e,t){return t.menuItem}})({}),X=(0,d.Ay)("p",{name:"MuiTablePagination",slot:"DisplayedRows",overridesResolver:function(e,t){return t.displayedRows}})((function(e){var t=e.theme;return(0,r.A)({},t.typography.body2,{flexShrink:0})}));function K(e){var t=e.from,o=e.to,n=e.count;return"".concat(t,"\u2013").concat(o," of ").concat(-1!==n?n:"more than ".concat(o))}function W(e){return"Go to ".concat(e," page")}var E=i.forwardRef((function(e,t){var o,n,d=(0,u.b)({props:e,name:"MuiTablePagination"}),v=d.ActionsComponent,A=void 0===v?M:v,f=d.backIconButtonProps,h=d.className,m=d.colSpan,b=d.component,y=void 0===b?g.A:b,x=d.count,P=d.disabled,R=void 0!==P&&P,B=d.getItemAriaLabel,I=void 0===B?W:B,C=d.labelDisplayedRows,S=void 0===C?K:C,E=d.labelRowsPerPage,G=void 0===E?"Rows per page:":E,J=d.nextIconButtonProps,$=d.onPageChange,q=d.onRowsPerPageChange,Q=d.page,U=d.rowsPerPage,V=d.rowsPerPageOptions,Y=void 0===V?[10,25,50,100]:V,Z=d.SelectProps,_=void 0===Z?{}:Z,ee=d.showFirstButton,te=void 0!==ee&&ee,oe=d.showLastButton,ne=void 0!==oe&&oe,ae=d.slotProps,re=void 0===ae?{}:ae,ie=d.slots,se=void 0===ie?{}:ie,le=(0,a.A)(d,L),ce=d,de=function(e){var t=e.classes;return(0,l.A)({root:["root"],toolbar:["toolbar"],spacer:["spacer"],selectLabel:["selectLabel"],select:["select"],input:["input"],selectIcon:["selectIcon"],menuItem:["menuItem"],displayedRows:["displayedRows"],actions:["actions"]},T,t)}(ce),ue=null!=(o=null==re?void 0:re.select)?o:_,pe=ue.native?"option":F;y!==g.A&&"td"!==y||(n=m||1e3);var ve=(0,k.A)(ue.id),Ae=(0,k.A)(ue.labelId);return(0,w.jsx)(H,(0,r.A)({colSpan:n,ref:t,as:y,ownerState:ce,className:(0,s.A)(de.root,h)},le,{children:(0,w.jsxs)(N,{className:de.toolbar,children:[(0,w.jsx)(z,{className:de.spacer}),Y.length>1&&(0,w.jsx)(O,{className:de.selectLabel,id:Ae,children:G}),Y.length>1&&(0,w.jsx)(D,(0,r.A)({variant:"standard"},!ue.variant&&{input:j||(j=(0,w.jsx)(p.Ay,{}))},{value:U,onChange:q,id:ve,labelId:Ae},ue,{classes:(0,r.A)({},ue.classes,{root:(0,s.A)(de.input,de.selectRoot,(ue.classes||{}).root),select:(0,s.A)(de.select,(ue.classes||{}).select),icon:(0,s.A)(de.selectIcon,(ue.classes||{}).icon)}),disabled:R,children:Y.map((function(e){return(0,i.createElement)(pe,(0,r.A)({},!(0,c.A)(pe)&&{ownerState:ce},{className:de.menuItem,key:e.label?e.label:e,value:e.value?e.value:e}),e.label?e.label:e)}))})),(0,w.jsx)(X,{className:de.displayedRows,children:S({from:0===x?0:Q*U+1,to:-1===x?(Q+1)*U:-1===U?x:Math.min(x,(Q+1)*U),count:-1===x?-1:x,page:Q})}),(0,w.jsx)(A,{className:de.actions,backIconButtonProps:f,count:x,nextIconButtonProps:J,onPageChange:$,page:Q,rowsPerPage:U,showFirstButton:te,showLastButton:ne,slotProps:re.actions,slots:se.actions,getItemAriaLabel:I,disabled:R})]})}))}))},28076:function(e,t,o){o.d(t,{A:function(){return y}});var n=o(64467),a=o(58168),r=o(98587),i=o(65043),s=o(69292),l=o(98610),c=o(67266),d=o(21573),u=o(98206),p=o(34535),v=o(92532),A=o(72372);function g(e){return(0,A.Ay)("MuiTableRow",e)}var f=(0,v.A)("MuiTableRow",["root","selected","hover","head","footer"]),h=o(70579),m=["className","component","hover","selected"],b=(0,p.Ay)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:function(e,t){var o=e.ownerState;return[t.root,o.head&&t.head,o.footer&&t.footer]}})((function(e){var t=e.theme;return(0,n.A)((0,n.A)({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0},"&.".concat(f.hover,":hover"),{backgroundColor:(t.vars||t).palette.action.hover}),"&.".concat(f.selected),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,c.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}})})),y=i.forwardRef((function(e,t){var o=(0,u.b)({props:e,name:"MuiTableRow"}),n=o.className,c=o.component,p=void 0===c?"tr":c,v=o.hover,A=void 0!==v&&v,f=o.selected,y=void 0!==f&&f,x=(0,r.A)(o,m),w=i.useContext(d.A),P=(0,a.A)({},o,{component:p,hover:A,selected:y,head:w&&"head"===w.variant,footer:w&&"footer"===w.variant}),R=function(e){var t=e.classes,o={root:["root",e.selected&&"selected",e.hover&&"hover",e.head&&"head",e.footer&&"footer"]};return(0,l.A)(o,g,t)}(P);return(0,h.jsx)(b,(0,a.A)({as:p,ref:t,className:(0,s.A)(R.root,n),role:"tr"===p?null:"row",ownerState:P},x))}))},3900:function(e,t,o){o(65043);var n=o(59662),a=o(70579);t.A=(0,n.A)((0,a.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},51639:function(e,t,o){o(65043);var n=o(59662),a=o(70579);t.A=(0,n.A)((0,a.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")}}]);
//# sourceMappingURL=2031.1c760571.chunk.js.map