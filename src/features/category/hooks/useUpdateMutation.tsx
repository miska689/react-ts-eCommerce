import {useDispatch} from "react-redux";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import categoryApis from "@/apis/categoryApis.ts";
import {toast} from "@/redux/toast/toast.action.ts";
import { ICategoryUpdateInput } from "@/features/category/interfaces/categoryForm.ts";

const UseUpdateMutation = () => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: ({ id, data } : ICategoryUpdateInput) => categoryApis.update(id, data),
		onSuccess: (data) => {
			dispatch(toast.success(data.message))
			queryClient.invalidateQueries({ queryKey: ['category'] })
		},
		onError: (error) => {
			dispatch(toast.error("An error has occurred: "))
			console.log(error)
		}
	})
};

export default UseUpdateMutation;