const { HttpError } = require("../helpers");

const isFieldsInBody = () => {
    const func = (req, res, next) => {
        const { name, phone, email } = req.body;

        if (!name && !phone && !email) {
            next(HttpError(400, "Missing fields"));
        }

        next();
    };

    return func;
};

module.exports = { isFieldsInBody };
