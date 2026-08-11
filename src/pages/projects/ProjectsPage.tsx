import React, { useState } from 'react';
import ProjectsHero from './ProjectsHero';
import ProjectRow from './ProjectRow';
import { GENRES, projects, getProjectsByGenre } from './data';
import { isProjectsUnlocked, unlockProjects } from './projectAuth';
import './ProjectsPage.css';

const PASSWORD = 'project123';

const ProjectsPage: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(isProjectsUnlocked());
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      unlockProjects();
      setAuthenticated(true);
    } else {
      alert('Incorrect password.');
    }
  };

  if (!authenticated) {
    return (
      <div className="projects-gate">
        <h2>Enter password to view projects</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            className="projects-gate-input"
          />
          <button type="submit" className="projects-gate-btn">Unlock</button>
        </form>
      </div>
    );
  }

  const featured = projects.find((p) => p.featured) || projects[0];

  return (
    <div className="projects-page">
      <ProjectsHero project={featured} />
      <div className="project-rows">
        {GENRES.map((genre) => (
          <ProjectRow key={genre} title={genre} projects={getProjectsByGenre(genre)} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
