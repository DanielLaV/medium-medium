const express = require('express')
const router = express.Router()
const { csrfProtection, asyncHandler } = require("../utils");
const db = require("../db/models");
const { requireAuth } = require("../auth");

router.post('/profiles/:username/follow', csrfProtection, asyncHandler(async (req, res) => {
    const {userId} = req.session.auth
}))


module.exports = router
