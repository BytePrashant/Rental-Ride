import { Banner } from "../components/Banner"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import {VehicleModels} from "../components/VehicleModels"

const Vehicle = () => {
    return (
        <>
            <Navbar/>
            <VehicleModels/>
            <Banner/>
            <Footer/>
        </>
    )
}

export default Vehicle;