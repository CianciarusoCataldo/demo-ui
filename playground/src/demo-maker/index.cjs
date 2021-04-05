'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var html2canvas = require('html2canvas');
var classnames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var html2canvas__default = /*#__PURE__*/_interopDefaultLegacy(html2canvas);
var classnames__default = /*#__PURE__*/_interopDefaultLegacy(classnames);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$2 = ".demo-container{flex-direction:column}.demo-row{display:flex;justify-content:center;flex-direction:row;color:#fff;padding-bottom:1rem;margin-top:1rem;margin-bottom:1rem}.props-container{background-color:#fff;display:flex;flex-direction:column;text-align:left;margin-left:.6rem}.prop>.value{color:#000;font-size:large}.prop{display:flex;flex-direction:row;margin-bottom:.4rem}.prop>.name{color:#2f4f4f;font-size:large;margin-right:.3rem;margin-left:.7rem}@media (max-width:900px){.demo-row{flex-direction:column}}";
styleInject(css_248z$2);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var FORMATTERS = {
    checkbox: function (value) { return !(String(value) === "true"); },
    text: function (value) { return value; },
    number: function (value) { return value; },
    range: function (value) { return value; },
    select: function (value) { return value; },
};
var formatValue = function (value, type) {
    return FORMATTERS[type](value);
};
var merge = function (base, toMerge) {
    var tmp = __assign({}, base);
    Object.keys(toMerge).forEach(function (key) { return (tmp[key] = toMerge[key]); });
    return tmp;
};
var getProps = function (props) {
    var tmp = {};
    Object.keys(props).forEach(function (prop) { return (tmp[prop] = props[prop].value); });
    return tmp;
};
var takeScreenshot = function (element, background) {
    if (background === void 0) { background = "#ffffff"; }
    html2canvas__default['default'](element, {
        scrollY: 0,
        scrollX: 0,
        allowTaint: true,
        backgroundColor: background,
        useCORS: true,
        logging: false,
        height: window.outerHeight + window.innerHeight,
        windowHeight: window.outerHeight + window.innerHeight,
    }).then(function (canvas) {
        downloadFile(canvas
            .toDataURL("image/png")
            .replace(/^data:image\/png/, "data:application/octet-stream"));
    });
};
var downloadFile = function (url) {
    var downloadLink = document.createElement("a");
    downloadLink.setAttribute("download", "CanvasAsImage.png");
    downloadLink.setAttribute("href", url);
    downloadLink.click();
};

var css_248z$1 = ".hidden{display:none}.demo-label{margin-top:1rem}.box{background-color:#423c5e;padding:.5rem;margin-top:10px;color:#ff976b;outline:none;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19)}.box,.box.range{border-radius:5px}.box.range{-webkit-appearance:none;height:15px;padding:0;opacity:.9;-webkit-transition:.2s;transition:opacity .2s}.box.range::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:25px;height:25px;border-radius:50%;background:#fd6e31;border:1px solid #ff4d00;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);cursor:pointer}.box.range::-moz-range-thumb{width:25px;height:25px;border-radius:50%;background:#fd6e31;border:1px solid #ff4d00;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);cursor:pointer}.box.select{color:#fff;padding-right:.5rem}.box-container{flex-direction:column;margin:1rem}.box.checkbox{border:1px solid #000;height:25px;width:25px}.box.checkbox:checked{-webkit-transition:all .2s;transition:all .2s}";
styleInject(css_248z$1);

var Box = function (_a) {
    var className = _a.className, _b = _a.label, label = _b === void 0 ? "" : _b, children = _a.children, _c = _a.type, type = _c === void 0 ? "text" : _c; _a.callBack; var value = _a.value, _d = _a.values, values = _d === void 0 ? {} : _d, _e = _a.hide, hide = _e === void 0 ? false : _e, min = _a.min, max = _a.max, id = _a.id, _f = _a.onChange, onChange = _f === void 0 ? function () { } : _f;
    var _g = React__default['default'].useState(""), selectedValue = _g[0], setValue = _g[1];
    return (React__default['default'].createElement("div", { className: classnames__default['default']("box-container", className, { hidden: hide }), key: id || label },
        React__default['default'].createElement("div", { key: "demo_label", className: "demo-label" },
            React__default['default'].createElement("label", null, label)),
        React__default['default'].createElement("div", { key: "demo_box_element" }, type === "select" ? (React__default['default'].createElement("select", { className: classnames__default['default']("box", type), value: selectedValue, onChange: function (e) {
                onChange(values[e.target.value]);
                setValue(e.target.value);
            } }, Object.keys(values).map(function (element) { return (React__default['default'].createElement("option", { key: element, value: element }, element)); }))) : (React__default['default'].createElement("input", { checked: value, className: classnames__default['default']("box", type), type: type, value: value, onChange: function (e) { return onChange(e.target.value); }, min: min, max: max }))),
        children));
};

var css_248z = ".my-1{margin-top:1rem;margin-bottom:1rem}.mx-1{margin-left:1rem;margin-right:1rem}.previewer-container{display:flex;flex-direction:column;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);background-color:#282c34;border-radius:5px}.previewer-container p{color:#fff;padding-left:1rem;padding-right:1rem}.preview-screen{padding-top:1rem}.preview{flex-direction:column;padding-bottom:1rem;border-radius:3px}.preview-tools{flex-direction:row;text-align:left}.screenshot-button{-webkit-appearance:none;font-size:large;background-color:transparent;border:0;outline:none}.screenshot-button:hover{color:#356286}.extra-settings{display:inline-flex}";
styleInject(css_248z);

var Previewer = function (_a) {
    var className = _a.className, borderContent = _a.borderContent, label = _a.label, children = _a.children, customSettings = _a.customSettings, screenshot = _a.screenshot;
    var _b = React__default['default'].useState("#FFFFFF"), color = _b[0], setColor = _b[1];
    var previewId = classnames__default['default']("preview-screen", label);
    return (React__default['default'].createElement("div", { className: classnames__default['default']("previewer-container my-1 mx-1", className) },
        React__default['default'].createElement("div", null,
            React__default['default'].createElement("p", null, label),
            React__default['default'].createElement("div", { className: "preview my-1 mx-1", id: "preview", style: {
                    backgroundColor: color,
                } },
                React__default['default'].createElement("div", { className: "preview-tools" },
                    React__default['default'].createElement("input", { type: "color", onChange: function (e) { return setColor(e.target.value); }, className: "my-1 mx-1", value: color }),
                    screenshot && (React__default['default'].createElement("button", { className: "screenshot-button my-1 mx-1", onClick: function () {
                            takeScreenshot(document.getElementById(previewId), color);
                        } }, "Snapshot")),
                    customSettings && (React__default['default'].createElement("div", { className: "extra-settings" }, Object.keys(customSettings).map(function (setting) { return (React__default['default'].createElement("div", { key: setting },
                        React__default['default'].createElement(Box, { label: setting, id: setting, type: customSettings[setting].type, onChange: customSettings[setting].onChange }))); })))),
                React__default['default'].createElement("div", { className: "preview-screen my-1", id: previewId }, children)),
            React__default['default'].createElement("div", { className: "mx-1 my-1" }, borderContent))));
};

var Demo = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.props, inputProps = _c === void 0 ? {} : _c, _d = _a.label, label = _d === void 0 ? "" : _d, _e = _a.renderFunction, renderFunction = _e === void 0 ? function (_, __) { return React__default['default'].createElement("div", null); } : _e, rows = _a.rows, children = _a.children, _f = _a.settings, settings = _f === void 0 ? {} : _f;
    var _g = React__default['default'].useState(getProps(inputProps)), props = _g[0], setProps = _g[1];
    var _h = React__default['default'].useState(false), showProps = _h[0], setPropsVisible = _h[1];
    var boxRows = rows ? rows : [Object.keys(inputProps)];
    return (React__default['default'].createElement(Previewer, { className: className, label: label, screenshot: settings.screenshot, customSettings: settings.debug && {
            "Show props": {
                type: "checkbox",
                value: showProps,
                onChange: function () { return setPropsVisible(!showProps); },
            },
        }, borderContent: React__default['default'].createElement("div", { key: "demo_rows" }, boxRows.map(function (row, index) { return (React__default['default'].createElement("div", { className: "demo-row", key: "demo_row_" + index }, row.map(function (prop) {
            return (React__default['default'].createElement("div", { key: prop },
                React__default['default'].createElement(Box, { id: prop, label: prop, hide: inputProps[prop].hide, type: inputProps[prop].type, value: props[prop], onChange: function (value) {
                        var _a;
                        setProps(merge(props, (_a = {},
                            _a[prop] = formatValue(value, inputProps[prop].type),
                            _a)));
                    }, values: inputProps[prop].values })));
        }))); })) },
        React__default['default'].createElement("div", { className: "demo-container", key: "demo_container" },
            React__default['default'].createElement("div", { key: "demo_render_function" }, renderFunction(props, function (newProps) {
                return setProps(merge(props, newProps));
            })),
            React__default['default'].createElement("div", { key: "demo_children" }, children),
            settings.debug && showProps && (React__default['default'].createElement("div", { key: "props-container", className: "props-container" }, "{",
                Object.keys(props).map(function (prop) { return (React__default['default'].createElement("div", { className: "prop", key: prop },
                    React__default['default'].createElement("label", { className: "name" }, prop + " : "),
                    React__default['default'].createElement("label", { className: "value" }, "" + props[prop]),
                    ",")); }), "}")))));
};

var Prop = function (type, value, values, hide, min, max, callback) {
    if (hide === void 0) { hide = false; }
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return ({
        type: type,
        value: value,
        values: values,
        hide: hide,
        min: min,
        max: max,
        callBack: callback,
    });
};
var HiddenProp = function (value) {
    return Prop("text", value, null, true);
};
var StringProp = function (value) { return Prop("text", value); };
var SelectProp = function (value) {
    return Prop("select", value[Object.keys(value)[0]], value);
};
var NumberProp = function (value) { return Prop("number", value); };
var BooleanProp = function (value) {
    return Prop("checkbox", value);
};
var RangeProp = function (value, min, max) {
    if (value === void 0) { value = 0; }
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Prop("range", value, null, false, min, max);
};

exports.BooleanProp = BooleanProp;
exports.Box = Box;
exports.Demo = Demo;
exports.HiddenProp = HiddenProp;
exports.NumberProp = NumberProp;
exports.Previewer = Previewer;
exports.RangeProp = RangeProp;
exports.SelectProp = SelectProp;
exports.StringProp = StringProp;
exports.downloadFile = downloadFile;
exports.formatValue = formatValue;
exports.getProps = getProps;
exports.merge = merge;
exports.takeScreenshot = takeScreenshot;
