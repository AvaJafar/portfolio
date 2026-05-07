import React from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
const ProfileBanner: React.FC = () => {
  const resumeLink = "/AvaJafarmadar_Resume.pdf"; // Place your resume PDF in public folder
  const linkedinLink = "https://www.linkedin.com/in/avajafarmadar/";
  const headline = "Digital Brand Strategist";
  const profileSummary =
    "Ava Jafarmadar is a senior strategist who lives at the intersection of PR and digital, equally fluent in shaping a narrative and scaling it. She leads brand and content strategy for global talent and category-defining companies, building the kind of work that earns the headline and the algorithm. With a foundation in earned media and a command of social, creative, and culture, she brings a rare full-stack perspective: she can identify the story, build the plan, direct the execution, and measure what moved. Always five steps ahead, rarely playing it safe, and never, ever off-brand.";
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
