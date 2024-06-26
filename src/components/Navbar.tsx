import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
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
        <div
          className={`navbar__links ${
            isOpen ? "block" : "hidden"
          } md:relative md:flex md:space-x-4 md:gap-4`}
        >
          <ul className="md:static flex flex-col absolute w-full top-20 gap-2 items-center bg-white md:bg-transparent right-0 font-medium p-4 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
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
                href="/vehicles"
              >
                Vehicles
              </Link>
            </li>
            <li>
              <Link
                className="testi-link hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
                href="/testimonial"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                className="team-link hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
                href="/team"
              >
                Our Team
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="contact-link hover:text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
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
        <div
          className="mobile-hamb md:hidden"
          onClick={() => {
            setisOpen(!isOpen);
          }}
        >
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
    </>
  );
}
