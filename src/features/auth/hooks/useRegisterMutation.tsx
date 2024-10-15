import {useMutation} from "@tanstack/react-query";
import AuthApis from "@/apis/authApis.ts";
import {setUser} from "@/redux/user/user.slice.ts";
import {toast} from "@/redux/toast/toast.action.ts";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";

const UseRegisterMutation = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();

	return useMutation({
		mutationFn: (authData: IAuthPayload) => {
			return AuthApis.register(authData)
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

			dispatch(toast.success("You are registered successfully!"));

			navigation('/products')
		},
		onError: (error: AxiosError<unknown, IErrorResponse>) => {
			dispatch(toast.error(error.message));
		},
	});
};

export default UseRegisterMutation;
