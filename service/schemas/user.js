const { Schema, model } = require("mongoose");
const Joi = require('joi');
const { mongooseErrorHandler } = require("../../helpers");

const userSchema = new Schema({
    password: {
        type: String,
        required: [true, "Set password for user"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
    },
    token: String,
}, { versionKey: false, timestamps: true });

const authSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
})

userSchema.post('save', mongooseErrorHandler);

const User = model('user', userSchema);


module.exports = {
  User,
  authSchema
}
