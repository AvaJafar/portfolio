import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';

const timelineData = [
  {
    timelineType: 'work',
    name: 'Collab x Collab',
    title: 'Independent Creative Strategist',
    location: 'New York City, NY',
    summaryPoints: [
      'Conceptualized unique brand collabs to drive Gen Z engagement.',
      'Built creative strategies for three major 2026 campaigns for a leading youth fashion brand.',
      'Designed visual-first pitch decks and researched cultural trends to shape brand positioning.',
      'Ideated multi-touchpoint pop-up activations to deepen brand connection.'
    ],
    dateRange: 'April 2025 – Present'
  },
  {
    timelineType: 'work',
    name: 'Milk & Honey',
    title: 'Client Executive',
    location: 'New York City, NY',
    summaryPoints: [
      'Supported the creation of new revenue proposals and participated in presentation and pitch meetings.',
      'Served as the primary point of contact for clients across five portfolios.',
      'Initiated and led agency brainstorms, developing multi-touchpoint campaigns.',
      'Drafted a range of written materials, including press releases, blogs, features, and briefing documents.',
      'Developed and managed project trackers to ensure efficient progress and execution.'
    ],
    dateRange: 'August 2024 – April 2025'
  },
  {
    timelineType: 'work',
    name: 'Bemor°',
    title: 'Event Producer & Brand Strategist',
    location: 'New York City, NY',
    summaryPoints: [
      'Led event coordination for brand launch, attracting 500+ attendees and generating a digital reach of 34 million.',
      'Executed guerrilla marketing and social content, partnering with influential external organizations.',
      'Managed activations, timelines, real-time troubleshooting, and seamless operations.',
      'Monitored event budgets and logistics, ensuring financial alignment.',
      'Managed an eight-person team, overseeing the creative and strategic development process.'
    ],
    dateRange: 'June 2024 – April 2025'
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
    name: 'SUSTY',
    title: 'Marketing Intern',
    location: 'Remote',
    summaryPoints: [
      'Acted as the first point of contact for proofing and editing work drafted by team.',
      'Diversified company partnerships by scouting, conducting outreach, and pitching to brands daily.'
    ],
    dateRange: 'December 2021 – May 2023'
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
    title: 'B.S. in Public Relations',
    summaryPoints: ['Cumulative GPA: 3.74 | Honors: Magna Cum Laude'],
    dateRange: 'August 2019 – May 2023'
  }
];

const WorkExperience: React.FC = () => {
  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">Work Experience & Education</h2>
      </div>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
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
              {item.summaryPoints.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
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
