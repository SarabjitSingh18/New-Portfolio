import React from 'react'
import { ABOUT_TEXT } from '../constants'
import aboutImg from '../assets/about.jpg'
import { motion } from 'framer-motion'
function About() {
    return (
        <>
            <div className="border-b border-neutral-900 pb-4">
                <h2 className='my-20 text-center text-4xl '>About <span className='text-neutral-500'>Me</span></h2>
                <div className="flex flex-wrap ">
                    <div className="w-full lg:w-1/2 lg:p-8">
                        <motion.div 
                        whileInView={{opacity:1,x:0}}
                        initial={{opacity:0, x:-100}}
                        transition={{duration:0.5}}
                        className="flex items-center justify-center">
                            <img className='rounded-2xl ' src={aboutImg} alt="" />
                        </motion.div>


                    </div>
                    <div className="w-full lg:w-1/2 ">
                        <div className="flex justify-center lg:justify-start ">
                            <motion.p
                            whileInView={{opacity:1,x:0}}
                            initial={{opacity:0, x:100}}
                            transition={{duration:0.5}}

                            className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</motion.p>
                        </div>

                    </div>
                    
                </div>

            </div>
        </>
    )
}

export default About
