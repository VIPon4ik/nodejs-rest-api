const { HttpError } = require("./HttpError");

function mongooseErrorHandler(error, data, next) {
    const { name, code } = error;
    const status = (name === 'MongoServerError' && code === 11000) ? 409 : 400;
    next(HttpError(status));
}

module.exports = {mongooseErrorHandler};
