import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";


const MainLayout = () => {
    return (
        <div className="container">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;