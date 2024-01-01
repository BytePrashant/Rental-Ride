export function Plan() {
  return (
    <div>
      <section id="Plan" className="font-custom1 py-16">
        <div className="container mx-auto px-10">
          <div className="plan-content flex flex-col items-center justify-center h-auto w-auto relative md:justify-center">
            <div className="plan-title flex flex-col text-center">
              <h3 className="font-semibold text-2xl">Plan your trip now</h3>
              <h2 className="font-bold text-4xl my-5 leading-normal">
                Quick & easy car rental
              </h2>
            </div>
            <div className="plan-boxes grid grid-rows-3 gap-5 px-3 my-2">
              <div className="plan-box1 p-3 flex flex-col items-center">
                <img src="./plan-box1.png"></img>
                <h3 className="text-2xl font-bold mb-3">Select Car</h3>
                <p className="text-center text-gray-500">
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs
                </p>
              </div>
              <div className="plan-box2 p-3 flex flex-col items-center">
                <img src="./plan-box2.png" />
                <h3 className="text-2xl font-bold mb-3">Contact Operator</h3>
                <p className="text-center text-gray-500">
                  Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns
                </p>
              </div>
              <div className="plan-box3 p-3 flex flex-col items-center">
                <img src="./plan-box3.png" />
                <h3 className="text-2xl font-bold mb-3">Let's Drive</h3>
                <p className="text-center text-gray-500">
                  Whether you're hitting the open road, we've got you covered
                  with our wide range of cars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
