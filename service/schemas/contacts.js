const Joi = require("joi");
const { Schema, model } = require("mongoose");

const contact = new Schema(
    {
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
    },
    { versionKey: false, timestamps: true }
);

const Contact = model("contact", contact);

const contactsValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string(),
    phone: Joi.string(),
});

const schemas = {
    contactsValidationSchema,
};

module.exports = {
    schemas,
    Contact,
};
