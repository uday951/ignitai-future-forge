import { JobOpportunity } from '../jobTypes';
import { wiproAssociate2026 } from './wiproAssociate2026';
import{deloitteExecutiveAssistantSupport2026}from'./deloitteExecutiveAssistantSupport2026';
import { googleSwe2026 } from './google-swe-2026';
import { accentureAse2026 } from './accenture-ase-2026';
import { microsoftSwe2026 } from './microsoft-swe-2026';
import { cognizantPat2026 } from './cognizant-pat-2026';
import { amazonSde12026 } from './amazon-sde1-2026';
import { googleSweIntern2026 } from './google-swe-intern-2026';
import { googleStudentResearcher2026 } from './google-student-researcher-2026';
import { microsoftSweIntern2026 } from './microsoft-swe-intern-2026';
import { amazonSdeIntern2026 } from './amazon-sde-intern-2026';
import { adobeSweIntern2026 } from './adobe-swe-intern-2026';
import { nvidiaSweIntern2026 } from './nvidia-swe-intern-2026';
import { tcsNqtDrive2026 } from './tcs-nqt-drive-2026';
import { wiproNthDrive2026 } from './wipro-nth-drive-2026';
import { infosysSeDrive2026 } from './infosys-se-drive-2026';
import { capgeminiExcellerator2026 } from './capgemini-excellerator-2026';
import { hcltechGetDrive2026 } from './hcltech-get-drive-2026';
import { isroScientistSc2026 } from './isro-scientist-sc-2026';
import { drdoScientistB2026 } from './drdo-scientist-b-2026';
import { nicScientificOfficer2026 } from './nic-scientific-officer-2026';
import { barcScientificOfficer2026 } from './barc-scientific-officer-2026';
import { sbiSoItManager2026 } from './sbi-so-it-manager-2026';
import { drdoInternship2026 } from './drdo-internship-2026';
import { eyDataAnalyst2026 } from './ey-data-analyst-2026';

export const jobsData: JobOpportunity[] = [
  wiproAssociate2026,
  deloitteExecutiveAssistantSupport2026,
  googleSwe2026,
  accentureAse2026,
  microsoftSwe2026,
  cognizantPat2026,
  amazonSde12026,
  eyDataAnalyst2026,
  googleSweIntern2026,
  googleStudentResearcher2026,
  microsoftSweIntern2026,
  amazonSdeIntern2026,
  adobeSweIntern2026,
  nvidiaSweIntern2026,
  drdoInternship2026,
  tcsNqtDrive2026,
  wiproNthDrive2026,
  infosysSeDrive2026,
  capgeminiExcellerator2026,
  hcltechGetDrive2026,
  isroScientistSc2026,
  drdoScientistB2026,
  nicScientificOfficer2026,
  barcScientificOfficer2026,
  sbiSoItManager2026
];

export const getJobBySlug = (slug: string): JobOpportunity | undefined => {
  return jobsData.find(job => job.slug === slug);
};

export const getJobsByCategory = (category: string): JobOpportunity[] => {
  return jobsData.filter(job => job.category === category);
};
