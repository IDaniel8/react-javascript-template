const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const prodConfig = {
  mode: "production",
  devtool: "source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
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
                  fileName: false,
                  displayName: false,
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
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
        test: /.(css|sass|scss)$/,
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

module.exports = merge(common, prodConfig);
