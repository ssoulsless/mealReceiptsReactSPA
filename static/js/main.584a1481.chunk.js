(this.webpackJsonpfirstspa=this.webpackJsonpfirstspa||[]).push([[0],{21:function(e,t,c){},37:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c.n(n),a=c(23),s=c.n(a),i=(c(21),c(8)),j=c(5),o=c(0);function l(){return Object(o.jsx)("div",{className:"page-footer text-center",children:"Copyright 2021"})}function b(){return Object(o.jsx)("div",{className:"shadow-sm p-3 mb-5 bg-body rounded",id:"header-nav__wrapper",children:Object(o.jsxs)("ul",{className:"nav nav-pills nav-fill",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link",to:"/about",children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link",to:"/contacts",children:"Contact"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(i.b,{className:"nav-link",to:"https://github.com/ssoulsless/ReactShopProject",tabIndex:"-1","aria-disabled":"true",children:"Repo"})})]})})}function u(){return Object(o.jsx)("h1",{children:"Hello from About Page"})}var h=c(12),d=c(13),O=c.n(d),x=c(15),m="https://www.themealdb.com/api/json/v1/".concat("1"),p=function(){var e=Object(x.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"/lookup.php?i="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"/categories.php");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(x.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m+"/filter.php?c="+t);case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function g(){return Object(o.jsx)("div",{className:"spinner-border",role:"status"})}var y=c(14),N=c(38),w=c(39),C=c(40),k=c(41),M=c(42);function S(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(N.a,{className:"card",children:[Object(o.jsx)(w.a,{top:!0,width:"100%",src:c,alt:t}),Object(o.jsxs)(C.a,{className:"card-body text-center",children:[Object(o.jsx)(k.a,{tag:"h5",children:t}),Object(o.jsxs)(M.a,{children:[n.slice(0,60),"..."]})]}),Object(o.jsx)(i.b,{to:"/category/".concat(t),className:"btn btn-primary card-btn",children:"Watch category"})]})})}function F(e){var t=e.catalog,c=void 0===t?[]:t;return Object(o.jsx)("div",{className:"list",children:c.map((function(e){return Object(o.jsx)(S,Object(y.a)({},e),e.idCategory)}))})}var R=c(44);function A(e){var t=e.cb,c=Object(n.useState)(""),r=Object(h.a)(c,2),a=r[0],s=r[1],i=function(){t(a)};return Object(o.jsxs)("div",{className:"search-form",children:[Object(o.jsx)(R.a,{type:"search",placeholder:"searching...",id:"search-field",onChange:function(e){return s(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&i()},value:a}),Object(o.jsx)("button",{className:"btn btn-primary ",onClick:i,children:"Search"})]})}function B(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(h.a)(a,2),i=s[0],l=s[1],b=Object(j.g)(),u=b.pathname,d=b.search,O=Object(j.f)().push;return Object(n.useEffect)((function(){f().then((function(e){r(e.categories),l(d?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(d.split("=")[1].toLowerCase())})):e.categories)}))}),[d]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(A,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:u,search:"?search=".concat(e)})}}),c.length?Object(o.jsx)(F,{catalog:i}):Object(o.jsx)(g,{})]})}function E(){return Object(o.jsx)("h1",{children:"Hello from Contact Page"})}function I(){return Object(o.jsx)("h1",{children:"Hello from NotFound Page"})}function P(e){var t=e.strMeal,c=e.idMeal,n=e.strMealThumb;return Object(o.jsxs)(N.a,{children:[Object(o.jsx)(w.a,{top:!0,width:"100%",src:n,alt:"Card image cap"}),Object(o.jsx)(C.a,{children:Object(o.jsx)(k.a,{tag:"h5",children:t})}),Object(o.jsx)(i.b,{to:"/meal/".concat(c),className:"btn btn-primary",children:"Watch Recipe"})]})}function H(e){var t=e.meals;return Object(o.jsx)("div",{className:"list",children:t.map((function(e){return Object(o.jsx)(P,Object(y.a)({},e),e.idMeal)}))})}function L(){var e=Object(j.h)().name,t=Object(n.useState)([]),c=Object(h.a)(t,2),r=c[0],a=c[1],s=Object(j.f)().goBack;return Object(n.useEffect)((function(){v(e).then((function(e){return a(e.meals)}))}),[e]),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"btn btn-primary",onClick:s,children:"Go Back"}),r.length?Object(o.jsx)(H,{meals:r}):Object(o.jsx)(g,{})]})}var T=c(43);function D(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(j.h)().id,s=Object(j.f)().goBack;return Object(n.useEffect)((function(){p(a).then((function(e){return r(e.meals[0])}))}),[a]),Object(o.jsxs)(o.Fragment,{children:[c.length?Object(o.jsx)(g,{}):Object(o.jsxs)("div",{className:"recipe text-center",children:[Object(o.jsx)("img",{src:c.strMealThumb,alt:c.strMeal}),Object(o.jsx)("h1",{children:c.strMeal}),Object(o.jsxs)("h6",{children:["Category: ",c.strCategory]}),c.strArea&&Object(o.jsxs)("h6",{children:["Come from: ",c.strArea]}),Object(o.jsxs)(T.a,{striped:!0,children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Ingredient"}),Object(o.jsx)("th",{children:"Measure"})]})}),Object(o.jsx)("tbody",{children:Object.keys(c).map((function(e){if(e.includes("Ingredient")&&c[e])return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:c[e]}),Object(o.jsx)("td",{children:c["strMeasure".concat(e.slice(13))]})]},e)}))})]}),Object(o.jsx)("p",{children:c.strInstructions}),c.strYoutube&&Object(o.jsxs)("div",{children:[Object(o.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"Video Recipe"}),Object(o.jsx)("iframe",{title:a,src:"https://www.youtube.com/embed/".concat(c.strYoutube.slice(-11)),allowFullScreen:!0})]})]}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary",onClick:s,children:"Go Back"})]})}var G=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(i.a,{basename:"/mealReceiptsReactSPA",children:[Object(o.jsx)(b,{}),Object(o.jsx)("main",{className:"content container",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:B}),Object(o.jsx)(j.a,{path:"/about",component:u}),Object(o.jsx)(j.a,{path:"/contacts",component:E}),Object(o.jsx)(j.a,{path:"/category/:name",component:L}),Object(o.jsx)(j.a,{path:"/meal/:id",component:D}),Object(o.jsx)(j.a,{component:I})]})}),Object(o.jsx)(l,{})]})})};c(36);s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(G,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.584a1481.chunk.js.map