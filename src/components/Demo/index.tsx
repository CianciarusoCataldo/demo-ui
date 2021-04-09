import React from "react";

import "./index.css";

import { DemoProps } from "../../types";

import { formatValue, getProps, merge } from "../../logic";

import Box from "../Box";
import Previewer from "../Previewer";

const Demo: React.FunctionComponent<DemoProps> = ({
  className = "",
  props: inputProps = {},
  label = "",
  renderFunction = (_, __) => <div />,
  rows,
  children,
  settings = {},
}) => {
  const [props, setProps] = React.useState<Record<string, any>>(
    getProps(inputProps)
  );
  const [showProps, setPropsVisible] = React.useState(false);
  let boxRows = rows ? rows : [Object.keys(inputProps)];

  return (
    <Previewer
      className={className}
      label={label}
      screenshot={settings.screenshot}
      customSettings={
        settings.debug && {
          "Show props": {
            type: "checkbox",
            value: showProps,
            onChange: () => setPropsVisible(!showProps),
          },
        }
      }
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
        <div key="demo_render_function">
          {renderFunction(props, (newProps) =>
            setProps(merge(props, newProps))
          )}
        </div>
        <div key="demo_children">{children}</div>
        {settings.debug && showProps && (
          <div key="props-container" className="props-container">
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
