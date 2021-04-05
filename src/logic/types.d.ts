export type BaseCallback = (
  props: Record<string, any>,
  setProps: (newProps: Record<string, any>) => void
) => JSX.Element;

export type PropType = "text" | "checkbox" | "select" | "range" | "number";

export interface Prop<T = any> {
  type?: PropType;
  value?: T;
  values?: Record<string, T>;
  callBack?: BaseCallback;
  hide?: boolean;
  min?: number;
  max?: number;
}
