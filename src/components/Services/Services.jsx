import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';
import ResumeNew from './Arghapaul.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          Dedicated and Hardworking Reactjs Developer
          <br />
          get your business started by collaborating with me        </spane>
        <a href={ResumeNew} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
      */} 
        {/* 1st card  */}
        <motion.div
          initial={{ left: "-11rem", top: "2rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express, MongoDB"}
          />
        </motion.div>
      
        {/* 2nd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "11rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Soft Skills"}
            detail={
              "Hey! I am having good communication skills , i can communicate in Hindi and English Both"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        {/* 3rd */}
        <motion.div
          initial={{ top: "2rem", left: "35rem" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"HOBBIES"}
            detail={
              " ❖Fishing , ❖Jogging , ❖Bike riding  , ❖Diary writing,"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>

        {/* 4th */}
        <motion.div
          initial={{ top: "19rem", left: "45rem" }}
          whileInView={{ left: "40rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Soft Skills"}
            detail={
              "Hey! I am having good communication skills , i can communicate in Hindi and English Both"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
      
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
