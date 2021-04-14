/** Demo Component's props types */
export type PropType =
  | "text"
  | "checkbox"
  | "select"
  | "range"
  | "number"
  | "color";

/** Demo Component's Prop */
export interface PropObject<T = any> {
  type?: PropType;
  value?: T;
  values?: Record<string, T>;
  callBack?: BaseCallback<void>;
  hide?: boolean;
  min?: number;
  max?: number;
}

/** Standard Prop calback function */
export type BaseCallback<T = JSX.Element> = (
  props: Record<string, any>,
  setProps: (newProps: Record<string, any>) => void
) => T;

/** Common attributes for UI components */
interface UiCommonProps {
  id?: string;
  className?: string;
  label?: string;
}

/** Box component props */
export type BoxProps = PropObject &
  UiCommonProps & {
    onChange?: (value: any) => void;
  };

interface PreviewerInternalProps {
  screenshot?: boolean;
  header?: string;
}

/** Previewer props */
export type PreviewerProps = UiCommonProps &
  PreviewerInternalProps & {
    borderContent?: JSX.Element;
    children?: JSX.Element;
  };

/** Demo component props */
export type DemoProps = UiCommonProps &
  PreviewerInternalProps & {
    props?: Record<string, PropObject>;
    debug?: boolean;
    rows?: string[][];
    children?: JSX.Element | BaseCallback;
  };
