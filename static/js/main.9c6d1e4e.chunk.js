(this["webpackJsonpfinbox-mini-app"]=this["webpackJsonpfinbox-mini-app"]||[]).push([[0],{131:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n(0),a=n.n(r),s=n(28),i=n.n(s),o=n(26),j=n(22),d=n(51),l=n(45),b=n.n(l),u=n(46),h="SET_USER",O="FETCH_ACCESS_TOKEN",p={access_token:""};var x="SET_FRIENDS",f=[];var v=function(e){return e.friends},m=Object(j.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload.user;default:return e}},friends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.payload.friends;default:return e}}}),y=n(21),k=n.n(y),w=n(23),S=n(29),g=n.n(S),_=k.a.mark(A);function A(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.send("VKWebAppGetAuthToken",{app_id:7712603,scope:"friends"}).catch((function(){alert("\u041f\u0440\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.")}));case 2:return e=t.sent,t.next=5,Object(w.b)({type:h,payload:{user:{access_token:e.access_token}}});case 5:case"end":return t.stop()}}),_)}var C=k.a.mark(E);function E(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.c)(O,A);case 2:case"end":return e.stop()}}),C)}var P=k.a.mark(T);function T(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.send("VKWebAppCallAPIMethod",{method:"friends.get",params:{order:"hints",fields:"nickname,photo_100",v:"5.21",access_token:D.getState().user.access_token}}).catch((function(){alert("\u041f\u0440\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.")}));case 2:return e=t.sent,t.next=5,Object(w.b)({type:x,payload:{friends:e.response.items}});case 5:case"end":return t.stop()}}),P)}var z=k.a.mark(M);function M(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.c)(h,T);case 2:case"end":return e.stop()}}),z)}var B=k.a.mark(R);function R(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(w.a)([E(),M()]);case 2:case"end":return e.stop()}}),B)}var U=n(47),N=Object(d.a)(),D=Object(j.createStore)(m,Object(u.composeWithDevTools)(Object(j.applyMiddleware)(b.a,N)));Object(U.a)();N.run(R);var I=n(34),K=n(7),V=n(137),W=n(138);function F(){return{type:O}}var J=n(41),q=n(52),G=n(136),H=n(135);function L(e){return Object(c.jsx)(K.s,{id:e.id,children:Object(c.jsx)(K.t,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"})})}var Q=n(50),X=(n(131),Object(Q.block)("dashboard-card"));function Y(e){return Object(c.jsx)(K.d,{children:Object(c.jsxs)("div",{className:X(),children:[Object(c.jsx)("span",{className:X("subtitle"),children:e.subtitle}),Object(c.jsx)("strong",{className:X("title"),children:e.title})]})})}function Z(){return Object(c.jsx)(K.m,{header:Object(c.jsx)(K.n,{mode:"primary",children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u0434\u043e\u043b\u0433\u0438"}),mode:"plain",children:Object(c.jsx)(K.e,{size:"m",children:Object(c.jsx)(Y,{subtitle:"\u0414\u0430\u043b \u0432 \u0434\u043e\u043b\u0433",title:"125 000 \u20bd"})})})}var $=Object(o.b)((function(e){return{friends:v(e)}}))((function(e){return Object(c.jsx)(K.m,{header:Object(c.jsx)(K.n,{mode:"primary",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),mode:"plain",children:e.friends.length>0?(t=e.friends,t.map((function(e){return Object(c.jsxs)(K.x,{before:Object(c.jsx)(K.b,{src:e.photo_100,size:48}),children:[e.first_name," ",e.last_name]})}))):Object(c.jsx)(K.y,{size:"medium"})});var t})),ee=n(134);function te(e){return Object(c.jsxs)(K.m,{header:Object(c.jsx)(K.n,{mode:"secondary",children:"\u041d\u0435\u0442 \u043f\u0440\u043e\u0441\u0440\u043e\u0447\u0435\u043d\u043d\u044b\u0445 \u0434\u043e\u043b\u0433\u043e\u0432"}),children:[Object(c.jsx)(K.f,{before:Object(c.jsx)(ee.a,{}),disabled:!0,children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443"}),Object(c.jsx)(K.f,{before:Object(c.jsx)(H.a,{}),onClick:function(){return e.onModalShow&&e.onModalShow("add-debt")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043b\u0433"})]})}function ne(e){return Object(c.jsxs)(K.s,{id:e.id,children:[Object(c.jsx)(K.t,{children:"\u0414\u043e\u043b\u0433\u0438"}),Object(c.jsx)(te,{onModalShow:e.onShowModal}),Object(c.jsx)(Z,{}),Object(c.jsx)($,{})]})}var ce,re=Object(o.b)((function(e){return{friends:v(e)}}))((function(e){var t=a.a.useState(null),n=Object(I.a)(t,2),r=n[0],s=n[1],i=Object(c.jsx)(K.r,{activeModal:r,onClose:function(){return s(null)},children:Object(c.jsx)(K.p,{id:"add-debt",header:Object(c.jsx)(K.q,{left:Object(c.jsx)(K.u,{onClick:function(){return s(null)},children:Object(c.jsx)(G.a,{})}),children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0434\u043e\u043b\u0433"}),children:Object(c.jsxs)(K.m,{children:[Object(c.jsxs)(K.k,{children:[Object(c.jsxs)(K.l,{mode:"horizontal",children:[Object(c.jsx)(K.j,{children:Object(c.jsx)(K.v,{name:"type",value:"lent",defaultChecked:!0,children:"\u0414\u0430\u043b \u0432 \u0434\u043e\u043b\u0433"})}),Object(c.jsx)(K.j,{children:Object(c.jsx)(K.v,{name:"type",value:"borrowed",children:"\u0414\u0430\u043b \u0432 \u0434\u043e\u043b\u0433"})})]}),Object(c.jsxs)(K.l,{mode:"horizontal",children:[Object(c.jsx)(K.j,{top:"\u0421\u0443\u043c\u043c\u0430",children:Object(c.jsx)(K.o,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443"})}),Object(c.jsx)(K.j,{top:"\u0412\u0430\u043b\u044e\u0442\u0430",children:Object(c.jsx)(K.w,{options:[{value:"RUB",label:"RUB"},{value:"USD",label:"USD"}],placeholder:"\u0412\u0430\u043b\u044e\u0442\u0430",defaultValue:"RUB"})})]})]}),Object(c.jsx)(K.j,{top:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442",children:Object(c.jsx)(K.w,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",options:function(e){var t=[];return e.forEach((function(e){t.push({value:e.id,label:"".concat(e.first_name," ").concat(e.last_name),avatar:e.photo_100})})),t}(e.friends),renderOption:function(e){var t=e.option,n=Object(q.a)(e,["option"]);return Object(c.jsx)(K.g,Object(J.a)(Object(J.a)({},n),{},{before:Object(c.jsx)(K.b,{size:24,src:t.avatar})}))}})}),Object(c.jsx)(K.j,{top:"\u0414\u0430\u0442\u0430 \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430",children:Object(c.jsx)(K.h,{min:{day:1,month:1,year:1901},max:{day:1,month:1,year:2020},dayPlaceholder:"\u0414",monthPlaceholder:"\u041c\u041c",yearPlaceholder:"\u0413\u0413"})}),Object(c.jsx)(K.j,{children:Object(c.jsx)(K.c,{mode:"primary",size:"l",before:Object(c.jsx)(H.a,{}),stretched:!0,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})})});return Object(c.jsx)(K.B,{id:e.id,modal:i,activePanel:e.activePanel,children:Object(c.jsx)(ne,{id:e.id,onShowModal:function(e){return s(e)}})})}));function ae(e){return Object(c.jsx)(K.B,{id:e.id,activePanel:e.activePanel,children:Object(c.jsx)(L,{id:e.id})})}!function(e){e.Catalog="catalog",e.App="app"}(ce||(ce={}));var se=ce;var ie=Object(o.b)(null,(function(e){return{fetchAccessToken:Object(j.bindActionCreators)(F,e)}}))((function(e){var t=a.a.useState(se.App),n=Object(I.a)(t,2),r=n[0],s=n[1];function i(e){return s(e.currentTarget.dataset.story)}return a.a.useEffect((function(){e.fetchAccessToken()}),[e]),Object(c.jsx)(K.a,{children:Object(c.jsxs)(K.i,{activeStory:r,tabbar:Object(c.jsxs)(K.z,{children:[Object(c.jsx)(K.A,{onClick:i,selected:r===se.Catalog,"data-story":se.Catalog,children:Object(c.jsx)(V.a,{})}),Object(c.jsx)(K.A,{onClick:i,selected:r===se.App,"data-story":se.App,children:Object(c.jsx)(W.a,{})})]}),children:[Object(c.jsx)(ae,{id:se.Catalog,activePanel:se.Catalog}),Object(c.jsx)(re,{id:se.App,activePanel:se.App})]})})}));function oe(){return Object(c.jsx)(o.a,{store:D,children:Object(c.jsx)(ie,{})})}n(132);i.a.render(Object(c.jsx)(oe,{}),document.getElementById("root"))}},[[133,1,2]]]);
//# sourceMappingURL=main.9c6d1e4e.chunk.js.map