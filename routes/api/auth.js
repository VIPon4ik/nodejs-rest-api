const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/auth')

const { validateBody } = require('../../middlewares');
const { authSchemas } = require('../../service/schemas');

router.post('/register', validateBody(authSchemas.registerSchema), ctrl.register)

module.exports = router;