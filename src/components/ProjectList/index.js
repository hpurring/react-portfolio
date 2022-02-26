import React, { useState } from 'react';
import Modal from '../Modal';

function ProjectList() {
  const projects = [
    {
      name: 'HikeSpot',
      description: 'HikeSpot uses HTML, CSS, Bootstrap, and server API calls to help you find your next hiking location. View the current weather, access a new playlist, and plan your escape.',
      image: '../assets/projects/hikespot.png',
      demo: 'https://hpurring.github.io/proj-01-HikeSpot/',
      github: 'https://github.com/hpurring/proj-01-HikeSpot'
    },
    {
      name: 'Blech',
      description: 'Built with HTML, CSS, Handlebars, Express.js, MySQL, and Sequelize, blech! allows users to create blog posts and comment on others\' posts.',
      image: '../assets/projects/blech.png',
      demo: 'https://still-citadel-57293.herokuapp.com/',
      github: 'https://github.com/hpurring/blech'
    }
  ];

  return (
    <div>
      <div className="flex-row">
        {currentProject.map((projects, i) => (
          <img
            src={projects.image}
            alt={projects.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(projects, i)}
            key={projects.name}
          />
        ))}
      </div>
    </div>
  );

}

export default ProjectList;