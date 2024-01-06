import { useState } from "react";

export function FAQ() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const toggleAnswer1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
  };
  const toggleAnswer2 = () => {
    setIsOpen1(false);
    setIsOpen2(!isOpen2);
    setIsOpen3(false);
  };
  const toggleAnswer3 = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(!isOpen3);
  };
  return (
    <section id="FAQ" className="font-custom1 py-24">
      <div
        className="container mx-auto px-10 bg-no-repeat bg-left-bottom"
        style={{ backgroundImage: "url('FAQ.png')" }}
      >
        <div className="content flex flex-col items-center">
          <div className="title mx-auto text-center mb-12 md:mx-96">
            <h4 className="font-semibold text-xl">FAQ</h4>
            <h2 className="font-bold text-5xl leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500">
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className="all-questions drop-shadow-2xl flex flex-col">
            <div className="faq-box-1 bg-white drop-shadow-xl text-black cursor-pointer">
              <div
                id="q1"
                className={`faq-box__question flex items-center justify-between px-10 py-3 text-lg font-medium ${
                  isOpen1
                    ? "bg-gradient-to-br from-red-500 to-orange-400 text-white"
                    : "hover:bg-gradient-to-br from-red-500 to-orange-400 hover:text-white"
                } md:w-[800px]`}
                onClick={toggleAnswer1}
              >
                <p>1. What is special about comparing rental car deals?</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-chevron-down"
                >
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              <div
                id="q1"
                className={`faq-box__answer items-center px-10 py-3 text-gray-500 md:w-[800px] ${
                  isOpen1 ? "block" : "hidden"
                }`}
              >
                Comparing rental car deals is important as it helps find the
                best deal that fits your budget and requirements, ensuring you
                get the most value for your money. By comparing various options,
                you can find deals that offer lower prices, additional services,
                or better car models. You can find car rental deals by
                researching online and comparing prices from different rental
                companies.
              </div>
            </div>
            <div className="faq-box-2 bg-white drop-shadow-xl text-black cursor-pointer">
              <div
                id="q2"
                className={`faq-box__question flex items-center justify-between px-10 py-3 text-lg font-medium ${
                  isOpen2
                    ? "bg-gradient-to-br from-red-500 to-orange-400 text-white"
                    : "hover:bg-gradient-to-br from-red-500 to-orange-400 hover:text-white"
                } md:w-[800px]`}
                onClick={toggleAnswer2}
              >
                <p>2. How do I find the car rental deals?</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-chevron-down"
                >
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              <div
                id="q2"
                className={`faq-box__answer items-center px-10 py-3 text-gray-500 md:w-[800px] ${
                  isOpen2 ? "block" : "hidden"
                }`}
              >
                You can find car rental deals by researching online and
                comparing prices from different rental companies. Websites such
                as Expedia, Kayak, and Travelocity allow you to compare prices
                and view available rental options. It is also recommended to
                sign up for email newsletters and follow rental car companies on
                social media to be informed of any special deals or promotions.
              </div>
            </div>
            <div className="faq-box-3 bg-white drop-shadow-xl text-black cursor-pointer">
              <div
                id="q3"
                className={`faq-box__question flex items-center justify-between px-10 py-3 text-lg font-medium ${
                  isOpen3
                    ? "bg-gradient-to-br from-red-500 to-orange-400 text-white"
                    : "hover:bg-gradient-to-br from-red-500 to-orange-400 hover:text-white"
                } md:w-[800px]`}
                onClick={toggleAnswer3}
              >
                <p>3. How do I find such low rental car prices?</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="tabler-icon tabler-icon-chevron-down"
                >
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
              <div
                id="q3"
                className={`faq-box__answer items-center px-10 py-3 text-gray-500 md:w-[800px] ${
                  isOpen3 ? "block" : "hidden"
                }`}
              >
                Book in advance: Booking your rental car ahead of time can often
                result in lower prices. Compare prices from multiple companies:
                Use websites like Kayak, Expedia, or Travelocity to compare
                prices from multiple rental car companies. Look for discount
                codes and coupons: Search for discount codes and coupons that
                you can use to lower the rental price. Renting from an
                off-airport location can sometimes result in lower prices.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
