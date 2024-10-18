import useGetMeQuery from "@/hooks/useGetMeQuery.tsx";
import {useAppSelector} from "@/redux/hook.ts";
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {deleteUser, setUser} from "@/redux/user/user.slice.ts";

const UseAuthenticate = () => {
	const { isLoading, data, error } = useGetMeQuery();
	const { isAuthenticated, user } = useAppSelector(state => state.user);

	const dispatch = useDispatch();
	const navigation = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (data && !isAuthenticated) {
			dispatch(
				setUser({
					firstName: data.firstName,
					lastName: data.lastName,
					email: data.email,
					avatar: data.avatar,
					role: data.role,
					isAuthenticated: true
				})
			);
		}
	}, [isAuthenticated, dispatch, data]);

	useEffect(() => {
		if(!isLoading && !isAuthenticated && !data) {
			navigation('/sign-in', { replace: true });
		}
	}, [isLoading, isAuthenticated, navigation, data]);

	useEffect(() => {
		if (
			location.pathname === '/admin' &&
			data &&
			user &&
			user.role !== 'ADMIN' &&
			isAuthenticated
		) {
			navigation('/')
		}
	}, [location, navigation, data, user, isAuthenticated])

	useEffect(() => {
		if (error) {
			dispatch(deleteUser())
		}
	}, [error, dispatch]);

	return { isLoading, error };
};

export default UseAuthenticate;