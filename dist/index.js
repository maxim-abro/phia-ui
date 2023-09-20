import { defineComponent as s, computed as d, openBlock as a, createElementBlock as u, normalizeClass as r, renderSlot as _ } from "vue";
const i = ["type", "disabled"], f = /* @__PURE__ */ s({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, o = d(() => `${e.color} ${e.outline ? "btn-outline" : ""}`);
    return (n, l) => (a(), u("button", {
      type: e.type,
      onSubmit: l[0] || (l[0] = (c) => n.$emit("submit", c)),
      class: r(["rounded px-3 py-1", o.value]),
      disabled: e.disabled
    }, [
      _(n.$slots, "default", {}, void 0, !0)
    ], 42, i));
  }
});
const p = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, l] of e)
    o[n] = l;
  return o;
}, v = /* @__PURE__ */ p(f, [["__scopeId", "data-v-3e70092f"]]), y = ["href"], m = /* @__PURE__ */ s({
  __name: "MLink",
  props: {
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "#" },
    underline: { type: Boolean, default: !1 }
  },
  setup(t) {
    const e = t, o = d(() => `${e.color} ${e.underline ? "link-underline" : ""} ${e.disabled ? "link-disabled" : ""}`);
    return (n, l) => (a(), u("a", {
      href: e.href,
      class: r(o.value)
    }, [
      _(n.$slots, "default", {}, void 0, !0)
    ], 10, y));
  }
});
const $ = /* @__PURE__ */ p(m, [["__scopeId", "data-v-3d54355d"]]);
export {
  v as MButton,
  $ as MLink
};
//# sourceMappingURL=index.js.map
