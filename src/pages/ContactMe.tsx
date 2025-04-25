import React from 'react';
import './ContactMe.css';
import { FaEnvelope, FaPhoneAlt, FaCoffee, FaLinkedin } from 'react-icons/fa';

const ContactMe: React.FC = () => {
  const userData = {
    name: "Ava Jafarmadar",
    title: "Creative Strategist",
    summary: "Creative strategist bridging brands and culture. I build authentic communities, tell powerful stories, and connect generations through innovative ideas and partnerships.",
    companyUniversity: (
      <>
        University of Florida <span role="img" aria-label="alligator">🐊</span> <strong>Go Gators!</strong>
      </>
    ),
    linkedinLink: "https://www.linkedin.com/in/avajafarmadar/",
    email: "ava.jafarmadar@gmail.com",
    phoneNumber: "(954) 854 5626",
    profilePicture: "https://i.imgur.com/8mp9hKY.jpeg"
  };

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={userData.profilePicture} alt={userData.name} className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>

      <div className="contact-header">
        <p>I'm always up for a chat! Feel free to reach out.</p>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
        <div className="contact-fun">
          <p>Or catch up over a coffee ☕</p>
          <FaCoffee className="coffee-icon" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
