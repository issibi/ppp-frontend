(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{286:function(t,e,r){"use strict";r.r(e);var n=r(12),o=(r(41),r(20),r(48),r(279)),c=r(280);c.marked.use({gfm:!0,breaks:!0});var l={name:"team",layout:"team",data:function(){return{showCV:!1,showPub:!1,data:{pages:null,profiles:null}}},methods:{fetchContents:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.get("https://api.ppp.co.at//api/pages?populate=*");case 2:return r=e.sent,e.next=5,o.a.get("https://api.ppp.co.at//api/profiles?populate=*");case 5:n=e.sent,t.data.pages=r.data.data,t.data.profiles=n.data.data;case 8:case"end":return e.stop()}}),e)})))()},formatRte:function(t){return null!=t?Object(c.marked)(t):""}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchContents();case 2:case"end":return e.stop()}}),e)})))()},computed:{currentRouteName:function(){var t=this;return null!=this.data.profiles&&this.data.profiles.filter((function(e){return e.attributes.Slug===t.$route.params.team}))}}},m=r(16),component=Object(m.a)(l,(function(){var t=this,e=t._self._c;return e("article",[e("main",[t.showCV||t.showPub||!t.currentRouteName?t._e():e("div",[e("div",{domProps:{innerHTML:t._s(t.formatRte(t.currentRouteName[0].attributes.Basic_info))}}),t._v(" "),e("br"),t._v("\n      "+t._s(t.currentRouteName[0].attributes.Telephone)),e("br"),t._v("\n      "+t._s(t.currentRouteName[0].attributes.Email)),e("br"),t._v(" "),e("br")]),t._v(" "),t.currentRouteName&&null!==t.currentRouteName[0].attributes.Profile_image.data?e("img",{staticClass:"profile",attrs:{src:"https://api.ppp.co.at/"+t.currentRouteName[0].attributes.Profile_image.data.attributes.url,alt:""}}):t._e(),t._v(" "),t.showCV||t.showPub||!t.currentRouteName?t._e():e("div",[e("div",{domProps:{innerHTML:t._s(t.formatRte(t.currentRouteName[0].attributes.Introduction))}})]),t._v(" "),t.showCV||t.showPub?e("a",{staticClass:"close",on:{click:function(e){t.showCV=!1,t.showPub=!1}}},[e("svg",{attrs:{width:"27",height:"27",viewBox:"0 0 27 27",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("mask",{staticStyle:{"mask-type":"luminance"},attrs:{id:"mask0_0_1",maskUnits:"userSpaceOnUse",x:"2",y:"2",width:"24",height:"24"}},[e("path",{attrs:{d:"M25.1437 2.14453H2.1543V25.1339H25.1437V2.14453Z",fill:"white"}})]),t._v(" "),e("g",{attrs:{mask:"url(#mask0_0_1)"}},[e("path",{attrs:{d:"M25.1437 2.14453H2.1543V25.1339H25.1437V2.14453Z",fill:"#B1AA8D"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.883832 28.9307L28.9362 0.878295L26.4095 -1.64844L-1.6429 26.4039L0.883832 28.9307Z",fill:"white"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M28.9392 26.4055L0.886779 -1.64685L-1.63995 0.879883L26.4124 28.9323L28.9392 26.4055Z",fill:"white"}})]),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0.420959 0.412598H26.877V26.8686H0.420959V0.412598ZM3.88763 3.87927V23.402H23.4103V3.87927H3.88763Z",fill:"#B1AA8D"}})])]):t._e(),t._v(" "),t.showCV?e("div",[e("h1",[t._v("WERDEGANG")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.formatRte(t.currentRouteName[0].attributes.CV))}})]):t._e(),t._v(" "),t.showPub?e("div",[e("h1",[t._v("PUBLIKATIONEN")]),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.formatRte(t.currentRouteName[0].attributes.Publications))}})]):t._e()]),t._v(" "),e("aside",[(t.showCV||t.showPub)&&t.currentRouteName?e("div",[e("div",{domProps:{innerHTML:t._s(t.formatRte(t.currentRouteName[0].attributes.Basic_info))}}),t._v(" "),e("br"),t._v("\n      "+t._s(t.currentRouteName[0].attributes.Telephone)),e("br"),t._v("\n      "+t._s(t.currentRouteName[0].attributes.Email)),e("br")]):e("div",[e("br"),t._v(" "),t.currentRouteName&&t.currentRouteName[0].attributes.CV?e("a",{staticClass:"switch",on:{click:function(e){t.showCV=!t.showCV}}},[t._v("WERDEGANG >")]):t._e(),e("br"),t._v(" "),e("br"),t._v(" "),t.currentRouteName&&t.currentRouteName[0].attributes.Publications?e("a",{staticClass:"switch",on:{click:function(e){t.showPub=!t.showPub}}},[t._v("PUBLIKATIONEN >")]):t._e()])])])}),[],!1,null,null,null);e.default=component.exports}}]);