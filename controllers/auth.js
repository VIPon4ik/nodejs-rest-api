const { ctrlWrapper, HttpError } = require("../helpers");
const { createUser, findUser } = require("../service/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY || "myverysecretkey123456789(*&^%$#@!";

const register = async (req, res, next) => {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser({ email, password: hashedPassword });
    res.status(201).json({
        user: {
            email: user.email,
            subscription: user.subscription,
        },
    });
};

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const [user] = await findUser(email);
    if (!user) {
        throw HttpError(401, "Email or password is wrong");
    }

    const isPasswordRight = await bcrypt.compare(password, user.password);

    if (!isPasswordRight) {
        throw HttpError(401, "Email or password is wrong");
    }

    const payload = {
        id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });

    res.status(200).json({
        token,
        user: {
            email: user.email,
            subscription: user.subscription,
        },
    });
};

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
};
