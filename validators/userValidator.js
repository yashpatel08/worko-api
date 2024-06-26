const Joi = require("joi");

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().min(5).max(50).required(),
    age: Joi.number().integer().required(),
    city: Joi.string().required(),
    zipCode: Joi.string().required()
})

const idSchema = Joi.string().required;

module.exports = { userSchema, idSchema };