import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { VehicleModels } from "../components/VehicleModels";

const Vehicle = () => {
  return (
    <>
      <Navbar />
      <section id="Vehicle-Models" className="font-custom1 py-16 md:mx-14">
        <div className="container mx-auto px-10 md:flex">
          <div className=" grid grid-rows-2 grid-cols-3 gap-4">
            <VehicleModels />
            <VehicleModels />
            <VehicleModels />
            <VehicleModels />
            <VehicleModels />
            <VehicleModels />
          </div>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
};

export default Vehicle;
