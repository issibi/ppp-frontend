(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{282:function(t,e,r){"use strict";r.r(e);var n=r(12),o=(r(40),r(19),r(48),r(276)),c=r(277);c.marked.use({gfm:!0,breaks:!0});var d={name:"rechtsgebiete",data:function(){return{data:{pages:null,profiles:null}}},methods:{fetchContents:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://strapi-g0fi.onrender.com/api/pages?populate=*");case 2:return r=e.sent,e.next=5,o.a.get("https://strapi-g0fi.onrender.com/api/profiles?populate=*");case 5:n=e.sent,t.data.pages=r.data.data,t.data.profiles=n.data.data;case 8:case"end":return e.stop()}}),e)})))()},formatRte:function(t){return null!=t?Object(c.marked)(t):""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchContents();case 2:case"end":return e.stop()}}),e)})))()},computed:{currentRouteName:function(){var t=this;return null!=this.data.pages&&this.data.pages.filter((function(e){return e.attributes.Slug===t.$route.params.rechtsgebiete}))}}},m=r(26),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return t.currentRouteName?e("article",[e("main",[e("h1",[t._v(t._s(t.currentRouteName[0].attributes.Title))]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.formatRte(t.currentRouteName[0].attributes.Content))}}),t._v(" "),t._e(),t._v(" "),t._e()]),t._v(" "),e("img",{staticClass:"background",attrs:{src:"https://strapi-g0fi.onrender.com"+t.currentRouteName[0].attributes.Image_desktop.data.attributes.url,alt:""}}),t._v(" "),e("aside",[e("div",{domProps:{innerHTML:t._s(t.formatRte(t.currentRouteName[0].attributes.Hashtags))}})])]):t._e()}),[],!1,null,null,null);e.default=component.exports}}]);