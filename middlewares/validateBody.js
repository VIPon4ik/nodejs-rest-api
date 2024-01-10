const { HttpError } = require('../helpers');

const validateBody = schema => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
        throw HttpError(400, "Missing required name field");
    }
  }

  return func;
}

module.exports = { validateBody };