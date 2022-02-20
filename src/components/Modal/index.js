import React from 'react';

const Modal = ({ onClose, currentProject }) => {
    const { name, description, tech, } = currentProject;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="projectTitle">{name}</h3>
                <p>{description}</p>
                <p>technologies used: {tech}</p>
                <section>
                    links
                </section>
                <button type="button">X</button>
            </div>
            </div>

    );
}

export default Modal;