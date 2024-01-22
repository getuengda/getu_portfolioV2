import React from 'react'
import {motion } from 'framer-motion'

const Skills = () => {
  return (

    <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity:1, transition:{duration:.5}}} 
        className="w-full flex gap-20">

    <div className='w-1/2'>
    <div className="py-7 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
        <h2 className="text-4xl font-bold">Back & Front End Skills</h2>
    </div>
    
    <div className="mt-14 w-full flex flex-col gap-3">
    <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Java SE</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">77%</span>
                </motion.span>
            </span>
    </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Spring Boot</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">80%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Nodejs</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">80%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">React</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">80%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">JavaScript</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">80%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">CSS</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">90%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">HTML</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">95%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">SQL</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">75%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Git & GitHub</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">JUnit Testing</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">85%</span>
                </motion.span>
            </span>
        </div>
    </div>
    </div>

    <div className='w-1/2'>
    <div className="py-7 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">2009 - Present</p>
        <h2 className="text-4xl font-bold">Soft Skills</h2>
    </div>
    <div className="mt-14 w-full flex flex-col gap-3">
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Problem Solving</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Team work</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Time Management</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Growth Mindset</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Communication</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Detaile Orientation</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Persistence</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Flexible</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Research</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>
        <div className="overlay-x-hidden">
            <p  className="text-sm uppercase font-medium">Leadership</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                <motion.span  
                    initial={{ x: "-100%", opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500
                    rounded-md relative">
                    <span  className="absolute -top-7 right-0">100%</span>
                </motion.span>
            </span>
        </div>
    </div>
    </div>

    </motion.div>
  )
}

export default Skills