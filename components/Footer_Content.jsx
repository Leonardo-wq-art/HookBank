import Image from 'next/image'
import logo from "@/public/logo.svg"
const Footer_Content = () => {
  return (
    <section className='border-t border-1 border-white h-full w-full'>
 
    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1
     justify-center items-center my-5 max-w-[1000px] mx-auto'>
   <div className='flex lg:text-left text-center flex-col
    lg:justify-center justify-start lg:items-start items-center  h-48   my-5'>
<Image src={logo} alt="logo" width={150} height={150} className=' mb-2 ' />
<p className='text-gray-400 max-w-xs '>A new way to make payments 
 easy, reliable and secure.</p>
    </div>
  <div className="  my-5 flex items-center justify-center 
flex-col md:text-left text-center h-48 ">
    
    <ul>
    <li className='text-slate-300 
    font-bold md:text-left text-center'>Useful Links</li>
<li className=' text-yellow-50 hover:text-blue-300 
cursor-pointer my-2'>Content</li>
<li className=' text-yellow-50 hover:text-blue-300
 cursor-pointer my-2'>How it Works</li>
<li className=' text-yellow-50 hover:text-blue-300
 cursor-pointer my-2'>Create</li>
<li className=' text-yellow-50 hover:text-blue-300
 cursor-pointer my-2'>Explore</li>
<li className=' text-yellow-50 hover:text-blue-300
 cursor-pointer my-2'>
Terms & Services</li>
</ul>
</div>
<div className=" my-5 flex items-center justify-center 
flex-col md:text-left text-center h-48 ">

<ul>
<li className='text-slate-300 font-bold'>
Community</li>
<li className=' text-yellow-50 hover:text-blue-300 
cursor-pointer my-2'>Help Center</li>
<li className=' text-yellow-50 hover:text-blue-300 
cursor-pointer my-2'>Partners</li>
<li className=' text-yellow-50 hover:text-blue-300 
cursor-pointer my-2'>
Suggestions</li>
<li className=' text-yellow-50 hover:text-blue-300 
cursor-pointer my-2'>Blog</li>
<li className=' text-yellow-50 hover:text-blue-300
 cursor-pointer my-2'>
Newsletters</li></ul>
</div>
<div className=" my-5 flex h-48
items-center  justify-start flex-col md:text-left text-center ">

<ul className='md:text-left text-center'>
<li className='text-slate-300 font-bold'>

Partner</li>
<li className=' text-yellow-50 hover:text-blue-300
 cursor-pointer my-2'>
Our Partner</li>
<li className=' text-yellow-50 hover:text-blue-300 
cursor-pointer my-2'>Become a Partner</li></ul>
</div>



    </div>
    <div className='flex sm:flex-row flex-col justify-center items-center border-t-[1px] border-t-slate-400 '>
    <div className='flex flex-row justify-center items-center mb-10 '>
      <h3 className='text-white font-bold my-4
       text-center'>2023 hookbank. All the Right reserve</h3>
      </div>
      <div className='flex flex-row justify-center items-center mb-10 mr-10 '>
       
    </div>
    </div>
    </section>
  )
}

export default Footer_Content