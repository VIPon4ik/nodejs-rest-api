const { ctrlWrapper } = require("../helpers");
const bcrypt = require("bcrypt");
const { createUser } = require("../service/auth");

const register = async (req, res, next) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const user = await createUser({ email, password: hashedPassword });
    res.status(200).json({
        user: {
          email: user.email,
          subscription: user.subscription,
        }
    });
};

module.exports = {
    register: ctrlWrapper(register),
};
