import * as yup from 'yup';

const categorySchema = yup.object({
	name: yup.string().min(2).required(),
	icon: yup.string().min(2).required(),
}).required()

export { categorySchema }

