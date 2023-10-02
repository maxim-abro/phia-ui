import { defineComponent as p, computed as w, openBlock as o, createElementBlock as d, normalizeClass as _, renderSlot as v, ref as h, onMounted as C, watch as k, withDirectives as $, createElementVNode as r, vModelCheckbox as T, toDisplayString as f, vModelDynamic as O, createCommentVNode as c, vModelText as U, vModelSelect as A, resolveComponent as R, createTextVNode as x, createBlock as B, Transition as E, withCtx as V, Fragment as D, renderList as N, normalizeStyle as S, pushScopeId as z, popScopeId as L, createVNode as j, reactive as F } from "vue";
const H = ["type", "disabled"], q = /* @__PURE__ */ p({
  __name: "MButton",
  props: {
    type: { default: "button" },
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    outline: { type: Boolean, default: !1 }
  },
  setup(a) {
    const s = a, e = w(() => `${s.color} ${s.outline ? "btn-outline" : ""}`);
    return (t, l) => (o(), d("button", {
      type: s.type,
      onSubmit: l[0] || (l[0] = (n) => t.$emit("submit", n)),
      class: _(["rounded px-3 py-1", e.value]),
      disabled: s.disabled
    }, [
      v(t.$slots, "default", {}, void 0, !0)
    ], 42, H));
  }
});
const m = (a, s) => {
  const e = a.__vccOpts || a;
  for (const [t, l] of s)
    e[t] = l;
  return e;
}, P = /* @__PURE__ */ m(q, [["__scopeId", "data-v-466eea48"]]), G = ["href"], J = /* @__PURE__ */ p({
  __name: "MLink",
  props: {
    color: { default: "default" },
    disabled: { type: Boolean, default: !1 },
    href: { default: "#" },
    underline: { type: Boolean, default: !1 }
  },
  setup(a) {
    const s = a, e = w(() => `${s.color} ${s.underline ? "link-underline" : ""} ${s.disabled ? "link-disabled" : ""}`);
    return (t, l) => (o(), d("a", {
      href: s.href,
      class: _(e.value)
    }, [
      v(t.$slots, "default", {}, void 0, !0)
    ], 10, G));
  }
});
const Ye = /* @__PURE__ */ m(J, [["__scopeId", "data-v-345b854e"]]), K = { class: "flex items-center cursor-pointer" }, Q = ["id", "name", "checked", "disabled"], W = ["for"], X = /* @__PURE__ */ p({
  __name: "MCheckbox",
  props: {
    label: { type: [String, Number, Boolean], default: "" },
    disabled: { type: Boolean, default: !1 },
    name: { default: "" },
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: s }) {
    const e = a, t = h(!1);
    return C(() => {
      t.value = e.checked;
    }), k(t, (l) => {
      s("update:modelValue", l);
    }), (l, n) => (o(), d("div", K, [
      $(r("input", {
        type: "checkbox",
        id: l.name,
        name: l.name,
        checked: t.value,
        disabled: l.disabled,
        "onUpdate:modelValue": n[0] || (n[0] = (u) => t.value = u),
        onChange: n[1] || (n[1] = (u) => l.$emit("change", u)),
        class: "checkbox"
      }, null, 40, Q), [
        [T, t.value]
      ]),
      r("label", {
        class: "label",
        for: l.name
      }, f(l.label), 9, W)
    ]));
  }
});
const Ze = /* @__PURE__ */ m(X, [["__scopeId", "data-v-f3e5f538"]]), Y = { class: "relative" }, Z = ["type", "placeholder", "disabled"], ee = /* @__PURE__ */ p({
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
    const e = a, t = h(e.type);
    function l(b) {
      s("update:modelValue", b.target.value);
    }
    const n = h(""), u = () => t.value === "password" ? t.value = "text" : t.value = "password";
    function g(b) {
      n.value = "", s("update:modelValue", "");
    }
    return (b, i) => (o(), d("div", Y, [
      $(r("input", {
        type: t.value,
        placeholder: b.placeholder,
        disabled: b.disabled,
        onInput: l,
        class: "input",
        "onUpdate:modelValue": i[0] || (i[0] = (y) => n.value = y)
      }, null, 40, Z), [
        [O, n.value]
      ]),
      e.clearable && n.value.length ? (o(), d("button", {
        key: 0,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: g
      }, " clear ")) : c("", !0),
      e.showPassword ? (o(), d("button", {
        key: 1,
        class: "absolute right-2 top-1/2 -translate-y-1/2",
        onClick: u
      }, " eye ")) : c("", !0)
    ]));
  }
});
const et = /* @__PURE__ */ m(ee, [["__scopeId", "data-v-a4b03207"]]), te = ["disabled"], se = ["disabled"], ae = ["disabled"], tt = /* @__PURE__ */ p({
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
    const e = a, t = h("");
    C(() => {
      t.value = e.inputValue + "";
    });
    function l(i) {
      i === "+" ? e.max !== parseInt(t.value, 10) && n(parseInt(t.value, 10) + e.steps) : i === "-" && e.min !== parseInt(t.value, 10) && n(parseInt(t.value, 10) - e.steps);
    }
    function n(i) {
      (i || i === 0) && (t.value = i + ""), s("update:modelValue", i);
    }
    function u() {
      t.value = t.value.replace(/[^0-9]/gi, ""), parseInt(t.value, 10) >= e.max && (t.value = e.max + ""), parseInt(t.value, 10) <= e.min && (t.value = e.min + "");
    }
    const g = w(() => parseInt(t.value, 10) === e.min), b = w(() => parseInt(t.value, 10) === e.max);
    return (i, y) => (o(), d("div", {
      class: _(["border border-zinc-400 w-max rounded", { "hover:border-primary-400": !i.disabled }])
    }, [
      r("button", {
        class: _(["px-4 py-3 bg-zinc-100 rounded-l font-bold", {
          "hover:text-primary-400": !g.value || !i.disabled,
          "text-zinc-400 bg-zinc-50": g.value || i.disabled
        }]),
        onClick: y[0] || (y[0] = (I) => l("-")),
        disabled: g.value || i.disabled
      }, " - ", 10, te),
      $(r("input", {
        onBlur: u,
        "onUpdate:modelValue": y[1] || (y[1] = (I) => t.value = I),
        type: "text",
        disabled: i.disabled,
        class: _(["text-center focus:outline-none w-14 h-full", { "text-zinc-400": i.disabled }])
      }, null, 42, se), [
        [U, t.value]
      ]),
      r("button", {
        class: _(["px-4 py-3 bg-zinc-100 rounded-r font-bold", {
          "hover:text-primary-400": !b.value || !i.disabled,
          "text-zinc-400 bg-zinc-50": b.value || i.disabled
        }]),
        onClick: y[2] || (y[2] = (I) => l("+")),
        disabled: b.value || i.disabled
      }, " + ", 10, ae)
    ], 2));
  }
}), le = { class: "relative flex items-center group p-2 cursor-pointer" }, oe = /* @__PURE__ */ r("span", { class: "w-12 h-6 flex items-center flex-shrink-0 ml-4 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-primary after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-5 group-hover:after:translate-x-0" }, null, -1), st = /* @__PURE__ */ p({
  __name: "MSwitch",
  props: {
    checked: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: s }) {
    const t = h(a.checked);
    return k(
      () => t.value,
      () => {
        s("update:modelValue", t.value);
      }
    ), (l, n) => (o(), d("label", le, [
      v(l.$slots, "default"),
      $(r("input", {
        "onUpdate:modelValue": n[0] || (n[0] = (u) => t.value = u),
        type: "checkbox",
        class: "absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md"
      }, null, 512), [
        [T, t.value]
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
    const t = h(a.value);
    return k(
      () => t.value,
      () => {
        s("update:modelValue", t.value);
      }
    ), (l, n) => $((o(), d("select", {
      name: l.name,
      disabled: l.disabled,
      "onUpdate:modelValue": n[0] || (n[0] = (u) => t.value = u),
      class: "select-container"
    }, [
      l.placeholder ? (o(), d("option", de, f(l.placeholder), 1)) : c("", !0),
      v(l.$slots, "default", {}, void 0, !0)
    ], 8, ne)), [
      [A, t.value]
    ]);
  }
});
const at = /* @__PURE__ */ m(re, [["__scopeId", "data-v-829bf71d"]]), ue = { class: "" }, ie = {
  key: 0,
  class: "pl-4"
}, lt = /* @__PURE__ */ p({
  __name: "MThree",
  props: {
    data: {}
  },
  setup(a) {
    const s = a, e = h(!1);
    return (t, l) => {
      const n = R("m-three", !0);
      return o(), d("ul", ue, [
        r("span", {
          class: "hover:bg-zinc-100 py-1.5 px-3 cursor-pointer",
          onClick: l[0] || (l[0] = (u) => s.data.children.length ? e.value = !e.value : "")
        }, [
          x(f(s.data.label) + " ", 1),
          s.data.children.length ? (o(), d("span", {
            key: 0,
            class: _(e.value ? "rotate-180" : "")
          }, "^", 2)) : c("", !0)
        ]),
        s.data.children.length ? (o(), B(E, {
          key: 0,
          "enter-active-class": "duration-500 ease",
          "enter-class": "overflow-hidden max-h-0",
          "enter-to-class": "max-h-[200px] overflow-hidden",
          "leave-active-class": "duration-500 ease-[cubic-bezier(0, 1, 0.5, 1)]",
          "leave-class": "max-h-[200px] overflow-hidden",
          "leave-to-class": "overflow-hidden max-h-0"
        }, {
          default: V(() => [
            e.value ? (o(), d("li", ie, [
              (o(!0), d(D, null, N(s.data.children, (u, g) => (o(), B(n, {
                data: u,
                key: g
              }, null, 8, ["data"]))), 128))
            ])) : c("", !0)
          ]),
          _: 1
        })) : c("", !0)
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
    return (e, t) => (o(), d("div", {
      class: "flex items-center",
      style: S({ width: `${e.width}` })
    }, [
      r("div", {
        class: _(["progressbar", { "h-2": !e.textInside, "h-6": e.textInside }])
      }, [
        r("div", {
          class: _(["progressbar-inner", s.status]),
          style: S({ width: `${e.percentage}%` })
        }, [
          e.textInside && e.percentage > 10 ? (o(), d("span", ce, f(e.percentage) + "% ", 1)) : c("", !0)
        ], 6)
      ], 2),
      !e.status && !e.textInside ? (o(), d("div", pe, f(e.percentage) + "%", 1)) : c("", !0),
      e.status && !e.textInside ? (o(), d("div", _e, f(e.status), 1)) : c("", !0)
    ], 4));
  }
});
const ot = /* @__PURE__ */ m(fe, [["__scopeId", "data-v-3347630f"]]), ve = (a) => (z("data-v-18dbc0bb"), a = a(), L(), a), he = /* @__PURE__ */ ve(() => /* @__PURE__ */ r("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)), me = [
  he
], be = /* @__PURE__ */ p({
  __name: "MTag",
  props: {
    type: { default: "primary" },
    closable: { type: Boolean, default: !1 }
  },
  setup(a) {
    const s = a;
    return (e, t) => (o(), d("span", {
      class: _(["border rounded px-3 pt-1.5 pb-2 text-sm whitespace-nowrap tag", s.type])
    }, [
      v(e.$slots, "default", {}, void 0, !0),
      e.closable ? (o(), d("svg", {
        key: 0,
        onClick: t[0] || (t[0] = (l) => e.$emit("close", l)),
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        fill: "currentColor",
        class: _(["inline rounded-full hover:bg-black cursor-pointer ml-1", `close-${e.type}`]),
        viewBox: "0 0 16 16"
      }, me, 2)) : c("", !0)
    ], 2));
  }
});
const nt = /* @__PURE__ */ m(be, [["__scopeId", "data-v-18dbc0bb"]]), ye = { class: "relative inline-block" }, ge = /* @__PURE__ */ p({
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
    return (l, n) => (o(), d("div", ye, [
      v(l.$slots, "default", {}, void 0, !0),
      l.value ? (o(), d("sup", {
        key: 0,
        class: _(["badge", t.value])
      }, f(e.value), 3)) : c("", !0)
    ]));
  }
});
const dt = /* @__PURE__ */ m(ge, [["__scopeId", "data-v-70779e47"]]), M = (a) => (z("data-v-a5a43abc"), a = a(), L(), a), we = { class: "flex flex-col items-center" }, $e = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon success",
  viewBox: "0 0 16 16"
}, ke = /* @__PURE__ */ M(() => /* @__PURE__ */ r("path", { d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" }, null, -1)), xe = [
  ke
], Me = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon info",
  viewBox: "0 0 16 16"
}, Ie = /* @__PURE__ */ M(() => /* @__PURE__ */ r("path", { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" }, null, -1)), Be = [
  Ie
], Ce = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon warning",
  viewBox: "0 0 16 16"
}, Ve = /* @__PURE__ */ M(() => /* @__PURE__ */ r("path", { d: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0L7.1 4.995z" }, null, -1)), ze = [
  Ve
], Le = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  fill: "currentColor",
  class: "icon error",
  viewBox: "0 0 16 16"
}, Se = /* @__PURE__ */ M(() => /* @__PURE__ */ r("path", { d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" }, null, -1)), Te = [
  Se
], De = { class: "title" }, Ne = { class: "subtitle" }, Pe = /* @__PURE__ */ p({
  __name: "MResult",
  props: {
    title: { default: "" },
    subTitle: { default: "" },
    icon: { default: "info" }
  },
  setup(a) {
    return (s, e) => (o(), d("div", we, [
      s.icon === "success" ? (o(), d("svg", $e, xe)) : c("", !0),
      s.icon === "info" ? (o(), d("svg", Me, Be)) : c("", !0),
      s.icon === "warning" ? (o(), d("svg", Ce, ze)) : c("", !0),
      s.icon === "error" ? (o(), d("svg", Le, Te)) : c("", !0),
      r("div", De, f(s.title), 1),
      r("div", Ne, f(s.subTitle), 1),
      j(P, {
        class: "w-max",
        color: "primary",
        onClick: e[0] || (e[0] = (t) => s.$emit("back", t))
      }, {
        default: V(() => [
          x("Назад")
        ]),
        _: 1
      })
    ]));
  }
});
const rt = /* @__PURE__ */ m(Pe, [["__scopeId", "data-v-a5a43abc"]]), ut = /* @__PURE__ */ p({
  __name: "MCollapse",
  props: {
    accordion: { type: Boolean, default: !1 }
  },
  setup(a) {
    const s = h(null);
    return C(() => {
    }), (e, t) => (o(), d("div", {
      ref_key: "slot",
      ref: s
    }, [
      v(e.$slots, "default")
    ], 512));
  }
}), Oe = { class: "border-t border-b" }, Ue = /* @__PURE__ */ r("span", null, "galka", -1), Ae = {
  key: 0,
  class: "mb-2"
}, it = /* @__PURE__ */ p({
  __name: "MCollapseItem",
  props: {
    title: { default: "" },
    id: { default: 0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["toggle"],
  setup(a, { emit: s }) {
    const e = a, t = F({
      bool: !1
    });
    function l() {
      e.disabled || (t.bool = !t.bool, s("toggle", { isOpen: t.bool, id: e.id }));
    }
    return (n, u) => (o(), d("div", Oe, [
      r("div", {
        class: "cursor-pointer w-full py-4 mb-2 flex justify-between items-center",
        onClick: l
      }, [
        x(f(n.title) + " ", 1),
        Ue
      ]),
      t.bool ? (o(), d("div", Ae, [
        v(n.$slots, "default")
      ])) : c("", !0)
    ]));
  }
}), Re = (a) => (z("data-v-2ea94c56"), a = a(), L(), a), Ee = { class: "relative" }, je = /* @__PURE__ */ Re(() => /* @__PURE__ */ r("svg", {
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
], He = /* @__PURE__ */ p({
  __name: "MAlert",
  props: {
    title: { default: "" },
    description: { default: "" },
    type: { default: "default" },
    open: { type: Boolean, default: !1 }
  },
  emits: ["close"],
  setup(a, { emit: s }) {
    const e = a, t = h(e.open);
    return k(
      () => e.open,
      () => {
        t.value = e.open, e.open && setTimeout(() => {
          s("close");
        }, 5e3);
      }
    ), (l, n) => t.value ? (o(), d("div", {
      key: 0,
      class: _(["rounded text-white p-2 fixed bottom-3 shadow shadow-lg shadow-zinc-500 left-1/2 z-50 w-11/12 -translate-x-1/2", l.type])
    }, [
      r("div", Ee, [
        x(f(l.title) + " ", 1),
        r("button", {
          onClick: n[0] || (n[0] = (u) => l.$emit("close"))
        }, Fe)
      ])
    ], 2)) : c("", !0);
  }
});
const ct = /* @__PURE__ */ m(He, [["__scopeId", "data-v-2ea94c56"]]), qe = { class: "flex items-center flex-wrap" }, Ge = /* @__PURE__ */ r("li", null, [
  /* @__PURE__ */ r("a", {
    class: "text-gray-600 text-xs md:text-base hover:underline",
    href: "/"
  }, "Главная")
], -1), Je = /* @__PURE__ */ r("span", { class: "mx-3 text-gray-500 text-xs md:text-base" }, " / ", -1), Ke = ["href"], Qe = {
  key: 1,
  class: "text-primary text-xs md:text-base"
}, pt = /* @__PURE__ */ p({
  __name: "MBreadcrumbs",
  props: {
    crumbs: {}
  },
  setup(a) {
    const s = a;
    function e(t) {
      return t === s.crumbs.length;
    }
    return (t, l) => (o(), d("nav", null, [
      r("ol", qe, [
        Ge,
        (o(!0), d(D, null, N(t.crumbs, (n, u) => (o(), d("li", {
          key: u,
          class: _(["breadcrumb-item", { "text-primary": e(u) }])
        }, [
          Je,
          n.link ? (o(), d("a", {
            key: 0,
            class: "text-gray-600 text-xs md:text-base hover:underline",
            href: n.link
          }, f(n.title), 9, Ke)) : c("", !0),
          n.link ? c("", !0) : (o(), d("span", Qe, f(n.title), 1))
        ], 2))), 128))
      ])
    ]));
  }
}), We = { class: "relative w-max" }, _t = /* @__PURE__ */ p({
  __name: "MDropdown",
  props: {
    type: { default: "text" },
    maxHeight: { default: 50 },
    disabled: { type: Boolean, default: !1 },
    trigger: { default: "hover" },
    hideTimeout: { default: 250 }
  },
  setup(a) {
    const s = a, e = h(!1);
    function t() {
      e.value = !0;
    }
    function l() {
      setTimeout(() => e.value = !1, s.hideTimeout);
    }
    return (n, u) => (o(), d("div", We, [
      n.type === "button" ? (o(), B(P, {
        key: 0,
        onClick: t,
        class: "relative"
      }, {
        default: V(() => [
          v(n.$slots, "default")
        ]),
        _: 3
      })) : (o(), d("div", {
        key: 1,
        onClick: t,
        class: "text-primary relative"
      }, [
        v(n.$slots, "default")
      ])),
      e.value ? (o(), d("ul", {
        key: 2,
        onMouseleave: l,
        class: "bg-white shadow absolute left-0 -bottom-1 w-full translate-y-full"
      }, [
        v(n.$slots, "dropdown")
      ], 32)) : c("", !0)
    ]));
  }
});
export {
  ct as MAlert,
  dt as MBadge,
  pt as MBreadcrumb,
  P as MButton,
  Ze as MCheckbox,
  ut as MCollapse,
  it as MCollapseItem,
  _t as MDropdown,
  et as MInput,
  tt as MInputNumber,
  Ye as MLink,
  ot as MProgress,
  rt as MResult,
  at as MSelect,
  st as MSwitch,
  nt as MTag,
  lt as MThree
};
//# sourceMappingURL=index.js.map
