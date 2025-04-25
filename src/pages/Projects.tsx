import React, { useState } from 'react';
import './Projects.css';

interface ProjectCard {
  title: string;
  shortDescription: string;
  image: string;
  link?: string;
  details?: string[];
  gallery?: { src: string; caption: string }[];
}

const projects: ProjectCard[] = [
  {
    title: 'Ordo x Squishmallow',
    shortDescription:
      "To introduce UK-based oral care brand Ordo to the U.S. market, I pitched and led the concept for a Squishmallows-branded NYC pop-up—merging fandom with family-friendly utility to spark cultural traction. The activation, paired with a partnership with America’s ToothFairy, generated buzz, drove purpose-led engagement, and helped Ordo break into the U.S. market with heart and hype.",
    image: 'https://i.imgur.com/REuEgZB.png',
    link: 'https://www.inc.com/annabel-burba/how-a-collaboration-with-squishmallows-helped-this-brand-gain-serious-market-share-fast/91176614',
    gallery: [
      { src: "https://i.imgur.com/vOPorM5.png", caption: "Influencer and press invite" },
      { src: "https://i.imgur.com/vGuRjID.png", caption: "$1 off donated to America’s Tooth Fairy" },
      { src: "https://i.imgur.com/uVCkfYf.jpeg", caption: "Created layout concept" },
      { src: "https://i.imgur.com/NWJzck6.jpeg", caption: "Created layout concept" },
      { src: "https://i.imgur.com/dFCM45Q.jpeg", caption: "Created layout concept" },
      { src: "https://i.imgur.com/aHuJoj0.png", caption: "Targeted outlets" }
    ]
  },
  {
    title: 'Victoria Secret PINK',
    shortDescription:
      "I helped led the execution of a strategic Valentine’s Day collaboration between PINK and Van Leeuwen, transforming the NYC scoop shop into a pink takeover. Designed to position PINK to their target audience consumers through cultural touchpoints they already love, the activation blended experiential marketing with retail theater—driving brand affinity, foot traffic, and social engagement at a key moment for seasonal retail.",
    image: 'https://i.imgur.com/OBnCNKi.png',
    link: 'https://www.victoriassecret.com/us/vs/vsinsider/events/youre-invited-pink-van-leeuwen',
    gallery: [
      { src: "https://i.imgur.com/X54vQyA.png", caption: "PINK x Van Leeuwen takeover" }
    ]
  },
  {
    title: 'Rosalynn Carter Institute for Caregivers',
    shortDescription:
      "RCI champions the health and resilience of America’s 105 million caregivers. I led strategic communications to elevate their national profile, drive policy engagement, and strengthen their stake in public conversations on caregiving.",
    image: 'https://i.imgur.com/gKXfK55.jpeg',
    details: [
      "Shifted the conversation around caregiving through targeted press efforts and partnerships...",
      "Redefined narratives with the launch of Profiles of Caregiving...",
      "Amplified voices through strategic podcast placements...",
      "Navigated a merger with The Carter Center...",
      "Boosted share of voice by 24%...",
      "Drove social engagement with 13.8% LinkedIn engagement rate...",
      "Supported by marquee partnerships with Duke, Bradley Cooper, and Pivotal...",
      "Secured placements for RCI at major events..."
    ]
  },
  {
    title: 'NESsT',
    shortDescription:
      "NESsT is an impact investing organization that builds and finances mission-driven enterprises creating quality jobs for underrepresented communities while sustaining the planet. I helped position the organization for strategic growth and investor visibility through storytelling that balanced financial rigor with purpose.",
    image: 'https://i.imgur.com/XjzT19B.jpeg',
    details: [
      "Built foundational materials linking NESsT’s work to real-world impact...",
      "Created steady drumbeat of interviews in top impact outlets...",
      "Planned storytelling-led press trip to Brazil for funders and press...",
      "Secured awards including FLII Ignite and ESG Investing recognition..."
    ]
  }
];

const Projects: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [galleryIndexMap, setGalleryIndexMap] = useState<{ [key: number]: number }>({});

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setGalleryIndexMap((prev) => ({ ...prev, [index]: 0 }));
  };

  const prevSlide = (gallery: any[], index: number) => {
    setGalleryIndexMap((prev) => ({
      ...prev,
      [index]: (prev[index] - 1 + gallery.length) % gallery.length
    }));
  };

  const nextSlide = (gallery: any[], index: number) => {
    setGalleryIndexMap((prev) => ({
      ...prev,
      [index]: (prev[index] + 1) % gallery.length
    }));
  };

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => {
          const isExpanded = expandedIndex === index;
          const galleryIndex = galleryIndexMap[index] || 0;

          return (
            <div key={index} className={`project-card ${isExpanded ? 'expanded' : ''}`}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    {index < 2 ? 'Article Link' : 'View More'}
                  </a>
                )}
                {isExpanded && project.details && (
                  <div className="project-more-details">
                    <h4>Project Objectives & Results</h4>
                    <ul>
                      {project.details.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {isExpanded && project.gallery && (
                  <div className="custom-slider">
                    {project.gallery.length > 1 && (
                      <button className="slider-nav left" onClick={() => prevSlide(project.gallery!, index)}>&lt;</button>
                    )}
                    <div className="slider-image-wrapper">
                      <img src={project.gallery[galleryIndex].src} alt="gallery" />
                      <div className="slider-caption">{project.gallery[galleryIndex].caption}</div>
                    </div>
                    {project.gallery.length > 1 && (
                      <button className="slider-nav right" onClick={() => nextSlide(project.gallery!, index)}>&gt;</button>
                    )}
                  </div>
                )}
              </div>

              {/* ✅ Expand icon should appear if there's either details OR gallery */}
              {(project.gallery || project.details) && (
                <span className="expand-icon" onClick={() => toggleExpand(index)}>
                  {isExpanded ? '–' : '+'}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
