const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/user");

const { validateBody, authenticate } = require("../../middlewares");
const { authSchema } = require("../../service/schemas");

router.post("/register", validateBody(authSchema), ctrl.register);

router.post("/login", validateBody(authSchema), ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.post("/current", authenticate, ctrl.current);  

module.exports = router;
