var LoggerJS = require('../lib/LoggerJS'),
    options = {
      "namespace" :    "node.logger.test.run",
      "status" :       true,
      "logLevel" :     "DEBUG",
      "tags" :         ["NODE","TEST","LOGGERJS"]
    },
    logger = new LoggerJS.Logger(options);

console.log('LoggerJS', LoggerJS);

for (var idx in logger.log_priority) {
  var method = logger.log_priority[idx];
  logger[method.toLowerCase()]('ein kleiner "'+method+'" output Test');
}

test.doit();
