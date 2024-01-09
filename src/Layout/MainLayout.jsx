import { Outlet } from "react-router-dom";
import Profile from "../Page/Profile/Profile";
import Navbar from "../Components/Navbar/Navbar";
import SingleNavBars from "../Components/SingleNavbars/SingleNavBars";
import Footer from "../Components/Footer/Footer";
import MessengerCustomerChat from 'react-messenger-customer-chat';


const MainLayout = () => {

    return (
        <div className="bg-BG1 bg-fixed bg-cover dark:bg-BG2 transition-all duration-300 bg-center  bg-no-repeat relative text-darkbg dark:text-whiteColor">
            
            <MessengerCustomerChat
                pageId="104235124306928"
                appId="3393646384189482"
            />

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
                    <Footer></Footer>
                </div>
            </div>

        </div>
    );
};

export default MainLayout;


