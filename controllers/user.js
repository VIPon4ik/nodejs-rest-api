const { ctrlWrapper, HttpError } = require("../helpers");
const { createUser, findUser, updateTokenById, updateSubscripitonById, updateAvatarById } = require("../service/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require('path');
const { nanoid } = require('nanoid');
const fs = require('fs/promises');
require('dotenv').config();
// const Jimp = require("jimp");


const publicPath = path.join(__dirname, '../', 'public', 'avatars')

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

    await updateTokenById(user._id, token);

    res.status(200).json({
        token,
        user: {
            email: user.email,
            subscription: user.subscription,
        },
    });
};

const logout = async (req,res,next) => {
    const { _id } = req.user;
    await updateTokenById(_id, '');
    res.status(204).end();
}

const current = async (req,res,next) => {
    const { user } = req;
    res.json({
        email: user.email,
        subscription: user.subscription,
    });
}

const updateSubscripiton = async (req,res,next) => {
    const { _id } = req.user;
    const { subscription: oldSubscription } = req.body;
    const { subscription } = await updateSubscripitonById(_id, oldSubscription)
    res.json({
        subscription,
    })
}

const updateAvatar = async (req,res,next) => {
    const { _id } = req.user;
    const { originalname, path: oldPath} = req.file;
    const newName = `${nanoid()}_${originalname}`;
    const newPath = path.join(publicPath, `${newName}`);
    await fs.rename(oldPath, newPath)
    await updateAvatarById(_id, newPath)
    res.json({
        avatarURL: newPath,
    })
}

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
    logout: ctrlWrapper(logout),
    current: ctrlWrapper(current),
    updateSubscripiton: ctrlWrapper(updateSubscripiton),
    updateAvatar: ctrlWrapper(updateAvatar),
};
