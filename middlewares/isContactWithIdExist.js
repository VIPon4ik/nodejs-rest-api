const { HttpError } = require("../helpers");
const { getContactById } = require("../service");

const isContactWithIdExist = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await getContactById(contactId);

    if (!result) {
        next(HttpError(404, "Not found"));
    }

    next();
};

module.exports = { isContactWithIdExist };
