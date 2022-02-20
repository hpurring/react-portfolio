import React, { useState } from 'react';
import Modal from '../Modal';

function ProjectList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects] = useState([
    {
      name: 'HikeSpot',
      description: '',
      tech: '',
      image: ''
    },
    {
      name: 'Blech',
      description: '',
      tech: '',
      image: ''
    }
  ]);

  const setCurrentProject = useState();

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
