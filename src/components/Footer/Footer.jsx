import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Whatsapp from "@iconscout/react-unicons/icons/uil-whatsapp"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>arghapaul005@gmail.com</span>
        <div className="f-icons">
         <a href="https://www.linkedin.com/in/argha-paul-06b027a9"><LinkedIn color="white" size={"3rem"} /></a>
        <a href="https://github.com/arghapaul1993">  <Gitub color="white" size={"3rem"} /> </a>
        <a href="https://t.me/Arghap">  <Facebook color="white" size={"3rem"} /> </a>
        <a href="https://www.instagram.com/argha3922/?igshid=ZDdkNTZiNTM%3D">  <Instagram color="white" size={"3rem"} /> </a>
        <a href="https://t.me/Arghap">  <Whatsapp color="white" size={"3rem"} /> </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
