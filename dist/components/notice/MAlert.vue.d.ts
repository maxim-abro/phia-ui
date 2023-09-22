declare const _default: import("vue").DefineComponent<{
    type: {
        type: import("vue").PropType<"default" | "success" | "info" | "warning" | "error">;
        default: string;
    };
    title: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    description: {
        type: import("vue").PropType<string>;
        default: string;
    };
    open: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: import("vue").PropType<"default" | "success" | "info" | "warning" | "error">;
        default: string;
    };
    title: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
    description: {
        type: import("vue").PropType<string>;
        default: string;
    };
    open: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    type: "default" | "success" | "info" | "warning" | "error";
    title: string;
    description: string;
    open: boolean;
}, {}>;
export default _default;
//# sourceMappingURL=MAlert.vue.d.ts.map