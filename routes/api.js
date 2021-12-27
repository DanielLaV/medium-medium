const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../db/models");
const { requireAuth } = require("../auth");
const e = require("express");

router.post(
  "/follow",
  asyncHandler(async (req, res) => {
    const { followerUserId, followingUserId } = req.body;

    const exists = await db.Relationship.findOne({
      where: { followingUserId, followerUserId },
    });

    if (exists) {
      await db.Relationship.destroy({
        where: { followingUserId, followerUserId },
      });
      res.json({ message: "Follow" });
    } else {
      await db.Relationship.create({ followingUserId, followerUserId });
      res.json({ message: "Following" });
    }
  })
);

router.post(
  "/stories/:storyId/like",
  asyncHandler(async (req, res) => {
    const { userId } = req.session.auth;
    const { storyId } = req.body;
    const exists = await db.Like.findOne({ where: { storyId, userId } });
    if (exists) {
      await db.Like.destroy({ where: { storyId, userId } });
      res.json({ message: "unlike" });
    } else {
      await db.Like.create({ storyId, userId });
      res.json({ message: "like" });
    }
  })
);

router.post(
  "/comments",
  asyncHandler(async (req, res) => {
    const { content, storyId } = req.body;
    const { userId } = req.session.auth;
    const comment = await db.Comment.create({ userId, storyId, content });
    const commentId = await db.Comment.max("id");
    res.json({ message: comment, userId });
  })
);

router.post(
  "/comments/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const { content, commentId } = req.body;
    const data = db.Comment.update({ content }, { where: { id: commentId } });
    res.json({ data });
  })
);

router.delete(
  "/comments/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const commentId = req.params.id;
    await db.Comment.destroy({ where: { id: commentId } });
    res.json({});
  })
);

module.exports = router;
