'use strict';
/*jslint unparam: true, indent:2, nomen: true, plusplus: true, vars: true, todo: true */
var log4js = require('log4js');

function categoryFilter(categories, appender) {
  return function (logEvent) {
    if (categories.some(function (x) {return (x === logEvent.category); })) {
      appender(logEvent);
    }
  };
}

function configure(config) {
  log4js.loadAppender(config.appender.type);
  var appender = log4js.appenderMakers[config.appender.type](config.appender);
  if (!(config.category instanceof Array)) {
    config.category = [config.category];
  }

  return categoryFilter(config.category, appender);
}

exports.appender = categoryFilter;
exports.configure = configure;