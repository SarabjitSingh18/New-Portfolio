import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <>
      <div className="border-b border-neutral-900 pb-4 lg:mb-[35px]">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl">My Projects</motion.h1>
        <div className="">

          {PROJECTS.map((project, index) => (
            <div className="flex flex-wrap mb-8 lg:justify-center" key={index}>
              <motion.div

                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}

                className="w-full lg:w-1/4">
                <img width={150} height={150} className='mb-6 rounded flex ' src={project.image} alt="" />
              </motion.div>
              <motion.div
              
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1}}
              className="w-full max-w-xl  lg:h-3/4">
                <h6>{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech, index) => (
                  <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium hover:bg-gray-300 hover:text-black" key={index}>{tech}</span>

                ))}




              </motion.div>

            </div>

          ))}
        </div>


      </div>

    </>
  )
}

export default Projects
