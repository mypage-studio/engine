import { S as o, i, s as p, e as r, a as c, n, d as l } from "./svelte.vendor.js";
function d(a) {
  let e;
  return {
    c() {
      e = r("p"), e.textContent = "<mp-typo-heading/>";
    },
    m(t, s) {
      c(t, e, s);
    },
    p: n,
    i: n,
    o: n,
    d(t) {
      t && l(e);
    }
  };
}
class u extends o {
  constructor(e) {
    super(), i(this, e, null, d, p, {});
  }
}
export {
  u as default
};
