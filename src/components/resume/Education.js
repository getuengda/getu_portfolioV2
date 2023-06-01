import React from 'react'
import { motion } from "framer-motion"
import ResumeLists from './ResumeLists'

const Education = () => {
  return (
    <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity:1, transition:{duration:.5}}} 
        className="w-full flex gap-20"
        >
        <div className='w-1/2'>
            <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2001 - 2023</p>
            <h2 className="text-4xl font-bold">Educational Quality</h2>
            </div>
            <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black boarder-opacity-30 flex flex-col gap-10">
                <ResumeLists 
                    title="Full Stack Software Engineer"
                    subtitle="Multiverse (2022 - 2023)"
                    des="Completed a rigorous training program on full-stack web development, with expertise in Test Driven Development, 
                        CSS, HTML, Bootstrap, Express, Node, React, Redux, JavaScript, Postman API, Docker, MySQL, PostgreSQL and REST APIs.
                        I have gained valuable experience building both frontend and backend application independently and in collaboration with cross-functional teams, 
                        managing deadlines and deliverables, and delivering high-quality, scalable software solutions."
                />
                <ResumeLists 
                    title="Java Full Stack Developerr"
                    subtitle="Atlanta Technical College (03/2022)"
                    des="Participating in a Full Stack Java Developer program through Generation USA spending 560 hours learning technologies 
                        to deploy full stack web applications using Git, Javascript, Java, HTML5, CSS3, SQL, and Bootstrap.Participating in a Full Stack Java Developer program through Generation USA spending over 460+ hours learning technologies to deploy full stack web applications using Git, Javascript, Java, HTML5, CSS3, SQL, and Bootstrap."
                />
                <ResumeLists 
                    title="Web Developer"
                    subtitle="Delgado Community College (09/2021)"
                    des="Participating in a Web Developer program through Generation USA spending over 400+ hours learning technologies 
                    to deploy web applications using Git, Javascript, HTML5, CSS3 and Bootstrap."
                />
                <ResumeLists 
                    title="Master of Science GIS And Remote Sensing"
                    subtitle="Addis Ababa University (03/2009)"
                    des="Spatial database management and programming, Enviromental Risk Assessement, Spatial and Temporal Analysis."
                />
            </div>
        </div>

        <div className='w-1/2'>
        <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px] uppercase">2004 - Present</p>
            <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black boarder-opacity-30 flex flex-col gap-10">
            <ResumeLists 
                title="Software Engineer"
                subtitle="McKinsey & Company (2022 - Present)"
                des="Participate in designing, development, and implementation of highly scalable, high-volume software systems and components, 
                    both in frontend and backend development of client-facing web applications."
            />
            <ResumeLists 
                title="Advisor/Geospatial Analyst"
                subtitle="INSA (2009 - 2020)"
                des="Collaborated with team members to build knowledge and skill on relational database, spatial analysis, 
                    mapping as well as adapted and implemented an international standard and procedure. ."
            />
            <ResumeLists 
                title="Researcher"
                subtitle="EIAR (2020)"
                des="Agricultural researcher, saptial and temporal analysis, Agro-climate analysis, specifical involved in climate and Agicultural Risk Analysis Projects."
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

export default Education