import React from "react";

import Previewer from "./";

export const BasicExample = () => (
  <Previewer label="This is a Previewer" screenshot>
    <div style={{ margin: "2rem", padding: "2rem" }}>
      <p>Children</p>
    </div>
  </Previewer>
);
