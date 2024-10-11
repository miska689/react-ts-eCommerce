import {Outlet} from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";

const UserRoutes = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default UserRoutes;