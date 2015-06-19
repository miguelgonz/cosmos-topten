var router = require('express').Router();
var config = require('config');

router.get('/status', function (req, res) {
  req.routeName = 'status';
  res.respond({
    service: 'ibl-highlights-api',
    release: config.get('version')
  });
});

module.exports = router;
