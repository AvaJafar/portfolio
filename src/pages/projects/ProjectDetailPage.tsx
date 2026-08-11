import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FaArrowLeft, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { projects, getProjectBySlug } from './data';
import ProjectRow from './ProjectRow';
import { isProjectsUnlocked } from './projectAuth';
import './ProjectDetailPage.css';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [galleryIndex, setGalleryIndex] = useState(0);

  const project = getProjectBySlug(slug || '');

  useEffect(() => {
    if (!isProjectsUnlocked()) {
      navigate('/projects', { replace: true });
    }
    window.scrollTo(0, 0);
  }, [navigate, slug]);

  useEffect(() => {
    setGalleryIndex(0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-detail-notfound">
        <h2>Project not found</h2>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  const related = projects
    .filter((p) => p.slug !== project.slug && p.genres.some((g) => project.genres.includes(g)))
    .slice(0, 8);

  const gallery = project.gallery;

  return (
    <div className="project-detail">
      <div className="project-detail-hero">
        <div className="project-detail-bg" style={{ backgroundImage: `url(${project.backdropImage})` }} />
        <div className="project-detail-shade" />
        <button className="project-detail-back" onClick={() => navigate('/projects')}>
          <FaArrowLeft /> Projects
        </button>
        <div className="project-detail-hero-content">
          <div className="project-detail-genres">
            {project.genres.map((g) => (
              <span key={g} className="project-detail-genre-pill">{g}</span>
            ))}
          </div>
          <h1>{project.title}</h1>
          <p className="project-detail-tagline">{project.tagline}</p>
          {project.externalLink && (
            <a
              href={project.externalLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-detail-cta"
            >
              <FaExternalLinkAlt /> {project.externalLink.label}
            </a>
          )}
        </div>
      </div>

      <div className="project-detail-body">
        <div className="project-detail-description">{project.description}</div>

        {project.details && project.details.length > 0 && (
          <div className="project-detail-results">
            <h3>Project Objectives &amp; Results</h3>
            <ul>
              {project.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        )}

        {gallery && gallery.length > 0 && (
          <div className="project-detail-gallery">
            <h3>Gallery</h3>
            <div className="project-gallery-slider">
              {gallery.length > 1 && (
                <button
                  className="gallery-nav left"
                  onClick={() => setGalleryIndex((galleryIndex - 1 + gallery.length) % gallery.length)}
                  aria-label="Previous image"
                >
                  <FaChevronLeft />
                </button>
              )}
              <div className="gallery-image-wrapper">
                <img src={gallery[galleryIndex].src} alt={gallery[galleryIndex].caption} />
                <div className="gallery-caption">{gallery[galleryIndex].caption}</div>
              </div>
              {gallery.length > 1 && (
                <button
                  className="gallery-nav right"
                  onClick={() => setGalleryIndex((galleryIndex + 1) % gallery.length)}
                  aria-label="Next image"
                >
                  <FaChevronRight />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {related.length > 0 && (
        <div className="project-detail-related">
          <ProjectRow title="More Like This" projects={related} />
        </div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
