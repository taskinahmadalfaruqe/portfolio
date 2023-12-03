import { Outlet } from "react-router-dom";
import Profile from "../Page/Profile/Profile";
import { FaBars } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useState } from "react";
import { useEffect } from "react";

const html = document.documentElement


const MainLayout = () => {
    const [isDark, setIsDark] = useState('light');

    useEffect(() => {
        const setMood = localStorage.getItem('mood');
        html.classList.add(setMood || 'light')
        setIsDark(setMood || 'light')
    }, [])

    const isDarkClled = () => {

        if (isDark === 'light') {
            html.classList.remove('light')
            html.classList.add('dark')
            localStorage.setItem('mood', 'dark')
            setIsDark('dark')

        } else {
           html.classList.remove('dark');
           html.classList.add('light')
           localStorage.setItem('mood', 'light')
           setIsDark('light')
        }
    }
   
    return (
        <div className="bg-BG1 dark:bg-BG2 dark:text-red-400 w-[100vw] h-[100vh] transition-all duration-300 bg-center bg-cover bg-no-repeat font-popins">

            <nav className="py-2 sm:py-5 bg-[#F3F6F6] dark:bg-black lg:py-[50px] lg:bg-transparent dark:lg:bg-transparent mb-10">
                <div className="container grid grid-cols-[1fr_1fr] justify-center items-center ">

                    <div className="logo">
                        logo
                    </div>

                    <div className=" text-right flex justify-end">
                        <div className=" flex gap-3">
                            <div
                                onClick={isDarkClled}
                                className="w-9 h-9 lg:w-12 lg:h-12 rounded-full bg-whiteColor hover:bg-primaryColor transition-all duration-300 flex justify-center  font-bold items-center cursor-pointer text-3xl text-primaryColor hover:text-whiteColor">
                                {
                                    isDark === 'light' ? <MdDarkMode ></MdDarkMode> : <CiLight></CiLight>
                                }


                            </div>

                            <div
                                className="bar w-9 h-9 rounded-full bg-primaryColor flex justify-center items-center cursor-pointer lg:hidden text-whiteColor">
                                <FaBars></FaBars>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>

            <Profile></Profile>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;


