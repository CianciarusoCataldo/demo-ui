/* Prop-creators types */

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

/* Logic types */

export type BaseCallback = (
  props: Record<string, any>,
  setProps: (newProps: Record<string, any>) => void
) => JSX.Element;

/* Box component props */

export type BoxProps = PropObject & {
  className?: string;
  label?: string;
  onChange?: (value: any) => void;
  id?: string;
  children?: JSX.Element;
};

/* Previewer types */

export interface PreviewerProps {
  label?: string;
  borderContent?: JSX.Element;
  customSettings?: Record<
    string,
    PropObject & { onChange: (value: any) => void }
  >;
  children?: JSX.Element;
  screenshot?: boolean;
  className?: string;
}

/* Demo component types */

export interface DemoProps {
  className?: string;
  props?: Record<string, PropObject>;
  label?: string;
  renderFunction?: BaseCallback;
  screenshot?: boolean;
  settings?: { debug?: boolean; screenshot?: boolean };
  rows?: string[][];
  children?: JSX.Element;
}
