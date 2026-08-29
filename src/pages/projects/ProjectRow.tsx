import React from 'react';
import TitleCard from './TitleCard';
import { ProjectItem, categorySlug } from './data';
import './ProjectRow.css';

interface ProjectRowProps {
  id?: string;
  title: string;
  projects: ProjectItem[];
}

const ProjectRow: React.FC<ProjectRowProps> = ({ id, title, projects }) => {
  if (projects.length === 0) return null;

  return (
    <section className="project-row" id={id ?? categorySlug(title)}>
      <div className="project-row-head">
        <h2>{title}</h2>
        <div className="project-row-rule" />
        <div className="project-row-count">{String(projects.length).padStart(2, '0')}</div>
      </div>
      <div className="project-row-track">
        {projects.map((project, i) => (
          <TitleCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectRow;
