// src/pages/Portfolio.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const projects = [
    {
      name: 'Projeto 1',
      description: 'Uma aplicação React com Vite.',
      image: '/assets/projeto1.png',
      link: 'https://github.com/juliodd/pokedex-wendell'
    },
    
  ];

  return (
    <div className="portfolio">
      <h1>Meus Projetos</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
