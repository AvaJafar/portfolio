import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projects, getProjectBySlug } from './data';
import { isProjectsUnlocked } from './projectAuth';
import GallerySection from './GallerySection';
import './ProjectDetailPage.css';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || '');

  useEffect(() => {
    if (!isProjectsUnlocked()) {
      navigate('/projects', { replace: true });
    }
    window.scrollTo(0, 0);
  }, [navigate, slug]);

  if (!project) {
    return (
      <div className="project-detail-notfound">
        <h2>Project not found</h2>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  const hasApproach = Boolean(project.approachStatement || project.approachBody);
  const hasResults = project.metrics.length > 0;
  const hasNotes = project.notes.length > 0;
  const hasPress = project.press.length > 0;
  const hasLinks = project.links.length > 0;

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="project-detail">
      <button className="project-detail-back" onClick={() => navigate('/projects')}>
        ← All Projects
      </button>

      <div className="project-detail-hero">
        {project.heroDriveVideoId ? (
          <iframe
            className="project-detail-hero-video"
            src={`https://drive.google.com/file/d/${project.heroDriveVideoId}/preview`}
            title={`${project.title} hero video`}
            allow="autoplay"
          />
        ) : (
          <img className="project-detail-hero-image" src={project.heroImage} alt={project.title} />
        )}
        <div className="project-detail-hero-scrim" />
        <div className="project-detail-hero-content">
          <span className="project-detail-kicker">{project.category}</span>
          <div className="project-detail-meta-line">
            <span>{project.org}</span>
            <span className="sep">·</span>
            <span>{project.role}</span>
            <span className="sep">·</span>
            <span>{project.timeframe}</span>
          </div>
          <h1>{project.title}</h1>
        </div>
      </div>

      <p className="project-detail-intro">{project.intro}</p>

      {project.challenge && (
        <div className="project-detail-section">
          <div className="project-detail-section-label">
            The Challenge{hasApproach ? ' & Approach' : ''}
            <div className="project-detail-rule" />
          </div>
          {hasApproach ? (
            <div className="project-detail-two-col">
              <p>{project.challenge}</p>
              <div>
                {project.approachStatement && (
                  <div className="project-detail-approach-statement">{project.approachStatement}</div>
                )}
                {project.approachBody && <p>{project.approachBody}</p>}
              </div>
            </div>
          ) : (
            <p className="project-detail-single-col">{project.challenge}</p>
          )}
        </div>
      )}

      {project.owned.length > 0 && (
        <div className="project-detail-section">
          <div className="project-detail-section-label">
            What I Owned
            <div className="project-detail-rule" />
          </div>
          <div className="project-detail-owned-grid">
            {project.owned.map((item, i) => (
              <div className="project-detail-owned-card" key={i}>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {hasResults && (
        <div className="project-detail-section">
          <div className="project-detail-section-label">
            Results
            <div className="project-detail-rule" />
          </div>
          <div className="project-detail-results-grid">
            {project.metrics.map((m, i) => (
              <div className={`project-detail-stat ${m.feature ? 'feature' : ''}`} key={i}>
                <div className="value">{m.value}</div>
                <div className="label">{m.label}</div>
                {m.sub && <div className="sub">{m.sub}</div>}
              </div>
            ))}
          </div>

          {hasNotes && (
            <div className="project-detail-result-notes">
              <div className="project-detail-section-label">
                Also Worth Knowing
                <div className="project-detail-rule" />
              </div>
              <ul className="project-detail-notes-list">
                {project.notes.map((n, i) => (
                  <li key={i}>{n}</li>
                ))}
              </ul>
            </div>
          )}

          {project.context && <p className="project-detail-context">{project.context}</p>}
        </div>
      )}

      {project.gallery && (
        <div className="project-detail-section">
          <div className="project-detail-section-label">
            In The Wild
            <div className="project-detail-rule" />
          </div>
          <GallerySection gallery={project.gallery} />
        </div>
      )}

      {hasPress && (
        <div className="project-detail-section">
          <div className="project-detail-section-label">
            Media &amp; Coverage
            <div className="project-detail-rule" />
          </div>
          <div className="project-detail-press-list">
            {project.press.map((item, i) => (
              <div className="project-detail-press-item" key={i}>
                <div className="project-detail-press-outlet">{item.outlet}</div>
                <div className="project-detail-press-body">
                  <div className="project-detail-press-title">
                    {item.url ? (
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        {item.title}
                      </a>
                    ) : (
                      item.title
                    )}
                  </div>
                  <div className="project-detail-press-year">{item.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {hasLinks && (
        <div className="project-detail-section">
          <div className="project-detail-section-label">
            Links
            <div className="project-detail-rule" />
          </div>
          <div className="project-detail-links-row">
            {project.links.map((l, i) => (
              <a key={i} className="project-detail-link-btn" href={l.url} target="_blank" rel="noopener noreferrer">
                {l.label} →
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="project-detail-next" onClick={() => navigate(`/projects/${nextProject.slug}`)}>
        <img src={nextProject.cardImage} alt={nextProject.title} />
        <div className="project-detail-next-content">
          <span className="project-detail-kicker">Next Project</span>
          <h3>{nextProject.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
