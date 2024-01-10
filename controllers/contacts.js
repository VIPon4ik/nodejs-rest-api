const contacts = require("../models");
const { ctrlWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
    const result = await contacts.listContacts();
    res.status(200).json(result);
};

const getById = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId);
    res.status(200).json(result);
};

const add = async (req, res, next) => {
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
};

const deleteById = async (req, res, next) => {
    const { contactId } = req.params;
    await contacts.removeContact(contactId);
    res.status(200).json({ message: 'Contact deleted' });
};

const putById = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await contacts.putContact(contactId, req.body);
    res.status(200).json(result);
};

const patchById = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await contacts.patchContact(contactId, req.body);
    res.status(200).json(result);
}

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    deleteById: ctrlWrapper(deleteById),
    putById: ctrlWrapper(putById),
    patchById: ctrlWrapper(patchById),
};
