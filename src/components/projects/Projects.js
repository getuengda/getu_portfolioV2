import React from 'react'
import Title from '../layouts/Title'
import ProjectLists from './ProjectLists'
import { FaGithub } from 'react-icons/fa'
import {inventory_app, multiverse_elearning, personal_portfolio_up, college_login, fitclub_starter_app, movie_app} from '../../assets/index'


const Projects = () => {
  return (
    <section id='projects' className="w-full py-20 border-b-[1px] border-b-black">
        <div className="flex justify-center items-center text-center">
        <Title 
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
        />
        </div>
        <div className="grid grid-cols-3 gap-14">
            <ProjectLists 
                title="INVENTORY MANAGEMENT"
                des="This inventory managment application was created during the Multiverse apprenticeship programm in collaboration with team. 
                    It was developed using: reactjs, javascript, css, express and nodejs"
                src={inventory_app}
                github={<a href="https://github.com/inventoryProject0/inventory-app" target='_blank' rel="noreferrer"><FaGithub/></a>}
            />
           <ProjectLists 
                title="MULTIVERSE E-LEARNING"
                des="This online e-learning application was developeed for educational purposes during the Multiverse apprenticeship programm in collaboration with team. 
                    It includes some functionalities from youtube and Multiverse's coding room. It was developed using: reactjs, javascript, css, express and docker"
                src={multiverse_elearning}
                github={<a href="https://github.com/multiverse-elearning-project/multiverse-elearning-project" target='_blank' rel="noreferrer"><FaGithub/></a>}
            />
            <ProjectLists 
                title="PERSONAL PORTFOLIO"
                des="This project is a personal website prepared as show case of my technical skill and presnet who I'm as full-stack developer.
                    It was developed using: reactjs, javascript, tailwind"
                src={personal_portfolio_up}
                github={<a href="https://github.com/getuengda/getu_portfolioV2" target='_blank' rel="noreferrer"><FaGithub/></a>}
            />
            <ProjectLists 
                title="COLLAGE RESULT LOGIN"
                des="This college result login application is designed and implemented as an educational exercise to demonstrate 
                    our backend skills acquired during multiverse bootcamp backend module training in collaboration with team. 
                    It was developed using: reactjs, javascript, java and css"
                src={college_login}
                github={<a href="https://github.com/AAG-backend/college-result-login" target='_blank' rel="noreferrer"><FaGithub/></a>}
            />
            <ProjectLists 
                title="FITCLUB STARTER"
                des="This Fitclub starter app is build on the way to learn and apply tech staks react, css, javascript to build dynamic web application. 
                    Understand and apply styling and framer-motion and others. Update state using react hooks. Which helps me to improve knowledge and skill to build react application."
                src={fitclub_starter_app}
                github={<a href="https://github.com/getuengda/fitness-starter-react-app" target='_blank' rel="noreferrer"><FaGithub/></a>}
            />
            <ProjectLists 
                title="MOVIE APP"
                des="This Movie search app is build on the way to learn and apply tech staks react, css, javascript to build dynamic web application.  
                Update state using react hooks."
                src={movie_app}
                github={<a href="https://github.com/getuengda/proMovieApp" target='_blank' rel="noreferrer"><FaGithub/></a>}
            />

        </div>
    </section>
  )
}

export default Projects