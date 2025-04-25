// queries/getProfileBanner.ts
// Removed datoCMSClient-related code

import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  const data: ProfileBanner = {
    backgroundImage: {
      url: 'https://i.imgur.com/ZSUMtli.jpeg',
    },
    headline: 'Creative Strategist Bridging Brands & Culture',
    resumeLink: {
      url: 'https://example.com/resume.pdf',
    },
    linkedinLink: 'https://www.linkedin.com/in/avajafarmadar/',
    profileSummary: 'I build authentic communities, tell powerful stories, and connect generations through innovative ideas and partnerships.'
  };

  console.log("🚀 ~ getProfileBanner ~ data:", data);
  return data;
}
