const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../db/models");
const { requireAuth } = require("../auth");

//gets all users and renders at profiles.pug
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const users = await db.User.findAll();
    res.render("profiles", { users });
  })
);

router.get(
  "/:username",
  requireAuth,
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

    res.render("profile", {
      profileUser,
      usersFollowing,
      userId,
      numOfFollowing,
    });
  })
);

router.get(
  "/:username/about",
  asyncHandler(async (req, res) => {
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

    res.render("about", {profileUser, numOfFollowing });
  })
);

router.post(
  "/:username/follow",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const { currentUserId } = req.session.auth;
    const username = req.params.username;
    const followedId = db.User.findOne({ where: { username } });
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

/*
    Try to find relationship
      if it doesn't exists (return null)
        send follow
      else
        send following

*/
