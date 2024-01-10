const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");
const { validateBody, isContactWithIdExist } = require("../../middlewares");
const schema = require("../../schemas");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schema), ctrl.add);

router.delete("/:contactId", isContactWithIdExist, ctrl.deleteById);

router.put(
    "/:contactId",
    isContactWithIdExist,
    validateBody(schema),
    ctrl.updateById
);

module.exports = router;
