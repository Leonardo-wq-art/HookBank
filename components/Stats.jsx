
const Stats = () => {
  return(
<section className="grid 
lg:grid-cols-3 md:grid-cols-2 grid-cols-1 
items-center justify-center py-10 h-full 2xl:w-[1440px] w-full mx-auto">

    <div  className={` flex-1 flex justify-center items-center flex-row m-3`}>
      <h2 className='font-poppins font-semibold 
      xs:text-[40px] text-[30px] xs:leading-[53px]
       leading-[43px] text-white'>    3800+     </h2>
      <p className='font-poppins font-normal 
      xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]
       text-gradient uppercase ml-3' >
    User Active 
       </p>
       
    </div>
    <div  className={` flex-1 flex justify-center items-center flex-row m-3`}>
       <h2 className='font-poppins font-semibold 
      xs:text-[40px] text-[30px] xs:leading-[53px]
       leading-[43px] text-white'>        
       230+</h2>
      <p className='font-poppins font-normal 
      xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]
       text-gradient uppercase ml-3' >Trusted by Company 

       </p>
       </div>
       <div  className={`
    flex-1 flex justify-center items-center flex-row m-3`}>
       <h2 className='font-poppins font-semibold 
      xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>$230M+  </h2>
      <p className='font-poppins font-normal 
      xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px]
       text-gradient uppercase ml-3' > Transaction</p>
    </div>
       


</section>)
}

export default Stats