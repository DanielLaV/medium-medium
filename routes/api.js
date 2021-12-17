const express = require('express')
const router = express.Router()
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../db/models");
const { requireAuth } = require("../auth");

console.log("inside api router-----------------------------")

router.post('/follow', asyncHandler(async (req, res) => {
    const { followerUserId, followingUserId } = req.body;

    const exists = await db.Relationship.findOne({ where: { followingUserId, followerUserId } });

    if (exists) {
        await db.Relationship.destroy({ where: { followingUserId, followerUserId } });
        res.json({ message: 'Follow' });
    } else {
        await db.Relationship.create({ followingUserId, followerUserId });
        res.json({ message: 'Following' });
    }
}))


router.get('/profiles/:userId/follow', asyncHandler(async (req, res) => {
    const followingUserId = parseInt(req.params.userId);
    const followerUserId = parseInt(req.session.auth.userId);

    const exists = await db.Relationship.findOne({ where: { followingUserId, followerUserId } });

    if (exists) {
        res.json({ message: 'Following' });
    } else {
        res.json({ message: 'Follow' });
    }
}))

router.post('/comments', asyncHandler(async (req, res) => {

    const { content, storyId } = req.body;
    const { userId } = req.session.auth;
    await db.Comment.create({ userId, storyId, content })
    console.log("check your DB")
}));

router.get('/comments',)

module.exports = router
