(this.webpackJsonprts_labs=this.webpackJsonprts_labs||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c(1),s=c.n(r),n=c(6),i=c.n(n),j=(c(20),c(2)),o=(c(21),c(3)),l=function(){var e=Object(o.c)((function(e){return e.terms})),t=Object(o.c)((function(e){return e.tags}));return e.length<=0?Object(a.jsx)("p",{children:"No searched recorded"}):e.map((function(e,c){return Object(a.jsxs)("div",{className:"box",children:[Object(a.jsxs)("p",{children:["Term Used: ",e]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Tags Used:"}),""===t[c]?"No tags used":t[c].split(",").map((function(e){return Object(a.jsx)("p",{children:e})}))]})]})}))},h=function(e){var t=Object(a.jsx)("h1",{children:"No Results Found"});return"search"===e.query?e.data.hits.length<=0?t:e.data.hits.map((function(e){return Object(a.jsxs)("div",{className:"box",children:[Object(a.jsxs)("p",{children:["Author: ",e.author]}),Object(a.jsxs)("p",{children:[" Title: ",e.title||e.story_title||"No Title Provided"]},e.objectID),Object(a.jsxs)("p",{children:["Created at: ",e.created_at]}),Object(a.jsxs)("p",{children:["ID: ",e.objectID]})]})})):"id"===e.query?Object(a.jsxs)("div",{className:"box",children:[Object(a.jsxs)("p",{children:["Author: ",e.data.author]}),Object(a.jsxs)("p",{children:["Title: ",e.data.title]}),Object(a.jsxs)("p",{children:["Created at: ",e.data.created_at]})]}):Object(a.jsxs)("div",{className:"box",children:[Object(a.jsxs)("p",{children:["username: ",e.data.username]}),Object(a.jsxs)("p",{children:["about: ",e.data.about]}),Object(a.jsxs)("p",{children:["Created at: ",e.data.created_at]})]})},d=function(e){return["story","comment","poll","pollopt","show_hn","ask_hn","front_page","author_","story_"].map((function(t){return"author_"!==t&&"story_"!==t?Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{children:t}),Object(a.jsx)("input",{className:"checked",onClick:e.handleTag,type:"checkbox",value:t,name:t})]},t):Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"text",placeholder:t.slice(0,-1),onChange:e.handleTag,value:"author_"===t?e.author:e.story,name:t})},t)}))},u=function(){var e=Object(r.useState)("search"),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(r.useState)(""),i=Object(j.a)(n,2),u=i[0],b=i[1],O=Object(r.useState)([]),x=Object(j.a)(O,2),p=x[0],m=x[1],g=Object(r.useState)(""),v=Object(j.a)(g,2),f=v[0],_=v[1],y=Object(r.useState)(""),T=Object(j.a)(y,2),D=T[0],N=T[1],S=Object(r.useState)([]),C=Object(j.a)(S,2),k=C[0],w=C[1],A=Object(r.useState)(!1),E=Object(j.a)(A,2),I=E[0],F=E[1],P=Object(o.b)();return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("h1",{children:"Hacker News Algolia API"}),Object(a.jsx)("form",{children:Object(a.jsxs)("select",{id:"queries",name:"queriesForm",onChange:function(e){s(e.target.value),w([]),m([]),_(""),N(""),F(!1)},children:[Object(a.jsx)("option",{value:"search",children:"Search by Term  or Tag (text)"}),Object(a.jsx)("option",{value:"id",children:"Search by ID (numeric)"}),Object(a.jsx)("option",{value:"username",children:"Search by Username (text)"})]})}),Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{onChange:function(e){b(e.target.value)},type:"text",placeholder:"Search Term"}),"search"===c?Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Select a tag(s) to filter your search"}),Object(a.jsx)(d,{handleTag:function(e){var t=p;if("text"===e.target.type)"author_"===e.target.name?_(e.target.value):N(e.target.value);else{var c=t.indexOf(e.target.value);c>-1?t.splice(c,1):t.push(e.target.value)}m(t)}})]}):"",Object(a.jsx)("input",{type:"submit",onClick:function(e){if(e.preventDefault(),u||p.length>0||D||f){var t=""!==u?u:"No term Provided",a=p.join();D&&(a+=""===a?"story_".concat(D):",story_".concat(D)),f&&(a+=""===a?"author_".concat(f):",author_".concat(f));var r="";switch(c){case"search":r="search?query=".concat(u,"&tags=").concat(a);break;case"id":r="items/".concat(u),a="id";break;case"username":r="users/".concat(u),a="username";break;default:return}P({type:"ADD_TERM",payload:t}),P({type:"ADD_TAG",payload:a}),fetch("https://hn.algolia.com/api/v1/"+r).then((function(e){return e.json()})).then((function(e){w(e),F(!1)})).catch((function(e){console.error(e),F(!0)}))}}})]}),I?Object(a.jsx)("h2",{style:{color:"red"},children:"Failed to Fetch. Please try with a different Query"}):"",Object(a.jsxs)("section",{className:"searchResults",children:[Object(a.jsxs)("div",{className:"resultsContainer",children:[Object(a.jsx)("h1",{children:"Results"}),k.length<=0?Object(a.jsx)("p",{children:"Please enter a search term"}):Object(a.jsx)(h,{query:c,data:k})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Your past search terms"}),Object(a.jsx)(l,{})]})]})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,29)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),r(e),s(e),n(e)}))},O=c(8),x=c(13),p=c(5),m={terms:[],tags:[]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TERM":return Object(p.a)(Object(p.a)({},e),{},{terms:[].concat(Object(x.a)(e.terms),[t.payload])});case"ADD_TAG":return Object(p.a)(Object(p.a)({},e),{},{tags:[].concat(Object(x.a)(e.tags),[t.payload])});default:return e}},v=Object(O.b)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(o.a,{store:v,children:Object(a.jsx)(u,{})})}),document.getElementById("root")),b()}},[[28,1,2]]]);
//# sourceMappingURL=main.c6654093.chunk.js.map