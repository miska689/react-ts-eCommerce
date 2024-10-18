import axiosClient from "@/apis/axiosClient.ts";
import {ICategoryFormInput} from "@/features/category/interfaces/categoryForm.ts";

const categoryApis = {
	getAll: () => {
		const url = '/categories';
		return axiosClient.get<unknown, IBackendResponse<ICategoriesResponse[]>>(url);
	},
	create: (data: ICategoryFormInput) => {
		const url = '/categories';
		return axiosClient.post<unknown, IBackendResponse<ICategoriesResponse>>(url, data);
	},
	delete: (id: number) => {
		const url = `/categories/${id}`;
		return axiosClient.delete<unknown, IBackendResponse<unknown>>(url);
	}
}

export default categoryApis;