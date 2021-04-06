import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

import pkg from "../package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "playground/src/demo-ui/index.cjs",
        format: "cjs",
        banner: "import './styles/index.css'",
        plugins: [terser()],
      },
      {
        file: "playground/src/demo-ui/index.mjs",
        format: "esm",
        banner: "/* eslint-disable */ import './styles/index.css';",
      },
      {
        file: pkg.main,
        format: "cjs",
        plugins: [terser()],
        banner: "import './styles/index.css'",
      },
      {
        file: pkg.module,
        format: "esm",
        banner: "/* eslint-disable */ import './styles/index.css';",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
        extract: "styles/index.css",
      }),
      typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
