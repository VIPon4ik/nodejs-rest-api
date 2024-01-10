const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
    const contacts = await fs.readFile(contactsPath);
    return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const contact = contacts.find((contact) => contact.id === contactId);
    return contact || null;
};

const removeContact = async (contactId) => {
    const deletedContact = await getContactById(contactId);

    if (!deletedContact) {
        return null;
    }

    const contacts = await listContacts();
    const newContacts = contacts.filter(
        (contact) => contact !== deletedContact
    );
    await fs.writeFile(contactsPath, JSON.stringify(newContacts, null, 2));
    return deletedContact;
};

const addContact = async (body) => {
  const { name, email, phone } = body;

  if (!name || !email || !phone) {
    return null;
  }  

  const contacts = await listContacts();
  const contact = { id: nanoid(), name, email, phone };
  contacts.push(contact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
  return contact;
};

const updateContact = async (contactId, body) => {
  const { name, email, phone } = body;
  
  if (!name || !email || !phone) {
    return null;
  }  

  const contact = await getContactById(contactId);
  contact.name = name;
  contact.email = email;
  contact.phone = phone;
  return contact;
};

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
};
