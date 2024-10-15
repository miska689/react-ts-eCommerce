import {Outlet} from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setUser} from "@/redux/user/user.slice.ts";
import useGetMeQuery from "@/hooks/useGetMeQuery.tsx";

const UserRoutes = () => {
    const { isLoading, data } = useGetMeQuery();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setUser({
                firstName: data?.firstName,
                lastName: data?.lastName,
                email: data?.email,
                avatar: data?.avatar,
                role: data?.role
            })
        )
    }, [dispatch, data]);



    if (isLoading) return <p>Loading...</p>

    console.log(data);

    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default UserRoutes;