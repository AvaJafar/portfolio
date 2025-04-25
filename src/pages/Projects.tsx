import React, { useState } from 'react';
import './Projects.css';

interface ProjectCard {
  title: string;
  shortDescription: string;
  image: string;
  link?: string;
  details?: string[];
  gallery?: { src: string; caption: string }[];
}

const projects: ProjectCard[] = [
  // ... [your full projects array remains unchanged]
];

const Projects: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [galleryIndexMap, setGalleryIndexMap] = useState<{ [key: number]: number }>({});

  const PASSWORD = 'project123';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password.');
    }
  };

  if (!authenticated) {
    return (
      <div className="projects-container" style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Enter password to view projects</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '0.5rem',
              fontSize: '1rem'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#e50914',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setGalleryIndexMap((prev) => ({ ...prev, [index]: 0 }));
  };

  const prevSlide = (gallery: any[], index: number) => {
    setGalleryIndexMap((prev) => ({
      ...prev,
      [index]: (prev[index] - 1 + gallery.length) % gallery.length
    }));
  };

  const nextSlide = (gallery: any[], index: number) => {
    setGalleryIndexMap((prev) => ({
      ...prev,
      [index]: (prev[index] + 1) % gallery.length
    }));
  };

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;
          const galleryIndex = galleryIndexMap[index] || 0;

          return (
            <div key={index} className={`project-card ${isExpanded ? 'expanded' : ''}`}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    {index < 2 ? 'Article Link' : 'View More'}
                  </a>
                )}
                {isExpanded && project.details && (
                  <div className="project-more-details">
                    <h4>Project Objectives & Results</h4>
                    <ul>
                      {project.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {isExpanded && project.gallery && (
                  <div className="custom-slider">
                    {project.gallery.length > 1 && (
                      <button className="slider-nav left" onClick={() => prevSlide(project.gallery!, index)}>&lt;</button>
                    )}
                    <div className="slider-image-wrapper">
                      <img src={project.gallery[galleryIndex].src} alt="gallery" />
                      <div className="slider-caption">{project.gallery[galleryIndex].caption}</div>
                    </div>
                    {project.gallery.length > 1 && (
                      <button className="slider-nav right" onClick={() => nextSlide(project.gallery!, index)}>&gt;</button>
                    )}
                  </div>
                )}
              </div>

              {(project.gallery || project.details) && (
                <span className="expand-icon" onClick={() => toggleExpand(index)}>
                  {isExpanded ? '–' : '+'}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
