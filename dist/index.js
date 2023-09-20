import { defineComponent as d, computed as p, openBlock as u, createElementBlock as r, normalizeClass as _, renderSlot as f, ref as b, onMounted as m, watch as v, withDirectives as h, createElementVNode as i, vModelCheckbox as y, toDisplayString as k } from "vue";
const $ = ["type", "disabled"], B = /* @__PURE__ */ d({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(l) {
    const t = l, n = p(() => `${t.color} ${t.outline ? "btn-outline" : ""}`);
    return (o, e) => (u(), r("button", {
      type: t.type,
      onSubmit: e[0] || (e[0] = (a) => o.$emit("submit", a)),
      class: _(["rounded px-3 py-1", n.value]),
      disabled: t.disabled
    }, [
      f(o.$slots, "default", {}, void 0, !0)
    ], 42, $));
  }
});
const c = (l, t) => {
  const n = l.__vccOpts || l;
  for (const [o, e] of t)
    n[o] = e;
  return n;
}, L = /* @__PURE__ */ c(B, [["__scopeId", "data-v-3e70092f"]]), M = ["href"], g = /* @__PURE__ */ d({
  __name: "MLink",
  props: {
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "#" },
    underline: { type: Boolean, default: !1 }
  },
  setup(l) {
    const t = l, n = p(() => `${t.color} ${t.underline ? "link-underline" : ""} ${t.disabled ? "link-disabled" : ""}`);
    return (o, e) => (u(), r("a", {
      href: t.href,
      class: _(n.value)
    }, [
      f(o.$slots, "default", {}, void 0, !0)
    ], 10, M));
  }
});
const w = /* @__PURE__ */ c(g, [["__scopeId", "data-v-3d54355d"]]), C = { class: "flex items-center cursor-pointer" }, x = ["id", "name", "checked", "disabled"], I = ["for"], S = /* @__PURE__ */ d({
  __name: "MCheckbox",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: "" },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: t }) {
    const n = l, o = b(!1);
    return m(() => {
      o.value = n.checked;
    }), v(o, (e) => {
      t("update:modelValue", e);
    }), (e, a) => (u(), r("div", C, [
      h(i("input", {
        type: "checkbox",
        id: e.name,
        name: e.name,
        checked: o.value,
        disabled: e.disabled,
        "onUpdate:modelValue": a[0] || (a[0] = (s) => o.value = s),
        onChange: a[1] || (a[1] = (s) => e.$emit("change", s)),
        class: "checkbox"
      }, null, 40, x), [
        [y, o.value]
      ]),
      i("label", {
        class: "label",
        for: e.name
      }, k(e.label), 9, I)
    ]));
  }
});
const D = /* @__PURE__ */ c(S, [["__scopeId", "data-v-b9ad10a5"]]);
export {
  L as MButton,
  D as MCheckbox,
  w as MLink
};
//# sourceMappingURL=index.js.map
