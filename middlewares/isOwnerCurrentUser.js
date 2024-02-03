const { HttpError } = require("../helpers");
const { getContactById } = require("../service/contacts");

const isOwnerCurrentUser = async (req, res, next) => {
    const { contactId } = req.params;
    const { _id } = req.user;
    const contact = await getContactById(contactId);

    if (!contact.owner.equals(_id)) {
        next(HttpError(403));
    }

    next();
};

module.exports = { isOwnerCurrentUser };
