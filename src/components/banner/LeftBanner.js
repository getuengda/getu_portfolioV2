import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaTwitter, FaReact, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiSpringboot, SiTailwindcss } from "react-icons/si"

const LeftBanner = () => {
    
    const [text] = useTypewriter({
        words: ['Front End Developer', 'Back End Developer', 'Full Stack Software Engineer'],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000
    });

  return (
    <div className="w-1/2 flex flex-col gap-20">
    <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
        Hi, I'm {" "}
        <span className="text-yellow-300 capitalize">Getu Taddesse</span>
        </h1 >
        <h2 className="text-4xl font-bold text-white">a <span>{text}</span>
        <Cursor 
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="rgb(253 224 71)"
        />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
            Proactive and multidisciplinary Software Engineer with experience in web development and research. 
            With 1+ years of experience as a Java and React developer, and +10 years as a Information Technology expert 
            and researcher in Geo-information analysis. Passionate about learning new technologies and 
            staying up-to-date with industry trends. Seeking a Software developer position to contribute to company's goals 
            and push the boundaries of technology. Thrives on new challenges and dedicated to delivering value-added products on time.
        </p>
    </div>
    <div className="flex justify-between">
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me in
                </h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'>
                        <a href="https://github.com/getuengda" target='_blank' rel="noreferrer"><FaGithub/></a>
                    </span>
                    <span className='bannerIcon'>
                        <a href="https://www.linkedin.com/in/getu-taddesse/" target='_blank' rel="noreferrer"><FaLinkedinIn /></a>
                    </span>
                    <span className='bannerIcon'>
                        <FaTwitter/>
                    </span>
                </div>
            </div>
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                BEST SKILL ON
                </h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'>
                        <FaReact/>
                    </span>
                    <span className='bannerIcon'>
                        <SiSpringboot/>
                    </span>
                    <span className='bannerIcon'>
                        <SiJavascript/>
                    </span>
                    <span className='bannerIcon'>
                        <SiTailwindcss/>
                    </span>
                </div>
            </div>
        </div>
        <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                My Resume
                </h2>
                <div className='flex gap-4'>
                    <button class="bannerIconDownload">
                    {<a href="https://drive.google.com/file/d/1yn487f_-Qfub5tStUUwyIzKtz5sd2lE1/view?usp=sharing" target='_blank' rel="noreferrer">Download Resume</a>}
                    </button>
                </div>
            </div>
   </div>
  )
}

export default LeftBanner