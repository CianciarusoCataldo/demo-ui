import React from "react";
import "./index.css";
import { BaseCallback, PropObject } from "../../logic/types";
interface Props {
    className?: string;
    props?: Record<string, PropObject>;
    label?: string;
    renderFunction?: BaseCallback;
    screenshot?: boolean;
    settings?: {
        debug?: boolean;
        screenshot?: boolean;
    };
    rows?: string[][];
    children?: JSX.Element;
}
declare const Demo: React.FunctionComponent<Props>;
export default Demo;
