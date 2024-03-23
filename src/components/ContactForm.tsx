export function ContactForm() {
  return (
    <>
      <section id="Pick-Car" className="font-custom1 py-16 md:mx-14">
        <div className="container mx-auto px-10">
          <div className="Contact-content flex flex-col md:flex-row md:gap-40">
            <div className="flex flex-col text-center gap-4 md:w-1/2">
              <h2 className="font-bold text-4xl mt-2 mb-3 leading-normal">
                Need additional information?
              </h2>
              <p className="text-center text-gray-500">
                If you encounter any issues with our website or have any
                concerns regarding your car rental experience, please don't
                hesitate to contact us. Your feedback helps us improve our
                service.
              </p>
              <a href="/" className="flex justify-center my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-phone"
                >
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                </svg>{" "}
                &nbsp; 9192696969
              </a>
              <a href="/" className="flex justify-center my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>{" "}
                &nbsp; rentalride@carmail.com
              </a>
              <a href="/" className="flex justify-center my-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-location"
                >
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
                &nbsp; Bangalore, India
              </a>
            </div>
            <div className="flex flex-col md:w-1/2">
              <form className="">
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your name
                  </label>
                  <input
                    type="name"
                    id="name"
                    className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="your name"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    className="w-full block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400"
                    placeholder="Leave a comment..."
                  ></textarea>
                  <button
                    type="submit"
                    className="flex mt-8 justify-center text-white bg-gradient-to-br from-red-500 to-orange-400 font-semibold px-5 py-2.5 text-center rounded-xl w-48 gap-2 hover:bg-gradient-to-br hover:from-red-600 hover:to-orange-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
