var express = require('express');
var redis = require('redis');
var router = express.Router();
var host = process.env.REDIS_PORT_6379_TCP_ADDR;
var port = process.env.REDIS_PORT_6379_TCP_PORT;
var client = redis.createClient(port, host);

router.get('/', function(req, res, next) {
	console.log(process.env);
    client.incr('counter', function(err, result) {
    if (err) {
      return next(err);
    }
    res.render('index', { title: 'Docker', counter: result });
  });
});

module.exports = router;
