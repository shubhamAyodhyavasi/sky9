(this.webpackJsonpsky9=this.webpackJsonpsky9||[]).push([[0],{100:function(e,a){},101:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(16),l=t.n(r),s=t(37),c=t(49),o=t(39),m=t(130),u=t(126),d=(t(75),t(7)),g=t(17),p=t(124),E=t(30),f=t(60),h=t(4),v=t(128),w=t(132),b=t(127),_=t(105),j=t(131),k=t(53),y=t.n(k),N="sky9",O=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(g.a)(Object(g.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function S(){var e=O(),a=i.a.useState(!1),t=Object(f.a)(a,2),n=t[0];t[1];return i.a.createElement("div",null,i.a.createElement(u.a,null),i.a.createElement(w.a,{position:"fixed",className:Object(h.a)(e.appBar,Object(E.a)({},e.appBarShift,n))},i.a.createElement(b.a,null,i.a.createElement("div",{className:"navigation-wrapper"},i.a.createElement(v.a,{color:"inherit",className:"logo-link"},i.a.createElement(_.a,{variant:"h6",noWrap:!0},N)),i.a.createElement("div",{className:"navigation-menu"},i.a.createElement("ul",null,i.a.createElement("li",{className:"navigation-menu__item"},i.a.createElement("a",{className:"navigation-menu__link",href:"#/"},"Home")),i.a.createElement("li",{className:"navigation-menu__item"},i.a.createElement("a",{className:"navigation-menu__link",href:"#/"},"Movie")),i.a.createElement("li",{className:"navigation-menu__item"},i.a.createElement("a",{className:"navigation-menu__link",href:"#/"},"Show")),i.a.createElement("li",{className:"navigation-menu__item"},i.a.createElement("a",{className:"navigation-menu__link",href:"#/"},"Home")))),i.a.createElement("div",{className:"navigation-menu-user"},i.a.createElement(j.a,{edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},i.a.createElement(y.a,null)))))))}var x=Object(p.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},drawerHeader:Object(g.a)(Object(g.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{width:"100%",flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})}}}));function D(e){var a=e.children,t=x();return i.a.createElement("div",{className:t.root},i.a.createElement(u.a,null),i.a.createElement(S,null),i.a.createElement("div",{className:t.content},i.a.createElement("div",{className:t.drawerHeader}),i.a.createElement("div",{className:"p-3"}),a))}var T=t(129),B=t(36),H=t.n(B);t(93);function z(e){var a=e.albumDetails,t=a.title,n=a.img,r=a.totalView;return i.a.createElement("div",{onClick:function(){console.log("calling url")},className:"album-cart-wrapper",style:{backgroundImage:"url(".concat(n,")")}},r,i.a.createElement("div",{className:"album-cart-wrapper-footer"},i.a.createElement("h3",null,t)))}function C(e){var a=e.title,t={dots:!0,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:2},n=new Array(10).fill({img:"https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg",title:"Camera",width:"30%"});return i.a.createElement(i.a.Fragment,null,i.a.createElement(T.a,{container:!0,spacing:3},i.a.createElement(T.a,{item:!0,xs:6},i.a.createElement(_.a,{variant:"h6",align:"left"},a)),i.a.createElement(T.a,{item:!0,xs:6},i.a.createElement(_.a,{variant:"h6",align:"right"},i.a.createElement(v.a,{onClick:function(){}},"View All")))),i.a.createElement(H.a,t,n.map((function(e,a){return i.a.createElement(I,{key:a,item:e})}))))}function I(e){var a=e.item;return i.a.createElement("div",{style:{padding:"0 15px"}},i.a.createElement(z,{albumDetails:a}))}var L=function(e){var a=e.img,t=e.title,n=e.onCLick;return i.a.createElement("div",{onClick:n,className:"banner-card",style:{backgroundImage:"url(".concat(a,")")}},i.a.createElement("div",{className:"banner-card__item"},i.a.createElement("h3",null,t)))};function R(e){var a=e.items,t={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1};return i.a.createElement("div",{className:"banner-slider"},i.a.createElement(H.a,t,a.map((function(e,a){return i.a.createElement(L,Object.assign({key:a},e))}))))}R.defaultProps={items:[]};var V=R,A={title:"title",id:"12",details:"Each  has an image container, this is because you need the image to scale and move, we want the scaling to have a smooth transition. However if you add ...",totalView:"10",img:"https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg"},U=[{title:"Games of thrones",description:"safd askdfjksdjaf sad fjsfj lks ",img:"https://www.hjackets.com/blog/wp-content/uploads/2017/11/game-of-thrones-s-4-banner.jpg"},{title:"test",description:"safd askdfjksdjaf sad fjsfj lks ",img:"https://via.placeholder.com/400x500"},{title:"test",description:"safd askdfjksdjaf sad fjsfj lks ",img:"https://via.placeholder.com/400x500"}];var X=function(){return i.a.createElement(D,null,i.a.createElement(V,{items:U}),i.a.createElement(C,{title:"title for slides"}),i.a.createElement(z,{albumDetails:A}))},q=(t(94),{title:"title",id:"12",details:"Each  has an image container, this is because you need the image to scale and move, we want the scaling to have a smooth transition. However if you add ...",totalView:"10",img:"https://akamaividz2.zee5.com/image/upload/w_1337,h_536,c_scale,f_auto,q_auto/resources/0-0-214663/cover/1170x658withlogo_756173185.jpg"});var F=function(){return i.a.createElement(D,null,i.a.createElement("div",null),i.a.createElement("div",{className:"album-list-wrapper"},i.a.createElement(z,{albumDetails:q}),i.a.createElement(z,{albumDetails:q}),i.a.createElement(z,{albumDetails:q}),i.a.createElement(z,{albumDetails:q}),i.a.createElement(z,{albumDetails:q}),i.a.createElement(z,{albumDetails:q}),i.a.createElement(z,{albumDetails:q}),i.a.createElement(z,{albumDetails:q}),i.a.createElement(z,{albumDetails:q}),i.a.createElement(z,{albumDetails:q})))};t(95);var G=Object(d.f)(Object(s.b)((function(e){return{user:e.user}}))((function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d.c,null,i.a.createElement(d.a,{path:"/",exact:!0,component:function(e){return i.a.createElement(X,null)}}),i.a.createElement(d.a,{path:"/album",component:function(e){return i.a.createElement(F,null)}})))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=t(61),W=t(14),J=t(43),P=t(54),$=t.n(P),K=t(55),Q={},Y={user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,a=arguments.length>1?arguments[1]:void 0,t=a.payload,n=a.type;switch(n){case"SET_USER":case"UNSET_USER":return t;default:return e}}},Z=t(56),ee=[K.a,Object(Z.createStateSyncMiddleware)({whitelist:["user"]})],ae={key:"root",storage:$.a,whitelist:["user"]},te=Y.user,ne=Object(M.a)(Y,["user"]),ie=Object(W.c)(Object(g.a)({user:te},ne)),re=Object(J.a)(ae,ie),le=t(59),se={palette:{type:"dark",background:{default:"#10161d"}},typography:{fontFamily:'Avenir Next, Roboto,"Helvetica Neue",Arial,sans-serif',htmlFontSize:16}},ce=Object(le.a)(se),oe=function(){var e=Object(W.e)(re,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),void 0,Object(W.d)(W.a.apply(void 0,ee)));return{store:e,persistor:Object(J.b)(e)}}();l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(s.a,{store:oe.store},i.a.createElement(c.a,{loading:null,persistor:oe.persistor},i.a.createElement(o.a,{basename:"/sky9"},i.a.createElement(m.a,{theme:ce},i.a.createElement(u.a,null),i.a.createElement(G,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,a){},66:function(e,a,t){e.exports=t(101)},75:function(e,a,t){},93:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.9c19ae13.chunk.js.map