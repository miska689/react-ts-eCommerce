import {useMutation, useQueryClient} from "@tanstack/react-query";
import productsApis from "@/apis/productsApis.ts";
import {useDispatch} from "react-redux";
import {toast} from "@/redux/toast/toast.action.ts";

const UseProductCreateMutation = (handleClose: () => void) => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: productsApis.createProduct,
		onSuccess: (data) => {
			console.log(data);
			handleClose();
			dispatch(toast.success(data.message));
			queryClient.invalidateQueries({ queryKey: ['product'] });
		},
		onError: (error) => {
			console.log(error);
			dispatch(toast.error("An error has occurred"));
		}
	});
};

export default UseProductCreateMutation;