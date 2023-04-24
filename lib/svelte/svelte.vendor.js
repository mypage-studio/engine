function $() {
}
function O(t) {
  return t();
}
function E() {
  return /* @__PURE__ */ Object.create(null);
}
function h(t) {
  t.forEach(O);
}
function S(t) {
  return typeof t == "function";
}
function K(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function A(t) {
  return Object.keys(t).length === 0;
}
function L(t, e, n) {
  t.insertBefore(e, n || null);
}
function B(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Q(t) {
  return document.createElement(t);
}
function M(t) {
  return Array.from(t.childNodes);
}
let y;
function l(t) {
  y = t;
}
const a = [], v = [];
let u = [];
const j = [], P = /* @__PURE__ */ Promise.resolve();
let m = !1;
function q() {
  m || (m = !0, P.then(N));
}
function p(t) {
  u.push(t);
}
const g = /* @__PURE__ */ new Set();
let s = 0;
function N() {
  if (s !== 0)
    return;
  const t = y;
  do {
    try {
      for (; s < a.length; ) {
        const e = a[s];
        s++, l(e), z(e.$$);
      }
    } catch (e) {
      throw a.length = 0, s = 0, e;
    }
    for (l(null), a.length = 0, s = 0; v.length; )
      v.pop()();
    for (let e = 0; e < u.length; e += 1) {
      const n = u[e];
      g.has(n) || (g.add(n), n());
    }
    u.length = 0;
  } while (a.length);
  for (; j.length; )
    j.pop()();
  m = !1, g.clear(), l(t);
}
function z(t) {
  if (t.fragment !== null) {
    t.update(), h(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(p);
  }
}
function D(t) {
  const e = [], n = [];
  u.forEach((o) => t.indexOf(o) === -1 ? e.push(o) : n.push(o)), n.forEach((o) => o()), u = e;
}
const F = /* @__PURE__ */ new Set();
function G(t, e) {
  t && t.i && (F.delete(t), t.i(e));
}
function H(t, e, n, o) {
  const { fragment: c, after_update: _ } = t.$$;
  c && c.m(e, n), o || p(() => {
    const i = t.$$.on_mount.map(O).filter(S);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : h(i), t.$$.on_mount = [];
  }), _.forEach(p);
}
function I(t, e) {
  const n = t.$$;
  n.fragment !== null && (D(n.after_update), h(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function J(t, e) {
  t.$$.dirty[0] === -1 && (a.push(t), q(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function R(t, e, n, o, c, _, i, C = [-1]) {
  const d = y;
  l(t);
  const r = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: _,
    update: $,
    not_equal: c,
    bound: E(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (d ? d.$$.context : [])),
    // everything else
    callbacks: E(),
    dirty: C,
    skip_bound: !1,
    root: e.target || d.$$.root
  };
  i && i(r.root);
  let b = !1;
  if (r.ctx = n ? n(t, e.props || {}, (f, x, ...k) => {
    const w = k.length ? k[0] : x;
    return r.ctx && c(r.ctx[f], r.ctx[f] = w) && (!r.skip_bound && r.bound[f] && r.bound[f](w), b && J(t, f)), x;
  }) : [], r.update(), b = !0, h(r.before_update), r.fragment = o ? o(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = M(e.target);
      r.fragment && r.fragment.l(f), f.forEach(B);
    } else
      r.fragment && r.fragment.c();
    e.intro && G(t.$$.fragment), H(t, e.target, e.anchor, e.customElement), N();
  }
  l(d);
}
class T {
  $destroy() {
    I(this, 1), this.$destroy = $;
  }
  $on(e, n) {
    if (!S(n))
      return $;
    const o = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return o.push(n), () => {
      const c = o.indexOf(n);
      c !== -1 && o.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !A(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
export {
  T as S,
  L as a,
  B as d,
  Q as e,
  R as i,
  $ as n,
  K as s
};
