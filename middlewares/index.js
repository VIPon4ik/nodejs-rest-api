const { isContactWithIdExist } = require("./isContactWithIdExist");
const { isFieldsInBody } = require("./isFieldsInBody");
const { validateBody } = require("./validateBody");
const { isValidId } = require('./isValidId');

module.exports = { validateBody, isContactWithIdExist, isFieldsInBody, isValidId };
