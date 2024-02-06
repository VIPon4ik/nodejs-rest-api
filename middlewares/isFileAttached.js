const { HttpError } = require("../helpers");

const isFileAttached = (req, res, next) => {
    if (!req.file) {
        next(HttpError(400, "File not attached"));
    }

    next();
};

module.exports = { isFileAttached };
