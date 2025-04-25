import React from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiCoursera } from 'react-icons/si';

const certifications = [
  {
    title: "Social Marketing Certification",
    issuer: "Hootsuite",
    issuedDate: "September 2021",
    icon: <SiCoursera />,
    credentialId: "39325322"
  },
  {
    title: "Hootsuite Platform Certification",
    issuer: "Hootsuite",
    issuedDate: "September 2021",
    icon: <SiCoursera />,
    credentialId: "39324158"
  },
  {
    title: "Fundamentals of Media Relations",
    issuer: "Muck Rack",
    issuedDate: "June 2024",
    icon: <SiCoursera />,
    link: "https://verify.skilljar.com/c/6bcd8pom9crb"
  },
  {
    title: "Bachelor of Science in Public Relations",
    issuer: "University of Florida",
    issuedDate: "May 2024",
    icon: <FaUniversity />
  }
];

const Certifications: React.FC = () => {
  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="certification-card"
            style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}
          >
            <div className="certification-content">
              <div className="certification-icon">{cert.icon}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && (
                <span className="issued-date">Issued {cert.issuedDate}</span>
              )}
              {cert.credentialId && (
                <p className="credential-id">
                  Credential ID: <strong>{cert.credentialId}</strong>
                </p>
              )}
            </div>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certification-link animated-icon"
              >
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
