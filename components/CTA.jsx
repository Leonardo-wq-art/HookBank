
import Button from './Button'
const CTA = () => {
  return (
    <div className="px-10">
    <section className='flex md:flex-row flex-col h-full w-full max-w-[1000px] mx-auto
     bg-black-gradient my-3 rounded-xl 
     justify-center  items-center text-center '>

    <div className="w-full my-10 px-5 flex itemx-center justfify-center flex-col">
     <h2 className={` font-poppins font-semibold text-5xl text-white max-w-xl 
     w-full `}>les't try our service now  </h2>
    <p className={` text-gray-200 max-w-md mt-5`}>
    Everything you need to do is just accept card
     payments and grow your business anywhere on the planet
     </p>
     </div>
     <div className='flex justify-center w-36 mx-4 my-4 '>
     <Button/>
   </div>
  
   </section>
   </div>
  )
}

export default CTA