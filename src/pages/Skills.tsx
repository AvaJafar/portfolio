import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillsData = {
    "Professional Skills": [
      "Client Relations",
      "Brand Strategy",
      "Research",
      "Project Management",
      "Creative Direction",
      "Event Planning",
      "Public Speaking"
    ],
    "Industry Tools": [
      "Muck Rack",
      "Teams",
      "Slack",
      "Meltwater",
      "Hootsuite",
      "Canva",
      "Figma",
      "Notion",
      "Google Alerts",
      "Monday.com",
      "Asana",
      "Linktree"
    ],
    "Computer Software": [
      "Microsoft Office",
      "Adobe Suite",
      "Full Google Suite",
      "Node.js"
    ]
  };

  return (
    <div className="skills-container">
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <h3 className="skill-name">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
