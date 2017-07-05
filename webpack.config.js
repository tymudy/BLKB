module.exports = function (env) {

  if (env && env.build) {
    if (env.build === 'dev') {
      console.log('Starting development build...');
      return require('./config/webpack.dev.js');
    } else if (env.build === 'prod') {
      console.log('Starting production build...');
      return require('./config/webpack.prod.js');
    } else {
      console.log('Received invalid build argument. Use \'dev\' for development or \'prod\' for production.');
    }
  }
};
