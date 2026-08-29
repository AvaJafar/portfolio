import React, { useState } from 'react';
import CategoryNav from './CategoryNav';
import ProjectRow from './ProjectRow';
import { CATEGORIES, getProjectsByCategory, categorySlug } from './data';
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

  return (
    <div className="projects-page">
      <CategoryNav />
      <div className="projects-intro">
        <h1>My Projects</h1>
        <p>
          <strong>Multi-Brand Strategist.</strong> I build audiences and turn cultural attention into
          commercial outcomes. Years across entertainment, retail, CPG, beauty, tech, and nonprofit
          narrative work. Watch my work!
        </p>
      </div>
      <div className="project-rows">
        {CATEGORIES.map((cat) => (
          <ProjectRow key={cat} id={categorySlug(cat)} title={cat} projects={getProjectsByCategory(cat)} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
