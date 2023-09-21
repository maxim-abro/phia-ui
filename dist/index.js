import { defineComponent as r, computed as m, openBlock as n, createElementBlock as d, normalizeClass as v, renderSlot as y, ref as i, onMounted as g, watch as B, withDirectives as h, createElementVNode as _, vModelCheckbox as M, toDisplayString as C, vModelDynamic as I, createCommentVNode as b } from "vue";
const w = ["type", "disabled"], V = /* @__PURE__ */ r({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(s) {
    const t = s, a = m(() => `${t.color} ${t.outline ? "btn-outline" : ""}`);
    return (e, l) => (n(), d("button", {
      type: t.type,
      onSubmit: l[0] || (l[0] = (o) => e.$emit("submit", o)),
      class: v(["rounded px-3 py-1", a.value]),
      disabled: t.disabled
    }, [
      y(e.$slots, "default", {}, void 0, !0)
    ], 42, w));
  }
});
const p = (s, t) => {
  const a = s.__vccOpts || s;
  for (const [e, l] of t)
    a[e] = l;
  return a;
}, j = /* @__PURE__ */ p(V, [["__scopeId", "data-v-9fe18dc1"]]), x = ["href"], S = /* @__PURE__ */ r({
  __name: "MLink",
  props: {
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "#" },
    underline: { type: Boolean, default: !1 }
  },
  setup(s) {
    const t = s, a = m(() => `${t.color} ${t.underline ? "link-underline" : ""} ${t.disabled ? "link-disabled" : ""}`);
    return (e, l) => (n(), d("a", {
      href: t.href,
      class: v(a.value)
    }, [
      y(e.$slots, "default", {}, void 0, !0)
    ], 10, x));
  }
});
const q = /* @__PURE__ */ p(S, [["__scopeId", "data-v-345b854e"]]), D = { class: "flex items-center cursor-pointer" }, L = ["id", "name", "checked", "disabled"], N = ["for"], P = /* @__PURE__ */ r({
  __name: "MCheckbox",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: "" },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: t }) {
    const a = s, e = i(!1);
    return g(() => {
      e.value = a.checked;
    }), B(e, (l) => {
      t("update:modelValue", l);
    }), (l, o) => (n(), d("div", D, [
      h(_("input", {
        type: "checkbox",
        id: l.name,
        name: l.name,
        checked: e.value,
        disabled: l.disabled,
        "onUpdate:modelValue": o[0] || (o[0] = (u) => e.value = u),
        onChange: o[1] || (o[1] = (u) => l.$emit("change", u)),
        class: "checkbox"
      }, null, 40, L), [
        [M, e.value]
      ]),
      _("label", {
        class: "label",
        for: l.name
      }, C(l.label), 9, N)
    ]));
  }
});
const A = /* @__PURE__ */ p(P, [["__scopeId", "data-v-f3e5f538"]]), E = { class: "relative" }, U = ["type", "placeholder", "disabled"], z = /* @__PURE__ */ r({
  __name: "MInput",
  props: {
    type: { default: "text" },
    placeholder: {},
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: t }) {
    const a = s, e = i(a.type);
    function l(c) {
      t("update:modelValue", c.target.value);
    }
    const o = i(""), u = () => e.value === "password" ? e.value = "text" : e.value = "password";
    function k(c) {
      o.value = "", t("update:modelValue", "");
    }
    return (c, f) => (n(), d("div", E, [
      h(_("input", {
        type: e.value,
        placeholder: c.placeholder,
        disabled: c.disabled,
        onInput: l,
        class: "input",
        "onUpdate:modelValue": f[0] || (f[0] = ($) => o.value = $)
      }, null, 40, U), [
        [I, o.value]
      ]),
      a.clearable && o.value.length ? (n(), d("button", {
        key: 0,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: k
      }, " clear ")) : b("", !0),
      a.showPassword ? (n(), d("button", {
        key: 1,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: u
      }, " eye ")) : b("", !0)
    ]));
  }
});
const F = /* @__PURE__ */ p(z, [["__scopeId", "data-v-a687245a"]]);
export {
  j as MButton,
  A as MCheckbox,
  F as MInput,
  q as MLink
};
//# sourceMappingURL=index.js.map
