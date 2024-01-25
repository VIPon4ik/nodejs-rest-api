const { User } = require("./schemas");
const gravatar = require("gravatar");

const createUser = async ({ email, password }) => {
    const avatarURL = gravatar.url(email);
    return await User.create({ email, password, avatarURL });
};

const findUser = async (email) => {
    return await User.find({ email });
};

const updateTokenById = async (id, token) => {
    return await User.findByIdAndUpdate(id, { token });
};

const updateSubscripitonById = async (id, subscription) => {
    return await User.findByIdAndUpdate(
        id,
        { subscription },
        { new: true }
    ).select("subscription -_id");
};

module.exports = {
    createUser,
    findUser,
    updateTokenById,
    updateSubscripitonById,
};
