import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from 'framer-motion';
import { IoLogoJavascript } from "react-icons/io5";

function Tech() {

    const iconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    })

    return (
        <>
            <div className="border-b border-neutral-800 pb-24">
                <motion.h1
                whileInView={{opacity:1, y:0}}
                initial={{opacity:0,y:-100}}
                transition={{duration:1.5}}
                className="my-20 text-center text-4xl">Technologies</motion.h1>
                <motion.div whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div
                        variants={iconVariants(2)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiReactjsLine className='text-7xl text-cyan-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(6)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <IoLogoJavascript className='text-7xl' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(4)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <RiTailwindCssFill className='text-7xl text-cyan-400' />
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2.5)}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-800 p-4">
                        <FaNodeJs className='text-green-600 text-7xl' />
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default Tech
