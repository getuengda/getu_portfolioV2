import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { SiAntdesign, SiProgress } from 'react-icons/si'
import { FaMobile, FaBars } from 'react-icons/fa'
import { AiFillAppstore } from 'react-icons/ai'

const Features = () => {
  return (
    <section 
      id="features" 
      className="w-full py-20 border-b-[1px] border-b-black"
      >
      <Title title="Features" des="What I Do"/>  
      <div className="grid grid-cols-3 gap-10">
        <Card 
          title="Web Developemnet"
          des="Developing mobile and desktop web applications using Javascript, HTML and CSS"
          icons={<AiFillAppstore />}
        />
        <Card 
          title="Back End Development"
          des="Developing back end website applications; creating servers & databases for functionality"
          // icons={<FaBars />}
          />
        <Card 
          title="Full Stack Software Engineer"
          des="Coding within multiple technology stacks, Front-end: browser and device using HTML, 
          CSS, and JavaScript, and Back-end: server, application and database using Java & Spring Boot."
          icons={<SiProgress />}
        />
        <Card 
          title="Mobile Developemnet"
          des="Developing mobile and desktop web applications using Javascript, HTML and CSS"
          icons={<FaMobile />}
        />
        <Card 
          title="UX Design"
          des="Developing mobile and desktop web applications using Javascript, HTML and CSS"
          icons={<SiAntdesign />}
        />
        <Card 
          title="SEO Optimization"
          des="Developing mobile and desktop web applications using Javascript, HTML and CSS"
        />
      </div>
    </section>
  )
}

export default Features