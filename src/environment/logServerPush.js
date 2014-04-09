
var requester = require('request');

/**
* This function push the log entry to
* the specified Log Server
*
* @param entry a log Object
*/
function pushToLogServer (entry) {
    requester.post(
      {
        uri: logServerUrl,
        json: entry.getLogEntry(),
        headers: {
          'Content-type': 'application/json; charset=utf-8'
        }
      },
      function(error, req_response, body) {
        if (error || body.error) {
          var message = (error) ? error : body.error;

          console.error(new Date().toISOString()+' - Error while pushing to LogServer: '+ message.message);
          console.error(message.stack);
          console.error(entry.getLogEntry());
        }
      }
    );
}
