# log4js-appender-category-filter
Appender for log4js. Filter logs by category.

### install 
>npm install log4js-appender-category-filter --save 
### using
This appender will filter log by category. For example, if log4js was configured with the following json file:

    {
      "levels": {
        "[all]": "info"
      },
      "appenders": [{
        "type": "log4js-appender-category-filter",
        "category": "important",
        "appender": {
          "type": "console",
          "layout": {
            "type": "pattern",
            "pattern": "[%r][%.1p] %c - %m"
          }
        }
      }]
    }
