export function Choose() {
  return (
    <div>
      <section
        id="Choose-section"
        className="bg-white bg-no-repeat bg-left py-10 font-custom1"
        style={{ backgroundImage: "url('choose-bg.png')" }}
      >
        <div className="container mx-auto px-10">
          <img src="./choose-car.png" alt="" className="w-full h-auto m-auto" />
          <div className="text-container flex flex-col gap-12">
            <div className="text-container-left">
              <h4 className="text-xl font-bold flex text-center justify-center mb-2">
                Why Choose Us
              </h4>
              <h2 className="text-4xl font-bold flex text-center justify-center mb-4">
                Best valued deals you will ever find
              </h2>
              <p className="flex text-center justify-center leading-normal text-md text-gray-500 mb-4">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value for
                your money, so you can enjoy top-quality services and products
                without breaking the bank. Our deals are designed to give you
                the ultimate renting experience, so don't miss out on your
                chance to save big.
              </p>
              <a
                href="#home"
                className="items-center text-white flex justify-center bg-gradient-to-br from-red-500 to-orange-400 font-bold text-2xl gap-6 p-2 w-full rounded-lg"
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
            <div className="text-container-right flex flex-col gap-8">
              <div className="box-1 flex flex-col items-center ">
                <img src="./choose-1.png" alt="car-img" />
                <div className="text-center flex flex-col gap-2">
                  <h4 className="text-2xl font-bold flex text-center justify-center">
                    Cross Country Drive
                  </h4>
                  <p className="text-gray-500">
                    Take your driving experience to the next level with our
                    top-notch vehicles for your cross-country adventures.
                  </p>
                </div>
              </div>
              <div className="box-2 flex flex-col items-center">
                <img src="./choose-2.png" alt="coin-img" />
                <div className="text-center flex flex-col gap-2">
                  <h4 className="text-2xl font-bold flex text-center justify-center">
                    All Inclusive Pricing
                  </h4>
                  <p className="text-gray-500">
                    Get everything you need in one convenient, transparent price
                    with our all-inclusive pricing policy.
                  </p>
                </div>
              </div>
              <div className="box-3 flex flex-col items-center">
                <img src="./choose-3.png" alt="coin-img" />
                <div className="text-center flex flex-col gap-2 ">
                  <h4 className="text-2xl font-bold flex text-center justify-center">
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
    </div>
  );
}
