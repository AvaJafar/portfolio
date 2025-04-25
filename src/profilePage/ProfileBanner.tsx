import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';

const ProfileBanner: React.FC = () => {
  const resumeLink = "/AvaJafarmadar_Resume.pdf"; // Place your resume PDF in public folder
  const linkedinLink = "https://www.linkedin.com/in/avajafarmadar/";
  const headline = "Creative Strategist";
  const profileSummary =
    "Ava Jafarmadar is a PR powerhouse meets poetic soul—the kind of communicator who can land a headline by creating culturally significant moments, throw a sold-out launch party, and still find time to catch a Tuesday night improv show in Manhattan. She’s got a strategy mind and a storyteller's heart, blending Gen Z intuition with agency-grade polish. Whether she’s collaborating with a cross-functional team or finding the next unexpected collaboration, Ava brings intention, creativity, and just the right amount of edge. Always five steps ahead, rarely playing it safe—and never, ever off-brand.";

  const handlePlayClick = () => {
    window.open(resumeLink, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(linkedinLink, '_blank');
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">{headline}</h1>
        <p className="banner-description">{profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
