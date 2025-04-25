import React from 'react';
import './Recommendations.css';

const Recommendations: React.FC = () => {
  return (
    <div className='timeline-container'>
      <div className="recommendation-card">
        <div className="recommendation-header" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <img src="https://i.imgur.com/XlnJPFB.jpeg" alt="Sianna Peal" className="profile-pic" />
          <div style={{ textAlign: 'center' }}>
            <h3>Sianna Peal</h3>
            <p>Associate Vice President Social & Content / HAVAS Red US</p>
            <p className="date">April 2025</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>"Ava has a truly creative mind and consistently delivers innovative, out-of-the-box campaign ideas tailored to each client’s unique needs. She also has a sharp understanding of how to maximize campaign impact even when working within tight constraints like limited budgets or content. This is a rare and valuable skill, also one of the many reasons I love having her on my team."</p>
        </div>
      </div>

      <div className="recommendation-card">
        <div className="recommendation-header" style={{ flexDirection: 'column', alignItems: 'center' }}>
          <img src="https://i.imgur.com/jVIhtab.jpeg" alt="Hector Mujica" className="profile-pic" />
          <div style={{ textAlign: 'center' }}>
            <h3>Hector Mujica</h3>
            <p>Head of Americas Philanthropy / Google</p>
            <p className="date">January 2025</p>
          </div>
        </div>
        <div className="recommendation-body">
          <p>"Ava’s ability to balance bold ideas with structure makes her an incredible asset to any team. She’s organized, strategic, and knows how to rally people around a shared vision. Whether she’s leading a brainstorm or managing the details behind the scenes, Ava’s energy sets the tone. You can feel it in the room—and you see it in the results."</p>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
