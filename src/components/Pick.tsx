 export function Pick() {
  return (
    <div>
      <section id="Pick-Car" className="font-custom1 py-24">
        <div className="container mx-auto px-10">
          <div className="pick-content flex flex-col items-center justify-center h-auto w-auto relative">
            <div className="pick-title flex flex-col text-center mb-10">
              <h3 className="font-semibold text-2xl">Vehicle Models</h3>
              <h2 className="font-bold text-5xl mt-2 mb-3 leading-normal">
                Our rental fleet
              </h2>
              <p className="text-center text-gray-500">
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="car-content flex flex-col justify-between gap-10">
              <div className="pick-box flex flex-col gap-3">
                <button className="text-white bg-gradient-to-br from-red-500 to-orange-400 font-semibold rounded-md text-xl px-6 py-4 text-center">
                  Audi A1 S-Line
                </button>
                <button
                  className="bg-gray-300 border-none cursor-pointer font-semibold rounded-md text-xl px-6 py-4 text-center transition duration-200"
                  id="btn2"
                >
                  VW Golf 6
                </button>
                <button
                  className="bg-gray-300 border-none cursor-pointer font-semibold rounded-md text-xl px-6 py-4 text-center transition duration-200"
                  id="btn3"
                >
                  Toyota Camry
                </button>
                <button
                  className="bg-gray-300 border-none cursor-pointer font-semibold rounded-md text-xl px-6 py-4 text-center transition duration-200"
                  id="btn4"
                >
                  BMW 320 ModernLine
                </button>
                <button
                  className="bg-gray-300 border-none cursor-pointer font-semibold rounded-md text-xl px-6 py-4 text-center transition duration-200"
                  id="btn5"
                >
                  Mercedes-Benz GLK
                </button>
                <button
                  className="bg-gray-300 border-none cursor-pointer font-semibold rounded-md text-xl px-6 py-4 text-center transition duration-200"
                  id="btn6"
                >
                  VW Passat CC
                </button>
              </div>
              <div className="box-cars flex flex-col gap-3">
                <div className="pick-car">
                  <img src="car1.jpg" alt="car_img" />
                </div>
                <div className="pick-description grid grid-cols-1 text-base">
                  <div className="pick-description__price flex justify-center bg-gradient-to-br from-red-500 to-orange-400 text-white text-2xl gap-6 p-2 w-full">
                    <span className="font-bold">$45</span>/ rent per day
                  </div>
                  <div className="pick-description__table grid grid-cols-1 text-sm">
                    <div className="pick-description__table__col border-b-2 border-l-2 grid grid-cols-2 border-r-2 p-2 text-center">
                      <span className="border-r-2">Model</span>
                      <span>Audi</span>
                    </div>
                    <div className="pick-description__table__col border-b-2 border-l-2 grid grid-cols-2 border-r-2 p-2 text-center">
                      <span className="border-r-2">Mark</span>
                      <span>A1</span>
                    </div>
                    <div className="pick-description__table__col border-b-2 border-l-2 grid grid-cols-2 border-r-2 p-2 text-center">
                      <span className="border-r-2">Year</span>
                      <span>2012</span>
                    </div>
                    <div className="pick-description__table__col border-b-2 border-l-2 grid grid-cols-2 border-r-2 p-2 text-center">
                      <span className="border-r-2">Doors</span>
                      <span>4/5</span>
                    </div>
                    <div className="pick-description__table__col border-b-2 border-l-2 grid grid-cols-2 border-r-2 p-2 text-center">
                      <span className="border-r-2">AC</span>
                      <span>Yes</span>
                    </div>
                    <div className="pick-description__table__col border-b-2 border-l-2 grid grid-cols-2 border-r-2 p-2 text-center">
                      <span className="border-r-2">Transmission</span>
                      <span>Manual</span>
                    </div>
                    <div className="pick-description__table__col border-b-2 border-l-2 grid grid-cols-2 border-r-2 p-2 text-center">
                      <span className="border-r-2">Fuel</span>
                      <span>Gasoline</span>
                    </div>
                  </div>
                  <a
                    className="text-white flex justify-center bg-gradient-to-br from-red-500 to-orange-400 font-bold text-2xl gap-6 p-2 w-full"
                    href="#booking-section"
                  >
                    Reserve Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
