const CracoLessPlugin = require("craco-less");
const path = require("path");

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);

module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
      "~": pathResolve("src/components"),
    },
  },
  babel: {
    plugins: [
      ["import", { libraryName: "antd", libraryDirectory: "es", style: true }], // style设置为true即是less
      ["@babel/plugin-proposal-decorators", { legacy: true }],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: () => ({
          test: /\.less$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "less-loader",
              options: {
                lessOptions: {
                  modifyVars: {
                    "@primary-color": "#3F9EFF",
                    "@link-color": "#3F9EFF",
                    "@border-radius-base": "2px",
                  },
                  javascriptEnabled: true,
                },
              },
            },
          ],
        }),
      },
    },
  ],
};
