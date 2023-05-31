import React from 'react'
import Title from '../layouts/Title'
import ProjectLists from './ProjectLists'
import {inventory_app, projectFive, projectSeven, multiverse_elearning, personal_portfolio, college_login} from '../../assets/index'


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
            />
           <ProjectLists 
                title="MULTIVERSE E-LEARNING"
                des="This online e-learning application was developeed for educational purposes during the Multiverse apprenticeship programm in collaboration with team. 
                    It includes some functionalities from youtube and Multiverse's coding room. It was developed using: reactjs, javascript, css, express and docker"
                src={multiverse_elearning}
            />
            <ProjectLists 
                title="PERSONAL PORTFOLIO"
                des="This project is a personal website prepared as show case of my technical skill and presnet whi I'm as full-stack developer.
                    It was developed using: reactjs, javascript, tailwind"
                src={personal_portfolio}
            />
            <ProjectLists 
                title="COLLAGE RESULT LOGIN"
                des="This college result login application is designed and implemented as an educational exercise to demonstrate 
                    our backend skills acquired during multiverse bootcamp backend module training in collaboration with team. 
                    It was developed using: reactjs, javascript, java and css"
                src={college_login}
            />
            <ProjectLists 
                title="SOCIAL MEDIA"
                des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                src={projectFive}
            />
            <ProjectLists 
                title="MOVIE APP"
                des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                src={projectSeven}
            />

        </div>
    </section>
  )
}

export default Projects