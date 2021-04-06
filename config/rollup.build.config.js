import typescript from "rollup-plugin-typescript2";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

import pkg from "../package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "playground/src/demo-maker/index.mjs",
        format: "esm",
        banner: "/* eslint-disable */ import './styles/index.css'",
      },
      {
        file: "playground/src/demo-maker/index.cjs",
        format: "cjs",
        banner: "import './styles/index.css'",
        plugins: [terser()],
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
        banner: "/* eslint-disable */ import './styles/index.css'",
      },
    ],
    plugins: [
      del({ targets: ["dist/*", "playground/src/demo-maker"] }),
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
