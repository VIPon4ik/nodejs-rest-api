const express = require("express");
const contacts = require("../../models");
const Joi = require('joi');
const HttpError = require("../../helpers");

const validationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
})

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const result = await contacts.listContacts();
    res.status(200).json(result);
  } catch(error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {

    const { id } = req.params;
    const result = contacts.getContactById(id);
    res.status(200).json(result);
  } catch(error) {
    next(error);
  }

});

router.post("/", async (req, res, next) => {
  try {
    const { error } = validationSchema(req.body);
    if (error) {
      throw HttpError(403, 'Validation error');
    }
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);

  } catch(error) {
    next(error);
  }
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
