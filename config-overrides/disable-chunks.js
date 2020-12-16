const path = require("path");
module.exports = function disableChunks(config) {
  // Consolidate bundle instead of chunk
  // https://webpack.js.org/plugins/split-chunks-plugin
  config.optimization.splitChunks = {
    cacheGroups: {
      default: false,
    },
  };

  // Move runtime into bundle instead of separate file
  // https://webpack.js.org/configuration/optimization
  config.optimization.runtimeChunk = false;

  // JS
  // https://webpack.js.org/configuration/output
  config.output.filename = 'main.js';

  // CSS
  // https://webpack.js.org/plugins/mini-css-extract-plugin
  for (let plugin of config.plugins) {
    if (plugin.constructor.name === 'MiniCssExtractPlugin') {
      plugin.options.filename = 'main.css';
    }
  }
  
  return config;
};
