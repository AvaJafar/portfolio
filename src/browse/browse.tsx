import React, { useState } from 'react';
import '../Projects.css';

interface ProjectCard {
  title: string;
  shortDescription: string;
  image: string;
  link?: string;
  details?: string[];
}

const projects: ProjectCard[] = [
  {
    title: 'Ordo x Squishmallow',
    shortDescription:
      "To introduce UK-based oral care brand Ordo to the U.S. market, I pitched and led the concept for a Squishmallows-branded NYC pop-up—merging fandom with family-friendly utility to spark cultural traction. The activation, paired with a partnership with America’s ToothFairy, generated buzz, drove purpose-led engagement, and helped Ordo break into the U.S. market with heart and hype.",
    image: 'https://i.imgur.com/REuEgZB.png',
    link: 'https://www.inc.com/annabel-burba/how-a-collaboration-with-squishmallows-helped-this-brand-gain-serious-market-share-fast/91176614'
  },
  {
    title: 'Victoria Secret PINK',
    shortDescription:
      "I helped led the execution of a strategic Valentine’s Day collaboration between PINK and Van Leeuwen, transforming the NYC scoop shop into a pink takeover. Designed to position PINK to their target audience consumers through cultural touchpoints they already love, the activation blended experiential marketing with retail theater—driving brand affinity, foot traffic, and social engagement at a key moment for seasonal retail.",
    image: 'https://i.imgur.com/OBnCNKi.png',
    link: 'https://www.victoriassecret.com/us/vs/vsinsider/events/youre-invited-pink-van-leeuwen'
  },
  {
    title: 'Rosalynn Carter Institute for Caregivers',
    shortDescription:
      "RCI champions the health and resilience of America’s 105 million caregivers. I led strategic communications to elevate their national profile, drive policy engagement, and strengthen their stake in public conversations on caregiving.",
    image: 'https://i.imgur.com/gKXfK55.jpeg',
    details: [
      "Shifted the conversation around caregiving through targeted press efforts and partnerships. Our announcement with Pivotal (Melinda French Gates’ org) landed in 259 articles, engaged 121K+ readers, and reached 1.39B people via People, Yahoo Finance, and more.",
      "Redefined narratives with the launch of Profiles of Caregiving, positioning RCI as a data-driven thought leader.",
      "Amplified voices through strategic podcast placements on Happy Healthy Caregiver, Love Doesn’t Pay the Bills, and Confessions of a Reluctant Caregiver.",
      "Navigated a merger with The Carter Center, ensuring a seamless public narrative that honored RCI’s legacy while preparing for a new chapter.",
      "Boosted share of voice by 24% over major players like Caring Across Generations and Caregiver Action Network.",
      "Drove social engagement across channels with an average LinkedIn engagement rate of 13.8%, and Facebook impressions exceeding 74K/month.",
      "Supported by marquee partnerships with Duke University, Bradley Cooper, and Pivotal to build lasting cultural credibility.",
      "Secured placement for RCI at major events like VIVE, RISE, SHRM, and APHA to connect with health equity leaders and advocates."
    ]
  },
  {
    title: 'NESsT',
    shortDescription:
      "NESsT is an impact investing organization that builds and finances mission-driven enterprises creating quality jobs for underrepresented communities while sustaining the planet. I helped position the organization for strategic growth and investor visibility through storytelling that balanced financial rigor with purpose.",
    image: 'https://i.imgur.com/XjzT19B.jpeg',
    details: [
      "Built foundational materials, connecting NESsT’s portfolio work to real-world impact with clarity and transparency.",
      "Created a steady drumbeat of interviews in ImpactAlpha, Pioneers Post, and Carbon Pulse, helping elevate NESsT’s leadership on racial equity, climate justice, and impact funding across Latin America and Eastern Europe.",
      "Planned a storytelling-led press trip to Brazil for funders and journalists, spotlighting local entrepreneurs, driving momentum for COP30, and setting the stage for a 360 series of intimate, transparent, visual, social, and earned media roll out.",
      "Secured awards: finalist for the FLII Ignite Award and ESG Investing’s Best ESG Investment Fund – Emerging Markets."
    ]
  }
];

const Projects: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpand(index)}
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  {index < 2 ? 'Article Link' : 'View More'}
                </a>
              )}
              {expandedIndex === index && project.details && (
                <div className="project-more-details">
                  <h4>Project Objectives & Results</h4>
                  <ul>
                    {project.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
