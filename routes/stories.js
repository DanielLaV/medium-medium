const { requireAuth } = require("../auth"); //pass this as misddleware for anything that requires auth
const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require('../utils');

router.get("/new", csrfProtection, (req, res, next) => {
    res.render("stories-new", { csrfToken: req.csrfToken() })
})

router.post("/new", csrfProtection, asyncHandler(async (req, res, next) => {
    const { title, content } = req.body
    res.redirect("added to DB (not really though)")
}))

router.get("/:id(\\d+)", (req, res) => {
    res.send("I may be working like you want")
})

module.exports = router;
