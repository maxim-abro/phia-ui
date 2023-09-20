import { defineComponent as d, computed as u, openBlock as a, createElementBlock as r, normalizeClass as p, renderSlot as _ } from "vue";
const c = ["type", "disabled"], i = /* @__PURE__ */ d({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = u(() => `${t.color} ${t.outline ? "btn-outline" : ""}`);
    return (n, s) => (a(), r("button", {
      type: t.type,
      onSubmit: s[0] || (s[0] = (l) => n.$emit("submit", l)),
      class: p(["rounded px-3 py-1", o.value]),
      disabled: t.disabled
    }, [
      _(n.$slots, "default", {}, void 0, !0)
    ], 42, c));
  }
});
const b = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, m = /* @__PURE__ */ b(i, [["__scopeId", "data-v-d75fbbbd"]]);
export {
  m as MButton
};
//# sourceMappingURL=index.js.map
