import { Link } from "react-router-dom";

const ProjectPage = () => {
    return (
        <div className=" p-2 pb-0 lg:p-7 lg:pb-0 bg-whiteColor rounded-t-xl dark:bg-darkbg">
            <h2
                className="text-4xl font-bold mb-3 lg:mb-6 dark:text-white relative after:content-[''] after:absolute md:after:w-[200px] after:h-[4px] after:bg-common-bg after:top-[50%] after:left-[38%] after:lg:left-[250px] after:-translate-x-[50%]">
                Projects</h2>
            <ul className="mt-[40px] flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
                <li className="text-[#FA5252] mr-4 md:mx-4">All</li>
                <li className="fillter-btn ml-0 mr-4 md:mx-4">MERN Stack</li>
                <li className="fillter-btn ">Full Stack</li>
            </ul>
            <div >
                <div className="items flex gap-5 pb-5 flex-wrap">
                    <div
                        className="item bg-lightbg dark:bg-lightdarkbg rounded-lg p-6 dark:border-[2px] border-[#212425] flex flex-col flex-1">
                        <div className="image">
                            <img src={'https://i.ibb.co/F3Cm7SM/04.jpg'} alt="Haven management" className="rounded-md h-44 w-[100%]" />
                        </div>
                        <div className="text">
                            <p
                                className="py-5 text-[25px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                                Haven Management
                            </p>
                            <p
                                className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6] mb-4">
                                This Project is made for house rent. An owner can rent his house by apparent available ability, making notice, Taking rent, and playing all essential roles.
                            </p>
                            <div className="w-full flex gap-5 justify-center items-center">
                                <button className="w-full">
                                    <Link
                                        to={'https://haven-management.web.app'}
                                        target="_blank"
                                        className="flex justify-center items-center font-medium cursor-pointer text-xl duration-300 transition  mt-2 bg-common-bg p-1 w-[100%] text-whiteColor text-center rounded-md hover:bg-common-bg-hover"
                                    >
                                        Live Link
                                    </Link>
                                </button>
                                <button className="w-full">
                                    <Link
                                        to={'https://github.com/taskinahmadalfaruqe/havenManagementClient'}
                                        target="_blank"
                                        className="flex justify-center items-center font-medium cursor-pointer text-xl duration-300 transition  mt-2 bg-common-bg p-1 w-[100%] text-whiteColor text-center rounded-md hover:bg-common-bg-hover"
                                    >
                                        GitHub Link
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>


                    <div
                        className="item bg-lightbg dark:bg-lightdarkbg rounded-lg p-6 dark:border-[2px] border-[#212425] flex flex-col flex-1">
                        <div className="image">
                            <img src={'https://i.ibb.co/vLkG8D1/study.jpg'} alt="Haven management" className="rounded-md h-44 w-[100%]" />
                        </div>
                        <div className="text">
                            <p
                                className="py-5 text-[25px] font-normal text-gray-lite block dark:text-[#A6A6A6]">
                                Study Hub
                            </p>
                            <p
                                className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6] mb-4">
                                This Project is made for Students. A Teacher submits an assignment and student do their task. After finishing the task they submit it and the teacher checks it and gives feedback..
                            </p>
                            <div className="w-full flex justify-center items-center gap-5">
                                <button className="w-full">
                                    <Link
                                        to={'https://breezy-recess.surge.sh'}
                                        target="_blank"
                                        className="flex justify-center items-center font-medium cursor-pointer text-xl duration-300 transition  mt-2 bg-common-bg p-1 w-[100%] text-whiteColor text-center rounded-md hover:bg-common-bg-hover"
                                    >
                                        Live Link
                                    </Link>
                                </button>
                                <button className="w-full">
                                    <Link
                                        to={'https://github.com/taskinahmadalfaruqe/Study-Hub'}
                                        target="_blank"
                                        className="flex justify-center items-center font-medium cursor-pointer text-xl duration-300 transition  mt-2 bg-common-bg p-1 w-[100%] text-whiteColor text-center rounded-md hover:bg-common-bg-hover"
                                    >
                                        GitHub Link
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProjectPage;