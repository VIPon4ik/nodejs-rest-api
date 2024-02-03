const { isContactWithIdExist } = require("./isContactWithIdExist");
const { validateBody } = require("./validateBody");
const { isValidId } = require('./isValidId');
const { authenticate } = require("./authenticate");
const { isOwnerCurrentUser } = require('./isOwnerCurrentUser');
const { isFileAttached } = require('./isFileAttached')

module.exports = { validateBody, isContactWithIdExist, isValidId, authenticate, isOwnerCurrentUser, isFileAttached };
