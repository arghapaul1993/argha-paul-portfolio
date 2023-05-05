import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "This is Naman Jain! I would like to Thanks Ms Anjali For building a wonderful website for my company. Really Appreciable!!",
    },
    {
      img: profilePic2,
      review:
        "Hey! It's Smita Kashyap! I Got my Personal Portfolio Web Page Ready with You that helpmed me in landing my Job!",
    },
    {
      img: profilePic3,
      review:
        "By profession I am a Doctor and i own a clinic, i always wanted to have my website to increase my business, This was possible because of you, Thank you!",
    },
    {
      img: profilePic4,
      review:
        "I am a college student, Aniket..I would appreciate your work as you helped me out when i had to submit my project within given time period!! ",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
