import Joi from 'joi';

export const ValidUser =(payload)=>{
    const userSchema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
        role: Joi.string().valid('admin', 'user').required()
    });

    checkValidation(userSchema,payload)
}


export const checkValidation = (validate,payload) => {
    const { error, value } = validate.validate(payload);

    if (error) {
        console.error( error.details[0].message);
        return  error.details[0].message
    } else {
        console.log('Valid User Input:', value);
    }
}