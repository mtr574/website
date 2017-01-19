//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,
  specs: ['./e2e/**/*.js'],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:8000/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  }

};
