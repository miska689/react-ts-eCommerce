import {useQuery} from "@tanstack/react-query";
import productsApis from "@/apis/productsApis.ts";

const UseProductQuery = () => {
	const initialState: IProductResponse = {
		message: '',
		totalCount: 0,
		data: []
	};

	const {
		data = initialState,
		isLoading,
		error
	} = useQuery({
		queryKey: ['product'],
		queryFn: productsApis.getAllProducts
	})

	return { data, isLoading, error };
};

export default UseProductQuery;