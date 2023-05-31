import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Experiences from './Experiences'
import Certificate from './Certificate'

const Resume = () => {
  const [educationData, setEducationData] = useState(true)
  const [skillsData, setSkillsData] = useState(false)
  const [expereinceData, setExperienceData] = useState(false)
  const [certificateData, setCertificateData] = useState(false)

  return (
    <section id='resume' className="w-full py-20 border-b-[1px] border-b-black">
        <div className="flex justify-center items-center text-center">
        <Title 
            title="1+ YEARS OF EXPERIENCE PROGRAMMING AND +10 YEARS SPATIAL ANALYST"
            des="My Resume"
        />
        </div>
        <div>
            <ul className="w-full grid grid-cols-4">
                <li 
                  onClick={() => 
                    setEducationData(true) &
                    setSkillsData(false) & 
                    setExperienceData(false) &
                    setCertificateData(false)
                  } 
                  className={`${educationData ? "border-designColor" : "border-transparent"}  resumeli`}
                  >
                    Education</li>
                <li 
                  onClick={() => 
                    setSkillsData(true) &
                    setEducationData(false) & 
                    setExperienceData(false) &
                    setCertificateData(false)
                  } 
                  className={`${skillsData ? "border-designColor" : "border-transparent"}  resumeli`}
                  >
                    Professional Skills
                  </li>
                <li 
                  onClick={() => 
                    setExperienceData(true) & 
                    setEducationData(false) & 
                    setSkillsData(false) &
                    setCertificateData(false)
                   
                  } 
                  className={`${expereinceData ? "border-designColor" : "border-transparent"}  resumeli`}
                  >
                    Experience
                </li>
                <li 
                  onClick={() => 
                    setCertificateData(true) & 
                    setEducationData(false) &
                    setSkillsData(false) & 
                    setExperienceData(false)  
                  } 
                  className={`${certificateData ? "border-designColor" : "border-transparent"}  resumeli`}
                  >
                    Certificate
                </li>
            </ul>
        </div>
        { educationData && <Education />}
        
        { skillsData && <Skills />}
          
        { expereinceData && <Experiences />}
        
        { certificateData && <Certificate />}
          
     
    </section>
  )
}

export default Resume