import React from "react";

import "./index.css";

import { DemoProps } from "../../types";

import { formatValue, getProps, merge } from "../../logic";

import Box from "../Box";
import Previewer from "../Previewer";

/**
 *
 * @param props input demo props for the component. For every demo prop (excluding the hidden props) will be rendered a UI element (Box),
 * to change every props's values in real time
 *
 * @param rows the UI schema matrix for the rendered Boxes (one for every props specified with the props parameter). If not set, all UI props's elements
 * will be rendered in one line, on the Previewer's bottom border. If set, every array element (an array, as it must be an array of arrays) will be
 * rendered as a row. Every string inside this matrix should be the name of one of the props specified, as it will render the associated prop, into the related row.
 * The strings that are not valid props's names, won't be included
 *
 * @param debug if set, it shows useful debug infos, for example the props values as they are, printed from the state
 *
 * @param screenshot (extended from Previewer component) if set, enable the screenshot feature, that generate a png image of the wrapped component
 * (useful for presentations)
 *
 * @param header (extended from Previewer component) the internal Previewer title, showed upon the Demo component
 *
 * @param label (extended from Previewer component) the internal Previewer label, showed inside the Previewer component, on the top border
 *
 * @param id (extended from Previewer component) a custom id applied as a key to the main component. If no specified, a random one will be generated It is mostly used to prevent
 * React warnings and errors (also, this prevent unexpected re-renderings)
 *
 * @param className a custom className applied on the main component's container
 *
 * @param children The component to wrap. The behaviour is different, based on its type:
 * - JSX.ELement: Basically, the Demo component use the Previewer component internally (it can be used as a Previewer,
 * as they share most of the props), so the component can be a simple JSX.Element. in this case, it will be rendered as is, without the normal
 * Demo component's flow (that change the previewed component as the props's values change).
 *
 *
 * - Render Function (BaseCallback type): if the children is a function (with 2 arguments, the props and a function to change them), it will be
 * connected to the Demo component's flow. In this case, be sure to apply those given props (that are derived essentially from the `props` parameter)
 * to the final component
 *
 * @returns a Demo component that wrap the given children component
 */
const Demo: React.FunctionComponent<DemoProps> = ({
  props: inputProps = {},
  rows,
  children,
  debug,
  ...previewerProps
}) => {
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
