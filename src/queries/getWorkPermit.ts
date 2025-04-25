// queries/getWorkPermit.ts
// Removed datoCMSClient and returns correctly typed placeholder

import { WorkPermit } from '../types';

export async function getWorkPermit(): Promise<WorkPermit> {
  return {
    visaStatus: '',
    expiryDate: new Date(), // ✅ returns a Date object, not a string
    summary: '',
    additionalInfo: ''
  };
}
