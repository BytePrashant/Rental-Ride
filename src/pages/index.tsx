import { Appbar } from '@/components/Appbar'
import { Homepage } from '@/components/Homepage'
import { Booking } from '@/components/Booking'

export default function Home() {
  return (
      <div id='root'>
        <Appbar></Appbar>
        <Homepage></Homepage>
        <Booking></Booking>
      </div>
    )
}
