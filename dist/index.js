import { defineComponent as a, computed as d, openBlock as u, createElementBlock as r, normalizeClass as p, renderSlot as _ } from "vue";
const c = ["type", "disabled"], i = /* @__PURE__ */ a({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = d(() => `${t.color} ${t.outline ? "btn-outline" : ""}`);
    return (n, s) => (u(), r("button", {
      type: t.type,
      onSubmit: s[0] || (s[0] = (l) => n.$emit("submit", l)),
      class: p(["rounded px-3 py-1", o.value]),
      disabled: t.disabled
    }, [
      _(n.$slots, "default", {}, void 0, !0)
    ], 42, c));
  }
});
const f = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, y = /* @__PURE__ */ f(i, [["__scopeId", "data-v-765d550a"]]);
export {
  y as MButton
};
//# sourceMappingURL=index.js.map
