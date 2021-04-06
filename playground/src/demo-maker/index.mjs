/* eslint-disable */ import './styles/index.css'
import React from 'react';
import html2canvas from 'html2canvas';
import classnames from 'classnames';

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
    html2canvas(element, {
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
    downloadLink.setAttribute("download", "component_preview.png");
    downloadLink.setAttribute("href", url);
    downloadLink.click();
};

var Box = function (_a) {
    var className = _a.className, _b = _a.label, label = _b === void 0 ? "" : _b, children = _a.children, _c = _a.type, type = _c === void 0 ? "text" : _c; _a.callBack; var value = _a.value, _d = _a.values, values = _d === void 0 ? {} : _d, _e = _a.hide, hide = _e === void 0 ? false : _e, min = _a.min, max = _a.max, id = _a.id, _f = _a.onChange, onChange = _f === void 0 ? function () { } : _f;
    var _g = React.useState(""), selectedValue = _g[0], setValue = _g[1];
    return (React.createElement("div", { className: classnames("box-container", className, { hidden: hide }), key: id || label },
        React.createElement("div", { key: "demo_label", className: "demo-label" },
            React.createElement("label", null, label)),
        React.createElement("div", { key: "demo_box_element" }, type === "select" ? (React.createElement("select", { className: classnames("box", type), value: selectedValue, onChange: function (e) {
                onChange(values[e.target.value]);
                setValue(e.target.value);
            } }, Object.keys(values).map(function (element) { return (React.createElement("option", { key: element, value: element }, element)); }))) : (React.createElement("input", { checked: value, className: classnames("box", type), type: type, value: value, onChange: function (e) { return onChange(e.target.value); }, min: min, max: max }))),
        children));
};

var Previewer = function (_a) {
    var className = _a.className, borderContent = _a.borderContent, label = _a.label, children = _a.children, customSettings = _a.customSettings, screenshot = _a.screenshot;
    var _b = React.useState("#FFFFFF"), color = _b[0], setColor = _b[1];
    var previewId = classnames("preview-screen", label);
    return (React.createElement("div", { className: classnames("previewer-container my-1 mx-1", className) },
        React.createElement("div", null,
            React.createElement("p", null, label),
            React.createElement("div", { className: "preview my-1 mx-1", id: "preview", style: {
                    backgroundColor: color,
                } },
                React.createElement("div", { className: "preview-tools" },
                    React.createElement("input", { type: "color", onChange: function (e) { return setColor(e.target.value); }, className: "my-1 mx-1", value: color }),
                    screenshot && (React.createElement("button", { className: "screenshot-button my-1 mx-1", onClick: function () {
                            takeScreenshot(document.getElementById(previewId), color);
                        } }, "Snapshot")),
                    customSettings && (React.createElement("div", { className: "extra-settings" }, Object.keys(customSettings).map(function (setting) { return (React.createElement("div", { key: setting },
                        React.createElement(Box, { label: setting, id: setting, type: customSettings[setting].type, onChange: customSettings[setting].onChange }))); })))),
                React.createElement("div", { className: "preview-screen my-1", id: previewId }, children)),
            React.createElement("div", { className: "mx-1 my-1" }, borderContent))));
};

var Demo = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.props, inputProps = _c === void 0 ? {} : _c, _d = _a.label, label = _d === void 0 ? "" : _d, _e = _a.renderFunction, renderFunction = _e === void 0 ? function (_, __) { return React.createElement("div", null); } : _e, rows = _a.rows, children = _a.children, _f = _a.settings, settings = _f === void 0 ? {} : _f;
    var _g = React.useState(getProps(inputProps)), props = _g[0], setProps = _g[1];
    var _h = React.useState(false), showProps = _h[0], setPropsVisible = _h[1];
    var boxRows = rows ? rows : [Object.keys(inputProps)];
    return (React.createElement(Previewer, { className: className, label: label, screenshot: settings.screenshot, customSettings: settings.debug && {
            "Show props": {
                type: "checkbox",
                value: showProps,
                onChange: function () { return setPropsVisible(!showProps); },
            },
        }, borderContent: React.createElement("div", { key: "demo_rows" }, boxRows.map(function (row, index) { return (React.createElement("div", { className: "demo-row", key: "demo_row_" + index }, row.map(function (prop) {
            return (React.createElement("div", { key: prop },
                React.createElement(Box, { id: prop, label: prop, hide: inputProps[prop].hide, type: inputProps[prop].type, value: props[prop], onChange: function (value) {
                        var _a;
                        return setProps(merge(props, (_a = {},
                            _a[prop] = formatValue(value, inputProps[prop].type),
                            _a)));
                    }, values: inputProps[prop].values })));
        }))); })) },
        React.createElement("div", { className: "demo-container", key: "demo_container" },
            React.createElement("div", { key: "demo_render_function" }, renderFunction(props, function (newProps) {
                return setProps(merge(props, newProps));
            })),
            React.createElement("div", { key: "demo_children" }, children),
            settings.debug && showProps && (React.createElement("div", { key: "props-container", className: "props-container" },
                "{",
                Object.keys(props).map(function (prop) { return (React.createElement("div", { className: "prop", key: prop },
                    React.createElement("label", { className: "name" }, prop + " : "),
                    React.createElement("label", { className: "value" }, "" + props[prop]),
                    ",")); }),
                "}")))));
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

export { BooleanProp, Box, Demo, HiddenProp, NumberProp, Previewer, RangeProp, SelectProp, StringProp, downloadFile, formatValue, getProps, merge, takeScreenshot };
