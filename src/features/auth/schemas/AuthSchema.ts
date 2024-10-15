import * as yup from "yup"

const signUpSchema = yup.object({
    firstName: yup.string().min(2).required(),
    lastName: yup.string().min(2).required(),
    email: yup.string().email().required(),
    password: yup.string().min(2).required(),
}).required()

const signInSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(2).required(),
}).required()


export {
    signUpSchema,
    signInSchema
}