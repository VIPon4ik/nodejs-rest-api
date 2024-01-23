const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/auth')

const { validateBody } = require('../../middlewares');
const { authSchema } = require('../../service/schemas');

router.post('/register', validateBody(authSchema), ctrl.register)

router.post('/login', validateBody(authSchema), ctrl.login)

module.exports = router;