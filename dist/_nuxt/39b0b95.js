(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(t,e,n){"use strict";n.r(e);var o={actions:n(161).default};e.default=o},161:function(t,e,n){"use strict";n.r(e);n(1);var o={get:function(t,e){t.commit;var n=e.self;return new Promise((function(t,e){n.$axios.$get("/api/articles").then((function(e){t(e)})).catch((function(t){e(t)}))}))},deleteArticle:function(t,e){t.commit;var n=e.self,o=e.id;return new Promise((function(t,e){n.$axios.$delete("/api/articles/".concat(o)).then((function(e){t(e)})).catch((function(t){e(t)}))}))},newProduct:function(t,e){t.commit;var n=e.self,data=e.data;return new Promise((function(t,e){n.$axios.$post("/api/article/publish",data,{header:{"Content-Type":"multipart/form-data"}}).then((function(e){t(e)})).catch((function(t){e(t)}))}))},getFile:function(t,e){t.commit;var n=e.self,o=e.filename;return new Promise((function(t,e){n.$axios.$get("/api/static/".concat(o),{headers:{"content-type":"image/jpg"}}).then((function(e){t(e)})).catch((function(t){e(t)}))}))}};e.default=o},209:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("62f8e5a5",content,!0,{sourceMap:!1})},210:function(t,e,n){var content=n(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("b012caf2",content,!0,{sourceMap:!1})},232:function(t,e,n){"use strict";var o={data:function(){return{items:[]}}},c=n(52),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{items:t.items}}),t._v(" "),n("Nuxt"),t._v(" "),n("Footer")],1)}),[],!1,null,"53e65161",null);e.a=component.exports;installComponents(component,{Header:n(316).default,Footer:n(317).default})},234:function(t,e,n){n(235),t.exports=n(236)},258:function(t,e){},276:function(t,e,n){"use strict";n(209)},277:function(t,e,n){var o=n(70)(!1);o.push([t.i,".header[data-v-398c66be]{position:fixed;top:0;background:none;color:#f0f8ff;width:100%;background:#0f0f0f}.sufix[data-v-398c66be]{color:#fff;border-bottom:1px solid gold}.account[data-v-398c66be]{position:absolute;right:0;padding-right:10px}.account[data-v-398c66be],.item[data-v-398c66be]{color:grey;font-weight:700}@media screen and (max-width:500px){.header[data-v-398c66be]{padding:0;position:fixed;top:0;background:#232323;color:#f0f8ff;width:500px}.account[data-v-398c66be]{position:fixed;top:2.5vh}}",""]),t.exports=o},278:function(t,e,n){"use strict";n(210)},279:function(t,e,n){var o=n(70)(!1);o.push([t.i,".footer[data-v-f21b7660]{background:#00101d;color:#f5f5f5;bottom:0;position:fixed;width:100%}",""]),t.exports=o},280:function(t,e,n){"use strict";n.r(e),n.d(e,"stric",(function(){return r}));var o=n(68),c=n(160);new o.a.Store({state:{product:c.default}});var r=!1},281:function(t,e){},282:function(t,e){},316:function(t,e,n){"use strict";n.r(e);var o={props:{items:{type:Array}},methods:{navigate:function(t){this.$router.push({path:t})}}},c=(n(276),n(52)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("b-navbar",{attrs:{toggleable:"lg"}},[n("b-navbar-nav",[n("b-nav-item",{staticClass:"item mr-2",on:{click:function(e){return t.navigate("/")}}},[n("span",{staticClass:"sufix"},[t._v("EVA")])]),t._v(" "),t._l(t.items,(function(e,o){return n("b-nav-item",{key:o,staticClass:"mr-2",on:{click:function(n){return t.navigate(e.path)}}},[n("span",{staticClass:"item"},[t._v(t._s(e.name))])])})),t._v(" "),n("b-nav-item",[n("span",{staticClass:"account"},[t._v("Menu")])])],2)],1)],1)}),[],!1,null,"398c66be",null);e.default=component.exports},317:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{year:null}},computed:{getYear:function(){return(new Date).getFullYear()}}},c=(n(278),n(52)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer text-center py-4"},[n("b-col",[n("p",[t._v("Design and build with "),n("strong",[t._v("Nuxt Js")])]),t._v(" "),n("p",[t._v(" EVA © "+t._s(t.getYear)+" ")])])],1)}),[],!1,null,"f21b7660",null);e.default=component.exports}},[[234,6,1,7]]]);