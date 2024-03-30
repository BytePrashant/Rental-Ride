import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { VehicleModels } from "../components/VehicleModels";

const Vehicle = () => {
  return (
    <>
      <Navbar />
      <section id="Vehicle-Models" className="font-custom1 py-16 md:mx-14">
        <div className="container mx-auto px-10 flex justify-center">
          <div className="grid grid-rows-2 md:grid-cols-3 gap-12">
            <VehicleModels
              imgSrc="./car1.jpg"
              carName="Audi A1"
              price={45}
              company="Audi"
              ratings={4.5}
            />
            <VehicleModels
              imgSrc="./car2.jpg"
              carName="VW Golf 6"
              price={30}
              company="Volkswagen"
              ratings={4.2}
            />
            <VehicleModels
              imgSrc="./car3.jpg"
              carName="Toyota Camry"
              price={35}
              company="Toyota"
              ratings={4}
            />
            <VehicleModels
              imgSrc="./car4.jpg"
              carName="BMW 320"
              price={45}
              company="BMW"
              ratings={4.3}
            />
            <VehicleModels
              imgSrc="./car5.jpg"
              carName="Mercedes-Benz GLK"
              price={50}
              company="Mercedes"
              ratings={4.8}
            />
            <VehicleModels
              imgSrc="./car6.jpg"
              carName="VW Passat CC"
              price={35}
              company="Volkswagen"
              ratings={4.1}
            />
          </div>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
};

export default Vehicle;
