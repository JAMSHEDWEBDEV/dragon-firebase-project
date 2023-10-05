import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="px-3 font-poppins container mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;