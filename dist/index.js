import { defineComponent as _, computed as g, openBlock as o, createElementBlock as n, normalizeClass as p, renderSlot as w, ref as b, onMounted as L, watch as k, withDirectives as $, createElementVNode as r, vModelCheckbox as S, toDisplayString as f, vModelDynamic as N, createCommentVNode as i, vModelText as D, vModelSelect as P, resolveComponent as U, createTextVNode as I, createBlock as V, Transition as A, withCtx as T, Fragment as R, renderList as E, normalizeStyle as z, pushScopeId as B, popScopeId as C, createVNode as O } from "vue";
const F = ["type", "disabled"], j = /* @__PURE__ */ _({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(s) {
    const a = s, e = g(() => `${a.color} ${a.outline ? "btn-outline" : ""}`);
    return (t, l) => (o(), n("button", {
      type: a.type,
      onSubmit: l[0] || (l[0] = (d) => t.$emit("submit", d)),
      class: p(["rounded px-3 py-1", e.value]),
      disabled: a.disabled
    }, [
      w(t.$slots, "default", {}, void 0, !0)
    ], 42, F));
  }
});
const v = (s, a) => {
  const e = s.__vccOpts || s;
  for (const [t, l] of a)
    e[t] = l;
  return e;
}, q = /* @__PURE__ */ v(j, [["__scopeId", "data-v-9fe18dc1"]]), G = ["href"], H = /* @__PURE__ */ _({
  __name: "MLink",
  props: {
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "#" },
    underline: { type: Boolean, default: !1 }
  },
  setup(s) {
    const a = s, e = g(() => `${a.color} ${a.underline ? "link-underline" : ""} ${a.disabled ? "link-disabled" : ""}`);
    return (t, l) => (o(), n("a", {
      href: a.href,
      class: p(e.value)
    }, [
      w(t.$slots, "default", {}, void 0, !0)
    ], 10, G));
  }
});
const Fe = /* @__PURE__ */ v(H, [["__scopeId", "data-v-345b854e"]]), J = { class: "flex items-center cursor-pointer" }, K = ["id", "name", "checked", "disabled"], Q = ["for"], W = /* @__PURE__ */ _({
  __name: "MCheckbox",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: "" },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: a }) {
    const e = s, t = b(!1);
    return L(() => {
      t.value = e.checked;
    }), k(t, (l) => {
      a("update:modelValue", l);
    }), (l, d) => (o(), n("div", J, [
      $(r("input", {
        type: "checkbox",
        id: l.name,
        name: l.name,
        checked: t.value,
        disabled: l.disabled,
        "onUpdate:modelValue": d[0] || (d[0] = (c) => t.value = c),
        onChange: d[1] || (d[1] = (c) => l.$emit("change", c)),
        class: "checkbox"
      }, null, 40, K), [
        [S, t.value]
      ]),
      r("label", {
        class: "label",
        for: l.name
      }, f(l.label), 9, Q)
    ]));
  }
});
const je = /* @__PURE__ */ v(W, [["__scopeId", "data-v-f3e5f538"]]), X = { class: "relative" }, Y = ["type", "placeholder", "disabled"], Z = /* @__PURE__ */ _({
  __name: "MInput",
  props: {
    type: { default: "text" },
    placeholder: {},
    clearable: { type: Boolean, default: !1 },
    showPassword: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: a }) {
    const e = s, t = b(e.type);
    function l(h) {
      a("update:modelValue", h.target.value);
    }
    const d = b(""), c = () => t.value === "password" ? t.value = "text" : t.value = "password";
    function y(h) {
      d.value = "", a("update:modelValue", "");
    }
    return (h, u) => (o(), n("div", X, [
      $(r("input", {
        type: t.value,
        placeholder: h.placeholder,
        disabled: h.disabled,
        onInput: l,
        class: "input",
        "onUpdate:modelValue": u[0] || (u[0] = (m) => d.value = m)
      }, null, 40, Y), [
        [N, d.value]
      ]),
      e.clearable && d.value.length ? (o(), n("button", {
        key: 0,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: y
      }, " clear ")) : i("", !0),
      e.showPassword ? (o(), n("button", {
        key: 1,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: c
      }, " eye ")) : i("", !0)
    ]));
  }
});
const qe = /* @__PURE__ */ v(Z, [["__scopeId", "data-v-a4b03207"]]), ee = ["disabled"], te = ["disabled"], ae = ["disabled"], Ge = /* @__PURE__ */ _({
  __name: "InputNumber",
  props: {
    steps: { default: 1 },
    min: { default: -999999 },
    max: { default: 999999 },
    disabled: { type: Boolean, default: !1 },
    inputValue: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: a }) {
    const e = s, t = b("");
    L(() => {
      t.value = e.inputValue + "";
    });
    function l(u) {
      u === "+" ? e.max !== parseInt(t.value, 10) && d(parseInt(t.value, 10) + e.steps) : u === "-" && e.min !== parseInt(t.value, 10) && d(parseInt(t.value, 10) - e.steps);
    }
    function d(u) {
      (u || u === 0) && (t.value = u + ""), a("update:modelValue", u);
    }
    function c() {
      t.value = t.value.replace(/[^0-9]/gi, ""), parseInt(t.value, 10) >= e.max && (t.value = e.max + ""), parseInt(t.value, 10) <= e.min && (t.value = e.min + "");
    }
    const y = g(() => parseInt(t.value, 10) === e.min), h = g(() => parseInt(t.value, 10) === e.max);
    return (u, m) => (o(), n("div", {
      class: p(["border border-zinc-400 w-max rounded", { "hover:border-primary-400": !u.disabled }])
    }, [
      r("button", {
        class: p(["px-4 py-3 bg-zinc-100 rounded-l font-bold", {
          "hover:text-primary-400": !y.value || !u.disabled,
          "text-zinc-400 bg-zinc-50": y.value || u.disabled
        }]),
        onClick: m[0] || (m[0] = (x) => l("-")),
        disabled: y.value || u.disabled
      }, " - ", 10, ee),
      $(r("input", {
        onBlur: c,
        "onUpdate:modelValue": m[1] || (m[1] = (x) => t.value = x),
        type: "text",
        disabled: u.disabled,
        class: p(["text-center focus:outline-none w-14 h-full", { "text-zinc-400": u.disabled }])
      }, null, 42, te), [
        [D, t.value]
      ]),
      r("button", {
        class: p(["px-4 py-3 bg-zinc-100 rounded-r font-bold", {
          "hover:text-primary-400": !h.value || !u.disabled,
          "text-zinc-400 bg-zinc-50": h.value || u.disabled
        }]),
        onClick: m[2] || (m[2] = (x) => l("+")),
        disabled: h.value || u.disabled
      }, " + ", 10, ae)
    ], 2));
  }
}), se = { class: "relative flex items-center group p-2 cursor-pointer" }, le = /* @__PURE__ */ r("span", { class: "w-12 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-primary after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-5 group-hover:after:translate-x-0" }, null, -1), He = /* @__PURE__ */ _({
  __name: "MSwitch",
  props: {
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: a }) {
    const t = b(s.checked);
    return k(
      () => t.value,
      () => {
        a("update:modelValue", t.value);
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
      le
    ]));
  }
}), oe = ["name", "disabled"], ne = {
  key: 0,
  value: "",
  disabled: ""
}, de = /* @__PURE__ */ _({
  __name: "MSelect",
  props: {
    placeholder: { default: "" },
    value: { default: "" },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    name: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: a }) {
    const t = b(s.value);
    return k(
      () => t.value,
      () => {
        a("update:modelValue", t.value);
      }
    ), (l, d) => $((o(), n("select", {
      name: l.name,
      disabled: l.disabled,
      "onUpdate:modelValue": d[0] || (d[0] = (c) => t.value = c),
      class: "select-container"
    }, [
      l.placeholder ? (o(), n("option", ne, f(l.placeholder), 1)) : i("", !0),
      w(l.$slots, "default", {}, void 0, !0)
    ], 8, oe)), [
      [P, t.value]
    ]);
  }
});
const Je = /* @__PURE__ */ v(de, [["__scopeId", "data-v-829bf71d"]]), re = { class: "" }, ue = {
  key: 0,
  class: "pl-4"
}, Ke = /* @__PURE__ */ _({
  __name: "MThree",
  props: {
    data: {}
  },
  setup(s) {
    const a = s, e = b(!1);
    return (t, l) => {
      const d = U("m-three", !0);
      return o(), n("ul", re, [
        r("span", {
          class: "hover:bg-zinc-100 py-1.5 px-3 cursor-pointer",
          onClick: l[0] || (l[0] = (c) => a.data.children.length ? e.value = !e.value : "")
        }, [
          I(f(a.data.label) + " ", 1),
          a.data.children.length ? (o(), n("span", {
            key: 0,
            class: p(e.value ? "rotate-180" : "")
          }, "^", 2)) : i("", !0)
        ]),
        a.data.children.length ? (o(), V(A, {
          key: 0,
          "enter-active-class": "duration-500 ease",
          "enter-class": "overflow-hidden max-h-0",
          "enter-to-class": "max-h-[200px] overflow-hidden",
          "leave-active-class": "duration-500 ease-[cubic-bezier(0, 1, 0.5, 1)]",
          "leave-class": "max-h-[200px] overflow-hidden",
          "leave-to-class": "overflow-hidden max-h-0"
        }, {
          default: T(() => [
            e.value ? (o(), n("li", ue, [
              (o(!0), n(R, null, E(a.data.children, (c, y) => (o(), V(d, {
                data: c,
                key: y
              }, null, 8, ["data"]))), 128))
            ])) : i("", !0)
          ]),
          _: 1
        })) : i("", !0)
      ]);
    };
  }
}), ie = {
  key: 0,
  class: "progressbar-inner-text"
}, ce = {
  key: 0,
  class: "progressbar-text"
}, pe = {
  key: 1,
  class: "progressbar-text"
}, _e = /* @__PURE__ */ _({
  __name: "MProgress",
  props: {
    percentage: { default: 0 },
    type: { default: "line" },
    textInside: { type: Boolean, default: !1 },
    status: { default: "" },
    width: { default: 126 }
  },
  setup(s) {
    const a = s;
    return (e, t) => (o(), n("div", {
      class: "flex items-center",
      style: z({ width: `${e.width}` })
    }, [
      r("div", {
        class: p(["progressbar", { "h-2": !e.textInside, "h-6": e.textInside }])
      }, [
        r("div", {
          class: p(["progressbar-inner", a.status]),
          style: z({ width: `${e.percentage}%` })
        }, [
          e.textInside && e.percentage > 10 ? (o(), n("span", ie, f(e.percentage) + "% ", 1)) : i("", !0)
        ], 6)
      ], 2),
      !e.status && !e.textInside ? (o(), n("div", ce, f(e.percentage) + "%", 1)) : i("", !0),
      e.status && !e.textInside ? (o(), n("div", pe, f(e.status), 1)) : i("", !0)
    ], 4));
  }
});
const Qe = /* @__PURE__ */ v(_e, [["__scopeId", "data-v-3347630f"]]), fe = (s) => (B("data-v-18dbc0bb"), s = s(), C(), s), ve = /* @__PURE__ */ fe(() => /* @__PURE__ */ r("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)), he = [
  ve
], me = /* @__PURE__ */ _({
  __name: "MTag",
  props: {
    type: { default: "primary" },
    closable: { type: Boolean, default: !1 }
  },
  setup(s) {
    const a = s;
    return (e, t) => (o(), n("span", {
      class: p(["border rounded px-3 pt-1.5 pb-2 text-sm whitespace-nowrap tag", a.type])
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
      }, he, 2)) : i("", !0)
    ], 2));
  }
});
const We = /* @__PURE__ */ v(me, [["__scopeId", "data-v-18dbc0bb"]]), be = { class: "relative inline-block" }, ye = /* @__PURE__ */ _({
  __name: "MBadge",
  props: {
    value: { default: 0 },
    max: { default: 10 },
    isDot: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    type: { default: "default" }
  },
  setup(s) {
    const a = s, e = g(() => a.value > a.max ? a.max + "+" : a.value && !a.isDot ? a.value : ""), t = g(() => `${a.type} ${a.isDot ? "dot" : ""}`);
    return (l, d) => (o(), n("div", be, [
      w(l.$slots, "default", {}, void 0, !0),
      l.value ? (o(), n("sup", {
        key: 0,
        class: p(["badge", t.value])
      }, f(e.value), 3)) : i("", !0)
    ]));
  }
});
const Xe = /* @__PURE__ */ v(ye, [["__scopeId", "data-v-70779e47"]]), M = (s) => (B("data-v-a5a43abc"), s = s(), C(), s), ge = { class: "flex flex-col items-center" }, we = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon success",
  viewBox: "0 0 16 16"
}, $e = /* @__PURE__ */ M(() => /* @__PURE__ */ r("path", { d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" }, null, -1)), ke = [
  $e
], Me = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon info",
  viewBox: "0 0 16 16"
}, xe = /* @__PURE__ */ M(() => /* @__PURE__ */ r("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" }, null, -1)), Ie = [
  xe
], Be = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon warning",
  viewBox: "0 0 16 16"
}, Ce = /* @__PURE__ */ M(() => /* @__PURE__ */ r("path", { d: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" }, null, -1)), Ve = [
  Ce
], ze = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon error",
  viewBox: "0 0 16 16"
}, Le = /* @__PURE__ */ M(() => /* @__PURE__ */ r("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)), Se = [
  Le
], Te = { class: "title" }, Ne = { class: "subtitle" }, De = /* @__PURE__ */ _({
  __name: "MResult",
  props: {
    title: { default: "" },
    subTitle: { default: "" },
    icon: { default: "info" }
  },
  setup(s) {
    return (a, e) => (o(), n("div", ge, [
      a.icon === "success" ? (o(), n("svg", we, ke)) : i("", !0),
      a.icon === "info" ? (o(), n("svg", Me, Ie)) : i("", !0),
      a.icon === "warning" ? (o(), n("svg", Be, Ve)) : i("", !0),
      a.icon === "error" ? (o(), n("svg", ze, Se)) : i("", !0),
      r("div", Te, f(a.title), 1),
      r("div", Ne, f(a.subTitle), 1),
      O(q, {
        class: "w-max",
        color: "primary",
        onClick: e[0] || (e[0] = (t) => a.$emit("back", t))
      }, {
        default: T(() => [
          I("Назад")
        ]),
        _: 1
      })
    ]));
  }
});
const Ye = /* @__PURE__ */ v(De, [["__scopeId", "data-v-a5a43abc"]]), Pe = (s) => (B("data-v-2ea94c56"), s = s(), C(), s), Ue = { class: "relative" }, Ae = /* @__PURE__ */ Pe(() => /* @__PURE__ */ r("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "absolute right-3 top-1/2 -translate-y-1/2",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ r("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" })
], -1)), Re = [
  Ae
], Ee = /* @__PURE__ */ _({
  __name: "MAlert",
  props: {
    title: { default: "" },
    description: { default: "" },
    type: { default: "default" },
    open: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(s, { emit: a }) {
    const e = s, t = b(e.open);
    return k(
      () => e.open,
      () => {
        t.value = e.open, e.open && setTimeout(() => {
          a("close");
        }, 5e3);
      }
    ), (l, d) => t.value ? (o(), n("div", {
      key: 0,
      class: p(["rounded text-white p-2 fixed bottom-3 shadow shadow-lg shadow-zinc-500 left-1/2 z-50 w-11/12 -translate-x-1/2", l.type])
    }, [
      r("div", Ue, [
        I(f(l.title) + " ", 1),
        r("button", {
          onClick: d[0] || (d[0] = (c) => l.$emit("close"))
        }, Re)
      ])
    ], 2)) : i("", !0);
  }
});
const Ze = /* @__PURE__ */ v(Ee, [["__scopeId", "data-v-2ea94c56"]]);
export {
  Ze as MAlert,
  Xe as MBadge,
  q as MButton,
  je as MCheckbox,
  qe as MInput,
  Ge as MInputNumber,
  Fe as MLink,
  Qe as MProgress,
  Ye as MResult,
  Je as MSelect,
  He as MSwitch,
  We as MTag,
  Ke as MThree
};
//# sourceMappingURL=index.js.map
