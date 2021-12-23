const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../db/models");
// const story = require('../db/models/story');
const { sequelize } = require("../db/models");
// const story = require('../db/models/story');

router.use(csrfProtection);

router.get(
  "/",
  csrfProtection,
  asyncHandler(async (req, res) => {
    if (req.session.auth) {
      const { userId } = req.session.auth;
      const storyList = await db.Story.findAll({
        include: [db.User, db.Like],
        order: [["id", "DESC"]],
      });
      const follow = await db.Relationship.findAll({
        include: "FollowingLinks",
        where: { followerUserId: userId },
      });
      let userIdsFollowing = [userId];
      let usersFollowing = [];
      for (let idx in follow) {
        let relat = await db.User.findByPk(follow[idx].followingUserId);
        usersFollowing.push(relat);
        userIdsFollowing.push(relat.id);
      }
      console.log("------------------", userIdsFollowing);

      res.render("index", {
        csrfToken: req.csrfToken(),
        storyList,
        userId,
        usersFollowing,
        userIdsFollowing,
        title: "Medium Medium",
      });
      return;
    } else {
      const storyList = await db.Story.findAll({ include: db.User });
      res.render("index", {
        csrfToken: req.csrfToken(),
        storyList,
        title: "Medium Medium",
      });
    }
  })
);

router.get(
  "/splash",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const storyList = await db.Story.findAll({ include: db.User });
    res.render("index", { csrfToken: req.csrfToken(), storyList });
    return;
  })
);

module.exports = router;
