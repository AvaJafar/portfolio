import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true);
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <h1
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '64px',
          color: '#e50914',
          fontWeight: 'normal',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          textAlign: 'center',
          textShadow: '0 2px 6px rgba(0, 0, 0, 0.5)',
          transform: 'scaleY(1.1)',
          margin: 0,
          whiteSpace: 'nowrap',
        }}
      >
        AVA JAFARMADAR
      </h1>
    </div>
  );
};

export default NetflixTitle;
