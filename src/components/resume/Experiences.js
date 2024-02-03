import React from 'react'
import { motion } from 'framer-motion'
import ResumeLists from './ResumeLists'

const Experiences = () => {
  return (
    <motion.div
        initial={{opacity: 0}} 
        animate={{opacity:1, transition:{duration:.5}}} 
        className="w-full flex gap-20"
        >
        <div className='w-full'>
        <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] uppercase">2004 - Present</p>
            <h2 className="text-4xl font-bold">Job Experiences</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black boarder-opacity-30 flex flex-col gap-10">
            <ResumeLists 
                title="Software Engineer"
                subtitle="McKinsey & Company ( March 2022 - June 2023)"
                des="Participate in designing, development, and implementation of highly scalable, high-volume software systems and components, 
                    both in frontend and backend development of client-facing web applications."
            />
            <ResumeLists 
                title="Advisor/Geospatial Analyst"
                subtitle="INSA (Aug 2009 - Feb 2020)"
                des="Collaborated with team members to build knowledge and skill on relational database, spatial analysis, 
                    mapping as well as adapted and implemented an international standard and procedure."
            />
            <ResumeLists 
                title="Researcher"
                subtitle="EIAR (2020)"
                des="Agricultural researcher, specifical involved in climate and Agicultural Risk Analysis Projects."
            />
            <ResumeLists 
                title="Researcher"
                subtitle="EIAR (2004 - 2009)"
                des="Agricultural researcher, specifical involved in climate and Agicultural Risk Analysis Projects."
            />
        </div>
        </div>

        </motion.div>
  )
}

export default Experiences