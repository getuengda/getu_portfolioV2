import React from 'react'
import Title from '../layouts/Title'
import Card from './Card'
import { SiProgress } from 'react-icons/si'
import { FaBars } from 'react-icons/fa'
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
          title="Front End Developemnet"
          des="Developing mobile and desktop web applications using Javascript, Typescript, HTML, Tailwind and CSS"
          icons={<AiFillAppstore />}
        />
        <Card 
          title="Back End Development"
          des="Developing RESTFull API, Migration, creating servers & databases for functionality using Java spring boot, Nodejs, Express, Sequlize"
          icons={<FaBars />}
          />
        <Card 
          title="Full Stack Software Engineer"
          des="Coding within multiple technology stacks, Front-end: browser and device using HTML, 
          CSS, and JavaScript, and Back-end: server, application and database using Java & Spring Boot."
          icons={<SiProgress />}
        />
      </div>
    </section>
  )
}

export default Features