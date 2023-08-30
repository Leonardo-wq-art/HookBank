
import Image from 'next/image'
import people from "@/public/people01.png"
import peopletwo from "@/public/people02.png"
import peoplethree from "@/public/people03.png"
import Quotes from "@/public/quotes.svg"
const FeedBackCard = () => (
  
  
       
  <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center'>
  <div className="flex flex-col justify-center items-start bg-black-gradient p-3 m-5
  shadow-xl rounded-2xl h-60 ">
    <Image src={Quotes} alt='quotes'  className='p-3 py-5'/>
    <h3 className="
  text-white max-w-sm p-3">
  Money is only a tool. 
  It will take you wherever you 
  wish, but it will not replace you as the driver.
  </h3>
  <div className="flex  flex-row  justify-center items-center my-3">
    <Image src={people} alt="people.01"
   className='md:mx-2 mx-3 object-contain ' 
  width={40} height={40}/>
  <div>
  <p className="text-white font-bold px-2">Herman Jensen</p>
  <p className="text-xs text-white px-5">Founder & Leader</p>
  </div>
  
  </div>
  </div>
  <div className="flex flex-col 
  justify-center items-start bg-black-gradient  p-3 m-5
  shadow-xl rounded-2xl h-60
  ">
       <Image src={Quotes} alt='quotes'  className='p-3 py-5'/>
       <h3 className="
  text-white max-w-sm p-3">
  Money makes your life easier. 
  If you're lucky to have it, you're lucky.
  </h3>
  <div className="flex  flex-row  justify-center items-center my-3">
    <Image src={peopletwo} alt="people.02"
   className='md:mx-2 mx-3 object-contain ' 
  width={40} height={40}/>
  <div>
  <p className="text-white font-bold px-5"> Steve Mark</p>
  <p className="text-xs text-white px-5">Founder & Leader</p>
  </div>
  
  </div>
  </div>
  <div className="flex flex-col justify-center items-start
bg-black-gradient p-3 m-5
  shadow-xl rounded-2xl h-60">
       <Image src={Quotes} alt='quotes'  className='p-3 py-5'/>
    <h3 className="
  text-white max-w-sm p-3">
  It is usually people in the money business,
   finance, and international trade that are really rich.
  </h3>
  <div className="flex  flex-row  justify-center items-center my-3" >
    <Image src={peoplethree} alt="people.03"
   className='md:mx-2 mx-3 object-contain ' 
  width={40} height={40}/>
  <div>
  <p className="text-white font-bold px-2">Kenn Gallagher</p>
  <p className="text-xs text-white px-5">Founder & Leader</p>
  </div>
  
  </div>
  </div>
  
  
  
  </div>
        
)

export default FeedBackCard