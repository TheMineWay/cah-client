import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import babel from "vite-plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      tsDecorators: true,
    }),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: [
          [
            "@babel/plugin-proposal-decorators",
            { loose: true, version: "2022-03" },
          ],
          ["@babel/plugin-proposal-class-properties"],
        ],
      },
    }),
  ],
});
