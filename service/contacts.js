const { Contact } = require('./schemas');

const listContacts = async () => {
    return Contact.find();
};

const getContactById = async (contactId) => {
    return Contact.findById(contactId);
};

// const removeContact = async (contactId) => {
//     const deletedContact = await getContactById(contactId);
//     const contacts = await listContacts();
//     const newContacts = contacts.filter(
//         (contact) => contact.id !== deletedContact.id
//     );
//     await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
//     return deletedContact;
// };

// const addContact = async (body) => {
//     const { name, email, phone } = body;
//     const contacts = await listContacts();
//     const contact = { id: nanoid(), name, email, phone };
//     contacts.push(contact);
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
//     return contact;
// };

// const putContact = async (contactId, body) => {
//     const { name, email, phone } = body;
//     const contacts = await listContacts();
//     const index = contacts.findIndex((contact) => contact.id === contactId);
//     contacts[index] = { id: contactId, name, email, phone };
//     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

//     return contacts[index];
// };

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
    // removeContact,
    // addContact,
    // putContact,
    // patchContact,
};
