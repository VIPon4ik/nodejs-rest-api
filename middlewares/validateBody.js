const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    const { message } = error?.details[0] ?? 'Not valid data';

    if (error) {
      next(HttpError(400, message));
    }

    next()
  }

  return func;
}

module.exports = { validateBody };