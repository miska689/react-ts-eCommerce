import {useMutation, useQueryClient} from "@tanstack/react-query";
import categoryApis from "@/apis/categoryApis.ts";
import {useDispatch} from "react-redux";
import {toast} from "@/redux/toast/toast.action.ts";

const UseCategoryMutation = () => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: categoryApis.create,
		onSuccess: (data: IBackendResponse<ICategoriesResponse>) => {
			dispatch(toast.success(data.message))
			queryClient.invalidateQueries({ queryKey: ['category'] })
		},
		onError: (error) => {
			dispatch(toast.error("An error has occurred: "))
			console.log(error)
		}
	})
};3

export default UseCategoryMutation;