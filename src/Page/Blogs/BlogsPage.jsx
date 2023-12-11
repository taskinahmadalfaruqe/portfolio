const BlogsPage = () => {
    return (
        <div className=" p-2 pb-0 lg:p-7 lg:pb-0 bg-whiteColor rounded-t-xl dark:bg-darkbg">
            <h2
                className="text-4xl font-bold mb-3 lg:mb-6 dark:text-white relative after:content-[''] after:absolute md:after:w-[200px] after:h-[4px] after:bg-common-bg after:top-[50%] after:left-[38%] after:lg:left-[250px] after:-translate-x-[50%]">
                Blogs
            </h2>

            <div className="items flex gap-5">
                <div className="flex justify-center items-center h-[100vh] w-[100%] text-4xl text-pink-700">
                    <h2>No Blogs Found</h2>
                </div>
            </div>
        </div>
    );
};

export default BlogsPage;