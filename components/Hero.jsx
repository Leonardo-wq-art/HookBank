import Image from 'next/image'
import GetStarted from './GetStarted';
import robot from "@/public/robot.png"
import Discount from "@/public/Discount.svg"
const Hero = () => {
  return(
  <section className='h-full w-full ' id="home">
    <div className=' py-12 '>
      <div className='w-full flex items-center md:justify-start justify-center'>
      <div className='md:mb-0 mb-10 px-3  rounded-xl bg-discount-gradient 
      flex flex-row items-center justify-center max-w-xs md:mx-3 '>
        <Image src={Discount} alt="discount" width={40} height={40} />
        <p className='text-white'>20% <span className="
         text-gray-400">  Discount for</span> 1 Mouth <span
          className=" text-gray-400">Account</span>

        </p>
      </div>
      </div>
      <div  className="flex md:flex-row flex-col items-center 2xl:justify-between
       justify-center">
      <div className=' flex flex-col px-5 md:text-left text-center' >
        
        <h1 className='font-bold sm:text-6xl text-4xl md:w-[503px] w-auto
         text-white  md:max-w-3xl max-w-xl '>The Next <br/>
    <span className='text-gradient my-4 mb-2'> Generation </span><br/>Payment Method.</h1>
    <p className=' text-gray-400 md:w-[503px] w-auto
    my-4 mb-2 md:max-w-3xl max-w-lg '>Our team of experts use a methodology to identify 
     the credit cards most likely to fit your needs 
      we examined the percentage rate and the annual fees. </p>
      </div>
     <div className=' sm:flex hidden flex-1 h-full'>
     <GetStarted/>
    
     </div>
<div className=' justify-end relative   lg:flex hidden'>  
     <Image src={robot} alt="robot" 
      className='  lg:flex hidden '/></div>
 
    
     </div>
   
    </div>
    <div className=' sm:hidden flex flex-1 justify-center items-start'>
     <GetStarted/>
    
     </div>
     
  </section>
 )
}

export default Hero