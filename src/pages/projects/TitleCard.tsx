import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectItem } from './data';
import './TitleCard.css';

interface TitleCardProps {
  project: ProjectItem;
  index?: number;
}

const TitleCard: React.FC<TitleCardProps> = ({ project, index = 0 }) => {
  const navigate = useNavigate();
  const goToDetail = () => navigate(`/projects/${project.slug}`);

  return (
    <div
      className="title-card"
      style={{ animationDelay: `${Math.min(index, 10) * 0.05}s` }}
      onClick={goToDetail}
    >
      <img src={project.cardImage} alt={project.title} />
      <div className="title-card-scrim" />
      <div className="title-card-tag">{project.category}</div>
      <div className="title-card-body">
        <h3 className="title-card-title">{project.title}</h3>
        <div className="title-card-meta">
          {project.org} — {project.role}
        </div>
        <div className="title-card-watch">
          <span className="play">▶</span>
          <span className="ul">Watch Now</span>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
