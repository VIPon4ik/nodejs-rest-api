const { User } = require("./schemas");

const createUser = async ({ email, password }) => {
    return await User.create({ email, password });
};

const findUser = async (email) => {
    return await User.find({ email });
}

const updateTokenById = async (id, token) => {
    return await User.findByIdAndUpdate(id, { token });
}

module.exports = {
    createUser,
    findUser,
    updateTokenById
};
