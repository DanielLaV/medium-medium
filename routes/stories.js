const { requireAuth } = require("../auth"); //pass this as misddleware for anything that requires auth
const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require('../utils');

router.get("/new", requireAuth, csrfProtection, (req, res, next) => {
    res.render("stories-new", { csrfToken: req.csrfToken() })
})

router.post("/new", requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
    const { title, content } = req.body;
    const { userId } = req.session.auth;

    await db.Story.create({ authorId: userId, title, content })
    res.redirect("../")
}));

router.get("/:id(\\d+)", csrfProtection, async (req, res) => {
    const id = req.path.slice(1)
    const story = await db.Story.findByPk(id);
    res.render('story-id', { story, csrfToken: req.csrfToken() });
});

router.post("/:id(\\d+)", requireAuth, csrfProtection, asyncHandler( async (req, res) => {
    const id = req.path.slice(1);
    const story = await db.Story.findByPk(id);
    await story.destroy();
    res.redirect('../');
}));

module.exports = router;


// GET /stories/:id
// GET /stories/:id/edit

// POST /stories/:id/likes
// DELETE /stories/:id/likes
// POST /stories/:id/comments
// DELETE /stories/:id/comments
