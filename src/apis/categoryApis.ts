import axiosClient from "@/apis/axiosClient.ts";

const categoryApis = {
	getAll: () => {
		const url = '/categories';
		return axiosClient.get<unknown, IBackendResponse<ICategoriesResponse[]>>(url);
	}
}

export default categoryApis;