
/**
* Global Error Handling definition.
* Here is the environment specific handler
* for unexpected errors.
*/
process.on('uncaughtException', function (error) {
  error.message = 'UncaughtException: ' + error.name + ', ' + error.message;
  error.name = 'ERROR';

  var entry = new LogEntry(error);

  if (logServerEnabled) {
    pushToLogServer(entry);
  }

  console.error(entry.toString());
});


/**
* Global Kill listener.
*/
process.on('SIGINT', function () {
  var error = new Error('Process KILLED !!!'),
      entry;

  error.name = 'INFO';
  entry = new LogEntry(error);

  if (logServerEnabled) {
    pushToLogServer(entry);
  }

  console.info(entry.toString());

  process.exit();
});

/**
* Global shutdown listener.
*/
process.on('exit', function(code) {
  var error = new Error('Process shuting down...'),
      entry;

  error.name = 'INFO';
  entry = new LogEntry(error);

  if (logServerEnabled) {
    pushToLogServer(entry);
  }

  console.info(entry.toString());
});
