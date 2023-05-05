import React, { useContext } from "react";
import "./skills.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import flip from "../../img/html2.png";
import whatApp from "../../img/css.png";
import blog from "../../img/react.png";
import google from "../../img/js3.png";

const Skills = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
    
    <div className="skills" id="skills">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>My Skills</span>
      <span>SKILLS</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="skills-slider"
      >
        <SwiperSlide>
          <img className="photos" src={flip} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="photos" src={whatApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="photos" src={google} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="photos" src={blog} alt="" />
        </SwiperSlide>
       
      </Swiper>
    </div>


    
    );
};

export default Skills;