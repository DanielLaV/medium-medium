const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../db/models");
const { requireAuth } = require("../auth");

router.get(
  "/:username",
  requireAuth,
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const username = req.params.username;
    const profileUser = await db.User.findOne({ where: { username } });

    // find who a profile is following
    const userRelationships = await db.Relationship.findAll({
      where: { followerUserId: profileUser.id },
      include: "FollowingLinks"
    });

    //list of who the profile user follows
    let usersFollowing = [];

    for (let idx in userRelationships) {
      let relat = await db.User.findByPk(
        userRelationships[idx].followingUserId
      );
      usersFollowing.push(relat)
    }

    const numOfFollowing = userRelationships.length

    const activeUserRelationships = await db.Relationship.findAll({
      where: {
        followingUserId: profileUser.id,
        followerUserId: userId
      },
    });

    const followingBinary = activeUserRelationships.length;

    res.render("profile", {
      profileUser,
      usersFollowing,
      userId,
      numOfFollowing,
      followingBinary,
    });
  })
);

router.get(
  "/:username/about",
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const username = req.params.username;
    const profileUser = await db.User.findOne({ where: { username } });

    const userRelationships = await db.Relationship.findAll({
      where: {
        followerUserId: profileUser.id,
      },
      include: "FollowingLinks",
    });

    let usersFollowing = [];

    for (let idx in userRelationships) {
      let relat = await db.User.findByPk(
        userRelationships[idx].followingUserId
      );
      usersFollowing.push(relat);
    }

    const numOfFollowing = userRelationships.length;

    res.render("about", { profileUser, numOfFollowing, userId });
  })
);

router.post(
  "/:username/follow",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const { currentUserId } = req.session.auth;
    const username = req.params.username;
    const followedId = await db.User.findOne({ where: { username } });
    if (
      await db.Relationship.findOne({
        where: { followedUserId: followedId, followerUserId: currentUserId },
      })
    ) {
    } else {
      await db.Relationship.create({
        followedUserId: followedId,
        followerUserId: currentUserId,
      });
    }
  })
);

module.exports = router;
