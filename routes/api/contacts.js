const express = require("express");
const router = express.Router();

const { validateBody, isContactWithIdExist, isValidId } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");
const { schemas } = require("../../service/schemas");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, isContactWithIdExist, ctrl.getById);

router.post("/", validateBody(schemas.contactsValidationSchema), ctrl.add);

router.delete("/:contactId", isContactWithIdExist, ctrl.deleteById);

router.put(
    "/:contactId",
    isContactWithIdExist,
    validateBody(schemas.contactsValidationSchema),
    ctrl.putById
);

router.patch("/:contactId/favorite", isContactWithIdExist, validateBody(schemas.favoriteValidationSchema), ctrl.patchById)

module.exports = router;
