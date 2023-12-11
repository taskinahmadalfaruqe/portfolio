
const ProjectPage = () => {
    return (
        <div className=" p-2 pb-0 lg:p-7 lg:pb-0 bg-whiteColor rounded-t-xl dark:bg-darkbg">
            <h2
                className="text-4xl font-bold mb-3 lg:mb-6 dark:text-white relative after:content-[''] after:absolute md:after:w-[200px] after:h-[4px] after:bg-common-bg after:top-[50%] after:left-[38%] after:lg:left-[250px] after:-translate-x-[50%]">
                Projects</h2>
            <ul className="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
                <li className="text-[#FA5252] mr-4 md:mx-4">All</li>
                <li className="fillter-btn mr-4 md:mx-4">Video</li>
                <li className="fillter-btn mr-4 md:mx-4">Web Design</li>
                <li className="fillter-btn ml-0 mr-4 md:mx-4">Logo</li>
                <li className="fillter-btn  ">Graphic Design</li>
            </ul>
            <div className="items flex gap-5">
                <div className="flex justify-center items-center h-[100vh] w-[100%] text-4xl text-pink-700">
                    <h2>This Page Is Under Development</h2>
                </div>
                {/* <div className="left_items">
                    <div
                        className="item bg-[#fff0f0] dark:bg-lightdarkbg rounded-lg p-6 dark:border-[2px] border-[#212425] flex flex-col">
                        <div className="image">
                            <img src="d" alt="d" />
                        </div>
                        <div className="text">
                            <p
                                className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6] mb-4">
                                Web Development
                            </p>
                            <h3>
                                <a href="#"
                                    className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                    Haven
                                    </a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="right_items">
                    <div
                        className="item bg-[#fff0f0] dark:bg-lightdarkbg rounded-lg p-6 dark:border-[2px] border-[#212425] flex flex-col">
                        <div className="image">
                            <img src="Image/work01.webp" alt="Image" className="rounded-sm" />
                        </div>
                        <div className="text">
                            <p
                                className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6] mb-4">
                                MERN
                            </p>
                            <h3>
                                <a href="#"
                                    className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2">
                                        Study Hub
                                    </a>
                            </h3>
                        </div>

                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ProjectPage;