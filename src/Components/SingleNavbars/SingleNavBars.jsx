import { useEffect, useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import logo from '/logo.webp'
import pic from '/MYPIC.png'
import { NavLink } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { FiFileText } from "react-icons/fi";
import { SiBloglovin } from "react-icons/si";
import { RiContactsLine } from "react-icons/ri";


const html = document.documentElement

const SingleNavBars = () => {
    const [isDark, setIsDark] = useState('light');
    const [isOpen, setIsOpen] = useState(false);

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

    const isBarClicked = () => {
        setIsOpen(!isOpen)
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
                            onClick={isBarClicked}
                            className="bar w-9 h-9 rounded-full bg-primaryColor flex justify-center items-center cursor-pointer lg:hidden text-whiteColor">
                            <FaBars></FaBars>
                        </div>
                        {
                            isOpen ?
                                <div className="bg-whiteColor dark:bg-darkbg rounded-xl min-h-[70vh] w-[70vw] md:w-[50vw] absolute top-14 right-2 md:top-20 md:right-5 z-[1222222] text-white lg:hidden p-2 flex flex-col gap-5 border border-primaryColor">

                                    <NavLink
                                        onClick={() => setIsOpen(!isOpen)}
                                        to={'/'}
                                        className={({ isActive }) => isActive ?
                                            'bg-common-bg flex justify-center items-center gap-2  w-full p-5 rounded-xl text-whiteColor font-semibold transition-all duration-500'
                                            :
                                            'w-full bg-lightbg dark:bg-lightdarkbg dark:text-white hover:bg-common-bg transition-all duration-500 cursor-pointer flex  justify-center items-center p-5 rounded-xl hover:text-whiteColor font-semibold text-darkbg gap-2'}>
                                        <FaHome className="transition-all duration-150"></FaHome>
                                        <span className="transition-all duration-150">Home</span>
                                    </NavLink>
                                    <NavLink
                                        onClick={() => setIsOpen(!isOpen)}
                                        to={'/resume'}
                                        className={({ isActive }) => isActive ?
                                            'bg-common-bg flex justify-center items-center gap-2  w-full p-5 rounded-xl text-whiteColor font-semibold transition-all duration-500'
                                            :
                                            'w-full bg-lightbg dark:bg-lightdarkbg dark:text-white hover:bg-common-bg transition-all duration-500 cursor-pointer flex  justify-center items-center p-5 rounded-xl hover:text-whiteColor font-semibold text-darkbg gap-2'}>
                                        <FiFileText className="transition-all duration-150"></FiFileText>
                                        <span className="transition-all duration-150">Resume</span>
                                    </NavLink>


                                    <NavLink
                                        onClick={() => setIsOpen(!isOpen)}
                                        to={'/project'}
                                        className={({ isActive }) => isActive ?
                                            'bg-common-bg flex justify-center items-center gap-2  w-full p-5 rounded-xl text-whiteColor font-semibold transition-all duration-500'
                                            :
                                            'w-full bg-lightbg dark:bg-lightdarkbg dark:text-white hover:bg-common-bg transition-all duration-500 cursor-pointer flex  justify-center items-center p-5 rounded-xl hover:text-whiteColor font-semibold text-darkbg gap-2'}>
                                        <GrProjects className="transition-all duration-150"></GrProjects>
                                        <span className="transition-all duration-150">Projects</span>
                                    </NavLink>


                                    <NavLink
                                        onClick={() => setIsOpen(!isOpen)}
                                        to={'/blogs'}
                                        className={({ isActive }) => isActive ?
                                            'bg-common-bg flex justify-center items-center gap-2  w-full p-5 rounded-xl text-whiteColor font-semibold transition-all duration-500'
                                            :
                                            'w-full bg-lightbg dark:bg-lightdarkbg dark:text-white hover:bg-common-bg transition-all duration-500 cursor-pointer flex  justify-center items-center p-5 rounded-xl hover:text-whiteColor font-semibold text-darkbg gap-2'}>
                                        <SiBloglovin className="transition-all duration-150"></SiBloglovin>
                                        <span className="transition-all duration-150">Blogs</span>
                                    </NavLink>


                                    <NavLink
                                        onClick={() => setIsOpen(!isOpen)}
                                        to={'/contact'}
                                        className={({ isActive }) => isActive ?
                                            'bg-common-bg flex justify-center items-center gap-2  w-full p-5 rounded-xl text-whiteColor font-semibold transition-all duration-500'
                                            :
                                            'w-full bg-lightbg dark:bg-lightdarkbg dark:text-white hover:bg-common-bg transition-all duration-500 cursor-pointer flex  justify-center items-center p-5 rounded-xl hover:text-whiteColor font-semibold text-darkbg gap-2'}>
                                        <RiContactsLine className="transition-all duration-150"></RiContactsLine>
                                        <span className="transition-all duration-150">Contact</span>
                                    </NavLink>
                                </div>
                                :
                                ''
                        }
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default SingleNavBars;