const contacts = require("../models");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res, next) => {
    const result = await contacts.listContacts();
    res.status(200).json(result);
};

const getById = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId);

    if (!result) {
      throw HttpError(404, 'Not found')
    }    

    res.status(200).json(result);
};

const add = async (req, res, next) => {
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
};

const deleteById = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);
    res.status(200).json(result);
};

const updateById = async (req, res, next) => {
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, req.body);
    res.status(200).json(result);
};

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    deleteById: ctrlWrapper(deleteById),
    updateById: ctrlWrapper(updateById),
};
