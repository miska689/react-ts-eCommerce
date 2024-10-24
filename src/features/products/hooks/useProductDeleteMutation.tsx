import { toast } from "@/redux/toast/toast.action";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useDispatch} from "react-redux";
import productsApis from "@/apis/productsApis.ts";

const UseProductDeleteMutation = (handleCloseModal: () => void) => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: productsApis.deleteProduct,
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
	})
};

export default UseProductDeleteMutation;