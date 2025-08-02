import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const Contact = () => {
  return (
    <div className='flex flex-col justify-center h-[300px] md:flex-row md:justify-evenly items-center md:w-full md:h-[200px] bg-blue-400'>
      <div className='flex flex-col gap-2 p-2 m-2'>
        <h1 className='font-bold text-5xl md:text-7xl '>Contact</h1>
        <p className='text-sm md:text-xl pl-8'>Feel Free To Reach Out!!!</p>
      </div>

      <div className='flex flex-col p-5 md:p-2 m-2 gap-2'>
        <div className='flex flex-col p-2 '>
          <MdOutlineMailOutline className=' text-xl md:text-2xl'/>
          <a href="saifuddinkhan140@gmail.com" className='text-sm md:text-xl'>saifuddinkhan140@gmail.com</a>
        </div>

          
        <div className='flex flex-col p-2 ' >
          <CiLinkedin className=' text-xl md:text-2xl' />
          <a href="www.linkedin.com/in/saifuddin-khan-a38833322" className='text-sm md:text-xl'>linkedin.com/in/saifuddin-khan</a>
        </div>
      </div>
    </div>
  )
}

export default Contact