const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers/user");
const multer = require("multer");
const path = require("path");

const uploadPath = path.join(__dirname, "../", "../", "temp");

const multerConfig = multer.diskStorage({
    destination: uploadPath,
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: multerConfig });

const { validateBody, authenticate, isFileAttached } = require("../../middlewares");
const { authSchema, subscriptionSchema } = require("../../service/schemas");

router.get('/verify/:verificationToken', ctrl.verifyUser);

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

router.patch(
    "/avatars",
    authenticate,
    upload.single("avatar"),
    isFileAttached,
    ctrl.updateAvatar
);

module.exports = router;
