(this["webpackJsonpfinbox-mini-app"]=this["webpackJsonpfinbox-mini-app"]||[]).push([[0],{144:function(e,t,c){},146:function(e,t,c){"use strict";c.r(t);var n=c(7),r=c(0),a=c.n(r),s=c(21),i=c.n(s),o=c(26),j=c(16),u=c(47),d=c(40),l=c.n(d),b=c(41),p="SET_USER",O="FETCH_ACCESS_TOKEN",h={access_token:""};var f=function(e){return e.user},x=Object(j.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return t.payload.user;default:return e}}}),v=c(19),m=c.n(v),k=c(27),g=c(22),A=c.n(g),y=m.a.mark(C);function C(){var e;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.a.send("VKWebAppGetAuthToken",{app_id:7712603,scope:"friends"}).catch((function(){alert("\u041f\u0440\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.")}));case 2:return e=t.sent,t.next=5,Object(k.b)({type:p,payload:{user:{access_token:e.access_token}}});case 5:case"end":return t.stop()}}),y)}var _=m.a.mark(w);function w(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.c)(O,C);case 2:case"end":return e.stop()}}),_)}var E=m.a.mark(T);function T(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.a)([w()]);case 2:case"end":return e.stop()}}),E)}var S=c(42),N=Object(u.a)(),K=Object(j.createStore)(x,Object(b.composeWithDevTools)(Object(j.applyMiddleware)(l.a,N)));Object(S.a)();N.run(T);var P=c(46),W=c(9),z=c(147),I=c(148);function J(){return{type:O}}function M(e){return Object(n.jsx)(W.h,{id:e.id,children:Object(n.jsx)(W.i,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"})})}var R=c(45),V=(c(144),Object(R.block)("dashboard-card"));function B(e){return Object(n.jsx)(W.c,{children:Object(n.jsxs)("div",{className:V(),children:[Object(n.jsx)("span",{className:V("subtitle"),children:e.subtitle}),Object(n.jsx)("strong",{className:V("title"),children:e.title})]})})}function D(){return Object(n.jsx)(W.f,{header:Object(n.jsx)(W.g,{mode:"primary",children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0434\u043e\u043b\u0433\u0438"}),mode:"plain",children:Object(n.jsx)(W.d,{size:"m",children:Object(n.jsx)(B,{subtitle:"\u0414\u0430\u043b \u0432 \u0434\u043e\u043b\u0433",title:"125 000 \u20bd"})})})}var F,G=Object(o.b)((function(e){return{access_token:f(e).access_token}}))((function(e){return a.a.useEffect((function(){A.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:{order:"hints",v:"5.21",access_token:e.access_token}}).then((function(e){return console.log("111",e)})).catch((function(e){return console.log("111",e)}))}),[e]),Object(n.jsx)(W.f,{header:Object(n.jsx)(W.g,{mode:"primary",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),mode:"plain",children:Object(n.jsx)(W.j,{description:"\u0414\u0430\u043b \u0432 \u0434\u043e\u043b\u0433 125 000 \u20bd",before:Object(n.jsx)(W.b,{size:48}),children:"\u0414\u0430\u043d\u0438\u0438\u043b \u0424\u0435\u0442\u0438\u0441\u043e\u0432"})})}));function H(e){return Object(n.jsxs)(W.h,{id:e.id,children:[Object(n.jsx)(W.i,{children:"\u0414\u043e\u043b\u0433\u0438"}),Object(n.jsx)(D,{}),Object(n.jsx)(G,{})]})}!function(e){e.Catalog="catalog",e.App="app"}(F||(F={}));var U=F;var q=Object(o.b)(null,(function(e){return{fetchAccessToken:Object(j.bindActionCreators)(J,e)}}))((function(e){var t=a.a.useState(U.App),c=Object(P.a)(t,2),r=c[0],s=c[1];function i(e){return s(e.currentTarget.dataset.story)}return a.a.useEffect((function(){e.fetchAccessToken()}),[e]),Object(n.jsx)(W.a,{children:Object(n.jsxs)(W.e,{activeStory:r,tabbar:Object(n.jsxs)(W.k,{children:[Object(n.jsx)(W.l,{onClick:i,selected:r===U.Catalog,"data-story":U.Catalog,children:Object(n.jsx)(z.a,{})}),Object(n.jsx)(W.l,{onClick:i,selected:r===U.App,"data-story":U.App,children:Object(n.jsx)(I.a,{})})]}),children:[Object(n.jsx)(W.m,{id:U.Catalog,activePanel:U.Catalog,children:Object(n.jsx)(M,{id:U.Catalog})}),Object(n.jsx)(W.m,{id:U.App,activePanel:U.App,children:Object(n.jsx)(H,{id:U.App})})]})})}));function L(){return Object(n.jsx)(o.a,{store:K,children:Object(n.jsx)(q,{})})}c(145);i.a.render(Object(n.jsx)(L,{}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.227edcf8.chunk.js.map