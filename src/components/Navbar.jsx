import React from 'react'
import logo from '../assets/logo-png.png'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from 'react-icons/fa';


function Navbar() {
  return (
   <>
   <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className="flex flex-shrink-0 items-center">
        <img className='mx-2 w-14' src={logo} alt="logo" />
    </div>
    <div className=" flex m-8 items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/sarabjit-singh-53486b309/"><FaLinkedin className='cursor-pointer hover:scale-50 duration-300'/></a>
        <a href="https://github.com/SarabjitSingh18"><FaGithub className='cursor-pointer hover:scale-50 duration-300'/></a>
        <a href="https://www.instagram.com/i_sarv_jeet_18/">< FaInstagram className='cursor-pointer hover:scale-50 duration-300'/></a>
        <a href="">< FaSquareXTwitter className='cursor-pointer hover:scale-50 duration-300'/></a>

    </div>

   </nav>
   </>
  )
}

export default Navbar
