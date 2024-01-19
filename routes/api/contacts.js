const express = require("express");
const router = express.Router();

const { validateBody, isContactWithIdExist, isFieldsInBody, isValidId } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");
const { schemas } = require("../../service/schemas");

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, isContactWithIdExist, ctrl.getById);

router.post("/", validateBody(schemas.contactsValidationSchema), ctrl.add);

// router.delete("/:contactId", isContactWithIdExist(), ctrl.deleteById);

// router.put(
//     "/:contactId",
//     isContactWithIdExist(),
//     validateBody(schema),
//     ctrl.putById
// );

// router.patch("/:contactId", isContactWithIdExist(), isFieldsInBody(), ctrl.patchById)

module.exports = router;
