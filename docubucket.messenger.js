// @__NO_SIDE_EFFECTS__
function us(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ee = {}, Tt = [], Ge = () => {
}, Cr = () => !1, Sn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), as = (e) => e.startsWith("onUpdate:"), fe = Object.assign, ds = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, ji = Object.prototype.hasOwnProperty, Y = (e, t) => ji.call(e, t), R = Array.isArray, St = (e) => Qt(e) === "[object Map]", Er = (e) => Qt(e) === "[object Set]", Rs = (e) => Qt(e) === "[object Date]", N = (e) => typeof e == "function", oe = (e) => typeof e == "string", ze = (e) => typeof e == "symbol", J = (e) => e !== null && typeof e == "object", Ar = (e) => (J(e) || N(e)) && N(e.then) && N(e.catch), kr = Object.prototype.toString, Qt = (e) => kr.call(e), Bi = (e) => Qt(e).slice(8, -1), Mr = (e) => Qt(e) === "[object Object]", hs = (e) => oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ht = /* @__PURE__ */ us(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Cn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Ki = /-\w/g, Ie = Cn(
  (e) => e.replace(Ki, (t) => t.slice(1).toUpperCase())
), Ui = /\B([A-Z])/g, ut = Cn(
  (e) => e.replace(Ui, "-$1").toLowerCase()
), Pr = Cn((e) => e.charAt(0).toUpperCase() + e.slice(1)), Fn = Cn(
  (e) => e ? `on${Pr(e)}` : ""
), qe = (e, t) => !Object.is(e, t), cn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Or = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, ps = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Wi = (e) => {
  const t = oe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Ds;
const En = () => Ds || (Ds = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function gs(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], r = oe(s) ? Yi(s) : gs(s);
      if (r)
        for (const i in r)
          t[i] = r[i];
    }
    return t;
  } else if (oe(e) || J(e))
    return e;
}
const qi = /;(?![^(]*\))/g, Gi = /:([^]+)/, zi = /\/\*[^]*?\*\//g;
function Yi(e) {
  const t = {};
  return e.replace(zi, "").split(qi).forEach((n) => {
    if (n) {
      const s = n.split(Gi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function Ze(e) {
  let t = "";
  if (oe(e))
    t = e;
  else if (R(e))
    for (let n = 0; n < e.length; n++) {
      const s = Ze(e[n]);
      s && (t += s + " ");
    }
  else if (J(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ji = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xi = /* @__PURE__ */ us(Ji);
function Ir(e) {
  return !!e || e === "";
}
function Zi(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = ms(e[s], t[s]);
  return n;
}
function ms(e, t) {
  if (e === t) return !0;
  let n = Rs(e), s = Rs(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = ze(e), s = ze(t), n || s)
    return e === t;
  if (n = R(e), s = R(t), n || s)
    return n && s ? Zi(e, t) : !1;
  if (n = J(e), s = J(t), n || s) {
    if (!n || !s)
      return !1;
    const r = Object.keys(e).length, i = Object.keys(t).length;
    if (r !== i)
      return !1;
    for (const o in e) {
      const l = e.hasOwnProperty(o), c = t.hasOwnProperty(o);
      if (l && !c || !l && c || !ms(e[o], t[o]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const $r = (e) => !!(e && e.__v_isRef === !0), Rt = (e) => oe(e) ? e : e == null ? "" : R(e) || J(e) && (e.toString === kr || !N(e.toString)) ? $r(e) ? Rt(e.value) : JSON.stringify(e, Lr, 2) : String(e), Lr = (e, t) => $r(t) ? Lr(e, t.value) : St(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, r], i) => (n[Rn(s, i) + " =>"] = r, n),
    {}
  )
} : Er(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Rn(n))
} : ze(t) ? Rn(t) : J(t) && !R(t) && !Mr(t) ? String(t) : t, Rn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ze(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
let Te;
class Qi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Te, !t && Te && (this.index = (Te.scopes || (Te.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Te;
      try {
        return Te = this, t();
      } finally {
        Te = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Te, Te = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Te = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function eo() {
  return Te;
}
let ne;
const Dn = /* @__PURE__ */ new WeakSet();
class Fr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Te && Te.active && Te.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Dn.has(this) && (Dn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Dr(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Hs(this), Hr(this);
    const t = ne, n = $e;
    ne = this, $e = !0;
    try {
      return this.fn();
    } finally {
      Nr(this), ne = t, $e = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        _s(t);
      this.deps = this.depsTail = void 0, Hs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Dn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Yn(this) && this.run();
  }
  get dirty() {
    return Yn(this);
  }
}
let Rr = 0, Nt, Vt;
function Dr(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Vt, Vt = e;
    return;
  }
  e.next = Nt, Nt = e;
}
function bs() {
  Rr++;
}
function ys() {
  if (--Rr > 0)
    return;
  if (Vt) {
    let t = Vt;
    for (Vt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Nt; ) {
    let t = Nt;
    for (Nt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Hr(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Nr(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === n && (n = r), _s(s), to(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = t, e.depsTail = n;
}
function Yn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Vr(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Vr(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === qt) || (e.globalVersion = qt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Yn(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ne, s = $e;
  ne = e, $e = !0;
  try {
    Hr(e);
    const r = e.fn(e._value);
    (t.version === 0 || qe(r, e._value)) && (e.flags |= 128, e._value = r, t.version++);
  } catch (r) {
    throw t.version++, r;
  } finally {
    ne = n, $e = s, Nr(e), e.flags &= -3;
  }
}
function _s(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      _s(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function to(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let $e = !0;
const jr = [];
function nt() {
  jr.push($e), $e = !1;
}
function st() {
  const e = jr.pop();
  $e = e === void 0 ? !0 : e;
}
function Hs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ne;
    ne = void 0;
    try {
      t();
    } finally {
      ne = n;
    }
  }
}
let qt = 0;
class no {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class vs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ne || !$e || ne === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ne)
      n = this.activeLink = new no(ne, this), ne.deps ? (n.prevDep = ne.depsTail, ne.depsTail.nextDep = n, ne.depsTail = n) : ne.deps = ne.depsTail = n, Br(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ne.depsTail, n.nextDep = void 0, ne.depsTail.nextDep = n, ne.depsTail = n, ne.deps === n && (ne.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, qt++, this.notify(t);
  }
  notify(t) {
    bs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ys();
    }
  }
}
function Br(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Br(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Jn = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ Symbol(
  ""
), Xn = /* @__PURE__ */ Symbol(
  ""
), Gt = /* @__PURE__ */ Symbol(
  ""
);
function he(e, t, n) {
  if ($e && ne) {
    let s = Jn.get(e);
    s || Jn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(n);
    r || (s.set(n, r = new vs()), r.map = s, r.key = n), r.track();
  }
}
function et(e, t, n, s, r, i) {
  const o = Jn.get(e);
  if (!o) {
    qt++;
    return;
  }
  const l = (c) => {
    c && c.trigger();
  };
  if (bs(), t === "clear")
    o.forEach(l);
  else {
    const c = R(e), d = c && hs(n);
    if (c && n === "length") {
      const u = Number(s);
      o.forEach((h, v) => {
        (v === "length" || v === Gt || !ze(v) && v >= u) && l(h);
      });
    } else
      switch ((n !== void 0 || o.has(void 0)) && l(o.get(n)), d && l(o.get(Gt)), t) {
        case "add":
          c ? d && l(o.get("length")) : (l(o.get(yt)), St(e) && l(o.get(Xn)));
          break;
        case "delete":
          c || (l(o.get(yt)), St(e) && l(o.get(Xn)));
          break;
        case "set":
          St(e) && l(o.get(yt));
          break;
      }
  }
  ys();
}
function vt(e) {
  const t = /* @__PURE__ */ q(e);
  return t === e ? t : (he(t, "iterate", Gt), /* @__PURE__ */ Pe(e) ? t : t.map(Le));
}
function An(e) {
  return he(e = /* @__PURE__ */ q(e), "iterate", Gt), e;
}
function Ue(e, t) {
  return /* @__PURE__ */ rt(e) ? kt(/* @__PURE__ */ _t(e) ? Le(t) : t) : Le(t);
}
const so = {
  __proto__: null,
  [Symbol.iterator]() {
    return Hn(this, Symbol.iterator, (e) => Ue(this, e));
  },
  concat(...e) {
    return vt(this).concat(
      ...e.map((t) => R(t) ? vt(t) : t)
    );
  },
  entries() {
    return Hn(this, "entries", (e) => (e[1] = Ue(this, e[1]), e));
  },
  every(e, t) {
    return Ye(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ye(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => Ue(this, s)),
      arguments
    );
  },
  find(e, t) {
    return Ye(
      this,
      "find",
      e,
      t,
      (n) => Ue(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ye(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ye(
      this,
      "findLast",
      e,
      t,
      (n) => Ue(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ye(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ye(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Nn(this, "includes", e);
  },
  indexOf(...e) {
    return Nn(this, "indexOf", e);
  },
  join(e) {
    return vt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Nn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ye(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return It(this, "pop");
  },
  push(...e) {
    return It(this, "push", e);
  },
  reduce(e, ...t) {
    return Ns(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Ns(this, "reduceRight", e, t);
  },
  shift() {
    return It(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ye(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return It(this, "splice", e);
  },
  toReversed() {
    return vt(this).toReversed();
  },
  toSorted(e) {
    return vt(this).toSorted(e);
  },
  toSpliced(...e) {
    return vt(this).toSpliced(...e);
  },
  unshift(...e) {
    return It(this, "unshift", e);
  },
  values() {
    return Hn(this, "values", (e) => Ue(this, e));
  }
};
function Hn(e, t, n) {
  const s = An(e), r = s[t]();
  return s !== e && !/* @__PURE__ */ Pe(e) && (r._next = r.next, r.next = () => {
    const i = r._next();
    return i.done || (i.value = n(i.value)), i;
  }), r;
}
const ro = Array.prototype;
function Ye(e, t, n, s, r, i) {
  const o = An(e), l = o !== e && !/* @__PURE__ */ Pe(e), c = o[t];
  if (c !== ro[t]) {
    const h = c.apply(e, i);
    return l ? Le(h) : h;
  }
  let d = n;
  o !== e && (l ? d = function(h, v) {
    return n.call(this, Ue(e, h), v, e);
  } : n.length > 2 && (d = function(h, v) {
    return n.call(this, h, v, e);
  }));
  const u = c.call(o, d, s);
  return l && r ? r(u) : u;
}
function Ns(e, t, n, s) {
  const r = An(e), i = r !== e && !/* @__PURE__ */ Pe(e);
  let o = n, l = !1;
  r !== e && (i ? (l = s.length === 0, o = function(d, u, h) {
    return l && (l = !1, d = Ue(e, d)), n.call(this, d, Ue(e, u), h, e);
  }) : n.length > 3 && (o = function(d, u, h) {
    return n.call(this, d, u, h, e);
  }));
  const c = r[t](o, ...s);
  return l ? Ue(e, c) : c;
}
function Nn(e, t, n) {
  const s = /* @__PURE__ */ q(e);
  he(s, "iterate", Gt);
  const r = s[t](...n);
  return (r === -1 || r === !1) && /* @__PURE__ */ Ss(n[0]) ? (n[0] = /* @__PURE__ */ q(n[0]), s[t](...n)) : r;
}
function It(e, t, n = []) {
  nt(), bs();
  const s = (/* @__PURE__ */ q(e))[t].apply(e, n);
  return ys(), st(), s;
}
const io = /* @__PURE__ */ us("__proto__,__v_isRef,__isVue"), Kr = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ze)
);
function oo(e) {
  ze(e) || (e = String(e));
  const t = /* @__PURE__ */ q(this);
  return he(t, "has", e), t.hasOwnProperty(e);
}
class Ur {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const r = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (r ? i ? bo : zr : i ? Gr : qr).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const o = R(t);
    if (!r) {
      let c;
      if (o && (c = so[n]))
        return c;
      if (n === "hasOwnProperty")
        return oo;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ pe(t) ? t : s
    );
    if ((ze(n) ? Kr.has(n) : io(n)) || (r || he(t, "get", n), i))
      return l;
    if (/* @__PURE__ */ pe(l)) {
      const c = o && hs(n) ? l : l.value;
      return r && J(c) ? /* @__PURE__ */ Qn(c) : c;
    }
    return J(l) ? r ? /* @__PURE__ */ Qn(l) : /* @__PURE__ */ xs(l) : l;
  }
}
class Wr extends Ur {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, r) {
    let i = t[n];
    const o = R(t) && hs(n);
    if (!this._isShallow) {
      const d = /* @__PURE__ */ rt(i);
      if (!/* @__PURE__ */ Pe(s) && !/* @__PURE__ */ rt(s) && (i = /* @__PURE__ */ q(i), s = /* @__PURE__ */ q(s)), !o && /* @__PURE__ */ pe(i) && !/* @__PURE__ */ pe(s))
        return d || (i.value = s), !0;
    }
    const l = o ? Number(n) < t.length : Y(t, n), c = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ pe(t) ? t : r
    );
    return t === /* @__PURE__ */ q(r) && (l ? qe(s, i) && et(t, "set", n, s) : et(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = Y(t, n);
    t[n];
    const r = Reflect.deleteProperty(t, n);
    return r && s && et(t, "delete", n, void 0), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ze(n) || !Kr.has(n)) && he(t, "has", n), s;
  }
  ownKeys(t) {
    return he(
      t,
      "iterate",
      R(t) ? "length" : yt
    ), Reflect.ownKeys(t);
  }
}
class lo extends Ur {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const co = /* @__PURE__ */ new Wr(), fo = /* @__PURE__ */ new lo(), uo = /* @__PURE__ */ new Wr(!0);
const Zn = (e) => e, nn = (e) => Reflect.getPrototypeOf(e);
function ao(e, t, n) {
  return function(...s) {
    const r = this.__v_raw, i = /* @__PURE__ */ q(r), o = St(i), l = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, d = r[e](...s), u = n ? Zn : t ? kt : Le;
    return !t && he(
      i,
      "iterate",
      c ? Xn : yt
    ), fe(
      // inheriting all iterator properties
      Object.create(d),
      {
        // iterator protocol
        next() {
          const { value: h, done: v } = d.next();
          return v ? { value: h, done: v } : {
            value: l ? [u(h[0]), u(h[1])] : u(h),
            done: v
          };
        }
      }
    );
  };
}
function sn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ho(e, t) {
  const n = {
    get(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ q(i), l = /* @__PURE__ */ q(r);
      e || (qe(r, l) && he(o, "get", r), he(o, "get", l));
      const { has: c } = nn(o), d = t ? Zn : e ? kt : Le;
      if (c.call(o, r))
        return d(i.get(r));
      if (c.call(o, l))
        return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && he(/* @__PURE__ */ q(r), "iterate", yt), r.size;
    },
    has(r) {
      const i = this.__v_raw, o = /* @__PURE__ */ q(i), l = /* @__PURE__ */ q(r);
      return e || (qe(r, l) && he(o, "has", r), he(o, "has", l)), r === l ? i.has(r) : i.has(r) || i.has(l);
    },
    forEach(r, i) {
      const o = this, l = o.__v_raw, c = /* @__PURE__ */ q(l), d = t ? Zn : e ? kt : Le;
      return !e && he(c, "iterate", yt), l.forEach((u, h) => r.call(i, d(u), d(h), o));
    }
  };
  return fe(
    n,
    e ? {
      add: sn("add"),
      set: sn("set"),
      delete: sn("delete"),
      clear: sn("clear")
    } : {
      add(r) {
        const i = /* @__PURE__ */ q(this), o = nn(i), l = /* @__PURE__ */ q(r), c = !t && !/* @__PURE__ */ Pe(r) && !/* @__PURE__ */ rt(r) ? l : r;
        return o.has.call(i, c) || qe(r, c) && o.has.call(i, r) || qe(l, c) && o.has.call(i, l) || (i.add(c), et(i, "add", c, c)), this;
      },
      set(r, i) {
        !t && !/* @__PURE__ */ Pe(i) && !/* @__PURE__ */ rt(i) && (i = /* @__PURE__ */ q(i));
        const o = /* @__PURE__ */ q(this), { has: l, get: c } = nn(o);
        let d = l.call(o, r);
        d || (r = /* @__PURE__ */ q(r), d = l.call(o, r));
        const u = c.call(o, r);
        return o.set(r, i), d ? qe(i, u) && et(o, "set", r, i) : et(o, "add", r, i), this;
      },
      delete(r) {
        const i = /* @__PURE__ */ q(this), { has: o, get: l } = nn(i);
        let c = o.call(i, r);
        c || (r = /* @__PURE__ */ q(r), c = o.call(i, r)), l && l.call(i, r);
        const d = i.delete(r);
        return c && et(i, "delete", r, void 0), d;
      },
      clear() {
        const r = /* @__PURE__ */ q(this), i = r.size !== 0, o = r.clear();
        return i && et(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    n[r] = ao(r, e, t);
  }), n;
}
function ws(e, t) {
  const n = ho(e, t);
  return (s, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    Y(n, r) && r in s ? n : s,
    r,
    i
  );
}
const po = {
  get: /* @__PURE__ */ ws(!1, !1)
}, go = {
  get: /* @__PURE__ */ ws(!1, !0)
}, mo = {
  get: /* @__PURE__ */ ws(!0, !1)
};
const qr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), bo = /* @__PURE__ */ new WeakMap();
function yo(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _o(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : yo(Bi(e));
}
// @__NO_SIDE_EFFECTS__
function xs(e) {
  return /* @__PURE__ */ rt(e) ? e : Ts(
    e,
    !1,
    co,
    po,
    qr
  );
}
// @__NO_SIDE_EFFECTS__
function vo(e) {
  return Ts(
    e,
    !1,
    uo,
    go,
    Gr
  );
}
// @__NO_SIDE_EFFECTS__
function Qn(e) {
  return Ts(
    e,
    !0,
    fo,
    mo,
    zr
  );
}
function Ts(e, t, n, s, r) {
  if (!J(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = _o(e);
  if (i === 0)
    return e;
  const o = r.get(e);
  if (o)
    return o;
  const l = new Proxy(
    e,
    i === 2 ? s : n
  );
  return r.set(e, l), l;
}
// @__NO_SIDE_EFFECTS__
function _t(e) {
  return /* @__PURE__ */ rt(e) ? /* @__PURE__ */ _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Pe(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ss(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function q(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ q(t) : e;
}
function wo(e) {
  return !Y(e, "__v_skip") && Object.isExtensible(e) && Or(e, "__v_skip", !0), e;
}
const Le = (e) => J(e) ? /* @__PURE__ */ xs(e) : e, kt = (e) => J(e) ? /* @__PURE__ */ Qn(e) : e;
// @__NO_SIDE_EFFECTS__
function pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function xe(e) {
  return xo(e, !1);
}
function xo(e, t) {
  return /* @__PURE__ */ pe(e) ? e : new To(e, t);
}
class To {
  constructor(t, n) {
    this.dep = new vs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ q(t), this._value = n ? t : Le(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Pe(t) || /* @__PURE__ */ rt(t);
    t = s ? t : /* @__PURE__ */ q(t), qe(t, n) && (this._rawValue = t, this._value = s ? t : Le(t), this.dep.trigger());
  }
}
function So(e) {
  return /* @__PURE__ */ pe(e) ? e.value : e;
}
const Co = {
  get: (e, t, n) => t === "__v_raw" ? e : So(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const r = e[t];
    return /* @__PURE__ */ pe(r) && !/* @__PURE__ */ pe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Yr(e) {
  return /* @__PURE__ */ _t(e) ? e : new Proxy(e, Co);
}
class Eo {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new vs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = qt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ne !== this)
      return Dr(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Vr(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ao(e, t, n = !1) {
  let s, r;
  return N(e) ? s = e : (s = e.get, r = e.set), new Eo(s, r, n);
}
const rn = {}, gn = /* @__PURE__ */ new WeakMap();
let mt;
function ko(e, t = !1, n = mt) {
  if (n) {
    let s = gn.get(n);
    s || gn.set(n, s = []), s.push(e);
  }
}
function Mo(e, t, n = ee) {
  const { immediate: s, deep: r, once: i, scheduler: o, augmentJob: l, call: c } = n, d = (P) => r ? P : /* @__PURE__ */ Pe(P) || r === !1 || r === 0 ? tt(P, 1) : tt(P);
  let u, h, v, x, M = !1, E = !1;
  if (/* @__PURE__ */ pe(e) ? (h = () => e.value, M = /* @__PURE__ */ Pe(e)) : /* @__PURE__ */ _t(e) ? (h = () => d(e), M = !0) : R(e) ? (E = !0, M = e.some((P) => /* @__PURE__ */ _t(P) || /* @__PURE__ */ Pe(P)), h = () => e.map((P) => {
    if (/* @__PURE__ */ pe(P))
      return P.value;
    if (/* @__PURE__ */ _t(P))
      return d(P);
    if (N(P))
      return c ? c(P, 2) : P();
  })) : N(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (v) {
      nt();
      try {
        v();
      } finally {
        st();
      }
    }
    const P = mt;
    mt = u;
    try {
      return c ? c(e, 3, [x]) : e(x);
    } finally {
      mt = P;
    }
  } : h = Ge, t && r) {
    const P = h, K = r === !0 ? 1 / 0 : r;
    h = () => tt(P(), K);
  }
  const V = eo(), D = () => {
    u.stop(), V && V.active && ds(V.effects, u);
  };
  if (i && t) {
    const P = t;
    t = (...K) => {
      P(...K), D();
    };
  }
  let I = E ? new Array(e.length).fill(rn) : rn;
  const B = (P) => {
    if (!(!(u.flags & 1) || !u.dirty && !P))
      if (t) {
        const K = u.run();
        if (r || M || (E ? K.some((G, re) => qe(G, I[re])) : qe(K, I))) {
          v && v();
          const G = mt;
          mt = u;
          try {
            const re = [
              K,
              // pass undefined as the old value when it's changed for the first time
              I === rn ? void 0 : E && I[0] === rn ? [] : I,
              x
            ];
            I = K, c ? c(t, 3, re) : (
              // @ts-expect-error
              t(...re)
            );
          } finally {
            mt = G;
          }
        }
      } else
        u.run();
  };
  return l && l(B), u = new Fr(h), u.scheduler = o ? () => o(B, !1) : B, x = (P) => ko(P, !1, u), v = u.onStop = () => {
    const P = gn.get(u);
    if (P) {
      if (c)
        c(P, 4);
      else
        for (const K of P) K();
      gn.delete(u);
    }
  }, t ? s ? B(!0) : I = u.run() : o ? o(B.bind(null, !0), !0) : u.run(), D.pause = u.pause.bind(u), D.resume = u.resume.bind(u), D.stop = D, D;
}
function tt(e, t = 1 / 0, n) {
  if (t <= 0 || !J(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ pe(e))
    tt(e.value, t, n);
  else if (R(e))
    for (let s = 0; s < e.length; s++)
      tt(e[s], t, n);
  else if (Er(e) || St(e))
    e.forEach((s) => {
      tt(s, t, n);
    });
  else if (Mr(e)) {
    for (const s in e)
      tt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && tt(e[s], t, n);
  }
  return e;
}
function en(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    kn(r, t, n);
  }
}
function Fe(e, t, n, s) {
  if (N(e)) {
    const r = en(e, t, n, s);
    return r && Ar(r) && r.catch((i) => {
      kn(i, t, n);
    }), r;
  }
  if (R(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++)
      r.push(Fe(e[i], t, n, s));
    return r;
  }
}
function kn(e, t, n, s = !0) {
  const r = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: o } = t && t.appContext.config || ee;
  if (t) {
    let l = t.parent;
    const c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, c, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      nt(), en(i, null, 10, [
        e,
        c,
        d
      ]), st();
      return;
    }
  }
  Po(e, n, r, s, o);
}
function Po(e, t, n, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const me = [];
let Be = -1;
const Ct = [];
let ct = null, wt = 0;
const Jr = /* @__PURE__ */ Promise.resolve();
let mn = null;
function fn(e) {
  const t = mn || Jr;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oo(e) {
  let t = Be + 1, n = me.length;
  for (; t < n; ) {
    const s = t + n >>> 1, r = me[s], i = zt(r);
    i < e || i === e && r.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Cs(e) {
  if (!(e.flags & 1)) {
    const t = zt(e), n = me[me.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= zt(n) ? me.push(e) : me.splice(Oo(t), 0, e), e.flags |= 1, Xr();
  }
}
function Xr() {
  mn || (mn = Jr.then(Qr));
}
function Io(e) {
  R(e) ? Ct.push(...e) : ct && e.id === -1 ? ct.splice(wt + 1, 0, e) : e.flags & 1 || (Ct.push(e), e.flags |= 1), Xr();
}
function Vs(e, t, n = Be + 1) {
  for (; n < me.length; n++) {
    const s = me[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      me.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Zr(e) {
  if (Ct.length) {
    const t = [...new Set(Ct)].sort(
      (n, s) => zt(n) - zt(s)
    );
    if (Ct.length = 0, ct) {
      ct.push(...t);
      return;
    }
    for (ct = t, wt = 0; wt < ct.length; wt++) {
      const n = ct[wt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ct = null, wt = 0;
  }
}
const zt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Qr(e) {
  try {
    for (Be = 0; Be < me.length; Be++) {
      const t = me[Be];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), en(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Be < me.length; Be++) {
      const t = me[Be];
      t && (t.flags &= -2);
    }
    Be = -1, me.length = 0, Zr(), mn = null, (me.length || Ct.length) && Qr();
  }
}
let Me = null, ei = null;
function bn(e) {
  const t = Me;
  return Me = e, ei = e && e.type.__scopeId || null, t;
}
function ti(e, t = Me, n) {
  if (!t || e._n)
    return e;
  const s = (...r) => {
    s._d && vn(-1);
    const i = bn(t);
    let o;
    try {
      o = e(...r);
    } finally {
      bn(i), s._d && vn(1);
    }
    return o;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function js(e, t) {
  if (Me === null)
    return e;
  const n = $n(Me), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, c = ee] = t[r];
    i && (N(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && tt(o), s.push({
      dir: i,
      instance: n,
      value: o,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function dt(e, t, n, s) {
  const r = e.dirs, i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let c = l.dir[s];
    c && (nt(), Fe(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), st());
  }
}
function $o(e, t) {
  if (ye) {
    let n = ye.provides;
    const s = ye.parent && ye.parent.provides;
    s === n && (n = ye.provides = Object.create(s)), n[e] = t;
  }
}
function un(e, t, n = !1) {
  const s = Li();
  if (s || At) {
    let r = At ? At._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && N(t) ? t.call(s && s.proxy) : t;
  }
}
const Lo = /* @__PURE__ */ Symbol.for("v-scx"), Fo = () => un(Lo);
function Et(e, t, n) {
  return ni(e, t, n);
}
function ni(e, t, n = ee) {
  const { immediate: s, deep: r, flush: i, once: o } = n, l = fe({}, n), c = t && s || !t && i !== "post";
  let d;
  if (Xt) {
    if (i === "sync") {
      const x = Fo();
      d = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!c) {
      const x = () => {
      };
      return x.stop = Ge, x.resume = Ge, x.pause = Ge, x;
    }
  }
  const u = ye;
  l.call = (x, M, E) => Fe(x, u, M, E);
  let h = !1;
  i === "post" ? l.scheduler = (x) => {
    de(x, u && u.suspense);
  } : i !== "sync" && (h = !0, l.scheduler = (x, M) => {
    M ? x() : Cs(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), h && (x.flags |= 2, u && (x.id = u.uid, x.i = u));
  };
  const v = Mo(e, t, l);
  return Xt && (d ? d.push(v) : c && v()), v;
}
function Ro(e, t, n) {
  const s = this.proxy, r = oe(e) ? e.includes(".") ? si(s, e) : () => s[e] : e.bind(s, s);
  let i;
  N(t) ? i = t : (i = t.handler, n = t);
  const o = tn(this), l = ni(r, i.bind(s), n);
  return o(), l;
}
function si(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < n.length && s; r++)
      s = s[n[r]];
    return s;
  };
}
const ri = /* @__PURE__ */ Symbol("_vte"), ii = (e) => e.__isTeleport, jt = (e) => e && (e.disabled || e.disabled === ""), Bs = (e) => e && (e.defer || e.defer === ""), Ks = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Us = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, es = (e, t) => {
  const n = e && e.to;
  return oe(n) ? t ? t(n) : null : n;
}, oi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, r, i, o, l, c, d) {
    const {
      mc: u,
      pc: h,
      pbc: v,
      o: { insert: x, querySelector: M, createText: E, createComment: V }
    } = d, D = jt(t.props);
    let { shapeFlag: I, children: B, dynamicChildren: P } = t;
    if (e == null) {
      const K = t.el = E(""), G = t.anchor = E("");
      x(K, n, s), x(G, n, s);
      const re = ($, j) => {
        I & 16 && u(
          B,
          $,
          j,
          r,
          i,
          o,
          l,
          c
        );
      }, ie = () => {
        const $ = t.target = es(t.props, M), j = ts($, t, E, x);
        $ && (o !== "svg" && Ks($) ? o = "svg" : o !== "mathml" && Us($) && (o = "mathml"), r && r.isCE && (r.ce._teleportTargets || (r.ce._teleportTargets = /* @__PURE__ */ new Set())).add($), D || (re($, j), an(t, !1)));
      };
      D && (re(n, G), an(t, !0)), Bs(t.props) ? (t.el.__isMounted = !1, de(() => {
        ie(), delete t.el.__isMounted;
      }, i)) : ie();
    } else {
      if (Bs(t.props) && e.el.__isMounted === !1) {
        de(() => {
          oi.process(
            e,
            t,
            n,
            s,
            r,
            i,
            o,
            l,
            c,
            d
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const K = t.anchor = e.anchor, G = t.target = e.target, re = t.targetAnchor = e.targetAnchor, ie = jt(e.props), $ = ie ? n : G, j = ie ? K : re;
      if (o === "svg" || Ks(G) ? o = "svg" : (o === "mathml" || Us(G)) && (o = "mathml"), P ? (v(
        e.dynamicChildren,
        P,
        $,
        r,
        i,
        o,
        l
      ), Ps(e, t, !0)) : c || h(
        e,
        t,
        $,
        j,
        r,
        i,
        o,
        l,
        !1
      ), D)
        ie ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : on(
          t,
          n,
          K,
          d,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const Z = t.target = es(
          t.props,
          M
        );
        Z && on(
          t,
          Z,
          null,
          d,
          0
        );
      } else ie && on(
        t,
        G,
        re,
        d,
        1
      );
      an(t, D);
    }
  },
  remove(e, t, n, { um: s, o: { remove: r } }, i) {
    const {
      shapeFlag: o,
      children: l,
      anchor: c,
      targetStart: d,
      targetAnchor: u,
      target: h,
      props: v
    } = e;
    if (h && (r(d), r(u)), i && r(c), o & 16) {
      const x = i || !jt(v);
      for (let M = 0; M < l.length; M++) {
        const E = l[M];
        s(
          E,
          t,
          n,
          x,
          !!E.dynamicChildren
        );
      }
    }
  },
  move: on,
  hydrate: Do
};
function on(e, t, n, { o: { insert: s }, m: r }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: o, anchor: l, shapeFlag: c, children: d, props: u } = e, h = i === 2;
  if (h && s(o, t, n), (!h || jt(u)) && c & 16)
    for (let v = 0; v < d.length; v++)
      r(
        d[v],
        t,
        n,
        2
      );
  h && s(l, t, n);
}
function Do(e, t, n, s, r, i, {
  o: { nextSibling: o, parentNode: l, querySelector: c, insert: d, createText: u }
}, h) {
  function v(V, D) {
    let I = D;
    for (; I; ) {
      if (I && I.nodeType === 8) {
        if (I.data === "teleport start anchor")
          t.targetStart = I;
        else if (I.data === "teleport anchor") {
          t.targetAnchor = I, V._lpa = t.targetAnchor && o(t.targetAnchor);
          break;
        }
      }
      I = o(I);
    }
  }
  function x(V, D) {
    D.anchor = h(
      o(V),
      D,
      l(V),
      n,
      s,
      r,
      i
    );
  }
  const M = t.target = es(
    t.props,
    c
  ), E = jt(t.props);
  if (M) {
    const V = M._lpa || M.firstChild;
    t.shapeFlag & 16 && (E ? (x(e, t), v(M, V), t.targetAnchor || ts(
      M,
      t,
      u,
      d,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      l(e) === M ? e : null
    )) : (t.anchor = o(e), v(M, V), t.targetAnchor || ts(M, t, u, d), h(
      V && o(V),
      t,
      M,
      n,
      s,
      r,
      i
    ))), an(t, E);
  } else E && t.shapeFlag & 16 && (x(e, t), t.targetStart = e, t.targetAnchor = o(e));
  return t.anchor && o(t.anchor);
}
const Ho = oi;
function an(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, r;
    for (t ? (s = e.el, r = e.anchor) : (s = e.targetStart, r = e.targetAnchor); s && s !== r; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function ts(e, t, n, s, r = null) {
  const i = t.targetStart = n(""), o = t.targetAnchor = n("");
  return i[ri] = o, e && (s(i, e, r), s(o, e, r)), o;
}
const Ke = /* @__PURE__ */ Symbol("_leaveCb"), $t = /* @__PURE__ */ Symbol("_enterCb");
function No() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Es(() => {
    e.isMounted = !0;
  }), pi(() => {
    e.isUnmounting = !0;
  }), e;
}
const ke = [Function, Array], li = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: ke,
  onEnter: ke,
  onAfterEnter: ke,
  onEnterCancelled: ke,
  // leave
  onBeforeLeave: ke,
  onLeave: ke,
  onAfterLeave: ke,
  onLeaveCancelled: ke,
  // appear
  onBeforeAppear: ke,
  onAppear: ke,
  onAfterAppear: ke,
  onAppearCancelled: ke
}, ci = (e) => {
  const t = e.subTree;
  return t.component ? ci(t.component) : t;
}, Vo = {
  name: "BaseTransition",
  props: li,
  setup(e, { slots: t }) {
    const n = Li(), s = No();
    return () => {
      const r = t.default && ai(t.default(), !0);
      if (!r || !r.length)
        return;
      const i = fi(r), o = /* @__PURE__ */ q(e), { mode: l } = o;
      if (s.isLeaving)
        return Vn(i);
      const c = Ws(i);
      if (!c)
        return Vn(i);
      let d = ns(
        c,
        o,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => d = h
      );
      c.type !== be && Yt(c, d);
      let u = n.subTree && Ws(n.subTree);
      if (u && u.type !== be && !bt(u, c) && ci(n).type !== be) {
        let h = ns(
          u,
          o,
          s,
          n
        );
        if (Yt(u, h), l === "out-in" && c.type !== be)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Vn(i);
        l === "in-out" && c.type !== be ? h.delayLeave = (v, x, M) => {
          const E = ui(
            s,
            u
          );
          E[String(u.key)] = u, v[Ke] = () => {
            x(), v[Ke] = void 0, delete d.delayedLeave, u = void 0;
          }, d.delayedLeave = () => {
            M(), delete d.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function fi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== be) {
        t = n;
        break;
      }
  }
  return t;
}
const jo = Vo;
function ui(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function ns(e, t, n, s, r) {
  const {
    appear: i,
    mode: o,
    persisted: l = !1,
    onBeforeEnter: c,
    onEnter: d,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: v,
    onLeave: x,
    onAfterLeave: M,
    onLeaveCancelled: E,
    onBeforeAppear: V,
    onAppear: D,
    onAfterAppear: I,
    onAppearCancelled: B
  } = t, P = String(e.key), K = ui(n, e), G = ($, j) => {
    $ && Fe(
      $,
      s,
      9,
      j
    );
  }, re = ($, j) => {
    const Z = j[1];
    G($, j), R($) ? $.every((A) => A.length <= 1) && Z() : $.length <= 1 && Z();
  }, ie = {
    mode: o,
    persisted: l,
    beforeEnter($) {
      let j = c;
      if (!n.isMounted)
        if (i)
          j = V || c;
        else
          return;
      $[Ke] && $[Ke](
        !0
        /* cancelled */
      );
      const Z = K[P];
      Z && bt(e, Z) && Z.el[Ke] && Z.el[Ke](), G(j, [$]);
    },
    enter($) {
      if (K[P] === e) return;
      let j = d, Z = u, A = h;
      if (!n.isMounted)
        if (i)
          j = D || d, Z = I || u, A = B || h;
        else
          return;
      let z = !1;
      $[$t] = (Ae) => {
        z || (z = !0, Ae ? G(A, [$]) : G(Z, [$]), ie.delayedLeave && ie.delayedLeave(), $[$t] = void 0);
      };
      const ce = $[$t].bind(null, !1);
      j ? re(j, [$, ce]) : ce();
    },
    leave($, j) {
      const Z = String(e.key);
      if ($[$t] && $[$t](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return j();
      G(v, [$]);
      let A = !1;
      $[Ke] = (ce) => {
        A || (A = !0, j(), ce ? G(E, [$]) : G(M, [$]), $[Ke] = void 0, K[Z] === e && delete K[Z]);
      };
      const z = $[Ke].bind(null, !1);
      K[Z] = e, x ? re(x, [$, z]) : z();
    },
    clone($) {
      const j = ns(
        $,
        t,
        n,
        s,
        r
      );
      return r && r(j), j;
    }
  };
  return ie;
}
function Vn(e) {
  if (Mn(e))
    return e = ft(e), e.children = null, e;
}
function Ws(e) {
  if (!Mn(e))
    return ii(e.type) && e.children ? fi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && N(n.default))
      return n.default();
  }
}
function Yt(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Yt(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ai(e, t = !1, n) {
  let s = [], r = 0;
  for (let i = 0; i < e.length; i++) {
    let o = e[i];
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
    o.type === Oe ? (o.patchFlag & 128 && r++, s = s.concat(
      ai(o.children, t, l)
    )) : (t || o.type !== be) && s.push(l != null ? ft(o, { key: l }) : o);
  }
  if (r > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
function di(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function qs(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const yn = /* @__PURE__ */ new WeakMap();
function Bt(e, t, n, s, r = !1) {
  if (R(e)) {
    e.forEach(
      (E, V) => Bt(
        E,
        t && (R(t) ? t[V] : t),
        n,
        s,
        r
      )
    );
    return;
  }
  if (Kt(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Bt(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? $n(s.component) : s.el, o = r ? null : i, { i: l, r: c } = e, d = t && t.r, u = l.refs === ee ? l.refs = {} : l.refs, h = l.setupState, v = /* @__PURE__ */ q(h), x = h === ee ? Cr : (E) => qs(u, E) ? !1 : Y(v, E), M = (E, V) => !(V && qs(u, V));
  if (d != null && d !== c) {
    if (Gs(t), oe(d))
      u[d] = null, x(d) && (h[d] = null);
    else if (/* @__PURE__ */ pe(d)) {
      const E = t;
      M(d, E.k) && (d.value = null), E.k && (u[E.k] = null);
    }
  }
  if (N(c))
    en(c, l, 12, [o, u]);
  else {
    const E = oe(c), V = /* @__PURE__ */ pe(c);
    if (E || V) {
      const D = () => {
        if (e.f) {
          const I = E ? x(c) ? h[c] : u[c] : M() || !e.k ? c.value : u[e.k];
          if (r)
            R(I) && ds(I, i);
          else if (R(I))
            I.includes(i) || I.push(i);
          else if (E)
            u[c] = [i], x(c) && (h[c] = u[c]);
          else {
            const B = [i];
            M(c, e.k) && (c.value = B), e.k && (u[e.k] = B);
          }
        } else E ? (u[c] = o, x(c) && (h[c] = o)) : V && (M(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const I = () => {
          D(), yn.delete(e);
        };
        I.id = -1, yn.set(e, I), de(I, n);
      } else
        Gs(e), D();
    }
  }
}
function Gs(e) {
  const t = yn.get(e);
  t && (t.flags |= 8, yn.delete(e));
}
En().requestIdleCallback;
En().cancelIdleCallback;
const Kt = (e) => !!e.type.__asyncLoader, Mn = (e) => e.type.__isKeepAlive;
function Bo(e, t) {
  hi(e, "a", t);
}
function Ko(e, t) {
  hi(e, "da", t);
}
function hi(e, t, n = ye) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Pn(t, s, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      Mn(r.parent.vnode) && Uo(s, t, n, r), r = r.parent;
  }
}
function Uo(e, t, n, s) {
  const r = Pn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  As(() => {
    ds(s[t], r);
  }, n);
}
function Pn(e, t, n = ye, s = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
      nt();
      const l = tn(n), c = Fe(t, n, e, o);
      return l(), st(), c;
    });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const it = (e) => (t, n = ye) => {
  (!Xt || e === "sp") && Pn(e, (...s) => t(...s), n);
}, Wo = it("bm"), Es = it("m"), qo = it(
  "bu"
), Go = it("u"), pi = it(
  "bum"
), As = it("um"), zo = it(
  "sp"
), Yo = it("rtg"), Jo = it("rtc");
function Xo(e, t = ye) {
  Pn("ec", e, t);
}
const Zo = /* @__PURE__ */ Symbol.for("v-ndc");
function Qo(e, t, n, s) {
  let r;
  const i = n, o = R(e);
  if (o || oe(e)) {
    const l = o && /* @__PURE__ */ _t(e);
    let c = !1, d = !1;
    l && (c = !/* @__PURE__ */ Pe(e), d = /* @__PURE__ */ rt(e), e = An(e)), r = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      r[u] = t(
        c ? d ? kt(Le(e[u])) : Le(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++)
      r[l] = t(l + 1, l, void 0, i);
  } else if (J(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (l, c) => t(l, c, void 0, i)
      );
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let c = 0, d = l.length; c < d; c++) {
        const u = l[c];
        r[c] = t(e[u], u, c, i);
      }
    }
  else
    r = [];
  return r;
}
const ss = (e) => e ? Fi(e) ? $n(e) : ss(e.parent) : null, Ut = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ fe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ss(e.parent),
    $root: (e) => ss(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => mi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Cs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = fn.bind(e.proxy)),
    $watch: (e) => Ro.bind(e)
  })
), jn = (e, t) => e !== ee && !e.__isScriptSetup && Y(e, t), el = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: r, props: i, accessCache: o, type: l, appContext: c } = e;
    if (t[0] !== "$") {
      const v = o[t];
      if (v !== void 0)
        switch (v) {
          case 1:
            return s[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (jn(s, t))
          return o[t] = 1, s[t];
        if (r !== ee && Y(r, t))
          return o[t] = 2, r[t];
        if (Y(i, t))
          return o[t] = 3, i[t];
        if (n !== ee && Y(n, t))
          return o[t] = 4, n[t];
        rs && (o[t] = 0);
      }
    }
    const d = Ut[t];
    let u, h;
    if (d)
      return t === "$attrs" && he(e.attrs, "get", ""), d(e);
    if (
      // css module (injected by vue-loader)
      (u = l.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== ee && Y(n, t))
      return o[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, Y(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: r, ctx: i } = e;
    return jn(r, t) ? (r[t] = n, !0) : s !== ee && Y(s, t) ? (s[t] = n, !0) : Y(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: r, props: i, type: o }
  }, l) {
    let c;
    return !!(n[l] || e !== ee && l[0] !== "$" && Y(e, l) || jn(t, l) || Y(i, l) || Y(s, l) || Y(Ut, l) || Y(r.config.globalProperties, l) || (c = o.__cssModules) && c[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : Y(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function zs(e) {
  return R(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let rs = !0;
function tl(e) {
  const t = mi(e), n = e.proxy, s = e.ctx;
  rs = !1, t.beforeCreate && Ys(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: c,
    inject: d,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: v,
    beforeUpdate: x,
    updated: M,
    activated: E,
    deactivated: V,
    beforeDestroy: D,
    beforeUnmount: I,
    destroyed: B,
    unmounted: P,
    render: K,
    renderTracked: G,
    renderTriggered: re,
    errorCaptured: ie,
    serverPrefetch: $,
    // public API
    expose: j,
    inheritAttrs: Z,
    // assets
    components: A,
    directives: z,
    filters: ce
  } = t;
  if (d && nl(d, s, null), o)
    for (const se in o) {
      const Q = o[se];
      N(Q) && (s[se] = Q.bind(n));
    }
  if (r) {
    const se = r.call(n, n);
    J(se) && (e.data = /* @__PURE__ */ xs(se));
  }
  if (rs = !0, i)
    for (const se in i) {
      const Q = i[se], Re = N(Q) ? Q.bind(n, n) : N(Q.get) ? Q.get.bind(n, n) : Ge, at = !N(Q) && N(Q.set) ? Q.set.bind(n) : Ge, O = Nl({
        get: Re,
        set: at
      });
      Object.defineProperty(s, se, {
        enumerable: !0,
        configurable: !0,
        get: () => O.value,
        set: (g) => O.value = g
      });
    }
  if (l)
    for (const se in l)
      gi(l[se], s, n, se);
  if (c) {
    const se = N(c) ? c.call(n) : c;
    Reflect.ownKeys(se).forEach((Q) => {
      $o(Q, se[Q]);
    });
  }
  u && Ys(u, e, "c");
  function le(se, Q) {
    R(Q) ? Q.forEach((Re) => se(Re.bind(n))) : Q && se(Q.bind(n));
  }
  if (le(Wo, h), le(Es, v), le(qo, x), le(Go, M), le(Bo, E), le(Ko, V), le(Xo, ie), le(Jo, G), le(Yo, re), le(pi, I), le(As, P), le(zo, $), R(j))
    if (j.length) {
      const se = e.exposed || (e.exposed = {});
      j.forEach((Q) => {
        Object.defineProperty(se, Q, {
          get: () => n[Q],
          set: (Re) => n[Q] = Re,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  K && e.render === Ge && (e.render = K), Z != null && (e.inheritAttrs = Z), A && (e.components = A), z && (e.directives = z), $ && di(e);
}
function nl(e, t, n = Ge) {
  R(e) && (e = is(e));
  for (const s in e) {
    const r = e[s];
    let i;
    J(r) ? "default" in r ? i = un(
      r.from || s,
      r.default,
      !0
    ) : i = un(r.from || s) : i = un(r), /* @__PURE__ */ pe(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (o) => i.value = o
    }) : t[s] = i;
  }
}
function Ys(e, t, n) {
  Fe(
    R(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function gi(e, t, n, s) {
  let r = s.includes(".") ? si(n, s) : () => n[s];
  if (oe(e)) {
    const i = t[e];
    N(i) && Et(r, i);
  } else if (N(e))
    Et(r, e.bind(n));
  else if (J(e))
    if (R(e))
      e.forEach((i) => gi(i, t, n, s));
    else {
      const i = N(e.handler) ? e.handler.bind(n) : t[e.handler];
      N(i) && Et(r, i, e);
    }
}
function mi(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: r,
    optionsCache: i,
    config: { optionMergeStrategies: o }
  } = e.appContext, l = i.get(t);
  let c;
  return l ? c = l : !r.length && !n && !s ? c = t : (c = {}, r.length && r.forEach(
    (d) => _n(c, d, o, !0)
  ), _n(c, t, o)), J(t) && i.set(t, c), c;
}
function _n(e, t, n, s = !1) {
  const { mixins: r, extends: i } = t;
  i && _n(e, i, n, !0), r && r.forEach(
    (o) => _n(e, o, n, !0)
  );
  for (const o in t)
    if (!(s && o === "expose")) {
      const l = sl[o] || n && n[o];
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const sl = {
  data: Js,
  props: Xs,
  emits: Xs,
  // objects
  methods: Dt,
  computed: Dt,
  // lifecycle
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  // assets
  components: Dt,
  directives: Dt,
  // watch
  watch: il,
  // provide / inject
  provide: Js,
  inject: rl
};
function Js(e, t) {
  return t ? e ? function() {
    return fe(
      N(e) ? e.call(this, this) : e,
      N(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function rl(e, t) {
  return Dt(is(e), is(t));
}
function is(e) {
  if (R(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Dt(e, t) {
  return e ? fe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xs(e, t) {
  return e ? R(e) && R(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : fe(
    /* @__PURE__ */ Object.create(null),
    zs(e),
    zs(t ?? {})
  ) : t;
}
function il(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = fe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = ge(e[s], t[s]);
  return n;
}
function bi() {
  return {
    app: null,
    config: {
      isNativeTag: Cr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ol = 0;
function ll(e, t) {
  return function(s, r = null) {
    N(s) || (s = fe({}, s)), r != null && !J(r) && (r = null);
    const i = bi(), o = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const d = i.app = {
      _uid: ol++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: jl,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return o.has(u) || (u && N(u.install) ? (o.add(u), u.install(d, ...h)) : N(u) && (o.add(u), u(d, ...h))), d;
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), d;
      },
      component(u, h) {
        return h ? (i.components[u] = h, d) : i.components[u];
      },
      directive(u, h) {
        return h ? (i.directives[u] = h, d) : i.directives[u];
      },
      mount(u, h, v) {
        if (!c) {
          const x = d._ceVNode || _e(s, r);
          return x.appContext = i, v === !0 ? v = "svg" : v === !1 && (v = void 0), e(x, u, v), c = !0, d._container = u, u.__vue_app__ = d, $n(x.component);
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        c && (Fe(
          l,
          d._instance,
          16
        ), e(null, d._container), delete d._container.__vue_app__);
      },
      provide(u, h) {
        return i.provides[u] = h, d;
      },
      runWithContext(u) {
        const h = At;
        At = d;
        try {
          return u();
        } finally {
          At = h;
        }
      }
    };
    return d;
  };
}
let At = null;
const cl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ie(t)}Modifiers`] || e[`${ut(t)}Modifiers`];
function fl(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || ee;
  let r = n;
  const i = t.startsWith("update:"), o = i && cl(s, t.slice(7));
  o && (o.trim && (r = n.map((u) => oe(u) ? u.trim() : u)), o.number && (r = n.map(ps)));
  let l, c = s[l = Fn(t)] || // also try camelCase event handler (#2249)
  s[l = Fn(Ie(t))];
  !c && i && (c = s[l = Fn(ut(t))]), c && Fe(
    c,
    e,
    6,
    r
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Fe(
      d,
      e,
      6,
      r
    );
  }
}
const ul = /* @__PURE__ */ new WeakMap();
function yi(e, t, n = !1) {
  const s = n ? ul : t.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const i = e.emits;
  let o = {}, l = !1;
  if (!N(e)) {
    const c = (d) => {
      const u = yi(d, t, !0);
      u && (l = !0, fe(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !i && !l ? (J(e) && s.set(e, null), null) : (R(i) ? i.forEach((c) => o[c] = null) : fe(o, i), J(e) && s.set(e, o), o);
}
function On(e, t) {
  return !e || !Sn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, ut(t)) || Y(e, t));
}
function Zs(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: c,
    render: d,
    renderCache: u,
    props: h,
    data: v,
    setupState: x,
    ctx: M,
    inheritAttrs: E
  } = e, V = bn(e);
  let D, I;
  try {
    if (n.shapeFlag & 4) {
      const P = r || s, K = P;
      D = We(
        d.call(
          K,
          P,
          u,
          h,
          x,
          v,
          M
        )
      ), I = l;
    } else {
      const P = t;
      D = We(
        P.length > 1 ? P(
          h,
          { attrs: l, slots: o, emit: c }
        ) : P(
          h,
          null
        )
      ), I = t.props ? l : al(l);
    }
  } catch (P) {
    Wt.length = 0, kn(P, e, 1), D = _e(be);
  }
  let B = D;
  if (I && E !== !1) {
    const P = Object.keys(I), { shapeFlag: K } = B;
    P.length && K & 7 && (i && P.some(as) && (I = dl(
      I,
      i
    )), B = ft(B, I, !1, !0));
  }
  return n.dirs && (B = ft(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(n.dirs) : n.dirs), n.transition && Yt(B, n.transition), D = B, bn(V), D;
}
const al = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Sn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, dl = (e, t) => {
  const n = {};
  for (const s in e)
    (!as(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function hl(e, t, n) {
  const { props: s, children: r, component: i } = e, { props: o, children: l, patchFlag: c } = t, d = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return s ? Qs(s, o, d) : !!o;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const v = u[h];
        if (_i(o, s, v) && !On(d, v))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : s === o ? !1 : s ? o ? Qs(s, o, d) : !0 : !!o;
  return !1;
}
function Qs(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (_i(t, e, i) && !On(n, i))
      return !0;
  }
  return !1;
}
function _i(e, t, n) {
  const s = e[n], r = t[n];
  return n === "style" && J(s) && J(r) ? !ms(s, r) : s !== r;
}
function pl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const vi = {}, wi = () => Object.create(vi), xi = (e) => Object.getPrototypeOf(e) === vi;
function gl(e, t, n, s = !1) {
  const r = {}, i = wi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ti(e, t, r, i);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  n ? e.props = s ? r : /* @__PURE__ */ vo(r) : e.type.props ? e.props = r : e.props = i, e.attrs = i;
}
function ml(e, t, n, s) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o }
  } = e, l = /* @__PURE__ */ q(r), [c] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let v = u[h];
        if (On(e.emitsOptions, v))
          continue;
        const x = t[v];
        if (c)
          if (Y(i, v))
            x !== i[v] && (i[v] = x, d = !0);
          else {
            const M = Ie(v);
            r[M] = os(
              c,
              l,
              M,
              x,
              e,
              !1
            );
          }
        else
          x !== i[v] && (i[v] = x, d = !0);
      }
    }
  } else {
    Ti(e, t, r, i) && (d = !0);
    let u;
    for (const h in l)
      (!t || // for camelCase
      !Y(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = ut(h)) === h || !Y(t, u))) && (c ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (r[h] = os(
        c,
        l,
        h,
        void 0,
        e,
        !0
      )) : delete r[h]);
    if (i !== l)
      for (const h in i)
        (!t || !Y(t, h)) && (delete i[h], d = !0);
  }
  d && et(e.attrs, "set", "");
}
function Ti(e, t, n, s) {
  const [r, i] = e.propsOptions;
  let o = !1, l;
  if (t)
    for (let c in t) {
      if (Ht(c))
        continue;
      const d = t[c];
      let u;
      r && Y(r, u = Ie(c)) ? !i || !i.includes(u) ? n[u] = d : (l || (l = {}))[u] = d : On(e.emitsOptions, c) || (!(c in s) || d !== s[c]) && (s[c] = d, o = !0);
    }
  if (i) {
    const c = /* @__PURE__ */ q(n), d = l || ee;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      n[h] = os(
        r,
        c,
        h,
        d[h],
        e,
        !Y(d, h)
      );
    }
  }
  return o;
}
function os(e, t, n, s, r, i) {
  const o = e[n];
  if (o != null) {
    const l = Y(o, "default");
    if (l && s === void 0) {
      const c = o.default;
      if (o.type !== Function && !o.skipFactory && N(c)) {
        const { propsDefaults: d } = r;
        if (n in d)
          s = d[n];
        else {
          const u = tn(r);
          s = d[n] = c.call(
            null,
            t
          ), u();
        }
      } else
        s = c;
      r.ce && r.ce._setProp(n, s);
    }
    o[
      0
      /* shouldCast */
    ] && (i && !l ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === ut(n)) && (s = !0));
  }
  return s;
}
const bl = /* @__PURE__ */ new WeakMap();
function Si(e, t, n = !1) {
  const s = n ? bl : t.propsCache, r = s.get(e);
  if (r)
    return r;
  const i = e.props, o = {}, l = [];
  let c = !1;
  if (!N(e)) {
    const u = (h) => {
      c = !0;
      const [v, x] = Si(h, t, !0);
      fe(o, v), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !c)
    return J(e) && s.set(e, Tt), Tt;
  if (R(i))
    for (let u = 0; u < i.length; u++) {
      const h = Ie(i[u]);
      er(h) && (o[h] = ee);
    }
  else if (i)
    for (const u in i) {
      const h = Ie(u);
      if (er(h)) {
        const v = i[u], x = o[h] = R(v) || N(v) ? { type: v } : fe({}, v), M = x.type;
        let E = !1, V = !0;
        if (R(M))
          for (let D = 0; D < M.length; ++D) {
            const I = M[D], B = N(I) && I.name;
            if (B === "Boolean") {
              E = !0;
              break;
            } else B === "String" && (V = !1);
          }
        else
          E = N(M) && M.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = E, x[
          1
          /* shouldCastTrue */
        ] = V, (E || Y(x, "default")) && l.push(h);
      }
    }
  const d = [o, l];
  return J(e) && s.set(e, d), d;
}
function er(e) {
  return e[0] !== "$" && !Ht(e);
}
const ks = (e) => e === "_" || e === "_ctx" || e === "$stable", Ms = (e) => R(e) ? e.map(We) : [We(e)], yl = (e, t, n) => {
  if (t._n)
    return t;
  const s = ti((...r) => Ms(t(...r)), n);
  return s._c = !1, s;
}, Ci = (e, t, n) => {
  const s = e._ctx;
  for (const r in e) {
    if (ks(r)) continue;
    const i = e[r];
    if (N(i))
      t[r] = yl(r, i, s);
    else if (i != null) {
      const o = Ms(i);
      t[r] = () => o;
    }
  }
}, Ei = (e, t) => {
  const n = Ms(t);
  e.slots.default = () => n;
}, Ai = (e, t, n) => {
  for (const s in t)
    (n || !ks(s)) && (e[s] = t[s]);
}, _l = (e, t, n) => {
  const s = e.slots = wi();
  if (e.vnode.shapeFlag & 32) {
    const r = t._;
    r ? (Ai(s, t, n), n && Or(s, "_", r, !0)) : Ci(t, s);
  } else t && Ei(e, t);
}, vl = (e, t, n) => {
  const { vnode: s, slots: r } = e;
  let i = !0, o = ee;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? n && l === 1 ? i = !1 : Ai(r, t, n) : (i = !t.$stable, Ci(t, r)), o = t;
  } else t && (Ei(e, t), o = { default: 1 });
  if (i)
    for (const l in r)
      !ks(l) && o[l] == null && delete r[l];
}, de = Cl;
function wl(e) {
  return xl(e);
}
function xl(e, t) {
  const n = En();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: c,
    setText: d,
    setElementText: u,
    parentNode: h,
    nextSibling: v,
    setScopeId: x = Ge,
    insertStaticContent: M
  } = e, E = (f, a, p, _ = null, m = null, b = null, S = void 0, T = null, w = !!a.dynamicChildren) => {
    if (f === a)
      return;
    f && !bt(f, a) && (_ = ot(f), g(f, m, b, !0), f = null), a.patchFlag === -2 && (w = !1, a.dynamicChildren = null);
    const { type: y, ref: F, shapeFlag: C } = a;
    switch (y) {
      case In:
        V(f, a, p, _);
        break;
      case be:
        D(f, a, p, _);
        break;
      case dn:
        f == null && I(a, p, _, S);
        break;
      case Oe:
        A(
          f,
          a,
          p,
          _,
          m,
          b,
          S,
          T,
          w
        );
        break;
      default:
        C & 1 ? K(
          f,
          a,
          p,
          _,
          m,
          b,
          S,
          T,
          w
        ) : C & 6 ? z(
          f,
          a,
          p,
          _,
          m,
          b,
          S,
          T,
          w
        ) : (C & 64 || C & 128) && y.process(
          f,
          a,
          p,
          _,
          m,
          b,
          S,
          T,
          w,
          Pt
        );
    }
    F != null && m ? Bt(F, f && f.ref, b, a || f, !a) : F == null && f && f.ref != null && Bt(f.ref, null, b, f, !0);
  }, V = (f, a, p, _) => {
    if (f == null)
      s(
        a.el = l(a.children),
        p,
        _
      );
    else {
      const m = a.el = f.el;
      a.children !== f.children && d(m, a.children);
    }
  }, D = (f, a, p, _) => {
    f == null ? s(
      a.el = c(a.children || ""),
      p,
      _
    ) : a.el = f.el;
  }, I = (f, a, p, _) => {
    [f.el, f.anchor] = M(
      f.children,
      a,
      p,
      _,
      f.el,
      f.anchor
    );
  }, B = ({ el: f, anchor: a }, p, _) => {
    let m;
    for (; f && f !== a; )
      m = v(f), s(f, p, _), f = m;
    s(a, p, _);
  }, P = ({ el: f, anchor: a }) => {
    let p;
    for (; f && f !== a; )
      p = v(f), r(f), f = p;
    r(a);
  }, K = (f, a, p, _, m, b, S, T, w) => {
    if (a.type === "svg" ? S = "svg" : a.type === "math" && (S = "mathml"), f == null)
      G(
        a,
        p,
        _,
        m,
        b,
        S,
        T,
        w
      );
    else {
      const y = f.el && f.el._isVueCE ? f.el : null;
      try {
        y && y._beginPatch(), $(
          f,
          a,
          m,
          b,
          S,
          T,
          w
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, G = (f, a, p, _, m, b, S, T) => {
    let w, y;
    const { props: F, shapeFlag: C, transition: L, dirs: H } = f;
    if (w = f.el = o(
      f.type,
      b,
      F && F.is,
      F
    ), C & 8 ? u(w, f.children) : C & 16 && ie(
      f.children,
      w,
      null,
      _,
      m,
      Bn(f, b),
      S,
      T
    ), H && dt(f, null, _, "created"), re(w, f, f.scopeId, S, _), F) {
      for (const te in F)
        te !== "value" && !Ht(te) && i(w, te, null, F[te], b, _);
      "value" in F && i(w, "value", null, F.value, b), (y = F.onVnodeBeforeMount) && je(y, _, f);
    }
    H && dt(f, null, _, "beforeMount");
    const U = Tl(m, L);
    U && L.beforeEnter(w), s(w, a, p), ((y = F && F.onVnodeMounted) || U || H) && de(() => {
      y && je(y, _, f), U && L.enter(w), H && dt(f, null, _, "mounted");
    }, m);
  }, re = (f, a, p, _, m) => {
    if (p && x(f, p), _)
      for (let b = 0; b < _.length; b++)
        x(f, _[b]);
    if (m) {
      let b = m.subTree;
      if (a === b || Pi(b.type) && (b.ssContent === a || b.ssFallback === a)) {
        const S = m.vnode;
        re(
          f,
          S,
          S.scopeId,
          S.slotScopeIds,
          m.parent
        );
      }
    }
  }, ie = (f, a, p, _, m, b, S, T, w = 0) => {
    for (let y = w; y < f.length; y++) {
      const F = f[y] = T ? Qe(f[y]) : We(f[y]);
      E(
        null,
        F,
        a,
        p,
        _,
        m,
        b,
        S,
        T
      );
    }
  }, $ = (f, a, p, _, m, b, S) => {
    const T = a.el = f.el;
    let { patchFlag: w, dynamicChildren: y, dirs: F } = a;
    w |= f.patchFlag & 16;
    const C = f.props || ee, L = a.props || ee;
    let H;
    if (p && ht(p, !1), (H = L.onVnodeBeforeUpdate) && je(H, p, a, f), F && dt(a, f, p, "beforeUpdate"), p && ht(p, !0), (C.innerHTML && L.innerHTML == null || C.textContent && L.textContent == null) && u(T, ""), y ? j(
      f.dynamicChildren,
      y,
      T,
      p,
      _,
      Bn(a, m),
      b
    ) : S || Q(
      f,
      a,
      T,
      null,
      p,
      _,
      Bn(a, m),
      b,
      !1
    ), w > 0) {
      if (w & 16)
        Z(T, C, L, p, m);
      else if (w & 2 && C.class !== L.class && i(T, "class", null, L.class, m), w & 4 && i(T, "style", C.style, L.style, m), w & 8) {
        const U = a.dynamicProps;
        for (let te = 0; te < U.length; te++) {
          const X = U[te], ve = C[X], we = L[X];
          (we !== ve || X === "value") && i(T, X, ve, we, m, p);
        }
      }
      w & 1 && f.children !== a.children && u(T, a.children);
    } else !S && y == null && Z(T, C, L, p, m);
    ((H = L.onVnodeUpdated) || F) && de(() => {
      H && je(H, p, a, f), F && dt(a, f, p, "updated");
    }, _);
  }, j = (f, a, p, _, m, b, S) => {
    for (let T = 0; T < a.length; T++) {
      const w = f[T], y = a[T], F = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        w.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (w.type === Oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !bt(w, y) || // - In the case of a component, it could contain anything.
        w.shapeFlag & 198) ? h(w.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          p
        )
      );
      E(
        w,
        y,
        F,
        null,
        _,
        m,
        b,
        S,
        !0
      );
    }
  }, Z = (f, a, p, _, m) => {
    if (a !== p) {
      if (a !== ee)
        for (const b in a)
          !Ht(b) && !(b in p) && i(
            f,
            b,
            a[b],
            null,
            m,
            _
          );
      for (const b in p) {
        if (Ht(b)) continue;
        const S = p[b], T = a[b];
        S !== T && b !== "value" && i(f, b, T, S, m, _);
      }
      "value" in p && i(f, "value", a.value, p.value, m);
    }
  }, A = (f, a, p, _, m, b, S, T, w) => {
    const y = a.el = f ? f.el : l(""), F = a.anchor = f ? f.anchor : l("");
    let { patchFlag: C, dynamicChildren: L, slotScopeIds: H } = a;
    H && (T = T ? T.concat(H) : H), f == null ? (s(y, p, _), s(F, p, _), ie(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      p,
      F,
      m,
      b,
      S,
      T,
      w
    )) : C > 0 && C & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren && f.dynamicChildren.length === L.length ? (j(
      f.dynamicChildren,
      L,
      p,
      m,
      b,
      S,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (a.key != null || m && a === m.subTree) && Ps(
      f,
      a,
      !0
      /* shallow */
    )) : Q(
      f,
      a,
      p,
      F,
      m,
      b,
      S,
      T,
      w
    );
  }, z = (f, a, p, _, m, b, S, T, w) => {
    a.slotScopeIds = T, f == null ? a.shapeFlag & 512 ? m.ctx.activate(
      a,
      p,
      _,
      S,
      w
    ) : ce(
      a,
      p,
      _,
      m,
      b,
      S,
      w
    ) : Ae(f, a, w);
  }, ce = (f, a, p, _, m, b, S) => {
    const T = f.component = $l(
      f,
      _,
      m
    );
    if (Mn(f) && (T.ctx.renderer = Pt), Ll(T, !1, S), T.asyncDep) {
      if (m && m.registerDep(T, le, S), !f.el) {
        const w = T.subTree = _e(be);
        D(null, w, a, p), f.placeholder = w.el;
      }
    } else
      le(
        T,
        f,
        a,
        p,
        m,
        b,
        S
      );
  }, Ae = (f, a, p) => {
    const _ = a.component = f.component;
    if (hl(f, a, p))
      if (_.asyncDep && !_.asyncResolved) {
        se(_, a, p);
        return;
      } else
        _.next = a, _.update();
    else
      a.el = f.el, _.vnode = a;
  }, le = (f, a, p, _, m, b, S) => {
    const T = () => {
      if (f.isMounted) {
        let { next: C, bu: L, u: H, parent: U, vnode: te } = f;
        {
          const Ne = ki(f);
          if (Ne) {
            C && (C.el = te.el, se(f, C, S)), Ne.asyncDep.then(() => {
              de(() => {
                f.isUnmounted || y();
              }, m);
            });
            return;
          }
        }
        let X = C, ve;
        ht(f, !1), C ? (C.el = te.el, se(f, C, S)) : C = te, L && cn(L), (ve = C.props && C.props.onVnodeBeforeUpdate) && je(ve, U, C, te), ht(f, !0);
        const we = Zs(f), He = f.subTree;
        f.subTree = we, E(
          He,
          we,
          // parent may have changed if it's in a teleport
          h(He.el),
          // anchor may have changed if it's in a fragment
          ot(He),
          f,
          m,
          b
        ), C.el = we.el, X === null && pl(f, we.el), H && de(H, m), (ve = C.props && C.props.onVnodeUpdated) && de(
          () => je(ve, U, C, te),
          m
        );
      } else {
        let C;
        const { el: L, props: H } = a, { bm: U, m: te, parent: X, root: ve, type: we } = f, He = Kt(a);
        ht(f, !1), U && cn(U), !He && (C = H && H.onVnodeBeforeMount) && je(C, X, a), ht(f, !0);
        {
          ve.ce && ve.ce._hasShadowRoot() && ve.ce._injectChildStyle(
            we,
            f.parent ? f.parent.type : void 0
          );
          const Ne = f.subTree = Zs(f);
          E(
            null,
            Ne,
            p,
            _,
            f,
            m,
            b
          ), a.el = Ne.el;
        }
        if (te && de(te, m), !He && (C = H && H.onVnodeMounted)) {
          const Ne = a;
          de(
            () => je(C, X, Ne),
            m
          );
        }
        (a.shapeFlag & 256 || X && Kt(X.vnode) && X.vnode.shapeFlag & 256) && f.a && de(f.a, m), f.isMounted = !0, a = p = _ = null;
      }
    };
    f.scope.on();
    const w = f.effect = new Fr(T);
    f.scope.off();
    const y = f.update = w.run.bind(w), F = f.job = w.runIfDirty.bind(w);
    F.i = f, F.id = f.uid, w.scheduler = () => Cs(F), ht(f, !0), y();
  }, se = (f, a, p) => {
    a.component = f;
    const _ = f.vnode.props;
    f.vnode = a, f.next = null, ml(f, a.props, _, p), vl(f, a.children, p), nt(), Vs(f), st();
  }, Q = (f, a, p, _, m, b, S, T, w = !1) => {
    const y = f && f.children, F = f ? f.shapeFlag : 0, C = a.children, { patchFlag: L, shapeFlag: H } = a;
    if (L > 0) {
      if (L & 128) {
        at(
          y,
          C,
          p,
          _,
          m,
          b,
          S,
          T,
          w
        );
        return;
      } else if (L & 256) {
        Re(
          y,
          C,
          p,
          _,
          m,
          b,
          S,
          T,
          w
        );
        return;
      }
    }
    H & 8 ? (F & 16 && ue(y, m, b), C !== y && u(p, C)) : F & 16 ? H & 16 ? at(
      y,
      C,
      p,
      _,
      m,
      b,
      S,
      T,
      w
    ) : ue(y, m, b, !0) : (F & 8 && u(p, ""), H & 16 && ie(
      C,
      p,
      _,
      m,
      b,
      S,
      T,
      w
    ));
  }, Re = (f, a, p, _, m, b, S, T, w) => {
    f = f || Tt, a = a || Tt;
    const y = f.length, F = a.length, C = Math.min(y, F);
    let L;
    for (L = 0; L < C; L++) {
      const H = a[L] = w ? Qe(a[L]) : We(a[L]);
      E(
        f[L],
        H,
        p,
        null,
        m,
        b,
        S,
        T,
        w
      );
    }
    y > F ? ue(
      f,
      m,
      b,
      !0,
      !1,
      C
    ) : ie(
      a,
      p,
      _,
      m,
      b,
      S,
      T,
      w,
      C
    );
  }, at = (f, a, p, _, m, b, S, T, w) => {
    let y = 0;
    const F = a.length;
    let C = f.length - 1, L = F - 1;
    for (; y <= C && y <= L; ) {
      const H = f[y], U = a[y] = w ? Qe(a[y]) : We(a[y]);
      if (bt(H, U))
        E(
          H,
          U,
          p,
          null,
          m,
          b,
          S,
          T,
          w
        );
      else
        break;
      y++;
    }
    for (; y <= C && y <= L; ) {
      const H = f[C], U = a[L] = w ? Qe(a[L]) : We(a[L]);
      if (bt(H, U))
        E(
          H,
          U,
          p,
          null,
          m,
          b,
          S,
          T,
          w
        );
      else
        break;
      C--, L--;
    }
    if (y > C) {
      if (y <= L) {
        const H = L + 1, U = H < F ? a[H].el : _;
        for (; y <= L; )
          E(
            null,
            a[y] = w ? Qe(a[y]) : We(a[y]),
            p,
            U,
            m,
            b,
            S,
            T,
            w
          ), y++;
      }
    } else if (y > L)
      for (; y <= C; )
        g(f[y], m, b, !0), y++;
    else {
      const H = y, U = y, te = /* @__PURE__ */ new Map();
      for (y = U; y <= L; y++) {
        const Se = a[y] = w ? Qe(a[y]) : We(a[y]);
        Se.key != null && te.set(Se.key, y);
      }
      let X, ve = 0;
      const we = L - U + 1;
      let He = !1, Ne = 0;
      const Ot = new Array(we);
      for (y = 0; y < we; y++) Ot[y] = 0;
      for (y = H; y <= C; y++) {
        const Se = f[y];
        if (ve >= we) {
          g(Se, m, b, !0);
          continue;
        }
        let Ve;
        if (Se.key != null)
          Ve = te.get(Se.key);
        else
          for (X = U; X <= L; X++)
            if (Ot[X - U] === 0 && bt(Se, a[X])) {
              Ve = X;
              break;
            }
        Ve === void 0 ? g(Se, m, b, !0) : (Ot[Ve - U] = y + 1, Ve >= Ne ? Ne = Ve : He = !0, E(
          Se,
          a[Ve],
          p,
          null,
          m,
          b,
          S,
          T,
          w
        ), ve++);
      }
      const $s = He ? Sl(Ot) : Tt;
      for (X = $s.length - 1, y = we - 1; y >= 0; y--) {
        const Se = U + y, Ve = a[Se], Ls = a[Se + 1], Fs = Se + 1 < F ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ls.el || Mi(Ls)
        ) : _;
        Ot[y] === 0 ? E(
          null,
          Ve,
          p,
          Fs,
          m,
          b,
          S,
          T,
          w
        ) : He && (X < 0 || y !== $s[X] ? O(Ve, p, Fs, 2) : X--);
      }
    }
  }, O = (f, a, p, _, m = null) => {
    const { el: b, type: S, transition: T, children: w, shapeFlag: y } = f;
    if (y & 6) {
      O(f.component.subTree, a, p, _);
      return;
    }
    if (y & 128) {
      f.suspense.move(a, p, _);
      return;
    }
    if (y & 64) {
      S.move(f, a, p, Pt);
      return;
    }
    if (S === Oe) {
      s(b, a, p);
      for (let C = 0; C < w.length; C++)
        O(w[C], a, p, _);
      s(f.anchor, a, p);
      return;
    }
    if (S === dn) {
      B(f, a, p);
      return;
    }
    if (_ !== 2 && y & 1 && T)
      if (_ === 0)
        T.beforeEnter(b), s(b, a, p), de(() => T.enter(b), m);
      else {
        const { leave: C, delayLeave: L, afterLeave: H } = T, U = () => {
          f.ctx.isUnmounted ? r(b) : s(b, a, p);
        }, te = () => {
          b._isLeaving && b[Ke](
            !0
            /* cancelled */
          ), C(b, () => {
            U(), H && H();
          });
        };
        L ? L(b, U, te) : te();
      }
    else
      s(b, a, p);
  }, g = (f, a, p, _ = !1, m = !1) => {
    const {
      type: b,
      props: S,
      ref: T,
      children: w,
      dynamicChildren: y,
      shapeFlag: F,
      patchFlag: C,
      dirs: L,
      cacheIndex: H
    } = f;
    if (C === -2 && (m = !1), T != null && (nt(), Bt(T, null, p, f, !0), st()), H != null && (a.renderCache[H] = void 0), F & 256) {
      a.ctx.deactivate(f);
      return;
    }
    const U = F & 1 && L, te = !Kt(f);
    let X;
    if (te && (X = S && S.onVnodeBeforeUnmount) && je(X, a, f), F & 6)
      Mt(f.component, p, _);
    else {
      if (F & 128) {
        f.suspense.unmount(p, _);
        return;
      }
      U && dt(f, null, a, "beforeUnmount"), F & 64 ? f.type.remove(
        f,
        a,
        p,
        Pt,
        _
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (b !== Oe || C > 0 && C & 64) ? ue(
        y,
        a,
        p,
        !1,
        !0
      ) : (b === Oe && C & 384 || !m && F & 16) && ue(w, a, p), _ && W(f);
    }
    (te && (X = S && S.onVnodeUnmounted) || U) && de(() => {
      X && je(X, a, f), U && dt(f, null, a, "unmounted");
    }, p);
  }, W = (f) => {
    const { type: a, el: p, anchor: _, transition: m } = f;
    if (a === Oe) {
      De(p, _);
      return;
    }
    if (a === dn) {
      P(f);
      return;
    }
    const b = () => {
      r(p), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (f.shapeFlag & 1 && m && !m.persisted) {
      const { leave: S, delayLeave: T } = m, w = () => S(p, b);
      T ? T(f.el, b, w) : w();
    } else
      b();
  }, De = (f, a) => {
    let p;
    for (; f !== a; )
      p = v(f), r(f), f = p;
    r(a);
  }, Mt = (f, a, p) => {
    const { bum: _, scope: m, job: b, subTree: S, um: T, m: w, a: y } = f;
    tr(w), tr(y), _ && cn(_), m.stop(), b && (b.flags |= 8, g(S, f, a, p)), T && de(T, a), de(() => {
      f.isUnmounted = !0;
    }, a);
  }, ue = (f, a, p, _ = !1, m = !1, b = 0) => {
    for (let S = b; S < f.length; S++)
      g(f[S], a, p, _, m);
  }, ot = (f) => {
    if (f.shapeFlag & 6)
      return ot(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const a = v(f.anchor || f.el), p = a && a[ri];
    return p ? v(p) : a;
  };
  let Ln = !1;
  const Is = (f, a, p) => {
    let _;
    f == null ? a._vnode && (g(a._vnode, null, null, !0), _ = a._vnode.component) : E(
      a._vnode || null,
      f,
      a,
      null,
      null,
      null,
      p
    ), a._vnode = f, Ln || (Ln = !0, Vs(_), Zr(), Ln = !1);
  }, Pt = {
    p: E,
    um: g,
    m: O,
    r: W,
    mt: ce,
    mc: ie,
    pc: Q,
    pbc: j,
    n: ot,
    o: e
  };
  return {
    render: Is,
    hydrate: void 0,
    createApp: ll(Is)
  };
}
function Bn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ht({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Tl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Ps(e, t, n = !1) {
  const s = e.children, r = t.children;
  if (R(s) && R(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let l = r[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[i] = Qe(r[i]), l.el = o.el), !n && l.patchFlag !== -2 && Ps(o, l)), l.type === In && (l.patchFlag === -1 && (l = r[i] = Qe(l)), l.el = o.el), l.type === be && !l.el && (l.el = o.el);
    }
}
function Sl(e) {
  const t = e.slice(), n = [0];
  let s, r, i, o, l;
  const c = e.length;
  for (s = 0; s < c; s++) {
    const d = e[s];
    if (d !== 0) {
      if (r = n[n.length - 1], e[r] < d) {
        t[s] = r, n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        l = i + o >> 1, e[n[l]] < d ? i = l + 1 : o = l;
      d < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; )
    n[i] = o, o = t[o];
  return n;
}
function ki(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ki(t);
}
function tr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Mi(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Mi(t.subTree) : null;
}
const Pi = (e) => e.__isSuspense;
function Cl(e, t) {
  t && t.pendingBranch ? R(e) ? t.effects.push(...e) : t.effects.push(e) : Io(e);
}
const Oe = /* @__PURE__ */ Symbol.for("v-fgt"), In = /* @__PURE__ */ Symbol.for("v-txt"), be = /* @__PURE__ */ Symbol.for("v-cmt"), dn = /* @__PURE__ */ Symbol.for("v-stc"), Wt = [];
let Ee = null;
function ae(e = !1) {
  Wt.push(Ee = e ? null : []);
}
function El() {
  Wt.pop(), Ee = Wt[Wt.length - 1] || null;
}
let Jt = 1;
function vn(e, t = !1) {
  Jt += e, e < 0 && Ee && t && (Ee.hasOnce = !0);
}
function Oi(e) {
  return e.dynamicChildren = Jt > 0 ? Ee || Tt : null, El(), Jt > 0 && Ee && Ee.push(e), e;
}
function Ce(e, t, n, s, r, i) {
  return Oi(
    k(
      e,
      t,
      n,
      s,
      r,
      i,
      !0
    )
  );
}
function ls(e, t, n, s, r) {
  return Oi(
    _e(
      e,
      t,
      n,
      s,
      r,
      !0
    )
  );
}
function wn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function bt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ii = ({ key: e }) => e ?? null, hn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? oe(e) || /* @__PURE__ */ pe(e) || N(e) ? { i: Me, r: e, k: t, f: !!n } : e : null);
function k(e, t = null, n = null, s = 0, r = null, i = e === Oe ? 0 : 1, o = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ii(t),
    ref: t && hn(t),
    scopeId: ei,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: Me
  };
  return l ? (Os(c, n), i & 128 && e.normalize(c)) : n && (c.shapeFlag |= oe(n) ? 8 : 16), Jt > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  Ee && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && Ee.push(c), c;
}
const _e = Al;
function Al(e, t = null, n = null, s = 0, r = null, i = !1) {
  if ((!e || e === Zo) && (e = be), wn(e)) {
    const l = ft(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Os(l, n), Jt > 0 && !i && Ee && (l.shapeFlag & 6 ? Ee[Ee.indexOf(e)] = l : Ee.push(l)), l.patchFlag = -2, l;
  }
  if (Hl(e) && (e = e.__vccOpts), t) {
    t = kl(t);
    let { class: l, style: c } = t;
    l && !oe(l) && (t.class = Ze(l)), J(c) && (/* @__PURE__ */ Ss(c) && !R(c) && (c = fe({}, c)), t.style = gs(c));
  }
  const o = oe(e) ? 1 : Pi(e) ? 128 : ii(e) ? 64 : J(e) ? 4 : N(e) ? 2 : 0;
  return k(
    e,
    t,
    n,
    s,
    r,
    o,
    i,
    !0
  );
}
function kl(e) {
  return e ? /* @__PURE__ */ Ss(e) || xi(e) ? fe({}, e) : e : null;
}
function ft(e, t, n = !1, s = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e, d = t ? Pl(r || {}, t) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ii(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? R(i) ? i.concat(hn(t)) : [i, hn(t)] : hn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Oe ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && ft(e.ssContent),
    ssFallback: e.ssFallback && ft(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && s && Yt(
    u,
    c.clone(u)
  ), u;
}
function $i(e = " ", t = 0) {
  return _e(In, null, e, t);
}
function Ml(e, t) {
  const n = _e(dn, null, e);
  return n.staticCount = t, n;
}
function ln(e = "", t = !1) {
  return t ? (ae(), ls(be, null, e)) : _e(be, null, e);
}
function We(e) {
  return e == null || typeof e == "boolean" ? _e(be) : R(e) ? _e(
    Oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : wn(e) ? Qe(e) : _e(In, null, String(e));
}
function Qe(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ft(e);
}
function Os(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (R(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Os(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !xi(t) ? t._ctx = Me : r === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else N(t) ? (t = { default: t, _ctx: Me }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [$i(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Pl(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const r in s)
      if (r === "class")
        t.class !== s.class && (t.class = Ze([t.class, s.class]));
      else if (r === "style")
        t.style = gs([t.style, s.style]);
      else if (Sn(r)) {
        const i = t[r], o = s[r];
        o && i !== o && !(R(i) && i.includes(o)) && (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = s[r]);
  }
  return t;
}
function je(e, t, n, s = null) {
  Fe(e, t, 7, [
    n,
    s
  ]);
}
const Ol = bi();
let Il = 0;
function $l(e, t, n) {
  const s = e.type, r = (t ? t.appContext : e.appContext) || Ol, i = {
    uid: Il++,
    vnode: e,
    type: s,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Qi(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Si(s, r),
    emitsOptions: yi(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ee,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ee,
    data: ee,
    props: ee,
    attrs: ee,
    slots: ee,
    refs: ee,
    setupState: ee,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = fl.bind(null, i), e.ce && e.ce(i), i;
}
let ye = null;
const Li = () => ye || Me;
let xn, cs;
{
  const e = En(), t = (n, s) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(s), (i) => {
      r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
    };
  };
  xn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ye = n
  ), cs = t(
    "__VUE_SSR_SETTERS__",
    (n) => Xt = n
  );
}
const tn = (e) => {
  const t = ye;
  return xn(e), e.scope.on(), () => {
    e.scope.off(), xn(t);
  };
}, nr = () => {
  ye && ye.scope.off(), xn(null);
};
function Fi(e) {
  return e.vnode.shapeFlag & 4;
}
let Xt = !1;
function Ll(e, t = !1, n = !1) {
  t && cs(t);
  const { props: s, children: r } = e.vnode, i = Fi(e);
  gl(e, s, i, t), _l(e, r, n || t);
  const o = i ? Fl(e, t) : void 0;
  return t && cs(!1), o;
}
function Fl(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, el);
  const { setup: s } = n;
  if (s) {
    nt();
    const r = e.setupContext = s.length > 1 ? Dl(e) : null, i = tn(e), o = en(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), l = Ar(o);
    if (st(), i(), (l || e.sp) && !Kt(e) && di(e), l) {
      if (o.then(nr, nr), t)
        return o.then((c) => {
          sr(e, c);
        }).catch((c) => {
          kn(c, e, 0);
        });
      e.asyncDep = o;
    } else
      sr(e, o);
  } else
    Ri(e);
}
function sr(e, t, n) {
  N(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : J(t) && (e.setupState = Yr(t)), Ri(e);
}
function Ri(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || Ge);
  {
    const r = tn(e);
    nt();
    try {
      tl(e);
    } finally {
      st(), r();
    }
  }
}
const Rl = {
  get(e, t) {
    return he(e, "get", ""), e[t];
  }
};
function Dl(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Rl),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function $n(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Yr(wo(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ut)
        return Ut[n](e);
    },
    has(t, n) {
      return n in t || n in Ut;
    }
  })) : e.proxy;
}
function Hl(e) {
  return N(e) && "__vccOpts" in e;
}
const Nl = (e, t) => /* @__PURE__ */ Ao(e, t, Xt);
function Vl(e, t, n) {
  try {
    vn(-1);
    const s = arguments.length;
    return s === 2 ? J(t) && !R(t) ? wn(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && wn(n) && (n = [n]), _e(e, t, n));
  } finally {
    vn(1);
  }
}
const jl = "3.5.30";
let fs;
const rr = typeof window < "u" && window.trustedTypes;
if (rr)
  try {
    fs = /* @__PURE__ */ rr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Di = fs ? (e) => fs.createHTML(e) : (e) => e, Bl = "http://www.w3.org/2000/svg", Kl = "http://www.w3.org/1998/Math/MathML", Xe = typeof document < "u" ? document : null, ir = Xe && /* @__PURE__ */ Xe.createElement("template"), Ul = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const r = t === "svg" ? Xe.createElementNS(Bl, e) : t === "mathml" ? Xe.createElementNS(Kl, e) : n ? Xe.createElement(e, { is: n }) : Xe.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Xe.createTextNode(e),
  createComment: (e) => Xe.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Xe.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, r, i) {
    const o = n ? n.previousSibling : t.lastChild;
    if (r && (r === i || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === i || !(r = r.nextSibling)); )
        ;
    else {
      ir.innerHTML = Di(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ir.content;
      if (s === "svg" || s === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      o ? o.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, lt = "transition", Lt = "animation", Zt = /* @__PURE__ */ Symbol("_vtc"), Hi = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Wl = /* @__PURE__ */ fe(
  {},
  li,
  Hi
), ql = (e) => (e.displayName = "Transition", e.props = Wl, e), Gl = /* @__PURE__ */ ql(
  (e, { slots: t }) => Vl(jo, zl(e), t)
), pt = (e, t = []) => {
  R(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, or = (e) => e ? R(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function zl(e) {
  const t = {};
  for (const A in e)
    A in Hi || (t[A] = e[A]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: r,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: o = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = i,
    appearActiveClass: d = o,
    appearToClass: u = l,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: v = `${n}-leave-active`,
    leaveToClass: x = `${n}-leave-to`
  } = e, M = Yl(r), E = M && M[0], V = M && M[1], {
    onBeforeEnter: D,
    onEnter: I,
    onEnterCancelled: B,
    onLeave: P,
    onLeaveCancelled: K,
    onBeforeAppear: G = D,
    onAppear: re = I,
    onAppearCancelled: ie = B
  } = t, $ = (A, z, ce, Ae) => {
    A._enterCancelled = Ae, gt(A, z ? u : l), gt(A, z ? d : o), ce && ce();
  }, j = (A, z) => {
    A._isLeaving = !1, gt(A, h), gt(A, x), gt(A, v), z && z();
  }, Z = (A) => (z, ce) => {
    const Ae = A ? re : I, le = () => $(z, A, ce);
    pt(Ae, [z, le]), lr(() => {
      gt(z, A ? c : i), Je(z, A ? u : l), or(Ae) || cr(z, s, E, le);
    });
  };
  return fe(t, {
    onBeforeEnter(A) {
      pt(D, [A]), Je(A, i), Je(A, o);
    },
    onBeforeAppear(A) {
      pt(G, [A]), Je(A, c), Je(A, d);
    },
    onEnter: Z(!1),
    onAppear: Z(!0),
    onLeave(A, z) {
      A._isLeaving = !0;
      const ce = () => j(A, z);
      Je(A, h), A._enterCancelled ? (Je(A, v), ar(A)) : (ar(A), Je(A, v)), lr(() => {
        A._isLeaving && (gt(A, h), Je(A, x), or(P) || cr(A, s, V, ce));
      }), pt(P, [A, ce]);
    },
    onEnterCancelled(A) {
      $(A, !1, void 0, !0), pt(B, [A]);
    },
    onAppearCancelled(A) {
      $(A, !0, void 0, !0), pt(ie, [A]);
    },
    onLeaveCancelled(A) {
      j(A), pt(K, [A]);
    }
  });
}
function Yl(e) {
  if (e == null)
    return null;
  if (J(e))
    return [Kn(e.enter), Kn(e.leave)];
  {
    const t = Kn(e);
    return [t, t];
  }
}
function Kn(e) {
  return Wi(e);
}
function Je(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Zt] || (e[Zt] = /* @__PURE__ */ new Set())).add(t);
}
function gt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Zt];
  n && (n.delete(t), n.size || (e[Zt] = void 0));
}
function lr(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Jl = 0;
function cr(e, t, n, s) {
  const r = e._endId = ++Jl, i = () => {
    r === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: o, timeout: l, propCount: c } = Xl(e, t);
  if (!o)
    return s();
  const d = o + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(d, v), i();
  }, v = (x) => {
    x.target === e && ++u >= c && h();
  };
  setTimeout(() => {
    u < c && h();
  }, l + 1), e.addEventListener(d, v);
}
function Xl(e, t) {
  const n = window.getComputedStyle(e), s = (M) => (n[M] || "").split(", "), r = s(`${lt}Delay`), i = s(`${lt}Duration`), o = fr(r, i), l = s(`${Lt}Delay`), c = s(`${Lt}Duration`), d = fr(l, c);
  let u = null, h = 0, v = 0;
  t === lt ? o > 0 && (u = lt, h = o, v = i.length) : t === Lt ? d > 0 && (u = Lt, h = d, v = c.length) : (h = Math.max(o, d), u = h > 0 ? o > d ? lt : Lt : null, v = u ? u === lt ? i.length : c.length : 0);
  const x = u === lt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${lt}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: v,
    hasTransform: x
  };
}
function fr(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => ur(n) + ur(e[s])));
}
function ur(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function ar(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Zl(e, t, n) {
  const s = e[Zt];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Tn = /* @__PURE__ */ Symbol("_vod"), Ni = /* @__PURE__ */ Symbol("_vsh"), Ql = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[Tn] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Ft(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: s }) {
    !t != !n && (s ? t ? (s.beforeEnter(e), Ft(e, !0), s.enter(e)) : s.leave(e, () => {
      Ft(e, !1);
    }) : Ft(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Ft(e, t);
  }
};
function Ft(e, t) {
  e.style.display = t ? e[Tn] : "none", e[Ni] = !t;
}
const ec = /* @__PURE__ */ Symbol(""), tc = /(?:^|;)\s*display\s*:/;
function nc(e, t, n) {
  const s = e.style, r = oe(n);
  let i = !1;
  if (n && !r) {
    if (t)
      if (oe(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          n[l] == null && pn(s, l, "");
        }
      else
        for (const o in t)
          n[o] == null && pn(s, o, "");
    for (const o in n)
      o === "display" && (i = !0), pn(s, o, n[o]);
  } else if (r) {
    if (t !== n) {
      const o = s[ec];
      o && (n += ";" + o), s.cssText = n, i = tc.test(n);
    }
  } else t && e.removeAttribute("style");
  Tn in e && (e[Tn] = i ? s.display : "", e[Ni] && (s.display = "none"));
}
const dr = /\s*!important$/;
function pn(e, t, n) {
  if (R(n))
    n.forEach((s) => pn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = sc(e, t);
    dr.test(n) ? e.setProperty(
      ut(s),
      n.replace(dr, ""),
      "important"
    ) : e[s] = n;
  }
}
const hr = ["Webkit", "Moz", "ms"], Un = {};
function sc(e, t) {
  const n = Un[t];
  if (n)
    return n;
  let s = Ie(t);
  if (s !== "filter" && s in e)
    return Un[t] = s;
  s = Pr(s);
  for (let r = 0; r < hr.length; r++) {
    const i = hr[r] + s;
    if (i in e)
      return Un[t] = i;
  }
  return t;
}
const pr = "http://www.w3.org/1999/xlink";
function gr(e, t, n, s, r, i = Xi(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(pr, t.slice(6, t.length)) : e.setAttributeNS(pr, t, n) : n == null || i && !Ir(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ze(n) ? String(n) : n
  );
}
function mr(e, t, n, s, r) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Di(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let o = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Ir(n) : n == null && l === "string" ? (n = "", o = !0) : l === "number" && (n = 0, o = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  o && e.removeAttribute(r || t);
}
function xt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function rc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const br = /* @__PURE__ */ Symbol("_vei");
function ic(e, t, n, s, r = null) {
  const i = e[br] || (e[br] = {}), o = i[t];
  if (s && o)
    o.value = s;
  else {
    const [l, c] = oc(t);
    if (s) {
      const d = i[t] = fc(
        s,
        r
      );
      xt(e, l, d, c);
    } else o && (rc(e, l, o, c), i[t] = void 0);
  }
}
const yr = /(?:Once|Passive|Capture)$/;
function oc(e) {
  let t;
  if (yr.test(e)) {
    t = {};
    let s;
    for (; s = e.match(yr); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ut(e.slice(2)), t];
}
let Wn = 0;
const lc = /* @__PURE__ */ Promise.resolve(), cc = () => Wn || (lc.then(() => Wn = 0), Wn = Date.now());
function fc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Fe(
      uc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = cc(), n;
}
function uc(e, t) {
  if (R(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (r) => !r._stopped && s && s(r)
    );
  } else
    return t;
}
const _r = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ac = (e, t, n, s, r, i) => {
  const o = r === "svg";
  t === "class" ? Zl(e, s, o) : t === "style" ? nc(e, n, s) : Sn(t) ? as(t) || ic(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : dc(e, t, s, o)) ? (mr(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && gr(e, t, s, o, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (hc(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !oe(s))) ? mr(e, Ie(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), gr(e, t, s, o));
};
function dc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && _r(t) && N(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return _r(t) && oe(n) ? !1 : t in e;
}
function hc(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ie(t);
  return Array.isArray(n) ? n.some((r) => Ie(r) === s) : Object.keys(n).some((r) => Ie(r) === s);
}
const vr = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return R(t) ? (n) => cn(t, n) : t;
};
function pc(e) {
  e.target.composing = !0;
}
function wr(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const qn = /* @__PURE__ */ Symbol("_assign");
function xr(e, t, n) {
  return t && (e = e.trim()), n && (e = ps(e)), e;
}
const gc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, r) {
    e[qn] = vr(r);
    const i = s || r.props && r.props.type === "number";
    xt(e, t ? "change" : "input", (o) => {
      o.target.composing || e[qn](xr(e.value, n, i));
    }), (n || i) && xt(e, "change", () => {
      e.value = xr(e.value, n, i);
    }), t || (xt(e, "compositionstart", pc), xt(e, "compositionend", wr), xt(e, "change", wr));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: r, number: i } }, o) {
    if (e[qn] = vr(o), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? ps(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (s && t === n || r && e.value.trim() === c) || (e.value = c));
  }
}, mc = ["ctrl", "shift", "alt", "meta"], bc = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => mc.some((n) => e[`${n}Key`] && !t.includes(n))
}, Gn = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = ((r, ...i) => {
    for (let o = 0; o < t.length; o++) {
      const l = bc[t[o]];
      if (l && l(r, t)) return;
    }
    return e(r, ...i);
  }));
}, yc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, zn = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = ((r) => {
    if (!("key" in r))
      return;
    const i = ut(r.key);
    if (t.some(
      (o) => o === i || yc[o] === i
    ))
      return e(r);
  }));
}, _c = /* @__PURE__ */ fe({ patchProp: ac }, Ul);
let Tr;
function vc() {
  return Tr || (Tr = wl(_c));
}
const wc = ((...e) => {
  const t = vc().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const r = Tc(s);
    if (!r) return;
    const i = t._component;
    !N(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = n(r, !1, xc(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, t;
});
function xc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Tc(e) {
  return oe(e) ? document.querySelector(e) : e;
}
const Vi = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, r] of t)
    n[s] = r;
  return n;
}, Sc = {}, Cc = {
  class: "docubucket-ai-typing-row",
  role: "status",
  "aria-label": "Support is typing"
};
function Ec(e, t) {
  return ae(), Ce("div", Cc, [...t[0] || (t[0] = [
    Ml('<div class="docubucket-ai-avatar" aria-hidden="true" data-v-f2baf8f4></div><div class="docubucket-ai-typing-bubble" data-v-f2baf8f4><span class="docubucket-ai-dot" style="--i:0;" data-v-f2baf8f4></span><span class="docubucket-ai-dot" style="--i:1;" data-v-f2baf8f4></span><span class="docubucket-ai-dot" style="--i:2;" data-v-f2baf8f4></span></div>', 2)
  ])]);
}
const Ac = /* @__PURE__ */ Vi(Sc, [["render", Ec], ["__scopeId", "data-v-f2baf8f4"]]), kc = { class: "cw-root" }, Mc = ["aria-label", "aria-expanded"], Pc = {
  key: "chat",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true"
}, Oc = {
  key: "close",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true"
}, Ic = { class: "docubucket-ai-chat-header" }, $c = { class: "docubucket-ai-chat-header__info" }, Lc = { class: "docubucket-ai-chat-header-info__text" }, Fc = { class: "docubucket-ai-chat-header-name" }, Rc = { class: "docubucket-ai-chat-header-status" }, Dc = { class: "docubucket-ai-action-btn" }, Hc = {
  key: 0,
  class: "docubucket-ai-bot-avatar"
}, Nc = {
  key: 0,
  class: "docubucket-ai-msg-file"
}, Vc = ["src"], jc = {
  key: 1,
  class: "docubucket-ai-msg-file-doc"
}, Bc = ["innerHTML"], Kc = { class: "docubucket-ai-msg-time" }, Uc = { class: "docubucket-ai-input-bar" }, Wc = ["placeholder", "disabled", "aria-label", "onKeydown"], qc = ["disabled"], Sr = "https://docubucketai.lexiconnetworks.com/api/chat-bots/conversations", Gc = {
  __name: "ChatWidget",
  props: {
    botName: { type: String, default: "Helpdesk" },
    placeholderText: { type: String, default: "'Type a message…'" },
    expanded: { type: String, default: "false" },
    agentId: { type: String, default: "" },
    userId: { type: String, default: "" },
    token: { type: String, default: "" },
    expiresAt: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ xe(!1), s = /* @__PURE__ */ xe(""), r = /* @__PURE__ */ xe(!1), i = /* @__PURE__ */ xe(null), o = /* @__PURE__ */ xe(null), l = /* @__PURE__ */ xe(null), c = /* @__PURE__ */ xe(null), d = /* @__PURE__ */ xe([
      D("bot", "👋 Hi there! How can I help you today?")
    ]), u = /* @__PURE__ */ xe(!1), h = /* @__PURE__ */ xe(null), v = /* @__PURE__ */ xe(""), x = /* @__PURE__ */ xe(null), M = /* @__PURE__ */ xe(!1);
    let E = 0;
    const V = /* @__PURE__ */ xe(String(Date.now()));
    Es(() => {
      A(), z(), window.visualViewport ? (window.visualViewport.addEventListener("resize", Ae), window.visualViewport.addEventListener("scroll", le)) : window.addEventListener("resize", ce);
    }), As(() => {
      window.visualViewport ? (window.visualViewport.removeEventListener("resize", Ae), window.visualViewport.removeEventListener("scroll", le)) : window.removeEventListener("resize", ce), document.body.style.position = "", document.body.style.top = "", document.body.style.left = "", document.body.style.right = "", document.body.style.overflow = "";
    }), Et(o, (O) => {
      O && (O.addEventListener("touchstart", j, { passive: !0 }), O.addEventListener("touchmove", Z, { passive: !1 }));
    }), Et(
      d,
      (O, g) => {
        O.length > g.length && I();
      },
      { flush: "post" }
    ), Et(
      () => t.expanded,
      (O) => {
        O !== null && JSON?.parse(O?.toLowerCase()) && (n.value = !0);
      },
      { immediate: !0 }
    );
    function D(O, g, W = null) {
      return {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        sender: O,
        text: g,
        file: W?.file ?? null,
        fileName: W?.name ?? null,
        fileType: W?.type ?? null,
        filePreview: W?.preview ?? null,
        time: (/* @__PURE__ */ new Date()).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit"
        })
      };
    }
    async function I() {
      await fn(), c.value?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
    function B() {
      const O = l.value;
      O && (O.style.height = "auto", O.style.height = Math.min(O.scrollHeight, 100) + "px");
    }
    function P() {
      n.value ? G() : K();
    }
    function K() {
      z(), E = window.scrollY, document.body.style.position = "fixed", document.body.style.top = `-${E}px`, document.body.style.left = "0", document.body.style.right = "0", document.body.style.overflow = "hidden", requestAnimationFrame(() => {
        n.value = !0, fn(() => {
          setTimeout(() => l.value?.focus(), 150);
        });
      });
    }
    function G() {
      l.value?.blur(), n.value = !1, M.value = !1, document.querySelector(".docubucket-ai-chat-panel").classList.remove("docubucket-ai-eye-chat-panel--expanded"), setTimeout(() => {
        document.body.style.position = "", document.body.style.top = "", document.body.style.left = "", document.body.style.right = "", document.body.style.overflow = "", window.scrollTo(0, E);
      }, 300), d.value = [D("bot", "👋 Hi there! How can I help you today?")];
    }
    async function re() {
      const O = s.value.trim(), g = h.value;
      if (!O && !g) return;
      const W = g ? {
        file: !0,
        name: g.name,
        type: g.type,
        preview: v.value
      } : null;
      d.value.push(D("user", O, W)), s.value = "", se(), u.value = !1, r.value = !0, I();
      try {
        let De;
        if (g) {
          const ue = new FormData();
          ue.append("agent_id", AGENT_ID), ue.append("expires_at", EXPIRES_AT), ue.append("session_id", V.value), ue.append("text", O || "Please analyse this file."), ue.append("file", g, g.name);
          const ot = await fetch(Sr, {
            method: "POST",
            headers: { Authorization: `Bearer ${API_TOKEN}` },
            body: ue
          });
          if (!ot.ok) throw new Error(`HTTP ${ot.status}`);
          De = await ot.json();
        } else {
          const ue = await fetch(Sr, {
            method: "POST",
            // In callAPI — use props.agentId, props.token, props.expiresAt
            body: JSON.stringify({
              agent_id: t.agentId,
              expires_at: t.expiresAt,
              session_id: V.value,
              text: O
            }),
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${t.token}`
            }
          });
          if (!ue.ok) throw new Error(`HTTP ${ue.status}`);
          De = await ue.json();
        }
        r.value = !1;
        const Mt = De?.text?.text?.[0] || "I couldn't parse the response.";
        d.value.push(D("bot", Mt));
      } catch (De) {
        console.error("[ChatWidget] error:", De), r.value = !1, d.value.push(
          D("bot", "Sorry, I couldn't connect right now. Please try again.")
        );
      }
      I();
    }
    function ie() {
      s.value += `
`, fn(B);
    }
    let $ = 0;
    function j(O) {
      $ = O.touches[0].clientY;
    }
    function Z(O) {
      const g = o.value;
      if (!g) return;
      const W = O.touches[0].clientY - $, De = g.scrollTop <= 0, Mt = g.scrollTop + g.clientHeight >= g.scrollHeight - 1;
      if (De && W > 0) {
        O.preventDefault();
        return;
      }
      if (Mt && W < 0) {
        O.preventDefault();
        return;
      }
      O.stopPropagation();
    }
    function A() {
      let O = document.querySelector('meta[name="viewport"]');
      if (O) {
        const g = O.getAttribute("content") || "";
        g.includes("interactive-widget") || O.setAttribute(
          "content",
          g + ", interactive-widget=resizes-content"
        );
      } else
        O = document.createElement("meta"), O.name = "viewport", O.content = "width=device-width, initial-scale=1, interactive-widget=resizes-content", document.head.appendChild(O);
    }
    function z() {
      if (window.visualViewport) {
        const O = window.visualViewport;
        document.documentElement.style.setProperty(
          "--vvp-height",
          `${O.height}px`
        ), document.documentElement.style.setProperty(
          "--vvp-offset-top",
          `${O.offsetTop}px`
        ), document.documentElement.style.setProperty(
          "--vvp-offset-left",
          `${O.offsetLeft}px`
        ), document.documentElement.style.setProperty("--vvp-width", `${O.width}px`);
      } else
        document.documentElement.style.setProperty(
          "--vvp-height",
          `${window.innerHeight}px`
        ), document.documentElement.style.setProperty("--vvp-offset-top", "0px"), document.documentElement.style.setProperty("--vvp-offset-left", "0px"), document.documentElement.style.setProperty(
          "--vvp-width",
          `${window.innerWidth}px`
        );
    }
    function ce() {
      z();
    }
    function Ae() {
      z(), n.value && I();
    }
    function le() {
      z();
    }
    function se() {
      h.value = null, v.value = "", x.value && (x.value.value = "");
    }
    function Q(O) {
      if (!O) return "";
      let g = Re(O);
      return g = g.replace(/^### (.+)$/gm, "<h3>$1</h3>"), g = g.replace(/^## (.+)$/gm, "<h2>$1</h2>"), g = g.replace(/^# (.+)$/gm, "<h1>$1</h1>"), g = g.replace(/\*\*\*(.+?)\*\*\*/g, "<strong><em>$1</em></strong>"), g = g.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>"), g = g.replace(/\*(.+?)\*/g, "<em>$1</em>"), g = g.replace(/`([^`]+)`/g, "<code>$1</code>"), g = g.replace(
        /```[\w]*\n?([\s\S]*?)```/g,
        "<pre><code>$1</code></pre>"
      ), g = g.replace(
        /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
      ), g = g.replace(
        /(^|[\s])(https?:\/\/[^\s<]+)/g,
        '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>'
      ), g = g.replace(/^\s*[-*] (.+)$/gm, "<li>$1</li>"), g = g.replace(/(<li>.*<\/li>)/s, "<ul>$1</ul>"), g = g.replace(/^\d+\. (.+)$/gm, "<li>$1</li>"), g = g.replace(/^&gt; (.+)$/gm, "<blockquote>$1</blockquote>"), g = g.replace(/\n\n/g, "</p><p>"), g = g.replace(/\n/g, "<br/>"), g = "<p>" + g + "</p>", g = g.replace(/<p><\/p>/g, ""), g = g.replace(/<p>(<h[1-3]>)/g, "$1"), g = g.replace(/(<\/h[1-3]>)<\/p>/g, "$1"), g = g.replace(/<p>(<ul>)/g, "$1"), g = g.replace(/(<\/ul>)<\/p>/g, "$1"), g = g.replace(/<p>(<pre>)/g, "$1"), g = g.replace(/(<\/pre>)<\/p>/g, "$1"), g;
    }
    function Re(O) {
      return O.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function at(O) {
      M.value = O, M.value ? document.querySelector(".docubucket-ai-chat-panel").classList.add("docubucket-ai-eye-chat-panel--expanded") : document.querySelector(".docubucket-ai-chat-panel").classList.remove("docubucket-ai-eye-chat-panel--expanded");
    }
    return (O, g) => (ae(), Ce("div", kc, [
      k("button", {
        class: Ze(["docubucket-ai-chat-launcher", { "docubucket-ai-chat-launcher--open": n.value }]),
        onClick: P,
        "aria-label": n.value ? "Close chat" : "Open chat",
        "aria-expanded": n.value,
        "aria-haspopup": "dialog"
      }, [
        _e(Gl, { name: "docubucket-ai-icon-spin" }, {
          default: ti(() => [
            n.value ? (ae(), Ce("svg", Oc, [...g[5] || (g[5] = [
              k("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round"
              }, null, -1),
              k("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18",
                stroke: "currentColor",
                "stroke-width": "2.5",
                "stroke-linecap": "round"
              }, null, -1)
            ])])) : (ae(), Ce("svg", Pc, [...g[4] || (g[4] = [
              k("path", {
                d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, null, -1)
            ])]))
          ]),
          _: 1
        })
      ], 10, Mc),
      (ae(), ls(Ho, { to: "body" }, [
        js(k("div", {
          class: Ze(["docubucket-ai-chat-overlay", { "is-open": n.value }]),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": "Chat with support",
          onKeydown: zn(G, ["esc"]),
          onTouchmove: g[3] || (g[3] = Gn(() => {
          }, ["prevent"]))
        }, [
          k("div", {
            class: "docubucket-ai-chat-panel",
            ref_key: "panelRef",
            ref: i
          }, [
            k("header", Ic, [
              k("div", $c, [
                g[6] || (g[6] = k("div", { class: "docubucket-ai-chat-header-avatar" }, [
                  k("svg", {
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    stroke: "white",
                    class: "sv"
                  }, [
                    k("g", { class: "docubucket-ai-antenna" }, [
                      k("line", {
                        x1: "32",
                        y1: "10",
                        x2: "32",
                        y2: "18",
                        "stroke-width": "2"
                      }),
                      k("circle", {
                        cx: "32",
                        cy: "8",
                        r: "2",
                        "stroke-width": "2"
                      })
                    ]),
                    k("rect", {
                      x: "10",
                      y: "26",
                      width: "4",
                      height: "10",
                      rx: "2",
                      "stroke-width": "2"
                    }),
                    k("rect", {
                      x: "50",
                      y: "26",
                      width: "4",
                      height: "10",
                      rx: "2",
                      "stroke-width": "2"
                    }),
                    k("rect", {
                      x: "14",
                      y: "18",
                      width: "36",
                      height: "26",
                      rx: "10",
                      "stroke-width": "2"
                    }),
                    k("circle", {
                      class: "docubucket-ai-eye",
                      cx: "26",
                      cy: "30",
                      r: "2.5",
                      fill: "white"
                    }),
                    k("circle", {
                      class: "docubucket-ai-eye",
                      cx: "38",
                      cy: "30",
                      r: "2.5",
                      fill: "white"
                    }),
                    k("path", {
                      class: "docubucket-ai-smile",
                      d: "M26 38c2 2 10 2 12 0",
                      "stroke-width": "2",
                      "stroke-linecap": "round"
                    })
                  ])
                ], -1)),
                k("div", Lc, [
                  k("span", Fc, Rt(e.botName), 1),
                  k("span", Rc, [
                    k("span", {
                      class: Ze(["docubucket-ai-status-dot", { typing: r.value }])
                    }, null, 2),
                    $i(" " + Rt(r.value ? "typing..." : "Online"), 1)
                  ])
                ])
              ]),
              k("div", Dc, [
                M.value ? (ae(), Ce("button", {
                  key: 0,
                  class: "docubucket-ai-status-expand-btn",
                  onClick: g[0] || (g[0] = (W) => at(!1))
                }, [...g[7] || (g[7] = [
                  k("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "lucide lucide-minimize2-icon lucide-minimize-2"
                  }, [
                    k("path", { d: "m14 10 7-7" }),
                    k("path", { d: "M20 10h-6V4" }),
                    k("path", { d: "m3 21 7-7" }),
                    k("path", { d: "M4 14h6v6" })
                  ], -1)
                ])])) : (ae(), Ce("button", {
                  key: 1,
                  class: "docubucket-ai-status-expand-btn",
                  onClick: g[1] || (g[1] = (W) => at(!0))
                }, [...g[8] || (g[8] = [
                  k("svg", {
                    width: "20",
                    height: "20",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    k("path", { d: "M15 3h6v6" }),
                    k("path", { d: "m21 3-7 7" }),
                    k("path", { d: "m3 21 7-7" }),
                    k("path", { d: "M9 21H3v-6" })
                  ], -1)
                ])])),
                k("button", {
                  class: "docubucket-ai-close-btn",
                  onClick: G,
                  "aria-label": "Close chat"
                }, [...g[9] || (g[9] = [
                  k("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "aria-hidden": "true"
                  }, [
                    k("line", {
                      x1: "18",
                      y1: "6",
                      x2: "6",
                      y2: "18",
                      stroke: "currentColor",
                      "stroke-width": "2.5",
                      "stroke-linecap": "round"
                    }),
                    k("line", {
                      x1: "6",
                      y1: "6",
                      x2: "18",
                      y2: "18",
                      stroke: "currentColor",
                      "stroke-width": "2.5",
                      "stroke-linecap": "round"
                    })
                  ], -1)
                ])])
              ])
            ]),
            k("div", {
              class: "docubucket-ai-messages-feed",
              ref_key: "feedRef",
              ref: o,
              role: "log",
              "aria-live": "polite",
              "aria-label": "Chat messages"
            }, [
              g[12] || (g[12] = k("div", {
                class: "docubucket-ai-messages-spacer",
                "aria-hidden": "true"
              }, null, -1)),
              (ae(!0), Ce(Oe, null, Qo(d.value, (W, De) => (ae(), Ce("div", {
                key: W.id,
                class: Ze([
                  "docubucket-ai-msg-row",
                  W.sender === "user" ? "docubucket-ai-msg-user" : "docubucket-ai-msg-bot"
                ])
              }, [
                W.sender === "bot" ? (ae(), Ce("div", Hc, [...g[10] || (g[10] = [
                  k("svg", {
                    width: "22",
                    height: "22",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    "stroke-width": "1.8",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    class: "docubucket-ai-bot-avatar-img"
                  }, [
                    k("path", { d: "M12 8V4H8" }),
                    k("rect", {
                      width: "16",
                      height: "12",
                      x: "4",
                      y: "8",
                      rx: "2"
                    }),
                    k("path", { d: "M2 14h2" }),
                    k("path", { d: "M20 14h2" }),
                    k("path", { d: "M15 13v2" }),
                    k("path", { d: "M9 13v2" })
                  ], -1)
                ])])) : ln("", !0),
                k("div", {
                  class: Ze([
                    "docubucket-ai-bot-msg-bubble",
                    W.sender === "user" ? "docubucket-ai-bot-bubble-user" : "docubucket-ai-bot-bubble-bot"
                  ])
                }, [
                  W.file ? (ae(), Ce("div", Nc, [
                    W.fileType?.startsWith("image/") ? (ae(), Ce("img", {
                      key: 0,
                      src: W.filePreview,
                      class: "docubucket-ai-msg-file-img",
                      alt: "attachment"
                    }, null, 8, Vc)) : (ae(), Ce("div", jc, [
                      g[11] || (g[11] = k("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        k("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                        k("polyline", { points: "14 2 14 8 20 8" })
                      ], -1)),
                      k("span", null, Rt(W.fileName), 1)
                    ]))
                  ])) : ln("", !0),
                  W.text ? (ae(), Ce("div", {
                    key: 1,
                    class: Ze({
                      "docubucket-ai-msg-markdown": W.sender === "bot"
                    }),
                    innerHTML: W.sender === "bot" ? Q(W.text) : Re(W.text)
                  }, null, 10, Bc)) : ln("", !0),
                  k("span", Kc, Rt(W.time), 1)
                ], 2)
              ], 2))), 128)),
              r.value ? (ae(), ls(Ac, { key: 0 })) : ln("", !0),
              k("div", {
                ref_key: "bottomAnchorRef",
                ref: c,
                "aria-hidden": "true"
              }, null, 512)
            ], 512),
            k("footer", Uc, [
              g[14] || (g[14] = k("label", {
                class: "sr-only",
                for: "chat-input"
              }, "Type your message", -1)),
              js(k("textarea", {
                id: "chat-input",
                ref_key: "inputRef",
                ref: l,
                "onUpdate:modelValue": g[2] || (g[2] = (W) => s.value = W),
                class: "docubucket-ai-input-bar__textarea",
                placeholder: e.placeholderText,
                rows: "1",
                disabled: r.value,
                "aria-label": r.value ? "Waiting for reply…" : "Type your message",
                onKeydown: [
                  zn(Gn(re, ["exact", "prevent"]), ["enter"]),
                  zn(Gn(ie, ["shift", "exact"]), ["enter"])
                ],
                onInput: B
              }, null, 40, Wc), [
                [gc, s.value]
              ]),
              k("button", {
                class: "docubucket-ai-send-btn",
                disabled: !s.value.trim() || r.value,
                onClick: re,
                "aria-label": "Send message"
              }, [...g[13] || (g[13] = [
                k("svg", {
                  width: "20",
                  height: "20",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  "aria-hidden": "true"
                }, [
                  k("path", {
                    d: "M22 2L11 13",
                    stroke: "currentColor",
                    "stroke-width": "2.2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }),
                  k("path", {
                    d: "M22 2L15 22L11 13L2 9L22 2Z",
                    stroke: "currentColor",
                    "stroke-width": "2.2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  })
                ], -1)
              ])], 8, qc)
            ])
          ], 512)
        ], 34), [
          [Ql, n.value]
        ])
      ]))
    ]));
  }
}, zc = /* @__PURE__ */ Vi(Gc, [["__scopeId", "data-v-cee4f163"]]);
class Yc extends HTMLElement {
  static get observedAttributes() {
    return ["data-bot-name"];
  }
  constructor() {
    super(), this.__mounted = !1, this.app = null, this.mountEl = null;
  }
  connectedCallback() {
    this.__mounted || (this.__mounted = !0, this.init());
  }
  init() {
    try {
      const t = this.getAttribute("data-agent-id") || "", n = this.getAttribute("data-user-id") || "", s = this.getAttribute("data-token") || "", r = this.getAttribute("data-expires-at") || "", i = this.getAttribute("data-bot-name") || "Helpdesk", o = this.getAttribute("data-placeholder-text") || "Type your message...", l = this.getAttribute("expanded") || "false";
      this.mountEl = document.createElement("div"), this.appendChild(this.mountEl), this.app = wc(zc, {
        agentId: t,
        userId: n,
        token: s,
        expires: r,
        botName: i,
        placeholderText: o,
        expanded: l
      }), this.app.mount(this.mountEl);
    } catch (t) {
      console.error("DocuMessenger init error:", t);
    }
  }
  attributeChangedCallback(t, n, s) {
    t === "data-bot-name" && n !== s && this.update();
  }
  update() {
    this.app && (this.app.unmount(), this.__mounted = !1, this.init());
  }
  disconnectedCallback() {
    this.app && (this.app.unmount(), this.app = null), this.__mounted = !1;
  }
}
customElements.get("docubucket-ai-messenger") || customElements.define("docubucket-ai-messenger", Yc);
