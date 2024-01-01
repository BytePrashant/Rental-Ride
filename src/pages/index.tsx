import { Appbar } from '@/components/Appbar'
import { Homepage } from '@/components/Homepage'
import { Booking } from '@/components/Booking'
import { Plan } from '@/components/Plan'
import { Pick } from '@/components/Pick'
import { Banner } from '@/components/Banner'
import { Choose } from '@/components/Choose'

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
      </div>
    )
}
