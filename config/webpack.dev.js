const path = require("path");
const { HotModuleReplacementPlugin } = require("webpack");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, "../bundle"),
    },
  },
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-transform-runtime",
              "react-hot-loader/babel",
              [
                "babel-plugin-styled-components",
                {
                  pure: true,
                  fileName: true,
                  displayName: true,
                },
              ],
            ],
            presets: [
              [
                "@babel/preset-env",
                {
                  corejs: 3,
                  useBuiltIns: "usage",
                  targets: {
                    browsers: ["> 0.25%", "not dead"],
                  },
                },
              ],
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
            ],
          },
        },
        test: /.(js|jsx)$/,
        exclude: /node_modules|@babel(?:\/|\\{1,2})runtime|core-js/,
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /.(css|sass|scss)$/,
      },
    ],
  },
  plugins: [new HotModuleReplacementPlugin()],
};

module.exports = merge(common, devConfig);
