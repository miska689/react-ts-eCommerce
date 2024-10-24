import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useDispatch} from "react-redux";
import productsApis from "@/apis/productsApis.ts";
import {toast} from "@/redux/toast/toast.action.ts";

const UseProductUpdateMutation = (handleCloseModal: () => void) => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: productsApis.updateProduct,
		onSuccess: (data) => {
			console.log(data);
			handleCloseModal();
			dispatch(toast.success(data?.message));
			queryClient.invalidateQueries({ queryKey: ['product'] });
		},
		onError: (error) => {
			console.log(error);
			dispatch(toast.error("An error has occurred"));
		}
	});
};

export default UseProductUpdateMutation;