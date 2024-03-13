import { Banner } from "@/components/Banner"
import { Booking } from "@/components/Booking"
import { Choose } from "@/components/Choose"
import { Download } from "@/components/Download"
import { FAQ } from "@/components/FAQ"
import { Homepage } from "@/components/Homepage"
import { Pick } from "@/components/Pick"
import { Plan } from "@/components/Plan"
import { Testimonial } from "@/components/Testimonial"
import { Footer } from "@/components/Footer"

export default() => {
    return (
        <>
            <Homepage />
            <Booking />
            <Plan />
            <Pick />
            <Banner />
            <Choose />
            <Testimonial />
            <FAQ />
            <Download />
            <Footer />
        </>
    )
}

