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
        <div className='w-full'>
            <div className="py-12 font-titleFont flex flex-col gap-4">
            <p className="text-sm text-designColor tracking-[4px]">2001 - Present</p>
            <h2 className="text-4xl font-bold">Educational Quality</h2>
            </div>
            <div className="mt-14 w-full h-[1200px] border-l-[6px] border-l-black boarder-opacity-30 flex flex-col gap-10">
                <ResumeLists 
                    title="Full Stack Java Developer"
                    subtitle="Per Scholas (2023 - 2024)"
                    des="Successfully completed an intensive, instructor-led Full Stack Java training program at Per Scholas, 
                    encompassing over 600 hours of remote learning. Acquired expertise in building comprehensive web applications with both front-end and back-end components. 
                    Covered technologies include Relational Databases, SQL, Version Control using GitHub, HTML, CSS, JavaScript, Java SE, Java EE, Spring Framework, Spring Boot, 
                    Web Services, Microservices, CI/CD, ORM, JUnit Testing, and Code Quality. Developed valuable experience with a primary focus on backend application development independently, 
                    while also handling front-end tasks. Demonstrated effective project management by meeting deadlines, delivering on project requirements, and producing high-quality, scalable software solutions."
                />
                <ResumeLists 
                    title="Full Stack Software Engineer"
                    subtitle="Multiverse (2022 - 2023)"
                    des="Completed a rigorous training program on full-stack web development, with expertise in Test Driven Development, 
                        CSS, HTML, Bootstrap, Express, Node, React, Redux, JavaScript, Postman API, Docker, MySQL, PostgreSQL and REST APIs.
                        I have gained valuable experience building both frontend and backend application independently and in collaboration with cross-functional teams, 
                        managing deadlines and deliverables, and delivering high-quality, scalable software solutions."
                />
                <ResumeLists 
                    title="Java Full Stack Java Developerr"
                    subtitle="Atlanta Technical College (03/2022)"
                    des="Participating in a Full Stack Java Developer program through Generation USA spending 560 hours learning technologies 
                        to deploy full stack web applications using Git, Javascript, Java, HTML5, CSS3, SQL, and Bootstrap. Participating in a Full Stack Java Developer program through Generation USA spending over 460+ hours learning technologies to deploy full stack web applications using Git, Javascript, Java, HTML5, CSS3, SQL, and Bootstrap."
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
        </motion.div>
  )
}

export default Education