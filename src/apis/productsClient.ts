import axiosClient from "@/apis/axiosClient.ts";

const productsClient = {
    getAllProducts: () => {
        const url = 'products';
        return axiosClient(url);
    }
}

export default productsClient;