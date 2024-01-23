const { isContactWithIdExist } = require("./isContactWithIdExist");
const { validateBody } = require("./validateBody");
const { isValidId } = require('./isValidId');
const { authenticate } = require("./authenticate");


module.exports = { validateBody, isContactWithIdExist, isValidId, authenticate };
