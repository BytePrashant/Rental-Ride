export function Banner() {
  return (
    <section
      id="Banner"
      className="font-custom1 bg-gray-700 flex flex-col items-center justify-center h-auto my-14 py-24 text-center w-full"
    >
      <div className="container">
        <div className="banner-content flex justify-center h-full text-white">
          <div className="banner-content__text flex flex-col gap-6 text-center">
            <h2 className="text-5xl font-semibold">
              Save big with our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 font-semibold">
                Rental Ride!
              </span>
            </h2>
            <p className="text-xl">
              Top Airports. Local Suppliers.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 font-semibold">
                24/7
              </span>{" "}
              Support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
