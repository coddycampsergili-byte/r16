import React from 'react'
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter, FaFacebook  } from "react-icons/fa6";

function Help() {
  return (
    <div className='flex flex-col gap-15'>
       <div className="">
         <h2 className="text-xl font-bold">You need More Help?</h2>
        <p className="">One of out workspace experts will reach out to you based on <br /> the category of your question.</p>
       </div>
       <div className="">
        <p className="">Follow Us:</p>
        <div className="flex gap-2">
            <FaXTwitter />
            <FaFacebook />
            <IoLogoGithub />
        </div>
       </div>

    </div>
  )
}

export default Help