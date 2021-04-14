import React from "react";
import classnames from "classnames";

import "./index.css";

import { BoxProps } from "@bit/cianciarusocataldo.demo-ui.types";

const Box: React.FunctionComponent<BoxProps> = ({
  className,
  label = "",
  children,
  callBack,
  values = {},
  hide = false,
  id,
  onChange = () => {},
  ...inputProps
}) => {
  const [selectedValue, setValue] = React.useState("");
  const boxClassname = classnames("box", inputProps.type)
  return (
    <div className={classnames(className, { hidden: hide })}>
      <div className="box-container" key={id || label}>
        <div key="demo_label" className="demo-label">
          <label>{label}</label>
        </div>
        {inputProps.type === "select" ? (
          <select
            className={boxClassname}
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
            {...inputProps}
            checked={inputProps.value}
            className={boxClassname}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      </div>
      {children}
    </div>
  );
};

export default Box;
