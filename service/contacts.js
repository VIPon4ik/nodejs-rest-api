const { Contact } = require("./schemas");

const listContacts = async () => {
    return Contact.find();
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
    return Contact.findByIdAndUpdate(contactId, body, {new: true})
};

// const patchContact = async (contactId, body) => {
//     const { name, email, phone } = body;
//     const contacts = await listContacts();
//     const contact = contacts.find((contact) => contact.id === contactId);
//     contact.name = name ?? contact.name;
//     contact.email = email ?? contact.email;
//     contact.phone = phone ?? contact.phone;
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

//     return contact;
// };

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    putContact,
    // patchContact,
};
