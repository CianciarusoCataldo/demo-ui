import { Prop, PropType } from "./types";
export declare const formatValue: (value: any, type: PropType) => any;
export declare const merge: (base: Record<string, any>, toMerge: Record<string, any>) => {
    [x: string]: any;
};
export declare const getProps: (props: Record<string, Prop>) => {};
export declare const takeScreenshot: (element: HTMLElement, background?: string) => void;
export declare const downloadFile: (url: string) => void;
