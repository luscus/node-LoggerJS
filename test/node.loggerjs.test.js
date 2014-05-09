var LoggerJS = require('../lib/LoggerJS'),
    options = {
      "namespace" :    "node.logger.test.run",
      "status" :       true,
      "logLevel" :     "DEBUG",
      "tags" :         ["NODE","TEST","LOGGERJS"]
    },
    logger = new LoggerJS.Logger(options);

// Handle unexpected errors
var options = {
      name: 'error',
      status: true,
      strict: false,
      logLevel : LoggerJS.ERROR,
      task: function (logEntry) {
        console.log('error TASK running...');
      }
    },
    task = new LoggerJS.LogTask(options);

logger.registerLogTask(task);

logger.useLogfile('./test/test.log');



function runTest () {
  for (var idx in logger.log_priority) {
    var method = logger.log_priority[idx];
    logger[method.toLowerCase()]('ein kleiner "'+method+'" output Test');
  }

  logger.useLogServer('http://dggfgd');


  test.doit();
}


setInterval(runTest, 1000);
