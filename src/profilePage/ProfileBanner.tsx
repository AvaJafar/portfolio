import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
const ProfileBanner: React.FC = () => {
  const resumeLink = "/AvaJafarmadar_Resume.pdf"; // Place your resume PDF in public folder
  const linkedinLink = "https://www.linkedin.com/in/avajafarmadar/";
  const handlePlayClick = () => {
    window.open(resumeLink, '_blank');
  };
  const handleLinkedinClick = () => {
    window.open(linkedinLink, '_blank');
  };
  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id="headline">Strategist</h1>
        <p className="banner-description">
          Strategist who helps brands and individuals define what they stand for, what they have to say,
          and why people should care.
        </p>
        <p className="banner-description">
          My foundation in public relations taught me to start with research. I dig into what makes a
          brand distinct and use that insight to refine its identity and develop content pillars that
          guide its social presence. I have an eye for emerging trends and know when to build on one and
          when to introduce an original idea the brand can own and its audience can get behind.
        </p>
        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};
export default ProfileBanner;
