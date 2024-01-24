const { Contact } = require("./schemas");

const listContacts = async (page, limit, favorite) => {
    const query = {};
    const skip = (page - 1) * limit;

    if (favorite) {
        query.favorite = favorite;
    }

    return Contact.find(query)
        .skip(skip)
        .limit(limit);
};

const getContactById = async (contactId) => {
    return Contact.findById(contactId);
};

const removeContact = async (contactId) => {
    return Contact.findByIdAndDelete(contactId);
};

const addContact = async (body) => {
    return Contact.create(body);
};

const putContact = async (contactId, body) => {
    return Contact.findByIdAndUpdate(contactId, body, { new: true });
};

const updateStatusContact = async (contactId, body) => {
    return Contact.findByIdAndUpdate(contactId, body, { new: true });
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    putContact,
    updateStatusContact,
};
