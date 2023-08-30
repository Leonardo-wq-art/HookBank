
import Image from "next/image"
import bill from "@/public/bill.png"
import apple from "@/public/apple.svg"
import google from "@/public/google.svg"
const Billing = () => {
  return (
  <section id='product' className='px-5 flex md:flex-row h-full w-full
  flex-col-reverse my-10'>
   
    <div className='w-full h-full flex py-10 items-center  md:justify-end justify-center'>
    <div className='sm:w-[384px] w-[256px] sm:h-[356px] h-[237px]' >
    <Image src={bill} alt="bill"  className=" sm:w-[384px] w-[256px]
     sm:h-[356px] h-[237px]"
     
     width={156} height={124}/>
    </div>
</div>
<div className={` md:text-left w-full
  text-center flex md:items-start items-center
   justify-center flex-col`}>
      <h2 className={`font-poppins 
      font-semibold sm:text-5xl text-4xl text-white
     w-full max-w-md
 lg:mr-10 mx-0`}>Easily control  your <span className=' max-w-md  mx-0'>billing & invoicing</span> 
 </h2>
      <p className={` text-gray-400 mt-3  max-w-sm  `}>
        Is easy to control and it makes your decision much faster, and simpler.
    Is not necessity to over  complicated things in our company
      </p>
      <div className='flex flex-row flex-warp sm:mt-10 mt-6 items-center justify-center'>
       
    
        <Image src={apple} alt="apple"  className='cursor-pointer mx-3' />
        <Image src={google}  alt="google_play" className='cursor-pointer mx-3'  />
      </div>
      </div>
    
  </section>
  )
}

export default Billing