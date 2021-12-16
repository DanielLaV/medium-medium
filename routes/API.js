const express = require('express')
const router = express.Router()
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../db/models");
const { requireAuth } = require("../auth");


router.post('/follow', asyncHandler(async (req, res) => {
    const { followerUserId, followingUserId } = req.body;

    const exists = await db.Relationship.findOne({ where: { followingUserId, followerUserId } });
    console.log('=======EXISTS IS=====', exists);
    if (exists) {
        await db.Relationship.destroy({ where: { followingUserId, followerUserId }});
        res.json({ message: 'Follow' });
    } else {
        await db.Relationship.create({ followingUserId, followerUserId });
        res.json({ message: 'Following' });
    }
    /*
        if relationship exists
            send back follow
        else
            send back following
    */
}))


module.exports = router
