import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';
import { ProfileType } from '../types';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig: { [key in ProfileType]: { title: string; imgSrc: string; link: string }[] } = {
  recruiter: [
    { title: "Music", imgSrc: "https://i.imgur.com/otBlKg9.jpeg", link: "/music" },
    { title: "Reading", imgSrc: "https://i.imgur.com/Ft9LSiJ.jpeg", link: "/reading" },
    { title: "Happy Place", imgSrc: "https://i.imgur.com/ZSUMtli.jpeg", link: "/happy-place" },
    { title: "Contact Me", imgSrc: "https://i.imgur.com/ESulBMf.jpeg", link: "/contact-me" }
  ],
  collaborator: [
    { title: "Music", imgSrc: "https://i.imgur.com/otBlKg9.jpeg", link: "/music" },
    { title: "Reading", imgSrc: "https://i.imgur.com/Ft9LSiJ.jpeg", link: "/reading" },
    { title: "Happy Place", imgSrc: "https://i.imgur.com/ZSUMtli.jpeg", link: "/happy-place" },
    { title: "Contact Me", imgSrc: "https://i.imgur.com/ESulBMf.jpeg", link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: "https://i.imgur.com/Ft9LSiJ.jpeg", link: "/reading" },
    { title: "Happy Place", imgSrc: "https://i.imgur.com/ZSUMtli.jpeg", link: "/happy-place" },
    { title: "Contact Me", imgSrc: "https://i.imgur.com/ESulBMf.jpeg", link: "/contact-me" }
  ],
  adventure: [
    { title: "Music", imgSrc: "https://i.imgur.com/otBlKg9.jpeg", link: "/music" },
    { title: "Reading", imgSrc: "https://i.imgur.com/Ft9LSiJ.jpeg", link: "/reading" },
    { title: "Happy Place", imgSrc: "https://i.imgur.com/ZSUMtli.jpeg", link: "/happy-place" },
    { title: "Contact Me", imgSrc: "https://i.imgur.com/ESulBMf.jpeg", link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
