import React from "react";
import IntroAnimation from "./Layout/IntroAnimation/IntroAnimation";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Interests from "./Interests/Interests";

const HomePage = () => (
  <>
    <IntroAnimation />
    <div className="mid-container">
      <About />
      <Projects />
      <Interests />
    </div>
  </>
);

export default HomePage;
