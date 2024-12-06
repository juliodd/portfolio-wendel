
import React from 'react';

const ProjectCard = ({ name, description, image, link }) => {
  return (
    <div className="project-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
    </div>
  );
};

export default ProjectCard;
