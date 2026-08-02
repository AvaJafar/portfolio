import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import {
  FaStar as StarIcon,
  FaChevronDown
} from 'react-icons/fa';

import './WorkExperience.css';

interface TimelineItem {
  timelineType: 'work' | 'education';
  name: string;
  title: string;
  location?: string;
  summaryPoints?: string[];
  dateRange: string;
}

const timelineData: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Roc Nation',
    title: 'Digital Marketing & Strategy Manager',
    location: 'New York, NY',
    dateRange: 'January 2026 – Present',
    summaryPoints: [
      'Own social and content strategy for Megan Thee Stallion across Instagram, TikTok, YouTube, X, Facebook, and Threads, reaching a combined audience of 75M+.',
      'Lead integrated digital strategy across Megan’s artist, commercial, and philanthropic portfolio, including Hot Girl Swim with Walmart, Chicas Divertidas, and the Pete & Thomas Foundation.',
      'Manage an external agency team of 10 and align artist management, PR, creative, partnerships, product, and retail teams from briefing through launch and optimization.',
      'Grew Chicas Divertidas’ Instagram audience from 68K to 91.4K followers in four months through culture-led storytelling, creator content, live moments, and fandom insights.',
      'Directed a real-time content opportunity around Megan’s surprise appearance at Cardi B’s show, generating more than 1.7M views while supporting a same-night brand promotion.'
    ]
  },
  {
    timelineType: 'work',
    name: 'The Public Notifier',
    title: 'Co-Founder',
    location: 'New York, NY',
    dateRange: 'February 2026 – Present',
    summaryPoints: [
      'Co-founded a B2B compliance platform that simplifies public notification workflows for real estate approval processes.',
      'Own brand positioning, go-to-market strategy, customer discovery, and business development.',
      'Translate complex technical and regulatory requirements into clear messaging for developers, municipal staff, and land use attorneys.'
    ]
  },
  {
    timelineType: 'work',
    name: 'CollabxCollab',
    title: 'Creative Strategist, Contract',
    location: 'New York, NY',
    dateRange: 'April 2025 – January 2026',
    summaryPoints: [
      'Developed brand partnership strategy for Victoria’s Secret PINK using cultural and audience insights to identify relevant communities, creators, and collaboration opportunities.',
      'Created integrated campaign frameworks spanning creative concepts, creator partnerships, social-first storytelling, experiential extensions, and platform-native activation.',
      'Translated consumer behavior, cultural trends, and brand objectives into strategic insights and distinct creative territories.',
      'Built visual-first client decks that turned research and strategy into clear campaign narratives, creative recommendations, and actionable launch plans.'
    ]
  },
  {
    timelineType: 'work',
    name: 'Milk & Honey PR, now Attention Comms',
    title: 'Senior Account Executive | Account Executive',
    location: 'New York, NY',
    dateRange: 'August 2024 – January 2026',
    summaryPoints: [
      'Led integrated communications programs across consumer and technology accounts, advising clients on positioning, earned media, executive visibility, social strategy, and reputation.',
      'Developed press and launch strategies for Evernote and Airtime, translating product news and cultural insights into messaging, media angles, and targeted outreach.',
      'Managed client relationships and cross-functional account teams, overseeing priorities, campaign execution, deliverables, and performance reporting.',
      'Developed executive thought-leadership narratives, op-eds, podcast pitches, briefing materials, and social content through founder and executive story-mining sessions.',
      'Spearheaded new-business pitches and RFP responses that contributed to an approximately 72% win rate.'
    ]
  },
  {
    timelineType: 'work',
    name: 'Baobab ESG',
    title: 'Freelance Marketing Operations',
    location: 'Remote',
    dateRange: 'June 2023 – July 2024',
    summaryPoints: [
      'Ran end-to-end marketing for an early-stage technology marketplace connecting consumers with ESG-certified brands.',
      'Owned content strategy, editorial planning, copywriting, design direction, and performance reporting as the sole marketer reporting directly to the founders.'
    ]
  },
  {
    timelineType: 'work',
    name: 'Century Structures',
    title: 'Project Coordinator',
    location: 'Hollywood, FL',
    dateRange: 'September 2023 – January 2024',
    summaryPoints: [
      'Coordinated project timelines, documentation, and communications across internal teams, vendors, and external stakeholders.',
      'Supported day-to-day project operations by tracking deliverables, organizing materials, and helping teams meet key deadlines.'
    ]
  },
  {
    timelineType: 'work',
    name: 'Kappa Delta Sorority',
    title: 'Director of Diversity and Inclusion',
    location: 'Gainesville, FL',
    dateRange: 'August 2020 – May 2023',
    summaryPoints: [
      'Led diversity and inclusion initiatives designed to strengthen belonging, representation, and cultural awareness across the organization.',
      'Developed educational programming, facilitated conversations, and collaborated with leadership on inclusive member experiences.'
    ]
  },
  {
    timelineType: 'work',
    name: 'Kaleidoscopic Labs',
    title: 'Founder',
    location: 'Miami, FL',
    dateRange: 'November 2018 – February 2020',
    summaryPoints: [
      'Founded and developed an early-stage creative business, overseeing brand strategy, marketing, operations, and customer relationships.',
      'Built the brand identity and managed day-to-day execution from concept development through promotion and delivery.'
    ]
  },
  {
    timelineType: 'education',
    name: 'University of Florida',
    title: 'Bachelor of Science, Public Relations',
    location: 'Gainesville, FL',
    dateRange: 'August 2019 – May 2023',
    summaryPoints: [
      'Graduated Magna Cum Laude with a 3.8 cumulative GPA.',
      'Concentration in Event Management.'
    ]
  }
];

const TimelineEntry: React.FC<{ item: TimelineItem }> = ({
  item
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasSummaryPoints =
    Boolean(item.summaryPoints?.length);

  const detailsId = `${item.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')}-details`;

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${item.timelineType}`}
      contentStyle={{
        background: '#f2f2f2',
        color: '#000'
      }}
      contentArrowStyle={{
        borderRight: '7px solid #f2f2f2'
      }}
      dateClassName="custom-date"
      date={item.dateRange}
      iconStyle={{
        background:
          item.timelineType === 'work'
            ? '#e50914'
            : '#999',
        color: '#fff'
      }}
      icon={
        item.timelineType === 'work'
          ? <WorkIcon />
          : <SchoolIcon />
      }
    >
      <h3 className="vertical-timeline-element-title">
        {item.title}
      </h3>

      <h4 className="vertical-timeline-element-subtitle">
        {item.name}
      </h4>

      {item.location && (
        <p className="experience-location">
          <strong>Location:</strong> {item.location}
        </p>
      )}

      {hasSummaryPoints && (
        <>
          <button
            type="button"
            className="experience-toggle"
            onClick={() =>
              setIsOpen((currentState) => !currentState)
            }
            aria-expanded={isOpen}
            aria-controls={detailsId}
          >
            <span>
              {isOpen
                ? 'Hide experience'
                : 'View experience'}
            </span>

            <FaChevronDown
              className={`experience-chevron ${
                isOpen ? 'open' : ''
              }`}
              aria-hidden="true"
            />
          </button>

          {isOpen && (
            <ul
              id={detailsId}
              className="experience-details"
            >
              {item.summaryPoints?.map(
                (point, index) => (
                  <li key={`${item.name}-${index}`}>
                    {point}
                  </li>
                )
              )}
            </ul>
          )}
        </>
      )}
    </VerticalTimelineElement>
  );
};

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">
          Work Experience & Education
        </h2>
      </div>

      <VerticalTimeline>
        {timelineData.map((item) => (
          <TimelineEntry
            key={`${item.name}-${item.dateRange}`}
            item={item}
          />
        ))}

        <VerticalTimelineElement
          iconStyle={{
            background: '#16cc52',
            color: '#fff'
          }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
