const express = require('express')
const router = express.Router()
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../db/models");
const { requireAuth } = require("../auth");
const e = require('express');


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

router.get('/stories/:storyId/like', asyncHandler( async (req, res) => {
    const storyId = parseInt(req.params.storyId);
    const userId = req.session.auth.userId;
    const exists = await db.Like.findOne({ where: { storyId, userId }});
    if (exists){
        res.json({ message: "Liked" });
    } else {
        res.json({ message: "Like" })
    }
}));

router.post('stories/:storyId/like', asyncHandler( async (req,res)=> {
    const { userId, storyId} = req.body;
    const exists = await db.Like.findOne({ where: { storyId, userId }});
    if (exists){
        await db.Like.destroy({ where: { storyId, userId }});
        res.json({ message: "Like" });
    } else {
        await db.Like.create({ where: { storyId, userId }});
        res.json( {message: "Liked" });
    }
}));

module.exports = router
