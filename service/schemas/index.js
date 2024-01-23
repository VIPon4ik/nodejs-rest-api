const {
    contactsSchemas,
    Contact,
} = require("./contacts");

const {
    authSchema,
    User
} = require('./user')

module.exports = { contactsSchemas, authSchema, Contact, User };
