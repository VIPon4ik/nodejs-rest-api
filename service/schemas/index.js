const {
    contactsSchemas,
    Contact,
} = require("./contacts");

const {
    authSchema,
    subscriptionSchema,
    User
} = require('./user')

module.exports = { contactsSchemas, authSchema, subscriptionSchema, Contact, User };
