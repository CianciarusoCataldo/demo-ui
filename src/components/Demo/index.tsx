import React from "react";

import "./index.css";

import { DemoProps } from "@bit/cianciarusocataldo.demo-ui.types";

import {
  formatValue,
  getProps,
  merge,
} from "@bit/cianciarusocataldo.demo-ui.logic";

import Box from "@bit/cianciarusocataldo.demo-ui.box";
import Previewer from "@bit/cianciarusocataldo.demo-ui.previewer";

const Demo = ({
  props: inputProps = {},
  rows,
  children,
  debug,
  ...previewerProps
}:DemoProps) => {
  const [props, setProps] = React.useState<Record<string, any>>(
    getProps(inputProps)
  );
  let boxRows = rows ? rows : [Object.keys(inputProps)];

  return (
    <Previewer
      {...previewerProps}
      borderContent={
        <div key="demo_rows">
          {boxRows.map((row, index) => (
            <div className="demo-row" key={`demo_row_${index}`}>
              {row.map((prop) => {
                return (
                  <div key={prop}>
                    <Box
                      id={prop}
                      label={prop}
                      hide={inputProps[prop].hide}
                      type={inputProps[prop].type}
                      value={props[prop]}
                      onChange={(value) =>
                        setProps(
                          merge(props, {
                            [prop]: formatValue(value, inputProps[prop].type),
                          })
                        )
                      }
                      values={inputProps[prop].values}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      }
    >
      <div className="demo-container" key="demo_container">
        <div key="demo_children">
          {typeof children === "function"
            ? children(props, (newProps) => setProps(merge(props, newProps)))
            : children}
        </div>
        {debug && (
          <div key="props-debug" className="props-container">
            {"{"}
            {Object.keys(props).map((prop) => (
              <div className="prop" key={prop}>
                <label className="name">{`${prop} : `}</label>
                <label className="value">{`${props[prop]}`}</label>,
              </div>
            ))}
            {"}"}
          </div>
        )}
      </div>
    </Previewer>
  );
};

export default Demo;
