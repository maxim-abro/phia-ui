import { defineComponent as p, computed as w, openBlock as o, createElementBlock as n, normalizeClass as _, renderSlot as y, ref as m, onMounted as B, watch as k, withDirectives as $, createElementVNode as r, vModelCheckbox as S, toDisplayString as f, vModelDynamic as N, createCommentVNode as i, vModelText as D, vModelSelect as P, resolveComponent as U, createTextVNode as M, createBlock as z, Transition as O, withCtx as T, Fragment as A, renderList as R, normalizeStyle as L, pushScopeId as C, popScopeId as V, createVNode as E, reactive as j } from "vue";
const F = ["type", "disabled"], q = /* @__PURE__ */ p({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(a) {
    const s = a, e = w(() => `${s.color} ${s.outline ? "btn-outline" : ""}`);
    return (t, l) => (o(), n("button", {
      type: s.type,
      onSubmit: l[0] || (l[0] = (d) => t.$emit("submit", d)),
      class: _(["rounded px-3 py-1", e.value]),
      disabled: s.disabled
    }, [
      y(t.$slots, "default", {}, void 0, !0)
    ], 42, F));
  }
});
const v = (a, s) => {
  const e = a.__vccOpts || a;
  for (const [t, l] of s)
    e[t] = l;
  return e;
}, G = /* @__PURE__ */ v(q, [["__scopeId", "data-v-9fe18dc1"]]), H = ["href"], J = /* @__PURE__ */ p({
  __name: "MLink",
  props: {
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "#" },
    underline: { type: Boolean, default: !1 }
  },
  setup(a) {
    const s = a, e = w(() => `${s.color} ${s.underline ? "link-underline" : ""} ${s.disabled ? "link-disabled" : ""}`);
    return (t, l) => (o(), n("a", {
      href: s.href,
      class: _(e.value)
    }, [
      y(t.$slots, "default", {}, void 0, !0)
    ], 10, H));
  }
});
const He = /* @__PURE__ */ v(J, [["__scopeId", "data-v-345b854e"]]), K = { class: "flex items-center cursor-pointer" }, Q = ["id", "name", "checked", "disabled"], W = ["for"], X = /* @__PURE__ */ p({
  __name: "MCheckbox",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: "" },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: s }) {
    const e = a, t = m(!1);
    return B(() => {
      t.value = e.checked;
    }), k(t, (l) => {
      s("update:modelValue", l);
    }), (l, d) => (o(), n("div", K, [
      $(r("input", {
        type: "checkbox",
        id: l.name,
        name: l.name,
        checked: t.value,
        disabled: l.disabled,
        "onUpdate:modelValue": d[0] || (d[0] = (c) => t.value = c),
        onChange: d[1] || (d[1] = (c) => l.$emit("change", c)),
        class: "checkbox"
      }, null, 40, Q), [
        [S, t.value]
      ]),
      r("label", {
        class: "label",
        for: l.name
      }, f(l.label), 9, W)
    ]));
  }
});
const Je = /* @__PURE__ */ v(X, [["__scopeId", "data-v-f3e5f538"]]), Y = { class: "relative" }, Z = ["type", "placeholder", "disabled"], ee = /* @__PURE__ */ p({
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
    const e = a, t = m(e.type);
    function l(h) {
      s("update:modelValue", h.target.value);
    }
    const d = m(""), c = () => t.value === "password" ? t.value = "text" : t.value = "password";
    function g(h) {
      d.value = "", s("update:modelValue", "");
    }
    return (h, u) => (o(), n("div", Y, [
      $(r("input", {
        type: t.value,
        placeholder: h.placeholder,
        disabled: h.disabled,
        onInput: l,
        class: "input",
        "onUpdate:modelValue": u[0] || (u[0] = (b) => d.value = b)
      }, null, 40, Z), [
        [N, d.value]
      ]),
      e.clearable && d.value.length ? (o(), n("button", {
        key: 0,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: g
      }, " clear ")) : i("", !0),
      e.showPassword ? (o(), n("button", {
        key: 1,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: c
      }, " eye ")) : i("", !0)
    ]));
  }
});
const Ke = /* @__PURE__ */ v(ee, [["__scopeId", "data-v-a4b03207"]]), te = ["disabled"], se = ["disabled"], ae = ["disabled"], Qe = /* @__PURE__ */ p({
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
    const e = a, t = m("");
    B(() => {
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
    const g = w(() => parseInt(t.value, 10) === e.min), h = w(() => parseInt(t.value, 10) === e.max);
    return (u, b) => (o(), n("div", {
      class: _(["border border-zinc-400 w-max rounded", { "hover:border-primary-400": !u.disabled }])
    }, [
      r("button", {
        class: _(["px-4 py-3 bg-zinc-100 rounded-l font-bold", {
          "hover:text-primary-400": !g.value || !u.disabled,
          "text-zinc-400 bg-zinc-50": g.value || u.disabled
        }]),
        onClick: b[0] || (b[0] = (I) => l("-")),
        disabled: g.value || u.disabled
      }, " - ", 10, te),
      $(r("input", {
        onBlur: c,
        "onUpdate:modelValue": b[1] || (b[1] = (I) => t.value = I),
        type: "text",
        disabled: u.disabled,
        class: _(["text-center focus:outline-none w-14 h-full", { "text-zinc-400": u.disabled }])
      }, null, 42, se), [
        [D, t.value]
      ]),
      r("button", {
        class: _(["px-4 py-3 bg-zinc-100 rounded-r font-bold", {
          "hover:text-primary-400": !h.value || !u.disabled,
          "text-zinc-400 bg-zinc-50": h.value || u.disabled
        }]),
        onClick: b[2] || (b[2] = (I) => l("+")),
        disabled: h.value || u.disabled
      }, " + ", 10, ae)
    ], 2));
  }
}), le = { class: "relative flex items-center group p-2 cursor-pointer" }, oe = /* @__PURE__ */ r("span", { class: "w-12 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-primary after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-5 group-hover:after:translate-x-0" }, null, -1), We = /* @__PURE__ */ p({
  __name: "MSwitch",
  props: {
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: s }) {
    const t = m(a.checked);
    return k(
      () => t.value,
      () => {
        s("update:modelValue", t.value);
      }
    ), (l, d) => (o(), n("label", le, [
      y(l.$slots, "default"),
      $(r("input", {
        "onUpdate:modelValue": d[0] || (d[0] = (c) => t.value = c),
        type: "checkbox",
        class: "absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
      }, null, 512), [
        [S, t.value]
      ]),
      oe
    ]));
  }
}), ne = ["name", "disabled"], de = {
  key: 0,
  value: "",
  disabled: ""
}, re = /* @__PURE__ */ p({
  __name: "MSelect",
  props: {
    placeholder: { default: "" },
    value: { default: "" },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    name: { default: "" }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: s }) {
    const t = m(a.value);
    return k(
      () => t.value,
      () => {
        s("update:modelValue", t.value);
      }
    ), (l, d) => $((o(), n("select", {
      name: l.name,
      disabled: l.disabled,
      "onUpdate:modelValue": d[0] || (d[0] = (c) => t.value = c),
      class: "select-container"
    }, [
      l.placeholder ? (o(), n("option", de, f(l.placeholder), 1)) : i("", !0),
      y(l.$slots, "default", {}, void 0, !0)
    ], 8, ne)), [
      [P, t.value]
    ]);
  }
});
const Xe = /* @__PURE__ */ v(re, [["__scopeId", "data-v-829bf71d"]]), ue = { class: "" }, ie = {
  key: 0,
  class: "pl-4"
}, Ye = /* @__PURE__ */ p({
  __name: "MThree",
  props: {
    data: {}
  },
  setup(a) {
    const s = a, e = m(!1);
    return (t, l) => {
      const d = U("m-three", !0);
      return o(), n("ul", ue, [
        r("span", {
          class: "hover:bg-zinc-100 py-1.5 px-3 cursor-pointer",
          onClick: l[0] || (l[0] = (c) => s.data.children.length ? e.value = !e.value : "")
        }, [
          M(f(s.data.label) + " ", 1),
          s.data.children.length ? (o(), n("span", {
            key: 0,
            class: _(e.value ? "rotate-180" : "")
          }, "^", 2)) : i("", !0)
        ]),
        s.data.children.length ? (o(), z(O, {
          key: 0,
          "enter-active-class": "duration-500 ease",
          "enter-class": "overflow-hidden max-h-0",
          "enter-to-class": "max-h-[200px] overflow-hidden",
          "leave-active-class": "duration-500 ease-[cubic-bezier(0, 1, 0.5, 1)]",
          "leave-class": "max-h-[200px] overflow-hidden",
          "leave-to-class": "overflow-hidden max-h-0"
        }, {
          default: T(() => [
            e.value ? (o(), n("li", ie, [
              (o(!0), n(A, null, R(s.data.children, (c, g) => (o(), z(d, {
                data: c,
                key: g
              }, null, 8, ["data"]))), 128))
            ])) : i("", !0)
          ]),
          _: 1
        })) : i("", !0)
      ]);
    };
  }
}), ce = {
  key: 0,
  class: "progressbar-inner-text"
}, pe = {
  key: 0,
  class: "progressbar-text"
}, _e = {
  key: 1,
  class: "progressbar-text"
}, fe = /* @__PURE__ */ p({
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
      style: L({ width: `${e.width}` })
    }, [
      r("div", {
        class: _(["progressbar", { "h-2": !e.textInside, "h-6": e.textInside }])
      }, [
        r("div", {
          class: _(["progressbar-inner", s.status]),
          style: L({ width: `${e.percentage}%` })
        }, [
          e.textInside && e.percentage > 10 ? (o(), n("span", ce, f(e.percentage) + "% ", 1)) : i("", !0)
        ], 6)
      ], 2),
      !e.status && !e.textInside ? (o(), n("div", pe, f(e.percentage) + "%", 1)) : i("", !0),
      e.status && !e.textInside ? (o(), n("div", _e, f(e.status), 1)) : i("", !0)
    ], 4));
  }
});
const Ze = /* @__PURE__ */ v(fe, [["__scopeId", "data-v-3347630f"]]), ve = (a) => (C("data-v-18dbc0bb"), a = a(), V(), a), he = /* @__PURE__ */ ve(() => /* @__PURE__ */ r("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)), me = [
  he
], be = /* @__PURE__ */ p({
  __name: "MTag",
  props: {
    type: { default: "primary" },
    closable: { type: Boolean, default: !1 }
  },
  setup(a) {
    const s = a;
    return (e, t) => (o(), n("span", {
      class: _(["border rounded px-3 pt-1.5 pb-2 text-sm whitespace-nowrap tag", s.type])
    }, [
      y(e.$slots, "default", {}, void 0, !0),
      e.closable ? (o(), n("svg", {
        key: 0,
        onClick: t[0] || (t[0] = (l) => e.$emit("close", l)),
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        class: _(["inline rounded-full hover:bg-black cursor-pointer ml-1", `close-${e.type}`]),
        viewBox: "0 0 16 16"
      }, me, 2)) : i("", !0)
    ], 2));
  }
});
const et = /* @__PURE__ */ v(be, [["__scopeId", "data-v-18dbc0bb"]]), ye = { class: "relative inline-block" }, ge = /* @__PURE__ */ p({
  __name: "MBadge",
  props: {
    value: { default: 0 },
    max: { default: 10 },
    isDot: { type: Boolean, default: !1 },
    hidden: { type: Boolean, default: !1 },
    type: { default: "default" }
  },
  setup(a) {
    const s = a, e = w(() => s.value > s.max ? s.max + "+" : s.value && !s.isDot ? s.value : ""), t = w(() => `${s.type} ${s.isDot ? "dot" : ""}`);
    return (l, d) => (o(), n("div", ye, [
      y(l.$slots, "default", {}, void 0, !0),
      l.value ? (o(), n("sup", {
        key: 0,
        class: _(["badge", t.value])
      }, f(e.value), 3)) : i("", !0)
    ]));
  }
});
const tt = /* @__PURE__ */ v(ge, [["__scopeId", "data-v-70779e47"]]), x = (a) => (C("data-v-a5a43abc"), a = a(), V(), a), we = { class: "flex flex-col items-center" }, $e = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon success",
  viewBox: "0 0 16 16"
}, ke = /* @__PURE__ */ x(() => /* @__PURE__ */ r("path", { d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" }, null, -1)), Me = [
  ke
], xe = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon info",
  viewBox: "0 0 16 16"
}, Ie = /* @__PURE__ */ x(() => /* @__PURE__ */ r("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" }, null, -1)), Be = [
  Ie
], Ce = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon warning",
  viewBox: "0 0 16 16"
}, Ve = /* @__PURE__ */ x(() => /* @__PURE__ */ r("path", { d: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" }, null, -1)), ze = [
  Ve
], Le = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon error",
  viewBox: "0 0 16 16"
}, Se = /* @__PURE__ */ x(() => /* @__PURE__ */ r("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)), Te = [
  Se
], Ne = { class: "title" }, De = { class: "subtitle" }, Pe = /* @__PURE__ */ p({
  __name: "MResult",
  props: {
    title: { default: "" },
    subTitle: { default: "" },
    icon: { default: "info" }
  },
  setup(a) {
    return (s, e) => (o(), n("div", we, [
      s.icon === "success" ? (o(), n("svg", $e, Me)) : i("", !0),
      s.icon === "info" ? (o(), n("svg", xe, Be)) : i("", !0),
      s.icon === "warning" ? (o(), n("svg", Ce, ze)) : i("", !0),
      s.icon === "error" ? (o(), n("svg", Le, Te)) : i("", !0),
      r("div", Ne, f(s.title), 1),
      r("div", De, f(s.subTitle), 1),
      E(G, {
        class: "w-max",
        color: "primary",
        onClick: e[0] || (e[0] = (t) => s.$emit("back", t))
      }, {
        default: T(() => [
          M("Назад")
        ]),
        _: 1
      })
    ]));
  }
});
const st = /* @__PURE__ */ v(Pe, [["__scopeId", "data-v-a5a43abc"]]), at = /* @__PURE__ */ p({
  __name: "MCollapse",
  props: {
    accordion: { type: Boolean, default: !1 }
  },
  setup(a) {
    const s = m(null);
    return B(() => {
    }), (e, t) => (o(), n("div", {
      ref_key: "slot",
      ref: s
    }, [
      y(e.$slots, "default")
    ], 512));
  }
}), Ue = { class: "border-t border-b" }, Oe = /* @__PURE__ */ r("span", null, "galka", -1), Ae = {
  key: 0,
  class: "mb-2"
}, lt = /* @__PURE__ */ p({
  __name: "MCollapseItem",
  props: {
    title: { default: "" },
    id: { default: 0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["toggle"],
  setup(a, { emit: s }) {
    const e = a, t = j({
      bool: !1
    });
    function l() {
      e.disabled || (t.bool = !t.bool, s("toggle", { isOpen: t.bool, id: e.id }));
    }
    return (d, c) => (o(), n("div", Ue, [
      r("div", {
        class: "cursor-pointer w-full py-4 mb-2 flex justify-between items-center",
        onClick: l
      }, [
        M(f(d.title) + " ", 1),
        Oe
      ]),
      t.bool ? (o(), n("div", Ae, [
        y(d.$slots, "default")
      ])) : i("", !0)
    ]));
  }
}), Re = (a) => (C("data-v-2ea94c56"), a = a(), V(), a), Ee = { class: "relative" }, je = /* @__PURE__ */ Re(() => /* @__PURE__ */ r("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "absolute right-3 top-1/2 -translate-y-1/2",
  viewBox: "0 0 16 16"
}, [
  /* @__PURE__ */ r("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" })
], -1)), Fe = [
  je
], qe = /* @__PURE__ */ p({
  __name: "MAlert",
  props: {
    title: { default: "" },
    description: { default: "" },
    type: { default: "default" },
    open: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(a, { emit: s }) {
    const e = a, t = m(e.open);
    return k(
      () => e.open,
      () => {
        t.value = e.open, e.open && setTimeout(() => {
          s("close");
        }, 5e3);
      }
    ), (l, d) => t.value ? (o(), n("div", {
      key: 0,
      class: _(["rounded text-white p-2 fixed bottom-3 shadow shadow-lg shadow-zinc-500 left-1/2 z-50 w-11/12 -translate-x-1/2", l.type])
    }, [
      r("div", Ee, [
        M(f(l.title) + " ", 1),
        r("button", {
          onClick: d[0] || (d[0] = (c) => l.$emit("close"))
        }, Fe)
      ])
    ], 2)) : i("", !0);
  }
});
const ot = /* @__PURE__ */ v(qe, [["__scopeId", "data-v-2ea94c56"]]);
export {
  ot as MAlert,
  tt as MBadge,
  G as MButton,
  Je as MCheckbox,
  at as MCollapse,
  lt as MCollapseItem,
  Ke as MInput,
  Qe as MInputNumber,
  He as MLink,
  Ze as MProgress,
  st as MResult,
  Xe as MSelect,
  We as MSwitch,
  et as MTag,
  Ye as MThree
};
//# sourceMappingURL=index.js.map
