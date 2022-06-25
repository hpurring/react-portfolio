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
      <div className="bio-container" id='bio-container'>
        <h1 className="bio-header">about me</h1>
        <div className="bio-content">
          <a>
            Hi there! I'm a full-stack developer with a background in classical music, non-profit fundraising, and communications. Originally from western Massachusetts, I lived in New York City for a number of years before relocating to Durham, North Carolina. 
            <br></br>
            <br></br>
            In addition to pursuing my work as a software developer, I continue to freelance as a classical composer specializing in concert music. At its core, composing music is creative problem solving—not unlike coding. My musical training has meaningfully informed my development as a software engineer, allowing me to think creatively in both solo and collaborative efforts.
            <br></br>
            <br></br>I received a bachelor's degree from the Shepherd School of Music at Rice University, master's degrees from The Juilliard School and Yale University, and a certificate in full-stack web development from Columbia University's School of Engineering.
          </a>
        </div>
      </div>
      <div className="tech-container">
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" 
        alt="HTML5"
        className="tech-icon"        
      />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        alt="CSS3"
        className="tech-icon"
      />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
        alt="JavaScript"
        className="tech-icon" 
      />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"          
        alt="React"
        className="tech-icon" 
      />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"          
        alt="JQuery"
        className="tech-icon" 
      />
       <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"                   
        alt="Node.js"
        className="tech-icon" 
      />
       <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
        alt="Express.js"
        className="tech-icon" 
      />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg"
        alt="Handlebars"
        className="tech-icon" 
      />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"          
        alt="MySQL"
        className="tech-icon" 
      />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"         
        alt="MongoDB"
        className="tech-icon" 
      />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" 
        alt="GitHub"
        className="tech-icon" 
      />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg"
        alt="Heroku"
        className="tech-icon" 
      />
      






      </div>
    </div>
  );
}

export default Home;
