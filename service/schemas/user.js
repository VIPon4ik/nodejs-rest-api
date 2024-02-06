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
    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
    token: String,
    avatarURL: String,
}, { versionKey: false, timestamps: true });

const authSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
})

const subscriptionSchema = Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required(), 
})

const emailSchema = Joi.object({
  email: Joi.string().required(),
})

userSchema.post('save', mongooseErrorHandler);

const User = model('user', userSchema);


module.exports = {
  User,
  authSchema,
  subscriptionSchema,
  emailSchema
}
