import axiosClient from "@/apis/axiosClient.ts";

const productsApis = {
    getAllProducts: () => {
        const url = 'products';
        return axiosClient(url);
    },
    createProduct: (data: IProductPayload | FormData) => {
        const url = 'products';
        return axiosClient.post<unknown, IProductResponse>(url, data);
    }
}

export default productsApis;