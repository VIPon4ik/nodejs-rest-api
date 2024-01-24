const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers");
const { User } = require("../service/schemas");
require("dotenv").config();

const SECRET_KEY =
    process.env.SECRET_KEY || "myverysecretkey123456789(*&^%$#@!";

const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
        next(HttpError(401));
    }
    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(id);
        req.user = user;
        if (!user) {
            next(HttpError(401));
        }
    } catch (e) {
        next(HttpError(401));
    }

    next();
};

module.exports = { authenticate };
