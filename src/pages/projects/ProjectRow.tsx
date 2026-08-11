import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import TitleCard from './TitleCard';
import { ProjectItem } from './data';
import './ProjectRow.css';

interface ProjectRowProps {
  title: string;
  projects: ProjectItem[];
}

const ProjectRow: React.FC<ProjectRowProps> = ({ title, projects }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  if (projects.length === 0) return null;

  return (
    <section className="project-row">
      <h2 className="project-row-title">{title}</h2>
      <div className="project-row-viewport">
        <button
          className="project-row-nav left"
          onClick={() => scroll('left')}
          aria-label={`Scroll ${title} left`}
        >
          <FaChevronLeft />
        </button>
        <div className="project-row-track" ref={trackRef}>
          {projects.map((project, i) => (
            <TitleCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <button
          className="project-row-nav right"
          onClick={() => scroll('right')}
          aria-label={`Scroll ${title} right`}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ProjectRow;
