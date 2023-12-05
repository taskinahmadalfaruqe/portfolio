
import { FaHome } from "react-icons/fa";
import { FiFileText } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { GrProjects } from "react-icons/gr";
import { SiBloglovin } from "react-icons/si";
import { RiContactsLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <div
            className=" main_menu lg:w-[526px]   h-[144px] p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111] hidden lg:flex">
            <div className="flex gap-5 justify-end items-center ">
                <div className=" ">
                    <NavLink
                        to={'/'}
                        className={({ isActive }) => isActive ?
                            'bg-common-bg flex justify-center items-center gap-2 flex-col w-20 p-5 rounded-xl text-whiteColor font-semibold'
                            :
                            'w-20 bg-lightbg dark:bg-lightdarkbg dark:text-white hover:bg-common-bg transition-all duration-300 cursor-pointer flex flex-col justify-center items-center p-5 rounded-xl hover:text-whiteColor font-semibold text-darkbg gap-2'}>
                        <FaHome></FaHome>
                        <span>Home</span>
                    </NavLink>
                </div>
                <div className=" ">
                    <NavLink
                        to={'/resume'}
                        className={({ isActive }) => isActive ?
                            'bg-common-bg flex justify-center items-center gap-2 flex-col w-20 p-5 rounded-xl text-whiteColor font-semibold'
                            :
                            'w-20 bg-lightbg dark:bg-lightdarkbg dark:text-white hover:bg-common-bg transition-all duration-300 cursor-pointer flex flex-col justify-center items-center p-5 rounded-xl hover:text-whiteColor font-semibold text-darkbg gap-2'}>
                        <FiFileText></FiFileText>
                        <span>Resume</span>
                    </NavLink>
                </div>
                <div className=" ">
                    <NavLink
                        to={'/project'}
                        className={({ isActive }) => isActive ?
                            'bg-common-bg flex justify-center items-center gap-2 flex-col w-20 p-5 rounded-xl text-whiteColor font-semibold'
                            :
                            'w-20 bg-lightbg dark:bg-lightdarkbg dark:text-white hover:bg-common-bg transition-all duration-300 cursor-pointer flex flex-col justify-center items-center p-5 rounded-xl hover:text-whiteColor font-semibold text-darkbg gap-2'}>
                        <GrProjects></GrProjects>
                        <span>Projects</span>
                    </NavLink>
                </div>
                <div className=" ">
                    <NavLink
                        to={'/blogs'}
                        className={({ isActive }) => isActive ?
                            'bg-common-bg flex justify-center items-center gap-2 flex-col w-20 p-5 rounded-xl text-whiteColor font-semibold'
                            :
                            'w-20 bg-lightbg dark:bg-lightdarkbg dark:text-white hover:bg-common-bg transition-all duration-300 cursor-pointer flex flex-col justify-center items-center p-5 rounded-xl hover:text-whiteColor font-semibold text-darkbg gap-2'}>
                        <SiBloglovin></SiBloglovin>
                        <span>Blogs</span>
                    </NavLink>
                </div>
                <div className=" ">
                    <NavLink
                        to={'/contact'}
                        className={({ isActive }) => isActive ?
                            'bg-common-bg flex justify-center items-center gap-2 flex-col w-20 p-5 rounded-xl text-whiteColor font-semibold'
                            :
                            'w-20 bg-lightbg dark:bg-lightdarkbg dark:text-white hover:bg-common-bg transition-all duration-300 cursor-pointer flex flex-col justify-center items-center p-5 rounded-xl hover:text-whiteColor font-semibold text-darkbg gap-2'}>
                        <RiContactsLine></RiContactsLine>
                        <span>Contact</span>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;


