import React from 'react';
import ProjectCard from './ProjectCard';
import '../../../src/App.css'; // Import the Projects.css file
 

const Projects = () => {
  // Project data array
  const projectsData = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      imageUrl: 'path/to/project1-image.jpg',
      link: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      imageUrl: 'path/to/project2-image.jpg',
      link: 'https://example.com/project2',
    },
    // Add more projects here
  ];

  return (
    <div className="projects-container">
      <h2>Previous Work</h2>
      <div className="project-cards">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
