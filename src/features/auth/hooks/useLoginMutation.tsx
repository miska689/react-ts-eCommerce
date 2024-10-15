import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import AuthApis from "@/apis/authApis.ts";
import {useMutation} from "@tanstack/react-query";
import {setUser} from "@/redux/user/user.slice.ts";
import {toast} from "@/redux/toast/toast.action.ts";
import {AxiosError} from "axios";

const useLoginMutation = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();

	return useMutation({
		mutationFn: (authData: ILoginPayload) => {
			return AuthApis.login(authData)
		},
		onSuccess: async () => {
			const resData = await AuthApis.getMe();

			dispatch(setUser({
				firstName: resData.firstName,
				lastName: resData.lastName,
				email: resData.email,
				avatar: resData.avatar,
				role: resData.role,
				isAuthenticated: true
			}));

			dispatch(toast.success("You are logged in successfully!"));

			navigation('/products')
		},
		onError: (error: AxiosError<unknown, IErrorResponse>) => {
			dispatch(toast.error(error.message));
		},
	});
}

export default useLoginMutation;