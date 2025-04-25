import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import { ProfileType } from '../types';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig: { [key in ProfileType]: any[] } = {
  recruiter: [
    { title: "Experience", imgSrc: "https://i.imgur.com/FlOzuuM.jpeg", icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Projects", imgSrc: "https://i.imgur.com/yuqjHNX.jpeg", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Skills", imgSrc: "https://i.imgur.com/HGO8LoP.jpeg", icon: <FaCode />, route: "/skills" },
    { title: "Recommendations", imgSrc: "https://i.imgur.com/TVk5aHw.jpeg", icon: <FaHandsHelping />, route: "/recommendations" },
    { title: "Certifications", imgSrc: "https://i.imgur.com/P6jrDs9.jpeg", icon: <FaCertificate />, route: "/certifications" },
    { title: "Contact Me", imgSrc: "https://i.imgur.com/ESulBMf.jpeg", icon: <FaEnvelope />, route: "/contact-me" }
  ],
  collaborator: [
    { title: "Experience", imgSrc: "https://i.imgur.com/FlOzuuM.jpeg", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Projects", imgSrc: "https://i.imgur.com/yuqjHNX.jpeg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Skills", imgSrc: "https://i.imgur.com/HGO8LoP.jpeg", route: "/skills", icon: <FaCode /> },
    { title: "Recommendations", imgSrc: "https://i.imgur.com/TVk5aHw.jpeg", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Certifications", imgSrc: "https://i.imgur.com/P6jrDs9.jpeg", route: "/certifications", icon: <FaCertificate /> },
    { title: "Contact Me", imgSrc: "https://i.imgur.com/ESulBMf.jpeg", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Experience", imgSrc: "https://i.imgur.com/FlOzuuM.jpeg", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Projects", imgSrc: "https://i.imgur.com/yuqjHNX.jpeg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Skills", imgSrc: "https://i.imgur.com/HGO8LoP.jpeg", route: "/skills", icon: <FaCode /> },
    { title: "Recommendations", imgSrc: "https://i.imgur.com/TVk5aHw.jpeg", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Certifications", imgSrc: "https://i.imgur.com/P6jrDs9.jpeg", route: "/certifications", icon: <FaCertificate /> },
    { title: "Contact Me", imgSrc: "https://i.imgur.com/ESulBMf.jpeg", route: "/contact-me", icon: <FaEnvelope /> }
  ],
  adventure: [
    { title: "Experience", imgSrc: "https://i.imgur.com/FlOzuuM.jpeg", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Projects", imgSrc: "https://i.imgur.com/yuqjHNX.jpeg", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Skills", imgSrc: "https://i.imgur.com/HGO8LoP.jpeg", route: "/skills", icon: <FaCode /> },
    { title: "Recommendations", imgSrc: "https://i.imgur.com/TVk5aHw.jpeg", route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Certifications", imgSrc: "https://i.imgur.com/P6jrDs9.jpeg", route: "/certifications", icon: <FaCertificate /> },
    { title: "Contact Me", imgSrc: "https://i.imgur.com/ESulBMf.jpeg", route: "/contact-me", icon: <FaEnvelope /> }
  ]
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
