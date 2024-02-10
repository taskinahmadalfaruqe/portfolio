const ContactPage = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    console.log(name, email, message)
  };

  return (
    <div className=" p-2 pb-5 lg:p-7 lg:pb-7 bg-whiteColor rounded-t-xl dark:bg-darkbg ">
      <h2
        className="text-4xl font-bold mb-3 lg:mb-6 dark:text-white relative after:content-[''] after:absolute md:after:w-[200px] after:h-[4px] after:bg-common-bg after:top-[50%] after:left-[38%] after:lg:left-[250px] after:-translate-x-[50%]">
        Contact
      </h2>
      <div className="max-w-xl mx-auto p-6 bg-lightbg dark:bg-lightdarkbg rounded-md shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-medium">Name:</label>
            <input required type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primaryColor border-secondoryColor dark:bg-lightdarkbg" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">Email:</label>
            <input required type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primaryColor border-secondoryColor dark:bg-lightdarkbg" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 font-medium">Message:</label>
            <textarea required id="message" name="message" placeholder="Enter your message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primaryColor border-secondoryColor dark:bg-lightdarkbg"></textarea>
          </div>

          <button type="submit" className="relative w-full  md:min-w-[500px] bg-common-bg text-whiteColor uppercase text-center font-bold p-1 rounded-md hover:bg-common-bg-hover transition-all duration-200">
            Submit
          </button>
        </form>
      </div>





    </div>
  );
};

export default ContactPage;