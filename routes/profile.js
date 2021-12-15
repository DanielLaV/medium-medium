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
  asyncHandler(async (req, res) => {
    const username = req.params.username;
    const user = await db.User.findOne({ where: { username } });

    const userFollowing = await db.Relationship.findAll({
                      where: {
                        followerUserId: user.id },
                      include: 'FollowingLinks' });

    let usersFollowing = userFollowing.map(async(user1) => {
      return await db.User.findByPk(user1.followingUserId);
    });
    console.log('usersFollowing is THIS REALLY BIG', usersFollowing);
    // userFollowing.forEach(async (user1) => {
    //   let num = await db.User.findByPk(user1.followingUserId);
    //   usersFollowing.push(num);
    //
    // })


    const numOfFollowing = userFollowing.length;

    res.render("profile", { user, usersFollowing, numOfFollowing });
  })
);



module.exports = router;
