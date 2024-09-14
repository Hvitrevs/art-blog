'use client'

import React from 'react'
import ProfileOverview from './ProfileOverview'



const Navbar = () => {
  return (
    <div className='w-full h-[230px] fixed top-0  bg-[#03001417] backdrop-blur-md z-40 '>
      <ProfileOverview />
      <div className="w-full h-full flex flex-row items-center justify-between lg:gap-20 py-[190px] xs:px-3 xxs:px-4 xs:gap-6 ">
        
        <div className="w-[1500px] h-full flex flex-row items-center justify-between lg:px-[50px] mx-auto md:px-[0px] xs:px-2 xxs:px-3 " >
          <div className="flex items-center justify-center w-full h-auto border border-[#694e2b] bg-[#0300145e] rounded-full text-[#f9d29e] lg:text-[13px] md:text-[14px] xs:text-[10px] xxs:text-[9px]  xs:gap-4 xxs:gap-3 md:gap-10 font-sans uppercase xxs:py-2 ">
            
            <a href="#readings" className="cursor-pointer">
              Home
            </a>
            <a href="#tests" className="cursor-pointer">
              Prints
            </a>
            <a href="#contact" className="cursor-pointer">
              Canvases
            </a>
            <a href="#readings" className="cursor-pointer">
              About
            </a>
            <a href="#readings" className="cursor-pointer">
              Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar