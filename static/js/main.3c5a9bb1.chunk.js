(this["webpackJsonpdemo-ui-playground"]=this["webpackJsonpdemo-ui-playground"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(4),l=n.n(c),a=(n(10),n(11),n(5)),o=n(2),i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)};function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n}var u,d={checkbox:function(e){return!("true"===String(e))},text:function(e){return e},number:function(e){return e},range:function(e){return e},select:function(e){return e},color:function(e){return String(e)}},f=function(e,t){var n=i({},e);return Object.keys(t).forEach((function(e){return n[e]=t[e]})),n},A=function(e){var t=document.createElement("a");t.setAttribute("download","component_preview.png"),t.setAttribute("href",e),t.click()},p=function(e){var t=e.className,n=e.label,c=void 0===n?"":n,l=e.children;e.callBack;var a=e.values,u=void 0===a?{}:a,d=e.hide,f=void 0!==d&&d,A=e.id,p=e.onChange,g=void 0===p?function(){}:p,m=s(e,["className","label","children","callBack","values","hide","id","onChange"]),h=r.useState(""),v=h[0],w=h[1],b=o("box",m.type);return r.createElement("div",{className:o(t,{hidden:f})},r.createElement("div",{className:"box-container",key:A||c},r.createElement("div",{key:"demo_label",className:"demo-label"},r.createElement("label",null,c)),"select"===m.type?r.createElement("select",{className:b,value:v,onChange:function(e){g(u[e.target.value]),w(e.target.value)}},Object.keys(u).map((function(e){return r.createElement("option",{key:e,value:e},e)}))):r.createElement("input",i({},m,{checked:m.value,className:b,onChange:function(e){return g(e.target.value)}}))),l)},g=function(e){var t=e.className,n=e.borderContent,c=e.label,l=e.children,o=e.screenshot,i=e.header,s=e.id,u=void 0===s?String(Math.random()):s,d=r.useState("#FFFFFF"),f=d[0],p=d[1];return r.createElement("div",{className:t},i&&r.createElement("p",{className:"previewer-header"},i),r.createElement("div",{className:"previewer-container"},r.createElement("div",null,r.createElement("p",{className:"previewer-label"},c),r.createElement("div",{className:"preview",id:"preview",style:{backgroundColor:f}},r.createElement("div",{className:"preview-tools"},r.createElement("input",{type:"color",onChange:function(e){return p(e.target.value)},value:f,id:"color-picker-"+u,style:{display:"none"}}),r.createElement("button",{className:"icon-button",onClick:function(){var e;return null===(e=document.getElementById("color-picker-"+u))||void 0===e?void 0:e.click()}},r.createElement("svg",{width:"60",height:"60",viewBox:"0 0 64 64"},r.createElement("circle",{cx:"31.8",cy:"32",r:"32",fill:"#e0e0d1",className:"fill"}),r.createElement("path",{d:"M32 12c-8.5 0-18 5.4-21.1 15.7-1.6 5.2 5.2 3.1 5.6 9.2.4 4.9-1.1 6.6-1.4 9.6-.4 4 8.9 10 17.2 9.6C44.6 55.4 54 46.3 54 34s-9.7-22-22-22zm-8 36c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z",fill:"#231f20",opacity:".2"}),r.createElement("path",{d:"M32 10c-8.5 0-18 5.4-21.1 15.7-1.6 5.2 5.2 3.1 5.6 9.2.4 4.9-1.1 6.6-1.4 9.6-.4 4 8.9 10 17.2 9.6C44.6 53.4 54 44.3 54 32s-9.7-22-22-22zm-8 36c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z",fill:"#e0995e"}),r.createElement("g",{fill:"#231f20"},r.createElement("circle",{cx:"20.7",cy:"25",r:"4",opacity:".2"}),r.createElement("circle",{cx:"32",cy:"19.6",r:"4",opacity:".2"}),r.createElement("circle",{cx:"43.2",cy:"24.7",r:"4",opacity:".2"}),r.createElement("circle",{cx:"46.2",cy:"37.3",r:"4",opacity:".2"}),r.createElement("circle",{cx:"37.1",cy:"47.1",r:"4",opacity:".2"})),r.createElement("circle",{cx:"20.7",cy:"23",r:"4",fill:"#c75c5c"}),r.createElement("circle",{cx:"32",cy:"17.6",r:"4",fill:"#f5cf87"}),r.createElement("circle",{cx:"43.2",cy:"22.7",r:"4",fill:"#76c2af"}),r.createElement("circle",{cx:"46.2",cy:"35.3",r:"4",fill:"#fff"}),r.createElement("circle",{cx:"37.1",cy:"45.1",r:"4",fill:"#4f5d73"}))),o&&r.createElement("button",{className:"icon-button",onClick:function(){var e,t;e=document.getElementById(u),void 0===(t=f)&&(t="#ffffff"),a(e,{scrollY:0,scrollX:0,allowTaint:!0,backgroundColor:t,useCORS:!0,logging:!1,height:window.outerHeight+window.innerHeight,windowHeight:window.outerHeight+window.innerHeight}).then((function(e){A(e.toDataURL("image/png").replace(/^data:image\/png/,"data:application/octet-stream"))}))}},r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"60",height:"48",viewBox:"0 0 45 36"},r.createElement("path",{d:"M42.117 5.215c.043-.121.07-.152.07-.285 0-.594-.473-.984-1.055-.984h-2.461c-.578 0-1.055.48-1.055 1.074 0 .125.023 0 .063.359h-5.023l-1.543-3.242C30.555.957 29.051 0 27.766 0H17.234c-1.285 0-2.785.957-3.348 2.137l-1.543 3.242h-1.445V3.762c0-.195-.156-.176-.352-.176H3.516c-.195 0-.352-.02-.352.176v1.438C1.406 5.199 0 6.645 0 8.426v24.379c0 1.781 1.418 3.406 3.164 3.406h38.672c1.746 0 3.164-1.625 3.164-3.406V8.426c0-1.684-1.27-3.066-2.883-3.211zM28.125 4.66c0 .199-.156.359-.352.359H17.227c-.195 0-.352-.16-.352-.359V3.227c0-.195.156-.359.352-.359h10.547c.195 0 .352.16.352.359zM4.922 12.367c-1.164 0-2.109-.961-2.109-2.148s.949-2.152 2.109-2.152 2.109.965 2.109 2.152-.945 2.148-2.109 2.148zm2.813 1.793c-.578 0-1.055-.48-1.055-1.074s.473-1.074 1.055-1.074a1.07 1.07 0 0 1 1.055 1.074c0 .594-.473 1.074-1.055 1.074zM22.5 33.164c-6.785 0-12.305-5.629-12.305-12.547S15.715 8.066 22.5 8.066s12.305 5.633 12.305 12.547S29.289 33.164 22.5 33.164zm0-22.59c-5.426 0-9.844 4.504-9.844 10.043s4.418 10.035 9.844 10.035 9.844-4.5 9.844-10.039S27.93 10.574 22.5 10.574zm0 15.418c-2.906 0-5.273-2.414-5.273-5.375s2.367-5.379 5.273-5.379 5.273 2.41 5.273 5.379-2.367 5.375-5.273 5.375zm0 0",fill:"#373f4e",className:"fill"})))),r.createElement("div",{className:"preview-screen",id:u},l)),r.createElement("div",{className:"border"},n))))},m=function(e){var t=e.props,n=void 0===t?{}:t,c=e.rows,l=e.children,a=e.debug,o=s(e,["props","rows","children","debug"]),u=r.useState(function(e){var t={};return Object.keys(e).forEach((function(n){return t[n]=e[n].value})),t}(n)),A=u[0],m=u[1],h=c||[Object.keys(n)];return r.createElement(g,i({},o,{borderContent:r.createElement("div",{key:"demo_rows"},h.map((function(e,t){return r.createElement("div",{className:"demo-row",key:"demo_row_"+t},e.map((function(e){return r.createElement("div",{key:e},r.createElement(p,{id:e,label:e,hide:n[e].hide,type:n[e].type,value:A[e],onChange:function(t){var r;return m(f(A,((r={})[e]=function(e,t){return d[t](e)}(t,n[e].type),r)))},values:n[e].values}))})))})))}),r.createElement("div",{className:"demo-container",key:"demo_container"},r.createElement("div",{key:"demo_children"},"function"===typeof l?l(A,(function(e){return m(f(A,e))})):l),a&&r.createElement("div",{key:"props-debug",className:"props-container"},"{",Object.keys(A).map((function(e){return r.createElement("div",{className:"prop",key:e},r.createElement("label",{className:"name"},e+" : "),r.createElement("label",{className:"value"},""+A[e]),",")})),"}")))},h=function(e,t,n,r,c,l,a){return void 0===r&&(r=!1),void 0===c&&(c=0),void 0===l&&(l=100),{type:e,value:t,values:n,hide:r,min:c,max:l,callBack:a}},v=function(e){return h("text",e,null,!0)},w=function(e){return h("text",e)},b=function(e){return h("number",e)},E=function(e){return h("checkbox",e)},y=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=100),h("range",e,null,!1,t,n)},x=function(e){return void 0===e&&(e="#ffffff"),h("color",e)};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function j(e,t){var n=e.title,c=e.titleId,l=B(e,["title","titleId"]);return r.createElement("svg",C({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"100px",height:"100px",viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve",ref:t,"aria-labelledby":c},l),n?r.createElement("title",{id:c},n):null,u||(u=r.createElement("image",{id:"image0",width:100,height:100,x:0,y:0,href:"data:image/png;base64,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 YII="})))}var Q,O,N,I=r.forwardRef(j);n.p;function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function V(e,t){var n=e.title,c=e.titleId,l=z(e,["title","titleId"]);return r.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 150 150",ref:t,"aria-labelledby":c},l),n?r.createElement("title",{id:c},n):null,Q||(Q=r.createElement("defs",null,r.createElement("linearGradient",{id:"A",x1:75,y1:150,x2:75,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{offset:0,stopColor:"#594b96"}),r.createElement("stop",{offset:1,stopColor:"#743a8d"})))),O||(O=r.createElement("circle",{cx:75,cy:75,r:75,fill:"url(#A)"})),N||(N=r.createElement("path",{d:"M105.63 88.1a5.48 5.48 0 00-1.37.24 8.32 8.32 0 01-1.84.3 2.24 2.24 0 01-2.19-1.19 8.45 8.45 0 01-.53-3.61v-8.9h5c2.13 0 3.2-1.07 3.2-3.32s-1.07-3.32-3.2-3.32h-5v-5.22c0-2.13-1.31-3.2-4-3.2s-4 1.07-4 3.2v5.22h-2.02c-2.14 0-3.21 1.07-3.21 3.32s1.07 3.32 3.21 3.32h2.07v8.9c0 2.72.12 5.27 1.31 7.41 1.3 2.37 3.85 4.09 8.12 4.09a12.47 12.47 0 005.87-1.34 2.49 2.49 0 001.42-2.31c0-1.27-.65-3.59-2.84-3.59zM81.58 71c0-2.14-1.3-3.2-4-3.2s-4 1.06-4 3.2v21c0 2.13 1.3 3.2 4 3.2s4-1.07 4-3.2zm.71-11.06a4.69 4.69 0 00-9.37 0 4.69 4.69 0 009.37 0zm-27.12 7.83a10.05 10.05 0 00-5.7 1.48V57.86c0-2.13-1.3-3.2-4-3.2s-4 1.07-4 3.2v30c0 2 0 4 2.72 5.51a17.75 17.75 0 008.78 2c9.25 0 14.41-5.58 14.41-14.23S62.4 67.77 55.17 67.77zm-2.08 21.16a7.16 7.16 0 01-3.62-.88V75.36a6.08 6.08 0 013.74-1.19c3.67 0 6.11 2.73 6.11 7.47s-2.38 7.29-6.23 7.29z",fill:"#fff"})))}var R=r.forwardRef(V),H=(n.p,n(1)),D={github:{tooltip:"Check demo-ui on Github !",url:"https://github.com/CianciarusoCataldo/demo-ui",icon:I},bit:{tooltip:"Check demo-ui on Bit !",url:"https://bit.dev/cianciarusocataldo/demo-ui",icon:R}},M=function(){return Object(H.jsxs)("div",{className:"playground",children:[Object(H.jsxs)("header",{className:"playground-header",children:[Object(H.jsx)("p",{children:"Demo-ui playground"}),Object(H.jsxs)("div",{className:"icons",children:[Object(H.jsx)("a",{href:"https://www.npmjs.com/package/@cianciarusocataldo/demo-ui",style:{height:"25px"},children:Object(H.jsx)("img",{alt:"npm",src:"https://img.shields.io/npm/v/@cianciarusocataldo/demo-ui?label=latest version",height:"25"})}),Object.keys(D).map((function(e){var t=D[e];return Object(H.jsx)("a",{title:t.tooltip,href:t.url,children:Object(H.jsx)(t.icon,{className:"icon"})},e)}))]})]}),Object(H.jsx)("div",{children:Object(H.jsx)(g,{screenshot:!0,label:"This is a Previewer component",header:"Previewer",children:Object(H.jsx)("p",{className:"component-label",children:"Children"})})}),Object(H.jsx)(m,{header:"Demo",debug:!0,screenshot:!0,label:"This is a Demo component, you can use it to play with Box component",props:{"Box type":(e={"Show all":"all",checkbox:"checkbox",select:"select",text:"text",number:"number",range:"range"},h("select",e[Object.keys(e)[0]],e)),"Boolean Prop":E(!1),"String Prop":w("Prop text"),"Number Prop":b(0),"Range Prop":y(50,0,100),"Hidden Prop":v("this is an hidden prop, you shouldn't see any box for it"),"Color Prop":x()},children:function(e,t){var n={select:Object(H.jsx)(p,{label:"Select Box",className:"demo-box",id:"select_box",type:"select",values:{"value 1":"value 1","value 2":"value 2"}}),text:Object(H.jsx)(p,{id:"text_box",label:"Text Box",value:e["String Prop"],onChange:function(){return t({"String Prop":e["String Prop"]})},className:"demo-box"}),checkbox:Object(H.jsx)(p,{label:"Check box",id:"check_box",type:"checkbox",value:e["Boolean Prop"],onChange:function(){return t({"Boolean Prop":!e["Boolean Prop"]})},className:"demo-box"}),range:Object(H.jsx)(p,{label:"Range Box",className:"demo-box",id:"range_box",type:"range",value:e["Range Prop"],onChange:function(e){return t({"Range Prop":e})}}),number:Object(H.jsx)(p,{type:"number",id:"number_box",label:"Number Box",value:e["Number Prop"],onChange:function(e){return t({"Number Prop":e})},className:"demo-box"}),color:Object(H.jsx)(p,{type:"color",id:"color_box",label:"Color Box",value:e["Color Prop"],onChange:function(e){return t({"Color Prop":e})},className:"demo-box"})};return Object(H.jsx)("div",{className:"demo-boxes",children:"all"===e["Box type"]?Object.keys(n).map((function(e){return Object(H.jsx)("div",{children:n[e]},e)})):n[e["Box type"]]})}})]});var e};l.a.render(Object(H.jsx)(M,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3c5a9bb1.chunk.js.map