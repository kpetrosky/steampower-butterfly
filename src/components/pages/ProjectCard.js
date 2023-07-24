// ProjectCard.js

import React from 'react';
// import title from './title';

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Visit Project</a>
    </div>
  );
};

export default ProjectCard;

