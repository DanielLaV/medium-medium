const { requireAuth } = require("../auth"); //pass this as misddleware for anything that requires auth
const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require('../utils');

router.get("/new", csrfProtection, (req, res, next) => {
    res.render("stories-new", { csrfToken: req.csrfToken() })
})

router.post("/new", requireAuth, csrfProtection, asyncHandler(async (req, res, next) => {
    const { title, content } = req.body
    console.log(req)
    // await db.Story.create(authorId, title, content)
    res.send("added to DB (not really though)")
}))

router.get("/:id(\\d+)", async (req, res) => {
    const id = req.path.slice(1)
    console.log(id)
    const story = await db.Story.findByPk(id);
    res.render('story-id', { story });
})

router.get('/stories/:id/edit', (req, res) => {

})

module.exports = router;


// GET /stories/:id
// GET /stories/:id/edit

// POST /stories/:id/likes
// DELETE /stories/:id/likes
// POST /stories/:id/comments
// DELETE /stories/:id/comments
