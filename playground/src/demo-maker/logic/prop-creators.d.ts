import { PropType, Prop as PropObject, BaseCallback } from "./types";
export declare const Prop: (type: PropType, value: any, values?: Record<string, any>, hide?: boolean, min?: number, max?: number, callback?: BaseCallback) => PropObject;
export declare const HiddenProp: (value: any) => PropObject;
export declare const StringProp: (value: string) => PropObject;
export declare const SelectProp: (value: Record<string, any>) => PropObject;
export declare const NumberProp: (value: number) => PropObject;
export declare const BooleanProp: (value: boolean) => PropObject;
export declare const RangeProp: (value?: number, min?: number, max?: number) => PropObject;
