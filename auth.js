const user = require("./db/models/user")

const loginUser = (req, res, user) => {
    req.session.auth = { userId: user.id }
}

module.exports = {
    loginUser,
}
