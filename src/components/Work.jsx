import React from 'react'
import { EXPERIENCES } from '../constants'
import Tech from './Tech'
import { motion } from 'framer-motion'
function Work() {

    return (
        <>
            <div className="border-b border-neutral-900 pb-4 lg:mb-[35px]">
                <motion.h1
                whileInView={{opacity:1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:1.5}}
                 className="my-20  text-4xl  sm:text-2xl text-center">Education/<span className='text-neutral-500'>Experience</span></motion.h1>
                
                   <div>
                    {EXPERIENCES.map((experience,index)=>(
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <motion.div
                               whileInView={{opacity:1, x:0}}
                               initial={{opacity:0, x:-100}}
                               transition={{duration:0.5}}
                            
                            className="w-full lg:w-1/4">
                                <p className='mb-2 text-sm text-neutral-400 '>{experience.year}</p>
                            </motion.div>
                            <motion.div
                               whileInView={{opacity:1, x:0}}
                               initial={{opacity:0, x:100}}
                               transition={{duration:1}}
                            className="w-full max-w-xl lg:w-3/4">
                                
                                <p className='mb-4 text-neutral-400'>{experience.description}</p>
                                {experience.technologies.map((techs,index)=>(
                                    <span className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium hover:text-black hover:bg-gray-300' key={index}>{techs}</span>

                                ))}
                            </motion.div>

                        </div>
                    ))}
                   </div>
               

            </div>
        </>
    )
}

export default Work
