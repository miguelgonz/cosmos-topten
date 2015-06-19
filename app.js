var logger = require('ibl-logger');

var server = require('ibl-server').createServer({
  name: 'cosmos-topten',
  routesFolder: __dirname + '/lib/routes',
  stats: require('ibl-stats'),
  logger: logger
});

server.useDefaultErrorHandler();
server.listen(7080, function () {
  logger.info('HTTP server started at http://127.0.0.1:7080');
});

module.exports = server;
