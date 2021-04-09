import { BaseCallback, PropType, PropObject } from "../types";

export const Prop = (
  type: PropType,
  value: any,
  values?: Record<string, any>,
  hide = false,
  min = 0,
  max = 100,
  callback?: BaseCallback
): PropObject => ({
  type: type,
  value: value,
  values: values,
  hide: hide,
  min: min,
  max: max,
  callBack: callback,
});

export const HiddenProp = (value: any): PropObject =>
  Prop("text", value, null, true);

export const StringProp = (value: string): PropObject => Prop("text", value);

export const SelectProp = (value: Record<string, any>): PropObject =>
  Prop("select", value[Object.keys(value)[0]], value);

export const NumberProp = (value: number): PropObject => Prop("number", value);

export const BooleanProp = (value: boolean): PropObject =>
  Prop("checkbox", value);

export const RangeProp = (value = 0, min = 0, max = 100): PropObject =>
  Prop("range", value, null, false, min, max);
