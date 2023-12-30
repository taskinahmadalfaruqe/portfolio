import { Link } from "react-router-dom";
import pic from "/MYPIC.png"
import { MdEmail, MdDateRange, MdOutlineDownload, MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt, FaFacebookF, FaGithub, FaLinkedinIn, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Profile = () => {
    return (
        <div
            className="rounded-3xl lg:rounded-t-3xl mt-[120px] bg-white dark:bg-[#111111] lg:px-1 xl:px-2.5 lg:sticky lg:top-[130px] ">
            <div
                className=" mb-5 h-[200px] w-[200px] xl:w-60 xl:h-60  m-auto -translate-y-[120px] rounded-2xl overflow-hidden bg-common-bg">
                <img src={pic} alt="profilePic" />
            </div>

            <div className="text-center -mt-[120px]">
                <h1 className="mt-3 mb-3 lg:mt-6 lg:mb-6 text-3xl xl:text-4xl font-semibold dark:text-[#fff]">
                    Taskin Ahmad Al Faruqe</h1>
                <h3
                    className="mt-0 mb-5 lg:mt-0 lg:mb-6 px-3 py-2 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] rounded-lg dark:text-[#A6A6A6] ">
                    Web Developer</h3>
            </div>

            <div className="socialicon mb-5 lg:mb-10">
                <div className=" flex justify-center items-center gap-2 xl:gap-4">
                    <div className=" ">
                        <Link
                            target='_blank'
                            to={"https://www.facebook.com/taskinahmadalfaruqe"}
                            className="text-[#3b5998] text-2xl flex justify-center items-center w-9 h-9 xl:w-12 xl:h-12 rounded-md bg-lightbg p-2.5 hover:bg-common-bg hover:text-[#fff] transition-all duration-300 bg-light dark:bg-lightdarkbg">
                            <FaFacebookF></FaFacebookF>
                        </Link>
                    </div>
                    <div className=" ">
                        <Link
                            target='_blank'
                            to={''}
                            className="text-[#1773EA] text-2xl flex justify-center items-center w-9 h-9 xl:w-12 xl:h-12 rounded-md bg-lightbg p-2.5 hover:bg-common-bg hover:text-[#fff] transition-all duration-300 bg-light dark:bg-lightdarkbg">
                            <FaXTwitter></FaXTwitter>
                        </Link>
                    </div>
                    <div className=" ">
                        <Link
                            target='_blank'
                            to={"https://github.com/taskinahmadalfaruqe"}
                            className="text-darkbg dark:text-whiteColor text-2xl flex justify-center items-center w-9 h-9 xl:w-12 xl:h-12 rounded-md bg-lightbg p-2.5 hover:bg-common-bg hover:text-[#fff] transition-all duration-300 bg-light dark:bg-lightdarkbg">
                            <FaGithub></FaGithub>
                        </Link>
                    </div>
                    <div className=" ">
                        <Link
                            target='_blank'
                            to={"https://www.linkedin.com/in/taskin-ahmad-al-faruqe-a53a96288"}
                            className="text-[#0e76a8] text-2xl flex justify-center items-center w-9 h-9 xl:w-12 xl:h-12 rounded-md bg-lightbg  p-2.5 hover:bg-common-bg hover:text-[#fff] transition-all duration-300 bg-light dark:bg-lightdarkbg">
                            <FaLinkedinIn></FaLinkedinIn>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-lightbg dark:bg-lightdarkbg rounded-2xl p-1 xl:p-4 w-[90%] mx-auto mb-10">
                <div>
                    <div
                        className="flex items-center gap-2 xl:gap-5 p-1.5 xl:p-2.5 mb-2.5 xl:mb-5 w-full relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#E3E3E3] dark:after:bg-[#3D3A3A]">
                        <div
                            className="  flex justify-center items-center h-9 w-9 xl:w-11 xl:h-11 text-xl rounded-md hover:bg-common-bg hover:text-white bg-white dark:bg-black text-[#E93B81] shadow-md transition-all duration-300">
                            <FaPhoneAlt></FaPhoneAlt>
                        </div>
                        <div className="flex justify-center items-start flex-col">
                            <span className="text-[#44566C] dark:text-[#A6A6A6] text-xl">Phone</span>
                            <p className="dark:text-white">
                                <Link to="tel:+8801318021256"
                                    className="hover:text-[#FA5252] text-lg xl:text-[20px] transition-all duration-500">+8801318021256</Link>
                            </p>
                        </div>
                    </div>

                    <div
                        className="flex items-center gap-2 xl:gap-5 p-1.5 lg:p-2.5 mb-2.5 xl:mb-5 w-full relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#E3E3E3] dark:after:bg-[#3D3A3A]">
                        <div
                            className="  flex justify-center items-center h-9 w-9 xl:w-11 xl:h-11 text-xl rounded-md hover:bg-common-bg hover:text-white bg-white dark:bg-black text-[#6AB5B9] shadow-md transition-all duration-300">
                            <MdOutlineLocationOn></MdOutlineLocationOn>
                        </div>
                        <div className="flex justify-center items-start flex-col">
                            <span className="text-[#44566C] dark:text-[#A6A6A6] text-xl">Location</span>
                            <p className="dark:text-white">
                                <span className=" text-lg xl:text-[20px] ">Dhaka, Bangladesh</span>
                            </p>
                        </div>
                    </div>

                    <div
                        className="flex items-center gap-2 xl:gap-5 p-1.5 lg:p-2.5 mb-2.5 xl:mb-5 w-full relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#E3E3E3] dark:after:bg-[#3D3A3A]">
                        <div
                            className="  flex justify-center items-center min-w-[36px] h-9 xl:w-11 xl:h-11 text-2xl rounded-md hover:bg-common-bg hover:text-white bg-white dark:bg-black text-[#E93B81] shadow-md transition-all duration-300">
                            <MdEmail></MdEmail>
                        </div>
                        <div className="flex justify-center items-start flex-col">
                            <span className="text-[#44566C] dark:text-[#A6A6A6] text-xl">E-mail</span>
                            <p className="dark:text-white">
                                <Link to="mailto:taskinahmadalfaruqe@gmail.com"
                                    className="hover:text-[#FA5252] text-[14px] xl:-[16px] 2xl:text-[20px] transition-all duration-500">taskinahmadalfaruqe@gmail.com</Link>
                            </p>
                        </div>
                    </div>
                    <div
                        className="flex items-center gap-2 xl:gap-5 p-1.5 lg:p-2.5 mb-2.5 xl:mb-5 w-full relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#E3E3E3] dark:after:bg-[#3D3A3A]">
                        <div
                            className="  flex justify-center items-center h-9 w-9 xl:w-11 xl:h-11 text-xl rounded-md hover:bg-common-bg hover:text-white bg-white dark:bg-black text-[#C17CEB] shadow-md transition-all duration-300">
                            <MdDateRange ></MdDateRange>
                        </div>
                        <div className="flex justify-center items-start flex-col">
                            <span className="text-[#44566C] dark:text-[#A6A6A6] text-xl">Birthday</span>
                            <p className="dark:text-white">
                                <a className=" text-lg xl:text-[20px]">October 13, 2001</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button>
                    <Link
                        target='_blank'
                        to="https://drive.google.com/file/d/1F5WfBZfBOJtdtiVS_tWwSz2ImZ-saSyD/view?usp=drive_link"
                        className="flex justify-center items-center gap-3 w-auto py-3 px-10 rounded-[35px] text-whiteColor text-2xl font-bold mb-5 hover:bg-common-bg bg-common-bg-hover transition-all duration-200"
                    >
                        <MdOutlineDownload />
                        <span>Download CV</span>
                    </Link>
                </button>
            </div>

        </div>
    );
};

export default Profile;