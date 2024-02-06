const express = require("express");
const router = express.Router();

const {
    validateBody,
    isContactWithIdExist,
    isValidId,
    authenticate,
    isOwnerCurrentUser
} = require("../../middlewares");
const { contactsSchemas } = require("../../service/schemas");

const ctrl = require("../../controllers/contacts");

router.get("/", authenticate, ctrl.getAll);

router.get(
    "/:contactId",
    authenticate,
    isValidId,
    isContactWithIdExist,
    isOwnerCurrentUser,
    ctrl.getById
);

router.post(
    "/",
    authenticate,
    validateBody(contactsSchemas.contactsValidationSchema),
    ctrl.add
);

router.delete(
    "/:contactId",
    authenticate,
    isValidId,
    isContactWithIdExist,
    isOwnerCurrentUser,
    ctrl.deleteById
);

router.put(
    "/:contactId",
    authenticate,
    isValidId,
    isContactWithIdExist,
    validateBody(contactsSchemas.contactsValidationSchema),
    isOwnerCurrentUser,
    ctrl.putById
);

router.patch(
    "/:contactId/favorite",
    authenticate,
    isValidId,
    isContactWithIdExist,
    isOwnerCurrentUser,
    validateBody(contactsSchemas.favoriteValidationSchema),
    ctrl.patchById
);

module.exports = router;
