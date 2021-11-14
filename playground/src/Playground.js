import {
  BooleanProp,
  Box,
  ColorProp,
  Demo,
  HiddenProp,
  NumberProp,
  Previewer,
  SelectProp,
  StringProp,
  RangeProp,
} from "./demo-ui-preview";

import { ReactComponent as GithubLogo } from "./assets/github-logo.svg";
import { ReactComponent as BitLogo } from "./assets/bit-logo.svg";

const ICONS = {
  github: {
    tooltip: "Check demo-ui on Github !",
    url: "https://github.com/CianciarusoCataldo/demo-ui",
    icon: GithubLogo,
  },
  bit: {
    tooltip: "Check demo-ui on Bit !",
    url: "https://bit.dev/cianciarusocataldo/demo-ui",
    icon: BitLogo,
  },
};

const Playground = () => (
  <div className="playground">
    <header className="playground-header">
      <p>Demo-ui playground</p>
      <div className="icons">
        <a
          href="https://www.npmjs.com/package/@cianciarusocataldo/demo-ui"
          style={{ height: "25px" }}
        >
          <img
            alt="npm"
            src="https://img.shields.io/npm/v/@cianciarusocataldo/demo-ui?label=latest version"
            height="25"
          />
        </a>
        {Object.keys(ICONS).map((icon) => {
          const element = ICONS[icon];
          return (
            <a title={element.tooltip} href={element.url} key={icon}>
              <element.icon className="icon" />
            </a>
          );
        })}
      </div>
    </header>
    <div>
      <Previewer
        screenshot
        label="This is a Previewer component"
        header="Previewer"
      >
        <p className="component-label">Children</p>
      </Previewer>
    </div>
    <Demo
      header="Demo"
      debug
      startColor="#555"
      screenshot
      label="This is a Demo component, you can use it to play with Box component"
      props={{
        "Box type": SelectProp({
          "Show all": "all",
          checkbox: "checkbox",
          select: "select",
          text: "text",
          number: "number",
          range: "range",
        }),
        "Boolean Prop": BooleanProp(false),
        "String Prop": StringProp("Prop text"),
        "Number Prop": NumberProp(0),
        "Range Prop": RangeProp(50, 0, 100),
        "Hidden Prop": HiddenProp(
          "this is an hidden prop, you shouldn't see any box for it"
        ),
        "Color Prop": ColorProp(),
      }}
    >
      {(props, setProps) => {
        const BOXES = {
          select: (
            <Box
              label="Select Box"
              className="demo-box"
              id="select_box"
              type="select"
              values={{ "value 1": "value 1", "value 2": "value 2" }}
            />
          ),
          text: (
            <Box
              id="text_box"
              label="Text Box"
              value={props["String Prop"]}
              onChange={() => setProps({ "String Prop": props["String Prop"] })}
              className="demo-box"
            />
          ),
          checkbox: (
            <Box
              label="Check box"
              id="check_box"
              type="checkbox"
              value={props["Boolean Prop"]}
              onChange={() =>
                setProps({ "Boolean Prop": !props["Boolean Prop"] })
              }
              className="demo-box"
            />
          ),
          range: (
            <Box
              label="Range Box"
              className="demo-box"
              id="range_box"
              type="range"
              value={props["Range Prop"]}
              onChange={(value) => setProps({ "Range Prop": value })}
            />
          ),
          number: (
            <Box
              type="number"
              id="number_box"
              label="Number Box"
              value={props["Number Prop"]}
              onChange={(value) => setProps({ "Number Prop": value })}
              className="demo-box"
            />
          ),
          color: (
            <Box
              type="color"
              id="color_box"
              label="Color Box"
              value={props["Color Prop"]}
              onChange={(value) => setProps({ "Color Prop": value })}
              className="demo-box"
            />
          ),
        };

        return (
          <div className="demo-boxes">
            {props["Box type"] === "all"
              ? Object.keys(BOXES).map((box) => (
                  <div key={box}>{BOXES[box]}</div>
                ))
              : BOXES[props["Box type"]]}
          </div>
        );
      }}
    </Demo>
  </div>
);

export default Playground;
