const disableChunks = require('./disable-chunks');
const makeMicroClient = require('./make-micro-client');

module.exports = {
  webpack: {
    configure: (config, {paths}) => {
      if (process.env.ENTRY) {
        config = disableChunks(config);
        config = makeMicroClient(config, {paths});
      }

      config.externals = {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM',
        '@material-ui': '@material-ui/core',
        'firebase': 'firebase'
      };
      return config;
    },
  },
};
