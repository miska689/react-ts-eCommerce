import axiosClient from "@/apis/axiosClient.ts";

const authApis = {
	register: (data: IAuthPayload) => {
		const url = "auth/register";
		return axiosClient.post(url, data)
	},
	getMe: () => {
		const url = "users/me";
		return axiosClient.get<unknown, IUserData>(url);
	}
}

export default authApis;