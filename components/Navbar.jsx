"use client"
import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image'
import logo from "@/public/logo.svg"
import menu from "@/public/menu.svg"
import close from "@/public/close.svg"


const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
   <nav className='bg-primary h-20 w-full p-5 flex items-center justify-center
     '>
      <div className="flex flex-row justify-between items-center 2xl:w-[1440px] w-full">
  <Image src={logo} alt="logo" width={50} height={50}
  className='h-[150px] w-[150px]'/>

<ul className='md:flex hidden mx-5 flex-row items-center justify-end list-none  '>

  <li className="text-white  mx-5 font-semibold hover:text-blue-300">
    <Link href="#home">Home</Link>
  </li>
  
  <li className="text-white mx-5 font-semibold hover:text-blue-300">
    <Link href="#features">Features</Link>
  </li>
  
  <li className="text-white mx-5 font-semibold hover:text-blue-300">
    <Link href="#product">Product    </Link>
  </li>
  
  <li className="text-white mx-5 font-semibold hover:text-blue-300">
    <Link href="#Clients">Clients</Link>
  </li>


</ul>
<div  className=' md:hidden flex flex-1 items-center  justify-end'>
  <Image src={toggle ? close : menu} alt="menu" 
   width={30} height={30} className='  ' 
  onClick={()=>setToggle((prev)=> !prev)}/>
</div>
<div className={`${toggle ? "flex" :"hidden"} md:hidden z-30
 flex bg-black-gradient p-6 px-10 absolute top-28 
right-0 my-1 mr-3 rounded-xl min-w-xs  sidebar`} onClick={()=>setToggle((prev)=> !prev)}>

<ul className='flex flex-col mx-10 items-center justify-end list-none flex-1 '>


<li className="text-white my-5  font-bold hover:text-blue-300">
    <Link href="#home">Home</Link>
  </li>
   
  <li className="text-white my-5  font-bold hover:text-blue-300">
    <Link href="#features">Features</Link>
  </li>
  
  <li className="text-white my-5  font-bold hover:text-blue-300">
    <Link href="#product">Product    </Link>
  </li>
  
  <li className="text-white my-5  font-bold hover:text-blue-300">
    <Link href="#Clients">Clients</Link>
  </li>

</ul>
</div>
</div>
    </nav>
  );
};


export default Navbar