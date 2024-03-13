import Link from "next/link";

export function Homepage() {
  return (
    <div className="md:mx-14">
      <img className="hidden md:flex right-0 absolute" src="./hero-bg.png" />
      <div className="navbar flex relative top-0 right-0 left-0 p-6 justify-between items-center">
        <div>
          <Link href="/">
            <img
              src="./rental-ride-logo.png"
              alt="logo-img"
              className="w-[200px] h-[60px]"
            />
          </Link>
        </div>
        <ul className="navbar__links hidden md:flex gap-6 font-semibold">
          <li>
            <Link
              className="home-link hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="about-link hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="models-link hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
              href="/"
            >
              Vehicle Models
            </Link>
          </li>
          <li>
            <Link
              className="testi-link hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
              href="/"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              className="team-link hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
              href="/"
            >
              Our Team
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="contact-link hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="navbar__buttons hidden md:flex gap-4 font-semibold items-center">
          <Link
            href="/login"
            className="navbar__buttons__sign-in hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="navbar__buttons__register flex justify-center text-white bg-gradient-to-br from-red-500 to-orange-400 font-semibold px-5 py-2 text-center rounded-xl w-32 hover:bg-gradient-to-br hover:from-red-600 hover:to-orange-500"
          >
            Register
          </Link>
        </div>
        <div className="mobile-hamb md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="tabler-icon tabler-icon-menu-2"
          >
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </div>
      </div>
      <section id="Home" className="font-custom1">
        <div className="container mx-auto px-10">
          <div className="content flex items-center justify-center h-screen w-auto relative md:justify-start">
            <img
              className="hidden md:flex absolute right-0 w-3/5 mt-10 "
              src="./homepage-car.png"
              alt="car-image"
            />
            <div className="content-text flex flex-col text-center md:text-start md:items-start">
              <h4 className="text-2xl font-bold">Plan your trip now</h4>
              <h1 className="text-5xl font-bold my-6 md:leading-tight md:mt-2">
                Save{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                  big
                </span>{" "}
                with our <br /> rental ride
              </h1>
              <p className="text-base text-gray-600 mb-6">
                Rent the car of your dreams. Unbeatable price, unlimited <br />
                miles, flexible pick-up options and much more
              </p>
              <div className="content-btn flex flex-col items-center md:flex-row gap-3">
                <button className="flex justify-center text-white bg-gradient-to-br from-red-500 to-orange-400 font-semibold px-5 py-2.5 text-center rounded-xl w-48 gap-2 hover:bg-gradient-to-br hover:from-red-600 hover:to-orange-500">
                  Book Ride
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
                    className="tabler-icon tabler-icon-circle-check"
                  >
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    <path d="M9 12l2 2l4 -4"></path>
                  </svg>
                </button>
                <button className="flex justify-center text-white bg-gradient-to-br from-gray-500 to-black font-semibold py-2.5 px-5 rounded-xl text-center w-48 hover:bg-gradient-to-br hover:from-gray-700 hover:to-black">
                  Learn More
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
                    className="tabler-icon tabler-icon-chevron-right"
                  >
                    <path d="M9 6l6 6l-6 6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
