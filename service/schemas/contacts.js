const Joi = require("joi");
const { Schema, model } = require("mongoose");

const contact = new Schema({
    name: {
        type: String,
        required: [true, "Set name for contact"],
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
});

const Contact = model("contact", contact);

const contactsValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
});

module.exports = {
    contactsValidationSchema,
    Contact,
};
