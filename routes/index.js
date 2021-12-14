var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils');

router.use(csrfProtection);


/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'a/A Express Skeleton Home' });
});

module.exports = router;
