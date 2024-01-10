const contacts = require("../models");
const { HttpError, ctrlWrapper } = require("../helpers");
const contactsValidationSchema = require("../schemas");

const getAll = async (req, res, next) => {
    const result = await contacts.listContacts();
    res.status(200).json(result);
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    const result = contacts.getContactById(id);
    res.status(200).json(result);
};

const add = async (req, res, next) => {
    const { error } = contactsValidationSchema(req.body);
    if (error) {
        throw HttpError(403, "Validation error");
    }
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
};

const deleteById = async (req, res, next) => {
    const { id } = req.params;
    const result = await contacts.removeContact(id);
    res.status(200).json(result);
};

const updateById = async (req, res, next) => {
    const { error } = contactsValidationSchema(req.body);

    if (error) {
        throw HttpError(403, "Validation error");
    }

    const { id } = req.params;
    const result = contacts.updateContact(id, req.body);
    res.status(200).json(result);
};

module.exports = {
    getAll: ctrlWrapper(getAll),
    getById: ctrlWrapper(getById),
    add: ctrlWrapper(add),
    deleteById: ctrlWrapper(deleteById),
    updateById: ctrlWrapper(updateById),
};
