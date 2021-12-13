var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils');

router.use(csrfProtection);


/* GET home page. */
<<<<<<< HEAD
router.get('/', asyncHandler((req, res, next) => {
=======
router.get('/', function (req, res, next) {
>>>>>>> main
  res.render('index', { title: 'a/A Express Skeleton Home' });
}));

router.get('/login', (req, res) => {
  res.render('login')
});

router.post('/login', (req, res) => {
  const { username, password } = req.body
  console.log(`sending ${username} and ${password}`)
  res.redirect("/")
})

module.exports = router;
