const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils');
const db = require("../db/models");
// const story = require('../db/models/story');
const { sequelize } = require('../db/models');
// const story = require('../db/models/story');

router.use(csrfProtection);


router.get('/', csrfProtection, asyncHandler(async (req, res) => {
  if (req.session.auth){
    const { userId } = req.session.auth;
    const storyList = await db.Story.findAll({ include: [db.User, db.Like], order: [ ['createdAt', 'DESC'] ] });
    console.log(storyList);
    // const liked = await db.Like.findAll( {where: { userId, storyList.id }})
    res.render('index1', { csrfToken: req.csrfToken(), storyList, userId });
    return
  } else {
      const storyList = await db.Story.findAll({ include: db.User });
      res.render('index1', { csrfToken: req.csrfToken(), storyList });
      return
  }
}))

module.exports = router;
