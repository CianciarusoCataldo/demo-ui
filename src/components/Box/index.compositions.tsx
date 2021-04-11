import React from "react";

import Box from ".";

export const TextBox = () => {
  const [value, setValue] = React.useState("text");
  return (
    <Box type="text" value={value} onChange={(value) => setValue(value)} />
  );
};

export const NumericBox = () => {
  const [value, setValue] = React.useState(0);
  return (
    <Box type="number" value={value} onChange={(value) => setValue(value)} />
  );
};

export const BooleanBox = () => {
  const [value, setValue] = React.useState(false);
  return (
    <Box type="checkbox" value={value} onChange={(value) => setValue(value)} />
  );
};

export const RangeBox = () => {
  const [value, setValue] = React.useState(false);
  return (
    <Box type="range" value={value} onChange={(value) => setValue(value)} />
  );
};

export const SelectorBox = () => (
  <Box
    type="select"
    values={{
      "Option 1": "option1",
      "Option 2": "option2",
      "Option 3": "option3",
    }}
  />
);
