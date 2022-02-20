import React, { useState } from 'react';
import Modal from '../Modal';

function ProjectList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects] = useState([
    {
      name: 'HikeSpot',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ]);

  const [currentProject, setCurrentProject] = useState();

  const toggleModal = (project, i) => {
    setCurrentProject({...project, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && (
      <Modal onClose={toggleModal} />
      )}
      <div className="flex-row">
        {projects.map((project, i) => (
          <img
            src={require(`../../assets/projects/${i}.jpg`).default}
            alt={project.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(project, i)}
            key={project.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
