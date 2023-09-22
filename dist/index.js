import { defineComponent as v, computed as y, openBlock as n, createElementBlock as d, normalizeClass as r, renderSlot as $, ref as g, onMounted as w, watch as B, withDirectives as I, createElementVNode as p, vModelCheckbox as C, toDisplayString as h, vModelDynamic as V, createCommentVNode as c, vModelText as z, resolveComponent as S, createTextVNode as L, createBlock as x, Transition as T, withCtx as D, Fragment as N, renderList as P, normalizeStyle as M, pushScopeId as U, popScopeId as E } from "vue";
const O = ["type", "disabled"], F = /* @__PURE__ */ v({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(l) {
    const a = l, e = y(() => `${a.color} ${a.outline ? "btn-outline" : ""}`);
    return (t, s) => (n(), d("button", {
      type: a.type,
      onSubmit: s[0] || (s[0] = (u) => t.$emit("submit", u)),
      class: r(["rounded px-3 py-1", e.value]),
      disabled: a.disabled
    }, [
      $(t.$slots, "default", {}, void 0, !0)
    ], 42, O));
  }
});
const m = (l, a) => {
  const e = l.__vccOpts || l;
  for (const [t, s] of a)
    e[t] = s;
  return e;
}, ce = /* @__PURE__ */ m(F, [["__scopeId", "data-v-9fe18dc1"]]), j = ["href"], q = /* @__PURE__ */ v({
  __name: "MLink",
  props: {
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "#" },
    underline: { type: Boolean, default: !1 }
  },
  setup(l) {
    const a = l, e = y(() => `${a.color} ${a.underline ? "link-underline" : ""} ${a.disabled ? "link-disabled" : ""}`);
    return (t, s) => (n(), d("a", {
      href: a.href,
      class: r(e.value)
    }, [
      $(t.$slots, "default", {}, void 0, !0)
    ], 10, j));
  }
});
const _e = /* @__PURE__ */ m(q, [["__scopeId", "data-v-345b854e"]]), A = { class: "flex items-center cursor-pointer" }, G = ["id", "name", "checked", "disabled"], H = ["for"], J = /* @__PURE__ */ v({
  __name: "MCheckbox",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: "" },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: a }) {
    const e = l, t = g(!1);
    return w(() => {
      t.value = e.checked;
    }), B(t, (s) => {
      a("update:modelValue", s);
    }), (s, u) => (n(), d("div", A, [
      I(p("input", {
        type: "checkbox",
        id: s.name,
        name: s.name,
        checked: t.value,
        disabled: s.disabled,
        "onUpdate:modelValue": u[0] || (u[0] = (i) => t.value = i),
        onChange: u[1] || (u[1] = (i) => s.$emit("change", i)),
        class: "checkbox"
      }, null, 40, G), [
        [C, t.value]
      ]),
      p("label", {
        class: "label",
        for: s.name
      }, h(s.label), 9, H)
    ]));
  }
});
const ve = /* @__PURE__ */ m(J, [["__scopeId", "data-v-f3e5f538"]]), K = { class: "relative" }, Q = ["type", "placeholder", "disabled"], R = /* @__PURE__ */ v({
  __name: "MInput",
  props: {
    type: { default: "text" },
    placeholder: {},
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: a }) {
    const e = l, t = g(e.type);
    function s(_) {
      a("update:modelValue", _.target.value);
    }
    const u = g(""), i = () => t.value === "password" ? t.value = "text" : t.value = "password";
    function b(_) {
      u.value = "", a("update:modelValue", "");
    }
    return (_, o) => (n(), d("div", K, [
      I(p("input", {
        type: t.value,
        placeholder: _.placeholder,
        disabled: _.disabled,
        onInput: s,
        class: "input",
        "onUpdate:modelValue": o[0] || (o[0] = (f) => u.value = f)
      }, null, 40, Q), [
        [V, u.value]
      ]),
      e.clearable && u.value.length ? (n(), d("button", {
        key: 0,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: b
      }, " clear ")) : c("", !0),
      e.showPassword ? (n(), d("button", {
        key: 1,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: i
      }, " eye ")) : c("", !0)
    ]));
  }
});
const fe = /* @__PURE__ */ m(R, [["__scopeId", "data-v-a4b03207"]]), W = ["disabled"], X = ["disabled"], Y = ["disabled"], be = /* @__PURE__ */ v({
  __name: "InputNumber",
  props: {
    steps: { default: 1 },
    min: { default: -999999 },
    max: { default: 999999 },
    disabled: { type: Boolean, default: !1 },
    inputValue: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(l, { emit: a }) {
    const e = l, t = g("");
    w(() => {
      t.value = e.inputValue + "";
    });
    function s(o) {
      o === "+" ? e.max !== parseInt(t.value, 10) && u(parseInt(t.value, 10) + e.steps) : o === "-" && e.min !== parseInt(t.value, 10) && u(parseInt(t.value, 10) - e.steps);
    }
    function u(o) {
      (o || o === 0) && (t.value = o + ""), a("update:modelValue", o);
    }
    function i() {
      t.value = t.value.replace(/[^0-9]/gi, ""), parseInt(t.value, 10) >= e.max && (t.value = e.max + ""), parseInt(t.value, 10) <= e.min && (t.value = e.min + "");
    }
    const b = y(() => parseInt(t.value, 10) === e.min), _ = y(() => parseInt(t.value, 10) === e.max);
    return (o, f) => (n(), d("div", {
      class: r(["border border-zinc-400 w-max rounded", { "hover:border-primary-400": !o.disabled }])
    }, [
      p("button", {
        class: r(["px-4 py-3 bg-zinc-100 rounded-l font-bold", {
          "hover:text-primary-400": !b.value || !o.disabled,
          "text-zinc-400 bg-zinc-50": b.value || o.disabled
        }]),
        onClick: f[0] || (f[0] = (k) => s("-")),
        disabled: b.value || o.disabled
      }, " - ", 10, W),
      I(p("input", {
        onBlur: i,
        "onUpdate:modelValue": f[1] || (f[1] = (k) => t.value = k),
        type: "text",
        disabled: o.disabled,
        class: r(["text-center focus:outline-none w-14 h-full", { "text-zinc-400": o.disabled }])
      }, null, 42, X), [
        [z, t.value]
      ]),
      p("button", {
        class: r(["px-4 py-3 bg-zinc-100 rounded-r font-bold", {
          "hover:text-primary-400": !_.value || !o.disabled,
          "text-zinc-400 bg-zinc-50": _.value || o.disabled
        }]),
        onClick: f[2] || (f[2] = (k) => s("+")),
        disabled: _.value || o.disabled
      }, " + ", 10, Y)
    ], 2));
  }
}), Z = { class: "" }, ee = {
  key: 0,
  class: "pl-4"
}, me = /* @__PURE__ */ v({
  __name: "MThree",
  props: {
    data: {}
  },
  setup(l) {
    const a = l, e = g(!1);
    return (t, s) => {
      const u = S("m-three", !0);
      return n(), d("ul", Z, [
        p("span", {
          class: "hover:bg-zinc-100 py-1.5 px-3 cursor-pointer",
          onClick: s[0] || (s[0] = (i) => a.data.children.length ? e.value = !e.value : "")
        }, [
          L(h(a.data.label) + " ", 1),
          a.data.children.length ? (n(), d("span", {
            key: 0,
            class: r(e.value ? "rotate-180" : "")
          }, "^", 2)) : c("", !0)
        ]),
        a.data.children.length ? (n(), x(T, {
          key: 0,
          "enter-active-class": "duration-500 ease",
          "enter-class": "overflow-hidden max-h-0",
          "enter-to-class": "max-h-[200px] overflow-hidden",
          "leave-active-class": "duration-500 ease-[cubic-bezier(0, 1, 0.5, 1)]",
          "leave-class": "max-h-[200px] overflow-hidden",
          "leave-to-class": "overflow-hidden max-h-0"
        }, {
          default: D(() => [
            e.value ? (n(), d("li", ee, [
              (n(!0), d(N, null, P(a.data.children, (i, b) => (n(), x(u, {
                data: i,
                key: b
              }, null, 8, ["data"]))), 128))
            ])) : c("", !0)
          ]),
          _: 1
        })) : c("", !0)
      ]);
    };
  }
}), te = {
  key: 0,
  class: "progressbar-inner-text"
}, ae = {
  key: 0,
  class: "progressbar-text"
}, se = {
  key: 1,
  class: "progressbar-text"
}, le = /* @__PURE__ */ v({
  __name: "MProgress",
  props: {
    percentage: { default: 0 },
    type: { default: "line" },
    textInside: { type: Boolean, default: !1 },
    status: { default: "" },
    width: { default: 126 }
  },
  setup(l) {
    const a = l;
    return (e, t) => (n(), d("div", {
      class: "flex items-center",
      style: M({ width: `${e.width}` })
    }, [
      p("div", {
        class: r(["progressbar", { "h-2": !e.textInside, "h-6": e.textInside }])
      }, [
        p("div", {
          class: r(["progressbar-inner", a.status]),
          style: M({ width: `${e.percentage}%` })
        }, [
          e.textInside && e.percentage > 10 ? (n(), d("span", te, h(e.percentage) + "% ", 1)) : c("", !0)
        ], 6)
      ], 2),
      !e.status && !e.textInside ? (n(), d("div", ae, h(e.percentage) + "%", 1)) : c("", !0),
      e.status && !e.textInside ? (n(), d("div", se, h(e.status), 1)) : c("", !0)
    ], 4));
  }
});
const he = /* @__PURE__ */ m(le, [["__scopeId", "data-v-3347630f"]]), ne = (l) => (U("data-v-60779819"), l = l(), E(), l), oe = /* @__PURE__ */ ne(() => /* @__PURE__ */ p("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)), de = [
  oe
], ue = /* @__PURE__ */ v({
  __name: "MTag",
  props: {
    type: { default: "primary" },
    closable: { type: Boolean, default: !1 }
  },
  setup(l) {
    const a = l;
    return (e, t) => (n(), d("span", {
      class: r(["border rounded px-3 pt-1.5 pb-2 text-sm whitespace-nowrap tag", a.type])
    }, [
      $(e.$slots, "default", {}, void 0, !0),
      e.closable ? (n(), d("svg", {
        key: 0,
        onClick: t[0] || (t[0] = (s) => e.$emit("close", s)),
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        class: r(["inline rounded-full hover:bg-black cursor-pointer ml-1", `close-${e.type}`]),
        viewBox: "0 0 16 16"
      }, de, 2)) : c("", !0)
    ], 2));
  }
});
const ye = /* @__PURE__ */ m(ue, [["__scopeId", "data-v-60779819"]]), re = { class: "relative inline-block" }, ie = /* @__PURE__ */ v({
  __name: "MBadge",
  props: {
    value: { default: 0 },
    max: { default: 10 },
    isDot: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    type: { default: "default" }
  },
  setup(l) {
    const a = l, e = y(() => a.value > a.max ? a.max + "+" : a.value && !a.isDot ? a.value : ""), t = y(() => `${a.type} ${a.isDot ? "dot" : ""}`);
    return (s, u) => (n(), d("div", re, [
      $(s.$slots, "default", {}, void 0, !0),
      s.value ? (n(), d("sup", {
        key: 0,
        class: r(["badge", t.value])
      }, h(e.value), 3)) : c("", !0)
    ]));
  }
});
const ge = /* @__PURE__ */ m(ie, [["__scopeId", "data-v-6cb1eab7"]]);
export {
  ge as MBadge,
  ce as MButton,
  ve as MCheckbox,
  fe as MInput,
  be as MInputNumber,
  _e as MLink,
  he as MProgress,
  ye as MTag,
  me as MThree
};
//# sourceMappingURL=index.js.map
