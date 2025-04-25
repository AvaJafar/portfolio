// queries/getCertifications.ts
// Removed datoCMSClient-related code

import { Certification } from '../types';

// Placeholder mock data or you can connect to another data source later
export async function getCertifications(): Promise<Certification[]> {
  return [
    {
      title: 'Sample Certification',
      issuer: 'Issuer Name',
      issuedDate: '2025-01-01',
      link: 'https://example.com',
      iconName: 'certificate',
    },
  ];
}
