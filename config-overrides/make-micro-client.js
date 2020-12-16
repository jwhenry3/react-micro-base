const externalReact = require('webpack-external-react');
module.exports = function makeMicroClient(config, {paths}) {
  // Output a UMD module and define its name via the library key.
  // This key will be what is referenced when the hub looks for
  // the correct module to dynamically load after the bundle is
  // injected into the DOM
  // https://webpack.js.org/configuration/output
  config.output.library = process.env.ENTRY;
  config.output.libraryTarget = 'umd';

  // Set separate entry point when building the injectable lib
  // https://webpack.js.org/concepts/entry-points
  config.entry = `${paths.appSrc}/apps/${process.env.ENTRY}/index.micro-client.ts`;

  // Exclude shared dependencies to reduce bundle size
  // https://webpack.js.org/configuration/externals
  config.module.noParse = externalReact.noParse;

  return config;
};
