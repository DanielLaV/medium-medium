const express = require("express");
const router = express.Router();
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../db/models");
const { requireAuth } = require("../auth");

router.get('/users', (req, res) => {
    const users = db.User.findAll()
    res.render(users)
})
router.get('/users/:userId', (req, res) => {
    const user
})


module.exports = router
