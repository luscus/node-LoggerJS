# [node-LoggerJS](https://github.com/luscus/node-LoggerJS)

Builds on [LoggerJS's](https://github.com/luscus/LoggerJS) skeleton to provide similar logging functionalities for Node.js modules.


Features:

* Uses the console to output information to the Browser Developer Tools.
* Supports sending the log entry (as JSON) to some Log Server.
* Supports write to log files
* custom tasks to be processed on specified log levels.
* Handles unexpected errors in the window.
* Handles process exits => report shutdown and kill


Please report bugs there [on GitHub](https://github.com/luscus/node-LoggerJS/issues).


----------


## Usage

### Set Dependency

Add following entry to your `package.json` in the `dependencies` property

    "dependencies": {
      "loggerjs" : "0.0.x"
    },


### Instanciate

Use a Logger instance in a Node.js module

    var LoggerJS = require('loggerjs'),
    options = {
      namespace :    'my.awesome.project',
      status :       true,
      logLevel :     LoggerJS.DEBUG,
      logServerUrl : '<logging_service_url>',
      tags :         ['myproject', 'node', 'something']
    },
    logger = new LoggerJS.Logger(options);

please refer to the [LoggerJS README](https://github.com/luscus/LoggerJS/blob/master/README.md) for an up to date list of options.

## API

please refer to the [LoggerJS README](https://github.com/luscus/LoggerJS/blob/master/README.md) for an up to date API description.

----------

### Logfile API (Node specific)

#### useLogfile

Activates writing log entries to files.

Parameter:

* path: absolute path to the logfile

Example:

    // activates file logging
    logger.useLogfile(<path>);

#### enableLogfile

Enables logfile task.

Example:

    // enables file logging
    logger.enableLogfile();

#### disableLogfile

Disables logfile task.

Example:

    // disables file logging
    logger.disableLogfile();

