"use client"

import Image from "next/image"
import Profilepic from "../../public/fox.jpg"
import { PROFILE } from "../constants"



const ProfileOverview = () => {
  return (
    <div className=" w-full select-none scrollbar-hide z-80 xxs:py-1 fixed">
      <div className="flex flex-col items-center mt-5 justify-center gap-1 select-none">
        <h1 className=" lg:text-3xl xxs:text-xl text-orange-300 tracking-wider">{PROFILE.name}</h1>
        <p className="tracking-widest lg:text-xl text-white xxs:text-md">{PROFILE.city}</p>
        <p className="tracking-widest md:text-[15px] xs:text-[10px] xxs:text-[8px] xs:ml-1 xxs:ml-2 font-sans text-white uppercase">{PROFILE.greet}</p>

      </div>
    </div>
  )
}

export default ProfileOverview