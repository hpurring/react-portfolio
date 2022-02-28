import React from 'react';
import './cards.css';


function Cards() {
    return(
        <div id='portfolio'>
        <h1 className='recent-projects'>my recent projects</h1>
        <div className="container">
        <div className="card">
            <div id="title_desc">
                <h1 id="project_title">cov-fit</h1>
            </div>
            <img src={require("../../assets/projects/covfit.png")} alt="COV-FIT screenshot" srcset="" />
            <div className="card_inner">
                <h3 id='project_tech'>Build and schedule your own at-home workout! Uses Node.js and Express.js to create a RESTful API; Handlebars.js; and MySQL and Sequelize ORM. Deployed with Heroku.</h3>
                <div id='buttons'>
                    <a id="card_btn" href="http://enigmatic-fjord-07638.herokuapp.com/" target="_blank">
                        demo
                    </a>
                    <a id="card_btn" href="https://github.com/hpurring/COV-FIT" target="_blank">
                        github
                    </a>
                </div>
            </div>
        </div>
        <div className="card">
            <div id="title_desc">
                <h1 id="project_title">Blech</h1>
            </div>
            <img src={require("../../assets/projects/blech.png")} alt="blech screenshot" srcset="" />
            <div className="card_inner">
                <h3 id='project_tech'>Create and edit blog posts and comment on others' posts. ses Node.js and Express.js to create a RESTful API; Handlebars.js; and MySQL and Sequelize ORM. Deployed with Heroku.</h3>
                <div id='buttons'>
                    <a id="card_btn" href="https://still-citadel-57293.herokuapp.com/" target="_blank">
                        demo
                    </a>
                    <a id="card_btn" href="https://github.com/hpurring/blech" target="_blank">
                        github
                    </a>
                </div>
            </div>
        </div>
        <div className="card">
            <div id="title_desc">
                <h1 id="project_title">HikeSpot</h1>
            </div>
            <img src={require("../../assets/projects/hikespot.png")} alt="HikeSpot screenshot" srcset="" />
            <div className="card_inner">
                <h3 id='project_tech'>Discover your next hiking location, view its current weather, and access a  weather-inspired playlist. Built with HTML, CSS, JavaScript, Bootstrap, and server-side APIs.</h3>
                <div id='buttons'>
                    <a id="card_btn" href="https://hpurring.github.io/proj-01-HikeSpot/" target="_blank">
                        demo
                    </a>
                    <a id="card_btn" href="https://github.com/hpurring/proj-01-HikeSpot" target="_blank">
                        github
                    </a>
                </div>
            </div>
        </div>
        <div className="card">
            <div id="title_desc">
                <h1 id="project_title">Team Profiles</h1>
            </div>
            <img src={require("../../assets/projects/teamprofiles.png")} alt="Team Profiles screenshot" srcset="" />
            <div className="card_inner">
                <h3 id='project_tech'>Use this command-line application to generate profiles for you team members. Built with JavaScript, Node.js, Inquirer, HTML, and Bootstrap.</h3>
                <div id='buttons'>
                    <a id="card_btn" href="https://drive.google.com/file/d/1TYLEZcD70w_AK2aEEI9IDtsLOB_D2k03/view?usp=sharing" target="_blank">
                        demo
                    </a>
                    <a id="card_btn" href="https://github.com/hpurring/team-profile-generator" target="_blank">
                        github
                    </a>
                </div>
            </div>
        </div>
        <div className="card">
            <div id="title_desc">
                <h1 id="project_title">Team Tracker</h1>
            </div>
            <img src={require("../../assets/projects/teamtracker.png")} alt="Team Tracker screenshot" srcset="" />
            <div className="card_inner">
                <h3 id='project_tech'>Create, update, read, and delete information about your business's employees, roles, and departments. Built with JavaScript, Node.js, MySQL, and Inquirer.
                </h3>
                <div id='buttons'>
                    <a id="card_btn" href="https://drive.google.com/file/d/1Ar6bO-24ul6TqX7wM9y1bZF6dBDOUOeI/view?usp=sharing" target="_blank">
                        demo
                    </a>
                    <a id="card_btn" href="https://github.com/hpurring/team-tracker" target="_blank">
                        github
                    </a>
                </div>
            </div>
        </div>
        <div className="card">
            <div id="title_desc">
                <h1 id="project_title">Readme Creator</h1>
            </div>
            <img src={require("../../assets/projects/readme.png")} alt="e-commerce backend screenshot" srcset="" />
            <div className="card_inner">
                <h3 id='project_tech'>This command-line application generates a polished README file for your coding project. Built with JavaScript, Node.js, and Inquirer.

                </h3>
                <div id='buttons'>
                    <a id="card_btn" href="https://drive.google.com/file/d/193BYpIQlkl56C4aHcfmpyRDoiCqQxTZd/view?usp=sharing" target="_blank">
                        demo
                    </a>
                    <a id="card_btn" href="https://github.com/hpurring/readme-generator" target="_blank">
                        github
                    </a>
                </div>
            </div>
        </div>
        
    </div>
    </div>


    )
}

export default Cards;