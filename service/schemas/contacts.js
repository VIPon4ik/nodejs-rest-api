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
        owner: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    },
    { versionKey: false, timestamps: true }
);

const Contact = model("contact", contact);

const contactsValidationSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
});

const favoriteValidationSchema = Joi.object({
    favorite: Joi.boolean().required(),
});

const contactsSchemas = {
    contactsValidationSchema,
    favoriteValidationSchema,
};

module.exports = {
    contactsSchemas,
    Contact,
};
