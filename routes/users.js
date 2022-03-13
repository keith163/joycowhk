var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Joycow HK API on here doamin!');
});

module.exports = router;
