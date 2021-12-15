const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils');
const db = require("../db/models");
// const story = require('../db/models/story');
const { sequelize } = require('../db/models');
// const story = require('../db/models/story');

router.use(csrfProtection);


router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  const storyList = await db.Story.findAll();
  res.render('index', { csrfToken: req.csrfToken(), storyList });
}))

module.exports = router;
