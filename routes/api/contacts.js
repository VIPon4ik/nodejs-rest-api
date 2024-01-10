const express = require("express");
const contacts = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
    const result = await contacts.listContacts();
    res.status(200).json(result);
});

router.get("/:contactId", async (req, res, next) => {
    const { id } = req.params;
    const result = contacts.getContactById(id);
    res.status(200).json(result);
});

router.post("/", async (req, res, next) => {
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
});

router.delete("/:contactId", async (req, res, next) => {
    const { id } = req.params;
    const result = await contacts.removeContact(id);
    res.status(200).json(result);
});

router.put("/:contactId", async (req, res, next) => {
    const { id } = req.params;
    const result = contacts.updateContact(id, req.body);
    res.status(200).json(result);
});

module.exports = router;
