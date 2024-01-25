const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/user");
const multer = require("multer");
const path = require("path");

const uploadPath = path.join(__dirname, "temp");

const upload = multer({ dest: uploadPath });

const { validateBody, authenticate } = require("../../middlewares");
const { authSchema, subscriptionSchema } = require("../../service/schemas");

router.post("/register", validateBody(authSchema), ctrl.register);

router.post("/login", validateBody(authSchema), ctrl.login);

router.post("/logout", authenticate, ctrl.logout);

router.get("/current", authenticate, ctrl.current);

router.patch(
    "/",
    authenticate,
    validateBody(subscriptionSchema),
    ctrl.updateSubscripiton
);

router.patch("/avatars", authenticate, upload.single('avatar'), ctrl.updateAvatar);

module.exports = router;
