import { defineComponent as _, computed as g, openBlock as o, createElementBlock as n, normalizeClass as p, renderSlot as w, ref as y, onMounted as L, watch as M, withDirectives as $, createElementVNode as r, vModelCheckbox as S, toDisplayString as v, vModelDynamic as N, createCommentVNode as i, vModelText as D, resolveComponent as P, createTextVNode as I, createBlock as V, Transition as U, withCtx as T, Fragment as A, renderList as R, normalizeStyle as z, pushScopeId as B, popScopeId as C, createVNode as E } from "vue";
const O = ["type", "disabled"], F = /* @__PURE__ */ _({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(a) {
    const s = a, e = g(() => `${s.color} ${s.outline ? "btn-outline" : ""}`);
    return (t, l) => (o(), n("button", {
      type: s.type,
      onSubmit: l[0] || (l[0] = (d) => t.$emit("submit", d)),
      class: p(["rounded px-3 py-1", e.value]),
      disabled: s.disabled
    }, [
      w(t.$slots, "default", {}, void 0, !0)
    ], 42, O));
  }
});
const h = (a, s) => {
  const e = a.__vccOpts || a;
  for (const [t, l] of s)
    e[t] = l;
  return e;
}, j = /* @__PURE__ */ h(F, [["__scopeId", "data-v-9fe18dc1"]]), q = ["href"], G = /* @__PURE__ */ _({
  __name: "MLink",
  props: {
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "#" },
    underline: { type: Boolean, default: !1 }
  },
  setup(a) {
    const s = a, e = g(() => `${s.color} ${s.underline ? "link-underline" : ""} ${s.disabled ? "link-disabled" : ""}`);
    return (t, l) => (o(), n("a", {
      href: s.href,
      class: p(e.value)
    }, [
      w(t.$slots, "default", {}, void 0, !0)
    ], 10, q));
  }
});
const Ae = /* @__PURE__ */ h(G, [["__scopeId", "data-v-345b854e"]]), H = { class: "flex items-center cursor-pointer" }, J = ["id", "name", "checked", "disabled"], K = ["for"], Q = /* @__PURE__ */ _({
  __name: "MCheckbox",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: "" },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: s }) {
    const e = a, t = y(!1);
    return L(() => {
      t.value = e.checked;
    }), M(t, (l) => {
      s("update:modelValue", l);
    }), (l, d) => (o(), n("div", H, [
      $(r("input", {
        type: "checkbox",
        id: l.name,
        name: l.name,
        checked: t.value,
        disabled: l.disabled,
        "onUpdate:modelValue": d[0] || (d[0] = (c) => t.value = c),
        onChange: d[1] || (d[1] = (c) => l.$emit("change", c)),
        class: "checkbox"
      }, null, 40, J), [
        [S, t.value]
      ]),
      r("label", {
        class: "label",
        for: l.name
      }, v(l.label), 9, K)
    ]));
  }
});
const Re = /* @__PURE__ */ h(Q, [["__scopeId", "data-v-f3e5f538"]]), W = { class: "relative" }, X = ["type", "placeholder", "disabled"], Y = /* @__PURE__ */ _({
  __name: "MInput",
  props: {
    type: { default: "text" },
    placeholder: {},
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: s }) {
    const e = a, t = y(e.type);
    function l(f) {
      s("update:modelValue", f.target.value);
    }
    const d = y(""), c = () => t.value === "password" ? t.value = "text" : t.value = "password";
    function b(f) {
      d.value = "", s("update:modelValue", "");
    }
    return (f, u) => (o(), n("div", W, [
      $(r("input", {
        type: t.value,
        placeholder: f.placeholder,
        disabled: f.disabled,
        onInput: l,
        class: "input",
        "onUpdate:modelValue": u[0] || (u[0] = (m) => d.value = m)
      }, null, 40, X), [
        [N, d.value]
      ]),
      e.clearable && d.value.length ? (o(), n("button", {
        key: 0,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: b
      }, " clear ")) : i("", !0),
      e.showPassword ? (o(), n("button", {
        key: 1,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: c
      }, " eye ")) : i("", !0)
    ]));
  }
});
const Ee = /* @__PURE__ */ h(Y, [["__scopeId", "data-v-a4b03207"]]), Z = ["disabled"], ee = ["disabled"], te = ["disabled"], Oe = /* @__PURE__ */ _({
  __name: "InputNumber",
  props: {
    steps: { default: 1 },
    min: { default: -999999 },
    max: { default: 999999 },
    disabled: { type: Boolean, default: !1 },
    inputValue: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: s }) {
    const e = a, t = y("");
    L(() => {
      t.value = e.inputValue + "";
    });
    function l(u) {
      u === "+" ? e.max !== parseInt(t.value, 10) && d(parseInt(t.value, 10) + e.steps) : u === "-" && e.min !== parseInt(t.value, 10) && d(parseInt(t.value, 10) - e.steps);
    }
    function d(u) {
      (u || u === 0) && (t.value = u + ""), s("update:modelValue", u);
    }
    function c() {
      t.value = t.value.replace(/[^0-9]/gi, ""), parseInt(t.value, 10) >= e.max && (t.value = e.max + ""), parseInt(t.value, 10) <= e.min && (t.value = e.min + "");
    }
    const b = g(() => parseInt(t.value, 10) === e.min), f = g(() => parseInt(t.value, 10) === e.max);
    return (u, m) => (o(), n("div", {
      class: p(["border border-zinc-400 w-max rounded", { "hover:border-primary-400": !u.disabled }])
    }, [
      r("button", {
        class: p(["px-4 py-3 bg-zinc-100 rounded-l font-bold", {
          "hover:text-primary-400": !b.value || !u.disabled,
          "text-zinc-400 bg-zinc-50": b.value || u.disabled
        }]),
        onClick: m[0] || (m[0] = (x) => l("-")),
        disabled: b.value || u.disabled
      }, " - ", 10, Z),
      $(r("input", {
        onBlur: c,
        "onUpdate:modelValue": m[1] || (m[1] = (x) => t.value = x),
        type: "text",
        disabled: u.disabled,
        class: p(["text-center focus:outline-none w-14 h-full", { "text-zinc-400": u.disabled }])
      }, null, 42, ee), [
        [D, t.value]
      ]),
      r("button", {
        class: p(["px-4 py-3 bg-zinc-100 rounded-r font-bold", {
          "hover:text-primary-400": !f.value || !u.disabled,
          "text-zinc-400 bg-zinc-50": f.value || u.disabled
        }]),
        onClick: m[2] || (m[2] = (x) => l("+")),
        disabled: f.value || u.disabled
      }, " + ", 10, te)
    ], 2));
  }
}), se = { class: "relative flex items-center group p-2 cursor-pointer" }, ae = /* @__PURE__ */ r("span", { class: "w-12 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-primary after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-5 group-hover:after:translate-x-0" }, null, -1), Fe = /* @__PURE__ */ _({
  __name: "MSwitch",
  props: {
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: s }) {
    const t = y(a.checked);
    return M(
      () => t.value,
      () => {
        s("update:modelValue", t.value);
      }
    ), (l, d) => (o(), n("label", se, [
      w(l.$slots, "default"),
      $(r("input", {
        "onUpdate:modelValue": d[0] || (d[0] = (c) => t.value = c),
        type: "checkbox",
        class: "absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
      }, null, 512), [
        [S, t.value]
      ]),
      ae
    ]));
  }
}), le = { class: "" }, oe = {
  key: 0,
  class: "pl-4"
}, je = /* @__PURE__ */ _({
  __name: "MThree",
  props: {
    data: {}
  },
  setup(a) {
    const s = a, e = y(!1);
    return (t, l) => {
      const d = P("m-three", !0);
      return o(), n("ul", le, [
        r("span", {
          class: "hover:bg-zinc-100 py-1.5 px-3 cursor-pointer",
          onClick: l[0] || (l[0] = (c) => s.data.children.length ? e.value = !e.value : "")
        }, [
          I(v(s.data.label) + " ", 1),
          s.data.children.length ? (o(), n("span", {
            key: 0,
            class: p(e.value ? "rotate-180" : "")
          }, "^", 2)) : i("", !0)
        ]),
        s.data.children.length ? (o(), V(U, {
          key: 0,
          "enter-active-class": "duration-500 ease",
          "enter-class": "overflow-hidden max-h-0",
          "enter-to-class": "max-h-[200px] overflow-hidden",
          "leave-active-class": "duration-500 ease-[cubic-bezier(0, 1, 0.5, 1)]",
          "leave-class": "max-h-[200px] overflow-hidden",
          "leave-to-class": "overflow-hidden max-h-0"
        }, {
          default: T(() => [
            e.value ? (o(), n("li", oe, [
              (o(!0), n(A, null, R(s.data.children, (c, b) => (o(), V(d, {
                data: c,
                key: b
              }, null, 8, ["data"]))), 128))
            ])) : i("", !0)
          ]),
          _: 1
        })) : i("", !0)
      ]);
    };
  }
}), ne = {
  key: 0,
  class: "progressbar-inner-text"
}, de = {
  key: 0,
  class: "progressbar-text"
}, re = {
  key: 1,
  class: "progressbar-text"
}, ue = /* @__PURE__ */ _({
  __name: "MProgress",
  props: {
    percentage: { default: 0 },
    type: { default: "line" },
    textInside: { type: Boolean, default: !1 },
    status: { default: "" },
    width: { default: 126 }
  },
  setup(a) {
    const s = a;
    return (e, t) => (o(), n("div", {
      class: "flex items-center",
      style: z({ width: `${e.width}` })
    }, [
      r("div", {
        class: p(["progressbar", { "h-2": !e.textInside, "h-6": e.textInside }])
      }, [
        r("div", {
          class: p(["progressbar-inner", s.status]),
          style: z({ width: `${e.percentage}%` })
        }, [
          e.textInside && e.percentage > 10 ? (o(), n("span", ne, v(e.percentage) + "% ", 1)) : i("", !0)
        ], 6)
      ], 2),
      !e.status && !e.textInside ? (o(), n("div", de, v(e.percentage) + "%", 1)) : i("", !0),
      e.status && !e.textInside ? (o(), n("div", re, v(e.status), 1)) : i("", !0)
    ], 4));
  }
});
const qe = /* @__PURE__ */ h(ue, [["__scopeId", "data-v-3347630f"]]), ie = (a) => (B("data-v-18dbc0bb"), a = a(), C(), a), ce = /* @__PURE__ */ ie(() => /* @__PURE__ */ r("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)), pe = [
  ce
], _e = /* @__PURE__ */ _({
  __name: "MTag",
  props: {
    type: { default: "primary" },
    closable: { type: Boolean, default: !1 }
  },
  setup(a) {
    const s = a;
    return (e, t) => (o(), n("span", {
      class: p(["border rounded px-3 pt-1.5 pb-2 text-sm whitespace-nowrap tag", s.type])
    }, [
      w(e.$slots, "default", {}, void 0, !0),
      e.closable ? (o(), n("svg", {
        key: 0,
        onClick: t[0] || (t[0] = (l) => e.$emit("close", l)),
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        class: p(["inline rounded-full hover:bg-black cursor-pointer ml-1", `close-${e.type}`]),
        viewBox: "0 0 16 16"
      }, pe, 2)) : i("", !0)
    ], 2));
  }
});
const Ge = /* @__PURE__ */ h(_e, [["__scopeId", "data-v-18dbc0bb"]]), fe = { class: "relative inline-block" }, ve = /* @__PURE__ */ _({
  __name: "MBadge",
  props: {
    value: { default: 0 },
    max: { default: 10 },
    isDot: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    type: { default: "default" }
  },
  setup(a) {
    const s = a, e = g(() => s.value > s.max ? s.max + "+" : s.value && !s.isDot ? s.value : ""), t = g(() => `${s.type} ${s.isDot ? "dot" : ""}`);
    return (l, d) => (o(), n("div", fe, [
      w(l.$slots, "default", {}, void 0, !0),
      l.value ? (o(), n("sup", {
        key: 0,
        class: p(["badge", t.value])
      }, v(e.value), 3)) : i("", !0)
    ]));
  }
});
const He = /* @__PURE__ */ h(ve, [["__scopeId", "data-v-70779e47"]]), k = (a) => (B("data-v-a5a43abc"), a = a(), C(), a), he = { class: "flex flex-col items-center" }, me = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon success",
  viewBox: "0 0 16 16"
}, be = /* @__PURE__ */ k(() => /* @__PURE__ */ r("path", { d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" }, null, -1)), ye = [
  be
], ge = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon info",
  viewBox: "0 0 16 16"
}, we = /* @__PURE__ */ k(() => /* @__PURE__ */ r("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" }, null, -1)), $e = [
  we
], ke = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon warning",
  viewBox: "0 0 16 16"
}, xe = /* @__PURE__ */ k(() => /* @__PURE__ */ r("path", { d: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" }, null, -1)), Me = [
  xe
], Ie = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon error",
  viewBox: "0 0 16 16"
}, Be = /* @__PURE__ */ k(() => /* @__PURE__ */ r("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)), Ce = [
  Be
], Ve = { class: "title" }, ze = { class: "subtitle" }, Le = /* @__PURE__ */ _({
  __name: "MResult",
  props: {
    title: { default: "" },
    subTitle: { default: "" },
    icon: { default: "info" }
  },
  setup(a) {
    return (s, e) => (o(), n("div", he, [
      s.icon === "success" ? (o(), n("svg", me, ye)) : i("", !0),
      s.icon === "info" ? (o(), n("svg", ge, $e)) : i("", !0),
      s.icon === "warning" ? (o(), n("svg", ke, Me)) : i("", !0),
      s.icon === "error" ? (o(), n("svg", Ie, Ce)) : i("", !0),
      r("div", Ve, v(s.title), 1),
      r("div", ze, v(s.subTitle), 1),
      E(j, {
        class: "w-max",
        color: "primary",
        onClick: e[0] || (e[0] = (t) => s.$emit("back", t))
      }, {
        default: T(() => [
          I("Назад")
        ]),
        _: 1
      })
    ]));
  }
});
const Je = /* @__PURE__ */ h(Le, [["__scopeId", "data-v-a5a43abc"]]), Se = (a) => (B("data-v-2ea94c56"), a = a(), C(), a), Te = { class: "relative" }, Ne = /* @__PURE__ */ Se(() => /* @__PURE__ */ r("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "absolute right-3 top-1/2 -translate-y-1/2",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ r("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" })
], -1)), De = [
  Ne
], Pe = /* @__PURE__ */ _({
  __name: "MAlert",
  props: {
    title: { default: "" },
    description: { default: "" },
    type: { default: "default" },
    open: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(a, { emit: s }) {
    const e = a, t = y(e.open);
    return M(
      () => e.open,
      () => {
        t.value = e.open, e.open && setTimeout(() => {
          s("close");
        }, 5e3);
      }
    ), (l, d) => t.value ? (o(), n("div", {
      key: 0,
      class: p(["rounded text-white p-2 fixed bottom-3 shadow shadow-lg shadow-zinc-500 left-1/2 z-50 w-11/12 -translate-x-1/2", l.type])
    }, [
      r("div", Te, [
        I(v(l.title) + " ", 1),
        r("button", {
          onClick: d[0] || (d[0] = (c) => l.$emit("close"))
        }, De)
      ])
    ], 2)) : i("", !0);
  }
});
const Ke = /* @__PURE__ */ h(Pe, [["__scopeId", "data-v-2ea94c56"]]);
export {
  Ke as MAlert,
  He as MBadge,
  j as MButton,
  Re as MCheckbox,
  Ee as MInput,
  Oe as MInputNumber,
  Ae as MLink,
  qe as MProgress,
  Je as MResult,
  Fe as MSwitch,
  Ge as MTag,
  je as MThree
};
//# sourceMappingURL=index.js.map
