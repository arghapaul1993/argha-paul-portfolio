import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
import flip from "../../img/flip.jpg";
import whatApp from "../../img/whatApp.jpg";
import blog from "../../img/blog.jpg";
import google from "../../img/google.png";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={flip} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={whatApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={blog} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={google} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
