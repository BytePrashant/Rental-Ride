import { Footer } from "@/components/Footer";
import { Banner } from "@/components/Banner";
import {ContactForm} from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";

export default function Contact(){
    return (
        <>
        <Navbar/>
        <ContactForm/>
        <Banner/>
        <Footer/>
        </>
    )
}