import React from "react";
import "./index.css";
import { Prop } from "../../logic/types";
interface Props {
    label?: string;
    borderContent?: JSX.Element;
    customSettings?: Record<string, Prop & {
        onChange: (value: any) => void;
    }>;
    children?: JSX.Element;
    screenshot?: boolean;
    className?: string;
}
declare const Previewer: React.FunctionComponent<Props>;
export default Previewer;
