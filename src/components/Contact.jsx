import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-[35px]">
      <motion.h1
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: -100 }}
       transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl">Contact Me</motion.h1>
      <div className="text-center tracking-tight">
        <motion.p 
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -100 }}
         transition={{ duration: 0.5 }}
        className='my-4 '><span className='text-purple-400'>Address--</span>{CONTACT.address}</motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        className="my-4"><span className='text-purple-400'>Email-- </span>{CONTACT.email}</motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
        className="my-4"><span className='text-purple-400'>Phone No--</span> {CONTACT.phoneNo}</motion.p>
        
      </div>



      </div>
      
    </>
  )
}

export default Contact
