import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { ProjectItem } from './data';
import './ProjectsHero.css';

interface ProjectsHeroProps {
  project: ProjectItem;
}

const ProjectsHero: React.FC<ProjectsHeroProps> = ({ project }) => {
  const navigate = useNavigate();
  const goToDetail = () => navigate(`/projects/${project.slug}`);

  return (
    <div className="projects-hero">
      <div className="projects-hero-bg" style={{ backgroundImage: `url(${project.backdropImage})` }} />
      <div className="projects-hero-shade" />
      <div className="projects-hero-shade-side" />
      <div className="projects-hero-content">
        <span className="projects-hero-eyebrow">Featured {project.genres[0]}</span>
        <h1 className="projects-hero-title">{project.title}</h1>
        <p className="projects-hero-tagline">{project.tagline}</p>
        <div className="projects-hero-actions">
          <button className="projects-hero-btn primary" onClick={goToDetail}>
            <FaPlay /> View Project
          </button>
          <button className="projects-hero-btn secondary" onClick={goToDetail}>
            <FaInfoCircle /> More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHero;
