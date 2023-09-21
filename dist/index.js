import { defineComponent as _, computed as h, openBlock as d, createElementBlock as u, normalizeClass as v, renderSlot as g, ref as m, onMounted as I, watch as B, withDirectives as x, createElementVNode as f, vModelCheckbox as V, toDisplayString as M, vModelDynamic as w, createCommentVNode as b, vModelText as C, resolveComponent as z, createTextVNode as N, createBlock as $, Transition as S, withCtx as T, Fragment as L, renderList as D } from "vue";
const P = ["type", "disabled"], U = /* @__PURE__ */ _({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(o) {
    const a = o, t = h(() => `${a.color} ${a.outline ? "btn-outline" : ""}`);
    return (e, l) => (d(), u("button", {
      type: a.type,
      onSubmit: l[0] || (l[0] = (s) => e.$emit("submit", s)),
      class: v(["rounded px-3 py-1", t.value]),
      disabled: a.disabled
    }, [
      g(e.$slots, "default", {}, void 0, !0)
    ], 42, P));
  }
});
const y = (o, a) => {
  const t = o.__vccOpts || o;
  for (const [e, l] of a)
    t[e] = l;
  return t;
}, Z = /* @__PURE__ */ y(U, [["__scopeId", "data-v-9fe18dc1"]]), E = ["href"], O = /* @__PURE__ */ _({
  __name: "MLink",
  props: {
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "#" },
    underline: { type: Boolean, default: !1 }
  },
  setup(o) {
    const a = o, t = h(() => `${a.color} ${a.underline ? "link-underline" : ""} ${a.disabled ? "link-disabled" : ""}`);
    return (e, l) => (d(), u("a", {
      href: a.href,
      class: v(t.value)
    }, [
      g(e.$slots, "default", {}, void 0, !0)
    ], 10, E));
  }
});
const ee = /* @__PURE__ */ y(O, [["__scopeId", "data-v-345b854e"]]), F = { class: "flex items-center cursor-pointer" }, j = ["id", "name", "checked", "disabled"], q = ["for"], A = /* @__PURE__ */ _({
  __name: "MCheckbox",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: "" },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(o, { emit: a }) {
    const t = o, e = m(!1);
    return I(() => {
      e.value = t.checked;
    }), B(e, (l) => {
      a("update:modelValue", l);
    }), (l, s) => (d(), u("div", F, [
      x(f("input", {
        type: "checkbox",
        id: l.name,
        name: l.name,
        checked: e.value,
        disabled: l.disabled,
        "onUpdate:modelValue": s[0] || (s[0] = (r) => e.value = r),
        onChange: s[1] || (s[1] = (r) => l.$emit("change", r)),
        class: "checkbox"
      }, null, 40, j), [
        [V, e.value]
      ]),
      f("label", {
        class: "label",
        for: l.name
      }, M(l.label), 9, q)
    ]));
  }
});
const te = /* @__PURE__ */ y(A, [["__scopeId", "data-v-f3e5f538"]]), G = { class: "relative" }, H = ["type", "placeholder", "disabled"], J = /* @__PURE__ */ _({
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
    const t = o, e = m(t.type);
    function l(i) {
      a("update:modelValue", i.target.value);
    }
    const s = m(""), r = () => e.value === "password" ? e.value = "text" : e.value = "password";
    function c(i) {
      s.value = "", a("update:modelValue", "");
    }
    return (i, n) => (d(), u("div", G, [
      x(f("input", {
        type: e.value,
        placeholder: i.placeholder,
        disabled: i.disabled,
        onInput: l,
        class: "input",
        "onUpdate:modelValue": n[0] || (n[0] = (p) => s.value = p)
      }, null, 40, H), [
        [w, s.value]
      ]),
      t.clearable && s.value.length ? (d(), u("button", {
        key: 0,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: c
      }, " clear ")) : b("", !0),
      t.showPassword ? (d(), u("button", {
        key: 1,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: r
      }, " eye ")) : b("", !0)
    ]));
  }
});
const ae = /* @__PURE__ */ y(J, [["__scopeId", "data-v-a4b03207"]]), K = ["disabled"], Q = ["disabled"], R = ["disabled"], le = /* @__PURE__ */ _({
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
    const t = o, e = m("");
    I(() => {
      e.value = t.inputValue + "";
    });
    function l(n) {
      n === "+" ? t.max !== parseInt(e.value, 10) && s(parseInt(e.value, 10) + t.steps) : n === "-" && t.min !== parseInt(e.value, 10) && s(parseInt(e.value, 10) - t.steps);
    }
    function s(n) {
      (n || n === 0) && (e.value = n + ""), a("update:modelValue", n);
    }
    function r() {
      e.value = e.value.replace(/[^0-9]/gi, ""), parseInt(e.value, 10) >= t.max && (e.value = t.max + ""), parseInt(e.value, 10) <= t.min && (e.value = t.min + "");
    }
    const c = h(() => parseInt(e.value, 10) === t.min), i = h(() => parseInt(e.value, 10) === t.max);
    return (n, p) => (d(), u("div", {
      class: v(["border border-zinc-400 w-max rounded", { "hover:border-primary-400": !n.disabled }])
    }, [
      f("button", {
        class: v(["px-4 py-3 bg-zinc-100 rounded-l font-bold", {
          "hover:text-primary-400": !c.value || !n.disabled,
          "text-zinc-400 bg-zinc-50": c.value || n.disabled
        }]),
        onClick: p[0] || (p[0] = (k) => l("-")),
        disabled: c.value || n.disabled
      }, " - ", 10, K),
      x(f("input", {
        onBlur: r,
        "onUpdate:modelValue": p[1] || (p[1] = (k) => e.value = k),
        type: "text",
        disabled: n.disabled,
        class: v(["text-center focus:outline-none w-14 h-full", { "text-zinc-400": n.disabled }])
      }, null, 42, Q), [
        [C, e.value]
      ]),
      f("button", {
        class: v(["px-4 py-3 bg-zinc-100 rounded-r font-bold", {
          "hover:text-primary-400": !i.value || !n.disabled,
          "text-zinc-400 bg-zinc-50": i.value || n.disabled
        }]),
        onClick: p[2] || (p[2] = (k) => l("+")),
        disabled: i.value || n.disabled
      }, " + ", 10, R)
    ], 2));
  }
}), W = { class: "" }, X = {
  key: 0,
  class: "pl-4"
}, ne = /* @__PURE__ */ _({
  __name: "MThree",
  props: {
    data: {}
  },
  setup(o) {
    const a = o, t = m(!1);
    return (e, l) => {
      const s = z("m-three", !0);
      return d(), u("ul", W, [
        f("span", {
          class: "hover:bg-zinc-100 py-1.5 px-3 cursor-pointer",
          onClick: l[0] || (l[0] = (r) => a.data.children.length ? t.value = !t.value : "")
        }, [
          N(M(a.data.label) + " ", 1),
          a.data.children.length ? (d(), u("span", {
            key: 0,
            class: v(t.value ? "rotate-180" : "")
          }, "^", 2)) : b("", !0)
        ]),
        a.data.children.length ? (d(), $(S, {
          key: 0,
          "enter-active-class": "duration-500 ease",
          "enter-class": "overflow-hidden max-h-0",
          "enter-to-class": "max-h-[200px] overflow-hidden",
          "leave-active-class": "duration-500 ease-[cubic-bezier(0, 1, 0.5, 1)]",
          "leave-class": "max-h-[200px] overflow-hidden",
          "leave-to-class": "overflow-hidden max-h-0"
        }, {
          default: T(() => [
            t.value ? (d(), u("li", X, [
              (d(!0), u(L, null, D(a.data.children, (r, c) => (d(), $(s, {
                data: r,
                key: c
              }, null, 8, ["data"]))), 128))
            ])) : b("", !0)
          ]),
          _: 1
        })) : b("", !0)
      ]);
    };
  }
});
export {
  Z as MButton,
  te as MCheckbox,
  ae as MInput,
  le as MInputNumber,
  ee as MLink,
  ne as MThree
};
//# sourceMappingURL=index.js.map
