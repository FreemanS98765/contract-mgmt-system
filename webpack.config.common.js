const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: ["./src/entry.js", "./src/sass/main.scss"],
  //context: path.resolve(__dirname, "assets"),
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "./public"),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../index.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /node_modules/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { url: false },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 100000,
            },
          },
        ],
      },
    ],
  },
};
