(this.webpackJsonpsim=this.webpackJsonpsim||[]).push([[30],{1395:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(50),l=a(139),i=a(35),c=a(843),s=a(926),d=a(89),u=a(263),p=a(446),h=a(445),m=Object(c.a)((function(e){return{root:{backgroundColor:"rgba(255, 255, 255, 0.5)",backdropFilter:"blur(20px)",borderRadius:"10px",width:"100%",maxWidth:"900px",boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.15)"},items:{display:"flex",justifyContent:"center",flexWrap:"wrap",padding:25},item:{width:130,height:130,backgroundColor:"white",borderRadius:"10px",cursor:"pointer",transform:"scale(1)",transition:"0.2s ease all",display:"flex",justifyContent:"center",alignItems:"center",alignContent:"flex-start",flexWrap:"wrap",margin:10,"&.undo":{backgroundColor:"#a7b7cb",color:"white","& svg":{backgroundColor:"rgba(255, 255, 255, 0.3)","& path":{fill:"white"}},"& h3":{color:"white"}},"& svg":{backgroundColor:"rgba(150, 150, 150, 0.1)",height:70,paddingTop:20,paddingBottom:20,borderRadius:10,marginBottom:5},"& h3":{width:"100%",color:"#2A5080",fontWeight:"bold",fontSize:13,textAlign:"center",padding:5,margin:0},"&:hover":{transform:"scale(1.1)"}}}})),g=function(){var e=m(),t=d.a.getState().auth.user.roles,a=Object(n.useState)(null),o=Object(i.a)(a,2),l=o[0],c=o[1];return r.a.createElement(s.a,{className:e.root},r.a.createElement(s.a,{className:e.items},!l&&h.a.elements.map((function(a,n){if(Object(u.intersection)(a.roles,t).length>0)return r.a.createElement(s.a,{key:n,className:e.item,onClick:function(){a.children.length>0?c(a.children):window.location.href=a.route}},Object(p.a)(a,"",{width:"calc(100% - 100px)",padding:"0 50px",color:"#2A5080"}),r.a.createElement("h3",null,a.tag))})),l&&r.a.createElement(s.a,{className:"".concat(e.item," undo"),onClick:function(){c(null)}},Object(p.a)({material_icon:"Undo",tag:"Volver"},"",{width:"calc(100% - 100px)",padding:"0 50px",color:"#2A5080"}),r.a.createElement("h3",null,"Volver")),l&&l.map((function(a,n){if(Object(u.intersection)(a.roles,t).length>0)return r.a.createElement(s.a,{key:n,className:e.item,onClick:function(){a.route&&(window.location.href=a.route)}},Object(p.a)(a,"",{width:"calc(100% - 100px)",padding:"0 50px",color:"#2A5080"}),r.a.createElement("h3",null,a.tag))}))))};t.default=Object(o.b)(null,l.a)((function(e){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"calc(100vh - 65px)"}},r.a.createElement(g,null))}))}}]);
//# sourceMappingURL=30.703d12ca.chunk.js.map