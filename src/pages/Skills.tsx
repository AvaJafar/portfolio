import React from 'react';
import './Skills.css';
const Skills: React.FC = () => {
  const skillsData = {
    "Strategy & Leadership": [
      "Brand Strategy",
      "Social Media Strategy",
      "Content Strategy",
      "Creative Direction",
      "Narrative Development",
      "Campaign Management",
      "Cross-Functional Leadership",
      "Client Relations",
      "Project Management",
      "Public Speaking"
    ],
    "AI & Automation": [
      "Claude",
      "ChatGPT",
      "Zapier",
      "Airtable",
      "AI-Assisted Content Workflows",
      "Prompt Engineering",
      "Content Operations"
    ],
    "Content & Production": [
      "CapCut",
      "Adobe Premiere",
      "Final Cut Pro",
      "After Effects",
      "Photoshop",
      "Lightroom",
      "Adobe Creative Suite",
      "Figma",
      "Canva"
    ],
    "Platforms": [
      "Instagram",
      "TikTok",
      "YouTube",
      "LinkedIn",
      "X",
      "Threads",
      "Facebook",
      "Substack"
    ],
    "Certifications": [
      "Meta Certified Creative Strategy Professional",
      "Hootsuite Certified Social Marketer"
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
