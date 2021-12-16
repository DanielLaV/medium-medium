const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require('../utils');
const db = require("../db/models");
const { requireAuth } = require("../auth");

router.post('/stories/:storyId/like', requireAuth, csrfProtection, asyncHandler(async (req,res)=> {
    const userId = req.session.auth;
    const storyId = parseInt(req.params.storyId);
    if (!await db.Like.findOne({ where: { storyId, userId }})){
        await db.Like.create({ userId, storyId });
    }
}));

module.exports = router;
