import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
const ProfileBanner: React.FC = () => {
  const resumeLink = "/AvaJafarmadar_Resume.pdf"; // Place your resume PDF in public folder
  const linkedinLink = "https://www.linkedin.com/in/avajafarmadar/";
  const headline = "Brand Strategist";
  const profileSummary =
    "Brand strategist who helps brands figure out what they stand for, what they have to say, and why people should care. I've set platform strategy for a global recording artist, built brand partnership strategy behind a national retail launch, and positioned tech and B2B products for audiences that didn't understand them yet. Different categories, same job: find the human truth, turn it into a point of view, and show people why it matters.";
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
