import Image from "next/image"
import Button from "./Button"
import Send from "@/public/Send.svg"
import Shield from "@/public/Shield.svg"
import Start from "@/public/Star.svg"

const Business = () => {
  return (
   <section id='features' className={` md:px-10
    px-5 h-full w-full flex lg:flex-row flex-col`}>
    <div className={` md:text-left w-full h-full
     text-center flex flex-col  justify-center
      lg:items-end items-center `}>
      <h2 className={` font-poppins lg:text-left text-center
       font-semibold sm:text-5xl text-4xl text-white max-w-xl `}>You do the business, 
        <span className='mr-4 '>we'll handle the money.</span> </h2>
        
        <p className={` text-gray-400
         max-w-xl mt-5 lg:text-left text-center`}>With the right credit card, you can 
        improve your financial life by building 
        credit, earning rewards and saving,
        money.
        But with hundreds of credit
        cards on the market.
      </p>
    
    
      <div className='flex md:w-[576px] w-full items-center justify-center'>
      <div className='flex items-center lg:justify-start justify-center my-5 h-full w-full
    '>
      <Button styles="mt-10" />
      </div>
      </div>
    </div>
    <div className=" flex lg:items-start items-center  
    justify-center  w-[100%] flex-col   ">
    
     <div className="flex lg:flex-row flex-col hover:bg-gray-800  justify-center
      items-center  p-0
      rounded-xl   ">
<Image src={Start} alt="star" 
 className='mx-3 my-5   ' width={24} height={24}/>
<div className='flex flex-col my-5  lg:text-left text-center '>
<h2 className='font-bold  text-white px-3'>Rewards</h2>
<p className="text-gray-400 max-w-md  pl-3 ">The best credit cards offer some tantalizing combinations of promotions and prizes</p>
</div>



</div>

<div className="flex lg:flex-row flex-col  p-0 hover:bg-gray-800  
justify-center items-center  rounded-xl w-auto h-auto ">
<Image src={Shield} alt="shield"  className='mx-3   feature-card' width={24} height={24} />
<div className='flex flex-col my-5  text-white lg:text-left text-center'>
  <h2 className='font-bold  text-white px-3'>100% Secured</h2>
  <p className="text-gray-400 max-w-md   pl-3">We take proactive steps make sure your information and transactions are secure.</p>


</div>
</div>

<div className=" flex lg:flex-row flex-col  p-0 hover:bg-gray-800 
 justify-center items-center  rounded-xl w-auto h-auto mb-4">
<Image src={Send} alt="Send"  className='mx-3  feature-card' width={24} height={24}/>
<div className='flex flex-col  my-5  text-white lg:text-left text-center' >
  <h2 className='font-bold text-white px-3'>Balance Transfer</h2>
<p className="text-gray-400 max-w-md  pl-3">A balance transfer
 credit card can save you a lot of money in interest charges.</p>

</div>
</div>

    </div>
   </section>
  )
}

export default Business