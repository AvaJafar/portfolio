// queries/getContactMe.ts
// Removed datoCMSClient-related code

import { ContactMe } from '../types';

// Placeholder mock data
export async function getContactMe(): Promise<ContactMe> {
  return {
    profilePicture: {
      url: 'https://i.imgur.com/ZSUMtli.jpeg'
    },
    name: 'Ava Jafarmadar',
    title: 'Creative Strategist',
    summary: 'Creative strategist bridging brands and culture.',
    companyUniversity: 'University of Florida',
    linkedinLink: 'https://www.linkedin.com/in/avajafarmadar/',
    email: 'ava.jafarmadar@gmail.com',
    phoneNumber: '(954) 854-5626'
  };
}
