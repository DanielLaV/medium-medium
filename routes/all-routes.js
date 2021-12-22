const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../db/models");
const { sequelize } = require("../db/models");

router.use(csrfProtection);

/**************************HOMEPAGE*************************************************** */
//SPLASH PAGE
router.get(
  "/splash",
  csrfProtection,
  asyncHandler(async (req, res) => {
    const storyList = await db.Story.findAll({ include: db.User });
    res.render("index", { csrfToken: req.csrfToken(), storyList });
    return;
  })
);

//LOGGED IN FEED
router.get(
  "/feed",
  csrfProtection,
  asyncHandler(async (req, res) => {
    if (req.session.auth) {
      const { userId } = req.session.auth;
      const storyList = await db.Story.findAll({
        include: [db.User, db.Like],
        order: [["createdAt", "DESC"]],
      });
      console.log(storyList);
      // const liked = await db.Like.findAll( {where: { userId, storyList.id }})
      res.render("index", { csrfToken: req.csrfToken(), storyList, userId });
      return;
    } else {
      const storyList = await db.Story.findAll({ include: db.User });
      res.render("index", { csrfToken: req.csrfToken(), storyList });
    }
  })
);

/**************************STORIES***************************************************** */

//GET CREATE PAGE
router.get("/stories/new", requireAuth, csrfProtection, (req, res, next) => {
  res.render("stories-new", { csrfToken: req.csrfToken() });
});

//GET A SPECIFIC STORY
router.get(
  "/stories/:id(\\d+)",
  requireAuth,
  csrfProtection,
  async (req, res) => {
    const { userId } = req.session.auth;
    const id = req.path.slice(1);
    const story = await db.Story.findByPk(id, { include: [db.User, db.Like] });
    res.render("story-id", { story, csrfToken: req.csrfToken(), userId });
  }
);

//GET EDIT PAGE
router.get(
  "/stories/:id(\\d+)/edit",
  requireAuth,
  csrfProtection,
  async (req, res) => {
    const regex = /\d+/g;
    let id = req.path.slice(1).match(regex).join("");
    const story = await db.Story.findByPk(id);
    res.render("stories-new", { story, csrfToken: req.csrfToken() });
  }
);

//POST EDIT PAGE
router.post(
  "/stories/:id(\\d+)/edit",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { title, content } = req.body;
    const { userId } = req.session.auth;
    const regex = /\d+/g;
    let id = req.path.slice(1).match(regex).join("");
    const story = await db.Story.findByPk(id);
    await story.update({ title, content });
    res.redirect(`/stories/${id}`);
  })
);

//DELETE A STORY
router.post(
  "/stories/:id(\\d+)",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const id = req.path.slice(1);
    const story = await db.Story.findByPk(id);
    await story.destroy();
    res.redirect("/");
  })
);

//POST A NEW STORY
router.post(
  "/stories/new",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { title, content, storyImage } = req.body;
    const { userId } = req.session.auth;
    await db.Story.create({ userId, title, content, storyImage });
    res.redirect("/");
  })
);

/********************PROFILE RELATED******************************/

//GET A SPECIFIC PROFILE
router.get(
  "/:username",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const username = req.params.username;
    const profileUser = await db.User.findOne({ where: { username } });

    //find who a user follows
    const usersFollowing = await db.Relationship.findAll({
      where: {
        followerUserId: profileUser.id,
      },
      include: "FollowingLinks",
    });

    let following = [];

    for (let idx in following) {
      let relat = await db.User.findByPk(usersFollowing[idx].followingUserId);
      following.push(relat);
    }

    const numOfFollowing = following.length;

    //find a user's followers
    const usersFollowedBy = await db.Relationship.findAll({
      where: {
        followingUserId: profileUser.id,
      },
      include: "FollowerLinks",
    });

    let followers = [];

    for (let idx in followedBy) {
      let relat = await db.User.findByPk(usersFollowedBy[idx].followerUserId);
      followers.push(relat);
    }

    const numOfFollowers = followers.length;

    res.render("profile", {
      profileUser,
      usersFollowing,
      numOfFollowing,
      userId,
      usersFollowedBy,
      numOfFollowers,
    });
  })
);

//GET A PERSONS ABOUT PAGE

router.get(
  "/:username/about",
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const username = req.params.username;

    const profileUser = await db.User.findOne({ where: { username } });

    const following = await db.Relationship.findAll({
      where: {
        followerUserId: profileUser.id,
      },
      include: "FollowingLinks",
    });
    let usersFollowing = [];
    for (let idx in following) {
      let relat = await db.User.findByPk(following[idx].followingUserId);
      usersFollowing.push(relat);
    }
    const numOfFollowing = following.length;

    res.render("about", { profileUser, numOfFollowing, userId });
  })
);
module.exports = router;
