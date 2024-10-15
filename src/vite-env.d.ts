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
	role: string;
}

interface IErrorResponse {
	message: string
	status: string
	statusCode: number
}