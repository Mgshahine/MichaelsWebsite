import React from "react";
import Card from "../Card";
import RiptLogo from '../assets/RiptLogo.png';
import NST from '../assets/NST.png';
function Projects() {
    return (
        <div className="cardContainer">
        <Card 
          image={RiptLogo} 
          title="Ript Fitness App" 
          text="Creator and Frontend Dev for a full stack fitness app using React Native" 
          cardClass="riptCard"
        />
        <Card 
          image={NST} 
          title="Neural Style Transfer Research" 
          text="Description for another app" 
          cardClass="nstCard"
        />
      </div>
    );
}

export default Projects;