const { User } = require("./schemas");

const createUser = async ({ email, password }) => {
    return await User.create({ email, password });
};

const findUser = async (email) => {
    return await User.find({ email });
}

module.exports = {
    createUser,
    findUser
};
