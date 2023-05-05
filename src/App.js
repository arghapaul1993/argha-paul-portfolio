import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./App.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Skills from "./components/skills/Skills";
import { useContext } from "react";
import { themeContext } from "./Context";

///////////////////
import SideBar from "./components/sidebar/SideBar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard.jsx";
import Users from "./components/pages/Users";
import Messages from "./components/pages/Messages";
import FileManager from "./components/pages/FileManager";
import Analytics from "./components/pages//Analytics";
import Order from "./components/pages/Order";
import Saved from "./components/pages/Saved";
import Setting from "./components/pages//Setting";
//////


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
  {/* <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router> */}

      <Navbar />
      <Intro />
     <Services />
     <Skills/>
     <Experience />
   <Works /> 
    <Portfolio /> 
      <Testimonial />
      <Contact />
        <Footer />

       
    
    </div>
  );
}

export default App;
