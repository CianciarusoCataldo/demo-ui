import React from "react";
import classnames from "classnames";

import "./index.css";

import { PreviewerProps } from "../../types";

import { takeScreenshot } from "../../logic";

import Box from "../Box";

const Previewer: React.FunctionComponent<PreviewerProps> = ({
  className,
  borderContent,
  label,
  children,
  customSettings,
  screenshot,
}) => {
  const [color, setColor] = React.useState("#FFFFFF");
  const previewId = classnames("preview-screen", label);

  return (
    <div className={classnames("previewer-container my-1 mx-1", className)}>
      <div>
        <p>{label}</p>
        <div
          className="preview my-1 mx-1"
          id="preview"
          style={{
            backgroundColor: color,
          }}
        >
          <div className="preview-tools">
            <input
              type="color"
              onChange={(e) => setColor(e.target.value)}
              className="my-1 mx-1"
              value={color}
            />
            {screenshot && (
              <button
                className="screenshot-button my-1 mx-1"
                onClick={() => {
                  takeScreenshot(document.getElementById(previewId), color);
                }}
              >
                Snapshot
              </button>
            )}
            {customSettings && (
              <div className="extra-settings">
                {Object.keys(customSettings).map((setting) => (
                  <div key={setting}>
                    <Box
                      label={setting}
                      id={setting}
                      type={customSettings[setting].type}
                      onChange={customSettings[setting].onChange}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="preview-screen my-1" id={previewId}>
            {children}
          </div>
        </div>
        <div className="mx-1 my-1">{borderContent}</div>
      </div>
    </div>
  );
};

export default Previewer;
