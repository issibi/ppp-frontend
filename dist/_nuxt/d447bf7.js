(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    285: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = r(12),
        o = (r(40), r(20), r(48), r(278)),
        c = r(279);
      c.marked.use({ gfm: !0, breaks: !0 });
      var m = {
          name: "team",
          data: function () {
            return { data: { pages: null, profiles: null } };
          },
          methods: {
            fetchContents: function () {
              var t = this;
              return Object(n.a)(
                regeneratorRuntime.mark(function e() {
                  var r, n;
                  return regeneratorRuntime.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            o.a.get(
                              "https://api.ppp.co.at//api/pages?populate=*"
                            )
                          );
                        case 2:
                          return (
                            (r = e.sent),
                            (e.next = 5),
                            o.a.get(
                              "https://api.ppp.co.at//api/profiles?populate=*"
                            )
                          );
                        case 5:
                          (n = e.sent),
                            (t.data.pages = r.data.data),
                            (t.data.profiles = n.data.data);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            formatRte: function (t) {
              return null != t ? Object(c.marked)(t) : "";
            },
          },
          mounted: function () {
            var t = this;
            return Object(n.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.fetchContents();
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          computed: {
            currentRouteName: function () {
              var t = this;
              return (
                null != this.data.profiles &&
                this.data.profiles.filter(function (e) {
                  return e.attributes.Slug === t.$route.params.team;
                })
              );
            },
          },
        },
        d = r(19),
        component = Object(d.a)(
          m,
          function () {
            var t = this,
              e = t._self._c;
            return e("article", [
              e("main", [
                t.currentRouteName
                  ? e("div", [
                      e("div", {
                        domProps: {
                          innerHTML: t._s(
                            t.formatRte(
                              t.currentRouteName[0].attributes.Basic_info
                            )
                          ),
                        },
                      }),
                      t._v(" "),
                      e("br"),
                      t._v(
                        "\n      " +
                          t._s(t.currentRouteName[0].attributes.Telephone)
                      ),
                      e("br"),
                      t._v(
                        "\n      " +
                          t._s(t.currentRouteName[0].attributes.Email)
                      ),
                      e("br"),
                      t._v(" "),
                      e("br"),
                      t._v(" "),
                      e("div", {
                        domProps: {
                          innerHTML: t._s(
                            t.formatRte(
                              t.currentRouteName[0].attributes.Introduction
                            )
                          ),
                        },
                      }),
                      t._v(" "),
                      e("div", {
                        domProps: {
                          innerHTML: t._s(
                            t.formatRte(t.currentRouteName[0].attributes.CV)
                          ),
                        },
                      }),
                      t._v(" "),
                      e("div", {
                        domProps: {
                          innerHTML: t._s(
                            t.formatRte(
                              t.currentRouteName[0].attributes.Publications
                            )
                          ),
                        },
                      }),
                    ])
                  : t._e(),
              ]),
              t._v(" "),
              e("aside"),
            ]);
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
  },
]);
