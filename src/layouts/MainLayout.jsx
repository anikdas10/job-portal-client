import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="container">
            <h2>Main layout</h2>
            <Outlet/>
        </div>
    );
};

export default MainLayout;