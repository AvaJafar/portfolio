import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { ProjectItem } from './data';
import './TitleCard.css';

interface TitleCardProps {
  project: ProjectItem;
  index?: number;
}

const TitleCard: React.FC<TitleCardProps> = ({ project, index = 0 }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const images = project.previewImages.length > 0 ? project.previewImages : [project.posterImage];

  useEffect(() => {
    if (hovered && images.length > 1) {
      intervalRef.current = window.setInterval(() => {
        setActiveImage((prev) => (prev + 1) % images.length);
      }, 1500);
    }
    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [hovered, images.length]);

  const handleLeave = () => {
    setHovered(false);
    setActiveImage(0);
  };

  const goToDetail = () => navigate(`/projects/${project.slug}`);

  return (
    <div
      className="title-card"
      style={{ animationDelay: `${Math.min(index, 10) * 0.06}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      onClick={goToDetail}
    >
      <div className={`title-card-media ${hovered ? 'is-hovered' : ''}`}>
        {images.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt={project.title}
            className={`title-card-image ${i === activeImage ? 'visible' : ''}`}
          />
        ))}
        <div className="title-card-gradient" />
        <div className="title-card-genre-pill">{project.genres[0]}</div>
        <div className="title-card-body">
          <h3 className="title-card-title">{project.title}</h3>
          <p className="title-card-tagline">{project.tagline}</p>
          <div className="title-card-actions">
            <button
              className="title-card-btn primary"
              onClick={(e) => { e.stopPropagation(); goToDetail(); }}
            >
              <FaPlay /> View
            </button>
            <button
              className="title-card-btn secondary"
              aria-label="More info"
              onClick={(e) => { e.stopPropagation(); goToDetail(); }}
            >
              <FaInfoCircle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
