import React, { useState } from 'react'
import Title from '../layouts/Title'
import Slider from "react-slick";
import { RiStarFill } from 'react-icons/ri'
import { HiArrowRight, HiArrowLeft } from "react-icons/hi"
import { testimonial_nick, w_qoute, testimonial_sara, testimonial_linda, testimonial_bart, testimonial_stephani, testimonial_Krista, testimonial_eric_h2 } from '../../assets';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 
                flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
        onClick={onClick}
        >
        <HiArrowRight />
        </div>
      
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 
      flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
        onClick={onClick}
        >
        <HiArrowLeft />
    </div>
    );
  }

const Testimonial = () => {
const [dotActive, setDotActive] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        beforeChange: (pre, next) => {
            setDotActive(next);
        },
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px"
              }}
            >
              <ul style={{ display: "flex", gap:"15px", justifyContent: "center", marginTop: "20px"}}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={
                i === dotActive ? {
                        width: "12px",
                        height: "12px",
                        color: "blue",
                        background: "#ff014f",
                        borderRadius: "50%",
                        cursor: "pointer",    
                } : {
                    width: "12px",
                    height: "12px",
                    color: "blue",
                    background: "gray",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }
              }
            >
            </div>
          )
      };
      

  return (
    <section id='testimonial' className="w-full py-20 border-b-[1px] border-b-black">
        <div className="flex justify-center items-center text-center">
        <Title 
            title="What Professionals Says"
            des="Testimonial"
        />
        </div>

        <div className="max-w-6xl mx-auto">
            <Slider {...settings}>
            <div className="w-full">
                <div className="w-full h-[500px] flex justify-between">
                    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne 
                        flex flex-col gap-8 justify-center opacity-75">
                         <img 
                            className="h-54 rounded-lg object-cover" 
                            src={testimonial_nick} 
                            alt='testimonial_nick'
                            />
                        <div>
                            <p className="text-xs uppercase text-designColor tracking-wide mb-2" >McKinsey & Company</p>
                            <h3 className="text-2xl font-bold">Nick Papas</h3>
                            <p className="text-base tracking-wide">Group Product Manager</p>
                        </div>
                    </div>
                    <div className="w-[60%] h-full flex flex-col justify-between">
                        <img 
                            className="w-{20%] h-20 w-20 mt-5 ml-5" 
                            src={w_qoute} 
                            alt='w_qoute'
                        />
                        <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg 
                            shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                            <div className="flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-wide">
                                        Full-stack Software Engineer
                                    </h3>
                                    <p className="text-base text-gray-400 mt-3">
                                        Via Upwork - March 2022 - June 2023
                                    </p>
                                </div>
                                <div className="text-yellow-500 flex gap-1">
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                </div>
                            </div>
                                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                Getu worked with my development team as a full stack engineer, contributing to a very large and complex product codebase. 
                                During his time with us, he demonstrated solid software engineering fundamentals, used of modern development tools and patterns, 
                                and worked both independently and in pair programming formats. I found Getu to be inquisitive, thoughtful, and willing to try, fail, 
                                and learn along the way - important traits for any SWE.I wish Getu the best as he continues his SWE journey and continues to grow and develop his expertise.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full h-[500px] flex justify-between">
                    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne 
                        flex flex-col gap-8 justify-center opacity-75">
                         <img 
                            className="h-54 rounded-lg object-cover" 
                            src={testimonial_sara} 
                            alt='testimonial_sara'
                            />
                        <div>
                            <p className="text-xs uppercase text-designColor tracking-wide mb-2" >McKinsey & Company</p>
                            <h3 className="text-2xl font-bold">Sara Morsi</h3>
                            <p className="text-base tracking-wide">Poduct Manager</p>
                        </div>
                    </div>
                    <div className="w-[60%] h-full flex flex-col justify-between">
                        <img 
                            className="w-{20%] h-20 w-20 mt-5 ml-5" 
                            src={w_qoute} 
                            alt='w_qoute'
                        />
                        <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg 
                            shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                            <div className="flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-wide">
                                    Full-stack Software Engineer
                                    </h3>
                                    <p className="text-base text-gray-400 mt-3">
                                     Via Upwork - March 2022 - June 2023
                                    </p>
                                </div>
                                <div className="text-yellow-500 flex gap-1">
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                </div>
                            </div>
                                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full h-[500px] flex justify-between">
                    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne 
                        flex flex-col gap-8 justify-center opacity-75">
                         <img 
                            className="h-54 rounded-lg object-cover" 
                            src={testimonial_linda} 
                            alt='testimonial_linda'
                            />
                        <div>
                            <p className="text-xs uppercase text-designColor tracking-wide mb-2" >Multiverse</p>
                            <h3 className="text-2xl font-bold">Linda Eng</h3>
                            <p className="text-base tracking-wide">Senior Software Engineer & Coach</p>
                        </div>
                    </div>
                    <div className="w-[60%] h-full flex flex-col justify-between">
                        <img 
                            className="w-{20%] h-20 w-20 mt-5 ml-5" 
                            src={w_qoute} 
                            alt='w_qoute'
                        />
                        <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg 
                            shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                            <div className="flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-wide">
                                    Full-stack Software Engineer apprentices
                                    </h3>
                                    <p className="text-base text-gray-400 mt-3">
                                        Via an apprenticeship - May 2022 - July 2023
                                    </p>
                                </div>
                                <div className="text-yellow-500 flex gap-1">
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                </div>
                            </div>
                                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                Getu has consistently demonstrated a depth of technical knowledge and a level of professional commitment that is truly remarkable. 
                                He has shown exceptional skills in the latest front-end technologies, such as React, Angular, and Vue.js, as well as a firm grasp of foundational languages like JavaScript, HTML, and CSS.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="w-full h-[500px] flex justify-between">
                    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne 
                        flex flex-col gap-8 justify-center opacity-75">
                         <img 
                            className="h-54 rounded-lg object-cover" 
                            src={testimonial_bart} 
                            alt='testimonial_bart'
                            />
                        <div>
                            <p className="text-xs uppercase text-designColor tracking-wide mb-2" >McKinsey & Company</p>
                            <h3 className="text-2xl font-bold">Bart Budak</h3>
                            <p className="text-base tracking-wide">Engineering lead, design systems, accessibility</p>
                        </div>
                    </div>
                    <div className="w-[60%] h-full flex flex-col justify-between">
                        <img 
                            className="w-{20%] h-20 w-20 mt-5 ml-5" 
                            src={w_qoute} 
                            alt='w_qoute'
                        />
                        <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg 
                            shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                            <div className="flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-wide">
                                    Full-stack Software Engineer
                                    </h3>
                                    <p className="text-base text-gray-400 mt-3">
                                        Via Upwork - March 2022 - June 2023
                                    </p>
                                </div>
                                <div className="text-yellow-500 flex gap-1">
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                </div>
                            </div>
                                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                I had the pleasure of working with Getu during his time as an apprentice with McKinsey & Company. Getu provides an invaluable perspective into his work which he derives from his previous experiences. If you're seeking a colleague with a thirst for learning and growth, look no further.
                                Getu has shown applicable understanding of full stack development, using technologies like HTML, CSS, and React. I'm impressed with the progress he's made since becoming an apprentice and I'm excited to see where he goes from here.
                                </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="w-full h-[500px] flex justify-between">
                    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne 
                        flex flex-col gap-8 justify-center opacity-75">
                         <img 
                            className="h-54 rounded-lg object-cover" 
                            src={testimonial_stephani} 
                            alt='testimonial_stephani'
                            />
                        <div>
                            <p className="text-xs uppercase text-designColor tracking-wide mb-2" >McKinsey & Company</p>
                            <h3 className="text-2xl font-bold">Stephanie Chacon</h3>
                            <p className="text-base tracking-wide">Cell Operations Specialist</p>
                        </div>
                    </div>
                    <div className="w-[60%] h-full flex flex-col justify-between">
                        <img 
                            className="w-{20%] h-20 w-20 mt-5 ml-5" 
                            src={w_qoute} 
                            alt='w_qoute'
                        />
                        <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg 
                            shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                            <div className="flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-wide">
                                    Full-stack Software Engineer
                                    </h3>
                                    <p className="text-base text-gray-400 mt-3">
                                        Via Upwork - March 2022 - June 2023
                                    </p>
                                </div>
                                <div className="text-yellow-500 flex gap-1">
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                </div>
                            </div>
                                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                Getu was one of our participants in our software engineering apprenticeship program for 14 months. He has shown initiative, curiosity and willingness to push him self to consistency grow and develop new skills.
                                He is also a really great team mate and collaborator. Can't wait to see what is next for him!
                                </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="w-full h-[500px] flex justify-between">
                    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne 
                        flex flex-col gap-8 justify-center opacity-75">
                         <img 
                            className="h-54 rounded-lg object-cover" 
                            src={testimonial_eric_h2} 
                            alt='testimonial_eric'
                            />
                        <div>
                            <p className="text-xs uppercase text-designColor tracking-wide mb-2" >Per Scholas</p> 
                            <h3 className="text-2xl font-bold">Eric Heilig</h3> <span className="text-sm text-designColor"><a href="https://seriesreminder.com/" target='_blank' rel="noreferrer">Link to Series Reminder</a></span>
                            <p className="text-md tracking-wide">Teaching full stack Java | Spring Boot | Database | HTML | JavaScript to adult learners</p>
                        </div>
                    </div>
                    <div className="w-[60%] h-full flex flex-col justify-between">
                        <img 
                            className="w-{20%] h-20 w-20 mt-5 ml-5" 
                            src={w_qoute} 
                            alt='w_qoute'
                        />
                        <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg 
                            shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                            <div className="flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-wide">
                                    Per Scholas Full Stack Java Course, powered by TEKsystems
                                    </h3>
                                    <p className="text-base text-gray-400 mt-3">
                                        Via Full Stack Java Course - September 2023 - January 2024
                                    </p>
                                </div>
                                <div className="text-yellow-500 flex gap-1">
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                </div>
                            </div>
                                <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                                Getu showed a tremendous amount of progress and learning in the Java Boot Camp. I was very impressed with his work ethic and hunger to learn. 
                                Even after he finished his final project with a 100%, and could have stopped working, he continued to work on it and make it better.
                                </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full">
                <div className="w-full h-[500px] flex justify-between">
                    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne 
                        flex flex-col gap-8 justify-center opacity-75">
                         <img 
                            className="h-54 rounded-lg object-cover" 
                            src={testimonial_Krista} 
                            alt='testimonial_Krista'
                            />
                        <div>
                            <p className="text-xs uppercase text-designColor tracking-wide mb-2" >Per Scholas</p>
                            <h3 className="text-2xl font-bold">Krista Roedl</h3>
                            <p className="text-sm tracking-wide">Professional Development Manager at Per Scholas | Advisor of Professional Skills | Coach | Skills Discoverer | Storyteller of Profesional Development</p>
                        </div>
                    </div>
                    <div className="w-[60%] h-full flex flex-col justify-between">
                        <img 
                            className="w-{20%] h-20 w-20 mt-5 ml-5" 
                            src={w_qoute} 
                            alt='w_qoute'
                        />
                        <div className='w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg 
                            shadow-shadowOne p-8 flex flex-col justify-center gap-8'>
                            <div className="flex justify-between items-center py-6 border-b-2 border-b-gray-900">
                                <div>
                                    <h3 className="text-2xl font-medium tracking-wide">
                                    Per Scholas Full Stack Java Course, powered by TEKsystems
                                    </h3>
                                    <p className="text-base text-gray-400 mt-3">
                                        Via Full Stack Java Course - September 2023 - January 2024
                                    </p>
                                </div>
                                <div className="text-yellow-500 flex gap-1">
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                    <RiStarFill/>
                                </div>
                            </div>
                                <p className="text-sm font-titleFont text-gray-400 font-small tracking-wide leading-4">
                                In working with Getu over a 10-week professional development course, I and his instructors recognized him for exhibiting six core values within his cohort. 
                                These included ambition, integrity, professionalism, resourcefulness, perseverance, and commitment to service. During his time in professional development, he asked pertinent questions that allowed others to learn but also gained insight for himself. 
                                He asked for time to understand his professional brand and what he had in his repertoire to market himself to a future opportunity. His communication was always professional and considerate of other's time and attention. 
                                With his commitment to the highest quality of work and his collaborative personality, he would do well within any organization.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
      </div>
    </section>
  )
}

export default Testimonial