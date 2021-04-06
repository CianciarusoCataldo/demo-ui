export type PropType = "text" | "checkbox" | "select" | "range" | "number";

export interface PropObject<T = any> {
  type?: PropType;
  value?: T;
  values?: Record<string, T>;
  callBack?: BaseCallback;
  hide?: boolean;
  min?: number;
  max?: number;
}
