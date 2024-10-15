import {Outlet} from "react-router-dom";
import useAuthenticate from "@/hooks/useAuthenticate.tsx";

const AdminRoute = () => {
    const { isLoading, error } = useAuthenticate();

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default AdminRoute;