!function (e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var i = t[n] = {i: n, l: !1, exports: {}};
    return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
  }

  r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) r.d(n, i, function (t) {
      return e[t]
    }.bind(null, i));
    return n
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default
    } : function () {
      return e
    };
    return r.d(t, "a", t), t
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, r.p = "/pwademo/", r(r.s = "tjUo")
}({
  tjUo: function (e, t, r) {
    "use strict";
    r.r(t);
    try {
      self["workbox:window:5.1.3"] && _()
    } catch (e) {
    }

    function n(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }

    try {
      self["workbox:core:5.1.3"] && _()
    } catch (e) {
    }
    var i = function () {
      var e = this;
      this.promise = new Promise((function (t, r) {
        e.resolve = t, e.reject = r
      }))
    };

    function o(e, t) {
      var r = location.href;
      return new URL(e, r).href === new URL(t, r).href
    }

    var a = function (e, t) {
      this.type = e, Object.assign(this, t)
    };

    function s(e, t, r) {
      return r ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
    }

    function c() {
    }

    var u = function (e) {
      var t, r;

      function c(t, r) {
        var n, c;
        return void 0 === r && (r = {}), (n = e.call(this) || this).t = {}, n.i = 0, n.o = new i, n.u = new i, n.s = new i, n.v = 0, n.h = new Set, n.l = function () {
          var e = n.g, t = e.installing;
          n.i > 0 || !o(t.scriptURL, n.m) || performance.now() > n.v + 6e4 ? (n.P = t, e.removeEventListener("updatefound", n.l)) : (n.p = t, n.h.add(t), n.o.resolve(t)), ++n.i, t.addEventListener("statechange", n.k)
        }, n.k = function (e) {
          var t = n.g, r = e.target, i = r.state, o = r === n.P, s = o ? "external" : "", c = {sw: r, originalEvent: e};
          !o && n.j && (c.isUpdate = !0), n.dispatchEvent(new a(s + i, c)), "installed" === i ? n.O = self.setTimeout((function () {
            "installed" === i && t.waiting === r && n.dispatchEvent(new a(s + "waiting", c))
          }), 200) : "activating" === i && (clearTimeout(n.O), o || n.u.resolve(r))
        }, n.R = function (e) {
          var t = n.p;
          t === navigator.serviceWorker.controller && (n.dispatchEvent(new a("controlling", {
            sw: t,
            originalEvent: e,
            isUpdate: n.j
          })), n.s.resolve(t))
        }, n.S = (c = function (e) {
          var t = e.data, r = e.source;
          return s(n.getSW(), (function () {
            n.h.has(r) && n.dispatchEvent(new a("message", {data: t, sw: r, originalEvent: e}))
          }))
        }, function () {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          try {
            return Promise.resolve(c.apply(this, e))
          } catch (e) {
            return Promise.reject(e)
          }
        }), n.m = t, n.t = r, navigator.serviceWorker.addEventListener("message", n.S), n
      }

      r = e, (t = c).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r;
      var u, v, d = c.prototype;
      return d.register = function (e) {
        var t = (void 0 === e ? {} : e).immediate, r = void 0 !== t && t;
        try {
          var n = this;
          return function (e, t) {
            var r = e();
            return r && r.then ? r.then(t) : t()
          }((function () {
            if (!r && "complete" !== document.readyState) return l(new Promise((function (e) {
              return window.addEventListener("load", e)
            })))
          }), (function () {
            return n.j = Boolean(navigator.serviceWorker.controller), n.U = n.B(), s(n.L(), (function (e) {
              n.g = e, n.U && (n.p = n.U, n.u.resolve(n.U), n.s.resolve(n.U), n.U.addEventListener("statechange", n.k, {once: !0}));
              var t = n.g.waiting;
              return t && o(t.scriptURL, n.m) && (n.p = t, Promise.resolve().then((function () {
                n.dispatchEvent(new a("waiting", {sw: t, wasWaitingBeforeRegister: !0}))
              })).then((function () {
              }))), n.p && (n.o.resolve(n.p), n.h.add(n.p)), n.g.addEventListener("updatefound", n.l), navigator.serviceWorker.addEventListener("controllerchange", n.R, {once: !0}), n.g
            }))
          }))
        } catch (e) {
          return Promise.reject(e)
        }
      }, d.update = function () {
        try {
          return this.g ? l(this.g.update()) : void 0
        } catch (e) {
          return Promise.reject(e)
        }
      }, d.getSW = function () {
        try {
          return void 0 !== this.p ? this.p : this.o.promise
        } catch (e) {
          return Promise.reject(e)
        }
      }, d.messageSW = function (e) {
        try {
          return s(this.getSW(), (function (t) {
            return function (e, t) {
              return new Promise((function (r) {
                var n = new MessageChannel;
                n.port1.onmessage = function (e) {
                  r(e.data)
                }, e.postMessage(t, [n.port2])
              }))
            }(t, e)
          }))
        } catch (e) {
          return Promise.reject(e)
        }
      }, d.B = function () {
        var e = navigator.serviceWorker.controller;
        return e && o(e.scriptURL, this.m) ? e : void 0
      }, d.L = function () {
        try {
          var e = this;
          return function (e, t) {
            try {
              var r = e()
            } catch (e) {
              return t(e)
            }
            return r && r.then ? r.then(void 0, t) : r
          }((function () {
            return s(navigator.serviceWorker.register(e.m, e.t), (function (t) {
              return e.v = performance.now(), t
            }))
          }), (function (e) {
            throw e
          }))
        } catch (e) {
          return Promise.reject(e)
        }
      }, u = c, (v = [{
        key: "active", get: function () {
          return this.u.promise
        }
      }, {
        key: "controlling", get: function () {
          return this.s.promise
        }
      }]) && n(u.prototype, v), c
    }(function () {
      function e() {
        this.M = new Map
      }

      var t = e.prototype;
      return t.addEventListener = function (e, t) {
        this._(e).add(t)
      }, t.removeEventListener = function (e, t) {
        this._(e).delete(t)
      }, t.dispatchEvent = function (e) {
        e.target = this;
        var t = this._(e.type), r = Array.isArray(t), n = 0;
        for (t = r ? t : t[Symbol.iterator](); ;) {
          var i;
          if (r) {
            if (n >= t.length) break;
            i = t[n++]
          } else {
            if ((n = t.next()).done) break;
            i = n.value
          }
          i(e)
        }
      }, t._ = function (e) {
        return this.M.has(e) || this.M.set(e, new Set), this.M.get(e)
      }, e
    }());

    function l(e, t) {
      if (!t) return e && e.then ? e.then(c) : Promise.resolve()
    }

    "serviceWorker" in navigator && window.addEventListener("load", () => {
      const e = new u("/pwademo/service-worker.js"), t = document.querySelector("#app-update"), r = r => {
        t.classList.add("show"), t.addEventListener("click", () => {
          e.addEventListener("controlling", e => {
            window.location.reload()
          }), e.messageSW({type: "SKIP_WAITING"})
        })
      };
      e.addEventListener("waiting", r), e.addEventListener("externalwaiting", r), e.register()
    }), fetch("https://api.exchangeratesapi.io/latest").then(e => {
      if (!e.ok) throw e.statusText;
      return e
    }).then(e => e.json()).then(e => {
      const t = document.querySelector("#main");
      if (!e || !e.rates) return t.innerHTML = "There was an error. Please try again.", !1;
      let r = "";
      for (const [t, n] of Object.entries(e.rates)) r += `<article class="card card-currency">\n            <div class="currency">${t}</div>\n            <div class="rate">${n}</div>\n        </article>`;
      t.innerHTML = r
    }).catch(e => {
      document.querySelector("#main").innerHTML = "There was an error. Please try again."
    })
  }
});
//# sourceMappingURL=main.eb25348a6354fdf77db1.js.map
