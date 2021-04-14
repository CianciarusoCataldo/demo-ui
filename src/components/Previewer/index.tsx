import React from "react";

import "./index.css";

import { PreviewerProps } from "../../types";

import { takeScreenshot } from "../../logic";

const Previewer: React.FunctionComponent<PreviewerProps> = ({
  className,
  borderContent,
  label,
  children,
  screenshot,
  header,
  id = String(Math.random()),
}) => {
  const [color, setColor] = React.useState("#FFFFFF");

  return (
    <div className={className}>
      {header && <p className="previewer-header">{header}</p>}
      <div className="previewer-container">
        <div>
          <p className="previewer-label">{label}</p>
          <div
            className="preview"
            id="preview"
            style={{
              backgroundColor: color,
            }}
          >
            <div className="preview-tools">
              <input
                type="color"
                onChange={(e) => setColor(e.target.value)}
                value={color}
                id={`color-picker-${id}`}
                style={{ display: "none" }}
              />

              <button
                className="icon-button"
                onClick={() =>
                  document.getElementById(`color-picker-${id}`)?.click()
                }
              >
                <svg width="60" height="60" viewBox="0 0 64 64">
                  <circle
                    cx="31.8"
                    cy="32"
                    r="32"
                    fill="#e0e0d1"
                    className="fill"
                  />
                  <path
                    d="M32 12c-8.5 0-18 5.4-21.1 15.7-1.6 5.2 5.2 3.1 5.6 9.2.4 4.9-1.1 6.6-1.4 9.6-.4 4 8.9 10 17.2 9.6C44.6 55.4 54 46.3 54 34s-9.7-22-22-22zm-8 36c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                    fill="#231f20"
                    opacity=".2"
                  />
                  <path
                    d="M32 10c-8.5 0-18 5.4-21.1 15.7-1.6 5.2 5.2 3.1 5.6 9.2.4 4.9-1.1 6.6-1.4 9.6-.4 4 8.9 10 17.2 9.6C44.6 53.4 54 44.3 54 32s-9.7-22-22-22zm-8 36c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
                    fill="#e0995e"
                  />
                  <g fill="#231f20">
                    <circle cx="20.7" cy="25" r="4" opacity=".2" />
                    <circle cx="32" cy="19.6" r="4" opacity=".2" />
                    <circle cx="43.2" cy="24.7" r="4" opacity=".2" />
                    <circle cx="46.2" cy="37.3" r="4" opacity=".2" />
                    <circle cx="37.1" cy="47.1" r="4" opacity=".2" />
                  </g>
                  <circle cx="20.7" cy="23" r="4" fill="#c75c5c" />
                  <circle cx="32" cy="17.6" r="4" fill="#f5cf87" />
                  <circle cx="43.2" cy="22.7" r="4" fill="#76c2af" />
                  <circle cx="46.2" cy="35.3" r="4" fill="#fff" />
                  <circle cx="37.1" cy="45.1" r="4" fill="#4f5d73" />
                </svg>
              </button>
              {screenshot && (
                <button
                  className="icon-button"
                  onClick={() => {
                    takeScreenshot(document.getElementById(id), color);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="48"
                    viewBox="0 0 45 36"
                  >
                    <path
                      d="M42.117 5.215c.043-.121.07-.152.07-.285 0-.594-.473-.984-1.055-.984h-2.461c-.578 0-1.055.48-1.055 1.074 0 .125.023 0 .063.359h-5.023l-1.543-3.242C30.555.957 29.051 0 27.766 0H17.234c-1.285 0-2.785.957-3.348 2.137l-1.543 3.242h-1.445V3.762c0-.195-.156-.176-.352-.176H3.516c-.195 0-.352-.02-.352.176v1.438C1.406 5.199 0 6.645 0 8.426v24.379c0 1.781 1.418 3.406 3.164 3.406h38.672c1.746 0 3.164-1.625 3.164-3.406V8.426c0-1.684-1.27-3.066-2.883-3.211zM28.125 4.66c0 .199-.156.359-.352.359H17.227c-.195 0-.352-.16-.352-.359V3.227c0-.195.156-.359.352-.359h10.547c.195 0 .352.16.352.359zM4.922 12.367c-1.164 0-2.109-.961-2.109-2.148s.949-2.152 2.109-2.152 2.109.965 2.109 2.152-.945 2.148-2.109 2.148zm2.813 1.793c-.578 0-1.055-.48-1.055-1.074s.473-1.074 1.055-1.074a1.07 1.07 0 0 1 1.055 1.074c0 .594-.473 1.074-1.055 1.074zM22.5 33.164c-6.785 0-12.305-5.629-12.305-12.547S15.715 8.066 22.5 8.066s12.305 5.633 12.305 12.547S29.289 33.164 22.5 33.164zm0-22.59c-5.426 0-9.844 4.504-9.844 10.043s4.418 10.035 9.844 10.035 9.844-4.5 9.844-10.039S27.93 10.574 22.5 10.574zm0 15.418c-2.906 0-5.273-2.414-5.273-5.375s2.367-5.379 5.273-5.379 5.273 2.41 5.273 5.379-2.367 5.375-5.273 5.375zm0 0"
                      fill="#373f4e"
                      className="fill"
                    />
                  </svg>
                </button>
              )}
            </div>
            <div className="preview-screen" id={id}>
              {children}
            </div>
          </div>
          <div className="border">{borderContent}</div>
        </div>
      </div>
    </div>
  );
};

export default Previewer;
