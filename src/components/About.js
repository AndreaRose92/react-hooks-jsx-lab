import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Alexa, play "True Player For Real" by MC Lars</p>
      <img src={image} alt="I made this"/>
    </div>
  )
}

export default About;
