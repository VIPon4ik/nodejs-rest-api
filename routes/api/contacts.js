const express = require("express");
const router = express.Router();

const { validateBody, isContactWithIdExist, isValidId } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");
const { contactsSchemas } = require("../../service/schemas");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, isContactWithIdExist, ctrl.getById);

router.post("/", validateBody(contactsSchemas.contactsValidationSchema), ctrl.add);

router.delete("/:contactId", isValidId, isContactWithIdExist, ctrl.deleteById);

router.put(
    "/:contactId",
    isValidId,
    isContactWithIdExist,
    validateBody(contactsSchemas.contactsValidationSchema),
    ctrl.putById
);

router.patch("/:contactId/favorite", isValidId, isContactWithIdExist, validateBody(contactsSchemas.favoriteValidationSchema), ctrl.patchById)

module.exports = router;
