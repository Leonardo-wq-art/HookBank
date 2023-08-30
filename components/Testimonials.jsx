import FeedBackCard from "./FeedBackCard"

const Testimonials = () => {
  return (
    <section id="" className='flex flex-col h-full w-full px-5 mt-20' >
      <div className='flex sm:flex-row flex-col md:text-left text-center items-center justify-center '>
        <div className=''>
<h2 className='font-poppins font-semibold  sm:text-5xl text-4xl text-white
      max-w-[400px]'>What people are saying about us</h2>
</div>
<div className=' justify-start items-center flex md:mx-5 mx-0'>
  <p className='text-gray-400 max-w-[400px] mt-5'>
  Everything you need to do is 
just accept card payments
 and grow your business anywhere on the planet</p>
 </div>
      </div>
      <div className='my-12 feedback-container flex md:flex-row
       flex-col gap-8 justify-center items-center'>

  <FeedBackCard/>
      </div>
    </section>
  )
}

export default Testimonials