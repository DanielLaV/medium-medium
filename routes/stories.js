const { requireAuth } = require("../auth"); //pass this as misddleware for anything that requires auth
const express = require("express");
const router = express.Router();
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("../utils");

router.get("/new", requireAuth, csrfProtection, (req, res, next) => {
  res.render("stories-new", { csrfToken: req.csrfToken() });
});

//temp get route
router.get("/:id(\\d+)", requireAuth, csrfProtection, async (req, res) => {
  const { userId } = req.session.auth;
  const id = req.path.slice(1);
  const story = await db.Story.findByPk(id, {
    include: [db.User, db.Like, db.Comment],
  });
  res.render("story-id", {
    story,
    csrfToken: req.csrfToken(),
    userId,
    title: `Medium Medium: ${story.title}`,
  });
});

router.get("/:id(\\d+)/edit", requireAuth, csrfProtection, async (req, res) => {
  const regex = /\d+/g;
  let id = req.path.slice(1).match(regex).join("");
  const story = await db.Story.findByPk(id);
  res.render("stories-new", {
    story,
    csrfToken: req.csrfToken(),
    title: `Medium Medium: ${story.title}`,
  });
});

router.post(
  "/new",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { title, content, storyImage } = req.body;
    const { userId } = req.session.auth;
    await db.Story.create({ userId, title, content, storyImage });
    res.redirect("/");
  })
);

router.post(
  "/:id(\\d+)/edit",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { title, content } = req.body;
    const { userId } = req.session.auth;
    const regex = /\d+/g;
    let id = req.path.slice(1).match(regex).join("");
    const story = await db.Story.findByPk(id);
    await story.update({ title, content });
    res.redirect(`/stories/${id}`);
  })
);

router.post(
  "/:id(\\d+)",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const id = req.path.slice(1);
    const story = await db.Story.findByPk(id);
    await story.destroy();
    res.redirect("/");
  })
);

module.exports = router;
