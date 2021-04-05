!(function (e) {
  var t = window.webpackHotUpdate;
  window.webpackHotUpdate = function (e, n) {
    !(function (e, t) {
      if (!x[e] || !w[e]) return;
      for (var n in ((w[e] = !1), t))
        Object.prototype.hasOwnProperty.call(t, n) && (f[n] = t[n]);
      0 == --v && 0 === y && C();
    })(e, n),
      t && t(e, n);
  };
  var n,
    i = !0,
    r = "6d6b3339a12df520a8ea",
    o = {},
    s = [],
    a = [];
  function l(e) {
    var t = T[e];
    if (!t) return I;
    var i = function (i) {
        return (
          t.hot.active
            ? (T[i]
                ? -1 === T[i].parents.indexOf(e) && T[i].parents.push(e)
                : ((s = [e]), (n = i)),
              -1 === t.children.indexOf(i) && t.children.push(i))
            : (console.warn(
                "[HMR] unexpected require(" + i + ") from disposed module " + e
              ),
              (s = [])),
          I(i)
        );
      },
      r = function (e) {
        return {
          configurable: !0,
          enumerable: !0,
          get: function () {
            return I[e];
          },
          set: function (t) {
            I[e] = t;
          },
        };
      };
    for (var o in I)
      Object.prototype.hasOwnProperty.call(I, o) &&
        "e" !== o &&
        "t" !== o &&
        Object.defineProperty(i, o, r(o));
    return (
      (i.e = function (e) {
        return (
          "ready" === h && p("prepare"),
          y++,
          I.e(e).then(t, function (e) {
            throw (t(), e);
          })
        );
        function t() {
          y--, "prepare" === h && (b[e] || _(e), 0 === y && 0 === v && C());
        }
      }),
      (i.t = function (e, t) {
        return 1 & t && (e = i(e)), I.t(e, -2 & t);
      }),
      i
    );
  }
  function c(t) {
    var i = {
      _acceptedDependencies: {},
      _declinedDependencies: {},
      _selfAccepted: !1,
      _selfDeclined: !1,
      _selfInvalidated: !1,
      _disposeHandlers: [],
      _main: n !== t,
      active: !0,
      accept: function (e, t) {
        if (void 0 === e) i._selfAccepted = !0;
        else if ("function" == typeof e) i._selfAccepted = e;
        else if ("object" == typeof e)
          for (var n = 0; n < e.length; n++)
            i._acceptedDependencies[e[n]] = t || function () {};
        else i._acceptedDependencies[e] = t || function () {};
      },
      decline: function (e) {
        if (void 0 === e) i._selfDeclined = !0;
        else if ("object" == typeof e)
          for (var t = 0; t < e.length; t++) i._declinedDependencies[e[t]] = !0;
        else i._declinedDependencies[e] = !0;
      },
      dispose: function (e) {
        i._disposeHandlers.push(e);
      },
      addDisposeHandler: function (e) {
        i._disposeHandlers.push(e);
      },
      removeDisposeHandler: function (e) {
        var t = i._disposeHandlers.indexOf(e);
        t >= 0 && i._disposeHandlers.splice(t, 1);
      },
      invalidate: function () {
        switch (((this._selfInvalidated = !0), h)) {
          case "idle":
            ((f = {})[t] = e[t]), p("ready");
            break;
          case "ready":
            P(t);
            break;
          case "prepare":
          case "check":
          case "dispose":
          case "apply":
            (g = g || []).push(t);
        }
      },
      check: E,
      apply: O,
      status: function (e) {
        if (!e) return h;
        u.push(e);
      },
      addStatusHandler: function (e) {
        u.push(e);
      },
      removeStatusHandler: function (e) {
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1);
      },
      data: o[t],
    };
    return (n = void 0), i;
  }
  var u = [],
    h = "idle";
  function p(e) {
    h = e;
    for (var t = 0; t < u.length; t++) u[t].call(null, e);
  }
  var d,
    f,
    m,
    g,
    v = 0,
    y = 0,
    b = {},
    w = {},
    x = {};
  function k(e) {
    return +e + "" === e ? +e : e;
  }
  function E(e) {
    if ("idle" !== h) throw new Error("check() is only allowed in idle status");
    return (
      (i = e),
      p("check"),
      ((t = 1e4),
      (t = t || 1e4),
      new Promise(function (e, n) {
        if ("undefined" == typeof XMLHttpRequest)
          return n(new Error("No browser support"));
        try {
          var i = new XMLHttpRequest(),
            o = I.p + "" + r + ".hot-update.json";
          i.open("GET", o, !0), (i.timeout = t), i.send(null);
        } catch (e) {
          return n(e);
        }
        i.onreadystatechange = function () {
          if (4 === i.readyState)
            if (0 === i.status)
              n(new Error("Manifest request to " + o + " timed out."));
            else if (404 === i.status) e();
            else if (200 !== i.status && 304 !== i.status)
              n(new Error("Manifest request to " + o + " failed."));
            else {
              try {
                var t = JSON.parse(i.responseText);
              } catch (e) {
                return void n(e);
              }
              e(t);
            }
        };
      })).then(function (e) {
        if (!e) return p(S() ? "ready" : "idle"), null;
        (w = {}), (b = {}), (x = e.c), (m = e.h), p("prepare");
        var t = new Promise(function (e, t) {
          d = { resolve: e, reject: t };
        });
        f = {};
        return _(0), "prepare" === h && 0 === y && 0 === v && C(), t;
      })
    );
    var t;
  }
  function _(e) {
    x[e]
      ? ((w[e] = !0),
        v++,
        (function (e) {
          var t = document.createElement("script");
          (t.charset = "utf-8"),
            (t.src = I.p + "" + e + "." + r + ".hot-update.js"),
            document.head.appendChild(t);
        })(e))
      : (b[e] = !0);
  }
  function C() {
    p("ready");
    var e = d;
    if (((d = null), e))
      if (i)
        Promise.resolve()
          .then(function () {
            return O(i);
          })
          .then(
            function (t) {
              e.resolve(t);
            },
            function (t) {
              e.reject(t);
            }
          );
      else {
        var t = [];
        for (var n in f)
          Object.prototype.hasOwnProperty.call(f, n) && t.push(k(n));
        e.resolve(t);
      }
  }
  function O(t) {
    if ("ready" !== h)
      throw new Error("apply() is only allowed in ready status");
    return (function t(i) {
      var a, l, c, u, h;
      function d(e) {
        for (
          var t = [e],
            n = {},
            i = t.map(function (e) {
              return { chain: [e], id: e };
            });
          i.length > 0;

        ) {
          var r = i.pop(),
            o = r.id,
            s = r.chain;
          if ((u = T[o]) && (!u.hot._selfAccepted || u.hot._selfInvalidated)) {
            if (u.hot._selfDeclined)
              return { type: "self-declined", chain: s, moduleId: o };
            if (u.hot._main)
              return { type: "unaccepted", chain: s, moduleId: o };
            for (var a = 0; a < u.parents.length; a++) {
              var l = u.parents[a],
                c = T[l];
              if (c) {
                if (c.hot._declinedDependencies[o])
                  return {
                    type: "declined",
                    chain: s.concat([l]),
                    moduleId: o,
                    parentId: l,
                  };
                -1 === t.indexOf(l) &&
                  (c.hot._acceptedDependencies[o]
                    ? (n[l] || (n[l] = []), v(n[l], [o]))
                    : (delete n[l],
                      t.push(l),
                      i.push({ chain: s.concat([l]), id: l })));
              }
            }
          }
        }
        return {
          type: "accepted",
          moduleId: e,
          outdatedModules: t,
          outdatedDependencies: n,
        };
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          -1 === e.indexOf(i) && e.push(i);
        }
      }
      S();
      var y = {},
        b = [],
        w = {},
        E = function () {
          console.warn(
            "[HMR] unexpected require(" + C.moduleId + ") to disposed module"
          );
        };
      for (var _ in f)
        if (Object.prototype.hasOwnProperty.call(f, _)) {
          var C;
          (h = k(_)), (C = f[_] ? d(h) : { type: "disposed", moduleId: _ });
          var O = !1,
            P = !1,
            M = !1,
            A = "";
          switch (
            (C.chain && (A = "\nUpdate propagation: " + C.chain.join(" -> ")),
            C.type)
          ) {
            case "self-declined":
              i.onDeclined && i.onDeclined(C),
                i.ignoreDeclined ||
                  (O = new Error(
                    "Aborted because of self decline: " + C.moduleId + A
                  ));
              break;
            case "declined":
              i.onDeclined && i.onDeclined(C),
                i.ignoreDeclined ||
                  (O = new Error(
                    "Aborted because of declined dependency: " +
                      C.moduleId +
                      " in " +
                      C.parentId +
                      A
                  ));
              break;
            case "unaccepted":
              i.onUnaccepted && i.onUnaccepted(C),
                i.ignoreUnaccepted ||
                  (O = new Error(
                    "Aborted because " + h + " is not accepted" + A
                  ));
              break;
            case "accepted":
              i.onAccepted && i.onAccepted(C), (P = !0);
              break;
            case "disposed":
              i.onDisposed && i.onDisposed(C), (M = !0);
              break;
            default:
              throw new Error("Unexception type " + C.type);
          }
          if (O) return p("abort"), Promise.reject(O);
          if (P)
            for (h in ((w[h] = f[h]),
            v(b, C.outdatedModules),
            C.outdatedDependencies))
              Object.prototype.hasOwnProperty.call(C.outdatedDependencies, h) &&
                (y[h] || (y[h] = []), v(y[h], C.outdatedDependencies[h]));
          M && (v(b, [C.moduleId]), (w[h] = E));
        }
      var L,
        D = [];
      for (l = 0; l < b.length; l++)
        (h = b[l]),
          T[h] &&
            T[h].hot._selfAccepted &&
            w[h] !== E &&
            !T[h].hot._selfInvalidated &&
            D.push({
              module: h,
              parents: T[h].parents.slice(),
              errorHandler: T[h].hot._selfAccepted,
            });
      p("dispose"),
        Object.keys(x).forEach(function (e) {
          !1 === x[e] &&
            (function (e) {
              delete installedChunks[e];
            })(e);
        });
      var B,
        j,
        R = b.slice();
      for (; R.length > 0; )
        if (((h = R.pop()), (u = T[h]))) {
          var V = {},
            N = u.hot._disposeHandlers;
          for (c = 0; c < N.length; c++) (a = N[c])(V);
          for (
            o[h] = V, u.hot.active = !1, delete T[h], delete y[h], c = 0;
            c < u.children.length;
            c++
          ) {
            var F = T[u.children[c]];
            F && (L = F.parents.indexOf(h)) >= 0 && F.parents.splice(L, 1);
          }
        }
      for (h in y)
        if (Object.prototype.hasOwnProperty.call(y, h) && (u = T[h]))
          for (j = y[h], c = 0; c < j.length; c++)
            (B = j[c]),
              (L = u.children.indexOf(B)) >= 0 && u.children.splice(L, 1);
      p("apply"), void 0 !== m && ((r = m), (m = void 0));
      for (h in ((f = void 0), w))
        Object.prototype.hasOwnProperty.call(w, h) && (e[h] = w[h]);
      var $ = null;
      for (h in y)
        if (Object.prototype.hasOwnProperty.call(y, h) && (u = T[h])) {
          j = y[h];
          var z = [];
          for (l = 0; l < j.length; l++)
            if (((B = j[l]), (a = u.hot._acceptedDependencies[B]))) {
              if (-1 !== z.indexOf(a)) continue;
              z.push(a);
            }
          for (l = 0; l < z.length; l++) {
            a = z[l];
            try {
              a(j);
            } catch (e) {
              i.onErrored &&
                i.onErrored({
                  type: "accept-errored",
                  moduleId: h,
                  dependencyId: j[l],
                  error: e,
                }),
                i.ignoreErrored || $ || ($ = e);
            }
          }
        }
      for (l = 0; l < D.length; l++) {
        var H = D[l];
        (h = H.module), (s = H.parents), (n = h);
        try {
          I(h);
        } catch (e) {
          if ("function" == typeof H.errorHandler)
            try {
              H.errorHandler(e);
            } catch (t) {
              i.onErrored &&
                i.onErrored({
                  type: "self-accept-error-handler-errored",
                  moduleId: h,
                  error: t,
                  originalError: e,
                }),
                i.ignoreErrored || $ || ($ = t),
                $ || ($ = e);
            }
          else
            i.onErrored &&
              i.onErrored({
                type: "self-accept-errored",
                moduleId: h,
                error: e,
              }),
              i.ignoreErrored || $ || ($ = e);
        }
      }
      if ($) return p("fail"), Promise.reject($);
      if (g)
        return t(i).then(function (e) {
          return (
            b.forEach(function (t) {
              e.indexOf(t) < 0 && e.push(t);
            }),
            e
          );
        });
      return (
        p("idle"),
        new Promise(function (e) {
          e(b);
        })
      );
    })((t = t || {}));
  }
  function S() {
    if (g) return f || (f = {}), g.forEach(P), (g = void 0), !0;
  }
  function P(t) {
    Object.prototype.hasOwnProperty.call(f, t) || (f[t] = e[t]);
  }
  var T = {};
  function I(t) {
    if (T[t]) return T[t].exports;
    var n = (T[t] = {
      i: t,
      l: !1,
      exports: {},
      hot: c(t),
      parents: ((a = s), (s = []), a),
      children: [],
    });
    return e[t].call(n.exports, n, n.exports, l(t)), (n.l = !0), n.exports;
  }
  (I.m = e),
    (I.c = T),
    (I.d = function (e, t, n) {
      I.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (I.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (I.t = function (e, t) {
      if ((1 & t && (e = I(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (I.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          I.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (I.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return I.d(t, "a", t), t;
    }),
    (I.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (I.p = ""),
    (I.h = function () {
      return r;
    }),
    l(60)((I.s = 60));
})([
  function (e, t) {
    var n,
      i,
      r = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        i = s;
      }
    })();
    var l,
      c = [],
      u = !1,
      h = -1;
    function p() {
      u &&
        l &&
        ((u = !1), l.length ? (c = l.concat(c)) : (h = -1), c.length && d());
    }
    function d() {
      if (!u) {
        var e = a(p);
        u = !0;
        for (var t = c.length; t; ) {
          for (l = c, c = []; ++h < t; ) l && l[h].run();
          (h = -1), (t = c.length);
        }
        (l = null),
          (u = !1),
          (function (e) {
            if (i === clearTimeout) return clearTimeout(e);
            if ((i === s || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(e);
            try {
              i(e);
            } catch (t) {
              try {
                return i.call(null, e);
              } catch (t) {
                return i.call(this, e);
              }
            }
          })(e);
      }
    }
    function f(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new f(e, t)), 1 !== c.length || u || a(d);
    }),
      (f.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (r.title = "browser"),
      (r.browser = !0),
      (r.env = {}),
      (r.argv = []),
      (r.version = ""),
      (r.versions = {}),
      (r.on = m),
      (r.addListener = m),
      (r.once = m),
      (r.off = m),
      (r.removeListener = m),
      (r.removeAllListeners = m),
      (r.emit = m),
      (r.prependListener = m),
      (r.prependOnceListener = m),
      (r.listeners = function (e) {
        return [];
      }),
      (r.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (r.cwd = function () {
        return "/";
      }),
      (r.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (r.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    "function" == typeof Object.create
      ? (e.exports = function (e, t) {
          t &&
            ((e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (e.exports = function (e, t) {
          if (t) {
            e.super_ = t;
            var n = function () {};
            (n.prototype = t.prototype),
              (e.prototype = new n()),
              (e.prototype.constructor = e);
          }
        });
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    !(function (e, t, n) {
      "use strict";
      function i(e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      }
      var r = i(t),
        o = i(n);
      function s(e) {
        return (s =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function a(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function l(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function c(e, t, n) {
        return t && l(e.prototype, t), n && l(e, n), e;
      }
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                u(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function d(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t &&
            (function (e, t) {
              (
                Object.setPrototypeOf ||
                function (e, t) {
                  return (e.__proto__ = t), e;
                }
              )(e, t);
            })(e, t);
      }
      function f(e) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function m(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function g(e, t) {
        return !t || ("object" != typeof t && "function" != typeof t)
          ? m(e)
          : t;
      }
      function v(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            i = f(e);
          if (t) {
            var r = f(this).constructor;
            n = Reflect.construct(i, arguments, r);
          } else n = i.apply(this, arguments);
          return g(this, n);
        };
      }
      function y(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e));

        );
        return e;
      }
      function b(e, t, n) {
        return (b =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var i = y(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(e, t, n || e);
      }
      function w(e, t, n, i) {
        return (w =
          "undefined" != typeof Reflect && Reflect.set
            ? Reflect.set
            : function (e, t, n, i) {
                var r,
                  o = y(e, t);
                if (o) {
                  if ((r = Object.getOwnPropertyDescriptor(o, t)).set)
                    return r.set.call(i, n), !0;
                  if (!r.writable) return !1;
                }
                if ((r = Object.getOwnPropertyDescriptor(i, t))) {
                  if (!r.writable) return !1;
                  (r.value = n), Object.defineProperty(i, t, r);
                } else u(i, t, n);
                return !0;
              })(e, t, n, i);
      }
      function x(e, t, n, i, r) {
        if (!w(e, t, n, i || e) && r) throw new Error("failed to set property");
        return n;
      }
      function k(e, t) {
        return (
          _(e) ||
          (function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
              var n = [],
                i = !0,
                r = !1,
                o = void 0;
              try {
                for (
                  var s, a = e[Symbol.iterator]();
                  !(i = (s = a.next()).done) &&
                  (n.push(s.value), !t || n.length !== t);
                  i = !0
                );
              } catch (e) {
                (r = !0), (o = e);
              } finally {
                try {
                  i || null == a.return || a.return();
                } finally {
                  if (r) throw o;
                }
              }
              return n;
            }
          })(e, t) ||
          O(e, t) ||
          P()
        );
      }
      function E(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return S(e);
          })(e) ||
          C(e) ||
          O(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _(e) {
        if (Array.isArray(e)) return e;
      }
      function C(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
          return Array.from(e);
      }
      function O(e, t) {
        if (e) {
          if ("string" == typeof e) return S(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? S(e, t)
              : void 0
          );
        }
      }
      function S(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i;
      }
      function P() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function T(e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var i = n.call(e, t);
            if ("object" != typeof i) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      }
      function I(e, t, n, i) {
        var r = (function () {
          var e = {
            elementsDefinitionOrder: [["method"], ["field"]],
            initializeInstanceElements: function (e, t) {
              ["method", "field"].forEach(function (n) {
                t.forEach(function (t) {
                  t.kind === n &&
                    "own" === t.placement &&
                    this.defineClassElement(e, t);
                }, this);
              }, this);
            },
            initializeClassElements: function (e, t) {
              var n = e.prototype;
              ["method", "field"].forEach(function (i) {
                t.forEach(function (t) {
                  var r = t.placement;
                  if (t.kind === i && ("static" === r || "prototype" === r)) {
                    var o = "static" === r ? e : n;
                    this.defineClassElement(o, t);
                  }
                }, this);
              }, this);
            },
            defineClassElement: function (e, t) {
              var n = t.descriptor;
              if ("field" === t.kind) {
                var i = t.initializer;
                n = {
                  enumerable: n.enumerable,
                  writable: n.writable,
                  configurable: n.configurable,
                  value: void 0 === i ? void 0 : i.call(e),
                };
              }
              Object.defineProperty(e, t.key, n);
            },
            decorateClass: function (e, t) {
              var n = [],
                i = [],
                r = { static: [], prototype: [], own: [] };
              if (
                (e.forEach(function (e) {
                  this.addElementPlacement(e, r);
                }, this),
                e.forEach(function (e) {
                  if (!L(e)) return n.push(e);
                  var t = this.decorateElement(e, r);
                  n.push(t.element),
                    n.push.apply(n, t.extras),
                    i.push.apply(i, t.finishers);
                }, this),
                !t)
              )
                return { elements: n, finishers: i };
              var o = this.decorateConstructor(n, t);
              return i.push.apply(i, o.finishers), (o.finishers = i), o;
            },
            addElementPlacement: function (e, t, n) {
              var i = t[e.placement];
              if (!n && -1 !== i.indexOf(e.key))
                throw new TypeError("Duplicated element (" + e.key + ")");
              i.push(e.key);
            },
            decorateElement: function (e, t) {
              for (
                var n = [], i = [], r = e.decorators, o = r.length - 1;
                o >= 0;
                o--
              ) {
                var s = t[e.placement];
                s.splice(s.indexOf(e.key), 1);
                var a = this.fromElementDescriptor(e),
                  l = this.toElementFinisherExtras((0, r[o])(a) || a);
                (e = l.element),
                  this.addElementPlacement(e, t),
                  l.finisher && i.push(l.finisher);
                var c = l.extras;
                if (c) {
                  for (var u = 0; u < c.length; u++)
                    this.addElementPlacement(c[u], t);
                  n.push.apply(n, c);
                }
              }
              return { element: e, finishers: i, extras: n };
            },
            decorateConstructor: function (e, t) {
              for (var n = [], i = t.length - 1; i >= 0; i--) {
                var r = this.fromClassDescriptor(e),
                  o = this.toClassDescriptor((0, t[i])(r) || r);
                if (
                  (void 0 !== o.finisher && n.push(o.finisher),
                  void 0 !== o.elements)
                ) {
                  e = o.elements;
                  for (var s = 0; s < e.length - 1; s++)
                    for (var a = s + 1; a < e.length; a++)
                      if (
                        e[s].key === e[a].key &&
                        e[s].placement === e[a].placement
                      )
                        throw new TypeError(
                          "Duplicated element (" + e[s].key + ")"
                        );
                }
              }
              return { elements: e, finishers: n };
            },
            fromElementDescriptor: function (e) {
              var t = {
                kind: e.kind,
                key: e.key,
                placement: e.placement,
                descriptor: e.descriptor,
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                "field" === e.kind && (t.initializer = e.initializer),
                t
              );
            },
            toElementDescriptors: function (e) {
              var t;
              if (void 0 !== e)
                return ((t = e), _(t) || C(t) || O(t) || P()).map(function (e) {
                  var t = this.toElementDescriptor(e);
                  return (
                    this.disallowProperty(
                      e,
                      "finisher",
                      "An element descriptor"
                    ),
                    this.disallowProperty(e, "extras", "An element descriptor"),
                    t
                  );
                }, this);
            },
            toElementDescriptor: function (e) {
              var t = String(e.kind);
              if ("method" !== t && "field" !== t)
                throw new TypeError(
                  'An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "' +
                    t +
                    '"'
                );
              var n = T(e.key),
                i = String(e.placement);
              if ("static" !== i && "prototype" !== i && "own" !== i)
                throw new TypeError(
                  'An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "' +
                    i +
                    '"'
                );
              var r = e.descriptor;
              this.disallowProperty(e, "elements", "An element descriptor");
              var o = {
                kind: t,
                key: n,
                placement: i,
                descriptor: Object.assign({}, r),
              };
              return (
                "field" !== t
                  ? this.disallowProperty(
                      e,
                      "initializer",
                      "A method descriptor"
                    )
                  : (this.disallowProperty(
                      r,
                      "get",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "set",
                      "The property descriptor of a field descriptor"
                    ),
                    this.disallowProperty(
                      r,
                      "value",
                      "The property descriptor of a field descriptor"
                    ),
                    (o.initializer = e.initializer)),
                o
              );
            },
            toElementFinisherExtras: function (e) {
              return {
                element: this.toElementDescriptor(e),
                finisher: B(e, "finisher"),
                extras: this.toElementDescriptors(e.extras),
              };
            },
            fromClassDescriptor: function (e) {
              var t = {
                kind: "class",
                elements: e.map(this.fromElementDescriptor, this),
              };
              return (
                Object.defineProperty(t, Symbol.toStringTag, {
                  value: "Descriptor",
                  configurable: !0,
                }),
                t
              );
            },
            toClassDescriptor: function (e) {
              var t = String(e.kind);
              if ("class" !== t)
                throw new TypeError(
                  'A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "' +
                    t +
                    '"'
                );
              this.disallowProperty(e, "key", "A class descriptor"),
                this.disallowProperty(e, "placement", "A class descriptor"),
                this.disallowProperty(e, "descriptor", "A class descriptor"),
                this.disallowProperty(e, "initializer", "A class descriptor"),
                this.disallowProperty(e, "extras", "A class descriptor");
              var n = B(e, "finisher");
              return {
                elements: this.toElementDescriptors(e.elements),
                finisher: n,
              };
            },
            runClassFinishers: function (e, t) {
              for (var n = 0; n < t.length; n++) {
                var i = (0, t[n])(e);
                if (void 0 !== i) {
                  if ("function" != typeof i)
                    throw new TypeError("Finishers must return a constructor.");
                  e = i;
                }
              }
              return e;
            },
            disallowProperty: function (e, t, n) {
              if (void 0 !== e[t])
                throw new TypeError(n + " can't have a ." + t + " property.");
            },
          };
          return e;
        })();
        if (i) for (var o = 0; o < i.length; o++) r = i[o](r);
        var s = t(function (e) {
            r.initializeInstanceElements(e, a.elements);
          }, n),
          a = r.decorateClass(
            (function (e) {
              for (
                var t = [],
                  n = function (e) {
                    return (
                      "method" === e.kind &&
                      e.key === o.key &&
                      e.placement === o.placement
                    );
                  },
                  i = 0;
                i < e.length;
                i++
              ) {
                var r,
                  o = e[i];
                if ("method" === o.kind && (r = t.find(n)))
                  if (D(o.descriptor) || D(r.descriptor)) {
                    if (L(o) || L(r))
                      throw new ReferenceError(
                        "Duplicated methods (" + o.key + ") can't be decorated."
                      );
                    r.descriptor = o.descriptor;
                  } else {
                    if (L(o)) {
                      if (L(r))
                        throw new ReferenceError(
                          "Decorators can't be placed on different accessors with for the same property (" +
                            o.key +
                            ")."
                        );
                      r.decorators = o.decorators;
                    }
                    A(o, r);
                  }
                else t.push(o);
              }
              return t;
            })(s.d.map(M)),
            e
          );
        return (
          r.initializeClassElements(s.F, a.elements),
          r.runClassFinishers(s.F, a.finishers)
        );
      }
      function M(e) {
        var t,
          n = T(e.key);
        "method" === e.kind
          ? (t = {
              value: e.value,
              writable: !0,
              configurable: !0,
              enumerable: !1,
            })
          : "get" === e.kind
          ? (t = { get: e.value, configurable: !0, enumerable: !1 })
          : "set" === e.kind
          ? (t = { set: e.value, configurable: !0, enumerable: !1 })
          : "field" === e.kind &&
            (t = { configurable: !0, writable: !0, enumerable: !0 });
        var i = {
          kind: "field" === e.kind ? "field" : "method",
          key: n,
          placement: e.static
            ? "static"
            : "field" === e.kind
            ? "own"
            : "prototype",
          descriptor: t,
        };
        return (
          e.decorators && (i.decorators = e.decorators),
          "field" === e.kind && (i.initializer = e.value),
          i
        );
      }
      function A(e, t) {
        void 0 !== e.descriptor.get
          ? (t.descriptor.get = e.descriptor.get)
          : (t.descriptor.set = e.descriptor.set);
      }
      function L(e) {
        return e.decorators && e.decorators.length;
      }
      function D(e) {
        return void 0 !== e && !(void 0 === e.value && void 0 === e.writable);
      }
      function B(e, t) {
        var n = e[t];
        if (void 0 !== n && "function" != typeof n)
          throw new TypeError("Expected '" + t + "' to be a function");
        return n;
      }
      var j = [
          {
            key: "info",
            style: "color: #666;",
            level: 5,
            consoleMethod: "log",
          },
          {
            key: "notice",
            style: "background: rgba(0, 0, 0, 0.8); color:white; padding:8px;",
            level: 4,
            consoleMethod: "log",
          },
          {
            key: "warning",
            style: "color: black; background: orange;",
            level: 2,
            consoleMethod: "warn",
          },
          {
            key: "error",
            style: "color: black; background: red;",
            level: 1,
            consoleMethod: "error",
          },
        ],
        R = "data-motorcortex2-id",
        V = "closed",
        N = "MotorCortex",
        F = {
          staggerPreface: "@stagger",
          mathExpPreface: "@expression",
          attibuteValue: "@attribute",
          patternValue: "@pattern",
          dynamicDuration: "dynamic",
          totalElements: "total",
          elementIndex: "index",
          initParams: "initParams",
        };
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      var $ = new window.AudioContext();
      function z(e) {
        return "number" == typeof e && isFinite(e);
      }
      function H(e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      }
      function U(e) {
        return "string" == typeof e || e instanceof String;
      }
      function W(e) {
        return "object" === s(e);
      }
      function q(e) {
        return e && "[object Function]" === {}.toString.call(e);
      }
      function G(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      var J = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi");
      function K(e) {
        if (null === e && void 0 === e)
          return { result: !0, analysis: { width: null, height: null } };
        if (!W(e))
          return {
            result: !1,
            errors: [
              'originalDims should be an object containing the "width" and "height" keys',
            ],
          };
        if (
          !Object.prototype.hasOwnProperty.call(e, "width") ||
          !Object.prototype.hasOwnProperty.call(e, "height")
        )
          return {
            result: !1,
            errors: [
              'originalDims should be an object containing both the "width" and "height" keys',
            ],
          };
        if (!U(e.width))
          return {
            result: !1,
            errors: ["originalDims.width should be defined either on px or %."],
          };
        if (!U(e.height))
          return {
            result: !1,
            errors: [
              "originalDims.height should be defined either on px or %.",
            ],
          };
        var t = e.width.match(J)[0],
          n = e.width.substring(t.length);
        if (!z(Number(t)) || ("%" !== n && "px" !== n))
          return {
            result: !1,
            errors: ["originalDims.width should be defined either on px or %."],
          };
        var i = e.height.match(J)[0],
          r = e.height.substring(i.length);
        return !z(Number(i)) || ("%" != r && "px" != r)
          ? {
              result: !1,
              errors: [
                "originalDims.heigth should be defined either on px or %.",
              ],
            }
          : { result: !0, analysis: Y(e) };
      }
      function Y(e) {
        var t = null,
          n = null;
        if (W(e) && null != e) {
          if (Object.prototype.hasOwnProperty.call(e, "width") && U(e.width)) {
            var i = e.width.match(J)[0],
              r = e.width.substring(i.length);
            !z(Number(i)) ||
              ("%" !== r && "px" !== r) ||
              (t = { number: Number(i), unit: r });
          }
          if (
            Object.prototype.hasOwnProperty.call(e, "height") &&
            U(e.height)
          ) {
            var o = e.height.match(J)[0],
              s = e.height.substring(o.length);
            !z(Number(o)) ||
              ("%" !== s && "px" !== s) ||
              (n = { number: Number(o), unit: s });
          }
        }
        return { width: t, height: n };
      }
      function X(e) {
        var t = e.replace(/ /g, "");
        return /.*\((.*)\).*/.exec(t)[1].split(",");
      }
      function Q(e, t) {
        return Math.round(e / t) * t;
      }
      function Z(e) {
        var t = e.split("___");
        return { mcid: t[0], attribute: t[1] };
      }
      function ee() {
        return Math.floor(65536 * (1 + Math.random()))
          .toString(16)
          .substring(1);
      }
      function te() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = e ? "_" : "-";
        return ""
          .concat(ee())
          .concat(ee())
          .concat(t)
          .concat(ee())
          .concat(t)
          .concat(ee());
      }
      function ne(e, t) {
        return "".concat(e).concat("___").concat(t);
      }
      function ie(e, t, n) {
        for (var i = t.split("."), r = e, o = 0; o < i.length - 1; o++) {
          if (!Object.prototype.hasOwnProperty.call(r, i[o])) return !1;
          r = r[i[o]];
        }
        return (
          !!Object.prototype.hasOwnProperty.call(r, i[i.length - 1]) &&
          ((r[i[i.length - 1]] = n), !0)
        );
      }
      var re = new ((function () {
        function e(t) {
          a(this, e);
          var n = 2;
          t &&
            Object.prototype.hasOwnProperty.call(t, "logLevel") &&
            (n = t.logLevel);
          for (var i = 0; i < j.length; i++) {
            var r = j[i];
            n >= r.level
              ? (this[r.key] = window.console[r.consoleMethod].bind(
                  window.console,
                  "MotorCortex - ".concat(r.key, ": ")
                ))
              : (this[r.key] = function () {});
          }
          this.log =
            n >= 3
              ? window.console.log.bind(window.console, "MotorCortex - ")
              : function () {};
        }
        return (
          c(e, [
            {
              key: "validateProps",
              value: function (e, t, n) {
                var i = t(e);
                if (i.length > 0) {
                  for (
                    var r = "Error on plugin's \""
                        .concat(n.plugin_npm_name, '" "')
                        .concat(
                          n.ClassName,
                          '" instantiation. Errors (op props):'
                        ),
                      o = 0;
                    o < i.length;
                    o++
                  )
                    r += "\n - "
                      .concat(i[o].message, ". ")
                      .concat(i[o].actual, " provided");
                  return this.error(r), { result: !1, errors: i };
                }
                return { result: !0 };
              },
            },
            {
              key: "getElementByMCID",
              value: function (e, t) {
                return e.rootElement.querySelectorAll(
                  "[".concat(R, '="').concat(t, '"]')
                )[0];
              },
            },
            {
              key: "buildInitialValuesValidationRules",
              value: function (e) {
                var t = JSON.parse(JSON.stringify(e));
                return (
                  (function e(t) {
                    if (
                      (("string" == typeof t || t instanceof String) &&
                        (t = { type: t }),
                      (t.optional = !0),
                      "object" === t.type)
                    )
                      for (var n in t.props) e(t.props[n]);
                  })(t),
                  t
                );
              },
            },
            {
              key: "systoleDiastoleProjections",
              value: function (e, t, n) {
                for (var i = [], r = 0; r < e.length; r++) {
                  var o = e[r],
                    s = o.parentMillisecond - n;
                  (s = s * t + n),
                    1 !== t &&
                      i.push({
                        id: o.incident.id,
                        start: s,
                        end: s + o.incident.duration * t,
                        startDelta: s - o.millisecond,
                      });
                }
                return i;
              },
            },
          ]),
          e
        );
      })())();
      function oe(e) {
        return e.result
          ? { result: !0, execute: e.execute }
          : { result: !1, errors: e.errors };
      }
      var se = (function () {
        function e(t) {
          a(this, e),
            (this.runTimeInfo = t.runTimeInfo),
            (this.context = t.context),
            this.onInitialise(),
            (this.getIncidentById = t.getIncidentById);
        }
        return (
          c(
            e,
            [
              { key: "onInitialise", value: function () {} },
              {
                key: "_resize",
                value: function () {
                  re.log("Please overwite the _resize method of the Channel");
                },
              },
              {
                key: "addIncidents",
                value: function (e) {
                  return oe(this.checkAddition(e));
                },
              },
              {
                key: "editIncidents",
                value: function (e, t) {
                  return oe(this.checkEdit(e, t));
                },
              },
              {
                key: "removeIncidents",
                value: function (e) {
                  var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return oe(this.checkDelete(e, t));
                },
              },
              { key: "recalcScratchValues", value: function (e) {} },
              {
                key: "checkAddition",
                value: function (e) {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "checkEdit",
                value: function (e, t) {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "checkDelete",
                value: function (e) {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "checkResizedIncidents",
                value: function (e) {
                  return { result: !0, execute: function () {} };
                },
              },
              { key: "moveTo", value: function (e, t, n) {} },
            ],
            [
              {
                key: "type",
                get: function () {
                  return "plain";
                },
              },
            ]
          ),
          e
        );
      })();
      function ae(e) {
        e.descriptor.value = function (e) {
          this.duration *= e;
        };
      }
      var le = "up",
        ce = "down",
        ue = "native.tree.bypass",
        he = I(null, function (e) {
          return {
            F: function t() {
              var n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              a(this, t),
                e(this),
                (this.parentNode = null),
                (this.isNode = !1),
                Object.prototype.hasOwnProperty.call(n, "id")
                  ? (this.id = n.id)
                  : (this.id = te()),
                (this.props = n);
            },
            d: [
              {
                kind: "get",
                key: "name",
                value: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.props,
                    "name"
                  )
                    ? this.props.name
                    : null;
                },
              },
              {
                kind: "set",
                key: "name",
                value: function (e) {
                  this.props.name = e;
                },
              },
              {
                kind: "get",
                key: "delay",
                value: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.props,
                    "delay"
                  )
                    ? this.props.delay
                    : 0;
                },
              },
              {
                kind: "set",
                key: "delay",
                value: function (e) {
                  0 !== e && (this.props.delay = e);
                },
              },
              {
                kind: "get",
                key: "hiatus",
                value: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.props,
                    "hiatus"
                  )
                    ? this.props.hiatus
                    : 0;
                },
              },
              {
                kind: "set",
                key: "hiatus",
                value: function (e) {
                  0 !== e && (this.props.hiatus = e);
                },
              },
              {
                kind: "get",
                key: "repeats",
                value: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.props,
                    "repeats"
                  )
                    ? this.props.repeats
                    : 1;
                },
              },
              {
                kind: "set",
                key: "repeats",
                value: function (e) {
                  this.props.repeats = e;
                },
              },
              {
                kind: "get",
                key: "duration",
                value: function () {
                  return (
                    this.repeats *
                    (this.delay + this.props.duration + this.hiatus)
                  );
                },
              },
              {
                kind: "set",
                key: "duration",
                value: function (e) {
                  var t = e / this.duration;
                  (this.props.duration *= t),
                    (this.hiatus *= t),
                    (this.delay *= t);
                },
              },
              {
                kind: "method",
                key: "setNewDuration",
                value: function (e) {
                  (this.duration = e),
                    this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                      selfExecute: !1,
                      direction: le,
                    });
                },
              },
              {
                kind: "method",
                decorators: [ae],
                key: "systoleDiastole",
                value: function () {},
              },
              {
                kind: "get",
                key: "hasParent",
                value: function () {
                  return null !== this.parentNode;
                },
              },
              {
                kind: "method",
                key: "attachToNode",
                value: function (e) {
                  this.parentNode = e;
                },
              },
              {
                kind: "method",
                key: "detachFromParent",
                value: function () {
                  this.parentNode = null;
                },
              },
              {
                kind: "method",
                key: "putMessageOnPipe",
                value: function (e, t, n) {
                  var i =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : {};
                  if (
                    (Object.prototype.hasOwnProperty.call(i, "direction") ||
                      (i.direction = ce),
                    i.direction !== ce ||
                      Object.prototype.hasOwnProperty.call(
                        i,
                        "positionDelta"
                      ) ||
                      (i.positionDelta = 0),
                    i.selfExecute)
                  ) {
                    var r = "handle".concat(G(e)),
                      o = "function" == typeof this[r];
                    if (o) {
                      var s = this[r](n, t);
                      if (s !== ue) {
                        var a = { response: s, responder: this };
                        return i.direction === le
                          ? a
                          : [
                              p(
                                p({}, a),
                                {},
                                { positionDelta: i.positionDelta }
                              ),
                            ];
                      }
                    }
                  }
                  return i.direction === le
                    ? this.hasParent
                      ? this.parentNode.putMessageOnPipe(e, t, n, {
                          selfExecute: !0,
                          direction: le,
                        })
                      : { response: !1, responder: null }
                    : [];
                },
              },
              {
                kind: "method",
                key: "bypass",
                value: function () {
                  return ue;
                },
              },
              {
                kind: "get",
                key: "positionOnPyramidion",
                value: function () {
                  return this.getPositionOnPyramidion();
                },
              },
              {
                kind: "method",
                key: "getPositionOnPyramidion",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0;
                  if (this.hasParent) {
                    var t = this.putMessageOnPipe(
                      "getPositionOnPyramidion",
                      { delta: e, id: this.id },
                      "Parent",
                      { selfExecute: !1, direction: le }
                    );
                    return t.response;
                  }
                  return e;
                },
              },
            ],
          };
        }),
        pe = "Leaf has already been attached to another Node",
        de = "Negative positioning of childs on nodes is not allowed",
        fe = "The Leaf with the requested id couldn't be found on the Tree",
        me = I(
          null,
          function (e, t) {
            var n = (function (t) {
              d(i, t);
              var n = v(i);
              function i() {
                var t,
                  r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                return (
                  a(this, i),
                  (t = n.call(this, r)),
                  e(m(t)),
                  (t.isNode = !0),
                  (t.children = {}),
                  (t.calculatedDuration = 0),
                  t
                );
              }
              return i;
            })(t);
            return {
              F: n,
              d: [
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return this.calculatedDuration;
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (e) {
                    var t = e / this.duration;
                    for (var n in (this.props &&
                      Object.prototype.hasOwnProperty.call(
                        this.props,
                        "duration"
                      ) &&
                      (this.props.duration = e),
                    (this.calculatedDuration = e),
                    this.children)) {
                      var i = this.children[n];
                      this.editPosition(i.id, i.position * t, !0),
                        i.leaf.systoleDiastole(t);
                    }
                  },
                },
                {
                  kind: "method",
                  key: "setNewDuration",
                  value: function (e) {
                    (this.duration = e),
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !1,
                        direction: le,
                      });
                  },
                },
                {
                  kind: "method",
                  key: "_calculateDuration",
                  value: function () {
                    var e = 0;
                    for (var t in this.children) {
                      var n = this.children[t];
                      n.position + n.leaf.duration > e &&
                        (e = n.position + n.leaf.duration);
                    }
                    return (
                      e !== this.calculatedDuration &&
                      (this.props &&
                        Object.prototype.hasOwnProperty.call(
                          this.props,
                          "duration"
                        ) &&
                        (this.props.duration = e),
                      (this.calculatedDuration = e),
                      !0)
                    );
                  },
                },
                {
                  kind: "method",
                  decorators: [ae],
                  key: "systoleDiastole",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "handleRecalcDuration",
                  value: function (e, t) {
                    return (
                      !this._calculateDuration() ||
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !1,
                        direction: le,
                      })
                    );
                  },
                },
                {
                  kind: "method",
                  key: "getLeafById",
                  value: function (e) {
                    var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if (Object.prototype.hasOwnProperty.call(this.children, e))
                      return this.children[e].leaf;
                    if (t) return null;
                    for (var n in this.children) {
                      var i = this.children[n].leaf;
                      if (i.isNode) {
                        var r = i.getLeafById(e);
                        if (null != r) return r;
                      }
                    }
                    return null;
                  },
                },
                {
                  kind: "method",
                  key: "getLeafPosition",
                  value: function (e) {
                    if (Object.prototype.hasOwnProperty.call(this.children, e))
                      return this.children[e].position;
                    var t = this.putMessageOnPipe(
                      "getLeafPosition",
                      { id: e },
                      "Groups",
                      { selfExecute: !1, direction: ce }
                    );
                    return t.length > 0
                      ? t[0].positionDelta + t[0].response
                      : void 0;
                  },
                },
                {
                  kind: "method",
                  key: "handleGetLeafPosition",
                  value: function (e, t) {
                    return this.getLeafPosition(t.id);
                  },
                },
                {
                  kind: "method",
                  key: "checkAddition",
                  value: function (e, t) {
                    return e.hasParent
                      ? { result: !1, reason: pe }
                      : t < 0
                      ? { result: !1, reason: de }
                      : { result: !0 };
                  },
                },
                {
                  kind: "method",
                  key: "addChild",
                  value: function (e, t) {
                    return e.hasParent
                      ? { result: !1, reason: pe }
                      : ((this.children[e.id] = {
                          id: e.id,
                          leaf: e,
                          position: t,
                        }),
                        e.attachToNode(this),
                        this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !0,
                          direction: le,
                        }),
                        { result: !0 });
                  },
                },
                {
                  kind: "method",
                  key: "checkRemoveChild",
                  value: function (e) {
                    return Object.prototype.hasOwnProperty.call(
                      this.children,
                      e
                    )
                      ? { result: !0 }
                      : { result: !1, reason: fe };
                  },
                },
                {
                  kind: "method",
                  key: "removeChild",
                  value: function (e) {
                    return (
                      this.children[e].leaf.detachFromParent(),
                      delete this.children[e],
                      this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                        selfExecute: !0,
                        direction: le,
                      }),
                      { result: !0 }
                    );
                  },
                },
                {
                  kind: "method",
                  key: "checkEditPosition",
                  value: function (e, t) {
                    return t < 0
                      ? { result: !1, reason: de }
                      : Object.prototype.hasOwnProperty.call(this.children, e)
                      ? { result: !0 }
                      : { result: !1, reason: fe };
                  },
                },
                {
                  kind: "method",
                  key: "editPosition",
                  value: function (e, t) {
                    var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    if (Object.prototype.hasOwnProperty.call(this.children, e))
                      return (
                        (this.children[e].position = t),
                        n ||
                          this.putMessageOnPipe(
                            "recalcDuration",
                            {},
                            "Groups",
                            { selfExecute: !0, direction: le }
                          ),
                        { result: !0 }
                      );
                  },
                },
                {
                  kind: "method",
                  key: "putMessageOnPipe",
                  value: function (e, t, i) {
                    var r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
                    if (
                      (Object.prototype.hasOwnProperty.call(r, "direction") ||
                        (r.direction = ce),
                      r.direction !== ce ||
                        Object.prototype.hasOwnProperty.call(
                          r,
                          "positionDelta"
                        ) ||
                        (r.positionDelta = 0),
                      r.direction === le)
                    )
                      return b(f(n.prototype), "putMessageOnPipe", this).call(
                        this,
                        e,
                        t,
                        i,
                        r
                      );
                    var o = b(f(n.prototype), "putMessageOnPipe", this).call(
                      this,
                      e,
                      t,
                      i,
                      r
                    );
                    if (o.length > 0) return o;
                    for (var s in this.children) {
                      var a = this.children[s].leaf,
                        l = p(
                          p({}, r),
                          {},
                          {
                            selfExecute: !0,
                            positionDelta:
                              r.positionDelta + this.children[s].position,
                          }
                        );
                      o.push.apply(o, E(a.putMessageOnPipe(e, t, i, l)));
                    }
                    return o;
                  },
                },
                {
                  kind: "method",
                  key: "handleGetPositionOnPyramidion",
                  value: function (e, t) {
                    var n = t.delta + this.getLeafPosition(t.id);
                    return this.getPositionOnPyramidion(n);
                  },
                },
              ],
            };
          },
          he
        );
      function ge(e) {
        e.descriptor.value = function (e) {
          void 0 === this.blockID && (this.blockID = te()),
            this.DescriptiveIncident.putMessageOnPipe(
              "setBlock",
              {
                id: this.blockID,
                description: e,
                incidentId: this.DescriptiveIncident.id,
                realIncidentId: this.id,
              },
              "rootClip",
              { selfExecute: !0, direction: le }
            );
        };
      }
      function ve(e) {
        e.descriptor.value = function () {
          this.DescriptiveIncident.putMessageOnPipe(
            "unBlock",
            { id: this.blockID },
            "rootClip",
            { selfExecute: !0, direction: le }
          );
        };
      }
      var ye = I(
          null,
          function (e, t) {
            var n = (function (t) {
              d(i, t);
              var n = v(i);
              function i(t, r) {
                var o;
                return (
                  a(this, i),
                  (o = n.call(this, r)),
                  e(m(o)),
                  (o.mc_plugin_npm_name = "motor-cortex-js"),
                  (o.plugin_channel_class = se),
                  (o.hasIncidents = !0),
                  o.onGroupInitialise(),
                  (o.calculatedDuration = 0),
                  o
                );
              }
              return i;
            })(t);
            return {
              F: n,
              d: [
                {
                  kind: "method",
                  key: "onGroupInitialise",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "handleAddIncident",
                  value: function (e, t) {
                    if (this.id === e) {
                      var n = (0, t.incidentFromDescription)(
                        t.incident,
                        t.contextData,
                        t.audio
                      );
                      return null === n ? this.bypass() : n;
                    }
                    return this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "handleMoveIncident",
                  value: function (e, t) {
                    if (this.id === e) {
                      var n = this.getLeafById(t.incidentId, !0);
                      return null === n ? this.bypass() : n;
                    }
                    return this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "handleRemoveIncident",
                  value: function (e, t) {
                    if (this.id === e) {
                      var n = this.getLeafById(t.incidentId, !0);
                      return null === n ? this.bypass() : n;
                    }
                    return this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "handleResize",
                  value: function (e) {
                    return this.id === e ? this : this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "removeChild",
                  value: function (e) {
                    this.children[e].leaf.lastWish(),
                      b(f(n.prototype), "removeChild", this).call(this, e);
                  },
                },
                {
                  kind: "method",
                  key: "getIncidentsByChannel",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : 0,
                      t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      n = {};
                    for (var i in ((n["motor-cortex-js"] = [
                      {
                        millisecond: e,
                        parentMillisecond: t,
                        incident: this,
                        id: this.id,
                      },
                    ]),
                    this.children)) {
                      var r = this.children[i],
                        o = r.leaf.getIncidentsByChannel(e + r.position, e);
                      for (var s in o)
                        Object.prototype.hasOwnProperty.call(n, s)
                          ? (n[s] = n[s].concat(o[s]))
                          : (n[s] = o[s]);
                    }
                    return n;
                  },
                },
                {
                  kind: "method",
                  key: "lastWish",
                  value: function () {
                    for (var e in this.children)
                      this.children[e].leaf.lastWish();
                  },
                },
                {
                  kind: "method",
                  decorators: [ge],
                  key: "setBlock",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [ve],
                  key: "unblock",
                  value: function () {},
                },
              ],
            };
          },
          me
        ),
        be = (function (e) {
          d(n, e);
          var t = v(n);
          function n() {
            return a(this, n), t.apply(this, arguments);
          }
          return (
            c(n, [
              {
                key: "onInitialise",
                value: function () {
                  (this.incidents = []), (this.incidentsById = {});
                },
              },
              {
                key: "_incidentById",
                value: function (e) {
                  return this.incidentsById[e];
                },
              },
              {
                key: "_resize",
                value: function (e) {
                  for (var t = 0; t < this.incidents.length; t++)
                    this.incidents[t].millisecond *= e;
                },
              },
              {
                key: "checkAddition",
                value: function (e) {
                  for (var t = [], n = {}, i = [], r = 0; r < e.length; r++)
                    (n[e[r].id] = e[r].incident),
                      i.push({ id: e[r].id, millisecond: e[r].millisecond }),
                      Object.prototype.hasOwnProperty.call(
                        this.incidentsById,
                        e[r].id
                      ) &&
                        (re.error(
                          "Incident with the id ".concat(
                            e[r].id,
                            " already exists. Addition is rejected."
                          )
                        ),
                        t.push({
                          type: "Already existing id",
                          meta: { id: e[r].id },
                        }));
                  if (t.length > 0) return { result: !1, errors: t };
                  var o = this;
                  return {
                    result: !0,
                    execute: function () {
                      var t;
                      (o.incidentsById = Object.assign(o.incidentsById, n)),
                        (t = o.incidents).push.apply(t, i),
                        o.incidents.sort(function (e, t) {
                          return e.millisecond - t.millisecond;
                        });
                      for (var r = 0; r < e.length; r++)
                        o._incidentById(e[r].id)._onGetContextOnce(o.context);
                    },
                  };
                },
              },
              {
                key: "checkEdit",
                value: function (e, t) {
                  var n = this.incidents;
                  return {
                    result: !0,
                    execute: function () {
                      for (var i, r = 0; r < e.length; r++) {
                        i = e[r].id;
                        for (var o = 0; o < n.length; o++)
                          if (n[o].id === i) {
                            n[o].millisecond += t;
                            break;
                          }
                      }
                      n.sort(function (e, t) {
                        return e.millisecond - t.millisecond;
                      });
                    },
                  };
                },
              },
              {
                key: "checkDelete",
                value: function (e) {
                  for (var t = this, n = [], i = 0; i < e.length; i++)
                    n.push(e[i].id);
                  return {
                    result: !0,
                    execute: function () {
                      var e = t.incidents.filter(function (e) {
                        return !n.includes(e.id);
                      });
                      t.incidents = e;
                      for (var i = 0; i < n.length; i++)
                        delete t.incidentsById[n[i]];
                    },
                  };
                },
              },
              {
                key: "checkResizedIncidents",
                value: function (e) {
                  var t = this.incidents;
                  return {
                    result: !0,
                    execute: function () {
                      for (var n, i = 0; i < e.length; i++) {
                        n = e[i].id;
                        for (var r = 0; r < t.length; r++)
                          if (t[r].id === n) {
                            t[r].millisecond += e[i].startDelta;
                            break;
                          }
                      }
                      t.sort(function (e, t) {
                        return e.millisecond - t.millisecond;
                      });
                    },
                  };
                },
              },
              {
                key: "moveTo",
                value: function (e, t, n) {
                  var i =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  if (i)
                    for (var r = 0; r < this.incidents.length; r++) {
                      var o = this.incidents[r],
                        s = this._incidentById(o.id);
                      t < o.millisecond
                        ? s.onProgress(0, 0, n, !0)
                        : t > o.millisecond + s.duration
                        ? s.onProgress(1, s.duration, n, !0)
                        : s.onProgress(
                            (t - o.millisecond) / s.duration,
                            t - o.millisecond,
                            n,
                            !0
                          );
                    }
                  else {
                    var a,
                      l = this;
                    a =
                      t > e
                        ? this.incidents.filter(function (n) {
                            return (
                              (n.millisecond + l._incidentById(n.id).duration >=
                                e &&
                                n.millisecond +
                                  l._incidentById(n.id).duration <=
                                  t) ||
                              (l._incidentById(n.id).duration + n.millisecond >=
                                t &&
                                n.millisecond <= t)
                            );
                          })
                        : this.incidents.filter(function (n) {
                            return (
                              (n.millisecond + l._incidentById(n.id).duration >=
                                t &&
                                n.millisecond +
                                  l._incidentById(n.id).duration <=
                                  e) ||
                              (l._incidentById(n.id).duration + n.millisecond >=
                                e &&
                                n.millisecond <= e)
                            );
                          });
                    for (var c = 0; c < a.length; c++) {
                      var u = a[c],
                        h = this._incidentById(u.id),
                        p = (t - u.millisecond) / h.duration >= 1,
                        d = p ? 1 : (t - u.millisecond) / h.duration,
                        f = p ? h.duration : t - u.millisecond;
                      h.onProgress(d, f, n, !1);
                    }
                  }
                },
              },
            ]),
            n
          );
        })(se),
        we = "function" == typeof Float32Array;
      function xe(e, t) {
        return 1 - 3 * t + 3 * e;
      }
      function ke(e, t) {
        return 3 * t - 6 * e;
      }
      function Ee(e) {
        return 3 * e;
      }
      function _e(e, t, n) {
        return ((xe(t, n) * e + ke(t, n)) * e + Ee(t)) * e;
      }
      function Ce(e, t, n) {
        return 3 * xe(t, n) * e * e + 2 * ke(t, n) * e + Ee(t);
      }
      function Oe(e) {
        return e;
      }
      var Se = function (e, t, n, i) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1))
          throw new Error("bezier x values must be in [0, 1] range");
        if (e === t && n === i) return Oe;
        for (
          var r = we ? new Float32Array(11) : new Array(11), o = 0;
          o < 11;
          ++o
        )
          r[o] = _e(0.1 * o, e, n);
        function s(t) {
          for (var i = 0, o = 1; 10 !== o && r[o] <= t; ++o) i += 0.1;
          --o;
          var s = i + ((t - r[o]) / (r[o + 1] - r[o])) * 0.1,
            a = Ce(s, e, n);
          return a >= 0.001
            ? (function (e, t, n, i) {
                for (var r = 0; r < 4; ++r) {
                  var o = Ce(t, n, i);
                  if (0 === o) return t;
                  t -= (_e(t, n, i) - e) / o;
                }
                return t;
              })(t, s, e, n)
            : 0 === a
            ? s
            : (function (e, t, n, i, r) {
                var o,
                  s,
                  a = 0;
                do {
                  (o = _e((s = t + (n - t) / 2), i, r) - e) > 0
                    ? (n = s)
                    : (t = s);
                } while (Math.abs(o) > 1e-7 && ++a < 10);
                return s;
              })(t, i, i + 0.1, e, n);
        }
        return function (e) {
          return 0 === e ? 0 : 1 === e ? 1 : _e(s(e), t, i);
        };
      };
      function Pe(e) {
        e.descriptor.value = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = {};
          return (
            (n[this.mc_plugin_npm_name] = [
              {
                millisecond: e,
                parentMillisecond: t,
                incident: this,
                id: this.id,
              },
            ]),
            n
          );
        };
      }
      var Te = I(null, function (e) {
          return {
            F: function t() {
              var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = arguments.length > 2 ? arguments[2] : void 0;
              a(this, t),
                e(this),
                (this.attrs = n),
                (this.props = i),
                (this.dna = r),
                (this.context = r.context),
                (this.mcid = r.mcid),
                (this.id = i.id || te()),
                (this.modelId = i.modelId),
                (this.gotContext = !1),
                (this.plugin_channel_class = se),
                (this.mc_plugin_npm_name = "motor-cortex-js"),
                Object.prototype.hasOwnProperty.call(
                  i,
                  "plugin_channel_class"
                ) && (this.plugin_channel_class = i.plugin_channel_class),
                Object.prototype.hasOwnProperty.call(i, "mc_plugin_npm_name") &&
                  (this.mc_plugin_npm_name = i.mc_plugin_npm_name),
                (this.hasIncidents = !1),
                (this.initialValues = {}),
                (this.userDefinedInitialValues = n.initialValues || {}),
                (this.pureInitialValues = null),
                (this.autoGenerated = !1),
                this.onInitialise();
            },
            d: [
              {
                kind: "get",
                key: "selector",
                value: function () {
                  return this.props.selector;
                },
              },
              {
                kind: "get",
                key: "animAttributes",
                value: function () {
                  return this.attrs.animatedAttrs;
                },
              },
              {
                kind: "set",
                key: "animAttributes",
                value: function (e) {
                  this.attrs.animatedAttrs[this.attributeKey] = e;
                },
              },
              {
                kind: "method",
                key: "getScratchValue",
                value: function () {
                  return 0;
                },
              },
              {
                kind: "get",
                key: "element",
                value: function () {
                  return null === this.context
                    ? []
                    : this.context.getElementByMCID
                    ? this.context.getElementByMCID(this.mcid)
                    : this.context.getElements(this.selector)[0];
                },
              },
              {
                kind: "get",
                key: "attributeKey",
                value: function () {
                  return Object.keys(this.attrs.animatedAttrs)[0];
                },
              },
              {
                kind: "get",
                key: "targetValue",
                value: function () {
                  return this.animAttributes[this.attributeKey];
                },
              },
              {
                kind: "method",
                key: "getElementAttribute",
                value: function (e) {
                  return this.element.getAttribute(e);
                },
              },
              {
                kind: "method",
                decorators: [Pe],
                key: "getIncidentsByChannel",
                value: function () {},
              },
              {
                kind: "method",
                key: "hasUserDefinedInitialValue",
                value: function () {
                  return Object.prototype.hasOwnProperty.call(
                    this.userDefinedInitialValues,
                    this.attributeKey
                  );
                },
              },
              {
                kind: "method",
                key: "setInitialValue",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  if (
                    (t &&
                      (this.pureInitialValues = JSON.parse(JSON.stringify(e))),
                    this.hasUserDefinedInitialValue())
                  )
                    if (W(this.targetValue)) {
                      for (var n in this.userDefinedInitialValues[
                        this.attributeKey
                      ])
                        e[n] = this.userDefinedInitialValues[this.attributeKey][
                          n
                        ];
                      this.initialValues[this.attributeKey] = e;
                    } else
                      this.initialValues[
                        this.attributeKey
                      ] = this.userDefinedInitialValues[this.attributeKey];
                  else this.initialValues[this.attributeKey] = e;
                },
              },
              {
                kind: "get",
                key: "initialValue",
                value: function () {
                  return this.initialValues[this.attributeKey];
                },
              },
              {
                kind: "method",
                key: "_onGetContextOnce",
                value: function () {
                  try {
                    if (!0 === this.context.fragment) return;
                    this.gotContext ||
                      (this.onGetContext(), (this.gotContext = !0));
                  } catch (e) {
                    re.error(e), re.error(this.mcid);
                  }
                },
              },
              {
                kind: "method",
                key: "onGetContext",
                value: function () {
                  re.info(
                    'Overwritte the "onGetContext" method with the code you want to get executed',
                    "info"
                  );
                },
              },
              { kind: "method", key: "lastWish", value: function () {} },
              {
                kind: "method",
                key: "onInitialise",
                value: function () {
                  re.info(
                    'Overwritte the "onInialise" method with the code you want to get executed',
                    "info"
                  );
                },
              },
              { kind: "method", key: "onProgress", value: function (e, t) {} },
              {
                kind: "method",
                decorators: [ge],
                key: "setBlock",
                value: function () {},
              },
              {
                kind: "method",
                decorators: [ve],
                key: "unblock",
                value: function () {},
              },
            ],
          };
        }),
        Ie = (function (e) {
          d(n, e);
          var t = v(n);
          function n(e, i, r) {
            var o;
            return (
              a(this, n),
              ((o = t.call(this, e, i, r)).runTimeInfo = {
                currentMillisecond: 0,
              }),
              o
            );
          }
          return (
            c(n, [
              {
                key: "duration",
                get: function () {
                  return this.DescriptiveIncident.realClip.duration;
                },
                set: function (e) {
                  this.DescriptiveIncident.realClip._resize(
                    e / this.realClip.duration
                  );
                },
              },
              {
                key: "lastWish",
                value: function () {
                  this.ownClip && this.ownClip.ownContext.unmount();
                },
              },
              {
                key: "onGetContext",
                value: function () {
                  var e = this,
                    t = this.DescriptiveIncident.realClip.exportConstructionArguments(),
                    n = re.getElementByMCID(this.context, this.mcid),
                    i = p(
                      p({}, t.props),
                      {},
                      {
                        selector: void 0,
                        host: n,
                        containerParams:
                          this.DescriptiveIncident.props.containerParams || {},
                        originalDims:
                          this.DescriptiveIncident.constructor.originalDims ||
                          {},
                      }
                    );
                  (this.ownClip = new this.DescriptiveIncident.constructor.Incident(
                    t.attrs,
                    i
                  )),
                    (this.ownClip.DescriptiveIncident = this.DescriptiveIncident),
                    this.DescriptiveIncident.realClip.addContext(
                      {
                        clipId: this.id,
                        context: this.ownClip.ownContext,
                        unblock: function () {
                          return e.unblock();
                        },
                      },
                      !0
                    );
                },
              },
              {
                key: "onProgress",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  if (
                    !1 !==
                    this.DescriptiveIncident.realClip.context.contextLoaded
                  ) {
                    for (var i in this.DescriptiveIncident.realClip
                      .instantiatedChannels) {
                      var r = this.DescriptiveIncident.realClip
                        .instantiatedChannels[i];
                      r.moveTo(
                        this.runTimeInfo.currentMillisecond,
                        t,
                        this.id,
                        n
                      );
                    }
                    (this.runTimeInfo.currentMillisecond = t),
                      this.ownClip.onAfterProgress(e, t);
                  } else this.setBlock();
                },
              },
            ]),
            n
          );
        })(Te);
      function Me(e) {
        var t = new e.Incident(
          e.attrs,
          p(p({}, e.props), {}, { id: e.id || te() }),
          { context: e.context, mcid: e.mcid }
        );
        return (
          (t.mc_plugin_npm_name = e.plugin_npm_name),
          (t.plugin_channel_class = e.Channel),
          (t.DescriptiveIncident = e.DescriptiveIncident),
          t
        );
      }
      var Ae = {
          linear: function (e) {
            return e;
          },
          easeInQuad: function (e) {
            return e * e;
          },
          easeOutQuad: function (e) {
            return e * (2 - e);
          },
          easeInOutQuad: function (e) {
            return e < 0.5 ? 2 * e * e : (4 - 2 * e) * e - 1;
          },
          easeInCubic: function (e) {
            return e * e * e;
          },
          easeOutCubic: function (e) {
            return --e * e * e + 1;
          },
          easeInOutCubic: function (e) {
            return e < 0.5
              ? 4 * e * e * e
              : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
          },
          easeInQuart: function (e) {
            return e * e * e * e;
          },
          easeOutQuart: function (e) {
            return 1 - --e * e * e * e;
          },
          easeInOutQuart: function (e) {
            return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
          },
          easeInQuint: function (e) {
            return e * e * e * e * e;
          },
          easeOutQuint: function (e) {
            return 1 + --e * e * e * e * e;
          },
          easeInOutQuint: function (e) {
            return e < 0.5
              ? 16 * e * e * e * e * e
              : 1 + 16 * --e * e * e * e * e;
          },
          easeInSine: function (e) {
            return -1 * Math.cos(e * (Math.PI / 2)) + 1;
          },
          easeOutSine: function (e) {
            return Math.sin(e * (Math.PI / 2));
          },
          easeInOutSine: function (e) {
            return -0.5 * (Math.cos(Math.PI * e) - 1);
          },
          easeInExpo: function (e) {
            return 0 == e ? 1 : 1 * Math.pow(2, 10 * (e - 1));
          },
          easeOutExpo: function (e) {
            return 1 == e ? 1 : 1 * (1 - Math.pow(2, -10 * e));
          },
          easeInOutExpo: function (e) {
            return 0 == e || 1 == e
              ? e
              : (e /= 0.5) < 1
              ? 0.5 * Math.pow(2, 10 * (e - 1))
              : 0.5 * (2 - Math.pow(2, -10 * --e));
          },
          easeInCirc: function (e) {
            return e >= 1 ? e : -(Math.sqrt(1 - (e /= 1) * e) - 1);
          },
          easeOutCirc: function (e) {
            return Math.sqrt(1 - (e = e / 1 - 1) * e);
          },
          easeInOutCirc: function (e) {
            return (e /= 0.5) < 1
              ? -0.5 * (Math.sqrt(1 - e * e) - 1)
              : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
          },
          easeInElastic: function (e) {
            if (0 == e || 1 == e) return e;
            var t = (0.3 / (2 * Math.PI)) * Math.asin(1);
            return (
              -Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((1 * e - t) * (2 * Math.PI)) / 0.3)
            );
          },
          easeOutElastic: function (e) {
            if (0 == e || 1 == e) return e;
            var t = (0.3 / (2 * Math.PI)) * Math.asin(1);
            return (
              Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / 0.3) +
              1
            );
          },
          easeInOutElastic: function (e) {
            if (0 == e || 1 == e) return e;
            var t = 0.3 * 1.5,
              n = (t / (2 * Math.PI)) * Math.asin(1);
            return e < 1
              ? Math.pow(2, 10 * (e -= 1)) *
                  Math.sin(((e - n) * (2 * Math.PI)) / t) *
                  -0.5
              : Math.pow(2, -10 * (e -= 1)) *
                  Math.sin(((e - n) * (2 * Math.PI)) / t) *
                  0.5 +
                  1;
          },
          easeInBack: function (e) {
            var t = 1.70158;
            return e * e * ((t + 1) * e - t);
          },
          easeOutBack: function (e) {
            var t = 1.70158;
            return (e -= -1) * e * ((t + 1) * e + t) + 1;
          },
          easeInOutBack: function (e) {
            var t = 1.70158;
            return (e /= 0.5) < 1
              ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
              : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
          },
          easeInBounce: function (e) {
            return 1 - Ae.easeOutBounce(1 - e);
          },
          easeOutBounce: function (e) {
            return e < 1 / 2.75
              ? 7.5625 * e * e * 1
              : e < 2 / 2.75
              ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
              : e < 2.5 / 2.75
              ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
              : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
          },
          easeInOutBounce: function (e) {
            return e < 0.5
              ? 0.5 * Ae.easeInBounce(2 * e)
              : 0.5 * (Ae.easeOutBounce(2 * e - 1) + 1);
          },
        },
        Le = I(
          null,
          function (e, t) {
            return {
              F: (function (t) {
                d(i, t);
                var n = v(i);
                function i(t, r, o, s) {
                  var l;
                  return (
                    a(this, i),
                    (l = n.call(this, {
                      id: "".concat(t.incidentId, "_").concat(o),
                    })),
                    e(m(l)),
                    (l.contexts = {}),
                    (l.constructionIngredients = t),
                    (l.mcid = o),
                    (l._duration = s.realClip.duration),
                    (l.DescriptiveIncident = s),
                    (l.mc_plugin_npm_name = t.plugin_npm_name),
                    (l.plugin_channel_class = t.Channel),
                    l.addContext(r),
                    s.realClip.subscribeToDurationChange(function (e) {
                      (l._duration = e),
                        l.putMessageOnPipe("recalcDuration", {}, "Groups", {
                          selfExecute: !0,
                          direction: le,
                        });
                    }),
                    (l.easing = Ae.linear),
                    Object.prototype.hasOwnProperty.call(
                      l.DescriptiveIncident.props,
                      "easing"
                    ) &&
                      (Array.isArray(l.DescriptiveIncident.props.easing)
                        ? (l.easing = Se(
                            l.DescriptiveIncident.props.easing[0],
                            l.DescriptiveIncident.props.easing[1],
                            l.DescriptiveIncident.props.easing[2],
                            l.DescriptiveIncident.props.easing[3]
                          ))
                        : (l.easing = Ae[l.DescriptiveIncident.props.easing])),
                    l
                  );
                }
                return i;
              })(t),
              d: [
                {
                  kind: "get",
                  key: "originalContext",
                  value: function () {
                    return this.contexts[this.originalContextKey];
                  },
                },
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return this._duration;
                  },
                },
                {
                  kind: "method",
                  key: "onProgress",
                  value: function (e, t, n) {
                    var i =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3],
                      r = this.easing(e) || 0,
                      o = r * this.duration;
                    !1 !== this.originalContext.context.contextLoaded &&
                      this.contexts[n].onProgress(r, o, i);
                  },
                },
                {
                  kind: "method",
                  key: "addContext",
                  value: function (e) {
                    var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    0 === Object.keys(this.contexts).length &&
                      (this.originalContextKey = e.clipId);
                    var n = p(
                      p({}, this.constructionIngredients),
                      {},
                      {
                        context: e.context,
                        mcid: this.mcid,
                        Incident: Ie,
                        DescriptiveIncident: this.DescriptiveIncident,
                      }
                    );
                    (this.contexts[e.clipId] = Me(n)),
                      t && this.contexts[e.clipId]._onGetContextOnce();
                  },
                },
                {
                  kind: "method",
                  key: "handleAddContext",
                  value: function (e, t) {
                    return this.addContext(t, !0), !0;
                  },
                },
                {
                  kind: "method",
                  key: "handleContextLoaded",
                  value: function (e, t) {
                    this._onGetContextOnce();
                  },
                },
                {
                  kind: "method",
                  decorators: [Pe],
                  key: "getIncidentsByChannel",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "gotContext",
                  value: function () {
                    for (var e in this.contexts) this.contexts[e].gotContext();
                  },
                },
                {
                  kind: "method",
                  key: "_onGetContextOnce",
                  value: function () {
                    if (!1 !== this.originalContext.contextLoaded)
                      for (var e in this.contexts)
                        this.contexts[e]._onGetContextOnce();
                  },
                },
                {
                  kind: "method",
                  key: "lastWish",
                  value: function () {
                    for (var e in this.contexts) this.contexts[e].lastWish();
                  },
                },
                {
                  kind: "method",
                  key: "onGetContext",
                  value: function () {
                    if (!1 !== this.originalContext.contextLoaded)
                      for (var e in this.contexts)
                        this.contexts[e].onGetContext();
                  },
                },
              ],
            };
          },
          he
        ),
        De = I(
          null,
          function (e, t) {
            var n = (function (t) {
              d(i, t);
              var n = v(i);
              function i(t, r, o, s) {
                var l;
                if (
                  (a(this, i),
                  (l = n.call(
                    this,
                    p(
                      p({}, t.props),
                      {},
                      {
                        id:
                          null !== s
                            ? ""
                                .concat(t.incidentId, "_")
                                .concat(o, "_")
                                .concat(s)
                            : "".concat(t.incidentId, "_").concat(o),
                      }
                    )
                  )),
                  e(m(l)),
                  (l.contexts = {}),
                  (l.constructionIngredients = t),
                  (l.mcid = o),
                  (l.attribute = s),
                  (l.mc_plugin_npm_name = t.plugin_npm_name),
                  (l.plugin_channel_class = t.Channel),
                  (l.DescriptiveIncident = t.DescriptiveIncident),
                  l.addContext(r),
                  null !== s)
                ) {
                  var c =
                    l.constructionIngredients.attrs.animatedAttrs[l.attribute];
                  Array.isArray(c)
                    ? (l.originalAnimatedAttributeValue = E(c))
                    : W(c)
                    ? (l.originalAnimatedAttributeValue = p({}, c))
                    : (l.originalAnimatedAttributeValue = c);
                }
                return (
                  (l.easing = Ae.linear),
                  Object.prototype.hasOwnProperty.call(l.props, "easing") &&
                    (Array.isArray(l.props.easing)
                      ? (l.easing = Se(
                          l.props.easing[0],
                          l.props.easing[1],
                          l.props.easing[2],
                          l.props.easing[3]
                        ))
                      : (l.easing = Ae[l.props.easing])),
                  l
                );
              }
              return i;
            })(t);
            return {
              F: n,
              d: [
                {
                  kind: "get",
                  key: "originalContext",
                  value: function () {
                    return this.contexts[this.originalContextKey];
                  },
                },
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return b(f(n.prototype), "duration", this);
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (e) {
                    for (var t in (x(f(n.prototype), "duration", e, this, !0),
                    this.contexts))
                      this.contexts[t].duration = e;
                  },
                },
                {
                  kind: "method",
                  key: "addContext",
                  value: function (e) {
                    var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = !1;
                    0 === Object.keys(this.contexts).length &&
                      ((this.originalContextKey = e.clipId),
                      (this.originalClipContext = e.context),
                      (n = !0));
                    var i = p(
                        p({}, this.constructionIngredients),
                        {},
                        { context: e.context, mcid: this.mcid }
                      ),
                      r = Me(i);
                    (this.contexts[e.clipId] = r),
                      n ||
                        null == this.attribute ||
                        this.contexts[e.clipId].setInitialValue(
                          this.initialValue
                        ),
                      t &&
                        this.contexts[e.clipId].context.contextLoaded &&
                        this.contexts[e.clipId]._onGetContextOnce();
                  },
                },
                {
                  kind: "method",
                  key: "handleAddContext",
                  value: function (e, t) {
                    return this.addContext(t, !0), !0;
                  },
                },
                {
                  kind: "method",
                  key: "handleContextLoaded",
                  value: function (e, t) {
                    return this._onGetContextOnce(), !0;
                  },
                },
                {
                  kind: "method",
                  decorators: [Pe],
                  key: "getIncidentsByChannel",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "onProgress",
                  value: function (e, t, n) {
                    var i =
                      t % (this.delay + this.props.duration + this.hiatus);
                    0 !== t &&
                      0 === i &&
                      (i = this.delay + this.props.duration);
                    var r = i - this.delay;
                    r < 0
                      ? (r = 0)
                      : r > this.props.duration && (r = this.props.duration);
                    var o = r / this.props.duration,
                      s = this.easing(o),
                      a = s * this.props.duration;
                    if (null != n)
                      !1 !== this.originalContext.context.contextLoaded &&
                        this.contexts[n].onProgress(s, a);
                    else
                      for (var l in this.contexts)
                        (this.originalContextKey === l &&
                          !0 === this.originalContext.fragment) ||
                          this.contexts[l].onProgress(s, a);
                  },
                },
                {
                  kind: "get",
                  key: "animatedAttributeValue",
                  value: function () {
                    return this.constructionIngredients.attrs.animatedAttrs[
                      this.attribute
                    ];
                  },
                },
                {
                  kind: "set",
                  key: "animatedAttributeValue",
                  value: function (e) {
                    this.constructionIngredients.attrs.animatedAttrs[
                      this.attribute
                    ] = e;
                  },
                },
                {
                  kind: "method",
                  key: "gotContext",
                  value: function () {
                    for (var e in this.contexts) this.contexts[e].gotContext();
                  },
                },
                {
                  kind: "method",
                  key: "_onGetContextOnce",
                  value: function () {
                    if (!1 !== this.originalContext.context.contextLoaded)
                      for (var e in this.contexts)
                        this.contexts[e]._onGetContextOnce();
                  },
                },
                {
                  kind: "method",
                  key: "lastWish",
                  value: function () {
                    for (var e in this.contexts) this.contexts[e].lastWish();
                  },
                },
                {
                  kind: "method",
                  key: "onGetContext",
                  value: function () {
                    if (!1 !== this.originalContext.contextLoaded)
                      for (var e in this.contexts)
                        this.contexts[e].context.contextLoaded &&
                          this.contexts[e].onGetContext();
                  },
                },
                {
                  kind: "get",
                  key: "initialValue",
                  value: function () {
                    return this.originalContext.initialValue;
                  },
                },
                {
                  kind: "get",
                  key: "scratchValue",
                  value: function () {
                    return this.originalContext.scratchValue;
                  },
                },
                {
                  kind: "get",
                  key: "pureInitialValues",
                  value: function () {
                    return this.originalContext.pureInitialValues;
                  },
                },
                {
                  kind: "method",
                  key: "setInitialValue",
                  value: function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : null,
                      t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                    for (var n in (null === e && (e = this.getScratchValue()),
                    this.contexts))
                      this.contexts[n].setInitialValue(
                        JSON.parse(JSON.stringify(e)),
                        t
                      );
                  },
                },
                {
                  kind: "method",
                  key: "getScratchValue",
                  value: function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null;
                    if (!this.originalContext.context.contextLoaded) return 0;
                    if (null != e) return this.contexts[e].getScratchValue();
                    var t = Object.keys(this.contexts);
                    if (
                      Object.prototype.hasOwnProperty.call(
                        this.originalClipContext,
                        "nonFragmentedContext"
                      )
                    ) {
                      var n = p(
                          p({}, this.constructionIngredients),
                          {},
                          {
                            context: this.originalClipContext
                              .nonFragmentedContext,
                            mcid: this.mcid,
                          }
                        ),
                        i = Me(n);
                      return i.getScratchValue();
                    }
                    return 1 === t.length
                      ? this.originalContext.getScratchValue()
                      : this.contexts[t[1]].getScratchValue();
                  },
                },
                {
                  kind: "method",
                  key: "setCompoAttrKeyValue",
                  value: function (e, t) {
                    for (var n in this.contexts)
                      (this.contexts[n].attrs.animatedAttrs[this.attribute][
                        e
                      ] = t),
                        this.contexts[n].lastWish(),
                        this.contexts[n].onGetContext();
                  },
                },
                {
                  kind: "method",
                  key: "play",
                  value: function (e, t, n) {
                    return this.contexts[n].play(t);
                  },
                },
                {
                  kind: "method",
                  key: "stop",
                  value: function (e) {
                    this.contexts[e].stop();
                  },
                },
              ],
            };
          },
          he
        ),
        Be = (function (e) {
          d(n, e);
          var t = v(n);
          function n(e, i, r, o) {
            var s,
              l =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : null;
            return (
              a(this, n),
              ((s = t.call(
                this,
                {},
                { id: "".concat(e.id, "_").concat(r) }
              )).mcid = r),
              (s.selector = o),
              (s.dynamicValues = null !== l ? l : { attrs: [], props: [] }),
              s.setUp(e, i),
              s
            );
          }
          return (
            c(n, [
              {
                key: "setUp",
                value: function (e, t) {
                  var n = e.attrs,
                    i = e.props;
                  if (this.dynamicValues.attrs.length > 0) {
                    n = JSON.parse(JSON.stringify(e.attrs));
                    for (var r = 0; r < this.dynamicValues.attrs.length; r++)
                      ie(
                        n,
                        this.dynamicValues.attrs[r].path,
                        this.dynamicValues.attrs[r].value
                      );
                  }
                  if (this.dynamicValues.props.length > 0) {
                    i = JSON.parse(JSON.stringify(e.props));
                    for (var o = 0; o < this.dynamicValues.props.length; o++)
                      ie(
                        i,
                        this.dynamicValues.props[o].path,
                        this.dynamicValues.props[o].value
                      );
                  }
                  for (var s in n.animatedAttrs) {
                    var a = {};
                    a[s] = n.animatedAttrs[s];
                    var l = p(p({}, n), {}, { animatedAttrs: a }),
                      c = p(p({}, i), {}, { selector: this.selector }),
                      u = {
                        incidentId: e.id,
                        attrs: l,
                        props: c,
                        Incident: e.constructor.Incident,
                        plugin_npm_name: e.constructor.plugin_npm_name,
                        Channel: e.constructor.Channel,
                        DescriptiveIncident: e,
                      },
                      h = new De(u, t, this.mcid, s);
                    this.addChild(h, 0);
                  }
                },
              },
            ]),
            n
          );
        })(ye);
      function je(e, t) {
        for (var n = [], i = 0; i < e.length; i++)
          n.push({ path: e[i].path, value: e[i].values[t] });
        return n;
      }
      function Re(e, t) {
        for (var n = [], i = 0; i < e.length; i++)
          n.push({ path: e[i].path, value: e[i].values[t] });
        return n;
      }
      var Ve = (function (e) {
          d(n, e);
          var t = v(n);
          function n(e, i) {
            var r;
            return (
              a(this, n),
              ((r = t.call(this, {}, { id: e.id })).contexts = {}),
              (r.contexts[i.clipId] = i.context),
              (r.originalContextKey = i.clipId),
              (r.initParams = i.context.initParams),
              (r.instantiatedCopiesContexts = i.instantiatedCopiesContexts),
              (r.descriptiveIncident = e),
              (r.staggerAttrs = []),
              (r.staggerProps = []),
              r.setUp(e, i),
              r
            );
          }
          return (
            c(n, [
              {
                key: "originalContext",
                get: function () {
                  return this.contexts[this.originalContextKey];
                },
              },
              {
                key: "parsePropsDynamicValues",
                value: function (e, t) {
                  for (var n = 0; n < e.propsStaggers.length; n++)
                    this.staggerProps.push({
                      path: e.propsStaggers[n].path,
                      values: e.propsStaggers[n].stagger.calculateValues(
                        t,
                        this.initParams
                      ),
                    });
                },
              },
              {
                key: "parseAttrsDynamicValues",
                value: function (e, t) {
                  for (var n = 0; n < e.attributesStaggers.length; n++)
                    this.staggerAttrs.push({
                      path: e.attributesStaggers[n].path,
                      values: e.attributesStaggers[n].stagger.calculateValues(
                        t,
                        this.initParams
                      ),
                    });
                },
              },
              {
                key: "setUp",
                value: function (e, t) {
                  var n,
                    i,
                    r = this.originalContext.getElements(e.selector());
                  this.parsePropsDynamicValues(e, r),
                    this.parseAttrsDynamicValues(e, r);
                  for (var o = 0; o < r.length; o++) {
                    for (var s in ((n = r[o]),
                    (i = this._getElementMCID(n)),
                    this.instantiatedCopiesContexts))
                      this._setElementMCID(
                        this.instantiatedCopiesContexts[s],
                        this.instantiatedCopiesContexts[s].getElements(
                          e.selector()
                        )[o],
                        i
                      );
                    this._createElementIncident(n, e, t, o, r.length, i);
                  }
                },
              },
              {
                key: "handleRecalcDuration",
                value: function (e, t) {
                  var i = b(f(n.prototype), "handleRecalcDuration", this).call(
                    this,
                    e,
                    t
                  );
                  return (
                    this.descriptiveIncident.propsStaggers.length > 0 &&
                      (this.descriptiveIncident.dynamicDurationValue =
                        1 * this.duration),
                    i
                  );
                },
              },
              {
                key: "lastWish",
                value: function () {
                  this.descriptiveIncident.propsStaggers.length > 0 &&
                    ((this.descriptiveIncident.dynamicDurationValue = null),
                    this.descriptiveIncident.putMessageOnPipe(
                      "setDurationDynamic",
                      {},
                      "Groups",
                      { selfExecute: !1, direction: le }
                    )),
                    b(f(n.prototype), "lastWish", this).call(this);
                },
              },
              {
                key: "_getElementMCID",
                value: function (e) {
                  var t = this.originalContext.getMCID(e);
                  return (
                    t || ((t = te(!0)), this.originalContext.setMCID(e, t)), t
                  );
                },
              },
              {
                key: "_setElementMCID",
                value: function (e, t, n) {
                  e.getMCID(t) || e.setMCID(t, n);
                },
              },
              {
                key: "_createElementIncident",
                value: function (e, t, n, i, r, o) {
                  if (
                    Object.prototype.hasOwnProperty.call(
                      t.attrs,
                      "animatedAttrs"
                    )
                  ) {
                    var s = new Be(
                      t,
                      n,
                      o,
                      n.context.getElementSelectorByMCID(o),
                      {
                        attrs: je(this.staggerAttrs, i),
                        props: Re(this.staggerProps, i),
                      }
                    );
                    this.addChild(s, 0);
                  } else {
                    var a = t.attrs,
                      l = p({}, t.props),
                      c = {
                        incidentId: t.id,
                        attrs: a,
                        props: l,
                        Incident: t.constructor.Incident,
                        plugin_npm_name: t.constructor.plugin_npm_name,
                        Channel: t.constructor.Channel,
                        DescriptiveIncident: t,
                      },
                      u = new De(c, n, o, null);
                    this.addChild(u, 0);
                  }
                },
              },
            ]),
            n
          );
        })(ye),
        Ne = (function (e) {
          d(n, e);
          var t = v(n);
          function n(e, i) {
            var r;
            return (
              a(this, n), ((r = t.call(this, e, i)).realClip = e.realClip), r
            );
          }
          return (
            c(n, [
              {
                key: "_createElementIncident",
                value: function (e, t, n, i, r, o) {
                  var s = t.realClip.exportConstructionArguments(),
                    a = {
                      incidentId: t.id,
                      attrs: s.attrs,
                      props: p(
                        p({}, s.props),
                        {},
                        {
                          selector: n.context.getElementSelectorByMCID(o),
                          runTimeInfo: t.runTimeInfo,
                        }
                      ),
                      Incident: t.constructor.Incident,
                      plugin_npm_name: t.constructor.plugin_npm_name,
                      Channel: be,
                      DescriptiveIncident: t,
                    },
                    l = new Le(a, n, o, t);
                  this.addChild(l, 0);
                },
              },
              {
                key: "duration",
                get: function () {
                  return b(f(n.prototype), "duration", this);
                },
                set: function (e) {
                  this.realClip._resize(e / this.realClip.duration),
                    (this._duration = e);
                },
              },
            ]),
            n
          );
        })(Ve),
        Fe = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : N,
            r =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : window;
          Object.prototype.hasOwnProperty.call(r, i) || (r[i] = {});
          for (var o = r[i], s = e.split("."), a = 0; a < s.length - 1; a++)
            Object.prototype.hasOwnProperty.call(o, s[a]) || (o[s[a]] = {}),
              (o = o[s[a]]);
          return !(
            (Object.prototype.hasOwnProperty.call(o, s[s.length - 1]) &&
              !1 === n) ||
            ((o[s[s.length - 1]] = t), 0)
          );
        };
      function $e(e) {
        var t = {},
          n = [],
          i = Array.isArray(e),
          r = i ? e.length : 0,
          o = null;
        return new Proxy(e, {
          keywords: [
            "setValue",
            "_getFromProxy",
            "__createPathProxies",
            "hasOwnProperty",
            "pushValue",
            "removePathKey",
            "removeKey",
            "restoreKey",
            "getKeys",
            "exportFlattened",
            "isArray",
            "push",
            "sortBy",
            "findIndex",
          ],
          get: function (s, a) {
            return "length" === a && i
              ? r
              : this.keywords.indexOf(a) >= 0
              ? this[a]
              : n.indexOf(a) >= 0
              ? void 0
              : (i && null !== o && (a = o[a]),
                Object.prototype.hasOwnProperty.call(t, a) ? t[a] : e[a]);
          },
          isArray: function () {
            return i;
          },
          _getFromProxy: function (e) {
            return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
          },
          set: function () {
            return !1;
          },
          sortBy: function (e) {
            if (((o = null), !i)) return !1;
            o = (function (e, t) {
              for (var n = [], i = 0; i < e.length; i++) n.push([e[i], i]);
              n.sort(function (e, n) {
                return e[0][t] < n[0][t] ? -1 : 1;
              });
              var r = [];
              for (var o in n) r.push(n[o][1]);
              return r;
            })(this, e);
          },
          __createPathProxies: function (n) {
            for (var r = t, s = e, a = 0; a < n.length - 1; a++) {
              var l = i && null !== o ? o[n[a]] : n[a];
              if (0 === a ? void 0 === r[l] : void 0 === r._getFromProxy(l)) {
                var c = $e((void 0 !== s && s[l]) || {});
                0 === a ? (r[l] = c) : r.setValue(l, c);
              }
              (r = r[l]), (s = void 0 !== s ? s[l] : {});
            }
            return { currentObject: r, currentRealObect: s };
          },
          findIndex: function (e) {
            if (!i) return null;
            for (var t = 0; t < r; t++) if (e(this[t])) return t;
            return null;
          },
          setValue: function (e, t) {
            var i = e.split("."),
              r = this.__createPathProxies(i).currentObject,
              o = t;
            if (("object" === s(t) && (o = $e(t)), 1 === i.length)) {
              r[i[i.length - 1]] = o;
              var a = n.indexOf(i[i.length - 1]);
              a > -1 && n.splice(a, 1);
            } else
              r.setValue(i[i.length - 1], o), r.restoreKey(i[i.length - 1]);
            return !0;
          },
          pushValue: function (t, n) {
            var i = t.split("."),
              r = this.__createPathProxies(i),
              o = r.currentObject;
            if (void 0 === r.currentRealObect) return !1;
            var s = i[i.length - 1],
              a = o[s],
              l = e[s];
            if (("" === t && ((a = this), (l = e)), 1 !== i.length))
              return o.pushValue(s, n);
            var c = !1;
            if (void 0 !== a) {
              if (((c = !0), !a.isArray())) return !1;
            } else if (!Array.isArray(l)) return !1;
            if (!c) {
              var u = $e(l);
              (o[s] = u), (a = o[s]);
            }
            return a.push(n), !0;
          },
          push: function (e) {
            return (
              !!this.isArray() &&
              ("object" === s(e) ? (t[r] = $e(e)) : (t[r] = e), (r += 1), !0)
            );
          },
          removePathKey: function (e) {
            var t = e.split(".");
            return (
              this.__createPathProxies(t).currentObject.removeKey(
                t[t.length - 1]
              ),
              !0
            );
          },
          removeKey: function (e) {
            n.push(e);
          },
          restoreKey: function (e) {
            var t = n.indexOf(e);
            t > -1 && n.splice(t, 1);
          },
          hasOwnProperty: function (e) {
            return !(n.indexOf(e) > -1) && void 0 !== this[e];
          },
          getKeys: function () {
            if (i) return [];
            for (
              var r = [],
                o = Object.keys(e),
                s = Object.keys(t),
                a = [].concat(E(o), E(s)),
                l = a.filter(function (e, t) {
                  return a.indexOf(e) === t;
                }),
                c = 0;
              c < l.length;
              c++
            )
              n.indexOf(l[c]) < 0 && r.push(l[c]);
            return r;
          },
          exportFlattened: function () {
            var n;
            if (i)
              if (((n = []), null !== o))
                for (var r = 0; r < o.length; r++) {
                  var a = o[r];
                  if (Object.prototype.hasOwnProperty.call(t, a)) {
                    var l = t[a];
                    if ("object" === s(l))
                      try {
                        n[r] = t[a].exportFlattened();
                      } catch (e) {
                        n[r] = l;
                      }
                    else n[r] = l;
                  } else n[r] = e[a];
                }
              else {
                n = E(e);
                for (var c = 0, u = Object.entries(t); c < u.length; c++) {
                  var h = k(u[c], 2),
                    p = h[0],
                    d = h[1];
                  if ("object" === s(d))
                    try {
                      n[p] = t[p].exportFlattened();
                    } catch (e) {
                      n[p] = d;
                    }
                  else n[p] = d;
                }
              }
            else {
              n = {};
              for (var f = this.getKeys(), m = 0; m < f.length; m++) {
                var g = f[m];
                void 0 !== t[g]
                  ? "object" === s(t[g])
                    ? (n[g] = t[g].exportFlattened())
                    : (n[g] = t[g])
                  : (n[g] = e[g]);
              }
            }
            return n;
          },
        });
      }
      var ze = "6.3.2",
        He = function e(t, n, i = {}) {
          for (let o in n)
            if (
              "object" == typeof (r = n[o]) &&
              !Array.isArray(r) &&
              null != r &&
              Object.keys(r).length > 0
            )
              (t[o] = t[o] || {}), e(t[o], n[o], i);
            else {
              if (!0 === i.skipIfExist && void 0 !== t[o]) continue;
              t[o] = n[o];
            }
          var r;
          return t;
        },
        Ue = {
          required: "The '{field}' field is required.",
          string: "The '{field}' field must be a string.",
          stringEmpty: "The '{field}' field must not be empty.",
          stringMin:
            "The '{field}' field length must be greater than or equal to {expected} characters long.",
          stringMax:
            "The '{field}' field length must be less than or equal to {expected} characters long.",
          stringLength:
            "The '{field}' field length must be {expected} characters long.",
          stringPattern:
            "The '{field}' field fails to match the required pattern.",
          stringContains:
            "The '{field}' field must contain the '{expected}' text.",
          stringEnum:
            "The '{field}' field does not match any of the allowed values.",
          stringNumeric: "The '{field}' field must be a numeric string.",
          stringAlpha: "The '{field}' field must be an alphabetic string.",
          stringAlphanum: "The '{field}' field must be an alphanumeric string.",
          stringAlphadash: "The '{field}' field must be an alphadash string.",
          stringHex: "The '{field}' field must be a hex string.",
          stringSingleLine: "The '{field}' field must be a single line string.",
          stringBase64: "The '{field}' field must be a base64 string.",
          number: "The '{field}' field must be a number.",
          numberMin:
            "The '{field}' field must be greater than or equal to {expected}.",
          numberMax:
            "The '{field}' field must be less than or equal to {expected}.",
          numberEqual: "The '{field}' field must be equal to {expected}.",
          numberNotEqual: "The '{field}' field can't be equal to {expected}.",
          numberInteger: "The '{field}' field must be an integer.",
          numberPositive: "The '{field}' field must be a positive number.",
          numberNegative: "The '{field}' field must be a negative number.",
          array: "The '{field}' field must be an array.",
          arrayEmpty: "The '{field}' field must not be an empty array.",
          arrayMin:
            "The '{field}' field must contain at least {expected} items.",
          arrayMax:
            "The '{field}' field must contain less than or equal to {expected} items.",
          arrayLength: "The '{field}' field must contain {expected} items.",
          arrayContains:
            "The '{field}' field must contain the '{expected}' item.",
          arrayUnique:
            "The '{actual}' value in '{field}' field does not unique the '{expected}' values.",
          arrayEnum:
            "The '{actual}' value in '{field}' field does not match any of the '{expected}' values.",
          tuple: "The '{field}' field must be an array.",
          tupleEmpty: "The '{field}' field must not be an empty array.",
          tupleLength: "The '{field}' field must contain {expected} items.",
          boolean: "The '{field}' field must be a boolean.",
          currency: "The '{field}' must be a valid currency format",
          date: "The '{field}' field must be a Date.",
          dateMin:
            "The '{field}' field must be greater than or equal to {expected}.",
          dateMax:
            "The '{field}' field must be less than or equal to {expected}.",
          enumValue:
            "The '{field}' field value '{expected}' does not match any of the allowed values.",
          equalValue:
            "The '{field}' field value must be equal to '{expected}'.",
          equalField:
            "The '{field}' field value must be equal to '{expected}' field value.",
          forbidden: "The '{field}' field is forbidden.",
          function: "The '{field}' field must be a function.",
          email: "The '{field}' field must be a valid e-mail.",
          emailEmpty: "The '{field}' field must not be empty.",
          emailMin:
            "The '{field}' field length must be greater than or equal to {expected} characters long.",
          emailMax:
            "The '{field}' field length must be less than or equal to {expected} characters long.",
          luhn: "The '{field}' field must be a valid checksum luhn.",
          mac: "The '{field}' field must be a valid MAC address.",
          object: "The '{field}' must be an Object.",
          objectStrict:
            "The object '{field}' contains forbidden keys: '{actual}'.",
          objectMinProps:
            "The object '{field}' must contain at least {expected} properties.",
          objectMaxProps:
            "The object '{field}' must contain {expected} properties at most.",
          url: "The '{field}' field must be a valid URL.",
          urlEmpty: "The '{field}' field must not be empty.",
          uuid: "The '{field}' field must be a valid UUID.",
          uuidVersion:
            "The '{field}' field must be a valid UUID version provided.",
          classInstanceOf:
            "The '{field}' field must be an instance of the '{expected}' class.",
          objectID: "The '{field}' field must be an valid ObjectID",
        },
        We = function () {
          const e = [];
          return e.push("\n\t\treturn value;\n\t"), { source: e.join("\n") };
        },
        qe = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          if (
            (r.push(
              `\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({
                type: "array",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`
            ),
            !1 === e.empty &&
              r.push(
                `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                  type: "arrayEmpty",
                  actual: "value",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.min &&
              r.push(
                `\n\t\t\tif (len < ${e.min}) {\n\t\t\t\t${this.makeError({
                  type: "arrayMin",
                  expected: e.min,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.max &&
              r.push(
                `\n\t\t\tif (len > ${e.max}) {\n\t\t\t\t${this.makeError({
                  type: "arrayMax",
                  expected: e.max,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.length &&
              r.push(
                `\n\t\t\tif (len !== ${e.length}) {\n\t\t\t\t${this.makeError({
                  type: "arrayLength",
                  expected: e.length,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.contains &&
              r.push(
                `\n\t\t\tif (value.indexOf(${JSON.stringify(
                  e.contains
                )}) === -1) {\n\t\t\t\t${this.makeError({
                  type: "arrayContains",
                  expected: JSON.stringify(e.contains),
                  actual: "value",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === e.unique &&
              r.push(
                `\n\t\t\tif(len > (new Set(value)).size) {\n\t\t\t\t${this.makeError(
                  {
                    type: "arrayUnique",
                    expected:
                      "Array.from(new Set(value.filter((item, index) => value.indexOf(item) !== index)))",
                    actual: "value",
                    messages: t,
                  }
                )}\n\t\t\t}\n\t\t`
              ),
            null != e.enum)
          ) {
            const n = JSON.stringify(e.enum);
            r.push(
              `\n\t\t\tfor (var i = 0; i < value.length; i++) {\n\t\t\t\tif (${n}.indexOf(value[i]) === -1) {\n\t\t\t\t\t${this.makeError(
                {
                  type: "arrayEnum",
                  expected: '"' + e.enum.join(", ") + '"',
                  actual: "value[i]",
                  messages: t,
                }
              )}\n\t\t\t\t}\n\t\t\t}\n\t\t`
            );
          }
          if (null != e.items) {
            r.push(
              "\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t\tfor (var i = 0; i < arr.length; i++) {\n\t\t"
            );
            const t = n + "[]",
              o = this.getRuleFromSchema(e.items),
              s =
                'arr[i] = context.fn[%%INDEX%%](arr[i], (parentField ? parentField : "") + "[" + i + "]", parent, errors, context)';
            r.push(this.compileRule(o, i, t, s, "arr[i]")),
              r.push("\n\t\t\t}\n\t\t");
          }
          return r.push("\n\t\treturn value;\n\t"), { source: r.join("\n") };
        },
        Ge = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          let o = !1;
          return (
            r.push("\n\t\tvar origValue = value;\n\t"),
            !0 === e.convert &&
              ((o = !0),
              r.push(
                '\n\t\t\tif (typeof value !== "boolean") {\n\t\t\t\tif (\n\t\t\t\tvalue === 1\n\t\t\t\t|| value === "true"\n\t\t\t\t|| value === "1"\n\t\t\t\t|| value === "on"\n\t\t\t\t) {\n\t\t\t\t\tvalue = true;\n\t\t\t\t} else if (\n\t\t\t\tvalue === 0\n\t\t\t\t|| value === "false"\n\t\t\t\t|| value === "0"\n\t\t\t\t|| value === "off"\n\t\t\t\t) {\n\t\t\t\t\tvalue = false;\n\t\t\t\t}\n\t\t\t}\n\t\t'
              )),
            r.push(
              `\n\t\tif (typeof value !== "boolean") {\n\t\t\t${this.makeError({
                type: "boolean",
                actual: "origValue",
                messages: t,
              })}\n\t\t}\n\t\t\n\t\treturn value;\n\t`
            ),
            { sanitized: o, source: r.join("\n") }
          );
        },
        Je = function ({ schema: e, messages: t, index: n }, i, r) {
          const o = [],
            s = e.instanceOf.name ? e.instanceOf.name : "<UnknowClass>";
          return (
            r.customs[n]
              ? (r.customs[n].schema = e)
              : (r.customs[n] = { schema: e }),
            o.push(
              `\n\t\tif (!(value instanceof context.customs[${n}].schema.instanceOf))\n\t\t\t${this.makeError(
                {
                  type: "classInstanceOf",
                  actual: "value",
                  expected: "'" + s + "'",
                  messages: t,
                }
              )}\n\t`
            ),
            o.push("\n\t\treturn value;\n\t"),
            { source: o.join("\n") }
          );
        },
        Ke = function ({ schema: e, messages: t, index: n }, i, r) {
          const o = [];
          return (
            o.push(
              `\n\t\t${this.makeCustomValidator({
                fnName: "check",
                path: i,
                schema: e,
                messages: t,
                context: r,
                ruleIndex: n,
              })}\n\t\treturn value;\n\t`
            ),
            { source: o.join("\n") }
          );
        },
        Ye = function ({ schema: e, messages: t }, n, i) {
          const r = e.currencySymbol || null,
            o = e.thousandSeparator || ",",
            s = e.decimalSeparator || ".",
            a = e.customRegex;
          let l = !e.symbolOptional,
            c = "(?=.*\\d)^(-?~1|~1-?)(([0-9]\\d{0,2}(~2\\d{3})*)|0)?(\\~3\\d{1,2})?$"
              .replace(/~1/g, r ? `\\${r}${l ? "" : "?"}` : "")
              .replace("~2", o)
              .replace("~3", s);
          const u = [];
          return (
            u.push(
              `\n\t\tif (!value.match(${
                a || new RegExp(c)
              })) {\n\t\t\t${this.makeError({
                type: "currency",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\treturn value;\n\t`
            ),
            { source: u.join("\n") }
          );
        },
        Xe = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          let o = !1;
          return (
            r.push("\n\t\tvar origValue = value;\n\t"),
            !0 === e.convert &&
              ((o = !0),
              r.push(
                "\n\t\t\tif (!(value instanceof Date)) {\n\t\t\t\tvalue = new Date(value);\n\t\t\t}\n\t\t"
              )),
            r.push(
              `\n\t\tif (!(value instanceof Date) || isNaN(value.getTime()))\n\t\t\t${this.makeError(
                { type: "date", actual: "origValue", messages: t }
              )}\n\n\t\treturn value;\n\t`
            ),
            { sanitized: o, source: r.join("\n") }
          );
        };
      const Qe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        Ze = /^\S+@\S+\.\S+$/;
      var et = function ({ schema: e, messages: t }, n, i) {
          const r = [],
            o = "precise" == e.mode ? Qe : Ze;
          let s = !1;
          return (
            r.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\t`
            ),
            e.empty
              ? r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t")
              : r.push(
                  `\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({
                    type: "emailEmpty",
                    actual: "value",
                    messages: t,
                  })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
                ),
            e.normalize &&
              ((s = !0),
              r.push("\n\t\t\tvalue = value.trim().toLowerCase();\n\t\t")),
            null != e.min &&
              r.push(
                `\n\t\t\tif (value.length < ${
                  e.min
                }) {\n\t\t\t\t${this.makeError({
                  type: "emailMin",
                  expected: e.min,
                  actual: "value.length",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.max &&
              r.push(
                `\n\t\t\tif (value.length > ${
                  e.max
                }) {\n\t\t\t\t${this.makeError({
                  type: "emailMax",
                  expected: e.max,
                  actual: "value.length",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            r.push(
              `\n\t\tif (!${o.toString()}.test(value)) {\n\t\t\t${this.makeError(
                { type: "email", actual: "value", messages: t }
              )}\n\t\t}\n\n\t\treturn value;\n\t`
            ),
            { sanitized: s, source: r.join("\n") }
          );
        },
        tt = function ({ schema: e, messages: t }, n, i) {
          return {
            source: `\n\t\t\tif (${JSON.stringify(
              e.values || []
            )}.indexOf(value) === -1)\n\t\t\t\t${this.makeError({
              type: "enumValue",
              expected: '"' + e.values.join(", ") + '"',
              actual: "value",
              messages: t,
            })}\n\t\t\t\n\t\t\treturn value;\n\t\t`,
          };
        },
        nt = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          return (
            e.field
              ? (e.strict
                  ? r.push(
                      `\n\t\t\t\tif (value !== parent["${e.field}"])\n\t\t\t`
                    )
                  : r.push(
                      `\n\t\t\t\tif (value != parent["${e.field}"])\n\t\t\t`
                    ),
                r.push(
                  `\n\t\t\t\t${this.makeError({
                    type: "equalField",
                    actual: "value",
                    expected: JSON.stringify(e.field),
                    messages: t,
                  })}\n\t\t`
                ))
              : (e.strict
                  ? r.push(
                      `\n\t\t\t\tif (value !== ${JSON.stringify(
                        e.value
                      )})\n\t\t\t`
                    )
                  : r.push(
                      `\n\t\t\t\tif (value != ${JSON.stringify(
                        e.value
                      )})\n\t\t\t`
                    ),
                r.push(
                  `\n\t\t\t\t${this.makeError({
                    type: "equalValue",
                    actual: "value",
                    expected: JSON.stringify(e.value),
                    messages: t,
                  })}\n\t\t`
                )),
            r.push("\n\t\treturn value;\n\t"),
            { source: r.join("\n") }
          );
        },
        it = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          return (
            r.push("\n\t\tif (value !== null && value !== undefined) {\n\t"),
            e.remove
              ? r.push("\n\t\t\treturn undefined;\n\t\t")
              : r.push(
                  `\n\t\t\t${this.makeError({
                    type: "forbidden",
                    actual: "value",
                    messages: t,
                  })}\n\t\t`
                ),
            r.push("\n\t\t}\n\n\t\treturn value;\n\t"),
            { source: r.join("\n") }
          );
        },
        rt = function ({ schema: e, messages: t }, n, i) {
          return {
            source: `\n\t\t\tif (typeof value !== "function")\n\t\t\t\t${this.makeError(
              { type: "function", actual: "value", messages: t }
            )}\n\n\t\t\treturn value;\n\t\t`,
          };
        },
        ot = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          r.push(
            "\n\t\tvar prevErrLen = errors.length;\n\t\tvar errBefore;\n\t\tvar hasValid = false;\n\t\tvar newVal = value;\n\t"
          );
          for (let t = 0; t < e.rules.length; t++) {
            r.push(
              "\n\t\t\tif (!hasValid) {\n\t\t\t\terrBefore = errors.length;\n\t\t"
            );
            const o = this.getRuleFromSchema(e.rules[t]);
            r.push(
              this.compileRule(
                o,
                i,
                n,
                "var tmpVal = context.fn[%%INDEX%%](value, field, parent, errors, context);",
                "tmpVal"
              )
            ),
              r.push(
                "\n\t\t\t\tif (errors.length == errBefore) {\n\t\t\t\t\thasValid = true;\n\t\t\t\t\tnewVal = tmpVal;\n\t\t\t\t}\n\t\t\t}\n\t\t"
              );
          }
          return (
            r.push(
              "\n\t\tif (hasValid) {\n\t\t\terrors.length = prevErrLen;\n\t\t}\n\t\t\n\t\treturn newVal;\n\t"
            ),
            { source: r.join("\n") }
          );
        },
        st = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          r.push("\n\t\tvar origValue = value;\n\t");
          let o = !1;
          return (
            !0 === e.convert &&
              ((o = !0),
              r.push(
                '\n\t\t\tif (typeof value !== "number") {\n\t\t\t\tvalue = Number(value);\n\t\t\t}\n\t\t'
              )),
            r.push(
              `\n\t\tif (typeof value !== "number" || isNaN(value) || !isFinite(value)) {\n\t\t\t${this.makeError(
                { type: "number", actual: "origValue", messages: t }
              )}\n\t\t\treturn value;\n\t\t}\n\t`
            ),
            null != e.min &&
              r.push(
                `\n\t\t\tif (value < ${e.min}) {\n\t\t\t\t${this.makeError({
                  type: "numberMin",
                  expected: e.min,
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.max &&
              r.push(
                `\n\t\t\tif (value > ${e.max}) {\n\t\t\t\t${this.makeError({
                  type: "numberMax",
                  expected: e.max,
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.equal &&
              r.push(
                `\n\t\t\tif (value !== ${e.equal}) {\n\t\t\t\t${this.makeError({
                  type: "numberEqual",
                  expected: e.equal,
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.notEqual &&
              r.push(
                `\n\t\t\tif (value === ${
                  e.notEqual
                }) {\n\t\t\t\t${this.makeError({
                  type: "numberNotEqual",
                  expected: e.notEqual,
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === e.integer &&
              r.push(
                `\n\t\t\tif (value % 1 !== 0) {\n\t\t\t\t${this.makeError({
                  type: "numberInteger",
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === e.positive &&
              r.push(
                `\n\t\t\tif (value <= 0) {\n\t\t\t\t${this.makeError({
                  type: "numberPositive",
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === e.negative &&
              r.push(
                `\n\t\t\tif (value >= 0) {\n\t\t\t\t${this.makeError({
                  type: "numberNegative",
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            r.push("\n\t\treturn value;\n\t"),
            { sanitized: o, source: r.join("\n") }
          );
        };
      const at = /^[_$a-zA-Z][_$a-zA-Z0-9]*$/,
        lt = /["'\\\n\r\u2028\u2029]/g;
      function ct(e) {
        return e.replace(lt, function (e) {
          switch (e) {
            case '"':
            case "'":
            case "\\":
              return "\\" + e;
            case "\n":
              return "\\n";
            case "\r":
              return "\\r";
            case "\u2028":
              return "\\u2028";
            case "\u2029":
              return "\\u2029";
          }
        });
      }
      var ut = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          r.push(
            `\n\t\tif (typeof value !== "object" || value === null || Array.isArray(value)) {\n\t\t\t${this.makeError(
              { type: "object", actual: "value", messages: t }
            )}\n\t\t\treturn value;\n\t\t}\n\t`
          );
          const o = e.properties || e.props;
          if (o) {
            r.push("var parentObj = value;"),
              r.push("var parentField = field;");
            const s = Object.keys(o);
            for (let e = 0; e < s.length; e++) {
              const t = s[e],
                a = ct(t),
                l = at.test(a) ? "." + a : `['${a}']`,
                c = "parentObj" + l,
                u = (n ? n + "." : "") + t;
              r.push("\n// Field: " + ct(u)),
                r.push(`field = parentField ? parentField + "${l}" : "${a}";`),
                r.push(`value = ${c};`);
              const h = this.getRuleFromSchema(o[t]),
                p = `\n\t\t\t\t${c} = context.fn[%%INDEX%%](value, field, parentObj, errors, context);\n\t\t\t`;
              r.push(this.compileRule(h, i, u, p, c));
            }
            if (e.strict) {
              const n = Object.keys(o);
              r.push(
                `\n\t\t\t\tfield = parentField;\n\t\t\t\tvar invalidProps = [];\n\t\t\t\tvar props = Object.keys(parentObj);\n\n\t\t\t\tfor (let i = 0; i < props.length; i++) {\n\t\t\t\t\tif (${JSON.stringify(
                  n
                )}.indexOf(props[i]) === -1) {\n\t\t\t\t\t\tinvalidProps.push(props[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tif (invalidProps.length) {\n\t\t\t`
              ),
                "remove" == e.strict
                  ? r.push(
                      "\n\t\t\t\t\tinvalidProps.forEach(function(field) {\n\t\t\t\t\t\tdelete parentObj[field];\n\t\t\t\t\t});\n\t\t\t\t"
                    )
                  : r.push(
                      `\n\t\t\t\t\t${this.makeError({
                        type: "objectStrict",
                        expected: '"' + n.join(", ") + '"',
                        actual: "invalidProps.join(', ')",
                        messages: t,
                      })}\n\t\t\t\t`
                    ),
                r.push("\n\t\t\t\t}\n\t\t\t");
            }
          }
          return (
            (null == e.minProps && null == e.maxProps) ||
              (e.strict
                ? r.push(
                    `\n\t\t\t\tprops = Object.keys(${
                      o ? "parentObj" : "value"
                    });\n\t\t\t`
                  )
                : r.push(
                    `\n\t\t\t\tvar props = Object.keys(${
                      o ? "parentObj" : "value"
                    });\n\t\t\t\t${o ? "field = parentField;" : ""}\n\t\t\t`
                  )),
            null != e.minProps &&
              r.push(
                `\n\t\t\tif (props.length < ${
                  e.minProps
                }) {\n\t\t\t\t${this.makeError({
                  type: "objectMinProps",
                  expected: e.minProps,
                  actual: "props.length",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.maxProps &&
              r.push(
                `\n\t\t\tif (props.length > ${
                  e.maxProps
                }) {\n\t\t\t\t${this.makeError({
                  type: "objectMaxProps",
                  expected: e.maxProps,
                  actual: "props.length",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            o
              ? r.push("\n\t\t\treturn parentObj;\n\t\t")
              : r.push("\n\t\t\treturn value;\n\t\t"),
            { source: r.join("\n") }
          );
        },
        ht = function ({ schema: e, messages: t, index: n }, i, r) {
          const o = [];
          return (
            r.customs[n]
              ? (r.customs[n].schema = e)
              : (r.customs[n] = { schema: e }),
            o.push(
              `\n\t\tconst ObjectID = context.customs[${n}].schema.ObjectID;\n\t\tif (!ObjectID.isValid(value)) {\n\t\t\t${this.makeError(
                { type: "objectID", actual: "value", messages: t }
              )}\n\t\t\treturn;\n\t\t}\n\t`
            ),
            !0 === e.convert
              ? o.push("return new ObjectID(value)")
              : "hexString" === e.convert
              ? o.push("return value.toString()")
              : o.push("return value"),
            { source: o.join("\n") }
          );
        };
      const pt = /^-?[0-9]\d*(\.\d+)?$/,
        dt = /^[a-zA-Z]+$/,
        ft = /^[a-zA-Z0-9]+$/,
        mt = /^[a-zA-Z0-9_-]+$/,
        gt = /^[0-9a-fA-F]+$/,
        vt = /^(?:[A-Za-z0-9+\\/]{4})*(?:[A-Za-z0-9+\\/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
      var yt = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          let o = !1;
          if (
            (!0 === e.convert &&
              ((o = !0),
              r.push(
                '\n\t\t\tif (typeof value !== "string") {\n\t\t\t\tvalue = String(value);\n\t\t\t}\n\t\t'
              )),
            r.push(
              `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
                type: "string",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar origValue = value;\n\t`
            ),
            e.trim && ((o = !0), r.push("\n\t\t\tvalue = value.trim();\n\t\t")),
            e.trimLeft &&
              ((o = !0), r.push("\n\t\t\tvalue = value.trimLeft();\n\t\t")),
            e.trimRight &&
              ((o = !0), r.push("\n\t\t\tvalue = value.trimRight();\n\t\t")),
            e.padStart)
          ) {
            o = !0;
            const t = null != e.padChar ? e.padChar : " ";
            r.push(
              `\n\t\t\tvalue = value.padStart(${e.padStart}, ${JSON.stringify(
                t
              )});\n\t\t`
            );
          }
          if (e.padEnd) {
            o = !0;
            const t = null != e.padChar ? e.padChar : " ";
            r.push(
              `\n\t\t\tvalue = value.padEnd(${e.padEnd}, ${JSON.stringify(
                t
              )});\n\t\t`
            );
          }
          if (
            (e.lowercase &&
              ((o = !0), r.push("\n\t\t\tvalue = value.toLowerCase();\n\t\t")),
            e.uppercase &&
              ((o = !0), r.push("\n\t\t\tvalue = value.toUpperCase();\n\t\t")),
            e.localeLowercase &&
              ((o = !0),
              r.push("\n\t\t\tvalue = value.toLocaleLowerCase();\n\t\t")),
            e.localeUppercase &&
              ((o = !0),
              r.push("\n\t\t\tvalue = value.toLocaleUpperCase();\n\t\t")),
            r.push("\n\t\t\tvar len = value.length;\n\t"),
            !1 === e.empty &&
              r.push(
                `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                  type: "stringEmpty",
                  actual: "value",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.min &&
              r.push(
                `\n\t\t\tif (len < ${e.min}) {\n\t\t\t\t${this.makeError({
                  type: "stringMin",
                  expected: e.min,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.max &&
              r.push(
                `\n\t\t\tif (len > ${e.max}) {\n\t\t\t\t${this.makeError({
                  type: "stringMax",
                  expected: e.max,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.length &&
              r.push(
                `\n\t\t\tif (len !== ${e.length}) {\n\t\t\t\t${this.makeError({
                  type: "stringLength",
                  expected: e.length,
                  actual: "len",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.pattern)
          ) {
            let n = e.pattern;
            "string" == typeof e.pattern &&
              (n = new RegExp(e.pattern, e.patternFlags));
            const i = `\n\t\t\tif (!${n.toString()}.test(value))\n\t\t\t\t${this.makeError(
              {
                type: "stringPattern",
                expected: `"${n.toString().replace(/"/g, "\\$&")}"`,
                actual: "origValue",
                messages: t,
              }
            )}\n\t\t`;
            r.push(
              `\n\t\t\tif (${e.empty} === true && len === 0) {\n\t\t\t\t// Do nothing\n\t\t\t} else {\n\t\t\t\t${i}\n\t\t\t}\n\t\t`
            );
          }
          if (
            (null != e.contains &&
              r.push(
                `\n\t\t\tif (value.indexOf("${
                  e.contains
                }") === -1) {\n\t\t\t\t${this.makeError({
                  type: "stringContains",
                  expected: '"' + e.contains + '"',
                  actual: "origValue",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            null != e.enum)
          ) {
            const n = JSON.stringify(e.enum);
            r.push(
              `\n\t\t\tif (${n}.indexOf(value) === -1) {\n\t\t\t\t${this.makeError(
                {
                  type: "stringEnum",
                  expected: '"' + e.enum.join(", ") + '"',
                  actual: "origValue",
                  messages: t,
                }
              )}\n\t\t\t}\n\t\t`
            );
          }
          return (
            !0 === e.numeric &&
              r.push(
                `\n\t\t\tif (!${pt.toString()}.test(value) ) {\n\t\t\t\t${this.makeError(
                  { type: "stringNumeric", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.alpha &&
              r.push(
                `\n\t\t\tif(!${dt.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlpha", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.alphanum &&
              r.push(
                `\n\t\t\tif(!${ft.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlphanum", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.alphadash &&
              r.push(
                `\n\t\t\tif(!${mt.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringAlphadash", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.hex &&
              r.push(
                `\n\t\t\tif(value.length % 2 !== 0 || !${gt.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringHex", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            !0 === e.singleLine &&
              r.push(
                `\n\t\t\tif(value.includes("\\n")) {\n\t\t\t\t${this.makeError({
                  type: "stringSingleLine",
                  messages: t,
                })}\n\t\t\t}\n\t\t`
              ),
            !0 === e.base64 &&
              r.push(
                `\n\t\t\tif(!${vt.toString()}.test(value)) {\n\t\t\t\t${this.makeError(
                  { type: "stringBase64", actual: "origValue", messages: t }
                )}\n\t\t\t}\n\t\t`
              ),
            r.push("\n\t\treturn value;\n\t"),
            { sanitized: o, source: r.join("\n") }
          );
        },
        bt = function ({ schema: e, messages: t }, n, i) {
          const r = [];
          if (null != e.items) {
            if (!Array.isArray(e.items))
              throw new Error(
                `Invalid '${e.type}' schema. The 'items' field must be an array.`
              );
            if (0 === e.items.length)
              throw new Error(
                `Invalid '${e.type}' schema. The 'items' field must not be an empty array.`
              );
          }
          if (
            (r.push(
              `\n\t\tif (!Array.isArray(value)) {\n\t\t\t${this.makeError({
                type: "tuple",
                actual: "value",
                messages: t,
              })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar len = value.length;\n\t`
            ),
            !1 === e.empty &&
              r.push(
                `\n\t\t\tif (len === 0) {\n\t\t\t\t${this.makeError({
                  type: "tupleEmpty",
                  actual: "value",
                  messages: t,
                })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
              ),
            null != e.items)
          ) {
            r.push(
              `\n\t\t\tif (${
                e.empty
              } !== false && len === 0) {\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (len !== ${
                e.items.length
              }) {\n\t\t\t\t${this.makeError({
                type: "tupleLength",
                expected: e.items.length,
                actual: "len",
                messages: t,
              })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
            ),
              r.push(
                "\n\t\t\tvar arr = value;\n\t\t\tvar parentField = field;\n\t\t"
              );
            for (let t = 0; t < e.items.length; t++) {
              const o = `${n}[${t}]`,
                s = this.getRuleFromSchema(e.items[t]),
                a = `\n\t\t\tarr[${t}] = context.fn[%%INDEX%%](arr[${t}], (parentField ? parentField : "") + "[" + ${t} + "]", parent, errors, context);\n\t\t`;
              r.push(this.compileRule(s, i, o, a, `arr[${t}]`));
            }
          }
          return r.push("\n\t\treturn value;\n\t"), { source: r.join("\n") };
        };
      const wt = /^https?:\/\/\S+/;
      var xt = function ({ schema: e, messages: t }, n, i) {
        const r = [];
        return (
          r.push(
            `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
              type: "string",
              actual: "value",
              messages: t,
            })}\n\t\t\treturn value;\n\t\t}\n\t`
          ),
          e.empty
            ? r.push("\n\t\t\tif (value.length === 0) return value;\n\t\t")
            : r.push(
                `\n\t\t\tif (value.length === 0) {\n\t\t\t\t${this.makeError({
                  type: "urlEmpty",
                  actual: "value",
                  messages: t,
                })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
              ),
          r.push(
            `\n\t\tif (!${wt.toString()}.test(value)) {\n\t\t\t${this.makeError(
              { type: "url", actual: "value", messages: t }
            )}\n\t\t}\n\n\t\treturn value;\n\t`
          ),
          { source: r.join("\n") }
        );
      };
      const kt = /^([0-9a-f]{8}-[0-9a-f]{4}-[1-6][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}|[0]{8}-[0]{4}-[0]{4}-[0]{4}-[0]{12})$/i;
      var Et = function ({ schema: e, messages: t }, n) {
        const i = [];
        return (
          i.push(
            `\n\t\tif (typeof value !== "string") {\n\t\t\t${this.makeError({
              type: "string",
              actual: "value",
              messages: t,
            })}\n\t\t\treturn value;\n\t\t}\n\n\t\tvar val = value.toLowerCase();\n\t\tif (!${kt.toString()}.test(val)) {\n\t\t\t${this.makeError(
              { type: "uuid", actual: "value", messages: t }
            )}\n\t\t\treturn value;\n\t\t}\n\n\t\tconst version = val.charAt(14) | 0;\n\t`
          ),
          parseInt(e.version) < 7 &&
            i.push(
              `\n\t\t\tif (${
                e.version
              } !== version) {\n\t\t\t\t${this.makeError({
                type: "uuidVersion",
                expected: e.version,
                actual: "version",
                messages: t,
              })}\n\t\t\t\treturn value;\n\t\t\t}\n\t\t`
            ),
          i.push(
            `\n\t\tswitch (version) {\n\t\tcase 0:\n\t\tcase 1:\n\t\tcase 2:\n\t\tcase 6:\n\t\t\tbreak;\n\t\tcase 3:\n\t\tcase 4:\n\t\tcase 5:\n\t\t\tif (["8", "9", "a", "b"].indexOf(val.charAt(19)) === -1) {\n\t\t\t\t${this.makeError(
              { type: "uuid", actual: "value", messages: t }
            )}\n\t\t\t}\n\t\t}\n\n\t\treturn value;\n\t`
          ),
          { source: i.join("\n") }
        );
      };
      const _t = /^((([a-f0-9][a-f0-9]+[-]){5}|([a-f0-9][a-f0-9]+[:]){5})([a-f0-9][a-f0-9])$)|(^([a-f0-9][a-f0-9][a-f0-9][a-f0-9]+[.]){2}([a-f0-9][a-f0-9][a-f0-9][a-f0-9]))$/i;
      var Ct = function ({ schema: e, messages: t }, n, i) {
          return {
            source: `\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError(
              { type: "string", actual: "value", messages: t }
            )}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tvar v = value.toLowerCase();\n\t\t\tif (!${_t.toString()}.test(v)) {\n\t\t\t\t${this.makeError(
              { type: "mac", actual: "value", messages: t }
            )}\n\t\t\t}\n\t\t\t\n\t\t\treturn value;\n\t\t`,
          };
        },
        Ot = function ({ schema: e, messages: t }, n, i) {
          return {
            source: `\n\t\t\tif (typeof value !== "string") {\n\t\t\t\t${this.makeError(
              { type: "string", actual: "value", messages: t }
            )}\n\t\t\t\treturn value;\n\t\t\t}\n\n\t\t\tif (typeof value !== "string")\n\t\t\t\tvalue = String(value);\n\n\t\t\tval = value.replace(/\\D+/g, "");\n\n\t\t\tvar array = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];\n\t\t\tvar len = val ? val.length : 0,\n\t\t\t\tbit = 1,\n\t\t\t\tsum = 0;\n\t\t\twhile (len--) {\n\t\t\t\tsum += !(bit ^= 1) ? parseInt(val[len], 10) : array[val[len]];\n\t\t\t}\n\n\t\t\tif (!(sum % 10 === 0 && sum > 0)) {\n\t\t\t\t${this.makeError(
              { type: "luhn", actual: "value", messages: t }
            )}\n\t\t\t}\n\n\t\t\treturn value;\n\t\t`,
          };
        };
      function St(e) {
        var t = { exports: {} };
        return e(t, t.exports), t.exports;
      }
      function Pt(e) {
        throw new Error(
          'Could not dynamically require "' +
            e +
            '". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.'
        );
      }
      let Tt, It, Mt, At;
      var Lt = function (e) {
          Tt ||
            ((Tt = Pt("prettier")),
            (It = {
              parser: "babel",
              useTabs: !1,
              printWidth: 120,
              trailingComma: "none",
              tabWidth: 4,
              singleQuote: !1,
              semi: !0,
              bracketSpacing: !0,
            }),
            (Mt = Pt("cli-highlight")),
            (At = {
              language: "js",
              theme: Mt.fromJson({
                keyword: ["white", "bold"],
                built_in: "magenta",
                literal: "cyan",
                number: "magenta",
                regexp: "red",
                string: ["yellow", "bold"],
                symbol: "plain",
                class: "blue",
                attr: "plain",
                function: ["white", "bold"],
                title: "plain",
                params: "green",
                comment: "grey",
              }),
            }));
          const t = Tt.format(e, It);
          return Mt.highlight(t, At);
        },
        Dt = "INUMBER",
        Bt = "IOP1",
        jt = "IOP2",
        Rt = "IOP3",
        Vt = "IVAR",
        Nt = "IVARNAME",
        Ft = "IFUNCALL",
        $t = "IFUNDEF",
        zt = "IEXPR",
        Ht = "IEXPREVAL",
        Ut = "IMEMBER",
        Wt = "IENDSTATEMENT",
        qt = "IARRAY";
      function Gt(e, t) {
        (this.type = e), (this.value = null != t ? t : 0);
      }
      function Jt(e) {
        return new Gt(Bt, e);
      }
      function Kt(e) {
        return new Gt(jt, e);
      }
      function Yt(e) {
        return new Gt(Rt, e);
      }
      function Xt(e, t, n) {
        var i,
          r,
          o,
          s,
          a,
          l,
          c = [];
        if (Zt(e)) return en(e, n);
        for (var u = e.length, h = 0; h < u; h++) {
          var p = e[h],
            d = p.type;
          if (d === Dt || d === Nt) c.push(p.value);
          else if (d === jt)
            (r = c.pop()),
              (i = c.pop()),
              "and" === p.value
                ? c.push(!!i && !!Xt(r, t, n))
                : "or" === p.value
                ? c.push(!!i || !!Xt(r, t, n))
                : "=" === p.value
                ? ((s = t.binaryOps[p.value]), c.push(s(i, Xt(r, t, n), n)))
                : ((s = t.binaryOps[p.value]), c.push(s(en(i, n), en(r, n))));
          else if (d === Rt)
            (o = c.pop()),
              (r = c.pop()),
              (i = c.pop()),
              "?" === p.value
                ? c.push(Xt(i ? r : o, t, n))
                : ((s = t.ternaryOps[p.value]),
                  c.push(s(en(i, n), en(r, n), en(o, n))));
          else if (d === Vt)
            if (p.value in t.functions) c.push(t.functions[p.value]);
            else if (
              p.value in t.unaryOps &&
              t.parser.isOperatorEnabled(p.value)
            )
              c.push(t.unaryOps[p.value]);
            else {
              var f = n[p.value];
              if (void 0 === f)
                throw new Error("undefined variable: " + p.value);
              c.push(f);
            }
          else if (d === Bt)
            (i = c.pop()), (s = t.unaryOps[p.value]), c.push(s(en(i, n)));
          else if (d === Ft) {
            for (l = p.value, a = []; l-- > 0; ) a.unshift(en(c.pop(), n));
            if (!(s = c.pop()).apply || !s.call)
              throw new Error(s + " is not a function");
            c.push(s.apply(void 0, a));
          } else if (d === $t)
            c.push(
              (function () {
                for (var e = c.pop(), i = [], r = p.value; r-- > 0; )
                  i.unshift(c.pop());
                var o = c.pop(),
                  s = function () {
                    for (
                      var r = Object.assign({}, n), o = 0, s = i.length;
                      o < s;
                      o++
                    )
                      r[i[o]] = arguments[o];
                    return Xt(e, t, r);
                  };
                return (
                  Object.defineProperty(s, "name", { value: o, writable: !1 }),
                  (n[o] = s),
                  s
                );
              })()
            );
          else if (d === zt) c.push(Qt(p, t));
          else if (d === Ht) c.push(p);
          else if (d === Ut) (i = c.pop()), c.push(i[p.value]);
          else if (d === Wt) c.pop();
          else {
            if (d !== qt) throw new Error("invalid Expression");
            for (l = p.value, a = []; l-- > 0; ) a.unshift(c.pop());
            c.push(a);
          }
        }
        if (c.length > 1) throw new Error("invalid Expression (parity)");
        return 0 === c[0] ? 0 : en(c[0], n);
      }
      function Qt(e, t, n) {
        return Zt(e)
          ? e
          : {
              type: Ht,
              value: function (n) {
                return Xt(e.value, t, n);
              },
            };
      }
      function Zt(e) {
        return e && e.type === Ht;
      }
      function en(e, t) {
        return Zt(e) ? e.value(t) : e;
      }
      function tn(e, t) {
        for (var n, i, r, o, s, a, l = [], c = 0; c < e.length; c++) {
          var u = e[c],
            h = u.type;
          if (h === Dt)
            "number" == typeof u.value && u.value < 0
              ? l.push("(" + u.value + ")")
              : Array.isArray(u.value)
              ? l.push("[" + u.value.map(nn).join(", ") + "]")
              : l.push(nn(u.value));
          else if (h === jt)
            (i = l.pop()),
              (n = l.pop()),
              (o = u.value),
              t
                ? "^" === o
                  ? l.push("Math.pow(" + n + ", " + i + ")")
                  : "and" === o
                  ? l.push("(!!" + n + " && !!" + i + ")")
                  : "or" === o
                  ? l.push("(!!" + n + " || !!" + i + ")")
                  : "||" === o
                  ? l.push(
                      "(function(a,b){ return Array.isArray(a) && Array.isArray(b) ? a.concat(b) : String(a) + String(b); }((" +
                        n +
                        "),(" +
                        i +
                        ")))"
                    )
                  : "==" === o
                  ? l.push("(" + n + " === " + i + ")")
                  : "!=" === o
                  ? l.push("(" + n + " !== " + i + ")")
                  : "[" === o
                  ? l.push(n + "[(" + i + ") | 0]")
                  : l.push("(" + n + " " + o + " " + i + ")")
                : "[" === o
                ? l.push(n + "[" + i + "]")
                : l.push("(" + n + " " + o + " " + i + ")");
          else if (h === Rt) {
            if (
              ((r = l.pop()),
              (i = l.pop()),
              (n = l.pop()),
              "?" !== (o = u.value))
            )
              throw new Error("invalid Expression");
            l.push("(" + n + " ? " + i + " : " + r + ")");
          } else if (h === Vt || h === Nt) l.push(u.value);
          else if (h === Bt)
            (n = l.pop()),
              "-" === (o = u.value) || "+" === o
                ? l.push("(" + o + n + ")")
                : t
                ? "not" === o
                  ? l.push("(!" + n + ")")
                  : "!" === o
                  ? l.push("fac(" + n + ")")
                  : l.push(o + "(" + n + ")")
                : "!" === o
                ? l.push("(" + n + "!)")
                : l.push("(" + o + " " + n + ")");
          else if (h === Ft) {
            for (a = u.value, s = []; a-- > 0; ) s.unshift(l.pop());
            (o = l.pop()), l.push(o + "(" + s.join(", ") + ")");
          } else if (h === $t) {
            for (i = l.pop(), a = u.value, s = []; a-- > 0; )
              s.unshift(l.pop());
            (n = l.pop()),
              t
                ? l.push(
                    "(" +
                      n +
                      " = function(" +
                      s.join(", ") +
                      ") { return " +
                      i +
                      " })"
                  )
                : l.push("(" + n + "(" + s.join(", ") + ") = " + i + ")");
          } else if (h === Ut) (n = l.pop()), l.push(n + "." + u.value);
          else if (h === qt) {
            for (a = u.value, s = []; a-- > 0; ) s.unshift(l.pop());
            l.push("[" + s.join(", ") + "]");
          } else if (h === zt) l.push("(" + tn(u.value, t) + ")");
          else if (h !== Wt) throw new Error("invalid Expression");
        }
        return (
          l.length > 1 && (l = t ? [l.join(",")] : [l.join(";")]), String(l[0])
        );
      }
      function nn(e) {
        return "string" == typeof e
          ? JSON.stringify(e)
              .replace(/\u2028/g, "\\u2028")
              .replace(/\u2029/g, "\\u2029")
          : e;
      }
      function rn(e, t) {
        for (var n = 0; n < e.length; n++) if (e[n] === t) return !0;
        return !1;
      }
      function on(e, t, n) {
        for (
          var i = !!(n = n || {}).withMembers, r = null, o = 0;
          o < e.length;
          o++
        ) {
          var s = e[o];
          s.type === Vt || s.type === Nt
            ? i || rn(t, s.value)
              ? null !== r
                ? (rn(t, r) || t.push(r), (r = s.value))
                : (r = s.value)
              : t.push(s.value)
            : s.type === Ut && i && null !== r
            ? (r += "." + s.value)
            : s.type === zt
            ? on(s.value, t, n)
            : null !== r && (rn(t, r) || t.push(r), (r = null));
        }
        null === r || rn(t, r) || t.push(r);
      }
      function sn(e, t) {
        (this.tokens = e),
          (this.parser = t),
          (this.unaryOps = t.unaryOps),
          (this.binaryOps = t.binaryOps),
          (this.ternaryOps = t.ternaryOps),
          (this.functions = t.functions);
      }
      (Gt.prototype.toString = function () {
        switch (this.type) {
          case Dt:
          case Bt:
          case jt:
          case Rt:
          case Vt:
          case Nt:
          case Wt:
            return this.value;
          case Ft:
            return "CALL " + this.value;
          case $t:
            return "DEF " + this.value;
          case qt:
            return "ARRAY " + this.value;
          case Ut:
            return "." + this.value;
          default:
            return "Invalid Instruction";
        }
      }),
        (sn.prototype.simplify = function (e) {
          return (
            (e = e || {}),
            new sn(
              (function e(t, n, i, r, o) {
                for (var s, a, l, c, u = [], h = [], p = 0; p < t.length; p++) {
                  var d = t[p],
                    f = d.type;
                  if (f === Dt || f === Nt)
                    Array.isArray(d.value)
                      ? u.push.apply(
                          u,
                          e(
                            d.value
                              .map(function (e) {
                                return new Gt(Dt, e);
                              })
                              .concat(new Gt(qt, d.value.length)),
                            n,
                            i,
                            r,
                            o
                          )
                        )
                      : u.push(d);
                  else if (f === Vt && o.hasOwnProperty(d.value))
                    (d = new Gt(Dt, o[d.value])), u.push(d);
                  else if (f === jt && u.length > 1)
                    (a = u.pop()),
                      (s = u.pop()),
                      (c = i[d.value]),
                      (d = new Gt(Dt, c(s.value, a.value))),
                      u.push(d);
                  else if (f === Rt && u.length > 2)
                    (l = u.pop()),
                      (a = u.pop()),
                      (s = u.pop()),
                      "?" === d.value
                        ? u.push(s.value ? a.value : l.value)
                        : ((c = r[d.value]),
                          (d = new Gt(Dt, c(s.value, a.value, l.value))),
                          u.push(d));
                  else if (f === Bt && u.length > 0)
                    (s = u.pop()),
                      (c = n[d.value]),
                      (d = new Gt(Dt, c(s.value))),
                      u.push(d);
                  else if (f === zt) {
                    for (; u.length > 0; ) h.push(u.shift());
                    h.push(new Gt(zt, e(d.value, n, i, r, o)));
                  } else if (f === Ut && u.length > 0)
                    (s = u.pop()), u.push(new Gt(Dt, s.value[d.value]));
                  else {
                    for (; u.length > 0; ) h.push(u.shift());
                    h.push(d);
                  }
                }
                for (; u.length > 0; ) h.push(u.shift());
                return h;
              })(
                this.tokens,
                this.unaryOps,
                this.binaryOps,
                this.ternaryOps,
                e
              ),
              this.parser
            )
          );
        }),
        (sn.prototype.substitute = function (e, t) {
          return (
            t instanceof sn || (t = this.parser.parse(String(t))),
            new sn(
              (function e(t, n, i) {
                for (var r = [], o = 0; o < t.length; o++) {
                  var s = t[o],
                    a = s.type;
                  if (a === Vt && s.value === n)
                    for (var l = 0; l < i.tokens.length; l++) {
                      var c,
                        u = i.tokens[l];
                      (c =
                        u.type === Bt
                          ? Jt(u.value)
                          : u.type === jt
                          ? Kt(u.value)
                          : u.type === Rt
                          ? Yt(u.value)
                          : new Gt(u.type, u.value)),
                        r.push(c);
                    }
                  else
                    a === zt ? r.push(new Gt(zt, e(s.value, n, i))) : r.push(s);
                }
                return r;
              })(this.tokens, e, t),
              this.parser
            )
          );
        }),
        (sn.prototype.evaluate = function (e) {
          return (e = e || {}), Xt(this.tokens, this, e);
        }),
        (sn.prototype.toString = function () {
          return tn(this.tokens, !1);
        }),
        (sn.prototype.symbols = function (e) {
          e = e || {};
          var t = [];
          return on(this.tokens, t, e), t;
        }),
        (sn.prototype.variables = function (e) {
          e = e || {};
          var t = [];
          on(this.tokens, t, e);
          var n = this.functions;
          return t.filter(function (e) {
            return !(e in n);
          });
        }),
        (sn.prototype.toJSFunction = function (e, t) {
          var n = this,
            i = new Function(
              e,
              "with(this.functions) with (this.ternaryOps) with (this.binaryOps) with (this.unaryOps) { return " +
                tn(this.simplify(t).tokens, !0) +
                "; }"
            );
          return function () {
            return i.apply(n, arguments);
          };
        });
      var an = "TEOF",
        ln = "TOP",
        cn = "TNUMBER",
        un = "TSTRING",
        hn = "TPAREN",
        pn = "TBRACKET",
        dn = "TCOMMA",
        fn = "TNAME",
        mn = "TSEMICOLON";
      function gn(e, t, n) {
        (this.type = e), (this.value = t), (this.index = n);
      }
      function vn(e, t) {
        (this.pos = 0),
          (this.current = null),
          (this.unaryOps = e.unaryOps),
          (this.binaryOps = e.binaryOps),
          (this.ternaryOps = e.ternaryOps),
          (this.consts = e.consts),
          (this.expression = t),
          (this.savedPosition = 0),
          (this.savedCurrent = null),
          (this.options = e.options),
          (this.parser = e);
      }
      (gn.prototype.toString = function () {
        return this.type + ": " + this.value;
      }),
        (vn.prototype.newToken = function (e, t, n) {
          return new gn(e, t, null != n ? n : this.pos);
        }),
        (vn.prototype.save = function () {
          (this.savedPosition = this.pos), (this.savedCurrent = this.current);
        }),
        (vn.prototype.restore = function () {
          (this.pos = this.savedPosition), (this.current = this.savedCurrent);
        }),
        (vn.prototype.next = function () {
          return this.pos >= this.expression.length
            ? this.newToken(an, "EOF")
            : this.isWhitespace() || this.isComment()
            ? this.next()
            : this.isRadixInteger() ||
              this.isNumber() ||
              this.isOperator() ||
              this.isString() ||
              this.isParen() ||
              this.isBracket() ||
              this.isComma() ||
              this.isSemicolon() ||
              this.isNamedOp() ||
              this.isConst() ||
              this.isName()
            ? this.current
            : void this.parseError(
                'Unknown character "' + this.expression.charAt(this.pos) + '"'
              );
        }),
        (vn.prototype.isString = function () {
          var e = !1,
            t = this.pos,
            n = this.expression.charAt(t);
          if ("'" === n || '"' === n)
            for (
              var i = this.expression.indexOf(n, t + 1);
              i >= 0 && this.pos < this.expression.length;

            ) {
              if (
                ((this.pos = i + 1), "\\" !== this.expression.charAt(i - 1))
              ) {
                var r = this.expression.substring(t + 1, i);
                (this.current = this.newToken(un, this.unescape(r), t)),
                  (e = !0);
                break;
              }
              i = this.expression.indexOf(n, i + 1);
            }
          return e;
        }),
        (vn.prototype.isParen = function () {
          var e = this.expression.charAt(this.pos);
          return (
            ("(" === e || ")" === e) &&
            ((this.current = this.newToken(hn, e)), this.pos++, !0)
          );
        }),
        (vn.prototype.isBracket = function () {
          var e = this.expression.charAt(this.pos);
          return !(
            ("[" !== e && "]" !== e) ||
            !this.isOperatorEnabled("[") ||
            ((this.current = this.newToken(pn, e)), this.pos++, 0)
          );
        }),
        (vn.prototype.isComma = function () {
          return (
            "," === this.expression.charAt(this.pos) &&
            ((this.current = this.newToken(dn, ",")), this.pos++, !0)
          );
        }),
        (vn.prototype.isSemicolon = function () {
          return (
            ";" === this.expression.charAt(this.pos) &&
            ((this.current = this.newToken(mn, ";")), this.pos++, !0)
          );
        }),
        (vn.prototype.isConst = function () {
          for (var e = this.pos, t = e; t < this.expression.length; t++) {
            var n = this.expression.charAt(t);
            if (
              n.toUpperCase() === n.toLowerCase() &&
              (t === this.pos ||
                ("_" !== n && "." !== n && (n < "0" || n > "9")))
            )
              break;
          }
          if (t > e) {
            var i = this.expression.substring(e, t);
            if (i in this.consts)
              return (
                (this.current = this.newToken(cn, this.consts[i])),
                (this.pos += i.length),
                !0
              );
          }
          return !1;
        }),
        (vn.prototype.isNamedOp = function () {
          for (var e = this.pos, t = e; t < this.expression.length; t++) {
            var n = this.expression.charAt(t);
            if (
              n.toUpperCase() === n.toLowerCase() &&
              (t === this.pos || ("_" !== n && (n < "0" || n > "9")))
            )
              break;
          }
          if (t > e) {
            var i = this.expression.substring(e, t);
            if (
              this.isOperatorEnabled(i) &&
              (i in this.binaryOps ||
                i in this.unaryOps ||
                i in this.ternaryOps)
            )
              return (
                (this.current = this.newToken(ln, i)),
                (this.pos += i.length),
                !0
              );
          }
          return !1;
        }),
        (vn.prototype.isName = function () {
          for (
            var e = this.pos, t = e, n = !1;
            t < this.expression.length;
            t++
          ) {
            var i = this.expression.charAt(t);
            if (i.toUpperCase() === i.toLowerCase()) {
              if (t === this.pos && ("$" === i || "_" === i)) {
                "_" === i && (n = !0);
                continue;
              }
              if (t === this.pos || !n || ("_" !== i && (i < "0" || i > "9")))
                break;
            } else n = !0;
          }
          if (n) {
            var r = this.expression.substring(e, t);
            return (
              (this.current = this.newToken(fn, r)), (this.pos += r.length), !0
            );
          }
          return !1;
        }),
        (vn.prototype.isWhitespace = function () {
          for (
            var e = !1, t = this.expression.charAt(this.pos);
            !(
              (" " !== t && "\t" !== t && "\n" !== t && "\r" !== t) ||
              ((e = !0), this.pos++, this.pos >= this.expression.length)
            );

          )
            t = this.expression.charAt(this.pos);
          return e;
        });
      var yn = /^[0-9a-f]{4}$/i;
      function bn(e, t, n) {
        (this.parser = e),
          (this.tokens = t),
          (this.current = null),
          (this.nextToken = null),
          this.next(),
          (this.savedCurrent = null),
          (this.savedNextToken = null),
          (this.allowMemberAccess = !1 !== n.allowMemberAccess);
      }
      (vn.prototype.unescape = function (e) {
        var t = e.indexOf("\\");
        if (t < 0) return e;
        for (var n = e.substring(0, t); t >= 0; ) {
          var i = e.charAt(++t);
          switch (i) {
            case "'":
              n += "'";
              break;
            case '"':
              n += '"';
              break;
            case "\\":
              n += "\\";
              break;
            case "/":
              n += "/";
              break;
            case "b":
              n += "\b";
              break;
            case "f":
              n += "\f";
              break;
            case "n":
              n += "\n";
              break;
            case "r":
              n += "\r";
              break;
            case "t":
              n += "\t";
              break;
            case "u":
              var r = e.substring(t + 1, t + 5);
              yn.test(r) || this.parseError("Illegal escape sequence: \\u" + r),
                (n += String.fromCharCode(parseInt(r, 16))),
                (t += 4);
              break;
            default:
              throw this.parseError('Illegal escape sequence: "\\' + i + '"');
          }
          ++t;
          var o = e.indexOf("\\", t);
          (n += e.substring(t, o < 0 ? e.length : o)), (t = o);
        }
        return n;
      }),
        (vn.prototype.isComment = function () {
          return (
            "/" === this.expression.charAt(this.pos) &&
            "*" === this.expression.charAt(this.pos + 1) &&
            ((this.pos = this.expression.indexOf("*/", this.pos) + 2),
            1 === this.pos && (this.pos = this.expression.length),
            !0)
          );
        }),
        (vn.prototype.isRadixInteger = function () {
          var e,
            t,
            n = this.pos;
          if (
            n >= this.expression.length - 2 ||
            "0" !== this.expression.charAt(n)
          )
            return !1;
          if ((++n, "x" === this.expression.charAt(n)))
            (e = 16), (t = /^[0-9a-f]$/i), ++n;
          else {
            if ("b" !== this.expression.charAt(n)) return !1;
            (e = 2), (t = /^[01]$/i), ++n;
          }
          for (var i = !1, r = n; n < this.expression.length; ) {
            var o = this.expression.charAt(n);
            if (!t.test(o)) break;
            n++, (i = !0);
          }
          return (
            i &&
              ((this.current = this.newToken(
                cn,
                parseInt(this.expression.substring(r, n), e)
              )),
              (this.pos = n)),
            i
          );
        }),
        (vn.prototype.isNumber = function () {
          for (
            var e, t = !1, n = this.pos, i = n, r = n, o = !1, s = !1;
            n < this.expression.length &&
            (((e = this.expression.charAt(n)) >= "0" && e <= "9") ||
              (!o && "." === e));

          )
            "." === e ? (o = !0) : (s = !0), n++, (t = s);
          if ((t && (r = n), "e" === e || "E" === e)) {
            n++;
            for (var a = !0, l = !1; n < this.expression.length; ) {
              if (
                ((e = this.expression.charAt(n)),
                !a || ("+" !== e && "-" !== e))
              ) {
                if (!(e >= "0" && e <= "9")) break;
                (l = !0), (a = !1);
              } else a = !1;
              n++;
            }
            l || (n = r);
          }
          return (
            t
              ? ((this.current = this.newToken(
                  cn,
                  parseFloat(this.expression.substring(i, n))
                )),
                (this.pos = n))
              : (this.pos = r),
            t
          );
        }),
        (vn.prototype.isOperator = function () {
          var e = this.pos,
            t = this.expression.charAt(this.pos);
          if (
            "+" === t ||
            "-" === t ||
            "*" === t ||
            "/" === t ||
            "%" === t ||
            "^" === t ||
            "?" === t ||
            ":" === t ||
            "." === t
          )
            this.current = this.newToken(ln, t);
          else if ("∙" === t || "•" === t)
            this.current = this.newToken(ln, "*");
          else if (">" === t)
            "=" === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(ln, ">=")), this.pos++)
              : (this.current = this.newToken(ln, ">"));
          else if ("<" === t)
            "=" === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(ln, "<=")), this.pos++)
              : (this.current = this.newToken(ln, "<"));
          else if ("|" === t) {
            if ("|" !== this.expression.charAt(this.pos + 1)) return !1;
            (this.current = this.newToken(ln, "||")), this.pos++;
          } else if ("=" === t)
            "=" === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(ln, "==")), this.pos++)
              : (this.current = this.newToken(ln, t));
          else {
            if ("!" !== t) return !1;
            "=" === this.expression.charAt(this.pos + 1)
              ? ((this.current = this.newToken(ln, "!=")), this.pos++)
              : (this.current = this.newToken(ln, t));
          }
          return (
            this.pos++,
            !!this.isOperatorEnabled(this.current.value) || ((this.pos = e), !1)
          );
        }),
        (vn.prototype.isOperatorEnabled = function (e) {
          return this.parser.isOperatorEnabled(e);
        }),
        (vn.prototype.getCoordinates = function () {
          var e,
            t = 0,
            n = -1;
          do {
            t++, (e = this.pos - n), (n = this.expression.indexOf("\n", n + 1));
          } while (n >= 0 && n < this.pos);
          return { line: t, column: e };
        }),
        (vn.prototype.parseError = function (e) {
          var t = this.getCoordinates();
          throw new Error(
            "parse error [" + t.line + ":" + t.column + "]: " + e
          );
        }),
        (bn.prototype.next = function () {
          return (
            (this.current = this.nextToken),
            (this.nextToken = this.tokens.next())
          );
        }),
        (bn.prototype.tokenMatches = function (e, t) {
          return (
            void 0 === t ||
            (Array.isArray(t)
              ? rn(t, e.value)
              : "function" == typeof t
              ? t(e)
              : e.value === t)
          );
        }),
        (bn.prototype.save = function () {
          (this.savedCurrent = this.current),
            (this.savedNextToken = this.nextToken),
            this.tokens.save();
        }),
        (bn.prototype.restore = function () {
          this.tokens.restore(),
            (this.current = this.savedCurrent),
            (this.nextToken = this.savedNextToken);
        }),
        (bn.prototype.accept = function (e, t) {
          return !(
            this.nextToken.type !== e ||
            !this.tokenMatches(this.nextToken, t) ||
            (this.next(), 0)
          );
        }),
        (bn.prototype.expect = function (e, t) {
          if (!this.accept(e, t)) {
            var n = this.tokens.getCoordinates();
            throw new Error(
              "parse error [" +
                n.line +
                ":" +
                n.column +
                "]: Expected " +
                (t || e)
            );
          }
        }),
        (bn.prototype.parseAtom = function (e) {
          var t = this.tokens.unaryOps;
          if (
            this.accept(fn) ||
            this.accept(ln, function (e) {
              return e.value in t;
            })
          )
            e.push(new Gt(Vt, this.current.value));
          else if (this.accept(cn)) e.push(new Gt(Dt, this.current.value));
          else if (this.accept(un)) e.push(new Gt(Dt, this.current.value));
          else if (this.accept(hn, "("))
            this.parseExpression(e), this.expect(hn, ")");
          else {
            if (!this.accept(pn, "["))
              throw new Error("unexpected " + this.nextToken);
            if (this.accept(pn, "]")) e.push(new Gt(qt, 0));
            else {
              var n = this.parseArrayList(e);
              e.push(new Gt(qt, n));
            }
          }
        }),
        (bn.prototype.parseExpression = function (e) {
          var t = [];
          this.parseUntilEndStatement(e, t) ||
            (this.parseVariableAssignmentExpression(t),
            this.parseUntilEndStatement(e, t) || this.pushExpression(e, t));
        }),
        (bn.prototype.pushExpression = function (e, t) {
          for (var n = 0, i = t.length; n < i; n++) e.push(t[n]);
        }),
        (bn.prototype.parseUntilEndStatement = function (e, t) {
          return (
            !!this.accept(mn) &&
            (!this.nextToken ||
              this.nextToken.type === an ||
              (this.nextToken.type === hn && ")" === this.nextToken.value) ||
              t.push(new Gt(Wt)),
            this.nextToken.type !== an && this.parseExpression(t),
            e.push(new Gt(zt, t)),
            !0)
          );
        }),
        (bn.prototype.parseArrayList = function (e) {
          for (var t = 0; !this.accept(pn, "]"); )
            for (this.parseExpression(e), ++t; this.accept(dn); )
              this.parseExpression(e), ++t;
          return t;
        }),
        (bn.prototype.parseVariableAssignmentExpression = function (e) {
          for (this.parseConditionalExpression(e); this.accept(ln, "="); ) {
            var t = e.pop(),
              n = [],
              i = e.length - 1;
            if (t.type !== Ft) {
              if (t.type !== Vt && t.type !== Ut)
                throw new Error("expected variable for assignment");
              this.parseVariableAssignmentExpression(n),
                e.push(new Gt(Nt, t.value)),
                e.push(new Gt(zt, n)),
                e.push(Kt("="));
            } else {
              if (!this.tokens.isOperatorEnabled("()="))
                throw new Error("function definition is not permitted");
              for (var r = 0, o = t.value + 1; r < o; r++) {
                var s = i - r;
                e[s].type === Vt && (e[s] = new Gt(Nt, e[s].value));
              }
              this.parseVariableAssignmentExpression(n),
                e.push(new Gt(zt, n)),
                e.push(new Gt($t, t.value));
            }
          }
        }),
        (bn.prototype.parseConditionalExpression = function (e) {
          for (this.parseOrExpression(e); this.accept(ln, "?"); ) {
            var t = [],
              n = [];
            this.parseConditionalExpression(t),
              this.expect(ln, ":"),
              this.parseConditionalExpression(n),
              e.push(new Gt(zt, t)),
              e.push(new Gt(zt, n)),
              e.push(Yt("?"));
          }
        }),
        (bn.prototype.parseOrExpression = function (e) {
          for (this.parseAndExpression(e); this.accept(ln, "or"); ) {
            var t = [];
            this.parseAndExpression(t), e.push(new Gt(zt, t)), e.push(Kt("or"));
          }
        }),
        (bn.prototype.parseAndExpression = function (e) {
          for (this.parseComparison(e); this.accept(ln, "and"); ) {
            var t = [];
            this.parseComparison(t), e.push(new Gt(zt, t)), e.push(Kt("and"));
          }
        });
      var wn = ["==", "!=", "<", "<=", ">=", ">", "in"];
      bn.prototype.parseComparison = function (e) {
        for (this.parseAddSub(e); this.accept(ln, wn); ) {
          var t = this.current;
          this.parseAddSub(e), e.push(Kt(t.value));
        }
      };
      var xn = ["+", "-", "||"];
      bn.prototype.parseAddSub = function (e) {
        for (this.parseTerm(e); this.accept(ln, xn); ) {
          var t = this.current;
          this.parseTerm(e), e.push(Kt(t.value));
        }
      };
      var kn = ["*", "/", "%"];
      function En(e, t) {
        return Number(e) + Number(t);
      }
      function _n(e, t) {
        return e - t;
      }
      function Cn(e, t) {
        return e * t;
      }
      function On(e, t) {
        return e / t;
      }
      function Sn(e, t) {
        return e % t;
      }
      function Pn(e, t) {
        return Array.isArray(e) && Array.isArray(t) ? e.concat(t) : "" + e + t;
      }
      function Tn(e, t) {
        return e === t;
      }
      function In(e, t) {
        return e !== t;
      }
      function Mn(e, t) {
        return e > t;
      }
      function An(e, t) {
        return e < t;
      }
      function Ln(e, t) {
        return e >= t;
      }
      function Dn(e, t) {
        return e <= t;
      }
      function Bn(e, t) {
        return Boolean(e && t);
      }
      function jn(e, t) {
        return Boolean(e || t);
      }
      function Rn(e, t) {
        return rn(t, e);
      }
      function Vn(e) {
        return (Math.exp(e) - Math.exp(-e)) / 2;
      }
      function Nn(e) {
        return (Math.exp(e) + Math.exp(-e)) / 2;
      }
      function Fn(e) {
        return e === 1 / 0
          ? 1
          : e === -1 / 0
          ? -1
          : (Math.exp(e) - Math.exp(-e)) / (Math.exp(e) + Math.exp(-e));
      }
      function $n(e) {
        return e === -1 / 0 ? e : Math.log(e + Math.sqrt(e * e + 1));
      }
      function zn(e) {
        return Math.log(e + Math.sqrt(e * e - 1));
      }
      function Hn(e) {
        return Math.log((1 + e) / (1 - e)) / 2;
      }
      function Un(e) {
        return Math.log(e) * Math.LOG10E;
      }
      function Wn(e) {
        return -e;
      }
      function qn(e) {
        return !e;
      }
      function Gn(e) {
        return e < 0 ? Math.ceil(e) : Math.floor(e);
      }
      function Jn(e) {
        return Math.random() * (e || 1);
      }
      function Kn(e) {
        return Xn(e + 1);
      }
      (bn.prototype.parseTerm = function (e) {
        for (this.parseFactor(e); this.accept(ln, kn); ) {
          var t = this.current;
          this.parseFactor(e), e.push(Kt(t.value));
        }
      }),
        (bn.prototype.parseFactor = function (e) {
          var t = this.tokens.unaryOps;
          if (
            (this.save(),
            this.accept(ln, function (e) {
              return e.value in t;
            }))
          ) {
            if ("-" !== this.current.value && "+" !== this.current.value) {
              if (this.nextToken.type === hn && "(" === this.nextToken.value)
                return this.restore(), void this.parseExponential(e);
              if (
                this.nextToken.type === mn ||
                this.nextToken.type === dn ||
                this.nextToken.type === an ||
                (this.nextToken.type === hn && ")" === this.nextToken.value)
              )
                return this.restore(), void this.parseAtom(e);
            }
            var n = this.current;
            this.parseFactor(e), e.push(Jt(n.value));
          } else this.parseExponential(e);
        }),
        (bn.prototype.parseExponential = function (e) {
          for (this.parsePostfixExpression(e); this.accept(ln, "^"); )
            this.parseFactor(e), e.push(Kt("^"));
        }),
        (bn.prototype.parsePostfixExpression = function (e) {
          for (this.parseFunctionCall(e); this.accept(ln, "!"); )
            e.push(Jt("!"));
        }),
        (bn.prototype.parseFunctionCall = function (e) {
          var t = this.tokens.unaryOps;
          if (
            this.accept(ln, function (e) {
              return e.value in t;
            })
          ) {
            var n = this.current;
            this.parseAtom(e), e.push(Jt(n.value));
          } else
            for (this.parseMemberExpression(e); this.accept(hn, "("); )
              if (this.accept(hn, ")")) e.push(new Gt(Ft, 0));
              else {
                var i = this.parseArgumentList(e);
                e.push(new Gt(Ft, i));
              }
        }),
        (bn.prototype.parseArgumentList = function (e) {
          for (var t = 0; !this.accept(hn, ")"); )
            for (this.parseExpression(e), ++t; this.accept(dn); )
              this.parseExpression(e), ++t;
          return t;
        }),
        (bn.prototype.parseMemberExpression = function (e) {
          for (
            this.parseAtom(e);
            this.accept(ln, ".") || this.accept(pn, "[");

          ) {
            var t = this.current;
            if ("." === t.value) {
              if (!this.allowMemberAccess)
                throw new Error(
                  'unexpected ".", member access is not permitted'
                );
              this.expect(fn), e.push(new Gt(Ut, this.current.value));
            } else {
              if ("[" !== t.value)
                throw new Error("unexpected symbol: " + t.value);
              if (!this.tokens.isOperatorEnabled("["))
                throw new Error('unexpected "[]", arrays are disabled');
              this.parseExpression(e), this.expect(pn, "]"), e.push(Kt("["));
            }
          }
        });
      var Yn = [
        0.9999999999999971,
        57.15623566586292,
        -59.59796035547549,
        14.136097974741746,
        -0.4919138160976202,
        3399464998481189e-20,
        4652362892704858e-20,
        -9837447530487956e-20,
        0.0001580887032249125,
        -0.00021026444172410488,
        0.00021743961811521265,
        -0.0001643181065367639,
        8441822398385275e-20,
        -26190838401581408e-21,
        36899182659531625e-22,
      ];
      function Xn(e) {
        var t, n;
        if (
          (function (e) {
            return isFinite(e) && e === Math.round(e);
          })(e)
        ) {
          if (e <= 0) return isFinite(e) ? 1 / 0 : NaN;
          if (e > 171) return 1 / 0;
          for (var i = e - 2, r = e - 1; i > 1; ) (r *= i), i--;
          return 0 === r && (r = 1), r;
        }
        if (e < 0.5) return Math.PI / (Math.sin(Math.PI * e) * Xn(1 - e));
        if (e >= 171.35) return 1 / 0;
        if (e > 85) {
          var o = e * e,
            s = o * e,
            a = s * e,
            l = a * e;
          return (
            Math.sqrt((2 * Math.PI) / e) *
            Math.pow(e / Math.E, e) *
            (1 +
              1 / (12 * e) +
              1 / (288 * o) -
              139 / (51840 * s) -
              571 / (2488320 * a) +
              163879 / (209018880 * l) +
              5246819 / (75246796800 * l * e))
          );
        }
        --e, (n = Yn[0]);
        for (var c = 1; c < Yn.length; ++c) n += Yn[c] / (e + c);
        return (
          (t = e + 4.7421875 + 0.5),
          Math.sqrt(2 * Math.PI) * Math.pow(t, e + 0.5) * Math.exp(-t) * n
        );
      }
      function Qn(e) {
        return Array.isArray(e) ? e.length : String(e).length;
      }
      function Zn() {
        for (var e = 0, t = 0, n = 0; n < arguments.length; n++) {
          var i,
            r = Math.abs(arguments[n]);
          t < r
            ? ((e = e * (i = t / r) * i + 1), (t = r))
            : (e += r > 0 ? (i = r / t) * i : r);
        }
        return t === 1 / 0 ? 1 / 0 : t * Math.sqrt(e);
      }
      function ei(e, t, n) {
        return e ? t : n;
      }
      function ti(e, t) {
        return void 0 === t || 0 == +t
          ? Math.round(e)
          : ((e = +e),
            (t = -+t),
            isNaN(e) || "number" != typeof t || t % 1 != 0
              ? NaN
              : ((e = e.toString().split("e")),
                +(
                  (e = (e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] - t : -t))))
                    .toString()
                    .split("e"))[0] +
                  "e" +
                  (e[1] ? +e[1] + t : t)
                )));
      }
      function ni(e, t, n) {
        return n && (n[e] = t), t;
      }
      function ii(e, t) {
        return e[0 | t];
      }
      function ri(e) {
        return 1 === arguments.length && Array.isArray(e)
          ? Math.max.apply(Math, e)
          : Math.max.apply(Math, arguments);
      }
      function oi(e) {
        return 1 === arguments.length && Array.isArray(e)
          ? Math.min.apply(Math, e)
          : Math.min.apply(Math, arguments);
      }
      function si(e, t) {
        if ("function" != typeof e)
          throw new Error("First argument to map is not a function");
        if (!Array.isArray(t))
          throw new Error("Second argument to map is not an array");
        return t.map(function (t, n) {
          return e(t, n);
        });
      }
      function ai(e, t, n) {
        if ("function" != typeof e)
          throw new Error("First argument to fold is not a function");
        if (!Array.isArray(n))
          throw new Error("Second argument to fold is not an array");
        return n.reduce(function (t, n, i) {
          return e(t, n, i);
        }, t);
      }
      function li(e, t) {
        if ("function" != typeof e)
          throw new Error("First argument to filter is not a function");
        if (!Array.isArray(t))
          throw new Error("Second argument to filter is not an array");
        return t.filter(function (t, n) {
          return e(t, n);
        });
      }
      function ci(e, t) {
        if (!Array.isArray(t) && "string" != typeof t)
          throw new Error(
            "Second argument to indexOf is not a string or array"
          );
        return t.indexOf(e);
      }
      function ui(e, t) {
        if (!Array.isArray(t))
          throw new Error("Second argument to join is not an array");
        return t.join(e);
      }
      function hi(e) {
        return (e > 0) - (e < 0) || +e;
      }
      function pi(e) {
        return e < 0 ? -Math.pow(-e, 1 / 3) : Math.pow(e, 1 / 3);
      }
      function di(e) {
        return Math.exp(e) - 1;
      }
      function fi(e) {
        return Math.log(1 + e);
      }
      function mi(e) {
        return Math.log(e) / Math.LN2;
      }
      function gi(e) {
        (this.options = e || {}),
          (this.unaryOps = {
            sin: Math.sin,
            cos: Math.cos,
            tan: Math.tan,
            asin: Math.asin,
            acos: Math.acos,
            atan: Math.atan,
            sinh: Math.sinh || Vn,
            cosh: Math.cosh || Nn,
            tanh: Math.tanh || Fn,
            asinh: Math.asinh || $n,
            acosh: Math.acosh || zn,
            atanh: Math.atanh || Hn,
            sqrt: Math.sqrt,
            cbrt: Math.cbrt || pi,
            log: Math.log,
            log2: Math.log2 || mi,
            ln: Math.log,
            lg: Math.log10 || Un,
            log10: Math.log10 || Un,
            expm1: Math.expm1 || di,
            log1p: Math.log1p || fi,
            abs: Math.abs,
            ceil: Math.ceil,
            floor: Math.floor,
            round: Math.round,
            trunc: Math.trunc || Gn,
            "-": Wn,
            "+": Number,
            exp: Math.exp,
            not: qn,
            length: Qn,
            "!": Kn,
            sign: Math.sign || hi,
          }),
          (this.binaryOps = {
            "+": En,
            "-": _n,
            "*": Cn,
            "/": On,
            "%": Sn,
            "^": Math.pow,
            "||": Pn,
            "==": Tn,
            "!=": In,
            ">": Mn,
            "<": An,
            ">=": Ln,
            "<=": Dn,
            and: Bn,
            or: jn,
            in: Rn,
            "=": ni,
            "[": ii,
          }),
          (this.ternaryOps = { "?": ei }),
          (this.functions = {
            random: Jn,
            fac: Kn,
            min: oi,
            max: ri,
            hypot: Math.hypot || Zn,
            pyt: Math.hypot || Zn,
            pow: Math.pow,
            atan2: Math.atan2,
            if: ei,
            gamma: Xn,
            roundTo: ti,
            map: si,
            fold: ai,
            filter: li,
            indexOf: ci,
            join: ui,
          }),
          (this.consts = { E: Math.E, PI: Math.PI, true: !0, false: !1 });
      }
      (gi.prototype.parse = function (e) {
        var t = [],
          n = new bn(this, new vn(this, e), {
            allowMemberAccess: this.options.allowMemberAccess,
          });
        return n.parseExpression(t), n.expect(an, "EOF"), new sn(t, this);
      }),
        (gi.prototype.evaluate = function (e, t) {
          return this.parse(e).evaluate(t);
        });
      var vi = new gi();
      (gi.parse = function (e) {
        return vi.parse(e);
      }),
        (gi.evaluate = function (e, t) {
          return vi.parse(e).evaluate(t);
        });
      var yi = {
        "+": "add",
        "-": "subtract",
        "*": "multiply",
        "/": "divide",
        "%": "remainder",
        "^": "power",
        "!": "factorial",
        "<": "comparison",
        ">": "comparison",
        "<=": "comparison",
        ">=": "comparison",
        "==": "comparison",
        "!=": "comparison",
        "||": "concatenate",
        and: "logical",
        or: "logical",
        not: "logical",
        "?": "conditional",
        ":": "conditional",
        "=": "assignment",
        "[": "array",
        "()=": "fndef",
      };
      gi.prototype.isOperatorEnabled = function (e) {
        var t = (function (e) {
            return yi.hasOwnProperty(e) ? yi[e] : e;
          })(e),
          n = this.options.operators || {};
        return !(t in n) || !!n[t];
      };
      var bi = function (e) {
          e = e.replace(/ /g, "");
          var t = /\(([^\(\)]|\(([^\(\)]|\(([^\(\)]|\(([^\(\)])*\))*\))*\))*\)/.exec(
            e
          );
          if (void 0 === t) return { result: !1 };
          var n = e.split(")");
          return { result: !0, unit: n[n.length - 1], expression: t[0] };
        },
        wi = (function () {
          function e(t) {
            a(this, e), (this.expressionProps = t);
          }
          return (
            c(e, [
              {
                key: "resize",
                value: function (e) {
                  var t = bi(this.expressionProps.expression),
                    n = "(".concat(t.expression, "*").concat(e, ")");
                  return ""
                    .concat(F.mathExpPreface, "(")
                    .concat(n, ")")
                    .concat(this.expressionProps.unit);
                },
              },
              {
                key: "calculateValues",
                value: function (e, t) {
                  for (
                    var n,
                      i = e.length,
                      r = new gi().parse(this.expressionProps.expression),
                      o = [],
                      s =
                        (u((n = {}), F.totalElements, i),
                        u(n, F.initParams, t),
                        n),
                      a = 0;
                    a < i;
                    a++
                  ) {
                    s[F.elementIndex] = a;
                    try {
                      var l = r.evaluate(s);
                      if (null == l) {
                        re.error(
                          "".concat(
                            this.expressionProps.expression,
                            " is not a valid mathematical expression. Returning 0"
                          )
                        ),
                          o.push(0);
                        continue;
                      }
                      var c = "".concat(l).concat(this.expressionProps.unit);
                      "amount" === this.expressionProps.type &&
                        (c = parseFloat(c)),
                        o.push(c);
                    } catch (e) {
                      re.error(
                        "".concat(
                          this.expressionProps.expression,
                          " is not a valid mathematical expression. Returning 0"
                        )
                      ),
                        o.push(0);
                    }
                  }
                  return o;
                },
              },
            ]),
            e
          );
        })();
      function xi(e) {
        return (
          (e = e.replace(/ /g, "")),
          /^@stagger\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+)?(,[_A-z0-9.%-]+))\)$/.test(
            e
          )
        );
      }
      var ki = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (((e = e.replace(/ /g, "")), t && !xi(e))) return !1;
          var n = /.*\((.*)\).*/,
            i = n.exec(e)[1],
            r = i.split(",");
          return {
            start: r[0],
            end: r[1],
            startFraction: 1 * r[2] || 0,
            easing: r[3] || "linear",
            mode: r[4] || "linear",
            reverse: "true" === r[5],
          };
        },
        Ei = (function () {
          function e(t) {
            a(this, e), (this.staggerProps = t);
          }
          return (
            c(e, [
              {
                key: "resize",
                value: function (e) {
                  return (
                    (this.staggerProps.from *= e),
                    (this.staggerProps.to *= e),
                    !0 === this.staggerProps.integer &&
                      ((this.staggerProps.from = Math.round(
                        this.staggerProps.from
                      )),
                      (this.staggerProps.to = Math.round(
                        this.staggerProps.to
                      ))),
                    "@stagger("
                      .concat(this.staggerProps.from)
                      .concat(this.staggerProps.unit, ", ")
                      .concat(this.staggerProps.to)
                      .concat(this.staggerProps.unit, ", ")
                      .concat(this.staggerProps.fraction || 0, ", ")
                      .concat(this.staggerProps.easing || "linear", ", ")
                      .concat(this.staggerProps.mode || "linear", ", ")
                      .concat(this.staggerProps.reverse || !1, ")")
                  );
                },
              },
              {
                key: "calculateValues",
                value: function (e) {
                  for (
                    var t,
                      n,
                      i,
                      r,
                      o = (function (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : 0,
                          n =
                            arguments.length > 2 && void 0 !== arguments[2]
                              ? arguments[2]
                              : "linear",
                          i =
                            arguments.length > 3 &&
                            void 0 !== arguments[3] &&
                            arguments[3],
                          r = [];
                        if ("linear" === n)
                          for (var o = 0; o < e; o++) {
                            var s = o / (e - 1),
                              a = s < t ? s + 1 - t + 1 / (e - 1) : s - t;
                            i && (a = 1 - a), r.push(a);
                          }
                        else if ("omni" === n)
                          for (var l = 1 - t, c = 0; c < e; c++) {
                            var u = Math.abs(c / (e - 1) - t) / l;
                            i && (u = 1 - u), r.push(u);
                          }
                        return r;
                      })(
                        e.length,
                        this.staggerProps.fraction,
                        this.staggerProps.mode,
                        this.staggerProps.reverse
                      ),
                      s = [],
                      a = 0;
                    a < o.length;
                    a++
                  ) {
                    var l =
                      ((t = this.staggerProps.from),
                      (n = this.staggerProps.to),
                      (i = o[a]),
                      (r = this.staggerProps.easing) || (r = "linear"),
                      Ae[r](i) * (n - t) + t);
                    !0 === this.staggerProps.integer && (l = Math.round(l)),
                      "measurement" === this.staggerProps.type &&
                        (l += this.staggerProps.unit),
                      s.push(l);
                  }
                  return s;
                },
              },
            ]),
            e
          );
        })(),
        _i = xi,
        Ci = new RegExp(
          /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$|(rgb|hsl)a?\((\s*-?\d+%?\s*,){2}(\s*-?\d+%?\s*,?\s*\)?)(,\s*(0?\.\d+)?|1)?\)/,
          "gi"
        ),
        Oi = new RegExp(/^[-+]?\d+$/),
        Si = new (class {
          constructor(e) {
            if (
              ((this.opts = {}),
              (this.defaults = {}),
              (this.messages = Object.assign({}, Ue)),
              (this.rules = {
                any: We,
                array: qe,
                boolean: Ge,
                class: Je,
                custom: Ke,
                currency: Ye,
                date: Xe,
                email: et,
                enum: tt,
                equal: nt,
                forbidden: it,
                function: rt,
                multi: ot,
                number: st,
                object: ut,
                objectID: ht,
                string: yt,
                tuple: bt,
                url: xt,
                uuid: Et,
                mac: Ct,
                luhn: Ot,
              }),
              (this.aliases = {}),
              (this.cache = new Map()),
              e)
            ) {
              if (
                (He(this.opts, e),
                e.defaults && He(this.defaults, e.defaults),
                e.messages)
              )
                for (const t in e.messages) this.addMessage(t, e.messages[t]);
              if (e.aliases)
                for (const t in e.aliases) this.alias(t, e.aliases[t]);
              if (e.customRules)
                for (const t in e.customRules) this.add(t, e.customRules[t]);
              if (e.plugins) {
                const t = e.plugins;
                if (!Array.isArray(t))
                  throw new Error("Plugins type must be array");
                t.forEach(this.plugin.bind(this));
              }
            }
          }
          validate(e, t) {
            return this.compile(t)(e);
          }
          wrapRequiredCheckSourceCode(e, t, n, i) {
            const r = [];
            let o,
              s = !0 === e.schema.optional || "forbidden" === e.schema.type,
              a =
                !0 === e.schema.optional ||
                !0 === e.schema.nullable ||
                "forbidden" === e.schema.type;
            if (null != e.schema.default) {
              let t;
              (s = !1),
                !0 !== e.schema.nullable && (a = !1),
                "function" == typeof e.schema.default
                  ? (n.customs[e.index] || (n.customs[e.index] = {}),
                    (n.customs[e.index].defaultFn = e.schema.default),
                    (t = `context.customs[${e.index}].defaultFn()`))
                  : (t = JSON.stringify(e.schema.default)),
                (o = `\n\t\t\t\tvalue = ${t};\n\t\t\t\t${i} = value;\n\t\t\t`);
            } else
              o = this.makeError({
                type: "required",
                actual: "value",
                messages: e.messages,
              });
            return (
              r.push(
                `\n\t\t\tif (value === undefined) { ${
                  s ? "\n// allow undefined\n" : o
                } }\n\t\t\telse if (value === null) { ${
                  a ? "\n// allow null\n" : o
                } }\n\t\t\t${t ? `else { ${t} }` : ""}\n\t\t`
              ),
              r.join("\n")
            );
          }
          compile(e) {
            if (null === e || "object" != typeof e)
              throw new Error("Invalid schema.");
            const t = this,
              n = { index: 0, rules: [], fn: [], customs: {} };
            if ((this.cache.clear(), !0 !== e.$$root))
              if (Array.isArray(e)) e = this.getRuleFromSchema(e).schema;
              else {
                const t = Object.assign({}, e);
                (e = { type: "object", strict: t.$$strict, properties: t }),
                  delete t.$$strict;
              }
            const i = ["var errors = [];", "var field;", "var parent = null;"],
              r = this.getRuleFromSchema(e);
            i.push(
              this.compileRule(
                r,
                n,
                null,
                "context.fn[%%INDEX%%](value, field, null, errors, context);",
                "value"
              )
            ),
              i.push("if (errors.length) {"),
              i.push(
                '\n\t\t\treturn errors.map(err => {\n\t\t\t\tif (err.message)\n\t\t\t\t\terr.message = err.message\n\t\t\t\t\t\t.replace(/\\{field\\}/g, err.field || "")\n\t\t\t\t\t\t.replace(/\\{expected\\}/g, err.expected != null ? err.expected : "")\n\t\t\t\t\t\t.replace(/\\{actual\\}/g, err.actual != null ? err.actual : "");\n\n\t\t\t\treturn err;\n\t\t\t});\n\t\t'
              ),
              i.push("}"),
              i.push("return true;");
            const o = i.join("\n"),
              s = new Function("value", "context", o);
            if (this.opts.debug) {
              let e = function (e) {
                return e;
              };
              "undefined" == typeof window && (e = Lt),
                n.fn.forEach((t, n) =>
                  console.log(e(`// Context.fn[${n}]\n` + t.toString()))
                ),
                console.log(e("// Main check function\n" + s.toString()));
            }
            return (
              this.cache.clear(),
              function (e) {
                return (n.data = e), s.call(t, e, n);
              }
            );
          }
          compileRule(e, t, n, i, r) {
            const o = [],
              s = this.cache.get(e.schema);
            if (s)
              ((e = s).cycle = !0),
                (e.cycleStack = []),
                o.push(
                  this.wrapRequiredCheckSourceCode(
                    e,
                    `\n\t\t\t\tvar rule = context.rules[${
                      e.index
                    }];\n\t\t\t\tif (rule.cycleStack.indexOf(value) === -1) {\n\t\t\t\t\trule.cycleStack.push(value);\n\t\t\t\t\t${i.replace(
                      /%%INDEX%%/g,
                      e.index
                    )}\n\t\t\t\t\trule.cycleStack.pop(value);\n\t\t\t\t}\n\t\t\t`,
                    t,
                    r
                  )
                );
            else {
              this.cache.set(e.schema, e),
                (e.index = t.index),
                (t.rules[t.index] = e);
              const s = null != n ? n : "$$root";
              t.index++;
              const a = e.ruleFunction.call(this, e, n, t);
              a.source = a.source.replace(/%%INDEX%%/g, e.index);
              const l = new Function(
                "value",
                "field",
                "parent",
                "errors",
                "context",
                a.source
              );
              (t.fn[e.index] = l),
                o.push(
                  this.wrapRequiredCheckSourceCode(
                    e,
                    i.replace(/%%INDEX%%/g, e.index),
                    t,
                    r
                  )
                ),
                o.push(
                  this.makeCustomValidator({
                    vName: r,
                    path: s,
                    schema: e.schema,
                    context: t,
                    messages: e.messages,
                    ruleIndex: e.index,
                  })
                );
            }
            return o.join("\n");
          }
          getRuleFromSchema(e) {
            if ("string" == typeof e) e = this.parseShortHand(e);
            else if (Array.isArray(e)) {
              if (0 == e.length) throw new Error("Invalid schema.");
              (e = { type: "multi", rules: e }).rules
                .map((e) => this.getRuleFromSchema(e))
                .every((e) => 1 == e.schema.optional) && (e.optional = !0);
            }
            if (e.$$type) {
              const t = e.$$type,
                n = this.getRuleFromSchema(t).schema;
              delete e.$$type;
              const i = Object.assign({}, e);
              for (const t in e) delete e[t];
              He(e, n, { skipIfExist: !0 }), (e.props = i);
            }
            const t = this.aliases[e.type];
            t && (delete e.type, (e = He(e, t, { skipIfExist: !0 })));
            const n = this.rules[e.type];
            if (!n)
              throw new Error(
                "Invalid '" + e.type + "' type in validator schema."
              );
            return {
              messages: Object.assign({}, this.messages, e.messages),
              schema: He(e, this.defaults[e.type], { skipIfExist: !0 }),
              ruleFunction: n,
            };
          }
          parseShortHand(e) {
            const t = e.split("|").map((e) => e.trim());
            let n,
              i = t[0];
            return (
              (n = i.endsWith("[]")
                ? this.getRuleFromSchema({
                    type: "array",
                    items: i.slice(0, -2),
                  }).schema
                : { type: t[0] }),
              t.slice(1).map((e) => {
                const t = e.indexOf(":");
                if (-1 !== t) {
                  const i = e.substr(0, t).trim();
                  let r = e.substr(t + 1).trim();
                  "true" === r || "false" === r
                    ? (r = "true" === r)
                    : Number.isNaN(Number(r)) || (r = Number(r)),
                    (n[i] = r);
                } else e.startsWith("no-") ? (n[e.slice(3)] = !1) : (n[e] = !0);
              }),
              n
            );
          }
          makeError({
            type: e,
            field: t,
            expected: n,
            actual: i,
            messages: r,
          }) {
            const o = { type: `"${e}"`, message: `"${r[e]}"` };
            return (
              (o.field = t ? `"${t}"` : "field"),
              null != n && (o.expected = n),
              null != i && (o.actual = i),
              `errors.push({ ${Object.keys(o)
                .map((e) => `${e}: ${o[e]}`)
                .join(", ")} });`
            );
          }
          makeCustomValidator({
            vName: e = "value",
            fnName: t = "custom",
            ruleIndex: n,
            path: i,
            schema: r,
            context: o,
            messages: s,
          }) {
            const a = "rule" + n,
              l = "fnCustomErrors" + n;
            if ("function" == typeof r[t]) {
              if (
                (o.customs[n]
                  ? ((o.customs[n].messages = s), (o.customs[n].schema = r))
                  : (o.customs[n] = { messages: s, schema: r }),
                this.opts.useNewCustomCheckerFunction)
              )
                return `\n               const ${a} = context.customs[${n}];\n\t\t\t\t\tconst ${l} = [];\n\t\t\t\t\t${e} = ${a}.schema.${t}.call(this, ${e}, ${l} , ${a}.schema, "${i}", parent, context);\n\t\t\t\t\tif (Array.isArray(${l} )) {\n                  ${l} .forEach(err => errors.push(Object.assign({ message: ${a}.messages[err.type], field }, err)));\n\t\t\t\t\t}\n\t\t\t\t`;
              const c = "res_" + a;
              return `\n\t\t\t\tconst ${a} = context.customs[${n}];\n\t\t\t\tconst ${c} = ${a}.schema.${t}.call(this, ${e}, ${a}.schema, "${i}", parent, context);\n\t\t\t\tif (Array.isArray(${c})) {\n\t\t\t\t\t${c}.forEach(err => errors.push(Object.assign({ message: ${a}.messages[err.type], field }, err)));\n\t\t\t\t}\n\t\t`;
            }
            return "";
          }
          add(e, t) {
            this.rules[e] = t;
          }
          addMessage(e, t) {
            this.messages[e] = t;
          }
          alias(e, t) {
            if (this.rules[e])
              throw new Error("Alias name must not be a rule name");
            this.aliases[e] = t;
          }
          plugin(e) {
            if ("function" != typeof e)
              throw new Error("Plugin fn type must be function");
            return e(this);
          }
        })({
          messages: {
            color:
              "The '{field}' field must be an a valid color! Actual: {actual}",
            measurement:
              "The '{field}' must be a measurement with specs that are not met. You've either provided wrong value/units or an invalid @ expression. Actual: {actual}",
          },
        });
      Si.add("amount", function (e, t, n) {
        var i = e.schema;
        return (
          e.messages,
          {
            source: "\n      let startUnits, endUnits, startNumberPart, endNumberPart;\n      const staggerValidation = "
              .concat(_i, ";\n      const staggerAnalyser = ")
              .concat(ki, ';\n      const easingKeys = "')
              .concat(
                Object.keys(Ae).join(","),
                "\".split(','); // todo check for simpler expression\n      const validateExpression = "
              )
              .concat(bi, ";\n      const attributeRegexp = /^")
              .concat(
                F.attibuteValue,
                "\\([_A-z0-9-]*\\)$/;\n      const patternRegexp = /^"
              )
              .concat(
                F.patternValue,
                "\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$/;\n      const extractParenthesisAttrsAsArray = "
              )
              .concat(
                X,
                ";\n\n      function isNumeric(n) {\n        return !isNaN(parseFloat(n)) && isFinite(n);\n      }\n\n      if(typeof value === 'string' || value instanceof String){\n        if(value.trim().startsWith('"
              )
              .concat(
                F.staggerPreface,
                "')){\n          const staggerValid = staggerValidation(value);\n          if(staggerValid === false){\n            "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The " + F.staggerPreface + " expression is invalid",
                  },
                }),
                ";\n            return;\n          } else {\n            const analysis = staggerAnalyser(value, false);\n            if(!isNumeric(analysis.start)){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.start",
                  messages: {
                    amount:
                      "The provided start " +
                      F.staggerPreface +
                      " value is invalid",
                  },
                }),
                ";\n              return;\n            } else {\n              startNumberPart = analysis.start*1;\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n                if("
              )
              .concat(i.min, " > analysis.start){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.start",
                  messages: {
                    amount:
                      "The provided start " +
                      F.staggerPreface +
                      " value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n                if("
              )
              .concat(i.max, " < analysis.start){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.start",
                  messages: {
                    amount:
                      "The provided start " +
                      F.staggerPreface +
                      " value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n               if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n                if(!analysis.start.match("
              )
              .concat(Oi, ")){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.start",
                  messages: {
                    amount:
                      "The provided start " +
                      F.staggerPreface +
                      " value is not an integer",
                  },
                }),
                ";\n                  return;\n                }\n              }\n            }\n\n            if(!isNumeric(analysis.end)){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.end",
                  messages: {
                    amount:
                      "The provided end " +
                      F.staggerPreface +
                      " value is invalid",
                  },
                }),
                ";\n              return;\n            } else {\n              endNumberPart = analysis.end*1;\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n                if("
              )
              .concat(i.min, " > analysis.end){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.end",
                  messages: {
                    amount:
                      "The provided end " +
                      F.staggerPreface +
                      " value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n                if("
              )
              .concat(i.max, " < analysis.end){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.end",
                  messages: {
                    amount:
                      "The provided end " +
                      F.staggerPreface +
                      " value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n               if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n                if(!analysis.end.match("
              )
              .concat(Oi, ")){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.end",
                  messages: {
                    amount:
                      "The provided end " +
                      F.staggerPreface +
                      " value is not an integer",
                  },
                }),
                ";\n                  return;\n                }\n              }\n            }\n\n            if(analysis.startFraction < 0 || analysis.startFraction > 1){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.startFraction",
                  messages: {
                    amount:
                      "The " +
                      F.staggerPreface +
                      " fraction must be a number >=0 and <=1",
                  },
                }),
                ";\n              return;\n            }\n\n            if(easingKeys.indexOf(analysis.easing) < 0){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.startFraction",
                  messages: {
                    amount:
                      "The provided " +
                      F.staggerPreface +
                      " easing is not recognised by the system",
                  },
                }),
                ";\n              return;\n            }\n\n            if(analysis.mode !== 'linear' && analysis.mode !== 'omni'){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.mode",
                  messages: {
                    amount:
                      F.staggerPreface +
                      " mode can only be either linear or omni",
                  },
                }),
                ";\n              return;\n            }\n\n            if(analysis.reverse !== true && analysis.reverse !== false){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "analysis.reverse",
                  messages: {
                    amount:
                      F.staggerPreface +
                      " reverse needs to be either true or false",
                  },
                }),
                ";\n              return;\n            }\n\n            return value;\n          }\n        } else if(value.trim().startsWith('"
              )
              .concat(
                F.patternValue,
                "')){\n          if(!patternRegexp.test(value.replace(/ /g, ''))){\n            "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount: "The " + F.patternValue + " expression is invalid",
                  },
                }),
                ";\n            return;\n          }\n          const patternValues = extractParenthesisAttrsAsArray(value);\n          for(let i=0; i<patternValues.length; i++){\n            const valToCheck = patternValues[i];\n            if(!isNumeric(valToCheck)){\n              "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "valToCheck",
                  messages: { amount: "The provided value is not a number" },
                }),
                ";\n              return;\n            } else {\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n                if("
              )
              .concat(i.min, " > valToCheck){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "valToCheck",
                  messages: {
                    amount:
                      "The provided value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n              if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n                if("
              )
              .concat(i.max, " < valToCheck){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "valToCheck",
                  messages: {
                    amount:
                      "The provided start value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                  return;\n                }\n              }\n               if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n                if(!valToCheck.match("
              )
              .concat(Oi, ")){\n                  ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "valToCheck",
                  messages: { amount: "The provided value is not an integer" },
                }),
                ";\n                  return;\n                }\n              }\n          }\n        }\n        return value;\n      }  else if(value.trim().startsWith('"
              )
              .concat(
                F.attibuteValue,
                "')){\n          if(!attributeRegexp.test(value)){\n            "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount: "The " + F.attibuteValue + " expression is invalid",
                  },
                }),
                ";\n            return;\n          }\n\n          return value;\n        } else if(value.trim().startsWith('"
              )
              .concat(
                F.mathExpPreface,
                "')){\n          const validity = validateExpression(value);\n          if(validity.result === false){\n            "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The " + F.expressionPreface + " expression is invalid",
                  },
                }),
                ';\n            return;\n          } else {\n            if(validity.unit !== ""){\n              '
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The " +
                      F.expressionPreface +
                      " expression includes units",
                  },
                }),
                ";\n              return;\n            }\n\n            return value;\n          }\n        }\n      }\n\n\n      if(typeof value !== 'number'){\n        "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: { amount: "The provided value is not a number" },
                }),
                ";\n        return;\n      }\n      if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n        if("
              )
              .concat(i.max, " < value){\n          ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The provided amount is bigger than the maximum accepted value",
                  },
                }),
                ";\n          return;\n        }\n      }\n      if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n        if("
              )
              .concat(i.min, " > value){\n          ")
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount:
                      "The provided amount is lower than the minimum accepted value",
                  },
                }),
                ";\n          return;\n        }\n      }\n      if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n        if(value !== parseInt(value, 10)){\n          "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: { amount: "The provided amount is not an integer" },
                }),
                ";\n          return;\n        }\n      }\n      return value;\n\n    "
              ),
          }
        );
      }),
        Si.add("measurement", function (e, t, n) {
          var i = e.schema,
            r = e.messages,
            o = new RegExp(
              "^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)(" +
                i.units.join("|") +
                ")$",
              "gi"
            ),
            s = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi");
          return {
            source: "\n      let startUnits, endUnits, startNumberPart, endNumberPart;\n      const staggerValidation = "
              .concat(_i, ";\n      const staggerAnalyser = ")
              .concat(ki, ';\n      const easingKeys = "')
              .concat(
                Object.keys(Ae).join(","),
                "\".split(',');\n      const validateExpression = "
              )
              .concat(bi, ";\n      const validUnits = ['")
              .concat(
                i.units.join("','"),
                "'];\n      const attributeRegexp = /^"
              )
              .concat(
                F.attibuteValue,
                "\\([_A-z0-9-]*\\)$/;\n      const patternRegexp = /^"
              )
              .concat(
                F.patternValue,
                "\\(([_A-z0-9.%-]+?(,[_A-z0-9.%-]+)*?)\\)$/;\n      const extractParenthesisAttrsAsArray = "
              )
              .concat(
                X,
                ";\n\n      if(typeof value !== 'string' && !(value instanceof String)){\n        "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n        return ;\n      }\n\n      if(value.trim().startsWith('"
              )
              .concat(
                F.attibuteValue,
                "')){\n        if(!attributeRegexp.test(value)){\n          "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount: "The " + F.attibuteValue + " expression is invalid",
                  },
                }),
                ";\n          return;\n        }\n\n        return value;\n      } else if(value.trim().startsWith('"
              )
              .concat(
                F.staggerPreface,
                "')){\n        const staggerValid = staggerValidation(value);\n        if(staggerValid === false){\n          "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: {
                    measurement:
                      "The " + F.staggerPreface + " expression is invalid",
                  },
                }),
                ";\n          return;\n        } else {\n          const analysis = staggerAnalyser(value, false);\n          if(!analysis.start.match("
              )
              .concat(o, ")){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.start",
                  messages: {
                    measurement:
                      "The provided start " +
                      F.staggerPreface +
                      " value is invalid",
                  },
                }),
                ";\n            return;\n          } else {\n            var numberPart = analysis.start.match("
              )
              .concat(
                s,
                ")[0];\n            startNumberPart = numberPart;\n            startUnits = analysis.start.toString().substring(numberPart.length);\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n              if("
              )
              .concat(i.min, " > numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.start",
                  messages: {
                    measurement:
                      "The provided start " +
                      F.staggerPreface +
                      " value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n              if("
              )
              .concat(i.max, " < numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.start",
                  messages: {
                    measurement:
                      "The provided start " +
                      F.staggerPreface +
                      " value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n             if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n              if(!numberPart.match("
              )
              .concat(Oi, ")){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.start",
                  messages: {
                    measurement:
                      "The provided start " +
                      F.staggerPreface +
                      " value is not an integer",
                  },
                }),
                ";\n                return;\n              }\n            }\n          }\n\n          if(!analysis.end.match("
              )
              .concat(o, ")){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.end",
                  messages: {
                    measurement:
                      "The provided end " +
                      F.staggerPreface +
                      " value is invalid",
                  },
                }),
                ";\n            return;\n          } else {\n            var numberPart = analysis.end.match("
              )
              .concat(
                s,
                ")[0];\n            endNumberPart = numberPart;\n            endUnits = analysis.end.toString().substring(numberPart.length);\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n              if("
              )
              .concat(i.min, " > numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.end",
                  messages: {
                    measurement:
                      "The provided end " +
                      F.staggerPreface +
                      " value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n              if("
              )
              .concat(i.max, " < numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.end",
                  messages: {
                    measurement:
                      "The provided end " +
                      F.staggerPreface +
                      " value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n             if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n              if(!numberPart.match("
              )
              .concat(Oi, ")){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.end",
                  messages: {
                    measurement:
                      "The provided end " +
                      F.staggerPreface +
                      " value is not an integer",
                  },
                }),
                ";\n                return;\n              }\n            }\n          }\n\n          if(startUnits !== endUnits){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.startFraction",
                  messages: {
                    measurement:
                      "The " +
                      F.staggerPreface +
                      " start and end must always have the same units",
                  },
                }),
                ";\n            return;\n          }\n\n          if(analysis.startFraction < 0 || analysis.startFraction > 1){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.startFraction",
                  messages: {
                    measurement:
                      "The " +
                      F.staggerPreface +
                      " fraction must be a number >=0 and <=1",
                  },
                }),
                ";\n            return;\n          }\n\n          if(easingKeys.indexOf(analysis.easing) < 0){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.startFraction",
                  messages: {
                    measurement:
                      "The provided " +
                      F.staggerPreface +
                      " easing is not recognised by the system",
                  },
                }),
                ";\n            return;\n          }\n\n          if(analysis.mode !== 'linear' && analysis.mode !== 'omni'){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.mode",
                  messages: {
                    measurement:
                      F.staggerPreface +
                      " mode can only be either linear or omni",
                  },
                }),
                ";\n            return;\n          }\n\n          if(analysis.reverse !== true && analysis.reverse !== false){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "analysis.reverse",
                  messages: {
                    measurement:
                      F.staggerPreface +
                      " reverse needs to be either true or false",
                  },
                }),
                ";\n            return;\n          }\n\n          return value;\n        }\n      } else if(value.trim().startsWith('"
              )
              .concat(
                F.patternValue,
                "')){\n        if(!patternRegexp.test(value.replace(/ /g, ''))){\n          "
              )
              .concat(
                this.makeError({
                  type: "amount",
                  actual: "value",
                  messages: {
                    amount: "The " + F.patternValue + " expression is invalid",
                  },
                }),
                ";\n          return;\n        }\n        const patternValues = extractParenthesisAttrsAsArray(value);\n        for(let i=0; i<patternValues.length; i++){\n          const valToCheck = patternValues[i];\n          if(!valToCheck.match("
              )
              .concat(o, ")){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "valToCheck",
                  messages: { measurement: "The provided value is invalid" },
                }),
                ";\n            return;\n          } else {\n            var numberPart = valToCheck.match("
              )
              .concat(s, ")[0];\n            if(")
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n              if("
              )
              .concat(i.min, " > numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "valToCheck",
                  messages: {
                    measurement:
                      "The provided value is smaller than the minimum accepted value (" +
                      i.min +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n            if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n              if("
              )
              .concat(i.max, " < numberPart){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "valToCheck",
                  messages: {
                    measurement:
                      "The provided value is bigger than the maximum accepted value (" +
                      i.max +
                      ")",
                  },
                }),
                ";\n                return;\n              }\n            }\n             if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n              if(!numberPart.match("
              )
              .concat(Oi, ")){\n                ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "valToCheck",
                  messages: {
                    measurement: "The provided value is not an integer",
                  },
                }),
                ";\n                return;\n              }\n            }\n          }\n        }\n        return value;\n      } else if(value.trim().startsWith('"
              )
              .concat(
                F.mathExpPreface,
                "')){\n          const validity = validateExpression(value);\n          if(validity.result === false){\n            "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: {
                    measurement:
                      "The " + F.expressionPreface + " expression is invalid",
                  },
                }),
                ";\n            return;\n          } else {\n            if(validUnits.indexOf(validity.unit) < 0){\n              "
              )
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: {
                    measurement:
                      "The " +
                      F.expressionPreface +
                      " expression has non-supported units",
                  },
                }),
                ";\n              return;\n            }\n\n            return value;\n          }\n        }\n\n\n      if(!value.match("
              )
              .concat(o, ")){\n        ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n      } else {\n        var numberPart = value.match("
              )
              .concat(s, ")[0];\n        if(")
              .concat(
                Object.prototype.hasOwnProperty.call(i, "min"),
                "){\n          if("
              )
              .concat(i.min, " > numberPart){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n          }\n        }\n        if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "max"),
                "){\n          if("
              )
              .concat(i.max, " < numberPart){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n          }\n        }\n         if("
              )
              .concat(
                Object.prototype.hasOwnProperty.call(i, "integer"),
                "){\n          if(!numberPart.match("
              )
              .concat(Oi, ")){\n            ")
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: r,
                }),
                "\n          }\n        }\n      }\n      return value;\n    "
              ),
          };
        }),
        Si.add("html", function (e, t, n) {
          e.schema;
          var i = e.messages;
          return {
            source: "\n      if(value === null){\n        ".concat(
              this.makeError({ type: "html", actual: "value", messages: i }),
              "\n      } else {\n        return value;\n      }\n    "
            ),
          };
        }),
        Si.add("css", function (e, t, n) {
          e.schema;
          var i = e.messages;
          return {
            source: "\n      if(value === null){\n        ".concat(
              this.makeError({ type: "css", actual: "value", messages: i }),
              "\n      } else {\n        return value;\n      }\n    "
            ),
          };
        }),
        Si.add("color", function (e, t, n) {
          e.schema;
          var i = e.messages;
          return {
            source: "\n      if(typeof value !== 'string' && !(value instanceof String)){\n        "
              .concat(
                this.makeError({
                  type: "measurement",
                  actual: "value",
                  messages: i,
                }),
                "\n        return ;\n      }\n      if(!value.match("
              )
              .concat(
                Ci,
                ') && [\n          "aliceblue",\n          "antiquewhite",\n          "aqua",\n          "aquamarine",\n          "azure",\n          "beige",\n          "bisque",\n          "black",\n          "blanchedalmond",\n          "blue",\n          "blueviolet",\n          "brown",\n          "burlywood",\n          "cadetblue",\n          "chartreuse",\n          "chocolate",\n          "coral",\n          "cornflowerblue",\n          "cornsilk",\n          "crimson",\n          "cyan",\n          "darkblue",\n          "darkcyan",\n          "darkgoldenrod",\n          "darkgray",\n          "darkgrey",\n          "darkgreen",\n          "darkkhaki",\n          "darkmagenta",\n          "darkolivegreen",\n          "darkorange",\n          "darkorchid",\n          "darkred",\n          "darksalmon",\n          "darkseagreen",\n          "darkslateblue",\n          "darkslategray",\n          "darkslategrey",\n          "darkturquoise",\n          "darkviolet",\n          "deeppink",\n          "deepskyblue",\n          "dimgray",\n          "dimgrey",\n          "dodgerblue",\n          "firebrick",\n          "floralwhite",\n          "forestgreen",\n          "fuchsia",\n          "gainsboro",\n          "ghostwhite",\n          "gold",\n          "goldenrod",\n          "gray",\n          "grey",\n          "green",\n          "greenyellow",\n          "honeydew",\n          "hotpink",\n          "indianred",\n          "indigo",\n          "ivory",\n          "khaki",\n          "lavender",\n          "lavenderblush",\n          "lawngreen",\n          "lemonchiffon",\n          "lightblue",\n          "lightcoral",\n          "lightcyan",\n          "lightgoldenrodyellow",\n          "lightgray",\n          "lightgrey",\n          "lightgreen",\n          "lightpink",\n          "lightsalmon",\n          "lightseagreen",\n          "lightskyblue",\n          "lightslategray",\n          "lightslategrey",\n          "lightsteelblue",\n          "lightyellow",\n          "lime",\n          "limegreen",\n          "linen",\n          "magenta",\n          "maroon",\n          "mediumaquamarine",\n          "mediumblue",\n          "mediumorchid",\n          "mediumpurple",\n          "mediumseagreen",\n          "mediumslateblue",\n          "mediumspringgreen",\n          "mediumturquoise",\n          "mediumvioletred",\n          "midnightblue",\n          "mintcream",\n          "mistyrose",\n          "moccasin",\n          "navajowhite",\n          "navy",\n          "oldlace",\n          "olive",\n          "olivedrab",\n          "orange",\n          "orangered",\n          "orchid",\n          "palegoldenrod",\n          "palegreen",\n          "paleturquoise",\n          "palevioletred",\n          "papayawhip",\n          "peachpuff",\n          "peru",\n          "pink",\n          "plum",\n          "powderblue",\n          "purple",\n          "rebeccapurple",\n          "red",\n          "rosybrown",\n          "royalblue",\n          "saddlebrown",\n          "salmon",\n          "sandybrown",\n          "seagreen",\n          "seashell",\n          "sienna",\n          "silver",\n          "skyblue",\n          "slateblue",\n          "slategray",\n          "slategrey",\n          "snow",\n          "springgreen",\n          "steelblue",\n          "tan",\n          "teal",\n          "thistle",\n          "tomato",\n          "turquoise",\n          "violet",\n          "wheat",\n          "white",\n          "whitesmoke",\n          "yellow",\n          "yellowgreen",\n        ].indexOf(value.toLowerCase()) < 0){\n        '
              )
              .concat(
                this.makeError({ type: "color", actual: "value", messages: i }),
                "\n      }\n      return value;\n    "
              ),
          };
        });
      var Pi = [
          "cm",
          "mm",
          "in",
          "px",
          "pt",
          "pc",
          "em",
          "ex",
          "ch",
          "rem",
          "vw",
          "vh",
          "vmin",
          "vmax",
          "%",
        ],
        Ti = [
          {
            type: "string",
            optional: !0,
            default: "linear",
            enum: [
              "linear",
              "easeInQuad",
              "easeOutQuad",
              "easeInOutQuad",
              "easeInCubic",
              "easeOutCubic",
              "easeInOutCubic",
              "easeInQuart",
              "easeOutQuart",
              "easeInOutQuart",
              "easeInQuint",
              "easeOutQuint",
              "easeInOutQuint",
              "easeInSine",
              "easeOutSine",
              "easeInOutSine",
              "easeInExpo",
              "easeOutExpo",
              "easeInOutExpo",
              "easeInCirc",
              "easeOutCirc",
              "easeInOutCirc",
              "easeInElastic",
              "easeOutElastic",
              "easeInOutElastic",
              "easeInBack",
              "easeOutBack",
              "easeInOutBack",
              "easeInBounce",
              "easeOutBounce",
              "easeInOutBounce",
            ],
          },
          { type: "array", optional: !0, length: 4, items: { type: "number" } },
        ],
        Ii = { type: "string", empty: !1, trim: !0, optional: !0 },
        Mi = { type: "string", empty: !1, trim: !0, optional: !0 },
        Ai = { type: "string", empty: !1, optional: !1 },
        Li = { type: "amount", optional: !1, integer: !0, min: 0 },
        Di = { type: "amount", optional: !0, integer: !0, min: 0 },
        Bi = { type: "html", optional: !0 },
        ji = { type: "css", optional: !0 },
        Ri = {
          type: "array",
          optional: !0,
          items: { type: "object", props: { type: "string", src: "string" } },
        },
        Vi = {
          type: "array",
          items: {
            type: "object",
            strict: !0,
            props: {
              src: "string",
              id: "string",
              mcid: { type: "string", optional: !0 },
              classes: { type: "array", optional: !0, items: "string" },
              base64: { type: "boolean", optional: !0 },
              startValues: {
                optional: !0,
                type: "object",
                props: {
                  gain: { optional: !0, type: "number" },
                  pan: { optional: !0, type: "number" },
                },
              },
            },
          },
          optional: !0,
        },
        Ni = Si.compile({
          id: Ii,
          name: Mi,
          selector: p(p({}, Ai), {}, { optional: !0 }),
          easing: Ti,
          duration: Li,
          startFrom: { type: "amount", integer: !0, min: 0, optional: !0 },
          repeats: { type: "amount", integer: !0, min: 1, optional: !0 },
          hiatus: { type: "amount", integer: !0, min: 0, optional: !0 },
          delay: { type: "amount", integer: !0, min: 0, optional: !0 },
        }),
        Fi = {
          type: "object",
          optional: !0,
          props: {
            width: { type: "measurement", units: Pi, optional: !0 },
            height: { type: "measurement", units: Pi, optional: !0 },
          },
        },
        $i = { type: "string", enum: ["on", "off", "only"], optional: !0 },
        zi = Si.compile({
          props: [
            {
              type: "object",
              strict: !0,
              props: {
                id: Ii,
                name: Mi,
                selector: p(p({}, Ai), {}, { optional: !0 }),
                easing: Ti,
                duration: Di,
                html: Bi,
                css: ji,
                audioSources: Vi,
                audio: $i,
                containerParams: Fi,
                fonts: Ri,
                initParams: { type: "object", optional: !0 },
              },
            },
            {
              type: "object",
              strict: !0,
              props: {
                id: Ii,
                name: Mi,
                host: { type: "any", optional: !1 },
                duration: Di,
                html: Bi,
                css: ji,
                audioSources: Vi,
                audio: $i,
                containerParams: Fi,
                fonts: Ri,
                initParams: { type: "object", optional: !0 },
              },
            },
            {
              type: "object",
              strict: !0,
              props: {
                root: { type: "boolean", optional: !0 },
                name: Mi,
                id: Ii,
                audioSources: Vi,
                audio: p(p({}, $i), {}, { enum: ["on"] }),
              },
            },
          ],
        }),
        Hi = Si.compile({
          selector: p(p({}, Ai), {}, { optional: !0, strict: !0 }),
          name: Mi,
        }),
        Ui = Si.compile({
          selector: p(p({}, Ai), {}, { strict: !0, optional: !0 }),
          name: Mi,
          repeats: { type: "amount", integer: !0, min: 1, optional: !0 },
          hiatus: { type: "amount", integer: !0, min: 0, optional: !0 },
          delay: { type: "amount", integer: !0, min: 0, optional: !0 },
        });
      function Wi(e) {
        var t = new e.Class(e.attrs, e.props);
        if (!1 === t.result) return t;
        if (Object.prototype.hasOwnProperty.call(e, "incidents"))
          for (var n in e.incidents) {
            var i = e.incidents[n],
              r = Wi(i.leaf);
            if (!1 === r.result) return r;
            var o = t.addIncident(r, i.position);
            if (!1 === o.result) return o;
          }
        return t;
      }
      function qi(e) {
        e.descriptor.value = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = this.exportLiveDefinition();
          for (var i in e) Fe(i, e[i], !0, "attrs", n);
          for (var r in t) Fe(r, t[r], !0, "props", n);
          return Wi(n);
        };
      }
      Si.compile({ selector: Ai, duration: Li });
      var Gi = "mc.descriptive.decisionAuthority";
      function Ji(e) {
        e.descriptor.value = function (e) {
          if (null !== this.constructor.attrsValidationRules) {
            var t = this.constructor.attrsValidationMethod(e);
            if (t.length > 0) return { result: !1, errors: t };
          }
          return !0 ===
            this.putMessageOnPipe("checkForClip", {}, Gi, {
              selfExecute: !0,
              direction: le,
            }).response
            ? this.manageEditAttrProps(e, "attrs")
            : ((this.attrs = e), { result: !0 });
        };
      }
      function Ki(e) {
        e.descriptor.value = function (e) {
          var t = re.validateProps(
            e,
            this.constructor.propsValidationRules,
            this.constructor
          );
          return t.result
            ? !0 ===
              this.putMessageOnPipe("checkForClip", {}, Gi, {
                selfExecute: !0,
                direction: le,
              }).response
              ? this.manageEditAttrProps(e, "props")
              : ((this.props = e), { result: !0 })
            : t;
        };
      }
      function Yi(e) {
        e.descriptor.value = function () {
          return null !== this.props.host && void 0 !== this.props.host
            ? [this.props.host]
            : this.hasParent &&
              this.putMessageOnPipe("checkForClip", {}, Gi, {
                selfExecute: !0,
                direction: le,
              }).response
            ? this.putMessageOnPipe(
                "getElements",
                { selector: this.selector() },
                Gi,
                { selfExecute: !1, direction: le }
              ).response
            : [];
        };
      }
      function Xi(e) {
        e.descriptor.value = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { check: !0 };
          if ("dynamic" === this.duration)
            return {
              result: !1,
              reason:
                "Incidents with dynamic duration can't be resized. Once the Incident enters a Clip it'll become resizable",
            };
          if (e === this.duration)
            return { result: !0, meta: { unprocessed: !0 } };
          if (e <= 0) return { result: !1, reason: "Size must always be > 0" };
          if (t.check && this.hasParent) {
            var n = this.putMessageOnPipe(
              "checkResize",
              { id: this.id, newSize: e, fraction: e / this.duration },
              Gi,
              { selfExecute: !1, direction: le }
            );
            if (!n.response.result) return n.response;
          }
          return this.setNewDuration(e), { result: !0 };
        };
      }
      function Qi(e) {
        e.descriptor.value = function () {
          return null === this.inheritedSelector
            ? Object.prototype.hasOwnProperty.call(this.props, "selector")
              ? this.props.selector
              : null
            : Object.prototype.hasOwnProperty.call(this.props, "selector")
            ? "&" === this.props.selector.charAt(0)
              ? this.inheritedSelector + this.props.selector.substring(1)
              : ""
                  .concat(this.inheritedSelector, " ")
                  .concat(this.props.selector)
            : this.inheritedSelector;
        };
      }
      var Zi = (function () {
          function e(t) {
            a(this, e), (this.expressionProps = t);
          }
          return (
            c(e, [
              {
                key: "calculateValues",
                value: function (e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var i = e[n].getAttribute(this.expressionProps.attribute);
                    H(i) && (i = parseFloat(i)), t.push(i);
                  }
                  return t;
                },
              },
            ]),
            e
          );
        })(),
        er = (function () {
          function e(t) {
            a(this, e), (this.patternProps = t);
          }
          return (
            c(e, [
              {
                key: "calculateValues",
                value: function (e) {
                  for (
                    var t = this.patternProps.pattern.length, n = [], i = 0;
                    i < e.length;
                    i++
                  )
                    n.push(this.patternProps.pattern[i % t]);
                  return n;
                },
              },
              {
                key: "resize",
                value: function (e) {
                  if ("amount" !== this.patternProps.type)
                    return ""
                      .concat(F.patternValue, "(")
                      .concat(this.patternProps.pattern.join(), ")");
                  for (
                    var t = [], n = 0;
                    n < this.patternProps.pattern.length;
                    n++
                  )
                    t.push(e * this.patternProps.pattern[n]);
                  return "".concat(F.patternValue, "(").concat(t.join(), ")");
                },
              },
            ]),
            e
          );
        })(),
        tr = function e(t) {
          return (
            a(this, e),
            "expression" === t.dynamicType
              ? new wi(t)
              : "stagger" === t.dynamicType
              ? new Ei(t)
              : "attribute" === t.dynamicType
              ? new Zi(t)
              : "pattern" === t.dynamicType
              ? new er(t)
              : (re.error(
                  'dynamicType must be either "stgger" or "expression". '.concat(
                    t.dynamicType,
                    " provided"
                  )
                ),
                !1)
          );
        },
        nr = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi"),
        ir = function (e) {
          var t = [];
          return (
            (function e(n) {
              var i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
              if (!n) return [];
              for (var r = 0, o = Object.entries(n); r < o.length; r++) {
                var s = k(o[r], 2),
                  a = s[0],
                  l = s[1];
                if (!(l instanceof Element))
                  if (W(l))
                    e(
                      l,
                      ""
                        .concat(i)
                        .concat("" === i ? "" : ".")
                        .concat(a)
                    );
                  else if (U(l)) {
                    var c = l.trim();
                    if (c.startsWith(F.staggerPreface)) {
                      var u = ki(c, !1),
                        h = u.start.match(nr)[0],
                        p = u.end.match(nr)[0],
                        d = u.start.toString().substring(h.length),
                        f = {
                          dynamicType: "stagger",
                          path: ""
                            .concat(i)
                            .concat("" === i ? "" : ".")
                            .concat(a),
                          from: 1 * h,
                          to: 1 * p,
                          mode: u.mode,
                          unit: d,
                          fraction: u.startFraction,
                          easing: u.easing,
                          reverse: u.reverse,
                          type: "" === d ? "amount" : "measurement",
                        };
                      t.push(f);
                    } else if (c.startsWith(F.attibuteValue)) {
                      var m = {
                        dynamicType: "attribute",
                        path: ""
                          .concat(i)
                          .concat("" === i ? "" : ".")
                          .concat(a),
                        unit: "",
                        type: "measurement",
                        attribute: /\(([^\)]+)\)/.exec(c)[1],
                      };
                      t.push(m);
                    } else if (c.startsWith(F.mathExpPreface)) {
                      var g = bi(c),
                        v = {
                          dynamicType: "expression",
                          path: ""
                            .concat(i)
                            .concat("" === i ? "" : ".")
                            .concat(a),
                          unit: g.unit,
                          type: "" === g.unit ? "amount" : "measurement",
                          expression: g.expression,
                        };
                      t.push(v);
                    } else if (c.startsWith(F.patternValue)) {
                      for (
                        var y = X(c), b = !0, w = [], x = 0;
                        x < y.length;
                        x++
                      ) {
                        if (!H(y[x])) {
                          b = !1;
                          break;
                        }
                        w.push(parseFloat(y[x]));
                      }
                      b && (y = w);
                      var E = {
                        dynamicType: "pattern",
                        path: ""
                          .concat(i)
                          .concat("" === i ? "" : ".")
                          .concat(a),
                        unit: "",
                        type: b ? "amount" : "measurement",
                        pattern: y,
                      };
                      t.push(E);
                    }
                  }
              }
            })(e),
            t
          );
        };
      function rr(e) {
        e.descriptor.value = function () {
          for (var e = ir(this.props), t = 0; t < e.length; t++)
            this.propsStaggers.push({ path: e[t].path, stagger: new tr(e[t]) });
          for (var n = ir(this.attrs), i = 0; i < n.length; i++)
            this.attributesStaggers.push({
              path: n[i].path,
              stagger: new tr(n[i]),
            });
        };
      }
      var or = I(
          null,
          function (e, t) {
            var n = (function (t) {
              d(i, t);
              var n = v(i);
              function i() {
                var t,
                  r =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {},
                  o =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null;
                a(this, i),
                  null === o
                    ? ((t = n.call(this, r)),
                      e(m(t)),
                      (t.attrs = {}),
                      (t.props = r))
                    : ((t = n.call(this, o)),
                      e(m(t)),
                      (t.attrs = r),
                      (t.props = o));
                var s = re.validateProps(t.props, Hi, t.constructor);
                return s.result
                  ? ((t._inheritedSelector = null),
                    (t.attributesStaggers = []),
                    (t.propsStaggers = []),
                    t.setupDynamicValues(),
                    (t.passiveAddition = !0),
                    t._buildTree(),
                    (t.passiveAddition = !1),
                    g(t))
                  : g(t, s);
              }
              return i;
            })(t);
            return {
              F: n,
              d: [
                {
                  kind: "field",
                  static: !0,
                  key: "Incident",
                  value: function () {
                    return ye;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "plugin_npm_name",
                  value: function () {
                    return "motor-cortex-js";
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "version",
                  value: function () {
                    return ze;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "Channel",
                  value: function () {
                    return se;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "ClassName",
                  value: function () {
                    return "Group";
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "isGroup",
                  value: function () {
                    return !0;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "attrsValidationRules",
                  value: function () {
                    return null;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "propsValidationRules",
                  value: function () {
                    return Hi;
                  },
                },
                {
                  kind: "method",
                  decorators: [Ji],
                  key: "editAttributes",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Ki],
                  key: "editProperties",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Xi],
                  key: "resize",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [qi],
                  key: "clone",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Qi],
                  key: "selector",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Yi],
                  key: "getElements",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [rr],
                  key: "setupDynamicValues",
                  value: function () {},
                },
                {
                  kind: "method",
                  key: "_buildTree",
                  value: function () {
                    this.buildTree();
                  },
                },
                {
                  kind: "method",
                  key: "_calculateDuration",
                  value: function () {
                    var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0],
                      t = 0;
                    for (var n in this.children) {
                      var i = this.children[n];
                      if (
                        (!0 === e &&
                          !0 === i.leaf.constructor.isGroup &&
                          i.leaf._calculateDuration(!0),
                        "dynamic" === i.leaf.duration)
                      ) {
                        t = "dynamic";
                        break;
                      }
                      i.position + i.leaf.duration > t &&
                        (t = i.position + i.leaf.duration);
                    }
                    return (
                      t !== this.calculatedDuration &&
                      (this.props &&
                        Object.prototype.hasOwnProperty.call(
                          this.props,
                          "duration"
                        ) &&
                        (this.props.duration = t),
                      (this.calculatedDuration = t),
                      !0)
                    );
                  },
                },
                {
                  kind: "method",
                  key: "_rebuildTree",
                  value: function () {
                    for (var e in this.children) {
                      var t = this.children[e];
                      !0 === t.leaf.passive && this.removeIncident(t.id);
                    }
                    (this.passiveAddition = !0),
                      this.buildTree(),
                      (this.passiveAddition = !1);
                  },
                },
                { kind: "method", key: "buildTree", value: function () {} },
                {
                  kind: "method",
                  key: "manageEditAttrProps",
                  value: function (e, t) {
                    var n = this.parentNode,
                      i = n.getLeafPosition(this.id),
                      r = JSON.parse(JSON.stringify(this[t]));
                    (this[t] = e),
                      n.removeIncident(this.id),
                      this._rebuildTree();
                    var o = n.addIncident(this, i);
                    return (
                      o.result ||
                        ((this[t] = r),
                        this._rebuildTree(),
                        n.addIncident(this, i)),
                      o
                    );
                  },
                },
                {
                  kind: "method",
                  key: "detachFromParent",
                  value: function () {
                    b(f(n.prototype), "detachFromParent", this).call(this),
                      (this.inheritedSelector = null);
                  },
                },
                {
                  kind: "get",
                  key: "inheritedSelector",
                  value: function () {
                    return this._inheritedSelector;
                  },
                },
                {
                  kind: "set",
                  key: "inheritedSelector",
                  value: function (e) {
                    for (var t in ((this._inheritedSelector = e),
                    this.children))
                      this.children[t].leaf.inheritedSelector = this.selector();
                  },
                },
                {
                  kind: "get",
                  key: "selectorToPassToChildren",
                  value: function () {
                    return this.selector();
                  },
                },
                {
                  kind: "method",
                  key: "exportDefinition",
                  value: function () {
                    var e = {
                      ClassName: this.constructor.ClassName,
                      version: this.constructor.version,
                      plugin:
                        this.constructor.plugin ||
                        this.constructor.plugin_npm_name,
                      plugin_npm_name: this.constructor.plugin_npm_name,
                      attrs: this.attrs,
                      props: this.props,
                      incidents: {},
                      duration: this.duration,
                    };
                    for (var t in this.children) {
                      var n = this.children[t];
                      !0 !== n.leaf.passive &&
                        (e.incidents[t] = {
                          id: n.id,
                          position: n.position,
                          leaf: n.leaf.exportDefinition(),
                        });
                    }
                    return e;
                  },
                },
                {
                  kind: "method",
                  key: "exportLiveDefinition",
                  value: function () {
                    var e =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0],
                      t = JSON.parse(JSON.stringify(this.props));
                    !1 === e && delete t.id;
                    var n = {
                      Class: this.constructor,
                      attrs: JSON.parse(JSON.stringify(this.attrs)),
                      props: t,
                      incidents: {},
                    };
                    for (var i in this.children) {
                      var r = this.children[i];
                      !0 !== r.leaf.passive &&
                        (n.incidents[i] = {
                          position: r.position,
                          leaf: r.leaf.exportLiveDefinition(e),
                        });
                    }
                    return n;
                  },
                },
                {
                  kind: "method",
                  key: "addIncident",
                  value: function (e, t) {
                    var i,
                      r =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : { check: !0 };
                    if (
                      ((e.inheritedSelector = this.selectorToPassToChildren),
                      !0 === r.check)
                    ) {
                      var o = b(f(n.prototype), "checkAddition", this).call(
                        this,
                        e,
                        t
                      );
                      if (!o.result) return (e.inheritedSelector = null), o;
                      if (
                        !0 ===
                        (i = this.putMessageOnPipe("checkForClip", {}, Gi, {
                          selfExecute: !0,
                          direction: le,
                        })).response
                      ) {
                        var s = e.putMessageOnPipe(
                          "checkForInvalidSelectors",
                          {},
                          null,
                          { selfExecute: !0, direction: ce }
                        );
                        if (s.length > 0) {
                          for (var a = [], l = 0; l < s.length; l++)
                            a.push(s[l].response);
                          return { result: !1, errors: a };
                        }
                      }
                      var c = this.putMessageOnPipe(
                        "checkAddition",
                        { incident: e, millisecond: t, parentGroupId: this.id },
                        Gi,
                        { selfExecute: !0, direction: le }
                      );
                      if (!c.response.result)
                        return (e.inheritedSelector = null), c.response;
                    }
                    !0 === this.passiveAddition && (e.passive = !0);
                    var u = this.addChild(e, t);
                    return (
                      u.result || (e.inheritedSelector = null),
                      "dynamic" === e.duration &&
                        i &&
                        this._calculateDuration(!0),
                      u
                    );
                  },
                },
                {
                  kind: "method",
                  key: "moveIncident",
                  value: function (e, t) {
                    var i = e;
                    "object" === s(e) && (i = e.id);
                    var r = b(f(n.prototype), "checkEditPosition", this).call(
                      this,
                      i,
                      t
                    );
                    if (!r.result) return r;
                    var o = t - this.getLeafPosition(i);
                    if (0 === o) return { result: !0 };
                    var a = this.putMessageOnPipe(
                      "checkMove",
                      {
                        id: i,
                        millisecond: t,
                        positionDelta: o,
                        parentGroupId: this.id,
                      },
                      Gi,
                      { selfExecute: !0, direction: le }
                    );
                    return a.response.result
                      ? this.editPosition(i, t)
                      : a.response;
                  },
                },
                {
                  kind: "method",
                  key: "removeIncident",
                  value: function (e) {
                    var t = e;
                    "object" === s(e) && (t = e.id);
                    var i = b(f(n.prototype), "checkRemoveChild", this).call(
                      this,
                      t
                    );
                    if (!i.result) return i;
                    var r = this.putMessageOnPipe(
                      "checkDeletion",
                      { id: t, parentGroupId: this.id },
                      Gi,
                      { selfExecute: !0, direction: le }
                    );
                    return r.response.result ? this.removeChild(t) : r.response;
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckForClip",
                  value: function (e, t) {
                    return !!this.hasParent && this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckAddition",
                  value: function (e, t) {
                    return this.hasParent ? this.bypass() : { result: !0 };
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckMove",
                  value: function (e, t) {
                    return this.hasParent ? this.bypass() : { result: !0 };
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckDeletion",
                  value: function (e, t) {
                    return this.hasParent ? this.bypass() : { result: !0 };
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckResize",
                  value: function (e, t) {
                    return this.hasParent ? this.bypass() : { result: !0 };
                  },
                },
                {
                  kind: "method",
                  key: "handleSetDurationDynamic",
                  value: function (e, t) {
                    (this.calculatedDuration = "dynamic"),
                      this.putMessageOnPipe(
                        "setDurationDynamic",
                        {},
                        "Groups",
                        { selfExecute: !1, direction: le }
                      );
                  },
                },
              ],
            };
          },
          me
        ),
        sr = {
          isCombo: function (e) {
            return e.incidentClass.isCombo;
          },
          getItem: function (e, t) {
            return (function (e) {
              for (
                var t,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : window,
                  i = (e =
                    (arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : N) +
                    "." +
                    e).split("."),
                  r = 0;
                r < i.length;
                r++
              ) {
                if (!Object.prototype.hasOwnProperty.call(n, i[r])) return;
                (t = n[i[r]]), (n = n[i[r]]);
              }
              return t;
            })(t.join("."), "attrs", e);
          },
          getRepeatPosition: function (e, t, n, i) {
            return i * (t || 0) + (i + 1) * (e || 0) + i * n;
          },
          refersToOwnSelector: function (e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 0,
              i = t;
            !1 === Array.isArray(t) && (i = t.split("."));
            var r = this.getItem(e, i.slice(0, 2 + n));
            return (
              ("" === r.props.selector ||
                void 0 === r.props.selector ||
                null === r.props.selector) &&
              ("props" === i[2] ||
                !this.isCombo(r) ||
                this.refersToOwnSelector(e, i, n + 3))
            );
          },
          cascadeSelectors: function (e, t) {
            for (
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : "",
                i = [],
                r = 0;
              r < t.length;
              r++
            ) {
              var o = t[r],
                s = void 0;
              if (
                ((s = Object.prototype.hasOwnProperty.call(o.props, "selector")
                  ? "".concat(e, " ").concat(o.props.selector)
                  : e),
                i.push({
                  path: ""
                    .concat(n)
                    .concat("" === n ? "" : ".")
                    .concat(r, ".props.selector"),
                  value: s,
                }),
                this.isCombo(o))
              ) {
                var a = this.cascadeSelectors(
                  s,
                  o.attrs.incidents,
                  ""
                    .concat(n)
                    .concat("" === n ? "" : ".")
                    .concat(r, ".attrs.incidents")
                );
                i = i.concat(a);
              }
            }
            return i;
          },
          createDescriptiveIncidentLikeObject: function (e, t, n, i, r) {
            return {
              constructor: {
                Incident: e.incidentClass.targetClass.Incident,
                plugin_npm_name: e.incidentClass.targetClass.plugin_npm_name,
                Channel: e.incidentClass.targetClass.Channel,
                isClip: !1,
              },
              attrs: i || e.attrs,
              props: r || e.props,
              selector: function () {
                return e.props.selector;
              },
              id: e.props.id,
              audioClip: null,
              audio: "no",
              dynamicDurationValue: null,
              putMessageOnPipe: function () {},
              attributesStaggers: t,
              propsStaggers: n,
            };
          },
          parseElementsDynamics: function (e, t, n, i, r) {
            for (
              var o = "incidents.".concat(r, ".attrs"),
                s = "incidents.".concat(r, ".props"),
                a = $e(t),
                l = $e(n),
                c = 0;
              c < e.length;
              c++
            )
              if (0 === e[c].path.indexOf(o)) {
                var u = e[c].path.substring(o.length + 1);
                a.setValue(u, e[c].values[i]);
              } else if (0 === e[c].path.indexOf(s)) {
                var h = e[c].path.substring(s.length + 1);
                l.setValue(h, e[c].values[i]);
              }
            return {
              incidentAttrs: a.exportFlattened(),
              incidentProps: l.exportFlattened(),
            };
          },
          getStaggersForChild: function (e, t, n) {
            for (var i = [], r = [], o = 0; o < e.length; o++)
              "position" === n &&
              0 === e[o].path.indexOf("incidents.".concat(t, ".").concat(n))
                ? r.push({ path: "position", stagger: e[o].stagger })
                : 0 === e[o].path.indexOf("incidents.".concat(t, ".").concat(n))
                ? r.push({
                    path: e[o].path.substring(
                      "incidents.".concat(t, ".").concat(n).length + 1
                    ),
                    stagger: e[o].stagger,
                  })
                : i.push(e[o]);
            return { identifiedDynamics: r, remainingDynamics: i };
          },
          createElementProxy: function (e, t, n, i, r) {
            for (
              var o = $e(e),
                s = this.cascadeSelectors(
                  t,
                  e.attrs.incidents,
                  "attrs.incidents"
                ),
                a = 0;
              a < i.length;
              a++
            )
              o.setValue("attrs.".concat(i[a].path), i[a].values[n]);
            for (var l = 0; l < r.length; l++)
              o.setValue("props.".concat(r[l].path), r[l].values[n]);
            for (var c = 0; c < s.length; c++)
              o.setValue(s[c].path, s[c].value);
            return o;
          },
        },
        ar = (function (e) {
          d(n, e);
          var t = v(n);
          function n() {
            return a(this, n), t.apply(this, arguments);
          }
          return (
            c(n, [
              {
                key: "parseAttrsDynamicValues",
                value: function (e, t) {
                  this.childrenStaggers = [];
                  for (var n = 0; n < e.attributesStaggers.length; n++)
                    sr.refersToOwnSelector(e, e.attributesStaggers[n].path)
                      ? this.staggerAttrs.push({
                          path: e.attributesStaggers[n].path,
                          values: e.attributesStaggers[
                            n
                          ].stagger.calculateValues(t, this.initParams),
                        })
                      : this.childrenStaggers.push(e.attributesStaggers[n]);
                },
              },
              {
                key: "handleRecalcDuration",
                value: function (e, t) {
                  var i = b(f(n.prototype), "handleRecalcDuration", this).call(
                    this,
                    e,
                    t
                  );
                  return (
                    (this.descriptiveIncident.dynamicDurationValue =
                      1 * this.duration),
                    i
                  );
                },
              },
              {
                key: "lastWish",
                value: function () {
                  (this.descriptiveIncident.dynamicDurationValue = null),
                    this.descriptiveIncident.putMessageOnPipe(
                      "setDurationDynamic",
                      {},
                      "Groups",
                      { selfExecute: !1, direction: le }
                    ),
                    b(f(n.prototype), "lastWish", this).call(this);
                },
              },
              {
                key: "_createElementIncident",
                value: function (e, t, n, i, r, o) {
                  for (
                    var s = this,
                      a = sr.createElementProxy(
                        t,
                        n.context.getElementSelectorByMCID(o),
                        i,
                        this.staggerAttrs,
                        this.staggerProps
                      ),
                      l = 0;
                    l < this.staggerAttrs.length;
                    l++
                  )
                    a.setValue(
                      "attrs.".concat(this.staggerAttrs[l].path),
                      this.staggerAttrs[l].values[i]
                    );
                  for (
                    var c = Me({
                        id: ""
                          .concat(this.id, "_element")
                          .concat("-")
                          .concat(i),
                        attrs: {},
                        props: {},
                        Incident: or.Incident,
                        plugin_npm_name: or.plugin_npm_name,
                        Channel: or.Channel,
                        DescriptiveIncident: new or(),
                      }),
                      u = function (e) {
                        var t = Me({
                            id: ""
                              .concat(s.id, "_element")
                              .concat("-")
                              .concat(i, "_repeat")
                              .concat("-")
                              .concat(e),
                            attrs: {},
                            props: {},
                            Incident: or.Incident,
                            plugin_npm_name: or.plugin_npm_name,
                            Channel: or.Channel,
                            DescriptiveIncident: new or(),
                          }),
                          o = s.childrenStaggers;
                        a.attrs.incidents.forEach(function (l, c) {
                          var u = sr.parseElementsDynamics(
                              s.staggerAttrs,
                              l.attrs,
                              l.props,
                              i,
                              c
                            ),
                            h = u.incidentAttrs,
                            p = u.incidentProps,
                            d = sr.getStaggersForChild(o, c, "attrs"),
                            f = sr.getStaggersForChild(
                              d.remainingDynamics,
                              c,
                              "props"
                            ),
                            m = sr.getStaggersForChild(
                              d.remainingDynamics,
                              c,
                              "position"
                            );
                          (o = f.remainingDynamics),
                            a.setValue(
                              "attrs.incidents.".concat(c, ".props.id"),
                              ""
                                .concat(s.id, "_element")
                                .concat("-")
                                .concat(i, "_repeat")
                                .concat("-")
                                .concat(e, "_incident")
                                .concat("-")
                                .concat(c)
                            );
                          var g = lr(
                              sr.createDescriptiveIncidentLikeObject(
                                l,
                                d.identifiedDynamics,
                                f.identifiedDynamics,
                                h,
                                p
                              ),
                              n
                            ),
                            v = l.position;
                          1 === m.identifiedDynamics.length &&
                            (v = m.identifiedDynamics[0].stagger.calculateValues(
                              new Array(r),
                              s.initParams
                            )[i]),
                            t.addChild(g, v);
                        }),
                          c.addChild(
                            t,
                            sr.getRepeatPosition(
                              a.props.delay,
                              a.props.hiatus,
                              t.duration,
                              e
                            )
                          );
                      },
                      h = 0;
                    h < (a.props.repeats || 1);
                    h++
                  )
                    u(h);
                  this.addChild(c, 0);
                },
              },
            ]),
            n
          );
        })(Ve);
      function lr(e, t) {
        var n,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if ((i && "off" === e.audio) || (!i && "only" === e.audio)) return null;
        if (
          Object.prototype.hasOwnProperty.call(e.props, "selector") &&
          ((!i && "~" === e.props.selector.charAt(0)) ||
            (i && "~" !== e.props.selector.charAt(0) && !e.constructor.isClip))
        )
          return null;
        if (e.constructor.isClip) {
          if (!Object.prototype.hasOwnProperty.call(e.props, "selector") || i)
            return i ? e.audioClip : e.realClip;
          (n = new Ne(e, t)).plugin_channel_class = se;
        } else if (e.constructor.isCombo) n = new ar(e, t);
        else if (e.constructor.isGroup)
          for (var r in ((n = Me({
            id: e.id,
            attrs: e.attrs,
            props: e.props,
            Incident: e.constructor.Incident,
            plugin_npm_name: e.constructor.plugin_npm_name,
            Channel: e.constructor.Channel,
            DescriptiveIncident: e,
          })),
          e.children)) {
            var o = lr(e.children[r].leaf, t);
            null !== o && n.addChild(o, e.children[r].position);
          }
        else n = new Ve(e, t);
        return n;
      }
      var cr = "@kissmybutton/self-contained-incidents",
        ur = (function (e) {
          d(n, e);
          var t = v(n);
          function n(e, i) {
            var r;
            return (
              a(this, n),
              ((r = t.call(this, e, i)).attrs = e),
              (r.props = i),
              (r.isTheClip = !0),
              (r.blockingWaitings = {}),
              (r.instantiatedChannels = {}),
              (r.isHostedClip = !0),
              (r.instantiatedCopiesContexts = {}),
              (r.instantiatedCopiesUnblockingMethods = []),
              r.onClipInitialise(),
              (r.runTimeInfo = r.props.runTimeInfo),
              (r.durationSubs = []),
              (r.audioClip = !1),
              r
            );
          }
          return (
            c(n, [
              {
                key: "contextReady",
                get: function () {
                  return this.context.contextLoaded;
                },
              },
              { key: "onClipInitialise", value: function () {} },
              {
                key: "contextLoading",
                value: function () {
                  this.context.contextLoaded = !1;
                },
              },
              {
                key: "contextLoaded",
                value: function () {
                  for (var e in ((this.context.contextLoaded = !0),
                  this.putMessageOnPipe(
                    "contextLoaded",
                    {},
                    {},
                    { selfExecute: !1, direction: ce }
                  ),
                  this.instantiatedChannels))
                    this.instantiatedChannels[e].recalcScratchValues();
                  for (
                    var t = 0;
                    t < this.instantiatedCopiesUnblockingMethods.length;
                    t++
                  )
                    this.instantiatedCopiesUnblockingMethods[t]();
                  this.unblock();
                },
              },
              {
                key: "getElements",
                value: function (e) {
                  if (null !== this.props.host && void 0 !== this.props.host)
                    return this.context.getElements(e);
                  var t = [];
                  for (var n in this.instantiatedCopiesContexts)
                    for (
                      var i = this.instantiatedCopiesContexts[n].getElements(e),
                        r = 0;
                      r < i.length;
                      r++
                    )
                      t.push(i[r]);
                  return t;
                },
              },
              {
                key: "addContext",
                value: function (e) {
                  (this.instantiatedCopiesContexts[e.clipId] = e.context),
                    (e.instantiatedCopiesContexts = this.instantiatedCopiesContexts),
                    this.instantiatedCopiesUnblockingMethods.push(e.unblock);
                  var t = this.putMessageOnPipe(
                    "addContext",
                    e,
                    {},
                    { selfExecute: !1, direction: ce }
                  );
                  if (
                    1 === Object.keys(this.instantiatedCopiesContexts).length
                  ) {
                    for (var n in this.instantiatedChannels)
                      this.instantiatedChannels[n].recalcScratchValues(
                        e.clipId
                      );
                    this.context.nonFragmentedContext = e.context;
                  }
                  return t;
                },
              },
              {
                key: "exportConstructionArguments",
                value: function () {
                  return { attrs: this.attrs, props: this.props };
                },
              },
              {
                key: "_resize",
                value: function (e) {
                  for (var t in this.instantiatedChannels)
                    this.instantiatedChannels[t]._resize(e);
                  this.setNewDuration(this.duration * e);
                  for (var n = 0; n < this.durationSubs.length; n++)
                    this.durationSubs[n](this.duration);
                },
              },
              {
                key: "addIncident",
                value: function (e) {
                  for (
                    var t = this,
                      n = this.putMessageOnPipe(
                        "addIncident",
                        {
                          incident: e.incident,
                          millisecond: e.millisecond,
                          parentGroupId: e.parentGroupId,
                          incidentFromDescription: lr,
                          contextData: {
                            clipId: this.id,
                            context: this.context,
                            instantiatedCopiesContexts: this
                              .instantiatedCopiesContexts,
                          },
                          audio: this.audioClip,
                        },
                        e.parentGroupId,
                        { selfExecute: !0, direction: ce }
                      ),
                      i = {},
                      r = 0;
                    r < n.length;
                    r++
                  ) {
                    var o = n[r].response.getIncidentsByChannel(
                      n[r].positionDelta + e.millisecond
                    );
                    for (var s in o) {
                      var a;
                      Object.prototype.hasOwnProperty.call(i, s) || (i[s] = []),
                        (a = i[s]).push.apply(a, E(o[s]));
                    }
                  }
                  var l = this.checkAddition(i);
                  return l.result
                    ? {
                        result: !0,
                        execute: function () {
                          l.execute();
                          for (var i = 0; i < n.length; i++)
                            for (var r in (n[i].responder.addChild(
                              n[i].response,
                              e.millisecond
                            ),
                            n[i].responder.putMessageOnPipe(
                              "recalcDuration",
                              {},
                              "Groups",
                              { selfExecute: !0, direction: le }
                            ),
                            t.instantiatedCopiesContexts))
                              n[i].responder.putMessageOnPipe(
                                "addContext",
                                {
                                  clipId: r,
                                  context: t.instantiatedCopiesContexts[r],
                                },
                                "ContextAwareIncidents",
                                { selfExecute: !1, direction: ce }
                              );
                        },
                      }
                    : l;
                },
              },
              {
                key: "checkAddition",
                value: function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "all-or-nothing",
                    n = !0,
                    i = [],
                    r = [];
                  for (var o in e) {
                    Object.prototype.hasOwnProperty.call(
                      this.instantiatedChannels,
                      o
                    ) ||
                      (this.instantiatedChannels[o] = new e[
                        o
                      ][0].incident.plugin_channel_class({
                        runTimeInfo: this.runTimeInfo,
                        context: this.context,
                        subscribe: this.props.subscribe,
                      }));
                    var s = this.instantiatedChannels[o].addIncidents(e[o], t);
                    (n = n && s.result),
                      s.result ? r.push(s.execute) : (i = i.concat(s.errors));
                  }
                  var a = function () {
                    for (var e = 0; e < r.length; e++) r[e]();
                  };
                  return { result: n, errors: i, execute: a };
                },
              },
              {
                key: "moveIncident",
                value: function (e) {
                  for (
                    var t = this.putMessageOnPipe(
                        "moveIncident",
                        {
                          incidentId: e.id,
                          millisecond: e.millisecond,
                          parentGroupId: e.parentGroupId,
                          contextData: {
                            clipId: this.id,
                            context: this.context,
                          },
                          audio: this.audioClip,
                        },
                        e.parentGroupId,
                        { selfExecute: !0, direction: ce }
                      ),
                      n = {},
                      i = 0;
                    i < t.length;
                    i++
                  ) {
                    var r = t[i].response.getIncidentsByChannel(
                      t[i].positionDelta + e.millisecond
                    );
                    for (var o in r) {
                      var s;
                      Object.prototype.hasOwnProperty.call(n, o) || (n[o] = []),
                        (s = n[o]).push.apply(s, E(r[o]));
                    }
                  }
                  var a = this.checkMove(n, e.positionDelta);
                  return a.result
                    ? {
                        result: !0,
                        execute: function () {
                          a.execute();
                          for (var n = 0; n < t.length; n++)
                            t[n].responder.editPosition(
                              t[n].response.id,
                              e.millisecond
                            ),
                              t[n].responder.putMessageOnPipe(
                                "recalcDuration",
                                {},
                                "Groups",
                                { selfExecute: !0, direction: le }
                              );
                        },
                      }
                    : a;
                },
              },
              {
                key: "checkMove",
                value: function (e, t) {
                  var n = !0,
                    i = [],
                    r = [];
                  for (var o in e) {
                    var s = this.instantiatedChannels[o].editIncidents(e[o], t);
                    (n = n && s.result),
                      s.result ? r.push(s.execute) : (i = i.concat(s.errors));
                  }
                  return {
                    result: n,
                    errors: i,
                    execute: function () {
                      for (var e = 0; e < r.length; e++) r[e]();
                    },
                  };
                },
              },
              {
                key: "removeIncident",
                value: function (e) {
                  for (
                    var t = this.putMessageOnPipe(
                        "removeIncident",
                        {
                          incidentId: e.id,
                          parentGroupId: e.parentGroupId,
                          contextData: {
                            clipId: this.id,
                            context: this.context,
                          },
                          audio: this.audioClip,
                        },
                        e.parentGroupId,
                        { selfExecute: !0, direction: ce }
                      ),
                      n = {},
                      i = 0;
                    i < t.length;
                    i++
                  ) {
                    var r = t[i].response.getIncidentsByChannel();
                    for (var o in r) {
                      var s;
                      Object.prototype.hasOwnProperty.call(n, o) || (n[o] = []),
                        (s = n[o]).push.apply(s, E(r[o]));
                    }
                  }
                  var a = this.checkDelete(n);
                  return a.result
                    ? {
                        result: !0,
                        execute: function () {
                          a.execute();
                          for (var e = 0; e < t.length; e++)
                            t[e].responder.removeChild(t[e].response.id),
                              t[e].responder.putMessageOnPipe(
                                "recalcDuration",
                                {},
                                "Groups",
                                { selfExecute: !0, direction: le }
                              );
                        },
                      }
                    : a;
                },
              },
              {
                key: "checkDelete",
                value: function (e) {
                  var t = !0,
                    n = [],
                    i = [];
                  for (var r in e) {
                    var o = this.instantiatedChannels[r].removeIncidents(e[r]);
                    (t = t && o.result),
                      o.result ? i.push(o.execute) : (n = n.concat(o.errors));
                  }
                  return {
                    result: t,
                    errors: n,
                    execute: function () {
                      for (var e = 0; e < i.length; e++) i[e]();
                    },
                  };
                },
              },
              {
                key: "resizeIncident",
                value: function (e) {
                  for (
                    var t = this.putMessageOnPipe(
                        "resize",
                        {
                          incidentId: e.id,
                          newSize: e.newSize,
                          fraction: e.fraction,
                          contextData: {
                            clipId: this.id,
                            context: this.context,
                          },
                          audio: this.audioClip,
                        },
                        e.id,
                        { selfExecute: !1, direction: ce }
                      ),
                      n = {},
                      i = 0;
                    i < t.length;
                    i++
                  ) {
                    var r = t[i].response.getIncidentsByChannel(
                      t[i].positionDelta
                    );
                    for (var o in r) {
                      var s;
                      Object.prototype.hasOwnProperty.call(n, o) || (n[o] = []),
                        (s = n[o]).push.apply(s, E(r[o]));
                    }
                  }
                  var a = 0;
                  t.length > 0 && (a = t[0].positionDelta);
                  var l = this.checkResize(e.fraction, n, a);
                  return l.result
                    ? {
                        result: !0,
                        execute: function () {
                          l.execute();
                          for (var n = 0; n < t.length; n++)
                            t[n].responder.setNewDuration(e.newSize);
                        },
                      }
                    : l;
                },
              },
              {
                key: "checkResize",
                value: function (e, t) {
                  var n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0,
                    i = !0,
                    r = [],
                    o = [];
                  for (var s in t) {
                    var a = re.systoleDiastoleProjections(t[s], e, n),
                      l = this.instantiatedChannels[s].checkResizedIncidents(a);
                    (i = i && l.result),
                      l.result ? o.push(l.execute) : (r = r.concat(l.errors));
                  }
                  var c = function () {
                      for (var e = 0; e < o.length; e++) o[e]();
                    },
                    u = { result: i, errors: r, execute: c };
                  return u;
                },
              },
              {
                key: "context",
                get: function () {
                  return this.ownContext;
                },
              },
              {
                key: "getIncidentsByChannel",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    t = {};
                  return (
                    (t[cr] = [{ millisecond: e, incident: this, id: this.id }]),
                    t
                  );
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.volume = parseFloat(e);
                },
              },
              { key: "_onGetContextOnce", value: function (e) {} },
              {
                key: "handleRecalcDuration",
                value: function (e, t) {
                  if (this._calculateDuration())
                    for (var n = 0; n < this.durationSubs.length; n++)
                      this.durationSubs[n](this.duration);
                  return !0;
                },
              },
              {
                key: "onProgress",
                value: function (e, t, n) {
                  var i =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  if (!1 !== this.contextReady) {
                    for (var r in (n || (n = this.id),
                    this.instantiatedChannels)) {
                      var o = this.instantiatedChannels[r];
                      o.moveTo(this.runTimeInfo.currentMillisecond, t, n, i);
                    }
                    this.onAfterProgress(e, t);
                  } else this.setBlock();
                },
              },
              { key: "onAfterProgress", value: function (e, t) {} },
              {
                key: "flash",
                value: function () {
                  for (var e in this.instantiatedChannels)
                    this.instantiatedChannels[e].moveTo(
                      0,
                      this.runTimeInfo.currentMillisecond,
                      this.id,
                      !0
                    );
                },
              },
              {
                key: "subscribeToDurationChange",
                value: function (e) {
                  this.durationSubs.push(e);
                },
              },
              { key: "handleSetBlockingWaiting", value: function (e, t) {} },
              { key: "handleRemoveBlockingWaiting", value: function (e, t) {} },
            ]),
            n
          );
        })(ye),
        hr = (function () {
          function e() {
            a(this, e),
              (this.output = $.createGain()),
              (this.gainNode = $.createGain()),
              $.createStereoPanner &&
                (this.pannerNode = $.createStereoPanner()),
              $.createStereoPanner
                ? (this.pannerNode.connect(this.gainNode),
                  this.gainNode.connect(this.output),
                  (this.input = this.pannerNode))
                : (this.gainNode.connect(this.output),
                  (this.input = this.gainNode));
          }
          return (
            c(e, [
              {
                key: "connect",
                value: function (e) {
                  this.output.connect(e);
                },
              },
              {
                key: "disconnect",
                value: function () {
                  this.output.disconnect();
                },
              },
            ]),
            e
          );
        })();
      function pr(e) {
        for (
          var t = window.atob(e), n = t.length, i = new Uint8Array(n), r = 0;
          r < n;
          r++
        )
          i[r] = t.charCodeAt(r);
        return i.buffer;
      }
      var dr = /\[data(-mcid="+\w+")+\]/g,
        fr = (function () {
          function e() {
            a(this, e), (this.subscribers = []);
          }
          return (
            c(e, [
              {
                key: "sub",
                value: function (e, t) {
                  this.subscribers.push(t);
                },
              },
              {
                key: "pub",
                value: function (e) {
                  for (var t = 0; t < this.subscribers.length; t++)
                    this.subscribers[t](e);
                },
              },
            ]),
            e
          );
        })(),
        mr = (function () {
          function e() {
            var t = this,
              n =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              i = arguments.length > 1 ? arguments[1] : void 0;
            a(this, e),
              (this.totalSources = n.length),
              (this.audioSources = {}),
              (this.elementsByMCID = {});
            for (
              var r = function (e) {
                  var r = n[e],
                    o = {
                      mcid: r.mcid || te(),
                      id: r.id,
                      src: r.src,
                      classes: r.classes || [],
                      base64: r.base64 || !1,
                      pubSub: new fr(),
                      soundLoaded: !1,
                      startValues: r.startValues || {},
                    };
                  if (
                    ((t.audioSources[o.id] = o),
                    (t.elementsByMCID[o.mcid] = o),
                    r.base64)
                  )
                    $.decodeAudioData(pr(r.src), function (e) {
                      t._setBuffer(o, e, i);
                    });
                  else {
                    var s = new XMLHttpRequest();
                    s.open("GET", o.src, !0),
                      (s.responseType = "arraybuffer"),
                      (t.soundLoaded = !1),
                      (s.onload = function () {
                        $.decodeAudioData(
                          s.response,
                          function (e) {
                            t._setBuffer(o, e, i);
                          },
                          t.onError
                        );
                      }),
                      s.send();
                  }
                },
                o = 0;
              o < n.length;
              o++
            )
              r(o);
            this.context = {
              document: document,
              window: window,
              rootElement: document.body,
              unmount: function () {},
              masterNode: i,
              audioContext: $,
              getElements: this.getElements.bind(this),
              getMCID: this.getMCID.bind(this),
              setMCID: this.setMCID.bind(this),
              getElementSelectorByMCID: this.getElementSelectorByMCID.bind(
                this
              ),
              getElementByMCID: this.getElementByMCID.bind(this),
            };
          }
          return (
            c(e, [
              {
                key: "_setBuffer",
                value: function (e, t, n) {
                  (e.soundLoaded = !0),
                    (e.buffer = t),
                    (e.effectsAudioNode = new hr()),
                    e.effectsAudioNode.connect(n.input),
                    e.pubSub.pub();
                },
              },
              {
                key: "getElementByMCID",
                value: function (e) {
                  return Object.prototype.hasOwnProperty.call(
                    this.elementsByMCID,
                    e
                  )
                    ? this.elementsByMCID[e]
                    : null;
                },
              },
              {
                key: "getElements",
                value: function (e) {
                  if ("~" !== e.charAt(0)) {
                    if (dr.exec(e)) {
                      var t = e.split('"')[1];
                      return this.elementsByMCID[t];
                    }
                    return [];
                  }
                  if ("#" === (e = e.substr(1)).charAt(0))
                    return Object.prototype.hasOwnProperty.call(
                      this.audioSources,
                      e.substr(1)
                    )
                      ? [this.audioSources[e.substr(1)]]
                      : [];
                  if ("." === e.charAt(0)) {
                    var n = e.substr(1),
                      i = [];
                    for (var r in this.audioSources)
                      r.classes.indexOf(n) >= 0 && i.push(r);
                    return i;
                  }
                },
              },
              {
                key: "getMCID",
                value: function (e) {
                  return e.mcid;
                },
              },
              {
                key: "setMCID",
                value: function (e, t) {
                  e.mcid = t;
                },
              },
              {
                key: "getElementSelectorByMCID",
                value: function (e) {
                  return '[data-mcid="'.concat(e, '"]');
                },
              },
            ]),
            e
          );
        })(),
        gr = (function (e) {
          d(n, e);
          var t = v(n);
          function n(e, i) {
            var r;
            a(this, n),
              ((r = t.call(this, e, i)).audioNode = new hr()),
              r.audioNode.connect($.destination);
            var o = new mr(r.props.audioSources, r.audioNode);
            return (
              (r.ownContext = p(
                p({}, o.context),
                {},
                { isHostedClip: !0, contextLoaded: !0 }
              )),
              (r.audioClip = !0),
              r
            );
          }
          return (
            c(n, [
              {
                key: "onProgress",
                value: function (e, t, i) {
                  var r =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  b(f(n.prototype), "onProgress", this).call(
                    this,
                    e,
                    t,
                    this.id,
                    r
                  );
                },
              },
              {
                key: "_onGetContextOnce",
                value: function (e) {
                  this.audioNode.disconnect(),
                    (this.parentClipContext = e),
                    this.audioNode.connect(e.masterNode.input);
                },
              },
              {
                key: "lastWish",
                value: function () {
                  this.audioNode.output.disconnect(),
                    this.audioNode.output.connect($.destination);
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  this.audioNode.output.gain.value = e;
                },
              },
            ]),
            n
          );
        })(ur),
        vr = (function (e) {
          d(n, e);
          var t = v(n);
          function n() {
            return a(this, n), t.apply(this, arguments);
          }
          return (
            c(n, [
              {
                key: "onProgress",
                value: function (e) {
                  var t = this;
                  if (!this.element.soundLoaded)
                    return (
                      this.setBlock("loading sound"),
                      this.element.pubSub.sub(this.id, function () {
                        t.unblock();
                      }),
                      !1
                    );
                  if ("gain" === this.attributeKey) {
                    var n =
                      (this.targetValue - this.initialValues) * e +
                      this.initialValues;
                    this.element.effectsAudioNode.gainNode.gain.value = n;
                  } else if ("pan" === this.attributeKey) {
                    var i =
                      (this.targetValue - this.initialValues) * e +
                      this.initialValues;
                    this.element.effectsAudioNode.pannerNode.pan.value = i;
                  }
                },
              },
              {
                key: "getScratchValue",
                value: function () {
                  return "pan" === this.attributeKey
                    ? Object.prototype.hasOwnProperty.call(
                        this.element.startValues,
                        "pan"
                      )
                      ? this.element.startValues.pan
                      : 0
                    : "gain" === this.attributeKey
                    ? Object.prototype.hasOwnProperty.call(
                        this.element.startValues,
                        "gain"
                      )
                      ? this.element.startValues.gain
                      : 1
                    : void 0;
                },
              },
            ]),
            n
          );
        })(Te),
        yr = (function (e) {
          d(n, e);
          var t = v(n);
          function n(e) {
            var i;
            return (
              a(this, n),
              ((i = t.call(this, e)).playingIncidentsIds = []),
              (i.transitioned = !1),
              e.subscribe(te(), i._stateChange.bind(m(i)), 0, 1, !0),
              i
            );
          }
          return (
            c(n, [
              {
                key: "_stateChange",
                value: function (e, t) {
                  ("paused" !== t && "idle" !== t && "blocked" !== t) ||
                    (this._stopPlayingIncidents(), (this.transitioned = !0));
                },
              },
              {
                key: "_stopPlayingIncidents",
                value: function () {
                  for (var e = 0; e < this.playingIncidentsIds.length; e++) {
                    var t = this.playingIncidentsIds[e].split("|||");
                    this._incidentById(t[0]).stop(t[1]);
                  }
                  this.playingIncidentsIds = [];
                },
              },
              {
                key: "moveTo",
                value: function (e, t, n) {
                  var i =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3];
                  if ("transitional" === this.runTimeInfo.state || i) {
                    (this.transitioned = !0), this._stopPlayingIncidents();
                    for (var r = 0; r < this.incidents.length; r++) {
                      var o = this.incidents[r],
                        s = o.id,
                        a = o.millisecond,
                        l = this._incidentById(s),
                        c = void 0,
                        u = void 0;
                      t < a
                        ? ((c = 0), (u = 0))
                        : t > a + l.duration
                        ? ((c = 1), (u = l.duration))
                        : (c = (u = t - a) / l.duration),
                        l.onProgress(c, u, n, !0);
                    }
                  } else {
                    this.transitioned && ((e = 0), (this.transitioned = !1));
                    for (var h = this.incidents, p = 0; p < h.length; p++) {
                      var d = h[p],
                        f = d.millisecond,
                        m = this._incidentById(d.id),
                        g = m.duration,
                        v = f + g,
                        y = "".concat(d.id).concat("|||").concat(n);
                      if (f >= e && f < t && v > t) {
                        var b = (t - f) / g >= 1,
                          w = b ? 1 : (t - f) / g,
                          x = b ? g : t - f,
                          k = m.play(w, x, n);
                        k && this.playingIncidentsIds.push(y);
                      } else if (v > e && v <= t) {
                        m.stop(n);
                        var E = this.playingIncidentsIds.indexOf(y);
                        E > -1 && this.playingIncidentsIds.splice(E, 1);
                      }
                    }
                    this.runTimeInfo.currentMillisecond = t;
                  }
                },
              },
            ]),
            n
          );
        })(be),
        br = I(null, function (e) {
          return {
            F: function t() {
              var n =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                r = arguments.length > 2 ? arguments[2] : void 0;
              a(this, t),
                e(this),
                (this.attrs = n),
                (this.props = i),
                (this.dna = r),
                (this.context = r.context),
                (this.mcid = r.mcid),
                (this.id = i.id || te()),
                (this.modelId = i.modelId),
                (this.gotContext = !1),
                (this.plugin_channel_class = yr),
                (this.mc_plugin_npm_name = "motor-cortex-js-media-playback"),
                Object.prototype.hasOwnProperty.call(
                  i,
                  "plugin_channel_class"
                ) && (this.plugin_channel_class = i.plugin_channel_class),
                Object.prototype.hasOwnProperty.call(i, "mc_plugin_npm_name") &&
                  (this.mc_plugin_npm_name = i.mc_plugin_npm_name),
                (this.hasIncidents = !1),
                (this.autoGenerated = !1),
                this.onInitialise(n, i);
            },
            d: [
              {
                kind: "get",
                key: "selector",
                value: function () {
                  return this.props.selector;
                },
              },
              {
                kind: "get",
                key: "element",
                value: function () {
                  return this.context.getElementByMCID(this.mcid);
                },
              },
              {
                kind: "method",
                decorators: [Pe],
                key: "getIncidentsByChannel",
                value: function () {},
              },
              {
                kind: "method",
                key: "_onGetContextOnce",
                value: function () {
                  try {
                    if (!0 === this.context.fragment) return;
                    this.gotContext ||
                      (this.onGetContext(), (this.gotContext = !0));
                  } catch (e) {
                    re.error(e), re.error(this.mcid);
                  }
                },
              },
              {
                kind: "method",
                key: "onGetContext",
                value: function () {
                  re.info(
                    'Overwritte the "onGetContext" method with the code you want to get executed',
                    "info"
                  );
                },
              },
              { kind: "method", key: "lastWish", value: function () {} },
              {
                kind: "method",
                key: "onInitialise",
                value: function () {
                  re.info(
                    'Overwritte the "onInialise" method with the code you want to get executed',
                    "info"
                  );
                },
              },
              { kind: "method", key: "onProgress", value: function (e, t) {} },
              {
                kind: "method",
                key: "play",
                value: function (e) {
                  return !0;
                },
              },
              { kind: "method", key: "stop", value: function () {} },
              {
                kind: "method",
                decorators: [ge],
                key: "setBlock",
                value: function () {},
              },
              {
                kind: "method",
                decorators: [ve],
                key: "unblock",
                value: function () {},
              },
            ],
          };
        }),
        wr = {
          npm_name: "@kissmybutton/motorcortex-soundsystem",
          name: "Internal MotorCortex Soundsystem",
          incidents: [
            {
              exportable: (function (e) {
                d(n, e);
                var t = v(n);
                function n() {
                  return a(this, n), t.apply(this, arguments);
                }
                return (
                  c(n, [
                    {
                      key: "play",
                      value: function (e) {
                        var t = this;
                        if (!this.element.soundLoaded)
                          return (
                            this.setBlock("loading sound"),
                            this.element.pubSub.sub(this.id, function () {
                              t.unblock();
                            }),
                            !1
                          );
                        var n = 0;
                        return (
                          Object.prototype.hasOwnProperty.call(
                            this.props,
                            "startFrom"
                          ) && (n = this.props.startFrom),
                          (this.audioNode = $.createBufferSource()),
                          (this.audioNode.buffer = this.element.buffer),
                          this.audioNode.connect(
                            this.element.effectsAudioNode.input
                          ),
                          this.audioNode.start(0, (e + n) / 1e3),
                          !0
                        );
                      },
                    },
                    {
                      key: "stop",
                      value: function () {
                        this.audioNode.stop();
                      },
                    },
                  ]),
                  n
                );
              })(br),
              name: "AudioPlayback",
            },
            { exportable: vr, name: "AudioEffect" },
          ],
          Clip: { exportable: gr },
          audio: "only",
        },
        xr = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null;
            a(this, e),
              (this.realArray = []),
              null != t && (this.realArray = t);
          }
          return (
            c(e, [
              {
                key: "_hasOwnProperty",
                value: function (e) {
                  return Object.prototype.hasOwnProperty.call(
                    this.realArray,
                    e
                  );
                },
              },
              {
                key: "_get",
                value: function (e) {
                  return this.realArray[e];
                },
              },
              {
                key: "_set",
                value: function (e, t) {
                  this.realArray[e] = t;
                },
              },
              {
                key: "_keys",
                value: function () {
                  return Object.keys(this.realArray);
                },
              },
              {
                key: "_delete",
                value: function (e) {
                  return delete this.realArray[e];
                },
              },
              {
                key: "_export",
                value: function () {
                  return this.realArray;
                },
              },
            ]),
            e
          );
        })(),
        kr = (function () {
          function e(t) {
            a(this, e),
              (this.originalArray = t),
              (this.extraArray = {}),
              (this.addedKeys = []),
              (this.removedKeys = []);
          }
          return (
            c(e, [
              {
                key: "_hasOwnProperty",
                value: function (e) {
                  return (
                    Object.prototype.hasOwnProperty.call(
                      this.originalArray,
                      e
                    ) ||
                    Object.prototype.hasOwnProperty.call(this.extraArray, e)
                  );
                },
              },
              {
                key: "_get",
                value: function (e) {
                  return Object.prototype.hasOwnProperty.call(
                    this.extraArray,
                    e
                  )
                    ? this.extraArray[e]
                    : Object.prototype.hasOwnProperty.call(
                        this.originalArray,
                        e
                      )
                    ? this.originalArray[e]
                    : void 0;
                },
              },
              {
                key: "_set",
                value: function (e, t) {
                  (this.extraArray[e] = t),
                    Object.prototype.hasOwnProperty.call(
                      this.originalArray,
                      e
                    ) || this.addedKeys.push(e);
                  var n = this.removedKeys.indexOf(e);
                  n > -1 && this.removedKeys.splice(n, 1);
                },
              },
              {
                key: "_keys",
                value: function () {
                  for (
                    var e = Object.keys(this.originalArray).concat(
                        this.addedKeys
                      ),
                      t = 0;
                    t < this.removedKeys.length;
                    t++
                  ) {
                    var n = this.removedKeys.indexOf(this.removedKeys[t]);
                    e.splice(n, 1);
                  }
                  return e;
                },
              },
              {
                key: "_delete",
                value: function (e) {
                  var t = this.addedKeys.indexOf(e);
                  return t > -1
                    ? (this.addedKeys.splice(t), delete this.extraArray[e])
                    : this.removedKeys.push(e);
                },
              },
              {
                key: "_export",
                value: function () {
                  for (var e in this.extraArray)
                    this.originalArray[e] = this.extraArray[e];
                  for (var t = 0; t < this.removedKeys.length; t++)
                    delete this.originalArray[this.removedKeys[t]];
                  return this.originalArray;
                },
              },
            ]),
            e
          );
        })();
      function Er(e, t, n, i) {
        var r = !1;
        for (var o in t)
          Object.prototype.hasOwnProperty.call(n, o) ||
            ((r = !0), (i[o] = t[o]));
        return (e.animatedAttributeValue = i), r;
      }
      function _r(e, t, n, i) {
        var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          o = e[i],
          s = t._get(o.id);
        s.setInitialValue(n, r);
        var a = Er(
          s,
          s.initialValue,
          s.originalAnimatedAttributeValue,
          JSON.parse(JSON.stringify(s.animatedAttributeValue))
        );
        a && (s.lastWish(), s.onGetContext()),
          a &&
            i < e.length - 1 &&
            _r(e, t, s.animatedAttributeValue, i + 1, !1);
      }
      var Cr = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            a(this, e),
              (this.lanes = {}),
              t.lanes && (this.lanes = t.lanes),
              (this.comboAttributes = {}),
              null != t.comboAttributes &&
                (this.comboAttributes = t.comboAttributes),
              (this.runTimeInfo = t.runTimeInfo),
              (this.belongingLaneKeysByAnimationId = {}),
              t.belongingLaneKeysByAnimationId &&
                (this.belongingLaneKeysByAnimationId =
                  t.belongingLaneKeysByAnimationId),
              (this.incidentsById = new xr({})),
              t.incidentsById && (this.incidentsById = t.incidentsById);
          }
          return (
            c(e, [
              {
                key: "_resize",
                value: function (e) {
                  for (
                    var t = Object.keys(this.lanes), n = 0;
                    n < t.length;
                    n++
                  )
                    for (
                      var i = t[n], r = this.lanes[i], o = 0;
                      o < r.length;
                      o++
                    )
                      r[o].millisecond = r[o].millisecond * e;
                },
              },
              {
                key: "createTestLanesSanbox",
                value: function () {
                  var t = {
                    lanes: $e(this.lanes),
                    belongingLaneKeysByAnimationId: $e(
                      this.belongingLaneKeysByAnimationId
                    ),
                    incidentsById: new kr(this.incidentsById._export()),
                  };
                  return (
                    this.comboAttributes &&
                      (t.comboAttributes = this.comboAttributes),
                    new e(t)
                  );
                },
              },
              {
                key: "getLane",
                value: function (e, t) {
                  return this.lanes[ne(e, t)];
                },
              },
              {
                key: "applySandboxChanges",
                value: function (e) {
                  (this.lanes = e.lanes.exportFlattened()),
                    (this.belongingLaneKeysByAnimationId = e.belongingLaneKeysByAnimationId.exportFlattened()),
                    (this.incidentsById = new xr(e.incidentsById._export()));
                },
              },
              {
                key: "laneExists",
                value: function (e, t) {
                  var n =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2],
                    i = ne(e, t);
                  return (
                    !!this.lanes.hasOwnProperty(i) ||
                    (n && this.lanes.setValue(i, []), !1)
                  );
                },
              },
              {
                key: "getOverlappingAnims",
                value: function (e, t, n) {
                  var i = this,
                    r =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : [],
                    o =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : null;
                  return Array.from(this.lanes[ne(t, n)] || []).filter(
                    function (t) {
                      var n = e.incident.duration;
                      null != o && (n = o);
                      var s = i.incidentsById._get(t.id).duration;
                      return (
                        t.id !== e.incident.id &&
                        !r.includes(t.id) &&
                        ((t.millisecond >= e.millisecond &&
                          t.millisecond < n + e.millisecond) ||
                          (t.millisecond + s > e.millisecond &&
                            t.millisecond + s <= n + e.millisecond) ||
                          (t.millisecond < e.millisecond &&
                            t.millisecond + s > n + e.millisecond))
                      );
                    }
                  );
                },
              },
              {
                key: "addElementToLane",
                value: function (e, t, n, i) {
                  var r = this,
                    o = [],
                    s = ne(e, t);
                  this.incidentsById._set(i.id, i);
                  var a = { millisecond: n, id: i.id };
                  this.laneExists(e, t, !0),
                    this.lanes.pushValue(s, a),
                    this.lanes[s].sortBy("millisecond");
                  var l = this.lanes[s],
                    c = this.lanes[s].findIndex(function (e) {
                      return e.id === i.id;
                    });
                  return (
                    Object.prototype.hasOwnProperty.call(i.id) ||
                      this.belongingLaneKeysByAnimationId.setValue(i.id, []),
                    this.belongingLaneKeysByAnimationId.pushValue(i.id, s),
                    0 === c
                      ? this.lanes[s].length > 1
                        ? o.push(function () {
                            i.setInitialValue(
                              r.incidentsById._get(l[1].id).pureInitialValues
                            );
                          })
                        : o.push(function () {
                            i.setInitialValue();
                          })
                      : o.push(function () {
                          i.setInitialValue(
                            r.incidentsById._get(l[c - 1].id)
                              .animatedAttributeValue
                          );
                        }),
                    Object.prototype.hasOwnProperty.call(
                      this.comboAttributes,
                      t
                    ) &&
                      o.push(function () {
                        return _r(l, r.incidentsById, i.initialValue, c);
                      }),
                    c + 1 < l.length &&
                      o.push(function () {
                        r.incidentsById
                          ._get(l[c + 1].id)
                          .setInitialValue(i.animatedAttributeValue),
                          r.incidentsById._get(l[c + 1].id).gotContext &&
                            (r.incidentsById._get(l[c + 1].id).lastWish(),
                            r.incidentsById._get(l[c + 1].id).onGetContext());
                      }),
                    o
                  );
                },
              },
              {
                key: "updateLane",
                value: function (e, t) {
                  for (var n = this, i = {}, r = 0; r < e.length; r++)
                    for (
                      var o = this.belongingLaneKeysByAnimationId[e[r]], s = 0;
                      s < o.length;
                      s++
                    ) {
                      var a = o[s];
                      Object.prototype.hasOwnProperty.call(i, a) ||
                        (i[a] = {
                          animations: [],
                          lane: this.lanes[a],
                          laneData: Z(o[s]),
                        }),
                        i[a].animations.push(e[r]);
                    }
                  for (var l in i) {
                    var c = i[l],
                      u = c.laneData,
                      h = c.lane,
                      p = c.animations,
                      d = E(h);
                    d.sort(function (e, t) {
                      return e.millisecond - t.millisecond;
                    });
                    for (
                      var f = Object.prototype.hasOwnProperty.call(
                          this.comboAttributes,
                          u.attribute
                        ),
                        m = 0;
                      m < h.length;
                      m++
                    )
                      p.includes(h[m].id) && (h[m].millisecond += t);
                    h.sort(function (e, t) {
                      return e.millisecond - t.millisecond;
                    }),
                      (this.lanes[l] = h);
                    for (
                      var g = function (e) {
                          var t = p[e],
                            i = d.findIndex(function (e) {
                              return e.id === t;
                            }),
                            r = h.findIndex(function (e) {
                              return e.id === t;
                            });
                          if (i === r && r <= 1) return "continue";
                          var o = n.incidentsById._get(h[r].id);
                          if (i + 1 < h.length)
                            if (0 === i)
                              if (f)
                                _r(
                                  h,
                                  n.incidentsById,
                                  o.pureInitialValues,
                                  0,
                                  !0
                                );
                              else {
                                var s = n.incidentsById._get(d[1].id);
                                s.setInitialValue(o.pureInitialValues),
                                  s.onGetContext();
                              }
                            else if (f) {
                              var a = r > i ? i : r;
                              _r(
                                h,
                                n.incidentsById,
                                n.incidentsById._get(d[i - 1].id)
                                  .animatedAttributeValue,
                                a,
                                !0
                              );
                            } else
                              n.incidentsById
                                ._get(d[i + 1].id)
                                .setInitialValue(
                                  n.incidentsById._get(d[i - 1].id)
                                    .animatedAttributeValue
                                ),
                                n.incidentsById
                                  ._get(d[i + 1].id)
                                  .onGetContext();
                          if (
                            (0 === r
                              ? f
                                ? _r(
                                    h,
                                    n.incidentsById,
                                    n.incidentsById._get(d[0].id)
                                      .pureInitialValues,
                                    r,
                                    !0
                                  )
                                : (o.setInitialValue(
                                    n.incidentsById._get(d[0].id)
                                      .pureInitialValues
                                  ),
                                  o.onGetContext())
                              : f
                              ? _r(
                                  h,
                                  n.incidentsById,
                                  n.incidentsById._get(h[r - 1].id)
                                    .animatedAttributeValue,
                                  r,
                                  !0
                                )
                              : (o.setInitialValue(
                                  n.incidentsById._get(h[r - 1].id)
                                    .animatedAttributeValue
                                ),
                                o.onGetContext()),
                            r + 1 >= h.length)
                          )
                            return "continue";
                          if (f)
                            return (
                              _r(
                                h,
                                n.incidentsById,
                                o.animatedAttributeValue,
                                r + 1,
                                !0
                              ),
                              "continue"
                            );
                          var l = n.incidentsById._get(h[r + 1].id);
                          l.setInitialValue(o.animatedAttributeValue),
                            l.onGetContext();
                        },
                        v = 0;
                      v < p.length;
                      v++
                    )
                      g(v);
                  }
                },
              },
              {
                key: "deleteAnimations",
                value: function (e) {
                  for (var t = {}, n = 0; n < e.length; n++) {
                    for (
                      var i = e[n],
                        r = this.belongingLaneKeysByAnimationId[i],
                        o = 0;
                      o < r.length;
                      o++
                    ) {
                      for (
                        var s = this.lanes[r[o]], a = -1, l = 0;
                        l < s.length;
                        l++
                      )
                        if (s[l].id === i) {
                          a = l;
                          break;
                        }
                      for (
                        var c = p({}, s[a]),
                          u = this.incidentsById._get(c.id),
                          h = Z(r[o]),
                          d = [],
                          f = 0;
                        f < s.length;
                        f++
                      )
                        s[f].id !== i && d.push(s[f]);
                      if (
                        ((this.lanes[r[o]] = d),
                        0 !== (s = this.lanes[r[o]]).length)
                      ) {
                        t[r[o]] = Z(r[o]);
                        var m = this.incidentsById._get(c.id).pureInitialValues;
                        if (!(a >= s.length || !1 === m))
                          if (
                            Object.prototype.hasOwnProperty.call(
                              this.comboAttributes,
                              h.attribute
                            )
                          )
                            _r(s, this.incidentsById, m, a, !0);
                          else {
                            var g = this.incidentsById._get(s[a].id);
                            g.setInitialValue(m), g.onGetContext();
                          }
                      } else
                        u.onProgress(0, 0),
                          delete this.lanes[r[o]],
                          Object.prototype.hasOwnProperty.call(t, r[o]) &&
                            delete t[r[o]];
                    }
                    delete this.belongingLaneKeysByAnimationId[e[n]];
                  }
                  return t;
                },
              },
              {
                key: "recalcScratchValues",
                value: function (e) {
                  for (
                    var t = Object.keys(this.lanes), n = 0;
                    n < t.length;
                    n++
                  ) {
                    var i = t[n],
                      r = this.lanes[i];
                    if (r.length > 0) {
                      var o = this.incidentsById._get(r[0].id),
                        s = o.getScratchValue(e),
                        a = Z(i);
                      Object.prototype.hasOwnProperty.call(
                        this.comboAttributes,
                        a.attribute
                      )
                        ? _r(r, this.incidentsById, s, 0, !0)
                        : o.setInitialValue(s),
                        o.lastWish(),
                        o.onGetContext();
                    }
                  }
                },
              },
            ]),
            e
          );
        })(),
        Or = (function (e) {
          d(n, e);
          var t = v(n);
          function n(e) {
            var i;
            return (
              a(this, n),
              ((i = t.call(this, e)).comboAttributes = {}),
              (i.fixedAttributeName = "_"),
              null != e.comboAttributes &&
                (i.comboAttributes = e.comboAttributes),
              (i.LanesHandler = new Cr({
                comboAttributes: i.comboAttributes,
                runTimeInfo: i.runTimeInfo,
              })),
              i
            );
          }
          return (
            c(n, [
              {
                key: "setComboAttributes",
                value: function (e) {
                  (this.comboAttributes = e),
                    (this.LanesHandler = new Cr({
                      comboAttributes: this.comboAttributes,
                    }));
                },
              },
              {
                key: "lanes",
                get: function () {
                  return this.LanesHandler.lanes;
                },
              },
              {
                key: "incidentsById",
                get: function () {
                  return this.LanesHandler.incidentsById;
                },
              },
              {
                key: "_resize",
                value: function (e) {
                  this.LanesHandler._resize(e);
                },
              },
              {
                key: "checkAddition",
                value: function (e) {
                  for (
                    var t = this,
                      n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : "all-or-nothing",
                      i = this.LanesHandler.createTestLanesSanbox(),
                      r = [],
                      o = [],
                      s = [],
                      a = function (n) {
                        var a = !1,
                          l = e[n],
                          c = l.incident,
                          u = c.mcid,
                          h = c.attribute || t.fixedAttributeName;
                        i.laneExists(u, h), r.push({ mcid: u, attribute: h });
                        var p = i.getOverlappingAnims(l, u, h);
                        if (
                          (p.length > 0 &&
                            ((a = !0),
                            s.push({
                              type:
                                "unauthorised, overlapping incidents on the same element",
                              meta: {
                                element_mcid: u,
                                attribute: h,
                                incident: l,
                                overlappingAnims: p,
                              },
                            })),
                          !a)
                        ) {
                          var d = i.addElementToLane(u, h, l.millisecond, c);
                          o.push(function () {
                            for (var e = 0; e < d.length; e++) d[e]();
                            c._onGetContextOnce();
                          });
                        }
                      },
                      l = 0;
                    l < e.length;
                    l++
                  )
                    a(l);
                  if (s.length > 0 && "all-or-nothing" === n)
                    return { result: !1, errors: s };
                  var c = this.LanesHandler,
                    u = function () {
                      for (var e = 0; e < r.length; e++) {
                        var t = ne(r[e].mcid, r[e].attribute),
                          n = i.lanes[t].exportFlattened();
                        n.sort(function (e, t) {
                          return e.millisecond - t.millisecond;
                        }),
                          i.lanes.setValue(t, n);
                      }
                      for (var s = 0; s < o.length; s++) o[s]();
                      c.applySandboxChanges(i);
                    };
                  return { result: !0, errors: s, execute: u };
                },
              },
              {
                key: "checkEdit",
                value: function (e, t) {
                  for (var n = [], i = 0; i < e.length; i++) n.push(e[i].id);
                  for (
                    var r = this.LanesHandler.createTestLanesSanbox(),
                      o = [],
                      s = 0;
                    s < e.length;
                    s++
                  )
                    for (
                      var a = e[s].incident.id,
                        l = e[s].incident.mcid,
                        c = e[s].incident.attribute || this.fixedAttributeName,
                        u = r.getLane(l, c),
                        h = 0;
                      h < u.length;
                      h++
                    )
                      if (u[h].id === a) {
                        var d = p({}, u[h]);
                        (d.millisecond += t),
                          (d.incident = r.incidentsById._get(d.id));
                        var f = r.getOverlappingAnims(d, l, c, n);
                        f.length > 0 &&
                          o.push({
                            type:
                              "anauthorised, overlapping animations on the same element",
                            meta: {
                              element_mcid: l,
                              attribute: c,
                              newAnimation: d,
                              overlappingAnims: f,
                            },
                          });
                        break;
                      }
                  if (o.length > 0) return { result: !1, errors: o };
                  var m = this;
                  return {
                    result: !0,
                    execute: function () {
                      m.LanesHandler.updateLane(n, t);
                    },
                  };
                },
              },
              {
                key: "checkResizedIncidents",
                value: function (e) {
                  for (
                    var t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                      n = [],
                      i = 0;
                    i < e.length;
                    i++
                  )
                    n.push(e[i].id);
                  for (
                    var r = this.LanesHandler.createTestLanesSanbox(),
                      o = [],
                      s = 0;
                    s < e.length;
                    s++
                  )
                    for (
                      var a = this.LanesHandler.incidentsById._get(e[s].id),
                        l = a.mcid,
                        c = a.attribute || this.fixedAttributeName,
                        u = r.getLane(l, c),
                        h = { mcid: l, attribute: c },
                        d = e[s].end - e[s].start,
                        f = 0;
                      f < u.length;
                      f++
                    )
                      if (u[f].id === e[s].id) {
                        if (!t) {
                          var m = u[f],
                            g = p({}, m);
                          (g.millisecond += e[s].startDelta),
                            (g.incident = r.incidentsById._get(g.id));
                          var v = r.getOverlappingAnims(
                            g,
                            h.mcid,
                            h.attribute,
                            n,
                            d
                          );
                          v.length > 0 &&
                            o.push({
                              type:
                                "anauthorised overlapping animations on the same element",
                              meta: {
                                element_mcid: h.mcid,
                                attribute: h.attribute,
                                newAnimation: g,
                                overlappingAnims: v,
                              },
                            });
                        }
                        break;
                      }
                  if (o.length > 0) return { result: !1, errors: o };
                  var y = this,
                    b = function () {
                      for (var t = 0; t < e.length; t++)
                        y.LanesHandler.updateLane([e[t].id], e[t].startDelta);
                    };
                  return { execute: b, result: !0 };
                },
              },
              {
                key: "checkDelete",
                value: function (e) {
                  for (var t = [], n = 0; n < e.length; n++) t.push(e[n].id);
                  var i = this;
                  return {
                    result: !0,
                    execute: function () {
                      i.LanesHandler.deleteAnimations(t);
                    },
                  };
                },
              },
              {
                key: "recalcScratchValues",
                value: function (e) {
                  this.LanesHandler.recalcScratchValues(e);
                },
              },
              {
                key: "slipIntoLaneForwards",
                value: function (e, t, n, i) {
                  var r = this,
                    o =
                      arguments.length > 4 &&
                      void 0 !== arguments[4] &&
                      arguments[4],
                    s = e.filter(function (e) {
                      var i =
                        r.incidentsById._get(e.id).duration + e.millisecond;
                      return (
                        (i >= t && i <= n) || (i >= n && e.millisecond <= n)
                      );
                    });
                  if (0 === s.length) {
                    if (o && 0 === t) {
                      var a = this.incidentsById._get(e[0].id);
                      a.onProgress(0, 0, i);
                    }
                    return !0;
                  }
                  var l = s.length - 1,
                    c = this.incidentsById._get(s[l].id),
                    u = s[l].millisecond,
                    h = 1,
                    p = c.duration;
                  c.duration + u > n && (h = (p = n - u) / c.duration),
                    c.onProgress(h, p, i);
                },
              },
              {
                key: "slipToLaneBackwards",
                value: function (e, t, n, i) {
                  var r = this,
                    o = e.filter(function (e) {
                      var i =
                        r.incidentsById._get(e.id).duration + e.millisecond;
                      return (
                        (i <= n && i >= t) ||
                        (e.millisecond >= t && e.millisecond <= n) ||
                        (e.millisecond < t && i > n)
                      );
                    });
                  if (0 === o.length) return !0;
                  var s = this.incidentsById._get(o[0].id),
                    a = o[0].millisecond,
                    l = 0,
                    c = 0;
                  a < n && ((l = (n - a) / s.duration), (c = n - a)),
                    s.onProgress(l, c, i);
                },
              },
              {
                key: "moveTo",
                value: function (e, t, n) {
                  for (
                    var i =
                        arguments.length > 3 &&
                        void 0 !== arguments[3] &&
                        arguments[3],
                      r = Object.keys(this.lanes),
                      o = 0;
                    o < r.length;
                    o++
                  ) {
                    var s = this.lanes[r[o]];
                    e <= t
                      ? this.slipIntoLaneForwards(s, e, t, n, i)
                      : this.slipToLaneBackwards(s, e, t, n, i);
                  }
                },
              },
            ]),
            n
          );
        })(se);
      u(Or, "type", "attributes");
      var Sr = (function () {
          function e() {
            a(this, e), (this.customEntities = {});
          }
          return (
            c(e, [
              {
                key: "calcClipDims",
                value: function (e) {
                  var t = { use: !1, width: null, height: null };
                  return Object.prototype.hasOwnProperty.call(
                    e,
                    "originalDims"
                  ) &&
                    null !== e.originalDims.width &&
                    void 0 !== e.originalDims.width &&
                    null !== e.originalDims.height &&
                    void 0 !== e.originalDims.height
                    ? {
                        use: !0,
                        width:
                          e.originalDims.width.number +
                          e.originalDims.width.unit,
                        height:
                          e.originalDims.height.number +
                          e.originalDims.height.unit,
                      }
                    : (Object.prototype.hasOwnProperty.call(
                        e,
                        "containerParams"
                      ) &&
                        (Object.prototype.hasOwnProperty.call(
                          e.containerParams,
                          "width"
                        ) &&
                          ((t.use = !0), (t.width = e.containerParams.width)),
                        Object.prototype.hasOwnProperty.call(
                          e.containerParams,
                          "height"
                        ) &&
                          ((t.use = !0),
                          (t.height = e.containerParams.height))),
                      t);
                },
              },
              {
                key: "scalingCalculator",
                value: function (e) {
                  if (
                    !Object.prototype.hasOwnProperty.call(
                      e,
                      "containerParams"
                    ) ||
                    !Object.prototype.hasOwnProperty.call(e, "originalDims")
                  )
                    return { width: 1, height: 1 };
                  if (
                    !(
                      (null !== e.originalDims.width &&
                        void 0 !== e.originalDims.width) ||
                      (null !== e.originalDims.height &&
                        void 0 !== e.originalDims.height)
                    )
                  )
                    return { width: 1, height: 1 };
                  var t = Y(e.containerParams),
                    n = null,
                    i = null;
                  return (
                    null !== t.width &&
                      null !== e.originalDims.width &&
                      (t.width.unit === e.originalDims.width.unit
                        ? (n = t.width.number / e.originalDims.width.number)
                        : re.warning(
                            "containerParams and originalDims width of Incident have different dimensions.\n          containerParams.width will be ignored"
                          )),
                    null !== t.height &&
                      null !== e.originalDims.height &&
                      (t.height.unit === e.originalDims.height.unit
                        ? (i = t.height.number / e.originalDims.height.number)
                        : re.warning(
                            "containerParams and originalDims height of Incident have different dimensions.\n          containerParams.width will be ignored"
                          )),
                    null === n && null === i
                      ? { width: 1, height: 1 }
                      : ((null !== n) & (null === i)
                          ? (i = n)
                          : (null !== i) & (null === n) && (n = i),
                        { width: n, height: i })
                  );
                },
              },
              {
                key: "getElementByMCID",
                value: function (e) {
                  if (
                    Object.prototype.hasOwnProperty.call(this.customEntities, e)
                  )
                    return this.customEntities[e];
                  if (
                    Object.prototype.hasOwnProperty.call(this.elementsByMCID, e)
                  )
                    return this.elementsByMCID[e];
                  var t = this.context.rootElement.querySelector(
                    this.getElementSelectorByMCID(e)
                  );
                  return (this.elementsByMCID[e] = t), t;
                },
              },
              {
                key: "getElements",
                value: function (e) {
                  if (null == e || "" === e) return [];
                  if ("!" === e.charAt(0)) {
                    if ("#" === (e = e.substr(1)).charAt(0))
                      return [this.customEntities[e.substr(1)]];
                    if ("." === e.charAt(0)) {
                      var t = [];
                      for (var n in this.customEntities) {
                        var i = this.customEntities[n];
                        i.classes.indexOf(e.substr(1)) > -1 && t.push(i);
                      }
                      return t;
                    }
                  }
                  return Array.from(
                    this.context.rootElement.querySelectorAll(e)
                  );
                },
              },
              {
                key: "getMCID",
                value: function (e) {
                  return !0 === e.customEntity ? e.id : e.getAttribute(R);
                },
              },
              {
                key: "setMCID",
                value: function (e, t) {
                  e.setAttribute(R, t);
                },
              },
              {
                key: "getElementSelectorByMCID",
                value: function (e) {
                  return Object.prototype.hasOwnProperty.call(
                    this.customEntities,
                    e
                  )
                    ? "!#".concat(e)
                    : "[".concat(R, '="').concat(e, '"]');
                },
              },
              {
                key: "setCustomEntity",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [];
                  return Object.prototype.hasOwnProperty.call(
                    this.customEntities,
                    e
                  )
                    ? (re.error(
                        "Clip "
                          .concat(
                            this.id,
                            " already has custom Entity with id: "
                          )
                          .concat(e)
                      ),
                      !1)
                    : ((this.customEntities[e] = {
                        id: e,
                        entity: t,
                        classes: n,
                        customEntity: !0,
                      }),
                      !0);
                },
              },
            ]),
            e
          );
        })(),
        Pr = St(function (e, t) {
          var n = /[|\\{}()[\]^$+*?.]/g;
          t.escapeRegExpChars = function (e) {
            return e ? String(e).replace(n, "\\$&") : "";
          };
          var i = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&#34;",
              "'": "&#39;",
            },
            r = /[&<>'"]/g;
          function o(e) {
            return i[e] || e;
          }
          (t.escapeXML = function (e) {
            return null == e ? "" : String(e).replace(r, o);
          }),
            (t.escapeXML.toString = function () {
              return (
                Function.prototype.toString.call(this) +
                ';\nvar _ENCODE_HTML_RULES = {\n      "&": "&amp;"\n    , "<": "&lt;"\n    , ">": "&gt;"\n    , \'"\': "&#34;"\n    , "\'": "&#39;"\n    }\n  , _MATCH_HTML = /[&<>\'"]/g;\nfunction encode_char(c) {\n  return _ENCODE_HTML_RULES[c] || c;\n};\n'
              );
            }),
            (t.shallowCopy = function (e, t) {
              for (var n in (t = t || {})) e[n] = t[n];
              return e;
            }),
            (t.shallowCopyFromList = function (e, t, n) {
              for (var i = 0; i < n.length; i++) {
                var r = n[i];
                void 0 !== t[r] && (e[r] = t[r]);
              }
              return e;
            }),
            (t.cache = {
              _data: {},
              set: function (e, t) {
                this._data[e] = t;
              },
              get: function (e) {
                return this._data[e];
              },
              remove: function (e) {
                delete this._data[e];
              },
              reset: function () {
                this._data = {};
              },
            }),
            (t.hyphenToCamel = function (e) {
              return e.replace(/-[a-z]/g, function (e) {
                return e[1].toUpperCase();
              });
            });
        }),
        Tr = St(function (e, t) {
          /**
           * @file Embedded JavaScript templating engine. {@link http://ejs.co}
           * @author Matthew Eernisse <mde@fleegix.org>
           * @author Tiancheng "Timothy" Gu <timothygu99@gmail.com>
           * @project EJS
           * @license {@link http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0}
           */
          var n = o.default,
            i = !1,
            s = "locals",
            a = [
              "delimiter",
              "scope",
              "context",
              "debug",
              "compileDebug",
              "client",
              "_with",
              "rmWhitespace",
              "strict",
              "filename",
              "async",
            ],
            l = a.concat("cache"),
            c = /^\uFEFF/;
          function u(e, n) {
            var i;
            if (
              n.some(function (n) {
                return (
                  (i = t.resolveInclude(e, n, !0)), r.default.existsSync(i)
                );
              })
            )
              return i;
          }
          function h(e, n) {
            var i,
              r = e.filename,
              o = arguments.length > 1;
            if (e.cache) {
              if (!r) throw new Error("cache option requires a filename");
              if ((i = t.cache.get(r))) return i;
              o || (n = d(r).toString().replace(c, ""));
            } else if (!o) {
              if (!r)
                throw new Error(
                  "Internal EJS error: no file name or template provided"
                );
              n = d(r).toString().replace(c, "");
            }
            return (i = t.compile(n, e)), e.cache && t.cache.set(r, i), i;
          }
          function p(e, n, i) {
            var r;
            if (!i) {
              if ("function" == typeof t.promiseImpl)
                return new t.promiseImpl(function (t, i) {
                  try {
                    t((r = h(e)(n)));
                  } catch (e) {
                    i(e);
                  }
                });
              throw new Error("Please provide a callback function");
            }
            try {
              r = h(e)(n);
            } catch (e) {
              return i(e);
            }
            i(null, r);
          }
          function d(e) {
            return t.fileLoader(e);
          }
          function f(e, n) {
            var i = Pr.shallowCopy({}, n);
            if (
              ((i.filename = (function (e, n) {
                var i,
                  o,
                  s = n.views,
                  a = /^[A-Za-z]+:\\|^\//.exec(e);
                if (a && a.length)
                  (e = e.replace(/^\/*/, "")),
                    (i = Array.isArray(n.root)
                      ? u(e, n.root)
                      : t.resolveInclude(e, n.root || "/", !0));
                else if (
                  (n.filename &&
                    ((o = t.resolveInclude(e, n.filename)),
                    r.default.existsSync(o) && (i = o)),
                  !i && Array.isArray(s) && (i = u(e, s)),
                  !i && "function" != typeof n.includer)
                )
                  throw new Error(
                    'Could not find the include file "' +
                      n.escapeFunction(e) +
                      '"'
                  );
                return i;
              })(e, i)),
              "function" == typeof n.includer)
            ) {
              var o = n.includer(e, i.filename);
              if (o && (o.filename && (i.filename = o.filename), o.template))
                return h(i, o.template);
            }
            return h(i);
          }
          function m(e, t, n, i, r) {
            var o = t.split("\n"),
              s = Math.max(i - 3, 0),
              a = Math.min(o.length, i + 3),
              l = r(n),
              c = o
                .slice(s, a)
                .map(function (e, t) {
                  var n = t + s + 1;
                  return (n == i ? " >> " : "    ") + n + "| " + e;
                })
                .join("\n");
            throw (
              ((e.path = l),
              (e.message =
                (l || "ejs") + ":" + i + "\n" + c + "\n\n" + e.message),
              e)
            );
          }
          function g(e) {
            return e.replace(/;(\s*$)/, "$1");
          }
          function v(e, n) {
            n = n || {};
            var i = {};
            (this.templateText = e),
              (this.mode = null),
              (this.truncate = !1),
              (this.currentLine = 1),
              (this.source = ""),
              (i.client = n.client || !1),
              (i.escapeFunction = n.escape || n.escapeFunction || Pr.escapeXML),
              (i.compileDebug = !1 !== n.compileDebug),
              (i.debug = !!n.debug),
              (i.filename = n.filename),
              (i.openDelimiter = n.openDelimiter || t.openDelimiter || "<"),
              (i.closeDelimiter = n.closeDelimiter || t.closeDelimiter || ">"),
              (i.delimiter = n.delimiter || t.delimiter || "%"),
              (i.strict = n.strict || !1),
              (i.context = n.context),
              (i.cache = n.cache || !1),
              (i.rmWhitespace = n.rmWhitespace),
              (i.root = n.root),
              (i.includer = n.includer),
              (i.outputFunctionName = n.outputFunctionName),
              (i.localsName = n.localsName || t.localsName || s),
              (i.views = n.views),
              (i.async = n.async),
              (i.destructuredLocals = n.destructuredLocals),
              (i.legacyInclude =
                void 0 === n.legacyInclude || !!n.legacyInclude),
              i.strict
                ? (i._with = !1)
                : (i._with = void 0 === n._with || n._with),
              (this.opts = i),
              (this.regex = this.createRegex());
          }
          (t.cache = Pr.cache),
            (t.fileLoader = r.default.readFileSync),
            (t.localsName = s),
            (t.promiseImpl = new Function("return this;")().Promise),
            (t.resolveInclude = function (e, t, i) {
              var r = n.dirname,
                o = n.extname,
                s = (0, n.resolve)(i ? t : r(t), e);
              return o(e) || (s += ".ejs"), s;
            }),
            (t.compile = function (e, t) {
              return (
                t &&
                  t.scope &&
                  (i ||
                    (console.warn(
                      "`scope` option is deprecated and will be removed in EJS 3"
                    ),
                    (i = !0)),
                  t.context || (t.context = t.scope),
                  delete t.scope),
                new v(e, t).compile()
              );
            }),
            (t.render = function (e, t, n) {
              var i = t || {},
                r = n || {};
              return (
                2 == arguments.length && Pr.shallowCopyFromList(r, i, a),
                h(r, e)(i)
              );
            }),
            (t.renderFile = function () {
              var e,
                t,
                n,
                i = Array.prototype.slice.call(arguments),
                r = i.shift(),
                o = { filename: r };
              return (
                "function" == typeof arguments[arguments.length - 1] &&
                  (e = i.pop()),
                i.length
                  ? ((t = i.shift()),
                    i.length
                      ? Pr.shallowCopy(o, i.pop())
                      : (t.settings &&
                          (t.settings.views && (o.views = t.settings.views),
                          t.settings["view cache"] && (o.cache = !0),
                          (n = t.settings["view options"]) &&
                            Pr.shallowCopy(o, n)),
                        Pr.shallowCopyFromList(o, t, l)),
                    (o.filename = r))
                  : (t = {}),
                p(o, t, e)
              );
            }),
            (t.Template = v),
            (t.clearCache = function () {
              t.cache.reset();
            }),
            (v.modes = {
              EVAL: "eval",
              ESCAPED: "escaped",
              RAW: "raw",
              COMMENT: "comment",
              LITERAL: "literal",
            }),
            (v.prototype = {
              createRegex: function () {
                var e = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",
                  t = Pr.escapeRegExpChars(this.opts.delimiter),
                  n = Pr.escapeRegExpChars(this.opts.openDelimiter),
                  i = Pr.escapeRegExpChars(this.opts.closeDelimiter);
                return (
                  (e = e.replace(/%/g, t).replace(/</g, n).replace(/>/g, i)),
                  new RegExp(e)
                );
              },
              compile: function () {
                var e,
                  t,
                  i,
                  r = this.opts,
                  o = "",
                  s = "",
                  a = r.escapeFunction,
                  l = r.filename ? JSON.stringify(r.filename) : "undefined";
                if (!this.source) {
                  if (
                    (this.generateSource(),
                    (o +=
                      '  var __output = "";\n  function __append(s) { if (s !== undefined && s !== null) __output += s }\n'),
                    r.outputFunctionName &&
                      (o += "  var " + r.outputFunctionName + " = __append;\n"),
                    r.destructuredLocals && r.destructuredLocals.length)
                  ) {
                    for (
                      var c =
                          "  var __locals = (" + r.localsName + " || {}),\n",
                        u = 0;
                      u < r.destructuredLocals.length;
                      u++
                    ) {
                      var h = r.destructuredLocals[u];
                      u > 0 && (c += ",\n  "), (c += h + " = __locals." + h);
                    }
                    o += c + ";\n";
                  }
                  !1 !== r._with &&
                    ((o += "  with (" + r.localsName + " || {}) {\n"),
                    (s += "  }\n")),
                    (s += "  return __output;\n"),
                    (this.source = o + this.source + s);
                }
                (e = r.compileDebug
                  ? "var __line = 1\n  , __lines = " +
                    JSON.stringify(this.templateText) +
                    "\n  , __filename = " +
                    l +
                    ";\ntry {\n" +
                    this.source +
                    "} catch (e) {\n  rethrow(e, __lines, __filename, __line, escapeFn);\n}\n"
                  : this.source),
                  r.client &&
                    ((e = "escapeFn = escapeFn || " + a.toString() + ";\n" + e),
                    r.compileDebug &&
                      (e = "rethrow = rethrow || " + m.toString() + ";\n" + e)),
                  r.strict && (e = '"use strict";\n' + e),
                  r.debug && console.log(e),
                  r.compileDebug &&
                    r.filename &&
                    (e = e + "\n//# sourceURL=" + l + "\n");
                try {
                  if (r.async)
                    try {
                      i = new Function(
                        "return (async function(){}).constructor;"
                      )();
                    } catch (e) {
                      throw e instanceof SyntaxError
                        ? new Error(
                            "This environment does not support async/await"
                          )
                        : e;
                    }
                  else i = Function;
                  t = new i(r.localsName + ", escapeFn, include, rethrow", e);
                } catch (e) {
                  throw (
                    (e instanceof SyntaxError &&
                      (r.filename && (e.message += " in " + r.filename),
                      (e.message += " while compiling ejs\n\n"),
                      (e.message +=
                        "If the above error is not helpful, you may want to try EJS-Lint:\n"),
                      (e.message += "https://github.com/RyanZim/EJS-Lint"),
                      r.async ||
                        ((e.message += "\n"),
                        (e.message +=
                          "Or, if you meant to create an async function, pass `async: true` as an option."))),
                    e)
                  );
                }
                var p = r.client
                  ? t
                  : function (e) {
                      return t.apply(r.context, [
                        e || {},
                        a,
                        function (t, n) {
                          var i = Pr.shallowCopy({}, e);
                          return n && (i = Pr.shallowCopy(i, n)), f(t, r)(i);
                        },
                        m,
                      ]);
                    };
                if (r.filename && "function" == typeof Object.defineProperty) {
                  var d = r.filename,
                    g = n.basename(d, n.extname(d));
                  try {
                    Object.defineProperty(p, "name", {
                      value: g,
                      writable: !1,
                      enumerable: !1,
                      configurable: !0,
                    });
                  } catch (e) {}
                }
                return p;
              },
              generateSource: function () {
                this.opts.rmWhitespace &&
                  (this.templateText = this.templateText
                    .replace(/[\r\n]+/g, "\n")
                    .replace(/^\s+|\s+$/gm, "")),
                  (this.templateText = this.templateText
                    .replace(/[ \t]*<%_/gm, "<%_")
                    .replace(/_%>[ \t]*/gm, "_%>"));
                var e = this,
                  t = this.parseTemplateText(),
                  n = this.opts.delimiter,
                  i = this.opts.openDelimiter,
                  r = this.opts.closeDelimiter;
                t &&
                  t.length &&
                  t.forEach(function (o, s) {
                    var a;
                    if (
                      0 === o.indexOf(i + n) &&
                      0 !== o.indexOf(i + n + n) &&
                      (a = t[s + 2]) != n + r &&
                      a != "-" + n + r &&
                      a != "_" + n + r
                    )
                      throw new Error(
                        'Could not find matching close tag for "' + o + '".'
                      );
                    e.scanLine(o);
                  });
              },
              parseTemplateText: function () {
                for (
                  var e,
                    t = this.templateText,
                    n = this.regex,
                    i = n.exec(t),
                    r = [];
                  i;

                )
                  0 !== (e = i.index) &&
                    (r.push(t.substring(0, e)), (t = t.slice(e))),
                    r.push(i[0]),
                    (t = t.slice(i[0].length)),
                    (i = n.exec(t));
                return t && r.push(t), r;
              },
              _addOutput: function (e) {
                if (
                  (this.truncate &&
                    ((e = e.replace(/^(?:\r\n|\r|\n)/, "")),
                    (this.truncate = !1)),
                  !e)
                )
                  return e;
                (e = (e = (e = (e = e.replace(/\\/g, "\\\\")).replace(
                  /\n/g,
                  "\\n"
                )).replace(/\r/g, "\\r")).replace(/"/g, '\\"')),
                  (this.source += '    ; __append("' + e + '")\n');
              },
              scanLine: function (e) {
                var t,
                  n = this.opts.delimiter,
                  i = this.opts.openDelimiter,
                  r = this.opts.closeDelimiter;
                switch (((t = e.split("\n").length - 1), e)) {
                  case i + n:
                  case i + n + "_":
                    this.mode = v.modes.EVAL;
                    break;
                  case i + n + "=":
                    this.mode = v.modes.ESCAPED;
                    break;
                  case i + n + "-":
                    this.mode = v.modes.RAW;
                    break;
                  case i + n + "#":
                    this.mode = v.modes.COMMENT;
                    break;
                  case i + n + n:
                    (this.mode = v.modes.LITERAL),
                      (this.source +=
                        '    ; __append("' +
                        e.replace(i + n + n, i + n) +
                        '")\n');
                    break;
                  case n + n + r:
                    (this.mode = v.modes.LITERAL),
                      (this.source +=
                        '    ; __append("' +
                        e.replace(n + n + r, n + r) +
                        '")\n');
                    break;
                  case n + r:
                  case "-" + n + r:
                  case "_" + n + r:
                    this.mode == v.modes.LITERAL && this._addOutput(e),
                      (this.mode = null),
                      (this.truncate =
                        0 === e.indexOf("-") || 0 === e.indexOf("_"));
                    break;
                  default:
                    if (this.mode) {
                      switch (this.mode) {
                        case v.modes.EVAL:
                        case v.modes.ESCAPED:
                        case v.modes.RAW:
                          e.lastIndexOf("//") > e.lastIndexOf("\n") &&
                            (e += "\n");
                      }
                      switch (this.mode) {
                        case v.modes.EVAL:
                          this.source += "    ; " + e + "\n";
                          break;
                        case v.modes.ESCAPED:
                          this.source +=
                            "    ; __append(escapeFn(" + g(e) + "))\n";
                          break;
                        case v.modes.RAW:
                          this.source += "    ; __append(" + g(e) + ")\n";
                          break;
                        case v.modes.COMMENT:
                          break;
                        case v.modes.LITERAL:
                          this._addOutput(e);
                      }
                    } else this._addOutput(e);
                }
                this.opts.compileDebug &&
                  t &&
                  ((this.currentLine += t),
                  (this.source += "    ; __line = " + this.currentLine + "\n"));
              },
            }),
            (t.escapeXML = Pr.escapeXML),
            (t.__express = t.renderFile),
            (t.VERSION = "3.1.6"),
            (t.name = "ejs"),
            "undefined" != typeof window && (window.ejs = t);
        });
      function Ir(e, t) {
        return q(e) ? e(t) : Tr.render(e, { initParams: t });
      }
      var Mr = (function (e) {
          d(n, e);
          var t = v(n);
          function n() {
            var e,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if ((a(this, n), (e = t.call(this)), !W(i)))
              return (
                re.error(
                  "ContextHandler expects an object on its constructor. ".concat(
                    s(i),
                    " passed"
                  )
                ),
                g(e, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "html"))
              return (
                re.error(
                  "ContextHandler expects the html key on its constructor properties which is missing"
                ),
                g(e, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "css"))
              return (
                re.error(
                  "ContextHandler expects the css key on its constructor properties which is missing"
                ),
                g(e, !1)
              );
            if (
              (Object.prototype.hasOwnProperty.call(i, "initParams") ||
                re.info("ContextHandler got null initParams"),
              !Object.prototype.hasOwnProperty.call(i, "host"))
            )
              return (
                re.error(
                  "ContextHandler expects the host key on its constructor properties which is missing"
                ),
                g(e, !1)
              );
            e.isDOM = !0;
            var r = i.host.ownerDocument;
            if (
              !r.getElementById(
                "@kissmybutton/motorcortex/iframeContextHandler/css"
              )
            ) {
              var o =
                  "\n            iframe[seamless]{\n                background-color: transparent;\n                border: 0px none transparent;\n                padding: 0px;\n                overflow: hidden;\n            }\n            ",
                l = r.createElement("style");
              (l.id = "@kissmybutton/motorcortex/iframeContextHandler/css"),
                (l.type = "text/css");
              var c = r.head || r.getElementsByTagName("head")[0];
              l.styleSheet
                ? (l.styleSheet.cssText = o)
                : l.appendChild(r.createTextNode(o)),
                c.appendChild(l);
            }
            var u = r.createElement("iframe");
            i.host.appendChild(u);
            var h = e.scalingCalculator(i),
              p = e.calcClipDims(i);
            u.setAttribute("seamless", "seamless"),
              !0 === p.use &&
                (null !== p.width && u.setAttribute("width", p.width),
                null !== p.height && u.setAttribute("height", p.height)),
              (u.style.transform = "scale("
                .concat(h.width, ", ")
                .concat(h.height, ")")),
              (u.style.transformOrigin = "top left"),
              (u.style.position = "absolute"),
              (u.src = "");
            var d = u.contentWindow || u.contentDocument;
            d.document && (d = d.document), d.write(Ir(i.html, i.initParams));
            var f =
                "\n        body{\n            padding:0;\n            margin:0;\n        }\n        ",
              v = d.createElement("style");
            (v.type = "text/css"),
              v.styleSheet
                ? (v.styleSheet.cssText = Ir(i.css, i.initParams) + f)
                : v.appendChild(r.createTextNode(Ir(i.css, i.initParams) + f));
            var y = d.head || d.getElementsByTagName("head")[0];
            if (
              (y.appendChild(v),
              Object.prototype.hasOwnProperty.call(i, "fonts"))
            )
              for (var b = 0; b < i.fonts.length; b++) {
                var w = i.fonts[b];
                if ("google-font" === w.type) {
                  var x = d.createElement("link");
                  x.setAttribute("rel", "stylesheet"),
                    x.setAttribute("href", w.src),
                    y.appendChild(x);
                }
              }
            return (
              (e.rootElement = u),
              d.close(),
              (e.context = {
                document: d,
                window: u.contentWindow || u,
                clipContainer: u,
                rootElement: d.body,
                unmount: function () {
                  i.host.removeChild(u);
                },
                getElements: e.getElements.bind(m(e)),
                getMCID: e.getMCID.bind(m(e)),
                setMCID: e.setMCID.bind(m(e)),
                getElementSelectorByMCID: e.getElementSelectorByMCID.bind(m(e)),
                getElementByMCID: e.getElementByMCID.bind(m(e)),
                setCustomEntity: e.setCustomEntity.bind(m(e)),
              }),
              (e.elementsByMCID = {}),
              e
            );
          }
          return n;
        })(Sr),
        Ar = (function (e) {
          d(n, e);
          var t = v(n);
          function n() {
            var e,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            if ((a(this, n), (e = t.call(this)), !W(i)))
              return (
                re.error(
                  "ContextHandler expects an object on its constructor. ".concat(
                    s(i),
                    " passed"
                  )
                ),
                g(e, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "html"))
              return (
                re.error(
                  "ContextHandler expects the html key on its constructor properties which is missing"
                ),
                g(e, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "css"))
              return (
                re.error(
                  "ContextHandler expects the css key on its constructor properties which is missing"
                ),
                g(e, !1)
              );
            if (!Object.prototype.hasOwnProperty.call(i, "host"))
              return (
                re.error(
                  "ContextHandler expects the host key on its constructor properties which is missing"
                ),
                g(e, !1)
              );
            e.isDOM = !0;
            var r = i.host.shadowRoot;
            r || (r = i.host.attachShadow({ mode: "open" }));
            var o = document.createElement("div"),
              l = e.scalingCalculator(i),
              c = e.calcClipDims(i);
            o.setAttribute("data-motorocortex-container", "true"),
              !0 === c.use &&
                (null !== c.width && (o.style.width = c.width),
                null !== c.height && (o.style.height = c.height)),
              (o.style.transform = "scale("
                .concat(l.width, ", ")
                .concat(l.height, ")")),
              (o.style.transformOrigin = "top left"),
              (o.style.position = "absolute"),
              (o.style.overflow = "hidden"),
              (o.innerHTML = Ir(i.html, i.initParams)),
              r.appendChild(o);
            var u = document.createElement("slot");
            r.appendChild(u);
            var h = document.createElement("style");
            if (
              ((h.type = "text/css"),
              h.styleSheet
                ? (h.styleSheet.cssText = Ir(i.css, i.initParams))
                : h.appendChild(
                    document.createTextNode(
                      "[data-motorocortex-container] { all: initial; }" +
                        Ir(i.css, i.initParams)
                    )
                  ),
              r.appendChild(h),
              (e.fontTags = []),
              Object.prototype.hasOwnProperty.call(i, "fonts"))
            )
              for (var p = 0; p < i.fonts.length; p++) {
                var d = i.fonts[p];
                if ("google-font" === d.type) {
                  var f = document.createElement("link");
                  f.setAttribute("rel", "stylesheet"),
                    f.setAttribute("href", d.src),
                    document.getElementsByTagName("head")[0].appendChild(f),
                    e.fontTags.push(f);
                }
              }
            return (
              (o.style.overflow = "hidden"),
              (e.rootElement = o),
              (e.context = {
                document: document,
                window: window,
                clipContainer: e.rootElement,
                rootElement: o,
                unmount: function () {
                  try {
                    r.innerHTML = "";
                    for (var e = 0; e < this.fontTags.length; e++)
                      document
                        .getElementsByTagName("head")[0]
                        .removeChild(this.fontTags[e]);
                  } catch (e) {
                    re.warning(
                      "The element of the Clip to be removed seems not to exist any more"
                    );
                  }
                },
                getElements: e.getElements.bind(m(e)),
                getMCID: e.getMCID.bind(m(e)),
                setMCID: e.setMCID.bind(m(e)),
                getElementSelectorByMCID: e.getElementSelectorByMCID.bind(m(e)),
                getElementByMCID: e.getElementByMCID.bind(m(e)),
                setCustomEntity: e.setCustomEntity.bind(m(e)),
              }),
              (e.elementsByMCID = {}),
              e
            );
          }
          return n;
        })(Sr),
        Lr = (function (e) {
          d(n, e);
          var t = v(n);
          function n() {
            var e,
              i,
              r,
              o =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            a(this, n),
              null === s ? ((i = {}), (r = o)) : ((i = o), (r = s)),
              (e = t.call(this, i, r)),
              (r = p(
                p({}, r),
                {},
                {
                  html: "" !== e.html ? e.html : r.html,
                  css: "" !== e.css ? e.css : r.css,
                  fonts: e.fonts.length > 0 ? e.fonts : r.fonts,
                }
              ));
            var l = V;
            e.clipType = l;
            var c = new (document.head.createShadowRoot ||
            document.head.attachShadow
              ? Ar
              : Mr)(r);
            return (
              (e.ownContext = p(
                p({}, c.context),
                {},
                {
                  isHostedClip: e.isHostedClip,
                  contextLoaded: !0,
                  initParams: r.initParams,
                }
              )),
              (e.iframe = c.iframeElement),
              (e.forceExportIncidents = !0),
              e.onAfterRender(),
              e
            );
          }
          return (
            c(n, [
              { key: "onAfterRender", value: function () {} },
              {
                key: "html",
                get: function () {
                  return "";
                },
              },
              {
                key: "css",
                get: function () {
                  return "";
                },
              },
              {
                key: "fonts",
                get: function () {
                  return [];
                },
              },
              {
                key: "rootElement",
                get: function () {
                  return this.ownContext.clipContainer;
                },
              },
              {
                key: "exportConstructionArguments",
                value: function () {
                  return {
                    attrs: this.attrs,
                    props: p(
                      p({}, this.props),
                      {},
                      {
                        host: void 0,
                        html:
                          !0 === this.DescriptiveIncident.constructor.customClip
                            ? ""
                            : this.ownContext.rootElement.innerHTML,
                      }
                    ),
                  };
                },
              },
              {
                key: "setCustomEntity",
                value: function (e, t) {
                  var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [];
                  return this.context.setCustomEntity(e, t, n);
                },
              },
            ]),
            n
          );
        })(ur),
        Dr = (function (e) {
          d(n, e);
          var t = v(n);
          function n() {
            var e,
              i =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
            a(this, n), (e = t.call(this));
            var r = p({}, i);
            if (!W(r))
              return (
                re.error(
                  "HTMLFragmentContextHandler expects an object on its constructor. ".concat(
                    s(r),
                    " passed"
                  )
                ),
                g(e, !1)
              );
            Object.prototype.hasOwnProperty.call(r, "html") || (r.html = ""),
              (e.isDOM = !0);
            var o = document.createDocumentFragment(),
              l = document.createElement("div");
            return (
              Object.prototype.hasOwnProperty.call(r, "containerParams") &&
                (Object.prototype.hasOwnProperty.call(r, "width") &&
                  (l.style.width = r.containerParams.width),
                Object.prototype.hasOwnProperty.call(r, "height") &&
                  (l.style.height = r.containerParams.height)),
              (l.innerHTML = Ir(r.html, r.initParams)),
              o.appendChild(l),
              (l.style.overflow = "hidden"),
              (e.rootElement = l),
              (e.context = {
                document: document,
                window: window,
                clipContainer: e.rootElement,
                rootElement: l,
                unmount: function () {
                  r.host.removeChild(o);
                },
                getElements: e.getElements.bind(m(e)),
                getMCID: e.getMCID.bind(m(e)),
                setMCID: e.setMCID.bind(m(e)),
                getElementSelectorByMCID: e.getElementSelectorByMCID.bind(m(e)),
                getElementByMCID: e.getElementByMCID.bind(m(e)),
                setCustomEntity: e.setCustomEntity.bind(m(e)),
                fragment: !0,
              }),
              (e.elementsByMCID = {}),
              e
            );
          }
          return n;
        })(Sr),
        Br = (function (e) {
          d(n, e);
          var t = v(n);
          function n() {
            var e,
              i,
              r,
              o =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            a(this, n),
              null === s ? ((i = {}), (r = o)) : ((i = o), (r = s)),
              (e = t.call(this, i, r));
            var l = new Dr(
              p(
                p({}, r),
                {},
                {
                  html: Object.prototype.hasOwnProperty.call(r, "html")
                    ? r.html
                    : e.html,
                  css: Object.prototype.hasOwnProperty.call(r, "css")
                    ? r.css
                    : e.css,
                  fonts: Object.prototype.hasOwnProperty.call(r, "fonts")
                    ? r.fonts
                    : e.fonts,
                }
              )
            );
            return (
              (e.ownContext = p(p({}, l.context), {}, { isHostedClip: !1 })),
              (e.iframe = l.iframeElement),
              (e.forceExportIncidents = !0),
              e.onDOMCLipInitialise(),
              e
            );
          }
          return (
            c(n, [
              {
                key: "exportConstructionArguments",
                value: function () {
                  return {
                    attrs: this.attrs,
                    props: p(
                      p({}, this.props),
                      {},
                      { html: this.ownContext.rootElement.innerHTML }
                    ),
                  };
                },
              },
              { key: "onDOMCLipInitialise", value: function () {} },
              {
                key: "rootElement",
                get: function () {
                  return this.ownContext.clipContainer;
                },
              },
            ]),
            n
          );
        })(ur),
        jr = (function () {
          function e() {
            a(this, e);
          }
          return (
            c(e, [
              {
                key: "duration",
                get: function () {
                  return 0;
                },
              },
              {
                key: "addIncident",
                value: function () {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "moveIncident",
                value: function () {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "removeIncident",
                value: function () {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "resizeIncident",
                value: function () {
                  return { result: !0, execute: function () {} };
                },
              },
              {
                key: "getIncidentsByChannel",
                value: function () {
                  return {};
                },
              },
              { key: "flash", value: function () {} },
              { key: "_resize", value: function () {} },
              { key: "onProgress", value: function () {} },
            ]),
            e
          );
        })(),
        Rr = (function () {
          function e(t) {
            a(this, e),
              (this.runTimeInfo = {
                currentMillisecond: 0,
                state: "transitional",
              }),
              (this.id = te()),
              (this.realClip = t.descriptiveIncident.realClip);
            var n = t.descriptiveIncident.realClip.exportConstructionArguments(),
              i = p(
                p({}, n.props),
                {},
                { selector: void 0, host: t.host, id: this.id }
              );
            (this.ownClip = new t.descriptiveIncident.constructor.Incident(
              n.attrs,
              i
            )),
              t.descriptiveIncident.realClip.addContext(
                {
                  clipId: this.id,
                  context: this.ownClip.ownContext,
                  synchronize: t.synchronize,
                  runTimeInfo: this.runTimeInfo,
                },
                !0
              );
          }
          return (
            c(e, [
              {
                key: "onProgress",
                value: function (e, t) {
                  for (var n in this.realClip.instantiatedChannels)
                    this.realClip.instantiatedChannels[n].moveTo(
                      this.runTimeInfo.currentMillisecond,
                      t,
                      this.id,
                      !0
                    );
                  this.runTimeInfo.currentMillisecond = t;
                },
              },
            ]),
            e
          );
        })(),
        Vr = (function (e) {
          d(n, e);
          var t = v(n);
          function n(e) {
            var i,
              r,
              o,
              s =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : null;
            a(this, n),
              null === s ? ((r = {}), (o = e)) : ((r = e), (o = s)),
              ((i = t.call(this, r, o)).initParams = o.initParams || {});
            var l = i._validateProps();
            if (!l.result) return g(i, l);
            (i.isTheRootClip = !1),
              (i.isExportableToJSONFormat = !0),
              Object.prototype.hasOwnProperty.call(o, "html") &&
                q(o.html) &&
                (i.isExportableToJSONFormat = !1);
            var c = {
              id: i.id,
              attrs: r,
              props: p(
                p({}, o),
                {},
                {
                  html: Object.prototype.hasOwnProperty.call(o, "html")
                    ? o.html
                    : i.html,
                  css: Object.prototype.hasOwnProperty.call(o, "css")
                    ? o.css
                    : i.css,
                  fonts: Object.prototype.hasOwnProperty.call(o, "fonts")
                    ? o.fonts
                    : i.fonts,
                  runTimeInfo: i.runTimeInfo,
                  subscribe: i.subscribe.bind(m(i)),
                }
              ),
              plugin_npm_name: i.constructor.plugin_npm_name,
              Channel: i.constructor.Channel,
              DescriptiveIncident: m(i),
            };
            if (
              ((i.audio = "on"),
              Object.prototype.hasOwnProperty.call(i.constructor, "audio") &&
                (i.audio = i.constructor.audio),
              Object.prototype.hasOwnProperty.call(o, "audio") &&
                (i.audio = o.audio),
              Object.prototype.hasOwnProperty.call(o, "selector") &&
                void 0 !== o.selector &&
                !0 !== i.constructor.customClip)
            )
              c.Incident = Br;
            else if (
              Object.prototype.hasOwnProperty.call(o, "selector") &&
              void 0 !== o.selector &&
              !0 === i.constructor.customClip
            ) {
              delete c.props.selector;
              var u = new Br({ html: '<div id="clip-container"></div>' });
              (c.props.host = u.rootElement),
                (c.Incident = i.constructor.Incident);
            } else
              "only" === i.audio && !0 !== i.props.root
                ? (i.isTheRootClip = !1)
                : ((i.isTheRootClip = !0),
                  (i.blockingWaitings = {}),
                  (c.Incident = i.constructor.Incident));
            if (
              ("on" === i.audio || "off" === i.audio
                ? (i.realClip = Me(c))
                : (i.realClip = new jr()),
              "on" === i.audio || "only" === i.audio)
            ) {
              var h = {
                id: i.id,
                attrs: {},
                props: {
                  audioSources: Object.prototype.hasOwnProperty.call(
                    o,
                    "audioSources"
                  )
                    ? o.audioSources
                    : i.audioSources,
                  runTimeInfo: i.runTimeInfo,
                  subscribe: i.subscribe.bind(m(i)),
                },
                plugin_npm_name: i.constructor.plugin_npm_name,
                Channel: i.constructor.Channel,
                Incident: gr,
                DescriptiveIncident: m(i),
              };
              i.audioClip = Me(h);
            } else (i.audio = "off"), (i.audioClip = new jr());
            return (
              (i.passiveAddition = !0),
              i._buildTree(),
              (i.passiveAddition = !1),
              i
            );
          }
          return (
            c(n, [
              {
                key: "_validateProps",
                value: function () {
                  return re.validateProps(
                    { props: this.props },
                    zi,
                    this.constructor,
                    this.id
                  );
                },
              },
              {
                key: "selectorToPassToChildren",
                get: function () {
                  return null;
                },
              },
              {
                key: "inheritedSelector",
                get: function () {
                  return this._inheritedSelector;
                },
                set: function (e) {
                  this._inheritedSelector = e;
                },
              },
              {
                key: "html",
                get: function () {
                  return "";
                },
              },
              {
                key: "css",
                get: function () {
                  return "";
                },
              },
              {
                key: "fonts",
                get: function () {
                  return [];
                },
              },
              {
                key: "audioSources",
                get: function () {
                  return [];
                },
              },
              {
                key: "exportLiveDefinition",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = b(f(n.prototype), "exportLiveDefinition", this).call(
                      this,
                      e
                    );
                  return (
                    this.constructor.isAnimation &&
                      (t.props.duration = this.duration),
                    q(this.props.html) && (t.props.html = this.props.html),
                    q(this.props.css) && (t.props.css = this.props.css),
                    t
                  );
                },
              },
              {
                key: "_buildTree",
                value: function () {
                  if (void 0 !== this.realClip) {
                    var e = this.props.duration;
                    this.buildTree(),
                      e &&
                        this.constructor.isAnimation &&
                        this.duration !== e &&
                        this.resize(e);
                  }
                },
              },
              {
                key: "resize",
                value: function (e) {
                  return (
                    this.realClip._resize(e / this.duration),
                    this.audioClip._resize(e / this.duration),
                    (this.duration = e),
                    this.putMessageOnPipe("recalcDuration", {}, "Groups", {
                      selfExecute: !1,
                      direction: le,
                    }),
                    this.putMessageOnPipe("flash", {}, "RootClip", {
                      selfExecute: !0,
                      direction: le,
                    }),
                    { result: !0 }
                  );
                },
              },
              {
                key: "manageEditAttrProps",
                value: function (e, t) {
                  return {
                    result: !1,
                    errors: [
                      "Clips attributes and properties can not be edited",
                    ],
                  };
                },
              },
              {
                key: "handleCheckForClip",
                value: function (e, t) {
                  return !0;
                },
              },
              {
                key: "handleGetElements",
                value: function (e, t) {
                  return this.realClip.getElements(t.selector);
                },
              },
              {
                key: "handleCheckAddition",
                value: function (e, t) {
                  var n = this.realClip.addIncident(t),
                    i = this.audioClip.addIncident(t);
                  return !0 === n.result && !0 === i.result
                    ? (n.execute(),
                      i.execute(),
                      this.putMessageOnPipe("flash", {}, "RootClip", {
                        selfExecute: !0,
                        direction: le,
                      }),
                      { result: !0 })
                    : n;
                },
              },
              {
                key: "handleCheckMove",
                value: function (e, t) {
                  var n = this.realClip.moveIncident(t),
                    i = this.audioClip.moveIncident(t);
                  return !0 === n.result && !0 === i.result
                    ? (n.execute(),
                      i.execute(),
                      this.putMessageOnPipe("flash", {}, "RootClip", {
                        selfExecute: !0,
                        direction: le,
                      }),
                      { result: !0 })
                    : n;
                },
              },
              {
                key: "handleCheckDeletion",
                value: function (e, t) {
                  var n = this.realClip.removeIncident(t),
                    i = this.audioClip.removeIncident(t);
                  return !0 === n.result && !0 === i.result
                    ? (n.execute(),
                      i.execute(),
                      this.putMessageOnPipe("flash", {}, "RootClip", {
                        selfExecute: !0,
                        direction: le,
                      }),
                      { result: !0 })
                    : n;
                },
              },
              {
                key: "handleCheckResize",
                value: function (e, t) {
                  var n = this.realClip.resizeIncident(t),
                    i = this.audioClip.resizeIncident(t);
                  return !0 === n.result && !0 === i.result
                    ? (n.execute(),
                      i.execute(),
                      this.putMessageOnPipe("flash", {}, "RootClip", {
                        selfExecute: !0,
                        direction: le,
                      }),
                      { result: !0 })
                    : n;
                },
              },
              {
                key: "handleFlash",
                value: function (e, t) {
                  if (!this.isTheRootClip) return this.bypass();
                  this.flash();
                },
              },
              {
                key: "exportDefinition",
                value: function () {
                  var e = b(f(n.prototype), "exportDefinition", this).call(
                    this
                  );
                  return (
                    this.constructor.isAnimation &&
                      (e.props.duration = this.duration),
                    e
                  );
                },
              },
              {
                key: "handleSetBlock",
                value: function (e, t) {
                  if (!this.isTheRootClip) return this.bypass();
                  "transitional" !== this.runTimeInfo.state &&
                    ("blocked" !== this.runTimeInfo.state &&
                      (this.statusBeforeBlock = this.runTimeInfo.state),
                    (this.blockingWaitings[t.id] = t),
                    this.block());
                },
              },
              {
                key: "handleUnBlock",
                value: function (e, t) {
                  if (!this.isTheRootClip) return this.bypass();
                  Object.prototype.hasOwnProperty.call(
                    this.blockingWaitings,
                    t.id
                  ) &&
                    (delete this.blockingWaitings[t.id],
                    0 === Object.keys(this.blockingWaitings).length &&
                      ("playing" === this.statusBeforeBlock
                        ? ((this.previousTimeStamp = -1), this.play())
                        : this.arm()));
                },
              },
              {
                key: "stop",
                value: function () {
                  b(f(n.prototype), "stop", this).call(this),
                    (this.blockingWaitings = {});
                },
              },
              {
                key: "onProgress",
                value: function (e, t) {
                  this.realClip.onProgress(e, t),
                    this.audioClip.onProgress(e, t);
                },
              },
              {
                key: "paste",
                value: function (e) {
                  return this.isTheRootClip
                    ? new Rr({ host: e, descriptiveIncident: this })
                    : null;
                },
              },
              {
                key: "flash",
                value: function () {
                  this.realClip.flash();
                },
              },
              {
                key: "setVolume",
                value: function (e) {
                  return e < 0 || e > 1
                    ? {
                        result: !1,
                        errors: [{ type: "invalid volume number" }],
                      }
                    : "off" === this.audio
                    ? {
                        result: !1,
                        errors: [
                          { type: "can not set volume of Clip with audio off" },
                        ],
                      }
                    : (this.audioClip.setVolume(e), { result: !0 });
                },
              },
            ]),
            n
          );
        })(
          (function (e) {
            d(n, e);
            var t = v(n);
            function n(e, i) {
              var r;
              return (
                a(this, n),
                ((r = t.call(this, e, i)).runTimeInfo = {
                  currentMillisecond: 0,
                  state: "idle",
                }),
                (r.listeners = {}),
                (r.previousTimeStamp = -1),
                (r.speed = 1),
                r
              );
            }
            return (
              c(n, [
                {
                  key: "_setState",
                  value: function (e) {
                    if (e !== this.runTimeInfo.state)
                      for (var t in ((this.runTimeInfo.state = e),
                      this.putMessageOnPipe("setState", e, "Clips", {
                        selfExecute: !1,
                        direction: ce,
                      }),
                      this.listeners))
                        this.listeners[t].funct(
                          this.runTimeInfo.currentMillisecond,
                          e
                        );
                  },
                },
                {
                  key: "handleSetState",
                  value: function (e, t) {
                    this._setState(t);
                  },
                },
                {
                  key: "play",
                  value: function () {
                    var e = this,
                      t =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                    if (
                      "idle" === this.runTimeInfo.state ||
                      "paused" === this.runTimeInfo.state ||
                      "armed" === this.runTimeInfo.state ||
                      "transitional" === this.runTimeInfo.state ||
                      "blocked" === this.runTimeInfo.state
                    ) {
                      if ("paused" === this.runTimeInfo.state) {
                        var n = new Date().getTime() - this.pauseMoment;
                        this.previousTimeStamp += n;
                      }
                      this._setState("playing"),
                        this.onPlay(),
                        t ||
                          window.requestAnimationFrame(function (t) {
                            e.step(t);
                          });
                    }
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    "playing" === this.runTimeInfo.state &&
                      (this._setState("paused"),
                      (this.pauseMoment = new Date().getTime()),
                      this.onWait());
                  },
                },
                {
                  key: "arm",
                  value: function () {
                    ("transitional" !== this.runTimeInfo.state &&
                      "blocked" !== this.runTimeInfo.state) ||
                      this._setState("armed");
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    this._setState("idle"), (this.previousTimeStamp = -1);
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    this._setState("transitional"),
                      (this.previousTimeStamp = -1);
                  },
                },
                {
                  key: "block",
                  value: function () {
                    this._setState("blocked"), (this.previousTimeStamp = -1);
                  },
                },
                { key: "onPlay", value: function () {} },
                { key: "onWait", value: function () {} },
                {
                  key: "playableProgress",
                  value: function (e, t) {
                    if (this.isTheRootClip) {
                      for (var n in this.listeners) {
                        var i = this.listeners[n];
                        !0 !== i.onlyOnStateChange &&
                          (Math.abs(
                            t +
                              i.cavaDelta -
                              this.runTimeInfo.currentMillisecond
                          ) > i.threshold
                            ? (i.funct(Q(t, i.roundTo), this.runTimeInfo.state),
                              (i.cavaDelta = 0))
                            : (i.cavaDelta += Math.abs(
                                t - this.runTimeInfo.currentMillisecond
                              )));
                      }
                      return (
                        this.onProgress(e, t),
                        (this.runTimeInfo.currentMillisecond = t),
                        !0
                      );
                    }
                    return !1;
                  },
                },
                {
                  key: "executionSpeed",
                  set: function (e) {
                    if (!this.isTheRootClip) return !1;
                    this.speed = parseFloat(e);
                  },
                },
                {
                  key: "step",
                  value: function (e) {
                    var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                    if ("playing" === this.runTimeInfo.state) {
                      var n = this;
                      -1 === this.previousTimeStamp &&
                        (this.previousTimeStamp = e);
                      var i = {
                        milliseconds: Math.round(
                          this.runTimeInfo.currentMillisecond +
                            (e - this.previousTimeStamp) * this.speed
                        ),
                        fraction:
                          (this.runTimeInfo.currentMillisecond +
                            (e - this.previousTimeStamp) * this.speed) /
                          this.duration,
                      };
                      if (i.fraction >= 1)
                        return (
                          this.playableProgress(1, this.duration),
                          void this.complete()
                        );
                      if (i.fraction < 0)
                        return (
                          this.playableProgress(0, 0), void this.complete()
                        );
                      this.playableProgress(i.fraction, i.milliseconds),
                        (this.previousTimeStamp = e),
                        t || window.requestAnimationFrame(n.step.bind(n));
                    }
                  },
                },
                {
                  key: "subscribe",
                  value: function (e, t, n, i) {
                    var r =
                      arguments.length > 4 &&
                      void 0 !== arguments[4] &&
                      arguments[4];
                    n || (n = 0),
                      i || (i = 1),
                      (this.listeners[e] = {
                        funct: t,
                        threshold: n,
                        roundTo: i,
                        cavaDelta: 0,
                        onlyOnStateChange: r,
                      });
                  },
                },
                {
                  key: "unsubscribe",
                  value: function (e) {
                    Object.prototype.hasOwnProperty.call(this.listeners, e) &&
                      delete this.listeners[e];
                  },
                },
                {
                  key: "subscribeToDurationChange",
                  value: function (e) {
                    return (
                      !!this.isTheRootClip &&
                      (this.realClip.subscribeToDurationChange(e), !0)
                    );
                  },
                },
              ]),
              n
            );
          })(or)
        );
      u(Vr, "isClip", !0),
        u(Vr, "Incident", Lr),
        u(Vr, "plugin_npm_name", "@kissmybutton/self-contained-incidents"),
        u(Vr, "version", ze),
        u(Vr, "Channel", be),
        u(Vr, "ClassName", "HTMLClip"),
        u(Vr, "propsValidationRules", zi);
      var Nr = Si.compile({
          incidents: {
            type: "array",
            items: {
              type: "object",
              props: {
                position: { type: "amount", integer: !0, min: 0, optional: !1 },
                attrs: { type: "object", optional: !1 },
                props: { type: "object", optional: !1 },
                incidentClass: { type: "any", optional: !1 },
              },
            },
          },
        }),
        Fr = (function (e) {
          d(n, e);
          var t = v(n);
          function n(e, i) {
            var r;
            a(this, n),
              null !== (r = t.call(this, e, i)).incidents &&
                ((r.attrs.incidents = r.incidents),
                (r.attributesStaggers = []),
                (r.propsStaggers = []),
                r.setupDynamicValues());
            var o = re.validateProps(r.props, Ui, r.constructor);
            if (!o.result) return g(r, o);
            var s = Nr(r.attrs);
            if (s.length > 0)
              return (
                re.error(
                  "The provided attributes for Combo Incident are invalid"
                ),
                g(r, { result: !1, errors: s })
              );
            for (var l = [], c = 0; c < r.attrs.length; c++) {
              var u = r.attrs[c];
              if (null !== u.incidentClass.attrsValidationRules) {
                var h = u.incidentClass.attrsValidationMethod(u.attrs);
                h.length > 0 && l.concat(h.errors);
              }
              var p = re.validateProps(
                u.props,
                u.incidentClass.propsValidationRules,
                u.incidentClass
              );
              !1 === p.result && l.concat(p.errors);
            }
            return l.length > 0
              ? g(r, { result: !1, errors: l })
              : ((r.dynamicDurationValue = null), r);
          }
          return (
            c(n, [
              {
                key: "incidents",
                get: function () {
                  return null;
                },
              },
              {
                key: "duration",
                get: function () {
                  return null !== this.dynamicDurationValue
                    ? this.dynamicDurationValue
                    : "dynamic";
                },
              },
              {
                key: "addIncident",
                value: function () {
                  var e =
                    "Combos don't accept any Incidents to be added on their timeline externally";
                  return re.error(e), { result: !1, errors: [e] };
                },
              },
              {
                key: "moveIncident",
                value: function () {
                  var e =
                    "Combo Incidents don't allow external manipulation of their Incidents";
                  return re.error(e), { result: !1, errors: [e] };
                },
              },
              {
                key: "removeIncident",
                value: function () {
                  var e =
                    "Combo Incidents don't allow external manipulation of their Incidents";
                  return re.error(e), { result: !1, errors: [e] };
                },
              },
              {
                key: "handleCheckAddition",
                value: function (e, t) {
                  return !1;
                },
              },
              {
                key: "handleCheckMove",
                value: function (e, t) {
                  return !1;
                },
              },
              {
                key: "handleCheckDeletion",
                value: function (e, t) {
                  return !1;
                },
              },
              {
                key: "handleCheckResize",
                value: function (e, t) {
                  return !1;
                },
              },
              {
                key: "exportDefinition",
                value: function () {
                  var e = p(
                    p({}, this.attrs),
                    {},
                    {
                      incidents: (function e(t) {
                        for (var n = [], i = 0; i < t.length; i++) {
                          var r = t[i],
                            o = r.attrs;
                          "Combo" === r.incidentClass.ClassName &&
                            (o = p(
                              p({}, o),
                              {},
                              { incidents: e(o.incidents) }
                            )),
                            n.push({
                              ClassName:
                                r.incidentClass.ClassName ||
                                r.incidentClass.targetClass.ClassName,
                              plugin_npm_name:
                                r.incidentClass.plugin_npm_name ||
                                r.incidentClass.targetClass.plugin_npm_name,
                              version:
                                r.incidentClass.version ||
                                r.incidentClass.targetClass.version,
                              attrs: o,
                              props: JSON.parse(JSON.stringify(r.props)),
                              position: r.position,
                            });
                        }
                        return n;
                      })(this.attrs.incidents),
                    }
                  );
                  return {
                    ClassName: this.constructor.ClassName,
                    version: this.constructor.version,
                    plugin:
                      this.constructor.plugin ||
                      this.constructor.plugin_npm_name,
                    plugin_npm_name: this.constructor.plugin_npm_name,
                    attrs: e,
                    props: JSON.parse(JSON.stringify(this.props)),
                    incidents: {},
                    duration: this.duration,
                  };
                },
              },
              {
                key: "exportLiveDefinition",
                value: function () {
                  var e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    t = this.attrs;
                  null !== this.incidents &&
                    (t = p(p({}, this.attrs), {}, { incidents: void 0 }));
                  var n = JSON.parse(JSON.stringify(this.props));
                  !1 === e && delete n.id;
                  var i = {
                    Class: this.constructor,
                    attrs: t,
                    props: n,
                    incidents: {},
                  };
                  return i;
                },
              },
            ]),
            n
          );
        })(or);
      u(Fr, "isCombo", !0),
        u(Fr, "ClassName", "Combo"),
        u(Fr, "attrsValidationRules", null),
        u(Fr, "propsValidationRules", Ui);
      var $r = I(
          null,
          function (e, t) {
            var n = (function (t) {
              d(i, t);
              var n = v(i);
              function i(t, r) {
                var o;
                a(this, i),
                  void 0 === r && ((r = t), (t = {})),
                  (o = n.call(this, r)),
                  e(m(o));
                var s = re.validateProps(r, Ni, o.constructor, o.id);
                return s.result
                  ? ((o.inheritedSelector = null),
                    (o.attrs = t),
                    Object.prototype.hasOwnProperty.call(r, "duration") ||
                      (r.duration = 0),
                    (o.props = r),
                    (o.attributesStaggers = []),
                    (o.propsStaggers = []),
                    o.setupDynamicValues(),
                    (o.dynamicDurationValue = null),
                    (o.passive = !1),
                    o)
                  : g(o, s);
              }
              return i;
            })(t);
            return {
              F: n,
              d: [
                {
                  kind: "field",
                  static: !0,
                  key: "Incident",
                  value: function () {
                    return Te;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "plugin_npm_name",
                  value: function () {
                    return "motor-cortex-js-attribute";
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "version",
                  value: function () {
                    return ze;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "Channel",
                  value: function () {
                    return Or;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "ClassName",
                  value: function () {
                    return "Incident";
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "attrsValidationRules",
                  value: function () {
                    return null;
                  },
                },
                {
                  kind: "field",
                  static: !0,
                  key: "propsValidationRules",
                  value: function () {
                    return Ni;
                  },
                },
                {
                  kind: "method",
                  decorators: [Ji],
                  key: "editAttributes",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Ki],
                  key: "editProperties",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Xi],
                  key: "resize",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [qi],
                  key: "clone",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Qi],
                  key: "selector",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [Yi],
                  key: "getElements",
                  value: function () {},
                },
                {
                  kind: "method",
                  decorators: [rr],
                  key: "setupDynamicValues",
                  value: function () {},
                },
                {
                  kind: "get",
                  key: "duration",
                  value: function () {
                    return null !== this.dynamicDurationValue
                      ? this.dynamicDurationValue
                      : this.propsStaggers.length > 0
                      ? "dynamic"
                      : b(f(n.prototype), "duration", this);
                  },
                },
                {
                  kind: "set",
                  key: "duration",
                  value: function (e) {
                    if (this.propsStaggers.length > 0) {
                      for (var t = 0; t < this.propsStaggers.length; t++)
                        if ("repeats" !== this.propsStaggers[t].path) {
                          var i = this.propsStaggers[t].stagger.resize(
                            e / this.duration
                          );
                          ie(this.props, this.propsStaggers[t].path, i);
                        }
                      this.dynamicDurationValue = e;
                    } else x(f(n.prototype), "duration", e, this, !0);
                  },
                },
                {
                  kind: "method",
                  key: "manageEditAttrProps",
                  value: function (e, t) {
                    var n = this.parentNode,
                      i = n.getLeafPosition(this.id);
                    n.removeIncident(this.id);
                    var r = JSON.parse(JSON.stringify(this[t]));
                    this[t] = e;
                    var o = n.addIncident(this, i);
                    return (
                      o.result ||
                        (n.removeIncident(this.id),
                        (this[t] = r),
                        n.addIncident(this, i)),
                      o
                    );
                  },
                },
                {
                  kind: "method",
                  key: "detachFromParent",
                  value: function () {
                    b(f(n.prototype), "detachFromParent", this).call(this),
                      (this.inheritedSelector = null);
                  },
                },
                {
                  kind: "method",
                  key: "handleCheckForInvalidSelectors",
                  value: function () {
                    var e = this.selector();
                    return null === e
                      ? {
                          id: this.id,
                          ClassName: this.constructor.ClassName,
                          plugin_npm_name: this.constructor.plugin_npm_name,
                          error: "null selector",
                        }
                      : "&" === e.charAt(0)
                      ? {
                          id: this.id,
                          ClassName: this.constructor.ClassName,
                          plugin_npm_name: this.constructor.plugin_npm_name,
                          error: "relative selector with no inherited selector",
                          selector: e,
                        }
                      : this.bypass();
                  },
                },
                {
                  kind: "method",
                  key: "exportDefinition",
                  value: function () {
                    return {
                      ClassName: this.constructor.ClassName,
                      version: this.constructor.version,
                      plugin:
                        this.constructor.plugin ||
                        this.constructor.plugin_npm_name,
                      plugin_npm_name: this.constructor.plugin_npm_name,
                      attrs: this.attrs,
                      props: this.props,
                    };
                  },
                },
                {
                  kind: "method",
                  key: "exportLiveDefinition",
                  value: function () {
                    var e =
                        !(arguments.length > 0 && void 0 !== arguments[0]) ||
                        arguments[0],
                      t = JSON.parse(JSON.stringify(this.props));
                    return (
                      !1 === e && delete t.id,
                      {
                        Class: this.constructor,
                        attrs: JSON.parse(JSON.stringify(this.attrs)),
                        props: t,
                      }
                    );
                  },
                },
              ],
            };
          },
          he
        ),
        zr = (function () {
          var e = function (e, t) {
              return e.startsWith("on") && "function" == typeof t;
            },
            t = function (e) {
              return e.substr(2).toLowerCase();
            },
            n = function (e) {
              return "function" == typeof e;
            };
          function i(e) {
            var t = document.createElement("div");
            return (t.innerHTML = e.trim()), t.firstChild;
          }
          function r(n, i) {
            if (!i) return n;
            for (var r = 0, o = Object.entries(i); r < o.length; r++) {
              var s = k(o[r], 2),
                a = s[0],
                l = s[1];
              if (e(a)) n.addEventListener(t(a), l);
              else if ("class" === a) {
                var c,
                  u = Array.isArray(l) ? l : l.split(" ");
                (c = n.classList).add.apply(c, E(u));
              } else n.setAttribute(a, l);
            }
            return n;
          }
          return function (e, t) {
            for (
              var o = arguments.length, a = new Array(o > 2 ? o - 2 : 0), l = 2;
              l < o;
              l++
            )
              a[l - 2] = arguments[l];
            if (n(e)) return e(p(p({}, t), {}, { children: a }));
            var c = r(document.createElement(e), t);
            return (
              a.flat().forEach(function (e) {
                if (!1 !== e) {
                  var t = "object" === s(e) ? e : i(e.toString());
                  null !== t && c.appendChild(t);
                }
              }),
              c.outerHTML
            );
          };
        })(),
        Hr = (function () {
          function e(t) {
            if (
              (a(this, e), !Object.prototype.hasOwnProperty.call(t, "incident"))
            )
              return (
                re.error(
                  'Journey constructor expects an Incident on its properties on the key "incident"'
                ),
                !1
              );
            (this.memory = t.capsuleMemory),
              (this.stations = []),
              (this.incident = t.incident),
              (this.startMillisecond =
                1 * this.incident.runTimeInfo.currentMillisecond),
              (this.startState = "".concat(this.incident.runTimeInfo.state)),
              this.incident.stop();
          }
          return (
            c(e, [
              {
                key: "station",
                value: function (e) {
                  this.stations.length > 0 &&
                    this.stations[this.stations.length - 1],
                    this.stations.push(e),
                    this.incident.playableProgress(
                      e / this.incident.duration,
                      e
                    );
                },
              },
              {
                key: "destination",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null;
                  null != e
                    ? this.station(e)
                    : (e = this.stations[this.stations.length - 1]),
                    this.incident.playableProgress(
                      e / this.incident.duration,
                      e
                    ),
                    "playing" === this.startState ||
                    ("blocked" === this.startState &&
                      "playing" === this.incident.statusBeforeBlock)
                      ? this.incident.play()
                      : e >= this.incident.duration
                      ? this.incident.complete()
                      : this.incident.arm(),
                    this.memory.push(this.exportJourneyLog);
                },
              },
              {
                key: "exportJourneyLog",
                value: function () {
                  return {
                    startMillisecond: this.startMillisecond,
                    startState: this.startState,
                    stations: this.stations,
                  };
                },
              },
            ]),
            e
          );
        })(),
        Ur = (function () {
          function e() {
            a(this, e), (this.memory = []);
          }
          return (
            c(e, [
              {
                key: "startJourney",
                value: function (e) {
                  return e
                    ? new Hr({ incident: e, capsuleMemory: this.memory })
                    : (re.error(
                        "startJourney expects an Incident as an argument"
                      ),
                      !1);
                },
              },
            ]),
            e
          );
        })(),
        Wr = (function (e) {
          d(n, e);
          var t = v(n);
          function n(e) {
            var i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            a(this, n);
            var r = { audio: "only", audioSources: e };
            return null !== i && (r.id = i), t.call(this, r);
          }
          return n;
        })(Vr);
      function qr(e) {
        if (
          (Object.prototype.hasOwnProperty.call(e, "default") &&
            (e = e.default),
          Object.prototype.hasOwnProperty.call(e, "npm_name") ||
            (e.npm_name = "plugin_".concat(new Date().getTime())),
          !(function (e) {
            Object.prototype.hasOwnProperty.call(e, "default") &&
              (e = e.default);
            var t = e.npm_name,
              n = !0;
            if (
              (Object.prototype.hasOwnProperty.call(e, "name") ||
                re.notice(
                  "Notice on plugin ".concat(
                    t,
                    '. A plugin is always good to have its name on\n        its main.js file, under the key "name". It\'s missing from this plugin'
                  )
                ),
              Object.prototype.hasOwnProperty.call(e, "incidents") ||
                Object.prototype.hasOwnProperty.call(e, "Clip") ||
                (re.error(
                  "Error on plugin ".concat(
                    t,
                    '. A plugin must expose at least one Incident or a Clip.\n        Exposed plugin Incidents should be defined on the "incidents" key of the main.js file while Clips on the "Clip".'
                  )
                ),
                (n = !1)),
              Object.prototype.hasOwnProperty.call(e, "incidents") &&
                !Array.isArray(e.incidents))
            )
              re.error(
                "Error on plugin ".concat(
                  t,
                  '. thePlugin exposed Incidents are defined on the "incidents" key of the main.js file in array format.\n        Please refer to the documentation'
                )
              ),
                (n = !1);
            else if (Object.prototype.hasOwnProperty.call(e, "incidents"))
              for (var i = 0; i < e.incidents.length; i++) {
                var r = e.incidents[i];
                "object" === s(r.exportable) &&
                  Object.prototype.hasOwnProperty.call(
                    r.exportable,
                    "default"
                  ) &&
                  (r.exportable = r.exportable.default);
                var o = r.exportable.prototype;
                o instanceof or ||
                  o instanceof Vr ||
                  o instanceof Te ||
                  o instanceof br ||
                  (re.error(
                    "Error on plugin "
                      .concat(
                        t,
                        ". Exportable Incidents by any plugin must extend one of the base classes provided by MotorCortex.\n                "
                      )
                      .concat(
                        r.exportable.constructor.name,
                        " doesn't.\n                Please refer to documentation"
                      )
                  ),
                  (n = !1)),
                  o instanceof Vr &&
                    (Object.prototype.hasOwnProperty.call(r, "originalDims")
                      ? !1 === K(r.originalDims).result &&
                        (re.error(
                          "Error on plugin "
                            .concat(
                              t,
                              ". Invalid originalDims value passed on "
                            )
                            .concat(r.name)
                        ),
                        (n = !1))
                      : re.log(
                          "Warning on plugin ".concat(
                            t,
                            '. It\'s always good to provide originalDims\n            when exposing Incidents extending DOMClip. By defining their original dims the users\n            of your plugin will be able to define the desired dimensions of your Incident by\n            the "containerParams object"'
                          )
                        )),
                  Object.prototype.hasOwnProperty.call(r, "name") ||
                    (re.error(
                      "Error on plugin ".concat(
                        t,
                        '. Exportable Incidents by any plugin must have the "name" key which defines the name of the exported Incident.\n                Please refer to documentation'
                      )
                    ),
                    (n = !1));
              }
            return n;
          })(e))
        )
          return !1;
        var t = {};
        if (Object.prototype.hasOwnProperty.call(e, "Clip"))
          if (Object.prototype.hasOwnProperty.call(e.Clip, "exportable")) {
            var n,
              i,
              r,
              o =
                ((i = n = (function (e) {
                  d(n, e);
                  var t = v(n);
                  function n() {
                    return a(this, n), t.apply(this, arguments);
                  }
                  return n;
                })(Vr)),
                u(n, "Incident", e.Clip.exportable),
                u(n, "plugin", e.npm_name),
                u(n, "version", e.version || "*"),
                u(n, "audio", e.audio || "off"),
                u(n, "customClip", !0),
                i);
            Object.prototype.hasOwnProperty.call(
              e.Clip,
              "attributesValidationRules"
            ) && (r = Si.compile(e.Clip.attributesValidationRules)),
              (t.Clip = function t(n, i) {
                a(this, t);
                var s,
                  l = n,
                  c = i;
                if (
                  (void 0 === i && ((l = {}), (c = n)),
                  Object.prototype.hasOwnProperty.call(
                    e.Clip,
                    "attributesValidationRules"
                  ))
                ) {
                  var u = r(l);
                  if (u.length > 0) {
                    for (
                      var h = "Error on plugin's \"".concat(
                          e.npm_name,
                          '" Clip instantiation. Errors:'
                        ),
                        p = 0;
                      p < u.length;
                      p++
                    )
                      h += "\n - "
                        .concat(u[p].message, ". ")
                        .concat(u[p].actual, " provided");
                    return (
                      re.error(h), re.log("breaking"), { result: !1, errors: u }
                    );
                  }
                  re.log("instantiating"),
                    ((s = new o(l, c)).attrsValidationRules =
                      e.Clip.attributesValidationRules),
                    (s.attrsValidationMethod = r);
                } else
                  re.log("instantiating"),
                    ((s = new o(l, c)).attrsValidationRules = null),
                    re.warning(
                      "It's always good to provide attributesValidationRules to the exported incidents. "
                        .concat(e.npm_name, ".")
                        .concat(s.constructor.name, " doesn't provide it")
                    );
                return s;
              });
          } else {
            var l,
              c,
              h =
                ((c = l = (function (e) {
                  d(n, e);
                  var t = v(n);
                  function n() {
                    return a(this, n), t.apply(this, arguments);
                  }
                  return n;
                })(Vr)),
                u(l, "Incident", e.Clip),
                u(l, "plugin", e.npm_name),
                u(l, "version", e.version || "*"),
                u(l, "audio", e.audio || "off"),
                u(l, "customClip", !0),
                c);
            re.warning(
              "It's always good to provide attributesValidationRules to the exported incidents. ".concat(
                e.npm_name,
                ".Clip doesn't provide it"
              )
            ),
              (t.Clip = h);
          }
        var p = Or;
        if (
          (Object.prototype.hasOwnProperty.call(e, "compositeAttributes") &&
            (p = (function (t) {
              d(i, t);
              var n = v(i);
              function i(t) {
                return (
                  a(this, i),
                  (t.comboAttributes = e.compositeAttributes),
                  n.call(this, t)
                );
              }
              return i;
            })(Or)),
          Object.prototype.hasOwnProperty.call(e, "incidents"))
        )
          for (
            var f = function (n) {
                var i = e.incidents[n].exportable,
                  r = null,
                  o = null,
                  s = !1;
                if (
                  Object.prototype.hasOwnProperty.call(
                    e.incidents[n],
                    "attributesValidationRules"
                  )
                ) {
                  s = !0;
                  var l = JSON.parse(
                    JSON.stringify(e.incidents[n].attributesValidationRules)
                  );
                  Object.prototype.hasOwnProperty.call(
                    e.incidents[n].attributesValidationRules,
                    "animatedAttrs"
                  ) &&
                    (l.initialValues = re.buildInitialValuesValidationRules(
                      l.animatedAttrs
                    )),
                    (o = l),
                    (r = Si.compile(l));
                }
                var c,
                  h,
                  f = void 0;
                if (i.prototype instanceof Te)
                  (h = c = (function (e) {
                    d(n, e);
                    var t = v(n);
                    function n() {
                      return a(this, n), t.apply(this, arguments);
                    }
                    return n;
                  })($r)),
                    u(c, "Incident", i),
                    u(c, "plugin_npm_name", e.npm_name),
                    u(c, "plugin", e.npm_name),
                    u(c, "version", e.version || "*"),
                    u(c, "ClassName", e.incidents[n].name),
                    u(c, "Channel", p),
                    u(c, "audio", e.audio ? e.audio : "off"),
                    u(c, "attrsValidationRules", o),
                    u(c, "attrsValidationMethod", r),
                    (f = h);
                else if (i.prototype instanceof br) {
                  var m, g;
                  (g = m = (function (e) {
                    d(n, e);
                    var t = v(n);
                    function n() {
                      return a(this, n), t.apply(this, arguments);
                    }
                    return n;
                  })($r)),
                    u(m, "Incident", i),
                    u(m, "plugin_npm_name", "@kissmybutton/media-playback"),
                    u(m, "plugin", e.npm_name),
                    u(m, "version", e.version || "*"),
                    u(m, "ClassName", e.incidents[n].name),
                    u(m, "Channel", yr),
                    u(m, "audio", e.audio ? e.audio : "off"),
                    u(m, "attrsValidationRules", o),
                    u(m, "attrsValidationMethod", r),
                    (f = g);
                } else if (i.prototype instanceof Vr) {
                  var y, b;
                  (b = y = (function (e) {
                    d(n, e);
                    var t = v(n);
                    function n() {
                      return a(this, n), t.apply(this, arguments);
                    }
                    return n;
                  })(i)),
                    u(y, "plugin", e.npm_name),
                    u(y, "version", e.version || "*"),
                    u(y, "ClassName", e.incidents[n].name),
                    u(y, "audio", e.audio ? e.audio : "on"),
                    u(
                      y,
                      "originalDims",
                      K(e.incidents[n].originalDims).analysis
                    ),
                    u(y, "attrsValidationRules", o),
                    u(y, "attrsValidationMethod", r),
                    u(y, "isAnimation", !0),
                    (f = b);
                } else if (i.prototype instanceof or) {
                  var w, x;
                  (x = w = (function (e) {
                    d(n, e);
                    var t = v(n);
                    function n() {
                      return a(this, n), t.apply(this, arguments);
                    }
                    return n;
                  })(i)),
                    u(w, "plugin", e.npm_name),
                    u(w, "version", e.version || "*"),
                    u(w, "ClassName", e.incidents[n].name),
                    u(w, "attrsValidationRules", o),
                    u(w, "attrsValidationMethod", r),
                    (f = x);
                }
                Object.defineProperty(t, e.incidents[n].name, {
                  enumerable: !0,
                  get: function () {
                    var t = function t(i, o) {
                      var l;
                      if ((a(this, t), s)) {
                        var c = r(i);
                        if (c.length > 0) {
                          for (
                            var u = "Error on plugin's \""
                                .concat(e.npm_name, '" "')
                                .concat(
                                  e.incidents[n].name,
                                  '" instantiation. Errors:'
                                ),
                              h = 0;
                            h < c.length;
                            h++
                          )
                            u += "\n - "
                              .concat(c[h].message, ". ")
                              .concat(c[h].actual, " provided");
                          return re.error(u), { result: !1, errors: c };
                        }
                      }
                      return (
                        (l = new f(i, o)).result &&
                          !s &&
                          re.warning(
                            "It's always good to provide attributesValidationRules to the exported incidents. ".concat(
                              e.npm_name,
                              " doesn't provide it"
                            )
                          ),
                        l
                      );
                    };
                    return u(t, "targetClass", f), t;
                  },
                });
              },
              m = 0;
            m < e.incidents.length;
            m++
          )
            f(m);
        return t;
      }
      window.fs = {};
      var Gr = { createDOMElement: zr, easings: Ae, clipFromDefinition: Wi },
        Jr = qr(wr),
        Kr = Jr.Clip,
        Yr = Jr.AudioEffect,
        Xr = Jr.AudioPlayback,
        Qr = Wr,
        Zr = {
          version: ze,
          Effect: Te,
          utils: Gr,
          HTMLClip: Vr,
          Group: or,
          Combo: Fr,
          BrowserClip: Lr,
          loadPlugin: qr,
          AudioClip: Qr,
          CoreAudioClip: Kr,
          AudioPlayback: Xr,
          AudioEffect: Yr,
          MediaPlayback: br,
          TimeCapsule: Ur,
        };
      (e.AudioClip = Qr),
        (e.AudioEffect = Yr),
        (e.AudioPlayback = Xr),
        (e.BrowserClip = Lr),
        (e.Combo = Fr),
        (e.CoreAudioClip = Kr),
        (e.Effect = Te),
        (e.Group = or),
        (e.HTMLClip = Vr),
        (e.MediaPlayback = br),
        (e.TimeCapsule = Ur),
        (e.default = Zr),
        (e.loadPlugin = qr),
        (e.utils = Gr),
        Object.defineProperty(e, "__esModule", { value: !0 });
    })(t, n(36), n(37));
  },
  function (e, t, n) {
    "use strict";
    var i = n(13),
      r =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
    e.exports = h;
    var o = Object.create(n(9));
    o.inherits = n(1);
    var s = n(19),
      a = n(16);
    o.inherits(h, s);
    for (var l = r(a.prototype), c = 0; c < l.length; c++) {
      var u = l[c];
      h.prototype[u] || (h.prototype[u] = a.prototype[u]);
    }
    function h(e) {
      if (!(this instanceof h)) return new h(e);
      s.call(this, e),
        a.call(this, e),
        e && !1 === e.readable && (this.readable = !1),
        e && !1 === e.writable && (this.writable = !1),
        (this.allowHalfOpen = !0),
        e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
        this.once("end", p);
    }
    function p() {
      this.allowHalfOpen || this._writableState.ended || i.nextTick(d, this);
    }
    function d(e) {
      e.end();
    }
    Object.defineProperty(h.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._writableState.highWaterMark;
      },
    }),
      Object.defineProperty(h.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            this._readableState.destroyed &&
            this._writableState.destroyed
          );
        },
        set: function (e) {
          void 0 !== this._readableState &&
            void 0 !== this._writableState &&
            ((this._readableState.destroyed = e),
            (this._writableState.destroyed = e));
        },
      }),
      (h.prototype._destroy = function (e, t) {
        this.push(null), this.end(), i.nextTick(t, e);
      });
  },
  function (e, t, n) {
    "use strict";
    var i = {};
    function r(e, t, n) {
      n || (n = Error);
      var r = (function (e) {
        var n, i;
        function r(n, i, r) {
          return (
            e.call(
              this,
              (function (e, n, i) {
                return "string" == typeof t ? t : t(e, n, i);
              })(n, i, r)
            ) || this
          );
        }
        return (
          (i = e),
          ((n = r).prototype = Object.create(i.prototype)),
          (n.prototype.constructor = n),
          (n.__proto__ = i),
          r
        );
      })(n);
      (r.prototype.name = n.name), (r.prototype.code = e), (i[e] = r);
    }
    function o(e, t) {
      if (Array.isArray(e)) {
        var n = e.length;
        return (
          (e = e.map(function (e) {
            return String(e);
          })),
          n > 2
            ? "one of "
                .concat(t, " ")
                .concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1]
            : 2 === n
            ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1])
            : "of ".concat(t, " ").concat(e[0])
        );
      }
      return "of ".concat(t, " ").concat(String(e));
    }
    r(
      "ERR_INVALID_OPT_VALUE",
      function (e, t) {
        return 'The value "' + t + '" is invalid for option "' + e + '"';
      },
      TypeError
    ),
      r(
        "ERR_INVALID_ARG_TYPE",
        function (e, t, n) {
          var i, r, s, a;
          if (
            ("string" == typeof t &&
            ((r = "not "), t.substr(!s || s < 0 ? 0 : +s, r.length) === r)
              ? ((i = "must not be"), (t = t.replace(/^not /, "")))
              : (i = "must be"),
            (function (e, t, n) {
              return (
                (void 0 === n || n > e.length) && (n = e.length),
                e.substring(n - t.length, n) === t
              );
            })(e, " argument"))
          )
            a = "The ".concat(e, " ").concat(i, " ").concat(o(t, "type"));
          else {
            var l = (function (e, t, n) {
              return (
                "number" != typeof n && (n = 0),
                !(n + t.length > e.length) && -1 !== e.indexOf(t, n)
              );
            })(e, ".")
              ? "property"
              : "argument";
            a = 'The "'
              .concat(e, '" ')
              .concat(l, " ")
              .concat(i, " ")
              .concat(o(t, "type"));
          }
          return (a += ". Received type ".concat(typeof n));
        },
        TypeError
      ),
      r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
      r("ERR_METHOD_NOT_IMPLEMENTED", function (e) {
        return "The " + e + " method is not implemented";
      }),
      r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
      r("ERR_STREAM_DESTROYED", function (e) {
        return "Cannot call " + e + " after a stream was destroyed";
      }),
      r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
      r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
      r("ERR_STREAM_WRITE_AFTER_END", "write after end"),
      r(
        "ERR_STREAM_NULL_VALUES",
        "May not write null values to stream",
        TypeError
      ),
      r(
        "ERR_UNKNOWN_ENCODING",
        function (e) {
          return "Unknown encoding: " + e;
        },
        TypeError
      ),
      r(
        "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
        "stream.unshift() after end event"
      ),
      (e.exports.codes = i);
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var i =
        Object.keys ||
        function (e) {
          var t = [];
          for (var n in e) t.push(n);
          return t;
        };
      e.exports = c;
      var r = n(25),
        o = n(29);
      n(1)(c, r);
      for (var s = i(o.prototype), a = 0; a < s.length; a++) {
        var l = s[a];
        c.prototype[l] || (c.prototype[l] = o.prototype[l]);
      }
      function c(e) {
        if (!(this instanceof c)) return new c(e);
        r.call(this, e),
          o.call(this, e),
          (this.allowHalfOpen = !0),
          e &&
            (!1 === e.readable && (this.readable = !1),
            !1 === e.writable && (this.writable = !1),
            !1 === e.allowHalfOpen &&
              ((this.allowHalfOpen = !1), this.once("end", u)));
      }
      function u() {
        this._writableState.ended || t.nextTick(h, this);
      }
      function h(e) {
        e.end();
      }
      Object.defineProperty(c.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function () {
          return this._writableState.highWaterMark;
        },
      }),
        Object.defineProperty(c.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(c.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(c.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              this._readableState.destroyed &&
              this._writableState.destroyed
            );
          },
          set: function (e) {
            void 0 !== this._readableState &&
              void 0 !== this._writableState &&
              ((this._readableState.destroyed = e),
              (this._writableState.destroyed = e));
          },
        });
    }.call(this, n(0)));
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var n,
        i = "object" == typeof Reflect ? Reflect : null,
        r =
          i && "function" == typeof i.apply
            ? i.apply
            : function (e, t, n) {
                return Function.prototype.apply.call(e, t, n);
              };
      n =
        i && "function" == typeof i.ownKeys
          ? i.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var o =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
      function s() {
        s.init.call(this);
      }
      (e.exports = s),
        (e.exports.once = function (e, n) {
          return new t(function (t, i) {
            function r() {
              void 0 !== o && e.removeListener("error", o),
                t([].slice.call(arguments));
            }
            var o;
            "error" !== n &&
              ((o = function (t) {
                e.removeListener(n, r), i(t);
              }),
              e.once("error", o)),
              e.once(n, r);
          });
        }),
        (s.EventEmitter = s),
        (s.prototype._events = void 0),
        (s.prototype._eventsCount = 0),
        (s.prototype._maxListeners = void 0);
      var a = 10;
      function l(e) {
        if ("function" != typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function c(e) {
        return void 0 === e._maxListeners
          ? s.defaultMaxListeners
          : e._maxListeners;
      }
      function u(e, t, n, i) {
        var r, o, s, a;
        if (
          (l(n),
          void 0 === (o = e._events)
            ? ((o = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== o.newListener &&
                (e.emit("newListener", t, n.listener ? n.listener : n),
                (o = e._events)),
              (s = o[t])),
          void 0 === s)
        )
          (s = o[t] = n), ++e._eventsCount;
        else if (
          ("function" == typeof s
            ? (s = o[t] = i ? [n, s] : [s, n])
            : i
            ? s.unshift(n)
            : s.push(n),
          (r = c(e)) > 0 && s.length > r && !s.warned)
        ) {
          s.warned = !0;
          var u = new Error(
            "Possible EventEmitter memory leak detected. " +
              s.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (u.name = "MaxListenersExceededWarning"),
            (u.emitter = e),
            (u.type = t),
            (u.count = s.length),
            (a = u),
            console && console.warn && console.warn(a);
        }
        return e;
      }
      function h() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function p(e, t, n) {
        var i = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
          r = h.bind(i);
        return (r.listener = n), (i.wrapFn = r), r;
      }
      function d(e, t, n) {
        var i = e._events;
        if (void 0 === i) return [];
        var r = i[t];
        return void 0 === r
          ? []
          : "function" == typeof r
          ? n
            ? [r.listener || r]
            : [r]
          : n
          ? (function (e) {
              for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
              return t;
            })(r)
          : m(r, r.length);
      }
      function f(e) {
        var t = this._events;
        if (void 0 !== t) {
          var n = t[e];
          if ("function" == typeof n) return 1;
          if (void 0 !== n) return n.length;
        }
        return 0;
      }
      function m(e, t) {
        for (var n = new Array(t), i = 0; i < t; ++i) n[i] = e[i];
        return n;
      }
      Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return a;
        },
        set: function (e) {
          if ("number" != typeof e || e < 0 || o(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          a = e;
        },
      }),
        (s.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (s.prototype.setMaxListeners = function (e) {
          if ("number" != typeof e || e < 0 || o(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (s.prototype.getMaxListeners = function () {
          return c(this);
        }),
        (s.prototype.emit = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]);
          var i = "error" === e,
            o = this._events;
          if (void 0 !== o) i = i && void 0 === o.error;
          else if (!i) return !1;
          if (i) {
            var s;
            if ((t.length > 0 && (s = t[0]), s instanceof Error)) throw s;
            var a = new Error(
              "Unhandled error." + (s ? " (" + s.message + ")" : "")
            );
            throw ((a.context = s), a);
          }
          var l = o[e];
          if (void 0 === l) return !1;
          if ("function" == typeof l) r(l, this, t);
          else {
            var c = l.length,
              u = m(l, c);
            for (n = 0; n < c; ++n) r(u[n], this, t);
          }
          return !0;
        }),
        (s.prototype.addListener = function (e, t) {
          return u(this, e, t, !1);
        }),
        (s.prototype.on = s.prototype.addListener),
        (s.prototype.prependListener = function (e, t) {
          return u(this, e, t, !0);
        }),
        (s.prototype.once = function (e, t) {
          return l(t), this.on(e, p(this, e, t)), this;
        }),
        (s.prototype.prependOnceListener = function (e, t) {
          return l(t), this.prependListener(e, p(this, e, t)), this;
        }),
        (s.prototype.removeListener = function (e, t) {
          var n, i, r, o, s;
          if ((l(t), void 0 === (i = this._events))) return this;
          if (void 0 === (n = i[e])) return this;
          if (n === t || n.listener === t)
            0 == --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete i[e],
                i.removeListener &&
                  this.emit("removeListener", e, n.listener || t));
          else if ("function" != typeof n) {
            for (r = -1, o = n.length - 1; o >= 0; o--)
              if (n[o] === t || n[o].listener === t) {
                (s = n[o].listener), (r = o);
                break;
              }
            if (r < 0) return this;
            0 === r
              ? n.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(n, r),
              1 === n.length && (i[e] = n[0]),
              void 0 !== i.removeListener &&
                this.emit("removeListener", e, s || t);
          }
          return this;
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.removeAllListeners = function (e) {
          var t, n, i;
          if (void 0 === (n = this._events)) return this;
          if (void 0 === n.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== n[e] &&
                  (0 == --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete n[e]),
              this
            );
          if (0 === arguments.length) {
            var r,
              o = Object.keys(n);
            for (i = 0; i < o.length; ++i)
              "removeListener" !== (r = o[i]) && this.removeAllListeners(r);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" == typeof (t = n[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
          return this;
        }),
        (s.prototype.listeners = function (e) {
          return d(this, e, !0);
        }),
        (s.prototype.rawListeners = function (e) {
          return d(this, e, !1);
        }),
        (s.listenerCount = function (e, t) {
          return "function" == typeof e.listenerCount
            ? e.listenerCount(t)
            : f.call(e, t);
        }),
        (s.prototype.listenerCount = f),
        (s.prototype.eventNames = function () {
          return this._eventsCount > 0 ? n(this._events) : [];
        });
    }.call(this, n(11)));
  },
  function (e, t, n) {
    "use strict";
    (function (e) {
      /*!
       * The buffer module from node.js, for the browser.
       *
       * @author   Feross Aboukhadijeh <http://feross.org>
       * @license  MIT
       */
      var i = n(38),
        r = n(39),
        o = n(20);
      function s() {
        return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function a(e, t) {
        if (s() < t) throw new RangeError("Invalid typed array length");
        return (
          l.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = l.prototype)
            : (null === e && (e = new l(t)), (e.length = t)),
          e
        );
      }
      function l(e, t, n) {
        if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
          return new l(e, t, n);
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return h(this, e);
        }
        return c(this, e, t, n);
      }
      function c(e, t, n, i) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, n, i) {
              if ((t.byteLength, n < 0 || t.byteLength < n))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < n + (i || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === n && void 0 === i
                  ? new Uint8Array(t)
                  : void 0 === i
                  ? new Uint8Array(t, n)
                  : new Uint8Array(t, n, i);
              l.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = l.prototype)
                : (e = p(e, t));
              return e;
            })(e, t, n, i)
          : "string" == typeof t
          ? (function (e, t, n) {
              ("string" == typeof n && "" !== n) || (n = "utf8");
              if (!l.isEncoding(n))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var i = 0 | f(t, n),
                r = (e = a(e, i)).write(t, n);
              r !== i && (e = e.slice(0, r));
              return e;
            })(e, t, n)
          : (function (e, t) {
              if (l.isBuffer(t)) {
                var n = 0 | d(t.length);
                return 0 === (e = a(e, n)).length || t.copy(e, 0, 0, n), e;
              }
              if (t) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" != typeof t.length || (i = t.length) != i
                    ? a(e, 0)
                    : p(e, t);
                if ("Buffer" === t.type && o(t.data)) return p(e, t.data);
              }
              var i;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function u(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function h(e, t) {
        if ((u(t), (e = a(e, t < 0 ? 0 : 0 | d(t))), !l.TYPED_ARRAY_SUPPORT))
          for (var n = 0; n < t; ++n) e[n] = 0;
        return e;
      }
      function p(e, t) {
        var n = t.length < 0 ? 0 : 0 | d(t.length);
        e = a(e, n);
        for (var i = 0; i < n; i += 1) e[i] = 255 & t[i];
        return e;
      }
      function d(e) {
        if (e >= s())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              s().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function f(e, t) {
        if (l.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var n = e.length;
        if (0 === n) return 0;
        for (var i = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return n;
            case "utf8":
            case "utf-8":
            case void 0:
              return F(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * n;
            case "hex":
              return n >>> 1;
            case "base64":
              return $(e).length;
            default:
              if (i) return F(e).length;
              (t = ("" + t).toLowerCase()), (i = !0);
          }
      }
      function m(e, t, n) {
        var i = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
          return "";
        if ((n >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return T(this, t, n);
            case "utf8":
            case "utf-8":
              return O(this, t, n);
            case "ascii":
              return S(this, t, n);
            case "latin1":
            case "binary":
              return P(this, t, n);
            case "base64":
              return C(this, t, n);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return I(this, t, n);
            default:
              if (i) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (i = !0);
          }
      }
      function g(e, t, n) {
        var i = e[t];
        (e[t] = e[n]), (e[n] = i);
      }
      function v(e, t, n, i, r) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof n
            ? ((i = n), (n = 0))
            : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
          (n = +n),
          isNaN(n) && (n = r ? 0 : e.length - 1),
          n < 0 && (n = e.length + n),
          n >= e.length)
        ) {
          if (r) return -1;
          n = e.length - 1;
        } else if (n < 0) {
          if (!r) return -1;
          n = 0;
        }
        if (("string" == typeof t && (t = l.from(t, i)), l.isBuffer(t)))
          return 0 === t.length ? -1 : y(e, t, n, i, r);
        if ("number" == typeof t)
          return (
            (t &= 255),
            l.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? r
                ? Uint8Array.prototype.indexOf.call(e, t, n)
                : Uint8Array.prototype.lastIndexOf.call(e, t, n)
              : y(e, [t], n, i, r)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function y(e, t, n, i, r) {
        var o,
          s = 1,
          a = e.length,
          l = t.length;
        if (
          void 0 !== i &&
          ("ucs2" === (i = String(i).toLowerCase()) ||
            "ucs-2" === i ||
            "utf16le" === i ||
            "utf-16le" === i)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (a /= 2), (l /= 2), (n /= 2);
        }
        function c(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (r) {
          var u = -1;
          for (o = n; o < a; o++)
            if (c(e, o) === c(t, -1 === u ? 0 : o - u)) {
              if ((-1 === u && (u = o), o - u + 1 === l)) return u * s;
            } else -1 !== u && (o -= o - u), (u = -1);
        } else
          for (n + l > a && (n = a - l), o = n; o >= 0; o--) {
            for (var h = !0, p = 0; p < l; p++)
              if (c(e, o + p) !== c(t, p)) {
                h = !1;
                break;
              }
            if (h) return o;
          }
        return -1;
      }
      function b(e, t, n, i) {
        n = Number(n) || 0;
        var r = e.length - n;
        i ? (i = Number(i)) > r && (i = r) : (i = r);
        var o = t.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        i > o / 2 && (i = o / 2);
        for (var s = 0; s < i; ++s) {
          var a = parseInt(t.substr(2 * s, 2), 16);
          if (isNaN(a)) return s;
          e[n + s] = a;
        }
        return s;
      }
      function w(e, t, n, i) {
        return z(F(t, e.length - n), e, n, i);
      }
      function x(e, t, n, i) {
        return z(
          (function (e) {
            for (var t = [], n = 0; n < e.length; ++n)
              t.push(255 & e.charCodeAt(n));
            return t;
          })(t),
          e,
          n,
          i
        );
      }
      function k(e, t, n, i) {
        return x(e, t, n, i);
      }
      function E(e, t, n, i) {
        return z($(t), e, n, i);
      }
      function _(e, t, n, i) {
        return z(
          (function (e, t) {
            for (
              var n, i, r, o = [], s = 0;
              s < e.length && !((t -= 2) < 0);
              ++s
            )
              (n = e.charCodeAt(s)),
                (i = n >> 8),
                (r = n % 256),
                o.push(r),
                o.push(i);
            return o;
          })(t, e.length - n),
          e,
          n,
          i
        );
      }
      function C(e, t, n) {
        return 0 === t && n === e.length
          ? i.fromByteArray(e)
          : i.fromByteArray(e.slice(t, n));
      }
      function O(e, t, n) {
        n = Math.min(e.length, n);
        for (var i = [], r = t; r < n; ) {
          var o,
            s,
            a,
            l,
            c = e[r],
            u = null,
            h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (r + h <= n)
            switch (h) {
              case 1:
                c < 128 && (u = c);
                break;
              case 2:
                128 == (192 & (o = e[r + 1])) &&
                  (l = ((31 & c) << 6) | (63 & o)) > 127 &&
                  (u = l);
                break;
              case 3:
                (o = e[r + 1]),
                  (s = e[r + 2]),
                  128 == (192 & o) &&
                    128 == (192 & s) &&
                    (l = ((15 & c) << 12) | ((63 & o) << 6) | (63 & s)) >
                      2047 &&
                    (l < 55296 || l > 57343) &&
                    (u = l);
                break;
              case 4:
                (o = e[r + 1]),
                  (s = e[r + 2]),
                  (a = e[r + 3]),
                  128 == (192 & o) &&
                    128 == (192 & s) &&
                    128 == (192 & a) &&
                    (l =
                      ((15 & c) << 18) |
                      ((63 & o) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)) > 65535 &&
                    l < 1114112 &&
                    (u = l);
            }
          null === u
            ? ((u = 65533), (h = 1))
            : u > 65535 &&
              ((u -= 65536),
              i.push(((u >>> 10) & 1023) | 55296),
              (u = 56320 | (1023 & u))),
            i.push(u),
            (r += h);
        }
        return (function (e) {
          var t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          var n = "",
            i = 0;
          for (; i < t; )
            n += String.fromCharCode.apply(String, e.slice(i, (i += 4096)));
          return n;
        })(i);
      }
      (t.Buffer = l),
        (t.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return l.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (l.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (t.kMaxLength = s()),
        (l.poolSize = 8192),
        (l._augment = function (e) {
          return (e.__proto__ = l.prototype), e;
        }),
        (l.from = function (e, t, n) {
          return c(null, e, t, n);
        }),
        l.TYPED_ARRAY_SUPPORT &&
          ((l.prototype.__proto__ = Uint8Array.prototype),
          (l.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            l[Symbol.species] === l &&
            Object.defineProperty(l, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (l.alloc = function (e, t, n) {
          return (function (e, t, n, i) {
            return (
              u(t),
              t <= 0
                ? a(e, t)
                : void 0 !== n
                ? "string" == typeof i
                  ? a(e, t).fill(n, i)
                  : a(e, t).fill(n)
                : a(e, t)
            );
          })(null, e, t, n);
        }),
        (l.allocUnsafe = function (e) {
          return h(null, e);
        }),
        (l.allocUnsafeSlow = function (e) {
          return h(null, e);
        }),
        (l.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (l.compare = function (e, t) {
          if (!l.isBuffer(e) || !l.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var n = e.length, i = t.length, r = 0, o = Math.min(n, i);
            r < o;
            ++r
          )
            if (e[r] !== t[r]) {
              (n = e[r]), (i = t[r]);
              break;
            }
          return n < i ? -1 : i < n ? 1 : 0;
        }),
        (l.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (l.concat = function (e, t) {
          if (!o(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return l.alloc(0);
          var n;
          if (void 0 === t)
            for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
          var i = l.allocUnsafe(t),
            r = 0;
          for (n = 0; n < e.length; ++n) {
            var s = e[n];
            if (!l.isBuffer(s))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            s.copy(i, r), (r += s.length);
          }
          return i;
        }),
        (l.byteLength = f),
        (l.prototype._isBuffer = !0),
        (l.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (l.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (l.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (l.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? O(this, 0, e)
            : m.apply(this, arguments);
        }),
        (l.prototype.equals = function (e) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === l.compare(this, e);
        }),
        (l.prototype.inspect = function () {
          var e = "",
            n = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
              this.length > n && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (l.prototype.compare = function (e, t, n, i, r) {
          if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === i && (i = 0),
            void 0 === r && (r = this.length),
            t < 0 || n > e.length || i < 0 || r > this.length)
          )
            throw new RangeError("out of range index");
          if (i >= r && t >= n) return 0;
          if (i >= r) return -1;
          if (t >= n) return 1;
          if (this === e) return 0;
          for (
            var o = (r >>>= 0) - (i >>>= 0),
              s = (n >>>= 0) - (t >>>= 0),
              a = Math.min(o, s),
              c = this.slice(i, r),
              u = e.slice(t, n),
              h = 0;
            h < a;
            ++h
          )
            if (c[h] !== u[h]) {
              (o = c[h]), (s = u[h]);
              break;
            }
          return o < s ? -1 : s < o ? 1 : 0;
        }),
        (l.prototype.includes = function (e, t, n) {
          return -1 !== this.indexOf(e, t, n);
        }),
        (l.prototype.indexOf = function (e, t, n) {
          return v(this, e, t, n, !0);
        }),
        (l.prototype.lastIndexOf = function (e, t, n) {
          return v(this, e, t, n, !1);
        }),
        (l.prototype.write = function (e, t, n, i) {
          if (void 0 === t) (i = "utf8"), (n = this.length), (t = 0);
          else if (void 0 === n && "string" == typeof t)
            (i = t), (n = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(n)
                ? ((n |= 0), void 0 === i && (i = "utf8"))
                : ((i = n), (n = void 0));
          }
          var r = this.length - t;
          if (
            ((void 0 === n || n > r) && (n = r),
            (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          i || (i = "utf8");
          for (var o = !1; ; )
            switch (i) {
              case "hex":
                return b(this, e, t, n);
              case "utf8":
              case "utf-8":
                return w(this, e, t, n);
              case "ascii":
                return x(this, e, t, n);
              case "latin1":
              case "binary":
                return k(this, e, t, n);
              case "base64":
                return E(this, e, t, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return _(this, e, t, n);
              default:
                if (o) throw new TypeError("Unknown encoding: " + i);
                (i = ("" + i).toLowerCase()), (o = !0);
            }
        }),
        (l.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function S(e, t, n) {
        var i = "";
        n = Math.min(e.length, n);
        for (var r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]);
        return i;
      }
      function P(e, t, n) {
        var i = "";
        n = Math.min(e.length, n);
        for (var r = t; r < n; ++r) i += String.fromCharCode(e[r]);
        return i;
      }
      function T(e, t, n) {
        var i = e.length;
        (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
        for (var r = "", o = t; o < n; ++o) r += N(e[o]);
        return r;
      }
      function I(e, t, n) {
        for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2)
          r += String.fromCharCode(i[o] + 256 * i[o + 1]);
        return r;
      }
      function M(e, t, n) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > n)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function A(e, t, n, i, r, o) {
        if (!l.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > r || t < o)
          throw new RangeError('"value" argument is out of bounds');
        if (n + i > e.length) throw new RangeError("Index out of range");
      }
      function L(e, t, n, i) {
        t < 0 && (t = 65535 + t + 1);
        for (var r = 0, o = Math.min(e.length - n, 2); r < o; ++r)
          e[n + r] =
            (t & (255 << (8 * (i ? r : 1 - r)))) >>> (8 * (i ? r : 1 - r));
      }
      function D(e, t, n, i) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var r = 0, o = Math.min(e.length - n, 4); r < o; ++r)
          e[n + r] = (t >>> (8 * (i ? r : 3 - r))) & 255;
      }
      function B(e, t, n, i, r, o) {
        if (n + i > e.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("Index out of range");
      }
      function j(e, t, n, i, o) {
        return o || B(e, 0, n, 4), r.write(e, t, n, i, 23, 4), n + 4;
      }
      function R(e, t, n, i, o) {
        return o || B(e, 0, n, 8), r.write(e, t, n, i, 52, 8), n + 8;
      }
      (l.prototype.slice = function (e, t) {
        var n,
          i = this.length;
        if (
          ((e = ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i),
          (t = void 0 === t ? i : ~~t) < 0
            ? (t += i) < 0 && (t = 0)
            : t > i && (t = i),
          t < e && (t = e),
          l.TYPED_ARRAY_SUPPORT)
        )
          (n = this.subarray(e, t)).__proto__ = l.prototype;
        else {
          var r = t - e;
          n = new l(r, void 0);
          for (var o = 0; o < r; ++o) n[o] = this[o + e];
        }
        return n;
      }),
        (l.prototype.readUIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || M(e, t, this.length);
          for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256); )
            i += this[e + o] * r;
          return i;
        }),
        (l.prototype.readUIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || M(e, t, this.length);
          for (var i = this[e + --t], r = 1; t > 0 && (r *= 256); )
            i += this[e + --t] * r;
          return i;
        }),
        (l.prototype.readUInt8 = function (e, t) {
          return t || M(e, 1, this.length), this[e];
        }),
        (l.prototype.readUInt16LE = function (e, t) {
          return t || M(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (l.prototype.readUInt16BE = function (e, t) {
          return t || M(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (l.prototype.readUInt32LE = function (e, t) {
          return (
            t || M(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (l.prototype.readUInt32BE = function (e, t) {
          return (
            t || M(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (l.prototype.readIntLE = function (e, t, n) {
          (e |= 0), (t |= 0), n || M(e, t, this.length);
          for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256); )
            i += this[e + o] * r;
          return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)), i;
        }),
        (l.prototype.readIntBE = function (e, t, n) {
          (e |= 0), (t |= 0), n || M(e, t, this.length);
          for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256); )
            o += this[e + --i] * r;
          return o >= (r *= 128) && (o -= Math.pow(2, 8 * t)), o;
        }),
        (l.prototype.readInt8 = function (e, t) {
          return (
            t || M(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (l.prototype.readInt16LE = function (e, t) {
          t || M(e, 2, this.length);
          var n = this[e] | (this[e + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (l.prototype.readInt16BE = function (e, t) {
          t || M(e, 2, this.length);
          var n = this[e + 1] | (this[e] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (l.prototype.readInt32LE = function (e, t) {
          return (
            t || M(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (l.prototype.readInt32BE = function (e, t) {
          return (
            t || M(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (l.prototype.readFloatLE = function (e, t) {
          return t || M(e, 4, this.length), r.read(this, e, !0, 23, 4);
        }),
        (l.prototype.readFloatBE = function (e, t) {
          return t || M(e, 4, this.length), r.read(this, e, !1, 23, 4);
        }),
        (l.prototype.readDoubleLE = function (e, t) {
          return t || M(e, 8, this.length), r.read(this, e, !0, 52, 8);
        }),
        (l.prototype.readDoubleBE = function (e, t) {
          return t || M(e, 8, this.length), r.read(this, e, !1, 52, 8);
        }),
        (l.prototype.writeUIntLE = function (e, t, n, i) {
          ((e = +e), (t |= 0), (n |= 0), i) ||
            A(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var r = 1,
            o = 0;
          for (this[t] = 255 & e; ++o < n && (r *= 256); )
            this[t + o] = (e / r) & 255;
          return t + n;
        }),
        (l.prototype.writeUIntBE = function (e, t, n, i) {
          ((e = +e), (t |= 0), (n |= 0), i) ||
            A(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
          var r = n - 1,
            o = 1;
          for (this[t + r] = 255 & e; --r >= 0 && (o *= 256); )
            this[t + r] = (e / o) & 255;
          return t + n;
        }),
        (l.prototype.writeUInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || A(this, e, t, 1, 255, 0),
            l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeUInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || A(this, e, t, 2, 65535, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : L(this, e, t, !0),
            t + 2
          );
        }),
        (l.prototype.writeUInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || A(this, e, t, 2, 65535, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : L(this, e, t, !1),
            t + 2
          );
        }),
        (l.prototype.writeUInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || A(this, e, t, 4, 4294967295, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : D(this, e, t, !0),
            t + 4
          );
        }),
        (l.prototype.writeUInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || A(this, e, t, 4, 4294967295, 0),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : D(this, e, t, !1),
            t + 4
          );
        }),
        (l.prototype.writeIntLE = function (e, t, n, i) {
          if (((e = +e), (t |= 0), !i)) {
            var r = Math.pow(2, 8 * n - 1);
            A(this, e, t, n, r - 1, -r);
          }
          var o = 0,
            s = 1,
            a = 0;
          for (this[t] = 255 & e; ++o < n && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
              (this[t + o] = (((e / s) >> 0) - a) & 255);
          return t + n;
        }),
        (l.prototype.writeIntBE = function (e, t, n, i) {
          if (((e = +e), (t |= 0), !i)) {
            var r = Math.pow(2, 8 * n - 1);
            A(this, e, t, n, r - 1, -r);
          }
          var o = n - 1,
            s = 1,
            a = 0;
          for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
              (this[t + o] = (((e / s) >> 0) - a) & 255);
          return t + n;
        }),
        (l.prototype.writeInt8 = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || A(this, e, t, 1, 127, -128),
            l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (l.prototype.writeInt16LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || A(this, e, t, 2, 32767, -32768),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : L(this, e, t, !0),
            t + 2
          );
        }),
        (l.prototype.writeInt16BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || A(this, e, t, 2, 32767, -32768),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : L(this, e, t, !1),
            t + 2
          );
        }),
        (l.prototype.writeInt32LE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || A(this, e, t, 4, 2147483647, -2147483648),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : D(this, e, t, !0),
            t + 4
          );
        }),
        (l.prototype.writeInt32BE = function (e, t, n) {
          return (
            (e = +e),
            (t |= 0),
            n || A(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            l.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : D(this, e, t, !1),
            t + 4
          );
        }),
        (l.prototype.writeFloatLE = function (e, t, n) {
          return j(this, e, t, !0, n);
        }),
        (l.prototype.writeFloatBE = function (e, t, n) {
          return j(this, e, t, !1, n);
        }),
        (l.prototype.writeDoubleLE = function (e, t, n) {
          return R(this, e, t, !0, n);
        }),
        (l.prototype.writeDoubleBE = function (e, t, n) {
          return R(this, e, t, !1, n);
        }),
        (l.prototype.copy = function (e, t, n, i) {
          if (
            (n || (n = 0),
            i || 0 === i || (i = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            i > 0 && i < n && (i = n),
            i === n)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (n < 0 || n >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (i < 0) throw new RangeError("sourceEnd out of bounds");
          i > this.length && (i = this.length),
            e.length - t < i - n && (i = e.length - t + n);
          var r,
            o = i - n;
          if (this === e && n < t && t < i)
            for (r = o - 1; r >= 0; --r) e[r + t] = this[r + n];
          else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
            for (r = 0; r < o; ++r) e[r + t] = this[r + n];
          else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
          return o;
        }),
        (l.prototype.fill = function (e, t, n, i) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((i = t), (t = 0), (n = this.length))
                : "string" == typeof n && ((i = n), (n = this.length)),
              1 === e.length)
            ) {
              var r = e.charCodeAt(0);
              r < 256 && (e = r);
            }
            if (void 0 !== i && "string" != typeof i)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof i && !l.isEncoding(i))
              throw new TypeError("Unknown encoding: " + i);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < n)
            throw new RangeError("Out of range index");
          if (n <= t) return this;
          var o;
          if (
            ((t >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (o = t; o < n; ++o) this[o] = e;
          else {
            var s = l.isBuffer(e) ? e : F(new l(e, i).toString()),
              a = s.length;
            for (o = 0; o < n - t; ++o) this[o + t] = s[o % a];
          }
          return this;
        });
      var V = /[^+\/0-9A-Za-z-_]/g;
      function N(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }
      function F(e, t) {
        var n;
        t = t || 1 / 0;
        for (var i = e.length, r = null, o = [], s = 0; s < i; ++s) {
          if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
            if (!r) {
              if (n > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (s + 1 === i) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              r = n;
              continue;
            }
            if (n < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), (r = n);
              continue;
            }
            n = 65536 + (((r - 55296) << 10) | (n - 56320));
          } else r && (t -= 3) > -1 && o.push(239, 191, 189);
          if (((r = null), n < 128)) {
            if ((t -= 1) < 0) break;
            o.push(n);
          } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            o.push((n >> 6) | 192, (63 & n) | 128);
          } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
          } else {
            if (!(n < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            o.push(
              (n >> 18) | 240,
              ((n >> 12) & 63) | 128,
              ((n >> 6) & 63) | 128,
              (63 & n) | 128
            );
          }
        }
        return o;
      }
      function $(e) {
        return i.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              })(e).replace(V, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function z(e, t, n, i) {
        for (var r = 0; r < i && !(r + n >= t.length || r >= e.length); ++r)
          t[r + n] = e[r];
        return r;
      }
    }.call(this, n(2)));
  },
  function (e, t, n) {
    (function (e) {
      function n(e) {
        return Object.prototype.toString.call(e);
      }
      (t.isArray = function (e) {
        return Array.isArray ? Array.isArray(e) : "[object Array]" === n(e);
      }),
        (t.isBoolean = function (e) {
          return "boolean" == typeof e;
        }),
        (t.isNull = function (e) {
          return null === e;
        }),
        (t.isNullOrUndefined = function (e) {
          return null == e;
        }),
        (t.isNumber = function (e) {
          return "number" == typeof e;
        }),
        (t.isString = function (e) {
          return "string" == typeof e;
        }),
        (t.isSymbol = function (e) {
          return "symbol" == typeof e;
        }),
        (t.isUndefined = function (e) {
          return void 0 === e;
        }),
        (t.isRegExp = function (e) {
          return "[object RegExp]" === n(e);
        }),
        (t.isObject = function (e) {
          return "object" == typeof e && null !== e;
        }),
        (t.isDate = function (e) {
          return "[object Date]" === n(e);
        }),
        (t.isError = function (e) {
          return "[object Error]" === n(e) || e instanceof Error;
        }),
        (t.isFunction = function (e) {
          return "function" == typeof e;
        }),
        (t.isPrimitive = function (e) {
          return (
            null === e ||
            "boolean" == typeof e ||
            "number" == typeof e ||
            "string" == typeof e ||
            "symbol" == typeof e ||
            void 0 === e
          );
        }),
        (t.isBuffer = e.isBuffer);
    }.call(this, n(8).Buffer));
  },
  function (e, t, n) {
    "use strict";
    var i = n(14).Buffer,
      r =
        i.isEncoding ||
        function (e) {
          switch ((e = "" + e) && e.toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
            case "raw":
              return !0;
            default:
              return !1;
          }
        };
    function o(e) {
      var t;
      switch (
        ((this.encoding = (function (e) {
          var t = (function (e) {
            if (!e) return "utf8";
            for (var t; ; )
              switch (e) {
                case "utf8":
                case "utf-8":
                  return "utf8";
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return "utf16le";
                case "latin1":
                case "binary":
                  return "latin1";
                case "base64":
                case "ascii":
                case "hex":
                  return e;
                default:
                  if (t) return;
                  (e = ("" + e).toLowerCase()), (t = !0);
              }
          })(e);
          if ("string" != typeof t && (i.isEncoding === r || !r(e)))
            throw new Error("Unknown encoding: " + e);
          return t || e;
        })(e)),
        this.encoding)
      ) {
        case "utf16le":
          (this.text = l), (this.end = c), (t = 4);
          break;
        case "utf8":
          (this.fillLast = a), (t = 4);
          break;
        case "base64":
          (this.text = u), (this.end = h), (t = 3);
          break;
        default:
          return (this.write = p), void (this.end = d);
      }
      (this.lastNeed = 0),
        (this.lastTotal = 0),
        (this.lastChar = i.allocUnsafe(t));
    }
    function s(e) {
      return e <= 127
        ? 0
        : e >> 5 == 6
        ? 2
        : e >> 4 == 14
        ? 3
        : e >> 3 == 30
        ? 4
        : e >> 6 == 2
        ? -1
        : -2;
    }
    function a(e) {
      var t = this.lastTotal - this.lastNeed,
        n = (function (e, t, n) {
          if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
          if (e.lastNeed > 1 && t.length > 1) {
            if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
              return (e.lastNeed = 2), "�";
          }
        })(this, e);
      return void 0 !== n
        ? n
        : this.lastNeed <= e.length
        ? (e.copy(this.lastChar, t, 0, this.lastNeed),
          this.lastChar.toString(this.encoding, 0, this.lastTotal))
        : (e.copy(this.lastChar, t, 0, e.length),
          void (this.lastNeed -= e.length));
    }
    function l(e, t) {
      if ((e.length - t) % 2 == 0) {
        var n = e.toString("utf16le", t);
        if (n) {
          var i = n.charCodeAt(n.length - 1);
          if (i >= 55296 && i <= 56319)
            return (
              (this.lastNeed = 2),
              (this.lastTotal = 4),
              (this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1]),
              n.slice(0, -1)
            );
        }
        return n;
      }
      return (
        (this.lastNeed = 1),
        (this.lastTotal = 2),
        (this.lastChar[0] = e[e.length - 1]),
        e.toString("utf16le", t, e.length - 1)
      );
    }
    function c(e) {
      var t = e && e.length ? this.write(e) : "";
      if (this.lastNeed) {
        var n = this.lastTotal - this.lastNeed;
        return t + this.lastChar.toString("utf16le", 0, n);
      }
      return t;
    }
    function u(e, t) {
      var n = (e.length - t) % 3;
      return 0 === n
        ? e.toString("base64", t)
        : ((this.lastNeed = 3 - n),
          (this.lastTotal = 3),
          1 === n
            ? (this.lastChar[0] = e[e.length - 1])
            : ((this.lastChar[0] = e[e.length - 2]),
              (this.lastChar[1] = e[e.length - 1])),
          e.toString("base64", t, e.length - n));
    }
    function h(e) {
      var t = e && e.length ? this.write(e) : "";
      return this.lastNeed
        ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
        : t;
    }
    function p(e) {
      return e.toString(this.encoding);
    }
    function d(e) {
      return e && e.length ? this.write(e) : "";
    }
    (t.StringDecoder = o),
      (o.prototype.write = function (e) {
        if (0 === e.length) return "";
        var t, n;
        if (this.lastNeed) {
          if (void 0 === (t = this.fillLast(e))) return "";
          (n = this.lastNeed), (this.lastNeed = 0);
        } else n = 0;
        return n < e.length
          ? t
            ? t + this.text(e, n)
            : this.text(e, n)
          : t || "";
      }),
      (o.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : "";
        return this.lastNeed ? t + "�" : t;
      }),
      (o.prototype.text = function (e, t) {
        var n = (function (e, t, n) {
          var i = t.length - 1;
          if (i < n) return 0;
          var r = s(t[i]);
          if (r >= 0) return r > 0 && (e.lastNeed = r - 1), r;
          if (--i < n || -2 === r) return 0;
          if ((r = s(t[i])) >= 0) return r > 0 && (e.lastNeed = r - 2), r;
          if (--i < n || -2 === r) return 0;
          if ((r = s(t[i])) >= 0)
            return r > 0 && (2 === r ? (r = 0) : (e.lastNeed = r - 3)), r;
          return 0;
        })(this, e, t);
        if (!this.lastNeed) return e.toString("utf8", t);
        this.lastTotal = n;
        var i = e.length - (n - this.lastNeed);
        return e.copy(this.lastChar, 0, i), e.toString("utf8", t, i);
      }),
      (o.prototype.fillLast = function (e) {
        if (this.lastNeed <= e.length)
          return (
            e.copy(
              this.lastChar,
              this.lastTotal - this.lastNeed,
              0,
              this.lastNeed
            ),
            this.lastChar.toString(this.encoding, 0, this.lastTotal)
          );
        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
          (this.lastNeed -= e.length);
      });
  },
  function (e, t, n) {
    (function (t, n) {
      /*!
       * @overview es6-promise - a tiny implementation of Promises/A+.
       * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
       * @license   Licensed under MIT license
       *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
       * @version   v4.2.8+1e68dce6
       */ var i;
      (i = function () {
        "use strict";
        function e(e) {
          return "function" == typeof e;
        }
        var i = Array.isArray
            ? Array.isArray
            : function (e) {
                return "[object Array]" === Object.prototype.toString.call(e);
              },
          r = 0,
          o = void 0,
          s = void 0,
          a = function (e, t) {
            (f[r] = e), (f[r + 1] = t), 2 === (r += 2) && (s ? s(m) : w());
          },
          l = "undefined" != typeof window ? window : void 0,
          c = l || {},
          u = c.MutationObserver || c.WebKitMutationObserver,
          h =
            "undefined" == typeof self &&
            void 0 !== t &&
            "[object process]" === {}.toString.call(t),
          p =
            "undefined" != typeof Uint8ClampedArray &&
            "undefined" != typeof importScripts &&
            "undefined" != typeof MessageChannel;
        function d() {
          var e = setTimeout;
          return function () {
            return e(m, 1);
          };
        }
        var f = new Array(1e3);
        function m() {
          for (var e = 0; e < r; e += 2)
            (0, f[e])(f[e + 1]), (f[e] = void 0), (f[e + 1] = void 0);
          r = 0;
        }
        var g,
          v,
          y,
          b,
          w = void 0;
        function x(e, t) {
          var n = this,
            i = new this.constructor(_);
          void 0 === i[E] && D(i);
          var r = n._state;
          if (r) {
            var o = arguments[r - 1];
            a(function () {
              return A(r, i, o, n._result);
            });
          } else I(n, i, e, t);
          return i;
        }
        function k(e) {
          if (e && "object" == typeof e && e.constructor === this) return e;
          var t = new this(_);
          return O(t, e), t;
        }
        h
          ? (w = function () {
              return t.nextTick(m);
            })
          : u
          ? ((v = 0),
            (y = new u(m)),
            (b = document.createTextNode("")),
            y.observe(b, { characterData: !0 }),
            (w = function () {
              b.data = v = ++v % 2;
            }))
          : p
          ? (((g = new MessageChannel()).port1.onmessage = m),
            (w = function () {
              return g.port2.postMessage(0);
            }))
          : (w =
              void 0 === l
                ? (function () {
                    try {
                      var e = Function("return this")().require("vertx");
                      return void 0 !== (o = e.runOnLoop || e.runOnContext)
                        ? function () {
                            o(m);
                          }
                        : d();
                    } catch (e) {
                      return d();
                    }
                  })()
                : d());
        var E = Math.random().toString(36).substring(2);
        function _() {}
        function C(t, n, i) {
          n.constructor === t.constructor &&
          i === x &&
          n.constructor.resolve === k
            ? (function (e, t) {
                1 === t._state
                  ? P(e, t._result)
                  : 2 === t._state
                  ? T(e, t._result)
                  : I(
                      t,
                      void 0,
                      function (t) {
                        return O(e, t);
                      },
                      function (t) {
                        return T(e, t);
                      }
                    );
              })(t, n)
            : void 0 === i
            ? P(t, n)
            : e(i)
            ? (function (e, t, n) {
                a(function (e) {
                  var i = !1,
                    r = (function (e, t, n, i) {
                      try {
                        e.call(t, n, i);
                      } catch (e) {
                        return e;
                      }
                    })(
                      n,
                      t,
                      function (n) {
                        i || ((i = !0), t !== n ? O(e, n) : P(e, n));
                      },
                      function (t) {
                        i || ((i = !0), T(e, t));
                      },
                      e._label
                    );
                  !i && r && ((i = !0), T(e, r));
                }, e);
              })(t, n, i)
            : P(t, n);
        }
        function O(e, t) {
          if (e === t)
            T(e, new TypeError("You cannot resolve a promise with itself"));
          else if (
            ((r = typeof (i = t)),
            null === i || ("object" !== r && "function" !== r))
          )
            P(e, t);
          else {
            var n = void 0;
            try {
              n = t.then;
            } catch (t) {
              return void T(e, t);
            }
            C(e, t, n);
          }
          var i, r;
        }
        function S(e) {
          e._onerror && e._onerror(e._result), M(e);
        }
        function P(e, t) {
          void 0 === e._state &&
            ((e._result = t),
            (e._state = 1),
            0 !== e._subscribers.length && a(M, e));
        }
        function T(e, t) {
          void 0 === e._state && ((e._state = 2), (e._result = t), a(S, e));
        }
        function I(e, t, n, i) {
          var r = e._subscribers,
            o = r.length;
          (e._onerror = null),
            (r[o] = t),
            (r[o + 1] = n),
            (r[o + 2] = i),
            0 === o && e._state && a(M, e);
        }
        function M(e) {
          var t = e._subscribers,
            n = e._state;
          if (0 !== t.length) {
            for (
              var i = void 0, r = void 0, o = e._result, s = 0;
              s < t.length;
              s += 3
            )
              (i = t[s]), (r = t[s + n]), i ? A(n, i, r, o) : r(o);
            e._subscribers.length = 0;
          }
        }
        function A(t, n, i, r) {
          var o = e(i),
            s = void 0,
            a = void 0,
            l = !0;
          if (o) {
            try {
              s = i(r);
            } catch (e) {
              (l = !1), (a = e);
            }
            if (n === s)
              return void T(
                n,
                new TypeError(
                  "A promises callback cannot return that same promise."
                )
              );
          } else s = r;
          void 0 !== n._state ||
            (o && l
              ? O(n, s)
              : !1 === l
              ? T(n, a)
              : 1 === t
              ? P(n, s)
              : 2 === t && T(n, s));
        }
        var L = 0;
        function D(e) {
          (e[E] = L++),
            (e._state = void 0),
            (e._result = void 0),
            (e._subscribers = []);
        }
        var B = (function () {
            function e(e, t) {
              (this._instanceConstructor = e),
                (this.promise = new e(_)),
                this.promise[E] || D(this.promise),
                i(t)
                  ? ((this.length = t.length),
                    (this._remaining = t.length),
                    (this._result = new Array(this.length)),
                    0 === this.length
                      ? P(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(t),
                        0 === this._remaining && P(this.promise, this._result)))
                  : T(
                      this.promise,
                      new Error("Array Methods must be provided an Array")
                    );
            }
            return (
              (e.prototype._enumerate = function (e) {
                for (var t = 0; void 0 === this._state && t < e.length; t++)
                  this._eachEntry(e[t], t);
              }),
              (e.prototype._eachEntry = function (e, t) {
                var n = this._instanceConstructor,
                  i = n.resolve;
                if (i === k) {
                  var r = void 0,
                    o = void 0,
                    s = !1;
                  try {
                    r = e.then;
                  } catch (e) {
                    (s = !0), (o = e);
                  }
                  if (r === x && void 0 !== e._state)
                    this._settledAt(e._state, t, e._result);
                  else if ("function" != typeof r)
                    this._remaining--, (this._result[t] = e);
                  else if (n === j) {
                    var a = new n(_);
                    s ? T(a, o) : C(a, e, r), this._willSettleAt(a, t);
                  } else
                    this._willSettleAt(
                      new n(function (t) {
                        return t(e);
                      }),
                      t
                    );
                } else this._willSettleAt(i(e), t);
              }),
              (e.prototype._settledAt = function (e, t, n) {
                var i = this.promise;
                void 0 === i._state &&
                  (this._remaining--,
                  2 === e ? T(i, n) : (this._result[t] = n)),
                  0 === this._remaining && P(i, this._result);
              }),
              (e.prototype._willSettleAt = function (e, t) {
                var n = this;
                I(
                  e,
                  void 0,
                  function (e) {
                    return n._settledAt(1, t, e);
                  },
                  function (e) {
                    return n._settledAt(2, t, e);
                  }
                );
              }),
              e
            );
          })(),
          j = (function () {
            function t(e) {
              (this[E] = L++),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                _ !== e &&
                  ("function" != typeof e &&
                    (function () {
                      throw new TypeError(
                        "You must pass a resolver function as the first argument to the promise constructor"
                      );
                    })(),
                  this instanceof t
                    ? (function (e, t) {
                        try {
                          t(
                            function (t) {
                              O(e, t);
                            },
                            function (t) {
                              T(e, t);
                            }
                          );
                        } catch (t) {
                          T(e, t);
                        }
                      })(this, e)
                    : (function () {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      })());
            }
            return (
              (t.prototype.catch = function (e) {
                return this.then(null, e);
              }),
              (t.prototype.finally = function (t) {
                var n = this.constructor;
                return e(t)
                  ? this.then(
                      function (e) {
                        return n.resolve(t()).then(function () {
                          return e;
                        });
                      },
                      function (e) {
                        return n.resolve(t()).then(function () {
                          throw e;
                        });
                      }
                    )
                  : this.then(t, t);
              }),
              t
            );
          })();
        return (
          (j.prototype.then = x),
          (j.all = function (e) {
            return new B(this, e).promise;
          }),
          (j.race = function (e) {
            var t = this;
            return i(e)
              ? new t(function (n, i) {
                  for (var r = e.length, o = 0; o < r; o++)
                    t.resolve(e[o]).then(n, i);
                })
              : new t(function (e, t) {
                  return t(new TypeError("You must pass an array to race."));
                });
          }),
          (j.resolve = k),
          (j.reject = function (e) {
            var t = new this(_);
            return T(t, e), t;
          }),
          (j._setScheduler = function (e) {
            s = e;
          }),
          (j._setAsap = function (e) {
            a = e;
          }),
          (j._asap = a),
          (j.polyfill = function () {
            var e = void 0;
            if (void 0 !== n) e = n;
            else if ("undefined" != typeof self) e = self;
            else
              try {
                e = Function("return this")();
              } catch (e) {
                throw new Error(
                  "polyfill failed because global object is unavailable in this environment"
                );
              }
            var t = e.Promise;
            if (t) {
              var i = null;
              try {
                i = Object.prototype.toString.call(t.resolve());
              } catch (e) {}
              if ("[object Promise]" === i && !t.cast) return;
            }
            e.Promise = j;
          }),
          (j.Promise = j),
          j
        );
      }),
        (e.exports = i());
    }.call(this, n(0), n(2)));
  },
  function (e, t, n) {
    ((t = e.exports = n(19)).Stream = t),
      (t.Readable = t),
      (t.Writable = n(16)),
      (t.Duplex = n(4)),
      (t.Transform = n(24)),
      (t.PassThrough = n(45));
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      void 0 === t ||
      !t.version ||
      0 === t.version.indexOf("v0.") ||
      (0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8."))
        ? (e.exports = {
            nextTick: function (e, n, i, r) {
              if ("function" != typeof e)
                throw new TypeError('"callback" argument must be a function');
              var o,
                s,
                a = arguments.length;
              switch (a) {
                case 0:
                case 1:
                  return t.nextTick(e);
                case 2:
                  return t.nextTick(function () {
                    e.call(null, n);
                  });
                case 3:
                  return t.nextTick(function () {
                    e.call(null, n, i);
                  });
                case 4:
                  return t.nextTick(function () {
                    e.call(null, n, i, r);
                  });
                default:
                  for (o = new Array(a - 1), s = 0; s < o.length; )
                    o[s++] = arguments[s];
                  return t.nextTick(function () {
                    e.apply(null, o);
                  });
              }
            },
          })
        : (e.exports = t);
    }.call(this, n(0)));
  },
  function (e, t, n) {
    var i = n(8),
      r = i.Buffer;
    function o(e, t) {
      for (var n in e) t[n] = e[n];
    }
    function s(e, t, n) {
      return r(e, t, n);
    }
    r.from && r.alloc && r.allocUnsafe && r.allocUnsafeSlow
      ? (e.exports = i)
      : (o(i, t), (t.Buffer = s)),
      o(r, s),
      (s.from = function (e, t, n) {
        if ("number" == typeof e)
          throw new TypeError("Argument must not be a number");
        return r(e, t, n);
      }),
      (s.alloc = function (e, t, n) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        var i = r(e);
        return (
          void 0 !== t
            ? "string" == typeof n
              ? i.fill(t, n)
              : i.fill(t)
            : i.fill(0),
          i
        );
      }),
      (s.allocUnsafe = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return r(e);
      }),
      (s.allocUnsafeSlow = function (e) {
        if ("number" != typeof e)
          throw new TypeError("Argument must be a number");
        return i.SlowBuffer(e);
      });
  },
  function (e, t, n) {
    e.exports = r;
    var i = n(7).EventEmitter;
    function r() {
      i.call(this);
    }
    n(1)(r, i),
      (r.Readable = n(12)),
      (r.Writable = n(46)),
      (r.Duplex = n(47)),
      (r.Transform = n(48)),
      (r.PassThrough = n(49)),
      (r.Stream = r),
      (r.prototype.pipe = function (e, t) {
        var n = this;
        function r(t) {
          e.writable && !1 === e.write(t) && n.pause && n.pause();
        }
        function o() {
          n.readable && n.resume && n.resume();
        }
        n.on("data", r),
          e.on("drain", o),
          e._isStdio ||
            (t && !1 === t.end) ||
            (n.on("end", a), n.on("close", l));
        var s = !1;
        function a() {
          s || ((s = !0), e.end());
        }
        function l() {
          s || ((s = !0), "function" == typeof e.destroy && e.destroy());
        }
        function c(e) {
          if ((u(), 0 === i.listenerCount(this, "error"))) throw e;
        }
        function u() {
          n.removeListener("data", r),
            e.removeListener("drain", o),
            n.removeListener("end", a),
            n.removeListener("close", l),
            n.removeListener("error", c),
            e.removeListener("error", c),
            n.removeListener("end", u),
            n.removeListener("close", u),
            e.removeListener("close", u);
        }
        return (
          n.on("error", c),
          e.on("error", c),
          n.on("end", u),
          n.on("close", u),
          e.on("close", u),
          e.emit("pipe", n),
          e
        );
      });
  },
  function (e, t, n) {
    "use strict";
    (function (t, i, r) {
      var o = n(13);
      function s(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, n) {
              var i = e.entry;
              e.entry = null;
              for (; i; ) {
                var r = i.callback;
                t.pendingcb--, r(n), (i = i.next);
              }
              t.corkedRequestsFree
                ? (t.corkedRequestsFree.next = e)
                : (t.corkedRequestsFree = e);
            })(t, e);
          });
      }
      e.exports = y;
      var a,
        l =
          !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1
            ? i
            : o.nextTick;
      y.WritableState = v;
      var c = Object.create(n(9));
      c.inherits = n(1);
      var u = { deprecate: n(23) },
        h = n(21),
        p = n(14).Buffer,
        d = r.Uint8Array || function () {};
      var f,
        m = n(22);
      function g() {}
      function v(e, t) {
        (a = a || n(4)), (e = e || {});
        var i = t instanceof a;
        (this.objectMode = !!e.objectMode),
          i && (this.objectMode = this.objectMode || !!e.writableObjectMode);
        var r = e.highWaterMark,
          c = e.writableHighWaterMark,
          u = this.objectMode ? 16 : 16384;
        (this.highWaterMark = r || 0 === r ? r : i && (c || 0 === c) ? c : u),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var h = !1 === e.decodeStrings;
        (this.decodeStrings = !h),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var n = e._writableState,
                i = n.sync,
                r = n.writecb;
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(n),
                t)
              )
                !(function (e, t, n, i, r) {
                  --t.pendingcb,
                    n
                      ? (o.nextTick(r, i),
                        o.nextTick(_, e, t),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", i))
                      : (r(i),
                        (e._writableState.errorEmitted = !0),
                        e.emit("error", i),
                        _(e, t));
                })(e, n, i, t, r);
              else {
                var s = k(n);
                s ||
                  n.corked ||
                  n.bufferProcessing ||
                  !n.bufferedRequest ||
                  x(e, n),
                  i ? l(w, e, n, s, r) : w(e, n, s, r);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new s(this));
      }
      function y(e) {
        if (((a = a || n(4)), !(f.call(y, this) || this instanceof a)))
          return new y(e);
        (this._writableState = new v(e, this)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          h.call(this);
      }
      function b(e, t, n, i, r, o, s) {
        (t.writelen = i),
          (t.writecb = s),
          (t.writing = !0),
          (t.sync = !0),
          n ? e._writev(r, t.onwrite) : e._write(r, o, t.onwrite),
          (t.sync = !1);
      }
      function w(e, t, n, i) {
        n ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          i(),
          _(e, t);
      }
      function x(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
          var i = t.bufferedRequestCount,
            r = new Array(i),
            o = t.corkedRequestsFree;
          o.entry = n;
          for (var a = 0, l = !0; n; )
            (r[a] = n), n.isBuf || (l = !1), (n = n.next), (a += 1);
          (r.allBuffers = l),
            b(e, t, !0, t.length, r, "", o.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            o.next
              ? ((t.corkedRequestsFree = o.next), (o.next = null))
              : (t.corkedRequestsFree = new s(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; n; ) {
            var c = n.chunk,
              u = n.encoding,
              h = n.callback;
            if (
              (b(e, t, !1, t.objectMode ? 1 : c.length, c, u, h),
              (n = n.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === n && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = n), (t.bufferProcessing = !1);
      }
      function k(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function E(e, t) {
        e._final(function (n) {
          t.pendingcb--,
            n && e.emit("error", n),
            (t.prefinished = !0),
            e.emit("prefinish"),
            _(e, t);
        });
      }
      function _(e, t) {
        var n = k(t);
        return (
          n &&
            (!(function (e, t) {
              t.prefinished ||
                t.finalCalled ||
                ("function" == typeof e._final
                  ? (t.pendingcb++, (t.finalCalled = !0), o.nextTick(E, e, t))
                  : ((t.prefinished = !0), e.emit("prefinish")));
            })(e, t),
            0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
          n
        );
      }
      c.inherits(y, h),
        (v.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(v.prototype, "buffer", {
              get: u.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((f = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(y, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!f.call(this, e) ||
                  (this === y && e && e._writableState instanceof v)
                );
              },
            }))
          : (f = function (e) {
              return e instanceof this;
            }),
        (y.prototype.pipe = function () {
          this.emit("error", new Error("Cannot pipe, not readable"));
        }),
        (y.prototype.write = function (e, t, n) {
          var i,
            r = this._writableState,
            s = !1,
            a = !r.objectMode && ((i = e), p.isBuffer(i) || i instanceof d);
          return (
            a &&
              !p.isBuffer(e) &&
              (e = (function (e) {
                return p.from(e);
              })(e)),
            "function" == typeof t && ((n = t), (t = null)),
            a ? (t = "buffer") : t || (t = r.defaultEncoding),
            "function" != typeof n && (n = g),
            r.ended
              ? (function (e, t) {
                  var n = new Error("write after end");
                  e.emit("error", n), o.nextTick(t, n);
                })(this, n)
              : (a ||
                  (function (e, t, n, i) {
                    var r = !0,
                      s = !1;
                    return (
                      null === n
                        ? (s = new TypeError(
                            "May not write null values to stream"
                          ))
                        : "string" == typeof n ||
                          void 0 === n ||
                          t.objectMode ||
                          (s = new TypeError(
                            "Invalid non-string/buffer chunk"
                          )),
                      s && (e.emit("error", s), o.nextTick(i, s), (r = !1)),
                      r
                    );
                  })(this, r, e, n)) &&
                (r.pendingcb++,
                (s = (function (e, t, n, i, r, o) {
                  if (!n) {
                    var s = (function (e, t, n) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        "string" != typeof t ||
                        (t = p.from(t, n));
                      return t;
                    })(t, i, r);
                    i !== s && ((n = !0), (r = "buffer"), (i = s));
                  }
                  var a = t.objectMode ? 1 : i.length;
                  t.length += a;
                  var l = t.length < t.highWaterMark;
                  l || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var c = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: i,
                      encoding: r,
                      isBuf: n,
                      callback: o,
                      next: null,
                    }),
                      c
                        ? (c.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else b(e, t, !1, a, i, r, o);
                  return l;
                })(this, r, a, e, t, n))),
            s
          );
        }),
        (y.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (y.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.finished ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              x(this, e));
        }),
        (y.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new TypeError("Unknown encoding: " + e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(y.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (y.prototype._write = function (e, t, n) {
          n(new Error("_write() is not implemented"));
        }),
        (y.prototype._writev = null),
        (y.prototype.end = function (e, t, n) {
          var i = this._writableState;
          "function" == typeof e
            ? ((n = e), (e = null), (t = null))
            : "function" == typeof t && ((n = t), (t = null)),
            null != e && this.write(e, t),
            i.corked && ((i.corked = 1), this.uncork()),
            i.ending ||
              i.finished ||
              (function (e, t, n) {
                (t.ending = !0),
                  _(e, t),
                  n && (t.finished ? o.nextTick(n) : e.once("finish", n));
                (t.ended = !0), (e.writable = !1);
              })(this, i, n);
        }),
        Object.defineProperty(y.prototype, "destroyed", {
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (y.prototype.destroy = m.destroy),
        (y.prototype._undestroy = m.undestroy),
        (y.prototype._destroy = function (e, t) {
          this.end(), t(e);
        });
    }.call(this, n(0), n(43).setImmediate, n(2)));
  },
  function (e, t, n) {
    "use strict";
    var i = n(5).codes.ERR_STREAM_PREMATURE_CLOSE;
    function r() {}
    e.exports = function e(t, n, o) {
      if ("function" == typeof n) return e(t, null, n);
      n || (n = {}),
        (o = (function (e) {
          var t = !1;
          return function () {
            if (!t) {
              t = !0;
              for (
                var n = arguments.length, i = new Array(n), r = 0;
                r < n;
                r++
              )
                i[r] = arguments[r];
              e.apply(this, i);
            }
          };
        })(o || r));
      var s = n.readable || (!1 !== n.readable && t.readable),
        a = n.writable || (!1 !== n.writable && t.writable),
        l = function () {
          t.writable || u();
        },
        c = t._writableState && t._writableState.finished,
        u = function () {
          (a = !1), (c = !0), s || o.call(t);
        },
        h = t._readableState && t._readableState.endEmitted,
        p = function () {
          (s = !1), (h = !0), a || o.call(t);
        },
        d = function (e) {
          o.call(t, e);
        },
        f = function () {
          var e;
          return s && !h
            ? ((t._readableState && t._readableState.ended) || (e = new i()),
              o.call(t, e))
            : a && !c
            ? ((t._writableState && t._writableState.ended) || (e = new i()),
              o.call(t, e))
            : void 0;
        },
        m = function () {
          t.req.on("finish", u);
        };
      return (
        !(function (e) {
          return e.setHeader && "function" == typeof e.abort;
        })(t)
          ? a && !t._writableState && (t.on("end", l), t.on("close", l))
          : (t.on("complete", u),
            t.on("abort", f),
            t.req ? m() : t.on("request", m)),
        t.on("end", p),
        t.on("finish", u),
        !1 !== n.error && t.on("error", d),
        t.on("close", f),
        function () {
          t.removeListener("complete", u),
            t.removeListener("abort", f),
            t.removeListener("request", m),
            t.req && t.req.removeListener("finish", u),
            t.removeListener("end", l),
            t.removeListener("close", l),
            t.removeListener("finish", u),
            t.removeListener("end", p),
            t.removeListener("error", d),
            t.removeListener("close", f);
        }
      );
    };
  },
  function (e) {
    e.exports = JSON.parse(
      '{"a":"@kissmybutton/motorcortex-subtitles","b":"2.0.5"}'
    );
  },
  function (e, t, n) {
    "use strict";
    (function (t, i) {
      var r = n(13);
      e.exports = b;
      var o,
        s = n(20);
      b.ReadableState = y;
      n(7).EventEmitter;
      var a = function (e, t) {
          return e.listeners(t).length;
        },
        l = n(21),
        c = n(14).Buffer,
        u = t.Uint8Array || function () {};
      var h = Object.create(n(9));
      h.inherits = n(1);
      var p = n(40),
        d = void 0;
      d = p && p.debuglog ? p.debuglog("stream") : function () {};
      var f,
        m = n(41),
        g = n(22);
      h.inherits(b, l);
      var v = ["error", "close", "destroy", "pause", "resume"];
      function y(e, t) {
        e = e || {};
        var i = t instanceof (o = o || n(4));
        (this.objectMode = !!e.objectMode),
          i && (this.objectMode = this.objectMode || !!e.readableObjectMode);
        var r = e.highWaterMark,
          s = e.readableHighWaterMark,
          a = this.objectMode ? 16 : 16384;
        (this.highWaterMark = r || 0 === r ? r : i && (s || 0 === s) ? s : a),
          (this.highWaterMark = Math.floor(this.highWaterMark)),
          (this.buffer = new m()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (f || (f = n(10).StringDecoder),
            (this.decoder = new f(e.encoding)),
            (this.encoding = e.encoding));
      }
      function b(e) {
        if (((o = o || n(4)), !(this instanceof b))) return new b(e);
        (this._readableState = new y(e, this)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          l.call(this);
      }
      function w(e, t, n, i, r) {
        var o,
          s = e._readableState;
        null === t
          ? ((s.reading = !1),
            (function (e, t) {
              if (t.ended) return;
              if (t.decoder) {
                var n = t.decoder.end();
                n &&
                  n.length &&
                  (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
              }
              (t.ended = !0), E(e);
            })(e, s))
          : (r ||
              (o = (function (e, t) {
                var n;
                (i = t),
                  c.isBuffer(i) ||
                    i instanceof u ||
                    "string" == typeof t ||
                    void 0 === t ||
                    e.objectMode ||
                    (n = new TypeError("Invalid non-string/buffer chunk"));
                var i;
                return n;
              })(s, t)),
            o
              ? e.emit("error", o)
              : s.objectMode || (t && t.length > 0)
              ? ("string" == typeof t ||
                  s.objectMode ||
                  Object.getPrototypeOf(t) === c.prototype ||
                  (t = (function (e) {
                    return c.from(e);
                  })(t)),
                i
                  ? s.endEmitted
                    ? e.emit(
                        "error",
                        new Error("stream.unshift() after end event")
                      )
                    : x(e, s, t, !0)
                  : s.ended
                  ? e.emit("error", new Error("stream.push() after EOF"))
                  : ((s.reading = !1),
                    s.decoder && !n
                      ? ((t = s.decoder.write(t)),
                        s.objectMode || 0 !== t.length
                          ? x(e, s, t, !1)
                          : C(e, s))
                      : x(e, s, t, !1)))
              : i || (s.reading = !1));
        return (function (e) {
          return (
            !e.ended &&
            (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
          );
        })(s);
      }
      function x(e, t, n, i) {
        t.flowing && 0 === t.length && !t.sync
          ? (e.emit("data", n), e.read(0))
          : ((t.length += t.objectMode ? 1 : n.length),
            i ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && E(e)),
          C(e, t);
      }
      Object.defineProperty(b.prototype, "destroyed", {
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (b.prototype.destroy = g.destroy),
        (b.prototype._undestroy = g.undestroy),
        (b.prototype._destroy = function (e, t) {
          this.push(null), t(e);
        }),
        (b.prototype.push = function (e, t) {
          var n,
            i = this._readableState;
          return (
            i.objectMode
              ? (n = !0)
              : "string" == typeof e &&
                ((t = t || i.defaultEncoding) !== i.encoding &&
                  ((e = c.from(e, t)), (t = "")),
                (n = !0)),
            w(this, e, t, !1, n)
          );
        }),
        (b.prototype.unshift = function (e) {
          return w(this, e, null, !0, !1);
        }),
        (b.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (b.prototype.setEncoding = function (e) {
          return (
            f || (f = n(10).StringDecoder),
            (this._readableState.decoder = new f(e)),
            (this._readableState.encoding = e),
            this
          );
        });
      function k(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= 8388608
                    ? (e = 8388608)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function E(e) {
        var t = e._readableState;
        (t.needReadable = !1),
          t.emittedReadable ||
            (d("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            t.sync ? r.nextTick(_, e) : _(e));
      }
      function _(e) {
        d("emit readable"), e.emit("readable"), T(e);
      }
      function C(e, t) {
        t.readingMore || ((t.readingMore = !0), r.nextTick(O, e, t));
      }
      function O(e, t) {
        for (
          var n = t.length;
          !t.reading &&
          !t.flowing &&
          !t.ended &&
          t.length < t.highWaterMark &&
          (d("maybeReadMore read 0"), e.read(0), n !== t.length);

        )
          n = t.length;
        t.readingMore = !1;
      }
      function S(e) {
        d("readable nexttick read 0"), e.read(0);
      }
      function P(e, t) {
        t.reading || (d("resume read 0"), e.read(0)),
          (t.resumeScheduled = !1),
          (t.awaitDrain = 0),
          e.emit("resume"),
          T(e),
          t.flowing && !t.reading && e.read(0);
      }
      function T(e) {
        var t = e._readableState;
        for (d("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function I(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (n = t.buffer.shift())
              : !e || e >= t.length
              ? ((n = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.head.data
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (n = (function (e, t, n) {
                  var i;
                  e < t.head.data.length
                    ? ((i = t.head.data.slice(0, e)),
                      (t.head.data = t.head.data.slice(e)))
                    : (i =
                        e === t.head.data.length
                          ? t.shift()
                          : n
                          ? (function (e, t) {
                              var n = t.head,
                                i = 1,
                                r = n.data;
                              e -= r.length;
                              for (; (n = n.next); ) {
                                var o = n.data,
                                  s = e > o.length ? o.length : e;
                                if (
                                  (s === o.length
                                    ? (r += o)
                                    : (r += o.slice(0, e)),
                                  0 === (e -= s))
                                ) {
                                  s === o.length
                                    ? (++i,
                                      n.next
                                        ? (t.head = n.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = n), (n.data = o.slice(s)));
                                  break;
                                }
                                ++i;
                              }
                              return (t.length -= i), r;
                            })(e, t)
                          : (function (e, t) {
                              var n = c.allocUnsafe(e),
                                i = t.head,
                                r = 1;
                              i.data.copy(n), (e -= i.data.length);
                              for (; (i = i.next); ) {
                                var o = i.data,
                                  s = e > o.length ? o.length : e;
                                if (
                                  (o.copy(n, n.length - e, 0, s),
                                  0 === (e -= s))
                                ) {
                                  s === o.length
                                    ? (++r,
                                      i.next
                                        ? (t.head = i.next)
                                        : (t.head = t.tail = null))
                                    : ((t.head = i), (i.data = o.slice(s)));
                                  break;
                                }
                                ++r;
                              }
                              return (t.length -= r), n;
                            })(e, t));
                  return i;
                })(e, t.buffer, t.decoder)),
            n);
        var n;
      }
      function M(e) {
        var t = e._readableState;
        if (t.length > 0)
          throw new Error('"endReadable()" called on non-empty stream');
        t.endEmitted || ((t.ended = !0), r.nextTick(A, t, e));
      }
      function A(e, t) {
        e.endEmitted ||
          0 !== e.length ||
          ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
      }
      function L(e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      }
      (b.prototype.read = function (e) {
        d("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          n = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
        )
          return (
            d("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? M(this) : E(this),
            null
          );
        if (0 === (e = k(e, t)) && t.ended)
          return 0 === t.length && M(this), null;
        var i,
          r = t.needReadable;
        return (
          d("need readable", r),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            d("length less than watermark", (r = !0)),
          t.ended || t.reading
            ? d("reading or ended", (r = !1))
            : r &&
              (d("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = k(n, t))),
          null === (i = e > 0 ? I(e, t) : null)
            ? ((t.needReadable = !0), (e = 0))
            : (t.length -= e),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), n !== e && t.ended && M(this)),
          null !== i && this.emit("data", i),
          i
        );
      }),
        (b.prototype._read = function (e) {
          this.emit("error", new Error("_read() is not implemented"));
        }),
        (b.prototype.pipe = function (e, t) {
          var n = this,
            o = this._readableState;
          switch (o.pipesCount) {
            case 0:
              o.pipes = e;
              break;
            case 1:
              o.pipes = [o.pipes, e];
              break;
            default:
              o.pipes.push(e);
          }
          (o.pipesCount += 1), d("pipe count=%d opts=%j", o.pipesCount, t);
          var l =
            (!t || !1 !== t.end) && e !== i.stdout && e !== i.stderr ? u : b;
          function c(t, i) {
            d("onunpipe"),
              t === n &&
                i &&
                !1 === i.hasUnpiped &&
                ((i.hasUnpiped = !0),
                d("cleanup"),
                e.removeListener("close", v),
                e.removeListener("finish", y),
                e.removeListener("drain", h),
                e.removeListener("error", g),
                e.removeListener("unpipe", c),
                n.removeListener("end", u),
                n.removeListener("end", b),
                n.removeListener("data", m),
                (p = !0),
                !o.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  h());
          }
          function u() {
            d("onend"), e.end();
          }
          o.endEmitted ? r.nextTick(l) : n.once("end", l), e.on("unpipe", c);
          var h = (function (e) {
            return function () {
              var t = e._readableState;
              d("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && a(e, "data") && ((t.flowing = !0), T(e));
            };
          })(n);
          e.on("drain", h);
          var p = !1;
          var f = !1;
          function m(t) {
            d("ondata"),
              (f = !1),
              !1 !== e.write(t) ||
                f ||
                (((1 === o.pipesCount && o.pipes === e) ||
                  (o.pipesCount > 1 && -1 !== L(o.pipes, e))) &&
                  !p &&
                  (d(
                    "false write response, pause",
                    n._readableState.awaitDrain
                  ),
                  n._readableState.awaitDrain++,
                  (f = !0)),
                n.pause());
          }
          function g(t) {
            d("onerror", t),
              b(),
              e.removeListener("error", g),
              0 === a(e, "error") && e.emit("error", t);
          }
          function v() {
            e.removeListener("finish", y), b();
          }
          function y() {
            d("onfinish"), e.removeListener("close", v), b();
          }
          function b() {
            d("unpipe"), n.unpipe(e);
          }
          return (
            n.on("data", m),
            (function (e, t, n) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, n);
              e._events && e._events[t]
                ? s(e._events[t])
                  ? e._events[t].unshift(n)
                  : (e._events[t] = [n, e._events[t]])
                : e.on(t, n);
            })(e, "error", g),
            e.once("close", v),
            e.once("finish", y),
            e.emit("pipe", n),
            o.flowing || (d("pipe resume"), n.resume()),
            e
          );
        }),
        (b.prototype.unpipe = function (e) {
          var t = this._readableState,
            n = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, n)),
              this
            );
          if (!e) {
            var i = t.pipes,
              r = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < r; o++) i[o].emit("unpipe", this, n);
            return this;
          }
          var s = L(t.pipes, e);
          return (
            -1 === s ||
              (t.pipes.splice(s, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, n)),
            this
          );
        }),
        (b.prototype.on = function (e, t) {
          var n = l.prototype.on.call(this, e, t);
          if ("data" === e) !1 !== this._readableState.flowing && this.resume();
          else if ("readable" === e) {
            var i = this._readableState;
            i.endEmitted ||
              i.readableListening ||
              ((i.readableListening = i.needReadable = !0),
              (i.emittedReadable = !1),
              i.reading ? i.length && E(this) : r.nextTick(S, this));
          }
          return n;
        }),
        (b.prototype.addListener = b.prototype.on),
        (b.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (d("resume"),
              (e.flowing = !0),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), r.nextTick(P, e, t));
              })(this, e)),
            this
          );
        }),
        (b.prototype.pause = function () {
          return (
            d("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (d("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            this
          );
        }),
        (b.prototype.wrap = function (e) {
          var t = this,
            n = this._readableState,
            i = !1;
          for (var r in (e.on("end", function () {
            if ((d("wrapped end"), n.decoder && !n.ended)) {
              var e = n.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (r) {
            (d("wrapped data"),
            n.decoder && (r = n.decoder.write(r)),
            n.objectMode && null == r) ||
              ((n.objectMode || (r && r.length)) &&
                (t.push(r) || ((i = !0), e.pause())));
          }),
          e))
            void 0 === this[r] &&
              "function" == typeof e[r] &&
              (this[r] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(r));
          for (var o = 0; o < v.length; o++)
            e.on(v[o], this.emit.bind(this, v[o]));
          return (
            (this._read = function (t) {
              d("wrapped _read", t), i && ((i = !1), e.resume());
            }),
            this
          );
        }),
        Object.defineProperty(b.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        (b._fromList = I);
    }.call(this, n(2), n(0)));
  },
  function (e, t) {
    var n = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == n.call(e);
      };
  },
  function (e, t, n) {
    e.exports = n(7).EventEmitter;
  },
  function (e, t, n) {
    "use strict";
    var i = n(13);
    function r(e, t) {
      e.emit("error", t);
    }
    e.exports = {
      destroy: function (e, t) {
        var n = this,
          o = this._readableState && this._readableState.destroyed,
          s = this._writableState && this._writableState.destroyed;
        return o || s
          ? (t
              ? t(e)
              : !e ||
                (this._writableState && this._writableState.errorEmitted) ||
                i.nextTick(r, this, e),
            this)
          : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
            this._destroy(e || null, function (e) {
              !t && e
                ? (i.nextTick(r, n, e),
                  n._writableState && (n._writableState.errorEmitted = !0))
                : t && t(e);
            }),
            this);
      },
      undestroy: function () {
        this._readableState &&
          ((this._readableState.destroyed = !1),
          (this._readableState.reading = !1),
          (this._readableState.ended = !1),
          (this._readableState.endEmitted = !1)),
          this._writableState &&
            ((this._writableState.destroyed = !1),
            (this._writableState.ended = !1),
            (this._writableState.ending = !1),
            (this._writableState.finished = !1),
            (this._writableState.errorEmitted = !1));
      },
    };
  },
  function (e, t, n) {
    (function (t) {
      function n(e) {
        try {
          if (!t.localStorage) return !1;
        } catch (e) {
          return !1;
        }
        var n = t.localStorage[e];
        return null != n && "true" === String(n).toLowerCase();
      }
      e.exports = function (e, t) {
        if (n("noDeprecation")) return e;
        var i = !1;
        return function () {
          if (!i) {
            if (n("throwDeprecation")) throw new Error(t);
            n("traceDeprecation") ? console.trace(t) : console.warn(t),
              (i = !0);
          }
          return e.apply(this, arguments);
        };
      };
    }.call(this, n(2)));
  },
  function (e, t, n) {
    "use strict";
    e.exports = s;
    var i = n(4),
      r = Object.create(n(9));
    function o(e, t) {
      var n = this._transformState;
      n.transforming = !1;
      var i = n.writecb;
      if (!i)
        return this.emit(
          "error",
          new Error("write callback called multiple times")
        );
      (n.writechunk = null),
        (n.writecb = null),
        null != t && this.push(t),
        i(e);
      var r = this._readableState;
      (r.reading = !1),
        (r.needReadable || r.length < r.highWaterMark) &&
          this._read(r.highWaterMark);
    }
    function s(e) {
      if (!(this instanceof s)) return new s(e);
      i.call(this, e),
        (this._transformState = {
          afterTransform: o.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", a);
    }
    function a() {
      var e = this;
      "function" == typeof this._flush
        ? this._flush(function (t, n) {
            l(e, t, n);
          })
        : l(this, null, null);
    }
    function l(e, t, n) {
      if (t) return e.emit("error", t);
      if ((null != n && e.push(n), e._writableState.length))
        throw new Error("Calling transform done when ws.length != 0");
      if (e._transformState.transforming)
        throw new Error("Calling transform done when still transforming");
      return e.push(null);
    }
    (r.inherits = n(1)),
      r.inherits(s, i),
      (s.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          i.prototype.push.call(this, e, t)
        );
      }),
      (s.prototype._transform = function (e, t, n) {
        throw new Error("_transform() is not implemented");
      }),
      (s.prototype._write = function (e, t, n) {
        var i = this._transformState;
        if (
          ((i.writecb = n),
          (i.writechunk = e),
          (i.writeencoding = t),
          !i.transforming)
        ) {
          var r = this._readableState;
          (i.needTransform || r.needReadable || r.length < r.highWaterMark) &&
            this._read(r.highWaterMark);
        }
      }),
      (s.prototype._read = function (e) {
        var t = this._transformState;
        null !== t.writechunk && t.writecb && !t.transforming
          ? ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform))
          : (t.needTransform = !0);
      }),
      (s.prototype._destroy = function (e, t) {
        var n = this;
        i.prototype._destroy.call(this, e, function (e) {
          t(e), n.emit("close");
        });
      });
  },
  function (e, t, n) {
    "use strict";
    (function (t, i) {
      var r;
      (e.exports = C), (C.ReadableState = _);
      n(7).EventEmitter;
      var o = function (e, t) {
          return e.listeners(t).length;
        },
        s = n(26),
        a = n(8).Buffer,
        l = t.Uint8Array || function () {};
      var c,
        u = n(53);
      c = u && u.debuglog ? u.debuglog("stream") : function () {};
      var h,
        p,
        d,
        f = n(54),
        m = n(27),
        g = n(28).getHighWaterMark,
        v = n(5).codes,
        y = v.ERR_INVALID_ARG_TYPE,
        b = v.ERR_STREAM_PUSH_AFTER_EOF,
        w = v.ERR_METHOD_NOT_IMPLEMENTED,
        x = v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
      n(1)(C, s);
      var k = m.errorOrDestroy,
        E = ["error", "close", "destroy", "pause", "resume"];
      function _(e, t, i) {
        (r = r || n(6)),
          (e = e || {}),
          "boolean" != typeof i && (i = t instanceof r),
          (this.objectMode = !!e.objectMode),
          i && (this.objectMode = this.objectMode || !!e.readableObjectMode),
          (this.highWaterMark = g(this, e, "readableHighWaterMark", i)),
          (this.buffer = new f()),
          (this.length = 0),
          (this.pipes = null),
          (this.pipesCount = 0),
          (this.flowing = null),
          (this.ended = !1),
          (this.endEmitted = !1),
          (this.reading = !1),
          (this.sync = !0),
          (this.needReadable = !1),
          (this.emittedReadable = !1),
          (this.readableListening = !1),
          (this.resumeScheduled = !1),
          (this.paused = !0),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.destroyed = !1),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.awaitDrain = 0),
          (this.readingMore = !1),
          (this.decoder = null),
          (this.encoding = null),
          e.encoding &&
            (h || (h = n(10).StringDecoder),
            (this.decoder = new h(e.encoding)),
            (this.encoding = e.encoding));
      }
      function C(e) {
        if (((r = r || n(6)), !(this instanceof C))) return new C(e);
        var t = this instanceof r;
        (this._readableState = new _(e, this, t)),
          (this.readable = !0),
          e &&
            ("function" == typeof e.read && (this._read = e.read),
            "function" == typeof e.destroy && (this._destroy = e.destroy)),
          s.call(this);
      }
      function O(e, t, n, i, r) {
        c("readableAddChunk", t);
        var o,
          s = e._readableState;
        if (null === t)
          (s.reading = !1),
            (function (e, t) {
              if ((c("onEofChunk"), t.ended)) return;
              if (t.decoder) {
                var n = t.decoder.end();
                n &&
                  n.length &&
                  (t.buffer.push(n), (t.length += t.objectMode ? 1 : n.length));
              }
              (t.ended = !0),
                t.sync
                  ? T(e)
                  : ((t.needReadable = !1),
                    t.emittedReadable || ((t.emittedReadable = !0), I(e)));
            })(e, s);
        else if (
          (r ||
            (o = (function (e, t) {
              var n;
              (i = t),
                a.isBuffer(i) ||
                  i instanceof l ||
                  "string" == typeof t ||
                  void 0 === t ||
                  e.objectMode ||
                  (n = new y("chunk", ["string", "Buffer", "Uint8Array"], t));
              var i;
              return n;
            })(s, t)),
          o)
        )
          k(e, o);
        else if (s.objectMode || (t && t.length > 0))
          if (
            ("string" == typeof t ||
              s.objectMode ||
              Object.getPrototypeOf(t) === a.prototype ||
              (t = (function (e) {
                return a.from(e);
              })(t)),
            i)
          )
            s.endEmitted ? k(e, new x()) : S(e, s, t, !0);
          else if (s.ended) k(e, new b());
          else {
            if (s.destroyed) return !1;
            (s.reading = !1),
              s.decoder && !n
                ? ((t = s.decoder.write(t)),
                  s.objectMode || 0 !== t.length ? S(e, s, t, !1) : M(e, s))
                : S(e, s, t, !1);
          }
        else i || ((s.reading = !1), M(e, s));
        return !s.ended && (s.length < s.highWaterMark || 0 === s.length);
      }
      function S(e, t, n, i) {
        t.flowing && 0 === t.length && !t.sync
          ? ((t.awaitDrain = 0), e.emit("data", n))
          : ((t.length += t.objectMode ? 1 : n.length),
            i ? t.buffer.unshift(n) : t.buffer.push(n),
            t.needReadable && T(e)),
          M(e, t);
      }
      Object.defineProperty(C.prototype, "destroyed", {
        enumerable: !1,
        get: function () {
          return (
            void 0 !== this._readableState && this._readableState.destroyed
          );
        },
        set: function (e) {
          this._readableState && (this._readableState.destroyed = e);
        },
      }),
        (C.prototype.destroy = m.destroy),
        (C.prototype._undestroy = m.undestroy),
        (C.prototype._destroy = function (e, t) {
          t(e);
        }),
        (C.prototype.push = function (e, t) {
          var n,
            i = this._readableState;
          return (
            i.objectMode
              ? (n = !0)
              : "string" == typeof e &&
                ((t = t || i.defaultEncoding) !== i.encoding &&
                  ((e = a.from(e, t)), (t = "")),
                (n = !0)),
            O(this, e, t, !1, n)
          );
        }),
        (C.prototype.unshift = function (e) {
          return O(this, e, null, !0, !1);
        }),
        (C.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }),
        (C.prototype.setEncoding = function (e) {
          h || (h = n(10).StringDecoder);
          var t = new h(e);
          (this._readableState.decoder = t),
            (this._readableState.encoding = this._readableState.decoder.encoding);
          for (var i = this._readableState.buffer.head, r = ""; null !== i; )
            (r += t.write(i.data)), (i = i.next);
          return (
            this._readableState.buffer.clear(),
            "" !== r && this._readableState.buffer.push(r),
            (this._readableState.length = r.length),
            this
          );
        });
      function P(e, t) {
        return e <= 0 || (0 === t.length && t.ended)
          ? 0
          : t.objectMode
          ? 1
          : e != e
          ? t.flowing && t.length
            ? t.buffer.head.data.length
            : t.length
          : (e > t.highWaterMark &&
              (t.highWaterMark = (function (e) {
                return (
                  e >= 1073741824
                    ? (e = 1073741824)
                    : (e--,
                      (e |= e >>> 1),
                      (e |= e >>> 2),
                      (e |= e >>> 4),
                      (e |= e >>> 8),
                      (e |= e >>> 16),
                      e++),
                  e
                );
              })(e)),
            e <= t.length
              ? e
              : t.ended
              ? t.length
              : ((t.needReadable = !0), 0));
      }
      function T(e) {
        var t = e._readableState;
        c("emitReadable", t.needReadable, t.emittedReadable),
          (t.needReadable = !1),
          t.emittedReadable ||
            (c("emitReadable", t.flowing),
            (t.emittedReadable = !0),
            i.nextTick(I, e));
      }
      function I(e) {
        var t = e._readableState;
        c("emitReadable_", t.destroyed, t.length, t.ended),
          t.destroyed ||
            (!t.length && !t.ended) ||
            (e.emit("readable"), (t.emittedReadable = !1)),
          (t.needReadable =
            !t.flowing && !t.ended && t.length <= t.highWaterMark),
          j(e);
      }
      function M(e, t) {
        t.readingMore || ((t.readingMore = !0), i.nextTick(A, e, t));
      }
      function A(e, t) {
        for (
          ;
          !t.reading &&
          !t.ended &&
          (t.length < t.highWaterMark || (t.flowing && 0 === t.length));

        ) {
          var n = t.length;
          if ((c("maybeReadMore read 0"), e.read(0), n === t.length)) break;
        }
        t.readingMore = !1;
      }
      function L(e) {
        var t = e._readableState;
        (t.readableListening = e.listenerCount("readable") > 0),
          t.resumeScheduled && !t.paused
            ? (t.flowing = !0)
            : e.listenerCount("data") > 0 && e.resume();
      }
      function D(e) {
        c("readable nexttick read 0"), e.read(0);
      }
      function B(e, t) {
        c("resume", t.reading),
          t.reading || e.read(0),
          (t.resumeScheduled = !1),
          e.emit("resume"),
          j(e),
          t.flowing && !t.reading && e.read(0);
      }
      function j(e) {
        var t = e._readableState;
        for (c("flow", t.flowing); t.flowing && null !== e.read(); );
      }
      function R(e, t) {
        return 0 === t.length
          ? null
          : (t.objectMode
              ? (n = t.buffer.shift())
              : !e || e >= t.length
              ? ((n = t.decoder
                  ? t.buffer.join("")
                  : 1 === t.buffer.length
                  ? t.buffer.first()
                  : t.buffer.concat(t.length)),
                t.buffer.clear())
              : (n = t.buffer.consume(e, t.decoder)),
            n);
        var n;
      }
      function V(e) {
        var t = e._readableState;
        c("endReadable", t.endEmitted),
          t.endEmitted || ((t.ended = !0), i.nextTick(N, t, e));
      }
      function N(e, t) {
        if (
          (c("endReadableNT", e.endEmitted, e.length),
          !e.endEmitted &&
            0 === e.length &&
            ((e.endEmitted = !0),
            (t.readable = !1),
            t.emit("end"),
            e.autoDestroy))
        ) {
          var n = t._writableState;
          (!n || (n.autoDestroy && n.finished)) && t.destroy();
        }
      }
      function F(e, t) {
        for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
        return -1;
      }
      (C.prototype.read = function (e) {
        c("read", e), (e = parseInt(e, 10));
        var t = this._readableState,
          n = e;
        if (
          (0 !== e && (t.emittedReadable = !1),
          0 === e &&
            t.needReadable &&
            ((0 !== t.highWaterMark
              ? t.length >= t.highWaterMark
              : t.length > 0) ||
              t.ended))
        )
          return (
            c("read: emitReadable", t.length, t.ended),
            0 === t.length && t.ended ? V(this) : T(this),
            null
          );
        if (0 === (e = P(e, t)) && t.ended)
          return 0 === t.length && V(this), null;
        var i,
          r = t.needReadable;
        return (
          c("need readable", r),
          (0 === t.length || t.length - e < t.highWaterMark) &&
            c("length less than watermark", (r = !0)),
          t.ended || t.reading
            ? c("reading or ended", (r = !1))
            : r &&
              (c("do read"),
              (t.reading = !0),
              (t.sync = !0),
              0 === t.length && (t.needReadable = !0),
              this._read(t.highWaterMark),
              (t.sync = !1),
              t.reading || (e = P(n, t))),
          null === (i = e > 0 ? R(e, t) : null)
            ? ((t.needReadable = t.length <= t.highWaterMark), (e = 0))
            : ((t.length -= e), (t.awaitDrain = 0)),
          0 === t.length &&
            (t.ended || (t.needReadable = !0), n !== e && t.ended && V(this)),
          null !== i && this.emit("data", i),
          i
        );
      }),
        (C.prototype._read = function (e) {
          k(this, new w("_read()"));
        }),
        (C.prototype.pipe = function (e, t) {
          var n = this,
            r = this._readableState;
          switch (r.pipesCount) {
            case 0:
              r.pipes = e;
              break;
            case 1:
              r.pipes = [r.pipes, e];
              break;
            default:
              r.pipes.push(e);
          }
          (r.pipesCount += 1), c("pipe count=%d opts=%j", r.pipesCount, t);
          var s =
            (!t || !1 !== t.end) && e !== i.stdout && e !== i.stderr ? l : g;
          function a(t, i) {
            c("onunpipe"),
              t === n &&
                i &&
                !1 === i.hasUnpiped &&
                ((i.hasUnpiped = !0),
                c("cleanup"),
                e.removeListener("close", f),
                e.removeListener("finish", m),
                e.removeListener("drain", u),
                e.removeListener("error", d),
                e.removeListener("unpipe", a),
                n.removeListener("end", l),
                n.removeListener("end", g),
                n.removeListener("data", p),
                (h = !0),
                !r.awaitDrain ||
                  (e._writableState && !e._writableState.needDrain) ||
                  u());
          }
          function l() {
            c("onend"), e.end();
          }
          r.endEmitted ? i.nextTick(s) : n.once("end", s), e.on("unpipe", a);
          var u = (function (e) {
            return function () {
              var t = e._readableState;
              c("pipeOnDrain", t.awaitDrain),
                t.awaitDrain && t.awaitDrain--,
                0 === t.awaitDrain && o(e, "data") && ((t.flowing = !0), j(e));
            };
          })(n);
          e.on("drain", u);
          var h = !1;
          function p(t) {
            c("ondata");
            var i = e.write(t);
            c("dest.write", i),
              !1 === i &&
                (((1 === r.pipesCount && r.pipes === e) ||
                  (r.pipesCount > 1 && -1 !== F(r.pipes, e))) &&
                  !h &&
                  (c("false write response, pause", r.awaitDrain),
                  r.awaitDrain++),
                n.pause());
          }
          function d(t) {
            c("onerror", t),
              g(),
              e.removeListener("error", d),
              0 === o(e, "error") && k(e, t);
          }
          function f() {
            e.removeListener("finish", m), g();
          }
          function m() {
            c("onfinish"), e.removeListener("close", f), g();
          }
          function g() {
            c("unpipe"), n.unpipe(e);
          }
          return (
            n.on("data", p),
            (function (e, t, n) {
              if ("function" == typeof e.prependListener)
                return e.prependListener(t, n);
              e._events && e._events[t]
                ? Array.isArray(e._events[t])
                  ? e._events[t].unshift(n)
                  : (e._events[t] = [n, e._events[t]])
                : e.on(t, n);
            })(e, "error", d),
            e.once("close", f),
            e.once("finish", m),
            e.emit("pipe", n),
            r.flowing || (c("pipe resume"), n.resume()),
            e
          );
        }),
        (C.prototype.unpipe = function (e) {
          var t = this._readableState,
            n = { hasUnpiped: !1 };
          if (0 === t.pipesCount) return this;
          if (1 === t.pipesCount)
            return (
              (e && e !== t.pipes) ||
                (e || (e = t.pipes),
                (t.pipes = null),
                (t.pipesCount = 0),
                (t.flowing = !1),
                e && e.emit("unpipe", this, n)),
              this
            );
          if (!e) {
            var i = t.pipes,
              r = t.pipesCount;
            (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
            for (var o = 0; o < r; o++)
              i[o].emit("unpipe", this, { hasUnpiped: !1 });
            return this;
          }
          var s = F(t.pipes, e);
          return (
            -1 === s ||
              (t.pipes.splice(s, 1),
              (t.pipesCount -= 1),
              1 === t.pipesCount && (t.pipes = t.pipes[0]),
              e.emit("unpipe", this, n)),
            this
          );
        }),
        (C.prototype.on = function (e, t) {
          var n = s.prototype.on.call(this, e, t),
            r = this._readableState;
          return (
            "data" === e
              ? ((r.readableListening = this.listenerCount("readable") > 0),
                !1 !== r.flowing && this.resume())
              : "readable" === e &&
                (r.endEmitted ||
                  r.readableListening ||
                  ((r.readableListening = r.needReadable = !0),
                  (r.flowing = !1),
                  (r.emittedReadable = !1),
                  c("on readable", r.length, r.reading),
                  r.length ? T(this) : r.reading || i.nextTick(D, this))),
            n
          );
        }),
        (C.prototype.addListener = C.prototype.on),
        (C.prototype.removeListener = function (e, t) {
          var n = s.prototype.removeListener.call(this, e, t);
          return "readable" === e && i.nextTick(L, this), n;
        }),
        (C.prototype.removeAllListeners = function (e) {
          var t = s.prototype.removeAllListeners.apply(this, arguments);
          return ("readable" !== e && void 0 !== e) || i.nextTick(L, this), t;
        }),
        (C.prototype.resume = function () {
          var e = this._readableState;
          return (
            e.flowing ||
              (c("resume"),
              (e.flowing = !e.readableListening),
              (function (e, t) {
                t.resumeScheduled ||
                  ((t.resumeScheduled = !0), i.nextTick(B, e, t));
              })(this, e)),
            (e.paused = !1),
            this
          );
        }),
        (C.prototype.pause = function () {
          return (
            c("call pause flowing=%j", this._readableState.flowing),
            !1 !== this._readableState.flowing &&
              (c("pause"),
              (this._readableState.flowing = !1),
              this.emit("pause")),
            (this._readableState.paused = !0),
            this
          );
        }),
        (C.prototype.wrap = function (e) {
          var t = this,
            n = this._readableState,
            i = !1;
          for (var r in (e.on("end", function () {
            if ((c("wrapped end"), n.decoder && !n.ended)) {
              var e = n.decoder.end();
              e && e.length && t.push(e);
            }
            t.push(null);
          }),
          e.on("data", function (r) {
            (c("wrapped data"),
            n.decoder && (r = n.decoder.write(r)),
            n.objectMode && null == r) ||
              ((n.objectMode || (r && r.length)) &&
                (t.push(r) || ((i = !0), e.pause())));
          }),
          e))
            void 0 === this[r] &&
              "function" == typeof e[r] &&
              (this[r] = (function (t) {
                return function () {
                  return e[t].apply(e, arguments);
                };
              })(r));
          for (var o = 0; o < E.length; o++)
            e.on(E[o], this.emit.bind(this, E[o]));
          return (
            (this._read = function (t) {
              c("wrapped _read", t), i && ((i = !1), e.resume());
            }),
            this
          );
        }),
        "function" == typeof Symbol &&
          (C.prototype[Symbol.asyncIterator] = function () {
            return void 0 === p && (p = n(56)), p(this);
          }),
        Object.defineProperty(C.prototype, "readableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._readableState.highWaterMark;
          },
        }),
        Object.defineProperty(C.prototype, "readableBuffer", {
          enumerable: !1,
          get: function () {
            return this._readableState && this._readableState.buffer;
          },
        }),
        Object.defineProperty(C.prototype, "readableFlowing", {
          enumerable: !1,
          get: function () {
            return this._readableState.flowing;
          },
          set: function (e) {
            this._readableState && (this._readableState.flowing = e);
          },
        }),
        (C._fromList = R),
        Object.defineProperty(C.prototype, "readableLength", {
          enumerable: !1,
          get: function () {
            return this._readableState.length;
          },
        }),
        "function" == typeof Symbol &&
          (C.from = function (e, t) {
            return void 0 === d && (d = n(57)), d(C, e, t);
          });
    }.call(this, n(2), n(0)));
  },
  function (e, t, n) {
    e.exports = n(7).EventEmitter;
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      function n(e, t) {
        r(e, t), i(e);
      }
      function i(e) {
        (e._writableState && !e._writableState.emitClose) ||
          (e._readableState && !e._readableState.emitClose) ||
          e.emit("close");
      }
      function r(e, t) {
        e.emit("error", t);
      }
      e.exports = {
        destroy: function (e, o) {
          var s = this,
            a = this._readableState && this._readableState.destroyed,
            l = this._writableState && this._writableState.destroyed;
          return a || l
            ? (o
                ? o(e)
                : e &&
                  (this._writableState
                    ? this._writableState.errorEmitted ||
                      ((this._writableState.errorEmitted = !0),
                      t.nextTick(r, this, e))
                    : t.nextTick(r, this, e)),
              this)
            : (this._readableState && (this._readableState.destroyed = !0),
              this._writableState && (this._writableState.destroyed = !0),
              this._destroy(e || null, function (e) {
                !o && e
                  ? s._writableState
                    ? s._writableState.errorEmitted
                      ? t.nextTick(i, s)
                      : ((s._writableState.errorEmitted = !0),
                        t.nextTick(n, s, e))
                    : t.nextTick(n, s, e)
                  : o
                  ? (t.nextTick(i, s), o(e))
                  : t.nextTick(i, s);
              }),
              this);
        },
        undestroy: function () {
          this._readableState &&
            ((this._readableState.destroyed = !1),
            (this._readableState.reading = !1),
            (this._readableState.ended = !1),
            (this._readableState.endEmitted = !1)),
            this._writableState &&
              ((this._writableState.destroyed = !1),
              (this._writableState.ended = !1),
              (this._writableState.ending = !1),
              (this._writableState.finalCalled = !1),
              (this._writableState.prefinished = !1),
              (this._writableState.finished = !1),
              (this._writableState.errorEmitted = !1));
        },
        errorOrDestroy: function (e, t) {
          var n = e._readableState,
            i = e._writableState;
          (n && n.autoDestroy) || (i && i.autoDestroy)
            ? e.destroy(t)
            : e.emit("error", t);
        },
      };
    }.call(this, n(0)));
  },
  function (e, t, n) {
    "use strict";
    var i = n(5).codes.ERR_INVALID_OPT_VALUE;
    e.exports = {
      getHighWaterMark: function (e, t, n, r) {
        var o = (function (e, t, n) {
          return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null;
        })(t, r, n);
        if (null != o) {
          if (!isFinite(o) || Math.floor(o) !== o || o < 0)
            throw new i(r ? n : "highWaterMark", o);
          return Math.floor(o);
        }
        return e.objectMode ? 16 : 16384;
      },
    };
  },
  function (e, t, n) {
    "use strict";
    (function (t, i) {
      function r(e) {
        var t = this;
        (this.next = null),
          (this.entry = null),
          (this.finish = function () {
            !(function (e, t, n) {
              var i = e.entry;
              e.entry = null;
              for (; i; ) {
                var r = i.callback;
                t.pendingcb--, r(n), (i = i.next);
              }
              t.corkedRequestsFree.next = e;
            })(t, e);
          });
      }
      var o;
      (e.exports = C), (C.WritableState = _);
      var s = { deprecate: n(23) },
        a = n(26),
        l = n(8).Buffer,
        c = t.Uint8Array || function () {};
      var u,
        h = n(27),
        p = n(28).getHighWaterMark,
        d = n(5).codes,
        f = d.ERR_INVALID_ARG_TYPE,
        m = d.ERR_METHOD_NOT_IMPLEMENTED,
        g = d.ERR_MULTIPLE_CALLBACK,
        v = d.ERR_STREAM_CANNOT_PIPE,
        y = d.ERR_STREAM_DESTROYED,
        b = d.ERR_STREAM_NULL_VALUES,
        w = d.ERR_STREAM_WRITE_AFTER_END,
        x = d.ERR_UNKNOWN_ENCODING,
        k = h.errorOrDestroy;
      function E() {}
      function _(e, t, s) {
        (o = o || n(6)),
          (e = e || {}),
          "boolean" != typeof s && (s = t instanceof o),
          (this.objectMode = !!e.objectMode),
          s && (this.objectMode = this.objectMode || !!e.writableObjectMode),
          (this.highWaterMark = p(this, e, "writableHighWaterMark", s)),
          (this.finalCalled = !1),
          (this.needDrain = !1),
          (this.ending = !1),
          (this.ended = !1),
          (this.finished = !1),
          (this.destroyed = !1);
        var a = !1 === e.decodeStrings;
        (this.decodeStrings = !a),
          (this.defaultEncoding = e.defaultEncoding || "utf8"),
          (this.length = 0),
          (this.writing = !1),
          (this.corked = 0),
          (this.sync = !0),
          (this.bufferProcessing = !1),
          (this.onwrite = function (e) {
            !(function (e, t) {
              var n = e._writableState,
                r = n.sync,
                o = n.writecb;
              if ("function" != typeof o) throw new g();
              if (
                ((function (e) {
                  (e.writing = !1),
                    (e.writecb = null),
                    (e.length -= e.writelen),
                    (e.writelen = 0);
                })(n),
                t)
              )
                !(function (e, t, n, r, o) {
                  --t.pendingcb,
                    n
                      ? (i.nextTick(o, r),
                        i.nextTick(M, e, t),
                        (e._writableState.errorEmitted = !0),
                        k(e, r))
                      : (o(r),
                        (e._writableState.errorEmitted = !0),
                        k(e, r),
                        M(e, t));
                })(e, n, r, t, o);
              else {
                var s = T(n) || e.destroyed;
                s ||
                  n.corked ||
                  n.bufferProcessing ||
                  !n.bufferedRequest ||
                  P(e, n),
                  r ? i.nextTick(S, e, n, s, o) : S(e, n, s, o);
              }
            })(t, e);
          }),
          (this.writecb = null),
          (this.writelen = 0),
          (this.bufferedRequest = null),
          (this.lastBufferedRequest = null),
          (this.pendingcb = 0),
          (this.prefinished = !1),
          (this.errorEmitted = !1),
          (this.emitClose = !1 !== e.emitClose),
          (this.autoDestroy = !!e.autoDestroy),
          (this.bufferedRequestCount = 0),
          (this.corkedRequestsFree = new r(this));
      }
      function C(e) {
        var t = this instanceof (o = o || n(6));
        if (!t && !u.call(C, this)) return new C(e);
        (this._writableState = new _(e, this, t)),
          (this.writable = !0),
          e &&
            ("function" == typeof e.write && (this._write = e.write),
            "function" == typeof e.writev && (this._writev = e.writev),
            "function" == typeof e.destroy && (this._destroy = e.destroy),
            "function" == typeof e.final && (this._final = e.final)),
          a.call(this);
      }
      function O(e, t, n, i, r, o, s) {
        (t.writelen = i),
          (t.writecb = s),
          (t.writing = !0),
          (t.sync = !0),
          t.destroyed
            ? t.onwrite(new y("write"))
            : n
            ? e._writev(r, t.onwrite)
            : e._write(r, o, t.onwrite),
          (t.sync = !1);
      }
      function S(e, t, n, i) {
        n ||
          (function (e, t) {
            0 === t.length &&
              t.needDrain &&
              ((t.needDrain = !1), e.emit("drain"));
          })(e, t),
          t.pendingcb--,
          i(),
          M(e, t);
      }
      function P(e, t) {
        t.bufferProcessing = !0;
        var n = t.bufferedRequest;
        if (e._writev && n && n.next) {
          var i = t.bufferedRequestCount,
            o = new Array(i),
            s = t.corkedRequestsFree;
          s.entry = n;
          for (var a = 0, l = !0; n; )
            (o[a] = n), n.isBuf || (l = !1), (n = n.next), (a += 1);
          (o.allBuffers = l),
            O(e, t, !0, t.length, o, "", s.finish),
            t.pendingcb++,
            (t.lastBufferedRequest = null),
            s.next
              ? ((t.corkedRequestsFree = s.next), (s.next = null))
              : (t.corkedRequestsFree = new r(t)),
            (t.bufferedRequestCount = 0);
        } else {
          for (; n; ) {
            var c = n.chunk,
              u = n.encoding,
              h = n.callback;
            if (
              (O(e, t, !1, t.objectMode ? 1 : c.length, c, u, h),
              (n = n.next),
              t.bufferedRequestCount--,
              t.writing)
            )
              break;
          }
          null === n && (t.lastBufferedRequest = null);
        }
        (t.bufferedRequest = n), (t.bufferProcessing = !1);
      }
      function T(e) {
        return (
          e.ending &&
          0 === e.length &&
          null === e.bufferedRequest &&
          !e.finished &&
          !e.writing
        );
      }
      function I(e, t) {
        e._final(function (n) {
          t.pendingcb--,
            n && k(e, n),
            (t.prefinished = !0),
            e.emit("prefinish"),
            M(e, t);
        });
      }
      function M(e, t) {
        var n = T(t);
        if (
          n &&
          ((function (e, t) {
            t.prefinished ||
              t.finalCalled ||
              ("function" != typeof e._final || t.destroyed
                ? ((t.prefinished = !0), e.emit("prefinish"))
                : (t.pendingcb++, (t.finalCalled = !0), i.nextTick(I, e, t)));
          })(e, t),
          0 === t.pendingcb &&
            ((t.finished = !0), e.emit("finish"), t.autoDestroy))
        ) {
          var r = e._readableState;
          (!r || (r.autoDestroy && r.endEmitted)) && e.destroy();
        }
        return n;
      }
      n(1)(C, a),
        (_.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e; )
            t.push(e), (e = e.next);
          return t;
        }),
        (function () {
          try {
            Object.defineProperty(_.prototype, "buffer", {
              get: s.deprecate(
                function () {
                  return this.getBuffer();
                },
                "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                "DEP0003"
              ),
            });
          } catch (e) {}
        })(),
        "function" == typeof Symbol &&
        Symbol.hasInstance &&
        "function" == typeof Function.prototype[Symbol.hasInstance]
          ? ((u = Function.prototype[Symbol.hasInstance]),
            Object.defineProperty(C, Symbol.hasInstance, {
              value: function (e) {
                return (
                  !!u.call(this, e) ||
                  (this === C && e && e._writableState instanceof _)
                );
              },
            }))
          : (u = function (e) {
              return e instanceof this;
            }),
        (C.prototype.pipe = function () {
          k(this, new v());
        }),
        (C.prototype.write = function (e, t, n) {
          var r,
            o = this._writableState,
            s = !1,
            a = !o.objectMode && ((r = e), l.isBuffer(r) || r instanceof c);
          return (
            a &&
              !l.isBuffer(e) &&
              (e = (function (e) {
                return l.from(e);
              })(e)),
            "function" == typeof t && ((n = t), (t = null)),
            a ? (t = "buffer") : t || (t = o.defaultEncoding),
            "function" != typeof n && (n = E),
            o.ending
              ? (function (e, t) {
                  var n = new w();
                  k(e, n), i.nextTick(t, n);
                })(this, n)
              : (a ||
                  (function (e, t, n, r) {
                    var o;
                    return (
                      null === n
                        ? (o = new b())
                        : "string" == typeof n ||
                          t.objectMode ||
                          (o = new f("chunk", ["string", "Buffer"], n)),
                      !o || (k(e, o), i.nextTick(r, o), !1)
                    );
                  })(this, o, e, n)) &&
                (o.pendingcb++,
                (s = (function (e, t, n, i, r, o) {
                  if (!n) {
                    var s = (function (e, t, n) {
                      e.objectMode ||
                        !1 === e.decodeStrings ||
                        "string" != typeof t ||
                        (t = l.from(t, n));
                      return t;
                    })(t, i, r);
                    i !== s && ((n = !0), (r = "buffer"), (i = s));
                  }
                  var a = t.objectMode ? 1 : i.length;
                  t.length += a;
                  var c = t.length < t.highWaterMark;
                  c || (t.needDrain = !0);
                  if (t.writing || t.corked) {
                    var u = t.lastBufferedRequest;
                    (t.lastBufferedRequest = {
                      chunk: i,
                      encoding: r,
                      isBuf: n,
                      callback: o,
                      next: null,
                    }),
                      u
                        ? (u.next = t.lastBufferedRequest)
                        : (t.bufferedRequest = t.lastBufferedRequest),
                      (t.bufferedRequestCount += 1);
                  } else O(e, t, !1, a, i, r, o);
                  return c;
                })(this, o, a, e, t, n))),
            s
          );
        }),
        (C.prototype.cork = function () {
          this._writableState.corked++;
        }),
        (C.prototype.uncork = function () {
          var e = this._writableState;
          e.corked &&
            (e.corked--,
            e.writing ||
              e.corked ||
              e.bufferProcessing ||
              !e.bufferedRequest ||
              P(this, e));
        }),
        (C.prototype.setDefaultEncoding = function (e) {
          if (
            ("string" == typeof e && (e = e.toLowerCase()),
            !(
              [
                "hex",
                "utf8",
                "utf-8",
                "ascii",
                "binary",
                "base64",
                "ucs2",
                "ucs-2",
                "utf16le",
                "utf-16le",
                "raw",
              ].indexOf((e + "").toLowerCase()) > -1
            ))
          )
            throw new x(e);
          return (this._writableState.defaultEncoding = e), this;
        }),
        Object.defineProperty(C.prototype, "writableBuffer", {
          enumerable: !1,
          get: function () {
            return this._writableState && this._writableState.getBuffer();
          },
        }),
        Object.defineProperty(C.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
        (C.prototype._write = function (e, t, n) {
          n(new m("_write()"));
        }),
        (C.prototype._writev = null),
        (C.prototype.end = function (e, t, n) {
          var r = this._writableState;
          return (
            "function" == typeof e
              ? ((n = e), (e = null), (t = null))
              : "function" == typeof t && ((n = t), (t = null)),
            null != e && this.write(e, t),
            r.corked && ((r.corked = 1), this.uncork()),
            r.ending ||
              (function (e, t, n) {
                (t.ending = !0),
                  M(e, t),
                  n && (t.finished ? i.nextTick(n) : e.once("finish", n));
                (t.ended = !0), (e.writable = !1);
              })(this, r, n),
            this
          );
        }),
        Object.defineProperty(C.prototype, "writableLength", {
          enumerable: !1,
          get: function () {
            return this._writableState.length;
          },
        }),
        Object.defineProperty(C.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._writableState && this._writableState.destroyed
            );
          },
          set: function (e) {
            this._writableState && (this._writableState.destroyed = e);
          },
        }),
        (C.prototype.destroy = h.destroy),
        (C.prototype._undestroy = h.undestroy),
        (C.prototype._destroy = function (e, t) {
          t(e);
        });
    }.call(this, n(2), n(0)));
  },
  function (e, t, n) {
    "use strict";
    e.exports = u;
    var i = n(5).codes,
      r = i.ERR_METHOD_NOT_IMPLEMENTED,
      o = i.ERR_MULTIPLE_CALLBACK,
      s = i.ERR_TRANSFORM_ALREADY_TRANSFORMING,
      a = i.ERR_TRANSFORM_WITH_LENGTH_0,
      l = n(6);
    function c(e, t) {
      var n = this._transformState;
      n.transforming = !1;
      var i = n.writecb;
      if (null === i) return this.emit("error", new o());
      (n.writechunk = null),
        (n.writecb = null),
        null != t && this.push(t),
        i(e);
      var r = this._readableState;
      (r.reading = !1),
        (r.needReadable || r.length < r.highWaterMark) &&
          this._read(r.highWaterMark);
    }
    function u(e) {
      if (!(this instanceof u)) return new u(e);
      l.call(this, e),
        (this._transformState = {
          afterTransform: c.bind(this),
          needTransform: !1,
          transforming: !1,
          writecb: null,
          writechunk: null,
          writeencoding: null,
        }),
        (this._readableState.needReadable = !0),
        (this._readableState.sync = !1),
        e &&
          ("function" == typeof e.transform && (this._transform = e.transform),
          "function" == typeof e.flush && (this._flush = e.flush)),
        this.on("prefinish", h);
    }
    function h() {
      var e = this;
      "function" != typeof this._flush || this._readableState.destroyed
        ? p(this, null, null)
        : this._flush(function (t, n) {
            p(e, t, n);
          });
    }
    function p(e, t, n) {
      if (t) return e.emit("error", t);
      if ((null != n && e.push(n), e._writableState.length)) throw new a();
      if (e._transformState.transforming) throw new s();
      return e.push(null);
    }
    n(1)(u, l),
      (u.prototype.push = function (e, t) {
        return (
          (this._transformState.needTransform = !1),
          l.prototype.push.call(this, e, t)
        );
      }),
      (u.prototype._transform = function (e, t, n) {
        n(new r("_transform()"));
      }),
      (u.prototype._write = function (e, t, n) {
        var i = this._transformState;
        if (
          ((i.writecb = n),
          (i.writechunk = e),
          (i.writeencoding = t),
          !i.transforming)
        ) {
          var r = this._readableState;
          (i.needTransform || r.needReadable || r.length < r.highWaterMark) &&
            this._read(r.highWaterMark);
        }
      }),
      (u.prototype._read = function (e) {
        var t = this._transformState;
        null === t.writechunk || t.transforming
          ? (t.needTransform = !0)
          : ((t.transforming = !0),
            this._transform(t.writechunk, t.writeencoding, t.afterTransform));
      }),
      (u.prototype._destroy = function (e, t) {
        l.prototype._destroy.call(this, e, function (e) {
          t(e);
        });
      });
  },
  function (e, t, n) {
    e.exports = (function (e) {
      "use strict";
      var t = (function (e) {
        return e && "object" == typeof e && "default" in e ? e : { default: e };
      })(e);
      function n(e) {
        return (n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            "value" in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var a = function (e) {
          return document.getElementById(e);
        },
        l = function (e) {
          return document.createElement(e);
        },
        c = function () {
          var e;
          return (e = document).addEventListener.apply(e, arguments);
        },
        u = function () {
          var e;
          return (e = document).removeEventListener.apply(e, arguments);
        },
        h = (function (e, t) {
          return (
            (function (e) {
              var t = (e.exports = {});
              (t.playSVG =
                '\n  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20">\n    <path fill="#999" fill-rule="nonzero" d="M16.224 8.515L2.582.245A1.7 1.7 0 0 0 0 1.702V18.24a1.7 1.7 0 0 0 2.582 1.455l13.642-8.27a1.7 1.7 0 0 0 0-2.91z"/>\n</svg>\n\n'),
                (t.dcSVG =
                  '\n  <svg class="svg" style="transform:scale(0.55)" version="1.0" xmlns="http://www.w3.org/2000/svg"\n width="1705.000000pt" height="1903.000000pt" viewBox="0 0 1705.000000 1903.000000"\n preserveAspectRatio="xMidYMid meet">\n<metadata>\nCreated by potrace 1.15, written by Peter Selinger 2001-2017\n</metadata>\n<g transform="translate(0.000000,1903.000000) scale(0.100000,-0.100000)"\nfill="#000000" stroke="none">\n<path d="M0 9515 l0 -9515 1583 0 1582 0 4430 4655 c2437 2561 4457 4687 4490\n4726 33 38 1164 1227 2513 2642 l2452 2572 0 2192 c0 1206 -2 2193 -4 2193 -3\n0 -1597 -1652 -3542 -3671 l-3538 -3671 -31 35 c-16 20 -1497 1683 -3290 3696\nl-3260 3661 -1692 0 -1693 0 0 -9515z m5504 2412 c1253 -1413 2279 -2574 2282\n-2580 3 -9 -3274 -3438 -4597 -4811 -5 -6 -9 1968 -9 4999 l0 5010 24 -25 c13\n-14 1048 -1181 2300 -2593z"/>\n<path d="M13924 7584 c-34 -17 -2029 -2158 -2029 -2178 0 -15 5121 -5400 5141\n-5404 12 -3 14 295 14 2241 l0 2245 -1478 1543 c-813 849 -1490 1550 -1505\n1557 -38 16 -105 15 -143 -4z"/>\n</g>\n</svg>\n'),
                (t.pauseSVG =
                  '\n  <svg class="svg" style="transform:scale(1.5)" width="100%" height="100%" viewBox="0 0 36 36" >\n    <path id="pause-icon" data-state="playing" d="M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26" />\n  </svg>\n'),
                (t.replaySVG =
                  '\n  <svg class="svg" width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">\n    <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>\n    <g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">\n      <path d="M5356.3,4203.8c-1247.8-153.1-2324.2-811.3-3000.7-1839.7c-379.4-578.2-596.5-1209-660.5-1933.4l-27.4-294.8H883.9c-431.9,0-783.9-6.9-783.9-18.3c0-9.2,477.6-493.7,1062.7-1078.7l1062.7-1062.7L3288.1-961.1C3873.1-376,4350.8,108.5,4350.8,117.6c0,11.4-356.5,18.3-790.7,18.3h-793l18.3,189.7C2831,876.3,2991,1338,3288.1,1779.1C4122.3,3026.9,5706,3472.5,7065.8,2841.8C7639.4,2578.9,8197,2035,8487.3,1461.4C8581,1274,8709,896.9,8754.7,666.1c48-246.8,54.8-811.3,9.1-1055.8C8567.3-1491.3,7788-2394,6720.7-2750.5c-315.4-107.4-541.6-139.4-941.6-139.4c-287.9,0-415.9,11.4-598.8,50.3c-523.3,112-973.6,335.9-1371.2,681c-75.4,68.6-148.5,123.4-160,123.4c-9.1,0-187.4-169.1-393.1-374.8c-434.2-434.2-420.5-363.4-105.1-628.5c852.4-710.7,1972.3-1055.8,3046.4-937c1627.2,176,2977.8,1257,3489.8,2790.4c457.1,1368.9,169.1,2843-777,3969.7C8322.7,3484,7417.8,4000.4,6503.6,4160.4C6197.4,4213,5619.2,4235.8,5356.3,4203.8z"/>\n      <path d="M4990.7,124.5c0-1503.8,4.6-1794,32-1778c16,9.1,505.1,413.6,1085.6,895.8C7113.8,78.8,7161.8,122.2,7122.9,161c-80,75.4-2109.4,1757.5-2120.8,1757.5C4995.3,1918.5,4990.7,1111.8,4990.7,124.5z"/>\n    </g></g>\n  </svg>\n'),
                (t.volumeSVG =
                  '\n  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n   viewBox="0 0 286.374 286.374" enable-background="new 0 0 286.374 286.374" xml:space="preserve">\n    <g id="Volume_2">\n      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M233.636,26.767l-33.372,28.5c25.659,21.07,42.006,52.616,42.006,87.92\n        c0,35.305-16.347,66.851-42.006,87.921l33.372,28.499c32.324-28.869,52.738-70.268,52.738-116.421\n        C286.374,97.034,265.96,55.635,233.636,26.767z M177.737,74.513l-34.69,29.64c15.14,6.818,27.19,21.681,27.19,39.034\n        s-12.05,32.216-27.19,39.034l34.69,29.64c21.294-15.717,36.051-40.586,36.051-68.674C213.788,115.099,199.03,90.23,177.737,74.513z\n         M108.672,48.317L44.746,98.441H17.898C4.671,98.441,0,103.268,0,116.34v53.695c0,13.072,4.951,17.898,17.898,17.898h26.848\n        l63.926,50.068c7.668,4.948,16.558,6.505,16.558-7.365V55.683C125.23,41.813,116.34,43.37,108.672,48.317z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n'),
                (t.volumeMuteSVG =
                  '\n  <svg class="svg" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n   viewBox="0 0 286.277 286.277" enable-background="new 0 0 286.277 286.277" xml:space="preserve">\n    <g id="Volume_none">\n      <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M245.102,143.151l36.98-37.071c5.593-5.605,5.593-14.681,0-20.284\n        l-10.124-10.142c-5.593-5.604-14.655-5.604-20.247,0l-36.98,37.071l-36.977-37.043c-5.594-5.603-14.654-5.603-20.247,0\n        l-10.124,10.143c-5.594,5.603-5.594,14.679,0,20.282l36.987,37.053l-36.961,37.051c-5.591,5.604-5.591,14.681,0,20.284\n        l10.126,10.141c5.593,5.604,14.654,5.604,20.247,0l36.96-37.05l36.97,37.035c5.592,5.605,14.654,5.605,20.247,0l10.124-10.141\n        c5.593-5.603,5.593-14.68,0-20.282L245.102,143.151z M108.674,48.296L44.747,98.42H17.9c-13.228,0-17.899,4.826-17.899,17.898\n        L0,142.719l0.001,27.295c0,13.072,4.951,17.898,17.899,17.898h26.847l63.927,50.068c7.667,4.948,16.557,6.505,16.557-7.365V55.662\n        C125.23,41.792,116.341,43.349,108.674,48.296z"/>\n    </g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\n  </svg>\n'),
                (t.settingsSVG =
                  '\n  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n    <path fill="#999" fill-rule="nonzero" d="M17.812 7.52h-1.474a7.09 7.09 0 0 0-.604-1.456l1.043-1.042a1.187 1.187 0 0 0 0-1.68l-1.12-1.118a1.188 1.188 0 0 0-1.68 0l-1.043 1.042a7.05 7.05 0 0 0-1.455-.604V1.188C11.48.531 10.948 0 10.292 0H8.708c-.656 0-1.187.532-1.187 1.188v1.474a7.1 7.1 0 0 0-1.456.604L5.022 2.224a1.187 1.187 0 0 0-1.68 0l-1.12 1.12a1.188 1.188 0 0 0 0 1.68l1.044 1.042c-.256.46-.458.949-.604 1.455H1.188C.531 7.52 0 8.052 0 8.708v1.584c0 .656.532 1.187 1.188 1.187h1.474c.146.507.348.995.604 1.456L2.22 13.979a1.188 1.188 0 0 0 0 1.68l1.12 1.119a1.223 1.223 0 0 0 1.68 0l1.043-1.043c.462.255.95.458 1.457.605v1.472c0 .656.531 1.188 1.187 1.188h1.584c.656 0 1.187-.532 1.187-1.188V16.34c.506-.147.995-.35 1.456-.604l1.043 1.043a1.188 1.188 0 0 0 1.68 0l1.119-1.12a1.187 1.187 0 0 0 0-1.679l-1.043-1.043c.256-.461.458-.95.604-1.456h1.474A1.188 1.188 0 0 0 19 10.29V8.709c0-.656-.532-1.187-1.188-1.187zM9.5 13.459a3.958 3.958 0 1 1 0-7.916 3.958 3.958 0 0 1 0 7.916z"/>\n</svg>\n\n'),
                (t.arrowRightSVG =
                  '\n  <svg class="svg arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">\n    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n  </svg>\n'),
                (t.arrowLeftSVG =
                  '\n  <svg class="svg arrow" class="svg" width="100%" height="100%" viewBox="0 0 50 80" xml:space="preserve">\n    <polyline fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n  </svg> \n'),
                (t.fullScreenSVG =
                  '\n <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n    <g fill="#999" fill-rule="nonzero">\n        <path d="M18.802 1.942A1.746 1.746 0 0 0 17.06.2h-4.537a.99.99 0 1 0 0 1.98h4.102c.11 0 .198.088.198.197v2.588a.99.99 0 1 0 1.98 0V1.942zM.198 4.965a.99.99 0 0 0 1.98 0v-2.59a.198.198 0 0 1 .197-.199h4.102a.99.99 0 0 0 0-1.979H1.944C.983.2.204.978.202 1.94L.198 4.965zM18.802 17.056v-3.023a.99.99 0 1 0-1.98 0v2.592c0 .11-.088.198-.197.198h-4.102a.99.99 0 1 0 0 1.98h4.533c.964-.001 1.746-.783 1.746-1.747zM.198 17.056a1.746 1.746 0 0 0 1.746 1.742h4.533a.99.99 0 1 0 0-1.979H2.375a.198.198 0 0 1-.198-.194v-2.592a.99.99 0 1 0-1.98 0v3.023z"/>\n        <rect width="10.651" height="6.117" x="4.174" y="6.441" rx="1.954"/>\n    </g>\n</svg>\n\n'),
                (t.loopSVG =
                  '\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22">\n    <g fill="#999" fill-rule="nonzero">\n        <path d="M16.773 15.476H16.3a1.25 1.25 0 0 0 0 2.5h.478a6.944 6.944 0 0 0 .98-13.823.251.251 0 0 1-.208-.246V1.93A1.25 1.25 0 0 0 15.584.906l-4.778 3.341a1.25 1.25 0 0 0 .717 2.274h4.764c2.829 0 4.963 1.925 4.963 4.478a4.482 4.482 0 0 1-4.477 4.477zM6.247 17.845c.12.02.208.124.208.246v1.976a1.249 1.249 0 0 0 1.966 1.024l4.773-3.34a1.251 1.251 0 0 0-.717-2.275H7.713c-2.829 0-4.963-1.925-4.963-4.476a4.482 4.482 0 0 1 4.477-4.479h.478a1.25 1.25 0 1 0 0-2.5h-.478a6.945 6.945 0 0 0-.98 13.824z"/>\n    </g>\n</svg>\n'),
                (t.loadingSVG =
                  '<svg class="lds-spinner" style="transform:scale(.3)" width="200px"  height="200px"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" style="background: none;"><g transform="rotate(0 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(30 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(60 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(90 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(120 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(150 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(180 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(210 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(240 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(270 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(300 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>\n  </rect>\n</g><g transform="rotate(330 50 50)">\n  <rect x="47" y="24" rx="9.4" ry="4.8" width="6" height="12" fill="#999">\n    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>\n  </rect>\n</g></svg>');
            })((t = { exports: {} })),
            t.exports
          );
        })(),
        p = {
          name: "mc-player",
          set playerName(e) {
            this.name += "-" + e;
          },
        },
        d = function (e, t) {
          return {
            default: {
              "settings-background-color": "whitesmoke",
              "hms-background-color": "whitesmoke",
              "background-color": "whitesmoke",
              "grad-height": "0px",
              color: "black",
              "svg-color": "black",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "red",
              "cursor-color": "red",
              "speedbar-cursor-color": "red",
              "button-opacity": "1",
              "hover-color": "rgba(200, 200, 200, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "red",
              "preview-border": "2px solid #fff",
              border: "1px solid rgba(255,255,255,0.2)",
              "controls-border": "none",
              "svg-selected-color": "red",
              "loopbar-boundaries-style::before": "",
              "loopbar-boundaries-style::after": "",
              "theme-style": "",
              "loopbar-boundaries-color": "#808086",
            },
            dark: {
              "settings-background-color": "black",
              "hms-background-color": "black",
              "background-color": "black",
              "grad-height": "0px",
              color: "white",
              "svg-color": "white",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "red",
              "cursor-color": "red",
              "speedbar-cursor-color": "red",
              "button-opacity": "1",
              "hover-color": "rgba(90, 90, 90, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "red",
              "preview-border": "2px solid rgba(0,0,0,1)",
              border: "1px solid rgba(255,255,255,0.2)",
              "controls-border": "none",
              "svg-selected-color": "red",
              "loopbar-boundaries-style::before": "",
              "loopbar-boundaries-style::after": "",
              "theme-style": "",
              "loopbar-boundaries-color": "#808086",
            },
            whiteGold: {
              "settings-background-color": "white",
              "hms-background-color": "white",
              "background-color": "white",
              "grad-height": "0px",
              color: "#a17f1a",
              "svg-color": "#a17f1a",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "#a17f1a",
              "cursor-color": "#a17f1a",
              "speedbar-cursor-color": "#a17f1a",
              "button-opacity": "1",
              "hover-color": "rgba(200, 200, 200, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "#a17f1a",
              "preview-border": "2px solid #808086",
              border: "1px solid rgba(255,255,255,0.2)",
              "controls-border": "none",
              "svg-selected-color": "red",
              "loopbar-boundaries-style::before": "",
              "loopbar-boundaries-style::after": "",
              "theme-style": "",
              "loopbar-boundaries-color": "#808086",
            },
            darkGold: {
              "settings-background-color": "black",
              "hms-background-color": "black",
              "background-color": "black",
              "grad-height": "0px",
              color: "#a17f1a",
              "svg-color": "#a17f1a",
              "loopbar-color": "#808086",
              "speedbar-color": "#999",
              "runningbar-color": "#a17f1a",
              "cursor-color": "#a17f1a",
              "speedbar-cursor-color": "#a17f1a",
              "button-opacity": "1",
              "hover-color": "rgba(90, 90, 90, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "#a17f1a",
              "preview-border": "2px solid #808086",
              border: "1px solid rgba(255,255,255,0.2)",
              "controls-border": "none",
              "svg-selected-color": "red",
              "loopbar-boundaries-style::before": "",
              "loopbar-boundaries-style::after": "",
              "theme-style": "",
              "loopbar-boundaries-color": "#808086",
            },
            transparent: {
              "background-color": "transparent",
              "settings-background-color": "rgba(0,0,0,0.9)",
              "hms-background-color": "rgba(0,0,0,0.5)",
              "preview-border": "2px solid #fff",
              color: "#e8eaeb",
              "grad-height": "200px",
              "svg-color": "#e8eaeb",
              "loopbar-color": "#cfcfd0",
              "totalbar-color": "#797979",
              "speedbar-color": "#999",
              "runningbar-color": "red",
              "cursor-color": "#9e2d11",
              "cursor-style::before":
                '\n        box-shadow: 0px 0px 6px 6px red;\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        background-color: red;\n        position: relative;\n        left: -2px;\n        top: -2px;\n    ',
              "cursor-style::after":
                '\n        width: 6px;\n        height: 6px;\n        border-radius: 100%;\n        box-shadow: 0px 0px 6px 6px red;\n        content: "";\n        display: block;\n        position: absolute;\n        background-color: red;\n        right: -2px;\n        bottom: -2px;\n    ',
              "speedbar-cursor-color": "red",
              "button-opacity": "1",
              "hover-color": "rgba(200, 200, 200, 0.5)",
              "slider-off-color": "#ccc",
              "slider-on-color": "red",
              border: "1px solid rgba(255,255,255,0.1)",
              "svg-selected-color": "red",
              "loopbar-boundaries-style":
                "\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #ff0000;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #ff0000;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ",
              "loopbar-boundaries-style::before":
                '\n            width: 16px;\n        height: 5px;\n        background: #ff0000;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',
              "loopbar-boundaries-style::after":
                '\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #ff0000;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',
              "theme-style": "\n        #".concat(
                t,
                "-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    "
              ),
            },
            "mc-green": {
              "background-color": "#141416",
              "settings-background-color": "rgba(0,0,0,0.9)",
              "hms-background-color": "rgba(0,0,0,0.5)",
              "preview-border": "2px solid #254a42",
              color: "#999",
              "grad-height": "0px",
              "svg-color": "#999",
              "loopbar-color": "rgba(0,184,139,0.2)",
              "loopbar-boundaries-color": "#00b88b",
              "totalbar-color": "rgba(255, 255, 255, 0.11)",
              "speedbar-color": "#999",
              "runningbar-color": "#00b88b",
              "cursor-color": "#00b88b",
              "speedbar-cursor-color": "#00b88b",
              "button-opacity": "1",
              "hover-color": "rgba(0,184,139,0.2)",
              "slider-off-color": "#ccc",
              "slider-on-color": "#00b88b",
              border: "1px solid rgba(255,255,255,0.1)",
              "controls-border": "1px solid #151515",
              "svg-selected-color": "#00b88b",
              "loopbar-boundaries-style":
                "\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #00b88b;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #00b88b;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ",
              "loopbar-boundaries-style::before":
                '\n            width: 16px;\n        height: 5px;\n        background: #00b88b;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',
              "loopbar-boundaries-style::after":
                '\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #00b88b;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',
              "theme-style": "\n        #".concat(
                t,
                "-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    "
              ),
            },
            "mc-blue": {
              "background-color": "#141416",
              "settings-background-color": "rgba(0,0,0,0.9)",
              "hms-background-color": "rgba(0,0,0,0.5)",
              "preview-border": "2px solid #254453",
              color: "#999",
              "grad-height": "0px",
              "svg-color": "#999",
              "loopbar-color": "rgba(0,153,225,0.2)",
              "loopbar-boundaries-color": "#0099e1",
              "totalbar-color": "rgba(255, 255, 255, 0.11)",
              "speedbar-color": "#999",
              "runningbar-color": "#0099e1",
              "cursor-color": "#0099e1",
              "speedbar-cursor-color": "#0099e1",
              "button-opacity": "1",
              "hover-color": "rgba(0,153,225,0.2)",
              "slider-off-color": "#ccc",
              "slider-on-color": "#0099e1",
              border: "1px solid rgba(255,255,255,0.1)",
              "controls-border": "1px solid #151515",
              "svg-selected-color": "#0099e1",
              "loopbar-boundaries-style":
                "\n        transform: translate(-50%,-37%);\n        position: absolute;\n        width: 18px;\n        background-color: #0099e1;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        position: absolute;\n        width: 18px;\n        background-color: #0099e1;\n        height: 18px;\n        border-radius: 10px;\n        z-index: 40;\n        width: 18px;\n        height: 9px;\n        border-radius: 100%;\n        top: 1.5px;\n    ",
              "loopbar-boundaries-style::before":
                '\n            width: 16px;\n        height: 5px;\n        background: #0099e1;\n        border-radius: 100%;\n        display: block;\n        content: "";\n        position: relative;\n        left: -2px;\n        top: 2px;\n    ',
              "loopbar-boundaries-style::after":
                '\n        width: 14px;\n        height: 11px;\n        border-radius: 100%;\n        background: #0099e1;\n        content: "";\n        display: block;\n        position: relative;\n        top: -6px;\n        left: 5px;\n    ',
              "theme-style": "\n        #".concat(
                t,
                "-loopbar-start {\n            left: -9px !important;\n            transform: rotate(180deg);\n            top: -2px;\n        }\n    "
              ),
            },
            "on-top": {
              "background-height": "100%",
              "pointer-event-panel-height": "calc(100% - 44px)",
              "controls-bottom": "0px",
              "settings-panel-bottom": "48px",
              "controls-position": "0px",
            },
            "position-bottom": {
              "background-height": "calc(100% - 44px)",
              "pointer-event-panel-height": "calc(100% - 44px)",
              "controls-bottom": "-0px",
              "settings-panel-bottom": "48px",
              "controls-position": "40px",
            },
          }[e];
        },
        f = a,
        m = l,
        g = c,
        v = u,
        y = a,
        b = function (e, t, i) {
          if (void 0 !== n(i)) {
            if (!1 === i) {
              (e.elements.volumeBarActive.style.width =
                100 * e.settings.previousVolume + "%"),
                e.clip.setVolume(e.settings.previousVolume),
                (e.settings.volumeMute = !1);
              var r = document.createElement("span");
              (r.innerHTML = h.volumeSVG),
                e.elements.volumeBtn
                  .getElementsByTagName("svg")[0]
                  .replaceWith(r);
            } else if (!0 === i) {
              (e.settings.volumeMute = !0),
                (e.elements.volumeBarActive.style.width = "0%"),
                e.clip.setVolume(0);
              var o = document.createElement("span");
              (o.innerHTML = h.volumeMuteSVG),
                e.elements.volumeBtn
                  .getElementsByTagName("svg")[0]
                  .replaceWith(o);
            }
            (e.options.muted = e.settings.volumeMute),
              e.eventBroadcast("mute-change", e.settings.volumeMute);
          }
          if (void 0 !== n(t)) {
            if (
              ((e.settings.volume = t),
              e.settings.volume > 0 && (e.settings.previousVolume = t),
              (e.elements.volumeBarActive.style.width =
                100 * e.settings.volume + "%"),
              e.clip.setVolume(e.settings.volume),
              e.settings.volume > 0)
            ) {
              e.settings.volumeMute = !1;
              var s = document.createElement("span");
              (s.innerHTML = h.volumeSVG),
                e.elements.volumeBtn
                  .getElementsByTagName("svg")[0]
                  .replaceWith(s);
            } else if (0 === e.settings.volume) {
              e.settings.volumeMute = !0;
              var a = document.createElement("span");
              (a.innerHTML = h.volumeMuteSVG),
                e.elements.volumeBtn
                  .getElementsByTagName("svg")[0]
                  .replaceWith(a);
            }
            (e.options.volume = e.settings.volume),
              e.eventBroadcast("volume-change", e.settings.volume),
              e.eventBroadcast("mute-change", e.settings.volumeMute);
          }
        },
        w = c,
        x = u,
        k = c,
        E = u,
        _ = c,
        C = u,
        O = a,
        S = c,
        P = u,
        T = function (e, t) {
          t && t.preventDefault();
          var n = O("".concat(e.name, "-show-indicator-checkbox"));
          n.checked
            ? ((n.checked = !1),
              (e.elements.indicator.style.visibility = "hidden"))
            : ((n.checked = !0),
              (e.elements.indicator.style.visibility = "visible")),
            e.eventBroadcast("show-indicator-change", n.checked);
        },
        I = function (e, t) {
          t && t.preventDefault();
          var n = O("".concat(e.name, "-pointer-events-checkbox"));
          n.checked
            ? ((n.checked = !1),
              (e.elements.mcPlayer.style.pointerEvents = "none"),
              (e.elements.pointerEventPanel.style.pointerEvents = "auto"),
              (O("".concat(e.name, "-controls")).style.pointerEvents = "auto"),
              (e.elements.settingsPanel.style.pointerEvents = "auto"))
            : ((n.checked = !0),
              (e.options.pointerEvents = !1),
              (e.elements.mcPlayer.style.pointerEvents = "none"),
              (e.elements.pointerEventPanel.style.pointerEvents = "none"),
              (O("".concat(e.name, "-controls")).style.pointerEvents = "auto"),
              (e.elements.settingsPanel.style.pointerEvents = "auto")),
            e.eventBroadcast("show-pointer-events-change", n.checked);
        },
        M = function (e, t) {
          t && t.preventDefault(),
            e.elements.volumeControl.classList.toggle(
              "".concat(e.name, "-volume-width-transition")
            ),
            e.elements.volumeControl.classList.toggle(
              "".concat(e.name, "-hide")
            );
          var n = O("".concat(e.name, "-show-volume-checkbox"));
          n.checked
            ? ((n.checked = !1),
              (e.elements.volumeControl.style.visibility = "hidden"),
              (e.elements.timeDisplay.style.left = "45px"))
            : ((n.checked = !0),
              (e.elements.volumeControl.style.visibility = "visible"),
              (e.elements.timeDisplay.style.left = "")),
            e.eventBroadcast("show-volume-change", n.checked);
        },
        A = function (e, t) {
          t && t.preventDefault();
          var n = O("".concat(e.name, "-show-preview-checkbox"));
          n.checked
            ? ((n.checked = !1),
              (O("".concat(e.name, "-hover-display")).style.visibility =
                "hidden"),
              (O("".concat(e.name, "-hover-display")).style.display = "none"),
              (e.options.preview = !1))
            : (e.previewClip || e.createPreviewDisplay(),
              (n.checked = !0),
              (O("".concat(e.name, "-hover-display")).style.visibility =
                "visible"),
              (O("".concat(e.name, "-hover-display")).style.display = "flex"),
              (e.options.preview = !0)),
            e.eventBroadcast("show-preview-change", n.checked);
        },
        L = function (e, t) {
          "showIndicator" === t
            ? T(e)
            : "showPointerEvents" === t
            ? I(e)
            : "showVolume" === t
            ? M(e)
            : "showPreview" === t && A(e);
        },
        D = a,
        B = c,
        j = u,
        R = a,
        V = function (e) {
          (e.settings.loopActivated = !e.settings.loopActivated),
            e.eventBroadcast("loop-change", e.settings.loopActivated),
            e.elements.loopButton.classList.toggle("svg-selected"),
            e.elements.loopBarStart.classList.toggle("m-fadeOut"),
            e.elements.loopBarEnd.classList.toggle("m-fadeOut"),
            e.elements.loopBarStart.classList.toggle("m-fadeIn"),
            e.elements.loopBarStart.classList.toggle(
              "".concat(e.name, "-hide")
            ),
            e.elements.loopBarEnd.classList.toggle("m-fadeIn"),
            e.elements.loopBarEnd.classList.toggle("".concat(e.name, "-hide")),
            R("".concat(e.name, "-loop-time")).classList.toggle("m-fadeOut"),
            R("".concat(e.name, "-loop-time")).classList.toggle("m-fadeIn"),
            R("".concat(e.name, "-loop-time")).classList.toggle(
              "".concat(e.name, "-hide")
            ),
            (e.elements.loopEndTime.innerHTML = e.settings.loopEndMillisecond),
            (e.elements.loopStartTime.innerHTML =
              e.settings.loopStartMillisecond),
            (e.settings.needsUpdate = !0),
            e.settings.loopActivated ||
              ((e.elements.loopBar.style.left = "0%"),
              (e.elements.loopBar.style.width = "100%"),
              (e.settings.loopStartMillisecond = 0),
              (e.settings.loopEndMillisecond = e.clip.duration),
              (e.settings.loopLastPositionXPxls = 0),
              (e.settings.loopLastPositionXPercentage = 0),
              (e.elements.runningBar.style.width =
                (e.clip.runTimeInfo.currentMillisecond / e.clip.duration) *
                  100 +
                "%"));
        },
        N = V,
        F = a;
      function $(e, t) {
        for (var n = t.parentNode; null != n; ) {
          if (n == e) return !0;
          n = n.parentNode;
        }
        return !1;
      }
      var z = function (e) {
          var t = e.clip.props.host.className.includes("full-screen");
          e.clip.props.host !== e.options.host &&
            !t &&
            e.clip.props.host.appendChild(e.elements.mcPlayer),
            e.clip.props.host !== e.options.host &&
              t &&
              e.options.host.appendChild(e.elements.mcPlayer),
            t ? e.exitFullscreen() : e.launchIntoFullscreen(e.clip.props.host);
        },
        H = z,
        U = function () {
          var e = new Date().getTime();
          return "xxxxxxxx-xxxx".replace(/[xy]/g, function (t) {
            var n = (e + 16 * Math.random()) % 16 | 0;
            e = Math.floor(e / 16);
            var i = Math.random() > 0.5,
              r = ("x" == t ? n : (3 & n) | 8).toString(16);
            return i ? r.toUpperCase() : r;
          });
        },
        W = a,
        q = c,
        G = u,
        J = function (e) {
          return document.querySelectorAll(e);
        },
        K = a,
        Y = new t.default.TimeCapsule(),
        X = a,
        Q = function (e) {
          return document.getElementsByTagName(e);
        },
        Z = l,
        ee = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          function i(e) {
            return "number" == typeof e && isFinite(e);
          }
          var r = new RegExp("^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)", "gi"),
            o = null,
            s = null;
          if (Object.prototype.hasOwnProperty.call(e, "width")) {
            var a = e.width.match(r)[0],
              l = e.width.substring(a.length);
            o =
              !i(Number(a)) || ("%" !== l && "px" !== l)
                ? null
                : { number: Number(a), unit: l };
          }
          if (Object.prototype.hasOwnProperty.call(e, "height")) {
            var c = e.height.match(r)[0],
              u = e.height.substring(c.length);
            s =
              !i(Number(c)) || ("%" !== u && "px" !== u)
                ? null
                : { number: Number(c), unit: u };
          }
          var h = 1,
            p = 1;
          null !== o &&
            "px" === o.unit &&
            o.number !== t.width &&
            (h = t.width / o.number),
            null !== s &&
              "px" === s.unit &&
              s.number !== t.height &&
              (p = t.height / s.number);
          var d = 1;
          d = n ? (p > h ? p : h) : p <= h ? p : h;
          var f = {};
          if (null !== o) {
            var m;
            m = "px" === o.unit ? o.number * d : (o.number / 100) * t.width * d;
            var g = t.width - m;
            f.left = g / 2;
          }
          if (null !== o) {
            var v;
            v =
              "px" === s.unit ? s.number * d : (s.number / 100) * t.height * d;
            var y = t.height - v;
            f.top = y / 2;
          }
          return { scale: d, position: f };
        };
      return (function () {
        function e(t) {
          var n,
            i = this;
          for (var r in ((function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
          (t.id = t.id || Date.now()),
          (t.preview = t.preview || !1),
          (t.showVolume = t.showVolume || !1),
          (t.showIndicator = t.showIndicator || !1),
          (t.theme = t.theme || "transparent on-top"),
          (t.host = t.host || t.clip.props.host),
          (t.buttons = t.buttons || {}),
          (t.timeFormat = t.timeFormat || "ss"),
          (t.backgroundColor = t.backgroundColor || "black"),
          (t.fullscreen = t.fullscreen || !1),
          (t.scaleToFit = null === (n = t.scaleToFit) || void 0 === n || n),
          void 0 === t.pointerEvents || null === t.pointerEvents
            ? (t.pointerEvents = !1)
            : (t.pointerEvents = Boolean(t.pointerEvents)),
          (t.onMillisecondChange = t.onMillisecondChange || null),
          (t.speedValues = t.speedValues || [-2, -1, -0.5, 0, 0.5, 1, 2]),
          (t.muted = t.muted || !1),
          (t.controls = 0 != t.controls),
          (t.loop = t.loop || !1),
          (t.volume = void 0 !== t.volume ? t.volume : 1),
          (t.currentScript = t.currentScript || null),
          t.speedValues))
            isFinite(t.speedValues[r]) || t.speedValues.splice(r, 1);
          t.speedValues.sort(function (e, t) {
            return e - t;
          }),
            (this.className = p.name),
            (p.playerName = t.id),
            (this.options = t),
            (this.id = this.options.id),
            (this.name = p.name),
            (this.previewClip = null),
            (this.clip = t.clip),
            (this.clipClass = t.clipClass),
            (this.state = this.clip.runTimeInfo.state),
            (this.listeners = {}),
            (this.previewScale = 0.25),
            (this.settings = {
              volume: 1,
              journey: null,
              previousVolume: 1,
              volumeMute: !1,
              needsUpdate: !0,
              resizeLoop: !1,
              loopJourney: !1,
              previewJourney: null,
              loopActivated: !1,
              requestingLoop: !1,
              playAfterResize: !1,
              loopStartMillisecond: 0,
              loopLastPositionXPxls: 0,
              loopLastPositionXPercentage: 0,
              loopEndMillisecond: this.clip.duration,
              controls: !0,
            }),
            (function (e) {
              e.elements = {};
              var t = e.clip.props.host;
              t.offsetWidth ||
                (t.style.width = e.clip.props.containerParams.width),
                t.offsetHeight ||
                  (t.style.height = e.clip.props.containerParams.height);
              var n = document.createElement("link");
              (n.rel = "preconnect"), (n.href = "https://fonts.gstatic.com");
              var i = document.createElement("link");
              (i.rel = "stylesheet"),
                (i.href =
                  "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap");
              var r = document.getElementsByTagName("head")[0];
              if (
                (r.appendChild(n),
                r.appendChild(i),
                (t.style.display = "flex"),
                (t.style.justifyContent = "center"),
                (t.style.alignItems = "center"),
                (t.style.overflow = "hidden"),
                (e.clip.props.host.style.position = "relative"),
                (e.clip.props.host.style.zIndex = "0"),
                (e.elements.mcPlayer = m("div")),
                (e.elements.mcPlayer.id = "".concat(e.name)),
                (e.elements.mcPlayer.className = "".concat(e.className)),
                (e.elements.mcPlayer.innerHTML = (function (e) {
                  return '\n  <div\n    class="pointer-event-panel"\n    id="'
                    .concat(
                      e.name,
                      '-pointer-event-panel"\n  ></div>\n  <div\n    class="pointer-event-panel"\n    id="'
                    )
                    .concat(
                      e.name,
                      '-listener-helper"\n  ></div>\n  <div class="background"></div>\n  <div id="'
                    )
                    .concat(
                      e.name,
                      '-controls">\n    <div class="grad"></div>\n    <div id="'
                    )
                    .concat(e.name, '-totalbar">\n      <div id="')
                    .concat(e.name, '-hover-display">\n        <div id="')
                    .concat(
                      e.name,
                      '-hover-display-border"> </div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-hover-display-clip"> </div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-hover-millisecond"></div>\n      </div>\n      <div id="'
                    )
                    .concat(
                      e.name,
                      '-loopbar">\n        <div\n          class="'
                    )
                    .concat(e.name, '-loop-boundaries"\n          id="')
                    .concat(
                      e.name,
                      '-loopbar-start"\n        ></div>\n        <div\n          class="'
                    )
                    .concat(e.name, '-loop-boundaries"\n          id="')
                    .concat(
                      e.name,
                      '-loopbar-end"\n        ></div>\n        <div id="'
                    )
                    .concat(e.name, '-helperbar"></div>\n        <div id="')
                    .concat(e.name, '-runningbar">\n          <div id="')
                    .concat(
                      e.name,
                      '-cursor"></div>\n        </div>\n      </div>\n    </div>\n    <div id="'
                    )
                    .concat(e.name, '-left-controls">\n      <div id="')
                    .concat(e.name, '-status-btn">\n        ')
                    .concat(e.svg.playSVG, '\n        <span id="')
                    .concat(
                      e.name,
                      '-indicator"></span>\n      </div>\n      <div id="'
                    )
                    .concat(e.name, '-volume">\n        <div id="')
                    .concat(e.name, '-volume-btn">\n          ')
                    .concat(
                      e.svg.volumeSVG,
                      '\n        </div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-volumebar-helper"></div>\n        <div id="'
                    )
                    .concat(e.name, '-volumebar">\n            <div id="')
                    .concat(
                      e.name,
                      '-volumebar-active">\n              <div id="'
                    )
                    .concat(
                      e.name,
                      '-volume-cursor"></div>\n            </div>\n        </div>\n      </div>\n      <div id="'
                    )
                    .concat(e.name, '-time-display">\n        <span id="')
                    .concat(
                      e.name,
                      '-time-current"></span>\n        <span id="'
                    )
                    .concat(
                      e.name,
                      '-time-separator"></span>\n        <span id="'
                    )
                    .concat(
                      e.name,
                      '-time-total"></span>\n      </div>\n    </div>\n    <div id="'
                    )
                    .concat(
                      e.name,
                      '-right-controls">\n      <div\n        id="'
                    )
                    .concat(
                      e.name,
                      '-loop-btn-container"\n      >\n        <div\n          id="'
                    )
                    .concat(e.name, '-loop-btn"\n        >')
                    .concat(
                      e.svg.loopSVG,
                      '</div>\n        <div\n          id="'
                    )
                    .concat(
                      e.name,
                      '-loop-time"\n        >\n          <span\n            id="'
                    )
                    .concat(e.name, '-loopbar-start-time"\n            class="')
                    .concat(
                      e.name,
                      '-loopbar-time"\n          ></span>\n          <span>:</span>\n          <span\n            id="'
                    )
                    .concat(e.name, '-loopbar-end-time"\n            class="')
                    .concat(
                      e.name,
                      '-loopbar-time"\n          ></span>\n        </div>\n      </div>\n      <div\n        id="'
                    )
                    .concat(e.name, '-settings-btn"\n      >')
                    .concat(
                      e.svg.settingsSVG,
                      '</div>\n      <div\n        id="'
                    )
                    .concat(e.name, '-dc-btn"\n      >\n        ')
                    .concat(
                      e.svg.dcSVG,
                      '\n      </div>\n      \n      <div\n        id="'
                    )
                    .concat(e.name, '-full-screen-btn"\n      >')
                    .concat(
                      e.svg.fullScreenSVG,
                      '</div>\n    </div>\n    \n\n  </div>\n  <div id="'
                    )
                    .concat(e.name, '-settings-panel">\n    <ul id="')
                    .concat(e.name, '-main-settings">\n      <li id="')
                    .concat(
                      e.name,
                      '-settings-pointer-events">\n        <label>Pointer Events</label>\n        <label class="switch settings-switch">\n          <input id="'
                    )
                    .concat(
                      e.name,
                      '-pointer-events-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
                    )
                    .concat(
                      e.name,
                      '-settings-preview">\n        <label>Show Preview</label>\n        <label class="switch settings-switch">\n          <input id="'
                    )
                    .concat(
                      e.name,
                      '-show-preview-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
                    )
                    .concat(
                      e.name,
                      '-settings-indicator">\n        <label>Show Indicator</label>\n        <label class="switch settings-switch">\n          <input id="'
                    )
                    .concat(
                      e.name,
                      '-show-indicator-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
                    )
                    .concat(
                      e.name,
                      '-settings-volume">\n        <label>Show Volume</label>\n        <label class="switch settings-switch">\n          <input id="'
                    )
                    .concat(
                      e.name,
                      '-show-volume-checkbox" type="checkbox">\n          <span class="slider round"></span>\n        </label>\n      </li>\n      <li id="'
                    )
                    .concat(
                      e.name,
                      '-settings-speed-show">\n        <label>Speed</label>\n        <div class="'
                    )
                    .concat(e.name, '-speed-btn">')
                    .concat(e.svg.arrowRightSVG, '</div>\n        <span id="')
                    .concat(
                      e.name,
                      '-speed-current"></span>\n      </li>\n    </ul>\n    <ul id="'
                    )
                    .concat(e.name, '-speed-settings">\n      <li id="')
                    .concat(
                      e.name,
                      '-settings-speed-hide">\n        <div class="'
                    )
                    .concat(e.name, '-speed-btn">')
                    .concat(e.svg.arrowLeftSVG, "</div>\n        <label id=")
                    .concat(
                      e.name,
                      '-speed-runtime>Speed</label>\n      </li>\n      <li>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-speed-value-helperbar"></div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-speed-value-bar">\n          <div\n            class="'
                    )
                    .concat(e.name, '-speed-value-step"\n            id="')
                    .concat(
                      e.name,
                      '-speed-cursor"\n          >\n            <div></div>\n          </div>\n        </div>\n        <div id="'
                    )
                    .concat(
                      e.name,
                      '-speed-value">\n        </div>\n      </li>\n    </ul>\n  </div>\n'
                    );
                })({ svg: h, name: e.name })),
                "string" == typeof e.options.host)
              ) {
                var o = document.querySelectorAll(e.options.host);
                for (var s in o)
                  isNaN(s) || o[s].appendChild(e.elements.mcPlayer);
              } else e.options.host.appendChild(e.elements.mcPlayer);
              for (var a in ((e.elements.pointerEventPanel = f(
                "".concat(e.name, "-pointer-event-panel")
              )),
              (e.elements.listenerHelper = f(
                "".concat(e.name, "-listener-helper")
              )),
              (e.elements.loopBar = f("".concat(e.name, "-loopbar"))),
              (e.elements.totalBar = f("".concat(e.name, "-totalbar"))),
              (e.elements.indicator = f("".concat(e.name, "-indicator"))),
              (e.elements.loopButton = f("".concat(e.name, "-loop-btn"))),
              (e.elements.volumeBar = f("".concat(e.name, "-volumebar"))),
              (e.elements.totalTime = f("".concat(e.name, "-time-total"))),
              (e.elements.volumeControl = f("".concat(e.name, "-volume"))),
              (e.elements.volumeBtn = f("".concat(e.name, "-volume-btn"))),
              (e.elements.runningBar = f("".concat(e.name, "-runningbar"))),
              (e.elements.loopBarEnd = f("".concat(e.name, "-loopbar-end"))),
              (e.elements.statusButton = f("".concat(e.name, "-status-btn"))),
              (e.elements.speedBar = f("".concat(e.name, "-speed-value-bar"))),
              (e.elements.currentTime = f("".concat(e.name, "-time-current"))),
              (e.elements.timeDisplay = f("".concat(e.name, "-time-display"))),
              (e.elements.speedCurrent = f(
                "".concat(e.name, "-speed-current")
              )),
              (e.elements.loopBarStart = f(
                "".concat(e.name, "-loopbar-start")
              )),
              (e.elements.volumeCursor = f(
                "".concat(e.name, "-volume-cursor")
              )),
              (e.elements.settingsButton = f(
                "".concat(e.name, "-settings-btn")
              )),
              (e.elements.donkeyclipButton = f("".concat(e.name, "-dc-btn"))),
              (e.elements.timeSeparator = f(
                "".concat(e.name, "-time-separator")
              )),
              (e.elements.settingsPanel = f(
                "".concat(e.name, "-settings-panel")
              )),
              (e.elements.settingsMainPanel = f(
                "".concat(e.name, "-main-settings")
              )),
              (e.elements.fullScreenButton = f(
                "".concat(e.name, "-full-screen-btn")
              )),
              (e.elements.volumeBarHelper = f(
                "".concat(e.name, "-volumebar-helper")
              )),
              (e.elements.volumeBarActive = f(
                "".concat(e.name, "-volumebar-active")
              )),
              (e.elements.settingsSpeedPanel = f(
                "".concat(e.name, "-speed-settings")
              )),
              (e.elements.settingsShowVolume = f(
                "".concat(e.name, "-settings-volume")
              )),
              (e.elements.settingsShowPreview = f(
                "".concat(e.name, "-settings-preview")
              )),
              (e.elements.settingsPointerEvents = f(
                "".concat(e.name, "-settings-pointer-events")
              )),
              (e.elements.speedBarHelper = f(
                "".concat(e.name, "-speed-value-helperbar")
              )),
              (e.elements.settingsShowIndicator = f(
                "".concat(e.name, "-settings-indicator")
              )),
              (e.elements.settingsSpeedButtonShow = f(
                "".concat(e.name, "-settings-speed-show")
              )),
              (e.elements.settingsSpeedButtonHide = f(
                "".concat(e.name, "-settings-speed-hide")
              )),
              (e.elements.volumeBarActive.style.width =
                100 * e.settings.volume + "%"),
              (e.elements.currentTime.innerHTML = e.timeFormat(0)),
              (e.elements.totalTime.innerHTML = e.timeFormat(e.clip.duration)),
              (e.elements.timeSeparator.innerHTML = "/"),
              e.elements.settingsPanel.classList.add(
                "m-fadeOut",
                "".concat(e.name, "-hide")
              ),
              e.options.showIndicator
                ? ((e.elements.indicator.style.visibility = "visible"),
                  (e.elements.statusButton.style.width = "35px"),
                  (e.elements.statusButton.style.height = "20px"),
                  (e.elements.statusButton.style.bottom = "5px"))
                : (e.elements.indicator.style.visibility = "hidden"),
              (e.elements.indicator.innerHTML = e.clip.runTimeInfo.state),
              (e.elements.settingsSpeedPanel.style.display = "none"),
              e.elements.settingsSpeedPanel
                .getElementsByTagName("li")[1]
                .classList.add("no-hover"),
              (e.elements.loopBarStart.style.left = "0%"),
              e.elements.loopBarStart.classList.add(
                "m-fadeOut",
                "".concat(e.name, "-hide")
              ),
              (e.elements.loopBarEnd.style.left = "100%"),
              e.elements.loopBarEnd.classList.add(
                "m-fadeOut",
                "".concat(e.name, "-hide")
              ),
              (e.elements.loopStartTime = f(
                "".concat(e.name, "-loopbar-start-time")
              )),
              (e.elements.loopEndTime = f(
                "".concat(e.name, "-loopbar-end-time")
              )),
              (e.elements.editableLoopStartTime = document.createElement(
                "input"
              )),
              (e.elements.editableLoopStartTime.type = "text"),
              (e.elements.editableLoopStartTime.size =
                f("".concat(e.name, "-time-total")).innerHTML.length + 1),
              (e.elements.editableLoopStartTime.maxLength = f(
                "".concat(e.name, "-time-total")
              ).innerHTML.length),
              (e.elements.editableLoopStartTime.style.height = f(
                "".concat(e.name, "-time-total")
              ).offsetHeight),
              (e.elements.editableLoopStartTime.value = f(
                "".concat(e.name, "-loopbar-start-time")
              ).innerHTML),
              (e.elements.editableLoopStartTime.style.fontSize = "8px"),
              (e.elements.editableLoopEndTime = document.createElement(
                "input"
              )),
              (e.elements.editableLoopEndTime.type = "text"),
              (e.elements.editableLoopEndTime.size =
                f("".concat(e.name, "-time-total")).innerHTML.length + 1),
              (e.elements.editableLoopEndTime.maxLength = f(
                "".concat(e.name, "-time-total")
              ).innerHTML.length),
              (e.elements.editableLoopEndTime.style.height = f(
                "".concat(e.name, "-time-total")
              ).offsetHeight),
              (e.elements.editableLoopEndTime.value = f(
                "".concat(e.name, "-loopbar-start-time")
              ).innerHTML),
              (e.elements.editableLoopEndTime.pattern = "d*"),
              (e.elements.editableLoopEndTime.style.fontSize = "8px"),
              f("".concat(e.name, "-loop-time")).classList.add(
                "m-fadeOut",
                "".concat(e.name, "-hide")
              ),
              f("".concat(e.name, "-hover-display")).classList.add("m-fadeOut"),
              (f("".concat(e.name, "-show-volume-checkbox")).checked =
                e.options.showVolume),
              (f("".concat(e.name, "-show-indicator-checkbox")).checked =
                e.options.showIndicator),
              (f("".concat(e.name, "-show-preview-checkbox")).checked =
                e.options.preview),
              (f("".concat(e.name, "-pointer-events-checkbox")).checked =
                e.options.pointerEvents),
              e.options.pointerEvents
                ? ((e.elements.mcPlayer.style.pointerEvents = "none"),
                  (e.elements.pointerEventPanel.style.pointerEvents = "none"),
                  (f("".concat(e.name, "-controls")).style.pointerEvents =
                    "auto"),
                  (e.elements.settingsPanel.style.pointerEvents = "auto"))
                : ((e.elements.mcPlayer.style.pointerEvents = "none"),
                  (e.elements.pointerEventPanel.style.pointerEvents = "auto"),
                  (f("".concat(e.name, "-controls")).style.pointerEvents =
                    "auto"),
                  (e.elements.settingsPanel.style.pointerEvents = "auto")),
              (e.elements.listenerHelper.style.pointerEvents = "none"),
              e.options.showVolume
                ? ((e.elements.timeDisplay.style.left = ""),
                  (e.elements.volumeControl.style.visibility = "visible"))
                : ((e.elements.timeDisplay.style.left = "45px"),
                  (e.elements.volumeControl.style.visibility = "hidden"),
                  e.elements.volumeControl.classList.toggle(
                    "".concat(e.name, "-hide")
                  ),
                  e.elements.volumeControl.classList.toggle(
                    "".concat(e.name, "-volume-width-transition")
                  )),
              e.options.speedValues)) {
                var l = m("div");
                l.className = "".concat(e.name, "-speed-value-step");
                var c = m("div");
                (c.className = "".concat(e.name, "-speed-value")),
                  (c.dataset.speedValue = e.options.speedValues[a]),
                  (c.innerHTML = e.options.speedValues[a]),
                  (c.dataset.zone = a),
                  f("".concat(e.name, "-speed-value")).prepend(c),
                  e.elements.speedBar.prepend(l);
              }
              !1 === e.options.buttons.fullScreen &&
                e.elements.fullScreenButton.remove(),
                !1 === e.options.buttons.settings &&
                  e.elements.settingsButton.remove(),
                !1 === e.options.buttons.donkeyclip &&
                  e.elements.donkeyclipButton.remove(),
                !1 === e.options.buttons.loop && e.elements.loopButton.remove();
            })(this),
            this.setTheme(),
            this.setSpeed(),
            this.subscribeToTimer(),
            this.subscribeToDurationChange(),
            this.addEventListeners(),
            this.scaleClipHost(),
            this.eventBroadcast("state-change", this.state),
            this.options.preview && this.createPreviewDisplay(),
            (this.resizeTimeout = setTimeout(function () {}, 20)),
            window.addEventListener("resize", function () {
              clearTimeout(i.resizeTimeout),
                (i.resizeTimeout = setTimeout(function () {
                  i.options.preview && i.setPreviewDimentions(),
                    i.options.scaleToFit && i.scaleClipHost();
                }, 20));
            }),
            this.changeSettings(t, !0);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: "changeSettings",
              value: function (e, t) {
                (e.theme = e.theme || "transparent on-top"),
                  (e.speed = e.speed || 1),
                  (e.volume = e.volume || 1),
                  (e.clip = e.clip || this.clip),
                  e.clip !== this.options.clip &&
                    ((t = !0),
                    (this.clip = e.clip),
                    (this.options.clip = e.clip)),
                  !1 === e.controls
                    ? (X(this.name).style.display = "none")
                    : !0 === e.controls &&
                      (X(this.name).style.display = "unset"),
                  void 0 !== e.loop &&
                    (this.options.loop !== e.loop ||
                      (t && this.options.loop)) &&
                    N(this),
                  void 0 !== e.fullscreen &&
                    (this.options.fullscreen !== e.fullscreen ||
                      (t && this.options.fullscreen)) &&
                    H(this),
                  void 0 !== e.muted &&
                    (this.options.muted !== e.muted ||
                      (t && this.options.muted)) &&
                    b(this, void 0, e.mute),
                  void 0 !== e.volume &&
                    (this.options.volume !== e.volume ||
                      (t && this.options.volume)) &&
                    b(this, e.volume, void 0),
                  void 0 !== e.speed &&
                    (this.options.speed !== e.speed ||
                      (t && this.options.speed)) &&
                    (function (e, t) {
                      var n;
                      (t = parseFloat(t) || 1),
                        e.eventBroadcast("speed-change", t),
                        (n = 1 == t ? "Normal" : t),
                        (e.clip.executionSpeed = t),
                        (e.elements.speedCurrent.innerHTML = n);
                    })(this, e.speed),
                  void 0 !== e.scaleToFit &&
                    (this.options.scaleToFit !== e.scaleToFit ||
                      (t && this.options.scaleToFit)) &&
                    ((this.options.scaleToFit = e.scaleToFit),
                    this.scaleClipHost()),
                  void 0 !== e.showVolume &&
                    this.options.showVolume !== e.showVolume &&
                    L(this, "showVolume"),
                  void 0 !== e.preview &&
                    this.options.preview !== e.preview &&
                    L(this, "showPreview"),
                  void 0 !== e.theme &&
                    this.options.theme !== e.theme &&
                    ((this.options.theme = e.theme), this.setTheme()),
                  (this.options = s(s({}, this.options), e));
              },
            },
            {
              key: "scaleClipHost",
              value: function () {
                if (this.options.scaleToFit) {
                  var e = this.clip.props.containerParams.width,
                    t = this.clip.props.containerParams.height,
                    n = ee(
                      { width: e, height: t },
                      {
                        width: this.clip.props.host.offsetWidth,
                        height: this.clip.props.host.offsetHeight,
                      },
                      "cover" === this.options.scaleToFit
                    );
                  (this.clip.realClip.rootElement.style.transform = "scale(".concat(
                    n.scale
                  )),
                    (this.clip.realClip.rootElement.style.left =
                      n.position.left + "px"),
                    (this.clip.realClip.rootElement.style.top =
                      n.position.top + "px");
                } else
                  (this.clip.realClip.rootElement.style.transform = "scale(1)"),
                    (this.clip.realClip.rootElement.style.left = "0px"),
                    (this.clip.realClip.rootElement.style.top = "0px");
                this.eventBroadcast("scale-change", this.options.scaleToFit);
              },
            },
            {
              key: "createLoop",
              value: function (e, t) {
                (this.settings.loopStartMillisecond = e),
                  (this.settings.loopEndMillisecond = t),
                  (this.elements.loopBar.style.left =
                    (e / this.clip.duration) * 100 + "%"),
                  (this.elements.loopBar.style.width =
                    ((t - e) / this.clip.duration) * 100 + "%"),
                  this.createJourney(e),
                  (this.elements.runningBar.style.width = "0%"),
                  !this.settings.loopActivated && N(this);
              },
            },
            {
              key: "createJourney",
              value: function (e) {
                var t = this,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = this.clip;
                setTimeout(function () {
                  var r = n.before,
                    o = void 0 === r ? null : r,
                    s = n.after,
                    a = void 0 === s ? null : s;
                  o && i[o](),
                    (t.settings.journey = Y.startJourney(i)),
                    t.settings.journey.station(e),
                    t.settings.journey.destination(),
                    a && i[a]();
                }, 0);
              },
            },
            {
              key: "millisecondChange",
              value: function (e, t, n, i) {
                var r =
                  !(arguments.length > 4 && void 0 !== arguments[4]) ||
                  arguments[4];
                if (
                  (this.state !== t &&
                    ((this.state = t), this.eventBroadcast("state-change", t)),
                  !this.settings.needsUpdate)
                )
                  return this.clip.pause(), 1;
                var o = this.settings,
                  s = o.loopActivated,
                  a = o.loopEndMillisecond,
                  l = o.loopStartMillisecond,
                  c = this.clip.duration,
                  u = this.elements,
                  h = u.totalBar,
                  p = u.loopBar,
                  d = p.offsetWidth,
                  f = p.offsetLeft / h.offsetWidth,
                  m = e - c * f,
                  g = (c / h.offsetWidth) * d;
                return e >= a && s && this.clip.speed >= 0
                  ? (this.createJourney(l + 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : e >= a && s && this.clip.speed < 0
                  ? (this.createJourney(a - 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : e <= l && s && this.clip.speed >= 0
                  ? (this.createJourney(l + 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : e <= l && s && this.clip.speed < 0
                  ? (this.createJourney(a - 1, {
                      after:
                        this.settings.playAfterResize ||
                        "playing" == this.clip.runTimeInfo.state
                          ? "play"
                          : null,
                    }),
                    1)
                  : (i &&
                      this.createJourney(e, {
                        after: this.settings.playAfterResize ? "play" : null,
                      }),
                    (this.elements.runningBar.style.width =
                      (m / g) * 100 + "%"),
                    (this.elements.currentTime.innerHTML = this.timeFormat(e)),
                    void (
                      this.options.onMillisecondChange &&
                      r &&
                      this.options.onMillisecondChange(e)
                    ));
              },
            },
            {
              key: "eventBroadcast",
              value: function (e, t) {
                var n = X("".concat(this.name, "-controls"));
                "state-change" === e
                  ? (this.options.currentScript &&
                      (this.options.currentScript.dataset.status = t),
                    "paused" === t ||
                    "idle" === t ||
                    "transitional" === t ||
                    "armed" === t ||
                    "blocked" === t
                      ? (n.classList.value.includes("force-show-controls") ||
                          n.classList.toggle("force-show-controls"),
                        (this.elements.statusButton.innerHTML = h.playSVG),
                        this.elements.statusButton.appendChild(
                          this.elements.indicator
                        ),
                        (this.elements.indicator.innerHTML = "".concat(
                          t.charAt(0).toUpperCase() + t.slice(1)
                        )),
                        (this.elements.pointerEventPanel.innerHTML =
                          "blocked" === t
                            ? '\n            <div style="width:100%;height:100%;background:rgba(0,0,0,0.5);display:flex;justify-content:center;align-items:center;">'.concat(
                                h.loadingSVG,
                                "</div>"
                              )
                            : ""))
                      : (n.classList.value.includes("force-show-controls") &&
                          n.classList.toggle("force-show-controls"),
                        (this.elements.statusButton.innerHTML = h.pauseSVG),
                        this.elements.statusButton.appendChild(
                          this.elements.indicator
                        ),
                        (this.elements.indicator.innerHTML = "Playing"),
                        (this.elements.pointerEventPanel.innerHTML = ""),
                        "playing" === t &&
                        this.clip.runTimeInfo.currentMillisecond ===
                          this.clip.duration &&
                        this.clip.speed >= 0
                          ? this.createJourney(1, { after: "play" })
                          : (("playing" === t &&
                              0 === this.clip.runTimeInfo.currentMillisecond &&
                              this.clip.speed < 0) ||
                              ("playing" === t &&
                                this.clip.runTimeInfo.currentMillisecond ===
                                  this.clip.duration &&
                                this.clip.speed < 0)) &&
                            this.createJourney(this.clip.duration - 1, {
                              after: "play",
                            })))
                  : "duration-change" === e
                  ? ((this.elements.totalTime.innerHTML = this.timeFormat(
                      this.clip.duration
                    )),
                    (this.settings.loopEndMillisecond = this.clip.duration),
                    (this.elements.pointerEventPanel.innerHTML = ""),
                    this.millisecondChange(
                      this.clip.runTimeInfo.currentMillisecond
                    ))
                  : this.options.currentScript &&
                    ("volume-change" === e
                      ? ((this.options.volume = t),
                        (this.options.currentScript.dataset.volume = t))
                      : "speed-change" === e
                      ? ((this.options.speed = t),
                        (this.options.currentScript.dataset.speed = t))
                      : "mute-change" === e
                      ? t
                        ? ((this.options.muted = !0),
                          (this.options.currentScript.dataset.muted = ""))
                        : ((this.options.muted = !1),
                          delete this.options.currentScript.dataset.muted)
                      : "loop-change" === e
                      ? t
                        ? ((this.options.loop = !0),
                          (this.options.currentScript.dataset.loop = ""))
                        : ((this.options.loop = !1),
                          delete this.options.currentScript.dataset.loop)
                      : "scale-change" === e
                      ? t
                        ? ((this.options.scaleToFit = !0),
                          (this.options.currentScript.dataset.scaleToFit = ""))
                        : ((this.options.scaleToFit = !1),
                          delete this.options.currentScript.dataset.scaleToFit)
                      : "show-volume-change" === e
                      ? t
                        ? ((this.options.showVolume = !0),
                          (this.options.currentScript.dataset.showVolume = ""))
                        : ((this.options.showVolume = !1),
                          delete this.options.currentScript.dataset.showVolume)
                      : "show-preview-change" === e &&
                        (t
                          ? ((this.options.preview = !0),
                            (this.options.currentScript.dataset.preview = ""))
                          : ((this.options.preview = !1),
                            delete this.options.currentScript.dataset
                              .preview)));
              },
            },
            {
              key: "subscribeToDurationChange",
              value: function () {
                this.clip.subscribeToDurationChange(
                  this.subscribeToDurationChangeCallback.bind(this)
                );
              },
            },
            {
              key: "subscribeToDurationChangeCallback",
              value: function () {
                this.eventBroadcast("duration-change");
              },
            },
            {
              key: "subscribeToTimer",
              value: function () {
                this.clip.subscribe(this.id, this.millisecondChange.bind(this));
              },
            },
            {
              key: "handleDragStart",
              value: function () {
                (this.settings.needsUpdate = !0),
                  (this.settings.journey = Y.startJourney(this.clip));
              },
            },
            {
              key: "timeFormat",
              value: function (e) {
                if ("ss" === this.options.timeFormat) {
                  var t = e / 1e3 / 60 / 60,
                    n = (t % 1) * 60,
                    i = (n % 1) * 60,
                    r = ("0" + parseInt(t)).slice(-2),
                    o = ("0" + parseInt(n)).slice(-2),
                    s = ("0" + parseInt(i)).slice(-2);
                  return ""
                    .concat("00" === r ? "" : r + ":")
                    .concat(o, ":")
                    .concat(s);
                }
                return e;
              },
            },
            {
              key: "handleDrag",
              value: function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                isFinite(e) || (e = 0);
                var n = this.clip.duration,
                  i = this.settings.journey,
                  r = this.elements,
                  o = r.loopBar,
                  s = r.totalBar,
                  a = r.runningBar,
                  l = r.currentTime,
                  c = e + o.offsetLeft,
                  u = Math.round((n * c) / s.offsetWidth);
                (l.innerHTML = this.timeFormat(u)),
                  (a.style.width = (e / o.offsetWidth) * 100 + "%"),
                  i.station(u),
                  this.options.onMillisecondChange &&
                    t &&
                    this.options.onMillisecondChange(u);
              },
            },
            {
              key: "handleDragEnd",
              value: function () {
                this.settings.journey.destination();
              },
            },
            {
              key: "createProgressDrag",
              value: function (e) {
                this.handleDragStart(),
                  this.handleDrag(e),
                  this.handleDragEnd();
              },
            },
            {
              key: "addEventListeners",
              value: function () {
                var e;
                ((e = this).listeners.onCursorMoveLoopEnd = function (t) {
                  t.preventDefault();
                  var n =
                    (t.clientX || ((t.touches || [])[0] || {}).clientX) -
                    e.elements.totalBar.getBoundingClientRect().left;
                  n < 0
                    ? (n = 0)
                    : n > e.elements.totalBar.offsetWidth &&
                      (n = e.elements.totalBar.offsetWidth),
                    e.elements.runningBar.offsetWidth >=
                      e.elements.loopBar.offsetWidth &&
                      (e.elements.runningBar.style.width =
                        e.elements.loopBar.offsetWidth + "px"),
                    e.settings.loopLastPositionXPxls - n < 0
                      ? (e.elements.loopBar.style.width =
                          Math.abs(e.settings.loopLastPositionXPxls - n) + "px")
                      : ((e.elements.loopBar.style.left = n + "px"),
                        (e.settings.loopLastPositionXPxls = n)),
                    (e.settings.loopEndMillisecond = Math.round(
                      (e.clip.duration *
                        ((parseFloat(e.elements.loopBar.style.left) || 0) +
                          parseFloat(e.elements.loopBar.style.width))) /
                        e.elements.totalBar.offsetWidth
                    )),
                    e.settings.loopEndMillisecond <
                      e.clip.runTimeInfo.currentMillisecond &&
                      (e.settings.loopJourney = !0),
                    e.settings.loopStartMillisecond >
                      e.settings.loopEndMillisecond &&
                      ((e.settings.loopStartMillisecond =
                        e.settings.loopEndMillisecond),
                      (e.settings.loopJourney = !0)),
                    (e.elements.loopEndTime.innerHTML =
                      e.settings.loopEndMillisecond),
                    (e.elements.loopStartTime.innerHTML =
                      e.settings.loopStartMillisecond);
                }),
                  (e.listeners.onMouseUpLoopEnd = function (t) {
                    if (
                      ((e.elements.listenerHelper.style.pointerEvents = "none"),
                      (e.settings.resizeLoop = !1),
                      t.preventDefault(),
                      (e.elements.runningBar.style.width =
                        (e.elements.runningBar.offsetWidth /
                          e.elements.loopBar.offsetWidth) *
                          100 +
                        "%"),
                      (e.elements.loopBar.style.left =
                        (e.elements.loopBar.offsetLeft /
                          e.elements.totalBar.offsetWidth) *
                          100 +
                        "%"),
                      (e.elements.loopBar.style.width =
                        (e.elements.loopBar.offsetWidth /
                          e.elements.totalBar.offsetWidth) *
                          100 +
                        "%"),
                      e.settings.loopJourney &&
                        (e.createProgressDrag(
                          e.elements.runningBar.offsetWidth
                        ),
                        (e.settings.loopJourney = !1)),
                      E("mouseup", e.listeners.onMouseUpLoopEnd, !1),
                      E("touchend", e.listeners.onMouseUpLoopEnd, !1),
                      E("mousemove", e.listeners.onCursorMoveLoopEnd, !1),
                      E("touchmove", e.listeners.onCursorMoveLoopEnd, !1),
                      e.elements.loopBar.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDown,
                        !1
                      ),
                      e.elements.loopBar.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDown,
                        { passive: !0 },
                        !1
                      ),
                      e.settings.playAfterResize)
                    ) {
                      var n;
                      if ("idle" === e.clip.runTimeInfo.state)
                        (n =
                          e.clip.speed >= 0
                            ? e.settings.loopStartMillisecond + 1
                            : e.settings.loopEndMillisecond - 1),
                          (e.settings.needsUpdate = !0),
                          e.createJourney(n, {
                            before: "pause",
                            after: "play",
                          });
                      else if ("completed" === e.clip.runTimeInfo.state) {
                        var i;
                        (i =
                          e.clip.speed >= 0
                            ? e.settings.loopStartMillisecond + 1
                            : e.settings.loopEndMillisecond - 1),
                          (e.settings.needsUpdate = !0),
                          e.createJourney(i, {
                            before: "pause",
                            after: "play",
                          });
                      } else e.clip.play();
                      e.settings.playAfterResize = !1;
                    }
                  }),
                  (e.listeners.onMouseDownLoopEnd = function (t) {
                    (e.elements.listenerHelper.style.pointerEvents = "auto"),
                      (e.settings.resizeLoop = !0),
                      (e.settings.needsUpdate = !0),
                      "playing" === e.clip.runTimeInfo.state &&
                        (e.clip.pause(), (e.settings.playAfterResize = !0)),
                      t.preventDefault(),
                      (e.elements.runningBar.style.width =
                        e.elements.runningBar.offsetWidth + "px"),
                      (e.elements.loopBar.style.left =
                        e.elements.loopBar.offsetLeft + "px"),
                      (e.elements.loopBar.style.width =
                        e.elements.loopBar.offsetWidth + "px"),
                      e.elements.loopBar.removeEventListener(
                        "mousedown",
                        e.listeners.onMouseDown,
                        !1
                      ),
                      e.elements.loopBar.removeEventListener(
                        "touchstart",
                        e.listeners.onMouseDown,
                        !1
                      ),
                      e.listeners.onCursorMoveLoopEnd(t),
                      k("mouseup", e.listeners.onMouseUpLoopEnd, !1),
                      k("touchend", e.listeners.onMouseUpLoopEnd, !1),
                      k("mousemove", e.listeners.onCursorMoveLoopEnd, !1),
                      k("touchmove", e.listeners.onCursorMoveLoopEnd, !1);
                  }),
                  e.elements.loopBarEnd.addEventListener(
                    "mousedown",
                    e.listeners.onMouseDownLoopEnd,
                    !1
                  ),
                  e.elements.loopBarEnd.addEventListener(
                    "touchstart",
                    e.listeners.onMouseDownLoopEnd,
                    { passive: !1 },
                    !1
                  ),
                  (function (e) {
                    (e.listeners.onCursorMove = function (t) {
                      t.preventDefault();
                      var n =
                        (t.clientX || ((t.touches || [])[0] || {}).clientX) -
                        e.elements.loopBar.getBoundingClientRect().left;
                      n < 0
                        ? (n = 0)
                        : n > e.elements.loopBar.offsetWidth &&
                          (n = e.elements.loopBar.offsetWidth),
                        e.handleDrag(n);
                    }),
                      (e.listeners.onMouseUp = function () {
                        (e.elements.listenerHelper.style.pointerEvents =
                          "none"),
                          C("mouseup", e.listeners.onMouseUp, !1),
                          C("touchend", e.listeners.onMouseUp, !1),
                          C("mousemove", e.listeners.onCursorMove, !1),
                          C("touchmove", e.listeners.onCursorMove, !1),
                          e.handleDragEnd(e.settings);
                      }),
                      (e.listeners.onMouseDown = function (t) {
                        (e.elements.listenerHelper.style.pointerEvents =
                          "auto"),
                          "playing" === e.clip.runTimeInfo.state &&
                            (e.settings.playAfterResize = !0),
                          e.handleDragStart(e.clip),
                          e.listeners.onCursorMove(t),
                          _("mouseup", e.listeners.onMouseUp, !1),
                          _("touchend", e.listeners.onMouseUp, !1),
                          _("mousemove", e.listeners.onCursorMove, !1),
                          _("touchmove", e.listeners.onCursorMove, !1);
                      }),
                      e.elements.loopBar.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDown,
                        !1
                      ),
                      e.elements.loopBar.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDown,
                        { passive: !1 },
                        !1
                      );
                  })(this),
                  (function (e) {
                    (e.listeners.onCursorMoveLoopStart = function (t) {
                      t.preventDefault();
                      var n = t.clientX || ((t.touches || [])[0] || {}).clientX,
                        i = e.elements.totalBar.getBoundingClientRect(),
                        r = Math.round(n - i.left),
                        o = Math.round(
                          (e.settings.loopEndMillisecond / e.clip.duration) *
                            e.elements.totalBar.offsetWidth
                        );
                      r < 0
                        ? (r = 0)
                        : r > e.elements.totalBar.offsetWidth &&
                          (r = e.elements.totalBar.offsetWidth);
                      var s =
                        (e.clip.runTimeInfo.currentMillisecond /
                          e.clip.duration) *
                          e.elements.totalBar.offsetWidth -
                        r;
                      (e.elements.loopBar.style.left = r + "px"),
                        (e.elements.loopBar.style.width = o - r + "px"),
                        (e.elements.runningBar.style.width = s + "px"),
                        (e.settings.loopLastPositionXPxls = r),
                        (e.settings.loopStartMillisecond = Math.round(
                          (e.clip.duration * e.elements.loopBar.offsetLeft) /
                            e.elements.totalBar.offsetWidth
                        )),
                        e.settings.loopEndMillisecond <
                          e.settings.loopStartMillisecond &&
                          ((e.settings.loopEndMillisecond =
                            e.settings.loopStartMillisecond),
                          (e.elements.loopBar.style.width = "0px"),
                          (e.elements.runningBar.style.width = "0px")),
                        (e.elements.loopEndTime.innerHTML =
                          e.settings.loopEndMillisecond),
                        (e.elements.loopStartTime.innerHTML =
                          e.settings.loopStartMillisecond),
                        e.settings.loopStartMillisecond >
                          e.clip.runTimeInfo.currentMillisecond &&
                          (e.settings.loopJourney = !0);
                    }),
                      (e.listeners.onMouseUpLoopStart = function (t) {
                        var n;
                        (e.elements.listenerHelper.style.pointerEvents =
                          "none"),
                          (e.settings.resizeLoop = !1),
                          t.preventDefault(),
                          e.settings.loopJourney &&
                            (e.createProgressDrag(
                              e.elements.runningBar.offsetWidth
                            ),
                            (e.settings.loopJourney = !1)),
                          (e.elements.loopBar.style.left =
                            (e.elements.loopBar.offsetLeft /
                              e.elements.totalBar.offsetWidth) *
                              100 +
                            "%"),
                          (e.elements.loopBar.style.width =
                            (e.elements.loopBar.offsetWidth /
                              e.elements.totalBar.offsetWidth) *
                              100 +
                            "%"),
                          (e.settings.loopStartMillisecond = Math.round(
                            (e.clip.duration * e.elements.loopBar.offsetLeft) /
                              e.elements.totalBar.offsetWidth
                          )),
                          (e.elements.runningBar.style.width =
                            (e.elements.runningBar.offsetWidth /
                              e.elements.loopBar.offsetWidth) *
                              100 +
                            "%"),
                          x("mouseup", e.listeners.onMouseUpLoopStart, !1),
                          x("touchend", e.listeners.onMouseUpLoopStart, !1),
                          x("mousemove", e.listeners.onCursorMoveLoopStart, !1),
                          x("touchmove", e.listeners.onCursorMoveLoopStart, !1),
                          e.elements.loopBar.addEventListener(
                            "mousedown",
                            e.listeners.onMouseDown,
                            !1
                          ),
                          e.elements.loopBar.addEventListener(
                            "touchstart",
                            e.listeners.onMouseDown,
                            { passive: !0 },
                            !1
                          ),
                          e.settings.playAfterResize &&
                            ("idle" === e.clip.runTimeInfo.state
                              ? ((n =
                                  e.clip.speed >= 0
                                    ? e.settings.loopStartMillisecond + 1
                                    : e.settings.loopEndMillisecond - 1),
                                (e.settings.needsUpdate = !0),
                                e.createJourney(n, {
                                  before: "pause",
                                  after: "play",
                                }))
                              : e.clip.play(),
                            (e.settings.playAfterResize = !1));
                      }),
                      (e.listeners.onMouseDownLoopStart = function (t) {
                        (e.elements.listenerHelper.style.pointerEvents =
                          "auto"),
                          (e.settings.resizeLoop = !0),
                          t.preventDefault(),
                          (e.settings.needsUpdate = !0),
                          "playing" === e.clip.runTimeInfo.state &&
                            (e.clip.pause(), (e.settings.playAfterResize = !0)),
                          e.elements.loopBar.removeEventListener(
                            "mousedown",
                            e.listeners.onMouseDown,
                            !1
                          ),
                          e.elements.loopBar.removeEventListener(
                            "touchstart",
                            e.listeners.onMouseDown,
                            !1
                          ),
                          e.listeners.onCursorMoveLoopStart(t),
                          w("mouseup", e.listeners.onMouseUpLoopStart, !1),
                          w("touchend", e.listeners.onMouseUpLoopStart, !1),
                          w("mousemove", e.listeners.onCursorMoveLoopStart, !1),
                          w("touchmove", e.listeners.onCursorMoveLoopStart, !1);
                      }),
                      e.elements.loopBarStart.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDownLoopStart,
                        !1
                      ),
                      e.elements.loopBarStart.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDownLoopStart,
                        { passive: !1 },
                        !1
                      );
                  })(this),
                  (function (e) {
                    (e.listeners.editableLoopStartTime = function () {
                      (e.elements.editableLoopStartTime.value =
                        e.elements.loopStartTime.innerHTML),
                        e.elements.loopStartTime.replaceWith(
                          e.elements.editableLoopStartTime
                        ),
                        e.elements.editableLoopStartTime.focus();
                    }),
                      (e.listeners.editableLoopEndTime = function () {
                        (e.elements.editableLoopEndTime.value =
                          e.elements.loopEndTime.innerHTML),
                          e.elements.loopEndTime.replaceWith(
                            e.elements.editableLoopEndTime
                          ),
                          e.elements.editableLoopEndTime.focus();
                      }),
                      (e.elements.editableLoopEndTime.onkeydown = e.elements.editableLoopStartTime.onkeydown = function (
                        t
                      ) {
                        t.preventDefault(),
                          13 === t.keyCode &&
                            (e.elements.editableLoopStartTime.onfocusout(),
                            e.elements.editableLoopEndTime.onfocusout()),
                          8 === t.keyCode &&
                            (t.target.value = t.target.value
                              .toString()
                              .substring(
                                0,
                                t.target.value.toString().length - 1
                              )),
                          13 === t.keyCode && t.target.blur();
                        var n = parseFloat(
                          (t.target.value || 0).toString() + t.key
                        );
                        if (!(n > e.clip.duration))
                          if (
                            ((t.target.value = n),
                            t.target === e.elements.editableLoopStartTime)
                          ) {
                            var i = e.elements.totalBar.getBoundingClientRect(),
                              r = {
                                preventDefault: function () {},
                                clientX:
                                  (e.elements.totalBar.offsetWidth /
                                    e.clip.duration) *
                                    t.target.value +
                                  i.left,
                              };
                            e.listeners.onMouseDownLoopStart(r),
                              e.listeners.onCursorMoveLoopStart(r),
                              e.listeners.onMouseUpLoopStart(r);
                          } else if (
                            t.target === e.elements.editableLoopEndTime
                          ) {
                            var o = e.elements.totalBar.getBoundingClientRect(),
                              s = {
                                preventDefault: function () {},
                                clientX:
                                  (e.elements.totalBar.offsetWidth /
                                    e.clip.duration) *
                                    t.target.value +
                                  o.left,
                              };
                            e.listeners.onMouseDownLoopEnd(s),
                              e.listeners.onCursorMoveLoopEnd(s),
                              e.listeners.onMouseUpLoopEnd(s);
                          }
                      }),
                      (e.elements.loopStartTime.onclick =
                        e.listeners.editableLoopStartTime),
                      (e.elements.loopEndTime.onclick =
                        e.listeners.editableLoopEndTime),
                      (e.elements.editableLoopStartTime.onfocusout = function () {
                        e.elements.editableLoopStartTime.replaceWith(
                          e.elements.loopStartTime
                        );
                      }),
                      (e.elements.editableLoopEndTime.onfocusout = function () {
                        e.elements.editableLoopEndTime.replaceWith(
                          e.elements.loopEndTime
                        );
                      });
                  })(this),
                  (function (e) {
                    var t = !1;
                    e.elements.volumeBtn.onclick = function () {
                      if (e.settings.volumeMute) {
                        (e.elements.volumeBarActive.style.width =
                          100 * e.settings.previousVolume + "%"),
                          e.clip.setVolume(e.settings.previousVolume),
                          (e.settings.volumeMute = !1);
                        var t = document.createElement("span");
                        (t.innerHTML = h.volumeSVG),
                          e.elements.volumeBtn
                            .getElementsByTagName("svg")[0]
                            .replaceWith(t);
                      } else {
                        (e.settings.volumeMute = !0),
                          (e.elements.volumeBarActive.style.width = "0%"),
                          e.clip.setVolume(0);
                        var n = document.createElement("span");
                        (n.innerHTML = h.volumeMuteSVG),
                          e.elements.volumeBtn
                            .getElementsByTagName("svg")[0]
                            .replaceWith(n);
                      }
                      e.eventBroadcast(
                        "volume-change",
                        e.settings.previousVolume
                      ),
                        e.eventBroadcast("mute-change", e.settings.volumeMute);
                    };
                    var n = !1;
                    (e.elements.volumeBtn.onmouseover = function () {
                      (n = !0),
                        e.elements.volumeCursor.classList.add(
                          "".concat(e.name, "-volume-cursor-transition")
                        ),
                        e.elements.volumeBar.classList.add(
                          "".concat(e.name, "-volume-width-transition")
                        ),
                        e.elements.volumeBarHelper.classList.add(
                          "".concat(e.name, "-volume-width-transition")
                        ),
                        e.elements.timeDisplay.classList.add(
                          "".concat(e.name, "-time-width-transition")
                        );
                    }),
                      (y(
                        "".concat(e.name, "-left-controls")
                      ).onmouseout = function () {
                        if (n && !t) {
                          var i =
                            event.toElement ||
                            event.relatedTarget ||
                            event.target;
                          (function (e, t) {
                            for (var n = t.parentNode; null != n; ) {
                              if (n == e) return !0;
                              n = n.parentNode;
                            }
                            return !1;
                          })(y("".concat(e.name, "-left-controls")), i) ||
                            i === y("".concat(e.name, "-left-controls")) ||
                            ((n = !1),
                            e.elements.volumeCursor.classList.remove(
                              "".concat(e.name, "-volume-cursor-transition")
                            ),
                            e.elements.volumeBar.classList.remove(
                              "".concat(e.name, "-volume-width-transition")
                            ),
                            e.elements.volumeBarHelper.classList.remove(
                              "".concat(e.name, "-volume-width-transition")
                            ),
                            e.elements.timeDisplay.classList.remove(
                              "".concat(e.name, "-time-width-transition")
                            ));
                        }
                      }),
                      (e.listeners.onCursorMoveVolumeBar = function (t) {
                        t.preventDefault();
                        var n =
                          (t.clientX || ((t.touches || [])[0] || {}).clientX) -
                          e.elements.volumeBarHelper.getBoundingClientRect()
                            .left;
                        if (
                          (n < 0
                            ? (n = 0)
                            : n > e.elements.volumeBarHelper.offsetWidth &&
                              (n = e.elements.volumeBarHelper.offsetWidth),
                          (e.settings.volume = Number(
                            (
                              n / e.elements.volumeBarHelper.offsetWidth
                            ).toFixed(2)
                          )),
                          (e.elements.volumeBarActive.style.width =
                            100 * e.settings.volume + "%"),
                          e.clip.setVolume(e.settings.volume),
                          e.settings.volume > 0)
                        ) {
                          e.settings.volumeMute = !1;
                          var i = document.createElement("span");
                          (i.innerHTML = h.volumeSVG),
                            e.elements.volumeBtn
                              .getElementsByTagName("svg")[0]
                              .replaceWith(i);
                        } else if (0 === e.settings.volume) {
                          e.settings.volumeMute = !0;
                          var r = document.createElement("span");
                          (r.innerHTML = h.volumeMuteSVG),
                            e.elements.volumeBtn
                              .getElementsByTagName("svg")[0]
                              .replaceWith(r);
                        }
                        e.eventBroadcast("volume-change", e.settings.volume),
                          e.eventBroadcast(
                            "mute-change",
                            e.settings.volumeMute
                          );
                      }),
                      (e.listeners.onMouseUpVolumeBar = function (n) {
                        (t = !1),
                          (e.elements.listenerHelper.style.pointerEvents =
                            "none"),
                          n.preventDefault(),
                          e.settings.volume > 0 &&
                            (e.settings.previousVolume = e.settings.volume),
                          v("mouseup", e.listeners.onMouseUpVolumeBar, !1),
                          v("touchend", e.listeners.onMouseUpVolumeBar, !1),
                          v("mousemove", e.listeners.onCursorMoveVolumeBar, !1),
                          v("touchmove", e.listeners.onCursorMoveVolumeBar, !1);
                      }),
                      (e.listeners.onMouseDownVolumeBar = function (n) {
                        (t = !0),
                          (e.elements.listenerHelper.style.pointerEvents =
                            "auto"),
                          n.preventDefault(),
                          e.listeners.onCursorMoveVolumeBar(n),
                          g("mouseup", e.listeners.onMouseUpVolumeBar, !1),
                          g("touchend", e.listeners.onMouseUpVolumeBar, !1),
                          g("mousemove", e.listeners.onCursorMoveVolumeBar, !1),
                          g("touchmove", e.listeners.onCursorMoveVolumeBar, !1);
                      }),
                      e.elements.volumeBarHelper.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDownVolumeBar,
                        !1
                      ),
                      e.elements.volumeCursor.addEventListener(
                        "mousedown",
                        e.listeners.onMouseDownVolumeBar,
                        !1
                      ),
                      e.elements.volumeBarHelper.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDownVolumeBar,
                        { passive: !1 },
                        !1
                      ),
                      e.elements.volumeCursor.addEventListener(
                        "touchstart",
                        e.listeners.onMouseDownVolumeBar,
                        { passive: !1 },
                        !1
                      );
                  })(this),
                  (function (e) {
                    e.elements.statusButton.onclick = function (t) {
                      return (
                        t.preventDefault(),
                        "playing" === e.clip.runTimeInfo.state
                          ? e.clip.pause()
                          : ("paused" !== e.clip.runTimeInfo.state &&
                              "idle" !== e.clip.runTimeInfo.state &&
                              "transitional" !== e.clip.runTimeInfo.state &&
                              "armed" !== e.clip.runTimeInfo.state) ||
                            e.clip.play(),
                        !1
                      );
                    };
                  })(this),
                  (function (e) {
                    (e.elements.settingsShowIndicator.onclick = function (t) {
                      return T(e, t);
                    }),
                      (e.elements.settingsPointerEvents.onclick = function (t) {
                        return I(e, t);
                      }),
                      (e.elements.settingsShowVolume.onclick = function (t) {
                        return M(e, t);
                      }),
                      (e.elements.settingsShowPreview.onclick = function (t) {
                        return A(e, t);
                      }),
                      (e.elements.settingsButton.onclick = function (t) {
                        t.preventDefault();
                        var n = O("".concat(e.name, "-controls")),
                          i = function t(n) {
                            if (e.elements.settingsPanel.contains(n.target))
                              return !0;
                            e.elements.settingsPanel.classList.toggle(
                              "".concat(e.name, "-hide")
                            ),
                              e.elements.settingsPanel.classList.toggle(
                                "m-fadeOut"
                              ),
                              e.elements.settingsPanel.classList.toggle(
                                "m-fadeIn"
                              ),
                              e.elements.settingsPanel.className.includes(
                                "m-fadeOut"
                              ) &&
                                (P("click", t, !1),
                                e.eventBroadcast("state-change", e.state));
                          };
                        e.elements.settingsPanel.className.includes("m-fadeOut")
                          ? (n.classList.value.includes(
                              "force-show-controls"
                            ) || n.classList.toggle("force-show-controls"),
                            S("click", i, !1))
                          : P("click", i, !1);
                      });
                  })(this),
                  (function (e) {
                    e.elements.settingsSpeedButtonShow.onclick = e.elements.settingsSpeedButtonHide.onclick = function (
                      t
                    ) {
                      t.preventDefault(),
                        e.elements.settingsPanel.classList.toggle(
                          "".concat(e.name, "-settings-speed-panel")
                        ),
                        e.elements.settingsPanel.className.includes(
                          "".concat(e.name, "-settings-speed-panel")
                        )
                          ? ((e.elements.settingsMainPanel.style.display =
                              "none"),
                            (e.elements.settingsSpeedPanel.style.display =
                              "block"))
                          : ((e.elements.settingsSpeedPanel.style.display =
                              "none"),
                            (e.elements.settingsMainPanel.style.display =
                              "block"));
                    };
                    var t = function (t) {
                        t.preventDefault();
                        var n = e.elements.speedBar.getBoundingClientRect(),
                          i =
                            (t.clientY ||
                              ((t.touches || [])[0] || {}).clientY) - n.top;
                        (i -= 8) < 0
                          ? (i = 0)
                          : i > e.elements.speedBar.offsetHeight - 16 &&
                            (i = e.elements.speedBar.offsetHeight - 16);
                        var r =
                            -1 *
                            ((i = Math.floor(i)) /
                              (16 * (e.options.speedValues.length - 1)) -
                              1),
                          o = 1 / (e.options.speedValues.length - 1),
                          s = e.calculateSpeed(o, e.options.speedValues, r);
                        (D("".concat(e.name, "-speed-runtime")).innerHTML =
                          s + "0"),
                          (D("".concat(e.name, "-speed-cursor")).style.top =
                            i + "px"),
                          (e.clip.executionSpeed = s),
                          e.eventBroadcast(
                            "speed-change",
                            e.clip.executionSpeed
                          );
                      },
                      n = function n(i) {
                        var r;
                        (e.elements.listenerHelper.style.pointerEvents =
                          "none"),
                          i.preventDefault(),
                          j("mouseup", n, !1),
                          j("touchend", n, !1),
                          j("mousemove", t, !1),
                          j("touchmove", t, !1),
                          (D("".concat(e.name, "-speed-runtime")).innerHTML =
                            "Speed"),
                          (r = 1 == e.clip.speed ? "Normal" : e.clip.speed),
                          (e.elements.speedCurrent.innerHTML = r);
                      },
                      i = function (i) {
                        (e.elements.listenerHelper.style.pointerEvents =
                          "auto"),
                          i.preventDefault(),
                          t(i),
                          B("mouseup", n, !1),
                          B("touchend", n, !1),
                          B("mousemove", t, !1),
                          B("touchmove", t, !1);
                      };
                    e.elements.speedBarHelper.addEventListener(
                      "mousedown",
                      i,
                      !1
                    ),
                      e.elements.speedBarHelper.addEventListener(
                        "touchstart",
                        i,
                        { passive: !1 },
                        !1
                      );
                  })(this),
                  (function (e) {
                    e.elements.loopButton.onclick = function () {
                      return V(e);
                    };
                  })(this),
                  (function (e) {
                    (F(
                      "".concat(e.name, "-controls")
                    ).onmouseover = function () {
                      e.settings.loopActivated &&
                        (e.elements.loopBarStart.classList.remove("m-fadeOut"),
                        e.elements.loopBarEnd.classList.remove("m-fadeOut"),
                        e.elements.loopBarStart.classList.add("m-fadeIn"),
                        e.elements.loopBarEnd.classList.add("m-fadeIn"));
                    }),
                      (F("".concat(e.name, "-controls")).onmouseout = function (
                        t
                      ) {
                        var n = t.toElement || t.relatedTarget || t.target;
                        $(this, n) ||
                          n === this ||
                          (e.settings.loopActivated &&
                            (e.elements.loopBarStart.classList.add("m-fadeOut"),
                            e.elements.loopBarEnd.classList.add("m-fadeOut"),
                            e.elements.loopBarStart.classList.remove(
                              "m-fadeIn"
                            ),
                            e.elements.loopBarEnd.classList.remove(
                              "m-fadeIn"
                            )));
                      });
                    var t = !1;
                    (F("".concat(e.name, "-controls")).ontouchstart = function (
                      n
                    ) {
                      var i = n.toElement || n.relatedTarget || n.target;
                      $(e.elements.statusButton, i) ||
                        i === e.elements.statusButton ||
                        $(e.elements.settingsButton, i) ||
                        i === e.elements.settingsButton ||
                        $(e.elements.fullScreenButton, i) ||
                        i === e.elements.fullScreenButton ||
                        $(e.elements.loopButton, i) ||
                        i === e.elements.loopButton ||
                        $(e.elements.totalBar, i) ||
                        i === e.elements.totalBar ||
                        (e.elements.settings.showVolume &&
                          ((e.elements.volumeControl.className = "".concat(
                            e.name,
                            "-volume-width-transition"
                          )),
                          (e.elements.volumeBar.className = "".concat(
                            e.name,
                            "-volume-width-transition"
                          )),
                          (e.elements.volumeBarHelper.className = "".concat(
                            e.name,
                            "-volume-width-transition"
                          ))),
                        (e.elements.timeDisplay.className = "".concat(
                          e.name,
                          "-time-width-transition"
                        )),
                        (e.elements.volumeCursor.className = "".concat(
                          e.name,
                          "-volume-cursor-transition"
                        )),
                        (t = !0));
                    }),
                      window.addEventListener("touchstart", function (n) {
                        var i = n.toElement || n.relatedTarget || n.target;
                        $(F("".concat(e.name, "-controls")), i) ||
                          i === F("".concat(e.name, "-controls")) ||
                          (t &&
                            ((e.elements.volumeControl.className = ""),
                            (e.elements.volumeBar.className = ""),
                            (e.elements.volumeBarHelper.className = ""),
                            (e.elements.timeDisplay.className = ""),
                            (e.elements.volumeCursor.className = "")));
                      });
                  })(this),
                  (function (e) {
                    e.elements.fullScreenButton.onclick = function () {
                      return z(e);
                    };
                  })(this),
                  (function (e) {
                    e.elements.donkeyclipButton.addEventListener(
                      "click",
                      function () {
                        var t = U(),
                          n = window.open(
                            "https://donkeyclip.com?u=".concat(t)
                          ),
                          i = e.clip.exportDefinition(),
                          r = e.clipClass;
                        window.addEventListener(
                          "message",
                          function (e) {
                            e.data === t &&
                              n.postMessage(
                                JSON.stringify({
                                  definition: i,
                                  clipClass: r,
                                  u: t,
                                }),
                                "*"
                              );
                          },
                          !1
                        );
                      }
                    );
                  })(this),
                  (function (e) {
                    if (
                      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent
                      )
                    ) {
                      var t = function () {
                          e.options.preview &&
                            (W(
                              "".concat(e.name, "-hover-display")
                            ).classList.toggle("m-fadeIn"),
                            W(
                              "".concat(e.name, "-hover-display")
                            ).classList.toggle("m-fadeOut"),
                            (e.elements.loopBar.onmousemove = i));
                        },
                        n = function n() {
                          e.options.preview &&
                            (t(),
                            (e.elements.loopBar.onmouseover = e.elements.loopBar.onmouseout = t),
                            (e.elements.loopBar.onmousemove = i),
                            G("mouseup", n, !1),
                            G("touchend", n, !1),
                            G("mousemove", i, !1),
                            G("touchmove", i, !1));
                        };
                      (e.elements.loopBar.onmouseover = e.elements.loopBar.onmouseout = t),
                        (e.elements.loopBar.onmousedown = function () {
                          e.options.preview &&
                            ((e.elements.loopBar.onmouseover = e.elements.loopBar.onmouseout = null),
                            (e.elements.loopBar.onmousemove = null),
                            q("mouseup", n, !1),
                            q("touchend", n, !1),
                            q("mousemove", i, !1),
                            q("touchmove", i, !1));
                        }),
                        (e.elements.loopBar.onmouseup = function () {
                          e.options.preview &&
                            (G("mouseup", n, !1),
                            G("touchend", n, !1),
                            G("mousemove", i, !1),
                            G("touchmove", i, !1),
                            (e.elements.loopBar.onmouseover = e.elements.loopBar.onmouseout = t),
                            (e.elements.loopBar.onmousemove = i));
                        });
                      var i = function (t) {
                        var n = t.clientX,
                          i = e.elements.loopBar.getBoundingClientRect();
                        if (
                          n - i.left + e.settings.loopLastPositionXPxls >
                            e.settings.loopLastPositionXPxls +
                              e.elements.loopBar.offsetWidth &&
                          !e.settings.resizeLoop
                        )
                          W(
                            "".concat(e.name, "-hover-millisecond")
                          ).innerHTML = e.timeFormat(
                            e.settings.loopEndMillisecond
                          );
                        else if (n - i.left < 0 && !e.settings.resizeLoop)
                          W(
                            "".concat(e.name, "-hover-millisecond")
                          ).innerHTML = e.timeFormat(
                            e.settings.loopStartMillisecond
                          );
                        else {
                          var r = n - i.left + e.settings.loopLastPositionXPxls;
                          r < 0 && (r = 0);
                          var o =
                              W("".concat(e.name, "-hover-display"))
                                .offsetWidth / 2,
                            s =
                              W("".concat(e.name, "-hover-display"))
                                .offsetWidth / 2,
                            a = r - s;
                          r - o < 0
                            ? (a = 0)
                            : r + o > e.elements.totalBar.offsetWidth &&
                              (a = e.elements.totalBar.offsetWidth - s - o);
                          var l = Math.round(
                            (r / e.elements.totalBar.offsetWidth) *
                              e.clip.duration
                          );
                          if (e.options.preview) {
                            var c = l / e.clip.duration;
                            e.previewClip.onProgress(c, l);
                          }
                          (W(
                            "".concat(e.name, "-hover-millisecond")
                          ).innerHTML = e.timeFormat(l)),
                            (W("".concat(e.name, "-hover-display")).style.left =
                              a + "px");
                        }
                      };
                    }
                  })(this),
                  (function (e) {
                    document.addEventListener("fullscreenchange", function () {
                      e.elements.mcPlayer.classList.toggle("full-screen"),
                        e.clip.props.host.classList.toggle("full-screen"),
                        e.options.preview && e.setPreviewDimentions();
                    }),
                      document.addEventListener(
                        "webkitfullscreenchange",
                        function () {
                          e.elements.mcPlayer.classList.toggle("full-screen"),
                            e.clip.props.host.classList.toggle("full-screen"),
                            e.options.preview && e.setPreviewDimentions();
                        }
                      ),
                      document.addEventListener(
                        "mozfullscreenchange",
                        function () {
                          e.elements.mcPlayer.classList.toggle("full-screen"),
                            e.clip.props.host.classList.toggle("full-screen"),
                            e.options.preview && e.setPreviewDimentions();
                        }
                      ),
                      document.addEventListener(
                        "MSFullscreenChange",
                        function () {
                          e.elements.mcPlayer.classList.toggle("full-screen"),
                            e.clip.props.host.classList.toggle("full-screen"),
                            e.options.preview && e.setPreviewDimentions();
                        }
                      ),
                      J("body")[0].addEventListener("click", function (t) {
                        if (
                          t.target.className ===
                          "".concat(e.name, "-speed-value")
                        ) {
                          var n = t.target.dataset.speedValue;
                          (e.clip.executionSpeed = t.target.dataset.speedValue),
                            (n = 1 == e.clip.speed ? "Normal" : e.clip.speed),
                            (e.elements.speedCurrent.innerHTML = n);
                          var i = 1 / (e.options.speedValues.length - 1),
                            r =
                              -1 *
                              (t.target.dataset.zone * i - 1) *
                              (16 * (e.options.speedValues.length - 1));
                          K("".concat(e.name, "-speed-cursor")).style.top =
                            r + "px";
                        }
                      });
                  })(this);
              },
            },
            {
              key: "launchIntoFullscreen",
              value: function (e) {
                this.options.preview && this.setPreviewDimentions(),
                  e.requestFullscreen
                    ? e.requestFullscreen()
                    : e.mozRequestFullScreen
                    ? e.mozRequestFullScreen()
                    : e.webkitRequestFullscreen
                    ? e.webkitRequestFullscreen()
                    : e.msRequestFullscreen && e.msRequestFullscreen();
              },
            },
            {
              key: "exitFullscreen",
              value: function () {
                document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen &&
                    document.webkitExitFullscreen();
              },
            },
            {
              key: "setTheme",
              value: function () {
                X(this.name + "-style") &&
                  Q("head")[0].removeChild(X(this.name + "-style")),
                  this.options.theme.replace(/\s\s+/g, " "),
                  this.options.theme.trim(),
                  this.options.theme.includes("on-top") ||
                    this.options.theme.includes("position-bottom") ||
                    (this.options.theme += " on-top");
                var e = {};
                for (var t in this.options.theme.split(" ")) {
                  var n = d(this.options.theme.split(" ")[t], this.name);
                  for (var i in n || {}) e[i] = n[i];
                }
                var r = (function (e, t, n) {
                    return "\n#"
                      .concat(t, ", #")
                      .concat(
                        t,
                        " *{\n  font-family:'Ubuntu' !important;\n}\n#"
                      )
                      .concat(t, " .background {\n  background-color: ")
                      .concat(n.backgroundColor, ";\n  width:100%;\n  height:")
                      .concat(
                        e["background-height"],
                        ";;\n  position:absolute;\n  top:0px;\n  left:0px;\n  z-index:-2000;\n}\n\n#"
                      )
                      .concat(t, " .full-screen #")
                      .concat(
                        t,
                        "-controls {\n  position:fixed;\n  left:0px;\n  bottom:0px;\n}\n\n#"
                      )
                      .concat(t, " .full-screen #")
                      .concat(
                        t,
                        "-settings-panel {\n  position:fixed;\n  bottom: 45px;\n}\n\n#"
                      )
                      .concat(t, " .svg,#")
                      .concat(t, " .svg *,#")
                      .concat(t, " svg,#")
                      .concat(t, " svg *  {\n  fill: ")
                      .concat(e["svg-color"], ";\n}\n\n#")
                      .concat(t, " .svg.arrow * {\n  stroke: ")
                      .concat(e["svg-color"], ";\n  fill: transparent;\n}\n\n#")
                      .concat(t, " .pointer-event-panel {\n  height: ")
                      .concat(
                        e["pointer-event-panel-height"],
                        ";\n  display:flex;\n  align-items:center;\n  justify-content:center;\n}\n#"
                      )
                      .concat(
                        t,
                        "-pointer-event-panel{\n  width:100%;\n  position:absolute;\n  z-index:100;\n}\n#"
                      )
                      .concat(
                        t,
                        "-listener-helper{\n  width:100%;\n  height:calc( 100% - 45px );\n  position:absolute;\n  z-index:110;\n}\n#"
                      )
                      .concat(t, " .svg-selected svg{\n  fill: ")
                      .concat(e["svg-selected-color"], ";\n  stroke: ")
                      .concat(e["svg-selected-color"], ";\n}\n#")
                      .concat(
                        t,
                        "-hover-display{\n  display: flex;\n  visibility:hidden;\n  opacity:0;\n  background-color: black;\n  position: absolute;\n  bottom: 30px;\n  left: 0px;\n  align-items: flex-end;\n  justify-content: center;\n}\n#"
                      )
                      .concat(
                        t,
                        "-hover-display-clip{\n  width:100%;\n  height:100%;\n  overflow:hidden;\n  position:relative;\n}\n#"
                      )
                      .concat(t, "-hover-display-border{\n  border: ")
                      .concat(
                        e["preview-border"],
                        ";\n  position:absolute;\n  width:calc(100% - 4px);\n  height:calc(100% - 4px);\n  z-index:2;\n}\n\n#"
                      )
                      .concat(
                        t,
                        "-hover-millisecond {\n  font-weight:bold;\n  padding:3px;\n  height:18px;\n  margin:0px;\n  line-height:12px;\n  font-size:10px;\n  text-align: center;\n  min-width:20px;\n  max-width:100px;\n  z-index:2;\n  position:absolute;\n  bottom:-25px;\n}\n#"
                      )
                      .concat(t, ",\n#")
                      .concat(t, " ::before,\n#")
                      .concat(t, " :::after,\n#")
                      .concat(t, " div,\n#")
                      .concat(t, " p,\n#")
                      .concat(t, " span,\n#")
                      .concat(t, " ul,\n#")
                      .concat(
                        t,
                        " li {\n  font-weight: 400;\n  line-height: 1.9 !important;\n  color: "
                      )
                      .concat(
                        e.color,
                        ';\n  font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;\n  box-sizing:border-box;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n#'
                      )
                      .concat(
                        t,
                        " {\n  line-height: 1.9;\n  font-size: 12px;\n  overflow:hidden;\n  height: calc(100% + "
                      )
                      .concat(
                        e["controls-position"],
                        ");\n  width:100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  color: "
                      )
                      .concat(e.color, ";\n  pointer-events:auto;\n}\n\n#")
                      .concat(
                        t,
                        " .force-show-controls {\n  opacity:1 !important;\n}\n\n"
                      )
                      .concat(
                        n.theme.includes("position-bottom")
                          ? "\n    #".concat(
                              t,
                              "-controls {\n      opacity:1 !important;\n    }\n    "
                            )
                          : "#"
                              .concat(t, ":hover #")
                              .concat(
                                t,
                                "-controls {\n  opacity:1 !important;\n}\n"
                              ),
                        "\n\n#"
                      )
                      .concat(t, ":hover {\n  pointer-events:none;\n}\n\n#")
                      .concat(
                        t,
                        "-settings-speed-hide {\n  text-align:right;\n}\n\n#"
                      )
                      .concat(
                        t,
                        " .grad {\n  pointer-events:none !important;\n  background-image: linear-gradient(\n    rgba(0,0,0,00.001),\n    rgba(0,0,0,00.004),\n    rgba(0,0,0,00.007),\n    rgba(0,0,0,00.01),\n    rgba(0,0,0,0.04),\n    rgba(0,0,0,0.07),\n    rgba(0,0,0,0.1),\n    rgba(0,0,0,0.15),\n    rgba(0,0,0,0.2),\n    rgba(0,0,0,0.25),\n    rgba(0,0,0,0.3),\n    rgba(0,0,0,0.35),\n    rgba(0,0,0,0.4),\n    rgba(0,0,0,0.45),\n    rgba(0,0,0,0.5),\n    rgba(0,0,0,0.55),\n    rgba(0,0,0,0.6),\n    rgba(0,0,0,0.65),\n    rgba(0,0,0,0.7),\n    rgba(0,0,0,0.75),\n    rgba(0,0,0,0.8),\n    rgba(0,0,0,0.88)\n  );\n  position:absolute;\n  width:100%;\n  height:"
                      )
                      .concat(
                        e["grad-height"],
                        ";\n  left:0px;\n  bottom:0px;\n  z-index:-1;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-controls {\n  touch-action: none;\n  background-color: "
                      )
                      .concat(e["background-color"], ";\n  border: ")
                      .concat(
                        e["controls-border"],
                        ";\n  position: absolute;\n  bottom: "
                      )
                      .concat(
                        e["controls-bottom"],
                        ";\n  left: 0px;\n  width: 100%;\n  z-index:100;\n  height: 44px;\n  opacity:0;\n  display:flex;\n  border-radius: 6px;\n  align-items:center;\n  -webkit-transition: opacity 0.2s ease;\n  -moz-transition: opacity 0.2s ease;\n  transition: opacity 0.2s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-totalbar {\n  width: calc(100% - 20px);\n  height: 5px;\n  margin: 0px 10px 0px 10px;\n  background-color: "
                      )
                      .concat(
                        e["totalbar-color"],
                        ";\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-loopbar {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px;\n  left: 0px;\n  background-color: "
                      )
                      .concat(e["loopbar-color"], ";\n}\n\n#")
                      .concat(t, " .")
                      .concat(t, "-loop-boundaries::before {\n  ")
                      .concat(e["loopbar-boundaries-style::before"], "\n\n}\n#")
                      .concat(t, " .")
                      .concat(
                        t,
                        "-loop-boundaries {\n  transform:translate(-50%,-37%);\n  position:absolute;\n  width:18px;\n  background-color:"
                      )
                      .concat(
                        e["loopbar-boundaries-color"],
                        ";\n  height:18px;\n  border-radius:10px;\n  z-index:40;\n  "
                      )
                      .concat(e["loopbar-boundaries-style"], "\n}\n\n#")
                      .concat(t, " .")
                      .concat(t, "-loop-boundaries::after {\n  ")
                      .concat(
                        e["loopbar-boundaries-style::after"],
                        "\n\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-helperbar {\n  position: absolute;\n  height: 20px;\n  top: -10px;\n  left: 0px;\n  right: 0px;\n  z-index:2;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-runningbar {\n  position: relative;\n  width: 0px;\n  max-width:100%;\n  height: 100%;\n  background-color: "
                      )
                      .concat(e["runningbar-color"], ";\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  overflow:hidden;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: "
                      )
                      .concat(
                        e["cursor-color"],
                        ";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-cursor::before {\n  ")
                      .concat(e["cursor-style::before"], "\n}\n\n#")
                      .concat(t, " #")
                      .concat(t, "-cursor::after {\n  ")
                      .concat(e["cursor-style::after"], "\n}\n\n#")
                      .concat(t, " #")
                      .concat(t, "-left-controls,#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-right-controls {\n    display: flex;\n    align-items:center;\n    height: 100%;\n    padding: 5px 5px 0px;\n}\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-right-controls {\n  position:absolute;\n  right:0px;\n}\n\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-left-controls > div,#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-right-controls > div {\n  display: inline-flex;\n  align-items:center;\n  margin:0 10px 0 10px;\n  overflow:hidden;\n}\n\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-time-display span {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-status-btn {\n  opacity: ")
                      .concat(e["button-opacity"], ";\n}\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-status-btn svg{\n  width:20px;\n  height:18px;\n}\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-volume {\n  opacity: ")
                      .concat(
                        e["button-opacity"],
                        ";\n  position: relative;\n}\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-volume-btn {\n  width: 20px;\n  height: 15px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-volumebar {\n  width: 0px;\n  height: 3px;\n  background-color: "
                      )
                      .concat(
                        e["loopbar-color"],
                        ";\n  -webkit-transition: left 0.1s ease;\n  -moz-transition: left 0.1s ease;\n  transition: left 0.1s ease;\n  position:relative;\n  left:5px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-volumebar-helper {\n  position: absolute;\n    width: 0px;\n    height: 15px;\n    bottom: 0px;\n    z-index: 10;\n    left: 25px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-volumebar-active {\n  position: relative;\n  width: 0%;\n  height: 100%;\n  background-color: "
                      )
                      .concat(
                        e.color,
                        ";\n  position:relative;\n  bottom:0px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-volume-cursor {\n  transform:translate(50%,-36%);\n  right: 0px;\n  top: 0px;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  background-color: "
                      )
                      .concat(
                        e.color,
                        ";\n  border-radius: 10px;\n  z-index: 5;\n}\n\n#"
                      )
                      .concat(t, " .")
                      .concat(
                        t,
                        "-loopbar-time {\n  width:auto;\n  height:12px;\n  background-color:"
                      )
                      .concat(
                        e["background-color"],
                        ";\n  line-height:10px;\n  font-size:10px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-loop-time {\n  margin: 7px;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-dc-btn {\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    width: 20px;\n    height: 15px;\n    margin: 7px 10px 5px 0px;\n    transform: scale(1.5,1.5);\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-loop-btn {\n  opacity: ")
                      .concat(
                        e["button-opacity"],
                        ";\n  display:flex;\n  align-items:center;\n}\n\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-btn {\n  overflow:hidden;\n  opacity: "
                      )
                      .concat(e["button-opacity"], ";\n}\n\n#")
                      .concat(t, " #")
                      .concat(t, "-full-screen-btn {\n  opacity: ")
                      .concat(e["button-opacity"], ";\n}\n\n#")
                      .concat(t, " .")
                      .concat(t, "-speed-btn {\n  opacity: ")
                      .concat(e["button-opacity"], ";\n  height: 14px;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel {\n  touch-action: none;\n  box-sizing: border-box;\n  position: absolute;\n  z-index:102;\n  background-color: "
                      )
                      .concat(e["settings-background-color"], ";\n  bottom: ")
                      .concat(e["settings-panel-bottom"], ";\n  border: ")
                      .concat(
                        e.border,
                        ";\n  right: 8px;\n  width: 167px;\n  padding: 5px;\n  margin: 0px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " .")
                      .concat(t, "-hide {\n  display:none !important;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-value-bar {\n  position: relative;\n  width: 5px;\n  background-color: "
                      )
                      .concat(
                        e["speedbar-color"],
                        ";\n  display: inline-block;\n  box-sizing: border-box;\n  height: "
                      )
                      .concat(
                        16 * n.speedValues.length,
                        "px;\n  float: left;\n  margin-right:15px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-value-helperbar {\n  position: absolute;\n  width: 25px;\n  height: "
                      )
                      .concat(
                        16 * n.speedValues.length,
                        "px;\n  float: left;\n  left: 18px;\n  z-index:10;\n}\n\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-speed-value-bar:hover,\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-value-helperbar {\n  cursor: pointer;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-volumebar:hover,\n#")
                      .concat(t, " #")
                      .concat(t, "-volumebar-helper:hover,\n#")
                      .concat(t, " #")
                      .concat(t, "-volume-btn:hover,\n#")
                      .concat(t, " #")
                      .concat(t, "-volumebar:active,\n#")
                      .concat(t, " #")
                      .concat(t, "-volumebar-helper:active,\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-volume-btn:active {\n  cursor:pointer;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-cursor {\n  position: absolute;\n  background-color: "
                      )
                      .concat(
                        e["speedbar-cursor-color"],
                        ";\n  top: 0px;\n  left: 0px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-cursor div {\n  position: absolute;\n  background-color: "
                      )
                      .concat(
                        e["speedbar-cursor-color"],
                        ";\n  left: -2.5px;\n  top: -4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 5px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-time-separator{\n  margin:0 3px;\n}\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-cursor:hover {\n  cursor: pointer;\n}\n\n#"
                      )
                      .concat(t, " .")
                      .concat(
                        t,
                        "-speed-value-step {\n  width: 16px;\n  background-color: "
                      )
                      .concat(
                        e["speedbar-color"],
                        ";\n  display: inline-block;\n  box-sizing: border-box;\n  height: 2px;\n  margin-top: 7px;\n  margin-bottom: 7px;\n  float: left;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-value {\n  display: inline-block;\n  box-sizing: border-box;\n  height: "
                      )
                      .concat(
                        16 * n.speedValues.length,
                        "px;\n  text-align: left;\n}\n\n#"
                      )
                      .concat(t, " .")
                      .concat(
                        t,
                        "-speed-value {\n  box-sizing: border-box;\n  height: 16px;\n  font-size: 12px;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-indicator {\n  font-size: 8px !important;\n  position: absolute;\n  bottom: -3px;\n  color: "
                      )
                      .concat(e.color, ";\n}\n\n\n#")
                      .concat(t, " #")
                      .concat(t, "-speed-settings li.no-hover { \n  height: ")
                      .concat(
                        16 * n.speedValues.length + 10 - 2,
                        "px !important; \n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-settings-panel.")
                      .concat(
                        t,
                        "-settings-speed-panel {\n  overflow: hidden;\n  width: 92px;\n  position:absolute;\n  z-index:120;\n  /*height: "
                      )
                      .concat(
                        16 * n.speedValues.length + 32 + 20,
                        "px;*/\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-settings-panel.")
                      .concat(t, "-settings-speed-panel .")
                      .concat(t, "-speed-btn {\n  float: left;\n}\n\n#")
                      .concat(t, " .")
                      .concat(
                        t,
                        "-settings-speed-panel ul:first-child {\n  text-align: right;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-speed-current {\n  float: right;\n  padding-right: 10px\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-settings-panel .")
                      .concat(t, "-speed-btn {\n  float: right;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel ul {\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow: hidden;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-settings-panel.")
                      .concat(
                        t,
                        "-settings-speed-panel ul li {\n  min-width: 70px;\n  display: flex;\n  height: 32px;\n  align-items: center;\n  justify-content:center;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel ul li.no-hover:hover {\n  background-color: transparent;\n  cursor: default;\n}\n\n#"
                      )
                      .concat(t, " div.")
                      .concat(t, "-speed-value:hover {\n  background-color: ")
                      .concat(e["hover-color"], ";\n  cursor: pointer;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel ul li {\n  /*position: relative;\n  width: 100%;\n  min-width: 154px;*/\n  list-style-type: none;\n  margin: 0px;\n  padding: 5px;\n  display: flex;\n  height:32px;\n  align-items:center;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel ul li label {\n  margin: 0px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        " .switch {\n  position: relative;\n  display: inline-block;\n  width: 32px;\n  height: 18px;\n}\n\n#"
                      )
                      .concat(t, " .switch input {\n  display: none;\n}\n\n#")
                      .concat(
                        t,
                        " .settings-switch {\n  position: absolute;\n  right: 24px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        " .settings-switch::after {\n  clear: both;\n}\n\n#"
                      )
                      .concat(
                        t,
                        " .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: "
                      )
                      .concat(
                        e["slider-off-color"],
                        ";\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n#"
                      )
                      .concat(
                        t,
                        ' .slider:before {\n  position: absolute;\n  content: "";\n  height: 16px;\n  width: 16px;\n  left: 1px;\n  bottom: 1px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s;\n}\n\n#'
                      )
                      .concat(
                        t,
                        " input:checked+.slider {\n  background-color: "
                      )
                      .concat(e["slider-on-color"], ";\n}\n\n#")
                      .concat(
                        t,
                        " input:focus+.slider {\n  box-shadow: 0 0 1px "
                      )
                      .concat(e["slider-on-color"], ";\n}\n\n#")
                      .concat(
                        t,
                        " input:checked+.slider:before {\n  -webkit-transform: translateX(16px);\n  -ms-transform: translateX(16px);\n  transform: translateX(16px);\n}\n\n\n/* Rounded sliders */\n\n#"
                      )
                      .concat(
                        t,
                        " .slider.round {\n  border-radius: 34px;\n}\n\n#"
                      )
                      .concat(
                        t,
                        " .slider.round:before {\n  border-radius: 50%;\n}\n\n\n#"
                      )
                      .concat(
                        t,
                        " .m-fadeOut {\n  visibility: hidden !important;\n  opacity: 0 !important;\n}\n\n#"
                      )
                      .concat(
                        t,
                        " .m-fadeIn {\n  visibility: visible !important;\n  opacity: 1 !important;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel ul li:hover {\n  background-color: "
                      )
                      .concat(e["hover-color"], ";\n  cursor: pointer;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-panel ul li label:hover {\n  cursor: pointer;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-loopbar:hover {\n  cursor: pointer;\n}\n\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-status-btn:hover {\n  cursor: pointer;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-controls:active #")
                      .concat(t, "-cursor,\n#")
                      .concat(t, " #")
                      .concat(t, "-controls:hover #")
                      .concat(
                        t,
                        "-cursor  {\n  width: 16px;\n  height: 16px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-volume .")
                      .concat(
                        t,
                        "-volume-cursor-transition {\n  width: 12px;\n  height: 12px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-volume .")
                      .concat(
                        t,
                        "-volume-width-transition\n {\n  width: 50px;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-time-display.")
                      .concat(
                        t,
                        "-time-width-transition {\n  position:relative;\n  left: 10px;\n  -webkit-transition: left 0.3s ease;\n  -moz-transition: left 0.3s ease;\n  transition: left 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-settings-speed:hover .")
                      .concat(
                        t,
                        "-speed-btn {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-status-btn:hover {\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(t, "-loop-btn:hover,\n#")
                      .concat(t, " #")
                      .concat(
                        t,
                        "-dc-btn:hover\n {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-settings-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n\n#"
                      )
                      .concat(t, " #")
                      .concat(
                        t,
                        "-full-screen-btn:hover {\n  cursor: pointer;\n  opacity: 1;\n  -webkit-transition: all 0.3s ease;\n  -moz-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n"
                      )
                      .concat(e["theme-style"], "\n");
                  })(e, this.name, this.options),
                  o = Z("style");
                (o.id = this.name + "-style"),
                  o.styleSheet
                    ? (o.styleSheet.cssText = r)
                    : o.appendChild(document.createTextNode(r)),
                  Q("head")[0].appendChild(o),
                  this.eventBroadcast("theme-change", this.options.theme);
              },
            },
            {
              key: "setSpeed",
              value: function () {
                var e,
                  t = this;
                (e = 1 == this.clip.speed ? "Normal" : this.clip.speed),
                  (this.elements.speedCurrent.innerHTML = e);
                var n =
                  -1 *
                  ((function () {
                    for (var e = 0; e < t.options.speedValues.length - 1; e++)
                      if (
                        t.options.speedValues[e] <= t.clip.speed &&
                        t.options.speedValues[e + 1] > t.clip.speed
                      )
                        return (
                          e +
                          Math.abs(
                            (t.clip.speed - t.options.speedValues[e]) /
                              (t.options.speedValues[e] -
                                t.options.speedValues[e + 1])
                          )
                        );
                  })() *
                    (1 / (this.options.speedValues.length - 1)) -
                    1) *
                  (this.options.speedValues.length - 1) *
                  16;
                X("".concat(this.name, "-speed-cursor")).style.top = n + "px";
              },
            },
            {
              key: "calculateSpeed",
              value: function (e, t, n) {
                var i = Math.floor(n / e);
                if (i === t.length - 1) return t[i].toFixed(1);
                var r = (
                  ((n / e) % 1) * Math.abs(t[i] - t[i + 1]) +
                  t[i]
                ).toFixed(1);
                return 0 == r ? "0.0" : r;
              },
            },
            {
              key: "createPreviewDisplay",
              value: function () {
                this.previewClip = this.clip.paste(
                  X("".concat(this.name, "-hover-display-clip"))
                );
                var e = X("".concat(this.name, "-hover-display"));
                (window.previewClip = this.previewClip),
                  (e.style.position = "absolute"),
                  (e.style.background = this.options.backgroundColor),
                  (e.style.zIndex = 1),
                  this.setPreviewDimentions();
              },
            },
            {
              key: "setPreviewDimentions",
              value: function () {
                var e = this.clip.props.host,
                  t = this.previewClip.ownClip.props.host,
                  n = e.offsetWidth,
                  i = e.offsetHeight,
                  r = n * this.previewScale;
                r > 300 && ((r = 300), (this.previewScale = r / n));
                var o = n * this.previewScale,
                  s = i * this.previewScale,
                  a = ee(
                    {
                      width: this.clip.props.containerParams.width,
                      height: this.clip.props.containerParams.height,
                    },
                    { width: o, height: s },
                    "cover" === this.options.scaleToFit
                  );
                (this.previewClip.ownClip.rootElement.style.transform = "scale(".concat(
                  a.scale
                )),
                  (this.previewClip.ownClip.rootElement.style.left =
                    a.position.left + "px"),
                  (this.previewClip.ownClip.rootElement.style.top =
                    a.position.top + "px"),
                  (X("".concat(this.name, "-hover-display")).style.width =
                    o + "px"),
                  (X("".concat(this.name, "-hover-display")).style.height =
                    s + "px"),
                  (t.style.boxSizing = "border-box");
              },
            },
          ]) && i(t.prototype, n),
          e
        );
      })();
    })(n(3));
  },
  function (e, t) {
    e.exports =
      "\n1\n00:00:00,001 --\x3e 00:00:05,000\nThese are some captions\n\n2\n00:00:05,000 --\x3e 00:00:10,000\nThese are some other captions\n\n3\n00:00:12,000 --\x3e 00:00:15,000\nThese are some other captions that are here. A Long\nlong long long long long long long long long long\nlong long long long long long long long long long\nlong long long long long long long long long long\nlong long long long long long long long long text.\n\n4\n00:00:20,000 --\x3e 00:00:23,000\nThis is the end of subtitles.. That was fun!? Right? \n";
  },
  function (e, t, n) {
    (function (t, i) {
      const r = n(50),
        { PassThrough: o, Readable: s } = n(15),
        a = n(51),
        l = { bubbleErrors: !0, objectMode: !0 };
      e.exports = (...e) => {
        let n, c;
        "function" == typeof e[e.length - 1] && (c = e.pop()),
          "object" != typeof e[e.length - 1] ||
            Array.isArray(e[e.length - 1]) ||
            "function" == typeof e[e.length - 1].pipe ||
            (n = e.pop()),
          Array.isArray(e[0]) && (e = e[0]);
        let u,
          h = e[0],
          p = e[e.length - 1];
        (n = Object.assign({}, l, n)),
          h
            ? (u =
                h.writable && p.readable
                  ? r(n, h, p)
                  : 1 === e.length
                  ? new s(n).wrap(e[0])
                  : h.writable
                  ? h
                  : p.readable
                  ? p
                  : new o(n))
            : ((u = h = p = new o(n)), t.nextTick(() => u.end()));
        for (const [t, n] of e.entries()) {
          const i = e[t + 1];
          i && n.pipe(i), n !== u && n.on("error", (e) => u.emit("error", e));
        }
        if (c) {
          let e = !1;
          const t = (t) => {
            e || ((e = !0), c(t));
          };
          u.on("error", t), p.on("finish", () => t()), p.on("close", () => t());
        }
        return a(
          u,
          () =>
            new i((e, t) => {
              u.on("error", t), p.on("finish", e), p.on("close", e);
            })
        );
      };
    }.call(this, n(0), n(11)));
  },
  function (e, t, n) {
    "use strict";
    const { Transform: i } = n(52),
      { StringDecoder: r } = n(10),
      o = Symbol("last"),
      s = Symbol("decoder");
    function a(e, t, n) {
      var i;
      if (this.overflow) {
        if (1 === (i = this[s].write(e).split(this.matcher)).length) return n();
        i.shift(), (this.overflow = !1);
      } else (this[o] += this[s].write(e)), (i = this[o].split(this.matcher));
      this[o] = i.pop();
      for (var r = 0; r < i.length; r++)
        try {
          c(this, this.mapper(i[r]));
        } catch (e) {
          return n(e);
        }
      if (
        ((this.overflow = this[o].length > this.maxLength),
        this.overflow && !this.skipOverflow)
      )
        return n(new Error("maximum buffer reached"));
      n();
    }
    function l(e) {
      if (((this[o] += this[s].end()), this[o]))
        try {
          c(this, this.mapper(this[o]));
        } catch (t) {
          return e(t);
        }
      e();
    }
    function c(e, t) {
      void 0 !== t && e.push(t);
    }
    function u(e) {
      return e;
    }
    e.exports = function (e, t, n) {
      switch (
        ((e = e || /\r?\n/), (t = t || u), (n = n || {}), arguments.length)
      ) {
        case 1:
          "function" == typeof e
            ? ((t = e), (e = /\r?\n/))
            : "object" != typeof e ||
              e instanceof RegExp ||
              ((n = e), (e = /\r?\n/));
          break;
        case 2:
          "function" == typeof e
            ? ((n = t), (t = e), (e = /\r?\n/))
            : "object" == typeof t && ((n = t), (t = u));
      }
      ((n = Object.assign({}, n)).transform = a),
        (n.flush = l),
        (n.readableObjectMode = !0);
      const c = new i(n);
      return (
        (c[o] = ""),
        (c[s] = new r("utf8")),
        (c.matcher = e),
        (c.mapper = t),
        (c.maxLength = n.maxLength),
        (c.skipOverflow = n.skipOverflow),
        (c.overflow = !1),
        c
      );
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = (e) => {
      if ("string" != typeof e)
        throw new TypeError("Expected a string, got " + typeof e);
      return 65279 === e.charCodeAt(0) ? e.slice(1) : e;
    };
  },
  function (e, t) {},
  function (e, t, n) {
    (function (e) {
      function n(e, t) {
        for (var n = 0, i = e.length - 1; i >= 0; i--) {
          var r = e[i];
          "." === r
            ? e.splice(i, 1)
            : ".." === r
            ? (e.splice(i, 1), n++)
            : n && (e.splice(i, 1), n--);
        }
        if (t) for (; n--; n) e.unshift("..");
        return e;
      }
      function i(e, t) {
        if (e.filter) return e.filter(t);
        for (var n = [], i = 0; i < e.length; i++)
          t(e[i], i, e) && n.push(e[i]);
        return n;
      }
      (t.resolve = function () {
        for (var t = "", r = !1, o = arguments.length - 1; o >= -1 && !r; o--) {
          var s = o >= 0 ? arguments[o] : e.cwd();
          if ("string" != typeof s)
            throw new TypeError("Arguments to path.resolve must be strings");
          s && ((t = s + "/" + t), (r = "/" === s.charAt(0)));
        }
        return (
          (r ? "/" : "") +
            (t = n(
              i(t.split("/"), function (e) {
                return !!e;
              }),
              !r
            ).join("/")) || "."
        );
      }),
        (t.normalize = function (e) {
          var o = t.isAbsolute(e),
            s = "/" === r(e, -1);
          return (
            (e = n(
              i(e.split("/"), function (e) {
                return !!e;
              }),
              !o
            ).join("/")) ||
              o ||
              (e = "."),
            e && s && (e += "/"),
            (o ? "/" : "") + e
          );
        }),
        (t.isAbsolute = function (e) {
          return "/" === e.charAt(0);
        }),
        (t.join = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return t.normalize(
            i(e, function (e, t) {
              if ("string" != typeof e)
                throw new TypeError("Arguments to path.join must be strings");
              return e;
            }).join("/")
          );
        }),
        (t.relative = function (e, n) {
          function i(e) {
            for (var t = 0; t < e.length && "" === e[t]; t++);
            for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
            return t > n ? [] : e.slice(t, n - t + 1);
          }
          (e = t.resolve(e).substr(1)), (n = t.resolve(n).substr(1));
          for (
            var r = i(e.split("/")),
              o = i(n.split("/")),
              s = Math.min(r.length, o.length),
              a = s,
              l = 0;
            l < s;
            l++
          )
            if (r[l] !== o[l]) {
              a = l;
              break;
            }
          var c = [];
          for (l = a; l < r.length; l++) c.push("..");
          return (c = c.concat(o.slice(a))).join("/");
        }),
        (t.sep = "/"),
        (t.delimiter = ":"),
        (t.dirname = function (e) {
          if (("string" != typeof e && (e += ""), 0 === e.length)) return ".";
          for (
            var t = e.charCodeAt(0),
              n = 47 === t,
              i = -1,
              r = !0,
              o = e.length - 1;
            o >= 1;
            --o
          )
            if (47 === (t = e.charCodeAt(o))) {
              if (!r) {
                i = o;
                break;
              }
            } else r = !1;
          return -1 === i
            ? n
              ? "/"
              : "."
            : n && 1 === i
            ? "/"
            : e.slice(0, i);
        }),
        (t.basename = function (e, t) {
          var n = (function (e) {
            "string" != typeof e && (e += "");
            var t,
              n = 0,
              i = -1,
              r = !0;
            for (t = e.length - 1; t >= 0; --t)
              if (47 === e.charCodeAt(t)) {
                if (!r) {
                  n = t + 1;
                  break;
                }
              } else -1 === i && ((r = !1), (i = t + 1));
            return -1 === i ? "" : e.slice(n, i);
          })(e);
          return (
            t &&
              n.substr(-1 * t.length) === t &&
              (n = n.substr(0, n.length - t.length)),
            n
          );
        }),
        (t.extname = function (e) {
          "string" != typeof e && (e += "");
          for (
            var t = -1, n = 0, i = -1, r = !0, o = 0, s = e.length - 1;
            s >= 0;
            --s
          ) {
            var a = e.charCodeAt(s);
            if (47 !== a)
              -1 === i && ((r = !1), (i = s + 1)),
                46 === a
                  ? -1 === t
                    ? (t = s)
                    : 1 !== o && (o = 1)
                  : -1 !== t && (o = -1);
            else if (!r) {
              n = s + 1;
              break;
            }
          }
          return -1 === t ||
            -1 === i ||
            0 === o ||
            (1 === o && t === i - 1 && t === n + 1)
            ? ""
            : e.slice(t, i);
        });
      var r =
        "b" === "ab".substr(-1)
          ? function (e, t, n) {
              return e.substr(t, n);
            }
          : function (e, t, n) {
              return t < 0 && (t = e.length + t), e.substr(t, n);
            };
    }.call(this, n(0)));
  },
  function (e, t, n) {
    "use strict";
    (t.byteLength = function (e) {
      var t = c(e),
        n = t[0],
        i = t[1];
      return (3 * (n + i)) / 4 - i;
    }),
      (t.toByteArray = function (e) {
        var t,
          n,
          i = c(e),
          s = i[0],
          a = i[1],
          l = new o(
            (function (e, t, n) {
              return (3 * (t + n)) / 4 - n;
            })(0, s, a)
          ),
          u = 0,
          h = a > 0 ? s - 4 : s;
        for (n = 0; n < h; n += 4)
          (t =
            (r[e.charCodeAt(n)] << 18) |
            (r[e.charCodeAt(n + 1)] << 12) |
            (r[e.charCodeAt(n + 2)] << 6) |
            r[e.charCodeAt(n + 3)]),
            (l[u++] = (t >> 16) & 255),
            (l[u++] = (t >> 8) & 255),
            (l[u++] = 255 & t);
        2 === a &&
          ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)),
          (l[u++] = 255 & t));
        1 === a &&
          ((t =
            (r[e.charCodeAt(n)] << 10) |
            (r[e.charCodeAt(n + 1)] << 4) |
            (r[e.charCodeAt(n + 2)] >> 2)),
          (l[u++] = (t >> 8) & 255),
          (l[u++] = 255 & t));
        return l;
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, n = e.length, r = n % 3, o = [], s = 0, a = n - r;
          s < a;
          s += 16383
        )
          o.push(u(e, s, s + 16383 > a ? a : s + 16383));
        1 === r
          ? ((t = e[n - 1]), o.push(i[t >> 2] + i[(t << 4) & 63] + "=="))
          : 2 === r &&
            ((t = (e[n - 2] << 8) + e[n - 1]),
            o.push(i[t >> 10] + i[(t >> 4) & 63] + i[(t << 2) & 63] + "="));
        return o.join("");
      });
    for (
      var i = [],
        r = [],
        o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a = 0,
        l = s.length;
      a < l;
      ++a
    )
      (i[a] = s[a]), (r[s.charCodeAt(a)] = a);
    function c(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var n = e.indexOf("=");
      return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)];
    }
    function u(e, t, n) {
      for (var r, o, s = [], a = t; a < n; a += 3)
        (r =
          ((e[a] << 16) & 16711680) +
          ((e[a + 1] << 8) & 65280) +
          (255 & e[a + 2])),
          s.push(
            i[((o = r) >> 18) & 63] +
              i[(o >> 12) & 63] +
              i[(o >> 6) & 63] +
              i[63 & o]
          );
      return s.join("");
    }
    (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
  },
  function (e, t) {
    (t.read = function (e, t, n, i, r) {
      var o,
        s,
        a = 8 * r - i - 1,
        l = (1 << a) - 1,
        c = l >> 1,
        u = -7,
        h = n ? r - 1 : 0,
        p = n ? -1 : 1,
        d = e[t + h];
      for (
        h += p, o = d & ((1 << -u) - 1), d >>= -u, u += a;
        u > 0;
        o = 256 * o + e[t + h], h += p, u -= 8
      );
      for (
        s = o & ((1 << -u) - 1), o >>= -u, u += i;
        u > 0;
        s = 256 * s + e[t + h], h += p, u -= 8
      );
      if (0 === o) o = 1 - c;
      else {
        if (o === l) return s ? NaN : (1 / 0) * (d ? -1 : 1);
        (s += Math.pow(2, i)), (o -= c);
      }
      return (d ? -1 : 1) * s * Math.pow(2, o - i);
    }),
      (t.write = function (e, t, n, i, r, o) {
        var s,
          a,
          l,
          c = 8 * o - r - 1,
          u = (1 << c) - 1,
          h = u >> 1,
          p = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = i ? 0 : o - 1,
          f = i ? 1 : -1,
          m = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((a = isNaN(t) ? 1 : 0), (s = u))
              : ((s = Math.floor(Math.log(t) / Math.LN2)),
                t * (l = Math.pow(2, -s)) < 1 && (s--, (l *= 2)),
                (t += s + h >= 1 ? p / l : p * Math.pow(2, 1 - h)) * l >= 2 &&
                  (s++, (l /= 2)),
                s + h >= u
                  ? ((a = 0), (s = u))
                  : s + h >= 1
                  ? ((a = (t * l - 1) * Math.pow(2, r)), (s += h))
                  : ((a = t * Math.pow(2, h - 1) * Math.pow(2, r)), (s = 0)));
          r >= 8;
          e[n + d] = 255 & a, d += f, a /= 256, r -= 8
        );
        for (
          s = (s << r) | a, c += r;
          c > 0;
          e[n + d] = 255 & s, d += f, s /= 256, c -= 8
        );
        e[n + d - f] |= 128 * m;
      });
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    var i = n(14).Buffer,
      r = n(42);
    (e.exports = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      return (
        (e.prototype.push = function (e) {
          var t = { data: e, next: null };
          this.length > 0 ? (this.tail.next = t) : (this.head = t),
            (this.tail = t),
            ++this.length;
        }),
        (e.prototype.unshift = function (e) {
          var t = { data: e, next: this.head };
          0 === this.length && (this.tail = t), (this.head = t), ++this.length;
        }),
        (e.prototype.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;
            return (
              1 === this.length
                ? (this.head = this.tail = null)
                : (this.head = this.head.next),
              --this.length,
              e
            );
          }
        }),
        (e.prototype.clear = function () {
          (this.head = this.tail = null), (this.length = 0);
        }),
        (e.prototype.join = function (e) {
          if (0 === this.length) return "";
          for (var t = this.head, n = "" + t.data; (t = t.next); )
            n += e + t.data;
          return n;
        }),
        (e.prototype.concat = function (e) {
          if (0 === this.length) return i.alloc(0);
          if (1 === this.length) return this.head.data;
          for (
            var t, n, r, o = i.allocUnsafe(e >>> 0), s = this.head, a = 0;
            s;

          )
            (t = s.data),
              (n = o),
              (r = a),
              t.copy(n, r),
              (a += s.data.length),
              (s = s.next);
          return o;
        }),
        e
      );
    })()),
      r &&
        r.inspect &&
        r.inspect.custom &&
        (e.exports.prototype[r.inspect.custom] = function () {
          var e = r.inspect({ length: this.length });
          return this.constructor.name + " " + e;
        });
  },
  function (e, t) {},
  function (e, t, n) {
    (function (e) {
      var i =
          (void 0 !== e && e) || ("undefined" != typeof self && self) || window,
        r = Function.prototype.apply;
      function o(e, t) {
        (this._id = e), (this._clearFn = t);
      }
      (t.setTimeout = function () {
        return new o(r.call(setTimeout, i, arguments), clearTimeout);
      }),
        (t.setInterval = function () {
          return new o(r.call(setInterval, i, arguments), clearInterval);
        }),
        (t.clearTimeout = t.clearInterval = function (e) {
          e && e.close();
        }),
        (o.prototype.unref = o.prototype.ref = function () {}),
        (o.prototype.close = function () {
          this._clearFn.call(i, this._id);
        }),
        (t.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
        }),
        (t.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
        }),
        (t._unrefActive = t.active = function (e) {
          clearTimeout(e._idleTimeoutId);
          var t = e._idleTimeout;
          t >= 0 &&
            (e._idleTimeoutId = setTimeout(function () {
              e._onTimeout && e._onTimeout();
            }, t));
        }),
        n(44),
        (t.setImmediate =
          ("undefined" != typeof self && self.setImmediate) ||
          (void 0 !== e && e.setImmediate) ||
          (this && this.setImmediate)),
        (t.clearImmediate =
          ("undefined" != typeof self && self.clearImmediate) ||
          (void 0 !== e && e.clearImmediate) ||
          (this && this.clearImmediate));
    }.call(this, n(2)));
  },
  function (e, t, n) {
    (function (e, t) {
      !(function (e, n) {
        "use strict";
        if (!e.setImmediate) {
          var i,
            r,
            o,
            s,
            a,
            l = 1,
            c = {},
            u = !1,
            h = e.document,
            p = Object.getPrototypeOf && Object.getPrototypeOf(e);
          (p = p && p.setTimeout ? p : e),
            "[object process]" === {}.toString.call(e.process)
              ? (i = function (e) {
                  t.nextTick(function () {
                    f(e);
                  });
                })
              : !(function () {
                  if (e.postMessage && !e.importScripts) {
                    var t = !0,
                      n = e.onmessage;
                    return (
                      (e.onmessage = function () {
                        t = !1;
                      }),
                      e.postMessage("", "*"),
                      (e.onmessage = n),
                      t
                    );
                  }
                })()
              ? e.MessageChannel
                ? (((o = new MessageChannel()).port1.onmessage = function (e) {
                    f(e.data);
                  }),
                  (i = function (e) {
                    o.port2.postMessage(e);
                  }))
                : h && "onreadystatechange" in h.createElement("script")
                ? ((r = h.documentElement),
                  (i = function (e) {
                    var t = h.createElement("script");
                    (t.onreadystatechange = function () {
                      f(e),
                        (t.onreadystatechange = null),
                        r.removeChild(t),
                        (t = null);
                    }),
                      r.appendChild(t);
                  }))
                : (i = function (e) {
                    setTimeout(f, 0, e);
                  })
              : ((s = "setImmediate$" + Math.random() + "$"),
                (a = function (t) {
                  t.source === e &&
                    "string" == typeof t.data &&
                    0 === t.data.indexOf(s) &&
                    f(+t.data.slice(s.length));
                }),
                e.addEventListener
                  ? e.addEventListener("message", a, !1)
                  : e.attachEvent("onmessage", a),
                (i = function (t) {
                  e.postMessage(s + t, "*");
                })),
            (p.setImmediate = function (e) {
              "function" != typeof e && (e = new Function("" + e));
              for (
                var t = new Array(arguments.length - 1), n = 0;
                n < t.length;
                n++
              )
                t[n] = arguments[n + 1];
              var r = { callback: e, args: t };
              return (c[l] = r), i(l), l++;
            }),
            (p.clearImmediate = d);
        }
        function d(e) {
          delete c[e];
        }
        function f(e) {
          if (u) setTimeout(f, 0, e);
          else {
            var t = c[e];
            if (t) {
              u = !0;
              try {
                !(function (e) {
                  var t = e.callback,
                    n = e.args;
                  switch (n.length) {
                    case 0:
                      t();
                      break;
                    case 1:
                      t(n[0]);
                      break;
                    case 2:
                      t(n[0], n[1]);
                      break;
                    case 3:
                      t(n[0], n[1], n[2]);
                      break;
                    default:
                      t.apply(void 0, n);
                  }
                })(t);
              } finally {
                d(e), (u = !1);
              }
            }
          }
        }
      })("undefined" == typeof self ? (void 0 === e ? this : e) : self);
    }.call(this, n(2), n(0)));
  },
  function (e, t, n) {
    "use strict";
    e.exports = o;
    var i = n(24),
      r = Object.create(n(9));
    function o(e) {
      if (!(this instanceof o)) return new o(e);
      i.call(this, e);
    }
    (r.inherits = n(1)),
      r.inherits(o, i),
      (o.prototype._transform = function (e, t, n) {
        n(null, e);
      });
  },
  function (e, t, n) {
    e.exports = n(16);
  },
  function (e, t, n) {
    e.exports = n(4);
  },
  function (e, t, n) {
    e.exports = n(12).Transform;
  },
  function (e, t, n) {
    e.exports = n(12).PassThrough;
  },
  function (e, t, n) {
    "use strict";
    var i = n(12);
    function r(e, t, n) {
      void 0 === n && ((n = t), (t = e), (e = null)),
        i.Duplex.call(this, e),
        "function" != typeof n.read && (n = new i.Readable(e).wrap(n)),
        (this._writable = t),
        (this._readable = n),
        (this._waiting = !1);
      var r = this;
      t.once("finish", function () {
        r.end();
      }),
        this.once("finish", function () {
          t.end();
        }),
        n.on("readable", function () {
          r._waiting && ((r._waiting = !1), r._read());
        }),
        n.once("end", function () {
          r.push(null);
        }),
        (e && void 0 !== e.bubbleErrors && !e.bubbleErrors) ||
          (t.on("error", function (e) {
            r.emit("error", e);
          }),
          n.on("error", function (e) {
            r.emit("error", e);
          }));
    }
    (r.prototype = Object.create(i.Duplex.prototype, {
      constructor: { value: r },
    })),
      (r.prototype._write = function (e, t, n) {
        this._writable.write(e, t, n);
      }),
      (r.prototype._read = function () {
        for (var e, t = 0; null !== (e = this._readable.read()); )
          this.push(e), t++;
        0 === t && (this._waiting = !0);
      }),
      (e.exports = function (e, t, n) {
        return new r(e, t, n);
      }),
      (e.exports.DuplexWrapper = r);
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      const n = ["then", "catch", "finally"].map((e) => [
        e,
        Reflect.getOwnPropertyDescriptor(t.prototype, e),
      ]);
      e.exports = (e, t) => {
        for (const [i, r] of n) {
          const n = (...e) => Reflect.apply(r.value, t(), e);
          Reflect.defineProperty(e, i, { ...r, value: n });
        }
        return e;
      };
    }.call(this, n(11)));
  },
  function (e, t, n) {
    ((t = e.exports = n(25)).Stream = t),
      (t.Readable = t),
      (t.Writable = n(29)),
      (t.Duplex = n(6)),
      (t.Transform = n(30)),
      (t.PassThrough = n(58)),
      (t.finished = n(17)),
      (t.pipeline = n(59));
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
          (i = i.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, i);
      }
      return n;
    }
    function r(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    var s = n(8).Buffer,
      a = n(55).inspect,
      l = (a && a.custom) || "inspect";
    e.exports = (function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          (this.head = null),
          (this.tail = null),
          (this.length = 0);
      }
      var t, n, c;
      return (
        (t = e),
        (n = [
          {
            key: "push",
            value: function (e) {
              var t = { data: e, next: null };
              this.length > 0 ? (this.tail.next = t) : (this.head = t),
                (this.tail = t),
                ++this.length;
            },
          },
          {
            key: "unshift",
            value: function (e) {
              var t = { data: e, next: this.head };
              0 === this.length && (this.tail = t),
                (this.head = t),
                ++this.length;
            },
          },
          {
            key: "shift",
            value: function () {
              if (0 !== this.length) {
                var e = this.head.data;
                return (
                  1 === this.length
                    ? (this.head = this.tail = null)
                    : (this.head = this.head.next),
                  --this.length,
                  e
                );
              }
            },
          },
          {
            key: "clear",
            value: function () {
              (this.head = this.tail = null), (this.length = 0);
            },
          },
          {
            key: "join",
            value: function (e) {
              if (0 === this.length) return "";
              for (var t = this.head, n = "" + t.data; (t = t.next); )
                n += e + t.data;
              return n;
            },
          },
          {
            key: "concat",
            value: function (e) {
              if (0 === this.length) return s.alloc(0);
              for (
                var t, n, i, r = s.allocUnsafe(e >>> 0), o = this.head, a = 0;
                o;

              )
                (t = o.data),
                  (n = r),
                  (i = a),
                  s.prototype.copy.call(t, n, i),
                  (a += o.data.length),
                  (o = o.next);
              return r;
            },
          },
          {
            key: "consume",
            value: function (e, t) {
              var n;
              return (
                e < this.head.data.length
                  ? ((n = this.head.data.slice(0, e)),
                    (this.head.data = this.head.data.slice(e)))
                  : (n =
                      e === this.head.data.length
                        ? this.shift()
                        : t
                        ? this._getString(e)
                        : this._getBuffer(e)),
                n
              );
            },
          },
          {
            key: "first",
            value: function () {
              return this.head.data;
            },
          },
          {
            key: "_getString",
            value: function (e) {
              var t = this.head,
                n = 1,
                i = t.data;
              for (e -= i.length; (t = t.next); ) {
                var r = t.data,
                  o = e > r.length ? r.length : e;
                if (
                  (o === r.length ? (i += r) : (i += r.slice(0, e)),
                  0 == (e -= o))
                ) {
                  o === r.length
                    ? (++n,
                      t.next
                        ? (this.head = t.next)
                        : (this.head = this.tail = null))
                    : ((this.head = t), (t.data = r.slice(o)));
                  break;
                }
                ++n;
              }
              return (this.length -= n), i;
            },
          },
          {
            key: "_getBuffer",
            value: function (e) {
              var t = s.allocUnsafe(e),
                n = this.head,
                i = 1;
              for (n.data.copy(t), e -= n.data.length; (n = n.next); ) {
                var r = n.data,
                  o = e > r.length ? r.length : e;
                if ((r.copy(t, t.length - e, 0, o), 0 == (e -= o))) {
                  o === r.length
                    ? (++i,
                      n.next
                        ? (this.head = n.next)
                        : (this.head = this.tail = null))
                    : ((this.head = n), (n.data = r.slice(o)));
                  break;
                }
                ++i;
              }
              return (this.length -= i), t;
            },
          },
          {
            key: l,
            value: function (e, t) {
              return a(
                this,
                (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? i(Object(n), !0).forEach(function (t) {
                          r(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                        )
                      : i(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                            e,
                            t,
                            Object.getOwnPropertyDescriptor(n, t)
                          );
                        });
                  }
                  return e;
                })({}, t, { depth: 0, customInspect: !1 })
              );
            },
          },
        ]) && o(t.prototype, n),
        c && o(t, c),
        e
      );
    })();
  },
  function (e, t) {},
  function (e, t, n) {
    "use strict";
    (function (t, i) {
      var r;
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var s = n(17),
        a = Symbol("lastResolve"),
        l = Symbol("lastReject"),
        c = Symbol("error"),
        u = Symbol("ended"),
        h = Symbol("lastPromise"),
        p = Symbol("handlePromise"),
        d = Symbol("stream");
      function f(e, t) {
        return { value: e, done: t };
      }
      function m(e) {
        var t = e[a];
        if (null !== t) {
          var n = e[d].read();
          null !== n &&
            ((e[h] = null), (e[a] = null), (e[l] = null), t(f(n, !1)));
        }
      }
      function g(e) {
        t.nextTick(m, e);
      }
      var v = Object.getPrototypeOf(function () {}),
        y = Object.setPrototypeOf(
          (o(
            (r = {
              get stream() {
                return this[d];
              },
              next: function () {
                var e = this,
                  n = this[c];
                if (null !== n) return i.reject(n);
                if (this[u]) return i.resolve(f(void 0, !0));
                if (this[d].destroyed)
                  return new i(function (n, i) {
                    t.nextTick(function () {
                      e[c] ? i(e[c]) : n(f(void 0, !0));
                    });
                  });
                var r,
                  o = this[h];
                if (o)
                  r = new i(
                    (function (e, t) {
                      return function (n, i) {
                        e.then(function () {
                          t[u] ? n(f(void 0, !0)) : t[p](n, i);
                        }, i);
                      };
                    })(o, this)
                  );
                else {
                  var s = this[d].read();
                  if (null !== s) return i.resolve(f(s, !1));
                  r = new i(this[p]);
                }
                return (this[h] = r), r;
              },
            }),
            Symbol.asyncIterator,
            function () {
              return this;
            }
          ),
          o(r, "return", function () {
            var e = this;
            return new i(function (t, n) {
              e[d].destroy(null, function (e) {
                e ? n(e) : t(f(void 0, !0));
              });
            });
          }),
          r),
          v
        );
      e.exports = function (e) {
        var t,
          n = Object.create(
            y,
            (o((t = {}), d, { value: e, writable: !0 }),
            o(t, a, { value: null, writable: !0 }),
            o(t, l, { value: null, writable: !0 }),
            o(t, c, { value: null, writable: !0 }),
            o(t, u, { value: e._readableState.endEmitted, writable: !0 }),
            o(t, p, {
              value: function (e, t) {
                var i = n[d].read();
                i
                  ? ((n[h] = null), (n[a] = null), (n[l] = null), e(f(i, !1)))
                  : ((n[a] = e), (n[l] = t));
              },
              writable: !0,
            }),
            t)
          );
        return (
          (n[h] = null),
          s(e, function (e) {
            if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
              var t = n[l];
              return (
                null !== t &&
                  ((n[h] = null), (n[a] = null), (n[l] = null), t(e)),
                void (n[c] = e)
              );
            }
            var i = n[a];
            null !== i &&
              ((n[h] = null), (n[a] = null), (n[l] = null), i(f(void 0, !0))),
              (n[u] = !0);
          }),
          e.on("readable", g.bind(null, n)),
          n
        );
      };
    }.call(this, n(0), n(11)));
  },
  function (e, t) {
    e.exports = function () {
      throw new Error("Readable.from is not available in the browser");
    };
  },
  function (e, t, n) {
    "use strict";
    e.exports = r;
    var i = n(30);
    function r(e) {
      if (!(this instanceof r)) return new r(e);
      i.call(this, e);
    }
    n(1)(r, i),
      (r.prototype._transform = function (e, t, n) {
        n(null, e);
      });
  },
  function (e, t, n) {
    "use strict";
    var i;
    var r = n(5).codes,
      o = r.ERR_MISSING_ARGS,
      s = r.ERR_STREAM_DESTROYED;
    function a(e) {
      if (e) throw e;
    }
    function l(e, t, r, o) {
      o = (function (e) {
        var t = !1;
        return function () {
          t || ((t = !0), e.apply(void 0, arguments));
        };
      })(o);
      var a = !1;
      e.on("close", function () {
        a = !0;
      }),
        void 0 === i && (i = n(17)),
        i(e, { readable: t, writable: r }, function (e) {
          if (e) return o(e);
          (a = !0), o();
        });
      var l = !1;
      return function (t) {
        if (!a && !l)
          return (
            (l = !0),
            (function (e) {
              return e.setHeader && "function" == typeof e.abort;
            })(e)
              ? e.abort()
              : "function" == typeof e.destroy
              ? e.destroy()
              : void o(t || new s("pipe"))
          );
      };
    }
    function c(e) {
      e();
    }
    function u(e, t) {
      return e.pipe(t);
    }
    function h(e) {
      return e.length
        ? "function" != typeof e[e.length - 1]
          ? a
          : e.pop()
        : a;
    }
    e.exports = function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      var i,
        r = h(t);
      if ((Array.isArray(t[0]) && (t = t[0]), t.length < 2))
        throw new o("streams");
      var s = t.map(function (e, n) {
        var o = n < t.length - 1;
        return l(e, o, n > 0, function (e) {
          i || (i = e), e && s.forEach(c), o || (s.forEach(c), r(i));
        });
      });
      return t.reduce(u);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var i = n(31),
      r = n.n(i),
      o = n(3),
      s = n.n(o),
      a = n(32),
      l = n.n(a),
      c = (n(15), n(33), n(34), n(35)),
      u = n.n(c);
    function h() {
      return (h =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }).apply(this, arguments);
    }
    var p = (function () {
      function e(e) {
        var t = e.push;
        (this.push = t),
          (this.state = {
            expect: "header",
            row: 0,
            hasContentStarted: !1,
            isWebVTT: !1,
            node: {},
            buffer: [],
          });
      }
      var t = e.prototype;
      return (
        (t.isIndex = function (e) {
          return /^\d+$/.test(e.trim());
        }),
        (t.isTimestamp = function (e) {
          return f.test(e);
        }),
        (t.isVttComment = function (e) {
          return /^NOTE/.test(e);
        }),
        (t.getError = function (e, t, n) {
          return new Error(
            "expected " +
              e +
              " at row " +
              (t + 1) +
              ', but received: "' +
              n +
              '"'
          );
        }),
        (t.parseLine = function (e) {
          var t = 0 === this.state.row ? u()(e) : e;
          if (!this.state.hasContentStarted) {
            if (!t.trim()) return;
            this.state.hasContentStarted = !0;
          }
          ({
            header: this.parseHeader,
            id: this.parseId,
            timestamp: this.parseTimestamp,
            text: this.parseText,
            vtt_comment: this.parseVttComment,
          }[this.state.expect].call(this, t),
            this.state.row++);
        }),
        (t.flush = function () {
          this.state.buffer.length > 0 && this.pushNode();
        }),
        (t.parseHeader = function (e) {
          if (!this.state.isWebVTT) {
            if (
              ((this.state.isWebVTT = /^WEBVTT/.test(e)), !this.state.isWebVTT)
            )
              return void this.parseId(e);
            this.state.node.type = "header";
          }
          this.state.buffer.push(e), e || (this.state.expect = "id");
        }),
        (t.parseId = function (e) {
          (this.state.expect = "timestamp"),
            "header" === this.state.node.type && this.pushNode(),
            this.isIndex(e) ||
              (this.state.isWebVTT && this.isVttComment(e)
                ? (this.state.expect = "vtt_comment")
                : this.parseTimestamp(e));
        }),
        (t.parseVttComment = function (e) {
          (this.state.expect = "vtt_comment"),
            "" === e.trim() && (this.state.expect = "id");
        }),
        (t.parseTimestamp = function (e) {
          if (!this.isTimestamp(e))
            throw this.getError("timestamp", this.state.row, e);
          (this.state.node = { type: "cue", data: h({}, m(e), { text: "" }) }),
            (this.state.expect = "text");
        }),
        (t.parseText = function (e) {
          if (0 !== this.state.buffer.length) {
            if (this.isTimestamp(e)) {
              var t = this.state.buffer.length - 1;
              return (
                this.isIndex(this.state.buffer[t]) && this.state.buffer.pop(),
                this.pushNode(),
                void this.parseTimestamp(e)
              );
            }
            if (this.isVttComment(e))
              return this.pushNode(), void this.parseVttComment(e);
            this.state.buffer.push(e);
          } else this.state.buffer.push(e);
        }),
        (t.pushNode = function () {
          if ("cue" === this.state.node.type) {
            for (;;) {
              var e = this.state.buffer[this.state.buffer.length - 1];
              if (!["", "\n"].includes(e)) break;
              this.state.buffer.pop();
            }
            for (;;) {
              var t = this.state.buffer[0];
              if (!["", "\n"].includes(t)) break;
              this.state.buffer.shift();
            }
            this.state.node.data.text = this.state.buffer.join("\n");
          }
          "header" === this.state.node.type &&
            (this.state.node.data = this.state.buffer.join("\n").trim()),
            this.push(this.state.node),
            (this.state.node = {}),
            (this.state.buffer = []);
        }),
        e
      );
    })();
    function d(e) {
      var t = e.match(/^(?:(\d{1,}):)?(\d{2}):(\d{2})[,.](\d{3})$/);
      if (!t) throw new Error('Invalid SRT or VTT time format: "' + e + '"');
      return (
        (t[1] ? 36e5 * parseInt(t[1], 10) : 0) +
        6e4 * parseInt(t[2], 10) +
        1e3 * parseInt(t[3], 10) +
        parseInt(t[4], 10)
      );
    }
    var f = /^((?:\d{1,}:)?\d{2}:\d{2}[,.]\d{3}) --> ((?:\d{1,}:)?\d{2}:\d{2}[,.]\d{3})(?: (.*))?$/;
    function m(e) {
      var t = f.exec(e);
      if (!t) throw new Error("Invalid timestamp format");
      var n = { start: d(t[1]), end: d(t[2]) };
      return t[3] && (n.settings = t[3]), n;
    }
    function g(e) {
      return (g =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function v(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function y(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function b(e, t, n) {
      return t && y(e.prototype, t), n && y(e, n), e;
    }
    function w(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        t && x(e, t);
    }
    function x(e, t) {
      return (x =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function k(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var n,
          i = _(e);
        if (t) {
          var r = _(this).constructor;
          n = Reflect.construct(i, arguments, r);
        } else n = i.apply(this, arguments);
        return E(this, n);
      };
    }
    function E(e, t) {
      return !t || ("object" !== g(t) && "function" != typeof t)
        ? (function (e) {
            if (void 0 === e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return e;
          })(e)
        : t;
    }
    function _(e) {
      return (_ = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    var C = {
        npm_name: "parse-text-definition",
        version: "1.0.0",
        incidents: [
          {
            exportable: (function (e) {
              w(n, e);
              var t = k(n);
              function n() {
                return v(this, n), t.apply(this, arguments);
              }
              return (
                b(n, [
                  {
                    key: "getScratchValue",
                    value: function () {
                      return "";
                    },
                  },
                  {
                    key: "onProgress",
                    value: function (e, t) {
                      for (var n in this.targetValue) {
                        var i = this.targetValue[n].data,
                          r = i.start,
                          o = i.end,
                          s = i.text;
                        if (t >= r && t < o) {
                          this.element.innerHTML = s;
                          break;
                        }
                        this.element.innerHTML = "";
                      }
                    },
                  },
                ]),
                n
              );
            })(s.a.Effect),
            name: "ParseTextIncident",
            attributesValidationRules: {
              animatedAttrs: {
                type: "object",
                props: { subsArray: { type: "array" } },
              },
            },
          },
        ],
      },
      O = s.a.loadPlugin(C),
      S = (function (e) {
        w(n, e);
        var t = k(n);
        function n() {
          return v(this, n), t.apply(this, arguments);
        }
        return (
          b(n, [
            {
              key: "html",
              get: function () {
                return '\n    <div class="container">\n      <div id="subs-container"></div>\n    </div>\n    ';
              },
            },
            {
              key: "css",
              get: function () {
                var e = "center";
                return (
                  "top" == this.attrs.position
                    ? (e = "flex-start")
                    : "bottom" == this.attrs.position && (e = "flex-end"),
                  "\n    .container {\n      display:flex;\n      justify-content:center;\n      align-items:"
                    .concat(e, ";\n      font-size:")
                    .concat(this.attrs.fontSize || 12, "px;\n      color:")
                    .concat(
                      this.attrs.textColor || "white",
                      ";\n      font-family: "
                    )
                    .concat(
                      this.attrs.fontFamily || "'Ubuntu'",
                      ";\n      width: 100%;\n      height: 100%;\n\n    }\n    #subs-container{\n      max-width:"
                    )
                    .concat(
                      this.attrs.maxWidth ? this.attrs.maxWidth + "px" : "100%",
                      ";\n      text-align:center;\n      padding-top:"
                    )
                    .concat(
                      this.attrs.paddingTop || 0,
                      "px;\n      padding-bottom:"
                    )
                    .concat(this.attrs.paddingBottom || 0, "px;\n    }\n  ")
                );
              },
            },
            {
              key: "buildTree",
              value: function () {
                try {
                  var e =
                      ((n = this.attrs.subtitles),
                      (i = []),
                      (r = new p({
                        push: function (e) {
                          return i.push(e);
                        },
                      })),
                      n
                        .replace(/\r\n/g, "\n")
                        .split("\n")
                        .forEach(function (e) {
                          return r.parseLine(e);
                        }),
                      r.flush(),
                      i),
                    t = new O.ParseTextIncident(
                      { animatedAttrs: { subsArray: e } },
                      {
                        duration: e[e.length - 1].data.end,
                        selector: "#subs-container",
                      }
                    );
                  this.addIncident(t, 0);
                } catch (e) {
                  console.error("Error while loading subtitles", e);
                }
                var n, i, r;
              },
            },
          ]),
          n
        );
      })(s.a.HTMLClip),
      P = n(18),
      T = {
        npm_name: P.a,
        version: P.b,
        incidents: [
          {
            exportable: S,
            name: "ParseText",
            attributesValidationRules: {
              fontSize: "number",
              textColor: "string",
              fontFamily: "string",
              subtitles: "string",
            },
          },
        ],
      },
      I = Object(o.loadPlugin)(T),
      M = new o.HTMLClip({
        html:
          '\n    <div class="container">\n      <div id="subs-container"></div>\n    </div>',
        css:
          "\n  .container{\n    width:100%;\n    height:100%;\n    position:relative;\n    background:black;\n  }\n",
        host: document.getElementById("clip"),
        containerParams: { width: "720px", height: "640px" },
      }),
      A = new I.ParseText(
        {
          fontSize: 14,
          textColor: "white",
          fontFamily: "Ubuntu",
          subtitles: l.a,
          position: "bottom",
          maxWidth: 400,
          paddingBottom: 50,
        },
        {
          selector: "#subs-container",
          containerParams: { width: "720px", height: "640px" },
        }
      );
    M.addIncident(A, 0),
      new r.a({
        scaleToFit: !0,
        clip: M,
        theme: "mc-blue",
        preview: !0,
        pointerEvents: !0,
      });
  },
]);
