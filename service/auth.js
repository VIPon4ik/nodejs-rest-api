const { User } = require("./schemas");

const createUser = async ({ email, password }) => {
    return await User.create({ email, password });
};

module.exports = {
    createUser,
};
