(this["webpackJsonpname-guesser"]=this["webpackJsonpname-guesser"]||[]).push([[0],{11:function(e,n,t){},12:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),r=t(5),s=t.n(r),i=(t(11),t(12),t(3)),o=t.n(i),b=t(6),l=t(4),u=t(0);var j=function(e){return Object(u.jsxs)("div",{className:"name-container",children:[Object(u.jsxs)("h2",{className:"cell one",children:["Name:",Object(u.jsx)("br",{})," ",e.nameInfo.name]}),Object(u.jsxs)("h2",{className:"cell two",children:["Gender: ",Object(u.jsx)("br",{})," ",e.nameInfo.gender]}),Object(u.jsxs)("h2",{className:"cell",children:["probability: ",Object(u.jsx)("br",{})," ",e.nameInfo.probability]})]})};var h=function(){var e=Object(c.useState)(""),n=Object(l.a)(e,2),t=n[0],a=n[1],r=Object(c.useState)({name:"",gender:"",probability:""}),s=Object(l.a)(r,2),i=s[0],h=s[1];function m(){return(m=Object(b.a)(o.a.mark((function e(n){var c,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,fetch("https://api.genderize.io?name=".concat(t));case 4:return c=e.sent,e.next=7,c.json();case 7:a=e.sent,h({name:a.name,gender:a.gender,probability:a.probability}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Name Checker"}),Object(u.jsx)(j,{nameInfo:i}),Object(u.jsxs)("form",{className:"form",onSubmit:function(e){return m.apply(this,arguments)},children:[Object(u.jsx)("input",{type:"text",placeholder:"type name here",name:"nameInput",value:t,onChange:function(e){a(e.target.value)}}),Object(u.jsx)("button",{children:"Search"})]})]})};var m=function(){return Object(u.jsx)(h,{})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.07ca7638.chunk.js.map