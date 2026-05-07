import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

const BULLET_LIMIT = 4;

const timelineData = [
  {
    timelineType: 'work',
    name: 'Roc Nation',
    title: 'Digital Marketing & Strategy Manager',
    location: 'New York, NY',
    summaryPoints: [
      'Lead daily social strategy and content execution for Megan Thee Stallion across Instagram, TikTok, YouTube, X, Facebook, and Threads, managing a combined audience of 944M+ and growing Instagram from 31.8M to 33M followers in 3 months.',
      "Scaled Chicas Divertidas Instagram from 68K to 88.8K followers in 3 months (+31%), turning Megan's tequila brand account into a culture-driven community through trend response, IRL moments, and creator-led storytelling.",
      "Produced and published reactive campaign content tied to Megan Thee Stallion's surprise appearance at Cardi B's show, generating 1.7M+ views and driving measurable lift for a same-night Chicas Divertidas promotion.",
      "Run social for Roc Nation's flagship channels (2M on IG), spotlighting artists, creators, and tastemakers.",
      'Led creator partnership for Frito-Lay x Megan Thee Stallion x Nickelback, overseeing concept development, influencer rollout, and cross-functional execution for a multi-platform campaign under tight legal and broadcast timelines.',
      'Owned social coverage of NBC x YouTube Olympics partnership: 54 platform-native assets across 5 channels in 5 days, capturing live moments and turning them into shareable, on-brand content in real time.',
      "Direct an external agency of 10 and 3 cross-functional partners across digital, PR, creative, management, and product to launch and scale Megan's brand portfolio: Hot Girl Swim (Walmart), Chicas Divertidas, and the Pete & Thomas Foundation.",
      'Direct full content production: shoot, edit, on-camera talent, BTS capture, event recaps, memes, and short-form video, working hands-on in CapCut, Premiere, and Adobe Suite.',
      'Used engagement and retention metrics to refine creative direction and campaign rollouts.',
      'Developed scalable social and content operations frameworks used across multiple teams to streamline onboarding, preserve institutional knowledge, and standardize creative workflows in a high-growth environment.'
    ],
    dateRange: 'January 2025 – Present'
  },
  {
    timelineType: 'work',
    name: 'CollabxCollab',
    title: 'Freelance Creative Strategist',
    location: 'New York, NY',
    summaryPoints: [
      "Lead brand partnership strategy for Fortune 500 clients including Victoria's Secret and Rockefeller Center, identifying culturally relevant niche communities and creators to amplify product launches and place brands in front of their actual target audience.",
      'Build 360 digital plans for each launch moment: brand and creator pairings, social-first content frameworks, IRL activation tie-ins, and platform-native rollout across IG, TikTok, and emerging channels.',
      'Translate cultural and audience insight into campaign concepts and visual-first pitch decks, driving ~30%+ engagement growth across activated moments.'
    ],
    dateRange: 'April 2025 – January 2026'
  },
  {
    timelineType: 'work',
    name: 'Milk & Honey PR (now Attention Comms)',
    title: 'Senior Account Executive | Account Executive',
    location: 'New York, NY',
    summaryPoints: [
      'Owned B2C social and B2B LinkedIn strategy for clients, building brand narratives that drove audience growth and strengthened brand reputation.',
      'Led storytelling and narrative development for brands, turning complex subject matter into accessible content across social, press, and owned channels.',
      'Produced multimedia content end-to-end: video scripts, op-eds, podcast pitches, infographics, newsletters, and pitch decks, shipping each story to the right audience on the right platform.',
      'Led messaging and narrative for client launches, campaigns, and reports, directing strategy, creative, and client teams to keep voice and story consistent across every touchpoint.',
      'Spearheaded new business pitches contributing to ~67% win rate; secured 3–5 top-tier placements per client per quarter.'
    ],
    dateRange: 'August 2024 – January 2026'
  },
  {
    timelineType: 'work',
    name: 'Baobab ESG',
    title: 'Freelance Social Media Coordinator',
    location: 'Remote',
    summaryPoints: [
      'Produced and published platform-native content across LinkedIn, Instagram, and X, translating dense ESG and impact-investing subject matter into accessible, scroll-stopping social-first storytelling.',
      'Ran content calendar, copywriting, design direction, and analytics in a fully autonomous capacity, shipping consistent output and reporting performance directly to founders.'
    ],
    dateRange: 'June 2023 – July 2024'
  },
  {
    timelineType: 'work',
    name: 'Century Structures',
    title: 'Project Coordinator',
    location: 'Hollywood, FL',
    summaryPoints: [
      'Served as the primary liaison between stakeholders, ensuring seamless communication and project alignment.',
      'Oversaw logistics for a $3M project, managing timelines, tracking deliverables, and providing key updates.',
      'Negotiated vendor contracts, led meetings, and proactively addressed project delays to maintain efficiency.'
    ],
    dateRange: 'September 2023 – January 2024'
  },
  {
    timelineType: 'work',
    name: 'Kappa Delta Sorority',
    title: 'Director of Diversity and Inclusion',
    location: 'Gainesville, FL',
    summaryPoints: [
      'Collaborated with student organizations and nonprofits like Planned Parenthood to amplify DE&I initiatives.',
      'Identified and addressed diversity gaps with new grant opportunities and diversified marketing strategies.',
      'Organized events, attracting 400+ attendees and presented issues in front of the entire member class weekly.'
    ],
    dateRange: 'August 2020 – May 2023'
  },
  {
    timelineType: 'work',
    name: 'Kaleidoscopic Labs',
    title: 'Founder',
    location: 'Miami, FL',
    summaryPoints: [
      'Initiated partnerships with 30 diverse musicians and artists to enhance project creativity and outreach.',
      'Led event marketing campaigns, attracting 2,000+ individuals and provided on-site support at events.'
    ],
    dateRange: 'November 2018 – February 2020'
  },
  {
    timelineType: 'education',
    name: 'University of Florida',
    title: 'Bachelor of Science, Public Relations',
    summaryPoints: ['Cumulative GPA: 3.8 | Honors: Magna Cum Laude'],
    dateRange: 'August 2019 – May 2023'
  }
];

const TimelineEntry: React.FC<{ item: typeof timelineData[0] }> = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const needsToggle = item.summaryPoints.length > BULLET_LIMIT;
  const visiblePoints = expanded || !needsToggle
    ? item.summaryPoints
    : item.summaryPoints.slice(0, BULLET_LIMIT);

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${item.timelineType}`}
      contentStyle={{ background: '#f2f2f2', color: '#000' }}
      contentArrowStyle={{ borderRight: '7px solid #f2f2f2' }}
      dateClassName="custom-date"
      date={item.dateRange}
      iconStyle={{ background: item.timelineType === 'work' ? '#e50914' : '#999', color: '#fff' }}
      icon={item.timelineType === 'work' ? <WorkIcon /> : <SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">{item.title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
      {item.location && <p><strong>Location:</strong> {item.location}</p>}
      <ul>
        {visiblePoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
      {needsToggle && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            background: 'none',
            border: 'none',
            color: '#e50914',
            cursor: 'pointer',
            fontWeight: 'bold',
            padding: '4px 0',
            fontSize: '0.95em'
          }}
        >
          {expanded ? 'Show less ▲' : '... Show more ▼'}
        </button>
      )}
    </VerticalTimelineElement>
  );
};

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">Work Experience & Education</h2>
      </div>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <TimelineEntry key={index} item={item} />
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: '#16cc52', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
