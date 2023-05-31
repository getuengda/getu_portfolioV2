import React, { useState } from 'react';
import Title from '../layouts/Title';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { full_stack_certificate, web_devloper_certificate, aws_cloud_practitioner_cert, arcgis_online_certificate } from '../../assets';

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 
                flex justify-center items-center absolute top-80 right-0 shadow-shadowOne cursor-pointer z-10"
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
      flex justify-center items-center absolute top-80 left-70 shadow-shadowOne cursor-pointer z-10"
        onClick={onClick}
        >
        <HiArrowLeft />
    </div>
    );
  }

const Certificate = () => {
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
    <section id='certificates' className="w-full py-20 border-b-[1px] border-b-black">
        <div className="flex justify-center items-center text-center">
        <Title 
            title="Professional certificates"
            des="Certificates"
        />
        </div>

        <div className="max-w-6xl mx-auto">
            <Slider {...settings}>
            <div className="w-full h-full">
            <div className="w-full h-[95%] flex justify-between bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne 
                         flex-col opacity-75">
                         <img 
                            src={full_stack_certificate} 
                            alt='full-stack Java developer certificate'
                            />
                </div>
            </div>
            <div className="w-full">
            <div className="w-full h-[95%] flex justify-between bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne 
                         flex-col opacity-75">
                         <img 
                            src={web_devloper_certificate} 
                            alt='testimonial_sara'
                            />
                </div>
            </div>
            <div className="w-full h-full">
                <div className="w-full h-[95%] flex justify-between bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne 
                         flex-col opacity-75">
                         <img 
                            src={arcgis_online_certificate} 
                            alt='ArcGIS online certificate'
                            />
                </div>
            </div>
            <div className="w-full h-full">
                <div className="w-full h-[95%] flex justify-between bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne 
                         flex-col opacity-75">
                         <img 
                            src={aws_cloud_practitioner_cert} 
                            alt='ArcGIS online certificate'
                            />
                </div>
            </div>
        </Slider>
      </div>
    </section>
  )
}

export default Certificate