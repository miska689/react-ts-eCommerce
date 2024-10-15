import {Outlet} from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import useAuthenticate from "@/hooks/useAuthenticate.tsx";

const UserRoutes = () => {
    const { isLoading, error } = useAuthenticate();

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default UserRoutes;