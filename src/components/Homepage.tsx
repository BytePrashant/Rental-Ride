export function Homepage() {
  return (
    <div>
      <section id="Home" className="font-custom1 ">
        <div className="container mx-auto px-10">
          <img className="hidden md:block" src="./hero-bg.png" />
          <div className="content flex items-center justify-center h-screen w-auto relative md:justify-center">
            <div className="content-text flex flex-col text-center">
              <h4 className="text-2xl font-bold">Plan your trip now</h4>
              <h1 className="text-5xl font-bold my-6">
                Save{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                  big
                </span>{" "}
                with our <br /> rental ride
              </h1>
              <p className="text-base text-gray-600 mb-6">
                Rent the car of your dreams. Unbeatable price, unlimited miles,
                flexible pick-up options and much more
              </p>
              <div className="content-btn flex flex-col items-center">
                <button className="flex justify-center text-white bg-gradient-to-br from-red-500 to-orange-400 font-semibold px-5 py-2.5 text-center rounded-3xl w-48 mb-4">
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
                <button className="flex justify-center text-white bg-gradient-to-br from-gray-500 to-black font-semibold py-2.5 px-5 rounded-3xl text-center w-48">
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
