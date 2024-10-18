import {Outlet} from "react-router-dom";
import useAuthenticate from "@/hooks/useAuthenticate.tsx";
import HeaderAdmin from "@/components/Header/HeaderAdmin.tsx";
import SideBar from "@/components/Header/SideBar.tsx";

const AdminRoute = () => {
    const { isLoading, error } = useAuthenticate();
    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
        <div>
            <HeaderAdmin/>
            <SideBar/>
            <Outlet/>
        </div>
    );
};

export default AdminRoute;