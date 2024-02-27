import React from 'react'
import { FaUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';


const TopNav = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      <div className='border '><Link to='/'><img src="https://images.tilemerchant.ie/static/frontend/Limely/tilemerchant/en_GB/images/logo.svg" alt="" className='h-10' /></Link></div>
      <div className='relative '><input type="text " placeholder='Search' className='border-2 w-[40vw] p-2 '/>
      <CiSearch className='absolute right-3 top-2 text-2xl' /></div>
      <div className='flex items-center gap-2 pr-10'>
      <FaUser className='text-2xl  '  items-center/>
      <CiHeart className='text-3xl ' />
      <IoCartOutline className='text-3xl ' />
      </div>
    </div>
  )
}

export default TopNav
