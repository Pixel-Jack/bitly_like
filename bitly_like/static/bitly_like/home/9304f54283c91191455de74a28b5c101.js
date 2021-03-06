/*

 Lo-Dash 1.0.1 (Custom Build) <http://lodash.com/>
 Build: `lodash modern -o ./dist/lodash.js`
 Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 Based on Underscore.js 1.4.4 <http://underscorejs.org/>
 Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 Available under MIT license <http://lodash.com/license>
*/
(function (b, k) {
  function a(d) {
    if (d && 'object' == typeof d && d.__wrapped__) return d;
    if (!(this instanceof a)) return new a(d);
    this.__wrapped__ = d;
  }

  function e(d, a, b) {
    a || (a = 0);
    var g = d.length, c = g - a >= (b || 30);
    if (c) {
      var f = {};
      for (b = a - 1; ++b < g;) {
        var l = d[ b ] + '';
        (H.call(f, l) ? f[ l ] : f[ l ] = []).push(d[ b ]);
      }
    }
    return function (b) {
      if (c) {
        var g = b + '';
        return H.call(f, g) && -1 < Y(f[ g ], b);
      }
      return -1 < Y(d, b, a);
    };
  }

  function h(d) {
    return d.charCodeAt(0);
  }

  function c(d, a) {
    var b = d.index, g = a.index;
    d = d.criteria;
    a = a.criteria;
    if (d !== a) {
      if (d > a || 'undefined' ==
        typeof d) return 1;
      if (d < a || 'undefined' == typeof a) return -1;
    }
    return b < g ? -1 : 1;
  }

  function f(d, a, b, g) {
    function c() {
      var e = arguments, h = l ? this : a;
      f || (d = a[ n ]);
      b.length && (e = e.length ? (e = p(e), g ? e.concat(b) : b.concat(e)) : b);
      return this instanceof c ? (u.prototype = d.prototype, h = new u, u.prototype = null, e = d.apply(h, e), G(e) ? e : h) : d.apply(h, e);
    }

    var f = t(d), l = !b, n = a;
    l && (b = a);
    f || (a = d);
    return c;
  }

  function d(d, a, b) {
    if (null == d) return ma;
    var g = typeof d;
    if ('function' != g) {
      if ('object' != g) return function (a) {
        return a[ d ];
      };
      var c = T(d);
      return function (a) {
        for (var b =
          c.length, g = !1; b-- && (g = z(a[ c[ b ] ], d[ c[ b ] ], fa));) ;
        return g;
      };
    }
    return 'undefined' != typeof a ? 1 === b ? function (b) {
      return d.call(a, b);
    } : 2 === b ? function (b, g) {
      return d.call(a, b, g);
    } : 4 === b ? function (b, g, c, f) {
      return d.call(a, b, g, c, f);
    } : function (b, g, c) {
      return d.call(a, b, g, c);
    } : d;
  }

  function g() {
    for (var a = {
      isKeysFast: Ma,
      arrays: 'isArray(iterable)',
      bottom: '',
      loop: '',
      top: '',
      useHas: !0
    }, b, g = 0; b = arguments[ g ]; g++) for (var c;; ; in
    b;
  )
    a[ c ] = b[ c ];
    b = a.args;
    a.firstArg = /^[^,]+/.exec(b)[ 0 ];
    g = Function;
    c = 'var index, iterable = ' + a.firstArg + ', result = iterable;\nif (!iterable) return result;\n' +
      a.top + ';\n';
    a.arrays && (c += 'var length = iterable.length; index = -1;\nif (' + a.arrays + ') {\n  while (++index < length) {\n    ' + a.loop + '\n  }\n}\nelse {  ');
    a.isKeysFast && a.useHas ? c += '\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] ? nativeKeys(iterable) : [],\n      length = ownProps.length;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n    ' + a.loop + '\n  }  ' : (c += '\n  for (index in iterable) {', a.useHas && (c += '\n    if (', a.useHas && (c += 'hasOwnProperty.call(iterable, index)'),
      c += ') {    '), c += a.loop + ';    ', a.useHas && (c += '\n    }'), c += '\n  }  ');
    a.arrays && (c += '\n}');
    c += a.bottom + ';\nreturn result';
    return g('createCallback, hasOwnProperty, isArguments, isArray, isString, objectTypes, nativeKeys', 'return function(' + b + ') {\n' + c + '\n}')(d, H, q, I, A, Ba, ba);
  }

  function l(a) {
    return '\\' + Na[ a ];
  }

  function m(a) {
    return Ca[ a ];
  }

  function u() {
  }

  function p(a, d, b) {
    d || (d = 0);
    'undefined' == typeof b && (b = a ? a.length : 0);
    var g = -1;
    b = b - d || 0;
    for (var c = Array(0 > b ? 0 : b); ++g < b;) c[ g ] = a[ d + g ];
    return c;
  }

  function B(a) {
    return Oa[ a ];
  }

  function q(a) {
    return '[object Arguments]' == L.call(a);
  }

  function y(a) {
    var d = !1;
    if (!a || 'object' != typeof a || q(a)) return d;
    var b = a.constructor;
    return !t(b) || b instanceof b ? (Z(a, function (a, b) {
      d = b;
    }), !1 === d || H.call(a, d)) : d;
  }

  function C(a) {
    var d = [];
    aa(a, function (a, b) {
      d.push(b);
    });
    return d;
  }

  function D(a, b, g, c, f, l) {
    var e = a;
    'function' == typeof b && (c = g, g = b, b = !1);
    if ('function' == typeof g) {
      g = 'undefined' == typeof c ? g : d(g, c, 1);
      var e = g(e), n = 'undefined' != typeof e;
      n || (e = a);
    }
    if (c = G(e)) {
      var h = L.call(e);
      if (!Q[ h ]) return e;
      var w = I(e);
    }
    if (!c ||
      !b) return c && !n ? w ? p(e) : na({}, e) : e;
    c = U[ h ];
    switch (h) {
      case '[object Boolean]':
      case '[object Date]':
        return n ? e : new c(+e);
      case '[object Number]':
      case '[object String]':
        return n ? e : new c(e);
      case '[object RegExp]':
        return n ? e : c(e.source, Pa.exec(e));
    }
    f || (f = []);
    l || (l = []);
    for (h = f.length; h--;) if (f[ h ] == a) return l[ h ];
    n || (e = w ? c(e.length) : {}, w && (H.call(a, 'index') && (e.index = a.index), H.call(a, 'input') && (e.input = a.input)));
    f.push(a);
    l.push(e);
    (w ? J : aa)(n ? e : a, function (a, d) {
      e[ d ] = D(a, b, g, k, f, l);
    });
    return e;
  }

  function E(a) {
    var d =
      [];
    Z(a, function (a, b) {
      t(a) && d.push(b);
    });
    return d.sort();
  }

  function M(a) {
    for (var d = -1, b = T(a), g = b.length, c = {}; ++d < g;) {
      var f = b[ d ];
      c[ a[ f ] ] = f;
    }
    return c;
  }

  function z(a, b, g, c, f, e) {
    var l = g === fa;
    if (g && !l) {
      g = 'undefined' == typeof c ? g : d(g, c, 2);
      var n = g(a, b);
      if ('undefined' != typeof n) return !!n;
    }
    if (a === b) return 0 !== a || 1 / a == 1 / b;
    var h = typeof a, w = typeof b;
    if (a === a && (!a || 'function' != h && 'object' != h) && (!b || 'function' != w && 'object' != w)) return !1;
    if (null == a || null == b) return a === b;
    w = L.call(a);
    h = L.call(b);
    '[object Arguments]' == w && (w =
      '[object Object]');
    '[object Arguments]' == h && (h = '[object Object]');
    if (w != h) return !1;
    switch (w) {
      case '[object Boolean]':
      case '[object Date]':
        return +a == +b;
      case '[object Number]':
        return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
      case '[object RegExp]':
      case '[object String]':
        return a == b + '';
    }
    h = '[object Array]' == w;
    if (!h) {
      if (a.__wrapped__ || b.__wrapped__) return z(a.__wrapped__ || a, b.__wrapped__ || b, g, c, f, e);
      if ('[object Object]' != w) return !1;
      var w = a.constructor, v = b.constructor;
      if (w != v && !(t(w) && w instanceof w && t(v) && v instanceof
          v)) return !1;
    }
    f || (f = []);
    e || (e = []);
    for (w = f.length; w--;) if (f[ w ] == a) return e[ w ] == b;
    var m = 0, n = !0;
    f.push(a);
    e.push(b);
    if (h) {
      w = a.length;
      m = b.length;
      n = m == a.length;
      if (!n && !l) return n;
      for (; m--;) if (h = w, v = b[ m ], l) for (; h-- && !(n = z(a[ h ], v, g, c, f, e));) ; else if (!(n = z(a[ m ], v, g, c, f, e))) break;
      return n;
    }
    Z(b, function (d, b, l) {
      if (H.call(l, b)) return m++, n = H.call(a, b) && z(a[ b ], d, g, c, f, e);
    });
    n && !l && Z(a, function (a, d, b) {
      if (H.call(b, d)) return n = -1 < --m;
    });
    return n;
  }

  function t(a) {
    return 'function' == typeof a;
  }

  function G(a) {
    return a ? Ba[ typeof a ] :
      !1;
  }

  function P(a) {
    return 'number' == typeof a || '[object Number]' == L.call(a);
  }

  function A(a) {
    return 'string' == typeof a || '[object String]' == L.call(a);
  }

  function K(a, b, g) {
    var c = arguments, f = 0, e = 2;
    if (!G(a)) return a;
    if (g === fa) var l = c[ 3 ], n = c[ 4 ],
      h = c[ 5 ]; else n = [], h = [], 'number' != typeof g && (e = c.length), 3 < e && 'function' == typeof c[ e - 2 ] ? l = d(c[ --e - 1 ], c[ e-- ], 2) : 2 < e && 'function' == typeof c[ e - 1 ] && (l = c[ --e ]);
    for (; ++f < e;) (I(c[ f ]) ? J : aa)(c[ f ], function (d, b) {
      var g, c, f = d, e = a[ b ];
      if (d && ((c = I(d)) || oa(d))) {
        for (f = n.length; f--;) if (g = n[ f ] ==
            d) {
          e = h[ f ];
          break;
        }
        g || (e = c ? I(e) ? e : [] : oa(e) ? e : {}, l && (f = l(e, d), 'undefined' != typeof f && (e = f)), n.push(d), h.push(e), l || (e = K(e, d, fa, l, n, h)));
      } else l && (f = l(e, d), 'undefined' == typeof f && (f = d)), 'undefined' != typeof f && (e = f);
      a[ b ] = e;
    });
    return a;
  }

  function n(a) {
    for (var d = -1, b = T(a), g = b.length, c = Array(g); ++d < g;) c[ d ] = a[ b[ d ] ];
    return c;
  }

  function v(a, d, b) {
    var g = -1, c = a ? a.length : 0, f = !1;
    b = (0 > b ? V(0, c + b) : b) || 0;
    'number' == typeof c ? f = -1 < (A(a) ? a.indexOf(d, b) : Y(a, d, b)) : N(a, function (a) {
      if (++g >= b) return !(f = a === d);
    });
    return f;
  }

  function F(a,
             b, g) {
    var c = !0;
    b = d(b, g);
    if (I(a)) {
      g = -1;
      for (var f = a.length; ++g < f && (c = !!b(a[ g ], g, a));) ;
    } else N(a, function (a, d, g) {
      return c = !!b(a, d, g);
    });
    return c;
  }

  function R(a, b, g) {
    var c = [];
    b = d(b, g);
    if (I(a)) {
      g = -1;
      for (var f = a.length; ++g < f;) {
        var e = a[ g ];
        b(e, g, a) && c.push(e);
      }
    } else N(a, function (a, d, g) {
      b(a, d, g) && c.push(a);
    });
    return c;
  }

  function x(a, b, g) {
    var c;
    b = d(b, g);
    J(a, function (a, d, g) {
      if (b(a, d, g)) return c = a, !1;
    });
    return c;
  }

  function J(a, d, b) {
    if (d && 'undefined' == typeof b && I(a)) {
      b = -1;
      for (var g = a.length; ++b < g && !1 !== d(a[ b ], b, a);) ;
    } else N(a,
      d, b);
    return a;
  }

  function r(a, b, g) {
    var c = -1, f = a ? a.length : 0, e = Array('number' == typeof f ? f : 0);
    b = d(b, g);
    if (I(a)) for (; ++c < f;) e[ c ] = b(a[ c ], c, a); else N(a, function (a, d, g) {
      e[ ++c ] = b(a, d, g);
    });
    return e;
  }

  function W(a, b, g) {
    var c = -Infinity, f = c;
    if (!b && I(a)) {
      g = -1;
      for (var e = a.length; ++g < e;) {
        var l = a[ g ];
        l > f && (f = l);
      }
    } else b = !b && A(a) ? h : d(b, g), N(a, function (a, d, g) {
      d = b(a, d, g);
      d > c && (c = d, f = a);
    });
    return f;
  }

  function ca(a, b, g, c) {
    var f = 3 > arguments.length;
    b = d(b, c, 4);
    if (I(a)) {
      var e = -1, l = a.length;
      for (f && (g = a[ ++e ]); ++e < l;) g = b(g, a[ e ], e, a)
    } else N(a,
      function (a, d, c) {
        g = f ? (f = !1, a) : b(g, a, d, c);
      });
    return g;
  }

  function S(a, b, g, c) {
    var f = a ? a.length : 0, e = 3 > arguments.length;
    if ('number' != typeof f) var l = T(a), f = l.length;
    b = d(b, c, 4);
    J(a, function (d, c, n) {
      c = l ? l[ --f ] : --f;
      g = e ? (e = !1, a[ c ]) : b(g, a[ c ], c, n);
    });
    return g;
  }

  function w(a, b, g) {
    var c;
    b = d(b, g);
    if (I(a)) {
      g = -1;
      for (var f = a.length; ++g < f && !(c = b(a[ g ], g, a));) ;
    } else N(a, function (a, d, g) {
      return !(c = b(a, d, g));
    });
    return !!c;
  }

  function pa(a, b, g) {
    if (a) {
      var c = 0, f = a.length;
      if ('number' != typeof b && null != b) {
        var e = -1;
        for (b = d(b, g); ++e < f && b(a[ e ],
          e, a);) c++
      } else if (c = b, null == c || g) return a[ 0 ];
      return p(a, 0, qa(V(0, c), f));
    }
  }

  function da(a, d) {
    for (var b = -1, g = a ? a.length : 0, c = []; ++b < g;) {
      var f = a[ b ];
      I(f) ? ha.apply(c, d ? f : da(f)) : c.push(f);
    }
    return c;
  }

  function Y(a, d, b) {
    var g = -1, c = a ? a.length : 0;
    if ('number' == typeof b) g = (0 > b ? V(0, c + b) : b || 0) - 1; else if (b) return g = Da(a, d), a[ g ] === d ? g : -1;
    for (; ++g < c;) if (a[ g ] === d) return g;
    return -1;
  }

  function ra(a, b, g) {
    if ('number' != typeof b && null != b) {
      var c = 0, f = -1, e = a ? a.length : 0;
      for (b = d(b, g); ++f < e && b(a[ f ], f, a);) c++
    } else c = null == b || g ? 1 : V(0, b);
    return p(a, c);
  }

  function Da(a, b, g, c) {
    var f = 0, e = a ? a.length : f;
    g = g ? d(g, c, 1) : ma;
    for (b = g(b); f < e;) c = f + e >>> 1, g(a[ c ]) < b ? f = c + 1 : e = c;
    return f;
  }

  function sa(a, b, g, c) {
    var f = -1, e = a ? a.length : 0, l = [], n = l;
    'function' == typeof b && (c = g, g = b, b = !1);
    var h = !b && 75 <= e;
    if (h) var w = {};
    g && (n = [], g = d(g, c));
    for (; ++f < e;) {
      c = a[ f ];
      var v = g ? g(c, f, a) : c;
      if (h) var m = v + '', m = H.call(w, m) ? !(n = w[ m ]) : n = w[ m ] = [];
      if (b ? !f || n[ n.length - 1 ] !== v : m || 0 > Y(n, v)) (g || h) && n.push(v), l.push(c);
    }
    return l;
  }

  function ta(a, d) {
    return Qa || X && 2 < arguments.length ? X.call.apply(X, arguments) :
      f(a, d, p(arguments, 2));
  }

  function Ea(a) {
    var d = p(arguments, 1);
    return setTimeout(function () {
      a.apply(k, d);
    }, 1);
  }

  function ma(a) {
    return a;
  }

  function Fa(d) {
    J(E(d), function (b) {
      var g = a[ b ] = d[ b ];
      a.prototype[ b ] = function () {
        var d = [ this.__wrapped__ ];
        ha.apply(d, arguments);
        return new a(g.apply(a, d));
      };
    });
  }

  function Ga() {
    return this.__wrapped__;
  }

  var ua = 'object' == typeof exports && exports,
    va = 'object' == typeof module && module && module.exports == ua && module,
    wa = 'object' == typeof global && global;
  wa.global === wa && (b = wa);
  var O = [], ia = {}, Ra = 0,
    fa = ia, Sa = b._, Ta = /&(?:amp|lt|gt|quot|#39);/g, Ua = /\b__p \+= '';/g, Va = /\b(__p \+=) '' \+/g,
    Wa = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Pa = /\w*$/,
    ja = RegExp('^' + (ia.valueOf + '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/valueOf|for [^\]]+/g, '.+?') + '$'),
    Xa = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ha = /<%=([\s\S]+?)%>/g, ka = /($^)/, Ya = /[&<>"']/g,
    Za = /['\n\r\t\u2028\u2029\\]/g, $a = 0, ab = Math.ceil, ea = O.concat, Ia = Math.floor,
    ga = ja.test(ga = Object.getPrototypeOf) && ga, H = ia.hasOwnProperty, ha = O.push, L = ia.toString,
    X = ja.test(X = p.bind) &&
      X, xa = ja.test(xa = Array.isArray) && xa, bb = b.isFinite, cb = b.isNaN, ba = ja.test(ba = Object.keys) && ba,
    V = Math.max, qa = Math.min, Ja = Math.random, Ka = !!b.attachEvent, ya = X && !/\n|true/.test(X + Ka),
    Qa = X && !ya, Ma = ba && (Ka || ya), Q = { '[object Function]': !1 };
  Q[ '[object Arguments]' ] = Q[ '[object Array]' ] = Q[ '[object Boolean]' ] = Q[ '[object Date]' ] = Q[ '[object Number]' ] = Q[ '[object Object]' ] = Q[ '[object RegExp]' ] = Q[ '[object String]' ] = !0;
  var U = {};
  U[ '[object Array]' ] = Array;
  U[ '[object Boolean]' ] = Boolean;
  U[ '[object Date]' ] = Date;
  U[ '[object Object]' ] =
    Object;
  U[ '[object Number]' ] = Number;
  U[ '[object RegExp]' ] = RegExp;
  U[ '[object String]' ] = String;
  var Ba = { 'boolean': !1, 'function': !0, object: !0, number: !1, string: !1, undefined: !1 },
    Na = { '\\': '\\', '\'': '\'', '\n': 'n', '\r': 'r', '\t': 't', '\u2028': 'u2028', '\u2029': 'u2029' };
  a.templateSettings = {
    escape: /<%-([\s\S]+?)%>/g,
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: Ha,
    variable: '',
    imports: { _: a }
  };
  var za = {
      args: 'object, source, guard',
      top: 'var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == \'number\' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {',
      loop: 'if (typeof result[index] == \'undefined\') result[index] = iterable[index]',
      bottom: '  }\n}'
    }, la = {
      args: 'collection, callback, thisArg',
      top: 'callback = callback && typeof thisArg == \'undefined\' ? callback : createCallback(callback, thisArg)',
      arrays: 'typeof length == \'number\'',
      loop: 'if (callback(iterable[index], index, collection) === false) return result'
    }, La = { top: 'if (!objectTypes[typeof iterable]) return result;\n' + la.top, arrays: !1 }, N = g(la),
    Z = g(la, La, { useHas: !1 }), aa = g(la, La), I = xa || function (a) {
      return a instanceof
        Array || '[object Array]' == L.call(a);
    }, T = ba ? function (a) {
      return G(a) ? ba(a) : [];
    } : C, Ca = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&#39;' }, Oa = M(Ca), na = g(za, {
      top: za.top.replace(';', ';\nif (argsLength > 3 && typeof args[argsLength - 2] == \'function\') {\n  var callback = createCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == \'function\') {\n  callback = args[--argsLength];\n}'),
      loop: 'result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]'
    }),
    Aa = g(za);
  t(/x/) && (t = function (a) {
    return a instanceof Function || '[object Function]' == L.call(a);
  });
  var oa = function (a) {
    if (!a || 'object' != typeof a) return !1;
    var d = a.valueOf, b = 'function' == typeof d && (b = ga(d)) && ga(b);
    return b ? a == b || ga(a) == b && !q(a) : y(a);
  };
  ya && va && 'function' == typeof setImmediate && (Ea = ta(setImmediate, b));
  a.after = function (a, d) {
    return 1 > a ? d() : function () {
      if (1 > --a) return d.apply(this, arguments);
    };
  };
  a.assign = na;
  a.at = function (a) {
    for (var d = -1, b = ea.apply(O, p(arguments, 1)), g = b.length, c = Array(g); ++d < g;) c[ d ] =
      a[ b[ d ] ];
    return c;
  };
  a.bind = ta;
  a.bindAll = function (a) {
    for (var d = ea.apply(O, arguments), b = 1 < d.length ? 0 : (d = E(a), -1), g = d.length; ++b < g;) {
      var c = d[ b ];
      a[ c ] = ta(a[ c ], a);
    }
    return a;
  };
  a.bindKey = function (a, d) {
    return f(a, d, p(arguments, 2));
  };
  a.compact = function (a) {
    for (var d = -1, b = a ? a.length : 0, g = []; ++d < b;) {
      var c = a[ d ];
      c && g.push(c);
    }
    return g;
  };
  a.compose = function () {
    var a = arguments;
    return function () {
      for (var d = arguments, b = a.length; b--;) d = [ a[ b ].apply(this, d) ];
      return d[ 0 ];
    };
  };
  a.countBy = function (a, b, g) {
    var c = {};
    b = d(b, g);
    J(a, function (a,
                   d, g) {
      d = b(a, d, g) + '';
      H.call(c, d) ? c[ d ]++ : c[ d ] = 1;
    });
    return c;
  };
  a.debounce = function (a, d, b) {
    function g() {
      l = null;
      b || (f = a.apply(e, c));
    }

    var c, f, e, l;
    return function () {
      var n = b && !l;
      c = arguments;
      e = this;
      clearTimeout(l);
      l = setTimeout(g, d);
      n && (f = a.apply(e, c));
      return f;
    };
  };
  a.defaults = Aa;
  a.defer = Ea;
  a.delay = function (a, d) {
    var b = p(arguments, 2);
    return setTimeout(function () {
      a.apply(k, b);
    }, d);
  };
  a.difference = function (a) {
    for (var d = -1, b = a ? a.length : 0, g = ea.apply(O, arguments), g = e(g, b), c = []; ++d < b;) {
      var f = a[ d ];
      g(f) || c.push(f);
    }
    return c;
  };
  a.filter = R;
  a.flatten = da;
  a.forEach = J;
  a.forIn = Z;
  a.forOwn = aa;
  a.functions = E;
  a.groupBy = function (a, b, g) {
    var c = {};
    b = d(b, g);
    J(a, function (a, d, g) {
      d = b(a, d, g) + '';
      (H.call(c, d) ? c[ d ] : c[ d ] = []).push(a);
    });
    return c;
  };
  a.initial = function (a, b, g) {
    if (!a) return [];
    var c = 0, f = a.length;
    if ('number' != typeof b && null != b) {
      var e = f;
      for (b = d(b, g); e-- && b(a[ e ], e, a);) c++
    } else c = null == b || g ? 1 : b || c;
    return p(a, 0, qa(V(0, f - c), f));
  };
  a.intersection = function (a) {
    var d = arguments, b = d.length, g = { 0: {} }, c = -1, f = a ? a.length : 0, l = 100 <= f, n = [], h = n;
    a:for (; ++c < f;) {
      var w =
        a[ c ];
      if (l) var v = w + '', v = H.call(g[ 0 ], v) ? !(h = g[ 0 ][ v ]) : h = g[ 0 ][ v ] = [];
      if (v || 0 > Y(h, w)) {
        l && h.push(w);
        for (var m = b; --m;) if (!(g[ m ] || (g[ m ] = e(d[ m ], 0, 100)))(w)) continue a;
        n.push(w);
      }
    }
    return n;
  };
  a.invert = M;
  a.invoke = function (a, d) {
    var b = p(arguments, 2), g = -1, c = 'function' == typeof d, f = a ? a.length : 0,
      e = Array('number' == typeof f ? f : 0);
    J(a, function (a) {
      e[ ++g ] = (c ? d : a[ d ]).apply(a, b);
    });
    return e;
  };
  a.keys = T;
  a.map = r;
  a.max = W;
  a.memoize = function (a, d) {
    var b = {};
    return function () {
      var g = (d ? d.apply(this, arguments) : arguments[ 0 ]) + '';
      return H.call(b,
        g) ? b[ g ] : b[ g ] = a.apply(this, arguments);
    };
  };
  a.merge = K;
  a.min = function (a, b, g) {
    var c = Infinity, f = c;
    if (!b && I(a)) {
      g = -1;
      for (var e = a.length; ++g < e;) {
        var l = a[ g ];
        l < f && (f = l);
      }
    } else b = !b && A(a) ? h : d(b, g), N(a, function (a, d, g) {
      d = b(a, d, g);
      d < c && (c = d, f = a);
    });
    return f;
  };
  a.object = function (a, d) {
    for (var b = -1, g = a ? a.length : 0, c = {}; ++b < g;) {
      var f = a[ b ];
      d ? c[ f ] = d[ b ] : c[ f[ 0 ] ] = f[ 1 ];
    }
    return c;
  };
  a.omit = function (a, b, g) {
    var c = 'function' == typeof b, f = {};
    if (c) b = d(b, g); else var e = ea.apply(O, arguments);
    Z(a, function (a, d, g) {
      if (c ? !b(a, d, g) : 0 > Y(e, d, 1)) f[ d ] =
        a;
    });
    return f;
  };
  a.once = function (a) {
    var d, b;
    return function () {
      if (d) return b;
      d = !0;
      b = a.apply(this, arguments);
      a = null;
      return b;
    };
  };
  a.pairs = function (a) {
    for (var d = -1, b = T(a), g = b.length, c = Array(g); ++d < g;) {
      var f = b[ d ];
      c[ d ] = [ f, a[ f ] ];
    }
    return c;
  };
  a.partial = function (a) {
    return f(a, p(arguments, 1));
  };
  a.partialRight = function (a) {
    return f(a, p(arguments, 1), null, fa);
  };
  a.pick = function (a, b, g) {
    var c = {};
    if ('function' != typeof b) for (var f = 0, e = ea.apply(O, arguments), l = G(a) ? e.length : 0; ++f < l;) {
      var n = e[ f ];
      n in a && (c[ n ] = a[ n ]);
    } else b = d(b, g),
      Z(a, function (a, d, g) {
        b(a, d, g) && (c[ d ] = a);
      });
    return c;
  };
  a.pluck = r;
  a.range = function (a, d, b) {
    a = +a || 0;
    b = +b || 1;
    null == d && (d = a, a = 0);
    var g = -1;
    d = V(0, ab((d - a) / b));
    for (var c = Array(d); ++g < d;) c[ g ] = a, a += b;
    return c;
  };
  a.reject = function (a, b, g) {
    b = d(b, g);
    return R(a, function (a, d, g) {
      return !b(a, d, g);
    });
  };
  a.rest = ra;
  a.shuffle = function (a) {
    var d = -1, b = a ? a.length : 0, g = Array('number' == typeof b ? b : 0);
    J(a, function (a) {
      var b = Ia(Ja() * (++d + 1));
      g[ d ] = g[ b ];
      g[ b ] = a;
    });
    return g;
  };
  a.sortBy = function (a, b, g) {
    var f = -1, e = a ? a.length : 0, l = Array('number' == typeof e ?
      e : 0);
    b = d(b, g);
    J(a, function (a, d, g) {
      l[ ++f ] = { criteria: b(a, d, g), index: f, value: a };
    });
    e = l.length;
    for (l.sort(c); e--;) l[ e ] = l[ e ].value;
    return l;
  };
  a.tap = function (a, d) {
    d(a);
    return a;
  };
  a.throttle = function (a, d) {
    function b() {
      l = new Date;
      e = null;
      c = a.apply(f, g);
    }

    var g, c, f, e, l = 0;
    return function () {
      var n = new Date, h = d - (n - l);
      g = arguments;
      f = this;
      0 >= h ? (clearTimeout(e), e = null, l = n, c = a.apply(f, g)) : e || (e = setTimeout(b, h));
      return c;
    };
  };
  a.times = function (a, d, b) {
    a = +a || 0;
    for (var g = -1, c = Array(a); ++g < a;) c[ g ] = d.call(b, g);
    return c;
  };
  a.toArray =
    function (a) {
      return a && 'number' == typeof a.length ? p(a) : n(a);
    };
  a.union = function () {
    return sa(ea.apply(O, arguments));
  };
  a.uniq = sa;
  a.values = n;
  a.where = R;
  a.without = function (a) {
    for (var d = -1, b = a ? a.length : 0, g = e(arguments, 1), c = []; ++d < b;) {
      var f = a[ d ];
      g(f) || c.push(f);
    }
    return c;
  };
  a.wrap = function (a, d) {
    return function () {
      var b = [ a ];
      ha.apply(b, arguments);
      return d.apply(this, b);
    };
  };
  a.zip = function (a) {
    for (var d = -1, b = a ? W(r(arguments, 'length')) : 0, g = Array(b); ++d < b;) g[ d ] = r(arguments, d);
    return g;
  };
  a.collect = r;
  a.drop = ra;
  a.each = J;
  a.extend =
    na;
  a.methods = E;
  a.select = R;
  a.tail = ra;
  a.unique = sa;
  Fa(a);
  a.clone = D;
  a.cloneDeep = function (a, d, b) {
    return D(a, !0, d, b);
  };
  a.contains = v;
  a.escape = function (a) {
    return null == a ? '' : (a + '').replace(Ya, m);
  };
  a.every = F;
  a.find = x;
  a.has = function (a, d) {
    return a ? H.call(a, d) : !1;
  };
  a.identity = ma;
  a.indexOf = Y;
  a.isArguments = q;
  a.isArray = I;
  a.isBoolean = function (a) {
    return !0 === a || !1 === a || '[object Boolean]' == L.call(a);
  };
  a.isDate = function (a) {
    return a instanceof Date || '[object Date]' == L.call(a);
  };
  a.isElement = function (a) {
    return a ? 1 === a.nodeType :
      !1;
  };
  a.isEmpty = function (a) {
    var d = !0;
    if (!a) return d;
    var b = L.call(a), g = a.length;
    if ('[object Array]' == b || '[object String]' == b || '[object Arguments]' == b || '[object Object]' == b && 'number' == typeof g && t(a.splice)) return !g;
    aa(a, function () {
      return d = !1;
    });
    return d;
  };
  a.isEqual = z;
  a.isFinite = function (a) {
    return bb(a) && !cb(parseFloat(a));
  };
  a.isFunction = t;
  a.isNaN = function (a) {
    return P(a) && a != +a;
  };
  a.isNull = function (a) {
    return null === a;
  };
  a.isNumber = P;
  a.isObject = G;
  a.isPlainObject = oa;
  a.isRegExp = function (a) {
    return a instanceof RegExp ||
      '[object RegExp]' == L.call(a);
  };
  a.isString = A;
  a.isUndefined = function (a) {
    return 'undefined' == typeof a;
  };
  a.lastIndexOf = function (a, d, b) {
    var g = a ? a.length : 0;
    for ('number' == typeof b && (g = (0 > b ? V(0, g + b) : qa(b, g - 1)) + 1); g--;) if (a[ g ] === d) return g;
    return -1;
  };
  a.mixin = Fa;
  a.noConflict = function () {
    b._ = Sa;
    return this;
  };
  a.random = function (a, d) {
    null == a && null == d && (d = 1);
    a = +a || 0;
    null == d && (d = a, a = 0);
    return a + Ia(Ja() * ((+d || 0) - a + 1));
  };
  a.reduce = ca;
  a.reduceRight = S;
  a.result = function (a, d) {
    var b = a ? a[ d ] : k;
    return t(b) ? a[ d ]() : b;
  };
  a.size = function (a) {
    var d =
      a ? a.length : 0;
    return 'number' == typeof d ? d : T(a).length;
  };
  a.some = w;
  a.sortedIndex = Da;
  a.template = function (d, b, g) {
    var c = a.templateSettings;
    d || (d = '');
    g = Aa({}, g, c);
    var f = Aa({}, g.imports, c.imports), c = T(f), f = n(f), e, h = 0, w = g.interpolate || ka, v = '__p += \'';
    d.replace(RegExp((g.escape || ka).source + '|' + w.source + '|' + (w === Ha ? Xa : ka).source + '|' + (g.evaluate || ka).source + '|$', 'g'), function (a, b, g, c, f, n) {
      g || (g = c);
      v += d.slice(h, n).replace(Za, l);
      b && (v += '\' +\n__e(' + b + ') +\n\'');
      f && (e = !0, v += '\';\n' + f + ';\n__p += \'');
      g && (v += '\' +\n((__t = (' +
        g + ')) == null ? \'\' : __t) +\n\'');
      h = n + a.length;
      return a;
    });
    var v = v + '\';\n', m = w = g.variable;
    m || (w = 'obj', v = 'with (' + w + ') {\n' + v + '\n}\n');
    v = (e ? v.replace(Ua, '') : v).replace(Va, '$1').replace(Wa, '$1;');
    v = 'function(' + w + ') {\n' + (m ? '' : w + ' || (' + w + ' = {});\n') + 'var __t, __p = \'\', __e = _.escape' + (e ? ', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, \'\') }\n' : ';\n') + v + 'return __p\n}';
    g = '\n/*\n//@ sourceURL=' + (g.sourceURL || '/lodash/template/source[' + $a++ + ']') + '\n*/';
    try {
      var da = Function(c,
        'return ' + v + g).apply(k, f);
    } catch (F) {
      throw F.source = v, F;
    }
    if (b) return da(b);
    da.source = v;
    return da;
  };
  a.unescape = function (a) {
    return null == a ? '' : (a + '').replace(Ta, B);
  };
  a.uniqueId = function (a) {
    var d = ++Ra;
    return (null == a ? '' : a + '') + d;
  };
  a.all = F;
  a.any = w;
  a.detect = x;
  a.foldl = ca;
  a.foldr = S;
  a.include = v;
  a.inject = ca;
  aa(a, function (d, b) {
    a.prototype[ b ] || (a.prototype[ b ] = function () {
      var b = [ this.__wrapped__ ];
      ha.apply(b, arguments);
      return d.apply(a, b);
    });
  });
  a.first = pa;
  a.last = function (a, b, g) {
    if (a) {
      var c = 0, f = a.length;
      if ('number' != typeof b &&
        null != b) {
        var e = f;
        for (b = d(b, g); e-- && b(a[ e ], e, a);) c++
      } else if (c = b, null == c || g) return a[ f - 1 ];
      return p(a, V(0, f - c));
    }
  };
  a.take = pa;
  a.head = pa;
  aa(a, function (d, b) {
    a.prototype[ b ] || (a.prototype[ b ] = function (b, g) {
      var c = d(this.__wrapped__, b, g);
      return null == b || g && 'function' != typeof b ? c : new a(c);
    });
  });
  a.VERSION = '1.0.1';
  a.prototype.toString = function () {
    return this.__wrapped__ + '';
  };
  a.prototype.value = Ga;
  a.prototype.valueOf = Ga;
  N([ 'join', 'pop', 'shift' ], function (d) {
    var b = O[ d ];
    a.prototype[ d ] = function () {
      return b.apply(this.__wrapped__,
        arguments);
    };
  });
  N([ 'push', 'reverse', 'sort', 'unshift' ], function (d) {
    var b = O[ d ];
    a.prototype[ d ] = function () {
      b.apply(this.__wrapped__, arguments);
      return this;
    };
  });
  N([ 'concat', 'slice', 'splice' ], function (d) {
    var b = O[ d ];
    a.prototype[ d ] = function () {
      return new a(b.apply(this.__wrapped__, arguments));
    };
  });
  'function' == typeof define && 'object' == typeof define.amd && define.amd ? (b._ = a, define(function () {
    return a;
  })) : ua ? va ? (va.exports = a)._ = a : ua._ = a : b._ = a;
})(this);
(function () {
  var b = this, k = b.Backbone, a = Array.prototype.slice, e = Array.prototype.splice, h;
  h = 'undefined' !== typeof exports ? exports : b.Backbone = {};
  h.VERSION = '0.9.2';
  var c = b._;
  !c && 'undefined' !== typeof require && (c = require('underscore'));
  var f = b.jQuery || b.Zepto || b.ender;
  h.setDomLibrary = function (a) {
    f = a;
  };
  h.noConflict = function () {
    b.Backbone = k;
    return this;
  };
  h.emulateHTTP = !1;
  h.emulateJSON = !1;
  var d = /\s+/, g = h.Events = {
    on: function (a, b, g) {
      var c, f, e, l, h;
      if (!b) return this;
      a = a.split(d);
      for (c = this._callbacks || (this._callbacks =
        {}); f = a.shift();) e = (h = c[ f ]) ? h.tail : {}, e.next = l = {}, e.context = g, e.callback = b, c[ f ] = {
        tail: l,
        next: h ? h.next : e
      };
      return this;
    }, off: function (a, b, g) {
      var f, e, l, h, m, k;
      if (e = this._callbacks) {
        if (!a && !b && !g) return delete this._callbacks, this;
        for (a = a ? a.split(d) : c.keys(e); f = a.shift();) if (l = e[ f ], delete e[ f ], l && (b || g)) for (h = l.tail; (l = l.next) !== h;) if (m = l.callback, k = l.context, b && m !== b || g && k !== g) this.on(f, m, k);
        return this;
      }
    }, trigger: function (b) {
      var g, c, f, e, l, h;
      if (!(f = this._callbacks)) return this;
      l = f.all;
      b = b.split(d);
      for (h =
             a.call(arguments, 1); g = b.shift();) {
        if (c = f[ g ]) for (e = c.tail; (c = c.next) !== e;) c.callback.apply(c.context || this, h);
        if (c = l) for (e = c.tail, g = [ g ].concat(h); (c = c.next) !== e;) c.callback.apply(c.context || this, g)
      }
      return this;
    }
  };
  g.bind = g.on;
  g.unbind = g.off;
  var l = h.Model = function (a, d) {
    var b;
    a || (a = {});
    d && d.parse && (a = this.parse(a));
    if (b = A(this, 'defaults')) a = c.extend({}, b, a);
    d && d.collection && (this.collection = d.collection);
    this.attributes = {};
    this._escapedAttributes = {};
    this.cid = c.uniqueId('c');
    this.changed = {};
    this._silent =
      {};
    this._pending = {};
    this.set(a, { silent: !0 });
    this.changed = {};
    this._silent = {};
    this._pending = {};
    this._previousAttributes = c.clone(this.attributes);
    this.initialize.apply(this, arguments);
  };
  c.extend(l.prototype, g, {
    changed: null, _silent: null, _pending: null, idAttribute: 'id', initialize: function () {
    }, toJSON: function () {
      return c.clone(this.attributes);
    }, get: function (a) {
      return this.attributes[ a ];
    }, escape: function (a) {
      var d;
      if (d = this._escapedAttributes[ a ]) return d;
      d = this.get(a);
      return this._escapedAttributes[ a ] = c.escape(null ==
      d ? '' : '' + d);
    }, has: function (a) {
      return null != this.get(a);
    }, set: function (a, d, b) {
      var g, f;
      c.isObject(a) || null == a ? (g = a, b = d) : (g = {}, g[ a ] = d);
      b || (b = {});
      if (!g) return this;
      g instanceof l && (g = g.attributes);
      if (b.unset) for (f in g) g[ f ] = void 0;
      if (!this._validate(g, b)) return !1;
      this.idAttribute in g && (this.id = g[ this.idAttribute ]);
      d = b.changes = {};
      var e = this.attributes, h = this._escapedAttributes, m = this._previousAttributes || {};
      for (f in g) {
        a = g[ f ];
        if (!c.isEqual(e[ f ], a) || b.unset && c.has(e, f)) delete h[ f ], (b.silent ? this._silent :
          d)[ f ] = !0;
        b.unset ? delete e[ f ] : e[ f ] = a;
        c.isEqual(m[ f ], a) && c.has(e, f) == c.has(m, f) ? (delete this.changed[ f ], delete this._pending[ f ]) : (this.changed[ f ] = a, b.silent || (this._pending[ f ] = !0));
      }
      b.silent || this.change(b);
      return this;
    }, unset: function (a, d) {
      (d || (d = {})).unset = !0;
      return this.set(a, null, d);
    }, clear: function (a) {
      (a || (a = {})).unset = !0;
      return this.set(c.clone(this.attributes), a);
    }, fetch: function (a) {
      a = a ? c.clone(a) : {};
      var d = this, b = a.success;
      a.success = function (g, c, f) {
        if (!d.set(d.parse(g, f), a)) return !1;
        b && b(d, g);
      };
      a.error =
        h.wrapError(a.error, d, a);
      return (this.sync || h.sync).call(this, 'read', this, a);
    }, save: function (a, d, b) {
      var g, f;
      c.isObject(a) || null == a ? (g = a, b = d) : (g = {}, g[ a ] = d);
      b = b ? c.clone(b) : {};
      if (b.wait) {
        if (!this._validate(g, b)) return !1;
        f = c.clone(this.attributes);
      }
      a = c.extend({}, b, { silent: !0 });
      if (g && !this.set(g, b.wait ? a : b)) return !1;
      var e = this, l = b.success;
      b.success = function (a, d, f) {
        d = e.parse(a, f);
        b.wait && (delete b.wait, d = c.extend(g || {}, d));
        if (!e.set(d, b)) return !1;
        l ? l(e, a) : e.trigger('sync', e, a, b);
      };
      b.error = h.wrapError(b.error,
        e, b);
      d = this.isNew() ? 'create' : 'update';
      d = (this.sync || h.sync).call(this, d, this, b);
      b.wait && this.set(f, a);
      return d;
    }, destroy: function (a) {
      a = a ? c.clone(a) : {};
      var d = this, b = a.success, g = function () {
        d.trigger('destroy', d, d.collection, a);
      };
      if (this.isNew()) return g(), !1;
      a.success = function (c) {
        a.wait && g();
        b ? b(d, c) : d.trigger('sync', d, c, a);
      };
      a.error = h.wrapError(a.error, d, a);
      var f = (this.sync || h.sync).call(this, 'delete', this, a);
      a.wait || g();
      return f;
    }, url: function () {
      var a = A(this, 'urlRoot') || A(this.collection, 'url') || K();
      return this.isNew() ? a : a + ('/' == a.charAt(a.length - 1) ? '' : '/') + encodeURIComponent(this.id);
    }, parse: function (a) {
      return a;
    }, clone: function () {
      return new this.constructor(this.attributes);
    }, isNew: function () {
      return null == this.id;
    }, change: function (a) {
      a || (a = {});
      var d = this._changing;
      this._changing = !0;
      for (var b in this._silent) this._pending[ b ] = !0;
      var g = c.extend({}, a.changes, this._silent);
      this._silent = {};
      for (b in g) this.trigger('change:' + b, this, this.get(b), a);
      if (d) return this;
      for (; !c.isEmpty(this._pending);) {
        this._pending =
          {};
        this.trigger('change', this, a);
        for (b in this.changed) this._pending[ b ] || this._silent[ b ] || delete this.changed[ b ];
        this._previousAttributes = c.clone(this.attributes);
      }
      this._changing = !1;
      return this;
    }, hasChanged: function (a) {
      return arguments.length ? c.has(this.changed, a) : !c.isEmpty(this.changed);
    }, changedAttributes: function (a) {
      if (!a) return this.hasChanged() ? c.clone(this.changed) : !1;
      var d, b = !1, g = this._previousAttributes, f;
      for (f in a) c.isEqual(g[ f ], d = a[ f ]) || ((b || (b = {}))[ f ] = d);
      return b;
    }, previous: function (a) {
      return arguments.length &&
      this._previousAttributes ? this._previousAttributes[ a ] : null;
    }, previousAttributes: function () {
      return c.clone(this._previousAttributes);
    }, isValid: function () {
      return !this.validate(this.attributes);
    }, _validate: function (a, d) {
      if (d.silent || !this.validate) return !0;
      a = c.extend({}, this.attributes, a);
      var b = this.validate(a, d);
      if (!b) return !0;
      d && d.error ? d.error(this, b, d) : this.trigger('error', this, b, d);
      return !1;
    }
  });
  var m = h.Collection = function (a, d) {
    d || (d = {});
    d.model && (this.model = d.model);
    d.comparator && (this.comparator = d.comparator);
    this._reset();
    this.initialize.apply(this, arguments);
    a && this.reset(a, { silent: !0, parse: d.parse });
  };
  c.extend(m.prototype, g, {
    model: l, initialize: function () {
    }, toJSON: function (a) {
      return this.map(function (d) {
        return d.toJSON(a);
      });
    }, add: function (a, d) {
      var b, g, f, l, h, m = {}, k = {}, u = [];
      d || (d = {});
      a = c.isArray(a) ? a.slice() : [ a ];
      b = 0;
      for (g = a.length; b < g; b++) {
        if (!(f = a[ b ] = this._prepareModel(a[ b ], d))) throw Error('Can\'t add an invalid model to a collection');
        l = f.cid;
        h = f.id;
        m[ l ] || this._byCid[ l ] || null != h && (k[ h ] || this._byId[ h ]) ?
          u.push(b) : m[ l ] = k[ h ] = f;
      }
      for (b = u.length; b--;) a.splice(u[ b ], 1);
      b = 0;
      for (g = a.length; b < g; b++) (f = a[ b ]).on('all', this._onModelEvent, this), this._byCid[ f.cid ] = f, null != f.id && (this._byId[ f.id ] = f);
      this.length += g;
      e.apply(this.models, [ null != d.at ? d.at : this.models.length, 0 ].concat(a));
      this.comparator && this.sort({ silent: !0 });
      if (d.silent) return this;
      b = 0;
      for (g = this.models.length; b < g; b++) m[ (f = this.models[ b ]).cid ] && (d.index = b, f.trigger('add', f, this, d));
      return this;
    }, remove: function (a, d) {
      var b, g, f, e;
      d || (d = {});
      a = c.isArray(a) ?
        a.slice() : [ a ];
      b = 0;
      for (g = a.length; b < g; b++) if (e = this.getByCid(a[ b ]) || this.get(a[ b ])) delete this._byId[ e.id ], delete this._byCid[ e.cid ], f = this.indexOf(e), this.models.splice(f, 1), this.length--, d.silent || (d.index = f, e.trigger('remove', e, this, d)), this._removeReference(e);
      return this;
    }, push: function (a, d) {
      a = this._prepareModel(a, d);
      this.add(a, d);
      return a;
    }, pop: function (a) {
      var d = this.at(this.length - 1);
      this.remove(d, a);
      return d;
    }, unshift: function (a, d) {
      a = this._prepareModel(a, d);
      this.add(a, c.extend({ at: 0 }, d));
      return a;
    },
    shift: function (a) {
      var d = this.at(0);
      this.remove(d, a);
      return d;
    }, get: function (a) {
      return null == a ? void 0 : this._byId[ null != a.id ? a.id : a ];
    }, getByCid: function (a) {
      return a && this._byCid[ a.cid || a ];
    }, at: function (a) {
      return this.models[ a ];
    }, where: function (a) {
      return c.isEmpty(a) ? [] : this.filter(function (d) {
        for (var b in a) if (a[ b ] !== d.get(b)) return !1;
        return !0;
      });
    }, sort: function (a) {
      a || (a = {});
      if (!this.comparator) throw Error('Cannot sort a set without a comparator');
      var d = c.bind(this.comparator, this);
      1 == this.comparator.length ?
        this.models = this.sortBy(d) : this.models.sort(d);
      a.silent || this.trigger('reset', this, a);
      return this;
    }, pluck: function (a) {
      return c.map(this.models, function (d) {
        return d.get(a);
      });
    }, reset: function (a, d) {
      a || (a = []);
      d || (d = {});
      for (var b = 0, g = this.models.length; b < g; b++) this._removeReference(this.models[ b ]);
      this._reset();
      this.add(a, c.extend({ silent: !0 }, d));
      d.silent || this.trigger('reset', this, d);
      return this;
    }, fetch: function (a) {
      a = a ? c.clone(a) : {};
      void 0 === a.parse && (a.parse = !0);
      var d = this, b = a.success;
      a.success = function (g,
                            c, f) {
        d[ a.add ? 'add' : 'reset' ](d.parse(g, f), a);
        b && b(d, g);
      };
      a.error = h.wrapError(a.error, d, a);
      return (this.sync || h.sync).call(this, 'read', this, a);
    }, create: function (a, d) {
      var b = this;
      d = d ? c.clone(d) : {};
      a = this._prepareModel(a, d);
      if (!a) return !1;
      d.wait || b.add(a, d);
      var g = d.success;
      d.success = function (c, f) {
        d.wait && b.add(c, d);
        g ? g(c, f) : c.trigger('sync', a, f, d);
      };
      a.save(null, d);
      return a;
    }, parse: function (a) {
      return a;
    }, chain: function () {
      return c(this.models).chain();
    }, _reset: function () {
      this.length = 0;
      this.models = [];
      this._byId =
        {};
      this._byCid = {};
    }, _prepareModel: function (a, d) {
      d || (d = {});
      a instanceof l ? a.collection || (a.collection = this) : (d.collection = this, a = new this.model(a, d), a._validate(a.attributes, d) || (a = !1));
      return a;
    }, _removeReference: function (a) {
      this == a.collection && delete a.collection;
      a.off('all', this._onModelEvent, this);
    }, _onModelEvent: function (a, d, b, g) {
      ('add' == a || 'remove' == a) && b != this || ('destroy' == a && this.remove(d, g), d && a === 'change:' + d.idAttribute && (delete this._byId[ d.previous(d.idAttribute) ], this._byId[ d.id ] = d), this.trigger.apply(this,
        arguments));
    }
  });
  c.each('forEach each map reduce reduceRight find detect filter select reject every all some any include contains invoke max min sortBy sortedIndex toArray size first initial rest last without indexOf shuffle lastIndexOf isEmpty groupBy'.split(' '), function (a) {
    m.prototype[ a ] = function () {
      return c[ a ].apply(c, [ this.models ].concat(c.toArray(arguments)));
    };
  });
  var u = h.Router = function (a) {
      a || (a = {});
      a.routes && (this.routes = a.routes);
      this._bindRoutes();
      this.initialize.apply(this, arguments);
    }, p = /:\w+/g,
    B = /\*\w+/g, q = /[-[\]{}()+?.,\\^$|#\s]/g;
  c.extend(u.prototype, g, {
    initialize: function () {
    }, route: function (a, d, b) {
      h.history || (h.history = new y);
      c.isRegExp(a) || (a = this._routeToRegExp(a));
      b || (b = this[ d ]);
      h.history.route(a, c.bind(function (g) {
        g = this._extractParameters(a, g);
        b && b.apply(this, g);
        this.trigger.apply(this, [ 'route:' + d ].concat(g));
        h.history.trigger('route', this, d, g);
      }, this));
      return this;
    }, navigate: function (a, d) {
      h.history.navigate(a, d);
    }, _bindRoutes: function () {
      if (this.routes) {
        var a = [], d;
        for (d in this.routes) a.unshift([ d,
          this.routes[ d ] ]);
        d = 0;
        for (var b = a.length; d < b; d++) this.route(a[ d ][ 0 ], a[ d ][ 1 ], this[ a[ d ][ 1 ] ])
      }
    }, _routeToRegExp: function (a) {
      a = a.replace(q, '\\$&').replace(p, '([^/]+)').replace(B, '(.*?)');
      return RegExp('^' + a + '$');
    }, _extractParameters: function (a, d) {
      return a.exec(d).slice(1);
    }
  });
  var y = h.History = function () {
    this.handlers = [];
    c.bindAll(this, 'checkUrl');
  }, C = /^[#\/]/, D = /msie [\w.]+/;
  y.started = !1;
  c.extend(y.prototype, g, {
    interval: 50, getHash: function (a) {
      return (a = (a ? a.location : window.location).href.match(/#(.*)$/)) ? a[ 1 ] :
        '';
    }, getFragment: function (a, d) {
      if (null == a) if (this._hasPushState || d) {
        a = window.location.pathname;
        var b = window.location.search;
        b && (a += b);
      } else a = this.getHash();
      a.indexOf(this.options.root) || (a = a.substr(this.options.root.length));
      return a.replace(C, '');
    }, start: function (a) {
      if (y.started) throw Error('Backbone.history has already been started');
      y.started = !0;
      this.options = c.extend({}, { root: '/' }, this.options, a);
      this._wantsHashChange = !1 !== this.options.hashChange;
      this._wantsPushState = !!this.options.pushState;
      this._hasPushState =
        !(!this.options.pushState || !window.history || !window.history.pushState);
      a = this.getFragment();
      var d = document.documentMode;
      if (d = D.exec(navigator.userAgent.toLowerCase()) && (!d || 7 >= d)) this.iframe = f('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[ 0 ].contentWindow, this.navigate(a);
      this._hasPushState ? f(window).bind('popstate', this.checkUrl) : this._wantsHashChange && 'onhashchange' in window && !d ? f(window).bind('hashchange', this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl,
        this.interval));
      this.fragment = a;
      a = window.location;
      d = a.pathname == this.options.root;
      if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !d) return this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + '#' + this.fragment), !0;
      this._wantsPushState && this._hasPushState && d && a.hash && (this.fragment = this.getHash().replace(C, ''), window.history.replaceState({}, document.title, a.protocol + '//' + a.host + this.options.root + this.fragment));
      if (!this.options.silent) return this.loadUrl();
    },
    stop: function () {
      f(window).unbind('popstate', this.checkUrl).unbind('hashchange', this.checkUrl);
      clearInterval(this._checkUrlInterval);
      y.started = !1;
    }, route: function (a, d) {
      this.handlers.unshift({ route: a, callback: d });
    }, checkUrl: function () {
      var a = this.getFragment();
      a == this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe)));
      if (a == this.fragment) return !1;
      this.iframe && this.navigate(a);
      this.loadUrl() || this.loadUrl(this.getHash());
    }, loadUrl: function (a) {
      var d = this.fragment = this.getFragment(a);
      return c.any(this.handlers,
        function (a) {
          if (a.route.test(d)) return a.callback(d), !0;
        });
    }, navigate: function (a, d) {
      if (!y.started) return !1;
      d && !0 !== d || (d = { trigger: d });
      var b = (a || '').replace(C, '');
      this.fragment != b && (this._hasPushState ? (0 != b.indexOf(this.options.root) && (b = this.options.root + b), this.fragment = b, window.history[ d.replace ? 'replaceState' : 'pushState' ]({}, document.title, b)) : this._wantsHashChange ? (this.fragment = b, this._updateHash(window.location, b, d.replace), this.iframe && b != this.getFragment(this.getHash(this.iframe)) && (d.replace ||
      this.iframe.document.open().close(), this._updateHash(this.iframe.location, b, d.replace))) : window.location.assign(this.options.root + a), d.trigger && this.loadUrl(a));
    }, _updateHash: function (a, d, b) {
      b ? a.replace(a.toString().replace(/(javascript:|#).*$/, '') + '#' + d) : a.hash = d;
    }
  });
  var E = h.View = function (a) {
    this.cid = c.uniqueId('view');
    this._configure(a || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  }, M = /^(\S+)\s*(.*)$/, z = 'model collection el id attributes className tagName'.split(' ');
  c.extend(E.prototype, g, {
    tagName: 'div', $: function (a) {
      return this.$el.find(a);
    }, initialize: function () {
    }, render: function () {
      return this;
    }, remove: function () {
      this.$el.remove();
      return this;
    }, make: function (a, d, b) {
      a = document.createElement(a);
      d && f(a).attr(d);
      b && f(a).html(b);
      return a;
    }, setElement: function (a, d) {
      this.$el && this.undelegateEvents();
      this.$el = a instanceof f ? a : f(a);
      this.el = this.$el[ 0 ];
      !1 !== d && this.delegateEvents();
      return this;
    }, delegateEvents: function (a) {
      if (a || (a = A(this, 'events'))) {
        this.undelegateEvents();
        for (var d in a) {
          var b = a[ d ];
          c.isFunction(b) || (b = this[ a[ d ] ]);
          if (!b) throw Error('Method "' + a[ d ] + '" does not exist');
          var g = d.match(M), f = g[ 1 ], g = g[ 2 ], b = c.bind(b, this), f = f + ('.delegateEvents' + this.cid);
          '' === g ? this.$el.bind(f, b) : this.$el.delegate(g, f, b);
        }
      }
    }, undelegateEvents: function () {
      this.$el.unbind('.delegateEvents' + this.cid);
    }, _configure: function (a) {
      this.options && (a = c.extend({}, this.options, a));
      for (var d = 0, b = z.length; d < b; d++) {
        var g = z[ d ];
        a[ g ] && (this[ g ] = a[ g ]);
      }
      this.options = a;
    }, _ensureElement: function () {
      if (this.el) this.setElement(this.el,
        !1); else {
        var a = A(this, 'attributes') || {};
        this.id && (a.id = this.id);
        this.className && (a[ 'class' ] = this.className);
        this.setElement(this.make(this.tagName, a), !1);
      }
    }
  });
  l.extend = m.extend = u.extend = E.extend = function (a, d) {
    var b = P(this, a, d);
    b.extend = this.extend;
    return b;
  };
  var t = { create: 'POST', update: 'PUT', 'delete': 'DELETE', read: 'GET' };
  h.sync = function (a, d, b) {
    var g = t[ a ];
    b || (b = {});
    var e = { type: g, dataType: 'json' };
    b.url || (e.url = A(d, 'url') || K());
    b.data || !d || 'create' != a && 'update' != a || (e.contentType = 'application/json', e.data =
      JSON.stringify(d.toJSON()));
    h.emulateJSON && (e.contentType = 'application/x-www-form-urlencoded', e.data = e.data ? { model: e.data } : {});
    !h.emulateHTTP || 'PUT' !== g && 'DELETE' !== g || (h.emulateJSON && (e.data._method = g), e.type = 'POST', e.beforeSend = function (a) {
      a.setRequestHeader('X-HTTP-Method-Override', g);
    });
    'GET' !== e.type && !h.emulateJSON && (e.processData = !1);
    return f.ajax(c.extend(e, b));
  };
  h.wrapError = function (a, d, b) {
    return function (g, c) {
      c = g === d ? c : g;
      a ? a(d, c, b) : d.trigger('error', d, c, b);
    };
  };
  var G = function () {
  }, P = function (a,
                   d, b) {
    var g;
    g = d && d.hasOwnProperty('constructor') ? d.constructor : function () {
      a.apply(this, arguments);
    };
    c.extend(g, a);
    G.prototype = a.prototype;
    g.prototype = new G;
    d && c.extend(g.prototype, d);
    b && c.extend(g, b);
    g.prototype.constructor = g;
    g.__super__ = a.prototype;
    return g;
  }, A = function (a, d) {
    return a && a[ d ] ? c.isFunction(a[ d ]) ? a[ d ]() : a[ d ] : null;
  }, K = function () {
    throw Error('A "url" property or function must be specified');
  };
}).call(this);
var FlashDetect = new function () {
  var b = this;
  b.installed = !1;
  b.raw = '';
  b.major = -1;
  b.minor = -1;
  b.revision = -1;
  b.revisionStr = '';
  var k = [ {
    name: 'ShockwaveFlash.ShockwaveFlash.7', version: function (b) {
      return a(b);
    }
  }, {
    name: 'ShockwaveFlash.ShockwaveFlash.6', version: function (b) {
      var h = '6,0,21';
      try {
        b.AllowScriptAccess = 'always', h = a(b);
      } catch (c) {
      }
      return h;
    }
  }, {
    name: 'ShockwaveFlash.ShockwaveFlash', version: function (b) {
      return a(b);
    }
  } ], a = function (a) {
    var b = -1;
    try {
      b = a.GetVariable('$version');
    } catch (c) {
    }
    return b;
  };
  b.majorAtLeast = function (a) {
    return b.major >=
      a;
  };
  b.minorAtLeast = function (a) {
    return b.minor >= a;
  };
  b.revisionAtLeast = function (a) {
    return b.revision >= a;
  };
  b.versionAtLeast = function (a) {
    var h = [ b.major, b.minor, b.revision ], c = Math.min(h.length, arguments.length);
    for (i = 0; i < c; i++) if (h[ i ] >= arguments[ i ]) {
      if (!(i + 1 < c && h[ i ] == arguments[ i ])) return !0;
    } else return !1;
  };
  b.FlashDetect = function () {
    var a, h, c, f, d;
    if (navigator.plugins && 0 < navigator.plugins.length) {
      var g = navigator.mimeTypes;
      if (g && g[ 'application/x-shockwave-flash' ] && g[ 'application/x-shockwave-flash' ].enabledPlugin &&
        g[ 'application/x-shockwave-flash' ].enabledPlugin.description) {
        a = g = g[ 'application/x-shockwave-flash' ].enabledPlugin.description;
        var g = a.split(/ +/), l = g[ 2 ].split(/\./), g = g[ 3 ];
        h = parseInt(l[ 0 ], 10);
        c = parseInt(l[ 1 ], 10);
        f = g;
        d = parseInt(g.replace(/[a-zA-Z]/g, ''), 10) || b.revision;
        b.raw = a;
        b.major = h;
        b.minor = c;
        b.revisionStr = f;
        b.revision = d;
        b.installed = !0;
      }
    } else if (-1 == navigator.appVersion.indexOf('Mac') && window.execScript) for (g = -1, l = 0; l < k.length && -1 == g; l++) {
      a = -1;
      try {
        a = new ActiveXObject(k[ l ].name);
      } catch (m) {
        a = { activeXError: !0 };
      }
      a.activeXError ||
      (b.installed = !0, g = k[ l ].version(a), -1 != g && (a = g, f = a.split(','), h = parseInt(f[ 0 ].split(' ')[ 1 ], 10), c = parseInt(f[ 1 ], 10), d = parseInt(f[ 2 ], 10), f = f[ 2 ], b.raw = a, b.major = h, b.minor = c, b.revision = d, b.revisionStr = f));
    }
  }();
};
FlashDetect.JS_RELEASE = '1.0.4';
(function (b) {
  function k() {
    return b.mozAnimationStartTime || b.performance && b.performance.now && performance.now() || +new Date;
  }

  var a = { util: {}, tracking: {}, data: {}, els: {}, state: {}, lib: jQuery };
  a.util.domain = function (a) {
    return (-1 === document.location.host.indexOf('bitly') ? 'http://bitly.com' : '') + a;
  };
  a.util.log = function (a, b) {
    b || (b = 'INFO');
    try {
      return console ? console.log(b + ': ' + a) : !1;
    } catch (c) {
      return !1;
    }
  };
  a.util.inherit = function (a, b) {
    var c = function () {
    };
    c.prototype = b.prototype;
    a.prototype = new c;
    a.prototype.constructor =
      a;
    a.superclass = b.prototype;
    b.prototype.constructor == Object.prototype.constructor && (b.prototype.constructor = b);
  };
  a.util.argsAsArray = function (a) {
    return Array.prototype.slice.call(a);
  };
  a.util.hashToQueryString = function (a, b, c) {
    var f = [];
    for (key in a) for (var e = $.isArray(a[ key ]) ? a[ key ] : [ a[ key ] ], h = 0, k = e.length;; ; ;
    h < k;
    h++;
  )
    '?' === e[ h ] && c ? f.push(encodeURIComponent(key) + '=' + e[ h ]) : f.push(encodeURIComponent(key) + '=' + encodeURIComponent(e[ h ]));
    a = f.length ? '?' + f.join('&') : '';
    return (b || '') + a;
  };
  a.util.queryStringToHash = function (a) {
    a =
      a || location.href;
    if (-1 < a.indexOf('?')) a = a.substring(a.indexOf('?') + 1); else return {};
    a = a.split('&');
    for (var b = {}, c = a.length; c;) {
      var f = a[ --c ].split('=');
      b[ decodeURIComponent(f[ 0 ].replace(/\+/g, ' ')) ] = decodeURIComponent(f[ 1 ].replace(/\+/g, ' '));
    }
    return b;
  };
  a.util.stripQueryString = function (a) {
    -1 < a.indexOf('?') && (a = a.substring(0, a.indexOf('?')));
    return a;
  };
  a.util.modifyQueryParams = function (d, b) {
    b = b || location.href;
    var c = a.util.stripQueryString(b), f = a.util.queryStringToHash(b), e;
    for (e in d) null === d[ e ] ? delete f[ e ] :
      f[ e ] = d[ e ];
    return a.util.hashToQueryString(f, c);
  };
  a.util.cleanURL = function (a) {
    return a.replace(/https?:\/\//, '');
  };
  a.util.relativeTime = function (a, b) {
    function c(a) {
      var d = 'a', b;
      b = a.getHours();
      a = a.getMinutes();
      d = 12 <= b ? 'p' : 'a';
      return ((12 <= b ? b - 12 : b) || 12) + ':' + (10 > a ? '0' + a : a) + d;
    }

    b = b || {};
    var f = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' '), e = new Date(1E3 * a), h = new Date,
      k = h - e, q = '', y = e.getFullYear();
    h.getFullYear();
    h = new Date;
    h.setHours(0);
    h.setMinutes(0);
    h.setSeconds(0);
    h.setMilliseconds(0);
    864E5 <
    k || +e < +h ? (q += f[ e.getMonth() ], q = q + ' ' + e.getDate(), 2592E7 < k && (q += ' ', q += y), b.show_ts_for_days && 'number' === typeof b.show_ts_for_days && 300 > b.show_ts_for_days && k < 864E5 * parseInt(b.show_ts_for_days, 10) && (q += ' ' + c(e))) : q += c(e);
    return q;
  };
  a.ajax = {
    GET: function (d) {
      return a.ajax.makeRequest('GET', d);
    }, POST: function (d) {
      return a.ajax.makeRequest('POST', d);
    }, PUT: function (d) {
      return a.ajax.makeRequest('PUT', d);
    }, DELETE: function (d) {
      return a.ajax.makeRequest('DELETE', d);
    }, makeRequest: function (d, b) {
      var c = new a.ajax.request(b);
      c.setMethod(d);
      c.url && c.execute();
      return c;
    }, requestor: null
  };
  a.ajax.request = function (a) {
    this.init(a);
  };
  a.ajax.request.prototype = {
    init: function (d) {
      d || (d = {});
      a.util.isFunction(d) ? this._setSuccess(d) : (a.util.simpleExtend(this, d), this.url && (this.url = this.api_base + this.url), d.scope || (this.scope = this), this.send_json && (this.contentType = 'application/json'), this.deferred = $.Deferred(), this.promise = this.deferred.promise(), d.error ? this._setError(d.error, this.scope) : this._setError(this.error, this.scope), d.success ?
        this._setSuccess(d.success, this.scope) : this._setSuccess(this.success, this.scope));
    },
    api_base: '',
    _setSuccess: function (d, b) {
      b || (b = this.scope);
      var c = this, f = function () {
        var f = a.util.argsAsArray(arguments);
        a.util.checkResponseForError(f[ 0 ], c.error, b, f) || d.apply(b, f);
      };
      this.success = f;
      this.promise.done(f);
    },
    _setError: function (d, b) {
      if ('undefined' !== typeof d) {
        b || (b = this);
        var c = function () {
          var c = a.util.argsAsArray(arguments);
          d.apply(b, c);
        };
        this.error = c;
        this.promise.fail(c);
      } else this.error = a.ajax.request.prototype.error;
    },
    setMethod: function (a) {
      switch (a.toLowerCase()) {
        case 'delete':
        case 'put':
        case 'post':
          this.method = a.toUpperCase();
          break;
        default:
          this.method = 'GET';
      }
    },
    execute: function (d, b) {
      var c = this;
      d && (this.url = d);
      b && (this.data = b);
      if (this.url) {
        var f = {
          type: this.method,
          url: this.url,
          data: this.data,
          success: this.deferred.resolve,
          dataType: this.dataType,
          contentType: this.contentType,
          error: this.deferred.reject,
          async: this.async,
          timeout: this.timeout,
          binary: !1,
          traditional: this.traditional,
          beforeSend: function (a, d) {
            c.binary && a.overrideMimeType('text/plain; charset=x-user-defined;');
            $.cookie && a.setRequestHeader('X-XSRFToken', $.cookie.get('_xsrf'));
          }
        };
        this.singleThreaded && this.xhr && this.xhr.abort();
        this.xhr = a.ajax.requestor(f);
        return this;
      }
      throw'Must have a url set to execute';
    },
    abort: function () {
      this.xhr && this.xhr.abort();
    },
    data: {},
    timeout: 2E4,
    singleThreaded: !1,
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded',
    scope: this,
    async: !0,
    method: 'GET',
    form: !1,
    traditional: !0,
    success: function (d) {
      a.util.log('default success');
    },
    error: function (d) {
      a.util.log('error making a ' + this.method +
        ' request to ' + this.url, 'ERROR');
    }
  };
  a.util.destroyClass = function (a) {
    a = a || {};
    if (this.hasOwnProperty('els')) {
      for (var b in this.els) a.remove_els && this.els[ b ].remove(), this.els[ b ] = null, delete this.els[ b ];
      delete this.els;
    }
    if (this.hasOwnProperty('obj')) {
      for (var c in this.obj) this.obj[ c ].destroy && this.obj[ c ].destroy(), this.obj[ c ] = null, delete this.obj[ c ];
      delete this.obj;
    }
    if (this.hasOwnProperty('data')) {
      for (var f in this.data) this.data[ f ] = null, delete this.data[ f ];
      delete this.data;
    }
    if (this.hasOwnProperty('state')) {
      for (var e in this.state) this.state[ e ] =
        null, delete this.state[ e ];
      delete this.state;
    }
    if (this.hasOwnProperty('util')) {
      for (var h in this.util) this.util[ h ] = null, delete this.util[ h ];
      delete this.util;
    }
    this.hasOwnProperty('parents') && delete this.parents;
    this.hasOwnProperty('el') && (this.el.remove(), this.el = null, delete this.el);
    return this;
  };
  a.util.initClass = function (a) {
    a && (this.el = $(a));
    this.data = {};
    this.state = {};
    this.els = {};
    this.obj = {};
    this.parents = {};
    return this;
  };
  a.util.isFunction = a.lib.isFunction;
  a.util.simpleExtend = a.lib.extend;
  a.ajax.requestor =
    a.lib.ajax;
  a.Eventer = {
    evt: {}, delegate: function (a) {
      if (!a) return !1;
      var b = a.del ? $(a.del) : $('body'), c = a.el ? $(a.el) : $('body'), f = a.evt, e = a.cb, h = a.scope;
      a = a.ns || '_default';
      var k = b.data('bitly_evt_id');
      k || (k = this.createEvtId(), b.data('bitly_evt_id', k));
      if (c && f && e) {
        var q = c.data('bitly_evt_id');
        q || (q = this.createEvtId(), c.data('bitly_evt_id', q));
        this.evt.hasOwnProperty(k) || (this.evt[ k ] = {});
        this.evt[ k ].hasOwnProperty(f) || (this.evt[ k ][ f ] = {}, this._bind(b, f));
        b = this.evt[ k ][ f ];
        b.hasOwnProperty(q) || (b[ q ] = []);
        b[ q ].push({
          ns: a,
          cb: function (a, d) {
            return e.call(h, a, d);
          }
        });
      }
    }, undelegate: function (a) {
      var b = a.del ? $(a.del) : $('body'), c = a.el ? $(a.el) : $('body'), f = a.evt;
      a = a.ns || '*';
      b = b.data('bitly_evt_id');
      c = c.data('bitly_evt_id');
      if (b && c && this.evt[ b ] && this.evt[ b ][ f ] && this.evt[ b ][ f ][ c ]) {
        var e = this.evt[ b ][ f ][ c ];
        if ('*' === a) delete this.evt[ b ][ f ][ c ]; else {
          for (var h = [], k = 0, q = e.length; k < q; k++) e[ k ].ns !== a && h.push(e[ k ]);
          h.length ? this.evt[ b ][ f ][ c ] = h : delete this.evt[ b ][ f ][ c ];
        }
      }
    }, _bind: function (d, b) {
      var c = d.data('bitly_evt_id');
      d.bind(b, function (d,
                          f) {
        if (!c) return !0;
        for (var e = $(d.target), h = e.data('bitly_evt_id'); e.length;) {
          if (h && a.Eventer.evt[ c ] && a.Eventer.evt[ c ][ b ] && a.Eventer.evt[ c ][ b ][ h ] && a.Eventer.evt[ c ][ b ][ h ].length) {
            for (var h = a.Eventer.evt[ c ][ b ][ h ], k = !1, y = 0, C = h.length; y < C; y++) {
              k = h[ y ].cb(d, f);
              if ('undefined' !== typeof k && !k) return k;
              if (d.isImmediatePropagationStopped()) return !1;
            }
            if (d.isPropagationStopped() || d.isDefaultPrevented()) return !1;
          }
          e = e.parent();
          h = e.data('bitly_evt_id');
        }
      });
    }, bind: function (a) {
      a.del = a.el;
      this.delegate(a);
      return this;
    }, unbind: function (a) {
      a.del =
        a.el;
      this.undelegate(a);
      return this;
    }, trigger: function (a, b, c) {
      b = b || {};
      c = c ? $(c) : $('body');
      c.trigger(a, [ b ]);
      return this;
    }, createEvtId: function () {
      return 'evt_' + Math.random().toString().replace('0.', '');
    }
  };
  a.util.checkResponseForError = function (a, b, c, f) {
    return a && a.status_code && 200 != a.status_code ? (b.apply(c || null, f), !0) : !1;
  };
  a.util.timeStamp = function (a, b) {
    return a ? (new Date(1E3 * a)).toDateString() : 'A long time ago.';
  };
  a.util.preserveNewline = function (a) {
    return a.replace(/\n/g, '<br/>');
  };
  a.util.savePreference = function (b,
                                    g, c) {
    a.ajax.POST({
      url: '/data/preferences', data: { key: b, value: g }, success: function (a) {
        if (a.data && a.data.preferences && a.data.preferences.length) {
          var b = a.data.preferences[ 0 ];
          if ('0' === b.history_privacy || '1' === b.history_privacy) b.history_privacy = parseInt(b.history_privacy, 10) ? 'public' : 'private';
        }
        'function' === typeof c ? c(a) : $.noop();
      }, error: function () {
        console.log('Error updating preferences to: ', b, g);
      }
    });
  };
  a.util.timeAgoInWords = function (a, b) {
    'string' == typeof a ? a = Date.parse(a) : 'undefined' === typeof a && (a = +new Date);
    'string' == typeof b ? b = Date.parse(b) : 'undefined' === typeof b && (b = +new Date);
    if (!a) return 'some time ago';
    var c = b - a, f = Math.floor(c / 6E4), e = Math.floor(c / 36E5), h = Math.floor(c / 864E5),
      c = Math.floor(c / 31536E6), k = 'ago';
    return c && 0 < c ? 'over a year ago' : h && 0 < h ? h + ' day' + (1 < h ? 's ' : ' ') + k : e && 0 < e ? 'about ' + e + ' hour' + (1 < e ? 's ' : ' ') + k : f && 0 < f ? f + ' minute' + (1 < f ? 's ' : ' ') + k : 'just now';
  };
  a.util.scrollToTop = function (b, g) {
    a.util.scrollTo({ dur: b, interval: g });
  };
  a.util.scrollToEl = function (b) {
    b = b || {};
    if ('string' === typeof b || 'nodeType' in
      b || b instanceof $) b = { el: b };
    if (!b.el) return $.Deferred().reject();
    var g = $(b.el), c = 0;
    if (!g.length) return $.Deferred().reject();
    'number' === typeof b.offset && (c = b.offset);
    if (b.bottom) {
      var c = document.body.scrollHeight, f = document.body.clientHeight, g = c - (g.offset().top + g.outerHeight(!0));
      b.end = c - g - f;
    } else b.end = g.offset().top + c;
    return a.util.scrollTo(b);
  };
  a.util.scrollTo = function (a) {
    function b(a) {
      a = a || k();
      var d = a - D, y = !0;
      if (d) {
        D = a;
        a = d / c * B;
        q -= a;
        if (0 <= a && q <= f || 0 >= a && q >= f) q = f, y = !1;
        e === document.body ? window.scrollTo(0,
          q) : e.scrollTop = q;
      }
      y ? window.reqAnimFrame(b) : (h && 'function' === typeof h && h.call(window), C.resolve(window));
    }

    a = a || {};
    var c = a.dur || 150, f = a.end || 0, e = a.scroll_el || document.body, h = a.onfinish, B = a.dist, q, y,
      C = $.Deferred();
    e.scrollTop ? (q = e.scrollTop, a = e.clientHeight, y = e.scrollHeight) : (q = document.documentElement.scrollTop, a = document.documentElement.clientHeight, y = document.documentElement.scrollHeight);
    B && (f = q + B);
    var f = f >= q ? Math.min(f, y - a) : Math.max(f, 0), B = q - f, D = k();
    window.reqAnimFrame(b);
    return C.promise();
  };
  a.util.displayDomain =
    function (b, c) {
      return b && b.domain ? b.domain : !c && a.data.domain_preference || a.data.default_short_domain || 'bit.ly';
    };
  a.util.formatDate = function (a, b) {
    b || (b = new Date);
    'number' === typeof b && (b = new Date(b));
    var c = {
      Month: function (a, b) {
        var d = $._('January February March April May June July August September October November December').split(' ')[ a ];
        return b && 'number' === typeof b ? d.substring(0, b) : d;
      }, Day: function (a, b) {
        var d = $._('Sunday Monday Tuesday Wednesday Thursday Friday Saturday').split(' ')[ a ];
        return b && 'number' ===
        typeof b ? d.substring(0, b) : d;
      }, Hours: function (a) {
        12 < a ? a -= 12 : a || (a = 12);
        return a;
      }, Date: function (a, b) {
        10 > a && !b && (a = '0' + a);
        return a;
      }, ampm: function (a) {
        return 12 > a ? 'AM' : 'PM';
      }, Minutes: function (a) {
        return 10 > a ? '0' + a : a;
      }, zpad: function (a) {
        return 10 > a ? '0' + a : a;
      }, zpad1: function (a) {
        return c.zpad(a + 1);
      }
    }, f = {
      d: { m: 'Date' },
      D: { m: 'Date' },
      m: { m: 'Month', d: 'zpad1' },
      b: { m: 'Month' },
      B: { m: 'Month' },
      I: { m: 'Hours' },
      p: { m: 'Hours', d: 'ampm' },
      M: { m: 'Minutes' },
      y: { m: 'FullYear' },
      Y: { m: 'FullYear' }
    };
    return a.replace(/\%(.){1}/g, function (a, d) {
      var e;
      a:{
        if (d in f) {
          var h = f[ d ];
          if ('m' in h && 'get' + h.m in b) {
            e = b[ 'get' + h.m ]();
            h = h.d || h.m;
            if (h in c) {
              var k = null;
              d == d.toLowerCase() && (k = 3);
              e = c[ h ](e, k);
            }
            break a;
          }
        }
        e = void 0;
      }
      return e;
    });
  };
  a.util.isUrl = function (a) {
    return -1 === a.search(new RegExp('^(' + e + h + c + ')', 'i')) ? !1 : !0;
  };
  a.util.validateUrl = function (a) {
    return (matches = a.match(f)) ? matches : null;
  };
  var e = '(?:(https?|ftp|itms)://)?',
    h = '(?:(?:[^\\s\\!"\\#\\$\\%\\&\\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\\\[\\]\\^\\_`\\{\\|\\}\\~]+\\.)+(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|local|example|invalid|test|\u0645\u0635\u0631|\u0440\u0444|\u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629|\u0627\u0645\u0627\u0631\u0627\u062a|xn--wgbh1c|xn--p1ai|xn--mgberp4a5d4ar|xn--mgbaam7a8h|\u4e2d\u56fd|\u4e2d\u570b|\u9999\u6e2f|\u0627\u0644\u0627\u0631\u062f\u0646|\u0641\u0644\u0633\u0637\u064a\u0646|\u0642\u0637\u0631|\u0dbd\u0d82\u0d9a\u0dcf|\u0b87\u0bb2\u0b99\u0bcd\u0b95\u0bc8|\u53f0\u7063|\u53f0\u6e7e|\u0e44\u0e17\u0e22|\u062a\u0648\u0646\u0633|xn--fiqs8S|xn--fiqz9S|xn--j6w193g|xn--mgbayh7gpa|xn--ygbi2ammx|xn--wgbl6a|xn--fzc2c9e2c|xn--xkc2al3hye2a|xn--kpry57d|xn--kprw13d|xn--o3cw4h|xn--pgbs0dh|\u0625\u062e\u062a\u0628\u0627\u0631|\u0622\u0632\u0645\u0627\u06cc\u0634\u06cc|\u6d4b\u8bd5|\u6e2c\u8a66|\u0438\u0441\u043f\u044b\u0442\u0430\u043d\u0438\u0435|\u092a\u0930\u0940\u0915\u094d\u0937\u093e|\u03b4\u03bf\u03ba\u03b9\u03bc\u03ae|\ud14c\uc2a4\ud2b8|\u05d8\u05e2\u05e1\u05d8|\u30c6\u30b9\u30c8|\u0baa\u0bb0\u0bbf\u0b9f\u0bcd\u0b9a\u0bc8|xn--kgbechtv|xn--hgbk6aj7f53bba|xn--0zwm56d|xn--g6w251d|xn--80akhbyknj4f|xn--11b5bs3a9aj6g|xn--jxalpdlp|xn--9t4b11yi5a|xn--deba0ad|xn--zckzah|xn--hlcj6aya9esc7a|[a-z]{2})(?::[0-9]+)?|(?:[0-9]{1,3}\\.){3}(?:[0-9]{1,3}))',
    c = '/?(?:\\S*[^\\s\\.,!\\)\\?])?', f = new RegExp('(' + e + h + c + ')', 'gi');
  a.util.fullUriRegex = f;
  window.reqAnimFrame || (window.reqAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
      return window.setTimeout(function () {
        a((new Date).getTime());
      }, 1E3 / 60);
    };
  }());
  a.util.checkPreviousSave = function (b, c) {
    b.match(/^https?\:\/\//) || (b = 'http://' + b);
    a.ajax.POST({
      url: '/data/beta/user/link_lookup',
      data: { url: b }, success: function (a) {
        a && a.data && a.data.link_lookup && a.data.link_lookup.length && a.data.link_lookup[ 0 ].link ? c && c.found && c.found.call(c.scope || window, a.data.link_lookup[ 0 ]) : c && c.not_found && c.not_found.call(c.scope || window);
      }, error: function () {
        c && c.not_found && c.not_found.call(c.scope || window);
      }, scope: c.scope || this
    });
  };
  a.util.extractEmbedlySrc = function (b) {
    return -1 < b.indexOf('i.embed.ly') ? a.util.queryStringToHash(b).url || b : b;
  };
  a.util.isFeatureFlagEnabled = function () {
    var b = Array.prototype.slice.call(arguments);
    if (!a.data.enabled_feature_flags) return !1;
    for (var c = b.length, f; c--;) if (f = b[ c ], a.data.enabled_feature_flags.hasOwnProperty(f)) return !0;
    return !1;
  };
  a.util.setCaretPosition = function (a, b) {
    a = $(a);
    if (a.length) {
      a.focus();
      var c = a[ 0 ];
      -1 === b && (b = a.val().length);
      if (c.setSelectionRange) try {
        c.setSelectionRange(b, b);
      } catch (f) {
      } else c.createTextRange && (c = c.createTextRange(), c.collapse(!0), c.moveEnd('character', b), c.moveStart('character', b), c.select());
    }
  };
  a.util.doGetCaretPosition = function (a) {
    a = $(a);
    if (a.length) {
      a = a[ 0 ];
      var b = 0;
      if (document.selection) a.focus(), b = document.selection.createRange(), b.moveStart('character', -a.value.length), b = b.text.length; else if (a.selectionStart || '0' == a.selectionStart) b = a.selectionStart;
      return b;
    }
  };
  a.util.setSelected = function (a, b, c) {
    if (a.setSelectionRange) try {
      a.setSelectionRange(b, c);
    } catch (f) {
    } else a.createTextRange && (a = a.createTextRange(), a.collapse(!0), a.moveEnd('character', c), a.moveStart('character', b), a.select());
  };
  a.util.selectText = function (a) {
    var b, c;
    c = window.getSelection && window.getSelection();
    b = document.createRange && document.createRange() || document.body.createTextRange && document.body.createTextRange();
    if (b.moveToElementText && b.select) return b.moveToElementText(a), b.select();
    if (b.selectNodeContents && c.removeAllRanges && c.addRange) return b.selectNodeContents(a), c.removeAllRanges(), c.addRange(b);
    if (c.getBaseAndExtent) return c.setBaseAndExtent(a, 0, a, 1);
  };
  a.util.clearSelectedText = function () {
    window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges &&
      window.getSelection().removeAllRanges() : document.selection && document.selection.empty();
  };
  a.util.collectionSortHandler = function (a) {
    if (!this.sortByField || !this.sortByAdapter) throw Error('SORT INTERFACE NOT SUPPORTED');
    var b = a.split('_');
    a = b[ 0 ];
    var b = 1 === b.length ? 'desc' : b[ 1 ], c = {};
    'asc' === b.toLowerCase() ? c.descending = !1 : c.descending = !0;
    a = a.toLowerCase();
    switch (a) {
      case 'time':
        this.sortByField('ts', c);
        App.Dispatch.trigger('UI.BitmarkList:sort', a + '_' + b);
        break;
      case 'clicks':
        this.sortByAdapter(SortAdapters.clicks,
          c);
        App.Dispatch.trigger('UI.BitmarkList:sort', a + '_' + b);
        break;
      case 'title':
        this.sortByField('title', c), App.Dispatch.trigger('UI.BitmarkList:sort', a + '_' + b);
    }
  };
  window.BITLY = a;
})(window);
(function (b) {
  function k(a) {
    return a.replace(/,/g, '.').replace(/[^0-9\.]/g, '');
  }

  var a, e = null, h = '0.0.0', c = null, f = null, d = null, g = {}, l = 0, m = {}, u = 0, p = {}, B = null, q = null,
    y = function () {
      var a, b, d, c, f = 'ZeroClipboard.swf';
      if (!document.currentScript || !(c = document.currentScript.src)) {
        var g = document.getElementsByTagName('script');
        if ('readyState' in g[ 0 ]) for (a = g.length; a-- && ("interactive" !== g[ a ].readyState || !(c = g[ a ].src));) ; else if ('loading' === document.readyState) c = g[ g.length - 1 ].src; else {
          for (a = g.length; a--;) {
            d = g[ a ].src;
            if (!d) {
              b = null;
              break;
            }
            d = d.split('#')[ 0 ].split('?')[ 0 ];
            d = d.slice(0, d.lastIndexOf('/') + 1);
            if (null == b) b = d; else if (b !== d) {
              b = null;
              break;
            }
          }
          null !== b && (c = b);
        }
      }
      c && (c = c.split('#')[ 0 ].split('?')[ 0 ], f = c.slice(0, c.lastIndexOf('/') + 1) + f);
      return f;
    }(), C = function () {
      var a = /\-([a-z])/g, b = function (a, b) {
        return b.toUpperCase();
      };
      return function (d) {
        return d.replace(a, b);
      };
    }(), D = function (a) {
      a || (a = b.event);
      var d;
      this !== b ? d = this : a.target ? d = a.target : a.srcElement && (d = a.srcElement);
      x.activate(d);
    }, E = function (a, b) {
      if (!a || 1 !== a.nodeType) return a;
      if (a.classList) return a.classList.contains(b) || a.classList.add(b), a;
      if (b && 'string' === typeof b) {
        var d = (b || '').split(/\s+/);
        if (1 === a.nodeType) if (a.className) {
          for (var c = ' ' + a.className + ' ', f = a.className, g = 0, e = d.length; g < e; g++) 0 > c.indexOf(' ' + d[ g ] + ' ') && (f += ' ' + d[ g ]);
          a.className = f.replace(/^\s+|\s+$/g, '');
        } else a.className = b;
      }
      return a;
    }, M = function (a, b) {
      if (!a || 1 !== a.nodeType) return a;
      if (a.classList) return a.classList.contains(b) && a.classList.remove(b), a;
      if (b && 'string' === typeof b || void 0 === b) {
        var d = (b || '').split(/\s+/);
        if (1 === a.nodeType && a.className) if (b) {
          for (var c = (' ' + a.className + ' ').replace(/[\n\t]/g, ' '), f = 0, g = d.length; f < g; f++) c = c.replace(' ' + d[ f ] + ' ', ' ');
          a.className = c.replace(/^\s+|\s+$/g, '');
        } else a.className = '';
      }
      return a;
    }, z = function (a, b, d) {
      if ('function' === typeof b.indexOf) return b.indexOf(a, d);
      var c = b.length;
      for ('undefined' === typeof d ? d = 0 : 0 > d && (d = c + d); d < c; d++) if (b.hasOwnProperty(d) && b[ d ] === a) return d;
      return -1;
    }, t = function (a) {
      if ('string' === typeof a) throw new TypeError('ZeroClipboard doesn\'t accept query strings.');
      return a.length ? a : [ a ];
    }, G = function (a, d, c, f) {
      f ? b.setTimeout(function () {
        a.apply(d, c);
      }, 0) : a.apply(d, c);
    }, P = function (a) {
      var b, d;
      a && ('number' === typeof a && 0 < a ? b = a : 'string' === typeof a && (d = parseInt(a, 10)) && !isNaN(d) && 0 < d && (b = d));
      b || ('number' === typeof r.zIndex && 0 < r.zIndex ? b = r.zIndex : 'string' === typeof r.zIndex && (d = parseInt(r.zIndex, 10)) && !isNaN(d) && 0 < d && (b = d));
      return b || 0;
    }, A = function (a, b) {
      if (a && !1 !== b && 'undefined' !== typeof console && console && (console.warn || console.log)) {
        var d = '`' + a + '` is deprecated. See docs for more info:\n    https://github.com/zeroclipboard/zeroclipboard/blob/master/docs/instructions.md#deprecations';
        console.warn ? console.warn(d) : console.log(d);
      }
    }, K = function () {
      var a, b, d, c, f, g = arguments[ 0 ] || {};
      a = 1;
      for (b = arguments.length; a < b; a++) if (null != (d = arguments[ a ])) for (c in d) d.hasOwnProperty(c) && (f = d[ c ], g !== f && void 0 !== f && (g[ c ] = f));
      return g;
    }, n = function (a) {
      if (null == a || '' === a) return null;
      a = a.replace(/^\s+|\s+$/g, '');
      if ('' === a) return null;
      var b = a.indexOf('//');
      a = -1 === b ? a : a.slice(b + 2);
      var d = a.indexOf('/');
      return (a = -1 === d ? a : -1 === b || 0 === d ? null : a.slice(0, d)) && '.swf' === a.slice(-4).toLowerCase() ? null : a || null;
    }, v = function () {
      var a =
        function (a, b) {
          var d, c, f;
          if (null != a && '*' !== b[ 0 ] && ('string' === typeof a && (a = [ a ]), 'object' === typeof a && 'length' in a)) for (d = 0, c = a.length; d < c; d++) if (a.hasOwnProperty(d) && (f = n(a[ d ]))) {
            if ('*' === f) {
              b.length = 0;
              b.push('*');
              break;
            }
            -1 === z(f, b) && b.push(f);
          }
        }, b = { always: 'always', samedomain: 'sameDomain', never: 'never' };
      return function (d, c) {
        var f, g = c.allowScriptAccess;
        if ('string' === typeof g && (f = g.toLowerCase()) && /^always|samedomain|never$/.test(f)) return b[ f ];
        f = n(c.moviePath);
        null === f && (f = d);
        g = [];
        a(c.trustedOrigins, g);
        a(c.trustedDomains, g);
        var e = g.length;
        if (0 < e) {
          if (1 === e && '*' === g[ 0 ]) return 'always';
          if (-1 !== z(d, g)) return 1 === e && d === f ? 'sameDomain' : 'always';
        }
        return 'never';
      };
    }(), F = function (a) {
      if (null == a) return [];
      if (Object.keys) return Object.keys(a);
      var b = [], d;
      for (d in a) a.hasOwnProperty(d) && b.push(d);
      return b;
    }, R = function () {
      var a = !1;
      if ('boolean' === typeof c) a = !1 === c; else {
        if ('function' === typeof ActiveXObject) try {
          new ActiveXObject('ShockwaveFlash.ShockwaveFlash') && (a = !0);
        } catch (b) {
        }
        !a && navigator.mimeTypes[ 'application/x-shockwave-flash' ] &&
        (a = !0);
      }
      return a;
    }, x = function (a, g) {
      if (!(this instanceof x)) return new x(a, g);
      this.id = '' + l++;
      m[ this.id ] = { instance: this, elements: [], handlers: {} };
      a && this.clip(a);
      'undefined' !== typeof g && (A('new ZeroClipboard(elements, options)', r.debug), x.config(g));
      this.options = x.config();
      'boolean' !== typeof c && (c = !R());
      if (!1 === c && !0 !== f && null === e) {
        d = f = !1;
        var h, k, p = document.getElementById('global-zeroclipboard-html-bridge');
        if (!p) {
          h = x.config();
          h.jsModuleId = 'string' === typeof B && B || 'string' === typeof q && q || null;
          var p = v(b.location.host,
            r), u, y, C, D = [], t = [], E = [];
          h.trustedOrigins && ('string' === typeof h.trustedOrigins ? t.push(h.trustedOrigins) : 'object' === typeof h.trustedOrigins && 'length' in h.trustedOrigins && (t = t.concat(h.trustedOrigins)));
          h.trustedDomains && ('string' === typeof h.trustedDomains ? t.push(h.trustedDomains) : 'object' === typeof h.trustedDomains && 'length' in h.trustedDomains && (t = t.concat(h.trustedDomains)));
          if (t.length) for (u = 0, y = t.length; u < y; u++) if (t.hasOwnProperty(u) && t[ u ] && 'string' === typeof t[ u ] && (C = n(t[ u ]))) {
            if ('*' === C) {
              E = [ C ];
              break;
            }
            E.push.apply(E,
              [ C, '//' + C, b.location.protocol + '//' + C ]);
          }
          E.length && D.push('trustedOrigins=' + encodeURIComponent(E.join(',')));
          'string' === typeof h.jsModuleId && h.jsModuleId && D.push('jsModuleId=' + encodeURIComponent(h.jsModuleId));
          h = D.join('&');
          u = r.moviePath + (null == r || r && !0 === r.cacheBust && !0 === r.useNoCache ? (-1 === r.moviePath.indexOf('?') ? '?' : '&') + 'noCache=' + (new Date).getTime() : '');
          h = '      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="' +
            u + '"/>         <param name="allowScriptAccess" value="' + p + '"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="' + h + '"/>         <embed src="' + u + '"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="' +
            p + '"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="' + h + '"           scale="exactfit">         </embed>       </object>';
          p = document.createElement('div');
          p.id = 'global-zeroclipboard-html-bridge';
          p.setAttribute('class', 'global-zeroclipboard-container');
          p.style.position = 'absolute';
          p.style.left = '0px';
          p.style.top = '-9999px';
          p.style.width = '15px';
          p.style.height =
            '15px';
          p.style.zIndex = '' + P(r.zIndex);
          document.body.appendChild(p);
          p.innerHTML = h;
        }
        (h = document[ 'global-zeroclipboard-flash-bridge' ]) && (k = h.length) && (h = h[ k - 1 ]);
        e = h || p.children[ 0 ].lastElementChild;
      }
    };
  x.prototype.setText = function (a) {
    a && '' !== a && (g[ 'text/plain' ] = a, !0 === d && e && 'function' === typeof e.setText ? e.setText(a) : d = !1);
    return this;
  };
  x.prototype.setSize = function (a, b) {
    !0 === d && e && 'function' === typeof e.setSize ? e.setSize(a, b) : d = !1;
    return this;
  };
  var J = function (a) {
    !0 === d && e && 'function' === typeof e.setHandCursor ?
      e.setHandCursor(a) : d = !1;
  };
  x.prototype.destroy = function () {
    this.unclip();
    this.off();
    delete m[ this.id ];
  };
  x.version = '1.3.5';
  var r = {
    swfPath: y,
    trustedDomains: b.location.host ? [ b.location.host ] : [],
    cacheBust: !0,
    forceHandCursor: !1,
    zIndex: 999999999,
    debug: !0,
    title: null,
    autoActivate: !0
  };
  x.config = function (a) {
    'object' === typeof a && null !== a && K(r, a);
    if ('string' === typeof a && a) {
      if (r.hasOwnProperty(a)) return r[ a ];
    } else {
      a = {};
      for (var b in r) r.hasOwnProperty(b) && (a[ b ] = 'object' === typeof r[ b ] && null !== r[ b ] ? 'length' in r[ b ] ? r[ b ].slice(0) :
        K({}, r[ b ]) : r[ b ]);
      return a;
    }
  };
  x.destroy = function () {
    x.deactivate();
    for (var a in m) if (m.hasOwnProperty(a) && m[ a ]) {
      var b = m[ a ].instance;
      b && 'function' === typeof b.destroy && b.destroy();
    }
    (a = W(e)) && a.parentNode && (a.parentNode.removeChild(a), e = d = null);
  };
  x.activate = function (d) {
    a && (M(a, r.hoverClass), M(a, r.activeClass));
    a = d;
    E(d, r.hoverClass);
    ca();
    var c = r.title || d.getAttribute('title');
    if (c) {
      var f = W(e);
      f && f.setAttribute('title', c);
    }
    if (!(c = !0 === r.forceHandCursor)) {
      a:{
        b.getComputedStyle ? c = b.getComputedStyle(d, null).getPropertyValue('cursor') :
          (c = C('cursor'), c = d.currentStyle ? d.currentStyle[ c ] : d.style[ c ]);
        if (!c || 'auto' === c) if (d = d.tagName.toLowerCase(), 'a' === d) {
          d = 'pointer';
          break a;
        }
        d = c;
      }
      c = 'pointer' === d;
    }
    J(c);
  };
  x.deactivate = function () {
    var b = W(e);
    b && (b.style.left = '0px', b.style.top = '-9999px', b.removeAttribute('title'));
    a && (M(a, r.hoverClass), M(a, r.activeClass), a = null);
  };
  var W = function (a) {
    var b = /^OBJECT|EMBED$/;
    for (a = a && a.parentNode; a && b.test(a.nodeName) && a.parentNode;) a = a.parentNode;
    return a || null;
  }, ca = function () {
    if (a) {
      var c = a, f = 0, g = 0, h = 0, l = 0, k = P(r.zIndex) -
        1;
      c.getBoundingClientRect && (l = c.getBoundingClientRect(), 'pageXOffset' in b && 'pageYOffset' in b ? (f = b.pageXOffset, g = b.pageYOffset) : (f = 1, 'function' === typeof document.body.getBoundingClientRect && (f = document.body.getBoundingClientRect(), f = f.right - f.left, g = document.body.offsetWidth, f = Math.round(f / g * 100) / 100), g = f, f = Math.round(document.documentElement.scrollLeft / g), g = Math.round(document.documentElement.scrollTop / g)), h = document.documentElement.clientTop || 0, f = l.left + f - (document.documentElement.clientLeft || 0),
        g = l.top + g - h, h = 'width' in l ? l.width : l.right - l.left, l = 'height' in l ? l.height : l.bottom - l.top);
      if (c = W(e)) c.style.top = g + 'px', c.style.left = f + 'px', c.style.width = h + 'px', c.style.height = l + 'px', c.style.zIndex = k + 1;
      !0 === d && e && 'function' === typeof e.setSize ? e.setSize(h, l) : d = !1;
    }
    return this;
  };
  x.prototype.on = function (a, b) {
    var g, e, l, k = {}, p = m[ this.id ] && m[ this.id ].handlers;
    if ('string' === typeof a && a) l = a.toLowerCase().split(/\s+/); else if ('object' === typeof a && a && 'undefined' === typeof b) for (g in a) if (a.hasOwnProperty(g) && 'string' ===
      typeof g && g && 'function' === typeof a[ g ]) this.on(g, a[ g ]);
    if (l && l.length) {
      g = 0;
      for (e = l.length; g < e; g++) a = l[ g ].replace(/^on/, ''), k[ a ] = !0, p[ a ] || (p[ a ] = []), p[ a ].push(b);
      k.noflash && c && S.call(this, 'noflash', {});
      k.wrongflash && f && S.call(this, 'wrongflash', { flashVersion: h });
      k.load && d && S.call(this, 'load', { flashVersion: h });
    }
    return this;
  };
  x.prototype.off = function (a, b) {
    var d, c, f, g, e, h = m[ this.id ] && m[ this.id ].handlers;
    if (0 === arguments.length) g = F(h); else if ('string' === typeof a && a) g = a.split(/\s+/); else if ('object' === typeof a &&
      a && 'undefined' === typeof b) for (d in a) a.hasOwnProperty(d) && 'string' === typeof d && d && 'function' === typeof a[ d ] && this.off(d, a[ d ]);
    if (g && g.length) for (d = 0, c = g.length; d < c; d++) if (a = g[ d ].toLowerCase().replace(/^on/, ''), (e = h[ a ]) && e.length) if (b) for (f = z(b, e); -1 !== f;) e.splice(f, 1), f = z(b, e, f); else h[ a ].length = 0;
    return this;
  };
  x.prototype.handlers = function (a) {
    var b, d = null, c = m[ this.id ] && m[ this.id ].handlers;
    if (c) {
      if ('string' === typeof a && a) return c[ a ] ? c[ a ].slice(0) : null;
      d = {};
      for (b in c) c.hasOwnProperty(b) && c[ b ] && (d[ b ] =
        c[ b ].slice(0))
    }
    return d;
  };
  x.prototype.clip = function (a) {
    a = t(a);
    for (var b = 0; b < a.length; b++) if (a.hasOwnProperty(b) && a[ b ] && 1 === a[ b ].nodeType) {
      if (a[ b ].zcClippingId) -1 === z(this.id, p[ a[ b ].zcClippingId ]) && p[ a[ b ].zcClippingId ].push(this.id); else if (a[ b ].zcClippingId = 'zcClippingId_' + u++, p[ a[ b ].zcClippingId ] = [ this.id ], !0 === r.autoActivate) {
        var d = a[ b ], c = D;
        d && 1 === d.nodeType && (d.addEventListener ? d.addEventListener('mouseover', c, !1) : d.attachEvent && d.attachEvent('onmouseover', c));
      }
      d = m[ this.id ].elements;
      -1 === z(a[ b ],
        d) && d.push(a[ b ]);
    }
    return this;
  };
  x.prototype.unclip = function (a) {
    var b = m[ this.id ];
    if (b) {
      var b = b.elements, d;
      a = 'undefined' === typeof a ? b.slice(0) : t(a);
      for (var c = a.length; c--;) if (a.hasOwnProperty(c) && a[ c ] && 1 === a[ c ].nodeType) {
        for (d = 0; -1 !== (d = z(a[ c ], b, d));) b.splice(d, 1);
        var f = p[ a[ c ].zcClippingId ];
        if (f) {
          for (d = 0; -1 !== (d = z(this.id, f, d));) f.splice(d, 1);
          0 === f.length && (!0 === r.autoActivate && (d = a[ c ], f = D, d && 1 === d.nodeType && (d.removeEventListener ? d.removeEventListener('mouseover', f, !1) : d.detachEvent && d.detachEvent('onmouseover',
            f))), delete a[ c ].zcClippingId);
        }
      }
    }
    return this;
  };
  x.prototype.elements = function () {
    var a = m[ this.id ];
    return a && a.elements ? a.elements.slice(0) : [];
  };
  r.hoverClass = 'zeroclipboard-is-hover';
  r.activeClass = 'zeroclipboard-is-active';
  r.trustedOrigins = null;
  r.allowScriptAccess = null;
  r.useNoCache = !0;
  r.moviePath = 'ZeroClipboard.swf';
  x.detectFlashSupport = function () {
    A('ZeroClipboard.detectFlashSupport', r.debug);
    return R();
  };
  x.dispatch = function (b, d) {
    if ('string' === typeof b && b) {
      var c = b.toLowerCase().replace(/^on/, '');
      if (c) {
        var f;
        if (a && !0 === r.autoActivate) {
          var g, e, h, l;
          f = [];
          if (a && 1 === a.nodeType && (g = a.zcClippingId) && p.hasOwnProperty(g) && (g = p[ g ]) && g.length) for (e = 0, h = g.length; e < h; e++) (l = m[ g[ e ] ].instance) && l instanceof x && f.push(l)
        } else {
          h = [];
          l = F(m);
          f = 0;
          for (g = l.length; f < g; f++) (e = m[ l[ f ] ].instance) && e instanceof x && h.push(e);
          f = h;
        }
        g = 0;
        for (e = f.length; g < e; g++) S.call(f[ g ], c, d)
      }
    }
  };
  x.prototype.setHandCursor = function (a) {
    A('ZeroClipboard.prototype.setHandCursor', r.debug);
    a = 'boolean' === typeof a ? a : !!a;
    J(a);
    r.forceHandCursor = a;
    return this;
  };
  x.prototype.reposition =
    function () {
      A('ZeroClipboard.prototype.reposition', r.debug);
      return ca();
    };
  x.prototype.receiveEvent = function (a, b) {
    A('ZeroClipboard.prototype.receiveEvent', r.debug);
    if ('string' === typeof a && a) {
      var d = a.toLowerCase().replace(/^on/, '');
      d && S.call(this, d, b);
    }
  };
  x.prototype.setCurrent = function (a) {
    A('ZeroClipboard.prototype.setCurrent', r.debug);
    x.activate(a);
    return this;
  };
  x.prototype.resetBridge = function () {
    A('ZeroClipboard.prototype.resetBridge', r.debug);
    x.deactivate();
    return this;
  };
  x.prototype.setTitle = function (b) {
    A('ZeroClipboard.prototype.setTitle',
      r.debug);
    if (b = b || r.title || a && a.getAttribute('title')) {
      var d = W(e);
      d && d.setAttribute('title', b);
    }
    return this;
  };
  x.setDefaults = function (a) {
    A('ZeroClipboard.setDefaults', r.debug);
    x.config(a);
  };
  x.prototype.addEventListener = function (a, b) {
    A('ZeroClipboard.prototype.addEventListener', r.debug);
    return this.on(a, b);
  };
  x.prototype.removeEventListener = function (a, b) {
    A('ZeroClipboard.prototype.removeEventListener', r.debug);
    return this.off(a, b);
  };
  x.prototype.ready = function () {
    A('ZeroClipboard.prototype.ready', r.debug);
    return !0 ===
      d;
  };
  var S = function (c, e) {
    c = c.toLowerCase().replace(/^on/, '');
    var l = e && e.flashVersion && k(e.flashVersion) || null, p = a, u = !0;
    switch (c) {
      case 'load':
        if (l) {
          if (!(10 <= parseFloat(k(l)))) {
            S.call(this, 'onWrongFlash', { flashVersion: l });
            return;
          }
          f = !1;
          d = !0;
          h = l;
        }
        break;
      case 'wrongflash':
        !l || 10 <= parseFloat(k(l)) || (f = !0, d = !1, h = l);
        break;
      case 'mouseover':
        E(p, r.hoverClass);
        break;
      case 'mouseout':
        !0 === r.autoActivate && x.deactivate();
        break;
      case 'mousedown':
        E(p, r.activeClass);
        break;
      case 'mouseup':
        M(p, r.activeClass);
        break;
      case 'datarequested':
        if (p) {
          var q =
            p.getAttribute('data-clipboard-target');
          (q = (q = q ? document.getElementById(q) : null) ? q.value || q.textContent || q.innerText : p.getAttribute('data-clipboard-text')) && this.setText(q);
        }
        u = !1;
        break;
      case 'complete':
        if (g) for (var y in g) g.hasOwnProperty(y) && delete g[ y ];
        if (l = p) {
          a:{
            try {
              q = document.activeElement;
              break a;
            } catch (B) {
            }
            q = null;
          }
          l = p !== q;
        }
        l && p.focus && p.focus();
    }
    q = [ this, e ];
    if ((l = m[ this.id ] && m[ this.id ].handlers[ c ]) && l.length) {
      var C, n, t = p || this;
      y = 0;
      for (C = l.length; y < C; y++) n = l[ y ], p = t, 'string' === typeof n && 'function' ===
      typeof b[ n ] && (n = b[ n ]), 'object' === typeof n && n && 'function' === typeof n.handleEvent && (p = n, n = n.handleEvent), 'function' === typeof n && G(n, p, q, u)
    }
    return this;
  };
  'function' === typeof define && define.amd ? define([ 'require', 'exports', 'module' ], function (a, b, d) {
    B = d && d.id || null;
    return x;
  }) : 'object' === typeof module && module && 'object' === typeof module.exports && module.exports && 'function' === typeof b.require ? (q = module.id || null, module.exports = x) : b.ZeroClipboard = x;
})(function () {
  return this;
}());
(function (b) {
  b.extend({
    cookie: {
      get: function (b) {
        return (b = document.cookie.match('\\b' + b + '=([^;]*)\\b')) ? b[ 1 ] : void 0;
      }, write: function (b, a, e) {
        if (e) {
          var h = new Date;
          h.setTime(h.getTime() + 864E5 * e);
          e = '; expires=' + h.toGMTString();
        } else e = '';
        document.cookie = b + '=' + a + e + '; path=/';
      }, debug: function () {
        console.log(document.cookie);
      }
    }
  });
})(jQuery);
(function () {
  var b, k, a, e;
  k = window.location.hostname.split('.');
  b = k.slice(k.length - 2).join('.');
  this.App = {
    Lib: {}, Dispatch: _.extend({}, Backbone.Events), Partials: {}, State: {}, Settings: {
      env: function () {
        switch (b) {
          case 'bitly.org':
            return 'dev';
          case 'bitly.net':
            return 'staging';
          case 'bitly.com':
            return 'prod';
          default:
            return 'none';
        }
      }()
    }
  };
  this.App.State.input_event = 'oninput' in window ? 'input' : 'propertychange';
  App.DEBUG && (e = +new Date, a = function (a) {
    return 36E5 <= a ? (a / 36E5).toFixed(1) + 'h' : 6E4 <= a ? (a / 6E4).toFixed(1) + 'm' :
      1E3 <= a ? (a / 1E3 | 0) + 's' : a + 'ms';
  }, App.Dispatch.on('all', function () {
    var b;
    b = '+' + a(+new Date - e);
    return console.log(b, arguments);
  }));
  App.notify = function (a) {
    return function () {
      var b;
      if (!$('#app-notification:visible').length) return b = $('#app-notification'), b.removeClass('warning error success').text(a.msg).addClass(a.type).css('marginLeft', -b.width() / 2).slideDown().delay(5E3).slideUp();
    };
  };
  _.truthy = function (a) {
    return !0 === a || 'true' === a || 1 === a || '1' === a;
  };
}).call(this);
(function () {
  var b, k, a, e;
  try {
    b = !!('placeholder' in document.createElement('input'));
  } catch (h) {
    b = !1;
  }
  a = null != (e = window.getComputedStyle) ? e : function (a) {
    return a.currentStyle;
  };
  k = {};
  window.App || (window.App = {});
  App.Lib || (App.Lib = {});
  App.Lib.PlaceholderShim = function () {
    function c(a, d) {
      null == d && (d = {});
      this.el = $(a);
      this.el.length && (this.options = d, this.state = {}, this.orig_text = this.text = d.text || this.el.attr('placeholder'), this.id = 'ph_' + parseInt(Math.random() * +new Date * 1E3, 10), this.container = $(document.createElement('b')).attr('id',
        this.id), this.container.get(0).className = 'ph_shim', b || (this.setStyles(), this.bindEvents(), this.checkLength(), this.insertContainer()));
    }

    c.prototype.insertContainer = function () {
      this.container.insertBefore(this.el);
      return this.container.append(this.el.detach());
    };
    c.prototype.bindEvents = function () {
      var a = this;
      this.el.bind('keyup.ph', function (b) {
        return a.checkLength();
      });
      this.el.bind('keydown.ph', function (b) {
        if (a.state.empty && 48 <= b.keyCode && !b.metaKey) return a.hide();
      });
      this.el.bind('paste.ph', function (b) {
        return setTimeout(function () {
          return a.checkLength();
        });
      });
      this.el.bind('focus.ph', function (b) {
        return setTimeout(function () {
          return a.checkLength();
        });
      });
      this.el.bind('blur.ph', function (b) {
        if (a.state.noblur) return a.checkLength();
      });
      this.container.bind('click.ph', function (b) {
        return a.el.focus();
      });
      this.container.bind('mousedown.ph', function (b) {
        if (a.isFocused() && (a.state.noblur = !0, a.state.empty)) return b.preventDefault();
      });
      return this;
    };
    c.prototype.hide = function () {
      var a;
      if (!this.state.empty) return this;
      delete this.state.empty;
      this.container.removeClass('empty');
      null != (a = this.options.onhide) && a.call(null);
      return this;
    };
    c.prototype.show = function () {
      var a;
      if (this.state.empty) return this;
      this.state.empty = !0;
      this.container.addClass('empty');
      null != (a = this.options.onshow) && a.call(null);
      return this;
    };
    c.prototype.checkLength = function () {
      this.el.val() && 0 !== this.el.val().length ? this.hide() : this.options.focus_only ? this.isFocused() ? this.show() : this.hide() : this.show();
      delete this.state.noblur;
      return this;
    };
    c.prototype.isFocused = function () {
      return this.el[ 0 ] === document.activeElement;
    };
    c.prototype.setText = function (a) {
      var d;
      null == a && (a = this.orig_text);
      this.text = a;
      b ? this.el.attr('placeholder', a) : (a = '#' + this.id + '.empty:after', d = {}, d[ a ] = { content: '\'' + this.text + '\'' }, this.css(d));
      return this;
    };
    c.prototype.setStyles = function () {
      var a, b, c;
      c = {};
      a = '#' + this.id;
      this.options.group ? (k.hasOwnProperty(this.options.group) || (k[ this.options.group ] = this.setSpecificStyles()), b = k[ this.optins.group ]) : b = this.setSpecificStyles();
      c[ a ] = { display: this.el.css('display') || 'inline-block', position: 'relative' };
      'inline' ===
      c[ a ].display && (c[ a ].display = 'inline-block');
      c[ '' + a + '.empty:after' ] = $.extend({
        'font-weight': 'normal',
        'font-size': '13px',
        display: 'block',
        content: '\'' + this.text + '\'',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        opacity: '.8',
        'text-indent': '1px',
        'background-color': 'transparent',
        'border-color': 'transparent',
        'border-style': 'solid',
        color: '#AAA',
        'text-align': 'left'
      }, b, this.options.css || {});
      this.css(c);
      return this;
    };
    c.prototype.setSpecificStyles = function () {
      var b, d, c;
      d = a(this.el.get(0), null);
      c = {
        'line-height': d.lineHeight,
        'padding-top': d.paddingTop,
        'padding-left': d.paddingLeft,
        'padding-right': d.paddingRight,
        'padding-bottom': d.paddingBottom,
        'margin-top': d.marginTop,
        'margin-left': d.marginLeft,
        'margin-right': d.marginRight,
        'margin-bottom': d.marginBottom,
        'font-size': d.fontSize
      };
      b = '0px';
      try {
        b = d.borderWidth || '0px';
      } catch (e) {
        b = '0px';
      }
      c[ 'border-width' ] = b;
      return c;
    };
    c.prototype.css = function (a, b) {
      var c, e, h, k, p, B, q;
      null == b && (b = '');
      document.getElementById('ph_shim_stylesheet') ? k = null != (p = document.getElementById('ph_shim_stylesheet')) ?
        p.sheet : void 0 : (k = document.createElement('style'), k.id = 'ph_shim_stylesheet', k.type = 'text/css', document.getElementsByTagName('head')[ 0 ].appendChild(k), k = null != (e = document.getElementById('ph_shim_stylesheet')) ? e.sheet : void 0);
      k || (k = document.styleSheets[ document.styleSheets.length - 1 ]);
      if (a) {
        q = [];
        for (h in a) if (a.hasOwnProperty(h)) {
          p = '';
          if ('object' === typeof a[ h ]) for (c in e = a[ h ], e) e.hasOwnProperty(c) && (B = e[ c ], B = B.replace(/_vendor_/g, b), c = c.replace(/_vendor_/g, b), p += c + ': ' + B + '; '); else B = a[ h ], B = B.replace(/_vendor_/g,
            b), p += B;
          h = h.replace(/_vendor_/g, b);
          try {
            k.insertRule ? q.push(k.insertRule(h + ' {' + p + '}', k.cssRules.length)) : k.addRule ? q.push(k.addRule(h, p, -1)) : q.push(void 0);
          } catch (y) {
          }
        } else q.push(void 0);
        return q;
      }
    };
    return c;
  }();
}).call(this);
(function () {
  var b;
  b = function (b) {
    return -1 === document.location.hostname.indexOf('bitly') ? 'http://bitly.com' + b : b;
  }('/s/beta/flash/ZeroClipboard-1.3.5.swf');
  ZeroClipboard.config({ moviePath: b, swfPath: b });
  b = new ZeroClipboard;
  b.on('noflash wrongflash', function () {
    $('body').addClass('no-zc');
    return _.extend(App.Platform, { flash: !1 });
  });
  b.on('load', function () {
    return _.extend(App.Platform, { flash: !0 });
  });
  b.on('complete', function (b, a) {
    return $(this).trigger('zeroclipboard-complete', b, a);
  });
  App.$ZC = b;
}).call(this);
var Base64 = {
  _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', encode: function (b) {
    var k = '', a, e, h, c, f, d, g = 0;
    for (b = Base64._utf8_encode(b); g < b.length;) a = b.charCodeAt(g++), e = b.charCodeAt(g++), h = b.charCodeAt(g++), c = a >> 2, a = (a & 3) << 4 | e >> 4, f = (e & 15) << 2 | h >> 6, d = h & 63, isNaN(e) ? f = d = 64 : isNaN(h) && (d = 64), k = k + Base64._keyStr.charAt(c) + Base64._keyStr.charAt(a) + Base64._keyStr.charAt(f) + Base64._keyStr.charAt(d);
    return k;
  }, decode: function (b) {
    var k = '', a, e, h, c, f, d = 0;
    for (b = b.replace(/[^A-Za-z0-9\+\/\=]/g,
      ''); d < b.length;) a = Base64._keyStr.indexOf(b.charAt(d++)), e = Base64._keyStr.indexOf(b.charAt(d++)), c = Base64._keyStr.indexOf(b.charAt(d++)), f = Base64._keyStr.indexOf(b.charAt(d++)), a = a << 2 | e >> 4, e = (e & 15) << 4 | c >> 2, h = (c & 3) << 6 | f, k += String.fromCharCode(a), 64 != c && (k += String.fromCharCode(e)), 64 != f && (k += String.fromCharCode(h));
    return k = Base64._utf8_decode(k);
  }, _utf8_encode: function (b) {
    b = b.replace(/\r\n/g, '\n');
    for (var k = '', a = 0; a < b.length; a++) {
      var e = b.charCodeAt(a);
      128 > e ? k += String.fromCharCode(e) : (127 < e && 2048 > e ? k +=
        String.fromCharCode(e >> 6 | 192) : (k += String.fromCharCode(e >> 12 | 224), k += String.fromCharCode(e >> 6 & 63 | 128)), k += String.fromCharCode(e & 63 | 128));
    }
    return k;
  }, _utf8_decode: function (b) {
    for (var k = '', a = 0, e = c1 = c2 = 0; a < b.length;) e = b.charCodeAt(a), 128 > e ? (k += String.fromCharCode(e), a++) : 191 < e && 224 > e ? (c2 = b.charCodeAt(a + 1), k += String.fromCharCode((e & 31) << 6 | c2 & 63), a += 2) : (c2 = b.charCodeAt(a + 1), c3 = b.charCodeAt(a + 2), k += String.fromCharCode((e & 15) << 12 | (c2 & 63) << 6 | c3 & 63), a += 3);
    return k;
  }
};
window.btoa || (window.btoa = Base64.encode);
window.atob || (window.atob = Base64.decode);
var hexcase = 0, b64pad = '';

function hex_md5(b) {
  return rstr2hex(rstr_md5(str2rstr_utf8(b)));
}

function b64_md5(b) {
  return rstr2b64(rstr_md5(str2rstr_utf8(b)));
}

function any_md5(b, k) {
  return rstr2any(rstr_md5(str2rstr_utf8(b)), k);
}

function hex_hmac_md5(b, k) {
  return rstr2hex(rstr_hmac_md5(str2rstr_utf8(b), str2rstr_utf8(k)));
}

function b64_hmac_md5(b, k) {
  return rstr2b64(rstr_hmac_md5(str2rstr_utf8(b), str2rstr_utf8(k)));
}

function any_hmac_md5(b, k, a) {
  return rstr2any(rstr_hmac_md5(str2rstr_utf8(b), str2rstr_utf8(k)), a);
}

function md5_vm_test() {
  return '900150983cd24fb0d6963f7d28e17f72' == hex_md5('abc').toLowerCase();
}

function rstr_md5(b) {
  return binl2rstr(binl_md5(rstr2binl(b), 8 * b.length));
}

function rstr_hmac_md5(b, k) {
  var a = rstr2binl(b);
  16 < a.length && (a = binl_md5(a, 8 * b.length));
  for (var e = Array(16), h = Array(16), c = 0; 16 > c; c++) e[ c ] = a[ c ] ^ 909522486, h[ c ] = a[ c ] ^ 1549556828;
  a = binl_md5(e.concat(rstr2binl(k)), 512 + 8 * k.length);
  return binl2rstr(binl_md5(h.concat(a), 640));
}

function rstr2hex(b) {
  try {
    hexcase;
  } catch (k) {
    hexcase = 0;
  }
  for (var a = hexcase ? '0123456789ABCDEF' : '0123456789abcdef', e = '', h, c = 0; c < b.length; c++) h = b.charCodeAt(c), e += a.charAt(h >>> 4 & 15) + a.charAt(h & 15);
  return e;
}

function rstr2b64(b) {
  try {
    b64pad;
  } catch (k) {
    b64pad = '';
  }
  for (var a = '', e = b.length, h = 0; h < e; h += 3) for (var c = b.charCodeAt(h) << 16 | (h + 1 < e ? b.charCodeAt(h + 1) << 8 : 0) | (h + 2 < e ? b.charCodeAt(h + 2) : 0), f = 0;; ; ;
  4 > f;
  f++;
)
  a = 8 * h + 6 * f > 8 * b.length ? a + b64pad : a + 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(c >>> 6 * (3 - f) & 63);
  return a;
}

function rstr2any(b, k) {
  var a = k.length, e, h, c, f, d, g = Array(Math.ceil(b.length / 2));
  for (e = 0; e < g.length; e++) g[ e ] = b.charCodeAt(2 * e) << 8 | b.charCodeAt(2 * e + 1);
  var l = Math.ceil(8 * b.length / (Math.log(k.length) / Math.log(2))), m = Array(l);
  for (h = 0; h < l; h++) {
    d = [];
    for (e = f = 0; e < g.length; e++) if (f = (f << 16) + g[ e ], c = Math.floor(f / a), f -= c * a, 0 < d.length || 0 < c) d[ d.length ] = c;
    m[ h ] = f;
    g = d;
  }
  a = '';
  for (e = m.length - 1; 0 <= e; e--) a += k.charAt(m[ e ]);
  return a;
}

function str2rstr_utf8(b) {
  for (var k = '', a = -1, e, h; ++a < b.length;) e = b.charCodeAt(a), h = a + 1 < b.length ? b.charCodeAt(a + 1) : 0, 55296 <= e && 56319 >= e && 56320 <= h && 57343 >= h && (e = 65536 + ((e & 1023) << 10) + (h & 1023), a++), 127 >= e ? k += String.fromCharCode(e) : 2047 >= e ? k += String.fromCharCode(192 | e >>> 6 & 31, 128 | e & 63) : 65535 >= e ? k += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | e & 63) : 2097151 >= e && (k += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | e & 63));
  return k;
}

function str2rstr_utf16le(b) {
  for (var k = '', a = 0; a < b.length; a++) k += String.fromCharCode(b.charCodeAt(a) & 255, b.charCodeAt(a) >>> 8 & 255);
  return k;
}

function str2rstr_utf16be(b) {
  for (var k = '', a = 0; a < b.length; a++) k += String.fromCharCode(b.charCodeAt(a) >>> 8 & 255, b.charCodeAt(a) & 255);
  return k;
}

function rstr2binl(b) {
  for (var k = Array(b.length >> 2), a = 0; a < k.length; a++) k[ a ] = 0;
  for (a = 0; a < 8 * b.length; a += 8) k[ a >> 5 ] |= (b.charCodeAt(a / 8) & 255) << a % 32;
  return k;
}

function binl2rstr(b) {
  for (var k = '', a = 0; a < 32 * b.length; a += 8) k += String.fromCharCode(b[ a >> 5 ] >>> a % 32 & 255);
  return k;
}

function binl_md5(b, k) {
  b[ k >> 5 ] |= 128 << k % 32;
  b[ (k + 64 >>> 9 << 4) + 14 ] = k;
  for (var a = 1732584193, e = -271733879, h = -1732584194, c = 271733878, f = 0; f < b.length; f += 16) var d = a, g = e, l = h, m = c, a = md5_ff(a, e, h, c, b[ f + 0 ], 7, -680876936), c = md5_ff(c, a, e, h, b[ f + 1 ], 12, -389564586), h = md5_ff(h, c, a, e, b[ f + 2 ], 17, 606105819), e = md5_ff(e, h, c, a, b[ f + 3 ], 22, -1044525330), a = md5_ff(a, e, h, c, b[ f + 4 ], 7, -176418897), c = md5_ff(c, a, e, h, b[ f + 5 ], 12, 1200080426), h = md5_ff(h, c, a, e, b[ f + 6 ], 17, -1473231341), e = md5_ff(e, h, c, a, b[ f + 7 ], 22, -45705983), a = md5_ff(a, e, h, c, b[ f + 8 ], 7,
    1770035416), c = md5_ff(c, a, e, h, b[ f + 9 ], 12, -1958414417), h = md5_ff(h, c, a, e, b[ f + 10 ], 17, -42063), e = md5_ff(e, h, c, a, b[ f + 11 ], 22, -1990404162), a = md5_ff(a, e, h, c, b[ f + 12 ], 7, 1804603682), c = md5_ff(c, a, e, h, b[ f + 13 ], 12, -40341101), h = md5_ff(h, c, a, e, b[ f + 14 ], 17, -1502002290), e = md5_ff(e, h, c, a, b[ f + 15 ], 22, 1236535329), a = md5_gg(a, e, h, c, b[ f + 1 ], 5, -165796510), c = md5_gg(c, a, e, h, b[ f + 6 ], 9, -1069501632), h = md5_gg(h, c, a, e, b[ f + 11 ], 14, 643717713), e = md5_gg(e, h, c, a, b[ f + 0 ], 20, -373897302), a = md5_gg(a, e, h, c, b[ f + 5 ], 5, -701558691), c = md5_gg(c, a, e, h, b[ f +
  10 ], 9, 38016083), h = md5_gg(h, c, a, e, b[ f + 15 ], 14, -660478335), e = md5_gg(e, h, c, a, b[ f + 4 ], 20, -405537848), a = md5_gg(a, e, h, c, b[ f + 9 ], 5, 568446438), c = md5_gg(c, a, e, h, b[ f + 14 ], 9, -1019803690), h = md5_gg(h, c, a, e, b[ f + 3 ], 14, -187363961), e = md5_gg(e, h, c, a, b[ f + 8 ], 20, 1163531501), a = md5_gg(a, e, h, c, b[ f + 13 ], 5, -1444681467), c = md5_gg(c, a, e, h, b[ f + 2 ], 9, -51403784), h = md5_gg(h, c, a, e, b[ f + 7 ], 14, 1735328473), e = md5_gg(e, h, c, a, b[ f + 12 ], 20, -1926607734), a = md5_hh(a, e, h, c, b[ f + 5 ], 4, -378558), c = md5_hh(c, a, e, h, b[ f + 8 ], 11, -2022574463), h = md5_hh(h, c, a, e, b[ f +
  11 ], 16, 1839030562), e = md5_hh(e, h, c, a, b[ f + 14 ], 23, -35309556), a = md5_hh(a, e, h, c, b[ f + 1 ], 4, -1530992060), c = md5_hh(c, a, e, h, b[ f + 4 ], 11, 1272893353), h = md5_hh(h, c, a, e, b[ f + 7 ], 16, -155497632), e = md5_hh(e, h, c, a, b[ f + 10 ], 23, -1094730640), a = md5_hh(a, e, h, c, b[ f + 13 ], 4, 681279174), c = md5_hh(c, a, e, h, b[ f + 0 ], 11, -358537222), h = md5_hh(h, c, a, e, b[ f + 3 ], 16, -722521979), e = md5_hh(e, h, c, a, b[ f + 6 ], 23, 76029189), a = md5_hh(a, e, h, c, b[ f + 9 ], 4, -640364487), c = md5_hh(c, a, e, h, b[ f + 12 ], 11, -421815835), h = md5_hh(h, c, a, e, b[ f + 15 ], 16, 530742520), e = md5_hh(e, h, c,
    a, b[ f + 2 ], 23, -995338651), a = md5_ii(a, e, h, c, b[ f + 0 ], 6, -198630844), c = md5_ii(c, a, e, h, b[ f + 7 ], 10, 1126891415), h = md5_ii(h, c, a, e, b[ f + 14 ], 15, -1416354905), e = md5_ii(e, h, c, a, b[ f + 5 ], 21, -57434055), a = md5_ii(a, e, h, c, b[ f + 12 ], 6, 1700485571), c = md5_ii(c, a, e, h, b[ f + 3 ], 10, -1894986606), h = md5_ii(h, c, a, e, b[ f + 10 ], 15, -1051523), e = md5_ii(e, h, c, a, b[ f + 1 ], 21, -2054922799), a = md5_ii(a, e, h, c, b[ f + 8 ], 6, 1873313359), c = md5_ii(c, a, e, h, b[ f + 15 ], 10, -30611744), h = md5_ii(h, c, a, e, b[ f + 6 ], 15, -1560198380), e = md5_ii(e, h, c, a, b[ f + 13 ], 21, 1309151649), a = md5_ii(a,
    e, h, c, b[ f + 4 ], 6, -145523070), c = md5_ii(c, a, e, h, b[ f + 11 ], 10, -1120210379), h = md5_ii(h, c, a, e, b[ f + 2 ], 15, 718787259), e = md5_ii(e, h, c, a, b[ f + 9 ], 21, -343485551), a = safe_add(a, d), e = safe_add(e, g), h = safe_add(h, l), c = safe_add(c, m);
  return [ a, e, h, c ];
}

function md5_cmn(b, k, a, e, h, c) {
  return safe_add(bit_rol(safe_add(safe_add(k, b), safe_add(e, c)), h), a);
}

function md5_ff(b, k, a, e, h, c, f) {
  return md5_cmn(k & a | ~k & e, b, k, h, c, f);
}

function md5_gg(b, k, a, e, h, c, f) {
  return md5_cmn(k & e | a & ~e, b, k, h, c, f);
}

function md5_hh(b, k, a, e, h, c, f) {
  return md5_cmn(k ^ a ^ e, b, k, h, c, f);
}

function md5_ii(b, k, a, e, h, c, f) {
  return md5_cmn(a ^ (k | ~e), b, k, h, c, f);
}

function safe_add(b, k) {
  var a = (b & 65535) + (k & 65535);
  return (b >> 16) + (k >> 16) + (a >> 16) << 16 | a & 65535;
}

function bit_rol(b, k) {
  return b << k | b >>> 32 - k;
};BITLY && void 0 !== BITLY || (BITLY = {});
window.$_xSCr = [ window ];
BITLY.unauth_shorten = { inputs: null, signature_key: 'NWA$$adf$gh$==' };
(function () {
  function b(a) {
    a.preventDefault();
    var b = {
      url: '/data/shorten',
      type: 'POST',
      dataType: 'json',
      traditional: 'true',
      success: k,
      error: function () {
        var a = $._('An error occurred shortening that link');
        notify(a, { type: 'error' });
        window.App && App.Dispatch.trigger('shorten:unauth_error');
      }
    };
    $.fn.ajaxSubmit ? $(d.target_form).ajaxSubmit(b) : f.call($(d.target_form), a, b);
  }

  function k(a) {
    if (a) if (a.data && 200 == a.status_code) window.ga('send', 'event', 'button-click', 'shorten', 'Shorten Link'), window.App && App.Dispatch.trigger('shorten:unauth',
      a.data); else {
      var b = $._('An error occurred shortening that link');
      switch (a.status_txt) {
        case 'INVALID_URI':
        case 'INVALID_ARG_URL':
          b = $._('Unable to shorten that link. It is not a valid url.');
          break;
        case 'ALREADY_A_BITLY_LINK':
          b = $._('That is already a bitly link');
      }
      notify(b, { type: 'error' });
      window.App && App.Dispatch.trigger('shorten:unauth_error');
    }
  }

  function a(a) {
    a && a.data && ($('.last_shorten').show(), $(d.el_inner).trigger('shortenComplete', a.data), $(d.target_form).get(0).reset());
  }

  function e(a, b) {
    for (var d =
      atob(g.sig_salt), c = [ '', '' ], f = a.find('input').filter('[type=hidden],[type=text]'), e = 0; e < f.length; e++) {
      var k = $(f[ e ]), C = k.attr('name'), k = k.attr('value');
      -1 < $.inArray(C, g.lst1) && (k = '');
      b[ C ] = k;
    }
    for (e = 0; e < g.lst1.length; e++) b[ g.lst1[ e ] ] = c.pop() || '';
    b[ g.key ] = d;
    b.key = h(d, b);
    delete b[ g.key ];
    return b;
  }

  function h(a, b) {
    var d;
    d = c(b);
    var g, f = [], e = [];
    for (g = 0; g < d.length; g++) f = d[ g ], e.push(f[ 0 ] + '=' + f[ 1 ]);
    d = e.join('&');
    return hex_md5(d + a);
  }

  function c(a) {
    var b = [], d;
    for (d in a) a.hasOwnProperty(d) && b.push([ d, a[ d ] ]);
    b.sort(function (a,
                     b) {
      return a[ 0 ] > b[ 0 ] ? 1 : -1;
    });
    return b;
  }

  function f(a, b) {
    var d = $(this);
    a.preventDefault();
    var c = {};
    d.find('input[type=text], input[type=password], input[type=checkbox], input[type=hidden], input[type=radio], textarea').each(function (a, b) {
      $input = $(b);
      var d = $input.attr('name');
      if (d) if ('checkbox' === $input.attr('type')) {
        var g = $input[ 0 ].checked;
        $input.hasClass('inv') && (g = !g);
        $input.hasClass('bool') ? c[ d ] = g ? 'true' : 'false' : c[ d ] = g ? 1 : 0;
      } else 'radio' === $input.attr('type') ? $input[ 0 ].checked && (c[ d ] = $input.val()) : c[ d ] =
        $input.val();
    });
    var g = $.param(c);
    b = $.extend({
      url: $(this).data('ajax_action') || this.action || location.pathname,
      dataType: 'json',
      data: g,
      type: d.attr('method').toUpperCase() || 'POST'
    }, b);
    $.ajax(b);
  }

  var d = {
    target_form: '#unAuthShortenForm',
    short_box: '#shortenUnAuthContainer',
    el_inner: '#sidebar_container_inner'
  }, g = { sig_salt: '', key: '', lst1: [], lst2: [], lst3: [] };
  $._ || ($._ = function (a) {
    return a;
  });
  BITLY.unauth_shorten.validate_form = function (a, b, d, c, g) {
    var f, e, k;
    a = $(a.target);
    f = [ 'input', 'name', 'value', 'key' ];
    var D, E =
      {}, M = [ '', '' ];
    g = f[ 1 ];
    var z = f[ 2 ];
    c = atob(c.pop());
    e = a.find(f[ 0 ]);
    for (k = 0; k < e.length; k++) D = $(e[ k ]), 'key' === D.attr('name') && D.remove();
    D = a.find(f[ 0 ]).filter('[type=hidden],[type=text]');
    for (var t = 0; t < D.length; t++) f = $(D[ t ]), e = f.attr(g), k = f.attr(z), -1 < $.inArray(e, d) && (k = '', f.attr(z, '')), E[ e ] = k;
    for (t = 0; t < d.length; t++) E[ d[ t ] ] = M.pop() || '';
    E[ b ] = c;
    b = $.extend(!0, {}, E);
    (key = h(c, b)) && a.append('<input type="hidden" ' + g + '=\'key\' ' + z + '=\'' + key + '\' />');
  };
  BITLY.unauth_shorten.init = function (a, c) {
    d = $.extend(!0, {}, void 0,
      c);
    $(function (a) {
      d.old_school_submit ? a(d.target_form).bind('submit', function (b) {
        a.trim(a(d.short_box).val()) || (b.preventDefault(), location.href = '/shorten');
      }) : a(d.target_form).bind('submit', b);
      d.history_container && BITLY.unauth.history.init(d.history_container, {
        form: d.target_form,
        short_box: d.short_box
      });
    });
  };
  BITLY.unauth_shorten.sidebar_start = function (b, c) {
    d = $.extend(!0, {}, void 0, c);
    $(function (c) {
      c('#sidebar_metrics').sidebarClicks();
      c(d.el_inner).linkCapsule('.shortened_results_list', {
        capsule_container: '.shortenedBitlyListListBox',
        block_customization: !0
      });
      b && c(d.el_inner).trigger('shortenComplete', b);
      c(d.target_form).bind('submit', function (b) {
        b.preventDefault();
        var d = {
          url: '/data/shorten',
          type: 'POST',
          dataType: 'json',
          traditional: 'true',
          success: a,
          error: function () {
          }
        };
        c(b.target).ajaxSubmit(d);
      });
      c(d.el_inner).bind('shortenComplete', function (a) {
        a.stopPropagation();
      });
    });
  };
  BITLY.unauth_shorten.mobile_start = function (a, b, d, c, f, h) {
    g.sig_salt = f.pop();
    g.key = c;
    a[ b ] = e;
    m_names = d;
    g.lst1 = d;
    g.lst2 = f;
    g.lst3 = h;
  };
})();
(function () {
  var b;
  b = function () {
    function b(a) {
      var e;
      null == a && (a = window.$);
      this.$cookie = a.cookie;
      this.shortlinks = this._normalizeShortlinks((null != (e = this.$cookie.get(this.COOKIE_NAME)) ? e.split(',') : void 0) || []);
    }

    b.prototype.COOKIE_NAME = 'anon_shortlinks';
    b.prototype.hostname = location.hostname;
    b.prototype._normalizeShortlinks = function (a) {
      var b, h, c, f, d;
      h = [];
      f = 0;
      for (d = a.length; f < d; f++) if (c = a[ f ], 'object' === typeof c && c.user_hash && c.ts && (c = '' + c.user_hash + ':' + c.ts), b = c.match(/^(.+)\:(\d+)$/)) c = b[ 1 ], b = b[ 2 ], c =
        -1 === c.indexOf('/') ? 'http://' + this.hostname + '/' + c + ':' + b : -1 === c.indexOf('://') ? 'http://' + c + ':' + b : '' + c + ':' + b, h.push(c);
      return h;
    };
    b.prototype._split = function (a) {
      a = a.match(/^(.+)\:(\d+)$/);
      return [ a[ 1 ], a[ 2 ] ];
    };
    b.prototype._getShortlinks = function () {
      var a, b, h, c, f;
      c = this.shortlinks;
      f = [];
      b = 0;
      for (h = c.length; b < h; b++) a = c[ b ], f.push(this._split(a)[ 0 ]);
      return f;
    };
    b.prototype._encodeShortlink = function (a) {
      return a.short_url + ':' + a.ts;
    };
    b.prototype.saveLinks = function (a) {
      this.shortlinks = this._normalizeShortlinks(a);
      return this.$cookie.write(this.COOKIE_NAME,
        this.shortlinks.join(','), 365);
    };
    b.prototype.getHashes = function () {
      var a, b, h, c, f;
      c = this._getShortlinks();
      f = [];
      b = 0;
      for (h = c.length; b < h; b++) a = c[ b ], f.push(a.split('/').pop());
      return f;
    };
    b.prototype.hashesToShortlinks = function () {
      var a, b, h, c, f, d;
      h = {};
      d = this._getShortlinks();
      c = 0;
      for (f = d.length; c < f; c++) b = d[ c ], a = b.split('/').pop(), h[ a ] = b;
      return h;
    };
    b.prototype.hashesToTimestamps = function () {
      var a, b, h, c, f, d;
      h = {};
      d = this.shortlinks;
      c = 0;
      for (f = d.length; c < f; c++) a = d[ c ], b = this._split(a), a = b[ 0 ].split('/'), a = a.pop(), b = +b[ 1 ],
        h[ a ] = b;
      return h;
    };
    b.prototype.prependLink = function (a) {
      var b, h, c, f, d, g;
      f = this.shortlinks.slice();
      h = {};
      f.unshift(this._encodeShortlink(a));
      a = [];
      d = 0;
      for (g = f.length; d < g; d++) c = f[ d ], b = this._split(c), b = b[ 0 ], h[ b ] || (h[ b ] = !0, a.push(c));
      return this.saveLinks(a.slice(0, 10));
    };
    return b;
  }();
  App.UnauthHistory = new b;
}).call(this);
(function () {
  function b(a) {
    return $('#' + a);
  }

  function k(a) {
    var b = window.getSelection();
    a += b;
    var c = document.createElement('div');
    c.style.position = 'absolute';
    c.style.left = '-99999px';
    document.body.appendChild(c);
    c.innerHTML = a;
    b.selectAllChildren(c);
    window.setTimeout(function () {
      document.body.removeChild(c);
    }, 100);
  }

  function a(a, b) {
    var c = $('<span class="copied">' + a + '</span>');
    b.prepend(c);
    c.animate({ 'margin-top': -15, opacity: 0 }, function () {
      $(this).remove();
    });
  }

  function e(a) {
    return 'clicks' in a ? a.clicks + ' click' +
      (1 != a.clicks ? 's' : '') : '';
  }

  var h = 'oninput' in window ? 'input' : 'propertychange';
  FlashDetect.versionAtLeast(9);
  var c = -1 < navigator.platform.indexOf('Mac');
  c && $(document.body).addClass('is-mac');
  var f = function () {
  };
  f.prototype = {
    constructor: f.prototype.constructor,
    init: function (a, b) {
      BITLY.util.initClass.call(this, a);
      this.els.most_recent_link = $('#most_recent_link');
      this.els.shortened_info = $('#shortened_info');
      this.els.form = $(b.form);
      this.els.form_container = this.els.form.closest('#form_container');
      this.els.short_box =
        $(b.short_box);
      this.data.hash_data = {};
      this.data.results = [];
      this.data.pending_hashes = [];
      this.data.completed_hashes = {};
      this.data.initial_fetch_completed = !1;
      this.data.server_shorten_data = null;
      this.bindEvents().checkUrl().fetch();
    },
    bindEvents: function () {
      var a = this;
      this.els.short_box.bind(h, function (b) {
        a.checkUrl();
      });
      this.els.short_box.bind('paste', function (b) {
        setTimeout(function () {
          var b = a.els.short_box.val();
          BITLY.util.validateUrl(b) && a.els.form.submit();
        }, 15);
      });
      this.els.short_box.bind('keydown', function (b) {
        a.checkCopyKeyCombo(b) &&
        a.state.last_shorten && a.state.last_shorten === a.getSelectedText().toString() && a.copyAnimation && a.copyAnimation(a.state.last_shorten, a.els.form_container);
      });
      this.els.short_box.bind('copy', k.bind(null, ''));
      this.els.form_container.bind('click', function (b) {
        var c = $(b.target);
        c.is('a.close') ? (b.preventDefault(), delete a.state.last_shorten, a.els.short_box.val(''), a.checkUrl(), a.els.short_box.focus()) : c.is('.info') && (b.preventDefault(), a.els.short_box.focus().select());
      });
      $('#shortened_url, .short-url').live('click',
        function (a) {
          a.preventDefault();
        });
      return this;
    },
    setServerShortenData: function (a) {
      this.data.server_shorten_data = a;
      this.data.initial_fetch_completed && this.checkForServerShortenData();
    },
    checkForServerShortenData: function () {
      this.data.initial_fetch_completed = !0;
      this.data.server_shorten_data && (this.addNewShorten(this.data.server_shorten_data), this.data.server_shorten_data = null);
    },
    checkUrl: function (a) {
      var b = this.els.short_box.val(), c = this.state.last_shorten;
      a || this.state.is_shorten_active && (!b || !c || b !== c) ? (delete this.state.is_shorten_active,
        this.els.form_container.removeClass('shorten_active')) : this.state.is_shorten_active || b !== c || (this.state.is_shorten_active = !0, this.els.form_container.addClass('shorten_active'));
      return this;
    },
    fetchWithCookie: function (a) {
      a = a || {};
      var b = a.hashes_to_fetch || App.UnauthHistory.getHashes(), c = App.UnauthHistory.hashesToShortlinks();
      return App.UnauthHistory.shortlinks.length ? BITLY.ajax.POST({
        url: '/data/info', data: { hash: b, _xsrf: $.cookie.get('_xsrf') }, success: function (b) {
          b = b && b.data && b.data.info;
          _.each(b, function (a) {
            a.url =
              a.long_url;
            a.short_url = c[ a.user_hash ];
          });
          this.saveResults(b, a.insert_method);
          a.no_display || this.displayResults();
          a.no_stats || this.loadClicks();
          this.checkForServerShortenData();
        }, scope: this
      }) : this.checkForServerShortenData();
    },
    fetch: function (a) {
      return this.fetchWithCookie(a);
    },
    saveResults: function (a, b) {
      'none' != b && (b = 'prepend' === b ? 'unshift' : 'push');
      for (var c, f, e = 0, h = a.length; e < h; e++) if (f = a[ e ], !f.error) if (c = f.user_hash, this.data.hash_data.hasOwnProperty(c)) 'none' != b && (this.data.results = _.filter(this.data.results,
        function (a) {
          return a != c;
        }), $('#anon_history #' + c).remove(), this.data.results[ b ](c)), $.extend(this.data.hash_data[ c ].item, f); else {
        if ('none' != b) this.data.results[ b ](c);
        this.data.hash_data[ c ] = { item: f };
        this.data.pending_hashes.push(c);
      }
      return this;
    },
    displayResults: function (a, c) {
      'number' != typeof a && (a = Math.min(this.data.results.length, 3));
      c || this.el.empty();
      for (var f, e = [], h = 0, k = a; h < k; h++) f = this.shortenedLinkMarkup(this.data.hash_data[ this.data.results[ h ] ]), 0 == h && (f = f + '<div class="signup-promotion hide-on-new-shorten">' +
        this.postShortenPromoTemplate + '</div>'), this.el.append(f).hide().slideDown(), e.push(this.data.results[ h ]);
      h = 0;
      for (k = e.length; h < k; h++) this.attachCopyHandler(b(e[ h ]));
      this.checkResultLength();
      return this;
    },
    postShortenPromoTemplate: '<span class="signup-tagline">Keep track of all your links and how they travel across the web. </span><a href="/a/sign_up" class="sign-up-link sign-up-post-shorten">Sign Up For Free <i class="orange-arrow-small"></i></a><a class="header-login sign-up-post-shorten" href="/a/sign_up">Sign Up For Free</a>',
    bindClickTrackEventPostShorten: function () {
      $('.sign-up-post-shorten').live('click', function () {
        window.ga('send', 'event', 'link-click', 'hp-sign-up-shorten', 'HP Sign Up Post Shorten');
      });
    },
    displaySingleResult: function (a, c) {
      var f;
      f = this.shortenedLinkMarkup(this.data.hash_data[ this.data.results[ i ] ]);
      f = f + '<div class="signup-promotion">' + this.postShortenPromoTemplate + '</div>';
      this.els.most_recent_link.html(f);
      this.checkResultLength();
      var e = this;
      setTimeout(function () {
        e.attachCopyHandler(b(a));
      }, 1E3);
      return this;
    },
    checkResultLength: function () {
      this.data.results && (!this.state.one_or_more && this.data.results.length && (this.state.one_or_more = !0, $(document.body).addClass('one-or-more-links')), !this.state.ten_or_more && 10 <= this.data.results.length && (this.state.ten_or_more = !0, $(document.body).addClass('ten-or-more-links')));
    },
    massageShorten: function (a) {
      var b = a.url.split('/'), c = a.user_hash || b.pop(), b = b.pop();
      return { ts: a.ts, url: a.long_url, user_hash: c, domain: b, short_url: a.url };
    },
    addNewShorten: function (a) {
      a.ts = Math.floor(+new Date /
        1E3);
      a = this.massageShorten(a);
      App.UnauthHistory.prependLink(a);
      $(document.body).addClass('has-link');
      this.displayResults().saveResults([ a ], 'prepend').displaySingleResult(a.user_hash).slideFirst().loadClicks();
      this.attachCopyHandler(b($('#anon_history li').first().attr('id')));
      this.state.last_shorten = a.short_url;
      this.els.short_box.val(a.short_url);
      var c = this;
      setTimeout(function () {
        c.els.short_box.focus().select();
      }, 50);
      this.checkUrl();
      this.addNewShortenPreview(a);
      this.pollForLatest(a.short_url);
      return this;
    },
    addNewShortenPreview: function (a) {
      a = this.shortenActionsMarkup(a);
      var b = $('#form_container #shorten_actions');
      b.empty().append(a);
      this.attachCopyHandler(b);
    },
    pollForLatest: function (a, b) {
      var c = a.split('/').pop();
      b = b || 1;
      var f = this;
      1 === b && $.when(this.loadClicks(a));
      setTimeout(function () {
        if (!(3 < b || f.data.hash_data.hasOwnProperty(c) && f.data.hash_data[ c ].item && f.data.hash_data[ c ].item.hasOwnProperty('title'))) {
          var e = f.fetchWithCookie({
            perpage: 1,
            hashes_to_fetch: c,
            no_stats: !0,
            insert_method: 'none',
            no_display: !0
          }).deferred;
          b++;
          e.always(function () {
            f.pollForLatest(a, b);
          });
        }
      }, 3E3);
      return this;
    },
    clicksLoaded: function (a) {
      a = a.data.clicks || [];
      for (var b, c, f = 0, h = a.length; f < h; f++) if (c = a[ f ].user_hash, this.data.hash_data.hasOwnProperty(c) || (this.data.hash_data[ c ] = {}), this.data.hash_data[ c ].clicks = a[ f ].global_clicks, b = this.data.hash_data[ c ], b = e(b)) this.data.completed_hashes[ c ] = 1, b = b.split(' ')[ 0 ], $('#' + c + ' .info_page').html('<i class="default fa fa-bar-chart-o"></i> ' + this.commaSeparateNumber(b));
      this.cleanupPending();
      return this;
    },
    commaSeparateNumber: function (a) {
      for (; /(\d+)(\d{3})/.test(a.toString());) a = a.toString().replace(/(\d+)(\d{3})/, '$1,$2');
      return a;
    },
    loadClicks: function (a) {
      var b = {}, c = $.Deferred();
      if (a) {
        b = a.split('/').pop();
        if (this.data && this.data.hash_data && this.data.hash_data[ b ] && this.data.hash_data[ b ].hasOwnProperty('clicks')) return c.resolve({ data: 'hi' }), c;
        b = { hash: b };
      } else b = { hash: this.data.pending_hashes };
      a || this.data.pending_hashes.length ? (c.done(f.prototype.clicksLoaded), BITLY.ajax.POST({
        url: '/data/clicks', data: b,
        success: c.resolve, error: c.reject, scope: this
      }).promise) : c.resolve();
      return c.promise();
    },
    cleanupPending: function () {
      for (var a = [], b, c = 0, f = this.data.pending_hashes.length; c < f; c++) b = this.data.pending_hashes[ c ], this.data.completed_hashes[ b ] || a.push(b);
      this.data.pending_hashes = a;
      return this;
    },
    slideFirst: function () {
      this.els.most_recent_link.find('li').first().hide().css({ opacity: 0 }).slideDown(function () {
        $(this).animate({ opacity: 1 });
      });
      return this;
    },
    attachCopyHandler: function (b) {
      var c = b.find('.copy, #copy_shortlink'),
        f = b.find('.copy-input'), e = b.find('#shortened_url, .short-url'), h = f.val(), k = this;
      c.unbind('click').bind('click', function (c) {
        c.preventDefault();
        c.stopPropagation();
        document.queryCommandSupported('copy') ? (f.focus(), f.select(), document.execCommand('copy'), a(h, b)) : (k.selectText(e[ 0 ]), k.bindKeyPressAnimation(e, b, h));
      });
      return this;
    },
    checkCopyKeyCombo: function (a) {
      return a.which && 67 === a.which && (c ? a.metaKey : a.ctrlKey);
    },
    bindKeyPressAnimation: function (b, c, f) {
      var e = this;
      b.unbind('mouseup').bind('mouseup', function (a) {
        a.preventDefault();
        a.stopPropagation();
        setTimeout(function () {
          e.selectText(b[ 0 ]);
        }, 50);
      });
      b.unbind('keydown').bind('keydown', function (b) {
        if (e.checkCopyKeyCombo(b) && a) {
          a(f, c);
          var d = $(this);
          setTimeout(function () {
            d.blur();
          }, 100);
        }
      });
    },
    getSelectedText: function () {
      var a = '';
      window.getSelection ? a = window.getSelection() : document.getSelection ? a = target_el.getSelection() : document.selection && (a = target_el.selection.createRange().text);
      return a;
    },
    selectText: function (a) {
      a.focus();
      var b = window.getSelection && window.getSelection(), c = document.createRange &&
        document.createRange() || document.body.createTextRange && document.body.createTextRange();
      c.moveToElementText && c.select ? (c.moveToElementText(a), c.select()) : c.selectNodeContents && b.removeAllRanges && b.addRange ? (c.selectNodeContents(a), b.removeAllRanges(), b.addRange(c)) : b.getBaseAndExtent && b.setBaseAndExtent(a, 0, a, 1);
      $(a).addClass('selected');
      $(window).bind('mousedown.selected', function (a) {
        $(window).unbind('mousedown.selected');
        $('.selected').removeClass('selected');
      });
    },
    shortenActionsMarkup: function (a) {
      return '<span class="info">Paste another long URL to shorten it</span><a href="#" id="clear_active_shorten" class="close" title="Clear shorten box and preview">X</a><input class="copy-input" value="' +
        _.escape(a.short_url) + '" tabindex=-1 readonly /><a id="copy_shortlink" class="button primary hover" href="#">Copy</a>';
    },
    shortenedLinkMarkup: function (a) {
      var b = a.item;
      (e(a || {}) || 'Loading info').split(' ');
      a = b.short_url;
      var c = b.url || b.long_url, f = b.title ? b.title : c.replace(/https?\:\/\/(?:www\.)?/, '');
      b.title ? c.replace(/https?\:\/\/(?:www\.)?/, '') : c.replace(/https?\:\/\/(?:www\.)?([^\/]+)\/?.+/, '$1');
      return _.template('<li id="<%- user_hash %>" class="shortened_link" data-user_hash="<%- user_hash %>" data-short_link="<%- short_link %>"><div class="unauth-title"><a class="article-title" href="<%- long_url %>"><%- title %></a></div><div class="unauth-title-url"><a class="article-title smaller" href="<%- long_url %>"><%- striped_long_url %></a></div><div class="unauth_capsule clearfix"><a class="short-url" href="<%- short_link %>"><%- short_link %></a><input class="copy-input" value="' +
        _.escape(a) + '" tabindex=-1 readonly /><a href="#" class="copy button primary">Copy</a><a class="info_page" href="/<%- user_hash %>+"><i class="default fa fa-bar-chart-o"></i> 0</a></div></li>')({
        user_hash: b.user_hash,
        short_link: a,
        long_url: c,
        title: f,
        striped_long_url: c.replace(/https?\:\/\/(?:www\.)?/, '')
      });
    }
  };
  BITLY.unauth = BITLY.unauth || {};
  BITLY.unauth.history = new f;
  App.Dispatch.on('shorten:unauth', function (a) {
    a && BITLY.unauth.history.addNewShorten(a);
  });
  App.Dispatch.on('UI.Bitmark.Preview.Title:show',
    function (a) {
    });
  $(document).ready(function () {
    BITLY.unauth.history.bindClickTrackEventPostShorten();
  });
})();
(function () {
  function b(a, b) {
    if ('string' != typeof a) throw Error('Invalid name (' + a + ') passed to StatsDTimer');
    this.name = a;
    this.tracker = b;
    this.start();
  }

  function k(a) {
    if ('string' === typeof a) {
      var b = a;
      a = {};
      a[ b ] = 1;
    } else if ('object' === typeof a && a.slice) {
      for (var b = {}, c = 0, e = a.length; c < e; c++) b[ a[ c ] ] = 1;
      a = b;
    }
    return a;
  }

  function a(a) {
    if (this._can_send) {
      var b = this._queues[ a ], c = {}, e = this.API_PREFIX + a;
      if (!b) throw Error('Invalid Queue Name: ' + a + '- BITLY.tracking.statsd');
      if (b.length) {
        c = this._queues[ a ];
        a = {};
        for (var b = {},
               h, k = 0; c.length;) for (stat in b = c.pop(), b) h = this.STAT_PREFIX + (this.STAT_PREFIX ? this.PREFIX_SEPARATOR : '') + stat, k = a[ h ] || 0, a[ h ] = k + b[ stat ];
        c = a;
        a = $.Deferred();
        $.ajax({ type: 'POST', url: e, data: c, timeout: this.TIMEOUT, success: a.resolve, error: a.reject });
        return a.promise();
      }
    }
  }

  window.BITLY || (window.BITLY = {});
  BITLY.tracking || (BITLY.tracking = {});
  if (!BITLY.tracking.statsd || !BITLY.tracking.statsd.prototype) {
    var e = '';
    if (window._DEFAULT_STATSD_NAMESPACE) {
      e = window._DEFAULT_STATSD_NAMESPACE;
      try {
        window._DEFAULT_STATSD_NAMESPACE =
          null, delete window._DEFAULT_STATSD_NAMESPACE;
      } catch (h) {
        console.log('an error occurred deleting the default statsd namespace');
      }
    }
    var c = function (a) {
      a = a || {};
      this._can_send = !a.disable_sending;
      this._queues = { incr: [], timing: [] };
      this._history = { incr: {}, timing: {} };
      for (var b = [ 'timeout', 'api_prefix', 'stat_prefix', 'prefix_separator' ], c = 0, e = b.length; c < e; c++) {
        var h = b[ c ];
        h in a && (this[ h.toUpperCase() ] = a[ h ]);
      }
    };
    c.prototype = {
      constructor: c.prototype.constructor,
      TIMEOUT: 500,
      API_PREFIX: '/data/statsd/',
      STAT_PREFIX: '',
      PREFIX_SEPARATOR: '.',
      incr: function (b) {
        var c = b = k(b);
        for (stat in c) this._history.hasOwnProperty('incr') && (this._history.incr[ stat ] = !0);
        this._queues.incr.push(b);
        return a.call(this, 'incr');
      },
      incrOnce: function (a) {
        a = k(a);
        var b = !1, c = {};
        for (stat in a) this._history.hasOwnProperty('incr') && !this._history.incr.hasOwnProperty(stat) && (c[ stat ] = a[ stat ], b = !0);
        if (a = b ? c : null) return this.incr(a);
      },
      executeIncrOnLinkClick: function (a, b) {
        b.preventDefault();
        this.enableSending();
        var c = $(b.currentTarget).attr('href');
        this.incr(a).always(function () {
          location.href =
            c;
        });
      },
      incrOnLinkClick: function (a, b) {
        var c = this.executeIncrOnLinkClick.bind(this, b);
        if ($.fn.live) $(a).live('click.incr', c); else $(document).on('click.incr', a, c);
      },
      timing: function (b, c) {
        if ('string' === typeof b && 'number' === typeof c) {
          var g = b;
          b = {};
          b[ g ] = c;
        }
        this._queues.timing.push(b);
        a.call(this, 'timing');
      },
      getTimer: function (a) {
        return new b(a, this);
      },
      flushQueues: function () {
        var b = this.isSendingEnabled();
        this.enableSending();
        a.call(this, 'incr');
        a.call(this, 'timing');
        b || this.disableSending();
      },
      enableSending: function () {
        this._can_send =
          !0;
      },
      disableSending: function () {
        this._can_send = !1;
      },
      isSendingEnabled: function () {
        return this._can_send;
      },
      setStatPrefix: function (a, b) {
        b && e && (a = e + this.PREFIX_SEPARATOR + a);
        this.STAT_PREFIX = a;
      },
      clone: function (a) {
        return new c(a);
      }
    };
    b.prototype = {
      constructor: b.prototype.constructor, start: function () {
        this.start_time = +new Date;
        return this;
      }, stop: function () {
        this.end_time = +new Date;
        this.diff = 0;
        this.start_time && this.end_time >= this.start_time && (this.diff = this.end_time - this.start_time);
        this.tracker.timing(this.name, this.diff);
        return this;
      }
    };
    BITLY.tracking.statsd = new c;
  }
})();
(function () {
  var b = {}, k = {};
  BITLY.tracking.statsd.constructor.prototype.incrBasedOnFeatureFlag = function (a, e) {
    if (BITLY.util && BITLY.util.isFeatureFlagEnabled) {
      if (BITLY.util.isFeatureFlagEnabled(a)) return b.hasOwnProperty(a) || (b[ a ] = this.clone({ stat_prefix: a + '.' + this.STAT_PREFIX })), b[ a ].incr(e);
      k.hasOwnProperty(a) || (k[ a ] = this.clone({ stat_prefix: 'no_' + a + '.' + this.STAT_PREFIX }));
      return k[ a ].incr(e);
    }
  };
  BITLY.tracking.statsd.constructor.prototype.incrOnceBasedOnFeatureFlag = function (a, e) {
    if (BITLY.util && BITLY.util.isFeatureFlagEnabled) {
      if (BITLY.util.isFeatureFlagEnabled(a)) return b.hasOwnProperty(a) ||
      (b[ a ] = this.clone({ stat_prefix: a + '.' + this.STAT_PREFIX })), b[ a ].incrOnce(e);
      k.hasOwnProperty(a) || (k[ a ] = this.clone({ stat_prefix: 'no_' + a + '.' + this.STAT_PREFIX }));
      return k[ a ].incrOnce(e);
    }
  };
})();
(function (b) {
  function k(b) {
    clearTimeout(m);
    c ? ('undefined' === b && (b = 400), c.animate({ top: -1 * l }, b, function () {
      var a = c.data('obj');
      a.onClose && a.onClose.call({ el: c, hide: k }, a.data);
      c.remove();
      g.remove();
      c = null;
    })) : a();
  }

  function a() {
    var a = f.shift();
    if ('undefined' !== typeof a) {
      var b = '', d = ' blue';
      a.type && 'error' === a.type && (b += ' error', d = '');
      a.type && 'confirm' === a.type && (b += ' confirm');
      a.type && 'success' === a.type && (b += ' success');
      a.noclose && (b += ' noclose');
      c = $('<p></p>');
      c.addClass(b);
      'text' == a.contentType ? c.text(a.content) :
        c.html(a.content);
      a.noclose || $('<a href="#"> </a>').addClass('close' + d).appendTo(c);
      c.data('obj', a);
      c.hover(function () {
        e();
      }, function () {
        h();
      });
      a.css && c.css(a.css);
      g || (g = $('<div id="notification_center"></div>'));
      g.appendTo(document.body).append(c.css({ visibility: 'hidden' }));
      l = g.height();
      c.css({ visibility: 'visible', top: -1 * l }).animate({ top: '0' }, function () {
        a.onLoad && a.onLoad.call({ el: c, hide: k }, a.data);
      });
      u = !1;
      h();
    }
  }

  function e(a, b) {
    'function' === typeof a && 'undefined' === typeof b && (b = a, a = !1);
    a && (u = !0);
    clearTimeout(m);
    b && b.call({ el: c });
  }

  function h(a, b) {
    'function' === typeof a && 'undefined' === typeof b && (b = a, a = !1);
    if (!u || a) u = !1, clearTimeout(m), c && -1 < c.data('obj').dur && (m = setTimeout(function () {
      k();
    }, c.data('obj').dur)), b && b.call({ el: c });
  }

  var c = null, f = [], d = { dur: 5E3 }, g = null, l = 0, m = null, u = !1;
  $(document.body).bind('click', function (a) {
    $(a.target).is('#notification_center a.close') && (a.preventDefault(), k());
  });
  b.notify = function (a, b) {
    var g = $.extend({}, d);
    b = $.extend(g, b || {});
    b.content = a;
    b.contentType = b.contentType || 'text';
    f.push(b);
    c && !b.force || k(b.dur);
  };
  b.notify.pause = e;
  b.notify.resume = h;
  b.notify.hide = k;
  b.notify.defaults = d;
})(window);
(function (b) {
  window.PromoModule = {
    props: {
      avatarButton: b('#promo-avatar'),
      closeButton: b('#promo-close'),
      description: b('#promo-description'),
      bitlink: b('#promo-bitlink'),
      header: b('#promo-header'),
      bubble: b('#promo-speech-bubble'),
      opened: !0
    }, init: function () {
      this.bindEvents();
    }, bindEvents: function () {
      this.props.avatarButton.click(function () {
        this.press(this.props.opened);
      }.bind(this));
      this.props.closeButton.click(function () {
        this.press(this.props.opened);
      }.bind(this));
      this.props.bubble.hover(function () {
        this.reveal(this.props.closeButton);
      }.bind(this));
    },
    press: function (b) {
      !0 === b ? (this.props.bubble.addClass('hide-promo'), this.props.avatarButton.addClass('hide-promo'), this.props.opened = !1) : (this.props.bubble.removeClass('hide-promo'), this.props.opened = !0);
      this.props.closeButton.addClass('hide-promo');
    }, trackConversion: function (b) {
    }, reveal: function (b) {
      b.removeClass('hide-promo');
    }, hide: function (b) {
      b.addClass('hide-promo');
    }
  };
})(jQuery);
(function (b, k, a, e) {
  function h(a, d) {
    this.element = a;
    this.options = b.extend({}, c, d);
    this._defaults = c;
    this._name = 'carousel';
    this.init();
  }

  var c = {
    speed: 5E3,
    class_active: 'active',
    class_inactive: 'inactive',
    slide_animate_callback: function () {
    },
    navigation_option_previous: null,
    navigation_option_next: null,
    pagination: !1,
    pagination_navigation: !1,
    child_selector: null
  };
  b.fn.carousel = function (a) {
    return this.each(function () {
      b.data(this, 'plugin_carousel') || b.data(this, 'plugin_carousel', new h(b(this), a));
    });
  };
  h.prototype.init =
    function () {
      this.carousel_children = [];
      this.carousel_slides = [];
      this.carousel_slides_index_previous = this.carousel_slides_index_active = this.carousel_slides_count = 0;
      this.carousel_slides_direction;
      this.carousel_pagination_items = [];
      this.carousel_clock;
      this.carousel_children = null == this.options.child_selector ? this.element.children() : this.element.find(this.options.child_selector);
      var a = this;
      this.carousel_children.each(function (c) {
        b(this).hasClass('static') || (a.carousel_slides.push(b(this)), a.carousel_slide_animate_out(a.carousel_slides_count),
          b(this).find('input').focus(function () {
            a.carousel_clock_stop();
          }).blur(function () {
            a.carousel_clock_start();
          }), b(this).data('slide-index', a.carousel_slides_count), 1 == a.options.pagination_navigation && b(this).click(function () {
          a.carousel_slide_animate_to(b(this).data('slide-index'));
        }), a.carousel_slides_count++);
      });
      if (1 == this.carousel_slides.length) return !1;
      null != this.options.navigation_option_previous && this.options.navigation_option_previous.click(function (b) {
        b.preventDefault();
        a.carousel_slide_animate_direction('prev');
      });
      null != this.options.navigation_option_next && this.options.navigation_option_next.click(function (b) {
        b.preventDefault();
        a.carousel_slide_animate_direction('next');
      });
      if (1 == this.options.pagination) {
        var c = b('<ul class=\'carousel-pagination\'></ul>');
        c.appendTo(this.element);
        for (var g = 0; g < this.carousel_slides.length; g++) {
          var e = b('<li><a href=\'\' data-slide-index=\'' + g + '\'><span>' + g + '</span></a></li>');
          e.appendTo(c);
          e.find('a').click(function (b) {
            b.preventDefault();
            a.carousel_slide_animate_to(this.getAttribute('data-slide-index'));
          });
          this.carousel_pagination_items.push(e);
        }
      }
      this.carousel_slide_animate_in(this.carousel_slides_index_active);
      this.options.slide_animate_callback(this.carousel_slides[ this.carousel_slides_index_active ]);
      this.carousel_clock_start();
    };
  h.prototype.carousel_clock_start = function () {
    var a = this;
    this.carousel_clock = setInterval(function (b) {
      a.carousel_slide_animate_direction('next');
    }, this.options.speed);
  };
  h.prototype.carousel_clock_stop = function () {
    clearInterval(this.carousel_clock);
  };
  h.prototype.carousel_slide_animate_in =
    function (a) {
      this.carousel_slides[ a ].removeClass(this.options.class_inactive);
      this.carousel_slides[ a ].addClass(this.options.class_active);
      this.carousel_slide_update_neighbors();
      this.carousel_pagination_items[ a ] && this.carousel_pagination_items[ a ].addClass(this.options.class_active);
    };
  h.prototype.carousel_slide_animate_out = function (a) {
    this.carousel_slides[ a ].removeClass(this.options.class_active);
    this.carousel_slides[ a ].addClass(this.options.class_inactive);
    this.carousel_pagination_items[ a ] && this.carousel_pagination_items[ a ].removeClass(this.options.class_active);
  };
  h.prototype.carousel_slide_animate_to = function (a) {
    this.carousel_clock_stop();
    if ('1' == this.carousel_slides.length) return !1;
    this.carousel_slides_index_previous = this.carousel_slides_index_active;
    this.carousel_slides_index_active = a;
    this.carousel_slide_animate_out(this.carousel_slides_index_previous);
    this.carousel_slide_animate_in(this.carousel_slides_index_active);
    this.options.slide_animate_callback(this.carousel_slides[ this.carousel_slides_index_active ]);
    this.carousel_clock_start();
  };
  h.prototype.carousel_slide_update_neighbors =
    function () {
      this.carousel_slides_neighbor_count_before = Math.floor((this.carousel_slides_count - 1) / 2);
      this.carousel_slides_neighbor_count_after = Math.ceil((this.carousel_slides_count - 1) / 2);
      for (var a = /\bbefore-.+?\b/g, b = /\bafter-.+?\b/g, c = 0; c < this.carousel_slides_count; c++) {
        var e = '';
        c < this.carousel_slides_index_active ? (e = this.carousel_slides_index_active - c, e <= this.carousel_slides_neighbor_count_before ? e = 'before-' + e : (e = this.carousel_slides_neighbor_count_after - (e - this.carousel_slides_neighbor_count_before -
          1), e = 'after-' + e)) : c > this.carousel_slides_index_active && (e = -1 * (this.carousel_slides_index_active - c), e <= this.carousel_slides_neighbor_count_after ? e = 'after-' + e : (e = this.carousel_slides_neighbor_count_before - (e - this.carousel_slides_neighbor_count_after - 1), e = 'before-' + e));
        this.carousel_slides[ c ][ 0 ].className = this.carousel_slides[ c ][ 0 ].className.replace(a, '');
        this.carousel_slides[ c ][ 0 ].className = this.carousel_slides[ c ][ 0 ].className.replace(b, '');
        this.carousel_slides[ c ].addClass(e);
      }
    };
  h.prototype.carousel_slide_animate_direction =
    function (a) {
      this.carousel_clock_stop();
      this.carousel_slides_index_previous = this.carousel_slides_index_active;
      this.carousel_slides_direction = a;
      if ('1' == this.carousel_slides.length) return !1;
      'next' == a ? (this.carousel_slides_index_active++, this.carousel_slides_index_active == this.carousel_slides_count && (this.carousel_slides_index_active = 0)) : 'prev' == a ? (this.carousel_slides_index_active--, 0 > this.carousel_slides_index_active && (this.carousel_slides_index_active = this.carousel_slides_count - 1)) : (this.carousel_slides_index_active =
        a, this.carousel_slides_index_previous < this.carousel_slides_index_active ? this.carousel_slides_direction = 'next' : this.carousel_slides_index_previous > this.carousel_slides_index_active && (this.carousel_slides_direction = 'prev'));
      this.carousel_slide_animate_out(this.carousel_slides_index_previous);
      this.carousel_slide_animate_in(this.carousel_slides_index_active);
      this.options.slide_animate_callback(this.carousel_slides[ this.carousel_slides_index_active ]);
      this.carousel_clock_start();
    };
})(jQuery, window, document);
(function (b, k, a) {
  b.fn.backstretch = function (d, f) {
    d !== a && 0 !== d.length || b.error('No images were supplied for Backstretch');
    0 === b(k).scrollTop() && k.scrollTo(0, 0);
    return this.each(function () {
      var a = b(this), e = a.data('backstretch');
      if (e) {
        if ('string' == typeof d && 'function' == typeof e[ d ]) {
          e[ d ](f);
          return;
        }
        f = b.extend(e.options, f);
        e.destroy(!0);
      }
      e = new c(this, d, f);
      a.data('backstretch', e);
    });
  };
  b.backstretch = function (a, c) {
    return b('body').backstretch(a, c).data('backstretch');
  };
  b.expr[ ':' ].backstretch = function (c) {
    return b(c).data('backstretch') !==
      a;
  };
  b.fn.backstretch.defaults = { centeredX: !0, centeredY: !0, duration: 5E3, fade: 0 };
  var e = {
    left: 0,
    top: 0,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    zIndex: -999999
  }, h = {
    position: 'absolute',
    display: 'none',
    margin: 0,
    padding: 0,
    border: 'none',
    width: 'auto',
    height: 'auto',
    maxHeight: 'none',
    maxWidth: 'none',
    zIndex: -999999
  }, c = function (a, c, d) {
    this.options = b.extend({}, b.fn.backstretch.defaults, d || {});
    this.images = b.isArray(c) ? c : [ c ];
    b.each(this.images, function () {
      b('<img />')[ 0 ].src = this;
    });
    this.isBody = a ===
      document.body;
    this.$container = b(a);
    this.$root = this.isBody ? f ? b(k) : b(document) : this.$container;
    a = this.$container.children('.backstretch').first();
    this.$wrap = a.length ? a : b('<div class="backstretch"></div>').css(e).appendTo(this.$container);
    this.isBody || (a = this.$container.css('position'), c = this.$container.css('zIndex'), this.$container.css({
      position: 'static' === a ? 'relative' : a,
      zIndex: 'auto' === c ? 0 : c,
      background: 'none'
    }), this.$wrap.css({ zIndex: -999998 }));
    this.$wrap.css({ position: this.isBody && f ? 'fixed' : 'absolute' });
    this.index = 0;
    this.show(this.index);
    b(k).on('resize.backstretch', b.proxy(this.resize, this)).on('orientationchange.backstretch', b.proxy(function () {
      this.isBody && 0 === k.pageYOffset && (k.scrollTo(0, 1), this.resize());
    }, this));
  };
  c.prototype = {
    resize: function () {
      try {
        var a = { left: 0, top: 0 }, b = this.isBody ? this.$root.width() : this.$root.innerWidth(), c = b,
          d = this.isBody ? k.innerHeight ? k.innerHeight : this.$root.height() : this.$root.innerHeight(),
          f = c / this.$img.data('ratio'), e;
        f >= d ? (e = (f - d) / 2, this.options.centeredY && (a.top = '-' +
          e + 'px')) : (f = d, c = f * this.$img.data('ratio'), e = (c - b) / 2, this.options.centeredX && (a.left = '-' + e + 'px'));
        this.$wrap.css({ width: b, height: d }).find('img:not(.deleteable)').css({ width: c, height: f }).css(a);
      } catch (g) {
      }
      return this;
    }, show: function (a) {
      if (!(Math.abs(a) > this.images.length - 1)) {
        var c = this, d = c.$wrap.find('img').addClass('deleteable'), f = { relatedTarget: c.$container[ 0 ] };
        c.$container.trigger(b.Event('backstretch.before', f), [ c, a ]);
        this.index = a;
        clearInterval(c.interval);
        c.$img = b('<img />').css(h).bind('load', function (e) {
          var g =
            this.width || b(e.target).width();
          e = this.height || b(e.target).height();
          b(this).data('ratio', g / e);
          b(this).fadeIn(c.options.speed || c.options.fade, function () {
            d.remove();
            c.paused || c.cycle();
            b([ 'after', 'show' ]).each(function () {
              c.$container.trigger(b.Event('backstretch.' + this, f), [ c, a ]);
            });
          });
          c.resize();
        }).appendTo(c.$wrap);
        c.$img.attr('src', c.images[ a ]);
        return c;
      }
    }, next: function () {
      return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0);
    }, prev: function () {
      return this.show(0 === this.index ? this.images.length -
        1 : this.index - 1);
    }, pause: function () {
      this.paused = !0;
      return this;
    }, resume: function () {
      this.paused = !1;
      this.next();
      return this;
    }, cycle: function () {
      1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(b.proxy(function () {
        this.paused || this.next();
      }, this), this.options.duration));
      return this;
    }, destroy: function (a) {
      b(k).off('resize.backstretch orientationchange.backstretch');
      clearInterval(this.interval);
      a || this.$wrap.remove();
      this.$container.removeData('backstretch');
    }
  };
  var f, d = navigator.userAgent,
    g = navigator.platform, l = d.match(/AppleWebKit\/([0-9]+)/), l = !!l && l[ 1 ], m = d.match(/Fennec\/([0-9]+)/),
    m = !!m && m[ 1 ], u = d.match(/Opera Mobi\/([0-9]+)/), p = !!u && u[ 1 ], B = d.match(/MSIE ([0-9]+)/),
    B = !!B && B[ 1 ];
  f = !((-1 < g.indexOf('iPhone') || -1 < g.indexOf('iPad') || -1 < g.indexOf('iPod')) && l && 534 > l || k.operamini && '[object OperaMini]' === {}.toString.call(k.operamini) || u && 7458 > p || -1 < d.indexOf('Android') && l && 533 > l || m && 6 > m || 'palmGetResource' in k && l && 534 > l || -1 < d.indexOf('MeeGo') && -1 < d.indexOf('NokiaBrowser/8.5.0') || B && 6 >= B);
})(jQuery,
  window);
(function (b) {
  function k(b) {
    var h = [], c = this, f;
    this.setValue = function (c) {
      for (var f = c.toString().split(''), k = 0; k < f.length; k++) h.length == k && (c = new a(f[ k ]), h.push(c), b.append(c.getElement()), 0 != k && k < f.length - 1 && 0 == (f.length - k - 1) % 3 && b.append('<div class="page-home-link-shortener-counter-number-separator">,</div>')), h[ k ].setValue(f[ k ]);
      return this;
    };
    this.count = function () {
      c.setValue(c.getBitlinkCount());
      f = setTimeout(function () {
        c.count();
      }, Math.round(2E3 * Math.random() + 1E3));
      return this;
    };
    this.stop = function () {
      clearInterval(f);
      return this;
    };
    this.getBitlinkCount = function () {
      return Math.floor(19116701100 + 13004198 * ((new Date).getTime() - 14114304E5) / 864E5);
    };
  }

  function a(a) {
    var h = a, c;
    this.build = function () {
      c = b('<div class="page-home-link-shortener-counter-number"></div>');
      c.append(this.buildNumberPart([ 'page-home-link-shortener-counter-number-card-top', 'page-home-link-shortener-counter-number-card-to' ]));
      c.append(this.buildNumberPart([ 'page-home-link-shortener-counter-number-card-bottom', 'page-home-link-shortener-counter-number-card-to' ]));
      c.append(this.buildNumberPart([ 'page-home-link-shortener-counter-number-card-top', 'page-home-link-shortener-counter-number-card-from' ]));
      c.append(this.buildNumberPart([ 'page-home-link-shortener-counter-number-card-bottom', 'page-home-link-shortener-counter-number-card-from' ]));
      c.find('.page-home-link-shortener-counter-number-card-value').text(h);
      return this;
    };
    this.buildNumberPart = function (a) {
      return b('<span class="page-home-link-shortener-counter-number-card ' + a.join(' ') + '"></div>').append('<span class="page-home-link-shortener-counter-number-card-value"></span>').append('<span class="page-home-link-shortener-counter-number-card-shadow"></span>');
    };
    this.setValue = function (a) {
      a != h && setTimeout(function () {
        var b = c.find('.page-home-link-shortener-counter-number-card-from'),
          e = c.find('.page-home-link-shortener-counter-number-card-to:not(.n)');
        b.addClass('page-home-link-shortener-counter-number-card-hide').removeClass('page-home-link-shortener-counter-number-card-from').addClass('page-home-link-shortener-counter-number-card-to').removeClass('page-home-link-shortener-counter-number-card-hide').addClass('n').find('.page-home-link-shortener-counter-number-card-value').text(a);
        e.addClass('page-home-link-shortener-counter-number-card-hide').addClass('page-home-link-shortener-counter-number-card-from').removeClass('page-home-link-shortener-counter-number-card-to').removeClass('page-home-link-shortener-counter-number-card-hide').find('.page-home-link-shortener-counter-number-card-value').text(h);
        setTimeout(function () {
          e.find('.page-home-link-shortener-counter-number-card-value').text(h);
        }, 500);
        h = a;
        c.find('.n').removeClass('n');
      }, Math.round(500 * Math.random() + 1E3));
    };
    this.getElement =
      function () {
        return c;
      };
    this.build();
  }

  jQuery.fn.bitlyCount = function (a) {
    var h;
    this.each(function () {
      h = (new k(b(this))).count();
      b('input,textarea').focus(function () {
        h.stop();
      }).blur(function () {
        h.count();
      });
    });
    return this;
  };
})(jQuery);
var VideoPlayer = {
  init: function () {
    this.addClickEvents();
  }, addClickEvents: function () {
    $('.play').each(function () {
      var b = $(this);
      b.closest('.video-player').click(function () {
        var k = $(this);
        b.addClass('hide');
        window.ga('send', 'event', 'play-video', 'notification-play-video', 'Notification Play Video');
        b.data('videoid') ? k.html('<iframe src="https://player.vimeo.com/video/' + b.data('videoid') + '?autoplay=1" frameborder="0" webkitallowfullscreen autoplay mozallowfullscreen allowfullscreen></iframe>') : k.html('<iframe src="https://player.vimeo.com/video/170191890?autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
      });
    });
  },
  pauseAll: function () {
    $('iframe').each(function () {
      if ($(this).attr('autoplay')) {
        var b = new Vimeo.Player($(this)[ 0 ]);
        b && b.pause();
      }
    });
  }
};
VideoPlayer.init();
(function () {
  var b;
  b = BITLY.tracking.statsd;
  App.Dispatch.on('UI.Shortlink:copy', function () {
    return b.incrOnce('url_copy');
  });
  App.Dispatch.on('UI.Shortlink:customize', function () {
    return b.incrOnce('url_customize');
  });
  App.Dispatch.on('UI.BitmarkList:sort', function (k) {
    var a;
    a = [ 'bitmark_list.sorted' ];
    k && a.push('bitmark_list.sorted_on.' + k);
    return b.incr(a);
  });
  App.Dispatch.on('App.Bitmark:saveExisting', function () {
    return b.incr('bitmark.resave');
  });
  App.Dispatch.on('App.Bitmark:create', function () {
    return b.incr([ 'bitmark.created',
      'link_shorten' ]);
  });
  App.Dispatch.on('shorten:unauth', function () {
    return b.incr([ 'link_shorten', 'link_shorten_unauth' ]);
  });
  App.Dispatch.on('App.Bitmark:socialShare', function () {
    return b.incr('bitmark.shared_to_social');
  });
  App.Dispatch.on('App.Bitmark:emailShare', function () {
    return b.incr('bitmark.shared_to_email');
  });
  App.Dispatch.on('UI.Bitmarks.Search:search', function () {
    return b.incrOnce('search.search_used');
  });
  App.Dispatch.on('UI.Bitmarks.Search:filter', function () {
    return b.incrOnce('search.filter_used');
  });
  App.Dispatch.on('UI.Bitmarks.Search:paginate', function () {
    return b.incrOnce('search.pagination_used');
  });
  App.Dispatch.on('UI.Bitmarks:bulkPrivacy', function () {
    return b.incrOnce('bulk.privacy');
  });
  App.Dispatch.on('UI.Bitmarks:bulkArchive', function () {
    return b.incrOnce('bulk.archive');
  });
  App.Dispatch.on('UI.Bitmarks.bulkUnarchive', function () {
    return b.incrOnce('bulk.unarchive');
  });
  App.Dispatch.on('UI.Bitmarklet:install', function () {
    return b.incrOnce('bitmarklet_install');
  });
  App.Dispatch.on('UI.Insight.Share:click',
    function () {
      return b.incrOnce('insight.share_clicked');
    });
  App.Dispatch.on('UI.InfoPage.Title:click', function () {
    return b.incrOnce('title_clicked');
  });
  App.Dispatch.on('UI.InfoPage.LongURL:click', function () {
    return b.incrOnce('long_url_clicked');
  });
  App.Dispatch.on('UI.InfoPage.ShortLinkTextField:click', function () {
    return b.incrOnce('short_link_text_field_clicked');
  });
  App.Dispatch.on('UI.InfoPage.Tweet:click', function (k) {
    return b.incrOnce('tweet_' + k);
  });
  App.Dispatch.on('UI.InfoPage.ReferrerInfo:click', function (k) {
    return b.incrOnce('referrer_info_clicked.' +
      k);
  });
  App.Dispatch.on('UI.InfoPage.ViewReferrerSubDomain:click', function (k) {
    return b.incrOnce('referrer_subdomain_clicked.' + k);
  });
  App.Dispatch.on('UI.InfoPage.GraphUserToggle:click', function () {
    return b.incrOnce('graph_user_toggle_clicked');
  });
  App.Dispatch.on('UI.InfoPage.GraphGlobalToggle:click', function () {
    return b.incrOnce('graph_global_toggle_clicked');
  });
  App.Dispatch.on('UI.InfoPage.time_selector:change', function (k) {
    if (k.allow_instrumentation) return b.incrOnce('time_selector_option_changed.' + k.period);
  });
  App.Dispatch.on('UI.InfoPage.map:hover', function () {
    return b.incrOnce('map_hovered');
  });
  App.Dispatch.on('UI.InfoPage.map:click', function () {
    return b.incrOnce('map_clicked');
  });
  App.Dispatch.on('UI.InfoPage.graph.data:hover', function () {
    return b.incrOnce('graph_data_bar_hovered');
  });
  App.Dispatch.on('App.Overview.ClickSummary:error', function () {
    return b.incr('click_summary_error');
  });
  App.Dispatch.on('App.Overview.ClickSummary:no_data', function () {
    return b.incr('click_summary_no_data');
  });
  App.Dispatch.on('App.Overview.TopLinks:error',
    function () {
      return b.incr('top_links_error');
    });
  App.Dispatch.on('App.Overview.TopLinks:no_data', function () {
    return b.incr('top_links_no_data');
  });
  App.Dispatch.on('App.Overview.ClickTrends:error', function () {
    return b.incr('trends_error');
  });
  App.Dispatch.on('App.Overview.ClickTrends:no_data', function () {
    return b.incr('trends_no_data');
  });
}).call(this);
(function (b) {
  function k() {
    if (b.fn.ajaxSubmit.debug) {
      var a = '[jquery.form] ' + Array.prototype.join.call(arguments, '');
      window.console && window.console.log ? window.console.log(a) : window.opera && window.opera.postError && window.opera.postError(a);
    }
  }

  b.fn.ajaxSubmit = function (a) {
    function e() {
      function c() {
        var a = l.attr('target'), f = l.attr('action');
        e.setAttribute('target', h);
        'POST' != e.getAttribute('method') && e.setAttribute('method', 'POST');
        e.getAttribute('action') != g.url && e.setAttribute('action', g.url);
        g.skipEncodingOverride ||
        l.attr({ encoding: 'multipart/form-data', enctype: 'multipart/form-data' });
        g.timeout && setTimeout(function () {
          A = !0;
          d();
        }, g.timeout);
        var k = [];
        try {
          if (g.extraData) for (var m in g.extraData) k.push(b('<input type="hidden" name="' + m + '" value="' + g.extraData[ m ] + '" />').appendTo(e)[ 0 ]);
          u.appendTo('body');
          u.data('form-plugin-onload', d);
          e.submit();
        } finally {
          e.setAttribute('action', f), a ? e.setAttribute('target', a) : l.removeAttr('target'), b(k).remove();
        }
      }

      function d() {
        if (!P) {
          u.removeData('form-plugin-onload');
          var a = !0;
          try {
            if (A) throw'timeout';
            F = z.contentWindow ? z.contentWindow.document : z.contentDocument ? z.contentDocument : z.document;
            var c = 'xml' == g.dataType || F.XMLDocument || b.isXMLDoc(F);
            k('isXml=' + c);
            if (!c && window.opera && (null == F.body || '' == F.body.innerHTML) && --R) {
              k('requeing onLoad callback, DOM not available');
              setTimeout(d, 250);
              return;
            }
            P = !0;
            t.responseText = F.documentElement ? F.documentElement.innerHTML : null;
            t.responseXML = F.XMLDocument ? F.XMLDocument : F;
            t.getResponseHeader = function (a) {
              return { 'content-type': g.dataType }[ a ];
            };
            var e = /(json|script)/.test(g.dataType);
            if (e || g.textarea) {
              var h = F.getElementsByTagName('textarea')[ 0 ];
              if (h) t.responseText = h.value; else if (e) {
                var l = F.getElementsByTagName('pre')[ 0 ];
                l && (t.responseText = l.innerHTML);
              }
            } else 'xml' != g.dataType || t.responseXML || null == t.responseText || (t.responseXML = f(t.responseText));
            v = b.httpData(t, g.dataType);
          } catch (m) {
            k('error caught:', m), a = !1, t.error = m, b.handleError(g, t, 'error', m);
          }
          a && (g.success.call(g.context, v, 'success', t), G && b.event.trigger('ajaxSuccess', [ t, g ]));
          G && b.event.trigger('ajaxComplete', [ t, g ]);
          G && !--b.active &&
          b.event.trigger('ajaxStop');
          g.complete && g.complete.call(g.context, t, a ? 'success' : 'error');
          setTimeout(function () {
            u.removeData('form-plugin-onload');
            u.remove();
            t.responseXML = null;
          }, 100);
        }
      }

      function f(a, b) {
        window.ActiveXObject ? (b = new ActiveXObject('Microsoft.XMLDOM'), b.async = 'false', b.loadXML(a)) : b = (new DOMParser).parseFromString(a, 'text/xml');
        return b && b.documentElement && 'parsererror' != b.documentElement.tagName ? b : null;
      }

      var e = l[ 0 ];
      if (b(':input[name=submit],:input[id=submit]', e).length) alert('Error: Form elements must not have name or id of "submit".');
      else {
        var g = b.extend(!0, {}, b.ajaxSettings, a);
        g.context = g.context || g;
        var h = 'jqFormIO' + (new Date).getTime(), m = '_' + h;
        window[ m ] = function () {
          var a = u.data('form-plugin-onload');
          if (a) {
            a();
            window[ m ] = void 0;
            try {
              delete window[ m ];
            } catch (b) {
            }
          }
        };
        var u = b('<iframe id="' + h + '" name="' + h + '" src="' + g.iframeSrc + '" onload="window[\'_\'+this.id]()" />'),
          z = u[ 0 ];
        u.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
        var t = {
          aborted: 0,
          responseText: null,
          responseXML: null,
          status: 0,
          statusText: 'n/a',
          getAllResponseHeaders: function () {
          },
          getResponseHeader: function () {
          },
          setRequestHeader: function () {
          },
          abort: function () {
            this.aborted = 1;
            u.attr('src', g.iframeSrc);
          }
        }, G = g.global;
        G && !b.active++ && b.event.trigger('ajaxStart');
        G && b.event.trigger('ajaxSend', [ t, g ]);
        if (g.beforeSend && !1 === g.beforeSend.call(g.context, t, g)) g.global && b.active--; else if (!t.aborted) {
          var P = !1, A = 0, K = e.clk;
          if (K) {
            var n = K.name;
            n && !K.disabled && (g.extraData = g.extraData || {}, g.extraData[ n ] = K.value, 'image' == K.type && (g.extraData[ n + '.x' ] = e.clk_x, g.extraData[ n + '.y' ] = e.clk_y));
          }
          g.forceSync ?
            c() : setTimeout(c, 10);
          var v, F, R = 50;
        }
      }
    }

    if (!this.length) return k('ajaxSubmit: skipping submit process - no element selected'), this;
    'function' == typeof a && (a = { success: a });
    var h = b.trim(this.attr('action'));
    h && (h = (h.match(/^([^#]+)/) || [])[ 1 ]);
    h = h || window.location.href || '';
    a = b.extend(!0, {
      url: h,
      type: this.attr('method') || 'GET',
      iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, a);
    h = {};
    this.trigger('form-pre-serialize', [ this, a, h ]);
    if (h.veto) return k('ajaxSubmit: submit vetoed via form-pre-serialize trigger'),
      this;
    if (a.beforeSerialize && !1 === a.beforeSerialize(this, a)) return k('ajaxSubmit: submit aborted via beforeSerialize callback'), this;
    var c, f, d = this.formToArray(a.semantic);
    if (a.data) for (c in a.extraData = a.data, a.data) if (a.data[ c ] instanceof Array) for (var g in a.data[ c ]) d.push({
      name: c,
      value: a.data[ c ][ g ]
    }); else f = a.data[ c ], f = b.isFunction(f) ? f() : f, d.push({ name: c, value: f });
    if (a.beforeSubmit && !1 === a.beforeSubmit(d, this, a)) return k('ajaxSubmit: submit aborted via beforeSubmit callback'), this;
    this.trigger('form-submit-validate',
      [ d, this, a, h ]);
    if (h.veto) return k('ajaxSubmit: submit vetoed via form-submit-validate trigger'), this;
    c = b.param(d);
    'GET' == a.type.toUpperCase() ? (a.url += (0 <= a.url.indexOf('?') ? '&' : '?') + c, a.data = null) : a.data = c;
    var l = this, m = [];
    a.resetForm && m.push(function () {
      l.resetForm();
    });
    a.clearForm && m.push(function () {
      l.clearForm();
    });
    if (!a.dataType && a.target) {
      var u = a.success || function () {
      };
      m.push(function (c) {
        var d = a.replaceTarget ? 'replaceWith' : 'html';
        b(a.target)[ d ](c).each(u, arguments);
      });
    } else a.success && m.push(a.success);
    a.success = function (b, c, d) {
      for (var f = a.context || a, e = 0, g = m.length; e < g; e++) m[ e ].apply(f, [ b, c, d || l, l ])
    };
    c = 0 < b('input:file', this).length;
    g = 'multipart/form-data' == l.attr('enctype') || 'multipart/form-data' == l.attr('encoding');
    !1 !== a.iframe && (c || a.iframe || g) ? a.closeKeepAlive ? b.get(a.closeKeepAlive, e) : e() : b.ajax(a);
    this.trigger('form-submit-notify', [ this, a ]);
    return this;
  };
  b.fn.ajaxForm = function (a) {
    if (0 === this.length) {
      var e = this.selector, h = this.context;
      if (!b.isReady && e) return k('DOM not ready, queuing ajaxForm'),
        b(function () {
          b(e, h).ajaxForm(a);
        }), this;
      k('terminating; zero elements found by selector' + (b.isReady ? '' : ' (DOM not ready)'));
      return this;
    }
    return this.ajaxFormUnbind().bind('submit.form-plugin', function (c) {
      c.isDefaultPrevented() || (c.preventDefault(), b(this).ajaxSubmit(a));
    }).bind('click.form-plugin', function (a) {
      var f = a.target, d = b(f);
      if (!d.is(':submit,input:image')) {
        f = d.closest(':submit');
        if (0 == f.length) return;
        f = f[ 0 ];
      }
      var e = this;
      e.clk = f;
      'image' == f.type && (void 0 != a.offsetX ? (e.clk_x = a.offsetX, e.clk_y = a.offsetY) :
        'function' == typeof b.fn.offset ? (d = d.offset(), e.clk_x = a.pageX - d.left, e.clk_y = a.pageY - d.top) : (e.clk_x = a.pageX - f.offsetLeft, e.clk_y = a.pageY - f.offsetTop));
      setTimeout(function () {
        e.clk = e.clk_x = e.clk_y = null;
      }, 100);
    });
  };
  b.fn.ajaxFormUnbind = function () {
    return this.unbind('submit.form-plugin click.form-plugin');
  };
  b.fn.formToArray = function (a) {
    var e = [];
    if (0 === this.length) return e;
    var h = this[ 0 ], c = a ? h.getElementsByTagName('*') : h.elements;
    if (!c) return e;
    var f, d, g, k;
    f = 0;
    for (max = c.length; f < max; f++) if (d = c[ f ], g = d.name) if (a &&
      h.clk && 'image' == d.type) d.disabled || h.clk != d || (e.push({
      name: g,
      value: b(d).val()
    }), e.push({ name: g + '.x', value: h.clk_x }, {
      name: g + '.y',
      value: h.clk_y
    })); else if ((k = b.fieldValue(d, !0)) && k.constructor == Array) for (d = 0, jmax = k.length; d < jmax; d++) e.push({
      name: g,
      value: k[ d ]
    }); else null !== k && 'undefined' != typeof k && e.push({ name: g, value: k });
    !a && h.clk && (a = b(h.clk), c = a[ 0 ], (g = c.name) && !c.disabled && 'image' == c.type && (e.push({
      name: g,
      value: a.val()
    }), e.push({ name: g + '.x', value: h.clk_x }, { name: g + '.y', value: h.clk_y })));
    return e;
  };
  b.fn.formSerialize = function (a) {
    return b.param(this.formToArray(a));
  };
  b.fn.fieldSerialize = function (a) {
    var e = [];
    this.each(function () {
      var h = this.name;
      if (h) {
        var c = b.fieldValue(this, a);
        if (c && c.constructor == Array) for (var f = 0, d = c.length; f < d; f++) e.push({
          name: h,
          value: c[ f ]
        }); else null !== c && 'undefined' != typeof c && e.push({ name: this.name, value: c });
      }
    });
    return b.param(e);
  };
  b.fn.fieldValue = function (a) {
    for (var e = [], h = 0, c = this.length; h < c; h++) {
      var f = b.fieldValue(this[ h ], a);
      null === f || 'undefined' == typeof f || f.constructor ==
      Array && !f.length || (f.constructor == Array ? b.merge(e, f) : e.push(f));
    }
    return e;
  };
  b.fieldValue = function (a, e) {
    var h = a.name, c = a.type, f = a.tagName.toLowerCase();
    void 0 === e && (e = !0);
    if (e && (!h || a.disabled || 'reset' == c || 'button' == c || ('checkbox' == c || 'radio' == c) && !a.checked || ('submit' == c || 'image' == c) && a.form && a.form.clk != a || 'select' == f && -1 == a.selectedIndex)) return null;
    if ('select' == f) {
      var d = a.selectedIndex;
      if (0 > d) return null;
      for (var h = [], f = a.options, g = (c = 'select-one' == c) ? d + 1 : f.length, d = c ? d : 0; d < g; d++) {
        var k = f[ d ];
        if (k.selected) {
          var m =
            k.value;
          m || (m = k.attributes && k.attributes.value && !k.attributes.value.specified ? k.text : k.value);
          if (c) return m;
          h.push(m);
        }
      }
      return h;
    }
    return b(a).val();
  };
  b.fn.clearForm = function () {
    return this.each(function () {
      b('input,select,textarea', this).clearFields();
    });
  };
  b.fn.clearFields = b.fn.clearInputs = function () {
    return this.each(function () {
      var a = this.type, b = this.tagName.toLowerCase();
      'text' == a || 'password' == a || 'textarea' == b ? this.value = '' : 'checkbox' == a || 'radio' == a ? this.checked = !1 : 'select' == b && (this.selectedIndex = -1);
    });
  };
  b.fn.resetForm = function () {
    return this.each(function () {
      ('function' == typeof this.reset || 'object' == typeof this.reset && !this.reset.nodeType) && this.reset();
    });
  };
  b.fn.enable = function (a) {
    void 0 === a && (a = !0);
    return this.each(function () {
      this.disabled = !a;
    });
  };
  b.fn.selected = function (a) {
    void 0 === a && (a = !0);
    return this.each(function () {
      var e = this.type;
      'checkbox' == e || 'radio' == e ? this.checked = a : 'option' == this.tagName.toLowerCase() && (e = b(this).parent('select'), a && e[ 0 ] && 'select-one' == e[ 0 ].type && e.find('option').selected(!1),
        this.selected = a);
    });
  };
})(jQuery);
