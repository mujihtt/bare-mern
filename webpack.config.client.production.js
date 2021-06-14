const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CURRENT_WORKING_DIR = process.cwd();

const config = {
  name: "browser",
  mode: "production", // di client development
  devtool: "eval-source-map",
  entry: [
    // menghilangkan hot-reloading
    path.join(CURRENT_WORKING_DIR, "client/main.js"),
  ],
  output: {
    // path file hasil bundling webpack akan disimpan
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    //regex untuk menentukan file dengan extensi apa saja yang akan di transpile
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable hot module replacement untuk module react-hot-loader
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};

module.exports = config;
