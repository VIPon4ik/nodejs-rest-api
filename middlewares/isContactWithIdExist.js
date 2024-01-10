const { HttpError } = require("../helpers");
const { getContactById } = require("../models");

const isContactWithIdExist = () => {
  const func = async(req, res, next) => {
    const { contactId } = req.params;
    const result = await getContactById(contactId);

    if(!result) {
      next(HttpError(404, 'Not found'));
    }

    next()
  }

  return func;
}

module.exports = {isContactWithIdExist};