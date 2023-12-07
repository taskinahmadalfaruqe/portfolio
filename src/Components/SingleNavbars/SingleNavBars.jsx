import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import logo from '/logo.webp'
import pic from '/MYPIC.png'


const html = document.documentElement

const SingleNavBars = () => {
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
        <nav className="py-2 sm:py-5   lg:py-[30px] lg:bg-transparent dark:lg:bg-transparent mb-10">
            <div className="container grid grid-cols-[1fr_1fr] justify-center items-center ">

                <div className="logo flex justify-start items-center">
                    <img src={logo} alt="SiteLogo" className=" w-28 md:w-36" />
                </div>

                <div className=" text-right flex justify-end">
                    <div className=" flex gap-5 border border-primaryColor p-1 px-3 rounded-[30px]">

                        <div className=" hidden w-12 h-12 rounded-full overflow-hidden border border-primaryColor pt-2 bg-common-bg lg:flex justify-center items-center">
                            <img src={pic} alt="Picture Image" />
                        </div>
                        <div
                            onClick={isDarkClled}
                            className="w-9 h-9 lg:w-12 lg:h-12 lg:border border-primaryColor rounded-full lg:bg-whiteColor lg:hover:bg-common-bg transition-all duration-300 flex justify-center  font-bold items-center cursor-pointer text-3xl text-primaryColor hover:text-whiteColor">
                            {
                                isDark === 'light' ? <MdDarkMode ></MdDarkMode> : <MdLightMode></MdLightMode>
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
    );
};

export default SingleNavBars;