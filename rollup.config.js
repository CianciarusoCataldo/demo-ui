import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";

import pkg from "./package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "playground/src/demo-maker/index.mjs",
        format: "esm",
        banner: "/* eslint-disable */",
      },
      {
        file: "playground/src/demo-maker/index.cjs",
        format: "cjs",
      },
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "esm" },
    ],
    plugins: [
      del({ targets: ["dist/*", "playground/src/demo-maker"] }),
      postcss({
        plugins: [],
        minimize: true,
      }),
      typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
