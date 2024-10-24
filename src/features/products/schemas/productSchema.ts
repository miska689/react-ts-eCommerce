import * as yup from 'yup';

export const productSchema = yup.object({
	name: yup.string().required(),
	price: yup.number().required(),
	quantity: yup.number().required(),
	shortDescription: yup.string().required(),
	longDescription: yup.string().required(),
	categoryId: yup.number().required(),
	main_image: yup.mixed().required(),
}).required();