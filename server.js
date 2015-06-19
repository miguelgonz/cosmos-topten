var cluster = require('cluster');
var logger = require('ibl-logger');
var stats = require('ibl-stats');

if (cluster.isMaster) {
  cluster.fork();

  cluster.on('exit', function (worker) {
    stats.increment('processes_killed');
    logger.error('Worker %s died', worker.process.pid);
    cluster.fork();
  });
} else {
  require('./app');
}
