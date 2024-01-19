const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
        next(HttpError(400, "Missing name required field"));
    }

    next()
  }

  return func;
}

module.exports = { validateBody };