import React, { useState } from 'react';
import './Projects.css';

interface ProjectCard {
  title: string;
  shortDescription: React.ReactNode;
  image: string;
  link?: string;
  details?: string[];
  gallery?: { src: string; caption: string }[];
}

const linkStyle: React.CSSProperties = {
  color: '#e50914',
  textDecoration: 'underline',
  fontWeight: 600
};

const projects: ProjectCard[] = [
  {
    title: 'Megan Thee Stallion x NBC Olympics x YouTube',
    shortDescription: (
      <>
        A flagship cross-platform moment marking NBC and YouTube's first major Olympics partnership, anchored by Megan Thee Stallion. I cross-collaborated on concept with the brand team, directed styling, production, and crew, built the shot list and slotted it into the content calendar, reviewed contracts, made real-time edits alongside creative, and led native publishing and cross-platform amplification. Watch the long-form YouTube{' '}
        <a href="https://www.youtube.com/watch?v=zDhTLXSlbpI" target="_blank" rel="noopener noreferrer" style={linkStyle}>here</a>.
      </>
    ),
    image: 'https://i.imgur.com/OnP81WL.png',
    link: 'https://www.instagram.com/p/DVBqCw7kdU2/?hl=en&img_index=1',
    details: [
      "19 short-form YouTube videos",
      "4 long-form YouTube videos",
      "15 in-feed Instagram posts (outside deliverables)",
      "6 TikToks (outside deliverables)",
      "10 posts on X",
      "Anchor IG post: 978K likes, 3,715 comments"
    ],
    gallery: [
      { src: 'https://i.imgur.com/OnP81WL.png', caption: 'Instagram rollout (978K likes, 3,715 comments)' }
    ]
  },
  {
    title: 'Chicas Divertidas Brand Transformation',
    shortDescription: (
      <>
        Repositioned Megan Thee Stallion's tequila brand Chicas Divertidas from a graphic-heavy ad account into a lifestyle, culturally relevant brand that lives where its audience already is. Built two distinct content pillars: talent-led moments that capitalize on Megan's cultural pull, and brand-owned storytelling that holds the account's identity in moments without talent. Examples of talent-led work:{' '}
        <a href="https://www.instagram.com/p/DVhRnijDsBy/" target="_blank" rel="noopener noreferrer" style={linkStyle}>post one</a>{' '}and{' '}
        <a href="https://www.instagram.com/p/DWUJZ1wEXb9/" target="_blank" rel="noopener noreferrer" style={linkStyle}>post two</a>. Examples of brand-owned work:{' '}
        <a href="https://www.instagram.com/p/DXZ5gQ9Ey5s/" target="_blank" rel="noopener noreferrer" style={linkStyle}>post one</a>{' '}and{' '}
        <a href="https://www.instagram.com/p/DWM9UKEEz4L/" target="_blank" rel="noopener noreferrer" style={linkStyle}>post two</a>. The shift scaled the account from 68K to 88.8K followers in 3 months (+31%) while driving both awareness and measurable sales lift, turning the account into a community, not a billboard.
      </>
    ),
    image: 'https://i.imgur.com/Bq5Wfn5.png',
    link: 'https://www.instagram.com/p/DVhRnijDsBy/',
    gallery: [
      { src: 'https://i.imgur.com/Bq5Wfn5.png', caption: 'New brand direction: lifestyle and culture-first' }
    ]
  },
  {
    title: 'Megan Thee Stallion x Moulin Rouge Broadway',
    shortDescription:
      "A trend-led social rollout for Megan's Moulin Rouge Broadway moment, built around tying a viral sound to her appearance. The lowest-production asset of the entire campaign delivered the highest reach and engagement, hitting 3.3M views and 630K likes. A reminder that cultural instinct often outperforms polish.",
    image: 'https://i.imgur.com/F5ptySG.jpeg',
    link: 'https://www.tiktok.com/@theestallion/video/7620875586902314253?lang=en',
    gallery: [
      { src: 'https://i.imgur.com/F5ptySG.jpeg', caption: 'TikTok rollout: 3.3M views, 630K likes' }
    ]
  },
  {
    title: 'Ordo x Squishmallow',
    shortDescription: (
      <>
        To introduce UK-based oral care brand Ordo to the U.S. market, I pitched and led the concept for a Squishmallows-branded NYC pop-up, merging fandom with family-friendly utility to spark cultural traction. The activation, paired with a partnership with America's ToothFairy, generated buzz, drove purpose-led engagement, and helped Ordo break into the U.S. market with heart and hype. The strategy delivered real category share: Ordo now makes up more than 45% of{' '}
        <a href="https://www.inc.com/jennifer-conrad/cvs-hopes-its-new-ai-will-be-just-what-doctor-ordered.html" target="_blank" rel="noopener noreferrer" style={linkStyle}>CVS</a>'s children's oral care category despite entering the U.S. market just last fall.
      </>
    ),
    image: 'https://i.imgur.com/REuEgZB.png',
    link: 'https://www.inc.com/annabel-burba/how-a-collaboration-with-squishmallows-helped-this-brand-gain-serious-market-share-fast/91176614',
    gallery: [
      { src: "https://i.imgur.com/vOPorM5.png", caption: "Influencer and press invite" },
      { src: "https://i.imgur.com/vGuRjID.png", caption: "$1 off donated to America's Tooth Fairy" },
      { src: "https://i.imgur.com/uVCkfYf.jpeg", caption: "Created layout concept" },
      { src: "https://i.imgur.com/NWJzck6.jpeg", caption: "Created layout concept" },
      { src: "https://i.imgur.com/dFCM45Q.jpeg", caption: "Created layout concept" },
      { src: "https://i.imgur.com/aHuJoj0.png", caption: "Targeted outlets" }
    ]
  },
  {
    title: 'Victoria Secret PINK',
    shortDescription:
      "I helped led the execution of a strategic Valentine's Day collaboration between PINK and Van Leeuwen, transforming the NYC scoop shop into a pink takeover. Designed to position PINK to their target audience consumers through cultural touchpoints they already love, the activation blended experiential marketing with retail theater—driving brand affinity, foot traffic, and social engagement at a key moment for seasonal retail.",
    image: 'https://i.imgur.com/OBnCNKi.png',
    link: 'https://www.victoriassecret.com/us/vs/vsinsider/events/youre-invited-pink-van-leeuwen',
    gallery: [
      { src: "https://i.imgur.com/X54vQyA.png", caption: "PINK x Van Leeuwen takeover" }
    ]
  },
  {
    title: 'Rosalynn Carter Institute for Caregivers',
    shortDescription:
      "RCI champions the health and resilience of America's 105 million caregivers. I led strategic communications to elevate their national profile, drive policy engagement, and strengthen their stake in public conversations on caregiving.",
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
      "Built foundational materials linking NESsT's work to real-world impact...",
      "Created steady drumbeat of interviews in top impact outlets...",
      "Planned storytelling-led press trip to Brazil for funders and press...",
      "Secured awards including FLII Ignite and ESG Investing recognition..."
    ]
  }
];

const Projects: React.FC = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState('');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [galleryIndexMap, setGalleryIndexMap] = useState<{ [key: number]: number }>({});

  const PASSWORD = 'project123';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setAuthenticated(true);
    } else {
      alert('Incorrect password.');
    }
  };

  if (!authenticated) {
    return (
      <div className="projects-container" style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Enter password to view projects</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            style={{
              padding: '0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '0.5rem',
              fontSize: '1rem'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#e50914',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

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
                    {index < 3 ? 'View Post' : index < 5 ? 'Article Link' : 'View More'}
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
