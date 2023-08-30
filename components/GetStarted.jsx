import Image from "next/image"
import arrow_up from "@/public/arrow-up.svg"
const GetStarted = () => {
  return (
    <div className='flex flex-1 sm:justify-start justify-center
     md:mr-10 mr-0 h-full w-full'>
    <div className={`flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`flex justify-center items-start  flex-row ` }>
          <p className=' font-medium  mr-2'>
            <span className='text-gradient  justify-center'> Get
           </span>
          </p>
          <Image src={arrow_up} alt="arrow"
            width={23} height={23}  className=' object-contain'/>
        </div>
        <p className=' font-medium '>
            <span className='text-gradient '>Started
            </span>
          </p>
      </div>
    </div>
    </div>
  )
}

export default GetStarted