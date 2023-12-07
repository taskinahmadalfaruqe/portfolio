const ResumePage = () => {
    return (
        <div className=" resume bg-whiteColor rounded-xl dark:bg-darkbg">
            <div className=" p-3 pb-0 lg:p-7 lg:pb-0">
                <h2
                    className="text-4xl font-bold mb-3 lg:mb-6 dark:text-white relative after:content-[''] after:absolute md:after:w-[200px] after:h-[4px] after:bg-common-bg after:top-[50%] after:left-[38%] after:lg:left-[250px] after:-translate-x-[50%]">
                    Resume</h2>
                <div className="skill">
                    <div className="col-span-12 grid lg:grid-cols-2 gap-4">
                        <div className="Education">
                            <div className="headding flex items-center gap-3 mb-4">
                                <span className="text-4xl text-[#F95054]">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                        viewBox="0 0 24 24" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path
                                            d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z">
                                        </path>
                                    </svg>
                                </span>
                                <h4 className="text-4xl dark:text-white font-medium"> Education</h4>
                            </div>
                            <div className="items">
                                <div
                                    className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-[#fff4f4] dark:bg-transparent">
                                    <span
                                        className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2021-2023</span>
                                    <h3 className="text-xl dark:text-white"> Ph.D in Horriblensess </h3>
                                    <p className="dark:text-[#b7b7b7]">ABC University, Los Angeles, CA</p>
                                </div>

                                <div
                                    className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-[#fff4f4] dark:bg-transparent">
                                    <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2019 -
                                        Present</span>
                                    <h3 className="text-xl dark:text-white"> Sr. Software Tester </h3>
                                    <p className="dark:text-[#b7b7b7]">Google Inc.</p>
                                </div>

                                <div
                                    className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-[#fff4f4] dark:bg-transparent">
                                    <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2021</span>
                                    <h3 className="text-xl dark:text-white"> Best Developer </h3>
                                    <p className="dark:text-[#b7b7b7]">University Of Melbourne, NA</p>
                                </div>
                            </div>
                        </div>
                        <div className="Experence">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="text-4xl text-[#F95054]">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0"
                                        viewBox="0 0 24 24" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path
                                            d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z">
                                        </path>
                                    </svg>
                                </div>
                                <h4 className="text-4xl dark:text-white font-medium">Experience</h4>
                            </div>
                            <div
                                className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-[#eef5fa] dark:bg-transparent">
                                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2017-2021</span>
                                <h3 className="text-xl dark:text-white"> Computer Science </h3>
                                <p className="dark:text-[#b7b7b7]">Imperialize Technical Institute</p>
                            </div>
                            <div
                                className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-[#eef5fa] dark:bg-transparent">
                                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2015-2017</span>
                                <h3 className="text-xl dark:text-white"> Cr. Web Developer </h3>
                                <p className="dark:text-[#b7b7b7]">ib-themes ltd.</p>
                            </div>
                            <div
                                className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg dark:border-[#212425] dark:border-2 bg-[#eef5fa] dark:bg-transparent">
                                <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">2008</span>
                                <h3 className="text-xl dark:text-white"> Best Writter </h3>
                                <p className="dark:text-[#b7b7b7]">Online Typodev Soluation Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dark:bg-darkbg py-12 px-4 sm:px-5 md:px-10 lg:px-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="col-span-1">
                        <h4 className="text-4xl dark:text-white font-semibold mb-6">Working Skills</h4>
                        <div className=" mb-7">
                            <div className="flex justify-between py-1">
                                <span
                                    className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Web
                                    Design</span>
                                <span
                                    className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">80%</span>
                            </div>
                        </div>
                        <div className=" mb-7">
                            <div className="flex justify-between py-1">
                                <span
                                    className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Mobile
                                    App </span>
                                <span
                                    className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">95%</span>
                            </div>
                        </div>
                        <div className=" mb-7">
                            <div className="flex justify-between py-1">
                                <span
                                    className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Illustrator</span>
                                <span
                                    className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">65%</span>
                            </div>
                        </div>
                        <div className=" mb-7">
                            <div className="flex justify-between py-1">
                                <span
                                    className=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">Photoshope</span>
                                <span
                                    className=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">75%</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h4 className="text-4xl dark:text-white font-semibold mb-8">Knowledges</h4>
                        <div className="flex gap-3 flex-wrap">
                            <button
                                className="resume-btn text-[17px] py-1 pt-0 px-5 bg-lightbg rounded-lg dark:bg-lightdarkbg">Digital
                                Design</button>
                            <button
                                className="resume-btn text-[17px] py-1 pt-0 px-5 bg-lightbg rounded-lg dark:bg-lightdarkbg">Marketing</button>
                            <button
                                className="resume-btn text-[17px] py-1 px-5 bg-lightbg rounded-lg dark:bg-lightdarkbg">Social
                                Media</button>
                            <button
                                className="resume-btn text-[17px] py-1 px-5 bg-lightbg rounded-lg dark:bg-lightdarkbg">Print</button>
                            <button
                                className="resume-btn text-[17px] py-1 px-5 bg-lightbg rounded-lg dark:bg-lightdarkbg">Time
                                Management</button>
                            <button
                                className="resume-btn text-[17px] py-1 px-5 bg-lightbg rounded-lg dark:bg-lightdarkbg">Flexibility</button>
                            <button
                                className="resume-btn text-[17px] py-1 px-5 bg-lightbg rounded-lg dark:bg-lightdarkbg">Print</button>
                            <button
                                className="resume-btn text-[17px] py-1 px-5 bg-lightbg rounded-lg dark:bg-lightdarkbg">Time
                                Management</button>
                            <button
                                className="resume-btn text-[17px] py-1 px-5 bg-lightbg rounded-lg dark:bg-lightdarkbg">Flexibility</button>
                            <button
                                className="resume-btn text-[17px] py-1 px-5 bg-lightbg rounded-lg dark:bg-lightdarkbg">Print</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumePage;