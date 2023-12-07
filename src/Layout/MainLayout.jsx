import { Outlet } from "react-router-dom";
import Profile from "../Page/Profile/Profile";
import Navbar from "../Components/Navbar/Navbar";
import SingleNavBars from "../Components/SingleNavbars/SingleNavBars";


const MainLayout = () => {
   
    return (
        <div className="bg-BG1 dark:bg-BG2 transition-all duration-300 bg-center bg-cover bg-no-repeat relative text-darkbg dark:text-whiteColor">

            {/* 1ST NAV BARR LOGO AND DARK MOODE HANDELAER */}
            <SingleNavBars></SingleNavBars>

            <div className="container grid  grid-cols-12 gap-4 lg:gap-8 2xl:gap-10">

                {/* LEFT SIDE PART  */}
                <div className="left col-span-12  lg:col-span-4  sticky">
                    <Profile></Profile>
                </div>

                {/* RIGHT SIDE PART  */}
                <div className="right col-span-12 lg:col-span-8 mt-[30px] lg:mt-[120px] mb-0">
                    
                    {/* MAIN NAVBAR  */}
                    <Navbar></Navbar>

                    {/* ALL CHILDREAN  */}
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;


