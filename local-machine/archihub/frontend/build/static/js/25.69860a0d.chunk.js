(this.webpackJsonpsim=this.webpackJsonpsim||[]).push([[25],{1376:function(e,t,r){"use strict";r.r(t),r.d(t,"BloqueContenido",(function(){return m})),r.d(t,"Main",(function(){return k}));var o=r(35),a=r(2),l=r.n(a),i=r(50),n=r(139),c=r(937),d=r(938),s=r(843),u=r(926),f=(r(939),r(946),r(942)),b=r.n(f),p=r(943),h=r.n(p),g=(r(957),r(46),r(940),r(138),r(1e3)),w=Object(s.a)((function(e){return{bloque:{padding:"10px",backgroundColor:"rgba(255,255,255,.9)",margin:5,width:"100%",height:"100%",overflow:"auto",position:"relative",borderRadius:10,border:"3px solid #fff","&::-webkit-scrollbar":{width:6,height:2},"&::-webkit-scrollbar-button":{width:10,height:10},"&::-webkit-scrollbar-thumb":{background:"#56749a",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-thumb:hover":{background:"#56749a"},"&::-webkit-scrollbar-thumb:active":{background:"#56749a"},"&::-webkit-scrollbar-track":{background:"rgba(0,0,0,0.1)",border:"0px none #ffffff",borderRadius:50},"&::-webkit-scrollbar-track:hover":{background:"rgba(0,0,0,0.1)"},"&::-webkit-scrollbar-track:active":{background:"rgba(0,0,0,0.1)"}},tituloBloque:{top:0,fontSize:15,fontWeight:"bold",padding:"10px 15px",position:"sticky",zIndex:10,width:"100%",left:0,background:"#e6e6e6",borderTopLeftRadius:10,borderTopRightRadius:10,color:"#56749a",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},breadcrumbs:{padding:"5px 15px",color:"#fff",borderBottomLeftRadius:10,borderBottomRightRadius:10,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},linkBreadcrumb:{color:"#fff",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:200,display:"inline-block","&:hover":{color:"#fff"}},selectedBread:{color:"#fff !important",textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",maxWidth:150,backgroundColor:"rgba(255,255,255,.2)",display:"inline-block",padding:"0 5px",borderRadius:2},columnas:{display:"flex",height:"calc(100vh - 150px)"},separador:{borderBottom:"1px solid #dcdcdc",paddingTop:25,paddingBottom:10,fontWeight:"bold",color:"#56749a","& svg":{marginRight:10,marginLeft:5,width:20,height:20,padding:3,backgroundColor:"#56749a",borderRadius:50,"& path":{fill:"#fff"}}},toolbar:{minHeight:"auto",padding:5,backgroundColor:"#56749a",color:"#fff",borderTopLeftRadius:10,overflow:"hidden","& h6":{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",fontSize:16}},itemMenu:{display:"flex",alignItems:"center",padding:15,borderBottom:"1px solid #dcdcdc","& svg":{"& path":{fill:"#9fb0c6"}},"&:hover":{backgroundColor:e.palette.grey[100],cursor:"pointer"},"&.selected":{backgroundColor:"#9fb0c6",color:"#fff","& path":{fill:"#fff"}}}}})),m=function(e){var t=w();return l.a.createElement(u.a,{className:t.bloque,style:e.style},e.title&&l.a.createElement(u.a,{className:t.tituloBloque},e.title),e.topBar&&l.a.createElement(l.a.Fragment,null,e.topBar),e.children)},k=function(e){w();var t=Object(a.useState)(null),r=Object(o.a)(t,2),i=(r[0],r[1],Object(a.useState)(null)),n=Object(o.a)(i,2),s=(n[0],n[1],Object(a.useState)(!1)),u=Object(o.a)(s,2);u[0],u[1];Object(a.useEffect)((function(){}),[]);return l.a.createElement(d.a,null,l.a.createElement(c.a,{userRoles:e.user.roles,list:function(){var t=[];return t.push({name:"Volver",icon:l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,null)),callback:function(){e.history.push("/dashboard")}}),e.user.roles.includes("admin")&&t.push({name:"Agregar usuario",icon:l.a.createElement(b.a,null),action:"new",callback:function(){e.history.push("/admin/users/new")}}),t}()}),l.a.createElement(m,{style:{width:"calc(50% - 20px)",height:"calc(100vh - 100px)",overflow:"auto"},title:"Usuarios"},l.a.createElement(g.a,{selectedType:"users",filters:{}})))};t.default=Object(i.b)((function(e){return{user:e.auth.user}}),n.a)(k)}}]);
//# sourceMappingURL=25.69860a0d.chunk.js.map