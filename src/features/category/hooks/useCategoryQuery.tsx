import {useQuery} from "@tanstack/react-query";
import categoryApis from "@/apis/categoryApis.ts";

const UseCategoryQuery = () => {
	const initialState: IBackendResponse<ICategoriesResponse[]> = {
		message: '',
		data: []
	};

	const {
		data = initialState,
		isLoading,
		error
	} = useQuery({
		queryKey: ['category'],
		queryFn: categoryApis.getAll
	})

	return { data, isLoading, error };
};

export default UseCategoryQuery;