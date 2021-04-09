import {
  BooleanProp,
  Box,
  Demo,
  HiddenProp,
  NumberProp,
  Previewer,
  SelectProp,
  StringProp,
  RangeProp,
} from "./demo-ui-preview";

const App = () => {
  return (
    <div className="playground">
      <header className="playground-header">
        <p>Demo-ui playground</p>
      </header>
      <div>
        <p className="component-label">Previewer</p>
        <Previewer label="This is a Previewer component">
          <label>Children</label>
        </Previewer>
      </div>
      <div>
        <p className="component-label">Demo</p>
        <Demo
          settings={{ debug: true, screenshot: true }}
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
          }}
          renderFunction={(props, setProps) => {
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
                  onChange={() =>
                    setProps({ "String Prop": props["String Prop"] })
                  }
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
        />
      </div>
    </div>
  );
};

export default App;
