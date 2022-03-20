import React from "react";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="homepage">
        <img
          src={require("../../assets/photos/Purrington-headshot2.jpg")}
          alt="Hilary Purrington"
          className="homepage-headshot"
        />
        <div className="home-container">
          <h1 className="home-header"></h1>
        </div>
      </div>
      <div className="bio-container">
        <h1 className="bio-header">about me</h1>
        <div className="bio-content">
          <a>
            Hi there! I'm a full-stack developer with a background in classical
            music and non-profit fundraising. A gifted writer and communicator,
            my full-stack software development skills have dramatically enhanced my ability to
            meaningfully and creatively interact with mission-driven
            organizations. 
            <br></br>
            <br></br>
            Originally from western Massachusetts, I lived in New
            York City for a number of years and recently relocated to Durham,
            North Carolina. In addition to pursuing my work as a software
            developer, I continue to freelance as a classical composer
            specializing in concert music.
            <br></br>
            <br></br>I received a bachelor's degree from the Shepherd School of
            Music at Rice University, master's degrees from The Juilliard School
            and Yale University, and a coding
            certificate from Columbia University's School of Engineering.
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
