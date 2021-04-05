import React from "react";
import "./index.css";
import { Prop } from "../../logic/types";
interface Props {
    className?: string;
    label?: string;
    onChange?: (value: any) => void;
    id?: string;
    children?: JSX.Element;
}
declare const Box: React.FunctionComponent<Prop & Props>;
export default Box;
