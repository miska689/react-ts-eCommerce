
import {useMutation} from "@tanstack/react-query";
import AuthApis from "@/apis/authApis.ts";
import {useDispatch} from "react-redux";
import {toast} from "@/redux/toast/toast.action.ts";
import {useNavigate} from "react-router-dom";

const UseLogoutMutation = () => {
	const dispatch = useDispatch();
	const navigation = useNavigate();

	return useMutation({
		mutationFn: AuthApis.logout,
		onSuccess: (data) => {
			console.log('Logout success', data);
			dispatch(toast.success("You are logged out successfully!"));
			navigation('/sign-in');
		},
		onError: (error) => {
			console.log('Logout failed', error)
		}
	})

};

export default UseLogoutMutation;