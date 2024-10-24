import axiosClient from "@/apis/axiosClient.ts";

const productsApis = {
    getAllProducts: () => {
        const url = 'products';
        return axiosClient(url);
    },
    createProduct: (data: IProductPayload | FormData) => {
        const url = 'products';
        return axiosClient.post<unknown, IProductResponse>(url, data);
    },
    deleteProduct: (id: number) => {
        const url = `products/${id}`;
        return axiosClient.delete<unknown, IBackendResponse<IProductBody>>(url);
    },
    updateProduct: ({ id, data } : { id: number, data: FormData | IProductPayload}) => {
        const url = `products/${id}`;
        return axiosClient.put<unknown, IBackendResponse<IProductBody>>(url, data);
    }
}

export default productsApis;