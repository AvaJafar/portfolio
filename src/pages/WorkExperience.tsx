import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
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
    dateRange: 'January 2025 – Present'
  },
  {
    timelineType: 'work',
    name: 'CollabxCollab',
    title: 'Freelance Creative Strategist',
    location: 'New York, NY',
    dateRange: 'April 2025 – January 2026'
  },
  {
    timelineType: 'work',
    name: 'Milk & Honey PR (now Attention Comms)',
    title: 'Senior Account Executive | Account Executive',
    location: 'New York, NY',
    dateRange: 'August 2024 – January 2026'
  },
  {
    timelineType: 'work',
    name: 'Baobab ESG',
    title: 'Freelance Social Media Coordinator',
    location: 'Remote',
    dateRange: 'June 2023 – July 2024'
  },
  {
    timelineType: 'work',
    name: 'Century Structures',
    title: 'Project Coordinator',
    location: 'Hollywood, FL',
    dateRange: 'September 2023 – January 2024'
  },
  {
    timelineType: 'work',
    name: 'Kappa Delta Sorority',
    title: 'Director of Diversity and Inclusion',
    location: 'Gainesville, FL',
    dateRange: 'August 2020 – May 2023'
  },
  {
    timelineType: 'work',
    name: 'Kaleidoscopic Labs',
    title: 'Founder',
    location: 'Miami, FL',
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

const TimelineEntry: React.FC<{ item: TimelineItem }> = ({ item }) => {
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
      {item.summaryPoints && item.summaryPoints.length > 0 && (
        <ul>
          {item.summaryPoints.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
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
