import { defineComponent as v, computed as _, openBlock as r, createElementBlock as p, normalizeClass as c, renderSlot as $, ref as m, onMounted as g, watch as M, withDirectives as k, createElementVNode as f, vModelCheckbox as x, toDisplayString as B, vModelDynamic as V, createCommentVNode as I, vModelText as C } from "vue";
const w = ["type", "disabled"], z = /* @__PURE__ */ v({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(s) {
    const n = s, t = _(() => `${n.color} ${n.outline ? "btn-outline" : ""}`);
    return (e, l) => (r(), p("button", {
      type: n.type,
      onSubmit: l[0] || (l[0] = (o) => e.$emit("submit", o)),
      class: c(["rounded px-3 py-1", t.value]),
      disabled: n.disabled
    }, [
      $(e.$slots, "default", {}, void 0, !0)
    ], 42, w));
  }
});
const y = (s, n) => {
  const t = s.__vccOpts || s;
  for (const [e, l] of n)
    t[e] = l;
  return t;
}, G = /* @__PURE__ */ y(z, [["__scopeId", "data-v-9fe18dc1"]]), N = ["href"], S = /* @__PURE__ */ v({
  __name: "MLink",
  props: {
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "#" },
    underline: { type: Boolean, default: !1 }
  },
  setup(s) {
    const n = s, t = _(() => `${n.color} ${n.underline ? "link-underline" : ""} ${n.disabled ? "link-disabled" : ""}`);
    return (e, l) => (r(), p("a", {
      href: n.href,
      class: c(t.value)
    }, [
      $(e.$slots, "default", {}, void 0, !0)
    ], 10, N));
  }
});
const H = /* @__PURE__ */ y(S, [["__scopeId", "data-v-345b854e"]]), D = { class: "flex items-center cursor-pointer" }, L = ["id", "name", "checked", "disabled"], P = ["for"], U = /* @__PURE__ */ v({
  __name: "MCheckbox",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: "" },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const t = s, e = m(!1);
    return g(() => {
      e.value = t.checked;
    }), M(e, (l) => {
      n("update:modelValue", l);
    }), (l, o) => (r(), p("div", D, [
      k(f("input", {
        type: "checkbox",
        id: l.name,
        name: l.name,
        checked: e.value,
        disabled: l.disabled,
        "onUpdate:modelValue": o[0] || (o[0] = (i) => e.value = i),
        onChange: o[1] || (o[1] = (i) => l.$emit("change", i)),
        class: "checkbox"
      }, null, 40, L), [
        [x, e.value]
      ]),
      f("label", {
        class: "label",
        for: l.name
      }, B(l.label), 9, P)
    ]));
  }
});
const J = /* @__PURE__ */ y(U, [["__scopeId", "data-v-f3e5f538"]]), E = { class: "relative" }, O = ["type", "placeholder", "disabled"], T = /* @__PURE__ */ v({
  __name: "MInput",
  props: {
    type: { default: "text" },
    placeholder: {},
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const t = s, e = m(t.type);
    function l(d) {
      n("update:modelValue", d.target.value);
    }
    const o = m(""), i = () => e.value === "password" ? e.value = "text" : e.value = "password";
    function b(d) {
      o.value = "", n("update:modelValue", "");
    }
    return (d, a) => (r(), p("div", E, [
      k(f("input", {
        type: e.value,
        placeholder: d.placeholder,
        disabled: d.disabled,
        onInput: l,
        class: "input",
        "onUpdate:modelValue": a[0] || (a[0] = (u) => o.value = u)
      }, null, 40, O), [
        [V, o.value]
      ]),
      t.clearable && o.value.length ? (r(), p("button", {
        key: 0,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: b
      }, " clear ")) : I("", !0),
      t.showPassword ? (r(), p("button", {
        key: 1,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: i
      }, " eye ")) : I("", !0)
    ]));
  }
});
const K = /* @__PURE__ */ y(T, [["__scopeId", "data-v-a4b03207"]]), j = ["disabled"], q = ["disabled"], A = ["disabled"], Q = /* @__PURE__ */ v({
  __name: "InputNumber",
  props: {
    steps: { default: 1 },
    min: { default: -999999 },
    max: { default: 999999 },
    disabled: { type: Boolean, default: !1 },
    inputValue: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: n }) {
    const t = s, e = m("");
    g(() => {
      e.value = t.inputValue + "";
    });
    function l(a) {
      a === "+" ? t.max !== parseInt(e.value, 10) && o(parseInt(e.value, 10) + t.steps) : a === "-" && t.min !== parseInt(e.value, 10) && o(parseInt(e.value, 10) - t.steps);
    }
    function o(a) {
      (a || a === 0) && (e.value = a + ""), n("update:modelValue", a);
    }
    function i() {
      e.value = e.value.replace(/[^0-9]/gi, ""), parseInt(e.value, 10) >= t.max && (e.value = t.max + ""), parseInt(e.value, 10) <= t.min && (e.value = t.min + "");
    }
    const b = _(() => parseInt(e.value, 10) === t.min), d = _(() => parseInt(e.value, 10) === t.max);
    return (a, u) => (r(), p("div", {
      class: c(["border border-zinc-400 w-max rounded", { "hover:border-primary-400": !a.disabled }])
    }, [
      f("button", {
        class: c(["px-4 py-3 bg-zinc-100 rounded-l font-bold", {
          "hover:text-primary-400": !b.value || !a.disabled,
          "text-zinc-400 bg-zinc-50": b.value || a.disabled
        }]),
        onClick: u[0] || (u[0] = (h) => l("-")),
        disabled: b.value || a.disabled
      }, " - ", 10, j),
      k(f("input", {
        onBlur: i,
        "onUpdate:modelValue": u[1] || (u[1] = (h) => e.value = h),
        type: "text",
        disabled: a.disabled,
        class: c(["text-center focus:outline-none w-14 h-full", { "text-zinc-400": a.disabled }])
      }, null, 42, q), [
        [C, e.value]
      ]),
      f("button", {
        class: c(["px-4 py-3 bg-zinc-100 rounded-r font-bold", {
          "hover:text-primary-400": !d.value || !a.disabled,
          "text-zinc-400 bg-zinc-50": d.value || a.disabled
        }]),
        onClick: u[2] || (u[2] = (h) => l("+")),
        disabled: d.value || a.disabled
      }, " + ", 10, A)
    ], 2));
  }
});
export {
  G as MButton,
  J as MCheckbox,
  K as MInput,
  Q as MInputNumber,
  H as MLink
};
//# sourceMappingURL=index.js.map
