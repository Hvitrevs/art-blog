"use client"

import Image from "next/image"
import Profilepic from "../../public/fox.jpg"
import { PROFILE } from "../constants"


const ProfileOverview = () => {
  return (
    <div className="my-10 select-none scrollbar-hidden">
      <div className="flex flex-col items-center justify-center gap-1 select-none">
        <Image src={Profilepic}
        width={100}
        height={100}
        alt='profilepic'
        className="rounded-full border-1 border-slate-400" />
        <h1 className=" text-3xl text-orange-300 tracking-wider">{PROFILE.name}</h1>
        <p className="tracking-widest text-xl">{PROFILE.city}</p>
        <p className="tracking-widest text-xs xs:text-10px font-sans uppercase">{PROFILE.greet}</p>

        
      </div>
    </div>
  )
}

export default ProfileOverview