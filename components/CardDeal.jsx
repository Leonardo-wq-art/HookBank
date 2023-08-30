import Image from 'next/image'
import Button from './Button'
import Card from "@/public/card.png"
const CardDeal = () => {
  return (
    <section id='feature' className='px-5 flex md:flex-row flex-col
    my-10 h-full w-full'>
   
    <div className='md:text-left 
     text-center flex flex-col md:items-end
      items-center  justify-center w-full'>
    <h2 className={`font-poppins 
      font-semibold  sm:text-5xl text-4xl text-white
     w-full max-w-md
 my-3`}>Find a better card deal <span className=''>in few easy steps</span> </h2>
      <p className={` text-gray-400 max-w-md  `}>
        It makes card deal, more easy and it facilitated the way that you uses your card,
    so you don't need to think so much in your next action
      </p>

      <div className='flex items-center lg:justify-start
         justify-center my-5 h-full w-full max-w-md    '>
<Button/>
</div>

</div>
<div className={`h-full w-full flex items-center  md:justify-start justify-center`}>
    <div className=' sm:w-[384px] 	 
    w-[256px] sm:h-[336px] h-[224px]' >
    <Image src={Card} alt="card"  className="  sm:w-[384px] w-[256px]
h-[224px] sm:h-[336px] "
     width={156} height={124}/>
    </div>

      </div>
    
  </section>
  )
}

export default CardDeal