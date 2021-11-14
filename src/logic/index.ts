import html2canvas from "html2canvas";
import { PropObject, PropType } from "../types";

const FORMATTERS: Record<PropType, (value: any) => any> = {
  checkbox: (value: boolean): boolean => !(String(value) === "true"),
  text: (value: string) => value,
  number: (value: number) => value,
  range: (value: number) => value,
  select: (value: any) => value,
  color: (value: any) => String(value),
};

/**
 * Format a valued based on the given type
 *
 * @param value a value to format
 * @param type the prop's type
 *
 * @returns a formatted value for the prop
 */
export const formatValue = (value: any, type: PropType) =>
  FORMATTERS[type](value);

/**
 * 
 * 
 * @param base 
 * @param toMerge 
 * @returns 
 */
export const merge = (
  base: Record<string, any>,
  toMerge: Record<string, any>
) => {
  let tmp = { ...base };
  Object.keys(toMerge).forEach((key) => (tmp[key] = toMerge[key]));

  return tmp;
};

export const getProps = (props: Record<string, PropObject>) => {
  let tmp = {};
  Object.keys(props).forEach((prop) => (tmp[prop] = props[prop].value));

  return tmp;
};

export const takeScreenshot = (
  element: HTMLElement,
  background = "#ffffff"
) => {
  html2canvas(element, {
    scrollY: 0,
    scrollX: 0,
    allowTaint: true,
    backgroundColor: background,
    useCORS: true,
    logging: false,
    height: window.outerHeight + window.innerHeight,
    windowHeight: window.outerHeight + window.innerHeight,
  }).then((canvas) => {
    downloadFile(
      canvas
        .toDataURL("image/png")
        .replace(/^data:image\/png/, "data:application/octet-stream")
    );
  });
};

export const downloadFile = (url: string) => {
  let downloadLink = document.createElement("a");
  downloadLink.setAttribute("download", "component_preview.png");
  downloadLink.setAttribute("href", url);
  downloadLink.click();
};
