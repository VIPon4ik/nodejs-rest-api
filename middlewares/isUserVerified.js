const { HttpError } = require("../helpers")
const { findUser } = require("../service/user")

const isUserVerified = async (req, res, next) => {
  const { email } = req.body;
  const [user] = await findUser(email);

  if (!user.verify) {
    next(HttpError(401, 'Email not verified'))
  }

  next();
}

module.exports = { isUserVerified };