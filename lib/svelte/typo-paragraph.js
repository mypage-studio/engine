import { S as o, i as p, s as r, e as i, a as c, n as a, d as l } from "./svelte.vendor.js";
function m(n) {
  let t;
  return {
    c() {
      t = i("p"), t.textContent = ".mypage-typo-paragraph";
    },
    m(e, s) {
      c(e, t, s);
    },
    p: a,
    i: a,
    o: a,
    d(e) {
      e && l(t);
    }
  };
}
class f extends o {
  constructor(t) {
    super(), p(this, t, null, m, r, {});
  }
}
export {
  f as default
};
