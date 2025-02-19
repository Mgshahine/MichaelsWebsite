import Navbar from "./Navbar";
import Footer from "./Footer";
import Card from "./Card";
import RiptLogo from '/src/assets/RiptLogo.png';
import NST from '/src/assets/NST.png';
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default App;