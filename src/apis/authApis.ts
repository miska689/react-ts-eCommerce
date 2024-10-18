import axiosClient from "@/apis/axiosClient.ts";

const authApis = {
	register: (data: IAuthPayload) => {
		const url = "auth/register";
		return axiosClient.post(url, data)
	},
	getMe: () => {
		const url = "users/me";
		return axiosClient.get<unknown, IUserData>(url);
	},
	login: (data: ILoginPayload) => {
		const url = "auth/login";
		return axiosClient.post(url, data)
	},
	logout: () => {
		const url = "auth/logout";
		return axiosClient.post(url)
	},
}

export default authApis;