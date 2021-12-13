var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/login', (req, res) => {
  res.render('login')
});

router.post('/login', (req, res) => {
  const { username, password } = req.body
  console.log(`sending ${username} and ${password}`)
  res.redirect("/")
})

module.exports = router;
