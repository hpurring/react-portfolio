import React, { useState } from 'react';
import Modal from '../Modal';

function ProjectList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects] = useState([
    {
      name: 'HikeSpot',
      description: 'Find your next hiking location! See the weather, access a new playlist, and plan your escape.',
      tech: 'HTML, CSS, Bootstrap, server APIs,',
      image: '',
      github: 'https://github.com/hpurring/proj-01-HikeSpot',
      deployed: 'https://hpurring.github.io/proj-01-HikeSpot/'
    },
    {
      name: 'Blech',
      description: 'a tech blog where users can create blog posts and comment on others\' posts.',
      tech: 'HTML, CSS, Handlebars, Express.js, MySQL, Sequelize',
      image: '',
      github: 'https://github.com/hpurring/blech',
      deployed: 'https://still-citadel-57293.herokuapp.com/'
    }
  ]);

  const [currentProject, setCurrentProject] = useState();

  const toggleModal = (image, i) => {
    setCurrentProject({...image, index: i});
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
      <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row">
        {currentProject.map((image, i) => (
          <img
            // src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );

}

export default ProjectList;