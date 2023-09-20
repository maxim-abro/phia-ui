import { defineComponent as a, computed as u, openBlock as d, createElementBlock as p, normalizeClass as r, renderSlot as i } from "vue";
const f = ["type", "disabled"], b = /* @__PURE__ */ a({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(l) {
    const e = l, n = u(() => `${e.color} ${e.outline ? "btn-outline" : ""}`);
    return (t, o) => (d(), p("button", {
      type: e.type,
      onSubmit: o[0] || (o[0] = (s) => t.$emit("submit", s)),
      class: r(["rounded px-3 py-1", n.value]),
      disabled: e.disabled
    }, [
      i(t.$slots, "default")
    ], 42, f));
  }
});
export {
  b as MButton
};
//# sourceMappingURL=index.js.map
