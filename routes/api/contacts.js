const express = require("express");
const contacts = require("../../models");
const HttpError = require("../../helpers");
const contactsValidationSchema = require("../../schemas");
const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const result = await contacts.listContacts();
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

router.get("/:contactId", async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = contacts.getContactById(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
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
});

router.delete("/:contactId", async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await contacts.removeContact(id);
        res.status(200).json(result);
    } catch (error) {
        next(error);
    }
});

router.put("/:contactId", async (req, res, next) => {
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
});

module.exports = router;
