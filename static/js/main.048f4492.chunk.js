(this.webpackJsonpsky9=this.webpackJsonpsky9||[]).push([[0],{102:function(e,a){},103:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(16),l=t.n(i),s=t(37),c=t(49),o=t(38),m=t(131),u=t(127),d=(t(76),t(7)),p=t(17),g=t(125),E=t(30),f=t(60),h=t(4),v=t(133),w=t(128),b=t(107),j=t(132),_=t(53),k=t.n(_),y=(t(77),Object(g.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(p.a)(Object(p.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})));function O(){var e=y(),a=r.a.useState(!1),t=Object(f.a)(a,2),n=t[0];t[1];return r.a.createElement("div",null,r.a.createElement(u.a,null),r.a.createElement(v.a,{position:"fixed",className:Object(h.a)(e.appBar,Object(E.a)({},e.appBarShift,n))},r.a.createElement(w.a,null,r.a.createElement("div",{className:"navigation-wrapper"},r.a.createElement(b.a,{variant:"h6",noWrap:!0},"Logo"),r.a.createElement("div",{className:"navigation-menu"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#/"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#/"},"Movie")),r.a.createElement("li",null,r.a.createElement("a",{href:"#/"},"Show")),r.a.createElement("li",null,r.a.createElement("a",{href:"#/"},"Home")))),r.a.createElement("div",{className:"navigation-menu-user"},r.a.createElement(j.a,{edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(k.a,null)))))))}var S=Object(g.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},drawerHeader:Object(p.a)(Object(p.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{width:"100%",flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}}}));function x(e){var a=e.children,t=S();return r.a.createElement("div",{className:t.root},r.a.createElement(u.a,null),r.a.createElement(O,null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:t.drawerHeader}),r.a.createElement("div",{className:"p-3"}),a))}var N=t(129),D=t(130),T=t(36),B=t.n(T);t(95);function H(e){var a=e.albumDetails,t=a.title,n=a.img,i=a.totalView;return r.a.createElement("div",{onClick:function(){console.log("calling url")},className:"album-cart-wrapper",style:{backgroundImage:"url(".concat(n,")")}},i,r.a.createElement("div",{className:"album-cart-wrapper-footer"},r.a.createElement("h3",null,t)))}function z(e){var a=e.title,t={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:2},n=new Array(10).fill({img:"https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg",title:"Camera",width:"30%"});return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{container:!0,spacing:3},r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement(b.a,{variant:"h6",align:"left"},a)),r.a.createElement(N.a,{item:!0,xs:6},r.a.createElement(b.a,{variant:"h6",align:"right"},r.a.createElement(D.a,{onClick:function(){}},"View All")))),r.a.createElement(B.a,t,n.map((function(e,a){return r.a.createElement(C,{key:a,item:e})}))))}function C(e){var a=e.item;return r.a.createElement("div",{style:{padding:"0 15px"}},r.a.createElement(H,{albumDetails:a}))}var I=function(e){var a=e.img,t=e.title,n=e.onCLick;return r.a.createElement("div",{onClick:n,className:"banner-card",style:{backgroundImage:"url(".concat(a,")")}},r.a.createElement("div",{className:"banner-card__item"},r.a.createElement("h3",null,t)))};function L(e){var a=e.items,t={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return r.a.createElement("div",{className:"banner-slider"},r.a.createElement(B.a,t,a.map((function(e,a){return r.a.createElement(I,Object.assign({key:a},e))}))))}L.defaultProps={items:[]};var R=L,V={title:"title",id:"12",details:"Each  has an image container, this is because you need the image to scale and move, we want the scaling to have a smooth transition. However if you add ...",totalView:"10",img:"https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg"},A=[{title:"Games of thrones",description:"safd askdfjksdjaf sad fjsfj lks ",img:"https://www.hjackets.com/blog/wp-content/uploads/2017/11/game-of-thrones-s-4-banner.jpg"},{title:"test",description:"safd askdfjksdjaf sad fjsfj lks ",img:"https://via.placeholder.com/400x500"},{title:"test",description:"safd askdfjksdjaf sad fjsfj lks ",img:"https://via.placeholder.com/400x500"}];var U=function(){return r.a.createElement(x,null,r.a.createElement(R,{items:A}),r.a.createElement(z,{title:"title for slides"}),r.a.createElement(H,{albumDetails:V}))},X=(t(96),{title:"title",id:"12",details:"Each  has an image container, this is because you need the image to scale and move, we want the scaling to have a smooth transition. However if you add ...",totalView:"10",img:"https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg"});var q=function(){return r.a.createElement(x,null,r.a.createElement("div",null),r.a.createElement("div",{className:"album-list-wrapper"},r.a.createElement(H,{albumDetails:X}),r.a.createElement(H,{albumDetails:X}),r.a.createElement(H,{albumDetails:X}),r.a.createElement(H,{albumDetails:X}),r.a.createElement(H,{albumDetails:X}),r.a.createElement(H,{albumDetails:X}),r.a.createElement(H,{albumDetails:X}),r.a.createElement(H,{albumDetails:X}),r.a.createElement(H,{albumDetails:X}),r.a.createElement(H,{albumDetails:X})))};t(97);var F=Object(d.f)(Object(s.b)((function(e){return{user:e.user}}))((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:function(e){return r.a.createElement(U,null)}}),r.a.createElement(d.a,{path:"/album",component:function(e){return r.a.createElement(q,null)}})))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=t(61),M=t(14),W=t(42),J=t(54),P=t.n(J),$=t(55),K={},Q={user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0,t=a.payload,n=a.type;switch(n){case"SET_USER":case"UNSET_USER":return t;default:return e}}},Y=t(56),Z=[$.a,Object(Y.createStateSyncMiddleware)({whitelist:["user"]})],ee={key:"root",storage:P.a,whitelist:["user"]},ae=Q.user,te=Object(G.a)(Q,["user"]),ne=Object(M.c)(Object(p.a)({user:ae},te)),re=Object(W.a)(ee,ne),ie=t(59),le={palette:{type:"dark",background:{default:"10161d"}},typography:{fontFamily:'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',htmlFontSize:16}},se=Object(ie.a)(le),ce=function(){var e=Object(M.e)(re,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),void 0,Object(M.d)(M.a.apply(void 0,Z)));return{store:e,persistor:Object(W.b)(e)}}();l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:ce.store},r.a.createElement(c.a,{loading:null,persistor:ce.persistor},r.a.createElement(o.a,{basename:"/sky9"},r.a.createElement(m.a,{theme:se},r.a.createElement(u.a,null),r.a.createElement(F,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,a){},67:function(e,a,t){e.exports=t(103)},76:function(e,a,t){},77:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.048f4492.chunk.js.map