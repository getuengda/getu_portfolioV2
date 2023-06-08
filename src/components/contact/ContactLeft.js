import React from 'react'
import { FaGithub, FaTwitter, FaLinkedinIn} from 'react-icons/fa'
import { contactImg } from '../../assets'

const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne 
    flex flex-col gap-8 justify-center">
   <img 
      className="w-full h-64 object-cover rounded-lg mb-2" 
      src={contactImg} 
      alt='contactImg'
      />
      <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold text-white" >Getu Taddesse</h3>
          <p className="text-lg font-normal text-gray-400" >
              Full Stack Software Engineer
          </p>
          <p className="text-base text-gray-400 tracking-wide" >
          Dynamic Software Engineer want to build skills to develop complex solutions, strong creative skill. 
          I have energy, commitment and integrity. I do have wonderful team work sprite and motivation. 
          </p>
          <p className="text-base text-gray-400 flex items-cnetr gap-2" >
              Phone: <span className="text-lightText">+571 594 0583</span>
          </p>
          <p className="text-base text-gray-400 flex items-cnetr gap-2" >
              Email:{" "}
              <span className="text-lightText">getuengda@gmail.com | batworg12@gmail.com</span>
          </p>
      </div>
      <div className="flex flex-col gap-4">
          <h2 className="text-base uppercase font-titleFont mb-4" >Find me in</h2>
          <div className="flex gap-4">
              <span className="bannerIcon">
                 <a href="https://github.com/getuengda" target='_blank' rel="noreferrer"><FaGithub/></a></span>
              <span className="bannerIcon"> 
                <a href="https://www.linkedin.com/in/getu-taddesse/" target='_blank' rel="noreferrer"><FaLinkedinIn /></a></span>
              <span className="bannerIcon"><FaTwitter /></span>
          </div>
      </div>

</div>
  )
}

export default ContactLeft