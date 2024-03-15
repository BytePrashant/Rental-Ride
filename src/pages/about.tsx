import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";
import { Plan } from "../components/Plan";
import { Navbar } from "../components/Navbar";

function About() {
  return (
    <>
      <section id="About" className="font-custom1">
        <Navbar />
        <div className="container mx-auto px-10">
          <div className="about-main grid grid-rows-1 gap-8 md:flex md:flex-row md:mx-36">
            <img
              className="about-main__img md:my-28 "
              src="./about-main.jpg"
              alt="car-renting"
            />
            <div className="about-main__text flex flex-col text-center md:text-start md:justify-center">
              <h3 className="text-2xl font-semibold">About Company</h3>
              <h2 className="text-4xl font-bold my-6 md:leading-tight md:mt-2">
                You start the engine and your adventure begins
              </h2>
              <p className="text-base text-gray-600 mb-10">
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="about-main__text__icons flex flex-col gap-8 md:flex-row">
                <div className="about-main__text__icons__box flex flex-col items-center gap-2">
                  <img src="./about-icon1.png" alt="car-icon" />
                  <span className="md:flex md:flex-row md:gap-4">
                    <h4 className="text-4xl font-bold">20</h4>
                    <p className="text-base text-gray-600 mb-6">Car Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box flex flex-col items-center gap-2">
                  <img src="./about-icon2.png" alt="car-icon" />
                  <span className="md:flex md:flex-row md:gap-4">
                    <h4 className="text-4xl font-bold">85</h4>
                    <p className="text-base text-gray-600 mb-6">Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box flex flex-col items-center gap-2">
                  <img src="./about-icon3.png" alt="car-icon" className="last-fk" />
                  <span className="md:flex md:flex-row md:gap-4">
                    <h4 className="text-4xl font-bold">75</h4>
                    <p className="text-base text-gray-600 mb-6">Repair Shop</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Plan />
        <Banner />
        <Footer />
      </section>
    </>
  );
}

export default About;
