export const Footer: React.FC = () => {
    return (
      <footer className="font-custom1 py-24  bg-gray-50">
        <div className="container mx-auto px-10">
          <div className="content grid grid-cols-1 gap-8 md:grid md:grid-cols-4">
            <ul className="footer-content__1 text-center">
              <li className="text-3xl font-semibold mb-4">Rental Ride</li>
              <li className="text-gray-500 mb-8">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li className="mb-4">
                <a
                  href="tel:123456789"
                  className="flex flex-row justify-center font-semibold"
                >
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
                    className="tabler-icon tabler-icon-phone-call "
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>{" "}
                  &nbsp; (123) -456-789
                </a>
              </li>
              <li>
                <a
                  href="mailto:  carrental@gmail.com"
                  className="flex flex-row justify-center font-semibold"
                >
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
                  </svg>
                  &nbsp; carrental@gmail.com
                </a>
              </li>
            </ul>
            <ul className="footer-content__2 text-center">
              <li className="text-3xl font-semibold mb-4">Company</li>
              <li>
                <a href="#home" className="font-medium mb-2 text-gray-500">
                  New York
                </a>
              </li>
              <li>
                <a href="#home" className="font-medium mb-2 text-gray-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#home" className="font-medium mb-2 text-gray-500">
                  Mobile
                </a>
              </li>
              <li>
                <a href="#home" className="font-medium mb-2 text-gray-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#home" className="font-medium mb-2 text-gray-500">
                  How we work
                </a>
              </li>
            </ul>
            <ul className="footer-content__3 text-center">
              <li className="text-3xl font-semibold mb-4">Working Hours</li>
              <li className="font-medium mb-2 text-gray-500">
                Mon - Fri: 9:00AM - 9:00PM
              </li>
              <li className="font-medium mb-2 text-gray-500">
                Sat: 9:00AM - 7:00PM
              </li>
              <li className="font-medium mb-2 text-gray-500">Sun: Closed</li>
            </ul>
            <ul className="footer-content__4 text-center">
              <li className="text-3xl font-semibold mb-4">Subscription</li>
              <li className="font-medium mb-2 text-gray-500">
                <p>
                  Subscribe your Email address for latest news &amp; updates.
                </p>
              </li>
              <li className="bg-gray-200 font-normal text-base mt-4 p-2 pl-14 pr-14 mb-4 rounded-xl">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="bg-gray-200 "
                />
              </li>
              <li>
                <button className="text-white flex justify-center bg-gradient-to-br from-red-500 to-orange-400 rounded-xl font-semibold text-xl gap-6 p-2 w-full">
                  Submit
                </button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
}
