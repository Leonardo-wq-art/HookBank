import Image from 'next/image'
import airbnb from "@/public/airbnb.png"
import binance from "@/public/binance.png"
import dropbox from "@/public/dropbox.png"
import coinbase from "@/public/coinbase.png"

const Clients = () => {
  return (
    <section id='Clients' className="py-20 md:px-5 px-0  h-full w-full">

<div className='grid lg:grid-cols-4 max-w-[1000px] mx-auto
gap-10 justify-center items-center
 md:grid-cols-2 grid-col-1'>
<Image src={airbnb}  alt="airbnb"
 width={100} height={100} 
 className='mx-auto '/>
 <Image src={binance}  alt="binance"
 width={100} height={100} 
 className='mx-auto  '/>
 <Image src={dropbox}  alt="dropbox"
 width={100} height={100} 
 className='mx-auto '/>
 <Image src={coinbase}  alt="coinbase"
 width={100} height={100} 
 className='mx-auto '/>

</div>

    </section>
    
  )
}

export default Clients