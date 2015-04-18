'use strict';
/*jslint unparam: true, indent:2, nomen: true, plusplus: true, vars: true, todo: true */
var log4js = require('../log4js');

function categoryFilter(categories, appender) {
  if (typeof categories === 'string') {
    categories = [categories];
  }
  return function (logEvent) {
    if (categories.indexOf(logEvent.categoryName) > -1) {
      appender(logEvent);
    }
  };
}

function configure(config) {
  log4js.loadAppender(config.appender.type);
  var appender = log4js.appenderMakers[config.appender.type](config.appender);
  return categoryFilter(config.category, appender);
}

exports.appender = categoryFilter;
exports.configure = configure;

