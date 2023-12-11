const Footer = () => {
    const year= new Date().getFullYear();
    return (
        <footer className="overflow-hidden rounded-b-2xl bg-lightbg dark:bg-black mt-00 text-xl">
            <div className="container">
                <p className="text-center py-6 text-gray-lite dark:text-white ">
                    &copy; {year}
                    <span
                        className="year">
                    </span> All Rights Reserved by
                    <a href="#" target="_blank"
                        className="hover:text-red-500 transition-all deration-300"> Taskin
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
};

export default Footer;