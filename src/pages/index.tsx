import { Appbar } from '@/components/Appbar'
import { Homepage } from '@/components/Homepage'
import { Booking } from '@/components/Booking'
import { Plan } from '@/components/Plan'
import { Pick } from '@/components/Pick'
import { Banner } from '@/components/Banner'
import { Choose } from '@/components/Choose'
import { Testimonial } from '@/components/Testimonial'
import { FAQ } from '@/components/FAQ'
import { Download } from '@/components/Download'

export default function Home() {
  return (
      <div id='root'>
        <Appbar></Appbar>
        <Homepage></Homepage>
        <Booking></Booking>
        <Plan></Plan>
        <Pick></Pick>
        <Banner></Banner>
        <Choose></Choose>
        <Testimonial></Testimonial>
        <FAQ></FAQ>
        <Download></Download>
      </div>
    )
}
