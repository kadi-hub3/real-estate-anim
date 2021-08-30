const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    port: 3010,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./src"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["babel-plugin-styled-components"],
        },
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpe?g|png)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader",
      },
    ],
  },
};
