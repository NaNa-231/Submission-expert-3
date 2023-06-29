const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:7000/',
      show: true,
      windowSize: '1200x950',
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'restaurant-apps',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
