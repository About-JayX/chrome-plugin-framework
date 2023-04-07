const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
const copyFiles = [
  {
    from: path.resolve("src/plugins/manifest.json"),
    to: `${path.resolve("dist")}/manifest.json`,
  },
  {
    from: path.resolve("src/assets"),
    to: path.resolve("dist/assets"),
  },
  {
    from: path.resolve("src/plugins/inject.js"),
    to: path.resolve("dist/js"),
  },
];
const plugins = [
  new CopyWebpackPlugin({
    patterns: copyFiles,
  }),
];
const pages = {};
const chromeName = ["popup", "background"];

chromeName.forEach((name) => {
  pages[name] = {
    entry: `src/${name}/main.js`,
    template: `src/${name}/index.html`,
    filename: `${name}.html`,
    title: "财务机器人首页",
  };
});

module.exports = {
  pages,
  productionSourceMap: false,
  configureWebpack: {
    entry: {
      content: "./src/content/main.js",
    },
    output: {
      filename: "js/[name].js",
      chunkFilename: "js/[name].js",
    },
    plugins,
  },
  css: {
    extract: {
      filename: "css/[name].css",
    },
  },
};
