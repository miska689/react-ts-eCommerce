/// <reference types="vite/client" />

interface IAuthPayload {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	avatar: string;
}

interface ILoginPayload {
	email: string;
	password: string;
}

interface IUserData {
	email: string;
	firstName: string;
	lastName: string;
	avatar: string;
	role: 'USER' | 'ADMIN' | '';
}

interface IErrorResponse {
	message: string
	status: string
	statusCode: number
}

interface IBackendResponse<BackendDataType> {
	message: string
	data?: BackendDataType
}

interface ICategoriesResponse {
	id: number
	name: string
	icon: string
	status: boolean
}

interface IProductBody {
	id: number
	name: string
	longDescription: string
	shortDescription: string
	quantity: number
	price: number
	categoryId: number
	main_image: string | File | null
	createdAt: string
	updatedAt: string
	status: boolean
	shopId: number
}

interface IProductPayload {
	name: string
	longDescription: string
	shortDescription: string
	quantity: number
	price: number
	categoryId: number
	main_image: AnyPresentValue
}

interface IProductResponse extends IBackendResponse<IProductBody[]> {
	totalCount: number
}