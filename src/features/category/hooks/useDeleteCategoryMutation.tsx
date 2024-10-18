import categoryApis from "@/apis/categoryApis.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useDispatch} from "react-redux";
import {toast} from "@/redux/toast/toast.action.ts";

const UseDeleteCategoryMutation = () => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: categoryApis.delete,
		onSuccess: (data: IBackendResponse<unknown>) => {
			dispatch(toast.success(data.message))
			queryClient.invalidateQueries({ queryKey: ['category'] })
		},
		onError: (error) => {
			dispatch(toast.error("An error has occurred: "))
			console.log(error)
		}
	})
};

export default UseDeleteCategoryMutation;