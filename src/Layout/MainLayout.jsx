import { Outlet } from "react-router-dom";
import Profile from "../Page/Profile/Profile";

const MainLayout = () => {
    return (
        <div>
            <Profile></Profile>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;