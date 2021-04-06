export type BaseCallback = (
  props: Record<string, any>,
  setProps: (newProps: Record<string, any>) => void
) => JSX.Element;
