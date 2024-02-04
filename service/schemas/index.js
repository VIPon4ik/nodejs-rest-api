const {
    contactsSchemas,
    Contact,
} = require("./contacts");

const {
    authSchema,
    subscriptionSchema,
    emailSchema,
    User
} = require('./user')

module.exports = { contactsSchemas, authSchema, subscriptionSchema, emailSchema, Contact, User };
