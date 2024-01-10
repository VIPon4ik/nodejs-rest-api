const contacts = require("../models");
const HttpError = require("../helpers");
const contactsValidationSchema = require("../schemas");

const getAll = async (req, res, next) => {
    try {
        const result = await contacts.listContacts();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = contacts.getContactById(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const add = async (req, res, next) => {
    try {
        const { error } = contactsValidationSchema(req.body);
        if (error) {
            throw HttpError(403, "Validation error");
        }
        const result = await contacts.addContact(req.body);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

const deleteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await contacts.removeContact(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

const updateById = async (req, res, next) => {
    try {
        const { error } = contactsValidationSchema(req.body);

        if (error) {
            throw HttpError(403, "Validation error");
        }

        const { id } = req.params;
        const result = contacts.updateContact(id, req.body);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAll,
    getById,
    add,
    deleteById,
    updateById,
};
