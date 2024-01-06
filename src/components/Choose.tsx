export function Choose() {
  return (
    <section
      id="Choose-section"
      className="bg-white bg-no-repeat bg-left py-20 font-custom1 md:mx-14"
      style={{
        backgroundImage: "url('choose-bg.png')",
        backgroundPosition: "left bottom",
      }}
    >
      <div className="container px-10 ">
        <img
          src="./choose-car.png"
          alt=""
          className="w-full h-auto m-auto md:w-10/12 md:mb-5"
        />
        <div className="text-container grid grid-rows-2 gap-10 md:flex md:gap-36 md:ml-32 md:mr-10">
          <div className="text-container-left flex flex-col justify-evenly text-center md:flex md:justify-center md:text-start md:w-1/2">
            <h4 className="text-xl font-semibold md:mb-2">Why Choose Us</h4>
            <h2 className="text-5xl font-bold leading-tight md:mb-2">
              Best valued deals you will ever find
            </h2>
            <p className="leading-normal text-gray-500 md:mb-8">
              Discover the best deals you'll ever find with our unbeatable
              offers. We're dedicated to providing you with the best value for
              your money, so you can enjoy top-quality services and products
              without breaking the bank. Our deals are designed to give you the
              ultimate renting experience, so don't miss out on your chance to
              save big.
            </p>
            <a
              href="#home"
              className="items-center text-white flex justify-center bg-gradient-to-br from-red-500 to-orange-400 font-semibold text-xl p-2 rounded-xl w-full hover:bg-gradient-to-br hover:from-red-600 hover:to-orange-500"
            >
              Find Details
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
            </a>
          </div>
          <div className="text-container-right flex flex-col gap-8 md:justify-evenly ">
            <div className="box-1 flex flex-col items-center md:flex-row">
              <img src="./choose-1.png" alt="car-img" />
              <div className="text-center flex flex-col gap-2 md:text-start md:ml-2">
                <h4 className="text-2xl font-bold flex justify-center md:justify-start">
                  Cross Country Drive
                </h4>
                <p className="text-gray-500">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="box-2 flex flex-col items-center md:flex-row">
              <img src="./choose-2.png" alt="coin-img" />
              <div className="text-center flex flex-col gap-2 md:text-start md:ml-2">
                <h4 className="text-2xl font-bold flex justify-center md:justify-start">
                  All Inclusive Pricing
                </h4>
                <p className="text-gray-500">
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="box-3 flex flex-col items-center md:flex-row">
              <img src="./choose-3.png" alt="coin-img" />
              <div className="text-center flex flex-col gap-2 md:text-start md:ml-2">
                <h4 className="text-2xl font-bold flex justify-center md:justify-start">
                  No Hidden Charges
                </h4>
                <p className="text-gray-500">
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
