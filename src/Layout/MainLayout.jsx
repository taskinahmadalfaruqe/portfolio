import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className="common-bg h-[100vh] grid gap-5">
            <div>
            {/* bg-[#F3F6F6] */}
                <nav className="py-2 sm:py-5  dark:bg-black lg:py-[50px] lg:bg-transparent dark:lg:bg-transparent mb-10 bg-red-700">
                    <div className="container grid grid-cols-[1fr_1fr] justify-center items-center ">

                        <div className="logo">
                            <a href="index.html">logo</a>
                        </div>

                        <div className=" text-right flex justify-end">
                            <div className=" flex gap-3">
                                <div className="darkmode icon w-9 h-9 lg:w-12 lg:h-12 rounded-full bg-[#fff] hover:bg-[#ef4060] transition-all duration-300 flex justify-center items-center flex-wrap cursor-pointer">
                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl lg:text-3xl dark-mode-dark hidden fill-jacarta-700 group-hover:fill-white group-focus:fill-white dark:block dark:fill-white " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>

                                    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-2xl lg:text-3xl dark-mode-light dark:hidden" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                                </div>
                                <div className="bar w-9 h-9 rounded-full bg-[#ef4060] flex justify-center items-center cursor-pointer lg:hidden">
                                    <i className="fa-solid fa-bars"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
            <div className="grid-cols-4">
                hello
            </div>
            <div className="grid-cols-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;