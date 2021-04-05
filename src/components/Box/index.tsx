import React from "react";
import classnames from "classnames";

import "./index.css";

import { Prop } from "../../logic/types";

interface Props {
  className?: string;
  label?: string;
  onChange?: (value: any) => void;
  id?: string;
  children?: JSX.Element;
}

const Box: React.FunctionComponent<Prop & Props> = ({
  className,
  label = "",
  children,
  type = "text",
  callBack,
  value,
  values = {},
  hide = false,
  min,
  max,
  id,
  onChange = () => {},
}) => {
  const [selectedValue, setValue] = React.useState("");

  return (
    <div
      className={classnames("box-container", className, { hidden: hide })}
      key={id || label}
    >
      <div key="demo_label" className="demo-label">
        <label>{label}</label>
      </div>
      <div key="demo_box_element">
        {type === "select" ? (
          <select
            className={classnames("box", type)}
            value={selectedValue}
            onChange={(e) => {
              onChange(values[e.target.value]);
              setValue(e.target.value);
            }}
          >
            {Object.keys(values).map((element) => (
              <option key={element} value={element}>
                {element}
              </option>
            ))}
          </select>
        ) : (
          <input
            checked={value}
            className={classnames("box", type)}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            min={min}
            max={max}
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default Box;
