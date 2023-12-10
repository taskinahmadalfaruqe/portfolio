const HomePage = () => {
    return (
        <div className="home bg-whiteColor dark:bg-darkbg rounded-xl">
            <div className="p-3 pb-0 lg:p-7">
                <h2
                    className="text-4xl font-bold mb-3 lg:mb-6 dark:text-white relative after:content-[''] after:absolute md:after:w-[200px] after:h-[4px] after:bg-common-bg after:top-[50%] after:left-[42%] after:lg:left-[300px] after:-translate-x-[50%]">
                    About Me</h2>

                <p className="text-[15px] leading-7">
                    <span className="mb-2 lg:mb-3 block">I'm Taskin Ahmad Al Faruqe from Dhaka, Bangladesh. I have already done my Diploma in Engineering in Telecommunication Technology.
                    </span>
                    <span className=" mb-3 lg:mb-10 block">I am writing to express my keen interest with a year of learning skills experience in web development, I excel in technologies like HTML, CSS, JavaScript, React, Node, Express, MongoDB, Tailwind CSS, Bootstrap, DaisyUI, SCSS, MetarialUI, Metarail Tailwind, Firebase Authentication, Stripe Payment System, etc.</span>
                    <span className=" mb-3 lg:mb-10 block">Programming is my only passion.</span>
                </p>

                <section className=" ">
                    <h2 className="text-3xl font-bold mb-3">What I do!</h2>
                    <div>
                        <ul
                            className="grid gap-3 lg:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 mt-2 lg:mt-5 ">
                            <li
                                className=" flex gap-3  lg:gap-5  p-2 lg:p-5 bg-sky-50 rounded-2xl  dark:border-lightdarkbg dark:border-[3px] dark:bg-transparent">
                                <div className="icon w-8">
                                    <svg width="40" height="36" viewBox="0 0 45 42" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.3594 41L15.3125 40.0625C15.1562 40.0104 15.026 39.9062 14.9219 39.75C14.8698 39.6458 14.8438 39.4896 14.8438 39.2812L25.8594 1.46875C25.9115 1.3125 26.0156 1.18229 26.1719 1.07812C26.3281 0.973958 26.4844 0.947917 26.6406 1L29.6875 1.9375C29.8438 1.9375 29.9479 2.01562 30 2.17188C30.1042 2.32812 30.1562 2.51042 30.1562 2.71875L19.1406 40.5312C19.0885 40.6875 18.9844 40.8177 18.8281 40.9219C18.6719 41.026 18.5156 41.0521 18.3594 41ZM11.875 31.5469L13.9844 29.2812C14.0885 29.125 14.1406 28.9688 14.1406 28.8125C14.1406 28.6042 14.0625 28.4479 13.9062 28.3438L5.625 21L13.9062 13.6562C14.0625 13.5521 14.1406 13.4219 14.1406 13.2656C14.1406 13.0573 14.0885 12.875 13.9844 12.7188L11.875 10.4531C11.7188 10.349 11.5625 10.2969 11.4062 10.2969C11.25 10.2969 11.0938 10.349 10.9375 10.4531L0.234375 20.5312C0.078125 20.6875 0 20.8438 0 21C0 21.1562 0.078125 21.3125 0.234375 21.4688L10.9375 31.5469C11.0938 31.651 11.25 31.7031 11.4062 31.7031C11.5625 31.7031 11.7188 31.651 11.875 31.5469ZM34.0625 31.5469L44.7656 21.4688C44.9219 21.3125 45 21.1562 45 21C45 20.8438 44.9219 20.6875 44.7656 20.5312L34.0625 10.4531C33.9062 10.349 33.75 10.2969 33.5938 10.2969C33.4375 10.2969 33.2812 10.349 33.125 10.4531L31.0156 12.7188C30.9115 12.875 30.8594 13.0573 30.8594 13.2656C30.8594 13.4219 30.9375 13.5521 31.0938 13.6562L39.375 21L31.0938 28.3438C30.9375 28.4479 30.8594 28.6042 30.8594 28.8125C30.8594 28.9688 30.9115 29.125 31.0156 29.2812L33.125 31.5469C33.2812 31.651 33.4375 31.7031 33.5938 31.7031C33.75 31.7031 33.9062 31.651 34.0625 31.5469Z"
                                            fill="#269FFF" />
                                    </svg>
                                </div>
                                <div className="text">
                                    <h3 className="text-xl mb-3 font-semibold">Front-End Development</h3>
                                    <p className=" text-[17px] pb-2 m-0 leading-8">Web development merges code (HTML, CSS, JavaScript) to build and maintain websites and applications. Front-end concerns user interface; back-end manages servers and databases. It encompasses both design and functionality on the internet.</p>
                                </div>
                            </li>

                            <li
                                className=" flex gap-3  lg:gap-5  p-2 lg:p-5 bg-pink-50 rounded-2xl  dark:border-lightdarkbg dark:border-[3px] dark:bg-transparent">
                                <div className="icon w-8">
                                    <svg width="40" height="36" viewBox="0 0 40 40" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.5 33.75C7.86458 33.75 8.15104 33.6458 8.35938 33.4375C8.61979 33.1771 8.75 32.8646 8.75 32.5C8.75 32.1354 8.61979 31.849 8.35938 31.6406C8.15104 31.3802 7.86458 31.25 7.5 31.25C7.13542 31.25 6.82292 31.3802 6.5625 31.6406C6.35417 31.849 6.25 32.1354 6.25 32.5C6.25 32.8646 6.35417 33.1771 6.5625 33.4375C6.82292 33.6458 7.13542 33.75 7.5 33.75ZM37.5 25H25.625L33.9844 16.5625C34.5052 16.0938 34.7656 15.5208 34.7656 14.8438C34.7656 14.1146 34.5052 13.5156 33.9844 13.0469L26.9531 6.01562C26.4844 5.49479 25.8854 5.23438 25.1562 5.23438C24.4792 5.23438 23.9062 5.49479 23.4375 6.01562L15 14.375V2.5C15 1.82292 14.7396 1.25 14.2188 0.78125C13.75 0.260417 13.1771 0 12.5 0H2.5C1.82292 0 1.22396 0.260417 0.703125 0.78125C0.234375 1.25 0 1.82292 0 2.5V32.5C0 34.5833 0.729167 36.3542 2.1875 37.8125C3.64583 39.2708 5.41667 40 7.5 40H37.5C38.1771 40 38.75 39.7396 39.2188 39.2188C39.7396 38.75 40 38.1771 40 37.5V27.5C40 26.8229 39.7396 26.25 39.2188 25.7812C38.75 25.2604 38.1771 25 37.5 25ZM12.5 32.5C12.5 33.8542 12.0052 35.026 11.0156 36.0156C10.026 37.0052 8.85417 37.5 7.5 37.5C6.14583 37.5 4.97396 37.0052 3.98438 36.0156C2.99479 35.026 2.5 33.8542 2.5 32.5V22.5H12.5V32.5ZM12.5 20H2.5V12.5H12.5V20ZM12.5 10H2.5V2.5H12.5V10ZM15 17.8906L25.1562 7.73438L32.2656 14.8438L15 32.1094V17.8906ZM37.5 37.5H13.125L23.125 27.5H37.5V37.5Z"
                                            fill="#D566FF" />
                                    </svg>
                                </div>
                                <div className="text">
                                    <h3 className="text-xl mb-3 font-semibold">Web Design</h3>
                                    <p className=" text-[17px] pb-2 m-0 leading-8">Web design crafts the visual and interactive elements of websites, emphasizing aesthetics, layout, and user experience. It blends artistic creativity with technical skill, focusing on usability and aesthetic appeal to create engaging online experiences.</p>
                                </div>
                            </li>
                            <li
                                className=" flex gap-3  lg:gap-5  p-2 lg:p-5 bg-yellow-50 rounded-2xl  dark:border-lightdarkbg dark:border-[3px] dark:bg-transparent">
                                <div className="icon w-8">
                                    <svg width="40" height="36" viewBox="0 0 45 42" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.3594 41L15.3125 40.0625C15.1562 40.0104 15.026 39.9062 14.9219 39.75C14.8698 39.6458 14.8438 39.4896 14.8438 39.2812L25.8594 1.46875C25.9115 1.3125 26.0156 1.18229 26.1719 1.07812C26.3281 0.973958 26.4844 0.947917 26.6406 1L29.6875 1.9375C29.8438 1.9375 29.9479 2.01562 30 2.17188C30.1042 2.32812 30.1562 2.51042 30.1562 2.71875L19.1406 40.5312C19.0885 40.6875 18.9844 40.8177 18.8281 40.9219C18.6719 41.026 18.5156 41.0521 18.3594 41ZM11.875 31.5469L13.9844 29.2812C14.0885 29.125 14.1406 28.9688 14.1406 28.8125C14.1406 28.6042 14.0625 28.4479 13.9062 28.3438L5.625 21L13.9062 13.6562C14.0625 13.5521 14.1406 13.4219 14.1406 13.2656C14.1406 13.0573 14.0885 12.875 13.9844 12.7188L11.875 10.4531C11.7188 10.349 11.5625 10.2969 11.4062 10.2969C11.25 10.2969 11.0938 10.349 10.9375 10.4531L0.234375 20.5312C0.078125 20.6875 0 20.8438 0 21C0 21.1562 0.078125 21.3125 0.234375 21.4688L10.9375 31.5469C11.0938 31.651 11.25 31.7031 11.4062 31.7031C11.5625 31.7031 11.7188 31.651 11.875 31.5469ZM34.0625 31.5469L44.7656 21.4688C44.9219 21.3125 45 21.1562 45 21C45 20.8438 44.9219 20.6875 44.7656 20.5312L34.0625 10.4531C33.9062 10.349 33.75 10.2969 33.5938 10.2969C33.4375 10.2969 33.2812 10.349 33.125 10.4531L31.0156 12.7188C30.9115 12.875 30.8594 13.0573 30.8594 13.2656C30.8594 13.4219 30.9375 13.5521 31.0938 13.6562L39.375 21L31.0938 28.3438C30.9375 28.4479 30.8594 28.6042 30.8594 28.8125C30.8594 28.9688 30.9115 29.125 31.0156 29.2812L33.125 31.5469C33.2812 31.651 33.4375 31.7031 33.5938 31.7031C33.75 31.7031 33.9062 31.651 34.0625 31.5469Z"
                                            fill="#269FFF" />
                                    </svg>
                                </div>
                                <div className="text">
                                    <h3 className="text-xl mb-3 font-semibold">MERN Stack Development</h3>
                                    <p className=" text-[17px] pb-2 m-0 leading-8">MERN stack: MongoDB (database), Express.js (backend), React (frontend), Node.js (runtime). Entirely JavaScript-based, it streamlines full-stack web app development, ensuring a unified language and smooth data flow across layers for creating robust, scalable applications.</p>
                                </div>
                            </li>
                            <li
                                className=" flex gap-3  lg:gap-5  p-2 lg:p-5 bg-purple-100 rounded-2xl  dark:border-lightdarkbg dark:border-[3px] dark:bg-transparent">
                                <div className="icon w-8">
                                    <svg width="40" height="36" viewBox="0 0 45 42" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18.3594 41L15.3125 40.0625C15.1562 40.0104 15.026 39.9062 14.9219 39.75C14.8698 39.6458 14.8438 39.4896 14.8438 39.2812L25.8594 1.46875C25.9115 1.3125 26.0156 1.18229 26.1719 1.07812C26.3281 0.973958 26.4844 0.947917 26.6406 1L29.6875 1.9375C29.8438 1.9375 29.9479 2.01562 30 2.17188C30.1042 2.32812 30.1562 2.51042 30.1562 2.71875L19.1406 40.5312C19.0885 40.6875 18.9844 40.8177 18.8281 40.9219C18.6719 41.026 18.5156 41.0521 18.3594 41ZM11.875 31.5469L13.9844 29.2812C14.0885 29.125 14.1406 28.9688 14.1406 28.8125C14.1406 28.6042 14.0625 28.4479 13.9062 28.3438L5.625 21L13.9062 13.6562C14.0625 13.5521 14.1406 13.4219 14.1406 13.2656C14.1406 13.0573 14.0885 12.875 13.9844 12.7188L11.875 10.4531C11.7188 10.349 11.5625 10.2969 11.4062 10.2969C11.25 10.2969 11.0938 10.349 10.9375 10.4531L0.234375 20.5312C0.078125 20.6875 0 20.8438 0 21C0 21.1562 0.078125 21.3125 0.234375 21.4688L10.9375 31.5469C11.0938 31.651 11.25 31.7031 11.4062 31.7031C11.5625 31.7031 11.7188 31.651 11.875 31.5469ZM34.0625 31.5469L44.7656 21.4688C44.9219 21.3125 45 21.1562 45 21C45 20.8438 44.9219 20.6875 44.7656 20.5312L34.0625 10.4531C33.9062 10.349 33.75 10.2969 33.5938 10.2969C33.4375 10.2969 33.2812 10.349 33.125 10.4531L31.0156 12.7188C30.9115 12.875 30.8594 13.0573 30.8594 13.2656C30.8594 13.4219 30.9375 13.5521 31.0938 13.6562L39.375 21L31.0938 28.3438C30.9375 28.4479 30.8594 28.6042 30.8594 28.8125C30.8594 28.9688 30.9115 29.125 31.0156 29.2812L33.125 31.5469C33.2812 31.651 33.4375 31.7031 33.5938 31.7031C33.75 31.7031 33.9062 31.651 34.0625 31.5469Z"
                                            fill="#269FFF" />
                                    </svg>
                                </div>
                                <div className="text">
                                    <h3 className="text-xl mb-3 font-semibold">Full-Stack Development</h3>
                                    <p className=" text-[17px] pb-2 m-0 leading-8">Full-stack development merges front-end and back-end skills, covering client and server software, databases, and servers for complete web app creation. Developers manage all stages, from UI design to server upkeep, ensuring seamless app functionality throughout the stack.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <div className="client_list mt-10">
                    <h2 className="text-3xl font-bold mb-6">Technology That I Used!</h2>
                    <div className="slider p-5  bg-lightbg rounded-2xl dark:bg-lightdarkbg">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;