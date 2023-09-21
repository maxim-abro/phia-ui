import { defineComponent as b, computed as g, openBlock as n, createElementBlock as r, normalizeClass as p, renderSlot as M, ref as h, onMounted as w, watch as B, withDirectives as $, createElementVNode as c, vModelCheckbox as V, toDisplayString as m, vModelDynamic as C, createCommentVNode as v, vModelText as z, resolveComponent as N, createTextVNode as P, createBlock as I, Transition as S, withCtx as T, Fragment as L, renderList as D, normalizeStyle as x } from "vue";
const U = ["type", "disabled"], E = /* @__PURE__ */ b({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(o) {
    const a = o, e = g(() => `${a.color} ${a.outline ? "btn-outline" : ""}`);
    return (t, s) => (n(), r("button", {
      type: a.type,
      onSubmit: s[0] || (s[0] = (d) => t.$emit("submit", d)),
      class: p(["rounded px-3 py-1", e.value]),
      disabled: a.disabled
    }, [
      M(t.$slots, "default", {}, void 0, !0)
    ], 42, U));
  }
});
const y = (o, a) => {
  const e = o.__vccOpts || o;
  for (const [t, s] of a)
    e[t] = s;
  return e;
}, le = /* @__PURE__ */ y(E, [["__scopeId", "data-v-9fe18dc1"]]), O = ["href"], F = /* @__PURE__ */ b({
  __name: "MLink",
  props: {
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "#" },
    underline: { type: Boolean, default: !1 }
  },
  setup(o) {
    const a = o, e = g(() => `${a.color} ${a.underline ? "link-underline" : ""} ${a.disabled ? "link-disabled" : ""}`);
    return (t, s) => (n(), r("a", {
      href: a.href,
      class: p(e.value)
    }, [
      M(t.$slots, "default", {}, void 0, !0)
    ], 10, O));
  }
});
const ne = /* @__PURE__ */ y(F, [["__scopeId", "data-v-345b854e"]]), j = { class: "flex items-center cursor-pointer" }, q = ["id", "name", "checked", "disabled"], A = ["for"], G = /* @__PURE__ */ b({
  __name: "MCheckbox",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: "" },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: a }) {
    const e = o, t = h(!1);
    return w(() => {
      t.value = e.checked;
    }), B(t, (s) => {
      a("update:modelValue", s);
    }), (s, d) => (n(), r("div", j, [
      $(c("input", {
        type: "checkbox",
        id: s.name,
        name: s.name,
        checked: t.value,
        disabled: s.disabled,
        "onUpdate:modelValue": d[0] || (d[0] = (u) => t.value = u),
        onChange: d[1] || (d[1] = (u) => s.$emit("change", u)),
        class: "checkbox"
      }, null, 40, q), [
        [V, t.value]
      ]),
      c("label", {
        class: "label",
        for: s.name
      }, m(s.label), 9, A)
    ]));
  }
});
const oe = /* @__PURE__ */ y(G, [["__scopeId", "data-v-f3e5f538"]]), H = { class: "relative" }, J = ["type", "placeholder", "disabled"], K = /* @__PURE__ */ b({
  __name: "MInput",
  props: {
    type: { default: "text" },
    placeholder: {},
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: a }) {
    const e = o, t = h(e.type);
    function s(i) {
      a("update:modelValue", i.target.value);
    }
    const d = h(""), u = () => t.value === "password" ? t.value = "text" : t.value = "password";
    function _(i) {
      d.value = "", a("update:modelValue", "");
    }
    return (i, l) => (n(), r("div", H, [
      $(c("input", {
        type: t.value,
        placeholder: i.placeholder,
        disabled: i.disabled,
        onInput: s,
        class: "input",
        "onUpdate:modelValue": l[0] || (l[0] = (f) => d.value = f)
      }, null, 40, J), [
        [C, d.value]
      ]),
      e.clearable && d.value.length ? (n(), r("button", {
        key: 0,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: _
      }, " clear ")) : v("", !0),
      e.showPassword ? (n(), r("button", {
        key: 1,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: u
      }, " eye ")) : v("", !0)
    ]));
  }
});
const de = /* @__PURE__ */ y(K, [["__scopeId", "data-v-a4b03207"]]), Q = ["disabled"], R = ["disabled"], W = ["disabled"], re = /* @__PURE__ */ b({
  __name: "InputNumber",
  props: {
    steps: { default: 1 },
    min: { default: -999999 },
    max: { default: 999999 },
    disabled: { type: Boolean, default: !1 },
    inputValue: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: a }) {
    const e = o, t = h("");
    w(() => {
      t.value = e.inputValue + "";
    });
    function s(l) {
      l === "+" ? e.max !== parseInt(t.value, 10) && d(parseInt(t.value, 10) + e.steps) : l === "-" && e.min !== parseInt(t.value, 10) && d(parseInt(t.value, 10) - e.steps);
    }
    function d(l) {
      (l || l === 0) && (t.value = l + ""), a("update:modelValue", l);
    }
    function u() {
      t.value = t.value.replace(/[^0-9]/gi, ""), parseInt(t.value, 10) >= e.max && (t.value = e.max + ""), parseInt(t.value, 10) <= e.min && (t.value = e.min + "");
    }
    const _ = g(() => parseInt(t.value, 10) === e.min), i = g(() => parseInt(t.value, 10) === e.max);
    return (l, f) => (n(), r("div", {
      class: p(["border border-zinc-400 w-max rounded", { "hover:border-primary-400": !l.disabled }])
    }, [
      c("button", {
        class: p(["px-4 py-3 bg-zinc-100 rounded-l font-bold", {
          "hover:text-primary-400": !_.value || !l.disabled,
          "text-zinc-400 bg-zinc-50": _.value || l.disabled
        }]),
        onClick: f[0] || (f[0] = (k) => s("-")),
        disabled: _.value || l.disabled
      }, " - ", 10, Q),
      $(c("input", {
        onBlur: u,
        "onUpdate:modelValue": f[1] || (f[1] = (k) => t.value = k),
        type: "text",
        disabled: l.disabled,
        class: p(["text-center focus:outline-none w-14 h-full", { "text-zinc-400": l.disabled }])
      }, null, 42, R), [
        [z, t.value]
      ]),
      c("button", {
        class: p(["px-4 py-3 bg-zinc-100 rounded-r font-bold", {
          "hover:text-primary-400": !i.value || !l.disabled,
          "text-zinc-400 bg-zinc-50": i.value || l.disabled
        }]),
        onClick: f[2] || (f[2] = (k) => s("+")),
        disabled: i.value || l.disabled
      }, " + ", 10, W)
    ], 2));
  }
}), X = { class: "" }, Y = {
  key: 0,
  class: "pl-4"
}, ue = /* @__PURE__ */ b({
  __name: "MThree",
  props: {
    data: {}
  },
  setup(o) {
    const a = o, e = h(!1);
    return (t, s) => {
      const d = N("m-three", !0);
      return n(), r("ul", X, [
        c("span", {
          class: "hover:bg-zinc-100 py-1.5 px-3 cursor-pointer",
          onClick: s[0] || (s[0] = (u) => a.data.children.length ? e.value = !e.value : "")
        }, [
          P(m(a.data.label) + " ", 1),
          a.data.children.length ? (n(), r("span", {
            key: 0,
            class: p(e.value ? "rotate-180" : "")
          }, "^", 2)) : v("", !0)
        ]),
        a.data.children.length ? (n(), I(S, {
          key: 0,
          "enter-active-class": "duration-500 ease",
          "enter-class": "overflow-hidden max-h-0",
          "enter-to-class": "max-h-[200px] overflow-hidden",
          "leave-active-class": "duration-500 ease-[cubic-bezier(0, 1, 0.5, 1)]",
          "leave-class": "max-h-[200px] overflow-hidden",
          "leave-to-class": "overflow-hidden max-h-0"
        }, {
          default: T(() => [
            e.value ? (n(), r("li", Y, [
              (n(!0), r(L, null, D(a.data.children, (u, _) => (n(), I(d, {
                data: u,
                key: _
              }, null, 8, ["data"]))), 128))
            ])) : v("", !0)
          ]),
          _: 1
        })) : v("", !0)
      ]);
    };
  }
}), Z = {
  key: 0,
  class: "progressbar-inner-text"
}, ee = {
  key: 0,
  class: "progressbar-text"
}, te = {
  key: 1,
  class: "progressbar-text"
}, ae = /* @__PURE__ */ b({
  __name: "MProgress",
  props: {
    percentage: { default: 0 },
    type: { default: "line" },
    textInside: { type: Boolean, default: !1 },
    status: { default: "" },
    width: { default: 126 }
  },
  setup(o) {
    const a = o;
    return (e, t) => (n(), r("div", {
      class: "flex items-center",
      style: x({ width: `${e.width}` })
    }, [
      c("div", {
        class: p(["progressbar", { "h-2": !e.textInside, "h-6": e.textInside }])
      }, [
        c("div", {
          class: p(["progressbar-inner", a.status]),
          style: x({ width: `${e.percentage}%` })
        }, [
          e.textInside && e.percentage > 10 ? (n(), r("span", Z, m(e.percentage) + "% ", 1)) : v("", !0)
        ], 6)
      ], 2),
      !e.status && !e.textInside ? (n(), r("div", ee, m(e.percentage) + "%", 1)) : v("", !0),
      e.status && !e.textInside ? (n(), r("div", te, m(e.status), 1)) : v("", !0)
    ], 4));
  }
});
const ie = /* @__PURE__ */ y(ae, [["__scopeId", "data-v-3347630f"]]);
export {
  le as MButton,
  oe as MCheckbox,
  de as MInput,
  re as MInputNumber,
  ne as MLink,
  ie as MProgress,
  ue as MThree
};
//# sourceMappingURL=index.js.map
