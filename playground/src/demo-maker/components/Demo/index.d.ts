import React from "react";
import "./index.css";
import { BaseCallback, Prop } from "../../logic/types";
interface Props {
    className?: string;
    props?: Record<string, Prop>;
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
