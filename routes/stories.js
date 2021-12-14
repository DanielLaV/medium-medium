const { requireAuth } = require("../auth"); //pass this as misddleware for anything that requires auth
const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require('../utils');


router.get("/", csrfProtection, async (req, res, next) => {
    const stories = await db.Story.findAll(
        { order: createdAt },
        { limit: 5 }
    )
    console.log(stories)
    res.render("stories", { stories, csrfToken: req.csrfToken() })
})

router.get("/new", csrfProtection, (req, res, next) => {
    res.render("stories-new", { csrfToken: req.csrfToken() })
})

router.post("/new", requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
    //destructure fields
    //add to db
    res.render("stories-new")

}))


module.exports = router;
