(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{192:function(t,e,r){"use strict";r.r(e);var n=r(26),component=Object(n.a)({},(function(){var t=this._self._c;return t("header",[t("a",{staticClass:"logo",attrs:{href:"/"}}),this._v(" "),t("button",{staticClass:"toggle"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"48",viewBox:"0 96 960 960",width:"48"}},[t("path",{attrs:{fill:"currentColor",d:"M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"}})])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(192).default})},200:function(t,e,r){"use strict";var n=r(26),component=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("Header"),t._v(" "),e("Navigation"),t._v(" "),e("div",[e("Nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:r(192).default,Navigation:r(274).default})},201:function(t,e,r){r(202),t.exports=r(203)},274:function(t,e,r){"use strict";r.r(e);var n=r(12),o=(r(40),r(19),r(45),r(48),r(276)),l={name:"Navigation",data:function(){return{data:{mains:[],subs:[],pages:[],profiles:[]}}},methods:{fetchContents:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://strapi-g0fi.onrender.com/api/mains?populate=*");case 2:return r=e.sent,e.next=5,o.a.get("https://strapi-g0fi.onrender.com/api/subs?populate=*");case 5:return n=e.sent,e.next=8,o.a.get("https://strapi-g0fi.onrender.com/api/pages?populate=*");case 8:return l=e.sent,e.next=11,o.a.get("https://strapi-g0fi.onrender.com/api/profiles?populate=*");case 11:c=e.sent,t.data.mains=r.data.data,t.data.subs=n.data.data,t.data.pages=l.data.data,t.data.profiles=c.data.data;case 16:case"end":return e.stop()}}),e)})))()},pages:function(t){return this.data.pages.filter((function(e){return null!==e.attributes.main_category.data&&e.attributes.main_category.data.id===t}))},subs:function(t){return this.data.subs.filter((function(e){return e.attributes.main_category.data.id===t}))},profiles:function(t){return this.data.profiles.filter((function(e){return e.attributes.sub_category.data.id===t}))},currentRouteName:function(t){return Object.keys(this.$route.params)[0]==t?"active":""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchContents();case 2:case"end":return e.stop()}}),e)})))()},computed:{}},c=r(26),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("nav",[e("ul",t._l(t.data.mains,(function(r,n){return e("li",{key:n},[e("NuxtLink",{class:t.currentRouteName(r.attributes.Slug),attrs:{to:"/"+r.attributes.Slug+"/"+(null!==r.attributes.page.data?r.attributes.page.data.attributes.Slug:r.attributes.profile.data.attributes.Slug)}},[t._v("\n        "+t._s(r.attributes.Title)+"\n      ")]),t._v(" "),e("ul",[t._l(t.pages(r.id),(function(n,o){return e("li",{key:o},[e("NuxtLink",{attrs:{to:"/"+r.attributes.Slug+"/"+n.attributes.Slug}},[t._v("\n            "+t._s(n.attributes.Title)+"\n          ")])],1)})),t._v(" "),t._l(t.subs(r.id),(function(sub,n){return e("li",{key:n},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("\n            "+t._s(sub.attributes.Title)+"\n          ")]),t._v(" "),e("ul",t._l(t.profiles(sub.id),(function(n,o){return e("li",{key:o},[e("NuxtLink",{attrs:{to:"/"+r.attributes.Slug+"/"+n.attributes.Slug}},[t._v("\n                "+t._s(n.attributes.Profile_title)+"\n              ")])],1)})),0)])}))],2)],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}},[[201,10,2,11]]]);