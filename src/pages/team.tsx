import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Teams } from "../components/Teams";

const Team = () => {
  return (
    <>
      <Navbar />
      <section id="Vehicle-Models" className="font-custom1 py-16 md:mx-14">
        <div className="container mx-auto px-10 flex justify-center">
          <div className="grid grid-rows-2 md:grid-cols-3 gap-24">
            <Teams
              imgSrc="./Person1.png"
              name="Andrew Garfield"
              designation="CEO"
            />
            <Teams
              imgSrc="./Person2.png"
              name="Sundar Pichai"
              designation="Tech Lead"
            />
            <Teams
              imgSrc="./Person3.png"
              name="Alexa Bliss"
              designation="Photographer"
            />
            <Teams imgSrc="./Person4.png" name="Karen" designation="Sales Lead" />
            <Teams
              imgSrc="./Person5.png"
              name="Yu Wang"
              designation="Business Manager"
            />
            <Teams
              imgSrc="./Person6.png"
              name="Sophie"
              designation="Software Developer"
            />
          </div>
        </div>
      </section>
      <Banner />
      <Footer />
    </>
  );
};

export default Team;
