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
    console.log(user);
    res.render("profile", { user });
  })
);



module.exports = router;
